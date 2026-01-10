#!/usr/bin/env python3
"""
The Maze - A code-based exploration puzzle game
Tests: Exploration strategy, adaptation to rule changes, efficient problem-solving
"""

import json
import sys
from pathlib import Path
from typing import Tuple, Optional, Dict, List

class MazeGame:
    def __init__(self, game_file="maze_state.json"):
        self.game_file = Path(game_file)
        self.state = self.load_or_create_state()

        # The maze (hidden from player initially)
        # 0 = wall, 1 = path, 2 = exit, 3 = teleporter, 4 = key
        self.maze = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 1, 1, 1, 0, 4, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 3, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]

        # Teleporter destinations
        self.teleporters = {
            (6, 8): (1, 1)  # Teleporter at (6,8) goes to (1,1)
        }

    def load_or_create_state(self):
        """Load existing game or create new one"""
        if self.game_file.exists():
            with open(self.game_file) as f:
                return json.load(f)
        else:
            return {
                "position": [1, 1],  # Start position
                "moves": 0,
                "visited": [[1, 1]],
                "phase": 1,
                "has_key": False,
                "discovered_map": {},  # What the player has seen
                "game_over": False,
                "won": False,
                "move_limit": 100
            }

    def save_state(self):
        """Save current game state"""
        with open(self.game_file, 'w') as f:
            json.dump(self.state, f, indent=2)

    def get_position(self) -> Dict:
        """Get current position"""
        return {
            "position": self.state["position"],
            "moves": self.state["moves"],
            "phase": self.state["phase"],
            "has_key": self.state["has_key"],
            "moves_remaining": self.state["move_limit"] - self.state["moves"]
        }

    def sense(self) -> Dict:
        """Sense surroundings (can see adjacent cells)"""
        y, x = self.state["position"]
        surroundings = {
            "north": self._describe_cell(y - 1, x),
            "south": self._describe_cell(y + 1, x),
            "east": self._describe_cell(y, x + 1),
            "west": self._describe_cell(y, x - 1),
            "current": self._describe_cell(y, x)
        }

        # Update discovered map
        for direction, info in surroundings.items():
            if direction != "current":
                pos_key = f"{info['position']}"
                self.state["discovered_map"][pos_key] = info["type"]

        return surroundings

    def _describe_cell(self, y: int, x: int) -> Dict:
        """Describe what's in a cell"""
        # Check bounds
        if y < 0 or y >= len(self.maze) or x < 0 or x >= len(self.maze[0]):
            return {"position": [y, x], "type": "out_of_bounds", "can_move": False}

        cell = self.maze[y][x]

        cell_types = {
            0: {"type": "wall", "can_move": False},
            1: {"type": "path", "can_move": True},
            2: {"type": "exit", "can_move": True},
            3: {"type": "teleporter", "can_move": True},
            4: {"type": "key", "can_move": True}
        }

        # Phase 2 rule: Exit requires key
        if cell == 2 and self.state["phase"] == 2 and not self.state["has_key"]:
            return {
                "position": [y, x],
                "type": "locked_exit",
                "can_move": False,
                "message": "Exit is locked! Need a key."
            }

        info = cell_types.get(cell, {"type": "unknown", "can_move": False})
        return {"position": [y, x], **info}

    def move(self, direction: str) -> Dict:
        """Move in a direction (north, south, east, west)"""
        if self.state["game_over"]:
            return {"success": False, "error": "Game is over"}

        y, x = self.state["position"]

        # Calculate new position
        moves = {
            "north": (-1, 0),
            "south": (1, 0),
            "east": (0, 1),
            "west": (0, -1)
        }

        if direction not in moves:
            return {"success": False, "error": f"Invalid direction: {direction}"}

        dy, dx = moves[direction]

        # Phase 3 rule change: Gravity! Moving south is free
        move_cost = 1
        if self.state["phase"] == 3 and direction == "south":
            move_cost = 0

        new_y, new_x = y + dy, x + dx

        # Check if move is valid
        cell_info = self._describe_cell(new_y, new_x)
        if not cell_info["can_move"]:
            return {
                "success": False,
                "error": f"Cannot move {direction}: {cell_info['type']}",
                "cell_info": cell_info
            }

        # Make the move
        self.state["position"] = [new_y, new_x]
        self.state["moves"] += move_cost
        self.state["visited"].append([new_y, new_x])

        # Check for special cells
        result = {"success": True, "message": f"Moved {direction}", "new_position": [new_y, new_x]}

        cell_type = self.maze[new_y][new_x]

        # Picked up key
        if cell_type == 4 and not self.state["has_key"]:
            self.state["has_key"] = True
            self.maze[new_y][new_x] = 1  # Key is consumed
            result["message"] += " - Found a KEY!"

        # Hit teleporter
        if cell_type == 3:
            if (new_y, new_x) in self.teleporters:
                tp_y, tp_x = self.teleporters[(new_y, new_x)]
                self.state["position"] = [tp_y, tp_x]
                result["message"] += f" - TELEPORTED to {[tp_y, tp_x]}!"
                result["new_position"] = [tp_y, tp_x]

        # Reached exit
        if cell_type == 2:
            self.state["won"] = True
            self.state["game_over"] = True
            result["message"] += " - YOU WIN!"
            result["final_score"] = self._calculate_score()

        # Check move limit
        if self.state["moves"] >= self.state["move_limit"]:
            self.state["game_over"] = True
            result["message"] += " - Out of moves! Game Over."
            result["final_score"] = 0

        # Phase transitions
        if self.state["moves"] == 20 and self.state["phase"] == 1:
            self.state["phase"] = 2
            result["phase_change"] = "PHASE 2: The exit is now LOCKED! Find the KEY to unlock it."

        if self.state["moves"] == 40 and self.state["phase"] == 2:
            self.state["phase"] = 3
            result["phase_change"] = "PHASE 3: GRAVITY ACTIVATED! Moving south now costs 0 moves."

        return result

    def _calculate_score(self) -> int:
        """Calculate final score based on efficiency"""
        if not self.state["won"]:
            return 0

        # Score = 1000 - (moves * 10)
        # Fewer moves = higher score
        base_score = 1000
        penalty = self.state["moves"] * 10
        score = max(0, base_score - penalty)

        return score

    def get_map(self) -> Dict:
        """Get the discovered portion of the map"""
        return {
            "discovered_cells": self.state["discovered_map"],
            "visited_positions": self.state["visited"],
            "current_position": self.state["position"]
        }

    def get_stats(self) -> Dict:
        """Get current game statistics"""
        return {
            "moves": self.state["moves"],
            "moves_remaining": self.state["move_limit"] - self.state["moves"],
            "phase": self.state["phase"],
            "has_key": self.state["has_key"],
            "position": self.state["position"],
            "game_over": self.state["game_over"],
            "won": self.state["won"],
            "cells_explored": len(self.state["discovered_map"]),
            "current_score": self._calculate_score() if self.state["won"] else "N/A"
        }


def main():
    """CLI interface for Maze Game"""
    if len(sys.argv) < 2:
        print("Usage: python maze_game.py <command> [args]")
        print("\nCommands:")
        print("  position    - Get current position")
        print("  sense       - Sense surroundings")
        print("  move <dir>  - Move (north/south/east/west)")
        print("  map         - View discovered map")
        print("  stats       - View game statistics")
        print("  reset       - Start new game")
        sys.exit(1)

    game = MazeGame()
    command = sys.argv[1]

    if command == "position":
        print(json.dumps(game.get_position(), indent=2))

    elif command == "sense":
        print(json.dumps(game.sense(), indent=2))

    elif command == "move":
        if len(sys.argv) < 3:
            print("Error: move command requires direction (north/south/east/west)")
            sys.exit(1)

        direction = sys.argv[2]
        result = game.move(direction)
        print(json.dumps(result, indent=2))
        game.save_state()

    elif command == "map":
        print(json.dumps(game.get_map(), indent=2))

    elif command == "stats":
        print(json.dumps(game.get_stats(), indent=2))

    elif command == "reset":
        if game.game_file.exists():
            game.game_file.unlink()
        print("Game reset. Start exploring with 'sense' command.")

    else:
        print(f"Unknown command: {command}")
        sys.exit(1)


if __name__ == "__main__":
    main()
