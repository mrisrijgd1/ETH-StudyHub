// Exam Dive: pure game logic (no DOM). Tested by tests/*.test.mjs.
import { ZONES, MAX_DEPTH, SUBJECTS } from './config.js';

// ---------- zones and scoring ----------

/** Index of the zone the diver is in at `depth` (metres), or -1 at/below the floor. */
export function zoneIndexAt(depth, zones = ZONES) {
  for (let i = 0; i < zones.length; i++) {
    if (depth >= zones[i].from && depth < zones[i].to) return i;
  }
  return -1;
}

export function zoneAt(depth, zones = ZONES) {
  const i = zoneIndexAt(depth, zones);
  return i < 0 ? null : zones[i];
}

/** Depth after one more correct answer (no speed bonus). Capped at the trench floor. */
export function depthAfterCorrect(depth, zones = ZONES, max = MAX_DEPTH) {
  const z = zoneAt(depth, zones);
  if (!z) return max;
  return Math.min(depth + z.step, max);
}

/** Depth reached after `n` correct answers from the surface. */
export function depthAfterAnswers(n, zones = ZONES, max = MAX_DEPTH) {
  let d = 0;
  for (let i = 0; i < n && d < max; i++) d = depthAfterCorrect(d, zones, max);
  return d;
}

/** Number of correct answers needed for a perfect dive. */
export function answersForPerfect(zones = ZONES, max = MAX_DEPTH) {
  let d = 0, n = 0;
  while (d < max) { d = depthAfterCorrect(d, zones, max); n++; }
  return n;
}

export const isPerfect = (depth, max = MAX_DEPTH) => depth >= max;

/** Practice mode (no timer) has unlimited lives: a wrong answer does not end the dive. */
export const isPractice = (timer) => !(Number(timer) > 0);
export const wrongEndsDive = (timer) => !isPractice(timer);

// ---------- answer checking ----------

/**
 * True iff the chosen key set equals the correct key set exactly.
 * Works for `single` (one key) and `multi` (any size, empty allowed).
 * Duplicates in `chosen` are ignored.
 */
export function checkAnswer(question, chosen) {
  const want = new Set(question.correct);
  const got = new Set(chosen || []);
  if (question.type === 'single' && got.size !== 1) return false;
  if (want.size !== got.size) return false;
  for (const k of got) if (!want.has(k)) return false;
  return true;
}

// ---------- subjects and chapters ----------

export function subjectsFor(choice) {
  return choice === 'mixed' ? SUBJECTS.slice() : [choice];
}

export function chapterKey(subject, chapter) {
  return `${subject}:${chapter}`;
}

export function questionChapterKey(q) {
  return chapterKey(q.subject, q.chapter);
}

function chapterSortValue(ch) {
  const s = String(ch);
  const m = /^P(\d+)$/.exec(s);
  if (m) return 1000 + Number(m[1]);
  const n = Number(s);
  return Number.isFinite(n) ? n : 5000;
}

/** Chapter keys present in `questions` for the given subjects, sorted (subject order, then chapter). */
export function availableChapters(questions, subjects) {
  const seen = new Map();
  for (const q of questions) {
    if (!subjects.includes(q.subject)) continue;
    const key = questionChapterKey(q);
    if (!seen.has(key)) seen.set(key, { key, subject: q.subject, chapter: q.chapter, count: 0 });
    seen.get(key).count++;
  }
  return [...seen.values()].sort((a, b) =>
    subjects.indexOf(a.subject) - subjects.indexOf(b.subject) ||
    chapterSortValue(a.chapter) - chapterSortValue(b.chapter));
}

/**
 * Questions of the chosen subjects whose chapter key is selected.
 * `chapters` null/undefined = all chapters.
 */
export function filterQuestions(questions, { subjects, chapters = null }) {
  const sel = chapters == null ? null : new Set(chapters);
  return questions.filter(q => subjects.includes(q.subject) &&
    (sel == null || sel.has(questionChapterKey(q))));
}

/** A dive is "filtered" when the selection is not the full set of available chapters. */
export function isFiltered(selected, available) {
  if (selected == null) return false;
  const sel = new Set(selected);
  const all = available.map(c => (typeof c === 'string' ? c : c.key));
  if (all.length === 0) return false;
  return all.some(k => !sel.has(k));
}

// ---------- random helpers ----------

export function shuffle(arr, rng = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Option display order for a question: original order if fixedOrder, else shuffled. */
export function optionOrder(question, rng = Math.random) {
  return question.fixedOrder ? question.options.slice() : shuffle(question.options, rng);
}

/** Weighted pick of a difficulty level from {level: weight}. */
export function pickDifficulty(weights, rng = Math.random) {
  const entries = Object.entries(weights)
    .map(([k, w]) => [Number(k), Number(w)])
    .filter(([, w]) => w > 0);
  const total = entries.reduce((s, [, w]) => s + w, 0);
  let r = rng() * total;
  for (const [k, w] of entries) {
    if (r < w) return k;
    r -= w;
  }
  return entries[entries.length - 1][0];
}

/** Order in which difficulty buckets are tried: target, then nearest levels, deeper (harder) first. */
export function difficultyFallbackOrder(target, min = 1, max = 5) {
  const out = [target];
  for (let d = 1; d <= max - min; d++) {
    if (target + d <= max) out.push(target + d);
    if (target - d >= min) out.push(target - d);
  }
  return out;
}

function pickUniform(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}

/**
 * Draw the next question.
 * 1. drop questions already used in this dive (no repeats);
 * 2. several subjects (Gemischt): pick a subject with probability proportional to its
 *    number of still-available questions;
 * 3. pick a target difficulty with the zone's weights; if that bucket is empty, try the
 *    nearest level, deeper first;
 * 4. inside the bucket prefer ids not seen in the last dives.
 * Returns null when nothing is left.
 */
export function drawQuestion(pool, { depth = 0, used = new Set(), recent = new Set(), rng = Math.random, zones = ZONES } = {}) {
  let avail = pool.filter(q => !used.has(q.id));
  if (avail.length === 0) return null;

  const subjects = [...new Set(avail.map(q => q.subject))];
  if (subjects.length > 1) {
    const counts = subjects.map(s => avail.filter(q => q.subject === s).length);
    const total = counts.reduce((a, b) => a + b, 0);
    let r = rng() * total;
    let chosen = subjects[subjects.length - 1];
    for (let i = 0; i < subjects.length; i++) {
      if (r < counts[i]) { chosen = subjects[i]; break; }
      r -= counts[i];
    }
    avail = avail.filter(q => q.subject === chosen);
  }

  const zone = zoneAt(depth, zones) || zones[zones.length - 1];
  const target = pickDifficulty(zone.weights, rng);
  for (const d of difficultyFallbackOrder(target)) {
    const bucket = avail.filter(q => q.difficulty === d);
    if (bucket.length === 0) continue;
    const fresh = bucket.filter(q => !recent.has(q.id));
    return pickUniform(fresh.length ? fresh : bucket, rng);
  }
  return null;
}

// ---------- highscores ----------

export function bestKey(subjectChoice, timer) {
  return `${subjectChoice}|${timer}`;
}

/** Only timed (timer > 0) and unfiltered dives count for best depths. */
export function qualifiesForBest({ timer, filtered }) {
  return timer > 0 && !filtered;
}

// ---------- misc ----------

/** Seeded PRNG (mulberry32), used for deterministic tests and scenery. */
export function seededRng(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function formatTimer(seconds) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60), s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

/** GitHub "new issue" URL for reporting a question. Contains only the question id. */
export function reportUrl(repo, questionId, lang = 'de') {
  const title = `[Exam Dive] Frage melden: ${questionId}`;
  const body = lang === 'en'
    ? `Question id: ${questionId}\n\nWhat is wrong? (answer, explanation, typo, figure ...)\n\n`
    : `Frage-ID: ${questionId}\n\nWas stimmt nicht? (Lösung, Erklärung, Tippfehler, Abbildung ...)\n\n`;
  return `https://github.com/${repo}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}
