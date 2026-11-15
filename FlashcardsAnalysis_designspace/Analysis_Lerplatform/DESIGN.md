# Lernkarten · Analysis I: how the app depends on StudyHub

The app lives in `Analysis_Lerplatform/` of this repo. The hub's workflow `sync-flashcards.yml` copies it to
`FlashcardsAnalysis_designspace/Analysis_Lerplatform/` in `mrisrijgd1/ETH-StudyHub`, where it is served.
All paths below are relative to that served location.

## Files

| File | What it is |
|---|---|
| `index.html` | Shell: MathJax 3.2.2 `tex-svg-full`, the deck data files, `fc/config.js`, `fc/app.js`, and `../../assets/account.js` |
| `fc/config.js` | **Everything meant to be tuned**: chapters and icons, mastery/weak/streak thresholds, kaomojis, greeting pool, lesson-card sources |
| `fc/app.js` | Router, storage, mastery rules, overview page, chapter pages, Proof practice, Weak cards, the card environment |
| `fc/app.css` | All styles. The only colour definitions are in the theme block at the top (`.fc-app { --fc-* }`) |
| `data_kapitel<N>.js` | Script-chapter decks (`window.FLASHCARDS_KAPITEL_<N>`). Card text is never changed by the app |
| `classic.html` | The previous single-page version, kept for comparison |

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
- **Lesson cards for Proof practice**: read at runtime from `../../flashcards.html` (EN) and `../../de/flashcards.html` (DE),
  `div.fc[data-l][data-t]` with `.q`/`.a`, skipping Physics (`data-s="p"`). One adapter (`loadLessons` in `app.js`); when the hub
  exports `assets/lesson-cards.json`, only that function changes.

## Derived colours (theme block)

Everything the hub has no token for is mixed from hub tokens with `color-mix()`: the heatmap scale, the soft rating backgrounds,
the accent-soft fallback. Fixed base hues are documented in the block: the rating colours (used only when the hub has no
`--design-success` / `--design-warning-fill` / `--design-danger`), the flame (orange/yellow) and the type badges. Card SVGs inside
explanations use fixed colours (`stroke:black`), so they sit on an always-white surface (`.fc-face svg:not(.fc-ui)`).

## Storage

`localStorage["studyhub-analysis-flashcards-v1"]` → `{ v, users: { <userId> | "guest": { cards, log, prefs, flags, name } } }`.
Per card: last 5 ratings (`a` again, `u` unsure, `g` got it), counts, last date. Review log: `[timestamp, cardId, rating]`.
Ratings of the old version (`analysis1-flashcards-k<N>`) are migrated once, without dates, so they don't count for streak or heatmap.
Export/import as JSON on the overview page. No server sync yet: that needs a Supabase table (requested in the AI mailbox).

## Rules (all in `fc/config.js`)

- Mastered = the last 2 ratings are "Gewusst". Unsure = the latest rating is "Unsicher".
- Weak = not mastered, and the latest rating is "Nochmal"/"Unsicher" or ≥ 2× "Nochmal" in the last 5.
- Streak: ≥ 1 review per day, Europe/Zurich days. "At risk" after 18:00 without a review today.
