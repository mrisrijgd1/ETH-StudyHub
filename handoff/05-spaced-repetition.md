# 05: Spaced repetition, reminders and push notifications (spec draft v0, Euler for Rachel)

Turn StudyHub's flashcards into a spaced-repetition system: each student's cards come back just before
they would be forgotten, in short batches, with reminders in the app and **opt-in** push notifications.

Status: **proposal for discussion.** It changes `flashcards.html`, `sw.js` (site-wide), SQL and adds a
scheduled job, so each step is asked first on #65 (AGENTS.md rule 3).

## 1. What exists today
- `flashcards.html`: cards for Analysis I and Physics I (Linear Algebra after its redo), plus a German
  Analysis deck by script chapter. Each card has a **stable id** (`data-id`, e.g. `p03-6`), subject
  (`data-s`), type (`data-t`: def, thm, …) and lesson (`data-l`).
- "Again" puts a card back a few places, "Got it" removes it **for this round only**. Nothing is remembered
  between visits.
- `sw.js` already makes StudyHub an installable, offline-capable web app (`manifest.webmanifest`).
- Supabase accounts with row-level security (`my_items`, `progress`, …).

## 2. Goals
1. Remember, per student and card, when it should come back.
2. Short **batches** (default 20 cards) instead of endless decks, with an honest time estimate.
3. Reminders that help and never nag; push notifications only for students who ask for them.
4. Exam-aware: everything important is reviewed at least once in the last days before each exam.
5. Works offline; works with the study planner (04), but also on its own.

## 3. Scheduling algorithm
- **FSRS-6** (Free Spaced Repetition Scheduler) via the MIT-licensed `ts-fsrs` library (also used by many
  flashcard apps). It models each card's stability and difficulty from the student's own answers.
- **Rating buttons:** keep today's simple pair as the default and map it: *Again* → Again, *Got it* → Good.
  An optional "4 buttons" setting adds *Hard* and *Easy* for students who want finer control.
- **Target retention** 90 % by default (setting: 85 / 90 / 95 %).
- **One schedule per card number, in any language (decided by Rachel, 23 Nov).** The schedule is keyed only by
  the card id (`data-id`, e.g. `p03-6`). The English and German versions of a card must therefore keep the same
  id, and reviewing a card in German counts for the English version and vice versa. Cards that are genuinely
  different (e.g. the German script deck, ids `k1_…`) keep their own ids and schedules.
- **Exam mode:** with exam dates known (from the planner or entered on the flashcards page), intervals are
  capped so every card of that course is due at least once in the last 7 days before its exam.
- **No limit on new cards per day (decided by Rachel, 23 Nov).** Students learn as many new cards as they
  want. New cards follow the lecture: a lesson's cards are offered once the lecture has covered it (planner's
  lecture-position table, or the student adds lessons by hand). Instead of a limit, the page shows the
  **workload forecast** for the next 7 days (see §4.1), so students see what many new cards will cost later.
- **Load balancing:** FSRS "fuzz" spreads reviews so no day spikes. Daily review cap (default 100) so a
  backlog never becomes a wall.
- **Backlog recovery:** after missed days, overdue cards are sorted by how likely they are forgotten and
  spread over the next days within the cap. The message is "Welcome back: 3 short sessions catch you up",
  never a red number of 400.
- **Card changes:** each card stores a hash of its question and answer. Small wording fixes keep the
  schedule. If maintainers mark a card as substantially changed, it's shown once as "updated card".

## 4. Batches (review sessions)
- **Start:** "Review now: 20 cards · ~11 min" (time computed per §4.1) on the flashcards page, on the home page for signed-in students,
  and in the planner's daily plan as a block.
- **Content of a batch:** due cards first (most likely forgotten first), then new cards; **interleaved**
  across lessons and courses (a student can restrict a batch to one course).
- **Size:** default **20 cards** (decided by Rachel, 23 Nov); 10 / 30 / 50 or "X minutes" (time-based) as options. After a batch: "Done for now", with
  "One more batch" as a secondary button; no pressure to continue.
### 4.1 Time estimate
- **First view of a card: 1 minute.** Reading, understanding and trying to recall a new definition or theorem
  takes time.
- **Reviews get faster** as the card gets familiar (repetitions = successful reviews since the last "Again"):

  | Card state | Time |
  |---|---|
  | New (first view) | 60 s |
  | 1st repetition | 40 s |
  | 2nd repetition | 30 s |
  | 3rd repetition | 20 s |
  | 4th and later | 15 s |
  | After "Again" (lapse) | 40 s, then down the table again |

- A batch's estimate is the sum over its cards, rounded up to whole minutes. Example: 10 new cards + 10 cards
  at their 2nd repetition = 10 × 60 s + 10 × 30 s = 15 min. The same numbers feed the planner's flashcard block,
  the notification text and the 7-day forecast.
- **Calibration:** `srs_reviews` stores the real time per card, so after about 100 reviews the table is replaced
  by the student's own median times per state (shown as "based on your pace").

### 4.2 During a batch
- **Answer first, then reveal:** keep the current "Say the answer out loud or write it down" instruction;
  MathJax rendering as today.
- **Card types:** defs and theorems by default; computation cards optional. A "theorems to prove" filter for
  the exam's proof part (links to the exam map).

## 5. Reminders

### 5.1 In-app (everyone signed in, no permission needed)
- A small badge on "Flashcards" in the navigation: "12 due".
- In the planner (04): a "Flashcards ~N min" block on each day, sized from the forecast due count.
- Weekly summary on My StudyHub: cards learnt, reviews done, a forecast of the next 7 days. No streaks, no
  "you broke your streak".

### 5.2 Push notifications (opt-in only)
**Who and how:**
- Offered only to signed-in students, only after a tap on "Turn on reminders" in the flashcard settings,
  never on page load. Browsers ask for permission only after that tap.
- **iPhone/iPad:** web push works only for web apps added to the Home Screen (iOS/iPadOS 16.4 or later),
  and the permission prompt may only follow a tap on a subscribe button inside that web app. The settings
  page shows a short "Add StudyHub to your Home Screen" guide on iOS before offering the switch.
- Android, desktop Chrome/Edge/Firefox and macOS Safari: standard Web Push.

**What the student controls (all in one settings panel):**
- On / off, per device.
- Days of the week and a time window (e.g. "weekdays 17:00–19:00"). Default: none chosen, so the student picks.
- **Quiet hours:** never during the sleep window from the planner, or 22:00–08:00 if no planner.
- **Threshold:** only notify when at least N cards are due (default 10).
- **Frequency:** at most 1 per day (option: 2). No reminder if the student already reviewed that day.
- Exam period: optional "one extra reminder in the last week before an exam".
- Pause for X days (holidays, illness) without losing the schedule.

**What a notification says:**
- Title: "StudyHub flashcards". Body: "15 cards are ready (~8 min): Analysis I, Physics I." (time per §4.1)
- **No card content and no grades on the lock screen.** Tapping opens `flashcards.html?review=due`, which
  starts the batch directly.
- Kind and neutral wording, rotated; never guilt ("You haven't studied in 3 days!" is not allowed).

**How it's built:**
- `push_subscriptions` table: user id, endpoint, keys, device label, preferences, created_at. RLS: a student
  sees and deletes only their own rows.
- Supabase Edge Function `srs-notify`, run every 15 minutes by `pg_cron`: for each subscription whose time
  window has started (in the student's time zone), count due cards; if the threshold, frequency and quiet-hour
  rules allow it, send one Web Push (VAPID). Responses 404/410 delete the dead subscription.
- VAPID private key only as a Supabase secret. The service worker gets `push` and `notificationclick`
  handlers (a small change to `sw.js`).
- Logged: sent / failed counts only, no content.

## 6. Data and sync
- `srs_cards`: user id, card id, deck, FSRS state (due, stability, difficulty, reps, lapses, state,
  last_review), card hash.
- `srs_reviews`: user id, card id, rating, reviewed_at, elapsed time (for the forecast and, later, personal
  FSRS parameters).
- Both with RLS: only the student. Deleted with the account; export as CSV/JSON (also importable into Anki).
- **Offline:** reviews are saved in IndexedDB and synced later; the server replays them in time order.
- **Not signed in:** a local-only mode (this device, no reminders) with "Sign in to keep your progress on all
  devices"; local progress is merged on sign-in.
- Review data is learning data, not sensitive data. It's only used for research if the student ticks the
  matching box in the planner's research consent (04, section 7.1); add a "Flashcard reviews" category there.

## 7. Evaluation before release
- **Simulation:** replay synthetic review histories (diligent, irregular, 10 days missed, exam in 5 days)
  and check: daily load never above the cap, exam-mode coverage reaches 100 % of the course's cards,
  backlog clears within the promised days.
- **Time estimate:** compare §4.1 predictions with measured review times in the team pilot.
- **Notification rules test:** no push in quiet hours, at most N per day, none after a review that day,
  none below the threshold, none after opt-out (automated tests against the Edge Function).
- **Team pilot** (Rachel, Mridul, volunteers) for two weeks before release, with their consent.
- Later: compare predicted and actual recall per card type to tune the default retention.

## 8. Rollout
| Step | What | Needs |
|---|---|---|
| v1 | Saved schedule (FSRS), batches, local mode, sync with account, in-app badge | SQL OK, `flashcards.html` change OK |
| v2 | Opt-in push notifications | `sw.js` change OK, VAPID keys, Edge Function + `pg_cron` |
| v3 | Planner integration (daily block, lecture-following new cards, exam mode from planner dates) | 04 v1 |
| v4 | Personal FSRS parameters from each student's own history (after ~1,000 reviews) | Enough data, opt-in |

## 9. Open questions
1. Mridul: OK for two new tables, an Edge Function with `pg_cron`, and push handlers in `sw.js`?
2. Should "Got it / Again" stay the default, or should the 4-button version be default for everyone?

Decided by Rachel (23 Nov): one schedule per card id regardless of language; default batch 20 cards;
no daily limit on new cards; time estimate 1 min per new card, less with each repetition (§4.1).

## Sources
- ts-fsrs (FSRS-6, MIT licence): https://github.com/open-spaced-repetition/ts-fsrs
- Web Push for Home Screen web apps on iOS/iPadOS 16.4+: https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/
- Apple: sending web push in web apps and browsers: https://developer.apple.com/documentation/usernotifications/sending-web-push-notifications-in-web-apps-and-browsers
