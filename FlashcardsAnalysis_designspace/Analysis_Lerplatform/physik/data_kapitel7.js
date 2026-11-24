/* ==========================================================================
   PHYSIK I – KAPITEL 7: Gravitationstheorie
   Kepler-Gesetze aus Newton, Keplergleichung, Kegelschnitte, effektives Potential,
   Feld von Kugelschale und Vollkugel, Rotationskurven von Galaxien
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_7 = [
  {
    id: "ph7_ebene_flaechensatz",
    title: "Zweikörperproblem Sonne–Planet: Schwerpunkt, ebene Bahn, 2. Kepler’sches Gesetz",
    category: "7.2 Himmelsmechanik",
    type: "herleitung",
    front: R`Welche Vereinfachungen macht das Skript für die Bewegung eines Planeten um die Sonne? Folgere aus Impuls- und Drehimpulserhaltung, dass (a) der Schwerpunkt ruhen kann, (b) die Bahn <b>eben</b> ist und (c) das <b>2. Kepler’sche Gesetz</b> gilt.`,
    back: R`Gravitation (7.1–7.3): $U(r) = -G_N\frac{m_1m_2}{r}$ ($U(\infty) = 0$), $\vec F = -G_Nm_1m_2\frac{\hat r}{r^2}$, $G_N = 6{,}67\cdot10^{-11}\,\text{N m}^2/\text{kg}^2$.<br><br>
<b>Annahmen:</b> nur Sonne ($M$) und ein Planet ($m$), andere Sterne und Planeten vernachlässigt, also abgeschlossen: $\vec F_\text{ext} = \vec 0$, $\vec M_\text{ext} = \vec 0$ (7.4).
<ul><li>(a) $\vec p_\text{tot} = m\vec v + M\vec V = \text{const}$, also $\dot{\vec s} = \frac{\vec p_\text{tot}}{m+M} = \text{const}$ (7.5–7.7). Wähle $\vec s = \vec 0$, $\dot{\vec s} = \vec 0$ (7.8). Wegen $M\gg m$ wird die Sonnenbewegung vernachlässigt ($R, V\to0$).</li>
<li>(b) $\vec L_\text{tot} = m(\vec r\times\vec v) = \text{const}$ (7.9). Da $\vec L$ seine Richtung behält, liegen $\vec r$ und $\vec v$ immer in derselben Ebene ($\perp\vec L$).</li>
<li>(c) $dA = \tfrac12|\vec r\times\vec v|\,dt = \frac{L}{2m}dt$, also $\dot A = \frac{L}{2m} = \text{const}$ (7.10, 7.11): Der Fahrstrahl überstreicht in gleichen Zeiten gleiche Flächen. Das gilt für <b>alle</b> Zentralkräfte.</li></ul>`,
    meta: "Skript: Abschnitte 7.1–7.2, Gl. (7.1)–(7.11), Abb. 7.1, S. 163–165 (Fussnoten 1–4)",
    explanation: R`<b>Intuition:</b> Kepler fand seine Gesetze aus Tycho Brahes Messungen; Newton zeigte, dass sie aus $F\propto1/r^2$ folgen. Das Skript geht den „einfacheren“ umgekehrten Weg: aus den Erhaltungssätzen zu den Kepler-Gesetzen.<br><br>
<b>Warum eben?</b> Eine Zentralkraft liegt immer in der Ebene aus $\vec r$ und $\vec v$; sie kann den Körper nicht aus dieser Ebene herausziehen. Formal: $\vec L\perp\vec r$ und $\vec L = \text{const}$.<br><br>
<b>Vernachlässigungen:</b> Die Sonne bewegt sich tatsächlich leicht um den gemeinsamen Schwerpunkt (exakt behandelbar mit der reduzierten Masse, Kap. 6.6); das Sonnensystem kreist um das Galaxienzentrum (kleine äussere Kraft); Planeten stören sich gegenseitig (Bahnstörungen, 7.2); Eigendrehimpulse werden ignoriert.<br><br>
<b>Zusammenhang:</b> Kepler 2 ist reine Drehimpulserhaltung (Kap. 5.2.3). Für Kepler 1 und 3 braucht man zusätzlich die Energie und die genaue Form $1/r$ des Potentials.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec s = \dfrac{m\vec r+M\vec R}{m+M}$, $\dot{\vec s} = \dfrac{\vec p_\text{tot}}{m+M}$<em>Schwerpunkt und seine Geschwindigkeit (7.6, 7.7).</em></li>
<li>$\vec F_\text{ext} = \vec 0\Rightarrow\vec p_\text{tot} = \text{const}\Rightarrow\dot{\vec s} = \text{const}$<em>Wähle das Inertialsystem, in dem der Schwerpunkt ruht (7.8).</em></li>
<li>$\dot{\vec L} = \vec r\times\vec F = \vec r\times f(r)\hat r = \vec 0$<em>Zentralkraft: kein Drehmoment um das Zentrum (7.9).</em></li>
<li>$\vec r\perp\vec L$ und $\vec v\perp\vec L$ für alle $t$<em>Kreuzprodukt steht senkrecht auf beiden Faktoren; $\vec L$ fest heisst feste Bahnebene.</em></li>
<li>$dA = \tfrac12|\vec r\times d\vec r| = \tfrac12|\vec r\times\vec v|dt = \dfrac{L}{2m}dt$<em>Dreiecksfläche, die der Fahrstrahl in $dt$ überstreicht (7.10).</em></li>
<li>$\dot A = \dfrac{L}{2m} = \text{const}$<em>2. Kepler’sches Gesetz (7.11).</em></li>
</ol>`,
    example: R`<b>Flächengeschwindigkeit der Erde:</b> $\dot A = \frac{\pi ab}{T}\approx\frac{\pi(1{,}496\cdot10^{11}\,\text{m})^2}{3{,}156\cdot10^{7}\,\text{s}} = 2{,}2\cdot10^{15}\,\text{m}^2/\text{s}$ (fast Kreis, $b\approx a$).<br>
Perihel $1{,}471\cdot10^{11}\,\text{m}$, Aphel $1{,}521\cdot10^{11}\,\text{m}$: Im Perihel ist die Erde $3{,}4\,\%$ schneller.`,
    counterexample: R`<b>Nicht-zentrale Kraft:</b> Strahlungsdruck oder Triebwerksschub quer zur Bahnebene erzeugen ein Drehmoment um die Sonne; die Bahnebene kann kippen. Auch die gegenseitigen Störungen der Planeten (nicht zentral bezüglich der Sonne) lassen die Bahnebenen langsam präzedieren.`,
    pitfalls: R`<ul><li>Den Flächensatz für eine Besonderheit der Gravitation halten.</li>
<li>Den Schwerpunkt im Sonnenmittelpunkt annehmen, ohne die Näherung $M\gg m$ zu nennen.</li>
<li>Vergessen, dass $\dot A$ und nicht $v$ konstant ist.</li></ul>`
  },
  {
    id: "ph7_energie_polar",
    title: "Energiesatz in Polarkoordinaten: φ̇ = L/(mr²) und die Grössen a und ε",
    category: "7.2 Himmelsmechanik",
    type: "herleitung",
    front: R`Schreibe die Geschwindigkeit in Polarkoordinaten, drücke $\dot\varphi$ durch $L$ aus und stelle den <b>Energiesatz</b> für den Planeten nur als Funktion von $r$ und $\dot r$ auf. Wie sind die späteren Bahnparameter $a$ und $\varepsilon$ über $E$ und $L$ definiert?`,
    back: R`Polarkoordinaten $x = r\cos\varphi$, $y = r\sin\varphi$ (7.12, 7.13):
$$v^2 = \dot x^2+\dot y^2 = (\dot r\cos\varphi - r\dot\varphi\sin\varphi)^2 + (\dot r\sin\varphi + r\dot\varphi\cos\varphi)^2 = \dot r^2 + r^2\dot\varphi^2\qquad(7.14\text{–}7.16)$$
Aus der Flächengeschwindigkeit $\dot A = \frac{L}{2m} = \tfrac12r^2\dot\varphi$:
$$\dot\varphi = \frac{L}{mr^2}\qquad(7.17,\,7.18)$$
Energiesatz (keine Reibung im Vakuum, Eigenrotation vernachlässigt):
$$E = \tfrac12mv^2 - G_N\frac{mM}{r} = \tfrac12m\left(\dot r^2 + \frac{L^2}{m^2r^2}\right) - G_N\frac{mM}{r} = \text{const}\qquad(7.19\text{–}7.21)$$
Abkürzungen (später grosse Halbachse und numerische Exzentrizität):
$$a = -G_N\frac{mM}{2E},\qquad\varepsilon^2 = 1 + \frac{2EL^2}{G_N^2M^2m^3}\qquad(7.22)$$
Für gebundene Bahnen ist $E\lt0$, also $a>0$ und $\varepsilon\lt1$.`,
    meta: "Skript: Abschnitt 7.2, Gl. (7.12)–(7.22) mit Fussnoten 5–6, S. 166",
    explanation: R`<b>Intuition:</b> In Polarkoordinaten zerfällt die Geschwindigkeit in einen radialen Anteil $\dot r$ (näher/weiter) und einen tangentialen $r\dot\varphi$ (herum). Die Drehimpulserhaltung legt den tangentialen Anteil vollständig fest: $r\dot\varphi = \frac{L}{mr}$. Übrig bleibt eine Gleichung nur in $r$, ein eindimensionales Problem.<br><br>
<b>Abhängigkeit:</b> $\dot\varphi\propto1/r^2$: Bei halbem Abstand läuft der Planet viermal so schnell um (Winkel pro Zeit).<br><br>
<b>Bedeutung von $a$:</b> $a = \frac{G_NmM}{2|E|}$ hängt <i>nur</i> von der Energie ab, nicht vom Drehimpuls. Alle Bahnen gleicher Energie haben dieselbe grosse Halbachse und (Kepler 3) dieselbe Umlaufzeit, ob kreisförmig oder sehr exzentrisch.<br><br>
<b>Bedeutung von $\varepsilon$:</b> Für eine gegebene Energie bestimmt der Drehimpuls die Form: maximales $L$ ergibt einen Kreis ($\varepsilon = 0$), kleines $L$ eine sehr gestreckte Ellipse.<br><br>
<b>Zusammenhang:</b> Der Term $\frac{L^2}{2mr^2}$ wird in 7.3 als „Zentrifugalpotential“ zum effektiven Potential gezählt.`,
    derivation: R`<ol class="fc-steps">
<li>$\dot x = \dot r\cos\varphi - r\dot\varphi\sin\varphi$, $\dot y = \dot r\sin\varphi + r\dot\varphi\cos\varphi$<em>Produkt- und Kettenregel (7.15).</em></li>
<li>$\dot x^2+\dot y^2 = \dot r^2(\cos^2+\sin^2) + r^2\dot\varphi^2(\sin^2+\cos^2) + 0$<em>Die gemischten Terme $\mp2\dot rr\dot\varphi\sin\varphi\cos\varphi$ heben sich auf (7.16).</em></li>
<li>$\dot A = \tfrac12r\cdot r\dot\varphi = \dfrac{L}{2m}\;\Rightarrow\;\dot\varphi = \dfrac{L}{mr^2}$<em>Fläche des schmalen Sektors: $\tfrac12r^2d\varphi$ (7.17, 7.18).</em></li>
<li>$\tfrac12mr^2\dot\varphi^2 = \tfrac12mr^2\dfrac{L^2}{m^2r^4} = \dfrac{L^2}{2mr^2}$<em>Tangentialer Anteil der kinetischen Energie durch $L$ ausgedrückt.</em></li>
<li>$E = \tfrac12m\dot r^2 + \dfrac{L^2}{2mr^2} - \dfrac{G_NmM}{r}$<em>Energiesatz als Funktion von $r$ und $\dot r$ allein (7.21).</em></li>
</ol>`,
    example: R`<b>Erde:</b> $E = -\frac{G_NM_\odot m}{2a}$, also mit $a = 1{,}496\cdot10^{11}\,\text{m}$: $E = -2{,}65\cdot10^{33}\,\text{J}$ (gebunden).<br>
<b>Komet Halley:</b> $\varepsilon = 0{,}967$ (Gl. 7.38 im Skript nennt $0{,}976$), also sehr kleines $L$ bei gegebener Energie: Er taucht fast radial in das innere Sonnensystem ein.`,
    counterexample: R`<b>Geschwindigkeit nicht in Polarkoordinaten zerlegt:</b> Wer $v^2 = \dot r^2+\dot\varphi^2$ schreibt (ohne $r^2$), erhält eine dimensionsfalsche Gleichung. In krummlinigen Koordinaten tragen die Basisvektoren Faktoren (Kap. 2.4.1).`,
    pitfalls: R`<ul><li>Den Faktor $r^2$ vor $\dot\varphi^2$ vergessen.</li>
<li>$E>0$ für gebundene Bahnen annehmen (mit $U(\infty) = 0$ sind gebundene Bahnen negativ).</li>
<li>$m^3$ in $\varepsilon^2$ falsch übernehmen (Dimension prüfen: $\frac{EL^2}{G_N^2M^2m^3}$ ist dimensionslos).</li></ul>`
  },
  {
    id: "ph7_keplergleichung",
    title: "Zeitverlauf der Bahn: exzentrische Anomalie und Keplergleichung",
    category: "7.2 Himmelsmechanik",
    type: "herleitung",
    front: R`Wie erhält man den <b>zeitlichen</b> Verlauf $r(t)$, $\varphi(t)$ einer Planetenbahn? Leite mit der Substitution $r = a(1-\varepsilon\cos\alpha)$ die <b>Keplergleichung</b> $\alpha - \varepsilon\sin\alpha = \sqrt{G_NM/a^3}\,t$ her und erkläre, wie man sie löst.`,
    back: R`Aus dem Energiesatz mit $a$, $\varepsilon$ (7.22):
$$\dot r = \frac{dr}{dt} = \sqrt{\frac{G_NM}{a}}\;\frac1r\sqrt{a^2\varepsilon^2-(r-a)^2}\qquad(7.23)$$
Separieren: $\int\frac{r\,dr}{\sqrt{a^2\varepsilon^2-(r-a)^2}} = \int\sqrt{\frac{G_NM}{a}}dt$ (7.24). Substitution
$$r = a(1-\varepsilon\cos\alpha),\qquad dr = a\varepsilon\sin\alpha\,d\alpha\qquad(7.25,\,7.26)$$
ergibt die <b>Keplergleichung</b>
$$\alpha - \varepsilon\sin\alpha = \mu \stackrel{\text{def}}{=} \sqrt{\frac{G_NM}{a^3}}\,t + \text{const}\qquad(7.27,\,7.28)$$
$\alpha$: <b>exzentrische Anomalie</b>, $\mu$: <b>mittlere Anomalie</b>. Lösen: $\mu(t)$, dann $\alpha$ aus der transzendenten Gleichung (iterativ $\alpha_0 = 0$, $\alpha_i = \mu+\varepsilon\sin\alpha_{i-1}$ für $\varepsilon\ll1$), dann $r$ aus (7.25). Für den Winkel:
$$\frac{d\varphi}{d\alpha} = \frac{\sqrt{1-\varepsilon^2}}{1-\varepsilon\cos\alpha},\qquad\tan\frac\varphi2 = \sqrt{\frac{1+\varepsilon}{1-\varepsilon}}\tan\frac\alpha2\qquad(7.29\text{–}7.32)$$`,
    meta: "Skript: Abschnitt 7.2, Gl. (7.23)–(7.32) mit Fussnote 7, S. 166–168",
    explanation: R`<b>Intuition:</b> Die Form der Bahn (Ellipse) ist einfach, ihr Durchlaufen in der Zeit nicht: Der Planet ist im Perihel schnell und im Aphel langsam. Die Keplergleichung übersetzt die gleichmässig wachsende „mittlere Anomalie“ $\mu\propto t$ in die tatsächliche Lage.<br><br>
<b>Geometrische Bedeutung:</b> $\alpha$ ist der Winkel eines Hilfspunktes auf dem umschriebenen Kreis (Radius $a$). $\mu$ wäre der Winkel eines fiktiven Planeten, der gleichmässig auf einem Kreis umläuft. Für $\varepsilon = 0$ fallen $\mu$, $\alpha$ und $\varphi$ zusammen.<br><br>
<b>Kein geschlossener Ausdruck:</b> $\alpha - \varepsilon\sin\alpha = \mu$ ist transzendent; man löst sie numerisch. Für kleine $\varepsilon$ (alle Planeten ausser Merkur) konvergiert die Fixpunktiteration in wenigen Schritten.<br><br>
<b>Zusammenhang:</b> Nach einem Umlauf wächst $\alpha$ um $2\pi$, also ist $T = 2\pi\sqrt{a^3/(G_NM)}$: ein zweiter Weg zum 3. Kepler’schen Gesetz. Navigations- und Astronomieprogramme rechnen bis heute genau so.`,
    derivation: R`<ol class="fc-steps">
<li>$\dot r^2 = \dfrac2m\left(E + \dfrac{G_NmM}{r}\right) - \dfrac{L^2}{m^2r^2}$<em>Energiesatz (7.21) nach $\dot r^2$ aufgelöst.</em></li>
<li>$\dot r^2 = \dfrac{G_NM}{a}\cdot\dfrac{a^2\varepsilon^2-(r-a)^2}{r^2}$<em>$E$ und $L^2$ durch $a$ und $\varepsilon$ aus (7.22) ersetzen und auf gemeinsamen Nenner bringen (7.23).</em></li>
<li>$\dfrac{r\,dr}{\sqrt{a^2\varepsilon^2-(r-a)^2}} = \sqrt{\dfrac{G_NM}{a}}\,dt$<em>Variablen trennen (7.24).</em></li>
<li>$r-a = -a\varepsilon\cos\alpha\;\Rightarrow\;\sqrt{a^2\varepsilon^2-(r-a)^2} = a\varepsilon\sin\alpha$<em>Substitution (7.25) vereinfacht die Wurzel mit $1-\cos^2 = \sin^2$.</em></li>
<li>$\dfrac{a(1-\varepsilon\cos\alpha)\cdot a\varepsilon\sin\alpha\,d\alpha}{a\varepsilon\sin\alpha} = a(1-\varepsilon\cos\alpha)\,d\alpha$<em>$dr$ aus (7.26) einsetzen; $a\varepsilon\sin\alpha$ kürzt sich.</em></li>
<li>$a(\alpha-\varepsilon\sin\alpha) = \sqrt{\dfrac{G_NM}{a}}\,t + \text{const}$<em>Integrieren und durch $a$ teilen ergibt die Keplergleichung (7.27, 7.28).</em></li>
</ol>`,
    example: R`<b>Erde, ein Vierteljahr nach dem Perihel</b> ($\mu = \pi/2$, $\varepsilon = 0{,}0167$):
$\alpha_1 = 1{,}5708 + 0{,}0167\sin0 = 1{,}5708$; $\alpha_2 = 1{,}5708+0{,}0167\sin1{,}5708 = 1{,}5875$; $\alpha_3 = 1{,}5875$ (konvergiert).
$\tan\frac\varphi2 = \sqrt{\frac{1{,}0167}{0{,}9833}}\tan(0{,}7937) = 1{,}0339$, also $\varphi = 91{,}9^\circ$.
Nach einem Viertel der Umlaufzeit ist die Erde also schon $1{,}9^\circ$ weiter als $90^\circ$, weil sie nahe dem Perihel schneller läuft.`,
    counterexample: R`<b>Iteration bei grossem $\varepsilon$:</b> Für $\varepsilon\to1$ (Kometen) konvergiert die einfache Fixpunktiteration nur langsam; man nimmt dann das Newton-Verfahren. Die Fussnote des Skripts („wenige Iterationsschritte“) gilt nur für $\varepsilon\ll1$.`,
    pitfalls: R`<ul><li>Exzentrische Anomalie $\alpha$ und wahren Winkel $\varphi$ verwechseln.</li>
<li>$\mu$ (mittlere Anomalie) mit der reduzierten Masse verwechseln (gleiches Symbol!).</li>
<li>Die Keplergleichung „algebraisch nach $\alpha$ auflösen“ wollen; sie ist transzendent.</li></ul>`
  },
  {
    id: "ph7_kepler1_kegelschnitte",
    title: "1. Kepler’sches Gesetz: Bahn als Kegelschnitt r = p/(1 + ε cos φ)",
    category: "7.2 Himmelsmechanik",
    type: "gesetz",
    front: R`Wie folgt aus den Lösungen $r(t)$, $\varphi(t)$ die <b>Bahngleichung</b> $r(\varphi)$? Gib die grosse und kleine Halbachse durch $E$ und $L$ an und ordne die Bahnformen (Kreis, Ellipse, Parabel, Hyperbel) der Energie und der Exzentrizität zu.`,
    back: R`Aus (7.32) $\cos\alpha = \frac{\varepsilon+\cos\varphi}{1+\varepsilon\cos\varphi}$ (7.33), eingesetzt in (7.25):
$$r = a(1-\varepsilon\cos\alpha) = \frac{a(1-\varepsilon^2)}{1+\varepsilon\cos\varphi} = \frac{p}{1+\varepsilon\cos\varphi},\qquad p := a(1-\varepsilon^2)\qquad(7.34,\,7.35)$$
Gleichung eines <b>Kegelschnitts</b> mit Brennpunkt im Ursprung. <b>1. Kepler’sches Gesetz:</b> Die Bahnen der Planeten sind Ellipsen, in deren einem Brennpunkt die Sonne steht.
$$a = \frac12\left(\frac{p}{1+\varepsilon}+\frac{p}{1-\varepsilon}\right) = \frac{p}{1-\varepsilon^2} = \frac{G_NmM}{2|E|},\qquad b = a\sqrt{1-\varepsilon^2} = \frac{L}{\sqrt{2m|E|}}\qquad(7.36,\,7.37)$$
<table><tr><td>$\varepsilon = 0$, $E\lt0$</td><td>Kreis</td></tr>
<tr><td>$0\lt\varepsilon\lt1$, $E\lt0$</td><td>Ellipse (Erde $0{,}017$, Halley $0{,}976$)</td></tr>
<tr><td>$\varepsilon = 1$, $E = 0$</td><td>Parabel</td></tr>
<tr><td>$\varepsilon>1$, $E>0$</td><td>Hyperbel</td></tr></table>
(7.38). Systeme mit $E\lt0$ heissen <b>gebunden</b>. Perihel $a(1-\varepsilon)$, Aphel $a(1+\varepsilon)$.`,
    meta: "Skript: Abschnitt 7.2, Gl. (7.33)–(7.38), Abb. 7.2, S. 168–169",
    explanation: R`<b>Intuition:</b> Je nach Energie ist der Körper an die Sonne gebunden (geschlossene Bahn: Ellipse, Spezialfall Kreis) oder nicht (offene Bahn: Hyperbel; Grenzfall Parabel mit genau Fluchtenergie). Dass die gebundenen Bahnen <i>geschlossen</i> sind (der Planet kehrt exakt zum selben Punkt zurück), ist eine Besonderheit des $1/r$-Potentials.<br><br>
<b>Geometrie (Abb. 7.2):</b> Die Sonne steht im Brennpunkt $F_1$, nicht im Mittelpunkt. Abstand Mittelpunkt–Brennpunkt $e = a\varepsilon$, mit $e^2 = a^2-b^2$. $p$ ist der „Halbparameter“, der Abstand bei $\varphi = 90^\circ$.<br><br>
<b>Abhängigkeiten:</b> $a$ bestimmt die Energie ($E = -G_NmM/2a$), $b$ zusätzlich den Drehimpuls ($L = b\sqrt{2m|E|}$). Bei gegebenem $a$ hat der Kreis ($b = a$) den maximalen Drehimpuls.<br><br>
<b>Zusammenhang:</b> Kometen auf Hyperbelbahnen besuchen das Sonnensystem nur einmal (z. B. ʻOumuamua). Raumsonden nutzen Hyperbelbahnen an Planeten für Swing-by-Manöver.`,
    derivation: R`Halbachsen aus Perihel und Aphel:
<ol class="fc-steps">
<li>$r_P = r(\varphi = 0) = \dfrac{p}{1+\varepsilon},\quad r_A = r(\varphi = \pi) = \dfrac{p}{1-\varepsilon}$<em>Kleinster und grösster Abstand aus (7.34).</em></li>
<li>$a = \tfrac12(r_P+r_A) = \dfrac p2\cdot\dfrac{(1-\varepsilon)+(1+\varepsilon)}{1-\varepsilon^2} = \dfrac{p}{1-\varepsilon^2}$<em>Die grosse Achse ist $r_P+r_A$ (7.36).</em></li>
<li>$a = -\dfrac{G_NmM}{2E} = \dfrac{G_NmM}{2|E|}$<em>Konsistent mit der Definition (7.22).</em></li>
<li>$b = a\sqrt{1-\varepsilon^2}$, $1-\varepsilon^2 = -\dfrac{2EL^2}{G_N^2M^2m^3}$<em>Ellipsengeometrie und (7.22).</em></li>
<li>$b = \dfrac{G_NmM}{2|E|}\cdot\dfrac{L\sqrt{2|E|}}{G_NMm^{3/2}} = \dfrac{L}{\sqrt{2m|E|}}$<em>Einsetzen und kürzen (7.37).</em></li>
</ol>`,
    example: R`<b>Erde</b> ($a = 1{,}496\cdot10^{11}\,\text{m}$, $\varepsilon = 0{,}0167$): Perihel $1{,}471\cdot10^{11}\,\text{m}$ (Anfang Januar), Aphel $1{,}521\cdot10^{11}\,\text{m}$ (Anfang Juli); $b = a\sqrt{1-0{,}00028} = 0{,}99986\,a$, praktisch ein Kreis, aber die Sonne sitzt $2{,}5\cdot10^{9}\,\text{m}$ neben dem Mittelpunkt.<br>
<b>Mars</b> ($\varepsilon = 0{,}093$): Perihel $1{,}38$, Aphel $1{,}67\,\text{AE}$, deutlich exzentrisch.`,
    counterexample: R`<b>Nicht-$1/r$-Potentiale:</b> Schon eine kleine Abweichung vom $1/r^2$-Kraftgesetz (z. B. durch andere Planeten oder die Allgemeine Relativitätstheorie) führt dazu, dass sich die Ellipse nicht schliesst: Das Perihel wandert (Periheldrehung, Merkur). Die Kepler-Ellipse ist ein Spezialfall, kein allgemeines Gesetz für Zentralkräfte.`,
    pitfalls: R`<ul><li>Die Sonne in den Ellipsenmittelpunkt setzen.</li>
<li>$\varepsilon$ (numerische Exzentrizität, dimensionslos) und $e = a\varepsilon$ (lineare Exzentrizität, Länge) verwechseln.</li>
<li>Parabel und Hyperbel als „gebunden“ ansehen.</li>
<li>$a = \frac{G_NmM}{2E}$ ohne Betrag (dann negativ).</li></ul>`
  },
  {
    id: "ph7_kepler3",
    title: "3. Kepler’sches Gesetz: T² = 4π² a³/(G_N M)",
    category: "7.2 Himmelsmechanik",
    type: "herleitung",
    front: R`Leite aus Ellipsenfläche und Flächengeschwindigkeit das <b>3. Kepler’sche Gesetz</b> her. Warum ist $T^2/a^3$ für alle Planeten gleich, und wie kann man damit die Masse der Sonne bestimmen?`,
    back: R`$$T = \frac{\text{Fläche der Ellipse}}{\text{Flächengeschwindigkeit}} = \frac{\pi ab}{L/(2m)}\qquad(7.39)$$
$$T^2 = \frac{4\pi^2a^2b^2m^2}{L^2} = \frac{4\pi^2a^3p\,m^2}{L^2} = \frac{4\pi^2}{G_NM}a^3\qquad(7.40)$$
mit $b^2 = ap$ und $p = a(1-\varepsilon^2) = \frac{L^2}{G_Nm^2M}$. Also
$$\frac{T^2}{a^3} = \frac{4\pi^2}{G_NM} = \text{const}\qquad(7.41)$$
unabhängig von den Eigenschaften des einzelnen Planeten (Masse, Exzentrizität, Drehimpuls). <b>3. Kepler’sches Gesetz:</b> Die Quadrate der Umlaufzeiten verhalten sich wie die Kuben der grossen Halbachsen.`,
    meta: "Skript: Abschnitt 7.2, Gl. (7.39)–(7.41), Tab. 7.1, S. 169–170",
    explanation: R`<b>Intuition:</b> Weiter aussen ist die Bahn länger <i>und</i> der Planet langsamer (schwächere Anziehung). Beides zusammen ergibt $T\propto a^{3/2}$.<br><br>
<b>Schnelle Kontrolle mit dem Kreis:</b> $\frac{mv^2}{r} = \frac{G_NmM}{r^2}$ und $v = \frac{2\pi r}{T}$ ergeben direkt $T^2 = \frac{4\pi^2}{G_NM}r^3$.<br><br>
<b>Abhängigkeiten:</b> $T\propto a^{3/2}$, $v\propto a^{-1/2}$ (Kreisbahn). Der Planet mit vierfachem Bahnradius braucht achtmal so lange und ist halb so schnell.<br><br>
<b>Massenbestimmung:</b> Aus $T$ und $a$ eines beliebigen Begleiters erhält man die Masse des Zentralkörpers: $M = \frac{4\pi^2a^3}{G_NT^2}$. So „wiegt“ man Sonne, Planeten (über Monde), Doppelsterne, das Schwarze Loch im Milchstrassenzentrum. Genauer steht dort $M+m$ (reduzierte Masse, Kap. 6.6).<br><br>
<b>Zusammenhang:</b> Tabelle 7.1 bestätigt die Konstanz über einen Faktor 100 in $a$ (Merkur bis Neptun).`,
    derivation: R`<ol class="fc-steps">
<li>$T = \dfrac{\pi ab}{\dot A} = \dfrac{2\pi abm}{L}$<em>Ellipsenfläche durch konstante Flächengeschwindigkeit (7.39).</em></li>
<li>$b^2 = a^2(1-\varepsilon^2) = a\cdot a(1-\varepsilon^2) = ap$<em>Aus $b = a\sqrt{1-\varepsilon^2}$ und $p = a(1-\varepsilon^2)$.</em></li>
<li>$p = \dfrac{L^2}{G_Nm^2M}$<em>Aus (7.22): $a(1-\varepsilon^2) = \frac{G_NmM}{2|E|}\cdot\frac{2|E|L^2}{G_N^2M^2m^3}$.</em></li>
<li>$T^2 = \dfrac{4\pi^2a^2\,ap\,m^2}{L^2} = \dfrac{4\pi^2a^3m^2}{L^2}\cdot\dfrac{L^2}{G_Nm^2M}$<em>Quadrieren und einsetzen (7.40).</em></li>
<li>$\dfrac{T^2}{a^3} = \dfrac{4\pi^2}{G_NM}$<em>$L$ und $m$ kürzen sich: Konstante für alle Planeten (7.41).</em></li>
</ol>`,
    example: R`<b>Sonnenmasse aus der Erdbahn:</b> $M = \frac{4\pi^2(1{,}496\cdot10^{11})^3}{6{,}674\cdot10^{-11}\cdot(3{,}156\cdot10^{7})^2}\,\text{kg} = 1{,}99\cdot10^{30}\,\text{kg}$.<br>
<b>Jupiter</b> ($a = 5{,}20\,\text{AE}$): $T = 5{,}20^{3/2}\,\text{a} = 11{,}9\,\text{a}$ ✓ (Tab. 7.1). Neptun ($30{,}06\,\text{AE}$): $164{,}8\,\text{a}$ ✓.<br>
<b>ISS</b> ($r = 6771\,\text{km}$, Zentralkörper Erde): $T = 2\pi\sqrt{r^3/(G_NM_E)} = 92\,\text{min}$; geostationär ($T = 1$ Sterntag): $r = 42\,160\,\text{km}$.`,
    counterexample: R`<b>Verschiedene Zentralkörper:</b> $T^2/a^3$ ist nur für Körper um <i>denselben</i> Zentralkörper gleich. Mond um die Erde und Erde um die Sonne haben völlig verschiedene Konstanten (Faktor $M_\odot/M_E\approx3{,}3\cdot10^{5}$).<br>
<b>Schwere Begleiter:</b> Bei Doppelsternen gleicher Masse ist $T^2 = \frac{4\pi^2a^3}{G_N(m_1+m_2)}$; mit nur einer Masse im Nenner würde man die Masse um den Faktor 2 falsch bestimmen.`,
    pitfalls: R`<ul><li>$T\propto a^3$ oder $T^2\propto a^2$ schreiben.</li>
<li>Für Ellipsen den Abstand im Perihel statt der grossen Halbachse einsetzen.</li>
<li>Einheiten mischen: In AE und Jahren ist die Konstante für die Sonne genau 1; in SI nicht.</li></ul>`
  },
  {
    id: "ph7_bahnstoerungen",
    title: "Bahnstörungen: Entdeckung Neptuns und Periheldrehung des Merkur",
    category: "7.2 Himmelsmechanik",
    type: "experiment",
    front: R`Welche Abweichungen von den Kepler-Bahnen beobachtet man im Sonnensystem, und wie wurden sie erklärt? Beschreibe die <b>Entdeckung Neptuns</b> und die <b>Periheldrehung des Merkur</b>.`,
    back: R`Für genauere Bahnen muss man vor allem bei äusseren Planeten den gegenseitigen Einfluss berücksichtigen (<b>Bahnstörungen</b>); früher mühsam analytisch, heute numerisch.<br><br>
<b>Neptun:</b> Um 1800–1850 zeigte sich, dass Uranus den Gesetzen nicht genau gehorchte (scheinbare Verletzung von Gravitationsgesetz, Energie- und Drallsatz). Leverrier und Adams postulierten einen unbekannten Planeten und berechneten seine Position aus den sehr kleinen Störungen; Galle fand ihn an der vorhergesagten Stelle: einer der grössten Triumphe der klassischen Mechanik.<br><br>
<b>Merkur:</b> Das Perihel der innersten Planeten dreht sich. Nach Abzug aller Newton’schen Störungen bleibt beim Merkur
$$\omega_\text{beob} = (43{,}11\pm0{,}45)''\ \text{pro Jahrhundert}\qquad(7.42)$$
Einsteins Allgemeine Relativitätstheorie liefert
$$\omega_\text{ber} = 43{,}03''\ \text{pro Jahrhundert}\qquad(7.43)$$`,
    meta: "Skript: Abschnitt 7.2 (nach Tab. 7.1), Gl. (7.42)–(7.43), S. 170–171",
    explanation: R`<b>Intuition:</b> Beide Geschichten haben dieselbe Ausgangslage, eine kleine, signifikante Abweichung von der Theorie, aber verschiedene Auflösungen:
<ul><li>Uranus: Die Theorie war richtig, es fehlte ein Körper (zusätzliche Masse). Die Theorie hat sich glänzend bestätigt und eine Entdeckung vorhergesagt.</li>
<li>Merkur: Kein zusätzlicher Planet („Vulkan“) wurde gefunden; die Theorie selbst musste erweitert werden.</li></ul>
<b>Methodik (Kap. 1.1):</b> Das ist Falsifikation in Reinform. Eine Abweichung von $43''$ pro Jahrhundert ist winzig, aber weit ausserhalb der Messunsicherheit ($\pm0{,}45''$), also ernst zu nehmen. Die Übereinstimmung $43{,}03''$ zu $43{,}11\pm0{,}45''$ gehört zu den klassischen Tests der Allgemeinen Relativitätstheorie.<br><br>
<b>Physik der Periheldrehung:</b> Jede Abweichung vom reinen $1/r$-Potential (Störungen durch andere Planeten, relativistische Korrekturen $\propto1/r^3$) bewirkt, dass sich die Ellipse nicht genau schliesst; das Perihel wandert pro Umlauf ein kleines Stück weiter.<br><br>
<b>Zusammenhang:</b> Heute bestimmt man so auch Exoplaneten (Störungen des Sterns) und dunkle Materie (Rotationskurven, 7.4.3).`,
    derivation: R`Grössenordnung des Merkur-Effekts:
<ol class="fc-steps">
<li>Umläufe pro Jahrhundert: $100\,\text{a}/0{,}24\,\text{a}\approx415$<em>Merkurs Umlaufzeit $0{,}24\,\text{a}$ (Tab. 7.1).</em></li>
<li>Drehung pro Umlauf: $\dfrac{43''}{415}\approx0{,}10''$<em>Der relativistische Anteil der Periheldrehung pro Umlauf.</em></li>
<li>$0{,}10'' = 0{,}10\cdot\dfrac{\pi}{180\cdot3600}\,\text{rad}\approx5\cdot10^{-7}\,\text{rad}$<em>Umrechnung in Bogenmass.</em></li>
<li>Theorie: $\Delta\varphi\approx\dfrac{6\pi G_NM}{c^2a(1-\varepsilon^2)}\approx5\cdot10^{-7}\,\text{rad}$<em>Formel der ART (nicht im Skript): mit $a = 5{,}79\cdot10^{10}\,\text{m}$, $\varepsilon = 0{,}206$ passt die Grössenordnung.</em></li>
</ol>`,
    example: R`<b>Gesamte Periheldrehung</b> des Merkur (von der Erde aus beobachtet): rund $5600''$ pro Jahrhundert. Davon stammen etwa $5025''$ von der Präzession des Koordinatensystems (Erdachse) und etwa $532''$ von Störungen durch die anderen Planeten (Newton). Es bleiben die rätselhaften $43''$.<br><br>
<b>Neptun 1846:</b> Galle fand ihn innerhalb von etwa $1^\circ$ der von Leverrier vorhergesagten Position, in der ersten Nacht der Suche.`,
    counterexample: R`<b>„Vulkan“:</b> Nach dem Neptun-Erfolg vermutete Leverrier auch beim Merkur einen inneren, unentdeckten Planeten. Er wurde nie gefunden. Dieselbe Strategie („unbekannte Masse“) führte hier in die Irre, weil diesmal das Kraftgesetz selbst nicht exakt war.`,
    pitfalls: R`<ul><li>Die gesamte beobachtete Periheldrehung der Relativitätstheorie zuschreiben; es sind nur $43''$ der etwa $5600''$.</li>
<li>Bogensekunden pro Jahrhundert mit pro Jahr verwechseln.</li>
<li>Annehmen, die Neptun-Entdeckung habe die Newton’sche Theorie widerlegt; sie hat sie bestätigt.</li></ul>`
  },
  {
    id: "ph7_effektives_potential",
    title: "Effektives Gravitationspotential und Bahnformen",
    category: "7.3 Das effektive Gravitationspotential",
    type: "konzept",
    front: R`Was ist das <b>effektive Potential</b> $E_p^\text{eff}(r)$ im Gravitationsfeld? Wo liegt sein Minimum, und wie liest man daraus für gegebene Energie die möglichen Bahnen (gebunden, Kreis, Streuung) und die Umkehrpunkte ab?`,
    back: R`Kinetische Energie in Radial- und Winkelanteil zerlegt (7.44–7.46):
$$T_r = \tfrac12m\dot r^2,\qquad T_\varphi = \frac{L^2}{2mr^2}$$
Bei konstantem $L$ hängt $T_\varphi$ nur von $r$ ab und wird dem Potential zugeschlagen:
$$E_p^\text{eff} := E_p(r) + \frac{L^2}{2mr^2} = -G_N\frac{mM}{r} + \frac{L^2}{2mr^2}\qquad(7.47,\,7.48)$$
Minimum ($dE_p^\text{eff}/dr = 0$):
$$r_0 = \frac{L^2}{G_Nm^2M},\qquad E_0 = E_p^\text{eff}(r_0) = -\frac{G_N^2m^3M^2}{2L^2}\qquad(7.49)$$
Radiale kinetische Energie $T(r) = E - E_p^\text{eff}(r)\ge0$ (7.50):
<ul><li>$E = E_1\lt0$: gebunden, Bewegung zwischen $r_A = a(1-\varepsilon)$ (Perihel) und $r_B = a(1+\varepsilon)$ (Aphel)</li>
<li>$E = E_0$: $r = r_0$ fest, also Kreisbahn</li>
<li>$E = E_2>0$: nicht gebunden, minimaler Abstand $r_\text{min}$, Hyperbel (Streuung)</li></ul>`,
    meta: "Skript: Abschnitt 7.3, Gl. (7.44)–(7.50), Abb. 7.3, S. 171–172",
    explanation: R`<b>Intuition:</b> Der Drehimpuls wirkt wie eine abstossende „Zentrifugalbarriere“ $\propto1/r^2$: Je näher der Körper kommt, desto schneller muss er (bei festem $L$) tangential laufen, und diese Energie fehlt dann für die Radialbewegung. Deshalb stürzt ein Planet mit $L\neq0$ nie in die Sonne.<br><br>
<b>Methode:</b> Ein 3D-Problem wird zu einer 1D-Bewegung in $r$ im Potential $E_p^\text{eff}$. Man zeichnet eine waagrechte Linie bei der Gesamtenergie $E$; wo sie über der Kurve liegt, darf sich der Körper aufhalten, ihre Schnittpunkte sind die Umkehrpunkte der Radialbewegung.<br><br>
<b>Abhängigkeiten:</b> Bei grossen $r$ dominiert $-1/r$ (anziehend), bei kleinen $r$ dominiert $+1/r^2$ (abstossend). $r_0\propto L^2$: mehr Drehimpuls ergibt eine weiter aussen liegende Kreisbahn.<br><br>
<b>Zusammenhang:</b> Dieselbe Methode beschreibt Molekülschwingungen, die Streuung von α-Teilchen (Rutherford) und Bahnen um Schwarze Löcher (dort hat das effektive Potential zusätzlich ein Maximum, also instabile Bahnen).`,
    derivation: R`Lage des Minimums und Umkehrpunkte:
<ol class="fc-steps">
<li>$\dfrac{dE_p^\text{eff}}{dr} = \dfrac{G_NmM}{r^2} - \dfrac{L^2}{mr^3} = 0$<em>Ableiten nach $r$ und nullsetzen.</em></li>
<li>$r_0 = \dfrac{L^2}{G_Nm^2M}$<em>Mit $r^3$ multiplizieren und auflösen (7.49).</em></li>
<li>$E_0 = -\dfrac{G_NmM}{r_0} + \dfrac{L^2}{2mr_0^2} = -\dfrac{G_N^2m^3M^2}{L^2} + \dfrac{G_N^2m^3M^2}{2L^2} = -\dfrac{G_N^2m^3M^2}{2L^2}$<em>$r_0$ einsetzen.</em></li>
<li>Umkehrpunkte: $E = -\dfrac{G_NmM}{r} + \dfrac{L^2}{2mr^2}$<em>Dort ist $\dot r = 0$: Die ganze Energie steckt im effektiven Potential.</em></li>
<li>$Er^2 + G_NmMr - \dfrac{L^2}{2m} = 0$<em>Mit $r^2$ multiplizieren: quadratische Gleichung in $r$; für $E\lt0$ zwei positive Lösungen $r_{A,B} = a(1\mp\varepsilon)$.</em></li>
</ol>`,
    example: R`<b>Kreisbahn als Spezialfall:</b> Für $E = E_0$ ist $\dot r = 0$ immer. Kontrolle mit Kräften: $\frac{mv^2}{r_0} = \frac{G_NmM}{r_0^2}$ mit $L = mvr_0$ liefert ebenfalls $r_0 = \frac{L^2}{G_Nm^2M}$ ✓.<br><br>
<b>Satellit</b> mit zu wenig tangentialer Geschwindigkeit: Bei gleicher Energie, aber kleinerem $L$ verschiebt sich die Zentrifugalbarriere nach innen; das Perigäum sinkt und kann in die Atmosphäre geraten.`,
    counterexample: R`<b>$L = 0$:</b> Ohne Drehimpuls gibt es keine Barriere; $E_p^\text{eff} = E_p = -G_NmM/r$, und der Körper fällt radial ins Zentrum. Die Aussage „man kann nicht in die Sonne stürzen“ gilt nur für $L\neq0$ (und eine punktförmige Sonne).`,
    pitfalls: R`<ul><li>Das effektive Potential mit dem echten Potential verwechseln; die Zentrifugalbarriere ist kinetische Energie.</li>
<li>Annehmen, das effektive Potential sei für alle Bahnen gleich; es hängt von $L$ ab.</li>
<li>$m^2$ statt $m^3$ in $E_0$ schreiben (Dimension prüfen).</li></ul>`
  },
  {
    id: "ph7_kugelschale",
    title: "Gravitationsfeld einer homogenen Kugelschale: innen null, aussen wie Punktmasse",
    category: "7.4 Gravitationsfeld ausgedehnter Körper",
    type: "herleitung",
    front: R`Berechne das Gravitationsfeld einer dünnen, homogenen Kugelschale (Radius $r$, Dicke $dr$, Dichte $\rho$) in einem Punkt im Abstand $a$ vom Zentrum. Zeige: Für $a\lt r$ ist das Feld <b>null</b>, für $a>r$ ist es das Feld einer <b>Punktmasse im Zentrum</b>.`,
    back: R`Massenelement und Feldbeitrag (Punkt $\vec a$ auf der $z$-Achse):
$$d^3m = r^2\rho\,d\cos\vartheta\,d\varphi\,dr,\qquad d^3\vec g = G_N\,d^3m\,\frac{\vec r-\vec a}{|\vec r-\vec a|^3}\qquad(7.51,\,7.52)$$
$|\vec r-\vec a| = r\sqrt{1-2\xi\cos\vartheta+\xi^2}$ mit $\xi := a/r$ (7.54–7.56). Die $\varphi$-Integration lässt nur die $z$-Komponente übrig (Rotationssymmetrie):
$$dg_z = 2\pi\rho\,G_N\,dr\int_{-1}^{1}\frac{\cos\vartheta-\xi}{(1-2\xi\cos\vartheta+\xi^2)^{3/2}}\,d\cos\vartheta\qquad(7.58\text{–}7.60)$$
Substitution $u = \sqrt{1-2\xi\cos\vartheta+\xi^2}$ (7.61–7.65):
<ul><li><b>innen</b> ($\xi\lt1$, Grenzen $1-\xi$ bis $1+\xi$): $dg_z = 0$ (7.66–7.72)</li>
<li><b>aussen</b> ($\xi>1$, Grenzen $\xi-1$ bis $\xi+1$): $dg_z = -\dfrac{4\pi\rho G_N\,dr}{\xi^2} = -\dfrac{G_N\,dm}{a^2}$ mit $dm = 4\pi r^2\rho\,dr$ (7.73–7.80)</li></ul>`,
    meta: "Skript: Abschnitt 7.4.1, Gl. (7.51)–(7.80), Abb. 7.4, S. 173–176",
    explanation: R`<b>Intuition (innen):</b> Steht man irgendwo in einer hohlen Kugelschale, zieht die nahe Wand stark, aber sie ist klein; die ferne Wand zieht schwach, ist aber gross. Bei $1/r^2$ heben sich beide Effekte exakt auf, weil die Fläche eines Kegelausschnitts genau wie $r^2$ wächst (Newtons geometrischer Beweis).<br><br>
<b>Intuition (aussen):</b> Von aussen betrachtet „sieht“ man nur die Gesamtmasse; jede kugelsymmetrische Verteilung wirkt wie eine Punktmasse im Zentrum. Deshalb durften wir bisher Erde und Sonne als Massenpunkte behandeln.<br><br>
<b>Verbindung zu Gauss:</b> Mit dem Gauss’schen Satz (Kap. 4.1.6) geht es in einer Zeile: Fluss von $\vec g$ durch eine Kugel vom Radius $a$ ist $-4\pi G_N\cdot$(eingeschlossene Masse). Innen ist die eingeschlossene Masse null, also $g = 0$.<br><br>
<b>Zusammenhang:</b> Dieselbe Rechnung gilt für die elektrische Kraft: Im Inneren einer geladenen leitenden Kugel ist das Feld null (Faraday-Käfig-Prinzip). Das „Schalen-Theorem“ ist Grundlage für 7.4.2 (Vollkugel) und 7.4.3 (Galaxien).`,
    derivation: R`Der entscheidende Integrationsschritt:
<ol class="fc-steps">
<li>$u^2 = 1-2\xi\cos\vartheta+\xi^2\Rightarrow d\cos\vartheta = -\dfrac{u\,du}{\xi}$<em>Differenzieren: $2u\,du = -2\xi\,d\cos\vartheta$ (7.61–7.63).</em></li>
<li>$\cos\vartheta-\xi = \dfrac{1-\xi^2-u^2}{2\xi}$<em>$\cos\vartheta = \frac{1+\xi^2-u^2}{2\xi}$ und $\xi$ abziehen (7.64, 7.65).</em></li>
<li>$dg_z = \dfrac{\pi\rho G_Ndr}{\xi^2}\displaystyle\int_{u_o}^{u_u}\left(\dfrac{1-\xi^2}{u^2}-1\right)du$<em>Einsetzen; der Integrand vereinfacht sich, Grenzen: $u_u = 1+\xi$ ($\cos\vartheta = -1$), $u_o = |1-\xi|$ ($\cos\vartheta = 1$) (7.68, 7.69).</em></li>
<li>$= -\dfrac{\pi\rho G_Ndr}{\xi^2}\left[\dfrac{1-\xi^2}{u}+u\right]_{u_o}^{u_u}$<em>Stammfunktion (7.70).</em></li>
<li>Innen ($u_o = 1-\xi$): $\left[(1-\xi)+(1+\xi)\right] - \left[(1+\xi)+(1-\xi)\right] = 0$<em>An beiden Grenzen hat die Klammer den Wert 2: $dg_z = 0$ (7.71, 7.72).</em></li>
<li>Aussen ($u_o = \xi-1$): Klammerdifferenz $= -4$, also $dg_z = -\dfrac{4\pi\rho G_Ndr}{\xi^2} = -\dfrac{G_N\,4\pi r^2\rho\,dr}{a^2}$<em>Mit $\xi = a/r$; das ist $-G_Ndm/a^2$ (7.75–7.80).</em></li>
</ol>`,
    example: R`<b>Hohlkugel-Gedankenexperiment:</b> Im Zentrum eines hohlen Planeten (oder an jedem anderen Punkt im Hohlraum) wäre man schwerelos, ohne zu fallen.<br><br>
<b>Erde von aussen:</b> Obwohl die Dichte von $\sim13\,\text{g/cm}^3$ im Kern bis $\sim3\,\text{g/cm}^3$ in der Kruste variiert (kugelsymmetrisch), ist das Feld ausserhalb exakt $G_NM/r^2$: $g(R_E) = 9{,}82\,\text{m/s}^2$ mit der Gesamtmasse.`,
    counterexample: R`<b>Nicht kugelsymmetrische Verteilungen:</b> Ein Würfel oder eine abgeplattete Erde wirken von aussen nicht exakt wie eine Punktmasse; es gibt Korrekturen, die mit dem Abstand schneller abfallen (Quadrupol $\propto1/r^4$ in der Kraft). Satellitenbahnen spüren diese Abplattung der Erde deutlich (Bahnpräzession).<br>
<b>Andere Kraftgesetze:</b> Bei $F\propto1/r^3$ wäre das Feld innen <i>nicht</i> null; das Schalen-Theorem hängt am $1/r^2$-Gesetz.`,
    pitfalls: R`<ul><li>Annehmen, im Inneren der Erde sei die Schwerkraft null; null ist sie nur im Inneren einer <i>Hohlschale</i>.</li>
<li>Die Grenzen bei der Substitution falsch setzen ($|1-\xi|$ ist für innen und aussen verschieden).</li>
<li>$a$ (Abstand des Feldpunkts) und $r$ (Radius der Schale) vertauschen.</li></ul>`
  },
  {
    id: "ph7_vollkugel",
    title: "Feld einer massiven Kugel: g ∝ r innen, g ∝ 1/r² aussen",
    category: "7.4 Gravitationsfeld ausgedehnter Körper",
    type: "herleitung",
    front: R`Berechne das spezifische Gravitationsfeld $\vec g(r)$ einer homogenen Kugel (Masse $M$, Radius $R$) innerhalb und ausserhalb. Welche Art von Kraft wirkt im Inneren, und was folgt für einen Tunnel durch die Erde?`,
    back: R`Kugel als Zwiebel aus Schalen. Für den Feldpunkt im Abstand $r$ tragen nur Schalen mit $r'\le r$ bei (äussere Schalen ergeben innen null, 7.4.1):
$$g(r) = \frac{G_N}{r^2}\int_0^r dm = \frac{G_N}{r^2}\int_0^r\rho\,4\pi r'^2dr' = \frac{4\pi}{3}\rho G_N\,r\qquad(7.81\text{–}7.83)$$
Mit $\rho = \frac{M}{4\pi R^3/3}$ (7.84):
$$\vec g(r) = \begin{cases}-\dfrac{G_NM}{R^3}\,r\,\hat r & r\le R\\[6pt]-\dfrac{G_NM}{r^2}\,\hat r & r\ge R\end{cases}\qquad(7.85,\,7.86)$$
Innen nimmt $g$ <b>linear</b> mit $r$ zu, bis zum Maximum an der Oberfläche; die Kraft ist vom Typ der <b>Federkraft</b> ($F\propto-r$). Aussen gilt das $1/r^2$-Gesetz der Punktmasse. (Die Dichte darf radial variieren, solange Kugelsymmetrie herrscht; dann ist innen $g = G_NM(r)/r^2$.)`,
    meta: "Skript: Abschnitt 7.4.2, Gl. (7.81)–(7.86), Abb. 7.5, S. 176–178",
    explanation: R`<b>Intuition:</b> Gräbt man sich in eine homogene Kugel hinein, zieht nur noch die Masse unter einem, und die äusseren Schalen heben sich auf. Diese innere Masse nimmt wie $r^3$ ab, der Abstand zum Zentrum wie $r$, also $g\propto r^3/r^2 = r$.<br><br>
<b>Abhängigkeiten:</b> innen $g\propto r$ (null im Zentrum), aussen $g\propto1/r^2$; Maximum an der Oberfläche, wo beide Formeln übereinstimmen ($G_NM/R^2$).<br><br>
<b>Erdtunnel:</b> Ein reibungsfreier Tunnel durch das Erdzentrum: $\ddot r = -\frac{G_NM}{R^3}r = -\frac{g}{R}r$, eine harmonische Schwingung mit $\omega = \sqrt{g/R}$. Erstaunlich: Die Periode ist genau die einer Satellitenbahn knapp über der Oberfläche.<br><br>
<b>Reale Erde:</b> Sie ist nicht homogen (dichter Kern). Darum nimmt $g$ beim Abstieg zunächst sogar leicht zu (bis zur Kern-Mantel-Grenze), statt linear abzufallen.<br><br>
<b>Zusammenhang:</b> Galaxienkerne (7.4.3) und das Potential im Inneren (eine Parabel, wie bei der Feder, Kap. 4.4.2.2).`,
    derivation: R`<ol class="fc-steps">
<li>$g(r) = \dfrac{G_NM(r)}{r^2}$, $M(r) = \displaystyle\int_0^r\rho\,4\pi r'^2\,dr'$<em>Nur die eingeschlossene Masse wirkt, und zwar wie eine Punktmasse im Zentrum (Schalentheorem, 7.81, 7.82).</em></li>
<li>$M(r) = \dfrac{4\pi}{3}\rho r^3$ (homogen)<em>Integral von $r'^2$.</em></li>
<li>$g(r) = \dfrac{4\pi}{3}\rho G_N\,r$<em>Linear in $r$ (7.83).</em></li>
<li>$\rho = \dfrac{3M}{4\pi R^3}\Rightarrow g(r) = \dfrac{G_NM}{R^3}r$<em>Dichte durch Gesamtmasse ersetzen (7.84, 7.85).</em></li>
<li>Tunnel: $m\ddot r = -m\dfrac{G_NM}{R^3}r\Rightarrow\omega^2 = \dfrac{G_NM}{R^3} = \dfrac gR$<em>Federkraft-Typ: harmonische Schwingung (Kap. 3.9.3).</em></li>
<li>$T = 2\pi\sqrt{R/g} = 2\pi\sqrt{\dfrac{6{,}371\cdot10^{6}}{9{,}81}}\,\text{s} = 84{,}4\,\text{min}$<em>Halbe Periode (Durchquerung): 42 min.</em></li>
</ol>`,
    example: R`<b>Halber Erdradius</b> (homogene Erde): $g = 4{,}9\,\text{m/s}^2$; im Zentrum null.<br>
<b>Tunnel-Höchstgeschwindigkeit</b> im Zentrum: $v_\text{max} = \omega R = \sqrt{gR} = 7{,}9\,\text{km/s}$, genau die erste kosmische Geschwindigkeit (Kreisbahn an der Oberfläche).`,
    counterexample: R`<b>Reale Erde ist nicht homogen:</b> Die mittlere Dichte ($5{,}5\,\text{g/cm}^3$) ist etwa doppelt so gross wie die der Kruste ($2{,}7\,\text{g/cm}^3$). Deshalb ist $g$ in 2900 km Tiefe (Kern-Mantel-Grenze) mit etwa $10{,}7\,\text{m/s}^2$ sogar <i>grösser</i> als an der Oberfläche. Die lineare Abnahme gilt nur für homogene Kugeln.`,
    pitfalls: R`<ul><li>$g\propto1/r^2$ auch im Inneren verwenden; dann würde $g$ zum Zentrum hin divergieren.</li>
<li>Die gesamte Masse $M$ statt der eingeschlossenen $M(r)$ einsetzen.</li>
<li>Vergessen, dass das Ergebnis Kugelsymmetrie voraussetzt.</li></ul>`
  },
  {
    id: "ph7_rotationskurven",
    title: "Rotationskurven von Galaxien und Dunkle Materie",
    category: "7.4 Gravitationsfeld ausgedehnter Körper",
    type: "experiment",
    front: R`Welche Bahngeschwindigkeit $v(r)$ erwartet man für Sterne in einer Galaxie mit homogenem, kugelförmigem Kern (Masse $M_K$, Radius $R_K$) innerhalb und ausserhalb des Kerns? Was wird tatsächlich gemessen, und welche Massenverteilung erklärt eine flache Rotationskurve?`,
    back: R`<b>Im Kern</b> ($r\le R_K$): $F_G = G_N\frac{M_K}{R_K^3}mr = m\frac{v^2}{r}$ (7.87–7.89), also
$$v = \sqrt{\frac{G_NM_K}{R_K^3}}\,r = C_1r,\qquad v_\text{max} = \sqrt{\frac{G_NM_K}{R_K}}\qquad(7.90,\,7.91)$$
<b>Ausserhalb:</b> $G_N\frac{M_K}{r^2}m = m\frac{v^2}{r}$:
$$v = \sqrt{G_NM_K}\,\frac{1}{\sqrt r} = \frac{C_2}{\sqrt r}\qquad(7.92,\,7.93)$$
<b>Messung</b> (Dopplerverschiebung von Fraunhoferlinien): praktisch <b>konstantes</b> $v$ weit ausserhalb des Kerns. Es muss mehr, nicht leuchtende Masse geben: <b>Dunkle Materie</b>.<br><br>
<b>Modell</b> (Halo): $\rho_\text{DM} = \rho_0/r^2$ (7.94), also $M_\text{DM}(r) = 4\pi\rho_0r$ (7.95; das Skript schreibt $\frac{4\pi}{3}\rho_0r$) und
$$v^2 = \frac{G_NM_\text{DM}(r)}{r} = \text{const}\qquad(7.96\text{–}7.99)$$
Die Existenz Dunkler Materie ist plausibel, aber noch nicht endgültig bewiesen (direkte Suche z. B. am CERN, kosmologische Missionen).`,
    meta: "Skript: Abschnitt 7.4.3, Gl. (7.87)–(7.99), Abb. 7.6, S. 178–181",
    explanation: R`<b>Intuition:</b> Die Geschwindigkeit auf einer Kreisbahn verrät die Masse <i>innerhalb</i> der Bahn: $M(r) = \frac{v^2r}{G_N}$. Wenn $v$ nach aussen nicht abfällt, muss $M(r)$ linear mit $r$ weiterwachsen, auch dort, wo kaum noch Sterne leuchten.<br><br>
<b>Erwartung vs. Messung:</b> Kern: starre Rotation ($v\propto r$, wie ein Karussell); aussen: Kepler-Abfall ($v\propto1/\sqrt r$, wie die Planeten). Gemessen: flache Kurven, $v\approx\text{const}$ bis weit hinaus.<br><br>
<b>Warum $\rho\propto1/r^2$?</b> Dann wächst die Masse in einer Kugelschale der Dicke $dr$ wie $4\pi r^2\rho\,dr = 4\pi\rho_0\,dr$, also unabhängig von $r$, und $M(r)\propto r$.<br><br>
<b>Zusammenhang:</b> Dunkle Materie macht nach heutigem Verständnis etwa 23 % des Universums aus (Kap. 1.1, Abb. 1.3), etwa fünfmal so viel wie gewöhnliche Materie. Das ist ein aktuelles Beispiel dafür, wie Abweichungen von der Erwartung (wie beim Uranus, 7.2) zu neuen Hypothesen führen.`,
    derivation: R`Flache Rotationskurve aus der $1/r^2$-Dichte:
<ol class="fc-steps">
<li>$M_\text{DM}(r) = \displaystyle\int_0^r\frac{\rho_0}{r'^2}4\pi r'^2\,dr' = 4\pi\rho_0r$<em>Eingeschlossene Masse wächst linear mit $r$.</em></li>
<li>$F_G = \dfrac{G_NM_\text{DM}(r)m}{r^2} = \dfrac{4\pi\rho_0G_Nm}{r}$<em>Schalentheorem: nur die eingeschlossene Masse zählt (7.96, 7.97).</em></li>
<li>$\dfrac{4\pi\rho_0G_Nm}{r} = \dfrac{mv^2}{r}$<em>Gravitation liefert die Zentripetalkraft (7.98).</em></li>
<li>$v = \sqrt{4\pi\rho_0G_N} = \text{const}$<em>$r$ und $m$ kürzen sich: flache Rotationskurve (7.99; im Skript mit Vorfaktor $\frac{4\pi}{3}$).</em></li>
</ol>`,
    example: R`<b>Milchstrasse:</b> Die Sonne läuft mit $v\approx220\,\text{km/s}$ im Abstand $r\approx8\,\text{kpc} = 2{,}5\cdot10^{20}\,\text{m}$ um das Zentrum. Eingeschlossene Masse: $M = \frac{v^2r}{G_N} = \frac{(2{,}2\cdot10^{5})^2\cdot2{,}47\cdot10^{20}}{6{,}67\cdot10^{-11}}\,\text{kg}\approx1{,}8\cdot10^{41}\,\text{kg}\approx9\cdot10^{10}\,M_\odot$.<br>
Da $v$ bis über $20\,\text{kpc}$ fast gleich bleibt, ist die Masse innerhalb von $20\,\text{kpc}$ etwa 2,5-mal so gross, weit mehr als alle sichtbaren Sterne.`,
    counterexample: R`<b>Sonnensystem:</b> Dort fällt $v\propto1/\sqrt r$ exakt ab (Tab. 7.1: Merkur $47{,}9$, Neptun $5{,}4\,\text{km/s}$), weil praktisch die ganze Masse in der Sonne sitzt. Die flache Kurve ist also kein allgemeines Merkmal von Gravitationssystemen, sondern ein Hinweis auf verteilte, unsichtbare Masse.<br>
<b>Alternative Erklärung:</b> Modifizierte Gravitationsgesetze (z. B. MOND) versuchen, flache Kurven ohne Dunkle Materie zu erklären. Sie sind (noch) nicht so erfolgreich, zeigen aber, dass die Interpretation nicht zwingend ist.`,
    pitfalls: R`<ul><li>$v\propto1/\sqrt r$ auch im Kern ansetzen.</li>
<li>Glauben, Dunkle Materie sei direkt nachgewiesen.</li>
<li>Die gesamte Galaxienmasse in die Formel einsetzen statt der Masse innerhalb von $r$.</li></ul>`
  },

  // ========================================================================
  // ERGÄNZUNGEN: typische Prüfungsaufgaben und Brücken zu Physik II
  // ========================================================================
  {
    id: "ph7_satellitenbahnen",
    title: "Satellitenbahnen: Kreisbahngeschwindigkeit, geostationäre Bahn, Fluchtgeschwindigkeit, Bahnenergie",
    category: "7.2 Himmelsmechanik",
    type: "beispiel",
    front: R`Leite für einen Satelliten (Masse $m$) um die Erde (Masse $M$) die <b>Kreisbahngeschwindigkeit</b>, die <b>Umlaufzeit</b>, die Bahnhöhe einer <b>geostationären</b> Bahn, die <b>Fluchtgeschwindigkeit</b> und die <b>Gesamtenergie</b> einer Kreisbahn her. Wie viel Energie braucht man, um von einer niedrigen auf eine höhere Bahn zu wechseln?`,
    back: R`<b>Kreisbahn</b> (Gravitation = Zentripetalkraft):
$$\frac{GMm}{r^2} = \frac{mv^2}r\;\Rightarrow\;v_K = \sqrt{\frac{GM}r},\qquad T = \frac{2\pi r}{v_K} = 2\pi\sqrt{\frac{r^3}{GM}}$$
(3. Kepler’sches Gesetz, 7.39–7.41.) <b>Geostationär:</b> $T$ = siderischer Tag $86\,164\,\text{s}$, Äquatorebene: $r = \left(\frac{GMT^2}{4\pi^2}\right)^{1/3} = 42\,164\,\text{km}$.<br><br>
<b>Energie</b> der Kreisbahn:
$$E = \tfrac12mv_K^2-\frac{GMm}r = -\frac{GMm}{2r} = -T_\text{kin}\qquad(\text{Ellipse: }E = -\tfrac{GMm}{2a})$$
<b>Fluchtgeschwindigkeit</b> von der Oberfläche ($E = 0$): $v_F = \sqrt{\frac{2GM}R} = \sqrt2\,v_K(R) = 11{,}2\,\text{km/s}$.<br>
<b>Bahnwechsel</b> $r_1\to r_2$: $\Delta E = \frac{GMm}2\left(\frac1{r_1}-\frac1{r_2}\right)$.`,
    meta: "Ergänzung (typische Prüfungsaufgabe); baut auf Abschnitten 7.2 (Gl. 7.39–7.41, Energie der Ellipse), 7.3 (effektives Potential) und 4.4.2.4 (Gravitationspotential) auf",
    explanation: R`<b>Intuition:</b> Ein Satellit fällt ständig, verfehlt aber die Erde, weil er seitwärts schnell genug ist. Höhere Bahnen brauchen weniger Geschwindigkeit ($v_K\propto1/\sqrt r$), aber mehr Energie (weniger negative potentielle Energie).<br><br>
<b>Paradox des Abbremsens:</b> Reibung in der Hochatmosphäre senkt die Energie $E = -GMm/(2r)$; dadurch wird $r$ kleiner und $v_K$ <i>grösser</i>. Bremsen macht Satelliten schneller. Grund: $T_\text{kin} = -E$ (Virialsatz); Energieverlust erhöht die kinetische Energie, während die potentielle doppelt so stark sinkt.<br><br>
<b>Abhängigkeiten:</b> $T\propto r^{3/2}$; $v_K$ und $T$ unabhängig von $m$ (Äquivalenzprinzip). $v_F = \sqrt2v_K$ an derselben Stelle.<br><br>
<b>Zusammenhang:</b> Effektives Potential (7.3): $E\lt0$ gebunden (Ellipse/Kreis), $E = 0$ Parabel, $E\gt0$ Hyperbel. Für die Sonne: Erdbahn $v\approx30\,\text{km/s}$.`,
    derivation: R`Energie der Kreisbahn:
<ol class="fc-steps">
<li>$mv_K^2 = \dfrac{GMm}r$<em>Kraftgleichung mit $r$ multipliziert.</em></li>
<li>$T_\text{kin} = \tfrac12mv_K^2 = \dfrac{GMm}{2r}$<em>Kinetische Energie.</em></li>
<li>$U = -\dfrac{GMm}r = -2T_\text{kin}$<em>Potentielle Energie (Nullpunkt im Unendlichen).</em></li>
<li>$E = T_\text{kin}+U = -\dfrac{GMm}{2r}$<em>Gebunden: $E\lt0$.</em></li>
<li>$E = 0$ an der Oberfläche: $\tfrac12mv_F^2 = \dfrac{GMm}R\Rightarrow v_F = \sqrt{2GM/R}$<em>Gerade noch ungebunden.</em></li>
</ol>`,
    example: R`ISS-ähnliche Bahn ($400\,\text{km}$ Höhe, $r = 6771\,\text{km}$, $GM = 3{,}986\cdot10^{14}\,\text{m}^3/\text{s}^2$): $v_K = 7{,}67\,\text{km/s}$, $T = 92\,\text{min}$.<br>
Geostationär: Höhe $35\,790\,\text{km}$, $v = 3{,}07\,\text{km/s}$.<br>
$1000\,\text{kg}$ von $400\,\text{km}$ auf geostationär: $\Delta E = 2{,}5\cdot10^{10}\,\text{J}$ (ohne Antriebsverluste).`,
    counterexample: R`<b>Fluchtgeschwindigkeit hängt nicht von der Richtung ab</b> (Energiebetrachtung), solange man nicht auf die Erde zielt; und sie gilt ohne Luftwiderstand. Andererseits braucht man für eine Kreisbahn <i>tangentiale</i> Geschwindigkeit – senkrecht nach oben mit $7{,}9\,\text{km/s}$ fällt man einfach zurück.`,
    pitfalls: R`<ul><li>Höhe über Grund statt Abstand vom Erdmittelpunkt einsetzen.</li>
<li>Siderischen Tag ($86\,164\,\text{s}$) und Sonnentag ($86\,400\,\text{s}$) verwechseln (kleiner Fehler, aber prüfungsrelevant).</li>
<li>Glauben, ein höherer Satellit sei schneller.</li></ul>`
  },
  {
    id: "ph7_gauss_gravitation",
    title: "Gauss’scher Satz für das Gravitationsfeld: ∮g·dA = −4πG M_innen",
    category: "7.4 Gravitationsfeld ausgedehnter Körper",
    type: "herleitung",
    front: R`Zeige mit dem Gauss’schen Satz (4.1.6), dass der Fluss des Gravitationsfeldes $\vec g$ durch jede geschlossene Fläche $-4\pi G\,M_\text{innen}$ ist. Leite daraus die Ergebnisse für Kugelschale und Vollkugel (7.4.1, 7.4.2) in zwei Zeilen her. Warum ist das eine wichtige Vorbereitung auf die Elektrostatik?`,
    back: R`Punktmasse $M$: $\vec g = -\frac{GM}{r^2}\hat r$. Fluss durch eine Kugel vom Radius $r$:
$$\oint\vec g\cdot d\vec A = -\frac{GM}{r^2}\cdot4\pi r^2 = -4\pi GM$$
unabhängig von $r$; wegen $\nabla\cdot\vec g = 0$ ausserhalb der Masse gilt das für jede umschliessende Fläche. Superposition:
$$\oint_{\partial V}\vec g\cdot d\vec A = -4\pi G\,M_\text{innen},\qquad\nabla\cdot\vec g = -4\pi G\rho$$
<b>Kugelsymmetrische Masse:</b> $|\vec g|$ ist auf Kugeln konstant und radial, also $g(r)\cdot4\pi r^2 = -4\pi GM(r)$:
$$g(r) = -\frac{GM(r)}{r^2}$$
<ul><li>Kugelschale innen: $M(r) = 0\Rightarrow g = 0$; aussen: wie Punktmasse.</li>
<li>Homogene Vollkugel innen: $M(r) = M\frac{r^3}{R^3}\Rightarrow g = -\frac{GM}{R^3}r\propto r$.</li></ul>`,
    meta: "Ergänzung (Brücke zu Physik II); verbindet Abschnitt 4.1.5–4.1.6 (Fluss, Divergenz, Gauss) mit 7.4.1–7.4.2 (Gl. 7.51–7.86)",
    explanation: R`<b>Intuition:</b> Feldlinien beginnen und enden nur an Massen (bei der Gravitation: sie enden in Massen). Zählt man, wie viele Feldlinien durch eine geschlossene Hülle gehen, misst man die eingeschlossene Masse – egal wie die Hülle aussieht und wo die Masse darin sitzt.<br><br>
<b>Warum $1/r^2$ entscheidend ist:</b> Die Kugeloberfläche wächst mit $r^2$, das Feld fällt mit $1/r^2$: Der Fluss ist konstant. Bei jedem anderen Kraftgesetz gäbe es keinen Gauss’schen Satz in dieser Form, und das Innere einer Schale wäre nicht feldfrei.<br><br>
<b>Abhängigkeiten:</b> Innen in einer homogenen Kugel wächst $g$ linear (nur die Masse innerhalb $r$ zählt). Daraus folgt: Ein Tunnel durch die Erde ergäbe eine harmonische Schwingung mit $T = 2\pi\sqrt{R^3/(GM)}\approx84\,\text{min}$ (Ergänzung).<br><br>
<b>Zusammenhang (Physik II):</b> Mit $\vec g\to\vec E$, $-4\pi G\to1/\varepsilon_0$, $M\to Q$ wird daraus das Gauss’sche Gesetz der Elektrostatik $\oint\vec E\cdot d\vec A = Q/\varepsilon_0$ – die erste Maxwell-Gleichung. Wer es hier verstanden hat, kann es dort sofort anwenden (Kugel, Zylinder, Platte).`,
    derivation: R`Mittlere Dichte der Erde aus $g$ (Anwendung):
<ol class="fc-steps">
<li>$g(R)\cdot4\pi R^2 = 4\pi GM$<em>Gauss an der Erdoberfläche (Beträge).</em></li>
<li>$M = \tfrac43\pi R^3\bar\rho$<em>Mittlere Dichte $\bar\rho$.</em></li>
<li>$g = \tfrac43\pi G\bar\rho R$<em>Einsetzen.</em></li>
<li>$\bar\rho = \dfrac{3g}{4\pi GR} = \dfrac{3\cdot9{,}81}{4\pi\cdot6{,}674\cdot10^{-11}\cdot6{,}371\cdot10^6}\,\dfrac{\text{kg}}{\text{m}^3} = 5510\,\dfrac{\text{kg}}{\text{m}^3}$<em>Etwa doppelt so dicht wie Gestein an der Oberfläche: Der Erdkern ist schwer (Eisen).</em></li>
</ol>`,
    example: R`Unendlich lange Zylinder oder Ebenen lassen sich genauso behandeln: Für eine unendlich ausgedehnte Massenschicht mit Flächendichte $\sigma$ ist $|g| = 2\pi G\sigma$, unabhängig vom Abstand – das Gegenstück zum homogenen Feld eines Plattenkondensators.<br>
Feld in halber Erdtiefe (homogene Erde angenommen): $g/2 = 4{,}9\,\text{m/s}^2$.`,
    counterexample: R`<b>Gauss ohne Symmetrie:</b> Der Satz gilt immer, hilft beim Ausrechnen von $\vec g$ aber nur, wenn die Symmetrie erlaubt, $|\vec g|$ vor das Integral zu ziehen. Für einen Würfel oder einen Ring liefert er nur den Gesamtfluss, nicht das Feld an einem Punkt.`,
    pitfalls: R`<ul><li>Den Satz auf Flächen anwenden, auf denen $|\vec g|$ nicht konstant oder nicht senkrecht ist, und $g$ trotzdem herausziehen.</li>
<li>Die gesamte Masse statt der eingeschlossenen Masse $M(r)$ einsetzen.</li>
<li>Vorzeichen: Gravitationsfeld zeigt nach innen, Fluss negativ.</li></ul>`
  }
];
})();
