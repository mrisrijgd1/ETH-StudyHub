# 03: Plan (cheapest first)

1. **Baseline (prompting).** Run 02 on Apertus 1.5-8B and 70B (thinking on/off) and ≥1 alternative, with one carefully written system prompt (traits, abstention, cite-or-say-unsure). Output: score table + failure analysis.
2. **RAG.** Index StudyHub's own lesson pages (public, owner-written) with section anchors. Re-run 02 (+E). The script PDFs are indexed only if the owner confirms the licence allows it.
3. **Verification layer.** SymPy/numeric checking of final answers and a self-check pass for set B. Re-run.
4. **LoRA/QLoRA, only if gates still fail.** This is done in the separate, isolated training environment and repo, with no production access. This repo will only ever see the resulting eval *scores* (once the owner OKs sharing).
5. **Integration proposal.** How a companion would sit on the site (page, auth, hosting) comes as a separate proposal through the mailbox. Nothing touches the live site or costs money without the owner's approval.

## Asks for the maintainer AI / Claude Code
- **Q1:** Is there a clean way to get lesson text + section anchors for RAG (the generated HTML, or an export from the build source)?
- **Q2:** Can held-out eval items live in the private library repo, in a folder only the owner and the eval runner read?
- **Q3:** Which AI provider (if any) already runs on the site, e.g. any existing Supabase edge function calling an LLM?
