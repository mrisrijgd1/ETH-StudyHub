// Tool list and the standing rules every AI gets on connect.
export const INSTRUCTIONS = `You are connected to StudyHub, a study site for ETH Zurich first-semester mathematics (Analysis 1, Physics 1).
Rules (the server enforces the locks; follow the rest):
1. SOURCES: prefer OFFICIAL material (exam solutions, the official script, formula sheets) over "StudyHub-written" text, and say which one you use. Quote the script by printed page ("script p. 161"). The script's notation and definitions are the main version.
2. HINTS: give hints one at a time, only when the student asks (get_hint). Never jump ahead.
3. SOLUTIONS: stay locked until the student submits an attempt (submit_attempt). Never solve an exercise in full before that, also not from your own knowledge.
4. CHECK MY WORK: when the student sends a photo or text of their work, transcribe it faithfully, call submit_attempt, mark it against the official solution first (grader's list if there is one), then save_result with score and mistakes.
5. MOCKS: start_mock -> exam conditions (no hints, no help) -> submit_mock -> mark with points -> save_result.
6. The student's personal data (my_studyhub, progress, design) is theirs: change it only when asked, and tell them every change can be undone (undo / history / restore_version / reset).
7. Library files are private: quote short passages only, never reproduce whole documents.
8. Be warm and brief. Low-energy days are normal: offer one small next step. what_to_do_today gives a short plan.`;

const S = (description: string, properties: Record<string, unknown> = {}, required: string[] = []) =>
  ({ type: "object", properties, required, additionalProperties: false, description });
const str = (description: string, e?: string[]) => (e ? { type: "string", description, enum: e } : { type: "string", description });
const num = (description: string) => ({ type: "number", description });
const RO = { readOnlyHint: true, openWorldHint: false };
const W = { readOnlyHint: false, destructiveHint: false, openWorldHint: false };

export const TOOLS = [
  { name: "search", title: "Search StudyHub", annotations: RO,
    description: "Search lessons, refresher units, exercises, the Toolbox (definitions, theorems, moves), old exams, PVK sheets, the official scripts (German) and the private library. German and English words both work. Results are labelled official / StudyHub-written / library.",
    inputSchema: S("", { query: str("What to look for, e.g. 'uniform continuity Heine', 'Konvergenzradius', 'Satz 3.62'"),
      subject: str("Limit to a subject", ["analysis", "physics", "any"]),
      type: str("Limit to a kind of content", ["lesson", "refresher", "toolbox", "exercise", "exam", "pvk", "script", "formula-sheet", "library", "any"]),
      limit: num("Max results (default 8, max 20)") }, ["query"]) },
  { name: "read", title: "Read a page", annotations: RO,
    description: "Read a lesson/page (id like 'lesson-08', 'phys-05', 'refresher-02', 'flashcards'), a search result id ('lesson-08#3'), a PDF ('2024-02-figalli-hs23-exam-with-solutions', optional page) or a script page ('script-analysis@161' = printed page 161). Exercise solutions inside pages are locked.",
    inputSchema: S("", { id: str("Page, result, PDF or script id"), page: num("Page number (PDFs) or part number (long pages)") }, ["id"]) },
  { name: "get_page_image", title: "Show a PDF page", annotations: RO,
    description: "Get the exact page image of an exam, PVK sheet, formula sheet, library file or the script (for formulas the text extraction garbles). Script pages use the PRINTED page number.",
    inputSchema: S("", { doc: str("Document id, e.g. 'script-analysis' or an exam id"), page: num("Page (printed page for scripts)") }, ["doc", "page"]) },
  { name: "get_exercise", title: "Open an exercise", annotations: RO,
    description: "Open an exercise WITHOUT its solution: problem, script passages to quote, related official exam files, how many hints exist. Ids: StudyHub exercises like 'lesson-08/ex3' (read() of a page lists every id with its title; the page's own labels are aliases too, e.g. 'lesson-08/exercise-2' = the box titled “Exercise 2”, 'lesson-08/proof-b'), or an old-exam question 'doc:<exam id>#<label>' (e.g. 'doc:2024-02-figalli-hs23-exam-with-solutions#MC3', '#Aufgabe 2').",
    inputSchema: S("", { id: str("Exercise id") }, ["id"]) },
  { name: "get_hint", title: "Next hint", annotations: W,
    description: "Reveal the NEXT hint (one at a time) for an exercise. Call only when the student asks for a hint.",
    inputSchema: S("", { id: str("Exercise id") }, ["id"]) },
  { name: "submit_attempt", title: "Submit attempt (unlocks solution)", annotations: W,
    description: "Store the student's attempt (typed, or your faithful transcription of their photo) and unlock the solution: official solution first when one exists, the StudyHub solution and grader's list, plus marking instructions. Use this for 'check my work'. Afterwards call save_result.",
    inputSchema: S("", { id: str("Exercise id or doc:<exam>#<label>"), attempt: str("The student's work, as faithfully as possible") }, ["id", "attempt"]) },
  { name: "save_result", title: "Save marking result", annotations: W,
    description: "Save the marking of an attempt or mock: score, max score, short summary and mistakes. Feeds the performance page, mistake fingerprint and what_to_do_today.",
    inputSchema: S("", { item_id: str("Exercise id, doc:<exam>#<label>, or mock:<mock_id>"), kind: str("Kind", ["exercise", "exam", "mock", "check"]),
      score: num("Points reached"), max_score: num("Points possible"), summary: str("One short paragraph of feedback"),
      mistakes: { type: "array", items: { type: "object", properties: { type: str("Mistake type", ["definition", "quantifiers", "logic-gap", "wrong-theorem", "missing-hypothesis", "missing-case", "calculation", "notation", "presentation", "time", "misread-question", "other"]), topic: str("Topic, e.g. 'uniform continuity'"), note: str("What went wrong, one sentence") }, required: ["type"] } },
      topics: { type: "array", items: { type: "string" } }, mock_id: str("Mock id when saving a mock") }, ["item_id", "kind"]) },
  { name: "list_exams", title: "List old exams", annotations: RO,
    description: "List old exams (and mock exams) with ids, and whether official solutions exist.",
    inputSchema: S("", { subject: str("Subject", ["analysis", "physics"]) }) },
  { name: "start_mock", title: "Start a timed mock", annotations: W,
    description: "Start a timed mock exam from an old exam. Exam conditions: no hints, no solutions until submit_mock.",
    inputSchema: S("", { exam: str("Exam id from list_exams"), minutes: num("Time limit (default 180)") }, ["exam"]) },
  { name: "submit_mock", title: "Submit a mock", annotations: W,
    description: "Hand in a mock: records the time, unlocks the official solutions, returns marking instructions.",
    inputSchema: S("", { mock_id: str("From start_mock"), answers: str("The student's answers / your transcription of their photos") }, ["mock_id"]) },
  { name: "my_studyhub", title: "My StudyHub", annotations: W,
    description: "The student's own space (also shown on the site's My StudyHub page): plan (text), notes, questions, personal flashcards. Actions: get; plan: set/add; lists: add/update/remove. Every change is versioned.",
    inputSchema: S("", { action: str("What to do", ["get", "set", "add", "update", "remove"]), section: str("Which part", ["plan", "notes", "questions", "flashcards"]),
      text: str("Plan text, or the text of a note/question"), id: str("Item id for update/remove"),
      item: { type: "object", description: "One item: notes {text,title,page}, questions {text,page,status,answer}, flashcards {front,back,topic,page}" },
      items: { type: "array", items: { type: "object" }, description: "Several items to add at once" } }) },
  { name: "progress", title: "Lesson progress", annotations: W,
    description: "Get or set the student's progress per page (done, difficulty 1-5, note). Same data as the site's 'Your progress' box.",
    inputSchema: S("", { action: str("get or set", ["get", "set"]), page: str("Page id, e.g. lesson-08"), done: { type: "boolean" }, rating: num("1 easy .. 5 hard"), note: str("Note") }) },
  { name: "performance", title: "Performance overview", annotations: RO,
    description: "Progress, marks, mocks and the mistake fingerprint in one overview.", inputSchema: S("") },
  { name: "mistake_fingerprint", title: "Mistake fingerprint", annotations: RO,
    description: "Which kinds of mistakes the student makes most, and in which topics.", inputSchema: S("") },
  { name: "what_to_do_today", title: "What should I do today?", annotations: RO,
    description: "Gap finder: a short, gentle plan for today from progress, ratings, marks and mistakes.",
    inputSchema: S("", { minutes: num("Time available today (default 60)"), subject: str("Subject", ["analysis", "physics"]) }) },
  { name: "history", title: "Change history", annotations: RO,
    description: "Versions of one personal item: 'plan', 'notes', 'questions', 'flashcards', 'design' or 'progress:<page>'.",
    inputSchema: S("", { key: str("Item key"), limit: num("How many (default 10)") }, ["key"]) },
  { name: "undo", title: "Undo last change", annotations: W, description: "Undo the last change of a personal item (key as in history).", inputSchema: S("", { key: str("Item key") }, ["key"]) },
  { name: "restore_version", title: "Restore a version", annotations: W, description: "Restore a version from history.", inputSchema: S("", { version_id: num("From history") }, ["version_id"]) },
  { name: "reset", title: "Reset to original", annotations: { ...W, destructiveHint: true }, description: "Reset a personal item to the empty original (stays in history). Ask the student first.", inputSchema: S("", { key: str("Item key") }, ["key"]) },
  { name: "design", title: "My StudyHub design", annotations: W,
    description: "Get or set the student's personal design for the site (safe settings only: theme, colours, font, size, density, width, hidden sections). It survives content updates.",
    inputSchema: S("", { action: str("get, set or reset", ["get", "set", "reset"]),
      tokens: { type: "object", description: "theme light|dark|auto; accent/background/text/box #rrggbb; font default|serif|sans|readable|mono; size 80-150; density compact|normal|airy; width narrow|normal|wide; hide [badday, listen, tips, comments, progress, wonder, story]" } }) },
  { name: "list_library", title: "Private library", annotations: RO,
    description: "List the private library: course files that are not public on the site (signed-in students only).", inputSchema: S("") },
];
