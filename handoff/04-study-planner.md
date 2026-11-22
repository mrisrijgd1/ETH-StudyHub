# 04: AI study planner (spec draft v0, Euler for Rachel)

A personal, day-by-day study plan up to the exams for every **signed-in** student, built from the
programme's timetable, where the lectures currently are, StudyHub's material and the student's own
answers, and adapted every day to how it actually went.

Status: **proposal for discussion.** Nothing here is built. It touches SQL, a new page and
navigation, so every implementation step is asked first on #65 (AGENTS.md rule 3).

## 1. Scope

- **Who:** signed-in students only. Logged-out visitors see a short description and a sign-in button.
- **First version:** first-year Bachelor, autumn semester, **Mathematics and Physics** (their
  timetables come from Rachel). Other majors later, from the same data format.
- **Courses in v0:** Analysis I, Lineare Algebra I, Physik I (StudyHub has lessons, exam maps and
  flashcards for these). Other courses of the programme (e.g. Informatik, Chemie) appear as
  timetable blocks and time budgets without StudyHub content links.
- **Not in scope:** grades prediction, telling a student they will pass or fail, therapy.

## 2. Data the planner needs

### 2.1 Programme timetable (per major, per semester)
One JSON file per programme, e.g. `planner/data/hs26-physik-bsc-1.json`:

```json
{
  "programme": "Physik BSc, 1. Semester", "semester": "HS26",
  "lecture_period": {"start": "2026-09-14", "end": "2026-12-18"},
  "breaks": [{"from": "2026-12-19", "to": "2027-01-04", "label": "Weihnachtspause"}],
  "exam_session": {"from": "2027-01-25", "to": "2027-02-19", "label": "Basisprüfung"},
  "courses": [{
    "id": "analysis-i", "name": "Analysis I", "lecturer": "…", "language": "de",
    "slots": [{"type": "lecture", "day": "Mon", "from": "10:15", "to": "12:00", "room": "…"},
              {"type": "exercise", "day": "Wed", "from": "…", "to": "…", "note": "pick one group"}],
    "serie": {"release": "Mon", "due": "Mon 12:00", "weekly": true},
    "course_page": "https://…", "recordings": true,
    "studyhub": {"lessons": "lesson-01…22", "exam_map": "exam-map.html", "flashcards": true}
  }]
}
```

- Dates are **data, not code**: ETH changes its academic calendar from HS 2028 (PAKETH: equal
  semesters with a study period before each exam session), so nothing may be hard-coded.
- Individual exam dates are published later; until then the planner plans to the start of the
  session and asks the student to enter their dates once known.
- Every file records its sources, when they were read, and who approved it (see 2.2).

### 2.2 Getting timetables: once per programme, never twice

First-year timetables are the same for every student of a programme, so StudyHub keeps **one canonical
timetable per programme, semester and study year**, not one per student.

**Where the data comes from (best first):**
1. **ETH course catalogue (VVZ), public.** It lists every course with its timetable, structured by degree
   programme, and its entries are binding once the semester has started. The Maintainer AI drafts the
   programme file from the public VVZ pages; no student upload is needed for this part.
2. **myStudies calendar export (`.ics`) from a student.** myStudies can export a student's personal
   timetable as a standard `.ics` file. It fills what VVZ doesn't show clearly: which exercise groups exist,
   Serien deadlines, extra sessions. Structured, so it's parsed reliably; no password involved.
3. **PDF or screenshot** of a department timetable, as a last resort (more manual checking).

**What the student sees** when they choose their programme in the planner (or in settings):

| Status | Message | Action |
|---|---|---|
| Online | "✓ Timetable online, checked on 14 Sep 2026 (source: ETH course catalogue)" | Planner starts. Small link: "Something wrong? Report a change" |
| In review | "⏳ Timetable submitted, we're checking it (usually within 2 days)" | "Notify me when it's ready." No second upload asked for |
| Missing | "No timetable for this programme yet" | "Send us your timetable": upload the myStudies `.ics` (with a 3-step guide), or a PDF/screenshot. Optional: "Tell me when it's online" |

- The upload form **only appears when the status is Missing.** Once one file is submitted, everyone in that
  programme sees "In review" instead, so the same document never comes in twice.
- If two uploads arrive at the same time, identical files are detected by hash and merged into one
  submission; "confirmed by 3 students" raises confidence.
- **Personal data:** a myStudies export can contain a student's electives and name in event notes. The
  pipeline keeps only the programme's compulsory courses and exercise-group options, and deletes the raw
  upload after 30 days. The upload form says so.

**Pipeline (who does what):**
1. Upload goes to a private Supabase bucket `timetable-inbox`; a row in `timetable_submissions`
   (programme, semester, status, file hash, submitter id, date).
2. A database webhook opens a GitHub issue "Timetable submission: Physik BSc HS26" (no personal data in it),
   which wakes the Maintainer AI.
3. The Maintainer AI parses the upload, **cross-checks every slot against the public VVZ**, and opens a PR
   with `planner/data/<semester>-<programme>.json`, listing any mismatches.
4. A human (Mridul or Rachel) approves and merges: status becomes **Online** for the whole programme, and
   the submitters get a notification ("Your timetable is online, thank you").
5. **During the semester:** a weekly job compares the file with VVZ and flags changes (rooms, cancelled
   sessions) as a PR; students can "Report a change", which follows the same review path.

The student's **own** choices (which exercise group, which electives) are stored in their planner profile,
not in the canonical file.

### 2.3 Where the lectures are now (the hard part)

**Ruled out:** logging into Moodle or password-protected course pages with a student's account. Course
material behind a login is restricted on purpose, ETH's IT usage rules (BOT) make each user responsible for
how they use their account and for third parties' rights, and a bot holding a student's ETH password would be
a serious security risk. StudyHub never asks for an ETH password.

**Instead, a layered model.** For each course and lecture week, the planner stores a lecture position
(chapter or script section) with a **source and a confidence level**, and always uses the best available one:

| Layer | Source | Confidence | Cost |
|---|---|---|---|
| A. Lecturer/TA | The lecturer or head TA confirms the weekly plan or sends updates (we ask them by email once per semester; many are happy to help a student project) | High | One email per course; relies on goodwill |
| B. Public pages | Public course pages, public lecture-plan pages and published Serien titles, read weekly by the Maintainer AI (only pages without login, low frequency) | High where available | Low; only works for courses with public pages |
| C. Course scouts | One or two volunteer students per course tap "Today we covered §3.4" after each lecture (10 seconds), credited on the contributors page | Medium–high | Needs volunteers per course |
| D. Crowd check-in | Any student's weekly one-tap "Where is the lecture now?" in the planner; a value counts once ≥ 3 independent students agree | Medium | Free; needs active users |
| E. Baseline | Last year's lecture plan for the same course and lecturer, shifted to this year's calendar | Low | Free; always available |

- **Conflicts:** a higher layer wins; if two sources disagree by more than one section, the Maintainer AI
  flags it for a human.
- **Freshness:** if no layer above E has confirmed a course for 10 days, the planner shows the position as
  "estimated" and plans that course with a wider margin.
- **Plans that tolerate error:** the plan schedules new lecture material by **week**, not by exact section,
  and re-plans weekly, so a position that's off by one section never breaks a plan.
- The **Serien** are a reliable proxy: each week's Serie names its topic, and students know which Serie they're on.

**Workload estimate per new programme:** about 1 hour of human review (timetable PR + lecturer emails) per
semester; the Maintainer AI does the drafting and weekly checks.

### 2.4 StudyHub material
- Lessons, flashcards, revision pages, Serien pages and mock exams per course.
- **Exam weights** from the existing exam maps (e.g. Analysis I: Rechnungen ~20 of ~60 points, two
  theorems to prove): topics that come up every time get more time.

### 2.5 The student's own signals (already in Supabase)
`progress` (lessons done), `attempts` and `results` (exercises, mocks), `my_items`. Used to check and
refine the self-assessment, never to judge the student.

## 3. The questionnaire (onboarding, ~10 minutes, can be paused)

All answers are optional unless marked required. The AI asks in a conversation, but every
question also exists as a plain form field, so the planner works without free text.

1. **Programme and courses** (required): major, semester, which courses they take, repeat or first attempt.
2. **How they want to follow each course:** attend lectures / watch recordings / script only /
   StudyHub only / mix. Exercise class: attend which group, or not.
3. **Fixed time:** a weekly grid to block slots (job, sport, music, commuting, family, other
   courses). Weekend plans (free / partly / not available). Known trips or events.
4. **Sleep and energy:** usual bed and wake time; when they concentrate best (morning / afternoon /
   evening); how long a focused block feels right (25 / 50 / 90 min).
5. **Serien habits:** when they usually start, alone or in a group, how long one takes, how often they
   are late or skip one.
6. **Self-assessment per chapter (1 to 5)** for every chapter covered so far, with anchored levels so
   numbers mean the same for everyone:
   1 = never seen / no idea · 2 = read it, can't use it · 3 = can do standard exercises with notes ·
   4 = can do exercises alone · 5 = could explain or prove it in the exam.
7. **Goal:** pass safely / good grade / top grade. Hours per week they realistically want to study.
8. **Free text (optional):** "What worries you most right now?", "What is hardest for you at the
   moment?", "Anything else that would help us plan for you?"
9. **Ways of working that help (optional, as preferences, never as a diagnosis):** shorter blocks,
   more variety, fixed routines, reminders, body doubling / study partner, visual timer, fewer choices
   per day, extra buffer days, quiet-room preference. Students may mention ADHD, dyslexia, autism,
   anxiety or a chronic illness if they want; the planner only uses what they choose to share, and
   only as preferences.

## 4. How the plan is made

**Split the work:** a deterministic scheduler does the time arithmetic; the AI does the
conversation, explains the plan in plain words, writes the task descriptions and encourages. An LLM
must not be the thing that adds up hours or checks for overlaps.

### 4.1 Hard constraints (never broken)
- No study blocks in blocked slots, during the sleep window, or within ~1 h before bedtime.
- Daily and weekly caps from the student's own answer (default caps if they give none).
- Each Serie scheduled to finish **before** its deadline, with a buffer.
- At least one free half-day per week in the lecture period and one rest day per week in the
  Lernphase (student can change this, but the planner says why it suggests it).
- The day before an exam: light review only.

### 4.2 Priorities
Time per chapter ∝ exam weight × gap (5 − self-assessment, refined by attempts and results) ×
remaining time, with a floor so nothing taught is dropped silently.

### 4.3 Learning-research rules (with sources in the planner's help page)
- **Retrieval practice** over re-reading: every content block ends with flashcards, an exercise or a
  "close the script and write it down" step.
- **Spaced repetition:** chapters come back after increasing gaps (e.g. 1 day, 3 days, 1 week, 2 weeks).
- **Interleaving** in the Lernphase: mixed exercise sets across chapters and courses.
- **Worked examples first, then fading**, for chapters rated 1–2.
- **Sleep and breaks:** blocks of the chosen length with breaks; no late-night cramming; movement
  breaks suggested.
- **Mock exams** under exam conditions in the last weeks, timed like the real exam, using StudyHub's
  mocks and past exams.

### 4.4 Phases
1. **Lecture period (until the last lecture day in the timetable file):** keep up with the lectures (or recordings), Serien on time,
   weekly short review of the week, close the biggest gaps.
2. **Christmas break:** a few rest days first, then catch up the lowest-rated chapters.
3. **Lernphase (Jan):** full revision by exam weight, interleaved practice, theorem proofs, mocks.
4. **Exam session:** per-exam countdown, light review before each exam, rest after each.

## 5. The plan page (`plan.html`, signed-in only)

- **Today:** the day's blocks with links straight into the StudyHub lesson, flashcards, Serie or mock.
- **Week** and **until the exams** views, plus a progress view per chapter.
- **Daily check-in (one tap per block):** done / partly / not done, and an optional energy rating
  (1–5) and a short note.
- **Missed a day:** "I couldn't study today" re-plans the rest: missed blocks are re-prioritised, not
  just pushed onto tomorrow. If there is less time than material, the planner **says so honestly**
  and drops the lowest-priority items first, instead of piling on hours.
- **Edit:** drag blocks, lock blocks, change caps, re-run the questionnaire. Every change is
  versioned (existing `my_versions` trigger), so "undo" and "restore last week's plan" work.
- **Lecture position:** "The lecture is now at …" with a one-tap correction.

## 6. The AI companion's tone and limits

- Encouraging, understanding, specific and honest. Celebrates progress, normalises setbacks, never
  shames ("you're behind" becomes "here's the plan for the next three days").
- Uses the student's own words from the free-text boxes to tailor the plan, but never quotes them back
  in a way that feels like surveillance.
- **Not therapy.** If a student describes lasting distress, it says so kindly and points to the
  **Psychological Counselling Services UZH/ETH** (free, confidential, for ETH students; +41 44 634 22 80)
  and Nightline Zürich. If a student mentions thoughts of self-harm, it gives emergency contacts
  (143 Die Dargebotene Hand; 144 / 112 in an emergency) and does not continue as normal.
- Gives no medical advice about sleep, medication or diagnoses.

## 7. Data protection (needs a decision before any build)

- Sleep, anxieties, and any mention of ADHD, dyslexia or illness are **sensitive personal data**
  (Swiss revFADP "besonders schützenswerte Personendaten"; GDPR Art. 9 for EU students). Processing
  needs **explicit consent**, a clear purpose and data minimisation.
- **Consent screen** before the questionnaire: what is stored, why, where, who can see it, how to
  delete it. Separate opt-in for the optional free text and the "ways of working" section.
- **Storage:** Supabase with row-level security, one row per student (`my_items` keys
  `planner_profile`, `planner_plan`, `planner_checkins`); admins cannot read it (no admin policy on
  these keys); never in analytics (Umami) or logs.
- **LLM calls:** Swiss-hosted provider with no retention (same Infomaniak setup as the eval); no names
  or emails in prompts; free text only sent when the student opted in.
- **Delete and export** buttons on the plan page. Nothing is ever used to train a model or for the
  model eval. Research use happens only with the separate, optional consent in 7.1.
- StudyHub is a student project, not an ETH service: the page says so.
- Any study of the planner's effect on real students needs informed consent and ETH Ethics Commission
  approval first (as in `03-plan.md`).

### 7.1 Optional consent for educational research

The consent screen has a **second, clearly separate part**, after the consent needed to use the planner:

> **Help research on how students learn with AI (optional)**
> We would like to use **anonymised** data about how students use the AI companion and plan their
> studies, in future educational research on AI–student interaction and learning behaviour.
> **Saying yes or no changes nothing for you.** The planner, the AI companion and every StudyHub
> feature work exactly the same either way. You can change your choice at any time in your settings.

Rules:
- **Off by default.** Every box starts unticked; "No thanks" is as prominent as "Yes". The question is
  never shown as a condition, a pop-up that blocks the page, or with a reward.
- **No effect on the experience, verified:** the planner code never reads the research flags. Only the
  export job reads them (checked in review and by a test).
- **Choose per aspect.** One master switch "Yes to all" plus one box per category:

  | Category | What it covers | Note shown to the student |
  |---|---|---|
  | Interaction with the AI companion | questions asked, hints requested, how conversations went | message text only after automatic and manual removal of names and identifying details |
  | Plan use | which blocks were done, missed or moved; re-planning; time of day | |
  | Flashcard reviews | which cards were reviewed, ratings, intervals (see `05-spaced-repetition.md`) | |
  | Self-assessment | the 1–5 ratings per chapter and how they changed | |
  | Study routine answers | block length, focus times, sleep window, weekly load | sleep data counts as sensitive |
  | Free-text answers | worries, difficulties, notes | used only as redacted excerpts; can't be fully anonymised automatically |
  | Ways of working | preferences such as shorter blocks, and anything shared about ADHD, dyslexia, anxiety or illness | most sensitive; separate box, never part of "Yes to all" |
  | Contact for follow-up studies | being asked by email to take part in a specific study later | **not anonymous**; kept apart from all research data |

- **Withdraw any time**, per category. From then on nothing new is collected, and the student's data is
  removed from every research dataset that hasn't been analysed yet. Results already published in
  aggregate can't be withdrawn; the screen says so.
- **18+ only.** Students under 18 are not asked.
- **Anonymisation, honestly described:** in StudyHub the data is linked to a random research ID, not to the
  account (pseudonymised). Before any research use it is anonymised: no account IDs, names, emails or exact
  timestamps; dates coarsened to weeks; small groups merged so that no group has fewer than 10 students;
  free text manually redacted. The screen says that free text can never be guaranteed anonymous.
- **No research without approval:** this consent only allows *future* research. Each actual study needs
  its own approval by the ETH Ethics Commission (or the responsible body), with the study's purpose and
  researchers named. Students who opted in are told when a study using their data starts. If the
  commission requires study-specific consent, they are asked again.
- **Not for model training**, not sold, not shared outside the approved research team.
- **Stored** as `my_items` key `planner_research_consent`: one entry per category with yes/no, date and the
  version of the consent text. Every change is versioned (`my_versions`), so it's clear what was agreed to
  and when.
- **Settings page:** "Research participation" shows the current choices and lets the student change
  them in one click, with the same wording as the first screen.

## 8. Evaluation before release

- **Feasibility checks (automatic):** no overlaps, caps and sleep window respected, every Serie before
  its deadline, every taught chapter scheduled, re-plan after a missed day still feasible.
- **10 synthetic student profiles** (team-written, e.g. "works 12 h/week", "rated everything 1",
  "ADHD, prefers 25-min blocks", "misses three days in January"): plans reviewed by Rachel and Mridul.
- **Tone set:** the companion's replies to anxious or discouraged free text, scored like set R in
  `02-eval-spec.md` (kind, specific, points to support, no therapy).
- The companion model is whichever model wins the Track C pilot.

## 9. Rollout

| Step | What | Needs |
|---|---|---|
| v0 | Timetable + calendar view, no AI: lectures, exercise classes, Serien deadlines, exam countdown; programme status (online / in review / missing) and the submission form | Maths + Physics timetables (Rachel or VVZ), page + nav + SQL OK (Mridul) |
| v1 | Questionnaire (form) + deterministic plan + AI explanation | Consent text, SQL OK, provider key |
| v2 | Daily check-in, re-planning, lecture-position table | v1 used by the team first |
| v3 | More majors, spring semester | Timetables per programme |

## 10. Open questions

1. Rachel: timetables for Mathematics and Physics BSc semester 1 (HS26), including exercise-group
   options and Serien deadlines.
2. Mridul: OK for a new page `plan.html`, a nav entry for signed-in users, and new `my_items` keys
   (or a dedicated table)?
7. Research consent (7.1): who would be the responsible researcher or institute, and should the consent
   text be reviewed by the ETH Ethics Commission or ETH data protection before launch?
3. Lecture position: may we email lecturers/head TAs once per semester (layer A), and who signs the email?
   Do we want course scouts (layer C), and how do we credit them?
4. Exam dates: from the official exam plan when published, or entered by each student?
5. Default caps (hours per day/week) when a student gives none.
6. Should the plan export to a calendar file (`.ics`) for students who use their own calendar?

## Sources
- ETH PAKETH calendar change from HS 2028: https://ethz.ch/students/en/studies/paketh-studies/adjustments/
- HS26 lecture period (UZH, same Zurich semester dates, to be confirmed for ETH): https://www.uzh.ch/cmsssl/en/studies/dates/dates.html
- ETH course catalogue (VVZ), binding once the semester starts: https://ethz.ch/students/en/studies/academic-support/course-catalogue.html
- myStudies timetable `.ics` export: https://ethz.ch/applications/teaching/de/applications/mystudies/welcome/schedule.html
- ETH Acceptable Use Policy for IT resources (BOT): https://www.ethz.ch/services/en/it-services/documents.html
- Psychological Counselling Services UZH/ETH: https://www.pbs.uzh.ch/en/contact.html
- Swiss FADP, sensitive data and explicit consent (Art. 5 lit. c, Art. 6 para. 7 DSG): https://onlinekommentar.ch/de/kommentare/art6abs6und7
