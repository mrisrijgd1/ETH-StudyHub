// Exam Dive: question bank loading. This is the ONE place that knows where questions come
// from. Today: static JSON files listed in questions/index.json (or questions/dev/index.json
// with ?bank=dev). Later: Supabase for signed-in users. Callers only use loadBank().

const SUBJECTS = new Set(['analysis', 'physics']);
const TYPES = new Set(['single', 'multi']);
const STATUSES = new Set(['official', 'verified']);

/** 'dev' when the page was opened with ?bank=dev, else 'public'. */
export function bankMode(search = '') {
  try {
    return new URLSearchParams(search).get('bank') === 'dev' ? 'dev' : 'public';
  } catch {
    return 'public';
  }
}

function str(x) { return typeof x === 'string' ? x : (x == null ? '' : String(x)); }

function normChapter(ch) {
  if (typeof ch === 'number') return ch;
  const s = str(ch).trim();
  if (/^\d+$/.test(s)) return Number(s);
  if (/^P\d+$/i.test(s)) return s.toUpperCase();
  return s || null;
}

/** Only relative URLs or https:// are allowed for figures. */
function safeUrl(u) {
  if (!u) return null;
  const s = str(u).trim();
  if (/^https:\/\//i.test(s)) return s;
  if (/^[a-z][a-z0-9+.-]*:/i.test(s) || s.startsWith('//')) return null;
  return s;
}

/**
 * Normalise and validate one raw question. Returns { q } or { error }.
 * Accepts the normalised format (see README) and tolerates options given as an object.
 */
export function normaliseQuestion(raw) {
  if (!raw || typeof raw !== 'object') return { error: 'not an object' };
  const id = str(raw.id).trim();
  if (!id) return { error: 'missing id' };
  const fail = (msg) => ({ error: `${id}: ${msg}` });

  const subject = str(raw.subject).trim().toLowerCase();
  if (!SUBJECTS.has(subject)) return fail(`bad subject "${raw.subject}"`);

  let options = raw.options;
  if (options && !Array.isArray(options) && typeof options === 'object') {
    options = Object.entries(options).map(([key, text]) => ({ key, text }));
  }
  if (!Array.isArray(options) || options.length < 2) return fail('needs at least 2 options');
  options = options.map(o => ({ key: str(o.key).trim(), text: str(o.text) }));
  const keys = options.map(o => o.key);
  if (keys.some(k => !k)) return fail('option without key');
  if (new Set(keys).size !== keys.length) return fail('duplicate option keys');
  if (options.length > 6) return fail('more than 6 options (keys 1-6/A-F)');

  const correct = Array.isArray(raw.correct) ? raw.correct.map(k => str(k).trim()) : null;
  if (!correct) return fail('missing correct');
  if (correct.some(k => !keys.includes(k))) return fail('correct key not among options');

  const type = str(raw.type || 'single').trim();
  if (!TYPES.has(type)) return fail(`bad type "${raw.type}"`);
  if (type === 'single' && correct.length !== 1) return fail('single needs exactly one correct key');

  const difficulty = Number(raw.difficulty);
  if (!Number.isInteger(difficulty) || difficulty < 1 || difficulty > 5) return fail('difficulty must be 1-5');

  const chapter = normChapter(raw.chapter);
  if (chapter == null) return fail('missing chapter');

  const stem = str(raw.stem);
  if (!stem.trim()) return fail('empty stem');

  const optionNotes = {};
  if (raw.optionNotes && typeof raw.optionNotes === 'object') {
    for (const [k, v] of Object.entries(raw.optionNotes)) if (keys.includes(k)) optionNotes[k] = str(v);
  }
  const source = raw.source && typeof raw.source === 'object'
    ? { kind: str(raw.source.kind), label: str(raw.source.label) }
    : { kind: '', label: str(raw.source) };
  const answerStatus = STATUSES.has(raw.answerStatus) ? raw.answerStatus : 'verified';

  return {
    q: {
      id, subject,
      lang: str(raw.lang || 'de'),
      source,
      chapter,
      type,
      difficulty,
      stem,
      options,
      correct: [...new Set(correct)],
      fixedOrder: !!raw.fixedOrder,
      explanation: str(raw.explanation),
      optionNotes,
      refs: Array.isArray(raw.refs) ? raw.refs.map(str) : [],
      figure: safeUrl(raw.figure),
      answerStatus,
    },
  };
}

/** Normalise a list; drops invalid entries and duplicate ids (first wins). */
export function normaliseAll(list, warn = () => {}) {
  const out = [];
  const seen = new Set();
  for (const raw of list) {
    const { q, error } = normaliseQuestion(raw);
    if (error) { warn(`[dive bank] skipped: ${error}`); continue; }
    if (seen.has(q.id)) { warn(`[dive bank] duplicate id skipped: ${q.id}`); continue; }
    seen.add(q.id);
    out.push(q);
  }
  return out;
}

function filesFromIndex(index) {
  if (Array.isArray(index)) return index;
  if (index && Array.isArray(index.files)) return index.files;
  return [];
}

/**
 * Load all questions. Returns a Promise of an array of normalised questions.
 * opts.fetch, opts.base (URL of the dive/ folder), opts.search (location.search) are injectable for tests.
 */
export async function loadBank(opts = {}) {
  const doFetch = opts.fetch || globalThis.fetch.bind(globalThis);
  const base = opts.base || new URL('./', import.meta.url).href;
  const search = opts.search != null ? opts.search : (globalThis.location ? globalThis.location.search : '');
  const warn = opts.warn || ((m) => console.warn(m));
  const dir = bankMode(search) === 'dev' ? 'questions/dev/' : 'questions/';
  const indexUrl = new URL(dir + 'index.json', base).href;

  const getJson = async (url) => {
    const r = await doFetch(url, { cache: 'no-cache' });
    if (!r.ok) throw new Error(`${url}: HTTP ${r.status}`);
    return r.json();
  };

  const index = await getJson(indexUrl);
  const files = filesFromIndex(index);
  const all = [];
  for (const f of files) {
    const name = typeof f === 'string' ? f : f && f.file;
    if (!name) continue;
    try {
      const data = await getJson(new URL(name, indexUrl).href);
      const list = Array.isArray(data) ? data : (data && Array.isArray(data.questions) ? data.questions : []);
      all.push(...list);
    } catch (e) {
      warn(`[dive bank] could not load ${name}: ${e.message}`);
    }
  }
  return normaliseAll(all, warn);
}
