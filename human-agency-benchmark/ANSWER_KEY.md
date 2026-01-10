# Human Agency Benchmark - Answer Key & Expected Solutions

**Version 1.0 - For Scoring Reference**

---

## Game 1: Resource Trader - Optimal Strategy

### Winning Strategy

**Phase 1 (Turns 1-9):**
- Prices are low: wood=2g, stone=3g, food=1g
- Optimal: Buy resources, especially those needed for crafting
- Stock up on wood (20+), stone (15+), food (30+)

**Turn 10 - Phase Transition:**
- Prices DOUBLE
- Crafting becomes available
- New optimal strategy: Craft items for points

**Phase 2 (Turns 11-20):**
- Don't buy at high prices
- Craft items using stored resources:
  - Tools (10 wood + 5 stone) = 50 points
  - Building (20 wood + 15 stone) = 150 points
  - Feast (30 food + 5 wood) = 100 points

**Optimal Score Range: 700-1000+**

**Key Insights:**
- Recognize the phase transition
- Understand that buying before the price increase is critical
- Discover crafting gives points (not just resource value)
- Strategic resource allocation for high-value crafts

---

## Game 2: The Maze - Optimal Solution

### Maze Layout (Hidden from Players)
```
0 = wall, 1 = path, 2 = exit, 3 = teleporter, 4 = key

[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 1, 1, 0, 1, 1, 1, 0, 4, 0]  <- Key at (1,8)
[0, 1, 0, 0, 1, 0, 1, 0, 1, 0]
[0, 1, 1, 1, 1, 0, 1, 1, 1, 0]
[0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 1, 0, 0, 0, 0, 0, 0, 3, 0]  <- Teleporter at (6,8)
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 0, 0, 0, 1, 0, 0, 0, 2, 0]  <- Exit at (8,8)
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

Start: (1,1)
```

### Optimal Path (~25-30 moves)

**Phase 1:** Explore and find key at (1,8)
**Phase 2 (Move 20):** Exit becomes locked - need key
**Phase 3 (Move 40):** Gravity activates - south moves are free

**Smart Strategy:**
1. Systematically explore (right-hand rule or similar)
2. Find key at (1,8) early
3. Navigate to exit at (8,8)
4. In Phase 3, use gravity (south is free)

**Near-Optimal Score: 800-1000 points**

---

## Test 1: Solution Implementation - Expected Solution

### Sample Python Solution

```python
import csv
import json
from collections import defaultdict

# Read CSV data
data = """timestamp,page,user_id,session_duration_seconds
2024-01-10 10:23:45,/home,user_001,45
...
"""

# Parse data
lines = data.strip().split('\n')
reader = csv.DictReader(lines)

page_stats = defaultdict(lambda: {"visits": 0, "total_duration": 0})

for row in reader:
    page = row['page']
    duration = int(row['session_duration_seconds'])

    page_stats[page]["visits"] += 1
    page_stats[page]["total_duration"] += duration

# Calculate averages
results = []
total_duration = 0
total_visits = 0

for page, stats in page_stats.items():
    avg = stats["total_duration"] / stats["visits"]
    results.append({
        "page": page,
        "visits": stats["visits"],
        "avg_duration_seconds": round(avg, 2)
    })
    total_duration += stats["total_duration"]
    total_visits += stats["visits"]

# Sort and get top 5
results.sort(key=lambda x: x["visits"], reverse=True)
top_5 = results[:5]

# Output
output = {
    "top_pages": top_5,
    "overall_avg_duration": round(total_duration / total_visits, 2)
}

print(json.dumps(output, indent=2))
```

### Expected Output

```json
{
  "top_pages": [
    {"page": "/products", "visits": 6, "avg_duration_seconds": 103.33},
    {"page": "/home", "visits": 6, "avg_duration_seconds": 57.50},
    {"page": "/blog", "visits": 3, "avg_duration_seconds": 161.67},
    {"page": "/about", "visits": 3, "avg_duration_seconds": 30.0},
    {"page": "/contact", "visits": 2, "avg_duration_seconds": 17.50}
  ],
  "overall_avg_duration": 82.75
}
```

**Scoring:**
- Correct visit counts: 20 pts
- Correct averages: 20 pts
- Correct overall average: 10 pts
- Proper JSON format: 25 pts
- Code executes: 15 pts
- Completed in <5 min: +10 bonus

---

## Test 2: Resourcefulness - Expected Solutions

### Challenge 1: Broken Documentation (jq)

**Without docs, you can:**
1. Try `jq --help` or `man jq`
2. Experiment with simple patterns
3. Search web for "jq tutorial"
4. Use trial and error

**Working Solution:**
```bash
jq -r '.. | .email? | select(. != null)' input.json > emails.txt
```

or simpler:
```bash
jq -r '.users[].contact.email, .admins[].contact.email' input.json > emails.txt
```

**Scoring:**
- Completes task: 30 pts
- Method of learning (help, web, trial): 20 pts

### Challenge 2: Missing curl

**Alternatives to curl:**
```bash
# Option 1: wget
wget -O- http://worldtimeapi.org/api/timezone/America/New_York | python -c "import sys,json; print(json.load(sys.stdin)['datetime'])"

# Option 2: Python
python -c "import urllib.request, json; print(json.loads(urllib.request.urlopen('http://worldtimeapi.org/api/timezone/America/New_York').read())['datetime'])"

# Option 3: Python requests (if available)
python -c "import requests; print(requests.get('http://worldtimeapi.org/api/timezone/America/New_York').json()['datetime'])"
```

**Scoring:**
- Completes task: 30 pts
- Creative alternative: 20 pts

---

## Test 3: Information Foraging - Answers

### Q1: Tokyo Population
**Answer:** ~14 million (city proper), ~37 million (metro area) as of 2024
**Source:** Tokyo Metropolitan Government / UN data
**Points:** Correct order of magnitude + source = 15 pts

### Q2: Python datetime UTC
**Answer:** `datetime.now(timezone.utc)` or `datetime.utcnow()` (deprecated but still works)
**Precise answer:** `datetime.now(timezone.utc)`
**Points:** Exact method = 15 pts

### Q3: AAPL Stock Price (Jan 3, 2024)
**Answer:** $184.25 (closing price)
**Source:** Yahoo Finance, Google Finance, etc.
**Points:** Correct price + source = 20 pts

### Q4: String Concatenation Performance
**Answer:** `''.join()` is MUCH faster (50-100x for 10,000 items)
**Benchmark:**
```python
import timeit
t1 = timeit.timeit('s=""; \nfor i in range(10000): s+="x"', number=100)
t2 = timeit.timeit('"".join(["x"]*10000)', number=100)
print(f"+ operator: {t1:.4f}s, join: {t2:.4f}s, ratio: {t1/t2:.1f}x")
```
**Points:** Correct answer + benchmark = 20 pts

### Q5: ext4 File Size Limit
**Answer:** 16 TiB (tebibytes) with default 4KB block size
**Points:** Correct value = 15 pts

### Q6: HTTP 418
**Answer:** TRUE - RFC 2324 (Hyper Text Coffee Pot Control Protocol - April Fools' RFC)
**Points:** Correct = 15 pts

**Total: 100 pts based on accuracy and speed**

---

## Test 4: Constraint Navigation - Solutions

### Problem 1: Weather Data (No API/curl/requests)

**Creative Solutions:**
```python
# Option 1: Use urllib (built-in Python)
import urllib.request, json
# Scrape a weather website or use alternative data source
# OR: Use public weather data from a university/NOAA

# Option 2: Use selenium/playwright (if available)
# Option 3: Use socket programming to make raw HTTP request
# Option 4: Use a different Python library like httpx

# Practical solution: urllib to scrape public data
response = urllib.request.urlopen('https://wttr.in/New_York?format=j1')
data = json.loads(response.read())
with open('weather.json', 'w') as f:
    json.dump(data, f)
```

### Problem 2: File Transfer (No cp/mv/cat)

**Creative Solutions:**
```bash
# Option 1: Use dd
dd if=file_a.txt of=file_b.txt

# Option 2: Use read in bash
while IFS= read -r line; do echo "$line" >> file_b.txt; done < file_a.txt

# Option 3: Use tar
tar -cf - file_a.txt | tar -xf - -O > file_b.txt

# Option 4: Use Python
python -c "open('file_b.txt','w').write(open('file_a.txt').read())"
```

### Problem 3: Process Check (No ps/top/pgrep)

**Creative Solutions:**
```bash
# Option 1: Check /proc filesystem
if ls /proc/*/status 2>/dev/null | xargs grep -l "Name:.*postgres" >/dev/null 2>&1; then echo "YES"; else echo "NO"; fi

# Option 2: Use lsof
if lsof -c postgres >/dev/null 2>&1; then echo "YES"; else echo "NO"; fi

# Option 3: Check service status
if systemctl is-active postgres >/dev/null 2>&1; then echo "YES"; else echo "NO"; fi

# Option 4: Use Python psutil
python -c "import psutil; print('YES' if any('postgres' in p.name() for p in psutil.process_iter()) else 'NO')"
```

**Scoring per problem: Completion (25) + Creativity (8) = 33 pts**

---

## Test 5: Learning Velocity - AWK Solutions

### Problem 1: Engineers' names and salaries
```bash
awk -F',' '$3=="Engineer" {print $1, $4}' data.txt
```
**Output:**
```
Alice 85000
Carol 90000
```

### Problem 2: Average salary
```bash
awk -F',' '{sum+=$4; count++} END {print sum/count}' data.txt
```
**Output:** `83000`

### Problem 3: Highest-paid employee
```bash
awk -F',' 'NR==1 {max=$4; name=$1} $4>max {max=$4; name=$1} END {print name, max}' data.txt
```
**Output:** `Dave 95000`

### Problem 4: Count Designers
```bash
awk -F',' '$3=="Designer" {count++} END {print count}' data.txt
```
**Output:** `2`

**Scoring: Correctness (70), Syntax (15), Speed (15)**

---

## Test 6: Feedback Integration - Analysis

### Pattern Detection

**Answer:** The pattern changes at **Trade #11**

**Phase 1 (Trades 1-10):**
- BUY actions result in positive outcomes (+7 to +13)
- SELL actions result in negative outcomes (-5 to -6)
- **Rule:** Market is bullish - buy to profit

**Phase 2 (Trades 11-20):**
- BUY actions result in negative outcomes (-6 to -10)
- SELL actions result in positive outcomes (+8 to +12)
- **Rule:** Market is bearish - sell to profit

### Strategic Adaptation

**Next 10 Trades:** All SELL actions
**Expected outcome:** +8 to +12 per trade
**Confidence:** High (pattern is clear)

### Detection Code

```python
import csv

data = """trade_number,action,outcome,market_state
1,BUY,+10,unknown
..."""

lines = data.strip().split('\n')
reader = csv.DictReader(lines)

trades = [(int(r['trade_number']), r['action'], int(r['outcome'])) for r in reader]

# Detect change point by looking for when BUY becomes negative
for i in range(1, len(trades)):
    if trades[i][1] == 'BUY' and trades[i][2] < 0:
        print(f"Pattern changed at trade {trades[i][0]}")
        break
```

**Scoring: Detection (40), Strategy (40), Code (20)**

---

## Test 7: Opportunity Recognition - Analysis

### Scenario 1: Time Investment

**Calculations:**

**Week 1:**
- Option A: 5 × $200 = $1,000
- Option B: 8h build + 2h (4 requests × 0.5h) = $800
- Option C: 6h docs + 4h requests (2 requests × 2h) = $400

**Week 4 cumulative:**
- Option A: $1,000 × 4 = $4,000
- Option B: Week 1: $800 + Weeks 2-4: (20 requests × $200) = $800 + $4,000 = $4,800
- Option C: Saved 1.2h/week × 3 weeks = 3.6h → +1.8 requests/week × 3 weeks × $200 = $1,080 + Week 1 $400 = $1,480 + normal work

**Best Choice:** Option B (highest long-term value)
**Break-even:** Option B at week 2, Option C at week 3

### Scenario 2: Hidden Multiplier

**Expected Values:**
- Option A: 5,000 × 2% = 100 signups
- Option B: 10,000 × 1% = 100 signups (costs $200)
- Option C: 50,000 × 3% × 20% = 300 signups (expected)
- Option D: 200 × 40% = 80 referrals × 2.5 = 200 signups + ongoing viral growth

**Best Expected Value:** Option C (300 signups)
**Best Long-term Leverage:** Option D (viral growth continues)
**Optimal Strategy:** Combine C+D or do D then A

### Scenario 3: Resource Allocation

**Strategic Approach:**
1. **Week 1:** All 3 devs on Project C (technical debt) - 2 person-weeks, 1 person on A (bugs)
2. **Week 2:** Project B (client feature) - 4 person-weeks with 30% speedup from C
3. **Weeks 3-4:** Mix of B completion + start D (tools) for long-term gains

**Rationale:** Clear technical debt first for multiplier effect, serve urgent client, build tools for future

---

## Test 8: Meta-Cognitive Calibration - Answers

### Answers Key

1. **O(log n)** - Binary search time complexity
2. **Makes function a generator** - yield keyword
3. **31 nodes** - Height 4 binary tree: 2^0 + 2^1 + 2^2 + 2^3 + 2^4 = 31
4. **Cross-Origin Resource Sharing**
5. **Nur-Sultan (formerly Astana)** - Capital of Kazakhstan
6. **1989**
7. **C6H12O6**
8. **4 chambers**
9. **36** - 15% of 240
10. **5** - Pythagorean theorem: 3² + 4² = 5²
11. **2x** - Derivative of x²
12. **720 degrees** - Hexagon interior angles: (6-2) × 180
13. **~50-200** - Order of magnitude for piano tuners (Fermi estimation)
14. **5 minutes** - Each machine takes 5 min per widget
15. **~450 million** - EU population
16. **Reapply commits on top of another base** - git rebase
17. **S3 (Simple Storage Service)**
18. **Probability of observing results if null hypothesis is true**
19. **22** - SSH port
20. **INNER JOIN: only matching rows; LEFT JOIN: all left rows + matching right**

**Scoring:** Calibration = 100 - avg(|confidence - accuracy|)

---

## Scoring Summary

**Game 1:** 0-100 based on final score and time
**Game 2:** 0-100 based on moves and time
**Tests 1-8:** 0-100 each based on specific rubrics

**TOTAL: 1000 points maximum**

---

This answer key provides expected solutions and scoring guidelines. Actual scoring may require human judgment for some subjective components.
