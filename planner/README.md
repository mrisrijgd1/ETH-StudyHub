# Study planner (first build, rule-based)

Spec: [handoff/04-study-planner.md](../handoff/04-study-planner.md). This folder plus `plan.html` is the first build.

| File | What it does |
|---|---|
| `engine.js` | The scheduler. Pure functions, no DOM, no network. Turns answers + calendar + programme data into a day-by-day plan. Runs in the browser and in node. |
| `data/hs26-mathphys-bsc-1.json` | Programme data for the first Basisprüfung (Mathematik/Physik BSc, HS26): exam session, lecture end, Christmas break, chapters with StudyHub links and exam weights (1–3), mock-exam targets and stock. Data, not code. |
| `../plan.html` | Questionnaire (modules A–J), calendar pop-up, plan view. Not in the navigation yet. |
| `../tools/tests/planner-engine.test.cjs` | Hard-rule tests: `node --test tools/tests/planner-engine.test.cjs` |

## Rules the scheduler keeps (spec 5.1–5.5)
- Study only in free time: the student's study day (F5) minus lunch, blocked boxes, one-week boxes, events, rest days and exam days; with sleep times (F1/F2) not in the first 30 min after waking or the last hour before bed. Lectures stop blocking time after the lecture period.
- At most the daily cap (E6: 4, 6 or 8 h; never more than 8 h), at most 85 % of the free time, and the weekly target (C7; at most 25 h of self-study a week in the lecture period).
- Mock exams: 5–7 for Analysis I and Physik I, 3–4 for Informatik, never more than the stock minus the past exams already done (D5); only in the last four weeks before each exam, in the Lernphase or session, in peak focus time (F3), one a day (two only if needed).
- Day before an exam: at most 3 h, only that subject. Day after: at most 2 h. No subject after its exam.
- Content: time per chapter grows with exam weight × gap (5 − rating) and struggle areas (D2), padded × 1.5. Chapters rated 1–2 start with worked examples; theory blocks end with single past exam questions; Analysis proof chapters get proof-rebuild blocks; spaced reviews 1, 3, 7 and 14 days after first work; light tasks in low-energy time (F4).
- Subject split follows D6; mixing follows H2.

## Storage
Signed in and with consent (A1): `my_items` keys `planner_profile` (consent + answers), `planner_calendar`, `planner_plan`, `planner_research_consent` (#261, #270; the server checks consent). Not signed in: the browser only (`localStorage` key `sh-planner:v1:guest`). "Delete all my planner data" deletes `planner_profile`, which removes every planner key on the server.
On any host other than study-hub.ch (e.g. test.study-hub.ch) the page sends data to that host's own `/api/db.php`, never to production.

## Not in this build
- LLM (Apertus): `PlannerEngine.LLM_ENABLED = false`; nothing calls a model. The chat button of the prototype is left out.
- Daily check-in, calibration after the 3 trial days, replanning from check-ins (spec v2).
- Programme timetable (lectures are drawn by the student with the label "Lecture"), `.ics` export, study-space tips, German version.
- Physik I and Informatik chapter weights are a first guess; please check them.

## Focus trail (header window)
`focus-hike.js` + `focus-hike.css`, hooked into `plan.html` with one empty `<div id="focus-hike">` outside `#app`.
A small hiker walks through an endless landscape (meadow, mountain lake, forest, pond, brook, alpine pasture, rocky ridge) with weather (clouds, drizzle, rain, mist, snow up high, rainbows), a sky that follows the local clock (or "always daylight"), and animals to spot (trail journal).
- Focus timer 25/5, 50/10 or 90/20: the hiker walks briskly while you focus, sits down in the break, strolls otherwise. Optional soft bell.
- Nature sounds are **real field recordings** (birds in meadow and forest, a mountain creek, a lake shore, light and heavy rain, breeze, gusty wind and ridge wind) in `sounds/`: seamless loops, `.m4a` (AAC) with `.ogg` (Opus) fallback, about 3.7 MB in all, each loaded only when needed. All public domain or CC0; sources, sections and licences in [`sounds/LICENSES.md`](sounds/LICENSES.md). They follow the landscape and the weather. The landscape is drawn on a canvas in code; the timer bell is generated. No third-party requests.
- Personalisation (name, skin, hair, hairstyle, hat, jacket, backpack, trousers, stick, dog), timer, volumes and journal stay in this browser only: `localStorage` key `sh-focus-hike`. Nothing is sent to the server.
- `prefers-reduced-motion`: a still picture, refreshed every 15 s. Animation pauses when the window is off-screen or the tab is hidden, and the landscape can be folded away (chevron).
