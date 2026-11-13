# StudyHub connector (MCP server)

Students add `https://qgntwqqmpdiwexnwsmnm.supabase.co/functions/v1/studyhub-mcp` to their own Claude / ChatGPT / Gemini
and sign in with their StudyHub account (Supabase OAuth 2.1 server; consent page = `oauth/consent.html`).
Setup guide for students: `connect.html`. Personal page: `my.html`.

- `supabase/functions/studyhub-mcp/` — the server (Deno). `server.ts` = HTTP + MCP JSON-RPC + content/exercise tools,
  `content.ts` = index loading, search, reading, locks, `personal.ts` = My StudyHub, progress, results, gap finder, design, versions,
  `tools.ts` = tool list + rules sent to the AI.
- `sql/` — database (run by the workflow through the Supabase Management API; safe to rerun).
- `build/build_content.py` — builds `content.json` + page images from the built site; `build/upload.py` uploads changed files to the private `connector` bucket.
- `.github/workflows/connector-deploy.yml` — on every push to main: SQL, deploy, content refresh, smoke test. Needs the repo secret `SUPABASE_ACCESS_TOKEN`.

Rules enforced in the server: exercise solutions are cut out of every page and only returned after `submit_attempt`; hints one at a time (`get_hint` counts);
official solution files and pages with inline solutions stay locked until an attempt on that exam or a submitted mock; library files only through the signed-in connector.
Personal data (my_items, progress) is versioned by triggers into `my_versions` (undo / history / restore / reset).

Local test: `deno run -A test/e2e.ts content.json` with an in-memory fake Supabase (not in the repo; see the build thread).
