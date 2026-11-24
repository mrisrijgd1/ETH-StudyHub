// StudyHub data client for the connector. Personal data (progress, notes, results, mocks, ...) lives on our
// Swiss server (study-hub.ch/api/db.php, MariaDB at Infomaniak), not in Supabase. Supabase only does the login.
// Same call shape as supabase-js: db.from("progress").select("page").eq("user_id", id).maybeSingle()
// Each call carries the student's own sign-in token, so the server only ever shows that student's rows.
const API = Deno.env.get("STUDYHUB_DB_URL") ?? "https://study-hub.ch/api/db.php";

type Res = { data: any; error: { message: string } | null };

async function call(token: string, body: unknown): Promise<Res> {
  try {
    const r = await fetch(API, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify(body) });
    const j = await r.json().catch(() => null);
    if (!j) return { data: null, error: { message: `StudyHub data server error (${r.status}).` } };
    return { data: j.data ?? null, error: j.error ?? null };
  } catch (e) {
    return { data: null, error: { message: (e as Error).message || "StudyHub data server not reachable." } };
  }
}

class Query implements PromiseLike<Res> {
  q: Record<string, any>;
  token: string;
  constructor(token: string, table: string) { this.token = token; this.q = { t: table, op: "select", f: [] }; }
  select(cols?: string) { if (this.q.op === "select") this.q.cols = cols ?? "*"; else this.q.ret = true; return this; }
  insert(v: unknown) { this.q.op = "insert"; this.q.v = v; return this; }
  upsert(v: unknown) { this.q.op = "upsert"; this.q.v = v; return this; }
  update(v: unknown) { this.q.op = "update"; this.q.v = v; return this; }
  delete() { this.q.op = "delete"; return this; }
  private add(c: string, op: string, v: unknown) { this.q.f.push([c, op, v]); return this; }
  eq(c: string, v: unknown) { return this.add(c, "eq", v); }
  neq(c: string, v: unknown) { return this.add(c, "neq", v); }
  gt(c: string, v: unknown) { return this.add(c, "gt", v); }
  gte(c: string, v: unknown) { return this.add(c, "gte", v); }
  lt(c: string, v: unknown) { return this.add(c, "lt", v); }
  lte(c: string, v: unknown) { return this.add(c, "lte", v); }
  in(c: string, v: unknown[]) { return this.add(c, "in", v); }
  is(c: string, _v: null) { return this.add(c, "is", null); }
  not(c: string, op: string, v: unknown) {
    if (op === "is" && v === null) return this.add(c, "not_is", null);
    if (op === "eq") return this.add(c, "neq", v);
    throw new Error(`db: unsupported not(${op})`);
  }
  order(c: string, o?: { ascending?: boolean }) { (this.q.order ??= []).push([c, o?.ascending !== false]); return this; }
  limit(n: number) { this.q.limit = n; return this; }
  single() { this.q.one = "single"; return this; }
  maybeSingle() { this.q.one = "maybe"; return this; }
  then<A = Res, B = never>(ok?: ((r: Res) => A | PromiseLike<A>) | null, bad?: ((e: any) => B | PromiseLike<B>) | null) {
    return call(this.token, this.q).then(ok, bad);
  }
}

export type Db = { from(table: string): Query; rpc(name: string, args?: Record<string, unknown>): Promise<Res> };

export function dbFor(token: string): Db {
  return { from: (t) => new Query(token, t), rpc: (name, a = {}) => call(token, { rpc: name, a }) };
}
