# 01: Model research (verified 22 Nov 2026)

All facts below come from official model cards and announcements, which are linked. Anything unverified is marked **open**.

## Apertus 1.0 (2509)
- 8B and 70B, base + Instruct. Licence **Apache-2.0**, with a `USAGE_POLICY.md` in the HF repo. https://huggingface.co/swiss-ai/Apertus-8B-Instruct-2509
- Decoder-only, pretrained on 15T tokens with a staged web/code/math curriculum. Post-training: SFT + QRPO alignment. Context 65,536 tokens.
- Runs on Transformers, vLLM, SGLang and MLX. Recommended sampling: temperature 0.8, top_p 0.9.
- Fully open: weights, data, recipes and intermediate checkpoints. Tech report: arXiv 2509.14233. A separate repo, `swiss-ai/apertus-finetuning-recipes`, is listed in the report. **open:** check its LoRA support.

## Apertus 1.5 (Oct 2026), the default candidate
- 8B and 70B, continued pretraining of 1.0. Licence **Apache-2.0** plus an **Acceptable Use Policy**. The HF repo is gated: you accept the AUP and share contact details. https://huggingface.co/swiss-ai/Apertus-v1.5-70B
- New in 1.5: **thinking mode** (off by default), image and audio **input**, 262,144-token context, better instruction following and tool use. Tool calling is **not** supported in thinking mode.
- Serving: upstream vLLM/Transformers support is still in progress. Until then, Swiss AI's forks or their Docker image (`ghcr.io/swiss-ai/vllm_apertus_1.5_release`) are needed. This is a deployment risk to track.
- Card benchmarks (70B, evaleval): GSM8K 84.99, GPQA 35.94, MMLU-Pro 56.38. **open:** 8B numbers, and MATH-500 in thinking mode.
- Limitations (card): output may not be accurate or logically consistent; it is meant as an assistive tool, so users must verify. The card also advises refreshing weights every 6 months for data-protection updates.
- Image input matters here: students can photograph a handwritten attempt or a script page.

## Apertus v1.1 small models (0.5B, 1.5B, 4B)
- Distilled from 8B. The card itself warns they "may lack ... advanced math", so they are out of scope for maths tutoring and at most a router/classifier.

## Alternatives to compare (open, not yet verified)
To be added with sources before any decision: one strong open-weight maths model of similar size (e.g. Qwen/Mistral family), checking licence + AUP for each. They are compared on the **same** eval set (02).

## Hosting options (open)
- Public AI Inference Utility / Swisscom offer hosted Apertus (ETH press release, Sep 2025). Terms, cost and data handling still need checking. **Any paid option needs the owner's approval.**
