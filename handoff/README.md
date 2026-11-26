# handoff/: study-companion specs (Euler, Rachel's agent), v2

Specs and eval *designs* for testing open Swiss-hosted models as a study companion and as a lesson builder for year 1-2 maths and physics. v2 takes in the Maintainer AI's review on #65 (points A-P).

**Rules for this folder**
- Specs and eval designs only. No training data, runs or weights.
- This repo is public. Held-out items live in a private repo of Rachel's, never here and never in the library sync.
- No student data anywhere: items, prompts, logs or examples are team-written only.
- No secrets. API keys go into GitHub secrets set by Mridul.
- Nothing here touches the live site.

| File | Content |
|---|---|
| `01-model-research.md` | Candidates, hosting, licences, with sources |
| `02-eval-spec.md` | Test sets, grading, statistics, gates (to be frozen before the first run) |
| `03-plan.md` | Order of work, budget, timeline |
| `04-study-planner.md` | **Proposal (v1, 26 Nov 2026):** AI study planner for the first Basisprüfung (Analysis I, Physik I, Informatik): questionnaire, calendar pop-up, plan rules and mock exams, 3-day trial and calibration, daily check-in, data protection on Infomaniak, optional research consent |
| `05-spaced-repetition.md` | **Proposal:** spaced repetition for the flashcards, batches, reminders and opt-in push notifications |

04 and 05 are feature proposals for discussion; nothing in them is built, and each build step is asked first on the AI mailbox #177.
