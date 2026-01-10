# Test 5: Learning Velocity

**Time Limit: 10 minutes**

**Objective:** Learn a new tool/system quickly and use it effectively.

---

## The Challenge: Learn AWK in 10 Minutes

You've never used AWK before (or pretend you haven't). You have 5 minutes to learn it, then 5 minutes to solve problems with it.

### Phase 1: Learning (5 minutes)

Read this minimal AWK primer:

```
AWK BASICS:
- AWK processes text line by line
- Syntax: awk 'pattern { action }' file
- Built-in variables: $1 (first field), $2 (second field), $0 (whole line), NF (number of fields), NR (line number)
- Field separator default is whitespace, change with -F
- Common patterns: BEGIN{}, END{}, /regex/, NR==5

Examples:
  awk '{print $1}' file.txt          # Print first column
  awk -F',' '{print $2}' file.csv    # Print second column (CSV)
  awk '{sum+=$1} END{print sum}'     # Sum first column
  awk 'NR>1 {print $0}'              # Skip header
  awk '/pattern/ {print $0}'         # Print lines matching pattern
```

**Your learning task:** Read the primer and experiment with AWK using this sample data:

```
# Save as data.txt
Alice,25,Engineer,85000
Bob,30,Designer,75000
Carol,28,Engineer,90000
Dave,35,Manager,95000
Eve,26,Designer,70000
```

**Experiment for 5 minutes. Take notes on what you learn.**

---

### Phase 2: Application (5 minutes)

Now solve these problems using AWK:

**Problem 1 (25 points):** Print only the names and salaries of Engineers

**Problem 2 (25 points):** Calculate the average salary across all employees

**Problem 3 (30 points):** Find and print the name of the highest-paid employee

**Problem 4 (20 points):** Count how many employees are Designers

**Time limit: 5 minutes for all 4 problems**

---

## Scoring Criteria

- **Correctness (70 points):** Do your AWK commands produce correct results?
- **Syntax Quality (15 points):** Proper AWK syntax and idioms?
- **Learning Speed (15 points):** Did you complete in <5 minutes?

**Total: 100 points**

---

**START TIMER NOW. 5 minutes learning, 5 minutes problems = 10 minutes total.**

## Your Learning Notes (Phase 1)
[What did you learn in your 5-minute study period?]

## Your Solutions (Phase 2)

### Problem 1: Engineers' names and salaries
```bash
# Your AWK command
```

### Problem 2: Average salary
```bash
# Your AWK command
```

### Problem 3: Highest-paid employee
```bash
# Your AWK command
```

### Problem 4: Count Designers
```bash
# Your AWK command
```
