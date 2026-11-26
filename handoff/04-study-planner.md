# 04: AI study planner (spec v1, rewritten 26 Nov 2026 for Rachel)

A personal, day-by-day study plan up to the first Basisprüfung for every **signed-in** student. It is
built from a short questionnaire, a StudyHub calendar the student fills in, the programme's timetable,
StudyHub's material and the student's own progress, and it adapts every day to how it actually went.

Status: **proposal for discussion.** Nothing here is built. v1 replaces the v0 draft completely; it
takes in Rachel's decisions of 26 Nov 2026 (section 12). Building it touches SQL, `api/`, a new page
and navigation, so every implementation step is asked first on the AI mailbox #177 (AGENTS.md rule 3).

## 1. Scope

- **Who:** signed-in students only. Logged-out visitors see a short description and a sign-in button.
- **First version:** first-year Bachelor **Mathematics and Physics**, autumn semester, preparing the
  **first Basisprüfung** (winter session). It is the same for both programmes and covers three subjects:

  | Subject | Exam | Aids |
  |---|---|---|
  | Analysis I | written, 150 min | lecturer's formula sheet only |
  | Physik I | written, 180 min | formula sheet, dictionary |
  | Informatik | written, 120 min, on ETH computers | 4 A4 sheets |

  Exam details as read in the VVZ and Wegleitungen on 26 Nov 2026 (sources at the end); each counts with
  weight 1, the block passes with an average of at least 4.0, compensation only within the block.
  These are data in the programme file (2.1), never code.
- **Depth over breadth:** only these three subjects are examined, so the plan goes deep in them.
  Linear Algebra is examined in summer (block 2) and appears only as lecture time and a light weekly
  review until the end of the lecture period.
- **Not in scope:** grade prediction, telling a student they will pass or fail, therapy, exam-style
  test questions inside the questionnaire.

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
1. Upload goes through `api/` to a private folder `studyhub-data/timetable-inbox/` on our Infomaniak
   hosting (outside the website); a row in the MariaDB table `timetable_submissions`
   (programme, semester, status, file hash, submitter id, date).
2. The server opens a GitHub issue "Timetable submission: Physik BSc HS26" (no personal data in it),
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

### 2.4 StudyHub material and past exams
- Lessons, flashcards, revision pages, Serien pages, past exams and mock exams per course.
- **Mock exam stock** per course (how many full past exams or mocks exist), so the plan never promises more mocks than there are. Informatik has few.
- **Single past exam questions** tagged by chapter, so they can be used while revising the theory (5.3).
- **Exam weights** from the existing exam maps (e.g. Analysis I: Rechnungen ~20 of ~60 points, two
  theorems to prove): topics that come up every time get more time.

### 2.5 The student's own signals (already stored on Infomaniak)
`progress` (lessons done), `attempts` and `results` (exercises, mocks), `my_items`. Used to pre-fill and
check the self-assessment, never to judge the student.

- **Mistake patterns:** recurring mistakes in StudyHub exercises (e.g. the same kind of step wrong in
  several attempts) pre-tick the "struggles" list in the questionnaire (D2) and get extra practice blocks.
- **Mocks already done** are never scheduled again as full mocks.


## 3. The questionnaire (onboarding, about 21 minutes, can be paused)

The questionnaire has 10 modules, A to J, of about 60 questions and calendar steps, and takes about
21 minutes. After the 3-day trial period a calibration check-in of up to 7 minutes follows (section 6).
The team keeps a working copy of the question set outside this repo; this section is its snapshot of 26 Nov 2026.

**Design rules**
1. Every question names the plan input it feeds. A question that feeds nothing is cut.
2. What StudyHub already knows (timetable, lessons done, exercise results, mistake patterns) is
   pre-filled; the student only confirms or corrects it.
3. **No exam-style test questions** on the material: the questionnaire must never feel like an exam.
4. Skip logic hides questions that don't apply. The student can pause after any module; only B is required.
5. Form-first: every question is a plain form field. A chat button on every screen lets the student ask Apertus questions about the questionnaire; answers never change the form by themselves. Every module has a small question mark beside its title that opens a one-line "why we ask", closed by default.
6. Time estimates per module are guesses until 3 to 5 students have been timed on a click prototype.

Answer types: **single** = pick one, **multi** = pick several, **scale** = 1 to 5 with labelled ends,
**date** = date picker, **number**, **text** = optional free text. "(guess)" marks a choice still to be confirmed.

#### A. Welcome and consent (about 0.5 min, required)

| # | Question | Type | Feeds the plan |
| --- | --- | --- | --- |
| A1 | Consent to store planner data on the StudyHub server in Switzerland | checkbox, required | Nothing is saved without it |
| A2 | Separate opt-in for the sensitive modules (sleep, ways of working, free text) | 3 checkboxes, off by default | Shows or hides modules F, I and J |
| A3 | Optional research consent (spec section 7.1) | per-category checkboxes, off by default | Research export only, never the plan |
| A4 | Language of the questionnaire and plan | single: Deutsch / English | Language of the plan text and AI replies |

#### B. Programme and exams (about 1.5 min, required)

| # | Question | Type | Feeds the plan |
| --- | --- | --- | --- |
| B1 | Programme and semester | single, from programme list | Loads the canonical timetable file (spec 2.2) |
| B2 | Which subjects are examined this session? | pre-filled with the programme's three exam subjects (same for Mathematics and Physics, first Basisprüfung, confirmed by Rachel: Analysis I 150 min, Physik I 180 min, Informatik 120 min), student confirms | Course list the plan covers |
| B3 | First attempt or repeat, per course | single | Repeaters skip "new material" and start with gaps |
| B4 | If repeat: what went wrong last time? | multi: ran out of time / proofs / computations / exam nerves / didn't study enough / other | Weights proof or computation practice, adds mock exams |
| B5 | Do you know your exam dates yet? Enter them | date per course, or "not yet" | Hard deadline per course; until known, plans to session start |
| B6 | Exam mode, per course | pre-filled from the exam map, student confirms: written / oral, length, allowed aids, session exam or during the semester | Mock exam length, oral practice (explain out loud), summary sheet tasks |
| B7 | How much does each subject weigh, and how do earlier grades or bonuses count? | pre-filled from the programme file (credits, Basisprüfung block, bonus rules); student enters bonuses or Vornoten already earned | Weight in the priority formula; an earned bonus lowers the score needed. Verified (26 Nov): weight 1 each, the block passes with an average of at least 4.0, compensation only within the block, one repeat of the whole block, bonus up to +0.25 in Analysis I and Physik I; rounding of the block average not yet verified |
| B8 | Which courses do you want to secure most? Rank them | drag to order | Tie-breaker in time allocation |
| B9 | For which subjects is there a PVK (exam preparation course), and will you attend? | pre-filled list with dates where known (guess: we collect them per programme), yes / no / not sure | PVK days become fixed blocks; that subject's first revision pass is placed before the PVK so it is used for questions |

#### C. Goals and motivation (about 2.5 min)

| # | Question | Type | Feeds the plan |
| --- | --- | --- | --- |
| C1 | What is your overall goal for this exam session? | single: pass safely / good grade / top grade | Total hours target and depth (proofs, hard exercises) |
| C2 | Target grade per subject | number 1 to 6, step 0.25 | Per-subject effort split |
| C3 | Your goal per subject, in one sentence (e.g. "In Analysis I I want to be able to do every Rechnung on the exam without notes") | short text per subject, with 2 examples shown | Weekly check "are you on track for your goal?"; companion refers to it |
| C4 | How confident are you right now, per subject? | scale 1 (very unsure) to 5 (very confident) | Compared with chapter ratings; low confidence + high rating gets an early mock to reassure |
| C5 | Why does this exam session matter to you? | text, optional | Companion uses it for encouragement, never quoted back verbatim |
| C6 | What would a good Lernphase look like for you on 1 February? | multi: all material seen twice / did all past exams / kept sport / slept well / stayed calm / other | Turns into the plan's success checks shown each week |
| C7 | How many hours per week do you realistically want to study in the Lernphase? | number, with a hint showing the typical range (default 40 to 48 h in the Lernphase, about 15 to 25 h of self-study on top of the timetable in the lecture period) | Weekly cap; the planner warns if material needs more |

#### D. Where you stand in your three subjects (about 5 min)

This module gets the most time, because the plan's depth in the three exam subjects depends on it. It contains no exam-style test questions: the questionnaire should never feel like an exam.

| # | Question | Type | Feeds the plan |
| --- | --- | --- | --- |
| D1 | Rate each chapter or topic, per subject | numerical rating 1 to 5 per chapter, one screen per subject, chapter list from the StudyHub lessons; anchored as in spec section 3 item 6; pre-filled from StudyHub progress where possible | Gap term in the priority formula (spec 4.2): low ratings get more time |
| D2 | Which aspects of each subject do you struggle with and want to focus on? | multi per subject, pre-ticked from recurring mistakes in the student's StudyHub exercises, from a subject-specific list (e.g. Analysis: epsilon-delta proofs, series, Taylor; Informatik: writing code by hand, recursion, complexity; Physik: setting up equations, energy and momentum; lists are a guess, to be built from the StudyHub chapters) + "add your own" | Focus blocks with extra worked examples and practice on exactly these aspects |
| D3 | How do you handle proofs right now? (Analysis I; Informatik correctness proofs if the exam has them) | single: I can't follow them yet / I learn them line by line / I understand the idea and can rebuild them / I can write my own | Proof-learning blocks: proof skeletons, rebuilding proofs from memory, the theorems the exam map says come up |
| D4 | How many Serien have you handed in or solved this semester? | single per subject: almost all / about half / few | Catch-up load before the break |
| D5 | Which past exams or StudyHub mock exams have you already done? | checklist per subject, optional score (%) | Those mocks are not reused; scores refine D1 |
| D6 | How do you want to split your study time between the three subjects? | 3 linked sliders adding up to 100 %, starting from a suggested split (exam weight × gaps from D1) | Each subject's share of every study week; the planner warns if a share leaves taught chapters uncovered |
| D7 | Any doubts or questions you have about a subject, however small? | text per subject, optional, with the note "Writing down doubts helps us plan, nothing here is graded" | Extra time on those topics; companion follows up in check-ins |

#### E. Your calendar: interactive pop-up (about 4 min)

This module opens a StudyHub calendar in a pop-up, covering every week from today to the last exam. The student blocks the time they can't study, and the LLM later fills only the free time. The student never has to say what a blocked slot is for: each box gets one of four broad labels at most, **Commitment**, **Movement**, **Social or family**, **Rest**, and "no label" is always allowed. The calendar is saved and stays editable from the plan page.

Steps in the pop-up:

1. **Import (optional):** upload a calendar file (.ics from myStudies, Google, Apple or Outlook). Lectures and imported entries appear as grey busy boxes; nothing else from the file is kept.
2. **Weekly recurring activities:** a single week plan. The student drags a box over the time slots, and the box repeats in every week. Clicking a box in one specific week lets them skip or move it there (exceptions).
3. **Planned events:** one-off dates such as celebrations, trips or holidays, dragged into the month view. A title is optional.
4. **Rest days:** the student marks their own rest days or half-days. The planner shows recommended rest days as shaded days, which the student can accept with one click.
5. **Done, then advice:** when the student taps "Done", the planner checks the calendar and gives 1 to 3 short tips, each with a one-click fix.

| # | Step or question | Type | Feeds the plan |
| --- | --- | --- | --- |
| E1 | Upload your calendar (optional) | file upload, .ics | Pre-fills busy boxes; imported text is dropped after parsing |
| E2 | Weekly recurring activities | drag boxes on a week plan, repeated in all weeks, with per-week exceptions; optional broad label | Blocked slots in every week |
| E3 | Which lectures and exercise classes do you attend in person, watch as recordings, or skip? | single per course, shown on the lecture boxes: attend / recording / script only / StudyHub only | Turns lecture boxes into study time or keeps them |
| E4 | Events already planned | drag one-off boxes in the month view; title optional | Removed from the calendar; the day before and after gets a lighter load |
| E5 | Rest days | click days or half-days; recommended rest days shown shaded (one per week, a lighter day after each exam, and 3 to 4 days at Christmas: 24 to 26 Dec and 1 Jan; the Christmas number is a guess, no study tests it) | Protected rest, never overwritten by replanning |
| E6 | Most hours you can study in one day without losing quality | single: 4 / 6 / 8 | Daily cap, never above 8 h (Rachel, 26 Nov) |
| E7 | Advice after "Done" | 1 to 3 tips from simple rules, each with a one-click fix | Examples: no Movement box in the week → suggest 2 to 3 short exercise sessions; fewer than one rest day a week → suggest one; rest days bunched together → suggest spreading them; less free time than the material needs → says so honestly |

The LLM then adds the study sessions into the free time, with the topic, a study goal and the tasks for each day, all linked to the StudyHub material.

#### F. Your biorhythm: sleep, focus and breaks (about 2.5 min, sleep questions opt-in)

| # | Question | Type | Feeds the plan |
| --- | --- | --- | --- |
| F1 | Usual bedtime and wake time on weekdays (opt-in) | 2 time pickers | Sleep window; no blocks in it or in the hour before bed |
| F2 | Same for weekends (opt-in) | 2 time pickers | Flags a large shift and suggests a steadier wake time |
| F3 | When are your strongest concentration times? | multi: early morning / late morning / early afternoon / late afternoon / evening | Hardest tasks (proofs, new chapters, mocks) go in these windows |
| F4 | When is your energy usually lowest? | single, same options | Flashcards, light review or breaks go here |
| F5 | What does your optimal study day look like? | day builder: start time, end time, number and length of blocks, lunch, longer break; pre-filled from F1, F3 and G3, student drags to adjust | Template for every Lernphase day; the scheduler fills it instead of inventing a day |
| F6 | What is a "good" break for you? | multi: short walk / fresh air / snack or coffee / talk to someone / stretching / music / lying down / phone or social media; plus usual length 5 / 10 / 15 / 30 min | Break suggestions in the plan; the companion gently suggests screen-free breaks when phone is the only choice (guess, to check with the research) |
| F7 | How rested do you usually feel? (opt-in) | scale 1 (exhausted) to 5 (well rested) | Lower daily cap when 1 or 2; companion mentions sleep, never gives medical advice |
| F8 | How do you recharge best during the Lernphase? | multi: sport / time outside / friends / music or hobby / cooking / sleeping in / other | Ideas for rest boxes and longer breaks; when and how often comes from the calendar (E2, E5) |

#### G. How you study now (about 2.5 min)

| # | Question | Type | Feeds the plan |
| --- | --- | --- | --- |
| G1 | What do you usually do when you study? | multi: reread notes / write summaries / flashcards / solve Serien / past exams / explain to others / watch videos / other | Plan keeps familiar methods but shifts time to practice and recall; explains why |
| G2 | Roughly what share of your study time is solving problems vs reading? | slider 0 to 100 % | Sets how strongly the plan nudges towards practice |
| G3 | How long can you focus before you need a break? | single: 25 / 50 / 90 min / it varies | Block length |
| G4 | What matters most to you in a study space? Pick up to 3 | multi, max 3: quiet / group work allowed / power and WiFi / long opening hours / close to where I live / daylight / coffee and food nearby / free of charge / seat I can reserve / I study best at home; plus: where do you live during the Lernphase? (town or district only, e.g. Zürich Kreis 6, Winterthur) | Study-space recommendations in that region, and a daily tip after the morning check-in that matches today's mood and the usual occupancy at that time and day (data source to be built, see open questions) |
| G5 | Alone or with others? | single: alone / sometimes in a group / mostly in a group | Schedules group sessions for Serien and exam discussion |
| G6 | How often do you start later than you planned? | scale 1 (rarely) to 5 (almost always) | Starts days with a short, easy task; adds reminders |
| G7 | In your last exam phase, how much of what you planned did you actually get done? | single: under 50 % / 50 to 75 % / 75 to 90 % / almost all / first exam phase | Buffer factor: the plan fills only that share of the available time (default: fill 80 to 85 % of free time, plus 1.5 times padding on first time estimates; planning-fallacy research, to tune in the pilot) |
| G8 | What usually knocks a study day off track? | multi: phone / tiredness / unclear what to do next / one task taking too long / social plans / worry | Matching countermeasures, e.g. a clear first task, time caps per exercise |
| G9 | What worked well for you in a past exam phase, and what didn't? | text, optional | Companion adapts the plan, e.g. keeps a routine that worked |

#### H. How you want the plan (about 1.5 min)

| # | Question | Type | Feeds the plan |
| --- | --- | --- | --- |
| H1 | How detailed should each day be? | single: exact time blocks / ordered task list / weekly goals only | Plan view and granularity |
| H2 | One course per day, or mixed? | single: one per day / two per day / mixed | Interleaving level; the planner explains the benefit of mixing in the Lernphase |
| H3 | Start the day with something easy or the hardest task? | single | Order of blocks inside a day |
| H4 | The plan always includes 5 to 7 full mock exams per subject (3 to 4 for Informatik), at most 1 to 2 a day, Analysis I and Physik I first. Do you prefer each mock in one sitting, or split into two halves on busy days? | single: one sitting / split when needed | Placement of the mock exams, timed like the real exam, in the student's peak focus window (F3) |
| H5 | When should the evening check-in happen? (A short morning check-in, "How do you feel today?", comes with the day's study-space tip.) | time picker, default 30 min after the last block | Reminder for the daily check-in: rating 1 to 5 of topics covered, number of exercises solved and mocks done, difficulties and doubts, sleep and energy |
| H6 | When you fall behind, should the planner reschedule automatically or propose a change first? | single | Replanning mode |
| H7 | How should the companion talk to you? | single: short and factual / encouraging / direct, push me | Tone of AI messages |
| H8 | Reminders | single: none / start of each block / once a day | Notifications |

#### I. Ways of working that help (about 0.5 min, optional, opt-in)

Unchanged from spec section 3 item 9: preferences such as shorter blocks, more variety, fixed routines, a study partner, fewer choices per day, extra buffer days. Students may mention ADHD, dyslexia, autism, anxiety or a chronic illness; the planner uses only what they choose to share, and only as preferences.

#### J. Anything else, and review (about 1.5 min)

| # | Question | Type | Feeds the plan |
| --- | --- | --- | --- |
| J1 | What worries you most right now? | text, optional, opt-in | Companion tone; distress wording triggers the support notes in spec section 6 |
| J2 | What is hardest for you at the moment? | text, optional, opt-in | Extra time or a different approach for that topic |
| J3 | Summary screen: "Here is what we understood" | editable list of the key answers | Student corrects before the first plan is generated |

## 4. The calendar (module E in detail)

The calendar is a StudyHub-native pop-up inside the questionnaire, saved with the plan and editable at
any time from the plan page.

- **Range:** every week from today to the last exam, as week and month views.
- **Layers:** lectures and exercise classes (from the programme file, 2.1), the student's recurring
  boxes, one-off events, rest days, and later the study sessions the plan adds.
- **Recurring boxes** are drawn once in a template week and repeat in every week. An exception (skip or
  move in one week) is stored per date and never changes the template.
- **Labels:** at most one broad label per box (Commitment, Movement, Social or family, Rest), or none.
  The planner never asks what a box is for.
- **Import:** an uploaded `.ics` is parsed in `api/` into busy boxes (start, end, recurrence only);
  titles, places and notes are dropped, and the file itself is deleted right after parsing.
- **Recommended rest days** are shown shaded (one per week, a lighter day after each exam, and 3 to 4
  days at Christmas: 24 to 26 Dec and 1 Jan) and become real with one click.
- **Advice after "Done":** simple, deterministic rules produce at most 3 tips, each with a one-click
  fix, for example: no Movement box in a week → suggest 2 to 3 short exercise sessions; fewer than one
  rest day a week → suggest one; rest days bunched together → suggest spreading them; less free time
  than the material needs → say so honestly and show what would be dropped.
- **Study sessions** are added only into free time by the scheduler (section 5), and each day gets its
  study goals and tasks with links into StudyHub.

## 5. How the plan is made

**Split the work:** a deterministic scheduler on our server does the time arithmetic; the LLM
(Apertus on Infomaniak) chooses and words the content of each session, writes the daily goals and
tasks, explains the plan and encourages. An LLM must never be the thing that adds up hours or checks
for overlaps; every LLM proposal goes through the scheduler's checks before it is shown.

### 5.1 Hard constraints (never broken)
- No study in blocked boxes, during the sleep window, or within about 1 h before bedtime.
- **At most 8 hours of study per day** (the student may choose 4 or 6), plus a weekly cap from C7.
- Rest days and Rest boxes are protected and never overwritten by replanning.
- **At most 1 to 2 full mock exams per day.**
- Each Serie finishes before its deadline, with a buffer (lecture period).
- The day before an exam: light review only.

### 5.2 Priorities
Time per chapter ∝ exam weight × gap (5 − rating, refined by progress, results and mistake patterns) ×
remaining time, within the subject shares the student set in D6, with a floor so nothing taught is
dropped silently. The plan fills only 80 to 85 % of free time and pads first time estimates by 1.5
(planning fallacy, Buehler et al. 1994), adjusted by G7 at first and then by the real completion rate
from the trial period and check-ins. Default weekly load: 40 to 48 h in the Lernphase (8 h cap, one
rest day), about 15 to 25 h of self-study on top of the timetable in the lecture period.

### 5.3 Session content (learning-research rules)
- **Theory with past exam questions:** each theory block ends with single past exam questions on that
  chapter, instead of saving all past questions for the end.
- **Retrieval practice** over re-reading: every block ends with recall (flashcards, an exercise, or
  "close the script and write it down").
- **Proofs (Analysis I):** proof skeletons, self-explanation of each step, then rebuilding the proof
  from memory; the theorems the exam map says come up get spaced repeats.
- **Worked examples first, then fading**, for chapters rated 1 to 2.
- **Spaced repetition:** chapters come back after growing gaps; flashcards follow `05-spaced-repetition.md`.
- **Interleaving** in the Lernphase: mixed exercise sets across chapters and subjects (if H2 allows).
- **Hard tasks in peak focus times** (F3), light review and flashcards in low-energy times (F4).
- **Blocks and breaks** of the chosen length (G3), with break ideas from F6 and F8.

### 5.4 Mock exams
- **Targets with tolerance:** 5 to 7 full mocks each for Analysis I and Physik I, 3 to 4 for
  Informatik (few exist). The plan aims for the upper number and counts the lower one as enough.
- Never more than the stock in 2.4, never one the student has already done (D5).
- Timed like the real exam (length and aids from B6), placed in peak focus time, at most 1 to 2 per day,
  Analysis I and Physik I first, mostly in the last weeks before each exam.
- On busy days a mock may be split into two halves (H4).

### 5.5 Phases
1. **Lecture period (until the last lecture day):** keep up with lectures or recordings, Serien on
   time, a short weekly review, close the biggest gaps.
2. **Christmas break:** rest days first (from the calendar), then the lowest-rated chapters.
3. **Lernphase (January):** full revision by exam weight and gap, interleaved practice, proofs, mocks.
4. **Exam session:** per-exam countdown, light review before each exam, rest after each.

## 6. Trial period, calibration and daily check-in

### 6.1 Trial period
The first plan runs as a **3-day trial**. The student follows it and does the daily check-ins; then the
calibration check-in (up to 7 minutes) follows, answers from the three check-ins are pre-filled, and the
LLM proposes an adjusted plan that the scheduler checks and the student approves (K10).

#### Calibration questions (module K, up to 7 min)

The first plan runs as a trial period (3 days, Rachel 26 Nov). Then a longer check-in asks these questions, and the LLM adjusts the whole plan and gains context. Answers from the daily check-ins in that period are pre-filled, so the student only confirms or corrects them.

| # | Question | Type | Feeds the plan |
| --- | --- | --- | --- |
| K1 | How realistic was the daily load? | scale 1 (far too much) to 5 (far too little), 3 = right | Scales the daily load up or down |
| K2 | Share of planned blocks you completed | pre-filled from check-ins, student confirms | Replaces the buffer guess from G7 with real data |
| K3 | Did the block length and breaks fit? | single: blocks too long / right / too short; breaks too few / right / too many | Block and break length |
| K4 | Were the hard tasks at the right time of day? | single: yes / better earlier / better later | Moves the focus windows (F3) |
| K5 | Re-rate the chapters you worked on | numerical 1 to 5, only for chapters touched in the trial | Updates the gap term in the priority formula |
| K6 | Is the time split between Analysis I, Physik I and Informatik still right? | the 3 sliders from D6, showing the actual split | New subject shares |
| K7 | Which kinds of tasks helped most, and which least? | ranking: theory review / past exam questions / exercises / flashcards / proofs / mock parts | Task mix per block |
| K8 | How were sleep, energy and rest days? | scale 1 to 5 each (sleep opt-in) | More rest or lighter days when low |
| K9 | What should change? Any difficulties or doubts so far? | text, optional, encouraged | LLM context for the replan; companion follows up |
| K10 | Summary: "Here is how we'll change your plan" | editable list | Student approves the adjusted plan |

### 6.2 Daily check-ins (morning about 30 seconds, evening about 2 minutes)
- **Morning:** "How do you feel today?" (energy 1 to 5, optional mood word), then the day's plan and a
  **study-space tip** (6.3).

Evening:
- **Short test questions** on the day's topics (a few, low stakes, never graded as a score).
- **Self-evaluation:** a 1 to 5 rating of each topic covered.
- **Counts:** exercises solved, mock exams done, blocks done / partly / not done.
- **Difficulties, weaknesses and doubts** in a free-text box that the companion actively invites
  ("anything that felt unclear today?"); writing worries down can help (Ramirez & Beilock 2011).
- **Sleep and energy:** hours slept and energy 1 to 5 (sleep opt-in).
- **Missed a day:** "I couldn't study today" re-plans the rest: missed blocks are re-prioritised, not
  just pushed onto tomorrow. If there is less time than material, the planner says so honestly and
  drops the lowest-priority items first instead of piling on hours. Replanning is automatic or
  proposed first, as the student chose (H6).

### 6.3 Study-space recommendations
- From G4: what matters most to the student in a study space (up to 3) and the town or district where
  they live during the Lernphase (never an exact address).
- A curated list of study spaces per region, starting with Zürich (ETH and UZH libraries and learning
  rooms, city libraries), with opening hours and features, kept by the Maintainer AI from public pages
  and reviewed by a human; usual occupancy by weekday and hour where a public source exists. The LLM
  does not browse the web per student: it ranks this list.
- After the morning check-in the companion suggests 1 or 2 places that fit the student's priorities,
  today's mood (e.g. low energy → somewhere close by and calm) and the usual occupancy at that time.
- Data sources and occupancy feeds are still to be found (open question 1).

## 7. The plan page (`plan.html`, signed-in only)

- **Today:** the day's sessions with their goals and tasks, linked straight into the StudyHub lesson,
  flashcards, past exam questions, Serie or mock.
- **Calendar:** week and month views of the calendar from section 4, editable at any time.
- **Until the exams:** progress per subject and chapter, mocks done against the target.
- **Edit:** drag sessions, lock sessions, change caps, re-run parts of the questionnaire. Every change is
  versioned, so "undo" and "restore last week's plan" work.
- **Lecture position:** "The lecture is now at …" with a one-tap correction (lecture period only).
- **Export** of the plan as `.ics` for students who use their own calendar (open question 3).

## 8. The AI companion's tone and limits

- Encouraging, understanding, specific and honest. Celebrates progress, normalises setbacks, never
  shames ("you're behind" becomes "here's the plan for the next three days").
- Uses the student's own words from the free-text boxes to tailor the plan, but never quotes them back
  in a way that feels like surveillance.
- **Not therapy.** If a student describes lasting distress, it says so kindly and points to the
  **Psychological Counselling Services UZH/ETH** (free, confidential, for ETH students; +41 44 634 22 80)
  and Nightline Zürich. If a student mentions thoughts of self-harm, it gives emergency contacts
  (143 Die Dargebotene Hand; 144 / 112 in an emergency) and does not continue as normal.
- Gives no medical advice about sleep, medication or diagnoses.


## 9. Data protection (needs a decision before any build)

- Sleep, worries, and any mention of ADHD, dyslexia or illness are **sensitive personal data**
  (Swiss revFADP "besonders schützenswerte Personendaten"; GDPR Art. 9 for EU students). Processing
  needs **explicit consent**, a clear purpose and data minimisation.
- **Consent screen** (module A) before the questionnaire: what is stored, why, where, who can see it,
  how to delete it. Separate opt-ins for the sleep questions, the "ways of working" module and the free text.
- **Storage:** our own MariaDB database on the Infomaniak Web Hosting in Switzerland (study-hub.ch),
  read and written only through `api/` with the per-user check in `api/lib/shdb.php` (each student sees
  only their own rows). One row per student per key (`my_items` keys `planner_profile`,
  `planner_calendar`, `planner_plan`, `planner_checkins`, `planner_research_consent`); these keys must
  be added to the allowed list in `shdb.php`. No admin view of these keys; never in analytics (Umami) or
  logs. Backups stay on the same hosting (`studyhub-data/backups/`, nightly job). **Supabase only
  handles login** and never sees planner data.
- **Calendar data** is stored as boxes with times and optional broad labels only. An uploaded `.ics`
  is parsed and deleted at once; titles, places and notes from it are never stored.
- **LLM calls:** Infomaniak AI Tools in Switzerland (requests not stored, not used for training, per
  Infomaniak), called only from the server (`api/`), never from the browser; the token lives in
  `studyhub-data/ai-config.php`, not in the repo. Prompts carry no names or emails and only what the
  session needs:

  | Data | Sent to Apertus? |
  |---|---|
  | Programme, exam dates, calendar | only a summary (free hours per day), never the raw calendar |
  | Goals, chapter ratings, study habits, plan preferences | as structured values |
  | Sleep and energy | only derived values (e.g. "peak focus: morning") |
  | Ways of working | only the chosen preferences, never diagnoses |
  | Free text | only with the opt-in from A2 |

- **Delete and export** buttons on the plan page. Nothing is ever used to train a model or for the
  model eval. Research use happens only with the separate, optional consent in 9.1.
- StudyHub is a student project, not an ETH service: the page says so.
- Any study of the planner's effect on real students needs informed consent and ETH Ethics Commission
  approval first (as in `03-plan.md`).

### 9.1 Optional consent for educational research

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


## 10. Evaluation before release

- **Feasibility checks (automatic):** no overlaps, the 8 h cap, sleep window and rest days respected,
  at most 1 to 2 mocks a day, mock targets met or the shortfall stated, every Serie before its deadline,
  every taught chapter scheduled, the replan after a missed day still feasible.
- **10 synthetic student profiles** (team-written, e.g. "works 12 h a week", "rated everything 1",
  "repeats the Basisprüfung", "prefers 25-minute blocks", "misses three days in January", "no free
  weekends"): plans reviewed by Rachel and Mridul.
- **Questionnaire timing:** 3 to 5 students on a click prototype; target about 21 minutes for A to J and
  at most 7 for the calibration.
- **Tone set:** the companion's replies to anxious or discouraged free text, scored like set R in
  `02-eval-spec.md` (kind, specific, points to support, no therapy).
- The companion model is whichever model wins the Track C pilot (Apertus is the first candidate).

## 11. Rollout

| Step | What | Needs |
|---|---|---|
| v0 | Calendar only: programme timetable, exam countdown, the calendar pop-up with recurring boxes, events, rest days and advice; no AI | Programme file for Mathematics and Physics (VVZ), page + nav + SQL OK (Mridul), MariaDB switched on |
| v1 | Questionnaire (form) + deterministic plan + LLM session content, goals and tasks | Consent text, Infomaniak AI key, SQL OK |
| v2 | Daily check-in, 3-day trial and calibration, replanning, lecture-position table | v1 used by the team first |
| v3 | More programmes, spring semester (block 2 with Linear Algebra) | Timetables and exam data per programme |

Test builds run on a separate test site first (see the Infomaniak setup guide); real student data only
on the production hosting.

## 12. Decisions log

| Date | Decision | Where |
|---|---|---|
| 26 Nov 2026 | Student data on our own Infomaniak server (study-hub.ch) under Swiss law; Supabase only for login | 9 |
| 26 Nov 2026 | Questionnaire 15 to 20 minutes (now about 21), following Rachel's guiding questions on exams, personal time and biorhythm | 3 |
| 26 Nov 2026 | First Basisprüfung = Analysis I, Physik I, Informatik, the same for Mathematics and Physics; depth in these three, time split asked | 1, D6 |
| 26 Nov 2026 | Daily cap 8 hours | 5.1 |
| 26 Nov 2026 | Numerical 1 to 5 ratings per chapter per subject, struggle aspects per subject, no exam-style questions in the questionnaire | D1, D2 |
| 26 Nov 2026 | Focus on proof learning | D3, 5.3 |
| 26 Nov 2026 | Mock exams: 5 to 7 per subject, 3 to 4 for Informatik, with tolerance; at most 1 to 2 per day | 5.4 |
| 26 Nov 2026 | Single past exam questions while revising the theory; use StudyHub progress and mistake patterns | 2.5, 5.3 |
| 26 Nov 2026 | Daily check-in: test questions, topic ratings, counts, doubts encouraged, sleep and energy | 6.2 |
| 26 Nov 2026 | Calendar pop-up up to the exams, students give only broad labels; advice after "Done"; LLM adds sessions with goals and tasks | 4 |
| 26 Nov 2026 | 3-day trial period, then calibration of up to 7 minutes | 6.1 |
| 26 Nov 2026 | About 21 minutes is fine; form-first with an optional chat for questions; "why we ask" behind a question mark per module | 3 |
| 26 Nov 2026 | Study-space questions and recommendations for the student's region, daily after the morning check-in with occupancy | G4, 6.3 |
| 26 Nov 2026 | Defaults from the research evidence base: 40 to 48 h a week in the Lernphase, 3 to 4 Christmas rest days, fill 80 to 85 % of free time | 5.2, 4 |

## 13. Open questions

1. Study spaces: which public sources list study spaces in Zürich with opening hours, and which publish
   occupancy? Who keeps the list up to date?
2. Rounding of the Basisprüfung block average (not yet verified); VMP pass statistics are optional.
3. Plan export as `.ics`: wanted in v1?
4. Does the Informatik exam include correctness proofs (D3)?
5. Mock stock per subject: how many full past exams and mocks StudyHub has, and whether more must be built.
6. Mridul: OK for `plan.html`, a nav entry for signed-in users and the new `my_items` keys?
7. Research consent (9.1): who is the responsible researcher or institute, and should ETH data
   protection or the Ethics Commission review the text before launch?
8. Lecture position: may we email lecturers or head TAs once per semester (layer A), and who signs?

## Sources
- ETH PAKETH calendar change from HS 2028: https://ethz.ch/students/en/studies/paketh-studies/adjustments/
- HS26 lecture period (UZH, same Zurich semester dates, to be confirmed for ETH): https://www.uzh.ch/cmsssl/en/studies/dates/dates.html
- ETH course catalogue (VVZ), binding once the semester starts: https://ethz.ch/students/en/studies/academic-support/course-catalogue.html
- myStudies timetable `.ics` export: https://ethz.ch/applications/teaching/de/applications/mystudies/welcome/schedule.html
- ETH Acceptable Use Policy for IT resources (BOT): https://www.ethz.ch/services/en/it-services/documents.html
- Psychological Counselling Services UZH/ETH: https://www.pbs.uzh.ch/en/contact.html
- Swiss FADP, sensitive data and explicit consent (Art. 5 lit. c, Art. 6 para. 7 DSG): https://onlinekommentar.ch/de/kommentare/art6abs6und7
- Basisprüfung Mathematik: Wegleitung Bachelor Mathematik (Reglement 2024): https://ethz.ch/content/dam/ethz/special-interest/math/department/Studies/enrolled-students/math-bsc-guide-2024-de.pdf
- Basisprüfung Physik: Wegleitung Bachelor Physik (Reglement 2021), Sep 2025: https://ethz.ch/content/dam/ethz/special-interest/phys/department/studies/bachelor/Wegl_Bachelor_Physik_A5_2025-HS-DS.pdf
- VVZ exam details Analysis I: https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=203950&semkez=2026W&ansicht=LEISTUNGSKONTROLLE&lang=de
- VVZ exam details Physik I: https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=202960&semkez=2026W&ansicht=LEISTUNGSKONTROLLE&lang=de
- Self-explanation and proof comprehension: Hodds, Alcock & Inglis (2014), JRME 45(1): https://mjinglis.github.io/files/JRME_SelfExpl_Paper.pdf
- Retrieval practice: Rowland (2014), Psychological Bulletin 140(6); Dunlosky et al. (2013), PSPI 14(1)
- Interleaved mathematics practice: Rohrer et al. (2020), J Educ Psychol 112(1)
- Planning fallacy: Buehler, Griffin & Ross (1994), J Pers Soc Psychol 67(3)
- Writing about exam worries: Ramirez & Beilock (2011), Science 331: https://pubmed.ncbi.nlm.nih.gov/21233387/
