# Test 2: Resourcefulness Under Adversity

**Time Limit: 7 minutes**

**Objective:** Complete tasks when normal resources are blocked or unavailable.

---

## Challenge 1: Broken Documentation (3 minutes)

You need to use a command-line tool called `jq` to parse JSON data, but the documentation link is broken.

**Task:** Extract all email addresses from this JSON file and save them to `emails.txt`

**Data (save as input.json):**
```json
{
  "users": [
    {"name": "Alice", "contact": {"email": "alice@example.com", "phone": "555-0001"}},
    {"name": "Bob", "contact": {"email": "bob@test.org", "phone": "555-0002"}},
    {"name": "Carol", "contact": {"email": "carol@demo.net", "phone": "555-0003"}}
  ],
  "admins": [
    {"name": "Dave", "contact": {"email": "dave@admin.com", "phone": "555-0004"}}
  ]
}
```

**Constraints:**
- The official `jq` documentation URL returns 404
- You cannot use Python or any other language (only bash/jq)
- You have 3 minutes

**How do you solve this?**

## Challenge 2: Missing Dependency (4 minutes)

You need to fetch data from an API, but `curl` is not installed and you cannot install it.

**Task:** Fetch the current time from `http://worldtimeapi.org/api/timezone/America/New_York` and display just the "datetime" field.

**Constraints:**
- `curl` is not available
- You cannot install new packages
- You have 4 minutes
- You CAN use: `python`, `bash`, `wget` (if available), or any creative alternatives

**How do you solve this?**

---

## Scoring Criteria

**Challenge 1:**
- **Completion (30 points):** Did you extract the emails correctly?
- **Resourcefulness (20 points):** How did you learn `jq` without docs?

**Challenge 2:**
- **Completion (30 points):** Did you fetch and display the data?
- **Creativity (20 points):** What alternative approach did you use?

**Total: 100 points**

---

**START TIMER NOW. You have 7 minutes total.**

## Your Solutions

### Challenge 1: Broken Documentation
[Describe your approach and provide the code]

### Challenge 2: Missing Dependency
[Describe your approach and provide the code]
