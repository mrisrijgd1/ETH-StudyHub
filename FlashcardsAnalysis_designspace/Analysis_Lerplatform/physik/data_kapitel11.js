/* ==========================================================================
   PHYSIK I – KAPITEL 11 (Anhang): Differential- und Integralrechnung, Vektoren
   Ableitung, Taylorreihe, partielle Ableitung, Integral, Vektoralgebra,
   Skalarprodukt, Vektorprodukt, Basis und Komponenten, Basiswechsel,
   Ableitung von Vektoren, Polar-, Zylinder- und Kugelkoordinaten
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_11 = [
  {
    id: "ph11_ableitung_taylor",
    title: "Ableitung und Taylorreihe: lineare und quadratische Näherungen",
    category: "11.1 Differential- und Integralrechnung",
    type: "definition",
    front: R`Wie ist die <b>Ableitung</b> $f'(x_0)$ definiert, und was bedeutet sie geometrisch? Wie lautet die <b>Taylorreihe</b> von $f$ um $x_0$, und warum ist sie in der Physik so wichtig?`,
    back: R`<b>Ableitung</b> = Steigung der Tangente im Punkt $(x_0,y_0)$ (Abb. 11.1):
$$y'(x_0) := \frac{df}{dx}\Big|_{x_0} := \lim_{x_1\to x_0}\frac{f(x_0)-f(x_1)}{x_0-x_1} = \lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}\qquad(11.1,\,11.2)$$
<b>Taylorreihe</b> um $x_0$ mit $\Delta x = x-x_0$:
$$f(x) = f(x_0)+\Delta x\,\frac{df}{dx}\Big|_{x_0}+\frac12(\Delta x)^2\frac{d^2f}{dx^2}\Big|_{x_0}+\dots = f(x_0)+\sum_{n=1}^\infty\frac1{n!}(\Delta x)^n\frac{d^nf}{dx^n}\Big|_{x_0}\qquad(11.3,\,11.4)$$
Abbrechen nach dem linearen Term: Tangentennäherung; nach dem quadratischen: Parabelnäherung.`,
    meta: "Skript: Abschnitte 11.1.1–11.1.2, Gl. (11.1)–(11.4), Abb. 11.1, Anhang S. 1–2",
    explanation: R`<b>Intuition:</b> Jede glatte Funktion sieht unter der Lupe wie eine Gerade aus (Ableitung), etwas weniger stark vergrössert wie eine Parabel (zweite Ableitung). Die Taylorreihe sammelt diese immer feineren Korrekturen auf.<br><br>
<b>Warum zentral in der Physik?</b> Fast jede „kleine“ Näherung ist eine abgebrochene Taylorreihe: $\sin\varphi\approx\varphi$ (Pendel), $\cos\varphi\approx1-\varphi^2/2$, $\sqrt{1+x}\approx1+x/2$, $U(r)\approx U_0+\tfrac12k(r-r_0)^2$ (harmonischer Oszillator, 9.2.2), $1-e^{-T/\tau}\approx T/\tau$ (Güte, 9.3.3).<br><br>
<b>Abhängigkeiten:</b> Der Fehler der Näherung $n$-ter Ordnung ist von der Ordnung $(\Delta x)^{n+1}$: Halbiert man $\Delta x$, wird der Fehler einer linearen Näherung etwa viermal kleiner.<br><br>
<b>Zusammenhang:</b> In mehreren Variablen kommen partielle Ableitungen hinzu (11.1.3). Die Taylorreihe von $e^{i\varphi}$ liefert die Euler-Formel $e^{i\varphi} = \cos\varphi+i\sin\varphi$ (Kap. 9, 12).`,
    derivation: R`Taylorreihe von $\sqrt{1+x}$ um $x_0 = 0$:
<ol class="fc-steps">
<li>$f(0) = 1$<em>Funktionswert.</em></li>
<li>$f'(x) = \tfrac12(1+x)^{-1/2}\Rightarrow f'(0) = \tfrac12$<em>Erste Ableitung (Kettenregel).</em></li>
<li>$f''(x) = -\tfrac14(1+x)^{-3/2}\Rightarrow f''(0) = -\tfrac14$<em>Zweite Ableitung.</em></li>
<li>$\sqrt{1+x}\approx1+\tfrac12x-\tfrac18x^2$<em>In (11.3) einsetzen: $\tfrac12\cdot(-\tfrac14) = -\tfrac18$.</em></li>
<li>$x = 0{,}1$: Näherung $1{,}04875$, exakt $1{,}04881$<em>Fehler $6\cdot10^{-5}$, von der Ordnung $x^3$.</em></li>
</ol>`,
    example: R`$\sin0{,}2 = 0{,}19867$; Näherung $\sin x\approx x$ gibt $0{,}2$ (Fehler $0{,}7\,\%$).<br>
$e^x\approx1+x+\tfrac12x^2$: $e^{0{,}1} = 1{,}10517$, Näherung $1{,}105$.<br>
Pendelenergie: $mg\ell(1-\cos\varphi)\approx\tfrac12mg\ell\varphi^2$ – daraus die harmonische Pendelschwingung.`,
    counterexample: R`<b>Nicht jede Funktion ist taylorentwickelbar:</b> $|x|$ hat bei $0$ keine Ableitung (Knick), $\sqrt x$ hat bei $0$ eine unendliche Steigung. Und die Taylorreihe von $\frac1{1-x}$ um $0$ ($1+x+x^2+\dots$) konvergiert nur für $|x|\lt1$: Ausserhalb liefert sie Unsinn, egal wie viele Terme man nimmt.`,
    pitfalls: R`<ul><li>Den Faktor $\frac1{n!}$ vergessen.</li>
<li>Die Ableitungen an der Stelle $x$ statt an der Entwicklungsstelle $x_0$ auswerten.</li>
<li>Eine Näherung weit ausserhalb ihres Gültigkeitsbereichs verwenden ($\sin\varphi\approx\varphi$ bei $90^\circ$).</li></ul>`
  },
  {
    id: "ph11_partielle_ableitung",
    title: "Partielle Ableitung und totales Differential",
    category: "11.1 Differential- und Integralrechnung",
    type: "definition",
    front: R`Was ist die <b>partielle Ableitung</b> $\partial f/\partial x$ einer Funktion mehrerer Variablen? Berechne sie für $f = xyz$ und $f = \sqrt{x^2+y^2}$. Wie setzt sich daraus die Gesamtänderung $df$ zusammen?`,
    back: R`$\partial f/\partial x$: Ableitung von $f(x,y,z,\dots)$ nach $x$, wobei alle anderen Variablen <b>konstant gehalten</b> werden.<br><br>
<b>Beispiele:</b>
$$f = xyz\;\Rightarrow\;\frac{\partial f}{\partial x} = yz,\quad\frac{\partial f}{\partial z} = xy\qquad(11.5)$$
$$f = \sqrt{x^2+y^2}\;\Rightarrow\;\frac{\partial f}{\partial x} = \frac1{2\sqrt{x^2+y^2}}\cdot2x = \frac x{\sqrt{x^2+y^2}}\qquad(11.6)$$
<b>Totales Differential</b> (Gesamtänderung bei gleichzeitiger kleiner Änderung aller Variablen):
$$df = \frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy+\frac{\partial f}{\partial z}dz$$`,
    meta: "Skript: Abschnitt 11.1.3, Gl. (11.5)–(11.6), Anhang S. 1–3; Anwendung z. B. Gl. (10.110)",
    explanation: R`<b>Intuition:</b> Auf einer hügeligen Landschaft $h(x,y)$ ist $\partial h/\partial x$ die Steigung, wenn man genau nach Osten geht, $\partial h/\partial y$ die Steigung nach Norden. Geht man schräg, addieren sich die Beiträge (totales Differential).<br><br>
<b>Physik:</b> Zustandsgrössen hängen von mehreren Variablen ab, $p(V,T)$, $U(V,T)$, $H(V,T)$. Welche Variable konstant gehalten wird, muss immer angegeben werden; in der Thermodynamik schreibt man das als Index, z. B. $(\partial H/\partial T)_p$.<br><br>
<b>Geometrische Bedeutung:</b> Der Vektor der partiellen Ableitungen (Gradient) zeigt in Richtung des steilsten Anstiegs und steht senkrecht auf den Niveauflächen. Beispiel: $\nabla\sqrt{x^2+y^2} = \vec r/r$, der radiale Einheitsvektor. Beim Kreisel steht der Drehimpuls senkrecht auf dem Trägheitsellipsoid, weil er parallel zum Gradienten ist (13.1.4.3).<br><br>
<b>Zusammenhang:</b> Beim Joule-Thomson-Effekt folgt die Temperaturänderung aus $dH = \frac{\partial H}{\partial V}dV+\frac{\partial H}{\partial T}dT = 0$ (10.110).`,
    derivation: R`Totales Differential der idealen Gasgleichung $p(V,T) = \nu RT/V$:
<ol class="fc-steps">
<li>$\dfrac{\partial p}{\partial T} = \dfrac{\nu R}V$<em>$V$ fest halten.</em></li>
<li>$\dfrac{\partial p}{\partial V} = -\dfrac{\nu RT}{V^2} = -\dfrac pV$<em>$T$ fest halten.</em></li>
<li>$dp = \dfrac{\nu R}V\,dT-\dfrac pV\,dV$<em>Totales Differential.</em></li>
<li>$\dfrac{dp}p = \dfrac{dT}T-\dfrac{dV}V$<em>Relative Änderungen addieren sich.</em></li>
<li>$T$ $+1\,\%$, $V$ $+2\,\%$ $\Rightarrow$ $p$ $-1\,\%$<em>Schnelle Fehler- und Änderungsabschätzung.</em></li>
</ol>`,
    example: R`$f = \sqrt{x^2+y^2}$ bei $(3,4)$: $\partial f/\partial x = 3/5$, $\partial f/\partial y = 4/5$. Ein Schritt $(dx,dy) = (0{,}1;\,0)$ ändert den Abstand vom Ursprung um $0{,}06$.<br>
<b>Fehlerfortpflanzung:</b> Pendel $g = 4\pi^2\ell/T^2$: $\frac{dg}g = \frac{d\ell}\ell-2\frac{dT}T$; $1\,\%$ Fehler in $T$ gibt $2\,\%$ in $g$.`,
    counterexample: R`<b>„Konstant halten“ ist nicht eindeutig ohne Angabe:</b> Für ein ideales Gas ist $(\partial U/\partial T)_V = \nu C_V$, aber die Wärmezufuhr pro Kelvin ist bei konstantem Druck $\nu C_p\neq\nu C_V$. Wer nicht sagt, welche Variable fest bleibt, bekommt verschiedene „Ableitungen nach $T$“.`,
    pitfalls: R`<ul><li>Beim partiellen Ableiten andere Variablen versehentlich mitableiten.</li>
<li>Partielle und totale Ableitung ($\partial f/\partial t$ vs. $df/dt$) verwechseln, wenn $x = x(t)$ selbst von $t$ abhängt.</li>
<li>In der Thermodynamik die konstant gehaltene Variable nicht angeben.</li></ul>`
  },
  {
    id: "ph11_integral",
    title: "Bestimmtes Integral, Stammfunktion und Hauptsatz",
    category: "11.1 Differential- und Integralrechnung",
    type: "definition",
    front: R`Wie ist das <b>bestimmte Integral</b> als Grenzwert einer Summe definiert? Was ist eine <b>Stammfunktion</b>, warum ist sie nur bis auf eine Konstante bestimmt, und warum darf die Integrationsvariable nicht gleich heissen wie die obere Grenze?`,
    back: R`Fläche unter $f$ als Summe von Rechtecken der Breite $\Delta x$ (Mittelpunktsregel, Abb. 11.2):
$$A\approx\sum_{i = 0}^{n-1}f(x_i+\Delta x/2)\cdot\Delta x\qquad(11.7)$$
$$A = \int_{x_0}^{x_n}f(x)\,dx = \lim_{\Delta x\to0}\sum_{i = 0}^{n-1}f(x_i+\Delta x/2)\,\Delta x = F(x_n)-F(x_0)\qquad(11.8)$$
<b>Stammfunktion:</b>
$$F(x) = \int_a^xf(x')\,dx',\qquad\frac{dF}{dx} = \frac{d}{dx}\int_a^xf(x')\,dx' = f(x)\qquad(11.9,\,11.10)$$
$a$ ist beliebig; auch $\tilde F = F+b$ erfüllt (11.10). Der Strich in $x'$ bedeutet keine Ableitung, sondern nur eine andere Laufvariable. Zusammen:
$$\int_a^xf(x')\,dx' = \int_a^x\frac{dF}{dx'}dx' = \int_a^xdF = F(x)-F(a)\qquad(11.11)$$`,
    meta: "Skript: Abschnitt 11.1.4, Gl. (11.7)–(11.11), Abb. 11.2, Anhang S. 2–4",
    explanation: R`<b>Intuition:</b> Integrieren heisst aufsummieren: Weg = Summe vieler kleiner $v\,dt$, Arbeit = Summe vieler $F\,ds$, Masse = Summe vieler $\rho\,dV$. Der Hauptsatz sagt: Um diese Summe auszurechnen, muss man nur eine Funktion finden, deren Ableitung der Integrand ist.<br><br>
<b>Die Konstante:</b> Die Ableitung „vergisst“ Konstanten. Deshalb liefert die Integration nur eine Schar von Lösungen; welche gilt, bestimmen Anfangsbedingungen ($x(0) = x_0$, $v(0) = v_0$ in der Kinematik).<br><br>
<b>Laufvariable:</b> $x'$ läuft von $a$ bis $x$; $x$ ist die feste obere Grenze. Schreibt man beides als $x$, wird unklar, was integriert und was festgehalten wird.<br><br>
<b>Zusammenhang:</b> Kinematik (Kap. 2): $v(t) = v_0+\int_0^ta(t')\,dt'$. Arbeit (Kap. 4): $W = \int\vec F\cdot d\vec r$. Schwerpunkt und Trägheitsmoment (Kap. 8): Volumenintegrale.`,
    derivation: R`Mittelpunktsregel für $\int_0^1x^2dx$ mit $n = 4$:
<ol class="fc-steps">
<li>$\Delta x = 0{,}25$; Mittelpunkte $0{,}125;\,0{,}375;\,0{,}625;\,0{,}875$<em>Intervall in 4 gleiche Teile.</em></li>
<li>$\sum f = 0{,}015625+0{,}140625+0{,}390625+0{,}765625 = 1{,}3125$<em>Funktionswerte an den Mittelpunkten.</em></li>
<li>$A\approx1{,}3125\cdot0{,}25 = 0{,}328$<em>Summe mal Breite (11.7).</em></li>
<li>Exakt: $F = \tfrac13x^3$, $A = \tfrac13-0 = 0{,}333$<em>Hauptsatz (11.8); Fehler $1{,}6\,\%$ schon bei 4 Rechtecken.</em></li>
</ol>`,
    example: R`Freier Fall: $v(t) = \int_0^tg\,dt' = gt$, $z(t) = z_0-\int_0^tgt'\,dt' = z_0-\tfrac12gt^2$.<br>
Federarbeit: $W = \int_0^xkx'\,dx' = \tfrac12kx^2$; für $k = 200\,\text{N/m}$, $x = 0{,}1\,\text{m}$: $1\,\text{J}$.`,
    counterexample: R`<b>Integral ≠ immer Fläche:</b> Liegt $f$ unter der Achse, zählen die Beiträge negativ: $\int_0^{2\pi}\sin x\,dx = 0$, obwohl die eingeschlossene geometrische Fläche $4$ ist. Für „Fläche“ braucht man $\int|f|\,dx$. Physikalisch: Ein Pendel, das hin- und zurückschwingt, hat Nettoweg null, aber eine Strecke ungleich null.`,
    pitfalls: R`<ul><li>Die Integrationskonstante bzw. Anfangsbedingung vergessen.</li>
<li>Laufvariable und obere Grenze gleich benennen.</li>
<li>Negative Beiträge bei der Flächenberechnung übersehen.</li></ul>`
  },
  {
    id: "ph11_vektoralgebra",
    title: "Skalare, Vektoren und Vektoralgebra (abelsche Gruppe, Einheitsvektor)",
    category: "11.2 Vektoren",
    type: "definition",
    front: R`Was unterscheidet einen <b>Skalar</b> von einem <b>Vektor</b>? Welche Rechenregeln gelten für die Vektoraddition und die Multiplikation mit einem Skalar? Wie ist der Einheitsvektor $\vec e_a$ definiert, und warum hängt ein Vektor nicht vom Koordinatensystem ab?`,
    back: R`<b>Skalar:</b> durch eine reelle Zahl gegeben, unabhängig vom Koordinatensystem (Temperatur, Masse, Ladung). <b>Vektor:</b> Betrag und Richtung (Geschwindigkeit, Impuls, Kraft); im $\mathbb R^3$ drei <i>Komponenten</i>, die vom Koordinatensystem abhängen – der Vektor selbst nicht. Physikalische Gesetze müssen koordinatenfrei formulierbar sein.<br><br>
<b>Addition</b> $\vec c = \vec a+\vec b$ bildet eine <b>abelsche Gruppe</b> (11.12, 11.13):
$$\vec a+\vec b = \vec b+\vec a,\quad(\vec a+\vec b)+\vec c = \vec a+(\vec b+\vec c),\quad\vec 0+\vec b = \vec b,\quad\vec b+(-\vec b) = \vec 0$$
<b>Skalarmultiplikation</b> (11.14): $\lambda\vec a = \vec a\lambda$, $\lambda(\mu\vec a) = (\lambda\mu)\vec a$, $1\cdot\vec a = \vec a$, $(\lambda+\mu)\vec a = \lambda\vec a+\mu\vec a$, $\lambda(\vec a+\vec b) = \lambda\vec a+\lambda\vec b$.<br><br>
<b>Einheitsvektor:</b>
$$\vec e_a = \frac{\vec a}{|\vec a|}\quad\text{bzw.}\quad\vec a = |\vec a|\,\vec e_a\qquad(11.23)$$
Vektoren können Verschiebungen darstellen: $\vec a = \overrightarrow{OP}$ (11.24, Abb. 11.9).`,
    meta: "Skript: Abschnitte 11.2.1–11.2.3, Gl. (11.12)–(11.14), (11.23)–(11.24), Abb. 11.3–11.6, 11.9, Anhang S. 5–10",
    explanation: R`<b>Intuition:</b> Ein Vektor ist eine Verschiebung: „3 m nach Nordosten“. Zwei Verschiebungen nacheinander ergeben eine dritte, egal in welcher Reihenfolge (Kommutativität, Parallelogramm, Abb. 11.3).<br><br>
<b>Komponenten vs. Vektor:</b> Dreht man das Koordinatensystem, ändern sich die Komponenten, aber der Pfeil im Raum bleibt derselbe (Basiswechsel, 11.2.9). Deshalb sind Gleichungen wie $\vec F = m\vec a$ in jedem Koordinatensystem gültig.<br><br>
<b>Abhängigkeiten:</b> $|\lambda\vec a| = |\lambda|\,|\vec a|$; für $\lambda\lt0$ kehrt sich die Richtung um. Die Länge einer Summe ist höchstens die Summe der Längen (Dreiecksungleichung).<br><br>
<b>Zusammenhang:</b> Nicht jede Grösse mit Richtung ist ein Vektor: Endliche Drehungen haben Achse und Winkel, sind aber nicht kommutativ und deshalb keine Vektoren (Kap. 2.5.4). Axiale Vektoren (Drehmoment, Drehimpuls) verhalten sich unter Spiegelung anders (8.3.3).`,
    derivation: R`Warum $\vec e_a$ den Betrag 1 hat:
<ol class="fc-steps">
<li>$|\lambda\vec a| = |\lambda|\,|\vec a|$<em>Skalarmultiplikation streckt die Länge um $|\lambda|$.</em></li>
<li>$\lambda = \dfrac1{|\vec a|}$<em>Wahl des Streckfaktors ($\vec a\neq\vec 0$).</em></li>
<li>$|\vec e_a| = \dfrac{|\vec a|}{|\vec a|} = 1$<em>Gleiche Richtung, Länge 1.</em></li>
<li>$\vec a = |\vec a|\,\vec e_a$<em>Zerlegung in „wie viel“ (Betrag) und „wohin“ (Richtung).</em></li>
</ol>`,
    example: R`Wanderung: $3\,\text{km}$ nach Osten, dann $4\,\text{km}$ nach Norden: Verschiebung $5\,\text{km}$ Richtung $53^\circ$ nördlich von Osten; Weglänge $7\,\text{km}$.<br>
$\vec a = (3,4,0)$: $\vec e_a = (0{,}6;\,0{,}8;\,0)$.`,
    counterexample: R`<b>Endliche Drehungen:</b> Ein Buch erst um $90^\circ$ um $x$, dann um $90^\circ$ um $y$ gedreht, landet anders als in umgekehrter Reihenfolge. Drehungen haben Achse und Winkel, erfüllen aber die Kommutativität der Addition nicht – sie sind keine Vektoren. (Infinitesimale Drehungen bzw. Winkelgeschwindigkeiten dagegen schon.)`,
    pitfalls: R`<ul><li>Beträge addieren statt Vektoren ($|\vec a+\vec b|\neq|\vec a|+|\vec b|$ im Allgemeinen).</li>
<li>Den Nullvektor $\vec 0$ mit der Zahl $0$ verwechseln.</li>
<li>Vom Nullvektor einen Einheitsvektor bilden wollen.</li></ul>`
  },
  {
    id: "ph11_skalarprodukt",
    title: "Skalarprodukt: a·b = ab cos φ, Projektion, Kosinussatz",
    category: "11.2 Vektoren",
    type: "definition",
    front: R`Wie ist das <b>Skalarprodukt</b> definiert, und welche geometrische Bedeutung hat es (Projektion)? Wie lautet es in kartesischen Komponenten? Leite damit den <b>Kosinussatz</b> her.`,
    back: R`$$\vec a\cdot\vec b = ab\cos\varphi = |\vec a|\,|\vec b|\cos\varphi\qquad(11.15)$$
($\varphi$: Winkel zwischen den Vektoren.) Es führt eine <b>Metrik</b> ein: Länge und Winkel.
$$\vec a\cdot\vec b = a(b\cos\varphi) = b(a\cos\varphi)\qquad(11.16)$$
$b\cos\varphi$: Komponente (Projektion) von $\vec b$ in Richtung $\vec a$. Weitere Eigenschaften:
$$\vec a\cdot\vec a = a^2 = |\vec a|^2,\qquad\vec a\cdot\vec b = \vec b\cdot\vec a,\qquad\vec a\cdot(\vec b+\vec c) = \vec a\cdot\vec b+\vec a\cdot\vec c\qquad(11.17\text{–}11.19)$$
$\vec a\cdot\vec b = 0\Leftrightarrow\vec a = \vec 0$ oder $\vec b = \vec 0$ oder $\vec a\perp\vec b$.<br><br>
<b>Komponenten:</b> $\vec a\cdot\vec b = a_xb_x+a_yb_y+a_zb_z$ (11.41).<br>
<b>Kosinussatz</b> für $\vec c = \vec a+\vec b$:
$$|\vec c|^2 = (\vec a+\vec b)^2 = |\vec a|^2+|\vec b|^2+2|\vec a||\vec b|\cos\varphi\qquad(11.20\text{–}11.22)$$`,
    meta: "Skript: Abschnitte 11.2.4, 11.2.6, Gl. (11.15)–(11.22), (11.41), Abb. 11.7–11.8, Anhang S. 8–14",
    explanation: R`<b>Intuition:</b> Das Skalarprodukt misst, „wie viel“ von einem Vektor in Richtung des anderen zeigt. Parallel: volles Produkt; senkrecht: null; entgegengesetzt: negativ.<br><br>
<b>Physik:</b> Arbeit $W = \vec F\cdot\vec s$ – nur die Kraftkomponente längs des Weges zählt (Kap. 4). Leistung $P = \vec F\cdot\vec v$. Magnetischer Fluss $\Phi = \vec B\cdot\vec A$ (Physik II).<br><br>
<b>Vorzeichen des Kosinussatzes:</b> Hier ist $\varphi$ der Winkel zwischen $\vec a$ und $\vec b$ (Pfeile aneinandergehängt), deshalb $+2ab\cos\varphi$. In der Schulgeometrie steht $-2ab\cos\gamma$ mit dem Innenwinkel $\gamma = \pi-\varphi$ des Dreiecks.<br><br>
<b>Zusammenhang:</b> Dieselbe Struktur erscheint bei der Überlagerung zweier Schwingungen: $A^2 = A_1^2+A_2^2+2A_1A_2\cos(\delta_1-\delta_2)$ (9.5.2). Fourierkoeffizienten sind „Skalarprodukte“ von Funktionen (9.6.1).`,
    derivation: R`Komponentenform aus der Orthonormalität:
<ol class="fc-steps">
<li>$\vec a\cdot\vec b = (a_x\vec e_x+a_y\vec e_y+a_z\vec e_z)\cdot(b_x\vec e_x+b_y\vec e_y+b_z\vec e_z)$<em>Beide Vektoren in der Basis.</em></li>
<li>Ausmultiplizieren: 9 Terme $a_ib_j\,(\vec e_i\cdot\vec e_j)$<em>Distributivgesetz (11.19).</em></li>
<li>$\vec e_i\cdot\vec e_j = 1$ für $i = j$, sonst $0$<em>Orthonormalbasis (11.33, 11.34).</em></li>
<li>$\vec a\cdot\vec b = a_xb_x+a_yb_y+a_zb_z$<em>Nur die drei Diagonalterme bleiben (11.41).</em></li>
<li>$\cos\varphi = \dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}$<em>Winkel zwischen zwei Vektoren aus Komponenten.</em></li>
</ol>`,
    example: R`$\vec a = (1,2,2)$, $\vec b = (2,0,1)$: $\vec a\cdot\vec b = 4$, $|\vec a| = 3$, $|\vec b| = \sqrt5$, $\cos\varphi = 0{,}596$, $\varphi = 53{,}4^\circ$.<br>
Arbeit: $\vec F = (3,4,0)\,\text{N}$ längs $\vec s = (2,0,0)\,\text{m}$: $W = 6\,\text{J}$; die $y$-Komponente der Kraft leistet keine Arbeit.`,
    counterexample: R`<b>Komponentenformel in schiefwinkligen Koordinaten:</b> $a_xb_x+a_yb_y+a_zb_z$ gilt nur in einer <i>orthonormalen</i> Basis. In einer schiefen Basis (z. B. Kristallachsen eines monoklinen Gitters) kommen Mischterme hinzu. Die Definition $ab\cos\varphi$ dagegen gilt immer.`,
    pitfalls: R`<ul><li>$\vec a\cdot\vec b = 0$ als „einer der Vektoren ist null“ deuten (sie können senkrecht sein).</li>
<li>Vorzeichen im Kosinussatz mit dem Dreiecksinnenwinkel verwechseln.</li>
<li>Das Ergebnis eines Skalarprodukts als Vektor schreiben.</li></ul>`
  },
  {
    id: "ph11_vektorprodukt",
    title: "Äusseres Produkt und Vektorprodukt a × b",
    category: "11.2 Vektoren",
    type: "definition",
    front: R`Was ist das <b>äussere Produkt</b> $\vec a\wedge\vec b$ (orientierte Fläche), und wie hängt es mit dem <b>Vektorprodukt</b> $\vec a\times\vec b$ zusammen? Welche Eigenschaften hat das Vektorprodukt, und wie berechnet man es in Komponenten?`,
    back: R`<b>Äusseres Produkt</b> (Bivektor): $\vec A = \vec a\wedge\vec b$ ist die von $\vec a$ und $\vec b$ aufgespannte <b>orientierte Fläche</b> mit Drehsinn von $\vec a$ nach $\vec b$ (Abb. 11.10):
$$\vec a\wedge\vec b = -\vec b\wedge\vec a,\qquad\vec a\wedge\vec a = 0\qquad(11.25,\,11.26)$$
Definiert in jedem $\mathbb R^n$ ($n\ge2$). Im $\mathbb R^3$ (nur dort gibt es genau eine Normalenrichtung) rechnet man mit dem dualen <b>Vektorprodukt</b>:
$$\vec c = \vec a\times\vec b,\qquad|\vec c| = ab\sin\varphi\qquad(11.27,\,11.28)$$
$\vec c$ steht senkrecht auf der Fläche; Richtung nach der Rechte-Hand-Regel (Finger von $\vec a$ nach $\vec b$ auf kürzestem Weg, Daumen = $\vec c$); Betrag = Parallelogrammfläche.<br>
$$\vec a\times\vec a = \vec 0,\quad\vec a\times\vec b = -\vec b\times\vec a,\quad\vec a\times(\vec b+\vec c) = \vec a\times\vec b+\vec a\times\vec c\qquad(11.29\text{–}11.31)$$
$$\vec e_x\times\vec e_y = \vec e_z\ \text{(zyklisch)},\qquad\vec a\times\vec b = \begin{pmatrix}a_yb_z-a_zb_y\\a_zb_x-a_xb_z\\a_xb_y-a_yb_x\end{pmatrix}\qquad(11.35,\,11.42)$$`,
    meta: "Skript: Abschnitte 11.2.5–11.2.6, Gl. (11.25)–(11.31), (11.35), (11.42), Abb. 11.10, Anhang S. 10–14",
    explanation: R`<b>Intuition:</b> Das Vektorprodukt beschreibt einen <i>Drehsinn</i> mit Stärke: Wie stark und um welche Achse „dreht“ $\vec a$ in Richtung $\vec b$? Das Fundamentale ist die orientierte Fläche; der senkrechte Pfeil ist eine praktische Darstellung im dreidimensionalen Raum.<br><br>
<b>Abhängigkeiten:</b> Maximal bei $\varphi = 90^\circ$, null bei parallelen Vektoren. Antikommutativ: Reihenfolge vertauschen kehrt die Richtung um.<br><br>
<b>Physik:</b> Drehmoment $\vec M = \vec r\times\vec F$, Drehimpuls $\vec L = \vec r\times\vec p$, Bahngeschwindigkeit $\vec v = \vec\omega\times\vec r$, Corioliskraft $-2m\vec\omega\times\vec v$, Lorentzkraft $q\vec v\times\vec B$. All diese Grössen sind axiale Vektoren (8.3.3).<br><br>
<b>Zusammenhang:</b> Nützliche Identitäten: $\vec a\times(\vec b\times\vec c) = \vec b(\vec a\cdot\vec c)-\vec c(\vec a\cdot\vec b)$ („BAC-CAB“), $(\vec a\times\vec b)\cdot\vec c = (\vec b\times\vec c)\cdot\vec a$ (Spatprodukt, zyklisch). Beide werden beim Trägheitstensor gebraucht (13.21, 13.22).`,
    derivation: R`Komponentenformel aus den Basisprodukten:
<ol class="fc-steps">
<li>$\vec a\times\vec b = \sum_{i,j}a_ib_j\,(\vec e_i\times\vec e_j)$<em>Distributivität (11.31) für alle 9 Kombinationen.</em></li>
<li>$\vec e_i\times\vec e_i = \vec 0$<em>Drei Terme fallen weg (11.29).</em></li>
<li>$\vec e_x\times\vec e_y = \vec e_z$, $\vec e_y\times\vec e_x = -\vec e_z$ usw.<em>(11.35) und Antikommutativität.</em></li>
<li>$= a_xb_y\vec e_z-a_xb_z\vec e_y-a_yb_x\vec e_z+a_yb_z\vec e_x+a_zb_x\vec e_y-a_zb_y\vec e_x$<em>Sechs Terme übrig.</em></li>
<li>Nach $\vec e_x$, $\vec e_y$, $\vec e_z$ sortieren: (11.42)<em>Merkhilfe: zyklisch $x\to y\to z$, je „vorwärts minus rückwärts“.</em></li>
</ol>`,
    example: R`$\vec a = (1,2,3)$, $\vec b = (4,5,6)$: $\vec a\times\vec b = (12-15,\;12-6,\;5-8) = (-3,6,-3)$. Probe: $\vec a\cdot(\vec a\times\vec b) = -3+12-9 = 0$ ✓. Parallelogrammfläche $\sqrt{54} = 7{,}35$.<br>
Drehmoment: $\vec r = (0{,}5;0;0)\,\text{m}$, $\vec F = (0;20;0)\,\text{N}$: $\vec M = (0;0;10)\,\text{N m}$.`,
    counterexample: R`<b>Kein Assoziativgesetz:</b> $(\vec e_x\times\vec e_x)\times\vec e_y = \vec 0$, aber $\vec e_x\times(\vec e_x\times\vec e_y) = \vec e_x\times\vec e_z = -\vec e_y$. Klammern beim Vektorprodukt dürfen nicht weggelassen werden. Und in zwei oder vier Dimensionen gibt es kein Vektorprodukt im üblichen Sinn, wohl aber das äussere Produkt.`,
    pitfalls: R`<ul><li>Die Reihenfolge vertauschen (Vorzeichenfehler, z. B. $\vec F\times\vec r$ statt $\vec r\times\vec F$).</li>
<li>Die linke statt der rechten Hand verwenden.</li>
<li>Beim Komponentenschema die mittlere Komponente falsch herum ($a_xb_z-a_zb_x$ statt $a_zb_x-a_xb_z$).</li></ul>`
  },
  {
    id: "ph11_basis_basiswechsel",
    title: "Kartesische Basis, Komponenten als Projektionen und Basiswechsel",
    category: "11.2 Vektoren",
    type: "konzept",
    front: R`Welche Eigenschaften hat die kartesische Basis $\vec e_x,\vec e_y,\vec e_z$? Wie erhält man die Komponenten eines Vektors? Wie ändern sich die Komponenten, wenn man die Basis um den Winkel $\varphi$ dreht?`,
    back: R`<b>Orthonormalbasis:</b>
$$\vec e_x\cdot\vec e_y = \vec e_x\cdot\vec e_z = \vec e_y\cdot\vec e_z = 0,\qquad\vec e_x\cdot\vec e_x = \vec e_y\cdot\vec e_y = \vec e_z\cdot\vec e_z = 1\qquad(11.32\text{–}11.34)$$
rechtshändig: $\vec e_x\times\vec e_y = \vec e_z$ (11.35).<br>
<b>Komponenten</b> = Projektionen auf die Basisvektoren:
$$\vec r = r_x\vec e_x+r_y\vec e_y+r_z\vec e_z,\qquad x = \vec r\cdot\vec e_x\ \text{usw.}\qquad(11.36)$$
Addition, Subtraktion und Skalarmultiplikation komponentenweise (11.37–11.40).<br><br>
<b>Basiswechsel</b> (Abb. 11.15): Derselbe Vektor $\vec A$ in zwei Basen: $A_i = \vec e_i\cdot\vec A$, $A_i' = \vec e_i\,'\cdot\vec A$ (11.71–11.76). Einsetzen von $\vec A = A_1\vec e_1+A_2\vec e_2$:
$$A_1' = A_1(\vec e_1\,'\cdot\vec e_1)+A_2(\vec e_1\,'\cdot\vec e_2),\qquad A_2' = A_1(\vec e_2\,'\cdot\vec e_1)+A_2(\vec e_2\,'\cdot\vec e_2)\qquad(11.77,\,11.78)$$
Basis um $\varphi$ gedreht:
$$\begin{pmatrix}A_1'\\A_2'\end{pmatrix} = \begin{pmatrix}\cos\varphi&\sin\varphi\\-\sin\varphi&\cos\varphi\end{pmatrix}\begin{pmatrix}A_1\\A_2\end{pmatrix}\qquad(11.79)$$`,
    meta: "Skript: Abschnitte 11.2.6, 11.2.9, Gl. (11.32)–(11.40), (11.71)–(11.79), Abb. 11.15, Anhang S. 12–21",
    explanation: R`<b>Intuition:</b> Die Komponenten sind die „Schatten“ des Vektors auf die Achsen. Dreht man die Achsen, ändern sich die Schatten, der Vektor selbst bleibt. Die Drehmatrix dreht die Komponenten entgegengesetzt zur Basis (passive Drehung).<br><br>
<b>Warum orthonormal?</b> Dann ist die Projektion einfach ein Skalarprodukt, und Längen/Skalarprodukte berechnen sich mit der einfachen Summenformel. Bei schiefen Basen bräuchte man die „duale Basis“.<br><br>
<b>Abhängigkeiten:</b> Die Drehmatrix ist orthogonal ($R^{-1} = R^t$, $\det R = 1$); sie erhält Längen: $A_1'^2+A_2'^2 = A_1^2+A_2^2$.<br><br>
<b>Zusammenhang:</b> Die Eulerwinkel (8.5.2) sind drei solche Drehungen hintereinander. Beim Kreisel transformiert sich der Trägheitstensor bei einem Basiswechsel; im Hauptachsensystem wird er diagonal (13.1.4).`,
    derivation: R`Matrixelemente für eine Drehung der Basis um $\varphi$:
<ol class="fc-steps">
<li>$\vec e_1\,' = \cos\varphi\,\vec e_1+\sin\varphi\,\vec e_2$<em>Neue erste Achse um $\varphi$ gegen die alte gedreht.</em></li>
<li>$\vec e_2\,' = -\sin\varphi\,\vec e_1+\cos\varphi\,\vec e_2$<em>Senkrecht dazu, rechtshändig.</em></li>
<li>$\vec e_1\,'\cdot\vec e_1 = \cos\varphi$, $\vec e_1\,'\cdot\vec e_2 = \sin\varphi$<em>Skalarprodukte der Basisvektoren.</em></li>
<li>$\vec e_2\,'\cdot\vec e_1 = -\sin\varphi$, $\vec e_2\,'\cdot\vec e_2 = \cos\varphi$<em>Ebenso.</em></li>
<li>In (11.77), (11.78) einsetzen: (11.79)<em>Die Matrixelemente sind die Kosinus der Winkel zwischen neuen und alten Achsen.</em></li>
</ol>`,
    example: R`$\vec A = (1;0)$, Basis um $30^\circ$ gedreht: $A_1' = \cos30^\circ = 0{,}866$, $A_2' = -\sin30^\circ = -0{,}5$. Länge: $0{,}75+0{,}25 = 1$ ✓.<br>
Schiefe Ebene: Gewichtskraft $(0;-mg)$ in Koordinaten parallel/senkrecht zur Ebene (Neigung $\alpha$): $(-mg\sin\alpha;\,-mg\cos\alpha)$.`,
    counterexample: R`<b>Aktive vs. passive Drehung:</b> Dreht man den <i>Vektor</i> um $+\varphi$ (aktiv) statt der Basis, lautet die Matrix $\begin{pmatrix}\cos\varphi&-\sin\varphi\\\sin\varphi&\cos\varphi\end{pmatrix}$ – die Transponierte von (11.79). Wer beides verwechselt, dreht in die falsche Richtung.`,
    pitfalls: R`<ul><li>Aktive und passive Drehung verwechseln.</li>
<li>Komponenten für den Vektor selbst halten (sie sind basisabhängig).</li>
<li>Den Ortsvektor wie einen frei verschiebbaren Vektor behandeln (er hängt am Ursprung).</li></ul>`
  },
  {
    id: "ph11_ableitung_vektoren",
    title: "Ableitung von Vektoren: Produktregeln und |a| = konst. ⇔ ȧ ⊥ a",
    category: "11.2 Vektoren",
    type: "gesetz",
    front: R`Welche Produktregeln gelten für die zeitliche Ableitung von $c\,\vec a$, $\vec a\cdot\vec b$ und $\vec a\times\vec b$? Zeige: Ein Vektor hat genau dann konstanten Betrag, wenn seine Ableitung senkrecht auf ihm steht. Wie leitet man in kartesischen Koordinaten ab?`,
    back: R`$$\frac{d}{dt}(c\,\vec a) = \frac{dc}{dt}\vec a+c\frac{d\vec a}{dt}\qquad(11.43)$$
$$\frac{d}{dt}(\vec a\cdot\vec b) = \frac{d\vec a}{dt}\cdot\vec b+\vec a\cdot\frac{d\vec b}{dt}\qquad(11.44)$$
$$\frac{d}{dt}(\vec a\times\vec b) = \frac{d\vec a}{dt}\times\vec b+\vec a\times\frac{d\vec b}{dt}\quad\text{(Reihenfolge beachten!)}\qquad(11.45)$$
Mit $\vec a = \vec b$:
$$\frac{d}{dt}a^2 = \frac{d}{dt}(\vec a\cdot\vec a) = 2\vec a\cdot\frac{d\vec a}{dt}\qquad(11.46)$$
$$\vec a\perp\frac{d\vec a}{dt}\;\Leftrightarrow\;\vec a\cdot\frac{d\vec a}{dt} = 0\;\Leftrightarrow\;\frac{d}{dt}a^2 = 0\;\Leftrightarrow\;a^2 = \text{konst.}\qquad(11.47)$$
In kartesischen Koordinaten (feste Basisvektoren) komponentenweise: $\frac{d\vec a}{dt} = \left(\frac{da_x}{dt},\frac{da_y}{dt},\frac{da_z}{dt}\right)$ (11.48).`,
    meta: "Skript: Abschnitt 11.2.7, Gl. (11.43)–(11.48), Anhang S. 14–15",
    explanation: R`<b>Intuition:</b> Ändert sich ein Pfeil nur senkrecht zu sich selbst, dreht er sich, ohne länger oder kürzer zu werden – wie ein Uhrzeiger. Jede Komponente der Änderung <i>entlang</i> des Pfeils ändert dagegen seine Länge.<br><br>
<b>Physik:</b> Gleichförmige Kreisbewegung: $|\vec v|$ konstant, also $\vec a\perp\vec v$ (Zentripetalbeschleunigung, Kap. 2). Eine Kraft senkrecht zur Geschwindigkeit (Lorentzkraft, Zentripetalkraft) ändert den Betrag der Geschwindigkeit nicht und leistet keine Arbeit. Präzession: $\dot{\vec L} = \vec M\perp\vec L$, also dreht sich $\vec L$ nur (13.1.7).<br><br>
<b>Reihenfolge beim Kreuzprodukt:</b> Weil $\times$ antikommutativ ist, muss in (11.45) jeder Faktor an seinem Platz bleiben; sonst entstehen Vorzeichenfehler.<br><br>
<b>Zusammenhang:</b> In krummlinigen Koordinaten (Polarkoordinaten) ändern sich auch die Basisvektoren: $\dot{\vec e}_r = \dot\varphi\,\vec e_\varphi$. Das liefert die Zentripetal- und Coriolis-Terme der Kinematik.`,
    derivation: R`Drehimpulssatz aus der Produktregel (11.45):
<ol class="fc-steps">
<li>$\vec L = \vec r\times\vec p$<em>Definition (Kap. 5).</em></li>
<li>$\dot{\vec L} = \dot{\vec r}\times\vec p+\vec r\times\dot{\vec p}$<em>Produktregel, Reihenfolge erhalten.</em></li>
<li>$\dot{\vec r}\times\vec p = \vec v\times m\vec v = \vec 0$<em>Parallele Vektoren (11.29).</em></li>
<li>$\dot{\vec L} = \vec r\times\vec F = \vec M$<em>Mit $\dot{\vec p} = \vec F$: Drallsatz.</em></li>
</ol>`,
    example: R`$\vec r(t) = R(\cos\omega t,\sin\omega t,0)$: $\dot{\vec r} = R\omega(-\sin\omega t,\cos\omega t,0)$; $\vec r\cdot\dot{\vec r} = R^2\omega(-\cos\sin+\sin\cos) = 0$ ✓, also $|\vec r| = R$ konstant.<br>
$\vec v(t) = (3,4t,0)$: $\frac{d}{dt}v^2 = 2\vec v\cdot\dot{\vec v} = 2\cdot16t = 32t$; direkt: $v^2 = 9+16t^2$ ✓.`,
    counterexample: R`<b>Konstante Richtung, aber $\dot{\vec a}\not\perp\vec a$:</b> Beim freien Fall aus der Ruhe ist $\vec v\parallel\dot{\vec v}$; der Betrag ändert sich maximal. Und „$\dot{\vec a}\perp\vec a$ zu einem Zeitpunkt“ heisst nur, dass $|\vec a|$ dort momentan stationär ist (z. B. Umkehrpunkt im Abstand bei einer Ellipsenbahn), nicht dauerhaft konstant.`,
    pitfalls: R`<ul><li>Beim Kreuzprodukt die Faktoren beim Ableiten vertauschen.</li>
<li>In Polarkoordinaten die Ableitung der Basisvektoren vergessen.</li>
<li>$\frac{d}{dt}|\vec a|$ mit $\left|\frac{d\vec a}{dt}\right|$ verwechseln (Kreisbewegung: erstes null, zweites nicht).</li></ul>`
  },
  {
    id: "ph11_koordinatensysteme",
    title: "Polar-, Zylinder- und Kugelkoordinaten",
    category: "11.2 Vektoren",
    type: "definition",
    front: R`Gib die Umrechnungen zwischen kartesischen Koordinaten und <b>Polar-</b>, <b>Zylinder-</b> und <b>Kugelkoordinaten</b> an, mit Definitionsbereichen. Warum braucht man für $\varphi$ eine Fallunterscheidung? Was sind Richtungskosinus?`,
    back: R`<b>Polar</b> (Ebene, Abb. 11.11):
$$\vec r = r\begin{pmatrix}\cos\varphi\\\sin\varphi\end{pmatrix},\quad r = \sqrt{x^2+y^2},\quad\varphi = \begin{cases}\arctan\frac yx,&x\gt0\\\arctan\frac yx+\pi,&x\lt0\end{cases},\quad0\le r\lt\infty,\ 0\le\varphi\lt2\pi\qquad(11.49\text{–}11.53)$$
<b>Richtungskosinus</b> (Raum): $\cos\alpha = \frac{\vec r\cdot\vec e_x}r$, $\cos\beta = \frac{\vec r\cdot\vec e_y}r$, $\cos\gamma = \frac{\vec r\cdot\vec e_z}r$ (11.54–11.56).<br>
<b>Zylinder</b> (Rotationssymmetrie um $z$, Abb. 11.13): Polarkoordinaten plus $z$:
$$\vec r = (\rho\cos\varphi,\ \rho\sin\varphi,\ z),\quad\rho = \sqrt{x^2+y^2},\quad-\infty\lt z\lt\infty\qquad(11.57\text{–}11.63)$$
<b>Kugel</b> (Punktsymmetrie, Abb. 11.14):
$$\vec r = (r\sin\vartheta\cos\varphi,\ r\sin\vartheta\sin\varphi,\ r\cos\vartheta),\quad r = \sqrt{x^2+y^2+z^2},\quad\vartheta = \arccos\frac zr\qquad(11.64\text{–}11.67)$$
mit $0\le\varphi\lt2\pi$, $0\le\vartheta\le\pi$ (11.68–11.70).<br>
Die Fallunterscheidung ist nötig, weil $\arctan$ nur Werte in $[-\pi/2,\pi/2]$ liefert.`,
    meta: "Skript: Abschnitt 11.2.8, Gl. (11.49)–(11.70), Abb. 11.11–11.14, Anhang S. 15–20",
    explanation: R`<b>Intuition:</b> Man wählt die Koordinaten, in denen das Problem am einfachsten aussieht. Ein Zylinder ist in kartesischen Koordinaten kompliziert ($x^2+y^2\le R^2$), in Zylinderkoordinaten trivial ($\rho\le R$). Ebenso die Kugel ($r\le R$).<br><br>
<b>Volumenelemente</b> (Ergänzung, im Skript verwendet): Zylinder $dV = \rho\,d\rho\,d\varphi\,dz$ (8.96), Kugel $dV = r^2\sin\vartheta\,dr\,d\vartheta\,d\varphi = r^2\,dr\,d\varphi\,d\cos\vartheta$ (14.25). Der Faktor $\rho$ bzw. $r^2\sin\vartheta$ ist entscheidend.<br><br>
<b>Konventionen:</b> $\vartheta$ wird vom Nordpol ($+z$) aus gemessen (Polarwinkel), nicht vom Äquator wie die geografische Breite.<br><br>
<b>Zusammenhang:</b> Trägheitsmomente von Zylinder und Kugel (8.5.7), Gravitationsfeld einer Kugelschale (Kap. 7), Maxwell-Verteilung im Geschwindigkeitsraum (14.1.2).`,
    derivation: R`Punkt $(x,y,z) = (1,1,\sqrt2)$ in Kugelkoordinaten:
<ol class="fc-steps">
<li>$r = \sqrt{1+1+2} = 2$<em>Abstand vom Ursprung (11.65).</em></li>
<li>$\vartheta = \arccos\dfrac{\sqrt2}2 = 45^\circ$<em>Winkel zur $z$-Achse (11.67).</em></li>
<li>$\varphi = \arctan\dfrac11 = 45^\circ$<em>$x\gt0$, also kein Zusatz.</em></li>
<li>Probe: $x = 2\sin45^\circ\cos45^\circ = 1$ ✓, $z = 2\cos45^\circ = \sqrt2$ ✓<em>Rücktransformation (11.64).</em></li>
</ol>`,
    example: R`Polar: $(-1,1)$: $r = \sqrt2$, $\varphi = \arctan(-1)+\pi = 135^\circ$; $(-1,-1)$: $\arctan(1)+\pi = 225^\circ$.<br>
Zylinder: $(0,3,5)$: $\rho = 3$, $\varphi = 90^\circ$ ($x = 0$: direkt ablesen), $z = 5$.`,
    counterexample: R`<b>Vierter Quadrant:</b> $(1,-1)$ liefert mit (11.51) $\varphi = \arctan(-1) = -45^\circ$, was ausserhalb $[0,2\pi)$ liegt; man muss $2\pi$ addieren: $315^\circ$. Und für $x = 0$ ist $\arctan(y/x)$ gar nicht definiert ($\varphi = 90^\circ$ oder $270^\circ$). Die zweistufige Formel deckt nicht alle Fälle ab; in Programmen nutzt man $\text{atan2}(y,x)$.`,
    pitfalls: R`<ul><li>$\arctan(y/x)$ ohne Quadrantenprüfung verwenden.</li>
<li>Polarwinkel $\vartheta$ und Azimut $\varphi$ vertauschen (Physik- vs. Mathematik-Konvention).</li>
<li>Den Jacobi-Faktor im Volumenelement vergessen.</li></ul>`
  }
];
})();
