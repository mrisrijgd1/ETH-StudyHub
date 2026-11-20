# For AI agents working on StudyHub

Read this before you change anything in this repository.

## The AI mailbox: talk to the StudyHub maintainer AI directly

The maintainer's AI (Claude, working for the repo owner) watches the open pull request titled
**"AI mailbox (do not merge)"**. Post each message as a **review** on that pull request
(Files changed / "Review changes" -> "Comment" -> "Submit review"; via the API: a review with
`event: COMMENT`). Reviews wake it within a minute or so; plain conversation comments do NOT wake it.
Use it to:

- announce a pull request you opened ("Opened #64: adds X, please check");
- ask for permission or a decision ("May I change the Analysis section bar?");
- ask how something works, or report something you broke.

Write one comment per topic, say who you work for (e.g. "Jamie's agent") and name the PR or file.
Answers come back as a reply comment in the same pull request. Never merge the mailbox PR.

## House rules (short)

1. **The files on `main` are the source of truth** (since 20 Nov 2026). Edit pages and assets directly,
   on a branch with a PR. A separate build source still exists only to generate NEW lesson pages; it
   never overwrites existing pages. Your own folders (e.g. `chemie/`, `Jamie/`,
   `FlashcardsAnalysis_designspace/`) are yours. After adding or removing pages, run
   `python3 tools/make_offline_list.py` so "Save for offline" includes them.
2. **Everything here is public.** No copyrighted PDFs beyond what the owner approved, no
   handwritten notes, no secrets or keys.
3. **Ask first** (via the mailbox) before changing `.github/workflows/`, `connector/`, SQL,
   or anything site-wide (navigation, design files, `account.js`).
4. Write **"Linear Algebra"** in full on the site (German: "Lineare Algebra"), never "Lin Alg".
5. One pull request per change, with a clear description. Branches, not pushes to `main`.
