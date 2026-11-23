# Lernkarten (Analysis I, Lineare Algebra I): how the app depends on StudyHub

The app lives in `Analysis_Lerplatform/` of this repo. The hub's workflow `sync-flashcards.yml` copies it to
`FlashcardsAnalysis_designspace/Analysis_Lerplatform/` in `mrisrijgd1/ETH-StudyHub`, where it is served.
All paths below are relative to that served location. (The folder keeps its old name so the sync keeps working;
renaming it means changing `sync-flashcards.yml` in the hub.)

## Structure: one start page, one folder per subject

```
index.html            Lernkarten start page: one tile per subject (flame, thermometer, message) → the subject
fc/subjects.js        the subjects: id, title, folder, storage key, flame colour (element), daily goal
fc/hub.js             start page logic (reads each subject's storage; same user and streak rules as fc/app.js)
fc/app.js, app.css    the engine shared by all subjects (+ start-page and thermometer styles at the end of app.css)
fc/config_<id>.js     everything meant to be tuned per subject (chapters, icons, thresholds, greetings, …)
analysis/             Analysis I: index.html, data_kapitel1–9.js, classic.html
linalg/               Lineare Algebra I: index.html, data_kapitel0–10.js
```

The hub's "Lernkarten" button (next to the subjects in the shared header) should link to `index.html` of this folder.
Old links with a hash route (`…/Analysis_Lerplatform/#/kapitel-3`) are forwarded to `analysis/` by `index.html`.
Progress is kept: localStorage belongs to the origin, not the path.

## Files

| File | What it is |
|---|---|
| `index.html` | Start page shell: `fc/app.css`, `fc/subjects.js`, `fc/hub.js`, `../../assets/account.js` |
| `<subject>/index.html` | Subject shell: MathJax 3.2.2 `tex-svg-full`, the deck files, `../fc/subjects.js`, `../fc/config_<id>.js`, `../fc/app.js`, `../../../assets/account.js` |
| `fc/subjects.js` | List of subjects. A new subject = an entry here + its folder + `fc/config_<id>.js` |
| `fc/config_analysis.js`, `fc/config_linalg.js` | **Everything meant to be tuned** per subject: chapters and icons, mastery/weak/streak thresholds, kaomojis, greeting pool, lesson-card sources |
| `fc/app.js` | Router, storage, mastery rules, overview page, chapter pages, Proof practice, Weak cards, the card environment; writes a small `summary` per user for the start page |
| `fc/app.css` | All styles. The only colour definitions are in the theme block at the top (`.fc-app { --fc-* }`); the flame colour is set per subject |
| `<subject>/data_kapitel<N>.js` | Script-chapter decks (`window.FLASHCARDS_KAPITEL_<N>`). Card text is never changed by the app |
| `analysis/classic.html` | The previous single-page Analysis version, kept for comparison |

## Start page (`index.html`, `fc/hub.js`)

- One tile per subject, at the top: the flame creature (same drawing as in the subjects) in the subject's flame colour,
  streak, and a horizontal thermometer whose liquid has the same colour.
- Flame colours are flame-test colours of elements: Analysis I = copper (green), Lineare Algebra I = strontium (red).
  Free colours for further subjects are listed in `fc/subjects.js`.
- Thermometer = cards rated today / daily goal. Goal = `min(dailyGoal, cards not yet mastered + today's ratings)`; the number of
  cards not yet mastered comes from the `summary` that `fc/app.js` stores (`users[<id>].summary`) on every start and rating.
  Before a subject was ever opened, the goal is `dailyGoal`.
- Messages (short, energetic, never loss or guilt): "Wow, 12 heute – weiter so!", "Tagesziel geschafft – stark!",
  "Tag 5 wartet – los geht's!" (streak running, nothing today, after 18:00 Zurich), "Auf zu Tag 5!",
  "Bereit für ein paar Karten?", "Noch nicht gestartet – leg los!". With the streak hidden, the tile has no flame and no
  streak text, and the messages only talk about today's cards.
- Each subject has its own streak, storage and progress; the subject pages link back with "‹ Alle Fächer".

## What comes from the hub

Loaded through `../../assets/account.js` (it injects `learning-app.css`, `studyhub.css`, `appearance.css`, `studyhub.js`):

- **Design tokens** read by the theme block, each with a fallback so the page also works standalone:
  `--design-bg`, `--design-surface`, `--design-raised`, `--design-ink`, `--design-muted`, `--design-line`, `--design-soft`,
  `--design-accent`, `--design-accent-text`, `--design-on-accent`, `--design-accent-soft`, `--design-shadow`,
  `--design-success`, `--design-warning-fill`, `--design-danger`, `--design-focus`, `--design-border`, `--app-radius`.
  Tokens that don't exist yet (e.g. `--design-raised`) simply fall back.
- **Hub classes the app adds to its own elements** so hub styling applies: `learning-app` (on `<main>`), `stats-grid` + `stat`
  (KPI tiles), `course-grid` + `subject-card` + `course-icon` (chapter boxes). The app's own `.fc-app …` rules win where layout matters.
- **Shared header, Design menu (light/dark × palettes)**: from `studyhub.js`, untouched.
- **Accounts**: `window.SH` (`user`, `sb`, `saveCourseProgress`) and the `sh-auth` event. Display name: `profiles.nickname`,
  otherwise the first name from the Google account. Without an account the app asks once for a name.
- **Lesson cards for Proof practice**: read at runtime from `../../../flashcards.html` (EN) and `../../../de/flashcards.html` (DE), seen from `analysis/`,
  `div.fc[data-l][data-t]` with `.q`/`.a`, skipping Physics (`data-s="p"`). One adapter (`loadLessons` in `app.js`); when the hub
  exports `assets/lesson-cards.json`, only that function changes.

## Derived colours (theme block)

Everything the hub has no token for is mixed from hub tokens with `color-mix()`: the heatmap scale, the soft rating backgrounds,
the accent-soft fallback. Fixed base hues are documented in the block: the rating colours (used only when the hub has no
`--design-success` / `--design-warning-fill` / `--design-danger`), the flame (orange/yellow) and the type badges. Card SVGs inside
explanations use fixed colours (`stroke:black`), so they sit on an always-white surface (`.fc-face svg:not(.fc-ui)`).

## Storage

`localStorage["studyhub-analysis-flashcards-v1"]` → `{ v, users: { <userId> | "guest": { cards, log, prefs, flags, name, summary } } }` (Lineare Algebra: `studyhub-linalg-flashcards-v1`, same shape).
Per card: last 5 ratings (`a` again, `u` unsure, `g` got it), counts, last date. Review log: `[timestamp, cardId, rating]`.
Ratings of the old version (`analysis1-flashcards-k<N>`) are migrated once, without dates, so they don't count for streak or heatmap.
Export/import as JSON on the overview page. No server sync yet: that needs a Supabase table (requested in the AI mailbox).

## Rules (all in `fc/config_<id>.js`)

- Mastered = the last 2 ratings are "Gewusst". Unsure = the latest rating is "Unsicher".
- Weak = not mastered, and the latest rating is "Nochmal"/"Unsicher" or ≥ 2× "Nochmal" in the last 5.
- Streak: ≥ 1 review per day, Europe/Zurich days. "At risk" after 18:00 without a review today.
- Match (Streichholz, under the flame): restores the streak after exactly **one** missed day. The learner practises
  `restoreSize` cards (`#/session/restore`); when the round is finished, the missed day is stored in `flags.repairs`
  (`{ day, used }`) and counts for the streak (dashed outline in the heatmap). One match; it grows back
  `restoreCooldownDays` days after use.
- "Show streak" (Mridul's wish, StudyHub's "built for bad days, no guilt"): a small "ausblenden" / "hide" link next to the
  streak count sets `prefs.streak = false` for the user, in this subject and in every other subject of `fc/subjects.js`
  (so it syncs with the account). Off: no flame, streak count, match or streak greetings; the panel shows today's cards
  and a "Streak anzeigen" link. On: wording stays energetic without loss: an ended streak is a "Neuer Start heute!" with
  the sleeping (not the extinguished) creature, the risk button is "Flamme anfachen", a day off is "Einen Tag Pause
  gemacht? Zünd dein Streichholz".
- StudyHub's own switch (My StudyHub → Your design → Hide → "Flashcards streak", or the student's AI via the connector,
  `hide: streak`) is stored by the hub in localStorage `sh-design` (`hide: [..., "streak"]`). `streakOn()` and the start page
  read it directly and treat it as "off", also on the first view before the hub's `overlay.js` has written `prefs.streak`.
  While it is on, the panel shows "Ausgeschaltet in Mein StudyHub → Dein Design" (a link to `account.html#my-design`)
  instead of the "Streak anzeigen" button.
- Order (session toolbar, "Reihenfolge ▾"): Chronologisch (script order) or Gemischt; weak and rescue decks also offer
  "Schwächste zuerst". Chapter/proof decks remember the choice (`prefs.shuffle`). The data files are not always in
  script order, so `chronoKeys()` sorts by section, then the script's item number in the title/meta (Definition 3.12 → 12),
  then file order.

## Streak flame

An original little fire creature (inline SVG in `flameSvg()`): three layers of tongues (red → orange → yellow) plus a
white-hot core, each tongue swaying on its own clock, an `feTurbulence` displacement for the flicker, embers, and a face.
States (classes): `happy` (done today), calm (not yet), `risk` (worried brows, sweat drop, dimmer), `none` (asleep, grey, "z"),
`out` (grey, smoke), `lvl1–3` (grows), `celebrate` (sparks). The fire colours are CSS variables on `.fc-flame`.
`prefers-reduced-motion` stops every animation.
Per subject the creature takes its element colour: `palette` in `fc/subjects.js` becomes `--sf-*` on `.fc-app[data-flame]`
(or on a start-page tile), and the rules at the end of `app.css` map it onto the ten gradient stops; risk dims it towards grey,
asleep/out stay grey. The start page copies `flameSvg()` into `fc/hub.js` with per-tile gradient ids (keep both in sync).

## Card comments → forum

Under each card a quiet "Beispiel, Wunsch oder Unklarheit zu dieser Karte?" opens a small form (kind: Beispiel /
Wunsch / Unklarheit, text, anonymous). Sending inserts a thread into the hub forum (`forum_threads`, signed-in users only):
topic `fc-analysis-k<N>` or `fc-analysis-proof`, title `<kind> · <card title>`, body = text + a footer with the card and
a `Karten-ID: <id>` line (used to show "n Kommentare im Forum" under the card). Guests get a sign-in link (`SH.signIn`).
Config: `comments` in `fc/config_<id>.js` (forum and account links are `../../../` from a subject folder). Open points for the hub (ask via the AI mailbox):
- `topicName()` in `assets/account.js` shows unknown topics raw; a label for `fc-analysis-*` would read nicer.
- "Sent to the team": the forum is readable by the team already; an e-mail per comment needs a backend
  (e.g. a Supabase Edge Function or DB webhook). Set its URL as `comments.notifyUrl` and the app also POSTs each comment there.

## Lineare Algebra I (`linalg/`)

A second subject on the same engine. Everything subject-specific is in `fc/config_linalg.js`; `fc/app.js` reads these
keys and falls back to the Analysis values, so the Analysis page behaves as before:
`subject`, `courses` (one box grid per course), `proofPractice` (false: the hub's proof lessons are Analysis), `legacyPrefix`
(null: nothing to migrate), `courseProgressPrefix`, `exportApp`, `exportFile`, `footerNote`, `classicLink` (null hides it).

- Own storage key `studyhub-linalg-flashcards-v1`, so Analysis progress and streaks stay separate.
- Chapters follow the lecture notes (Halbeisen, HS 2026, bis KW 47): chapter 0 = KW-38 section "Bekannte Beispiele alg.
  Strukturen", chapters 1–10 = script sections 1–10. Categories are `<chapter><letter> <heading>` so they sort in script order.
- Card type `aufgabe` (exercise from the problem sets, label "Aufgabe"/"Exercise", tag colour in `app.css`).
- Deck files use `String.raw` template literals, so LaTeX is written with single backslashes; never write `${` in a card.
- Notation follows the script: matrix entries $a_i^j$ (upper = column, lower = row), bases $\mathcal{B}_V$ (in Kap. 4: $B$),
  base-change matrices $B_V$, $\tilde A_\varphi = B_W A_\varphi B_V^{-1}$, $A^t$, $\dim(V)$, $\mathrm{Ker}(\varphi)$, $\mathrm{Bild}(\varphi)$.
- New features work on both pages: the match (`restoreSize`, `restoreCooldownDays`; defaults 10 / 7 if missing) and the card
  comments (`comments.topicPrefix` = `fc-linalg-`, so Lineare Algebra comments get their own forum topics `fc-linalg-k<N>`).
