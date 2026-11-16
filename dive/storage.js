// Exam Dive: persistence in localStorage under one key. Every access is try/catch wrapped,
// so private mode, quota errors or corrupt JSON never break the game.
import { STORAGE_KEY, MAX_HISTORY, RECENT_DIVES } from './config.js';
import { bestKey, qualifiesForBest } from './game.js';

export function defaultState() {
  return {
    v: 1,
    dives: [],      // newest first, at most MAX_HISTORY
    bests: {},      // "subject|timer" -> { depth, answers, date }
    recent: [],     // ids per dive, newest first, at most RECENT_DIVES dives
    prefs: { muted: true, lang: 'de', subject: 'analysis', timer: 120, chapters: null },
  };
}

function sanitize(raw) {
  const d = defaultState();
  if (!raw || typeof raw !== 'object' || raw.v !== 1) return d;
  return {
    v: 1,
    dives: Array.isArray(raw.dives) ? raw.dives.filter(x => x && typeof x === 'object').slice(0, MAX_HISTORY) : [],
    bests: raw.bests && typeof raw.bests === 'object' && !Array.isArray(raw.bests) ? raw.bests : {},
    recent: Array.isArray(raw.recent) ? raw.recent.filter(Array.isArray).slice(0, RECENT_DIVES) : [],
    prefs: { ...d.prefs, ...(raw.prefs && typeof raw.prefs === 'object' ? raw.prefs : {}) },
  };
}

function defaultBackend() {
  try { return globalThis.localStorage || null; } catch { return null; }
}

export function loadState(backend = defaultBackend(), key = STORAGE_KEY) {
  try {
    if (!backend) return defaultState();
    const txt = backend.getItem(key);
    if (!txt) return defaultState();
    return sanitize(JSON.parse(txt));
  } catch {
    return defaultState();
  }
}

export function saveState(state, backend = defaultBackend(), key = STORAGE_KEY) {
  try {
    if (!backend) return false;
    backend.setItem(key, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

/**
 * Add a finished dive. Returns { state, newBest } (state is a new object).
 * dive: { date, subject, chapters, filtered, timer, depth, answers, endedBy, endQuestion, questions:[{id,chosen,correct,timeout}] }
 */
export function recordDive(state, dive) {
  const s = sanitize(state);
  const dives = [dive, ...s.dives].slice(0, MAX_HISTORY);
  const ids = (dive.questions || []).map(q => q.id);
  const recent = [ids, ...s.recent].slice(0, RECENT_DIVES);
  const bests = { ...s.bests };
  let newBest = false;
  if (qualifiesForBest(dive) && dive.depth > 0) {
    const k = bestKey(dive.subject, dive.timer);
    const old = bests[k];
    if (!old || dive.depth > old.depth) {
      bests[k] = { depth: dive.depth, answers: dive.answers, date: dive.date };
      newBest = true;
    }
  }
  return { state: { ...s, dives, recent, bests }, newBest };
}

export function recentIdSet(state) {
  const set = new Set();
  for (const ids of (state.recent || [])) for (const id of ids) set.add(id);
  return set;
}

export function setPref(state, key, value) {
  return { ...state, prefs: { ...state.prefs, [key]: value } };
}
