# StudyHub connector (MCP server)

Students add `https://study-hub.ch/mcp` to their own Claude / ChatGPT / Gemini and sign in with their StudyHub
account (the login runs at Supabase's OAuth 2.1 server; consent page = `oauth/consent.html`). Supabase is used
for the login only: the server, the personal data and all course files are on our Swiss hosting (Infomaniak).
Setup guide for students: `connect.html`. Personal page: `my.html`.

- `api/mcp.php` — the server (PHP, deployed with the website; `/mcp` is routed to it in the root `.htaccess`):
  HTTP + MCP JSON-RPC, exercise/exam tools, locks, and the personal layer (My StudyHub, progress, results,
  gap finder, design, versions). `api/lib/mcp_content.php` = index loading, search, reading, page images.
  `api/lib/mcp-tools.json` = tool list + rules sent to the AI.
- Personal data goes through the same rules as the website (`api/lib/query.php`, MariaDB at Infomaniak).
- Course content: `build/build_content.py` builds `content.json` + page images; the connector workflow copies
  them to `studyhub-data/connector/` (outside the website). The private library and the Exam Dive bank are built
  by the library repo's sync workflow into `studyhub-data/connector-library/` and `studyhub-data/dive/`.
- The old Supabase address (`.../functions/v1/studyhub-mcp`) was removed on 25 Nov 2026; connectors must use `https://study-hub.ch/mcp`.
- `sql/` — login-side database at Supabase (run by the workflow; safe to rerun).
- `.github/workflows/connector-deploy.yml` — on every push to main: SQL, content refresh, smoke test.

Rules enforced in the server: exercise solutions are cut out of every page and only returned after `submit_attempt`; hints one at a time (`get_hint` counts);
official solution files and pages with inline solutions stay locked until an attempt on that exam or a submitted mock; library files only through the signed-in connector.
Personal data (my_items, progress) is versioned into `my_versions` (undo / history / restore / reset).
