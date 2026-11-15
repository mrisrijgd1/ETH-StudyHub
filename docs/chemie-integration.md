# Chemie I (PC) in the main StudyHub

The live course is served from `chemie/`, on the same GitHub Pages origin as Analysis, Physics and Linear Algebra. Both homepages and the shared navigation link to it. `chemie.html` and `de/chemie.html` forward to the course.

## Files

- `chemie/course.json`: 27 German lessons, three exercises each, hints, solutions and quizzes.
- `chemie/documents.json` and `chemie/docs/`: the full source catalogue and 59 original PDFs.
- `chemie/assets/app.js`: lessons, revision, exams, notes, timers, export/import and progress.
- `assets/learning-app.css`: the original Analysis/Physics StudyHub presentation.
- `assets/studyhub.css` / `assets/studyhub.js`: the main site's shared design and Chemie navigation. Loaded from the existing account entry point on all current content pages.
- `Jamie/`: the complete standalone authoring project and handoff instructions, retained from the original Chemie branch. Its dist is the standalone snapshot; the integrated live version is `chemie/`. When rebuilding lessons with `Jamie/course.py`, copy generated course.json to `chemie/course.json`; preserve the integrated HTML, CSS and app changes.

Progress completion shares `sh-progress` under `chemie-01.html` through `chemie-27.html`, and appears in the existing account summary. Notes, written work and timers remain in `studyhub-chemie-v1` in the browser. The existing account synchronisation handles the shared completion records; authenticated remote sync was not exercised during the local guest checks.

Existing Analysis, Physics and Linear Algebra lesson content is retained. The Chemie course content is in German on both language homepages.

## Validation

JavaScript syntax checks; desktop homepage and existing Analysis lesson inspection; mobile Chemie lesson at 390px with no horizontal overflow or MathJax errors; completion visible as 1/27 in the main account summary. Source PDFs and course content were validated in the standalone authoring project.
