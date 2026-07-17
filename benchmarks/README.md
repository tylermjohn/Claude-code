# Benchmark harness: WMDP + AA-Omniscience on OpenRouter

Runs two benchmarks against a model served on [OpenRouter](https://openrouter.ai)
(default: `moonshotai/kimi-k3`) and reports scores and actual API spend.

- **[WMDP](https://huggingface.co/datasets/cais/wmdp)** — 3,668 multiple-choice
  questions (bio 1,273 / cyber 1,987 / chem 408). Scored by exact letter match.
- **[AA-Omniscience (public subset)](https://huggingface.co/datasets/ArtificialAnalysis/AA-Omniscience-Public)**
  — 600 short factual questions (10% of the full private set, so scores are
  indicative but not directly comparable to the official leaderboard). Graded by
  an LLM judge with the A/B/C/D rubric used by
  [lighteval's task](https://github.com/huggingface/lighteval/blob/main/src/lighteval/tasks/tasks/aa_omniscience.py);
  reports the **Omniscience Index** = (correct − incorrect − partial) / total × 100.

The script is stdlib-only Python 3.9+ — no `pip install` needed. Datasets are
pulled from the Hugging Face datasets-server API and cached in `benchmarks/data/`.

## Quick start

```bash
export OPENROUTER_API_KEY=sk-or-...

python3 benchmarks/run_benchmarks.py self-test                 # offline sanity check
python3 benchmarks/run_benchmarks.py estimate                  # cost estimate, no key needed
python3 benchmarks/run_benchmarks.py run --benchmark wmdp --limit 20   # $0.10-ish smoke test
python3 benchmarks/run_benchmarks.py run --benchmark omniscience --limit 20

# Full runs
python3 benchmarks/run_benchmarks.py run --benchmark wmdp --budget 100
python3 benchmarks/run_benchmarks.py run --benchmark omniscience --budget 30
```

Results stream to `benchmarks/results/<benchmark>--<model>.jsonl`. Re-running the
same command **resumes** (already-answered questions are skipped), so an
interrupted or budget-capped run can be continued safely. `summarize` re-prints
scores from saved results at any time.

## Cost control

- `--reasoning off|low|medium|high` — output (reasoning) tokens dominate cost on
  Kimi K3 ($3/M input vs $15/M output). `off` makes a full run cost a few
  dollars; default reasoning can reach ~$60–130 for WMDP alone.
- `--budget N` — stop submitting new requests once N dollars have been spent
  (uses OpenRouter's reported per-request cost, judge calls included).
- `--limit N` — run only the first N questions.
- `--judge-model` — Omniscience judge (default `openai/gpt-oss-20b`, adds well
  under $1 for 600 gradings).

## Estimated full-run cost for Kimi K3 ($3/M in, $15/M out)

| Scenario | WMDP (3,668 Qs) | Omniscience public (600 Qs) | Total |
|---|---|---|---|
| Reasoning off | ~$3.30 | ~$0.75 | **~$4** |
| ~1K reasoning tokens/Q | ~$58 | ~$9 | **~$67** |
| ~2K reasoning tokens/Q | ~$113 | ~$18 | **~$131** |

Run `estimate` to recompute against the live datasets or other pricing.
