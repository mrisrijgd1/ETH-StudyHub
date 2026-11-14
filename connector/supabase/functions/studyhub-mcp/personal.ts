// Personal layer: My StudyHub (plan, notes, questions, flashcards), progress, results, mistake fingerprint,
// gap finder, design overlay. Every change is versioned by database triggers (history, undo, restore, reset).
import type { Ctx } from "./server.ts";

const text = (t: string) => ({ content: [{ type: "text", text: t }] });
const err = (t: string) => ({ content: [{ type: "text", text: t }], isError: true });
const J = (o: unknown) => JSON.stringify(o, null, 1);
const SECTIONS = ["plan", "notes", "questions", "flashcards"];
const EXAM_DATE = Date.parse("2027-01-25T08:00:00+01:00");
export const MISTAKE_TYPES = ["definition", "quantifiers", "logic-gap", "wrong-theorem", "missing-hypothesis", "missing-case", "calculation", "notation", "presentation", "time", "misread-question", "other"];

async function getItem(ctx: Ctx, key: string) {
  const { data } = await ctx.admin.from("my_items").select("content, updated_at").eq("user_id", ctx.user.id).eq("key", key).maybeSingle();
  return data;
}
async function putItem(ctx: Ctx, key: string, content: unknown) {
  const { error } = await ctx.admin.from("my_items").upsert({ user_id: ctx.user.id, key, content, source: "ai", updated_at: new Date().toISOString() });
  if (error) throw new Error(error.message);
}
const newId = () => crypto.randomUUID().slice(0, 8);

// Progress rows use the SITE's page key, the file name ("lesson-08.html"), because the site's
// "Your progress" box writes them. Tools accept "lesson-08" or "lesson-08.html" and show "lesson-08".
const pageId = (p: unknown) => String(p ?? "").trim().replace(/^progress:/, "").replace(/\.html$/, "");
const pageKey = (p: unknown) => pageId(p) + ".html";
const histKey = (k: unknown) => String(k ?? "").startsWith("progress:") ? "progress:" + pageKey(k) : String(k ?? "");

// ---- design overlay: only safe tokens, never code ----
const FONTS = ["default", "serif", "sans", "readable", "mono"];
const HIDE = ["badday", "listen", "tips", "comments", "progress", "wonder", "story"];
export function cleanDesign(t: any) {
  const out: Record<string, unknown> = {};
  const hex = (v: any) => typeof v === "string" && /^#[0-9a-fA-F]{6}$/.test(v) ? v : undefined;
  if (["light", "dark", "auto"].includes(t?.theme)) out.theme = t.theme;
  for (const k of ["accent", "background", "text", "box"]) { const v = hex(t?.[k]); if (v) out[k] = v; }
  if (FONTS.includes(t?.font)) out.font = t.font;
  const size = Number(t?.size); if (size >= 80 && size <= 150) out.size = Math.round(size);
  if (["compact", "normal", "airy"].includes(t?.density)) out.density = t.density;
  if (["narrow", "normal", "wide"].includes(t?.width)) out.width = t.width;
  if (Array.isArray(t?.hide)) out.hide = t.hide.filter((h: string) => HIDE.includes(h));
  return out;
}

export async function personal(name: string, a: any, ctx: Ctx): Promise<any> {
  const uid = ctx.user.id;
  switch (name) {
    case "my_studyhub": {
      const action = a.action ?? "get";
      if (action === "get") {
        const keys = a.section ? [a.section] : SECTIONS;
        const res: Record<string, unknown> = {};
        for (const k of keys) res[k] = (await getItem(ctx, k))?.content ?? (k === "plan" ? { text: "" } : []);
        return text(J({ ...res, page: "https://mrisrijgd1.github.io/ETH-StudyHub/my.html" }));
      }
      const sec = a.section;
      if (!SECTIONS.includes(sec)) return err(`section must be one of ${SECTIONS.join(", ")}`);
      if (sec === "plan") {
        if (!["set", "add"].includes(action)) return err("For the plan use action 'set' (replace) or 'add' (append a line).");
        const cur = (await getItem(ctx, "plan"))?.content?.text ?? "";
        const t = action === "set" ? String(a.text ?? "") : (cur ? cur + "\n" : "") + String(a.text ?? "");
        await putItem(ctx, "plan", { text: t.slice(0, 50000) });
        return text("Plan saved (a version was stored; undo('plan') reverts it).");
      }
      const list: any[] = (await getItem(ctx, sec))?.content ?? [];
      if (action === "add") {
        const items = Array.isArray(a.items) ? a.items : [a.item ?? { text: a.text }];
        const added = items.map((it: any) => ({ id: newId(), created: new Date().toISOString(), ...cleanItem(sec, it) }));
        list.push(...added);
        if (list.length > 2000) return err("Too many items (max 2000).");
        await putItem(ctx, sec, list);
        return text(`Added ${added.length} to ${sec}: ids ${added.map((x: any) => x.id).join(", ")}.`);
      }
      if (action === "update") {
        const i = list.findIndex((x) => x.id === a.id);
        if (i < 0) return err("No item with that id.");
        list[i] = { ...list[i], ...cleanItem(sec, a.item ?? {}), id: list[i].id };
        await putItem(ctx, sec, list);
        return text("Updated.");
      }
      if (action === "remove") {
        const n = list.length; const left = list.filter((x) => x.id !== a.id);
        if (left.length === n) return err("No item with that id.");
        await putItem(ctx, sec, left);
        return text("Removed (undo('" + sec + "') brings it back).");
      }
      return err("action must be get, add, update or remove (plan: set or add).");
    }
    case "history": {
      a.key = histKey(a.key);
      const { data } = await ctx.admin.from("my_versions").select("id, content, source, created_at").eq("user_id", uid).eq("key", a.key).order("id", { ascending: false }).limit(Math.min(Number(a.limit) || 10, 50));
      if (!data?.length) return text("No history for " + a.key);
      return text(J(data.map((v) => ({ version_id: v.id, at: v.created_at, by: v.source, preview: v.content === null ? "(deleted)" : JSON.stringify(v.content).slice(0, 200) }))));
    }
    case "undo": case "restore_version": case "reset": {
      if (a.key !== undefined) a.key = histKey(a.key);
      let vid: number | null = null;
      if (name === "restore_version") vid = Number(a.version_id);
      if (name === "undo") {
        const { data } = await ctx.admin.from("my_versions").select("id").eq("user_id", uid).eq("key", a.key).order("id", { ascending: false }).limit(2);
        if (!data || data.length < 2) return err("Nothing to undo for " + a.key);
        vid = data[1].id;
      }
      if (name === "reset") {
        if (a.key?.startsWith("progress:")) await ctx.admin.from("progress").delete().eq("user_id", uid).eq("page", a.key.slice(9));
        else await ctx.admin.from("my_items").delete().eq("user_id", uid).eq("key", a.key);
        return text(`${a.key} reset to the original (empty) state. The old content stays in history, so restore_version can bring it back.`);
      }
      const { data: v } = await ctx.admin.from("my_versions").select("*").eq("id", vid).eq("user_id", uid).maybeSingle();
      if (!v) return err("Version not found.");
      if (v.key.startsWith("progress:")) {
        const page = v.key.slice(9);
        if (v.content === null) await ctx.admin.from("progress").delete().eq("user_id", uid).eq("page", page);
        else await ctx.admin.from("progress").upsert({ user_id: uid, page, done: !!v.content.done, rating: v.content.rating, note: v.content.note, updated_at: new Date().toISOString() });
      } else {
        if (v.content === null) await ctx.admin.from("my_items").delete().eq("user_id", uid).eq("key", v.key);
        else await ctx.admin.from("my_items").upsert({ user_id: uid, key: v.key, content: v.content, source: name === "undo" ? "undo" : "restore", updated_at: new Date().toISOString() });
      }
      return text(`${v.key} restored to the version from ${v.created_at}.`);
    }
    case "progress": {
      if ((a.action ?? "get") === "get") {
        const { data } = await ctx.admin.from("progress").select("page, done, rating, note, updated_at").eq("user_id", uid).order("page");
        return text(J((data ?? []).map((r) => ({ ...r, page: pageId(r.page) }))));
      }
      if (!/^[a-z0-9-]{3,40}$/.test(pageId(a.page))) return err("page must be a page id like lesson-08, refresher-02 or phys-05.");
      const page = pageKey(a.page);
      const cur = (await ctx.admin.from("progress").select("*").eq("user_id", uid).eq("page", page).maybeSingle()).data ?? {};
      const row = { user_id: uid, page, done: a.done ?? cur.done ?? false, rating: a.rating ?? cur.rating ?? null, note: a.note ?? cur.note ?? null, updated_at: new Date().toISOString() };
      if (row.rating !== null && !(row.rating >= 1 && row.rating <= 5)) return err("rating is 1 (easy) to 5 (hard).");
      const { error } = await ctx.admin.from("progress").upsert(row);
      if (error) throw new Error(error.message);
      return text(`Saved progress for ${pageId(page)}. It shows on the site (ticks, Your progress box) after a reload; history('progress:${pageId(page)}') lists its versions.`);
    }
    case "save_result": {
      const mistakes = (Array.isArray(a.mistakes) ? a.mistakes : []).slice(0, 30).map((m: any) => ({
        type: MISTAKE_TYPES.includes(m?.type) ? m.type : "other", topic: String(m?.topic ?? "").slice(0, 80), note: String(m?.note ?? "").slice(0, 300) }));
      const kind = ["exercise", "exam", "mock", "check"].includes(a.kind) ? a.kind : "exercise";
      const topics = [...new Set([...(Array.isArray(a.topics) ? a.topics : []), ...mistakes.map((m: any) => m.topic)].filter(Boolean).map(String))].slice(0, 10);
      const { error } = await ctx.admin.from("results").insert({ user_id: uid, item_id: String(a.item_id ?? "free"), kind, score: a.score ?? null, max_score: a.max_score ?? null,
        summary: String(a.summary ?? "").slice(0, 5000), mistakes, topics });
      if (error) throw new Error(error.message);
      if (a.mock_id && String(a.item_id ?? "").startsWith("mock:")) await ctx.admin.from("mocks").update({ score: a.score, max_score: a.max_score, feedback: String(a.summary ?? "").slice(0, 20000) }).eq("id", a.mock_id).eq("user_id", uid);
      return text("Result saved. It appears on the student's performance page (my.html#performance) and feeds the mistake fingerprint and what_to_do_today.");
    }
    case "mistake_fingerprint": return text(J(await fingerprint(ctx)));
    case "performance": {
      const [{ data: prog }, { data: res }, { data: mocks }] = await Promise.all([
        ctx.admin.from("progress").select("page, done, rating").eq("user_id", uid),
        ctx.admin.from("results").select("item_id, kind, score, max_score, topics, created_at").eq("user_id", uid).order("created_at", { ascending: false }).limit(200),
        ctx.admin.from("mocks").select("exam_id, minutes, started_at, submitted_at, score, max_score").eq("user_id", uid).order("started_at", { ascending: false }).limit(20),
      ]);
      const done = (prog ?? []).filter((p) => p.done).map((p) => pageId(p.page));
      const scored = (res ?? []).filter((r) => r.max_score > 0);
      const avg = scored.length ? Math.round(100 * scored.reduce((s, r) => s + r.score / r.max_score, 0) / scored.length) : null;
      return text(J({ pages_done: done.length, done, hard_pages: (prog ?? []).filter((p) => (p.rating ?? 0) >= 4).map((p) => pageId(p.page)),
        results: scored.length, average_percent: avg, recent: (res ?? []).slice(0, 10), mocks, fingerprint: await fingerprint(ctx),
        days_to_exam_session: Math.ceil((EXAM_DATE - Date.now()) / 86400000), page: "https://mrisrijgd1.github.io/ETH-StudyHub/my.html#performance" }));
    }
    case "what_to_do_today": return text(J(await gapFinder(ctx, Number(a.minutes) || 60, a.subject)));
    case "design": {
      const action = a.action ?? "get";
      if (action === "get") return text(J({ design: (await getItem(ctx, "design"))?.content ?? {}, options: { theme: ["light", "dark", "auto"], colours: "accent, background, text, box as #rrggbb", font: FONTS, size: "80-150 (%)", density: ["compact", "normal", "airy"], width: ["narrow", "normal", "wide"], hide: HIDE } }));
      if (action === "reset") { await ctx.admin.from("my_items").delete().eq("user_id", uid).eq("key", "design"); return text("Design reset to the StudyHub default (undo('design') brings it back)."); }
      const cur = (await getItem(ctx, "design"))?.content ?? {};
      const next = cleanDesign({ ...cur, ...(a.tokens ?? {}) });
      await putItem(ctx, "design", next);
      return text(`Design saved: ${JSON.stringify(next)}. It applies on every StudyHub page when the student is signed in (reload the page). Content updates keep this design.`);
    }
    case "list_library": {
      const docs = ctx.content.docs.filter((d: any) => d.library).map((d: any) => ({ id: d.id, title: d.title, subject: d.subject, pages: d.pages }));
      return text(docs.length ? J({ note: "Private library: for study use by signed-in students only. Never paste whole files; quote short passages.", docs }) : "The private library is empty so far.");
    }
    default: return err(`Unknown tool ${name}.`);
  }
}

function cleanItem(sec: string, it: any) {
  const s = (v: any, n: number) => (v === undefined ? undefined : String(v).slice(0, n));
  if (sec === "flashcards") return strip({ front: s(it.front, 2000), back: s(it.back, 4000), topic: s(it.topic, 80), page: s(it.page, 40), due: s(it.due, 30), box: it.box === undefined ? undefined : Math.max(0, Math.min(5, Number(it.box) || 0)) });
  if (sec === "questions") return strip({ text: s(it.text, 4000), page: s(it.page, 40), status: ["open", "answered"].includes(it.status) ? it.status : undefined, answer: s(it.answer, 6000) });
  return strip({ text: s(it.text, 8000), page: s(it.page, 40), title: s(it.title, 120) });
}
const strip = (o: any) => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined));

async function fingerprint(ctx: Ctx) {
  const { data } = await ctx.admin.from("results").select("mistakes, created_at").eq("user_id", ctx.user.id).order("created_at", { ascending: false }).limit(300);
  const byType: Record<string, number> = {}, byTopic: Record<string, number> = {};
  const recent: any[] = [];
  for (const r of data ?? []) for (const m of r.mistakes ?? []) {
    byType[m.type] = (byType[m.type] ?? 0) + 1;
    if (m.topic) byTopic[m.topic] = (byTopic[m.topic] ?? 0) + 1;
    if (recent.length < 8) recent.push({ ...m, at: r.created_at });
  }
  const top = (o: Record<string, number>) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, n]) => ({ k, n }));
  return { mistakes_logged: Object.values(byType).reduce((a, b) => a + b, 0), most_common_types: top(byType), weakest_topics: top(byTopic), recent };
}

// Gap finder: what to do today, from progress, ratings, results and the mistake fingerprint.
async function gapFinder(ctx: Ctx, minutes: number, subject?: string) {
  const uid = ctx.user.id;
  const C = ctx.content;
  const { data: prog } = await ctx.admin.from("progress").select("page, done, rating, updated_at").eq("user_id", uid);
  const { data: states } = await ctx.admin.from("item_state").select("item_id, attempted_at").eq("user_id", uid);
  const { data: res } = await ctx.admin.from("results").select("item_id, score, max_score, topics, created_at").eq("user_id", uid).order("created_at", { ascending: false }).limit(200);
  const P = new Map((prog ?? []).map((p) => [pageId(p.page), p]));
  const attempted = new Set((states ?? []).filter((s) => s.attempted_at).map((s) => s.item_id));
  const pages = C.docs.filter((d: any) => (d.type === "lesson" || d.type === "refresher") && (!subject || d.subject === subject)).map((d: any) => d.id).sort();
  const fp = await fingerprint(ctx);
  const weakPages = new Map<string, number>();
  for (const r of res ?? []) if (r.max_score > 0 && r.score / r.max_score < 0.6) { const pg = String(r.item_id).split("/")[0]; weakPages.set(pg, (weakPages.get(pg) ?? 0) + 1); }
  const tasks: any[] = [];
  // 1. revisit hard or weak pages (rating >= 4, or low scores)
  for (const pg of pages) {
    const p = P.get(pg); const w = weakPages.get(pg) ?? 0;
    if ((p?.rating ?? 0) >= 4 || w) {
      const ex = Object.values(C.exercises).filter((e: any) => e.page === pg && !attempted.has(e.id)).slice(0, 2).map((e: any) => e.id);
      tasks.push({ why: w ? `${w} low score(s) here` : `you rated it ${p!.rating}/5`, do: `Revisit ${pg}: redo ${ex.length ? ex.join(", ") : "its exam exercise"} on paper`, minutes: 30, score: 3 + w + ((p?.rating ?? 0) - 3) });
    }
  }
  // 2. next unfinished page in order (lessons first, then refresher)
  const next = pages.find((pg) => !P.get(pg)?.done);
  if (next) tasks.push({ why: "next step on your path", do: `Continue with ${next}: ${C.docs.find((d: any) => d.id === next)?.title ?? ""}`, minutes: 60, score: 4 });
  // 3. mistake type drill
  if (fp.most_common_types[0]) tasks.push({ why: `your most common mistake type is "${fp.most_common_types[0].k}" (${fp.most_common_types[0].n}×)`, do: `Do one exam proof slowly and check only for ${fp.most_common_types[0].k} mistakes`, minutes: 20, score: 2 + fp.most_common_types[0].n / 3 });
  // 4. close to the exam: mocks
  const days = Math.ceil((EXAM_DATE - Date.now()) / 86400000);
  if (days < 40) tasks.push({ why: `${days} days to the exam session`, do: "Do one timed mock (start_mock) and let it be marked", minutes: 180, score: days < 20 ? 6 : 3 });
  tasks.sort((a, b) => b.score - a.score);
  const pick: any[] = []; let left = minutes;
  for (const t of tasks) { if (t.minutes <= left || !pick.length) { pick.push(t); left -= t.minutes; } if (pick.length >= 3) break; }
  return { minutes_available: minutes, today: pick.map(({ score, ...t }) => t), days_to_exam_session: days,
    note: "Suggest at most these tasks, one at a time, gently. A missed day is fine: resume, don't rebuild." };
}
