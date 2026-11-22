# 01: Model research (v2)

## Candidates (one blind comparison, merged with Srish's plan, F1)
All run on **Infomaniak AI Services** where possible: OpenAI-compatible API, Swiss hosting, with requests not stored and not used for training (per Infomaniak). Licence and terms are checked for each model before the run.
- `swiss-ai/Apertus-v1.5-70B`, thinking on and off
- Qwen3.5-397B, Mistral-Small-4, Gemma-4-31B, Kimi-K2.6 (as listed by Infomaniak)
- **Claude** as the reference ceiling (what students use today via the connector)

The 8B is **parked** (F2). It would need our own hosting.

## Apertus 1.5 facts (model card)
- Apache-2.0 plus an Acceptable Use Policy. The HF repo is gated. https://huggingface.co/swiss-ai/Apertus-v1.5-70B
- Thinking mode (off by default), image and audio input, 262k context. Tool calling is unsupported in thinking mode.
- Self-hosting currently needs Swiss AI's vLLM/Transformers forks. Infomaniak removes that risk (G1).
- Card limitations: output may be inaccurate or inconsistent, so it is an assistive tool only.
- Open training data, so a real contamination search is possible for Apertus (N5).

## Apertus v1.1 (0.5-4B)
Out of scope: the card says they may lack advanced maths.
