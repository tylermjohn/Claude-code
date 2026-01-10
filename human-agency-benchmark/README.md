# Human Agency Benchmark (HAB)

**A comprehensive, objective test battery for measuring human agency through performance-based tasks**

Version 1.0 - Proof of Concept

---

## 🎯 What is This?

The Human Agency Benchmark (HAB) is a novel assessment tool designed to measure agency through **actual performance** rather than self-report. It consists of:

- **2 Strategy Games** (20-25 min) - Dynamic environments with rule changes
- **8 Component Tests** (50 min) - Targeted tests of specific agency capabilities

**Key Innovation:** Unlike existing AI agent benchmarks (too easy) and psychological assessments (too subjective), HAB bridges the gap with objective, performance-based measures that work for both humans and AI.

---

## 🚀 Quick Start

### For AI Model Testing (Recommended First Use)

1. **Copy the entire test** to your AI chat interface
2. **Start with `MASTER_TEST.md`** - it contains the full test battery
3. **Run each test sequentially**, recording outputs
4. **Score using `SCORING_GUIDE.md`** and compare with `ANSWER_KEY.md`

**Example:**
```
User: "I want you to take the Human Agency Benchmark.
       Start by reading MASTER_TEST.md and complete each test in order."
```

### For Human Testing

1. Set up a computer with:
   - Terminal/command line access
   - Python 3.x installed
   - Internet access
   - Text editor
2. Download all files to a working directory
3. Start with Game 1, follow instructions sequentially
4. Time yourself honestly
5. Record all work (code, commands, analysis)

---

## 📁 Files Structure

```
human-agency-benchmark/
├── README.md                    # This file
├── MASTER_TEST.md              # Complete test battery (START HERE)
├── SCORING_GUIDE.md            # Detailed scoring rubrics
├── ANSWER_KEY.md               # Expected solutions and answers
│
├── games/
│   ├── resource_trader.py      # Game 1: Economic strategy game
│   └── maze_game.py            # Game 2: Exploration puzzle
│
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

## 🎮 What Does It Test?

### Strategy Games

**Game 1: Resource Trader**
- Economic decision-making under changing rules
- Tests: Adaptation, strategic planning, pattern recognition
- Time: 15 minutes

**Game 2: The Maze**
- Hidden maze navigation with rule changes
- Tests: Exploration strategy, adaptation, efficient problem-solving
- Time: 10 minutes

### Component Tests

| Test | What It Measures | Time |
|------|-----------------|------|
| 1. Solution Implementation | Executing solutions under constraints | 8 min |
| 2. Resourcefulness | Finding workarounds when blocked | 7 min |
| 3. Information Foraging | Efficient research and fact-finding | 8 min |
| 4. Constraint Navigation | Creative problem-solving with restrictions | 7 min |
| 5. Learning Velocity | Rapid skill acquisition | 10 min |
| 6. Feedback Integration | Detecting and adapting to pattern changes | 8 min |
| 7. Opportunity Recognition | Identifying leverage and force multipliers | 6 min |
| 8. Meta-Cognitive Calibration | Self-awareness of knowledge | 6 min |

**Total Time: ~75 minutes**

---

## 🎯 Scoring

**Maximum Score: 1000 points** (100 per test)

### Performance Bands

- **850-1000**: Exceptional agency (>95th percentile)
- **700-849**: High agency (75-95th)
- **550-699**: Medium-high agency (50-75th)
- **400-549**: Medium agency (25-50th)
- **250-399**: Low-medium agency (10-25th)
- **0-249**: Low agency (<10th)

### Subscales

- **Strategic Thinking**: 300 points
- **Execution & Implementation**: 300 points
- **Learning & Adaptation**: 300 points
- **Meta-Cognition & Information**: 200 points

---

## 🔬 Validation Approach

### Phase 1: AI Model Validation (Current)

1. **Test multiple AI models** (GPT-4, Claude, Gemini, etc.)
2. **Correlate scores** with existing benchmarks:
   - SWE-bench (software engineering)
   - GAIA (general AI assistant)
   - AgentBench (multi-domain)
3. **Validate construct** - do scores predict agent performance?
4. **Refine weights** based on predictive validity

### Phase 2: Human Validation (Future)

1. **Test diverse human population** (n>30)
2. **Correlate with outcomes**:
   - Project completion rates
   - Startup success
   - Career advancement
   - Peer ratings of agency
3. **Establish norms** and percentile distributions
4. **Create alternate forms** to prevent memorization

---

## 🎨 Design Philosophy

### Why These Tests?

Traditional approaches fail:
- **AI agent benchmarks**: Too easy for humans (ceiling effects)
- **Psychological scales**: Subjective, self-report bias
- **IQ tests**: Measure intelligence, not agency
- **Domain expertise**: Too narrow, doesn't transfer

**Our approach:**
- ✅ **Objective**: Performance-based, clear right/wrong
- ✅ **Hard to game**: Requires actual capability
- ✅ **Fast**: ~1 hour total
- ✅ **Scalable**: Digital administration, auto-scored
- ✅ **Diagnostic**: Identifies specific strengths/weaknesses
- ✅ **Valid**: Tests primitives that compose into agency

### What is Agency?

We define agency as the capacity to:
1. **Identify problems** and opportunities
2. **Acquire resources** (information, tools, help)
3. **Navigate constraints** creatively
4. **Execute solutions** effectively
5. **Learn and adapt** quickly
6. **Recognize leverage** points
7. **Self-assess accurately**

---

## 📊 Example Use Cases

### For AI Researchers
```python
# Test multiple models
models = ["gpt-4", "claude-3.5", "gemini-pro"]
results = {}

for model in models:
    score = run_hab_test(model)
    results[model] = score

# Correlate with SWE-bench
correlation = correlate(results, swe_bench_scores)
print(f"HAB vs SWE-bench correlation: {correlation}")
```

### For Organizations
- **Hiring**: Objective measure of candidate agency
- **Development**: Identify training needs
- **Team building**: Assess complementary strengths
- **Performance**: Track agency development over time

### For Individuals
- **Self-assessment**: Understand your agency profile
- **Skill development**: Target specific weaknesses
- **Career planning**: Match strengths to opportunities

---

## 🔧 Technical Requirements

### Minimal Setup
- Python 3.7+
- Terminal/command line
- Internet access (for some tests)
- Text editor

### Optional but Helpful
- `jq` (for Test 2)
- `awk` (for Test 5)
- `wget` or `curl` (for various tests)

**Note:** Tests are designed to work even without optional tools (that's part of the test!)

---

## 📝 How to Run the Games

### Game 1: Resource Trader

```bash
# Save the game file
cd human-agency-benchmark/games

# Start playing
python resource_trader.py status      # View state
python resource_trader.py trade '{"buy": "wood", "quantity": 10}'
python resource_trader.py next        # Next turn
python resource_trader.py score       # Final score
```

### Game 2: The Maze

```bash
# Navigate the maze
python maze_game.py sense            # See surroundings
python maze_game.py move north       # Move north
python maze_game.py stats            # View stats
python maze_game.py map              # View discovered map
```

---

## 🎓 Research Applications

### Construct Validation Questions

1. **Convergent validity**: Does HAB correlate with:
   - SWE-bench scores (for AI)?
   - Real-world project completion (for humans)?
   - Peer ratings of agency?

2. **Discriminant validity**: Should NOT correlate strongly with:
   - IQ tests (different construct)
   - Big Five personality (except maybe Conscientiousness)

3. **Predictive validity**: Does HAB predict:
   - Startup success?
   - Career advancement?
   - Learning outcomes?

4. **Factor structure**: Do the 8 components cluster into expected subscales?

### Data to Collect

- Raw scores per test
- Time taken per test
- Strategies used (qualitative)
- Demographics (for humans)
- Model parameters (for AI)
- Correlation with other measures

---

## 🚧 Known Limitations (v1.0)

1. **Single test form**: Can be memorized if retaken
2. **Self-timing**: Relies on honest time reporting
3. **Some subjectivity**: A few tests need human scoring
4. **No norms yet**: Percentiles are estimated
5. **AI-optimized**: Some tests require coding (may disadvantage non-technical humans)
6. **English-only**: Not yet translated

### Roadmap for v2.0

- [ ] Create 3-5 equivalent test forms
- [ ] Add automated timing
- [ ] Fully objective scoring (AI judges for subjective parts)
- [ ] Establish human population norms
- [ ] Non-technical versions of coding tests
- [ ] Multi-language support
- [ ] Web-based administration platform

---

## 📄 License & Usage

**This is a proof-of-concept research tool.**

Feel free to:
- ✅ Use for research
- ✅ Test AI models
- ✅ Self-assessment
- ✅ Modify and improve

Please:
- 📊 Share validation data
- 🐛 Report issues and edge cases
- 💡 Suggest improvements
- 📝 Cite if used in research

---

## 🤝 Contributing

This is v1.0 - we need your help to validate and improve!

**How to contribute:**

1. **Test it**: Run the benchmark on AI models or humans
2. **Report data**: Share scores and correlations
3. **Find edge cases**: What breaks? What's ambiguous?
4. **Suggest improvements**: Better tests? Clearer rubrics?
5. **Create variants**: Alternative test forms to prevent memorization

---

## 📧 Contact & Feedback

This benchmark was created to address the gap between:
- AI agent benchmarks (too easy for humans)
- Psychological assessments (too subjective)

**Goals:**
- Validate whether these components actually measure agency
- Establish population norms
- Correlate with real-world outcomes
- Create a standardized tool for measuring human agency cardinally

---

## 🎯 Getting Started (Choose Your Path)

### Path A: Test an AI Model
1. Open your AI chat interface
2. Paste `MASTER_TEST.md`
3. Ask it to complete all tests
4. Score using `SCORING_GUIDE.md`
5. Compare with `ANSWER_KEY.md`

### Path B: Test Yourself
1. Set up your environment
2. Open `MASTER_TEST.md`
3. Start with Game 1
4. Complete all 10 tests
5. Self-score using guides

### Path C: Validate the Benchmark
1. Test multiple subjects (AI or human)
2. Collect external validity data
3. Run statistical analyses
4. Share findings

---

**Ready? Start with `MASTER_TEST.md`!**

Good luck! 🚀
