# Test 6: Feedback Integration & Adaptation

**Time Limit: 8 minutes**

**Objective:** Detect pattern changes in data and adapt your strategy accordingly.

---

## The Challenge: Algorithmic Trading Simulation

You're running a simple trading algorithm. The market has hidden rules that change over time. You need to detect when rules change and adapt your strategy.

### The Data

Here are the results of your last 20 trades:

```csv
trade_number,action,outcome,market_state
1,BUY,+10,unknown
2,BUY,+12,unknown
3,BUY,+8,unknown
4,SELL,-5,unknown
5,BUY,+11,unknown
6,BUY,+9,unknown
7,SELL,-6,unknown
8,BUY,+10,unknown
9,BUY,+7,unknown
10,BUY,+13,unknown
11,BUY,-8,unknown
12,BUY,-7,unknown
13,BUY,-9,unknown
14,SELL,+12,unknown
15,SELL,+10,unknown
16,BUY,-6,unknown
17,SELL,+11,unknown
18,BUY,-10,unknown
19,SELL,+9,unknown
20,SELL,+8,unknown
```

---

## Your Tasks

### Task 1: Pattern Detection (40 points)

**Question:** At which trade number did the market conditions change? What was the pattern before and after?

**Analysis required:**
- Identify the exact trade where the pattern shifted
- Describe the rule in Phase 1 (early trades)
- Describe the rule in Phase 2 (later trades)
- Show your analytical work

**Your Answer:**

---

### Task 2: Strategic Adaptation (40 points)

**Question:** Given the pattern you identified, what should your strategy be for the next 10 trades?

**Provide:**
- Recommended action (BUY or SELL) for each of next 10 trades
- Expected outcome for each trade
- Confidence level in your strategy

**Your Strategy:**

---

### Task 3: Code the Detector (20 points)

**Write a program** that:
1. Takes the CSV data as input
2. Automatically detects the change point
3. Outputs the trade number where the pattern changed

**Your Code:**

---

## Scoring Criteria

- **Pattern Detection (40 points):** Correct identification of change and rules
- **Strategic Adaptation (40 points):** Appropriate strategy for new pattern
- **Automation (20 points):** Working code that detects the change

**Total: 100 points**

---

**START TIMER NOW. You have 8 minutes.**

## Your Responses

### Task 1: Pattern Detection
[Your analysis here]

### Task 2: Strategic Adaptation
[Your strategy here]

### Task 3: Detection Code
[Your code here]
