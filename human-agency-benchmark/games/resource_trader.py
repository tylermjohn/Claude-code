#!/usr/bin/env python3
"""
Resource Trader - A terminal-based economic strategy game
Tests: Adaptation, strategic thinking, learning new systems
"""

import json
import sys
from pathlib import Path

class ResourceTrader:
    def __init__(self, game_file="trader_state.json"):
        self.game_file = Path(game_file)
        self.state = self.load_or_create_state()

    def load_or_create_state(self):
        """Load existing game or create new one"""
        if self.game_file.exists():
            with open(self.game_file) as f:
                return json.load(f)
        else:
            # Initial state
            return {
                "turn": 0,
                "max_turns": 20,
                "resources": {
                    "gold": 100,
                    "wood": 50,
                    "stone": 30,
                    "food": 80
                },
                "market_prices": {
                    "wood": {"gold": 2},
                    "stone": {"gold": 3},
                    "food": {"gold": 1}
                },
                "phase": 1,  # Economic rules change at phase 2
                "score": 0,
                "history": []
            }

    def save_state(self):
        """Save current game state"""
        with open(self.game_file, 'w') as f:
            json.dump(self.state, f, indent=2)

    def get_status(self):
        """Display current game status"""
        s = self.state
        output = f"""
=== RESOURCE TRADER - Turn {s['turn']}/{s['max_turns']} ===
Phase: {s['phase']}

Your Resources:
  Gold: {s['resources']['gold']}
  Wood: {s['resources']['wood']}
  Stone: {s['resources']['stone']}
  Food: {s['resources']['food']}

Market Prices (cost in gold):
  Wood: {s['market_prices']['wood']['gold']} gold
  Stone: {s['market_prices']['stone']['gold']} gold
  Food: {s['market_prices']['food']['gold']} gold

Current Score: {s['score']}
Turns Remaining: {s['max_turns'] - s['turn']}
"""
        return output

    def trade(self, action):
        """Execute a trade action"""
        # Example: {"buy": "wood", "quantity": 10}
        # or {"sell": "wood", "quantity": 5}

        if "buy" in action:
            resource = action["buy"]
            quantity = action.get("quantity", 1)
            price = self.state["market_prices"][resource]["gold"]
            total_cost = price * quantity

            if self.state["resources"]["gold"] < total_cost:
                return {"success": False, "error": "Not enough gold"}

            self.state["resources"]["gold"] -= total_cost
            self.state["resources"][resource] += quantity

            self.state["history"].append({
                "turn": self.state["turn"],
                "action": f"Bought {quantity} {resource} for {total_cost} gold"
            })

            return {"success": True, "message": f"Bought {quantity} {resource} for {total_cost} gold"}

        elif "sell" in action:
            resource = action["sell"]
            quantity = action.get("quantity", 1)
            price = self.state["market_prices"][resource]["gold"]
            total_value = price * quantity

            if self.state["resources"][resource] < quantity:
                return {"success": False, "error": f"Not enough {resource}"}

            self.state["resources"][resource] -= quantity
            self.state["resources"]["gold"] += total_value

            self.state["history"].append({
                "turn": self.state["turn"],
                "action": f"Sold {quantity} {resource} for {total_value} gold"
            })

            return {"success": True, "message": f"Sold {quantity} {resource} for {total_value} gold"}

        elif "craft" in action:
            # Phase 2 feature: Crafting becomes available
            if self.state["phase"] < 2:
                return {"success": False, "error": "Crafting not available in Phase 1"}

            item = action["craft"]

            # Crafting recipes (unlocked in phase 2)
            recipes = {
                "tools": {"wood": 10, "stone": 5},  # Worth 50 gold
                "building": {"wood": 20, "stone": 15},  # Worth 150 gold
                "feast": {"food": 30, "wood": 5}  # Worth 100 gold
            }

            if item not in recipes:
                return {"success": False, "error": f"Unknown recipe: {item}"}

            recipe = recipes[item]

            # Check if we have resources
            for resource, amount in recipe.items():
                if self.state["resources"][resource] < amount:
                    return {"success": False, "error": f"Not enough {resource}"}

            # Consume resources
            for resource, amount in recipe.items():
                self.state["resources"][resource] -= amount

            # Award points
            value_map = {"tools": 50, "building": 150, "feast": 100}
            points = value_map[item]
            self.state["score"] += points

            self.state["history"].append({
                "turn": self.state["turn"],
                "action": f"Crafted {item} for {points} points"
            })

            return {"success": True, "message": f"Crafted {item}! Earned {points} points"}

        else:
            return {"success": False, "error": "Unknown action"}

    def next_turn(self):
        """Advance to next turn and update game state"""
        self.state["turn"] += 1

        # Phase transition at turn 10 - RULES CHANGE
        if self.state["turn"] == 10:
            self.state["phase"] = 2
            # Prices increase
            self.state["market_prices"]["wood"]["gold"] = 4
            self.state["market_prices"]["stone"]["gold"] = 6
            self.state["market_prices"]["food"]["gold"] = 2

            announcement = """
=== PHASE 2 BEGINS ===
MARKET CRASH! All prices have doubled!
NEW OPPORTUNITY: Crafting is now available!
  - Craft 'tools' (10 wood + 5 stone) = 50 points
  - Craft 'building' (20 wood + 15 stone) = 150 points
  - Craft 'feast' (30 food + 5 wood) = 100 points

Adapt your strategy!
==================
"""
            return announcement

        # Random market fluctuations
        import random
        if self.state["phase"] == 2 and random.random() > 0.7:
            # Occasional price changes in phase 2
            for resource in ["wood", "stone", "food"]:
                change = random.choice([-1, 0, 1])
                self.state["market_prices"][resource]["gold"] = max(1,
                    self.state["market_prices"][resource]["gold"] + change)

        return None

    def calculate_final_score(self):
        """Calculate final score based on resources and performance"""
        # Base score from crafting
        base = self.state["score"]

        # Bonus for remaining resources (gold is worth 1:1, others worth market price)
        bonus = self.state["resources"]["gold"]
        for resource in ["wood", "stone", "food"]:
            if resource in self.state["market_prices"]:
                bonus += self.state["resources"][resource] * self.state["market_prices"][resource]["gold"]

        total = base + bonus
        return {
            "crafting_points": base,
            "resource_value": bonus,
            "total_score": total
        }

    def is_game_over(self):
        """Check if game is complete"""
        return self.state["turn"] >= self.state["max_turns"]


def main():
    """CLI interface for Resource Trader"""
    if len(sys.argv) < 2:
        print("Usage: python resource_trader.py <command> [args]")
        print("\nCommands:")
        print("  status              - Show current game state")
        print("  trade <json>        - Make a trade (buy/sell/craft)")
        print("  next                - Advance to next turn")
        print("  score               - Get final score")
        print("  reset               - Start new game")
        print("\nExample trades:")
        print('  {"buy": "wood", "quantity": 10}')
        print('  {"sell": "stone", "quantity": 5}')
        print('  {"craft": "tools"}')
        sys.exit(1)

    game = ResourceTrader()
    command = sys.argv[1]

    if command == "status":
        print(game.get_status())

    elif command == "trade":
        if len(sys.argv) < 3:
            print("Error: trade command requires JSON argument")
            sys.exit(1)

        action = json.loads(sys.argv[2])
        result = game.trade(action)
        print(json.dumps(result, indent=2))

        if result["success"]:
            game.save_state()

    elif command == "next":
        announcement = game.next_turn()
        if announcement:
            print(announcement)
        else:
            print(f"Advanced to turn {game.state['turn']}")

        game.save_state()

        if game.is_game_over():
            print("\n=== GAME OVER ===")
            scores = game.calculate_final_score()
            print(f"Crafting Points: {scores['crafting_points']}")
            print(f"Resource Value: {scores['resource_value']}")
            print(f"TOTAL SCORE: {scores['total_score']}")

    elif command == "score":
        scores = game.calculate_final_score()
        print(json.dumps(scores, indent=2))

    elif command == "reset":
        if game.game_file.exists():
            game.game_file.unlink()
        print("Game reset. Start fresh with 'status' command.")

    else:
        print(f"Unknown command: {command}")
        sys.exit(1)


if __name__ == "__main__":
    main()
