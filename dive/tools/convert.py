#!/usr/bin/env python3
"""Convert enrichment records + raw bank records into Exam Dive's normalised question format.

Usage (from the repository root):

    python3 dive/tools/convert.py \
        --bank  PATH/TO/mcq/analysis/quizzes.json \
        --enriched PATH/TO/analysis/quizzes.enriched.json \
        --out dive/questions/dev/analysis-quizzes.json

--bank and --enriched may be given several times; records are matched by "id".
The output folder's index.json is (re)written to list every *.json file in it.

Enrichment record fields used: answer, stem_tex, options_tex, explanation, option_notes,
chapter, refs, difficulty, needs_figure (+ solvable, confidence).
Bank record fields used: id, subject, kind, source, language, options (key order),
answer, answer_status, multiple_correct, answer_format, page_image / slide_image.

Records are skipped (with a warning on stderr) when they are unsolvable, below the
confidence threshold, disagree with a known answer in the bank, need a figure that is not
available, or fail validation. Nothing is guessed.

Output is PRIVATE when the input is private: write it only to the gitignored
dive/questions/dev/ folder (or another private place), never to the public bank.
"""
import argparse
import json
import re
import shutil
import sys
from pathlib import Path

CONF_RANK = {"low": 0, "medium": 1, "high": 2}
ROMAN = re.compile(r"^(i|ii|iii|iv|v|vi|vii|viii|ix|x)$")
# "(a)" / "(ii)" not preceded by a letter, digit, "_" or "\" -> explanation refers to option keys
LETTER_REF = re.compile(r"(?<![A-Za-z0-9_\\])\((?:[a-f]|i{1,3}|iv|vi?)\)")
SOURCE_SUFFIX = re.compile(r"\s*\((?:[^()]*\b(?:official|solutions?)\b[^()]*)\)\s*$", re.I)


def warn(msg):
    print(f"[convert] {msg}", file=sys.stderr)


def load_list(path):
    data = json.loads(Path(path).read_text(encoding="utf-8"))
    if isinstance(data, dict):
        data = data.get("questions") or data.get("records") or []
    if not isinstance(data, list):
        raise SystemExit(f"{path}: expected a JSON array")
    return data


def norm_key(k):
    k = str(k).strip()
    return k.lower() if len(k) == 1 else k


def norm_chapter(ch):
    if isinstance(ch, int):
        return ch
    s = str(ch or "").strip()
    if re.fullmatch(r"\d+", s):
        return int(s)
    m = re.fullmatch(r"[Pp](\d+)", s)
    if m:
        return f"P{m.group(1)}"
    return None


def source_label(bank):
    label = str(bank.get("source") or "").strip()
    return SOURCE_SUFFIX.sub("", label) or label


def answer_status(bank):
    """official = answer key published by the course; verified = solved by StudyHub."""
    status = str(bank.get("answer_status") or "")
    if bank.get("answer") is not None and "studyhub" not in status.lower() and status:
        return "official"
    return "verified"


def is_multi(bank, answer):
    if bank.get("multiple_correct"):
        return True
    fmt = str(bank.get("answer_format") or "").lower()
    if fmt and "single" not in fmt:
        return True
    return len(answer) != 1


def convert(enr, bank, args, out_dir):
    qid = enr["id"]
    if enr.get("solvable") is False:
        return None, f"{qid}: unsolvable ({enr.get('unsolvable_reason')})"
    conf = str(enr.get("confidence") or "low").lower()
    if CONF_RANK.get(conf, 0) < CONF_RANK[args.min_confidence]:
        return None, f"{qid}: confidence {conf} below {args.min_confidence}"

    answer = [norm_key(k) for k in (enr.get("answer") or [])]
    if bank.get("answer") is not None:
        known = bank["answer"] if isinstance(bank["answer"], list) else [bank["answer"]]
        if sorted(norm_key(k) for k in known) != sorted(answer):
            return None, f"{qid}: enrichment answer {answer} disagrees with bank answer {known}"

    raw_opts = bank.get("options") or {}
    opt_tex = {norm_key(k): v for k, v in (enr.get("options_tex") or {}).items()}
    keys = [norm_key(k) for k in raw_opts] or list(opt_tex)
    options = []
    for k in keys:
        if k not in opt_tex or not str(opt_tex[k]).strip():
            return None, f"{qid}: options_tex missing key {k}"
        options.append({"key": k, "text": opt_tex[k]})
    if len(options) < 2 or len(options) > 6:
        return None, f"{qid}: {len(options)} options (need 2-6)"
    if any(k not in keys for k in answer):
        return None, f"{qid}: answer key not among options"

    figure = None
    needs_figure = enr.get("needs_figure", bank.get("needs_figure", False))
    if needs_figure:
        img = bank.get("slide_image") or bank.get("page_image")
        if not (img and args.figure_root):
            return None, f"{qid}: needs a figure (pass --figure-root to copy page/slide images)"
        src = Path(args.figure_root) / img
        if not src.exists():
            return None, f"{qid}: figure {src} not found"
        dest = out_dir / "figures" / Path(img).name
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, dest)
        figure = f"figures/{dest.name}"  # relative to the bank file's folder

    chapter = norm_chapter(enr.get("chapter"))
    if chapter is None:
        return None, f"{qid}: bad chapter {enr.get('chapter')!r}"
    try:
        difficulty = int(enr.get("difficulty"))
    except (TypeError, ValueError):
        return None, f"{qid}: bad difficulty"
    if not 1 <= difficulty <= 5:
        return None, f"{qid}: difficulty {difficulty} out of 1-5"

    multi = is_multi(bank, answer)
    if not multi and len(answer) != 1:
        return None, f"{qid}: single choice needs exactly one answer"

    notes = {norm_key(k): v for k, v in (enr.get("option_notes") or {}).items() if norm_key(k) in keys}
    explanation = str(enr.get("explanation") or "")
    texts = [explanation, *notes.values()]
    fixed = any(ROMAN.match(k) for k in keys) or any(LETTER_REF.search(t) for t in texts)

    stem = str(enr.get("stem_tex") or bank.get("question") or "").strip()
    if not stem:
        return None, f"{qid}: empty stem"

    return {
        "id": qid,
        "subject": bank.get("subject") or args.subject,
        "lang": bank.get("language") or "de",
        "source": {"kind": bank.get("kind") or "", "label": source_label(bank)},
        "chapter": chapter,
        "type": "multi" if multi else "single",
        "difficulty": difficulty,
        "stem": stem,
        "options": options,
        "correct": answer,
        "fixedOrder": bool(fixed),
        "explanation": explanation,
        "optionNotes": notes,
        "refs": [str(r) for r in (enr.get("refs") or [])],
        "figure": figure,
        "answerStatus": answer_status(bank),
    }, None


def write_index(out_dir):
    files = sorted(p.name for p in out_dir.glob("*.json") if p.name != "index.json")
    (out_dir / "index.json").write_text(json.dumps({"files": files}, indent=2) + "\n", encoding="utf-8")
    return files


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--bank", action="append", required=True, help="raw bank JSON (repeatable)")
    ap.add_argument("--enriched", action="append", required=True, help="enrichment JSON (repeatable)")
    ap.add_argument("--out", required=True, help="output JSON file")
    ap.add_argument("--min-confidence", choices=["low", "medium", "high"], default="high")
    ap.add_argument("--figure-root", help="folder that page_image/slide_image paths are relative to")
    ap.add_argument("--subject", choices=["analysis", "physics"], help="fallback subject")
    ap.add_argument("--no-index", action="store_true", help="do not rewrite index.json")
    args = ap.parse_args(argv)

    bank = {}
    for p in args.bank:
        for r in load_list(p):
            if isinstance(r, dict) and r.get("id"):
                bank[r["id"]] = r
    out_path = Path(args.out)
    out_dir = out_path.parent
    out_dir.mkdir(parents=True, exist_ok=True)

    out, skipped = [], 0
    seen = set()
    for p in args.enriched:
        for enr in load_list(p):
            qid = enr.get("id")
            if qid not in bank:
                warn(f"{qid}: no bank record, skipped")
                skipped += 1
                continue
            if qid in seen:
                warn(f"{qid}: duplicate enrichment, first kept")
                continue
            q, err = convert(enr, bank[qid], args, out_dir)
            if err:
                warn(err)
                skipped += 1
                continue
            seen.add(qid)
            out.append(q)

    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"[convert] wrote {len(out)} questions to {out_path} ({skipped} skipped)")
    if not args.no_index:
        print(f"[convert] index: {write_index(out_dir)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
