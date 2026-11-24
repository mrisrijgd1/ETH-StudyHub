// Exam Dive: StudyHub account (Supabase) for the private question bank and the leaderboard.
// Uses the same project, publishable key and session storage key as assets/account.js, so a
// StudyHub sign-in is shared. The Supabase SDK is only loaded when a session might exist.

const URL_ = 'https://qgntwqqmpdiwexnwsmnm.supabase.co';
const KEY = 'sb_publishable_Kox04-HlRIieoQbhDlqSuw_ko2783NR'; // public by design (RLS protects the data)
const SBKEY = 'sb-qgntwqqmpdiwexnwsmnm-auth-token';
const SDK = new URL('../assets/supabase.js', import.meta.url).href;
export const BUCKET = 'dive';   // old Supabase bucket name (no longer used)
const BANK_URL = 'https://study-hub.ch/api/dive-bank.php';

let ready = null;
let sb = null;

function mightHaveSession() {
  try { if (globalThis.localStorage && localStorage.getItem(SBKEY)) return true; } catch (e) { /* storage blocked */ }
  const loc = globalThis.location;
  return !!loc && /access_token=|[?&]code=/.test(loc.hash + loc.search);
}

function loadSdk() {
  return new Promise((res, rej) => {
    if (globalThis.supabase && globalThis.supabase.createClient) return res();
    const s = document.createElement('script');
    s.src = SDK; s.onload = res; s.onerror = () => rej(new Error('Supabase SDK not available'));
    document.head.appendChild(s);
  });
}

function loadShdb() {
  return new Promise((res, rej) => {
    if (globalThis.SHDB) return res();
    const s = document.createElement('script');
    s.src = new URL('../assets/shdb.js', import.meta.url).href; s.onload = res; s.onerror = () => rej(new Error('StudyHub data client not available'));
    document.head.appendChild(s);
  });
}

async function client() {
  await loadSdk();
  await loadShdb();
  // Login via Supabase; runs and leaderboards go to our own server (SHDB.wrap). Storage (question bank) stays on Supabase.
  if (!sb) sb = globalThis.SHDB.wrap(globalThis.supabase.createClient(URL_, KEY, { auth: { persistSession: true, detectSessionInUrl: true, storageKey: SBKEY } }));
  return sb;
}

/**
 * Resolves to { sb, user, profile } for a signed-in user, or null for guests.
 * profile = { nickname, leaderboard } from public.profiles (may be null).
 */
export function account() {
  if (ready) return ready;
  ready = (async () => {
    if (!mightHaveSession()) return null;
    try {
      const c = await client();
      const { data } = await c.auth.getSession();
      const user = data && data.session ? data.session.user : null;
      if (!user) return null;
      const r = await c.from('profiles').select('nickname,leaderboard').eq('id', user.id).maybeSingle();
      return { sb: c, user, profile: r.data || null };
    } catch (e) {
      console.warn('[dive] account unavailable:', e.message || e);
      return null;
    }
  })();
  return ready;
}

/** Google sign-in, back to this page (the same flow as the rest of StudyHub). */
export async function signIn() {
  const c = await client();
  await c.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.href.split('#')[0] } });
}

/** Private bank for signed-in users, from our own Swiss server (study-hub.ch/api/dive-bank.php).
 *  Returns the list of questions; figure links are signed for 6 hours. */
export async function loadPrivateBank(acc, warn = () => {}) {
  const { data } = await acc.sb.auth.getSession();
  const token = data && data.session ? data.session.access_token : null;
  if (!token) throw new Error('not signed in');
  const res = await fetch(BANK_URL, { method: 'POST', headers: { Authorization: 'Bearer ' + token }, credentials: 'omit' });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(j.error || `bank: ${res.status}`);
  if (!Array.isArray(j.questions)) { warn('[dive bank] empty'); return []; }
  return j.questions;
}

/** Save a finished timed, unfiltered dive. Never throws. */
export async function saveRun(acc, rec) {
  try {
    const { error } = await acc.sb.from('dive_runs').insert({
      subject: rec.subject, timer: rec.timer, depth: rec.depth, answers: rec.answers,
    });
    if (error) throw error;
    return true;
  } catch (e) {
    console.warn('[dive] run not saved:', e.message || e);
    return false;
  }
}

/** Leaderboard rows [{nickname, depth, answers, reached_at}] for one subject x timer. */
export async function leaderboard(acc, subject, timer) {
  const { data, error } = await acc.sb.rpc('dive_leaderboard', { p_subject: subject, p_timer: timer });
  if (error) throw new Error(error.message || String(error));
  return data || [];
}
