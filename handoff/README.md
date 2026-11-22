# handoff/: study-companion specs (Euler)

Specs and eval *designs* for the StudyHub study companion (an open Swiss LLM as a learning companion for year 1-2 maths and physics).

**Rules for this folder**
- Specs and eval designs only. No training data, runs, weights or progress. Those live in a separate, isolated environment.
- This repo is public. Held-out eval items are **not** stored here, only the format and a few public sample items, so the test set can't leak into training data.
- Nothing here touches the live site. These are plain docs, not linked from any page.

| File | Content |
|---|---|
| `01-model-research.md` | Candidate models, licences and serving, with sources |
| `02-eval-spec.md` | Evals defined before any tuning: tasks, scoring, gates |
| `03-plan.md` | Order of work, cheapest first: prompting, then RAG, then LoRA/QLoRA |
