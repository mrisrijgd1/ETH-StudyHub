#!/usr/bin/env python3
"""Build the StudyHub connector's content index from the built site.

Usage: python3 build_content.py <site root> <out dir> [--images]
Reads the English pages (*.html in the root), docs/*.pdf, script.pdf, phys-script.pdf.
Writes <out>/content.json and, with --images, <out>/pages/<doc>/<n>.jpg (one greyscale JPEG per PDF page).
Needs: beautifulsoup4, poppler-utils (pdftotext, pdftoppm).
"""
import json, os, re, subprocess, sys, unicodedata
from bs4 import BeautifulSoup, NavigableString, Tag

ROOT, OUT = sys.argv[1], sys.argv[2]
IMAGES = '--images' in sys.argv
SITE = 'https://mrisrijgd1.github.io/ETH-StudyHub/'
os.makedirs(OUT, exist_ok=True)

LOCK_SUMMARY = re.compile(r"^(solution|lösung|the proof and the grader|the proof in one piece|the mistake|full solution|musterlösung)", re.I)
SKIP_PAGES = {'mock.html', 'design-previews.html', 'final-preview.html', 'pdf.html', 'script.html', 'phys-script.html', 'account.html',
              'community.html', 'download.html', 'help.html', 'tips.html', 'path.html', 'index.html', 'more.html', 'my.html', 'connect.html'}

def page_kind(f):
    if f.startswith('lesson-'): return 'lesson', 'analysis'
    if f.startswith('refresher-'): return 'refresher', 'analysis'
    if f.startswith('phys-') and re.match(r'phys-\d', f): return 'lesson', 'physics'
    if f.startswith('phys-'): return 'page', 'physics'
    if f in ('moves.html', 'flashcards.html') or f.startswith('toolbox'): return 'toolbox', 'analysis'
    return 'page', 'analysis' if f not in ('physics.html',) else 'physics'

def text_of(el):
    """HTML -> readable text, keeping $...$ TeX, list bullets and paragraph breaks."""
    out = []
    def walk(n):
        if isinstance(n, NavigableString):
            out.append(str(n)); return
        if not isinstance(n, Tag) or n.name in ('script', 'style', 'svg', 'button', 'canvas'): return
        block = n.name in ('p', 'div', 'li', 'h1', 'h2', 'h3', 'h4', 'tr', 'details', 'summary', 'section', 'ol', 'ul', 'table', 'dt', 'dd', 'br', 'blockquote')
        if n.name in ('h2', 'h3', 'h4'): out.append('\n\n' + '#' * int(n.name[1]) + ' ')
        elif n.name == 'li': out.append('\n- ')
        elif n.name == 'summary': out.append('\n▸ ')
        elif block: out.append('\n')
        for c in n.children: walk(c)
        if n.name in ('td', 'th'): out.append(' | ')
        if block: out.append('\n')
    walk(el)
    t = ''.join(out)
    t = re.sub(r'[ \t\xa0]+', ' ', t)
    t = re.sub(r' *\n *', '\n', t)
    return re.sub(r'\n{3,}', '\n\n', t).strip()

def script_pages(t):
    return sorted({int(p) for p in re.findall(r'\bp(?:p)?\.\s?(\d{1,3})\b', t)})

docs, chunks, exercises = [], [], {}

# ---------- 1. Site pages ----------
for f in sorted(os.listdir(ROOT)):
    if not f.endswith('.html') or f in SKIP_PAGES: continue
    soup = BeautifulSoup(open(os.path.join(ROOT, f), encoding='utf-8').read(), 'html.parser')
    main = soup.find('main')
    if not main: continue
    for n in main.select('nav, .badday, .sh-prog, .sh-comments, details.toc, .lang-switch'): n.decompose()
    kind, subject = page_kind(f)
    pid = f[:-5]
    h1 = main.find('h1')
    title = h1.get_text(' ', strip=True) if h1 else pid
    # exercises: every locked <details> becomes an exercise; its text is removed from the readable page
    n_ex = 0
    for d in main.find_all('details'):
        s = d.find('summary')
        if not s or not LOCK_SUMMARY.match(s.get_text(' ', strip=True)): continue
        cont = d.parent
        while cont is not None and cont.name not in ('main', 'li') and not (set(cont.get('class') or []) & {'box', 'exam', 'frame', 'check', 'mistake'}):
            cont = cont.parent
        if cont is None or cont.name == 'main' or len(cont.get_text()) > 6000:
            # no box around it: the problem is everything since the last heading before the <details>
            wrap = soup.new_tag('div')
            prev = []
            for sib in d.previous_siblings:
                if isinstance(sib, Tag) and (sib.name in ('h2', 'h3', 'h4') or sib.name == 'details'):
                    if sib.name != 'details': prev.append(sib)
                    break
                prev.append(sib)
            for sib in reversed(prev): wrap.append(sib.__copy__() if isinstance(sib, Tag) else NavigableString(str(sib)))
            cont_text_src = wrap
            cont = None
        else:
            cont_text_src = None
        n_ex += 1
        eid = f'{pid}/ex{n_ex}'
        src = cont if cont is not None else cont_text_src
        head = src.find(['h2', 'h3', 'h4']) if src is not None else None
        if head is None and cont is not None:
            head = cont.find_previous(['h2', 'h3', 'h4'])  # a box without its own heading: use the section's
        etitle = head.get_text(' ', strip=True) if head else f'{title}: exercise {n_ex}'
        sol_text = text_of(d)
        sol_text = re.sub(r'^▸ [^\n]*\n', '', sol_text)
        # hints: existing hint boxes, then the solution's "Frame:" and "Moves:" lines
        hints = []
        for hd in (src.find_all('details') if src is not None else []):
            hs = hd.find('summary')
            if hs and re.match(r'(hint|tipp|hinweis)', hs.get_text(strip=True), re.I):
                hints.append(re.sub(r'^▸ [^\n]*\n', '', text_of(hd)))
        for para in d.find_all('p'):
            pt = para.get_text(' ', strip=True)
            m = re.match(r'^(Frame|Moves|Rahmen|Züge)\s*:', pt)
            if m:
                parts = re.split(r'(?=\bMoves\s*:)', text_of(para))
                hints.extend(x.strip() for x in parts if x.strip())
        ex = {'id': eid, 'page': pid, 'title': etitle, 'subject': subject, 'kind': kind,
              'url': SITE + f + (('#' + cont.get('id')) if cont is not None and cont.get('id') else ''),
              'solution': sol_text, 'hints': hints, 'source': 'StudyHub-written',
              'grader': "grader" in s.get_text(' ', strip=True).lower()}
        ph = soup.new_tag('p'); ph.string = f'[Solution locked: exercise id {eid}. Use get_hint / submit_attempt.]'
        d.replace_with(ph)
        ex['problem'] = text_of(cont) if cont is not None else text_of(cont_text_src)
        ex['script_pages'] = script_pages(ex['problem'] + ' ' + sol_text)
        exercises[eid] = ex
    body = text_of(main)
    docs.append({'id': pid, 'type': kind, 'subject': subject, 'title': title, 'url': SITE + f, 'label': 'StudyHub-written', 'exercises': n_ex})
    # chunks per h2 section
    parts = re.split(r'\n(?=## )', body)
    for i, p in enumerate(parts):
        st = p.split('\n', 1)[0].lstrip('# ').strip()[:120]
        for j in range(0, len(p), 6000):
            chunks.append({'id': f'{pid}#{i}' + (f'.{j//6000}' if j else ''), 'doc': pid, 'title': f'{title} — {st}', 'text': p[j:j+6000]})

# ---------- 2. PDFs (exams, PVK, formula sheets, scripts) ----------
titles = {}
try:
    titles = json.load(open(os.path.join(os.path.dirname(__file__), 'doc_titles.json')))
except Exception: pass

FONTFIX = {'≠': '−', 'Œ': '∞', 'æ': '→', 'Æ': '≤', 'Ø': '≥', 'œ': '∈', 'Á': 'ε', '”': 'δ', '–': 'α', '¶': '∘', 'Ô': '√', 'ÿ': 'Σ', '⁄': '∫', 'Õ': '′', '∆': '⇒', 'ﬁ': '∪/π'}

def pdf_pages(path):
    n = int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', path], capture_output=True, text=True).stdout).group(1))
    txt = subprocess.run(['pdftotext', '-layout', path, '-'], capture_output=True, text=True).stdout
    txt = unicodedata.normalize('NFC', txt)
    if txt.count('Œ') > 3 and txt.count('≠') > 3:  # LaTeX math font mis-mapped (Figalli exams)
        for a, b in FONTFIX.items(): txt = txt.replace(a, b)
    pages = txt.split('\f')[:n]
    return [re.sub(r'[ \t]{3,}', '  ', p).strip() for p in pages]

def render(path, did):
    if not IMAGES: return
    d = os.path.join(OUT, 'pages', did); os.makedirs(d, exist_ok=True)
    subprocess.run(['pdftoppm', '-r', '100', '-gray', '-jpeg', '-jpegopt', 'quality=55', path, os.path.join(d, 'p')], check=True)
    for fn in os.listdir(d):  # p-001.jpg -> 1.jpg
        m = re.match(r'p-0*(\d+)\.jpg', fn)
        if m: os.rename(os.path.join(d, fn), os.path.join(d, m.group(1) + '.jpg'))

def is_solution(name): return re.search(r'(solution|loesung|lösung)', name) is not None
def inline_solutions(name): return 'with-solutions' in name

pdfdocs = {}
for fn in sorted(os.listdir(os.path.join(ROOT, 'docs'))):
    if not fn.endswith('.pdf'): continue
    did = fn[:-4]
    subject = 'physics' if fn.startswith('physics') else 'analysis'
    kind = 'formula-sheet' if 'formula-sheet' in fn else 'exam' if re.search(r'exam|einsiedler|rechnungen|style-practice', fn) else 'pvk'
    pdfdocs[did] = {'id': did, 'type': kind, 'subject': subject, 'title': titles.get(fn, did), 'url': SITE + 'docs/' + fn,
                    'label': 'official' if (kind in ('exam', 'formula-sheet') or is_solution(fn) or inline_solutions(fn)) else 'course material',
                    'file': os.path.join(ROOT, 'docs', fn)}
# pair problem docs with solution docs
for did, d in pdfdocs.items():
    if is_solution(did):
        base = re.sub(r'-(solutions?|loesung|lösung)$', '', did)
        if base in pdfdocs:
            pdfdocs[base]['solution_doc'] = did; d['solution_of'] = base
    if inline_solutions(did):
        d['inline_solutions'] = True
for did, d in pdfdocs.items():
    pages = pdf_pages(d.pop('file') if False else d['file'])
    locked = bool(d.get('solution_of') or d.get('inline_solutions'))
    d['locked'] = locked
    d['pages'] = len(pages)
    render(d['file'], did)
    del d['file']
    d['page_text'] = pages
    if d.get('inline_solutions'):
        # questions-only version: drop "Lösung:" blocks up to the next question label
        lab = r'(?m)^\s*(?:MC\d+|K\d+|B\d+|A\d+|\d\.(?:A|MC)\d+|Aufgabe \d+)\b'
        d['questions_text'] = [re.sub(r'Lösung:.*?(?=' + lab[4:] + r'|\Z)', '[official solution locked]\n', p, flags=re.S | re.M) for p in pages]
    docs.append({k: v for k, v in d.items() if k not in ('page_text', 'questions_text')})
    if not d.get('solution_of'):
        src = d.get('questions_text') or pages
        for i, p in enumerate(src):
            if p.strip(): chunks.append({'id': f'{did}@{i+1}', 'doc': did, 'title': f"{d['title']}, page {i+1}", 'text': p[:6000]})

scripts = {}
for fn, sid, subj, title in (('script.pdf', 'script-analysis', 'analysis', 'Analysis script (Einsiedler–Wieser, German)'),
                             ('phys-script.pdf', 'script-physics', 'physics', 'Physics I script (German)')):
    path = os.path.join(ROOT, fn)
    if not os.path.exists(path): continue
    pages = pdf_pages(path)
    render(path, sid)
    scripts[sid] = {'id': sid, 'title': title, 'subject': subj, 'offset': 15, 'pages': len(pages), 'page_text': pages,
                    'url': SITE + ('script.html' if sid == 'script-analysis' else 'phys-script.html')}
    docs.append({'id': sid, 'type': 'script', 'subject': subj, 'title': title, 'label': 'official', 'pages': len(pages), 'url': scripts[sid]['url']})
    for i, p in enumerate(pages):
        if p.strip(): chunks.append({'id': f'{sid}@{i+1-15}', 'doc': sid, 'title': f'{title}, p. {i+1-15}', 'text': p[:6000]})

content = {'built': subprocess.run(['date', '-u', '+%Y-%m-%dT%H:%M:%SZ'], capture_output=True, text=True).stdout.strip(),
           'docs': docs, 'chunks': chunks, 'exercises': exercises,
           'pdfs': {k: v for k, v in pdfdocs.items()}, 'scripts': scripts}
json.dump(content, open(os.path.join(OUT, 'content.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
print(f"docs {len(docs)}, chunks {len(chunks)}, exercises {len(exercises)}, size {os.path.getsize(os.path.join(OUT, 'content.json'))//1024} KB")
