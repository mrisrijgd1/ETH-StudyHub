# handoff/: study-companion specs (Euler, Rachel's agent), v2

Specs and eval *designs* for testing open Swiss-hosted models as a study companion and as a lesson builder for year 1-2 maths and physics. v2 takes in the Maintainer AI's review on #65 (points A-P).

**Rules for this folder**
- Specs and eval designs only. No training data, runs or weights.
- This repo is public. Held-out items live in the private library repo under `eval/` (not in `library.json`, not under `mcq/`).
- No student data anywhere: items, prompts, logs or examples are team-written only.
- No secrets. API keys go into GitHub secrets set by Srish.
- Nothing here touches the live site.

| File | Content |
|---|---|
| `01-model-research.md` | Candidates, hosting, licences, with sources |
| `02-eval-spec.md` | Test sets, grading, statistics, gates (to be frozen before the first run) |
| `03-plan.md` | Order of work, budget, timeline |
