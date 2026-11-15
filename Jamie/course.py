import json, pathlib, html, shutil
D=pathlib.Path(__file__).resolve().parent.parent/'chemie'
lessons=[]
def L(title,group,section,pages,week,warm,goal,theory,formula,example,exercises,quiz,answer,why,transfer):
 lessons.append(dict(id=len(lessons)+1,title=title,group=group,section=section,pages=pages,week=week,warm=warm,goal=goal,theory=theory.split('\n\n'),formula=formula,example=example,exercises=[dict(zip(['q','hint','solution'],x)) for x in exercises],quiz=quiz,answer=answer,why=why,transfer=transfer))
L('Einheiten, Grössen & saubere Resultate','01 · Grundlagen','1.1','9–13',1,
'Was unterscheidet einen Zahlenwert von einer physikalischen Grösse? Rechne 500 nm in Meter um.',
'Einheiten sicher umrechnen, dimensionslose Achsen lesen und Ergebnisse sinnvoll runden.',
r'''Eine physikalische Grösse besteht aus Zahlenwert und Einheit. 589,6 nm und 5,896·10⁻⁷ m bezeichnen dieselbe Wellenlänge. Ein Präfix gehört zur Einheit und wird beim Potenzieren mit potenziert: Ein Kubikzentimeter ist nicht ein Hundertstel Kubikmeter. Rechne zunächst in SI-Einheiten und setze erst dann Zahlen ein.

In Tabellen bedeutet die Überschrift T/K, dass nur der Zahlenwert der Temperatur in Kelvin eingetragen wird. Logarithmen brauchen dimensionslose Argumente: Schreibe ln(p/Pa) oder ln(p/p₀), nicht einfach den Logarithmus einer dimensionsbehafteten Zahl. Beim Umrechnen einer Energie pro Teilchen in Energie pro Mol multiplizierst du mit der Avogadro-Konstante.

Eine Einheitenkontrolle ist ein unabhängiger Test deiner Rechnung: Druck mal Volumen hat die Dimension einer Energie. Notiere erst den symbolischen Ausdruck, dann die eingesetzten Werte samt Einheiten. Runde am Ende nach der Genauigkeit der Ausgangsdaten. Lies zusätzlich die Beispiele 1-1 bis 1-5 im verlinkten Skript und rechne sie auf Papier nach.''',
r'1\,\mathrm{eV}=1.602176634\cdot10^{-19}\,\mathrm J,\qquad pV=nRT',
r'Für 0,100 mol ideales Gas in 0,500 m³ bei 298 K gilt p=nRT/V. Einsetzen ergibt 0,100·8,31446·298/0,500 = 495,54 Pa, also 496 Pa. Die Einheit J/m³ ist gleich Pa. Eine Rechnung mit 500 statt 0,500 beim Volumen wäre um den Faktor 1000 falsch.',[
('Wandle 6,0 cm³ in m³ und 5,2 mmol/dm³ in mol/m³ um.','Potenziere jeweils die gesamte Längeneinheit.','6,0·(10⁻² m)³ = 6,0·10⁻⁶ m³. Für die Konzentration: (5,2·10⁻³ mol)/(10⁻³ m³) = 5,2 mol/m³.'),
('Ein Diagramm hat y = ln(p/MPa). Ein Punkt liegt bei y=1,20. Berechne den Druck in Pa und erkläre die Achsenbeschriftung.','Wende die Exponentialfunktion an, bevor du MPa umrechnest.','p/MPa = exp(1,20), also p=3,32 MPa = 3,32·10⁶ Pa. Der Achsenwert 1,20 ist dimensionslos.'),
('Ein Photon hat 3,00 eV. Bestimme die Energie eines Mols solcher Photonen in kJ/mol.','Zuerst eV in J pro Photon, dann mit Nₐ multiplizieren.','E=4,80653·10⁻¹⁹ J pro Photon. Eₘ=E·Nₐ=2,89456·10⁵ J/mol = 289 kJ/mol. Nicht durch Nₐ teilen.')],
['Wie viel sind 1,0 mm² in m²?','10⁻³','10⁻⁶','10⁻⁹'],1,'(10⁻³ m)² = 10⁻⁶ m².',
'In allen Altprüfungen: Lies den Hinweis zu Masseinheiten und Genauigkeit. Markiere in deiner Rechnung jede Umrechnung.')
L('Stoffe, Atome & Isotope','01 · Grundlagen','1.2; 2.3','13–14, 25–28',1,
'Ist O₂ eine Verbindung? Was unterscheidet ein Element von einem Molekül?',
'Reinstoffe und Gemische unterscheiden und aus Nuklidsymbolen Teilchenzahlen bestimmen.',
r'''Ein Element enthält nur eine Atomsorte, eine Verbindung mindestens zwei verschiedene. Ein Molekül ist ein abgegrenzter Atomverbund. Deshalb ist O₂ ein Molekül eines Elements, während H₂O eine Verbindung ist. Nicht jeder Reinstoff besteht aus Molekülen: In einem Ionenkristall gibt es keine isolierten NaCl-Moleküle. Homogene Gemische besitzen eine Phase; heterogene mehrere.

Die Ordnungszahl Z ist die Protonenzahl und legt das Element fest. Die Massenzahl A zählt Protonen und Neutronen, nicht Elektronen. Die Neutronenzahl ist A−Z. Isotope eines Elements haben dasselbe Z, aber verschiedene A. Die Ladung eines Ions folgt aus der Differenz zwischen Protonen- und Elektronenzahl.

Die tabellierte Atommasse eines natürlich vorkommenden Elements ist ein gewichteter Mittelwert über Isotope und muss nicht ganzzahlig sein. Die atomare Masseneinheit u ist über ein neutrales ¹²C-Atom im Grundzustand definiert. Bei Kernreaktionen musst du unterscheiden, ob Kernmassen oder neutrale Atommassen eingesetzt werden. Lies die Stoffklassifikation und den Beginn von Abschnitt 2.3 im Skript.''',
r'N=A-Z,\qquad \overline m=\sum_i x_i m_i,\qquad \sum_i x_i=1',
'Das Ion ²⁴Mg²⁺ besitzt Z=12: 12 Protonen, 24−12=12 Neutronen und 12−2=10 Elektronen. Für ein hypothetisches Gemisch aus 75 % eines Isotops mit 24 u und 25 % mit 26 u ist die mittlere Masse 24,5 u.',[
('Bestimme Protonen, Neutronen und Elektronen in ³⁷Cl⁻ (Z=17).','Ein negatives Ion hat mehr Elektronen als Protonen.','17 Protonen, 37−17=20 Neutronen, 18 Elektronen. Die zusätzliche Elektronenmasse ändert die ganzzahlige Massenzahl nicht.'),
('Ein Element hat nur die Isotope mit 10,0 u und 11,0 u. Seine mittlere Masse ist 10,8 u. Bestimme beide Häufigkeiten.','Setze x+(1−x)=1.','10x+11(1−x)=10,8 → x=0,20. Das leichtere Isotop hat 20 %, das schwerere 80 %.'),
('Ordne Luft, O₃, reines Wasser und ein Wasser-Sand-Gemisch ein. Begründe jeweils.','Die Kategorien Molekül, Element und Reinstoff schliessen sich nicht alle gegenseitig aus.','Luft: homogenes Gemisch. O₃: molekulares Element und Reinstoff. Reines Wasser: molekulare Verbindung und Reinstoff. Wasser mit Sand: heterogenes Gemisch.')],
['Welche Grösse ist für alle Isotope eines Elements gleich?','A','Z','Neutronenzahl'],1,'Isotope unterscheiden sich in der Neutronenzahl, nicht in der Protonenzahl.',
'Altprüfung 2018 W, Aufgabe 2: Isotopenhäufigkeiten und Massenspektrometrie. Formuliere zuerst die Mittelwertgleichung.')
L('Spin & quantisierter Drehimpuls','01 · Grundlagen','2.1','17–20',2,
'Was ist die Einheit eines Drehimpulses? Kann eine Projektion negativ sein?',
'Drehimpulsbetrag, Projektion und Zahl der möglichen Orientierungen auseinanderhalten.',
r'''Spin ist ein intrinsischer quantenmechanischer Drehimpuls. Das Bild einer rotierenden Kugel ist keine wörtliche Beschreibung eines Elektrons. Eine Drehimpulsquantenzahl j legt den Betrag fest; die magnetische Quantenzahl m legt eine Projektion, etwa entlang der z-Achse, fest. Ein bestimmter Betrag bedeutet noch keine bestimmte Raumrichtung.

Für ein gegebenes j läuft m von −j bis +j in Einerschritten. Es gibt also 2j+1 mögliche Projektionen. Elektronen haben s=1/2 und damit zwei mögliche Werte mₛ=±1/2. Atomkerne besitzen eine eigene Kernspindrehimpulsquantenzahl I; sie wird nicht allein aus der Ordnungszahl abgelesen.

Der grösste mögliche Betrag der z-Komponente ist jℏ, während der Gesamtbetrag ℏ√(j(j+1)) ist. Für j>0 ist der Gesamtbetrag grösser: Ein Drehimpulsvektor zeigt nicht exakt entlang der z-Achse. Im Magnetfeld können unterschiedliche Projektionen unterschiedliche Energien erhalten. Bearbeite Beispiel 2-2 im Skript und zeichne die Projektionswerte für j=1 und j=3/2.''',
r'|\mathbf J|=\hbar\sqrt{j(j+1)},\quad J_z=m\hbar,\quad m=-j,-j+1,\ldots,j',
'Für j=3/2 gilt |J|=√15·ℏ/2≈1,936ℏ. Die vier Projektionen sind −1,5ℏ, −0,5ℏ, +0,5ℏ und +1,5ℏ. Der Gesamtbetrag ist in allen vier Fällen gleich.',[
('Liste alle Projektionen für j=2 auf und berechne den Betrag.','Es gibt 2j+1 Werte.','Jz/ℏ = −2, −1, 0, 1, 2. Fünf Werte; |J|=√6ℏ≈2,449ℏ.'),
('Ein Elektron hat mₛ=+1/2. Vergleiche s_z und |s|.','Benutze für den Betrag nicht einfach sℏ.','s_z=ℏ/2; |s|=√3ℏ/2. Das Verhältnis ist 1/√3. Die Projektion ist kleiner als der Betrag.'),
('Ein Kern hat I=1. Wie viele Projektionszustände besitzt er? Kann die Projektion null sein, obwohl der Betrag nicht null ist?','Unterscheide mI von I.','Drei Zustände: mI=−1,0,+1. Für mI=0 verschwindet nur die z-Komponente; der Betrag ist √2ℏ.')],
['Wie viele Projektionen hat j=5/2?','5','6','7'],1,'2j+1=6.',
'2025 S, Aufgabe 2c: Projektionen des Elektronenspins. Löse zuerst ohne Antwortmöglichkeiten.')
L('Das Elektron experimentell verstehen','01 · Grundlagen','2.2','21–24',2,
'Wie wirken elektrisches und magnetisches Feld auf eine bewegte Ladung?',
'Geschwindigkeitsfilter und Kreisbahn nutzen, um Ladung und Masse zu verknüpfen.',
r'''Thomsons Kathodenstrahlenexperimente zeigen, dass Elektronen negativ geladene Teilchen sind. In einem elektrischen Feld wirkt die Kraft qE. In einem Magnetfeld wirkt auf bewegte Ladungen q(v×B). Die Richtung hängt sowohl von der Bewegungsrichtung als auch vom Vorzeichen der Ladung ab. Der magnetische Anteil verrichtet keine Arbeit, weil er senkrecht zur Geschwindigkeit steht.

Sind E, B und die Teilchengeschwindigkeit senkrecht zueinander angeordnet, können sich die Kräfte kompensieren. Aus |q|E=|q|vB folgt v=E/B. Das ist ein Geschwindigkeitsfilter: Er bestimmt v unabhängig vom Betrag der Ladung und der Masse.

In einem reinen Magnetfeld liefert die Lorentzkraft die Zentripetalkraft. Daraus folgt ein Radius r=mv/(|q|B). Zusammen mit der zuvor bestimmten Geschwindigkeit ergibt sich das Ladungs-Masse-Verhältnis. Millikans Öltröpfchenversuch bestimmte unabhängig davon die Elementarladung. Erst beide Informationen liefern die Elektronenmasse. Zeichne die beiden Versuchsaufbauten aus dem Skript ab und beschrifte die Kräfte.''',
r'v=\frac EB,\qquad \frac{|q|}{m}=\frac{v}{Br},\qquad E_\mathrm{kin}=|q|U',
'Ein Filter mit E=2,00·10⁴ V/m und B=1,00·10⁻² T lässt v=2,00·10⁶ m/s durch. Bei r=1,14 mm in demselben B ergibt sich |q|/m≈1,75·10¹¹ C/kg.',[
('Verdoppelt sich im Geschwindigkeitsfilter E bei konstantem B: Welche Geschwindigkeit passiert unabgelenkt?','Setze die Kräfte gleich.','Die Durchlassgeschwindigkeit verdoppelt sich. Die Filterbedingung ist v=E/B.'),
('Ein Elektron durchläuft nichtrelativistisch 100 V. Berechne seine Geschwindigkeit mit mₑ=9,109·10⁻³¹ kg.','eU=mv²/2; U ist ein Spannungsbetrag.','v=√(2eU/mₑ)=5,93·10⁶ m/s. Das ist etwa 2 % der Lichtgeschwindigkeit; die nichtrelativistische Näherung ist hier gut.'),
('Ein Teilchen passiert einen Filter bei v=3,0·10⁵ m/s. Bei B=0,20 T hat es r=0,10 m. Bestimme |q|/m.','Der Betrag der magnetischen Kraft liefert mv²/r.','|q|/m=v/(Br)=1,5·10⁷ C/kg. Ohne Zusatzinformation ergibt sich daraus nicht Ladung und Masse einzeln.')],
['Welche Arbeit verrichtet eine reine magnetische Kraft an einer Punktladung?','Positive','Keine','Immer negative'],1,'Die magnetische Kraft ist stets senkrecht zur momentanen Geschwindigkeit.',
'2018 W, Aufgabe 2: Massenspektrometrie. Prüfe bei jedem Teilchen die Ladung, bevor du Bahnradien vergleichst.')
L('Kernmassen & Bindungsenergie','02 · Kerne und Radioaktivität','2.3–2.4','25–31',3,
'Warum ist die Masse eines gebundenen Kerns kleiner als die Summe seiner freien Bausteine?',
'Bindungsenergie und Reaktionsenergie mit konsistenter Vorzeichenkonvention berechnen.',
r'''Ein gebundenes System besitzt weniger Energie als seine getrennten Bestandteile. Nach E=mc² entspricht diese Energiedifferenz einer Massendifferenz. Für einen Kern mit Z Protonen und N Neutronen ist die Bindungsenergie [Zmₚ+Nmₙ−mKern]c² positiv. Sie ist die zum vollständigen Zerlegen benötigte Energie.

Für eine Reaktion definiert man Q=(Masse der Edukte−Masse der Produkte)c². Q>0 bedeutet freigesetzte Energie. Die Energieänderung des reagierenden Systems ist dagegen ΔE=−Q. Schreibe deine Konvention ausdrücklich hin, anstatt ein Vorzeichen zu erraten.

Tabellierte Atommassen enthalten Elektronen. Wenn sich die Elektronenzahlen in der gewählten Reaktionsbilanz aufheben, können neutrale Atommassen direkt verwendet werden. Andernfalls müssen Elektronenmassen berücksichtigt werden. Chemische Bindungsenergien sind gegenüber typischen Kernenergien klein; sie werden in einfachen Kernrechnungen meist vernachlässigt. Rechne im Skript das Massendefekt-Beispiel selbst nach und notiere die jeweils verwendete Massensorte.''',
r'Q=(\sum m_\mathrm{Edukte}-\sum m_\mathrm{Produkte})c^2,\qquad 1\,\mathrm u\,c^2\approx931.494\,\mathrm{MeV}',
'Beim Triple-Alpha-Prozess werden drei ⁴He-Atome zu einem ¹²C-Atom bilanziert. Mit m(⁴He)=4,00260325413 u und m(¹²C)=12 u ist Δm=0,00780976239 u. Q≈7,275 MeV≈1,166·10⁻¹² J. Sechs Elektronen stehen auf beiden Seiten: Ihre Ruhemassen heben sich auf.',[
('Eine Reaktion hat Δm=0,00200 u (Edukte minus Produkte). Bestimme Q in MeV und Joule.','Erst mit 931,494 MeV/u multiplizieren.','Q=1,86 MeV = 2,98·10⁻¹³ J. Die Reaktion setzt Energie frei; die Energieänderung des Systems ist negativ.'),
('Für ⁴He gelten mAtom=4,002603 u und mH=1,007825 u, mₙ=1,008665 u. Berechne die Bindungsenergie pro Nukleon.','Verwende zweimal die H-Atommasse; dann sind die Elektronen konsistent enthalten.','Δm=2·1,007825+2·1,008665−4,002603=0,030377 u. EBind≈28,30 MeV, also 7,074 MeV je Nukleon.'),
('Der erste Triple-Alpha-Schritt bildet ⁸Be mit 8,005305102 u aus zwei ⁴He mit je 4,00260325413 u. Ist er exotherm?','Berechne Edukte minus Produkte.','Δm=−0,00009859374 u; Q≈−0,09184 MeV. Der Schritt nimmt rund 91,84 keV auf. Erst die Gesamtreaktion ist exotherm.')],
['Q>0 bedeutet bei Q=(mEdukte−mProdukte)c² …','Energieaufnahme','Energiefreisetzung','Keine Massenänderung'],1,'Die Produkte haben weniger Ruheenergie; die Differenz steht als freigesetzte Energie zur Verfügung.',
'2025 S, Aufgabe 1d–g: Triple-Alpha-Prozess. Die hier vorbereitete Massenbilanz wird dort mehrstufig verwendet.')
L('Stabile Kerne & fundamentale Kräfte','02 · Kerne und Radioaktivität','2.5; 3.2–3.3','32–35, 47–57',3,
'Welche Kraft hält Protonen im Kern zusammen, obwohl sie sich elektrisch abstossen?',
'Die Stabilitätskurve erklären und Kernpotentiale qualitativ lesen.',
r'''Die elektromagnetische Wechselwirkung stösst Protonen gegenseitig ab. Die starke Wechselwirkung bindet Nukleonen auf sehr kurzen Distanzen; ihre Restwechselwirkung erzeugt die Kernbindung. Neutronen tragen zur starken Bindung bei, ohne die elektrische Abstossung zu erhöhen. Die schwache Wechselwirkung ermöglicht unter anderem Betazerfälle. Gravitation ist für die innere Struktur eines einzelnen Atoms vernachlässigbar klein.

Leichte stabile Kerne liegen häufig in der Nähe N≈Z. Bei schwereren Kernen wächst das für Stabilität günstige Verhältnis N/Z. Zu neutronenreiche Kerne können über β⁻-Zerfall die Ordnungszahl erhöhen; zu protonenreiche über β⁺-Zerfall oder Elektroneneinfang verringern. Gerade Protonen- und Neutronenzahlen sind oft besonders stabil; magische Zahlen hängen mit abgeschlossenen Kernschalen zusammen.

Ein Potentialmodell verbindet eine attraktive kurzreichweitige Mulde mit einer Coulombbarriere für geladene Teilchen. Ein Alphateilchen kann durch eine klassisch unüberwindbare Barriere tunneln. Die Durchtrittswahrscheinlichkeit reagiert empfindlich auf Barrierenhöhe und -breite, was die grossen Unterschiede von Halbwertszeiten verständlich macht. Lies die Potentialskizzen im Skript und erkläre sie ohne Formel in eigenen Worten.''',
r'R\approx r_0 A^{1/3},\qquad r_0\approx1.2\,\mathrm{fm}',
'Für A=64 liefert das einfache Radiusmodell R≈1,2·4 fm=4,8 fm. Wenn A um den Faktor 8 wächst, verdoppelt sich der Radius. Das Volumen wächst proportional zu A; die mittlere Kerndichte bleibt näherungsweise konstant.',[
('Vergleiche die Radien von Kernen mit A=27 und A=216.','Bilde die Kubikwurzel des Verhältnisses.','R₂/R₁=(216/27)^(1/3)=2. Die Volumina stehen im Verhältnis 8:1.'),
('Ein Kern liegt deutlich auf der neutronenreichen Seite der Stabilitätskurve. Welche Beta-Umwandlung bewegt ihn in Richtung Stabilität?','Ein Neutron muss zu einem Proton werden.','β⁻: n→p+e⁻+Antineutrino. A bleibt gleich, Z steigt um eins, N sinkt um eins.'),
('Warum lässt sich Kernbindung nicht allein mit der Coulombkraft erklären? Und warum hilft ein zusätzliches Neutron nicht unbegrenzt?','Unterscheide Ladung, kurze Reichweite und quantenmechanische Besetzung.','Die Coulombkraft zwischen Protonen ist repulsiv. Die starke Wechselwirkung liefert Bindung. Ein Neutronenüberschuss erzeugt aber ungünstige Besetzung und kann durch schwache Umwandlung abgebaut werden; mehr Neutronen garantieren keine Stabilität.')],
['Welche Wechselwirkung ermöglicht den β-Zerfall?','Starke','Schwache','Gravitative'],1,'Beim Beta-Zerfall ändert sich der Quarktyp durch die schwache Wechselwirkung.',
'2025 S, Aufgabe 1c: Zerfall bei hohem Neutronen-Protonen-Verhältnis. Begründe die Richtung über Z und N.')
L('Zerfallsgesetz, Aktivität & Halbwertszeit','02 · Kerne und Radioaktivität','3.1','37–42',4,
'Ist nach einer Halbwertszeit die Hälfte der Anfangsmenge oder die Hälfte der gerade vorhandenen Menge übrig?',
'Aus Halbwertszeiten Zerfallskonstanten, Mengen und Aktivitäten bestimmen.',
r'''Für einen einzelnen radioaktiven Kern ist der Zerfallszeitpunkt zufällig. Für viele unabhängige gleichartige Kerne entsteht ein einfaches Gesetz: Die Abnahmerate ist proportional zur noch vorhandenen Anzahl. Die Lösung der Differentialgleichung ist exponentiell. Eine Halbwertszeit entfernt jeweils die Hälfte der zu Beginn dieses Zeitintervalls vorhandenen Kerne.

Die Zerfallskonstante λ hat die Einheit inverse Zeit. Die Halbwertszeit ist ln2/λ, die mittlere Lebensdauer 1/λ. Diese beiden Zeiten sind verschieden. Die Aktivität ist die Zahl der Kernzerfälle pro Sekunde und wird in Becquerel gemessen: 1 Bq=1 s⁻¹. Sie ist bei rein radioaktivem Zerfall ebenfalls exponentiell.

Um aus Masse eine Aktivität zu berechnen, bestimme zuerst N=m/M·Nₐ. Verwende bei λ und Zeit dieselbe Zeiteinheit. Für eine Bq-Angabe muss λ in s⁻¹ eingesetzt werden. Ein logarithmischer Plot ln(N/N₀) gegen t ist eine Gerade mit Steigung −λ. Leite das Gesetz einmal durch Trennung der Variablen her und überprüfe danach alle drei Beispiele im Skriptabschnitt.''',
r'\dot N=-\lambda N,\quad N(t)=N_0e^{-\lambda t},\quad A(t)=\lambda N(t),\quad t_{1/2}=\frac{\ln2}{\lambda}',
'Ein Isotop hat t½=10 d und anfangs 100 g. Nach 30 d sind drei Halbwertszeiten vergangen: m=100·2⁻³=12,5 g. λ=0,06931 d⁻¹=8,023·10⁻⁷ s⁻¹.',[
('Eine Probe besitzt anfangs 8,0 MBq, t½=6,0 h. Welche Aktivität hat sie nach 18 h?','Zähle Halbwertszeiten.','18/6=3; A=8,0/8=1,0 MBq. Das gilt ohne zusätzlichen Transport oder Ausscheidung.'),
('Nach 20 h verbleiben 30 % einer Probe. Bestimme λ und t½.','Logarithmiere N/N₀=0,30.','λ=−ln(0,30)/20 h=0,06020 h⁻¹. t½=ln2/λ=11,51 h.'),
('10¹² Kerne haben t½=2,0 d. Berechne die Anfangsaktivität in Bq und die mittlere Lebensdauer.','Rechne zwei Tage in Sekunden um.','λ=ln2/172800 s=4,011·10⁻⁶ s⁻¹; A₀=4,0·10⁶ Bq. τ=1/λ=2,89 d, nicht 2,0 d.')],
['Nach vier Halbwertszeiten verbleiben …','1/4','1/16','1/8'],1,'Jede Halbwertszeit halbiert erneut: (1/2)⁴=1/16.',
'2025 S, Aufgabe 1b und 1h. Rechne bei 1h die Isotopenmasse aus der Aktivität zurück.')
L('Parallele Prozesse & effektive Halbwertszeit','02 · Kerne und Radioaktivität','3.1.1','42–44',4,
'Wenn zwei unabhängige Prozesse dieselbe Population entfernen: addieren sich Zeiten oder Raten?',
'Konkurrierende Prozesse mit einer Gesamtrate modellieren und Aktivität richtig interpretieren.',
r'''Kann ein Kern auf verschiedenen Wegen verschwinden, addieren sich die jeweiligen Abnahmeraten. Für zwei radioaktive Zerfallszweige gilt λges=λ₁+λ₂. Die Wahrscheinlichkeit eines bestimmten Zweigs ist λᵢ/λges. Das sind Ratenverhältnisse, keine Verhältnisse von Halbwertszeiten.

Dasselbe mathematische Modell gilt für ein Radionuklid, das zusätzlich biologisch ausgeschieden wird. Die Anzahl im betrachteten Körperbereich nimmt mit λradio+λbio ab. Die radioaktive Aktivität dieses Bereichs bleibt aber A=λradio·N. Die biologische Ausscheidung ist kein Kernzerfall und darf nicht als zusätzliche Becquerel-Aktivität gezählt werden.

Die effektive Halbwertszeit ist kleiner als jede einzelne Halbwertszeit. Das ist ein schneller Plausibilitätstest. Bei konstanten Raten hat auch A(t)/A₀ denselben exponentiellen Faktor wie N(t)/N₀. Erstelle für ein Beispiel getrennte Spalten für λradio, λbio, λeff und A. Lies anschliessend den Parallelreaktionsabschnitt im Skript.''',
r'\lambda_\mathrm{eff}=\lambda_r+\lambda_b,\quad \frac1{t_{1/2,\mathrm{eff}}}=\frac1{t_{1/2,r}}+\frac1{t_{1/2,b}},\quad A_r=\lambda_rN',
'Für Iod-123 mit t½,r=13,2232 h und t½,b=4,0 h ist λeff=0,22570 h⁻¹ und t½,eff≈3,071 h. Von 10,0 MBq bleiben nach 12 h ungefähr 0,667 MBq im Modell übrig.',[
('Ein Stoff hat radioaktiv 12 h und biologisch 6 h Halbwertszeit. Bestimme t½,eff.','Nutze die Summe der Kehrwerte.','1/t_eff=1/12+1/6=1/4 h⁻¹; t_eff=4 h. Zeiten zu addieren würde 18 h und damit die falsche Richtung ergeben.'),
('Zwei Zerfallszweige haben λ₁=0,02 s⁻¹ und λ₂=0,03 s⁻¹. Bestimme Gesamt-Halbwertszeit und Verzweigungsverhältnisse.','Gesamtrate zuerst bilden.','λges=0,05 s⁻¹, t½=13,86 s. Zweig 1: 40 %, Zweig 2: 60 %.'),
('Für das Iod-Beispiel: Wann sinkt die Aktivität von 10,0 auf 1,0 MBq?','Löse exp(−λeff t)=0,10.','t=ln10/0,22570=10,20 h. Radioaktive Aktivität ist λradio N; ihr relativer Zeitverlauf enthält trotzdem λeff.')],
['Bei radioaktiver Halbwertszeit 8 h und biologischer 8 h beträgt die effektive …','16 h','4 h','8 h'],1,'Zwei gleiche Raten verdoppeln die Abnahmerate und halbieren die Halbwertszeit.',
'2025 S, Aufgabe 1i–l: Iod-123. Stelle vor dem Rechnen die Differentialgleichung auf.')
L('Zerfallsketten & Tochterkerne','02 · Kerne und Radioaktivität','3.1.2','44–46',4,
'Kann die Tochtermenge zunächst steigen, obwohl die Muttermenge ständig abnimmt?',
'Für Mutter und Tochter gekoppelte Differentialgleichungen aufstellen und Grenzfälle prüfen.',
r'''In der Kette 1→2→3 wird die Tochter 2 durch Mutterzerfall erzeugt und durch ihren eigenen Zerfall entfernt. Deshalb ist ihre Änderungsrate die Differenz aus einer Quelle und einer Senke. Für eine anfangs reine Mutterprobe gilt N₂(0)=0. Die Tochterzahl wächst zunächst, erreicht ein Maximum und nimmt später wieder ab.

Die Formel für N₂(t) enthält eine Differenz zweier Exponentialfunktionen. Vorzeichen im Nenner und in der Klammer müssen zusammenpassen. Ein einfacher Test ist t=0: Die Tochterzahl muss null ergeben. Ein zweiter Test ist die Anfangssteigung λ₁N₁,₀. Für λ₁=λ₂ wird die übliche Bruchform unbestimmt; der Grenzwert ist λt·N₁,₀·e⁻λt.

Wenn die Mutter viel langlebiger als die Tochter ist, kann sich nach kurzer Zeit ein annäherndes Aktivitätsgleichgewicht einstellen: λ₂N₂≈λ₁N₁. Gleiche Aktivitäten bedeuten nicht gleiche Teilchenzahlen. Zeichne Mutterzahl, Tochterzahl und beide Aktivitäten qualitativ, bevor du die Lösung im Skript nachliest.''',
r'N_2(t)=N_{1,0}\frac{\lambda_1}{\lambda_2-\lambda_1}(e^{-\lambda_1t}-e^{-\lambda_2t}),\quad t_\max=\frac{\ln(\lambda_2/\lambda_1)}{\lambda_2-\lambda_1}',
'Für λ₁=0,10 h⁻¹ und λ₂=0,50 h⁻¹ ist tmax=ln5/0,40≈4,02 h. Zu diesem Zeitpunkt gilt aus dN₂/dt=0: λ₁N₁=λ₂N₂. Das Maximum der Tochterzahl wird durch gleiche Erzeugungs- und Entfernungsrate erreicht.',[
('Stelle die Gleichungen für eine Kette M→T→stabil auf, anfangs nur M.','M hat nur eine Senke; T Quelle und Senke.','dNM/dt=−λM NM; dNT/dt=λM NM−λT NT. Anfangswerte NM(0)=N₀, NT(0)=0.'),
('Nutze λM=0,10 h⁻¹ und λT=0,50 h⁻¹. Wie gross ist NT/N₀ nach 2 h?','Setze beide Exponentialfunktionen ein.','NT/N₀=0,10/0,40·(e⁻⁰·²−e⁻¹)=0,1127. Etwa 11,3 % der ursprünglichen Mutterzahl liegen als Tochter vor.'),
('Bei λM=λT=λ: Wo liegt das Maximum der Tochterpopulation?','Leite λt exp(−λt) ab.','Die Ableitung ist λe⁻λt(1−λt). Das Maximum liegt bei t=1/λ; NT,max=N₀/e.')],
['Im säkularen Gleichgewicht sind näherungsweise gleich …','Massen','Aktivitäten','Teilchenzahlen'],1,'Bei langlebiger Mutter gleicht die Tochteraktivität der Mutteraktivität; die Teilchenzahlen hängen von den Raten ab.',
'2018 W, Aufgabe 1: Ruthenium-106. Suche Quelle und Senke der Tochterpopulation.')
L('Alpha, Beta, Gamma: Reaktionen bilanzieren','02 · Kerne und Radioaktivität','3.4','58–66',5,
'Welche Grössen müssen bei einer Kernreaktion erhalten bleiben?',
'Zerfallsarten an A und Z erkennen und vollständige Reaktionsgleichungen schreiben.',
r'''Beim α-Zerfall wird ein ⁴He-Kern emittiert: A sinkt um vier und Z um zwei. Beim β⁻-Zerfall wird ein Neutron in ein Proton umgewandelt; ein Elektron und ein Elektron-Antineutrino entstehen. A bleibt konstant, Z steigt um eins. Beim β⁺-Zerfall wird ein Proton zu einem Neutron, und Positron sowie Elektron-Neutrino werden emittiert.

Beim Elektroneneinfang nimmt ein Proton ein Hüllenelektron auf; Z sinkt ebenfalls um eins. Bei der γ-Emission ändert ein angeregter Kern seinen Energiezustand, aber weder A noch Z. Die Energie kann alternativ durch innere Konversion auf ein Elektron übertragen werden. Folgeprozesse in der Hülle können Röntgenstrahlung oder Auger-Elektronen erzeugen.

Für eine Energiebilanz mit neutralen Atommassen gilt beim β⁺-Zerfall die Schwelle 2mₑc². Beim β⁻-Zerfall heben sich Elektronenruhemassen in der üblichen Atommassenbilanz anders auf. Lerne deshalb nicht nur eine Pfeilregel, sondern bilanziere Ladung, Nukleonenzahl und Massensorte. Schreibe die vier Zerfallstypen aus Abschnitt 3.4 selbst auf.''',
r'\alpha:\ (A,Z)\to(A-4,Z-2),\quad \beta^-:\ (A,Z)\to(A,Z+1),\quad \beta^+:\ (A,Z)\to(A,Z-1)',
'¹⁴₆C→¹⁴₇N+e⁻+ν̅ₑ: Nukleonenzahl 14=14; Ladung 6=7−1. ²³⁸₉₂U→²³⁴₉₀Th+⁴₂He: 238=234+4 und 92=90+2. Die Elektronen beim Beta-Zerfall waren nicht zuvor als Kernbausteine gespeichert.',[
('Ein Kern mit A=210, Z=84 zerfällt durch Alphaemission. Bestimme Tochter-A und -Z.','Ziehe den Heliumkern ab.','A=206 und Z=82. Tochter ist Blei-206. Die Neutronenzahl sinkt ebenfalls um zwei.'),
('Schreibe β⁺ und Elektroneneinfang für ²²Na (Z=11).','Beide ergeben ein Element mit Z=10; die Leptonen stehen aber auf unterschiedlichen Seiten.','β⁺: ²²Na→²²Ne+e⁺+νₑ. Einfang: ²²Na+e⁻→²²Ne+νₑ. A bleibt 22.'),
('Die Atommassendifferenz Mutter minus Tochter beträgt 0,000800 u. Ist β⁺ energetisch möglich, wenn nur Grundzustände betrachtet werden?','Vergleiche mit zweimal der Elektronenruheenergie.','Massendifferenzenergie ≈0,745 MeV < 1,022 MeV. β⁺ ist nicht möglich. Elektroneneinfang kann energetisch möglich sein; Details hängen von Bindungsenergien und erreichbaren Zuständen ab.')],
['Welche Emission ändert A und Z nicht?','Alpha','Gamma','Beta-minus'],1,'Gammaemission ändert den Kernenergiezustand, nicht seine Zusammensetzung.',
'2025 S, Aufgabe 1a und 1c. Begründe jede Antwort über Protonen- und Neutronenzahl.')
L('Datierung, Kernenergie & Strahlung','02 · Kerne und Radioaktivität','3.5–3.6','67–76',5,
'Warum misst eine Aktivität noch nicht die biologische Wirkung einer Strahlung?',
'Datierungsformeln anwenden und Aktivität, Energiedosis und Äquivalentdosis unterscheiden.',
r'''Bei der Radiocarbonmethode wird nach Ende des Stoffaustauschs der verbleibende ¹⁴C-Anteil mit einem angenommenen Anfangsanteil verglichen. Das Alter folgt aus dem Zerfallsgesetz. Das einfache Modell setzt ein geschlossenes System voraus; reale Datierungen benötigen unter anderem Kalibrationen. Andere Uhren nutzen Mutter-Tochter-Verhältnisse, zum Beispiel Kalium-Argon oder Uran-Blei.

Die Bindungsenergie pro Nukleon ist bei mittelschweren Kernen besonders gross. Fusion sehr leichter und Spaltung sehr schwerer Kerne können deshalb Energie freisetzen. Entscheidend bleibt die konkrete Massenbilanz; nicht jede beliebige Fusion ist exotherm. Eine Kettenreaktion bei Spaltung hängt von Neutronenerzeugung, Verlusten und weiteren Spaltungen ab.

Bq beschreibt Zerfälle pro Sekunde. Die absorbierte Dosis in Gray ist absorbierte Energie pro Masse. Eine strahlungsgewichtete Dosis in Sievert berücksichtigt die Strahlungsart. Eine gleiche Aktivität kann je nach Energie, Strahlungsart, Aufenthaltsort und Expositionsdauer verschiedene Wirkungen haben. Diese Begriffe sind Prüfungsstoff, keine Anleitung zur individuellen Dosisbeurteilung. Lies die Anwendungsbeispiele im Skript und notiere die Annahmen jeder Datierung.''',
r't=-\frac{\ln(N/N_0)}\lambda,\quad D=\frac{E_\mathrm{abs}}m,\quad1\,\mathrm{Gy}=1\,\mathrm{J/kg}',
'Bei N/N₀=0,25 sind zwei Halbwertszeiten vergangen. Mit t½(¹⁴C)=5730 a erhält man im einfachen Modell t=11460 a. Werden 2,0 mJ gleichmässig in 0,50 kg absorbiert, ist D=0,0040 Gy=4,0 mGy.',[
('Eine geschlossene Probe enthält noch 60 % ihres ursprünglichen Isotops. t½=1000 a. Bestimme das Modellalter.','Löse nach t auf.','t=−ln(0,60)·1000/ln2=737 a. Der Anfangsanteil muss bekannt oder modelliert sein.'),
('1,0 MBq emittiert pro Zerfall 0,50 MeV. Welche Energie wird in 10 min abgegeben, wenn die Aktivität konstant bleibt?','Anzahl Zerfälle=A·t. Nicht jede emittierte Energie muss absorbiert werden.','N=6,0·10⁸; E=6,0·10⁸·0,50·10⁶·1,602·10⁻¹⁹ J=4,8·10⁻⁵ J. Für eine Dosis bräuchte man zusätzlich Absorptionsanteil und Masse.'),
('Warum können Fusion und Spaltung beide Energie liefern? Skizziere Bindungsenergie pro Nukleon gegen A.','Betrachte die Lage relativ zum Bereich um Eisen und Nickel.','Leichte Kerne gewinnen Bindung pro Nukleon durch Fusion; sehr schwere durch Spaltung in mittlere Kerne. Die Energiefreisetzung ist die Zunahme der gesamten Bindungsenergie und muss im Einzelfall berechnet werden.')],
['Welche Einheit beschreibt absorbierte Energie pro Kilogramm?','Bq','Gy','C'],1,'1 Gy=1 J/kg; Bq ist eine Aktivität.',
'2016 S, Aufgabe 1: Datierung. 2025 S, Aufgabe 1d–g: konkrete Fusionsenergien.')
L('Lichtquanten & photoelektrischer Effekt','03 · Licht und Quanten','4.1','79–83',6,
'Welche Einheit hat eine Frequenz? Wie hängen Frequenz und Wellenlänge zusammen?',
'Photonenenergien berechnen und Intensität von Energie pro Photon unterscheiden.',
r'''Elektromagnetische Strahlung lässt sich als Welle mit Frequenz ν und Wellenlänge λ beschreiben. Im Vakuum ist ihr Produkt c. Die Wellenzahl ist 1/λ; sie wird in der Spektroskopie häufig in cm⁻¹ angegeben. Kreisfrequenz und Kreiswellenzahl enthalten zusätzlich den Faktor 2π.

Bei einem einzelnen Absorptions- oder Emissionsereignis wird Energie in Quanten übertragen: Ein Photon besitzt E=hν. Kürzere Wellenlänge bedeutet grössere Energie pro Photon. Höhere Intensität bei gleicher Frequenz bedeutet dagegen mehr Photonen pro Zeit und Fläche. Diese Unterscheidung erklärt den photoelektrischen Effekt.

Um ein Elektron aus einer Metalloberfläche zu lösen, muss die Photonenenergie mindestens die Austrittsarbeit W erreichen. Oberhalb dieser Schwelle ist die maximale kinetische Energie hν−W. Mehr Intensität erhöht im einfachen Einphotonenmodell den Elektronenstrom, nicht die maximale Energie eines Elektrons. Zeichne Ekin,max gegen ν und bestimme Steigung und Schnittpunkte. Lies danach Abschnitt 4.1 und das Experiment im Skript.''',
r'E=h\nu=\frac{hc}{\lambda},\quad E_{\mathrm{kin,max}}=h\nu-W,\quad\nu_0=W/h',
'Ein Photon mit λ=400 nm hat E≈3,100 eV. Für ein Metall mit W=2,00 eV bleiben höchstens 1,10 eV kinetische Energie. Die Grenzwellenlänge ist hc/W≈620 nm. Bei 700 nm tritt im Modell keine Emission auf, unabhängig von der Intensität.',[
('Berechne für λ=500 nm Frequenz und Energie in eV.','Rechne nm in m um. hc≈1239,842 eV·nm.','ν=5,996·10¹⁴ Hz; E=2,480 eV = 3,973·10⁻¹⁹ J.'),
('Ein Metall hat W=3,0 eV. Licht mit 250 nm trifft auf. Berechne Ekin,max und die Gegenspannung.','eUgegen=Ekin,max.','EPhoton=4,96 eV; Ekin,max=1,96 eV. Die Gegenspannung hat den Betrag 1,96 V.'),
('Eine Quelle emittiert 1,0 mW bei 500 nm. Wie viele Photonen pro Sekunde sind das?','Leistung geteilt durch Energie pro Photon.','Ṅ=P/E=10⁻³/(3,973·10⁻¹⁹)=2,52·10¹⁵ s⁻¹. Verdoppelte Leistung verdoppelt diese Zahl, nicht E.')],
['Bei verdoppelter Frequenz ist die Photonenenergie …','Halbiert','Verdoppelt','Unverändert'],1,'E=hν ist proportional zur Frequenz.',
'Verknüpfe diese Umrechnungen mit den Spektroskopieaufgaben der Prüfungen 2023 S und 2025 S.')
L('Bohr-Modell & Wasserstoffspektrum','03 · Licht und Quanten','4.2–4.3.4','83–94',7,
'Was unterscheidet ein Emissionsspektrum von einem Absorptionsspektrum?',
'Energieniveaus und Übergänge wasserstoffähnlicher Systeme berechnen und Modellgrenzen nennen.',
r'''Ein Linienspektrum deutet auf diskrete Energiedifferenzen hin. Im Bohr-Modell gibt es für ein Elektron im Coulombfeld eines Kerns nur bestimmte Bahnen. Die Energien skalieren mit −Z²/n² und die Radien mit n²/Z. Die Formeln gelten für Ein-Elektronen-Systeme wie H, He⁺ und Li²⁺, nicht direkt für neutrale Mehrelektronenatome.

Bei Emission geht das System von einem höheren in einen tieferen Energiezustand. Die Photonenenergie ist der positive Betrag der Energiedifferenz. Übergänge nach n=1 gehören zur Lyman-Serie, nach n=2 zur Balmer-Serie. Die Ionisation entspricht dem Übergang zur Grenze n→∞. Ein angeregter Zustand braucht weniger Ionisationsenergie als der Grundzustand.

Die Bohr-Energien sind für wasserstoffähnliche Systeme erstaunlich erfolgreich; die Vorstellung scharfer Kreisbahnen ist jedoch keine moderne quantenmechanische Beschreibung. Für genaue Spektren muss die reduzierte Masse berücksichtigt werden. Lies die beiden Energienullpunkt-Konventionen im Skript: Ein anderer Nullpunkt ändert Energiedifferenzen nicht.''',
r'E_n\approx-13.606\,\mathrm{eV}\frac{Z^2}{n^2},\quad r_n\approx a_0\frac{n^2}{Z},\quad h\nu=|E_f-E_i|',
'Für H beim Übergang n=3→2 beträgt die Energie 13,606·(1/4−1/9)=1,890 eV. Daraus folgt λ≈656 nm. Mit der endlichen Kernmasse ändert sich der Wert leicht. Es handelt sich um die rote Hα-Linie der Balmer-Serie.',[
('Berechne die Grundzustands-Ionisationsenergie von He⁺ im Modell mit unendlich schwerem Kern.','He⁺ hat genau ein Elektron und Z=2.','E₁=−13,606·4=−54,424 eV; zur Ionisation braucht man +54,424 eV.'),
('Vergleiche r₂ von H mit r₁ von He⁺.','Die Radien skalieren mit n²/Z.','r₂(H)=4a₀; r₁(He⁺)=a₀/2. Das Verhältnis beträgt 8.'),
('Bestimme Photonenenergie und Wellenlänge für H n=4→2. Ordne die Serie zu.','Berechne 1/2²−1/4².','ΔE=13,606·3/16=2,551 eV; λ≈486 nm. Es ist die Balmer-Serie. Eine Verschiebung aller Niveaus um dieselbe Konstante verändert das Resultat nicht.')],
['Welches System ist wasserstoffähnlich?','Neutrales He','Li²⁺','Neutrales Li'],1,'Li²⁺ besitzt drei Protonen und nur ein Elektron.',
'Nutze die Moodle-Messdatei ex09_Balmer_Lines.txt und Serie 9 für eigene Auswertungen von Spektrallinien.')
L('Reduzierte Masse & Rydbergzustände','03 · Licht und Quanten','4.3.2; 4.3.5','89–95',8,
'Warum kann sich auch ein schwerer Atomkern bewegen, obwohl das Elektron viel leichter ist?',
'Isotopeneffekte und Quantendefekte in Spektren unterscheiden.',
r'''Bei einem realen Atom bewegen sich Elektron und Kern um den gemeinsamen Schwerpunkt. Für die Relativbewegung ersetzt die reduzierte Masse μ die Elektronenmasse. Bei unendlich schwerem Kern ist μ=mₑ; bei endlicher Kernmasse ist μ etwas kleiner. Die Rydbergkonstante des Systems skaliert mit μ/mₑ.

Ein schwereres Isotop hat eine etwas grössere reduzierte Masse und damit etwas grössere Übergangsenergien im einfachen Ein-Elektronen-Modell. Die entsprechenden Wellenlängen sind etwas kleiner. Das ist ein Masseneffekt und kein Wechsel der Kernladungszahl.

Bei Atomen mit mehreren Elektronen durchdringt das angeregte Elektron unterschiedlich stark den Atomrumpf. Eine empirische Rydbergserie wird mit einem Quantendefekt δₗ beschrieben: n wird durch n−δₗ ersetzt. Der Defekt ist von der Drehimpulsquantenzahl abhängig. Die Ionisationsgrenze ist ein eigener Parameter; die einfache Grundzustandsformel 13,6Z² eV darf hier nicht angewandt werden. Vergleiche die Niveaudiagramme in Abschnitt 4.3.5.''',
r'\mu=\frac{m_em_K}{m_e+m_K},\quad R=R_\infty\frac\mu{m_e},\quad E_{n,l}=E_\mathrm{IE}-\frac{hcR}{(n-\delta_l)^2}',
'Für mK=1836mₑ ist μ/mₑ=1836/1837≈0,999456. Für mK=3672mₑ ist das Verhältnis 3672/3673≈0,999728. Übergänge des schwereren Systems liegen damit etwa 0,0272 % höher in der Frequenz.',[
('Berechne μ/mₑ für mK=100mₑ. Wie gross ist die relative Abweichung von 1?','Kürze mₑ aus dem Bruch.','μ/mₑ=100/101≈0,990099. Die Abweichung ist 1/101≈0,9901 %.'),
('Ein Rydbergzustand hat n=5 und δ=0,5. Vergleiche seine Bindung unterhalb der Ionisationsgrenze mit δ=0.','Vergleiche 1/4,5² mit 1/5².','Das Verhältnis ist 25/20,25≈1,235. Mit positivem Quantendefekt liegt der Zustand stärker gebunden, also tiefer.'),
('Zwei Spektrallinien einer Serie konvergieren zu einer Grenze. Was bedeutet diese physikalisch?','Betrachte n→∞.','Der Bindungsterm geht gegen null. Die Grenze ist die Ionisationsenergie relativ zum gewählten Ausgangsniveau; darüber ist das angeregte Elektron nicht mehr gebunden.')],
['Für einen schwereren Kern nähert sich μ …','Null','mₑ','Unendlich'],1,'Im Grenzfall mK≫mₑ gilt μ→mₑ.',
'In den Aufgaben zur elektronischen Struktur der Prüfungen 2022 S und 2022 W: prüfe Ein-Elektronen- oder Rydbergmodell vor dem Einsetzen.')
L('Materiewellen, Interferenz & Beugung','03 · Licht und Quanten','4.4','94–102',9,
'Warum kann die Summe zweier Wellen null sein, obwohl jede einzeln eine Amplitude hat?',
'De-Broglie-Wellenlängen berechnen und Interferenzbedingungen erklären.',
r'''De Broglie ordnet einem Teilchen mit Impuls p eine Wellenlänge h/p zu. Für ein langsames massives Teilchen ist p=mv; für ein nichtrelativistisch beschleunigtes Elektron kann p=√(2mₑeU) verwendet werden. Für sehr hohe Energien muss der relativistische Zusammenhang benutzt werden.

Wellenamplituden überlagern sich. Gleiche Phase führt zu konstruktiver, eine Phasendifferenz π zu destruktiver Interferenz. Intensitäten sind proportional zum Betragsquadrat der Gesamtamplitude: Addiere deshalb zuerst Amplituden und quadriere danach. Für Materiewellen ist die gemessene Grösse entsprechend eine Nachweiswahrscheinlichkeit.

Beugung wird deutlich, wenn Hindernis- oder Spaltgrössen in der Grössenordnung der Wellenlänge liegen. Beim Einzelspalt liegen Minima bei b sinθ=kλ für ganzzahlige k≠0. Das zentrale Maximum wird breiter, wenn der Spalt schmaler wird. Rekonstruiere die vier Phasenbeispiele und die Spaltskizze im Skript. Die Position von Nebenmaxima ist im Gegensatz zu den Minima nicht durch eine gleich einfache exakte Halbganzzahlregel gegeben.''',
r'\lambda_B=\frac hp,\quad \lambda_e=\frac h{\sqrt{2m_eeU}},\quad I\propto|\psi_1+\psi_2|^2',
'Ein Elektron mit 100 eV hat λ≈0,1227 nm. Eine Verdoppelung seiner kinetischen Energie verkleinert λ nur um √2. Für eine makroskopische Masse von 1 kg bei 1 m/s wäre λ≈6,63·10⁻³⁴ m: praktisch unbeobachtbar klein.',[
('Bestimme die De-Broglie-Wellenlänge eines Elektrons mit 1,00 eV.','E in Joule; p=√(2mE).','λ≈1,227 nm. Mit 100-facher Energie ist die Wellenlänge zehnmal kleiner.'),
('Zwei gleich grosse kohärente Amplituden A treffen mit Phasendifferenz 0 oder π aufeinander. Vergleiche Intensitäten mit einer einzelnen Welle.','Das Betragsquadrat kommt nach der Addition.','Bei 0: Gesamtamplitude 2A und Intensität 4|A|². Bei π: Amplitude und Intensität null am betrachteten Ort. Energie beziehungsweise Wahrscheinlichkeit wird räumlich umverteilt.'),
('Ein Einzelspalt ist 10 μm breit, λ=500 nm. Bestimme den Winkel des ersten Minimums.','sinθ=λ/b.','sinθ=0,0500, θ≈2,87°. Halbiert man b, wird sinθ=0,100 und θ≈5,74°.')],
['Bei vierfacher kinetischer Energie wird λ eines nichtrelativistischen Teilchens …','Halb so gross','Viermal so gross','Unverändert'],0,'λ ist proportional zu Ekin⁻¹ᐟ².',
'2021 S, Aufgabe 2: verknüpfe Wellenlänge und Impuls mit der Unschärferelation. Serie 9 ergänzt die Materiewellen.')
L('Unbestimmtheit & Wellenpakete','04 · Quantenmechanik','4.5','103–106',9,
'Ist eine unbestimmte Messgrösse dasselbe wie ein ungenaues Messgerät?',
'Die Orts-Impuls-Unschärfe quantitativ anwenden und von Messfehlern unterscheiden.',
r'''Die Unbestimmtheitsrelation beschreibt eine Eigenschaft des Quantenzustands. Δx und Δp sind Standardabweichungen der Messverteilungen im selben Zustand, keine beliebig wählbaren Apparatefehler. Ein Zustand mit sehr scharfem Impuls ist räumlich stark ausgedehnt. Ein räumlich schmales Wellenpaket benötigt eine breite Überlagerung von Impulsen.

Die Ungleichung liefert eine untere Schranke, nicht automatisch eine Gleichheit. Die Gleichheit gilt für geeignete minimale Gaußpakete. Bei einer Abschätzung einer Geschwindigkeitsstreuung darf nichtrelativistisch Δp=mΔv gesetzt werden. Das Ergebnis ist eine Streuung, nicht die mittlere Geschwindigkeit.

Der zugrunde liegende Operatorzusammenhang ist [x,p]=iℏ. Orts- und Impulsoperator sind nicht vertauschbar. Die Energie-Zeit-Beziehungen benötigen eine gesonderte Interpretation; Zeit ist in der gewöhnlichen Schrödingergleichung ein Parameter. Lies die Wellenpaketdarstellung im Skript und zeichne ein breites sowie ein schmales Paket mit den zugehörigen Impulsverteilungen.''',
r'\Delta x\,\Delta p_x\ge\frac\hbar2,\quad \Delta v_x\ge\frac\hbar{2m\Delta x},\quad [\hat x,\hat p_x]=i\hbar',
'Für ein Elektron mit Δx=0,10 nm ist Δp≥5,273·10⁻²⁵ kg·m/s. Damit ist Δv≥5,79·10⁵ m/s. Eine zehnmal engere Ortsverteilung erhöht diese Mindeststreuung um den Faktor zehn.',[
('Berechne die minimale Impulsstreuung für Δx=1,0 nm.','ℏ=1,05457·10⁻³⁴ J·s.','Δpmin=5,27·10⁻²⁶ kg·m/s. Das ist eine untere Schranke.'),
('Vergleiche bei gleichem Δx die minimale Geschwindigkeitsstreuung von Proton und Elektron.','Das Verhältnis der Schranken ist umgekehrt proportional zur Masse.','Δvmin,p/Δvmin,e=mₑ/mₚ≈1/1836. Die Impulsschranke ist gleich, die Geschwindigkeitsschranke nicht.'),
('Ein Zustand erfüllt ΔxΔp=3ℏ. Ist er erlaubt? Ist er minimal?','Prüfe gegen ℏ/2.','Er erfüllt die Schranke und ist insoweit zulässig; daraus allein folgt nicht, dass jede weitere Zustandsbedingung erfüllt ist. Er ist kein Zustand minimaler Orts-Impuls-Unschärfe.')],
['Eine kleinere Ortsstreuung verlangt mindestens …','Eine grössere Impulsstreuung','Eine kleinere Masse','Eine kleinere Planck-Konstante'],0,'Das Produkt besitzt eine feste untere Schranke.',
'2021 S, Aufgabe 2 trägt ausdrücklich den Titel Unschärferelation. Rechne zuerst symbolisch und kontrolliere die Dimensionen.')
L('Schrödingergleichung & Operatoren','04 · Quantenmechanik','4.6','107–114',9,
'Was ist der Unterschied zwischen einer Funktion und einer Zahl?',
'Eigenwertgleichungen prüfen und den Hamiltonoperator korrekt auf eine Wellenfunktion anwenden.',
r'''Ein Operator ist eine Rechenvorschrift, die eine Funktion in eine andere Funktion überführt. Der Impulsoperator in Ortsdarstellung lautet −iℏ d/dx. Der Hamiltonoperator besteht aus kinetischer Energie und Potential. Im stationären Fall gilt Hψ=Eψ: Die Wirkung von H liefert dieselbe Funktion zurück, multipliziert mit einer konstanten Zahl E.

Ob eine Funktion eine Eigenfunktion ist, entscheidet man durch tatsächliches Anwenden des Operators. Eine ortsabhängige Funktion als vermeintlicher Eigenwert ist nicht zulässig. Die Reihenfolge von Operatoren ist relevant: Beim Ausdruck p(xψ) muss die Produktregel angewendet werden. Genau daraus entsteht der nicht verschwindende Kommutator von Ort und Impuls.

Der zeitabhängige Zustand eines Energieeigenzustands enthält eine Phase exp(−iEt/ℏ). Ihr Betrag ist eins, weshalb die Wahrscheinlichkeitsdichte eines stationären Zustands zeitunabhängig ist. Superpositionen verschiedener Energien können dagegen zeitabhängige Dichten besitzen. Arbeite die Ableitungen im Skript auf Papier nach, bevor du die Übungsaufgaben löst.''',
r'\hat H=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+V(x),\quad\hat H\psi=E\psi,\quad\hat p=-i\hbar\frac d{dx}',
'Für ψ(x)=eⁱᵏˣ gilt pψ=−iℏ·ik·ψ=ℏkψ. Die Funktion ist ein Impulseigenzustand mit p=ℏk. Als freie ebene Welle auf der ganzen Geraden ist sie allerdings nicht quadratintegrabel und nicht auf 1 normierbar.',[
('Prüfe, ob cos(kx) eine Eigenfunktion des Impulsoperators ist.','Die erste Ableitung ist proportional zu sin(kx).','p cos(kx)=iℏk sin(kx). Das ist kein konstanter Faktor mal cos(kx), also kein Impulseigenzustand.'),
('Prüfe dieselbe Funktion für die freie kinetische Energie.','Leite ein zweites Mal ab.','−ℏ²/(2m)·d²cos(kx)/dx² = ℏ²k²/(2m) cos(kx). Sie ist eine Eigenfunktion des kinetischen Operators.'),
('Berechne [x,p]ψ für eine differenzierbare Funktion ψ.','Wende in p(xψ) die Produktregel an.','xpψ=−iℏxψ′. pxψ=−iℏ(ψ+xψ′). Die Differenz ist iℏψ. Also [x,p]=iℏ.')],
['Ein Eigenwert darf in Hψ=Eψ …','Von x abhängen','Eine konstante Zahl sein','Immer nur null sein'],1,'Der Operator liefert einen konstanten Faktor mal dieselbe Funktion.',
'2025 S, Aufgabe 2d und 2g–j: Hamiltonoperator, Kommutator und Prüfung einer Eigenfunktion.')
L('Born-Regel, Normierung & Erwartungswerte','04 · Quantenmechanik','4.7; 5.1.3','115, 142',9,
'Warum kann eine Wellenfunktion negativ sein, eine Wahrscheinlichkeit aber nicht?',
'Wahrscheinlichkeiten integrieren, Zustände normieren und Erwartungswerte interpretieren.',
r'''Die Wellenfunktion selbst ist im Allgemeinen komplex und keine Wahrscheinlichkeit. Die Born-Regel ordnet ihrem Betragsquadrat eine Wahrscheinlichkeitsdichte zu. Die Wahrscheinlichkeit für einen Bereich erhält man durch Integration. Für kontinuierliche Ortsmessungen besitzt ein einzelner mathematischer Punkt typischerweise Wahrscheinlichkeit null, obwohl die Dichte dort gross sein kann.

Die Normierung verlangt, dass die Wahrscheinlichkeit über den gesamten erlaubten Raum eins ergibt. Bei komplexen Funktionen ist |ψ|²=ψ*ψ, nicht einfach ψ². Eine globale Phase ändert die Dichte nicht. Eine ortsabhängige Phase kann dagegen Impulseigenschaften verändern und darf nicht pauschal ignoriert werden.

Ein Erwartungswert ist ein Mittel über viele gleich präparierte Systeme. Er muss nicht einem möglichen einzelnen Messergebnis entsprechen. Symmetrie kann Rechnungen stark verkürzen: Eine gerade Dichte auf einem symmetrischen Gebiet hat ⟨x⟩=0. Das bedeutet nicht, dass das Teilchen immer im Ursprung ist. Lies die Born-Interpretation und vergleiche eindimensionale und dreidimensionale Volumenelemente.''',
r'\int|\psi|^2\,dx=1,\quad P(a<x<b)=\int_a^b|\psi|^2dx,\quad\langle x\rangle=\int\psi^*x\psi\,dx',
'Eine konstante Wellenfunktion ψ=C auf 0≤x≤L ist durch |C|²L=1 normiert: C kann als 1/√L gewählt werden. Das linke Viertel hat Wahrscheinlichkeit 1/4. Der Mittelwert ist L/2. Dies ist ein Wahrscheinlichkeitsbeispiel, kein Zustand des unendlich hohen Kastens mit seinen Randbedingungen.',[
('Normiere ψ=Cx auf 0≤x≤L, ausserhalb null.','Integriere |C|²x².','|C|²L³/3=1. Wähle C=√3/L^(3/2). Eine globale Phase wäre ebenfalls möglich.'),
('Berechne für diesen Zustand die Wahrscheinlichkeit x<L/2 und den Erwartungswert.','Verwende die normierte Dichte 3x²/L³.','P=∫₀ᴸᐟ²3x²/L³ dx=1/8. ⟨x⟩=∫₀ᴸ3x³/L³ dx=3L/4.'),
('ψ ist auf −L≤x≤L ungerade. Was kannst du über |ψ|² und ⟨x⟩ sagen?','Das Betragsquadrat einer ungeraden Funktion ist gerade.','|ψ|² ist gerade, x|ψ|² ungerade. Bei vorhandener Normierung und endlichem Integral ist ⟨x⟩=0. Die Ortsstreuung muss nicht verschwinden.')],
['Die korrekte Dichte eines komplexen Zustands ist …','ψ²','ψ*ψ','Re(ψ)'],1,'ψ*ψ=|ψ|² ist reell und nichtnegativ.',
'2025 S, Aufgabe 2b: dreidimensionale Normierung. Verwende dort dV=dx dy dz.')
L('Das Teilchen im eindimensionalen Kasten','04 · Quantenmechanik','4.8','116–121',9,
'Warum muss eine stehende Welle an den Wänden eines unendlich hohen Kastens verschwinden?',
'Kastenenergien, Knoten und Aufenthaltswahrscheinlichkeiten berechnen.',
r'''Im unendlich hohen Potentialkasten ist V=0 für 0<x<L; ausserhalb ist der Aufenthalt ausgeschlossen. Die Randbedingungen ψ(0)=ψ(L)=0 erlauben nur bestimmte stehende Wellen. Für n=1,2,3,… gilt ψₙ=√(2/L) sin(nπx/L). n=0 würde die Nullfunktion liefern und ist kein normierbarer Zustand.

Die Energien sind proportional zu n² und umgekehrt proportional zu mL². Schon der Grundzustand besitzt eine positive Energie. Das ist mit der räumlichen Einschränkung und der Impulsstreuung vereinbar. Der Zustand n hat n−1 innere Knoten; an ihnen verschwindet die Dichte.

Für Wahrscheinlichkeiten darf die Sinuswelle nicht einfach durch eine Gleichverteilung ersetzt werden. Integriere sin² mit der passenden Normierung. Die Symmetrie liefert zwar ⟨x⟩=L/2, aber die Dichte ist je nach n unterschiedlich. Leite die Energien aus den Randbedingungen her und rechne das Integral für das mittlere Drittel des Grundzustands selbst aus.''',
r'\psi_n=\sqrt{\frac2L}\sin\frac{n\pi x}L,\quad E_n=\frac{h^2n^2}{8mL^2},\quad n=1,2,\ldots',
'Für ein Elektron im Kasten L=1,00 nm ist E₁≈0,3760 eV. E₂=1,504 eV. Für den Übergang 2→1 werden 1,128 eV frei, entsprechend λ≈1099 nm. Halbiert man L, vervierfachen sich alle Energien.',[
('Ein Kasten wird von L auf 2L vergrössert. Wie ändern sich E₁ und E₃−E₂?','Beide enthalten denselben Faktor 1/L².','Beide werden durch vier geteilt. Der Grundzustand bleibt positiv.'),
('Berechne P(0<x<L/2) für beliebiges n. Wie viele innere Knoten hat n=4?','Die Dichte ist spiegelsymmetrisch zur Kastenmitte.','Die Wahrscheinlichkeit ist 1/2 für jedes n. n=4 besitzt drei innere Knoten bei L/4, L/2 und 3L/4.'),
('Berechne P(L/4<x<3L/4) im Grundzustand.','Nutze ∫sin²(ax)dx=x/2−sin(2ax)/(4a).','P=[x/L−sin(2πx/L)/(2π)] von L/4 bis 3L/4 = 1/2+1/π≈0,8183. Nicht 1/2: In der Mitte ist die Grundzustandsdichte grösser.')],
['Wie skaliert Eₙ mit der Kastenbreite?','L²','1/L²','1/L'],1,'Eₙ=h²n²/(8mL²).',
'2025 S, Aufgabe 2a; danach 2022 W, Aufgabe 2 als Erweiterung auf zwei Dimensionen.')
L('Zwei Dimensionen & Entartung','04 · Quantenmechanik','4.8 · Transfer','116–121',9,
'Können verschiedene Zustände dieselbe Energie haben?',
'Separierbare Kastenprobleme lösen und Entartung systematisch zählen.',
r'''In einem rechteckigen zweidimensionalen Kasten separiert sich die Wellenfunktion in ein Produkt eines x- und eines y-Anteils. Die Gesamtenergie ist die Summe zweier eindimensionaler Energien. Für jede Richtung ist eine eigene positive ganzzahlige Quantenzahl nötig.

Im quadratischen Kasten hängen die Energien nur von nₓ²+nᵧ² ab. Die Zustände (1,2) und (2,1) haben daher dieselbe Energie, aber verschiedene räumliche Wellenfunktionen. Das nennt man Entartung. (1,1) ist ohne zusätzliche Freiheitsgrade nur einfach vorhanden; man darf ihn nicht zweimal zählen.

Ein Rechteck mit ungleichen Seiten kann die Vertauschungsentartung aufheben. Zufällige Gleichheiten sind trotzdem möglich. Erstelle eine Tabelle von Quantenzahlpaaren und sortiere nach Energie, statt die Reihenfolge aus nur einer Quantenzahl zu erraten. Diese Lektion erweitert das Skriptmodell gezielt auf die in den Altprüfungen tatsächlich verwendeten zweidimensionalen Fälle. Die normierte Wellenfunktion hat den Vorfaktor 2/√(LₓLᵧ).''',
r'E_{n_x,n_y}=\frac{h^2}{8m}\left(\frac{n_x^2}{L_x^2}+\frac{n_y^2}{L_y^2}\right)',
'Im Quadrat mit E*=h²/(8mL²) sind die ersten Niveaus: (1,1) bei 2E*, (1,2) und (2,1) bei 5E*, (2,2) bei 8E*. Danach kommen (1,3) und (3,1) bei 10E*.',[
('Liste alle Quantenzahlpaare des Quadrats mit E≤10E* auf.','Beide Quantenzahlen starten bei 1.','(1,1):2; (1,2),(2,1):5; (2,2):8; (1,3),(3,1):10. Sechs Zustände auf vier Energieniveaus, ohne Spin.'),
('Für Lₓ=2L und Lᵧ=L: Vergleiche (1,2) und (2,1) in Einheiten E*.','Der x-Beitrag wird durch vier geteilt.','E₁,₂/E*=1/4+4=4,25; E₂,₁/E*=4/4+1=2. Die Entartung ist aufgehoben.'),
('Zeige für den normierten Grundzustand des Rechtecks: Die Wahrscheinlichkeit im linken unteren Viertel ist 1/4.','Produktzustand: die beiden eindimensionalen Integrale multiplizieren sich.','P=P(x<Lₓ/2)·P(y<Lᵧ/2)=(1/2)(1/2)=1/4. Diese Faktorisierung setzt den hier betrachteten Produktzustand voraus.')],
['Welche Paare sind im quadratischen Kasten sicher energiegleich?','(1,1) und (1,2)','(1,2) und (2,1)','(1,2) und (2,2)'],1,'Die Energie ist invariant unter Vertauschung von x und y.',
'2022 W, Aufgabe 2: Teilchen im zweidimensionalen Kasten. 2016 S, Aufgabe 3 ist eine weitere Originalanwendung.')
L('Der harmonische Oszillator','04 · Quantenmechanik','4.9','122–126',9,
'Wie lautet das Potential einer klassischen Feder? Wo liegt dessen Minimum?',
'Oszillatorenergien, Nullpunktsenergie und klassische Umkehrpunkte bestimmen.',
r'''Nahe einem stabilen Potentialminimum ist eine Taylorentwicklung häufig durch den quadratischen Term dominiert. Das führt zu V(x)=kx²/2 mit der Auslenkung x vom Minimum. Die klassische Kreisfrequenz ist ω=√(k/μ); die gewöhnliche Frequenz ist ν=ω/(2π). Verwechsle beide nicht.

Quantenmechanisch liegen die Energien gleichmässig auseinander: Eᵥ=ℏω(v+1/2), mit v=0,1,2,… . Der Grundzustand besitzt die Nullpunktsenergie ℏω/2. Anders als beim Kasten ist die Quantenzahl null hier erlaubt. Für molekulare Schwingungen ist μ die reduzierte Masse der beiden Kerne.

Die klassischen Umkehrpunkte folgen aus V(x)=Eᵥ, also x=±√(2Eᵥ/k). Quantenmechanisch hat die Wellenfunktion auch ausserhalb dieses klassischen Bereichs nichtverschwindende Ausläufer. Der Gauß-Grundzustand ist gerade; der erste angeregte Zustand ist ungerade. Rechne im Skript die Ableitungen der Grundzustandsfunktion nach und prüfe, welche Faktoren beim zweimaligen Ableiten entstehen.''',
r'\omega=\sqrt{k/\mu},\quad E_v=\hbar\omega(v+\tfrac12),\quad x_\mathrm{U}=\pm\sqrt{2E_v/k}',
'Für k=100 N/m und μ=1,00·10⁻²⁶ kg ist ω=1,00·10¹⁴ s⁻¹ und ν=1,592·10¹³ Hz. E₀=5,273·10⁻²¹ J. Die Umkehrpunkte im Grundzustand liegen bei ±1,027·10⁻¹¹ m.',[
('Bestimme E₁/E₀ und die Energie des Übergangs 1→0.','Die Energien sind (v+1/2)ℏω.','E₁/E₀=(3/2)/(1/2)=3. Die Übergangsenergie ist ℏω=hν, nicht E₀.'),
('Die reduzierte Masse verdoppelt sich bei konstantem k. Wie ändern sich Frequenz und Nullpunktsenergie?','Beide sind proportional zu μ⁻¹ᐟ².','Beide werden durch √2 geteilt. Der Isotopenaustausch verschiebt Schwingungsspektren.'),
('Leite den Umkehrpunkt für v her und gib sein Verhältnis zu xU,0 an.','Setze (v+1/2)ℏω in kx²/2 ein.','|xU,v|=√[(2v+1)ℏω/k]. Das Verhältnis zum Grundzustand ist √(2v+1). Für v=1 also √3.')],
['Die niedrigste erlaubte Quantenzahl v ist …','0','1','−1'],0,'Beim harmonischen Oszillator startet v bei null, seine Energie aber nicht.',
'2025 S, Aufgabe 2d–f und 2h–j. Derivate und Parität separat kontrollieren.')
L('Molekülschwingungen & Anharmonizität','04 · Quantenmechanik','4.9 · Transfer','122–126',9,
'Warum kann ein rein quadratisches Potential keine Dissoziation beschreiben?',
'Harmonische Schwingungen mit einem endlichen Bindungspotential vergleichen.',
r'''Reale Bindungen sind nur für kleine Auslenkungen annähernd harmonisch. Bei grossem Abstand nähern sie sich einer endlichen Dissoziationsgrenze. Das Morsepotential De[1−exp(−a(r−re))]² bildet dieses Verhalten qualitativ ab. Sein Minimum liegt bei r=re und hat hier die Energie null; für r→∞ nähert sich V dem Wert De.

Die Taylorentwicklung um re liefert eine Kraftkonstante k=2Dea². Die rücktreibende Kraft ist −dV/dr und hat bei Dehnung negatives Vorzeichen. Sie ist nicht für beliebige Abstände linear. Im Bereich r<re steigt das Potential steil an.

Eine gebräuchliche spektroskopische Energienäherung ist Eᵥ/(hc)=ω̃e(v+1/2)−(ω̃exe)(v+1/2)². Hier sind beide Koeffizienten Wellenzahlen; c muss zur Längeneinheit passen. Die Niveauabstände nehmen mit v ab. Die Nullpunktsenergie bedeutet, dass die Dissoziationsenergie vom Grundzustand D₀ kleiner als die Potentialtiefe De ist. Diese Prüfungserweiterung wird in 2025 S explizit verwendet.''',
r'V=D_e(1-e^{-a(r-r_e)})^2,\quad k=2D_ea^2,\quad F=-2D_ea\,e^{-a(r-r_e)}(1-e^{-a(r-r_e)})',
'Für CO mit k=1902,0 N/m und μ=(12·15,9949146)/(12+15,9949146) u≈6,8562 u ergibt sich ν≈6,505·10¹³ Hz und die harmonische Wellenzahl ≈2170 cm⁻¹. Für cm⁻¹ muss die Frequenz durch c≈2,998·10¹⁰ cm/s geteilt werden.',[
('Zeige durch Taylorentwicklung die Beziehung k=2Dea².','Für kleine x=r−re ist exp(−ax)≈1−ax.','1−exp(−ax)≈ax. Damit V≈Dea²x². Vergleich mit kx²/2 ergibt k=2Dea².'),
('Seien ω̃e=2000 cm⁻¹ und ω̃exe=20 cm⁻¹. Berechne G(0), G(1) und den Übergang 0→1.','Setze v+1/2=0,5 beziehungsweise 1,5.','G(0)=1000−5=995 cm⁻¹; G(1)=3000−45=2955 cm⁻¹. Die Differenz ist 1960 cm⁻¹, kleiner als 2000 cm⁻¹.'),
('De=1,00·10⁻¹⁸ J und E₀=2,00·10⁻²⁰ J, beide bezogen auf das Potentialminimum. Bestimme D₀.','Vom Grundzustand bis zur Dissoziationsgrenze ist weniger Energie nötig.','D₀=De−E₀=9,80·10⁻¹⁹ J. De und D₀ dürfen nicht verwechselt werden.')],
['Für das Morsepotential gilt V(r→∞)= …','0','De','Unendlich'],1,'Das Potential besitzt eine endliche Dissoziationsgrenze De.',
'2025 S, Aufgabe 3d–h: CO, harmonische und anharmonische Näherung, Potentialgrenzen und Kraft.')
L('Wasserstofforbitale & Quantenzahlen','05 · Atome und Periodensystem','5.1–5.1.2; 5.1.4','131–144',9,
'Ist ein Orbital eine Bahn? Welche Quantenzahlen kennst du bereits?',
'Erlaubte Quantenzahlensätze, Knoten und Orbitalkapazitäten bestimmen.',
r'''Die Schrödingergleichung für das Coulombpotential lässt sich in Kugelkoordinaten in einen radialen Anteil und einen Winkelanteil trennen. Ein Orbital ist eine räumliche Ein-Elektronen-Wellenfunktion, keine Elektronenbahn. Die Hauptquantenzahl n legt bei wasserstoffähnlichen Systemen die Energie fest; l beschreibt den Bahndrehimpuls und mₗ seine Projektion.

Erlaubt sind n=1,2,…; l=0,…,n−1 und mₗ=−l,…,+l. Zu l=0,1,2,3 gehören s,p,d,f. Jedes räumliche Orbital hat zwei mögliche Elektronenspinzustände. Eine Unterschale besitzt 2l+1 Orbitale; eine ganze Schale besitzt n² Orbitale und kann 2n² Elektronen aufnehmen.

Wasserstofforbitale haben n−l−1 radiale und l Winkelknoten, insgesamt n−1. Die Vorzeichen der gezeichneten Orbitalbereiche kennzeichnen Phasen der Wellenfunktion, keine positive oder negative Ladung. Der Bahndrehimpulsbetrag ist ℏ√(l(l+1)), die Projektion mₗℏ. Lies die radialen und winkelabhängigen Bilder im Skript und ordne Knoten den Formeln zu.''',
r'n\ge1,\quad0\le l\le n-1,\quad |m_l|\le l,\quad m_s=\pm\tfrac12,\quad N_\mathrm{Schale}=2n^2',
'Für ein 3d-Orbital gilt n=3,l=2. Es gibt fünf mₗ-Werte −2 bis 2, also fünf Orbitale und zehn Spinorbitale. Radiale Knoten: 3−2−1=0; Winkelknoten: 2. Ein 3s-Orbital hat dagegen zwei radiale und keine Winkelknoten.',[
('Welche Sätze sind erlaubt: (3,2,−3), (2,1,0), (1,1,0)?','Prüfe der Reihe nach n, dann l, dann mₗ.','Nur (2,1,0). Bei (3,2,−3) ist |mₗ|>l. Bei (1,1,0) muss l=0 sein.'),
('Bestimme radiale Knoten, Winkelknoten und Elektronenkapazität der 4p-Unterschale.','p bedeutet l=1.','Radiale Knoten je Orbital: 4−1−1=2; Winkelknoten:1. Drei räumliche Orbitale, maximal sechs Elektronen in der Unterschale.'),
('Wie viele räumliche Orbitale und wie viele Elektronen passen in n=3? Liste die Unterschalen.','Summiere 1+3+5.','3s,3p,3d liefern 9 Orbitale, mit je zwei Spinmöglichkeiten maximal 18 Elektronen.')],
['Welche mₗ-Werte sind für l=1 möglich?','0,1,2','−1,0,+1','±1/2'],1,'mₗ läuft in Einerschritten von −l bis +l.',
'2025 S, Aufgabe 3a und 3c: Schalenkapazität und unzulässige Quantenzahlen.')
L('Radiale Dichte & Aufenthaltswahrscheinlichkeit','05 · Atome und Periodensystem','5.1.1–5.1.3','135–142',9,
'Kann die Dichte am Kern maximal sein, obwohl die Wahrscheinlichkeit in einer dünnen Kugelschale dort verschwindet?',
'Wellenfunktion, lokale Dichte und radiale Verteilung sauber unterscheiden.',
r'''In drei Dimensionen gehört zur Wahrscheinlichkeitsdichte ein Volumenelement. In Kugelkoordinaten ist dV=r²sinθ dr dθ dφ. Der Faktor r² ist wichtig: Mit wachsendem Radius enthält eine dünne Kugelschale mehr Volumen. Ein Maximum der lokalen Dichte muss deshalb nicht am selben Ort liegen wie das Maximum der radialen Verteilung.

Für das 1s-Orbital von Wasserstoff ist ψ proportional zu exp(−r/a₀). Die lokale Dichte ist am Kern am grössten. Nach Integration über die Winkel ergibt sich jedoch P(r)dr=4r²/a₀³ exp(−2r/a₀)dr. Diese radiale Dichte ist bei r=0 null und bei r=a₀ maximal.

Der wahrscheinlichste Radius ist nicht der mittlere Radius. Für 1s ist ⟨r⟩=3a₀/2. Ein Radiusintervall erhält erst nach Integration eine Wahrscheinlichkeit. Erstelle eine Skizze von |ψ|² und P(r), und beschrifte die unterschiedlichen Einheiten. Rechne die Normierung mit dem Integral ∫₀∞rⁿe⁻ᵅʳdr=n!/αⁿ⁺¹ nach.''',
r'\psi_{1s}=\frac{e^{-r/a_0}}{\sqrt{\pi a_0^3}},\quad P(r)=\frac{4r^2}{a_0^3}e^{-2r/a_0},\quad\langle r\rangle=\frac32a_0',
'Das Maximum der radialen Dichte folgt aus d[r²exp(−2r/a₀)]/dr=exp(−2r/a₀)·2r(1−r/a₀)=0. Neben dem Rand r=0 liegt das innere Maximum bei a₀. Der Mittelwert 1,5a₀ liegt weiter aussen.',[
('Zeige ∫₀∞P(r)dr=1.','Nutze n=2 und α=2/a₀ in der Integralformel.','4/a₀³·2!/(2/a₀)³ = (4/a₀³)·(a₀³/4)=1.'),
('Berechne P(r<a₀) für den 1s-Zustand.','Substituiere u=r/a₀; integriere 4u²e⁻²ᵘ.','P=1−5e⁻²≈0,3233. Der wahrscheinlichste Radius umfasst also nicht automatisch die Hälfte der Gesamtwahrscheinlichkeit.'),
('Wie ändern sich wahrscheinlichster und mittlerer Radius für ein wasserstoffähnliches Ion mit Z=2 im Modell unendlich schweren Kerns?','Ersetze a₀ durch a₀/Z.','Beide halbieren sich: rmax=a₀/2 und ⟨r⟩=3a₀/4. Die Form der dimensionslosen Verteilung bleibt gleich.')],
['Für 1s ist der wahrscheinlichste radiale Abstand …','0','a₀','1,5a₀'],1,'Die radiale Dichte enthält den zusätzlichen Faktor r².',
'Bei Wahrscheinlichkeitsaufgaben zu Atomorbitalen zuerst klären: lokale Dichte oder Kugelschalenwahrscheinlichkeit? Nutze Abschnitt 5.1 im Originalskript.')
L('Elektronenkonfiguration & Pauli-Prinzip','05 · Atome und Periodensystem','5.2.1–5.2.3','145–148',9,
'Wie viele Elektronen passen in ein räumliches Orbital und warum?',
'Grundzustandskonfigurationen, ungepaarte Elektronen und Ionenbesetzungen bestimmen.',
r'''In Mehrelektronenatomen wirken Elektron-Elektron-Abstossung und Abschirmung. Die Energie hängt deshalb nicht mehr nur von n ab. Orbitale mit gleicher Hauptquantenzahl, aber verschiedenem l, sind im Allgemeinen nicht energiegleich. Die Wasserstoffentartung darf nicht blind übertragen werden.

Das Pauli-Prinzip erlaubt keine zwei Elektronen mit denselben vier Quantenzahlen. Ein räumliches Orbital kann daher höchstens zwei Elektronen mit entgegengesetztem Spin enthalten. Nach der Hund-Regel werden entartete Orbitale einer Unterschale zunächst einzeln mit parallelen Spins besetzt, bevor gepaart wird.

Das Aufbauprinzip liefert eine hilfreiche Reihenfolge, hat aber bekannte Ausnahmen wie Cr und Cu. Bei Übergangsmetall-Kationen werden die ns-Elektronen typischerweise vor den (n−1)d-Elektronen entfernt. Die Besetzungsreihenfolge neutraler Atome ist also keine universelle Ionisationsreihenfolge. Zeichne Kästchenschemata für C, N, O und deren Ionen und prüfe jedes gegen Pauli und Hund.''',
r'N_s=2,\quad N_p=6,\quad N_d=10,\quad N_f=14',
'Sauerstoff mit Z=8 besitzt 1s²2s²2p⁴. Die drei 2p-Orbitale werden zunächst je einfach und dann eines doppelt besetzt. Es bleiben zwei ungepaarte Elektronen. O²⁻ hat zehn Elektronen und die abgeschlossene Konfiguration 1s²2s²2p⁶.',[
('Zeichne die 2p-Besetzung für C, N und Ne. Wie viele ungepaarte Elektronen ergeben sich?','Verteile zunächst ein Elektron pro p-Orbital.','C: 2p², zwei ungepaarte. N: 2p³, drei ungepaarte. Ne: 2p⁶, keine ungepaarten Elektronen.'),
('Gib die Konfiguration von Fe und Fe²⁺ an (Z=26).','Neutral: [Ar]3d⁶4s². Bei der Ionisierung zuerst 4s entfernen.','Fe: [Ar]3d⁶4s². Fe²⁺: [Ar]3d⁶. Die Elektronenzahl sinkt von 26 auf 24.'),
('Ein Kästchenschema zeigt zwei gleichgerichtete Spins im selben Orbital. Ein anderes paart p² in einem Orbital. Welche Regel wird jeweils verletzt?','Pauli betrifft dasselbe Orbital; Hund betrifft die energetisch günstige Verteilung in entarteten Orbitalen.','Zwei gleiche Spins im selben räumlichen Orbital verletzen Pauli. Die gepaarte p²-Verteilung ist als Grundzustandsbesetzung entgegen Hund; sie ist nicht allein deshalb durch Pauli verboten.')],
['Zwei Elektronen im selben räumlichen Orbital haben …','Gleichen mₛ','Entgegengesetzten mₛ','Immer S=1'],1,'Sie müssen sich im Spinquantenzahlwert unterscheiden.',
'2025 S, Aufgabe 3b: gepaarte Elektronen. Ergänzend elektronische Struktur in 2022 S/W.')
L('Atomterme & Gesamtdrehimpuls','05 · Atome und Periodensystem','5.2.4','149–151',9,
'Ist die Summe zweier Spin-1/2-Teilchen immer Spin 1?',
'Multiplizität und erlaubte J-Werte lesen und einfache Termsymbole bilden.',
r'''Mehrere Elektronendrehimpulse werden zu Gesamtspin S und Gesamtbahndrehimpuls L gekoppelt. Zwei Spin-1/2-Teilchen können einen Singulettzustand mit S=0 oder Triplettzustände mit S=1 bilden. Für zwei Elektronen im selben räumlichen Orbital erzwingt die Antisymmetrie den Singulettspin.

Ein Termsymbol lautet ²ˢ⁺¹LJ. Der linke obere Index ist die Spinmultiplizität, nicht die Elektronenzahl. Für L=0,1,2,3 benutzt man S,P,D,F als Buchstaben. Der Gesamtdrehimpuls J kann von |L−S| bis L+S in Einerschritten laufen. Ein J-Niveau hat 2J+1 magnetische Zustände.

Die einfachen Hund-Regeln helfen beim Grundterm: möglichst grosser Gesamtspin, dann unter den erlaubten Termen möglichst grosses L; die Zuordnung des tiefsten J hängt davon ab, ob die Unterschale weniger oder mehr als halb gefüllt ist. Für äquivalente Elektronen sind nicht alle aus naiver Addition gewonnenen Terme erlaubt. Diese Lektion übt sichere einfache Fälle; überprüfe komplexe Konfigurationen anhand des Skripts.''',
r'{}^{2S+1}L_J,\quad J=|L-S|,|L-S|+1,\ldots,L+S,\quad g_J=2J+1',
'Ein einzelnes p-Elektron hat L=1 und S=1/2. Es besitzt den Term ²P mit J=1/2 oder 3/2. Die zugehörigen Entartungen sind 2 und 4. Insgesamt ergeben sich sechs Zustände, passend zu drei p-Orbitalen mit je zwei Spins.',[
('Lies das Symbol ³P₂: Bestimme S,L,J und die Zahl magnetischer Zustände.','Multiplizität 3=2S+1.','S=1, L=1, J=2, magnetische Entartung 2J+1=5.'),
('Welche J-Werte gehören zu L=2 und S=1? Zähle alle magnetischen Zustände.','Starte bei |L−S|.','J=1,2,3; die Entartungen sind 3,5,7. Summe 15=(2L+1)(2S+1).'),
('Welches Termsymbol hat eine vollständig abgeschlossene Elektronenschale? Begründe.','Alle Projektionen und Spins sind paarweise kompensiert.','L=0, S=0, J=0; Termsymbol ¹S₀. Die Spinmultiplizität ist eins, nicht null.')],
['Ein Singulett hat S= …','0','1/2','1'],0,'2S+1=1 ergibt S=0.',
'2017 W, Aufgabe 3: Atome, Termsymbole und Spektroskopie. Beginne mit dem Lesen jedes Symbols.')
L('Periodische Trends & Stern–Gerlach','05 · Atome und Periodensystem','5.2.5–5.2.9','152–158',9,
'Warum kann ein Atom nach aussen neutral sein und trotzdem auf ein inhomogenes Magnetfeld reagieren?',
'Ionisationsenergie, Elektronenaffinität und Atomradius erklären und magnetische Aufspaltungen einordnen.',
r'''Ionisationsenergie ist die zur Entfernung eines Elektrons aus einem gasförmigen Atom benötigte Energie. Innerhalb einer Periode steigt sie häufig mit der effektiven Kernanziehung; innerhalb einer Gruppe sinkt sie häufig mit wachsender Schale. Unterschalenbesetzung und Paarung erzeugen Ausnahmen. Ein Trend ist keine ausnahmslose mathematische Regel.

Elektronenaffinität beschreibt die Energieänderung beim Hinzufügen eines Elektrons. Tabellen verwenden verschiedene Vorzeichenkonventionen: Prüfe, ob eine positive Zahl die freigesetzte Energie oder die Energieänderung des Systems meint. Elektronegativität beschreibt demgegenüber das Anziehen von Bindungselektronen und ist nicht identisch mit der Elektronenaffinität.

Ein Stern–Gerlach-Experiment nutzt ein inhomogenes Magnetfeld, um magnetische Momente räumlich zu trennen. Neutralität verhindert die Wirkung eines Feldgradienten auf ein magnetisches Dipolmoment nicht. Ein homogenes Feld kann aufspalten, erzeugt aber in dieser idealisierten Beschreibung keine entsprechende Netto-Translationskraft. Für Silber mit einem ungepaarten s-Elektron ergibt sich im einfachen Modell eine Zweiteilung. Lies die Versuchsdarstellung im Skript und erkläre, warum keine kontinuierliche Verteilung entsteht.''',
r'E_\mathrm{mag}=-\boldsymbol\mu\cdot\mathbf B,\quad F_z\approx\mu_z\frac{\partial B_z}{\partial z},\quad\mu_z=-g_J\mu_Bm_J',
'Für J=1/2 sind mJ=±1/2 möglich. Bei gJ≈2 beträgt μz≈∓μB. Für einen Gradienten von 100 T/m ergibt sich |Fz|≈9,27·10⁻²² N. Das Vorzeichen von Kraft und magnetischer Projektion muss konsistent bleiben.',[
('Ordne im einfachen Gruppentrend die Radien von Li, Na und K und begründe.','Nach unten kommt eine zusätzliche besetzte Schale hinzu.','r(Li)<r(Na)<r(K). Abschirmung und grössere Hauptquantenzahl überwiegen den Anstieg der Kernladungszahl.'),
('Vergleiche Na und Na⁺ sowie F und F⁻ hinsichtlich Radius.','Kationen verlieren, Anionen gewinnen Elektronen; betrachte Abstossung und Schalen.','Na⁺ ist kleiner als Na; die äussere 3s-Schale ist entfernt. F⁻ ist grösser als F, weil mehr Elektronen bei gleicher Kernladung miteinander wechselwirken.'),
('Berechne die magnetische Kraft für μz=μB und ∂Bz/∂z=50 T/m. Was geschieht bei homogenem B?','μB=9,274·10⁻²⁴ J/T.','Fz=4,637·10⁻²² N. Im homogenen Feld verschwindet dieser Gradientenkraftterm; eine energetische Aufspaltung kann dennoch vorhanden sein.')],
['Zur räumlichen Trennung im Stern–Gerlach-Versuch braucht man …','Nur ein homogenes Feld','Einen Feldgradienten','Eine elektrische Nettoladung'],1,'Die Kraft auf das magnetische Moment hängt vom räumlichen Feldgradienten ab.',
'2018 W, Aufgabe 3: Atome im inhomogenen Magnetfeld. Verknüpfe die Konfiguration mit dem magnetischen Moment.')
series_map={1:1,2:1,3:3,4:2,5:3,6:3,7:4,8:5,9:5,10:5,11:6,12:8,13:9,14:9,15:7,16:9}
for l in lessons:l['series']=series_map.get(l['id'])
lessons[0]['theory'][2]+=' Eine Angabe wie 15,9994(4) u bedeutet eine Standardunsicherheit von 0,0004 u. Die Klammer bezieht sich auf die letzten angegebenen Dezimalstellen. Diese Unsicherheit ist von der Zahl der angezeigten Nachkommastellen zu unterscheiden.'
lessons[11]['theory'][0]+=' Für eine harmonische Welle E=E₀ cos(ωt−ky) mit k=2π/λ und ω=2πν ergibt Einsetzen in die Wellengleichung ∂²E/∂t²=c²∂²E/∂y² die Beziehung ω²=c²k². Der Photonenimpuls ist p=h/λ; Absorption oder Emission überträgt daher auch Impuls auf Atome.'
lessons[21]['theory'][2]+=' Wenn De zusätzlich vorgegeben ist, bestimme das höchste gebundene Niveau aus Eᵥ<De auf dem monoton steigenden Ast der Näherung. Löse dafür die quadratische Gleichung in y=v+1/2 und verwende die kleinere Wurzel. Mit den Daten der Prüfung 2025 S liegt die Grenze bei etwa v=63,2; der höchste ganzzahlige gebundene Zustand ist v=63. Die einfache Morse-Schranke v+1/2<ω̃e/(2ω̃exe) setzt dagegen untereinander konsistente exakte Morseparameter voraus.'
(D/'course.json').write_text(json.dumps(lessons,ensure_ascii=False,indent=2))
print(f'{len(lessons)} Lektionen, {sum(len(x["exercises"]) for x in lessons)} Aufgaben')
