import json,pathlib,re,math
p=pathlib.Path(__file__).parent/'dist'; c=json.loads((p/'course.json').read_text())
assert len(c)==27 and len({x['id'] for x in c})==27
for l in c:
 assert len(l['exercises'])==3
 assert len(l['quiz'])==4 and l['answer'] in range(3)
 assert len(l['theory'])==3 and all(len(t)>100 for t in l['theory'])
 assert all(e[k] for e in l['exercises'] for k in ['q','hint','solution'])
 assert (p/f'docs/ACPCI_HS26_W{l["week"]}.pdf').exists()
 assert len(l['goal'])>20
print('Inhalt geprüft: 27 vollständige Lektionen, 81 Aufgaben, 27 Kurzchecks.')
# Independent numerical controls for the main worked examples.
h=6.62607015e-34;c0=299792458;ev=1.602176634e-19;me=9.1093837015e-31;u=1.66053906660e-27
assert abs(h/math.sqrt(2*me*ev)/1e-9-1.2264)<.002
leff=math.log(2)/13.2232+math.log(2)/4
assert abs(math.log(2)/leff-3.071)<.002
assert abs(10*math.exp(-leff*12)-.667)<.002
mu=12*15.99491461957/(12+15.99491461957)*u
wave=math.sqrt(1902/mu)/(2*math.pi*c0*100)
assert abs(wave-2170)<2
q=(3*4.00260325413-12)*u*c0*c0
assert abs(q/ev/1e6-7.275)<.002
print('Unabhängige Zahlenkontrollen: de Broglie, effektive Halbwertszeit, Aktivität, CO-Schwingung, Kernreaktion bestanden.')
if (p/'documents.json').exists():
 docs=json.loads((p/'documents.json').read_text())
 for d in docs:
  assert (p/d['file']).exists(), d['file']
  if d.get('extra'):assert (p/d['extra']).exists()
  if d.get('solution'):assert (p/d['solution']).exists()
 print(f'{len(docs)} Dokumente mit vorhandenen Dateizielen geprüft.')
