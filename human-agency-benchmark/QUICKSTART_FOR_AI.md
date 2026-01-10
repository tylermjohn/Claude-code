# Quick Start: Testing AI Models with HAB

**For researchers who want to test AI models immediately**

---

## 🎯 Fastest Way to Test

### Step 1: Copy the Full Test

The complete test battery is in `MASTER_TEST.md`. You can paste the entire document to an AI model.

### Step 2: Provide the Game Code

The AI needs the game files to play. Paste these when needed:

**Game 1 Code:** `games/resource_trader.py`
**Game 2 Code:** `games/maze_game.py`

### Step 3: Prompt Template

```
You are taking the Human Agency Benchmark (HAB), a test designed to measure
AI agent capabilities across 10 performance-based tasks.

Instructions:
1. Complete each test in order (2 games, then 8 component tests)
2. Time yourself for each test (track real time taken)
3. Provide all outputs (code, commands, analysis)
4. Be honest - don't skip ahead or use prior knowledge of these tests

Start with Game 1: Resource Trader

[Paste the game code here]

Follow the instructions in the game section of MASTER_TEST.md.
When you're done, move to Game 2, then Tests 1-8.

Record your performance and we'll score it at the end.

Ready? Begin with Game 1!
```

---

## 📊 What to Track

For each test, record:

1. **Score achieved** (varies by test)
2. **Time taken** (actual time)
3. **Strategy used** (brief description)
4. **Issues encountered** (if any)

---

## 🎮 Game Testing Tips

### For Resource Trader:
- The AI should actually execute the Python commands
- Watch for: Does it discover the phase change? Does it find crafting?
- Expected time: 10-15 minutes

### For The Maze:
- The AI should use the sense/move commands to navigate
- Watch for: Systematic exploration? Adapts to rule changes?
- Expected time: 8-12 minutes

---

## 📝 Scoring After Completion

Use `SCORING_GUIDE.md` to score each component.

**Quick scoring checklist:**

- [ ] Game 1 final score: ___ → ___ points
- [ ] Game 2 moves to exit: ___ → ___ points
- [ ] Test 1: Code works? Correct output? → ___ points
- [ ] Test 2: Both challenges solved? → ___ points
- [ ] Test 3: Answers correct? Times? → ___ points
- [ ] Test 4: All 3 problems solved? → ___ points
- [ ] Test 5: AWK problems correct? → ___ points
- [ ] Test 6: Pattern detected? Strategy? → ___ points
- [ ] Test 7: Calculations correct? → ___ points
- [ ] Test 8: Calibration score? → ___ points

**Total: ___ / 1000**

---

## 🔬 Validation Questions

After testing, consider:

1. **Did the model "game" any tests?** (memorization, pattern matching)
2. **Which tests were easiest/hardest?**
3. **Did scores correlate with your intuition of model capability?**
4. **Any tests that seemed invalid or poorly designed?**

---

## 📈 Comparing Multiple Models

Test the same way across models:

| Model | Total Score | Strategic | Execution | Learning | Meta-Cog |
|-------|------------|-----------|-----------|----------|----------|
| GPT-4 | ??? / 1000 | ??? / 300 | ??? / 300 | ??? / 300 | ??? / 200 |
| Claude-3.5 | ??? / 1000 | ??? / 300 | ??? / 300 | ??? / 300 | ??? / 200 |
| Gemini Pro | ??? / 1000 | ??? / 300 | ??? / 300 | ??? / 300 | ??? / 200 |

---

## 💡 Pro Tips

1. **Use fresh sessions** for each model (avoid context carryover)
2. **Same prompt every time** for consistency
3. **Verify code actually runs** (don't just trust the output)
4. **Track wall-clock time** for each test
5. **Save all outputs** for later analysis

---

## 🐛 Common Issues

**Issue:** AI doesn't execute code, just describes it
**Fix:** Explicitly instruct to actually run the code

**Issue:** AI rushes through tests
**Fix:** Remind it to take the full time allotted

**Issue:** AI asks for clarification
**Response:** Tests should be self-contained; if unclear, that's part of the test

---

## 📤 Share Your Results

If you test models, please share:
- Final scores per model
- Interesting strategies observed
- Edge cases or issues found
- Correlation with other benchmarks (SWE-bench, GAIA, etc.)

---

**Ready to test? Start with `MASTER_TEST.md`!**
