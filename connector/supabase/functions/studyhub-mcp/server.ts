// StudyHub connector: a remote MCP server (Streamable HTTP, stateless JSON responses) on Supabase Edge Functions.
// Students add https://<project>.supabase.co/functions/v1/studyhub-mcp to their own Claude / ChatGPT / Gemini
// and sign in with their StudyHub account (Supabase OAuth 2.1 server). All rules are enforced HERE, not in prompts.
import type { SupabaseClient } from "npm:@supabase/supabase-js@2.118.0";
import { TOOLS, INSTRUCTIONS } from "./tools.ts";
import { Content, loadContent, search, readDoc, segmentFor, wholeDoc, scriptExcerpt, relatedOfficial, pageImage } from "./content.ts";
import { personal } from "./personal.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "http://localhost";
const PUBLIC_URL = `${SUPABASE_URL}/functions/v1/studyhub-mcp`;
const META_URL = `${PUBLIC_URL}/.well-known/oauth-protected-resource`;
const VERSION = "1.0.0";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type, mcp-protocol-version, mcp-session-id, accept",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, DELETE",
  "Access-Control-Expose-Headers": "WWW-Authenticate, Mcp-Session-Id",
};
const json = (body: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json", ...extra } });

function unauthorized(msg = "Sign in to StudyHub to use this connector.") {
  return json({ error: "invalid_token", error_description: msg }, 401, {
    "WWW-Authenticate": `Bearer resource_metadata="${META_URL}", error="invalid_token"`,
  });
}

export type Ctx = { user: { id: string; email?: string }; content: Content; admin: SupabaseClient };

export async function app(req: Request, admin: SupabaseClient): Promise<Response> {
  const url = new URL(req.url);
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (url.pathname.endsWith("/.well-known/oauth-protected-resource")) {
    return json({
      resource: PUBLIC_URL,
      authorization_servers: [`${SUPABASE_URL}/auth/v1`],
      bearer_methods_supported: ["header"],
      scopes_supported: ["openid", "email", "profile"],
      resource_name: "StudyHub (ETH first semester)",
      resource_documentation: "https://mrisrijgd1.github.io/ETH-StudyHub/connect.html",
    });
  }
  if (req.method === "GET") {
    // No server-sent event stream: this server answers every request directly.
    if ((req.headers.get("accept") ?? "").includes("text/event-stream")) return new Response(null, { status: 405, headers: CORS });
    return json({ name: "StudyHub connector", version: VERSION, docs: "https://mrisrijgd1.github.io/ETH-StudyHub/connect.html" });
  }
  if (req.method === "DELETE") return new Response(null, { status: 204, headers: CORS });
  if (req.method !== "POST") return new Response(null, { status: 405, headers: CORS });

  // ---- authentication: every call needs a StudyHub sign-in ----
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.toLowerCase().startsWith("bearer ") ? auth.slice(7).trim() : "";
  if (!token) return unauthorized();
  const { data: u, error: ue } = await admin.auth.getUser(token);
  if (ue || !u?.user) return unauthorized("Your StudyHub sign-in has expired. Please reconnect.");

  let msg: any;
  try { msg = await req.json(); } catch { return json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }, 400); }
  const batch = Array.isArray(msg) ? msg : [msg];
  const ctx: Ctx = { user: { id: u.user.id, email: u.user.email }, content: await loadContent(admin), admin };
  const out = [];
  for (const m of batch) {
    const r = await handle(m, ctx);
    if (r) out.push(r);
  }
  if (!out.length) return new Response(null, { status: 202, headers: CORS });
  return json(Array.isArray(msg) ? out : out[0]);
}

async function handle(m: any, ctx: Ctx) {
  if (!m || m.jsonrpc !== "2.0" || typeof m.method !== "string") return { jsonrpc: "2.0", id: m?.id ?? null, error: { code: -32600, message: "Invalid request" } };
  const id = m.id;
  if (id === undefined || id === null) return null; // notification
  try {
    switch (m.method) {
      case "initialize": {
        const asked = m.params?.protocolVersion;
        const ok = ["2025-06-18", "2025-03-26", "2024-11-05", "2025-11-25"];
        return { jsonrpc: "2.0", id, result: {
          protocolVersion: ok.includes(asked) ? asked : "2025-06-18",
          capabilities: { tools: { listChanged: false } },
          serverInfo: { name: "studyhub", title: "StudyHub", version: VERSION },
          instructions: INSTRUCTIONS,
        } };
      }
      case "ping": return { jsonrpc: "2.0", id, result: {} };
      case "tools/list": return { jsonrpc: "2.0", id, result: { tools: TOOLS } };
      case "tools/call": {
        const name = m.params?.name, args = m.params?.arguments ?? {};
        const res = await callTool(name, args, ctx);
        return { jsonrpc: "2.0", id, result: res };
      }
      case "resources/list": return { jsonrpc: "2.0", id, result: { resources: [] } };
      case "prompts/list": return { jsonrpc: "2.0", id, result: { prompts: [] } };
      default: return { jsonrpc: "2.0", id, error: { code: -32601, message: `Unknown method ${m.method}` } };
    }
  } catch (e) {
    console.error(e);
    return { jsonrpc: "2.0", id, result: { content: [{ type: "text", text: `Error: ${(e as Error).message}` }], isError: true } };
  }
}

const text = (t: string) => ({ content: [{ type: "text", text: t }] });
const err = (t: string) => ({ content: [{ type: "text", text: t }], isError: true });
const J = (o: unknown) => JSON.stringify(o, null, 1);

// ---- item state (hints shown, attempted) ----
async function getState(ctx: Ctx, item: string) {
  const { data } = await ctx.admin.from("item_state").select("*").eq("user_id", ctx.user.id).eq("item_id", item).maybeSingle();
  return data ?? { hints_shown: 0, attempted_at: null };
}
async function setState(ctx: Ctx, item: string, patch: Record<string, unknown>) {
  const cur = await getState(ctx, item);
  const row = { user_id: ctx.user.id, item_id: item, hints_shown: cur.hints_shown, attempted_at: cur.attempted_at, ...patch, updated_at: new Date().toISOString() };
  const { error } = await ctx.admin.from("item_state").upsert(row);
  if (error) throw new Error(error.message);
}
// A PDF's solutions unlock once any question of it was attempted, or a mock of it was submitted.
async function docUnlocked(ctx: Ctx, docId: string) {
  const base = ctx.content.pdfs[docId]?.solution_of ?? docId;
  const { data } = await ctx.admin.from("item_state").select("item_id").eq("user_id", ctx.user.id)
    .like("item_id", `doc:${base}#%`).not("attempted_at", "is", null).limit(1);
  if (data?.length) return true;
  const { data: mk } = await ctx.admin.from("mocks").select("id").eq("user_id", ctx.user.id).eq("exam_id", base).not("submitted_at", "is", null).limit(1);
  return !!mk?.length;
}

// Hints: stored hints first; otherwise graded steps cut from the solution (never the whole solution).
function hintsFor(ex: any): string[] {
  if (ex.hints?.length) return ex.hints;
  const sol: string = ex.solution ?? "";
  const sentences = sol.replace(/\n+/g, " ").split(/(?<=[.!?:])\s+(?=[A-Z$(])/).filter((s: string) => s.trim().length > 3);
  const out: string[] = [];
  const terms = [...new Set((sol.match(/\b(?:[A-Za-z'’-]+ ){0,3}(theorem|lemma|criterion|test|inequality|Satz|definition|rule|substitution|integration by parts|induction|contradiction|epsilon|Archimed\w*|Bolzano[- ]Weierstrass|intermediate value|mean value|l'H\w+pital|Cauchy|Leibniz|ratio|root|comparison|triangle inequality)\b[^.,;]{0,30}/gi) ?? []).map((s) => s.trim()))].slice(0, 4);
  if (terms.length) out.push(`Tools that the solution uses: ${terms.join("; ")}.`);
  if (sentences.length > 1) out.push(`First step: ${sentences[0]}`);
  if (sentences.length > 3) out.push(`Next: ${sentences.slice(1, Math.max(2, Math.floor(sentences.length / 3))).join(" ")}`);
  return out.length ? out : ["Re-read the definitions in the problem and write down what you must show in symbols (first line and last line of the proof)."];
}

function exerciseOrDoc(ctx: Ctx, id: string) {
  if (id.startsWith("doc:")) {
    const [docId, q] = id.slice(4).split("#");
    const d = ctx.content.pdfs[docId];
    if (!d) return { error: `Unknown document ${docId}.` };
    if (!q) return { error: "Name the question too, e.g. doc:" + docId + "#MC3 or #Aufgabe 2." };
    return { doc: d, question: q };
  }
  const ex = resolveExercise(ctx.content.exercises, id);
  if (ex) return { ex };
  const pg = id.split("/")[0];
  const list = exerciseList(ctx.content.exercises, pg);
  return { error: `Unknown exercise id ${id}.` + (list.length ? ` Exercises on ${pg}:\n${list.join("\n")}` : ` Use search with type "exercise" to find ids.`) };
}

// The page's own labels ("Exercise 2", "Proof B", "Worked example 1") are NOT the ex<n> numbers:
// ex<n> counts every locked solution on the page in order. Accept the labels as aliases so that
// "lesson-08/exercise-2" means the box titled "Exercise 2", never lesson-08/ex2 (which is Proof B).
const LABELS: [RegExp, string][] = [[/^(?:exercise|aufgabe|übung)$/i, "(?:exercise|aufgabe|übung)"], [/^(?:proof|beweis)$/i, "(?:proof|beweis)"], [/^(?:worked|worked-example|example|beispiel)$/i, "(?:worked example|beispiel)"]];
export function resolveExercise(all: Record<string, any>, id: string): any {
  if (all[id]) return all[id];
  const m = id.trim().match(/^([a-z0-9-]+?)\/(?:#)?([a-zäöü]+(?:-example)?)[\s_-]*([0-9]+|[a-z])$/i);
  if (!m) return null;
  const [, page, word, n] = m;
  const pat = LABELS.find(([w]) => w.test(word));
  if (!pat) return null;
  const re = new RegExp(`^${pat[1]}\\s+${n}\\b`, "i");
  return Object.values(all).find((e: any) => e.page === page && re.test(String(e.title).trim())) ?? null;
}
export function exerciseList(all: Record<string, any>, page: string): string[] {
  return Object.values(all).filter((e: any) => e.page === page).map((e: any) => `${e.id} = ${String(e.title).slice(0, 90)}`);
}

async function callTool(name: string, a: any, ctx: Ctx): Promise<any> {
  const C = ctx.content;
  switch (name) {
    case "search": {
      const hits = search(C, String(a.query ?? ""), a.subject, a.type, Math.min(Number(a.limit) || 8, 20));
      if (!hits.length) return text("No matches. Try other words (German and English both work), or fewer words.");
      return text(J({ results: hits, next: "Open a result with read(id). Exercises: get_exercise(id). Script pages: read('script-analysis@<printed page>')." }));
    }
    case "read": {
      const r = await readDoc(C, String(a.id ?? ""), a.page, (doc) => docUnlocked(ctx, doc), ctx.admin);
      return r.error ? err(r.error) : text(r.text!);
    }
    case "get_page_image": {
      const r = await pageImage(C, String(a.doc ?? ""), Number(a.page), (doc) => docUnlocked(ctx, doc), ctx.admin);
      if (r.error) return err(r.error);
      return { content: [{ type: "image", data: r.data, mimeType: "image/jpeg" }, { type: "text", text: r.caption! }] };
    }
    case "get_exercise": {
      const x: any = exerciseOrDoc(ctx, String(a.id ?? ""));
      if (x.error) return err(x.error);
      if (x.ex) a.id = x.ex.id;
      const st = await getState(ctx, a.id);
      if (x.doc) {
        const seg = segmentFor(x.doc.questions_text ?? x.doc.page_text, x.question);
        return text(J({ id: a.id, source: `${x.doc.title} (official exam / course document)`, url: x.doc.url, question: seg ?? `(Label "${x.question}" not found automatically; here is the whole exam, find the question in it.)\n${wholeDoc(x.doc.questions_text ?? x.doc.page_text, 15000)}`,
          attempted: !!st.attempted_at, hints_shown: st.hints_shown,
          rules: "Official solution is locked until submit_attempt. There are no stored hints for exam questions: give at most ONE small hint per request yourself, never the solution." }));
      }
      const ex = x.ex;
      const hs = hintsFor(ex);
      return text(J({ id: ex.id, title: ex.title, source: `StudyHub ${ex.kind} (${ex.page})`, url: ex.url, problem: ex.problem,
        script: scriptExcerpt(C, ex.subject, ex.script_pages), related_official: relatedOfficial(C, ex.title + " " + ex.problem, ex.subject),
        hints_available: hs.length, hints_shown: st.hints_shown, attempted: !!st.attempted_at, has_grader_list: ex.grader,
        rules: "Solution locked until submit_attempt. Hints only via get_hint, one per request of the student." }));
    }
    case "get_hint": {
      const x: any = exerciseOrDoc(ctx, String(a.id ?? ""));
      if (x.error) return err(x.error);
      if (x.ex) a.id = x.ex.id;
      const st = await getState(ctx, a.id);
      if (x.doc) {
        await setState(ctx, a.id, { hints_shown: st.hints_shown + 1 });
        return text(`Hint ${st.hints_shown + 1} for ${a.id}: no stored hint exists for this official exam question. Give the student ONE short hint of your own (a direction, a definition or a theorem to look at), not a solution step. Ask them to try again before any further hint.`);
      }
      const hs = hintsFor(x.ex);
      if (st.hints_shown >= hs.length) return text(`All ${hs.length} hints for ${a.id} ("${x.ex.title}") have been shown. The next step is submit_attempt with what the student has written; then the solution unlocks.`);
      await setState(ctx, a.id, { hints_shown: st.hints_shown + 1 });
      return text(`Hint ${st.hints_shown + 1} of ${hs.length} for ${a.id} ("${x.ex.title}"):\n${hs[st.hints_shown]}\n\n[Rule: give only this hint, in your own gentle words. Do not add further steps. The student asks for the next one if needed.]`);
    }
    case "submit_attempt": {
      const x: any = exerciseOrDoc(ctx, String(a.id ?? ""));
      if (x.error) return err(x.error);
      if (x.ex) a.id = x.ex.id;
      const attempt = String(a.attempt ?? "").trim();
      if (attempt.length < 3) return err("Send the student's attempt (typed, or your faithful transcription of their photo). An empty attempt doesn't unlock the solution.");
      await ctx.admin.from("attempts").insert({ user_id: ctx.user.id, item_id: a.id, kind: x.doc ? "exam" : "exercise", attempt: attempt.slice(0, 20000) });
      await setState(ctx, a.id, { attempted_at: new Date().toISOString() });
      const marking = "Mark the attempt now. Compare it line by line with the OFFICIAL solution first (if there is one), then the StudyHub solution. Quote script pages for every definition or theorem used. Say what is correct first, then each gap, with points if a grader's list exists. Finally call save_result with score, max_score, a one-paragraph summary and the list of mistakes (type + topic + short note).";
      if (x.doc) {
        const d = x.doc;
        const solDoc = d.solution_doc ? C.pdfs[d.solution_doc] : d.inline_solutions ? d : null;
        const sol = solDoc ? (segmentFor(solDoc.page_text, x.question) ?? `(Question "${x.question}" not located automatically: find it in the official solutions below.)\n${wholeDoc(solDoc.page_text)}`) : null;
        return text(J({ id: a.id, unlocked: true,
          official_solution: sol ? { source: `${solDoc.title} (official)`, text: sol, pages: `use get_page_image('${solDoc.id}', page) for exact formulas` }
            : { note: "No official solution exists for this exam. Solve it carefully yourself and say clearly that your solution is not official." },
          marking }));
      }
      const ex = x.ex;
      return text(J({ id: ex.id, unlocked: true, related_official: relatedOfficial(C, ex.title + " " + ex.problem, ex.subject),
        studyhub_solution: { source: "StudyHub-written (checked, but not official)", text: ex.solution, grader_list_included: ex.grader },
        script: scriptExcerpt(C, ex.subject, ex.script_pages), marking }));
    }
    case "start_mock": {
      const d = C.pdfs[String(a.exam ?? "")];
      if (!d || d.type !== "exam") return err("Unknown exam id. Use search with type 'exam' or list_exams.");
      if (d.solution_of) return err("That is a solutions file. Start the mock with the exam itself: " + d.solution_of);
      const minutes = Math.min(Math.max(Number(a.minutes) || 180, 10), 300);
      const { data, error } = await ctx.admin.from("mocks").insert({ user_id: ctx.user.id, exam_id: d.id, minutes }).select().single();
      if (error) throw new Error(error.message);
      const ends = new Date(Date.parse(data.started_at) + minutes * 60000);
      return text(J({ mock_id: data.id, exam: d.title, minutes, started_at: data.started_at, ends_at: ends.toISOString(),
        pages: d.pages, how_to_show: `Show the questions with read('${d.id}') or get_page_image('${d.id}', n) for n = 1..${d.pages}.`,
        rules: "Exam conditions: no hints, no solutions, no help with content until submit_mock. Only clarify wording. Remind the student of the time if asked." }));
    }
    case "submit_mock": {
      const { data: mk } = await ctx.admin.from("mocks").select("*").eq("id", a.mock_id).eq("user_id", ctx.user.id).maybeSingle();
      if (!mk) return err("Unknown mock_id.");
      if (mk.submitted_at) return err("This mock was already submitted. Use save_result to store the marking.");
      const now = new Date();
      const used = Math.round((now.getTime() - Date.parse(mk.started_at)) / 60000);
      await ctx.admin.from("mocks").update({ submitted_at: now.toISOString() }).eq("id", mk.id);
      await ctx.admin.from("attempts").insert({ user_id: ctx.user.id, item_id: `mock:${mk.id}`, kind: "mock", attempt: String(a.answers ?? "").slice(0, 20000) });
      const d = C.pdfs[mk.exam_id];
      const solDoc = d?.solution_doc ? C.pdfs[d.solution_doc] : d?.inline_solutions ? d : null;
      return text(J({ mock_id: mk.id, minutes_used: used, minutes_allowed: mk.minutes, over_time: used > mk.minutes,
        official_solutions: solDoc ? { doc: solDoc.id, title: solDoc.title, how: `read('${solDoc.id}', page) / get_page_image('${solDoc.id}', page)` } : "No official solutions for this exam: mark from your own careful solution and say so.",
        marking: "Mark every question with points like the real exam. Then targeted feedback: the 3 most important gaps, each with the lesson to revisit (StudyHub lesson links) and script pages. Then call save_result once per question (kind 'mock', item_id 'doc:<exam>#<label>', mock_id) and once for the total (kind 'mock', item_id 'mock:<mock_id>', mock_id, score/max, summary)." }));
    }
    case "list_exams": {
      const list = Object.values(C.pdfs).filter((d: any) => (d.type === "exam" || /mock/.test(d.id)) && !d.solution_of && (!a.subject || d.subject === a.subject))
        .map((d: any) => ({ id: d.id, title: d.title, subject: d.subject, pages: d.pages, official_solutions: !!(d.solution_doc || d.inline_solutions) }));
      return text(J(list));
    }
    default:
      return personal(name, a, ctx);
  }
}
