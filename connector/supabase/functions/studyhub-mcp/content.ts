// Content index: loaded from the private "connector" bucket (built by connector/build/build_content.py),
// plus the private "library" bucket (secret library, only reachable through this signed-in connector).
import type { SupabaseClient } from "npm:@supabase/supabase-js@2.118.0";

export type Content = {
  built: string; docs: any[]; chunks: any[]; exercises: Record<string, any>; pdfs: Record<string, any>; scripts: Record<string, any>;
  _idx?: { df: Map<string, number>; toks: Map<string, number>[]; n: number };
  _loaded?: number;
};
let CACHE: Content | null = null;

async function getJson(admin: SupabaseClient, bucket: string, path: string) {
  const { data, error } = await admin.storage.from(bucket).download(path);
  if (error || !data) return null;
  return JSON.parse(await data.text());
}

export async function loadContent(admin: SupabaseClient): Promise<Content> {
  if (CACHE && Date.now() - (CACHE._loaded ?? 0) < 15 * 60000) return CACHE;
  const c: Content = (await getJson(admin, "connector", "content.json")) ?? { built: "none", docs: [], chunks: [], exercises: {}, pdfs: {}, scripts: {} };
  const lib = await getJson(admin, "library", "index.json");
  if (lib) {
    for (const d of lib.docs ?? []) { d.library = true; c.docs.push(d); c.pdfs[d.id] = d; }
    c.chunks.push(...(lib.chunks ?? []));
  }
  c._loaded = Date.now();
  CACHE = c;
  return c;
}

// ---------- search (BM25-like over sections, exercises, PDF pages, script pages, library) ----------
const STOP = new Set("the a an of and or to in is it for on with as by be are that this from at was which der die das und ist ein eine von zu mit den im für auf sich des dem nicht es wir sei".split(" "));
function tokens(s: string) {
  return s.toLowerCase().normalize("NFC").replace(/\\[a-z]+/g, " ").split(/[^a-z0-9äöüß]+/).filter((t) => t.length > 1 && !STOP.has(t))
    .map((t) => t.replace(/(ungen|ung|en|es|e|s)$/, "") || t);
}
function buildIndex(c: Content) {
  const df = new Map<string, number>(); const toks: Map<string, number>[] = [];
  for (const ch of c.chunks) {
    const tf = new Map<string, number>();
    for (const t of tokens(ch.title + " " + ch.title + " " + ch.text)) tf.set(t, (tf.get(t) ?? 0) + 1);
    toks.push(tf);
    for (const t of tf.keys()) df.set(t, (df.get(t) ?? 0) + 1);
  }
  c._idx = { df, toks, n: c.chunks.length };
}
const docOf = (c: Content, id: string) => c.docs.find((d) => d.id === id);

export function search(c: Content, q: string, subject?: string, type?: string, limit = 8) {
  if (!c._idx) buildIndex(c);
  const qt = [...new Set(tokens(q))];
  const out: any[] = [];
  const { df, toks, n } = c._idx!;
  const wantEx = type === "exercise";
  if (!wantEx) {
    c.chunks.forEach((ch, i) => {
      const d = docOf(c, ch.doc);
      if (!d) return;
      if (subject && subject !== "any" && d.subject !== subject) return;
      if (type && type !== "any" && !(d.type === type || (type === "library" && d.library))) return;
      if (d.solution_of) return;
      let s = 0;
      for (const t of qt) { const f = toks[i].get(t); if (f) s += Math.log(1 + n / (df.get(t) ?? 1)) * (f / (f + 1.5)); }
      if (s > 0) out.push({ s, ch, d });
    });
  }
  const res = out.sort((a, b) => b.s - a.s).slice(0, limit).map(({ ch, d }) => ({
    id: ch.id, title: ch.title, type: d.library ? "library" : d.type, subject: d.subject,
    label: d.label ?? (d.library ? "library (private)" : "StudyHub-written"), url: d.url, snippet: snippet(ch.text, qt),
  }));
  // exercises
  if (!type || type === "any" || wantEx) {
    const ex = Object.values(c.exercises).filter((e: any) => !subject || subject === "any" || e.subject === subject).map((e: any) => {
      const tt = tokens(e.title + " " + e.title + " " + e.problem); let s = 0;
      for (const t of qt) { const f = tt.filter((x) => x === t).length; if (f) s += Math.log(1 + n / (df.get(t) ?? 1)) * (f / (f + 1.5)); }
      return { s, e };
    }).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, wantEx ? limit : 3);
    for (const { e } of ex) res.push({ id: e.id, title: e.title, type: "exercise", subject: e.subject, label: "StudyHub-written", url: e.url, snippet: e.problem.slice(0, 220) });
  }
  return res;
}
function snippet(t: string, qt: string[]) {
  const low = t.toLowerCase();
  let at = -1;
  for (const q of qt) { at = low.indexOf(q); if (at >= 0) break; }
  const s = Math.max(0, at - 120);
  return (s > 0 ? "…" : "") + t.slice(s, s + 320).replace(/\s+/g, " ") + "…";
}

// ---------- reading ----------
type Unlock = (doc: string) => Promise<boolean>;
export async function readDoc(c: Content, id: string, page: any, unlocked: Unlock, admin: SupabaseClient): Promise<{ text?: string; error?: string }> {
  // chunk id from search: "<doc>#<n>" or "<doc>@<page>"
  const sm = id.match(/^(script-(?:analysis|physics))@(-?\d+)$/);
  if (sm) {
    const sc = c.scripts[sm[1]];
    if (!sc) return { error: "Script not available." };
    const printed = Number(page ?? sm[2]);
    const t = sc.page_text[printed + sc.offset - 1];
    if (t === undefined) return { error: `Page ${printed} is outside the script (printed pages ${1 - sc.offset}..${sc.pages - sc.offset}).` };
    return { text: `${sc.title}, printed page ${printed} (official script; quote it as "script p. ${printed}"). Exact formulas: get_page_image('${sm[1]}', ${printed}).\n\n${t}` };
  }
  const pm = id.match(/^(.+)@(\d+)$/);
  if (pm && c.pdfs[pm[1]]) return readPdf(c, pm[1], Number(page ?? pm[2]), unlocked);
  const ch = c.chunks.find((x) => x.id === id);
  if (ch && !c.pdfs[ch.doc]) {
    const d = docOf(c, ch.doc);
    return { text: `${ch.title}\nSource: ${d?.label ?? "StudyHub-written"} · ${d?.url ?? ""}\n\n${ch.text}` };
  }
  if (c.pdfs[id]) return readPdf(c, id, page ? Number(page) : 0, unlocked);
  const parts = c.chunks.filter((x) => x.doc === id);
  if (parts.length) {
    const d = docOf(c, id);
    const all = parts.map((p) => p.text).join("\n\n");
    const start = Math.max(0, (Number(page) || 1) - 1) * 24000;
    const more = all.length > start + 24000 ? `\n\n[continued: read('${id}', page=${(Number(page) || 1) + 1})]` : "";
    return { text: `${d.title} (${d.label}) · ${d.url}\nExercises on this page: ${d.exercises ?? 0} (their solutions are locked; use get_exercise('${id}/ex<n>')).\n\n${all.slice(start, start + 24000)}${more}` };
  }
  return { error: `Nothing with id "${id}". Use search first.` };
}

async function readPdf(c: Content, id: string, page: number, unlocked: Unlock) {
  const d = c.pdfs[id];
  const isSol = !!d.solution_of;
  if (isSol && !(await unlocked(id))) return { error: `Locked: ${d.title} is an official solutions file. It opens once the student has submitted an attempt (submit_attempt('doc:${d.solution_of}#<question>', …)) or a mock of that exam (submit_mock).` };
  const open = d.inline_solutions ? await unlocked(id) : true;
  const pages: string[] = open ? d.page_text : (d.questions_text ?? d.page_text);
  const head = `${d.title} (${d.library ? "library (private, do not share files)" : d.label}) · ${d.pages} pages${d.url ? " · " + d.url : ""}` +
    (d.inline_solutions && !open ? "\n[Official solutions in this file are locked until submit_attempt('doc:" + id + "#<question>', …).]" : "") +
    (d.solution_doc ? `\nOfficial solutions: ${d.solution_doc} (locked until an attempt).` : "");
  if (!page) {
    const all = pages.map((p, i) => `--- page ${i + 1} ---\n${p}`).join("\n\n");
    return { text: `${head}\n\n${all.slice(0, 30000)}${all.length > 30000 ? `\n\n[cut: use read('${id}', page=n)]` : ""}` };
  }
  if (page < 1 || page > pages.length) return { error: `Page ${page} out of range 1..${pages.length}.` };
  return { text: `${head}\n--- page ${page} --- (exact formulas: get_page_image('${id}', ${page}))\n\n${pages[page - 1]}` };
}

export async function pageImage(c: Content, doc: string, page: number, unlocked: Unlock, admin: SupabaseClient) {
  let bucket = "connector", path = "", caption = "";
  const sc = c.scripts[doc];
  if (sc) {
    const pdfPage = page + sc.offset;
    if (pdfPage < 1 || pdfPage > sc.pages) return { error: "Page out of range." };
    path = `pages/${doc}/${pdfPage}.jpg`; caption = `${sc.title}, printed page ${page}`;
  } else {
    const d = c.pdfs[doc];
    if (!d) return { error: `Unknown document ${doc}.` };
    if ((d.solution_of || d.inline_solutions) && !(await unlocked(doc))) return { error: "Locked: this page image contains official solutions. Submit an attempt first." };
    if (page < 1 || page > d.pages) return { error: `Page out of range 1..${d.pages}.` };
    if (d.library) bucket = "library";
    path = `pages/${doc}/${page}.jpg`; caption = `${d.title}, page ${page}`;
  }
  const { data, error } = await admin.storage.from(bucket).download(path);
  if (error || !data) return { error: "Image not available yet; use read() for the text." };
  const buf = new Uint8Array(await data.arrayBuffer());
  let s = ""; for (let i = 0; i < buf.length; i += 0x8000) s += String.fromCharCode(...buf.subarray(i, i + 0x8000));
  return { data: btoa(s), caption };
}

// ---------- helpers for exercises ----------
const LABEL = /(?:^|\n)\s*((?:\d\.)?(?:MC|K|B|A)\d+|Aufgabe\s+\d+|Problem\s+\d+|Exercise\s+\d+|\d{1,2}\.(?=\s+\d+\s+Punkte))/g;
export function wholeDoc(pages: string[], max = 25000) {
  const all = pages.map((p, i) => `--- page ${i + 1} ---\n${p}`).join("\n\n");
  return all.length > max ? all.slice(0, max) + "\n[cut: read the remaining pages one by one]" : all;
}
export function segmentFor(pages: string[], q: string): string | null {
  const all = pages.join("\n");
  const norm = (s: string) => s.replace(/\s+/g, " ").trim().toLowerCase();
  const marks: { label: string; at: number }[] = [];
  for (const m of all.matchAll(LABEL)) marks.push({ label: norm(m[1]), at: m.index! });
  const want = norm(q);
  const i = marks.findIndex((m) => m.label === want || m.label === want + "." || m.label === want.replace(/^(aufgabe|exercise|problem)\s*/, "") + "." || m.label.endsWith("." + want) || m.label === want.replace(/^aufgabe/, "aufgabe "));
  if (i < 0) return null;
  // same-family next label (MC3 -> MC4, Aufgabe 2 -> Aufgabe 3)
  const end = marks.slice(i + 1).find((m) => m.label !== marks[i].label)?.at ?? all.length;
  return all.slice(marks[i].at, Math.min(end, marks[i].at + 12000)).trim();
}

export function scriptExcerpt(c: Content, subject: string, pages: number[]) {
  const sc = c.scripts[subject === "physics" ? "script-physics" : "script-analysis"];
  if (!sc || !pages?.length) return [];
  return pages.slice(0, 3).map((p) => ({ printed_page: p, quote_as: `script p. ${p}`, text: (sc.page_text[p + sc.offset - 1] ?? "").slice(0, 1800) }));
}

// Map "HS23", "FS24 repeat", "Figalli", "2022-01" etc. in an exercise to the official exam files.
export function relatedOfficial(c: Content, t: string) {
  const keys = new Set<string>();
  for (const m of t.matchAll(/\b(HS|FS)\s?(\d{2})\b/g)) keys.add(`${m[1].toLowerCase()}${m[2]}`);
  if (!keys.size) return [];
  return Object.values(c.pdfs).filter((d: any) => !d.library && [...keys].some((k) => d.id.includes(k)) && d.type === "exam")
    .slice(0, 4).map((d: any) => ({ id: d.id, title: d.title, official_solutions: d.solution_doc ?? (d.inline_solutions ? d.id : null),
      how: `get_exercise('doc:${d.id}#<question label>')` }));
}
