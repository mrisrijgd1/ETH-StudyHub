#!/usr/bin/env python3
"""Build the PRIVATE library index (files that are not public on the site).
Usage: build_library.py <library folder> <out dir>
<library folder> holds library.json: [{"file": "rel/path.pdf", "id": "lib-...", "title": "...", "subject": "analysis|physics|linalg|informatik", "type": "notes|summary|lecture|serie|solution|exam|quiz"}]
Writes <out>/index.json (docs + search chunks + page text) and <out>/pages/<id>/<n>.jpg. Never put classmates' handwritten notes here."""
import json, os, re, subprocess, sys, unicodedata

SRC, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)
items = json.load(open(os.path.join(SRC, 'library.json')))
docs, chunks = [], []
for it in items:
    path = os.path.join(SRC, it['file'])
    n = int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', path], capture_output=True, text=True).stdout).group(1))
    txt = unicodedata.normalize('NFC', subprocess.run(['pdftotext', '-layout', path, '-'], capture_output=True, text=True).stdout)
    pages = [re.sub(r'[ \t]{3,}', '  ', p).strip() for p in txt.split('\f')[:n]]
    d = os.path.join(OUT, 'pages', it['id']); os.makedirs(d, exist_ok=True)
    subprocess.run(['pdftoppm', '-r', '100', '-gray', '-jpeg', '-jpegopt', 'quality=55', path, os.path.join(d, 'p')], check=True)
    for fn in os.listdir(d):
        m = re.match(r'p-0*(\d+)\.jpg', fn)
        if m: os.rename(os.path.join(d, fn), os.path.join(d, m.group(1) + '.jpg'))
    doc = {'id': it['id'], 'type': it.get('type', 'notes'), 'subject': it.get('subject', 'analysis'), 'title': it['title'],
           'label': 'library (private)', 'pages': n, 'page_text': pages, 'library': True}
    if it.get('solution_of'): doc['solution_of'] = it['solution_of']
    if it.get('solution_doc'): doc['solution_doc'] = it['solution_doc']
    docs.append(doc)
    if not it.get('solution_of'):
        for i, p in enumerate(pages):
            if p.strip(): chunks.append({'id': f"{it['id']}@{i+1}", 'doc': it['id'], 'title': f"{it['title']}, page {i+1}", 'text': p[:6000]})
    print(it['id'], n, 'pages')
json.dump({'docs': docs, 'chunks': chunks}, open(os.path.join(OUT, 'index.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
print(len(docs), 'docs', len(chunks), 'chunks')
