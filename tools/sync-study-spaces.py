#!/usr/bin/env python3
"""Copy the Zürich study-spaces map into the planner (planner/places/).

The map and its data are made in the project's study-spaces work folder (index.html, study-spaces.json,
basemap.geojson, img/). This script copies them here and adapts them for StudyHub:
  - adds a doctype and lang, so the page renders in standards mode;
  - loads Leaflet from planner/places/ instead of cdnjs and drops Google Fonts (no requests to other sites);
  - adds bridge.js (choose a place for the plan, live ETH occupancy via api/occupancy.php);
  - leaves out ETH's official photos (ETH asks to be asked before public use) and copies only the
    openly licensed Commons photos the data refers to.

Run:  python3 tools/sync-study-spaces.py /path/to/study-spaces
"""
import json, re, shutil, sys
from pathlib import Path

src = Path(sys.argv[1] if len(sys.argv) > 1 else '/mnt/project-files/study-spaces')
dst = Path(__file__).resolve().parent.parent / 'planner' / 'places'
dst.mkdir(parents=True, exist_ok=True)

# data: keep only photos we may show
d = json.loads((src / 'study-spaces.json').read_text())
ok = lambda f: f.startswith('img/c-')
used = set()
for p in d['places']:
    p['photos'] = [x for x in p.get('photos', []) if ok(x['file'])]
    used.update(x['file'] for x in p['photos'])
    for r in p.get('rooms', []):
        if r.get('photo') and not ok(r['photo']['file']):
            r['photo'] = None
        elif r.get('photo'):
            used.add(r['photo']['file'])
(dst / 'study-spaces.json').write_text(json.dumps(d, ensure_ascii=False, separators=(',', ':')))
shutil.copyfile(src / 'basemap.geojson', dst / 'basemap.geojson')
img = dst / 'img'
if img.exists():
    shutil.rmtree(img)
img.mkdir()
for f in sorted(used):
    shutil.copyfile(src / f, dst / f)

# page
h = (src / 'index.html').read_text()
h = re.sub(r'<link rel="preconnect"[^>]*>\s*', '', h)
h = re.sub(r'<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>\s*', '', h)
n = h.count('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js')
assert n == 1, 'Leaflet script tag not found once'
h = h.replace('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js', 'leaflet-1.9.4.min.js')
assert not re.search(r'<script[^>]+src="https?:|<link[^>]+href="https?:', h), 'external asset left'
h = '<!doctype html>\n<html lang="en">\n' + h.rstrip() + '\n<script src="bridge.js?v=1"></script>\n</html>\n'
(dst / 'index.html').write_text(h)
print('copied', len(d['places']), 'places,', len(used), 'photos to', dst)
