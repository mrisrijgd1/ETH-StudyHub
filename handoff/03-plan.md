# 03: Plan (v2)

1. **Pilot** (~85 items, free Infomaniak starter credits only): all candidates, prompt-only, harness = Inspect (or promptfoo). Check grader agreement.
2. **Retrieval (RAG)** over StudyHub's own lessons, reusing `connector/build/build_content.py` (read-only), with per-h2 sections and anchors. Solutions stay hidden as the connector serves them (hint-first). Retrieval quality (right section in top 5) is measured separately. Embeddings: bge-multilingual-gemma2 or Qwen3-Embedding-8B on Infomaniak. **Script PDFs are not indexed** without the professor's permission.
3. **Checker layer:** SymPy for final answers; anonymised escalation of hard questions to a stronger model.
4. **Fine-tuning: PARKED** (team decision, Mridul 22 Nov, agreed by Rachel). Revisit only if all of these hold: cheaper steps done and a documented failure only training can fix; free Swiss GPU time (e.g. Swiss AI Initiative / CSCS); professor permission for the material; Mridul's yes.
5. **Track L** (lesson building), after the pilot.
6. **Studies with real students** are separate and need informed consent + ETH Ethics Commission approval first.

## Budget (Mridul, 22 Nov)
The pilot runs on free Infomaniak credits. Then a cost estimate for the full test, based on the pilot's real token use, is posted on #65 before the run. Up to about CHF 150 including judge costs is approved; anything above needs asking again. Actual spend is reported after the run.

## Timeline (no grading load on Mridul during the Basisprüfung, 25 Jan - 19 Feb 2027)
Pilot first, once the Infomaniak key is available; the blind comparison report follows; full v1 and Track L after the exams, unless others do the human checks.

## Report
One page: who wins on what (with intervals), cost per student per month, latency, 5 real failures. Details below.
