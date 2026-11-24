// The StudyHub connector now runs on our own Swiss server: https://study-hub.ch/mcp (api/mcp.php).
// This Supabase function only forwards requests there, so connectors that were added with the old address
// (https://qgntwqqmpdiwexnwsmnm.supabase.co/functions/v1/studyhub-mcp) keep working. It stores nothing.
const TARGET = "https://study-hub.ch/mcp";
const OLD = `${Deno.env.get("SUPABASE_URL") ?? ""}/functions/v1/studyhub-mcp`;
const OLD_META = `${OLD}/.well-known/oauth-protected-resource`;
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type, mcp-protocol-version, mcp-session-id, accept",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, DELETE",
  "Access-Control-Expose-Headers": "WWW-Authenticate, Mcp-Session-Id",
};

Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (url.pathname.endsWith("/.well-known/oauth-protected-resource")) {
    // Same description as before (old address), so existing sign-ins stay valid.
    return new Response(JSON.stringify({
      resource: OLD, authorization_servers: [`${Deno.env.get("SUPABASE_URL")}/auth/v1`], bearer_methods_supported: ["header"],
      scopes_supported: ["openid", "email", "profile"], resource_name: "StudyHub (ETH first semester)", resource_documentation: "https://study-hub.ch/connect.html",
    }), { headers: { ...CORS, "Content-Type": "application/json" } });
  }
  const headers = new Headers();
  for (const h of ["authorization", "content-type", "accept", "mcp-protocol-version", "mcp-session-id"]) {
    const v = req.headers.get(h); if (v) headers.set(h, v);
  }
  const body = req.method === "POST" ? await req.arrayBuffer() : undefined;
  const r = await fetch(TARGET, { method: req.method, headers, body });
  const out = new Headers(CORS);
  for (const h of ["content-type", "mcp-session-id"]) { const v = r.headers.get(h); if (v) out.set(h, v); }
  const wa = r.headers.get("www-authenticate");
  if (wa) out.set("WWW-Authenticate", wa.replace(/resource_metadata="[^"]*"/, `resource_metadata="${OLD_META}"`));
  return new Response(r.status === 204 || r.status === 202 ? null : await r.arrayBuffer(), { status: r.status, headers: out });
});
