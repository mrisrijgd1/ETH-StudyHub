#!/usr/bin/env python3
"""Upload the connector content to the private Supabase bucket, skipping unchanged files.
Usage: upload.py <out dir> <bucket>   (env: SUPABASE_URL, SB_KEY = service role or secret key)"""
import hashlib, json, os, sys, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor

OUT, BUCKET = sys.argv[1], sys.argv[2]
URL, KEY = os.environ['SUPABASE_URL'].rstrip('/'), os.environ['SB_KEY']
H = {'apikey': KEY, 'Authorization': 'Bearer ' + KEY}

def req(method, path, data=None, ctype='application/octet-stream', extra=None):
    r = urllib.request.Request(URL + path, data=data, method=method, headers={**H, 'Content-Type': ctype, **(extra or {})})
    try:
        with urllib.request.urlopen(r, timeout=120) as f: return f.status, f.read()
    except urllib.error.HTTPError as e: return e.code, e.read()

def put(rel, data, ctype):
    for _ in range(3):
        st, body = req('POST', f'/storage/v1/object/{BUCKET}/{rel}', data, ctype, {'x-upsert': 'true', 'cache-control': 'max-age=60'})
        if st < 300: return rel
    raise SystemExit(f'upload failed {rel}: {st} {body[:300]}')

st, body = req('GET', f'/storage/v1/object/{BUCKET}/manifest.json')
old = json.loads(body) if st == 200 else {}
new, todo = {}, []
for d, _, fs in os.walk(OUT):
    for f in fs:
        p = os.path.join(d, f); rel = os.path.relpath(p, OUT).replace(os.sep, '/')
        h = hashlib.sha1(open(p, 'rb').read()).hexdigest(); new[rel] = h
        if old.get(rel) != h: todo.append(rel)
print(f'{len(new)} files, {len(todo)} changed')
ct = lambda r: 'application/json' if r.endswith('.json') else 'image/jpeg' if r.endswith('.jpg') else 'application/octet-stream'
with ThreadPoolExecutor(8) as ex:
    for i, r in enumerate(ex.map(lambda r: put(r, open(os.path.join(OUT, r), 'rb').read(), ct(r)), todo)):
        if i % 200 == 0: print('uploaded', i + 1)
put('manifest.json', json.dumps(new).encode(), 'application/json')
print('done')
