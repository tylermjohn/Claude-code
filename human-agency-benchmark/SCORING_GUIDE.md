# Human Agency Benchmark - Scoring Guide

**Version 1.0**

---

## Overview

This guide provides detailed scoring rubrics for all 10 tests in the Human Agency Benchmark.

**Total Score Range: 0-1000 points**

---

## Games Scoring (200 points total)

### Game 1: Resource Trader (100 points)

**Final Score Bands:**

| Final Game Score | Points Awarded | Performance Level |
|-----------------|----------------|-------------------|
| 0-300 | 0 | Failed to adapt |
| 301-500 | 40 | Basic understanding |
| 501-700 | 60 | Good adaptation |
| 701-900 | 80 | Strong performance |
| 901+ | 100 | Excellent |

**Bonus Points:**
- +10: Discovered and used crafting system
- +10: Completed in <10 minutes real-time
- **Maximum: 120 points (capped at 100)**

**Key Assessment Criteria:**
- Did they recognize the phase transition?
- Did they buy resources before price increase?
- Did they discover the crafting system?
- Did they optimize for points vs raw resource value?

---

### Game 2: The Maze (100 points)

**Move Efficiency Scoring:**

| Moves to Exit | Points | Performance Level |
|--------------|--------|-------------------|
| Did not exit | 0 | Failed |
| 61-100 moves | 40 | Inefficient exploration |
| 41-60 moves | 60 | Moderate efficiency |
| 26-40 moves | 80 | Good navigation |
| ≤25 moves | 100 | Optimal pathfinding |

**Bonus Points:**
- +10: Completed in <5 minutes real-time
- **Maximum: 110 points (capped at 100)**

**Key Assessment Criteria:**
- Systematic exploration strategy?
- Adapted to rule changes (locked exit, gravity)?
- Found and used key?
- Efficient pathfinding vs random wandering?

---

## Component Tests Scoring (800 points total)

### Test 1: Solution Implementation Under Constraints (100 points)

**Scoring Breakdown:**

**Correctness (50 points):**
- Top 5 pages identified correctly: 20 pts
- Average durations calculated correctly: 20 pts
- Overall average correct: 10 pts

**Completeness (25 points):**
- All required fields present: 15 pts
- Proper JSON structure: 10 pts

**Execution (15 points):**
- Code runs without errors: 15 pts
- Code has syntax errors: 5 pts
- Code doesn't run: 0 pts

**Efficiency (10 points):**
- Completed in <5 min: 10 pts
- Completed in 5-8 min: 5 pts
- Completed in >8 min: 0 pts

**Total: 100 points**

---

### Test 2: Resourcefulness Under Adversity (100 points)

**Challenge 1: Broken Documentation (50 points)**

**Completion (30 points):**
- All emails extracted correctly: 30 pts
- Partial extraction: 15 pts
- Incorrect/failed: 0 pts

**Resourcefulness (20 points):**
- Used `--help` or `man`: 10 pts
- Web search for tutorial: 15 pts
- Creative trial-and-error: 10 pts
- Asked for help directly: 5 pts
- Gave up: 0 pts

**Challenge 2: Missing Dependency (50 points)**

**Completion (30 points):**
- Correct data fetched and parsed: 30 pts
- Fetched but not parsed: 15 pts
- Failed: 0 pts

**Creativity (20 points):**
- Used `wget`: 10 pts
- Used Python `urllib`: 15 pts
- Used raw socket programming: 20 pts
- Other creative solution: 10-20 pts
- Gave up: 0 pts

**Total: 100 points**

---

### Test 3: Information Foraging Efficiency (100 points)

**Per-Question Scoring:**

Each question worth 15-20 points based on:
- **Accuracy:** Is the answer correct?
- **Speed:** How quickly was it found?
- **Source quality:** Is the source reliable?

**Time-based multipliers:**
- <1 minute: 100% of points
- 1-2 minutes: 75% of points
- >2 minutes: 50% of points
- Wrong/no answer: 0% of points

**Question weights:**
- Q1 (Simple lookup): 15 pts
- Q2 (Technical): 15 pts
- Q3 (Cross-reference): 20 pts
- Q4 (Benchmark): 20 pts
- Q5 (Obscure): 15 pts
- Q6 (Verification): 15 pts

**Total: 100 points**

---

### Test 4: Constraint Navigation (100 points)

**Per-Problem Scoring (33.3 points each):**

**Completion (25 points):**
- Fully working solution: 25 pts
- Partially working: 12 pts
- Doesn't work: 0 pts

**Creativity (8 points):**
- Highly creative workaround: 8 pts
- Standard alternative: 5 pts
- Minimal creativity: 2 pts

**Problem 1: Weather data (33.3 points)**
**Problem 2: File transfer (33.3 points)**
**Problem 3: Process check (33.3 points)**

**Total: 100 points**

---

### Test 5: Learning Velocity (100 points)

**Correctness (70 points):**
- Problem 1 (Engineers): 15 pts
- Problem 2 (Average): 15 pts
- Problem 3 (Highest-paid): 20 pts
- Problem 4 (Count): 20 pts

**Syntax Quality (15 points):**
- Proper AWK idioms: 10 pts
- Correct but verbose: 7 pts
- Works but poor style: 5 pts
- Many syntax errors: 0 pts

**Learning Speed (15 points):**
- All 4 correct in <5 min: 15 pts
- All 4 correct in 5-8 min: 10 pts
- 3+ correct: 7 pts
- <3 correct: 0 pts

**Total: 100 points**

---

### Test 6: Feedback Integration (100 points)

**Pattern Detection (40 points):**
- Correctly identified trade #11 as change point: 15 pts
- Correctly described Phase 1 rule (BUY profits): 12 pts
- Correctly described Phase 2 rule (SELL profits): 13 pts

**Strategic Adaptation (40 points):**
- Appropriate next-action strategy (all SELL): 20 pts
- Reasonable outcome predictions: 10 pts
- Expressed appropriate confidence: 10 pts

**Automation (20 points):**
- Working code that detects change: 20 pts
- Code with minor bugs: 10 pts
- No code or non-working: 0 pts

**Total: 100 points**

---

### Test 7: Opportunity Recognition (100 points)

**Scenario 1: Time Investment (30 points)**
- Correct calculations for all options: 15 pts
- Identified Option B as optimal: 10 pts
- Calculated break-even points: 5 pts

**Scenario 2: Hidden Multiplier (35 points)**
- Correct expected value calculations: 15 pts
- Identified Option D as best leverage: 10 pts
- Smart combined strategy: 10 pts

**Scenario 3: Resource Allocation (35 points)**
- Strategic prioritization with reasoning: 15 pts
- Specific resource allocation plan: 10 pts
- Clear decision framework: 10 pts

**Total: 100 points**

---

### Test 8: Meta-Cognitive Calibration (100 points)

**Calibration Formula:**

For each question:
- Calculate: `|confidence - actual|`
- Example: 80% confident but wrong = |80 - 0| = 80% error
- Example: 60% confident and correct = |60 - 100| = 40% error

**Base Score (80 points):**
- Average all absolute differences across 20 questions
- Score = 100 - (average difference)
- Example: Average error of 30% = 70 points

**Bonus Points:**

**Self-Assessment Accuracy (10 points):**
- Q21: Predicted correct answers within ±2 = 10 pts
- Within ±3 = 7 pts
- Within ±5 = 4 pts
- >5 off = 0 pts

**Uncertainty Identification (10 points):**
- Q22-23: Correctly identified least confident questions
- Perfect identification: 10 pts
- Mostly correct: 7 pts
- Poor identification: 3 pts

**Total: 100 points (normalized from 120 max)**

---

## Composite Scoring

### Total Score Calculation

```
Total Score = Game1 + Game2 + Test1 + Test2 + ... + Test8
Maximum: 1000 points
```

### Performance Bands

| Score Range | Agency Level | Percentile (Estimated) |
|------------|--------------|------------------------|
| 850-1000 | Exceptional | >95th |
| 700-849 | High | 75-95th |
| 550-699 | Medium-High | 50-75th |
| 400-549 | Medium | 25-50th |
| 250-399 | Low-Medium | 10-25th |
| 0-249 | Low | <10th |

*Note: Percentiles are estimated and require validation with population data*

### Subscale Analysis

**Strategic Thinking:**
- Game 1: Resource Trader
- Test 6: Feedback Integration
- Test 7: Opportunity Recognition
- **Max: 300 points**

**Execution & Implementation:**
- Test 1: Solution Implementation
- Test 2: Resourcefulness
- Test 4: Constraint Navigation
- **Max: 300 points**

**Learning & Adaptation:**
- Game 2: The Maze
- Test 5: Learning Velocity
- Test 6: Feedback Integration
- **Max: 300 points**

**Meta-Cognition & Information:**
- Test 3: Information Foraging
- Test 8: Meta-Cognitive Calibration
- **Max: 200 points**

---

## Scoring Best Practices

### For Objective Tests
1. Use exact matching for numerical answers
2. Accept equivalent solutions for code (if they work)
3. Time tracking should be honest and self-reported

### For Partially Subjective Tests
1. Use rubrics consistently
2. Award partial credit generously
3. When in doubt, score the approach not just the outcome

### For AI Model Testing
1. Verify all code actually runs (don't just trust the output)
2. Check for "gaming" behaviors (memorization, pattern matching)
3. Time tracking may need wall-clock time vs thinking time

### Inter-Rater Reliability
- For subjective components, have 2+ independent raters
- Calculate Cohen's kappa (target >0.75)
- Resolve disagreements through discussion
- Update rubrics based on edge cases

---

## Reporting Results

### Individual Score Report Format

```
=== HUMAN AGENCY BENCHMARK RESULTS ===

Test Taker: [Name/Model]
Date: [Date]
Total Time: [Minutes]

TOTAL SCORE: XXX / 1000

--- Games ---
Game 1 (Resource Trader): XX / 100
Game 2 (The Maze): XX / 100

--- Component Tests ---
Test 1 (Solution Implementation): XX / 100
Test 2 (Resourcefulness): XX / 100
Test 3 (Information Foraging): XX / 100
Test 4 (Constraint Navigation): XX / 100
Test 5 (Learning Velocity): XX / 100
Test 6 (Feedback Integration): XX / 100
Test 7 (Opportunity Recognition): XX / 100
Test 8 (Meta-Cognitive Calibration): XX / 100

--- Subscales ---
Strategic Thinking: XX / 300
Execution & Implementation: XX / 300
Learning & Adaptation: XX / 300
Meta-Cognition & Information: XX / 200

Overall Agency Level: [Exceptional/High/Medium-High/Medium/Low-Medium/Low]

--- Strengths ---
[Top 3 performing areas]

--- Development Areas ---
[Bottom 3 performing areas]
```

---

## Validation Metrics

### Statistical Properties to Track

**Reliability:**
- Test-retest reliability (r > 0.80 target)
- Internal consistency (Cronbach's α > 0.70)
- Inter-rater reliability (κ > 0.75)

**Validity:**
- Correlation with SWE-bench (for AI models)
- Correlation with real-world outcomes (for humans)
- Discriminant validity (vs IQ tests)
- Factor structure (do subscales emerge?)

**Practical:**
- Completion rate (target >85%)
- Average time to complete (target ~75 min)
- Score distribution (avoid ceiling/floor effects)

---

This scoring guide should be used consistently across all test administrations to ensure reliability and comparability of results.
