# Exam Dive

A retro pixel-art deep-sea game with multiple-choice questions for ETH Analysis I and Physik I.
Every correct answer takes the diver deeper; the first wrong answer (or a timeout) ends the dive.
Plain HTML, CSS and JavaScript ES modules: no framework, no build step, no npm packages.

## Run it

ES modules do not load from `file://`, so serve the repository with any static web server:

```sh
python3 -m http.server 8000          # from the repository root
# open http://localhost:8000/dive/            public sample bank
# open http://localhost:8000/dive/?bank=dev   private developer bank (see below)
```

MathJax 3.2.2 (`tex-svg-full.js`) is loaded at runtime from jsDelivr. Without network the TeX
source stays visible as plain text and the start screen says so.

## Rules (prototype)

| Zone | Depth | Metres per correct answer | Difficulty drawn |
|---|---|---|---|
| Sonnenlichtzone | 0–200 m | +100 | 1 |
| Dämmerungszone | 200–1000 m | +200 | 1–2 |
| Mitternachtszone | 1000–4000 m | +500 | 2–3 |
| Abyssal | 4000–6000 m | +500 | 3–4 |
| Hadal | 6000–11000 m | +625 | 4–5 |

11000 m is the trench floor (24 correct answers, a perfect dive). No speed bonus.
All numbers live in one object, `ZONES` in `config.js`.

- Question draw (`drawQuestion` in `game.js`): no repeats within a dive; for "Gemischt" the subject
  is chosen with probability proportional to its still-available questions; the target difficulty
  is drawn with the zone's weights, and an empty level falls back to the nearest level, harder
  first (3 → 4, 2, 5, 1); inside a level, ids not seen in the last 5 dives are preferred.
- Timer per question: 0:30, 1:00, 2:00 (default), 3:00, 5:00 or "aus". "aus" is practice: saved in
  the history, never a best depth. Chapter-filtered dives are saved as "gefiltert" and never count
  for best depths. Best depths are kept per subject choice × timer.
- `single` questions: click or keys 1–6 / A–F. `multi` questions ("Alle richtigen ankreuzen"):
  checkboxes and "Antwort abgeben"; correct only if the ticked set equals the correct set exactly
  (the empty set is allowed).
- After every answer the reveal shows the right/wrong options, the player's choice, the explanation,
  per-option notes, references, source, answer status and a "Frage melden" link (new GitHub issue
  in `mrisrijgd1/ETH-StudyHub` with the question id in the title).
- "Auftauchen" in the HUD during an open question asks for confirmation, ends the dive, keeps the
  depth and records that question as unanswered (ended by "abort").
- If the (filtered) bank runs out of unused questions, the dive ends without penalty ("exhausted").
  With the 12 public sample questions this happens after at most 6 questions per subject.
- Storage: one localStorage key `studyhub.dive.v1` (last 100 dives, best depths, ids of the last 5
  dives, preferences: language, mute, subject, timer, chapters). Every access is wrapped in try/catch.
- UI in German, English toggle; keyboard play (Esc surfaces / closes the review); muted 8-bit sound
  by default (remembered); honours `prefers-reduced-motion` (no creature motion, no roll-ups,
  instant camera); the sea renders at most 30 fps and idles while a solution is shown.

## Files

| File | What |
|---|---|
| `index.html`, `style.css`, `main.js` | Page, styles, app controller (screens, timer, reveal, history, review) |
| `config.js` | Zones, timers, storage key, report repo, MathJax URL |
| `game.js` | Pure game logic: scoring, zones, draw, answer check, chapter filter, report URL |
| `storage.js` | localStorage state: history, bests, recent ids, preferences |
| `bank.js` | **The only place that knows where questions come from** (`loadBank()`) |
| `sea.js`, `sprites.js`, `pixelfont.js` | Pixel sea canvas, glyph creatures, 5×7 bitmap font |
| `audio.js`, `math.js`, `i18n.js` | Web Audio blips, MathJax loader, DE/EN strings |
| `chapters.json` | Chapter titles: Analysis 1–9, Physik 1–8 and P9–P13 |
| `questions/index.json`, `questions/sample.json` | Public bank: 12 self-written sample questions |
| `questions/dev/` | Private developer bank, **gitignored** (`dive/.gitignore`) |
| `tools/convert.py` | Converter from enrichment + bank records to the normalised format |
| `tests/*.test.mjs` | Unit tests |

## Question format

`loadBank()` returns an array of normalised questions:

```json
{
  "id": "sample-ana-3",
  "subject": "analysis",
  "lang": "de",
  "source": { "kind": "studyhub", "label": "StudyHub-Beispielfrage (selbst verfasst)" },
  "chapter": 7,
  "type": "multi",
  "difficulty": 3,
  "stem": "Welche der folgenden Reihen konvergieren?",
  "options": [{ "key": "a", "text": "$\\displaystyle\\sum_{k=1}^{\\infty} \\frac{1}{k}$" }],
  "correct": ["b", "c"],
  "fixedOrder": false,
  "explanation": "...",
  "optionNotes": { "a": "Falsch. Gegenbeispiel ..." },
  "refs": ["Skript Proposition 7.25 (Leibniz-Kriterium)"],
  "figure": null,
  "answerStatus": "verified"
}
```

- `subject`: `analysis` or `physics`. `chapter`: script chapter number (Analysis 1–9, Physik 1–8)
  or `"P9"`–`"P13"` for physics topics outside the script (Schwingungen, Wellen, Fluide,
  Thermodynamik, Sonstiges). Titles come from `chapters.json`.
- `type`: `single` (exactly one correct key) or `multi` (any number, also none).
- 2 to 6 options; `correct` must use option keys. Options are shuffled unless `fixedOrder` is true.
  Shuffled options are labelled a, b, c … by position; fixed-order options show their own keys.
  **Set `fixedOrder: true` whenever the explanation or notes refer to options by letter.**
- Text fields may contain TeX in `$...$` (inline) and `$$...$$` (display). A blank line starts a
  new paragraph. Text is inserted as text, never as HTML.
- `figure`: `null`, a relative URL (resolved against the page) or an `https://` URL.
- `answerStatus`: `official` (published answer key) or `verified` (solved by StudyHub and
  double-checked). It is shown as a badge in the reveal.
- `bank.js` validates every question and skips invalid ones and duplicate ids with a console warning.

## Adding questions

1. **Never put real exam or quiz text in the public bank.** Everything in this repository is public.
   Public questions must be written from scratch (like `questions/sample.json`).
2. Add the questions to a JSON array file in `questions/` and list the file in `questions/index.json`
   (`{"files": ["sample.json", "my-file.json"]}`).
3. Every option needs a note in `optionNotes`; for wrong options give the counterexample or the
   physical reason and say which hypothesis fails. Cite only references you checked in the script.
4. Run the tests: the bank test checks the public sample file.

Private questions (old exams, course quizzes) belong in the gitignored `questions/dev/` folder now
and, later, in Supabase for signed-in users. To switch the source, change only `loadBank()` in
`bank.js`; it must keep returning normalised questions (`normaliseAll()` does the validation).

## Developer bank and the converter

`tools/convert.py` merges enrichment records (fields `answer`, `stem_tex`, `options_tex`,
`explanation`, `option_notes`, `chapter`, `refs`, `difficulty`, `needs_figure`, plus `solvable`
and `confidence`) with the raw bank records (subject, source label, option order, official answer)
and writes normalised JSON plus an `index.json` for the output folder:

```sh
python3 dive/tools/convert.py \
  --bank ../eth-studyhub-library/mcq/analysis/quizzes.json \
  --enriched ../dive-work/analysis/quizzes.enriched.json \
  --out dive/questions/dev/analysis-quizzes.json
```

It skips (with a warning) records that are unsolvable, below `--min-confidence` (default `high`),
disagree with a known answer in the bank, need a figure that is not available (pass
`--figure-root` to copy `page_image`/`slide_image` files into the output folder), or fail
validation. It sets `fixedOrder` when explanations refer to options as `(a)`, `(ii)` etc. or when
keys are Roman numerals, and `answerStatus` to `official` when the bank has a published answer,
else `verified`. `--bank` and `--enriched` can be repeated.

## Tests

```sh
node --test dive/tests/              # all tests (tests/index.js loads every *.test.mjs)
for f in dive/*.js; do node --check "$f"; done
```

The tests cover scoring and zone boundaries, difficulty weights and fallback, no repeats, recent-id
preference, proportional subject choice, exact multi-select checking (including the empty set),
chapter filtering and the "gefiltert" rule, storage (corrupt data, 100-dive cap, bests rules),
bank validation and `?bank=dev`, the public sample bank, the converter (needs `python3`) and
DE/EN string parity.
