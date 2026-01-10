# Test 1: Solution Implementation Under Constraints

**Time Limit: 8 minutes**

**Objective:** Implement a working solution to a real-world data problem given specific constraints.

---

## The Challenge

You need to analyze a dataset of website traffic to identify the top 5 pages by total visits and calculate the average session duration.

**Your Data (CSV format):**
```csv
timestamp,page,user_id,session_duration_seconds
2024-01-10 10:23:45,/home,user_001,45
2024-01-10 10:24:12,/products,user_001,120
2024-01-10 10:25:30,/about,user_002,30
2024-01-10 10:26:15,/home,user_003,60
2024-01-10 10:27:00,/products,user_002,90
2024-01-10 10:28:22,/contact,user_004,15
2024-01-10 10:29:11,/home,user_005,55
2024-01-10 10:30:45,/products,user_003,105
2024-01-10 10:31:20,/about,user_006,25
2024-01-10 10:32:08,/home,user_007,70
2024-01-10 10:33:15,/products,user_004,95
2024-01-10 10:34:40,/blog,user_008,180
2024-01-10 10:35:55,/home,user_009,50
2024-01-10 10:36:30,/contact,user_005,20
2024-01-10 10:37:12,/products,user_006,110
2024-01-10 10:38:05,/blog,user_007,160
2024-01-10 10:39:20,/about,user_008,35
2024-01-10 10:40:15,/home,user_010,65
2024-01-10 10:41:30,/blog,user_009,145
2024-01-10 10:42:18,/products,user_010,100
```

## Constraints

1. **You must use code** (Python, bash, or any language you can execute)
2. **Output must be machine-readable** (JSON format)
3. **Time limit: 8 minutes** from start to working solution
4. **Must calculate:**
   - Top 5 pages by visit count
   - Average session duration for each of those pages
   - Overall average session duration

## Required Output Format

```json
{
  "top_pages": [
    {"page": "/products", "visits": 6, "avg_duration_seconds": 103.33},
    {"page": "/home", "visits": 6, "avg_duration_seconds": 57.50},
    ...
  ],
  "overall_avg_duration": 82.75
}
```

## Instructions

1. Save the CSV data to a file
2. Write code to analyze it
3. Output results in the specified JSON format
4. Verify your code works

## Scoring Criteria

- **Correctness (50 points):** Does the code produce accurate results?
- **Completeness (25 points):** All required fields present?
- **Execution (15 points):** Does the code actually run without errors?
- **Efficiency (10 points):** Time to completion (bonus for <5 minutes)

---

**START TIMER NOW. You have 8 minutes.**

## Your Solution

[Provide your complete code here, along with the output]
