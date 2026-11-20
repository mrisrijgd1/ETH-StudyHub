#!/usr/bin/env python3
"""Writes offline-list.json: what "Save for offline" on My StudyHub downloads (run from the site root after content changes).
Lessons, hubs, flashcards, Exam Dive, Chemie and every script/style the pages use. Not PDFs, not docs/."""
import os, re, json, glob
SKIP_PAGES = {'pdf.html', 'script.html', 'phys-script.html', 'linalg-script.html', 'home-new.html', 'my.html', 'offline.html'}
REF = re.compile(r'(?:src|href)="([^"#]+)"')
def refs(page):
    base = os.path.dirname(page); out = set()
    for r in REF.findall(open(page, encoding='utf-8', errors='ignore').read()):
        if re.match(r'^(https?:|mailto:|data:|javascript:)', r):
            if 'mathjax' in r: out.add(r)
            continue
        p = os.path.normpath(os.path.join(base, r.split('?')[0]))
        if p.startswith('..') or not os.path.isfile(p): continue
        if re.search(r'\.(pdf|html)$', p) or p.startswith(('docs/', 'pdf/')) or '/assets/pdf' in '/' + p: continue
        out.add(p + ('?' + r.split('?', 1)[1] if '?' in r else ''))
    return out
def tree(d, exts=('.html', '.js', '.css', '.json', '.svg', '.png', '.webp', '.woff2', '.mp3', '.ogg')):
    out = []
    for r, ds, fs in os.walk(d):
        ds[:] = [x for x in ds if x not in ('tests', 'tools', 'docs', '__pycache__')]
        out += [os.path.join(r, f) for f in fs if f.endswith(exts)]
    return out
apps = tree('dive') + tree('FlashcardsAnalysis_designspace') + tree('chemie') + ['assets/icons/icon-192.png', 'assets/icons/icon-512.png', 'manifest.webmanifest', 'offline.html', 'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg-full.js']  # CDN copy: used by Exam Dive and the flashcards app
lists = {}
for lang, pages in (('en', sorted(glob.glob('*.html'))), ('de', sorted(glob.glob('de/*.html')))):
    pages = [p for p in pages if os.path.basename(p) not in SKIP_PAGES]
    files = set(pages) | set(apps) | {'assets/search-%s.json' % lang}
    for p in pages: files |= refs(p)
    lists[lang] = sorted(files)
json.dump(lists, open('offline-list.json', 'w'), indent=0)
for k, v in lists.items():
    size = sum(os.path.getsize(f.split('?')[0]) for f in v if not f.startswith('http') and os.path.isfile(f.split('?')[0]))
    print(k, len(v), 'files', round(size / 1e6, 1), 'MB')
