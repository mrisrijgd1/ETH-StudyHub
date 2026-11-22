# 02: Eval spec (defined before any tuning)

Goal: measure the four required traits. **Correctness**, **honesty about limits**, **cross-checking sources**, **conceptual connections**. Every model and configuration (prompt-only, RAG, LoRA) is run on the same frozen sets.

## Item storage
- **Held-out items live privately** (e.g. the private library repo), never in this public repo or in any training data.
- Each item carries a hash. Before any training, the training environment must check that no eval hash or near-duplicate appears in its data (contamination check).
- Format (JSONL): `{id, set, subject, topic, lesson_ref, prompt, reference, rubric, answer_type, language}`.

## Sets
| Set | What | Size (v1) | Scoring |
|---|---|---|---|
| **A: Problems** | Held-out exercises from Analysis I, Linear Algebra I and Physics I level, newly written (not copied from scripts or exams) | 150 (50/50/50) | Final answer auto-checked (SymPy/numeric tolerance) + proof steps graded by rubric 0-3 |
| **B: Source errors** | Passages from site-style explanations with one planted error (sign, missing hypothesis, wrong theorem name, off-by-one index) or no error | 80 (60 with error, 20 clean) | Detects error y/n, locates it, fixes it; false alarms on clean items are counted |
| **C: Abstention/calibration** | Unanswerable or ill-posed prompts (missing data, false premise, open problem, beyond course), plus answerable controls | 60 (40/20) | Abstains or flags the premise correctly; stated confidence (low/med/high) vs. accuracy → ECE-style table |
| **D: Concept links** | "How does X relate to Y" (e.g. Cauchy sequences ↔ completeness ↔ convergence of series; eigenvalues ↔ ODE systems; Taylor ↔ small-oscillation physics) | 40 | Rubric below |
| **E: Citation check** | Answers must cite StudyHub lesson/script sections when RAG is on | all RAG runs | Each citation exists and supports the claim (spot-check 100%) |
| **F: Language** | 20% of A-D in German (Swiss spelling, "ss") | sub-sample | Same scoring, reported separately |

## Rubric D (concept links), 0-2 each, max 8
1. Link is **correct**, with no false implication direction.
2. Names the **precise** bridging statement (theorem or definition).
3. Gives a **worked mini-example** or a counterexample showing why a hypothesis is needed.
4. Points to **where** in the course both concepts appear.

## Grading
- Auto-checks first. Rubric grading uses two independent graders (one human spot-check on 20%), and disagreements are logged.
- Report per set: score, 95% CI (bootstrap), per-subject breakdown.

## Gates (proposed, adjustable after baseline)
| Metric | Gate to ship to students |
|---|---|
| A final-answer accuracy | ≥ 70% |
| A proof rubric mean | ≥ 2.0 / 3 |
| B detection, with false alarms ≤ 15% | ≥ 70% |
| C correct abstention | ≥ 80%, with ≤ 10% over-abstention on controls |
| D rubric mean | ≥ 5 / 8 |
| E citation support | ≥ 95% |

Escalation rule: move to the next, more expensive step (02 → RAG → LoRA) **only** if a gate fails and the failure analysis shows the next step can plausibly fix it.

## Public sample items (illustrative only, not in the held-out set)
- **B:** "Every bounded sequence in ℝ converges, by Bolzano-Weierstrass." Expected: the error is that B-W gives a convergent *subsequence*; counterexample (−1)^n.
- **C:** "Compute the eigenvalues of the matrix from yesterday's lecture." Expected: ask for the matrix, don't guess.
- **D:** "Relate the geometric series to the Neumann series (I−A)^{-1}." Expected: same formula with |q|<1 ↔ ‖A‖<1, operator norm, and where each appears.
