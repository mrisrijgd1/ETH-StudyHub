# The StudyHub Standard

Rules-only copy for this repository. The master is a Claude Doc kept by the team lead; if the two differ, the doc wins and this file gets updated. Every person and every AI reads this before building or changing any StudyHub page.

The Analysis lessons are the bar for every StudyHub subject. Nothing may fall below them; everything may make them better.

## How the standard works

The standard binds every person and every AI who builds or changes StudyHub content: every Claude thread, every collaborator's agent (Okta, Tartaruga, Euler and any later one), and every human contributor.

1. **Read it before you start.** A new thread or agent reads this doc before writing a page. A new subject starts from it, not from its own ideas.
2. **The floor only moves up.** A rule can be made better, never weaker. Removing or loosening a rule needs Mridul's yes. Improving one (clearer, kinder, faster to use) is welcome: propose it, and once Mridul agrees, it applies to every subject, old and new.
3. **Check before merging.** Before a page goes live, go through the checklists below line by line. A page passes only if every line is yes. Say in the PR which lines were checked.
4. **Adapt the form, keep the purpose.** Each rule names what it is for. A subject without proofs still needs what the proof format gives: a frame, a picture beside the formal version, the recurring moves, a self-check ladder. The adaptation for each subject is written down here (see the table in the proofs section).
5. **Fix what you find.** When a page below the standard turns up, it goes on the open items list and gets fixed. Old pages are brought up to the standard in one sweep at the end of each course, not left behind.

## Every page

A page passes only if the answer to every line is yes.

1. **One way in.** The top says what the page is for and what to do first. Where there is a choice, one option is marked as recommended. Never too much choice without guidance.
2. **A visible, countable end.** The course says how many lessons there are and how long it takes ("22 lessons: two a day, done in 11 days"). Each page says "You're done when ..." in things the reader can *do*, not things they have read.
3. **A small step for a bad day.** One line near the top names the smallest step that still counts, and says that a missed or light day is not a restart. No guilt, no streaks, no "you're behind". Any streak feature has an off switch and friendly wording.
4. **Script first.** The lecturer's script decides notation, definitions and methods. Anything else is a short side note. Script references say in one line what the item states and give the printed page.
5. **English to learn, German for the exam.** Text is English. German terms sit in a glossary table at the top. Theorems are named in English and never given as a script number to cite in the exam.
6. **Correct, and says where it comes from.** Every solution says its source: official solution, script page, or "written by StudyHub". Every calculation and every program is checked (computed, compiled, run). Nothing is called official that isn't.
7. **Clarity above speed.** Every problem found is fixed before the page is called done. Quality is never traded for getting more pages out.
8. **Reads on a phone.** At 390 px nothing is wider than the screen, nothing covers the text, and formulas stay readable (long ones split into rows).
9. **Says what it left out.** "What we skipped" lists only what the course really leaves out, each with a priority, and the same items go on the skip list page. Things a later lesson covers are not listed as skipped.
10. **Nothing stale.** Counts, "coming soon" lines and "what's new" match what is actually on the site.

## A lesson

Every lesson has these parts, in this order:

1. The lesson line: what it teaches, in one sentence.
2. Contents, with links to every section.
3. The bad-day line.
4. "You're done when", as a numbered list of abilities.
5. Time, script pages (what each part states, with printed pages), and which lecture and exercise sheet it matches.
6. "Why it matters for the exam", naming real exam questions.
7. From the second lesson on: a 5-minute recap of the previous lesson, with fold-out answers.
8. Glossary table, English and German.
9. **The story**, a few paragraphs, ending with one plain paragraph on what it means in the subject.
10. The numbered sections. A "You'll need these" box wherever a section builds on an earlier lesson, with the link.
11. Worked examples inline, right after the theory they use, plus a short mixed set of worked examples before the exercises, as a revision of the whole lesson.
12. Exercises, with a scoring box.
13. For wonder (optional, about 5 minutes).
14. What we skipped, then the next lesson in one sentence.
15. Footer: previous lesson, course home, next lesson.

Rules inside a lesson:

- **No bare definition and formula.** Every definition comes with its idea and at least one example. (A lesson that gave only a definition and a formula could not be followed, and it was rewritten.)
- **Worked examples are questions.** Each sits in its own box as guided questions with fold-out answers, and starts with "try it in your head".
- **A quick calculation early**, where the topic allows. Short, concrete calculations keep the energy up.
- **One "why it's cool"** in the main text, besides the optional For wonder.
- **Interactive where it helps**: graphs you can move in maths and physics, code you can edit, run and test in Informatik.
- **Long is fine; bare is not.** There is no length limit, but nothing is padding. No "finish line for part 1" boxes, no "read it twice" boxes, no difficulty-check box.

## Proofs, derivations and programs

Every proof gets all seven parts, not only the big ones. Reading proofs and writing them were the hardest part of Analysis; these parts are what made them doable.

1. **The idea**: one paragraph, in the lesson's story.
2. **What the definitions force**: the first line, the last line, and the gap to fill, in a dashed frame, before any clever idea.
3. **Story beside formal**: two columns, the story on the left, what you write on the right. The right column alone is exam-ready.
4. **Moves used**: the recurring techniques, as pills linked to the moves page. Seeing the same moves come back is what makes writing learnable.
5. **The proof in one piece**, folded.
6. For exam proofs: **How to reproduce this under exam pressure**: 3 to 6 steps and a one-line "In short".
7. **The ladder**: Rung 1 fill one line, Rung 2 write about half, Rung 3 write it all from the frame alone. Folded answers.

The same seven parts, adapted per subject:

| Part | Maths (Analysis, Linear Algebra) | Physics | Informatik |
| --- | --- | --- | --- |
| The idea | The idea, in the story | The physical picture | The idea, in the story |
| The frame | What the definitions force | What is given, what is asked, which laws apply | What the contract forces: signature, PRE, POST, the gap |
| Story beside formal | Story, then what you write | Story, then the derivation step | The golem's steps, then the C++ lines |
| Moves used | Moves page | Moves and recipes | Patterns, on the Task method page |
| In one piece | The proof, folded | The derivation, folded | The program, folded, compiled and tested |
| Exam pressure | 3 to 6 steps + "In short" | 3 to 6 steps + "In short" | 3 to 6 steps + "In short" |
| The ladder | One line, half, all from the frame | One step, half, all from the frame | One line, half, the whole function from the contract |

In Informatik, every coding task also walks through the six questions (what goes in and out, examples by hand, steps with no magic, an edge case, which pattern, how do I know it works), each with a folded "My answer".

## Exercises, solutions, Serien, skip list, refreshers

**Exercises.** Real ones first: old exams and official sheets, labelled with source and points. Hard exercises get up to three hints before the solution, each giving away a little more; easy ones go straight to the solution. The solution folds open right under its exercise. A scoring box gives the total and the pass mark ("6 of 8 and you're done") and says which exercises are practice that doesn't count against you.

**A solution, anywhere.** It opens with a "Frame:" line. Every step has its reason. Formal words only: story words belong in the story and idea text, never in a solution. A rule is restated in words, never cited by its letter or number alone. A counterexample checks every property it claims.

**A Serie or Übungsblatt page.** Per task: a short English summary, the idea in plain words, a sketch where there is geometry, "You need" with links to lessons, up to three hints, the solution as "why this step | what you write", and the trap. It follows the official solution and says so.

**The skip list.** One page that collects everything the lessons leave out, with a priority for each row, plus the "rungs with extra results" and the exercises saved for the refresher. Nothing beautiful is silently dropped: it is logged here instead.

**Refreshers.** After the first pass of a course, short units that train writing, not rereading: a can't-fail warm-up, a recap card, flashcards, two or three exam proofs written from the frame alone, one spot-the-mistake, only the three or four most exam-like exercises, and ticking skip-list rows. Calculation topics get a recipe and many short calculations on paper. Every unit has a bad-day floor.

## The story and the voice

The story is Mridul's own flavour of StudyHub, and it is the house voice for everyone, with no off switch.

- **The story carries the subject.** Each story object stands for one thing and keeps standing for it (in Analysis the Doubter is always ∀; in Informatik the golem is the computer, the gatekeeper the compiler, the boxes the variables). A story sentence that can be deleted without losing an idea is decoration and goes.
- **One world.** Analysis is the old kingdom of duels, roads, gardens and surveyors. Every new subject is a new place in the same world, not a new world. Earlier images come back by name.
- **Beside, never instead.** The story never replaces the formal version, and exam-ready text never depends on story words.
- **Short.** The opening story is a few paragraphs and ends with one plain paragraph on what it means.
- **One house voice.** Warm, plain, specific. Short sentences. It makes hard things feel doable without pretending they are easy. It never pressures and never guilts.

## Never

- Never a page below this standard, in any subject.
- Never a choice without a recommended path.
- Never pressure, streaks without an off switch, or guilt.
- Never a bare definition and formula.
- Never a script number as something to cite in the exam.
- Never "official" for a solution StudyHub wrote.
- Never handwritten notes on the site, never official PDFs in the public repository, never a classmate's name without their yes.
- Never a private master solution (for example Code Expert's) copied to the site: StudyHub writes its own.
- Never a new feature that makes the first two minutes harder.

