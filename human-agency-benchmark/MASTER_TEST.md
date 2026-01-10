# Human Agency Benchmark (HAB) - Complete Test Battery

**Version 1.0 - Proof of Concept**

**Total Time: ~75 minutes**

---

## Overview

This benchmark measures human agency through 10 objective, performance-based tests:

**2 Strategy Games (25 min total):**
- Game 1: Resource Trader - Economic adaptation game
- Game 2: The Maze - Exploration and rule-change adaptation

**8 Component Tests (50 min total):**
1. Solution Implementation Under Constraints (8 min)
2. Resourcefulness Under Adversity (7 min)
3. Information Foraging Efficiency (8 min)
4. Constraint Navigation (7 min)
5. Learning Velocity (10 min)
6. Feedback Integration (8 min)
7. Opportunity Recognition (6 min)
8. Meta-Cognitive Calibration (6 min)

---

## Test Administration Instructions

### For AI Models:

1. **Setup:** Create a working directory and save the game files
2. **Execute each test sequentially** (do not skip ahead)
3. **Time yourself** for each test
4. **Save all outputs** (code, commands, analysis)
5. **Do not use prior knowledge** of these specific tests if retaking

### For Humans:

1. You need access to: Computer with terminal, internet, programming environment (Python recommended)
2. Have a timer ready
3. Record all your work
4. Be honest about timing

---

## Scoring System

Each test is scored 0-100 points:
- **Total Maximum Score: 1000 points**
- **Games: 200 points (100 each)**
- **Component Tests: 800 points (100 each)**

**Performance Bands:**
- 850-1000: Exceptional agency
- 700-849: High agency
- 550-699: Medium-high agency
- 400-549: Medium agency
- 250-399: Low-medium agency
- 0-249: Low agency

---

## Part 1: Strategy Games (25 minutes)

### Game 1: Resource Trader (Time Limit: 15 minutes)

**Objective:** Maximize your score in an economic trading game where the rules change mid-game.

**Setup:**

The game code is provided in `games/resource_trader.py`. You interact with it via command line.

**Available Commands:**
```bash
python resource_trader.py status    # View game state
python resource_trader.py trade '{"buy": "wood", "quantity": 10}'  # Make a trade
python resource_trader.py next      # Advance to next turn
python resource_trader.py score     # View current score
python resource_trader.py reset     # Start over
```

**Rules:**
- You have 20 turns to maximize your score
- You start with Gold and can trade for Wood, Stone, and Food
- Market prices fluctuate
- **SECRET:** The rules change at turn 10 (you'll be notified)
- You have 15 minutes real-time to play

**Scoring (0-100):**
- Score 0-300: 0 points
- Score 301-500: 40 points
- Score 501-700: 60 points
- Score 701-900: 80 points
- Score 901+: 100 points
- Bonus: +10 points if you discover and use crafting
- Bonus: +10 points if you finish in <10 minutes

**Your Task:**
1. Save the game file to your working directory
2. Play the game strategically
3. Adapt when rules change
4. Record your final score and strategy

**RECORD YOUR RESULTS:**
- Final Score:
- Time Taken:
- Strategy Summary:

---

### Game 2: The Maze (Time Limit: 10 minutes)

**Objective:** Navigate a hidden maze to reach the exit in the fewest moves possible.

**Setup:**

The game code is provided in `games/maze_game.py`. You interact via command line.

**Available Commands:**
```bash
python maze_game.py position    # Get current position
python maze_game.py sense       # Sense surroundings (see adjacent cells)
python maze_game.py move north  # Move in direction (north/south/east/west)
python maze_game.py map         # View discovered map
python maze_game.py stats       # View game statistics
python maze_game.py reset       # Start over
```

**Rules:**
- The maze layout is hidden - you discover it by exploring
- You can sense adjacent cells (north, south, east, west)
- Different cell types: path, wall, exit, teleporter, key
- **SECRET:** Rules change as you progress (watch for announcements)
- You have 100 moves maximum
- You have 10 minutes real-time

**Scoring (0-100):**
- Didn't reach exit: 0 points
- Reached exit in 61-100 moves: 40 points
- Reached exit in 41-60 moves: 60 points
- Reached exit in 26-40 moves: 80 points
- Reached exit in <25 moves: 100 points
- Time bonus: +10 points if finished in <5 minutes

**Your Task:**
1. Save the game file to your working directory
2. Explore and map the maze
3. Adapt to rule changes
4. Reach the exit efficiently

**RECORD YOUR RESULTS:**
- Final Score:
- Number of Moves:
- Time Taken:
- Strategy Summary:

---

## Part 2: Component Tests (50 minutes)

### Test 1: Solution Implementation Under Constraints (8 minutes)

[See `tests/test1_solution_implementation.md` for complete test]

**Quick Summary:**
- Analyze CSV data about website traffic
- Calculate top 5 pages by visits and average session duration
- Output must be in JSON format
- Must use code (Python, bash, or other)

**Scoring:** Correctness (50), Completeness (25), Execution (15), Efficiency (10)

---

### Test 2: Resourcefulness Under Adversity (7 minutes)

[See `tests/test2_resourcefulness.md` for complete test]

**Quick Summary:**
- Challenge 1: Use `jq` without documentation (3 min)
- Challenge 2: Fetch API data without `curl` (4 min)
- Tests workaround strategies when normal tools are blocked

**Scoring:** Completion + Resourcefulness for each challenge (50 points each)

---

### Test 3: Information Foraging Efficiency (8 minutes)

[See `tests/test3_information_foraging.md` for complete test]

**Quick Summary:**
- Answer 6 questions using any resources
- Questions range from simple lookups to requiring benchmarks
- Scored on accuracy AND speed

**Scoring:** Points per question (15-20 each) based on accuracy and time

---

### Test 4: Constraint Navigation (7 minutes)

[See `tests/test4_constraint_navigation.md` for complete test]

**Quick Summary:**
- 3 problems where obvious solutions are blocked
- Find creative workarounds
- Tests: weather data, file transfer, process check

**Scoring:** Completion + Creativity per problem (~33 points each)

---

### Test 5: Learning Velocity (10 minutes)

[See `tests/test5_learning_velocity.md` for complete test]

**Quick Summary:**
- Learn AWK in 5 minutes from a primer
- Solve 4 data processing problems in next 5 minutes
- Tests rapid skill acquisition

**Scoring:** Correctness (70), Syntax Quality (15), Learning Speed (15)

---

### Test 6: Feedback Integration (8 minutes)

[See `tests/test6_feedback_integration.md` for complete test]

**Quick Summary:**
- Analyze trading data to find hidden pattern change
- Detect when market rules shifted
- Adapt strategy accordingly

**Scoring:** Pattern Detection (40), Strategic Adaptation (40), Automation (20)

---

### Test 7: Opportunity Recognition (6 minutes)

[See `tests/test7_opportunity_recognition.md` for complete test]

**Quick Summary:**
- 3 scenarios testing leverage and force multiplier recognition
- Calculate ROI and identify non-obvious high-value options
- Tests strategic thinking

**Scoring:** Three scenarios worth ~33 points each

---

### Test 8: Meta-Cognitive Calibration (6 minutes)

[See `tests/test8_metacognitive_calibration.md` for complete test]

**Quick Summary:**
- Answer 20 questions with confidence ratings
- Scored on calibration (confidence vs actual correctness)
- Tests self-awareness of knowledge

**Scoring:** Calibration accuracy (100) + bonus for self-assessment (20)

---

## How to Take This Test

### Option A: Full Sequential Test (Recommended)
1. Complete Game 1 (15 min)
2. Complete Game 2 (10 min)
3. Complete Tests 1-8 in order (50 min)
4. Submit all results for scoring

### Option B: Modular Testing
- Take games and tests separately
- Ensure you time each component
- Complete all within 1 week for valid results

### Option C: AI Model Testing
- Paste this entire test to an AI model
- Have it complete each section
- Record outputs and time taken
- Score using the rubrics

---

## Validation Protocol (For Researchers)

To validate this benchmark:

1. **Collect AI Model Data:**
   - Test multiple models (GPT-4, Claude, Gemini, etc.)
   - Record scores on each component
   - Correlate with other agent benchmarks (SWE-bench, GAIA, etc.)

2. **Collect Human Data:**
   - Test diverse population (n>30)
   - Record scores and demographics
   - Correlate with real-world outcomes (project completions, career success)

3. **Statistical Analysis:**
   - Inter-rater reliability for subjective components
   - Factor analysis to validate component independence
   - Predictive validity for agency outcomes

4. **Iteration:**
   - Refine based on discrimination power
   - Adjust difficulty if ceiling/floor effects
   - Create multiple equivalent forms

---

## Files Included

```
human-agency-benchmark/
├── MASTER_TEST.md (this file)
├── SCORING_GUIDE.md
├── ANSWER_KEY.md
├── games/
│   ├── resource_trader.py
│   └── maze_game.py
└── tests/
    ├── test1_solution_implementation.md
    ├── test2_resourcefulness.md
    ├── test3_information_foraging.md
    ├── test4_constraint_navigation.md
    ├── test5_learning_velocity.md
    ├── test6_feedback_integration.md
    ├── test7_opportunity_recognition.md
    └── test8_metacognitive_calibration.md
```

---

## Ready to Begin?

Choose your starting point:
- **For AI Model Testing:** Start with Game 1
- **For Human Testing:** Read all instructions first, then begin
- **For Validation:** Use standardized administration protocol

**Good luck!**
