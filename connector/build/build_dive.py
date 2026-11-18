#!/usr/bin/env python3
"""Collect the Exam Dive question bank for the private Supabase bucket "dive".
Usage: build_dive.py <library folder> <out dir>
Reads <library>/mcq/dive/game/ (index.json, *.json, figures/) from the private ETH-StudyHub-library
and copies it to <out dir>, after a basic check. Upload afterwards with: upload.py <out dir> dive
Only the game bank is copied (no PDFs, no review notes). Exits non-zero if the bank is broken,
so a bad bank never replaces a good one."""
import json, os, shutil, sys

SRC, OUT = sys.argv[1], sys.argv[2]
GAME = os.path.join(SRC, 'mcq', 'dive', 'game')
if not os.path.isdir(GAME):
    print(f'::warning::no Exam Dive bank at {GAME}; nothing to upload')
    sys.exit(0)

index = json.load(open(os.path.join(GAME, 'index.json')))
files = index['files'] if isinstance(index, dict) else index
os.makedirs(OUT, exist_ok=True)
total, ids, figures = 0, set(), set()
for f in files:
    name = f if isinstance(f, str) else f['file']
    if '/' in name or not name.endswith('.json'):
        raise SystemExit(f'bad bank file name: {name}')
    data = json.load(open(os.path.join(GAME, name)))
    qs = data if isinstance(data, list) else data.get('questions', [])
    for q in qs:
        for k in ('id', 'subject', 'stem', 'options', 'correct'):
            if not q.get(k):
                raise SystemExit(f'{name}: question {q.get("id")} has no {k}')
        if q['id'] in ids:
            raise SystemExit(f'{name}: duplicate id {q["id"]}')
        ids.add(q['id'])
        if q.get('figure'):
            figures.add(q['figure'])
    total += len(qs)
    shutil.copyfile(os.path.join(GAME, name), os.path.join(OUT, name))
shutil.copyfile(os.path.join(GAME, 'index.json'), os.path.join(OUT, 'index.json'))
for fig in sorted(figures):
    if fig.startswith(('/', 'http')) or '..' in fig:
        raise SystemExit(f'bad figure path: {fig}')
    src = os.path.join(GAME, fig)
    if not os.path.isfile(src):
        print(f'::warning::figure missing: {fig}')
        continue
    os.makedirs(os.path.dirname(os.path.join(OUT, fig)), exist_ok=True)
    shutil.copyfile(src, os.path.join(OUT, fig))
print(f'Exam Dive bank: {total} questions in {len(files)} files, {len(figures)} figures')
