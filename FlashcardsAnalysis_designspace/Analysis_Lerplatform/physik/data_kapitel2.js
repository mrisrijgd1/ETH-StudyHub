/* ==========================================================================
   PHYSIK I – KAPITEL 2: Kinematik des Massenpunktes
   Massenpunkt, Ort, Geschwindigkeit, Beschleunigung, Wurf, Kreisbewegung,
   Winkelgeschwindigkeit als Vektor, Tangential-/Normalbeschleunigung
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_2 = [
  // ========================================================================
  // 2.1–2.2 EINLEITUNG, MASSENPUNKT
  // ========================================================================
  {
    id: "ph2_massenpunkt",
    title: "Kinematik vs. Dynamik und das Modell des Massenpunkts",
    category: "2.2 Massenpunkt",
    type: "definition",
    front: R`Was unterscheidet <b>Kinematik</b> von <b>Dynamik</b>? Was ist ein <b>Massenpunkt</b>, und wann darf man einen ausgedehnten Körper so behandeln?`,
    back: R`<ul><li><b>Kinematik:</b> beschreibt, <i>wie</i> sich ein Körper bewegt (Ort, Geschwindigkeit, Beschleunigung), rein geometrisch, ohne nach Ursachen zu fragen.</li>
<li><b>Dynamik:</b> fragt nach dem <i>Warum</i>, also nach den Ursachen der Bewegung (Kräfte, Kap. 3).</li></ul>
<b>Massenpunkt (Teilchen):</b> idealisierter Körper, dessen gesamte Masse in einem Punkt konzentriert ist und dessen Ausdehnung für das gegebene Problem <b>keine Rolle spielt</b>. Seine Lage ist durch die drei Koordinaten eines Punktes festgelegt.<br><br>
Bei einem ausgedehnten Körper beschreiben diese drei Koordinaten seinen <b>Schwerpunkt</b>. Für die Orientierung im Raum bräuchte man drei weitere Koordinaten (Kap. 8).<br><br>
Zusätzliche Annahme der klassischen Kinematik: Es gibt eine <b>absolute Zeit</b>, die für alle Beobachter gleich ist (erst die Relativitätstheorie hebt das auf).`,
    meta: "Skript: Abschnitte 2.1–2.3 (Fussnoten 1–3), S. 11–12",
    explanation: R`<b>Intuition:</b> Ob ein Massenpunkt eine gute Näherung ist, hängt nicht vom Körper ab, sondern von der <b>Frage</b>. Die Erde ist für ihre Bahn um die Sonne ein Massenpunkt, für Ebbe und Flut oder den Wechsel von Tag und Nacht nicht.<br><br>
<b>Faustregel:</b> Die Ausdehnung $d$ ist vernachlässigbar, wenn sie klein gegen die relevanten Längen $L$ der Bewegung ist ($d\ll L$) <i>und</i> Drehungen des Körpers für die Frage unwichtig sind (keine nennenswerte Rotationsenergie, kein Drehimpuls, der etwas bewirkt).<br><br>
<b>Zusammenhang:</b> Der Schwerpunktsatz (Kap. 6) liefert die tiefere Begründung: Der Schwerpunkt eines beliebigen Körpers bewegt sich so, als wäre die ganze Masse dort vereinigt und griffen alle äusseren Kräfte dort an. Das Massenpunktmodell ist also für die <i>Translation</i> des Schwerpunkts exakt, ignoriert aber Rotation und Verformung.`,
    derivation: R`Freiheitsgrade zählen und die Näherung abschätzen:
<ol class="fc-steps">
<li>Massenpunkt: $(x,y,z)$, also 3 Freiheitsgrade<em>Die Lage eines Punktes im Raum ist durch drei Zahlen bestimmt.</em></li>
<li>Starrer Körper: $(x_S,y_S,z_S)$ und 3 Winkel, also 6 Freiheitsgrade<em>Zusätzlich zur Schwerpunktslage braucht man die Orientierung (z. B. Eulerwinkel, Kap. 8.5.2).</em></li>
<li>$\frac{R_\text{Erde}}{r_\text{Bahn}} = \frac{6{,}4\cdot10^{6}\,\text{m}}{1{,}5\cdot10^{11}\,\text{m}}\approx 4\cdot10^{-5}$<em>Für die Erdbahn ist die Ausdehnung $10^{-5}$-mal kleiner als die Bahn: Der Massenpunkt ist hier eine exzellente Näherung.</em></li>
<li>Kriterium: $d/L\ll1$ und Rotation irrelevant<em>Erst wenn beides erfüllt ist, darf man die 3 Orientierungsfreiheitsgrade weglassen.</em></li>
</ol>`,
    example: R`<b>Gute Näherung:</b> Ein Tennisball auf einer Wurfbahn von 20 m (Durchmesser etwa 7 cm, also $d/L\approx 3\cdot10^{-3}$), solange Spin und Luftwiderstand ignoriert werden. Ebenso die Erde auf ihrer Bahn um die Sonne.<br><br>
<b>Schwerpunkt als Massenpunkt:</b> Ein Hochspringer dreht sich über der Latte. Sein Schwerpunkt fliegt dennoch genau auf einer Wurfparabel, als wäre er ein Massenpunkt.`,
    counterexample: R`<b>Rollende Kugel auf der schiefen Ebene:</b> Als reibungslos gleitender Massenpunkt hätte sie $a = g\sin\alpha$. Tatsächlich rollt sie mit $a = \tfrac57 g\sin\alpha$, weil ein Teil der Energie in die Rotation geht (Kap. 8.5.9). Die Ausdehnung (Trägheitsmoment) ist hier entscheidend, obwohl die Kugel klein ist.<br>
<b>Kreisel:</b> Präzession und Nutation (Kap. 13) sind ohne Ausdehnung prinzipiell nicht beschreibbar.`,
    pitfalls: R`<ul><li>Den Massenpunkt als Eigenschaft des Objekts statt der Fragestellung verstehen.</li>
<li>„Klein“ absolut statt relativ ($d\ll L$) beurteilen.</li>
<li>Vergessen, dass der Ortsvektor eines ausgedehnten Körpers den <b>Schwerpunkt</b> meint.</li>
<li>Kinematik und Dynamik vermischen: Kinematische Gleichungen sagen nichts über Kräfte aus.</li></ul>`
  },

  // ========================================================================
  // 2.3 ORTSVEKTOR
  // ========================================================================
  {
    id: "ph2_ortsvektor",
    title: "Ortsvektor, Einheitsvektor, Verschiebungsvektor und Weg",
    category: "2.3 Ortsvektor",
    type: "definition",
    front: R`Wie sind <b>Ortsvektor</b> $\vec r(t)$, sein Betrag $r$ und seine Richtung $\hat r$ definiert? Was ist der Unterschied zwischen dem <b>Verschiebungsvektor</b> $\Delta\vec r$ und dem <b>zurückgelegten Weg</b> $\Delta s$?`,
    back: R`In einem rechtshändigen kartesischen Koordinatensystem $\Sigma$:
$$\vec r(t) \stackrel{\text{def}}{=} \begin{pmatrix} x(t)\\ y(t)\\ z(t)\end{pmatrix}\qquad(2.1)$$
<ul><li>Betrag: $r = |\vec r| = \sqrt{x^2+y^2+z^2}$ (2.2)</li>
<li>Richtung: $\vec e_r \equiv \hat r = \vec r/r$, stets Länge 1 (2.3)</li>
<li>Verschiebungsvektor: $\Delta\vec r = \vec r(t_2)-\vec r(t_1)$ (2.4), Richtung und Abstand zwischen Anfangs- und Endpunkt</li>
<li>Weg längs der Bahn $\Gamma$: $\Delta s = \int_\Gamma |d\vec r| = \int_\Gamma\sqrt{(dx)^2+(dy)^2+(dz)^2}$ (2.5)</li></ul>
Der Ortsvektor bezieht sich immer auf den <b>Ursprung</b> und ist <b>nicht frei verschiebbar</b>. Der Verschiebungsvektor ist eine Differenz zweier Ortsvektoren und hängt deshalb nicht vom Ursprung ab.`,
    meta: "Skript: Abschnitt 2.3, Gl. (2.1)–(2.5), Abb. 2.1, S. 11–13",
    explanation: R`<b>Intuition:</b> Der Ortsvektor ist ein „Pfeil vom Ursprung zum Teilchen“. Seine Spitze fährt im Lauf der Zeit die <b>Bahnkurve</b> $\Gamma$ ab. Die Zeit $t$ ist dabei der Kurvenparameter.<br><br>
<b>Weg vs. Verschiebung:</b> Die Verschiebung $\Delta\vec r$ interessiert nur Start- und Endpunkt (wie die Luftlinie), der Weg $\Delta s$ addiert alle kleinen Stücke $|d\vec r|$ entlang der Kurve (wie ein Kilometerzähler). Immer gilt $\Delta s\ge|\Delta\vec r|$, Gleichheit nur bei geradliniger Bewegung ohne Umkehr.<br><br>
<b>Ursprungsabhängigkeit:</b> Verschiebt man den Ursprung um $\vec b$, wird $\vec r\to\vec r-\vec b$, aber $\Delta\vec r$ bleibt gleich. Physikalisch messbare Grössen wie Geschwindigkeit hängen deshalb nicht von der Wahl des Ursprungs ab, wohl aber vom gewählten <b>Bezugssystem</b> (bewegt oder ruhend, Kap. 3.11).<br><br>
<b>Zusammenhang:</b> Der Einheitsvektor $\hat r$ taucht überall auf, wo etwas radial wirkt, etwa bei der Gravitations- und der Coulombkraft $\vec F\propto -\hat r/r^2$ (Kap. 3.10).`,
    derivation: R`Warum $\Delta s\ge |\Delta\vec r|$, und wie man die Weglänge berechnet:
<ol class="fc-steps">
<li>$d\vec r = (dx,dy,dz)\;\Rightarrow\;|d\vec r| = \sqrt{(dx)^2+(dy)^2+(dz)^2}$<em>Ein infinitesimales Stück der Bahn ist näherungsweise gerade; seine Länge folgt aus Pythagoras in 3D.</em></li>
<li>$\Delta\vec r = \int_\Gamma d\vec r$<em>Die Verschiebung ist die (vektorielle) Summe aller kleinen Verschiebungsstücke.</em></li>
<li>$|\Delta\vec r| = \left|\int_\Gamma d\vec r\right| \le \int_\Gamma |d\vec r| = \Delta s$<em>Dreiecksungleichung für Integrale: Der Betrag einer Summe ist höchstens die Summe der Beträge.</em></li>
<li>Gleichheit $\iff$ alle $d\vec r$ zeigen in dieselbe Richtung<em>Also nur bei geradliniger Bewegung ohne Richtungsumkehr.</em></li>
</ol>`,
    example: R`<b>Halbkreis mit Radius $R$:</b> Start bei $(R,0,0)$, Ende bei $(-R,0,0)$. Dann ist $\Delta\vec r = (-2R,0,0)$, also $|\Delta\vec r| = 2R$, aber der Weg ist $\Delta s = \pi R\approx 1{,}57\cdot 2R$.<br><br>
<b>Ganzer Kreis:</b> $\Delta\vec r = \vec 0$, aber $\Delta s = 2\pi R$.<br><br>
<b>Einheitsvektor:</b> $\vec r = (3,4,0)\,\text{m}$ ergibt $r = 5\,\text{m}$ und $\hat r = (0{,}6;\,0{,}8;\,0)$, dimensionslos mit Länge 1.`,
    counterexample: R`<b>Ortsvektor ist nicht verschiebbar:</b> Zeichnet man $\vec r$ an einer anderen Stelle an, beschreibt er einen anderen Ort, anders als ein Geschwindigkeits- oder Kraftpfeil, der frei verschoben werden darf.<br>
<b>Am Ursprung</b> ist $\hat r = \vec r/r$ nicht definiert ($r=0$). Radiale Kraftgesetze haben dort eine Singularität.`,
    pitfalls: R`<ul><li>Weg und Verschiebung verwechseln (z. B. „Durchschnittsgeschwindigkeit nach einer Runde = 0“ ist vektoriell richtig, als Tempo aber falsch).</li>
<li>Vergessen, dass $\hat r$ dimensionslos ist; die Einheit steckt in $r$.</li>
<li>Ein linkshändiges Koordinatensystem verwenden: Das Skript setzt rechtshändig voraus ($x,y,z$ in dieser Reihenfolge), sonst wechseln Kreuzprodukte das Vorzeichen.</li></ul>`
  },

  // ========================================================================
  // 2.4 GESCHWINDIGKEIT
  // ========================================================================
  {
    id: "ph2_geschwindigkeit",
    title: "Mittlere und momentane Geschwindigkeit",
    category: "2.4 Geschwindigkeit",
    type: "definition",
    front: R`Wie sind die <b>mittlere</b> und die <b>momentane Geschwindigkeit</b> definiert? Wie erhält man die Komponenten, und warum steht $\vec v$ immer tangential zur Bahn?`,
    back: R`<b>Mittlere Geschwindigkeit</b> im Intervall $[t,t+\Delta t]$:
$$\langle\vec v\rangle = \frac{\Delta\vec r}{\Delta t} = \frac{\vec r(t+\Delta t)-\vec r(t)}{\Delta t}\qquad(2.6)$$
<b>Momentane Geschwindigkeit</b> (Grenzwert $\Delta t\to0$):
$$\vec v(t) = \lim_{\Delta t\to0}\frac{\vec r(t+\Delta t)-\vec r(t)}{\Delta t} = \frac{d\vec r}{dt} \stackrel{\text{def}}{=} \dot{\vec r}(t)\qquad(2.7)$$
<b>Komponenten</b> (nur in kartesischen Koordinaten so einfach!):
$$\vec v(t) = \begin{pmatrix}\dot x(t)\\ \dot y(t)\\ \dot z(t)\end{pmatrix}\qquad(2.8)$$
$\vec v$ ist ein Vektor: Es zählen der Betrag $v$ (Tempo) <i>und</i> die Richtung $\hat v$. Im Weg-Zeit-Diagramm $x(t)$ ist $v(t_0)$ die <b>Tangentensteigung</b> bei $t_0$.`,
    meta: "Skript: Abschnitt 2.4.1, Gl. (2.6)–(2.8), Abb. 2.2–2.3, S. 13–14",
    explanation: R`<b>Intuition:</b> Die mittlere Geschwindigkeit verbindet zwei Bahnpunkte durch eine Sehne. Je kleiner $\Delta t$, desto mehr dreht sich die Sehne in die Tangente (Abb. 2.2). Deshalb zeigt $\vec v$ stets <b>tangential</b> zur Bahn, in Bewegungsrichtung.<br><br>
<b>Tempo vs. Geschwindigkeit:</b> $|\vec v| = ds/dt$ ist die Ableitung der Weglänge (Bahngeschwindigkeit), $\vec v$ zusätzlich die Richtung. Im Mittel gilt $\langle|\vec v|\rangle = \Delta s/\Delta t\ge|\langle\vec v\rangle|$.<br><br>
<b>Warum „nur kartesisch“?</b> In krummlinigen Koordinaten hängen die Basisvektoren selbst vom Ort ab und ändern sich mit der Bewegung. In Polarkoordinaten gilt z. B. $\vec v = \dot\rho\,\vec e_\rho + \rho\dot\varphi\,\vec e_\varphi$ und nicht einfach $(\dot\rho,\dot\varphi)$ (Anhang 11.2.8).<br><br>
<b>Zusammenhang:</b> Die Geschwindigkeit hängt vom Bezugssystem ab: Im fahrenden Zug ruht der Passagier, vom Bahnsteig aus bewegt er sich (Galilei-Transformation $\vec v = \vec v' + \vec u$, Kap. 3.11).`,
    derivation: R`Warum zeigt $\vec v$ tangential? Ableitung entlang der parametrisierten Bahn:
<ol class="fc-steps">
<li>$\vec r(t+\Delta t) = \vec r(t) + \dot{\vec r}(t)\,\Delta t + \mathcal O(\Delta t^2)$<em>Taylorentwicklung jeder Komponente um $t$.</em></li>
<li>$\Delta\vec r = \dot{\vec r}\,\Delta t + \mathcal O(\Delta t^2)$<em>Die Sehne ist in erster Ordnung parallel zu $\dot{\vec r}$.</em></li>
<li>$\frac{\Delta\vec r}{\Delta t} \to \dot{\vec r}$ für $\Delta t\to 0$<em>Die quadratische Korrektur verschwindet nach Division durch $\Delta t$: Die Sehnenrichtung wird zur Tangentenrichtung.</em></li>
<li>$|\vec v| = \lim\frac{|\Delta\vec r|}{\Delta t} = \lim\frac{\Delta s}{\Delta t} = \frac{ds}{dt}$<em>Für $\Delta t\to0$ werden Sehne und Bogen gleich lang: Der Betrag der Geschwindigkeit ist die Bahngeschwindigkeit.</em></li>
</ol>`,
    example: R`$x(t) = 3\,\tfrac{\text{m}}{\text{s}^2}\,t^2$ (eindimensional).<br>
Momentan: $v(t) = \dot x = 6\,\tfrac{\text{m}}{\text{s}^2}\,t$, also $v(2\,\text{s}) = 12\,\text{m/s}$.<br>
Mittel über $[0,2\,\text{s}]$: $\langle v\rangle = \frac{x(2)-x(0)}{2\,\text{s}} = \frac{12\,\text{m}}{2\,\text{s}} = 6\,\text{m/s}$. Bei linear wachsender Geschwindigkeit ist der Mittelwert genau der Wert in der Intervallmitte, $v(1\,\text{s}) = 6\,\text{m/s}$.`,
    counterexample: R`<b>Hin und zurück:</b> 10 km zur Uni und zurück in 1 h: $\langle\vec v\rangle = \vec 0$ (Start = Ziel), aber die mittlere Bahngeschwindigkeit ist $20\,\text{km/h}$.<br>
<b>Polarkoordinaten:</b> Bei der gleichförmigen Kreisbewegung ist $\dot\rho = 0$. Trotzdem ist $\vec v\neq\vec 0$, denn $\vec v = \rho\dot\varphi\,\vec e_\varphi$. Komponentenweises Ableiten der Koordinaten $(\rho,\varphi)$ allein wäre hier falsch.`,
    pitfalls: R`<ul><li>$\langle|\vec v|\rangle$ (mittleres Tempo) mit $|\langle\vec v\rangle|$ verwechseln.</li>
<li>Die mittlere Geschwindigkeit als arithmetisches Mittel von Anfangs- und Endgeschwindigkeit berechnen. Das stimmt nur, wenn $v(t)$ linear ist.</li>
<li>Komponentenformel (2.8) unbesehen in Polar- oder Kugelkoordinaten anwenden.</li>
<li>Den Punkt $\dot{}$ (Zeitableitung) und den Strich $'$ (Ortsableitung) verwechseln.</li></ul>`
  },
  {
    id: "ph2_gleichfoermig",
    title: "Geradlinig gleichförmige Bewegung",
    category: "2.4 Geschwindigkeit",
    type: "beispiel",
    front: R`Ein Körper bewegt sich mit <b>konstanter Geschwindigkeit</b> $v_0$ auf einer Geraden in der $xz$-Ebene, unter dem Winkel $\alpha$ zur $x$-Achse. Wie lautet $\vec r(t)$, und welche Rolle spielen die Integrationskonstanten?`,
    back: R`Geschwindigkeit (2.9):
$$\vec v = \begin{pmatrix}v_0\cos\alpha\\ 0\\ v_0\sin\alpha\end{pmatrix} = \text{const}$$
Gesucht sind drei Funktionen, deren Zeitableitung diese Konstanten ergibt (2.10):
$$\vec r(t) = \begin{pmatrix}x_0 + v_0 t\cos\alpha\\ y_0\\ z_0 + v_0 t\sin\alpha\end{pmatrix}$$
Die <b>Integrationskonstanten</b> $x_0,y_0,z_0$ legen fest, wo der Körper bei $t=0$ ist. Mit dem Start im Ursprung (2.11) folgt
$$\vec r(t) = v_0 t\begin{pmatrix}\cos\alpha\\0\\ \sin\alpha\end{pmatrix} = \vec v\,t\qquad(2.12)$$
Damit ist die erste Differentialgleichung $\dot{\vec r} = \vec v_0$ gelöst. Allgemein gilt $\vec r(t) = \vec r_0 + \vec v_0 t$.`,
    meta: "Skript: Abschnitt 2.4.2, Gl. (2.9)–(2.12), Abb. 2.4, S. 14–15",
    explanation: R`<b>Intuition:</b> Konstante Geschwindigkeit heisst: gleiche Verschiebung in gleichen Zeiten, in gleicher Richtung. Die Bahn ist eine Gerade, der Ort wächst <b>linear</b> mit der Zeit ($\vec r - \vec r_0\propto t$).<br><br>
<b>Koordinatenwahl:</b> Man legt das Koordinatensystem geschickt (hier Bewegung in der $xz$-Ebene), sodass möglichst viele Komponenten null sind. Das ist reine Bequemlichkeit, die Physik ändert sich dadurch nicht.<br><br>
<b>DGL-Sicht:</b> $\dot{\vec r} = \vec v_0$ ist eine Differentialgleichung 1. Ordnung im $\mathbb R^3$. Ihre allgemeine Lösung enthält 3 freie Konstanten, die erst durch die Anfangsbedingung $\vec r(0)$ festgelegt werden. Dieses Muster („allgemeine Lösung + Anfangsbedingungen“) zieht sich durch die ganze Mechanik.<br><br>
<b>Zusammenhang:</b> Nach Newton I (Kap. 3.5) ist das genau die Bewegung eines kräftefreien Körpers in einem Inertialsystem.`,
    derivation: R`Lösung durch Integration (statt „Erraten“):
<ol class="fc-steps">
<li>$\dot x(t) = v_0\cos\alpha$<em>$x$-Komponente der Bewegungsgleichung; rechte Seite ist zeitlich konstant.</em></li>
<li>$\int_0^t \dot x(t')\,dt' = \int_0^t v_0\cos\alpha\,dt'$<em>Beide Seiten von $0$ bis $t$ integrieren.</em></li>
<li>$x(t) - x(0) = v_0 t\cos\alpha$<em>Links: Hauptsatz der Differential- und Integralrechnung; rechts: Integral einer Konstanten.</em></li>
<li>$x(t) = x_0 + v_0 t\cos\alpha$<em>Mit $x_0 := x(0)$; analog $y(t)=y_0$ (da $v_y=0$) und $z(t)=z_0+v_0t\sin\alpha$.</em></li>
<li>$x_0=y_0=z_0=0\;\Rightarrow\;\vec r(t) = \vec v\,t$<em>Anfangsbedingung „Start im Ursprung“ setzt alle Konstanten auf null.</em></li>
</ol>`,
    example: R`$v_0 = 10\,\text{m/s}$, $\alpha = 30^\circ$, Start im Ursprung. Nach $t = 4\,\text{s}$:
$x = 10\cdot4\cdot\cos30^\circ\,\text{m} = 34{,}6\,\text{m}$, $z = 10\cdot4\cdot\sin30^\circ\,\text{m} = 20\,\text{m}$, also $|\vec r| = 40\,\text{m} = v_0 t$ ✓.<br>
Die Bahn $z = x\tan\alpha$ ist eine Gerade durch den Ursprung mit Steigung $\tan30^\circ\approx0{,}577$.`,
    counterexample: R`<b>Konstantes Tempo $\neq$ konstante Geschwindigkeit:</b> Bei der gleichförmigen Kreisbewegung ist $|\vec v|$ konstant, aber die Richtung ändert sich ständig. Die Bewegung ist beschleunigt (Kap. 2.5.3), und $\vec r(t) = \vec r_0 + \vec v_0 t$ gilt dort nicht.`,
    pitfalls: R`<ul><li>Die Integrationskonstanten weglassen. Ohne Anfangsbedingung ist die Lösung nicht eindeutig.</li>
<li>$\sin$ und $\cos$ bei der Zerlegung vertauschen: Die Komponente <i>am</i> Winkel bekommt den $\cos$.</li>
<li>Glauben, die Bewegung sei nur in einer Ebene möglich, weil man $y=0$ gewählt hat. Das war eine Wahl des Koordinatensystems.</li></ul>`
  },
  {
    id: "ph2_integration_ort",
    title: "Ort aus Geschwindigkeit: Integration und Anfangsbedingungen",
    category: "2.4 Geschwindigkeit",
    type: "gesetz",
    front: R`Wie gewinnt man für eine <b>beliebige</b> Geschwindigkeit $\vec v(t)$ den Ort $\vec r(t)$ zurück? Wie viele <b>Anfangsbedingungen</b> braucht man, und wie berechnet man die <b>zurückgelegte Strecke</b>?`,
    back: R`In einer Dimension, mit $v_x = dx/dt$ (2.13):
$$x(t) = x(t_0) + \int_{t_0}^{t} v_x(t')\,dt'\qquad(2.15)$$
In drei Dimensionen komponentenweise:
$$\vec r(t) = \vec r(t_0) + \int_{t_0}^{t}\vec v(t')\,dt'\qquad(2.17)$$
<b>Anfangsbedingungen:</b> DGL 1. Ordnung, also 1 Bedingung pro Dimension: $x(t_0)$ in 1D, den Vektor $\vec r(t_0)$ (3 Zahlen) in 3D.<br><br>
<b>Zurückgelegte Strecke</b> = Bogenlänge der Bahn:
$$\Delta s(t) = \int_{t_0}^{t}|\vec v(t')|\,dt' = \int\sqrt{(dx)^2+(dy)^2+(dz)^2}\qquad(2.18)$$`,
    meta: "Skript: Abschnitt 2.4.3, Gl. (2.13)–(2.18), S. 17",
    explanation: R`<b>Intuition:</b> Integration ist „Aufsummieren kleiner Schritte“: In jedem kurzen Zeitintervall $dt'$ verschiebt sich das Teilchen um $\vec v(t')\,dt'$. Addiert man alle diese Verschiebungen zum Startort, erhält man den heutigen Ort. Grafisch ist $x(t)-x(t_0)$ die <b>Fläche unter der $v(t)$-Kurve</b> (mit Vorzeichen!).<br><br>
<b>Vorzeichen vs. Betrag:</b> Im Ortsintegral heben sich Hin- und Rückwege auf (negative Fläche), in der Weglänge (2.18) nicht, weil dort $|\vec v|$ integriert wird.<br><br>
<b>Zusammenhang:</b> Das ist dieselbe Logik wie bei $\vec v(t) = \vec v(t_0) + \int\vec a\,dt'$ (Kap. 2.5.2). Kennt man $\vec a(t)$, integriert man zweimal und braucht $2\times3 = 6$ Anfangsbedingungen. Genau so löst man später die Newton’sche Bewegungsgleichung $m\ddot{\vec r} = \vec F$.`,
    derivation: R`Herleitung von (2.15) aus der Definition der Geschwindigkeit:
<ol class="fc-steps">
<li>$v_x(t') = \frac{dx(t')}{dt'}$<em>Definition der Geschwindigkeit, mit der Integrationsvariablen $t'$ (um sie von der oberen Grenze $t$ zu unterscheiden).</em></li>
<li>$\int_{t_0}^{t}v_x(t')\,dt' = \int_{t_0}^{t}\frac{dx(t')}{dt'}\,dt'$<em>Beide Seiten über das Intervall $[t_0,t]$ integrieren.</em></li>
<li>$\int_{t_0}^{t}\frac{dx}{dt'}\,dt' = \int_{x(t_0)}^{x(t)}dx = x(t)-x(t_0)$<em>Hauptsatz: Das Integral der Ableitung ist die Differenz der Stammfunktion an den Grenzen (2.14).</em></li>
<li>$x(t) = x(t_0) + \int_{t_0}^{t}v_x(t')\,dt'$<em>Nach $x(t)$ auflösen. Der Startwert $x(t_0)$ ist die nötige Anfangsbedingung.</em></li>
<li>$\vec r(t) = \vec r(t_0) + \int_{t_0}^{t}\vec v(t')\,dt'$<em>Dasselbe für $y$ und $z$: Vektorintegrale werden komponentenweise ausgeführt (2.17).</em></li>
</ol>`,
    example: R`<b>Exponentiell abklingende Geschwindigkeit</b> (z. B. ein Boot nach dem Abschalten des Motors): $v(t) = v_0 e^{-t/\tau}$, $x(0)=0$.
$$x(t) = \int_0^t v_0 e^{-t'/\tau}dt' = v_0\tau\left(1-e^{-t/\tau}\right)$$
Für $t\to\infty$ strebt $x\to v_0\tau$: Trotz unendlicher Zeit kommt das Boot nur endlich weit. Mit $v_0 = 5\,\text{m/s}$ und $\tau = 4\,\text{s}$ sind das $20\,\text{m}$.`,
    counterexample: R`<b>Verschiebung ≠ Strecke:</b> $v(t) = v_0\cos(\omega t)$ (Hin- und Herbewegung). Über eine Periode $T = 2\pi/\omega$ ist $\int_0^T v\,dt = 0$ (zurück am Start), aber die Strecke ist $\int_0^T|v|\,dt = 4v_0/\omega\neq0$.`,
    pitfalls: R`<ul><li>Die Anfangsbedingung (Integrationskonstante) vergessen. Ohne sie fehlt der Startort.</li>
<li>Integrationsvariable und obere Grenze gleich nennen ($\int_0^t v(t)\,dt$ ist missverständlich).</li>
<li>Für die Strecke $\vec v$ statt $|\vec v|$ integrieren.</li>
<li>Glauben, man könne ohne Integration einfach $x = v\,t$ schreiben. Das gilt nur bei <b>konstanter</b> Geschwindigkeit.</li></ul>`
  },

  // ========================================================================
  // 2.5 BESCHLEUNIGUNG
  // ========================================================================
  {
    id: "ph2_beschleunigung",
    title: "Beschleunigung als Vektor: Betrag und Richtung ändern sich",
    category: "2.5 Beschleunigung",
    type: "definition",
    front: R`Wie ist die <b>Beschleunigung</b> $\vec a$ definiert? Warum kann eine Bewegung mit <b>konstantem Tempo</b> trotzdem beschleunigt sein, und wann ändert sich das Tempo tatsächlich?`,
    back: R`Mittlere und momentane Beschleunigung:
$$\langle\vec a\rangle = \frac{\Delta\vec v}{\Delta t},\qquad \vec a(t) = \lim_{\Delta t\to 0}\frac{\vec v(t+\Delta t)-\vec v(t)}{\Delta t} = \dot{\vec v}(t)\qquad(2.19,\,2.20)$$
$$\vec a = \frac{d\vec v}{dt} = \frac{d^2\vec r}{dt^2} = \ddot{\vec r},\qquad \vec a = \begin{pmatrix}\ddot x\\ \ddot y\\ \ddot z\end{pmatrix}\qquad(2.21,\,2.22)$$
Eine Änderung des Geschwindigkeits<b>vektors</b> kann entstehen durch eine Änderung
<ul><li>seines <b>Betrags</b> (schneller/langsamer),</li>
<li>seiner <b>Richtung</b> (Kurve),</li>
<li>oder beider.</li></ul>
Deshalb ist z. B. die Kreisbewegung mit konstantem Tempo eine <b>beschleunigte</b> Bewegung.`,
    meta: "Skript: Abschnitt 2.5.1, Gl. (2.19)–(2.22), S. 18",
    explanation: R`<b>Intuition:</b> Beschleunigung ist alles, was den Geschwindigkeits<i>pfeil</i> verändert, egal ob er länger, kürzer oder gedreht wird. Im Auto spürt man sie beim Gasgeben, Bremsen <i>und</i> in der Kurve.<br><br>
<b>Die zentrale Zerlegung:</b> Der Anteil von $\vec a$ <b>parallel</b> zu $\vec v$ ändert das Tempo, der Anteil <b>senkrecht</b> zu $\vec v$ ändert nur die Richtung (genauer in 2.5.6). Steht $\vec a$ immer senkrecht auf $\vec v$, bleibt das Tempo konstant.<br><br>
<b>Zusammenhang:</b> Newton II, $\vec F = m\vec a$ (Kap. 3), sagt, dass Kräfte Beschleunigungen verursachen, keine Geschwindigkeiten. Eine Kraft senkrecht zur Bewegung (Zentripetalkraft, Lorentzkraft) leistet deshalb keine Arbeit und ändert die kinetische Energie nicht (Kap. 4).`,
    derivation: R`Wann ändert sich das Tempo? Ableitung von $v^2 = \vec v\cdot\vec v$:
<ol class="fc-steps">
<li>$v^2 = \vec v\cdot\vec v$<em>Das Quadrat des Tempos ist das Skalarprodukt der Geschwindigkeit mit sich selbst.</em></li>
<li>$\frac{d}{dt}(v^2) = \dot{\vec v}\cdot\vec v + \vec v\cdot\dot{\vec v} = 2\,\vec v\cdot\vec a$<em>Produktregel für das Skalarprodukt; beide Terme sind gleich, da das Skalarprodukt symmetrisch ist.</em></li>
<li>$2v\,\dot v = 2\,\vec v\cdot\vec a\;\Rightarrow\;\dot v = \frac{\vec v\cdot\vec a}{v} = \vec a\cdot\hat v$<em>Links Kettenregel; durch $2v$ teilen ($v\neq0$). Die Tempoänderung ist die Projektion von $\vec a$ auf die Bewegungsrichtung.</em></li>
<li>$\vec a\perp\vec v\;\Rightarrow\;\dot v = 0$<em>Steht die Beschleunigung senkrecht zur Geschwindigkeit, bleibt der Betrag konstant: Nur die Richtung ändert sich.</em></li>
</ol>`,
    example: R`Ein Auto fährt mit konstant $20\,\text{m/s}$ durch eine Kurve mit Radius $50\,\text{m}$. Das Tempo ist konstant, trotzdem ist $|\vec a| = v^2/r = 8\,\text{m/s}^2$ (Zentripetalbeschleunigung, Kap. 2.5.3). Das ist fast so viel wie die Fallbeschleunigung, und die Insassen spüren es deutlich.`,
    counterexample: R`<b>„Geschwindigkeit null ⇒ Beschleunigung null“ ist falsch:</b> Am höchsten Punkt eines senkrechten Wurfs ist $v = 0$, aber $\vec a = -g\,\vec e_z\neq\vec 0$. Wäre dort $a=0$, bliebe der Ball oben stehen.<br>
<b>Umgekehrt:</b> Grosse Geschwindigkeit bedeutet nicht grosse Beschleunigung. Ein Flugzeug im Reiseflug hat $v\approx250\,\text{m/s}$, aber $\vec a\approx\vec 0$.`,
    pitfalls: R`<ul><li>„Beschleunigung“ nur als Tempozunahme verstehen; Bremsen und Kurven sind ebenfalls Beschleunigungen.</li>
<li>$\vec a$ automatisch parallel zu $\vec v$ annehmen. Im Allgemeinen haben sie verschiedene Richtungen.</li>
<li>Vorzeichen beim Bremsen: „Verzögerung $6\,\text{m/s}^2$“ bedeutet $a = -6\,\text{m/s}^2$ entlang der Bewegungsrichtung.</li>
<li>$\dot v$ (Ableitung des Betrags) mit $|\dot{\vec v}|$ (Betrag der Ableitung) verwechseln. Bei der Kreisbewegung ist $\dot v = 0$, aber $|\dot{\vec v}|\neq0$.</li></ul>`
  },
  {
    id: "ph2_konst_beschleunigung",
    title: "Gleichförmig beschleunigte Bewegung: allgemeine Lösung",
    category: "2.5 Beschleunigung",
    type: "gesetz",
    front: R`Wie lauten $\vec v(t)$ und $\vec r(t)$ bei <b>konstanter Beschleunigung</b> $\vec a_0$? Wie viele Anfangsbedingungen braucht man, und welche zeitfreie Beziehung zwischen $v$ und dem Weg folgt?`,
    back: R`Für $\vec a(t) = \vec a_0 = \text{const}$ (Betrag <i>und</i> Richtung konstant):
$$\vec v(t) = \vec v(t_0) + \vec a_0\,(t-t_0)\qquad(2.25)$$
$$\vec r(t) = \vec r(t_0) + \vec v(t_0)\,(t-t_0) + \tfrac12\vec a_0\,(t-t_0)^2\qquad(2.26)$$
Komponentenweise mit $t_0 = 0$ (2.27): $x(t) = x(0) + v_x(0)\,t + \tfrac12 a_{0x}t^2$ usw.<br><br>
<b>Anfangsbedingungen:</b> DGL 2. Ordnung im $\mathbb R^3$, also $2\times3 = 6$: der Anfangsort $\vec r(t_0)$ und die Anfangsgeschwindigkeit $\vec v(t_0)$.<br><br>
<b>Zeitfreie Form</b> (in einer Richtung, $t$ eliminiert):
$$v^2 = v_0^2 + 2a\,(x-x_0)$$
Freier Fall und schiefer Wurf sind Spezialfälle, die sich <b>nur durch die Anfangsbedingungen</b> unterscheiden.`,
    meta: "Skript: Abschnitt 2.5.2, Gl. (2.23)–(2.27), S. 19",
    explanation: R`<b>Intuition:</b> Konstante Beschleunigung heisst: Die Geschwindigkeit wächst <b>linear</b> mit der Zeit, der Ort deshalb <b>quadratisch</b>. Der Faktor $\tfrac12$ kommt daher, dass die mittlere Geschwindigkeit im Intervall genau der Mittelwert aus Anfangs- und Endgeschwindigkeit ist.<br><br>
<b>Abhängigkeiten:</b> Bei Start aus der Ruhe gilt $s\propto t^2$ und $v\propto t$, aber $v\propto\sqrt s$. Den doppelten Weg erreicht man also nicht mit der doppelten Endgeschwindigkeit, sondern mit dem $\sqrt2$-fachen. Umgekehrt: Doppelte Anfangsgeschwindigkeit bedeutet <b>vierfachen</b> Bremsweg ($s = v_0^2/(2|a|)$).<br><br>
<b>Unabhängigkeit der Komponenten:</b> Die drei Koordinaten entwickeln sich völlig unabhängig voneinander. Sie sind nur über den gemeinsamen Parameter $t$ verknüpft. Das macht den schiefen Wurf so einfach.<br><br>
<b>Zusammenhang:</b> Konstante Beschleunigung entsteht durch eine konstante Kraft ($\vec a = \vec F/m$), z. B. die Schwerkraft nahe der Erdoberfläche.`,
    derivation: R`Zweimal integrieren und dann die Zeit eliminieren:
<ol class="fc-steps">
<li>$\vec v(t) = \vec v(t_0) + \int_{t_0}^{t}\vec a_0\,dt' = \vec v(t_0) + \vec a_0(t-t_0)$<em>Erste Integration wie in (2.17), nur eine Stufe höher (2.24–2.25). Da $\vec a_0$ konstant ist, steht es vor dem Integral.</em></li>
<li>$\vec r(t) = \vec r(t_0) + \int_{t_0}^{t}\left[\vec v(t_0)+\vec a_0(t'-t_0)\right]dt'$<em>Zweite Integration: das Ergebnis von Schritt 1 als Geschwindigkeit einsetzen.</em></li>
<li>$\int_{t_0}^{t}(t'-t_0)\,dt' = \tfrac12(t-t_0)^2$<em>Stammfunktion von $(t'-t_0)$ ist $\tfrac12(t'-t_0)^2$; an der unteren Grenze null.</em></li>
<li>$\vec r(t) = \vec r(t_0) + \vec v(t_0)(t-t_0) + \tfrac12\vec a_0(t-t_0)^2$<em>Ergebnis (2.26). Zwei Integrationen bringen zwei vektorielle Konstanten: $\vec r(t_0)$ und $\vec v(t_0)$.</em></li>
<li>1D, $t_0=0$: $t = \frac{v-v_0}{a}$ einsetzen in $x - x_0 = v_0t+\tfrac12at^2$<em>Zeitfreie Form: $t$ aus der Geschwindigkeitsgleichung in die Ortsgleichung einsetzen.</em></li>
<li>$x-x_0 = \frac{v_0(v-v_0)}{a}+\frac{(v-v_0)^2}{2a} = \frac{v^2-v_0^2}{2a}$<em>Auf gemeinsamen Nenner $2a$ bringen: $2v_0v-2v_0^2+v^2-2v_0v+v_0^2 = v^2-v_0^2$. Also $v^2 = v_0^2+2a(x-x_0)$.</em></li>
</ol>`,
    example: R`<b>Bremsweg:</b> Auto mit $v_0 = 30\,\text{m/s}$ ($108\,\text{km/h}$), Bremsverzögerung $|a| = 6\,\text{m/s}^2$.<br>
Bremszeit: $t = v_0/|a| = 5\,\text{s}$. Bremsweg: $s = v_0^2/(2|a|) = 900/12\,\text{m} = 75\,\text{m}$.<br>
Kontrolle mit (2.26): $s = 30\cdot5 - \tfrac12\cdot6\cdot25 = 150-75 = 75\,\text{m}$ ✓.<br>
Bei $v_0 = 15\,\text{m/s}$ (halbe Geschwindigkeit) ist der Bremsweg nur $18{,}75\,\text{m}$, also ein Viertel.`,
    counterexample: R`<b>Beschleunigung nicht konstant:</b> Ein Fallschirmspringer mit Luftwiderstand ($F\propto v^2$) hat eine Beschleunigung, die von $g$ auf $0$ abnimmt (Endgeschwindigkeit, Kap. 3.9.5). $s = \tfrac12gt^2$ würde nach 60 s Fall eine Geschwindigkeit von $589\,\text{m/s}$ liefern. Real sind es etwa $55\,\text{m/s}$.<br>
<b>Nur Betrag konstant:</b> Bei der Kreisbewegung ist $|\vec a|$ konstant, aber nicht die Richtung. (2.26) gilt dort nicht.`,
    pitfalls: R`<ul><li>Die Formeln auf nicht konstante Beschleunigungen anwenden.</li>
<li>Mit $t$ statt $(t-t_0)$ rechnen, wenn die Uhr nicht bei $t_0=0$ startet.</li>
<li>Vorzeichen: Ist die $z$-Achse nach oben gerichtet, ist $a_{0z} = -g$; nach unten gerichtet $+g$. Einmal festlegen und konsequent bleiben.</li>
<li>Den Faktor $\tfrac12$ vergessen oder den Bremsweg linear statt quadratisch mit $v_0$ skalieren.</li></ul>`
  },
  {
    id: "ph2_freier_fall",
    title: "Freier Fall im homogenen Schwerefeld",
    category: "2.5 Beschleunigung",
    type: "beispiel",
    front: R`Ein Körper wird aus der Höhe $z_0$ aus der Ruhe losgelassen ($z$-Achse nach oben). Wie lauten $\vec r(t)$, die <b>Fallzeit</b> und die <b>Aufprallgeschwindigkeit</b>? Wovon hängen sie ab und wovon nicht?`,
    back: R`Beschleunigung und Anfangsbedingungen (2.28–2.29):
$$\vec a_0 = \vec g = \begin{pmatrix}0\\0\\-g\end{pmatrix},\quad g = 9{,}81\,\tfrac{\text{m}}{\text{s}^2},\qquad \vec r(0) = \begin{pmatrix}x_0\\y_0\\z_0\end{pmatrix},\quad \vec v(0) = \vec 0$$
Einsetzen in (2.27):
$$\vec r(t) = \begin{pmatrix}x_0\\ y_0\\ z_0-\tfrac12 g t^2\end{pmatrix}\qquad(2.30)$$
Fallhöhe $h$ (Aufprall bei $z = z_0-h$):
$$t_F = \sqrt{\frac{2h}{g}},\qquad v_F = g\,t_F = \sqrt{2gh}$$
Beides ist <b>unabhängig von der Masse</b>; es gilt $t_F\propto\sqrt h$ und $v_F\propto\sqrt h$.`,
    meta: "Skript: Abschnitt 2.5.2, 1. Beispiel, Gl. (2.28)–(2.30), S. 19–20",
    explanation: R`<b>Intuition:</b> Ohne Luftwiderstand fallen alle Körper gleich schnell (Galilei). Die Fallbewegung ist eine reine Eigenschaft des Schwerefelds, $g$ hängt nicht vom fallenden Körper ab. Der Grund (Kap. 3.1.2): Träge und schwere Masse sind gleich, $m$ kürzt sich in $m\ddot z = -mg$ heraus.<br><br>
<b>Proportionalitäten:</b> Vierfache Höhe ergibt doppelte Fallzeit und doppelte Aufprallgeschwindigkeit. Die in den ersten $n$ gleich langen Zeitabschnitten zurückgelegten Strecken verhalten sich wie $1:3:5:7\dots$ (Galileis Gesetz der ungeraden Zahlen), weil $s\propto t^2$.<br><br>
<b>Gültigkeitsbereich:</b> $g = 9{,}81\,\text{m/s}^2$ gilt „auf und nahe der Erdoberfläche“. Für grosse Höhen nimmt $g\propto1/r^2$ ab (Kap. 3.10.3, Kap. 7), und in Luft begrenzt der Strömungswiderstand die Geschwindigkeit.<br><br>
<b>Zusammenhang Energie:</b> $v_F = \sqrt{2gh}$ folgt ebenso aus der Energieerhaltung $mgh = \tfrac12mv^2$ (Kap. 4): ein erstes Beispiel dafür, dass zwei unabhängige Wege dasselbe Ergebnis liefern.`,
    derivation: R`Fallzeit und Aufprallgeschwindigkeit Schritt für Schritt:
<ol class="fc-steps">
<li>$z(t) = z_0 + v_z(0)\,t - \tfrac12 g t^2$ mit $v_z(0) = 0$<em>$z$-Komponente von (2.27) mit $a_{0z} = -g$ (Achse nach oben).</em></li>
<li>$z(t_F) = z_0 - h \;\Rightarrow\; -\tfrac12 g t_F^2 = -h$<em>Aufprallbedingung: Der Körper ist um $h$ gefallen.</em></li>
<li>$t_F = \sqrt{2h/g}$<em>Nach $t_F$ auflösen; die negative Wurzel ist physikalisch irrelevant (vor dem Loslassen).</em></li>
<li>$v_z(t_F) = -g\,t_F = -g\sqrt{2h/g} = -\sqrt{2gh}$<em>Geschwindigkeit aus $v_z(t) = -gt$. Das Minuszeichen heisst „nach unten“; der Betrag ist $\sqrt{2gh}$.</em></li>
<li>Kontrolle: $v^2 = 0 + 2(-g)(z-z_0) = 2gh$<em>Mit der zeitfreien Formel $v^2 = v_0^2+2a\,\Delta z$ kommt dasselbe heraus.</em></li>
</ol>`,
    example: R`Ein Stein fällt von einer $20\,\text{m}$ hohen Brücke:<br>
$t_F = \sqrt{2\cdot20/9{,}81}\,\text{s} = 2{,}02\,\text{s}$, $v_F = \sqrt{2\cdot9{,}81\cdot20}\,\text{m/s} = 19{,}8\,\text{m/s}\approx71\,\text{km/h}$.<br>
<b>Umgekehrt (Höhe aus Fallzeit):</b> Hört man den Aufschlag nach $3\,\text{s}$ (Schalllaufzeit vernachlässigt), ist $h = \tfrac12 g t^2\approx44\,\text{m}$.`,
    counterexample: R`<b>Feder und Kugel in Luft</b> fallen verschieden schnell. Das liegt nicht an $g$, sondern am Strömungswiderstand, der bei der Feder im Verhältnis zur Gewichtskraft riesig ist. Im evakuierten Fallrohr fallen beide gleich (klassischer Hörsaalversuch).<br>
<b>Grosse Höhen:</b> Aus $h = 1000\,\text{km}$ ist $g$ schon um etwa 25 % kleiner, und $t_F = \sqrt{2h/g}$ ist nur noch eine grobe Schätzung.`,
    pitfalls: R`<ul><li>Vorzeichenchaos: Achse nach oben bedeutet $a_z = -g$, und die Aufprallgeschwindigkeit ist negativ.</li>
<li>$v_F\propto h$ statt $v_F\propto\sqrt h$ annehmen.</li>
<li>„Schwere Körper fallen schneller“: ohne Luftwiderstand falsch.</li>
<li>Bei Echolot-/Steinwurf-Aufgaben die Schalllaufzeit vergessen, wenn sie nicht vernachlässigbar ist.</li></ul>`
  },
  {
    id: "ph2_schiefer_wurf",
    title: "Schiefer Wurf: Wurfparabel, Wurfweite und Wurfhöhe",
    category: "2.5 Beschleunigung",
    type: "herleitung",
    front: R`Ein Körper wird aus der Höhe $z_0$ mit Geschwindigkeit $v$ unter dem Winkel $\alpha$ geworfen. Leite die <b>Bahnkurve</b> $z(x)$ her. Für $z_0 = 0$: Welche <b>Wurfweite</b>, <b>Steighöhe</b> und welcher optimale Winkel folgen?`,
    back: R`Anfangsbedingungen (2.31): $\vec r(0) = (0,0,z_0)$, $\vec v(0) = (v\cos\alpha,\,0,\,v\sin\alpha)$; dazu $\vec a = (0,0,-g)$.
$$\vec r(t) = \begin{pmatrix}v t\cos\alpha\\ 0\\ z_0 + v t\sin\alpha - \tfrac12 g t^2\end{pmatrix}\qquad(2.32)$$
Zeit eliminieren mit $t = \dfrac{x}{v\cos\alpha}$ (2.33):
$$z(x) = z_0 + x\tan\alpha - \frac{g\,x^2}{2v^2\cos^2\alpha}\qquad(2.34)$$
Das ist die <b>Wurfparabel</b>. Für $z_0 = 0$:
$$t_\text{Flug} = \frac{2v\sin\alpha}{g},\qquad W = \frac{v^2\sin 2\alpha}{g},\qquad H = \frac{v^2\sin^2\alpha}{2g}$$
Maximale Wurfweite bei $\alpha = 45^\circ$: $W_\text{max} = v^2/g$.`,
    meta: "Skript: Abschnitt 2.5.2, 2. Beispiel, Gl. (2.31)–(2.34), S. 20",
    explanation: R`<b>Intuition:</b> Die Komponenten sind <b>völlig unabhängig</b> und nur über die Zeit verknüpft. Horizontal fliegt der Körper gleichförmig (keine Kraft in $x$-Richtung), vertikal führt er einen senkrechten Wurf aus. Überlagert ergibt das eine Parabel.<br><br>
<b>Abhängigkeiten:</b>
<ul><li>$W\propto v^2$: Doppelte Abwurfgeschwindigkeit ergibt vierfache Weite.</li>
<li>$W\propto1/g$: Auf dem Mond ($g/6$) fliegt alles sechsmal so weit.</li>
<li>$\sin2\alpha$ ist symmetrisch um $45^\circ$: $30^\circ$ und $60^\circ$ ergeben dieselbe Weite, aber verschiedene Höhen und Flugzeiten.</li></ul>
<b>Zusammenhang:</b> Im Scheitel ist $v_z = 0$, die Geschwindigkeit ist rein horizontal ($v\cos\alpha$) und $\vec a = \vec g$ steht senkrecht auf $\vec v$. Hier ist die Normalbeschleunigung maximal, der Krümmungsradius $\rho = v^2\cos^2\alpha/g$ am kleinsten (vgl. 2.5.6).`,
    derivation: R`<ol class="fc-steps">
<li>$x(t) = v t\cos\alpha$<em>Horizontal: keine Beschleunigung, also gleichförmige Bewegung mit $v_x = v\cos\alpha$.</em></li>
<li>$z(t) = z_0 + v t\sin\alpha - \tfrac12 g t^2$<em>Vertikal: konstante Beschleunigung $-g$, Anfangsgeschwindigkeit $v\sin\alpha$ (aus (2.27)).</em></li>
<li>$t = \dfrac{x}{v\cos\alpha}$<em>Gleichung 1 nach $t$ auflösen (für $\alpha\neq90^\circ$), um $t$ als Parameter zu eliminieren.</em></li>
<li>$z = z_0 + \dfrac{x\sin\alpha}{\cos\alpha} - \dfrac{g}{2}\dfrac{x^2}{v^2\cos^2\alpha}$<em>In Gleichung 2 einsetzen: linear in $x$ plus negativ-quadratisch in $x$, also eine nach unten geöffnete Parabel.</em></li>
<li>$z_0=0,\ z=0:\; x\left(\tan\alpha - \dfrac{g x}{2v^2\cos^2\alpha}\right)=0$<em>Landepunkt: Nullstellen der Parabel. $x=0$ ist der Abwurf.</em></li>
<li>$W = \dfrac{2v^2\sin\alpha\cos\alpha}{g} = \dfrac{v^2\sin2\alpha}{g}$<em>Die Klammer nullsetzen und $2\sin\alpha\cos\alpha = \sin2\alpha$ benutzen.</em></li>
<li>$\dfrac{dW}{d\alpha} = \dfrac{2v^2\cos2\alpha}{g} = 0\;\Rightarrow\;\alpha = 45^\circ$<em>Maximum der Weite: $\sin2\alpha = 1$.</em></li>
<li>$v_z(t_S) = v\sin\alpha - g t_S = 0\;\Rightarrow\;t_S = \dfrac{v\sin\alpha}{g},\quad H = z(t_S) = \dfrac{v^2\sin^2\alpha}{2g}$<em>Scheitel: Vertikalgeschwindigkeit verschwindet; die Flugzeit ist $2t_S$ (Symmetrie bei $z_0=0$).</em></li>
</ol>`,
    example: R`Ball mit $v = 20\,\text{m/s}$, $\alpha = 30^\circ$, $z_0 = 0$, $g = 9{,}81\,\text{m/s}^2$:<br>
$W = \frac{400\cdot\sin60^\circ}{9{,}81}\,\text{m} = 35{,}3\,\text{m}$, $H = \frac{400\cdot0{,}25}{2\cdot9{,}81}\,\text{m} = 5{,}10\,\text{m}$, $t_\text{Flug} = \frac{2\cdot20\cdot0{,}5}{9{,}81}\,\text{s} = 2{,}04\,\text{s}$.<br>
Mit $\alpha = 60^\circ$: gleiche Weite $35{,}3\,\text{m}$, aber $H = 15{,}3\,\text{m}$ und $t_\text{Flug} = 3{,}53\,\text{s}$.<br>
Mit $\alpha = 45^\circ$: $W_\text{max} = 40{,}8\,\text{m}$.`,
    counterexample: R`<b>45° ist nicht immer optimal:</b>
<ul><li>Bei Abwurf von erhöhter Position ($z_0>0$, z. B. Kugelstossen aus etwa 2 m Höhe) liegt der optimale Winkel <i>unter</i> $45^\circ$ (typisch $38^\circ$–$42^\circ$), weil der Körper ohnehin länger fliegt.</li>
<li>Mit Luftwiderstand ist die Bahn keine Parabel mehr: Sie ist asymmetrisch (steiler Abstieg), und der optimale Winkel ist kleiner.</li></ul>
<b>$\alpha = 90^\circ$:</b> Senkrechter Wurf, $\cos\alpha = 0$; die Elimination $t = x/(v\cos\alpha)$ ist dann nicht möglich, und die „Parabel“ entartet zu einer senkrechten Strecke.`,
    pitfalls: R`<ul><li>Im Nenner $\cos^2\alpha$ vergessen oder $\cos\alpha$ statt $\cos^2\alpha$ schreiben.</li>
<li>$W = v^2\sin2\alpha/g$ auch bei $z_0\neq0$ benutzen. Diese Formel gilt nur für Abwurf und Landung auf gleicher Höhe.</li>
<li>Annehmen, die Horizontalgeschwindigkeit ändere sich (ohne Luftwiderstand bleibt sie $v\cos\alpha$).</li>
<li>Im Scheitel $\vec v = \vec 0$ annehmen: Nur $v_z = 0$, $v_x$ bleibt.</li></ul>`
  },
  {
    id: "ph2_kreisbewegung",
    title: "Gleichförmige Kreisbewegung und Zentripetalbeschleunigung",
    category: "2.5 Beschleunigung",
    type: "herleitung",
    front: R`Ein Massenpunkt läuft mit konstanter Winkelgeschwindigkeit $\omega$ auf einem Kreis mit Radius $r$. Leite $\vec r(t)$, $\vec v(t)$ und $\vec a(t)$ her. Wie gross ist die <b>Zentripetalbeschleunigung</b>, und wohin zeigt sie?`,
    back: R`Mit $\varphi(t) = \omega t + \varphi_0$ (2.36) in der $xy$-Ebene, Ursprung im Kreismittelpunkt:
$$\vec r(t) = r\begin{pmatrix}\cos(\omega t+\varphi_0)\\ \sin(\omega t+\varphi_0)\\ 0\end{pmatrix}\qquad(2.37)$$
$$\vec v(t) = r\omega\begin{pmatrix}-\sin(\omega t+\varphi_0)\\ \cos(\omega t+\varphi_0)\\ 0\end{pmatrix},\qquad |\vec v| = r\omega\qquad(2.38,\,2.39)$$
$$\vec a(t) = -r\omega^2\begin{pmatrix}\cos(\omega t+\varphi_0)\\ \sin(\omega t+\varphi_0)\\0\end{pmatrix} = -\omega^2\,\vec r(t)\qquad(2.40)$$
<ul><li>$\vec v\perp\vec r$: tangential, Betrag konstant, Richtung dreht sich.</li>
<li>$\vec a$ zeigt immer zum <b>Zentrum</b> (Zentripetalbeschleunigung):</li></ul>
$$a = r\omega^2 = \frac{v^2}{r}\qquad(2.41)$$`,
    meta: "Skript: Abschnitt 2.5.3, Gl. (2.35)–(2.41), Abb. 2.5, S. 20–22",
    explanation: R`<b>Intuition:</b> Damit der Körper nicht geradeaus weiterfliegt (Trägheit), muss seine Geschwindigkeit ständig zur Kreismitte „umgelenkt“ werden. Diese Umlenkung ist die Zentripetalbeschleunigung. Sie ändert nur die Richtung, nicht den Betrag ($\vec a\perp\vec v$).<br><br>
<b>Abhängigkeiten (Achtung, je nachdem was festgehalten wird!):</b>
<ul><li>bei festem $\omega$: $a = r\omega^2\propto r$ (Karussell: aussen grössere Beschleunigung);</li>
<li>bei festem $v$: $a = v^2/r\propto 1/r$ (Auto: enge Kurve ergibt grössere Beschleunigung);</li>
<li>bei festem $r$: $a\propto v^2$ bzw. $\propto\omega^2$ (doppelt so schnell ergibt vierfache Beschleunigung).</li></ul>
<b>Zusammenhang:</b> Mit Newton II braucht man eine <b>Zentripetalkraft</b> $F = mv^2/r$ (Seilspannung, Reibung, Gravitation). Im mitrotierenden System erscheint sie als Scheinkraft „Zentrifugalkraft“ (Kap. 3.11). Auch der harmonische Oszillator steckt hier drin: Jede Komponente erfüllt $\ddot x = -\omega^2 x$ (Kap. 9).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r(t) = r\,(\cos\varphi,\ \sin\varphi,\ 0)$ mit $\varphi = \omega t+\varphi_0$<em>Polarkoordinaten mit festem Radius $\rho = r$ (2.35), umgerechnet in kartesische Komponenten.</em></li>
<li>$\dot{\vec r} = r\dot\varphi\,(-\sin\varphi,\ \cos\varphi,\ 0)$, $\dot\varphi = \omega$<em>Kettenregel: $\frac{d}{dt}\cos\varphi(t) = -\sin\varphi\cdot\dot\varphi$.</em></li>
<li>$\vec v\cdot\vec r = r^2\omega(-\sin\varphi\cos\varphi + \cos\varphi\sin\varphi) = 0$<em>Skalarprodukt null: $\vec v$ steht senkrecht auf $\vec r$, also tangential zum Kreis.</em></li>
<li>$|\vec v| = r\omega\sqrt{\sin^2\varphi+\cos^2\varphi} = r\omega$<em>Betrag der Geschwindigkeit, zeitlich konstant (2.39).</em></li>
<li>$\ddot{\vec r} = r\omega\cdot\omega\,(-\cos\varphi,\ -\sin\varphi,\ 0) = -\omega^2\vec r$<em>Nochmals ableiten (mit $\dot\omega = 0$): Der Vektor ist antiparallel zum Ortsvektor, zeigt also zum Zentrum (2.40).</em></li>
<li>$|\vec a| = \omega^2 r = \frac{(r\omega)^2}{r} = \frac{v^2}{r}$<em>Mit $\omega = v/r$ die zweite Form (2.41).</em></li>
</ol>`,
    example: R`<b>Erdrotation am Äquator:</b> $\omega = 2\pi/(86\,164\,\text{s}) = 7{,}29\cdot10^{-5}\,\text{s}^{-1}$ (Sterntag), $r = 6{,}38\cdot10^{6}\,\text{m}$.
$v = r\omega = 465\,\text{m/s}$, $a = r\omega^2 = 0{,}034\,\text{m/s}^2$, also etwa $0{,}3\,\%$ von $g$. Darum wiegt man am Äquator minimal weniger (Kap. 3.10.3.2).<br><br>
<b>Zentrifuge:</b> $r = 0{,}10\,\text{m}$, $6000\,\text{U/min}$, also $\omega = 628\,\text{s}^{-1}$: $a = 0{,}1\cdot628^2\,\text{m/s}^2\approx 3{,}9\cdot10^{4}\,\text{m/s}^2\approx 4000\,g$.`,
    counterexample: R`<b>Ungleichförmige Kreisbewegung</b> ($\omega$ ändert sich): Dann kommt eine <b>tangentiale</b> Komponente $a_\parallel = r\dot\omega$ hinzu, und $\vec a$ zeigt nicht mehr genau zum Zentrum (Kap. 2.5.5).<br>
<b>„Zentrifugalbeschleunigung nach aussen“</b> gibt es im Inertialsystem nicht. Wer das Seil loslässt, sieht den Stein <i>tangential</i> wegfliegen, nicht radial nach aussen.`,
    pitfalls: R`<ul><li>Zentripetal (zum Zentrum, real) und zentrifugal (nach aussen, Scheinkraft im rotierenden System) verwechseln.</li>
<li>$a\propto r$ und $a\propto1/r$ als Widerspruch sehen: Es kommt darauf an, ob $\omega$ oder $v$ konstant ist.</li>
<li>$\omega$ in U/min einsetzen statt in rad/s ($\omega = 2\pi n/60\,\text{s}$).</li>
<li>Den Ursprung nicht in den Kreismittelpunkt legen; dann gilt $\vec a = -\omega^2\vec r$ nicht in dieser Form.</li></ul>`
  },
  {
    id: "ph2_periode_frequenz",
    title: "Periode, Frequenz (Drehzahl) und Winkelgeschwindigkeit",
    category: "2.5 Beschleunigung",
    type: "definition",
    front: R`Wie hängen bei einer gleichförmigen Drehung die <b>Periode</b> $T$, die <b>Frequenz/Drehzahl</b> $\nu$, die <b>Winkelgeschwindigkeit</b> $\omega$ und die Bahngeschwindigkeit $v$ zusammen? Welche Einheiten haben sie?`,
    back: R`$$T = \frac{2\pi}{\omega} = \frac{2\pi r}{v}\qquad(2.42)$$
$$\nu \stackrel{\text{def}}{=} \frac1T = \frac{\omega}{2\pi} = \frac{v}{2\pi r}\qquad(2.43)$$
$$\omega = \frac{v}{r} = 2\pi\nu\qquad(2.44)$$
Einheiten:
<ul><li>$[T] = \text{s}$</li>
<li>$[\nu] = 1/\text{s} = \text{Hz}$ (Umdrehungen pro Sekunde)</li>
<li>$[\omega] = \text{rad/s} = 1/\text{s}$</li></ul>
Für einen starren Körper ist $\omega$ für <b>alle Punkte gleich</b>; die Bahngeschwindigkeit $v = \omega r$ hängt dagegen vom Abstand $r$ zur Drehachse ab.`,
    meta: "Skript: Abschnitt 2.5.3, Gl. (2.42)–(2.44) und Fussnote 9, S. 21–22",
    explanation: R`<b>Intuition:</b> $\omega$ misst, wie viel <i>Winkel</i> pro Zeit überstrichen wird, $\nu$ wie viele <i>ganze Umdrehungen</i> pro Zeit. Da eine Umdrehung $2\pi$ rad sind, unterscheiden sich beide genau um $2\pi$.<br><br>
<b>Warum $\omega$ fürs Rechnen?</b> In Ableitungen wie $\frac{d}{dt}\cos(\omega t) = -\omega\sin(\omega t)$ erscheint $\omega$ ohne Faktor $2\pi$. Deshalb rechnet man fast immer mit $\omega$ und gibt nur Messwerte in Hz oder U/min an.<br><br>
<b>Proportionalitäten:</b> $T\propto1/\omega$; bei fester Bahngeschwindigkeit $T\propto r$; bei festem $\omega$ wächst $v\propto r$, deshalb laufen am Karussell die äusseren Pferdchen am schnellsten.<br><br>
<b>Zusammenhang:</b> Dieselben Grössen beschreiben später jede periodische Bewegung (Schwingungen, Kap. 9: $\omega_0 = 2\pi/T$), auch wenn sich dort nichts im Kreis dreht.`,
    derivation: R`<ol class="fc-steps">
<li>$\varphi(t+T) = \varphi(t) + 2\pi$<em>Definition der Periode: Nach $T$ ist genau eine volle Umdrehung zurückgelegt.</em></li>
<li>$\omega(t+T) + \varphi_0 = \omega t + \varphi_0 + 2\pi\;\Rightarrow\;\omega T = 2\pi$<em>Mit $\varphi = \omega t + \varphi_0$ einsetzen; $\omega t$ und $\varphi_0$ heben sich weg.</em></li>
<li>$T = \frac{2\pi}{\omega}$<em>Nach $T$ auflösen (2.42).</em></li>
<li>$v\,T = 2\pi r\;\Rightarrow\;T = \frac{2\pi r}{v}$<em>Alternativ: In einer Periode wird der Kreisumfang mit konstantem Tempo durchlaufen.</em></li>
<li>$\omega = \frac{2\pi}{T} = \frac{v}{r}$, $\nu = \frac1T = \frac{\omega}{2\pi}$<em>Beide Ausdrücke für $T$ gleichsetzen; $\nu$ ist die Anzahl Umläufe pro Zeit.</em></li>
</ol>`,
    example: R`<b>Bahngeschwindigkeit der Erde um die Sonne:</b> $r = 1{,}50\cdot10^{11}\,\text{m}$, $T = 1\,\text{a} = 3{,}16\cdot10^{7}\,\text{s}$:
$v = \frac{2\pi r}{T} = \frac{2\pi\cdot1{,}5\cdot10^{11}}{3{,}16\cdot10^{7}}\,\text{m/s}\approx 3{,}0\cdot10^{4}\,\text{m/s} = 30\,\text{km/s}$.<br><br>
<b>Festplatte:</b> $7200\,\text{U/min}$, also $\nu = 120\,\text{Hz}$, $\omega = 754\,\text{rad/s}$, $T = 8{,}3\,\text{ms}$.`,
    counterexample: R`<b>$\omega$ ist kein gewöhnlicher Frequenzwert:</b> Wer $\omega = 50\,\text{Hz}$ für das Stromnetz schreibt, macht einen Fehler um den Faktor $2\pi$: Die Netzfrequenz ist $\nu = 50\,\text{Hz}$, die Kreisfrequenz $\omega = 314\,\text{s}^{-1}$.`,
    pitfalls: R`<ul><li>Den Faktor $2\pi$ zwischen $\omega$ und $\nu$ vergessen.</li>
<li>U/min nicht durch 60 teilen.</li>
<li>Glauben, verschiedene Punkte eines starren Körpers hätten verschiedene $\omega$. Verschieden ist nur $v = \omega r$.</li></ul>`
  },
  {
    id: "ph2_omega_vektor",
    title: "Winkelgeschwindigkeit als Vektor: v = ω × ρ",
    category: "2.5 Beschleunigung",
    type: "gesetz",
    front: R`Wie definiert man die <b>Winkelgeschwindigkeit als Vektor</b> $\vec\omega$? Leite $\vec v = \vec\omega\times\vec\rho$ und die Umkehrung $\vec\omega = \frac{1}{\rho^2}(\vec\rho\times\vec v)$ her.`,
    back: R`$\vec\omega$ steht <b>senkrecht auf der Kreisebene</b> (entlang der Drehachse) mit Betrag $\omega$; die Richtung folgt der <b>Rechte-Hand-Regel</b> (Finger in Drehrichtung, Daumen zeigt $\vec\omega$).<br><br>
Mit $\vec\rho$ = Vektor vom Kreismittelpunkt (auf der Achse) zum Massenpunkt gilt (2.45, 2.46):
$$v = \omega\rho,\qquad \vec v = \vec\omega\times\vec\rho$$
Umkehrung mit $\vec a\times(\vec b\times\vec c) = \vec b\,(\vec a\cdot\vec c) - \vec c\,(\vec a\cdot\vec b)$ (2.47):
$$\vec\rho\times\vec v = \rho^2\vec\omega\qquad\Rightarrow\qquad \vec\omega = \frac{1}{\rho^2}(\vec\rho\times\vec v)\qquad(2.48,\,2.49)$$
$\vec\rho,\vec v,\vec\omega$ bilden ein rechtshändiges Orthogonalsystem: $\vec e_v = \vec e_\omega\times\vec e_\rho$ (2.50).`,
    meta: "Skript: Abschnitt 2.5.4, Gl. (2.45)–(2.50), Abb. 2.6, S. 22–24",
    explanation: R`<b>Intuition:</b> Eine Drehung ist durch <i>Achse</i>, <i>Drehsinn</i> und <i>Tempo</i> bestimmt. Genau das codiert ein Vektor entlang der Achse: Die Richtung gibt Achse und Drehsinn, der Betrag das Tempo.<br><br>
<b>Unabhängig vom Ursprung auf der Achse:</b> Liegt der Ursprung irgendwo auf der Drehachse, ist $\vec r = \vec\rho + z\,\hat\omega$ und $\vec\omega\times\vec r = \vec\omega\times\vec\rho$, weil $\vec\omega\times\hat\omega = \vec 0$. Deshalb gilt auch $\vec v = \vec\omega\times\vec r$ für jeden Punkt eines starren Körpers (Kap. 8).<br><br>
<b>Betrag:</b> $|\vec\omega\times\vec r| = \omega r\sin\alpha = \omega\rho$, wobei $\alpha$ der Winkel zwischen Achse und $\vec r$ und $\rho = r\sin\alpha$ der <b>senkrechte Abstand zur Achse</b> ist.<br><br>
<b>Zusammenhang:</b> Dasselbe Kreuzprodukt-Muster kehrt wieder beim Drehimpuls $\vec L = \vec r\times\vec p$ (Kap. 5), beim Drehmoment $\vec M = \vec r\times\vec F$ und bei der Corioliskraft $-2m\,\vec\omega\times\vec v'$ (Kap. 3.11).`,
    derivation: R`<ol class="fc-steps">
<li>$|\vec\omega\times\vec\rho| = \omega\rho\sin90^\circ = \omega\rho = v$<em>$\vec\omega$ steht senkrecht auf der Kreisebene, $\vec\rho$ liegt darin: Der Betrag stimmt mit (2.45) überein.</em></li>
<li>$\vec\omega\times\vec\rho\perp\vec\rho$ und $\perp\vec\omega$, also tangential<em>Das Kreuzprodukt steht senkrecht auf beiden Faktoren und liegt damit in der Kreisebene, tangential zum Kreis. Die Rechte-Hand-Regel liefert den richtigen Drehsinn. Also $\vec v = \vec\omega\times\vec\rho$ (2.46).</em></li>
<li>$\vec\rho\times\vec v = \vec\rho\times(\vec\omega\times\vec\rho)$<em>Von links mit $\vec\rho$ kreuzen, um $\vec\omega$ zu isolieren.</em></li>
<li>$= \vec\omega\,(\vec\rho\cdot\vec\rho) - \vec\rho\,(\vec\rho\cdot\vec\omega)$<em>„BAC-CAB“-Regel (2.47) mit $\vec a = \vec\rho$, $\vec b = \vec\omega$, $\vec c = \vec\rho$.</em></li>
<li>$= \rho^2\,\vec\omega - \vec\rho\cdot 0$<em>$\vec\rho\cdot\vec\rho = \rho^2$; $\vec\rho\perp\vec\omega$, also $\vec\rho\cdot\vec\omega = 0$.</em></li>
<li>$\vec\omega = \frac{1}{\rho^2}(\vec\rho\times\vec v)$<em>Durch $\rho^2$ teilen (2.49).</em></li>
</ol>`,
    example: R`<b>Erddrehung in Zürich</b> (geografische Breite $\lambda\approx47{,}4^\circ$): $\vec\omega$ zeigt vom Süd- zum Nordpol, $\omega = 7{,}29\cdot10^{-5}\,\text{s}^{-1}$. Der Abstand zur Erdachse ist $\rho = R\cos\lambda = 6{,}37\cdot10^{6}\cdot0{,}677\,\text{m} = 4{,}31\cdot10^{6}\,\text{m}$, also
$v = \omega\rho\approx 314\,\text{m/s}$, gegenüber $465\,\text{m/s}$ am Äquator und $0$ an den Polen.`,
    counterexample: R`<b>Endliche Drehwinkel sind keine Vektoren:</b> Drehe ein Buch erst um $90^\circ$ um die $x$-Achse, dann um $90^\circ$ um die $y$-Achse, und vergleiche mit der umgekehrten Reihenfolge. Das Ergebnis ist verschieden, endliche Drehungen addieren sich also nicht kommutativ wie Vektoren. Nur <i>infinitesimale</i> Drehungen und damit $\vec\omega = d\vec\varphi/dt$ verhalten sich wie Vektoren.<br>
<b>Spiegelung:</b> $\vec\omega$ ist ein <i>axialer</i> Vektor (Pseudovektor). Bei einer Spiegelung dreht sich der Drehsinn um, $\vec\omega$ verhält sich anders als ein „echter“ Vektor wie $\vec v$.`,
    pitfalls: R`<ul><li>Reihenfolge im Kreuzprodukt vertauschen: $\vec\rho\times\vec\omega = -\vec v$.</li>
<li>$\vec r$ (vom Ursprung) und $\vec\rho$ (senkrechter Abstand zur Achse) verwechseln. Für den Betrag zählt immer der senkrechte Abstand.</li>
<li>Linke statt rechte Hand verwenden.</li>
<li>Annehmen, $\vec\omega$ zeige in Bewegungsrichtung; es zeigt entlang der Achse.</li></ul>`
  },
  {
    id: "ph2_winkelbeschleunigung",
    title: "Winkelbeschleunigung: Tangential- und Zentripetalkomponente",
    category: "2.5 Beschleunigung",
    type: "herleitung",
    front: R`Ein Massenpunkt läuft auf einem Kreis (Radius $r$) mit <b>veränderlicher</b> Winkelgeschwindigkeit $\omega(t)$. Was ist die <b>Winkelbeschleunigung</b>? Leite die Zerlegung $\vec a = \vec a_\parallel + \vec a_\perp$ und $|\vec a| = r\sqrt{\alpha^2+\omega^4}$ her.`,
    back: R`Winkelbeschleunigung:
$$\alpha := \dot\omega = \ddot\varphi\qquad(2.51)$$
Mit $\vec r = r(\cos\varphi(t),\,\sin\varphi(t))$ (2.52):
$$\vec v = r\dot\varphi\begin{pmatrix}-\sin\varphi\\ \cos\varphi\end{pmatrix},\qquad v = r\omega(t)\qquad(2.53,\,2.54)$$
$$\vec a = \underbrace{r\ddot\varphi\begin{pmatrix}-\sin\varphi\\ \cos\varphi\end{pmatrix}}_{\vec a_\parallel} \underbrace{-\,r\dot\varphi^2\begin{pmatrix}\cos\varphi\\ \sin\varphi\end{pmatrix}}_{\vec a_\perp}\qquad(2.55)$$
$$a_\parallel = r\ddot\varphi = r\alpha,\qquad |a_\perp| = r\dot\varphi^2 = r\omega^2,\qquad |\vec a| = r\sqrt{\alpha^2+\omega^4}\qquad(2.56\text{–}2.58)$$
$\vec a_\parallel$ ist tangential und ändert das Tempo, $\vec a_\perp$ ist zentripetal und ändert die Richtung.`,
    meta: "Skript: Abschnitt 2.5.5, Gl. (2.51)–(2.58), S. 24–25",
    explanation: R`<b>Intuition:</b> Jetzt passieren zwei Dinge gleichzeitig. Der Körper wird auf seiner Bahn schneller oder langsamer (tangential, wie bei einer geraden Strecke), und er muss weiterhin auf den Kreis gezwungen werden (zentripetal). Beide Anteile stehen senkrecht aufeinander, deshalb addieren sie sich wie die Katheten eines rechtwinkligen Dreiecks.<br><br>
<b>Abhängigkeiten:</b> $a_\parallel\propto\alpha$ (linear in der Winkelbeschleunigung), aber $a_\perp\propto\omega^2$ (quadratisch). Beim Anfahren aus der Ruhe dominiert deshalb zunächst $a_\parallel$; mit wachsendem $\omega$ überholt die Zentripetalkomponente, ab $\omega^2>\alpha$.<br><br>
<b>Analogie Translation ↔ Rotation:</b> $\varphi\leftrightarrow x$, $\omega\leftrightarrow v$, $\alpha\leftrightarrow a$. Bei konstantem $\alpha$ gilt deshalb analog $\omega = \omega_0 + \alpha t$ und $\varphi = \varphi_0 + \omega_0t + \tfrac12\alpha t^2$.<br><br>
<b>Zusammenhang:</b> Das ist der Spezialfall der allgemeinen Zerlegung in Tangential- und Normalbeschleunigung (2.5.6) mit Krümmungsradius $\rho = r$.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r = r\,(\cos\varphi,\ \sin\varphi)$, $\varphi = \varphi(t)$<em>Kreisbahn mit festem $r$, aber beliebigem Winkelverlauf (2.52, $\varphi_0 = 0$).</em></li>
<li>$\vec v = r\dot\varphi\,(-\sin\varphi,\ \cos\varphi)$<em>Kettenregel wie bei der gleichförmigen Kreisbewegung; jetzt ist $\dot\varphi = \omega(t)$ zeitabhängig (2.53).</em></li>
<li>$\vec a = \frac{d}{dt}\left[r\dot\varphi\right]\,(-\sin\varphi,\ \cos\varphi) + r\dot\varphi\,\frac{d}{dt}(-\sin\varphi,\ \cos\varphi)$<em>Produktregel: Sowohl der Vorfaktor $r\dot\varphi$ als auch der Richtungsvektor hängen von $t$ ab.</em></li>
<li>$= r\ddot\varphi\,(-\sin\varphi,\ \cos\varphi) + r\dot\varphi\cdot\dot\varphi\,(-\cos\varphi,\ -\sin\varphi)$<em>Erster Term: Ableitung des Betrags (tangential). Zweiter Term: Ableitung der Richtung, Kettenregel liefert nochmals $\dot\varphi$ (2.55).</em></li>
<li>$\vec a_\parallel\cdot\vec a_\perp \propto \sin\varphi\cos\varphi - \cos\varphi\sin\varphi = 0$<em>Die beiden Anteile stehen senkrecht aufeinander.</em></li>
<li>$|\vec a| = \sqrt{(r\ddot\varphi)^2+(r\dot\varphi^2)^2} = r\sqrt{\alpha^2+\omega^4}$<em>Pythagoras für orthogonale Komponenten (2.58).</em></li>
</ol>`,
    example: R`Ein Rad mit $r = 0{,}30\,\text{m}$ wird aus der Ruhe mit $\alpha = 2\,\text{rad/s}^2$ beschleunigt. Nach $t = 2\,\text{s}$ ist $\omega = \alpha t = 4\,\text{rad/s}$:<br>
$a_\parallel = r\alpha = 0{,}6\,\text{m/s}^2$, $a_\perp = r\omega^2 = 4{,}8\,\text{m/s}^2$, $|\vec a| = 0{,}3\sqrt{4+256}\,\text{m/s}^2 = 4{,}84\,\text{m/s}^2$.<br>
Zu Beginn ($t = 0$, $\omega = 0$) ist dagegen $\vec a = \vec a_\parallel$ rein tangential.`,
    counterexample: R`<b>„Tangentialbeschleunigung null heisst keine Beschleunigung“ ist falsch:</b> Bei konstantem $\omega$ ist $a_\parallel = 0$, aber $a_\perp = r\omega^2\neq0$.<br>
<b>„Zentripetalbeschleunigung null heisst keine Kreisbewegung“:</b> Im Moment des Anfahrens ($\omega = 0$) ist $a_\perp = 0$, obwohl der Körper auf dem Kreis bleibt; er bewegt sich in diesem Augenblick nur noch nicht.`,
    pitfalls: R`<ul><li>Den Buchstaben $\alpha$ für die Winkelbeschleunigung mit einem Winkel $\alpha$ (z. B. Wurfwinkel) verwechseln.</li>
<li>$|\vec a| = r(\alpha + \omega^2)$ addieren statt quadratisch (Pythagoras).</li>
<li>Einheiten: $[\alpha] = \text{rad/s}^2$, $[a] = \text{m/s}^2$. Der Faktor $r$ macht den Unterschied.</li>
<li>$\omega^4$ unter der Wurzel vergessen: $a_\perp = r\omega^2$, quadriert also $r^2\omega^4$.</li></ul>`
  },
  {
    id: "ph2_allg_beschleunigung",
    title: "Allgemeine Bahn: Tangential- und Normalbeschleunigung, Krümmungsradius",
    category: "2.5 Beschleunigung",
    type: "herleitung",
    front: R`Zerlege die Beschleunigung auf einer <b>beliebigen gekrümmten Bahn</b> in eine Komponente parallel und eine senkrecht zur Geschwindigkeit. Zeige $\vec a = \dot v\,\vec e_\parallel + \frac{v^2}{\rho}\vec e_\perp$. Was ist $\rho$?`,
    back: R`Mit dem lokalen Einheitsvektor $\vec e_\parallel(t)$ in Bewegungsrichtung gilt $\vec v = v\,\vec e_\parallel$ (2.59) und
$$\vec a = \frac{dv}{dt}\vec e_\parallel + v\frac{d\vec e_\parallel}{dt}\qquad(2.60)$$
Da $\vec e_\parallel$ ein Einheitsvektor ist, steht $\dot{\vec e}_\parallel\perp\vec e_\parallel$ (2.61, 2.62). Mit $|\dot{\vec e}_\parallel| = \frac{d\varphi}{dt} = \frac{v}{\rho}$ (2.67, 2.68):
$$\boxed{\vec a(t) = \dot v\,\vec e_\parallel + \frac{v^2}{\rho}\,\vec e_\perp}\qquad(2.71)$$
<ul><li><b>Tangentialbeschleunigung</b> $|a_\parallel| = |dv/dt|$ (2.66): ändert das Tempo.</li>
<li><b>Normalbeschleunigung</b> $a_\perp = v^2/\rho$ (2.70): ändert die Richtung; $\vec e_\perp$ zeigt zum Krümmungsmittelpunkt.</li>
<li>$\rho$: <b>momentaner Krümmungsradius</b>, der Radius des <b>Anschmiegkreises</b> (Abb. 2.9). Vektoriell gilt $\dot{\vec e}_\parallel = \vec\omega\times\vec e_\parallel$ (2.69).</li></ul>
Es liegt eine Beschleunigung vor, wenn sich Betrag, Richtung oder beides ändern.`,
    meta: "Skript: Abschnitt 2.5.6, Gl. (2.59)–(2.71), Abb. 2.7–2.9, S. 25–28",
    explanation: R`<b>Intuition:</b> Jedes kurze Stück einer beliebigen Kurve sieht aus wie ein Stück eines Kreises, des <b>Anschmiegkreises</b>. Auf diesem Kreis gelten lokal die Formeln der Kreisbewegung: Die Richtungsänderung kostet $v^2/\rho$ wie bei der Kreisbewegung mit Radius $\rho$, die Tempoänderung kostet $\dot v$ wie auf einer Geraden.<br><br>
<b>Grenzfälle:</b> Gerade Bahn: $\rho\to\infty$, also $a_\perp = 0$. Kreisbahn: $\rho = r$ und $\dot v = r\alpha$, das ist exakt Abschnitt 2.5.5.<br><br>
<b>Abhängigkeiten:</b> $a_\perp\propto v^2$ und $\propto1/\rho$. Deshalb ist in der Kurve die Geschwindigkeit so kritisch: Die maximale Seitenbeschleunigung (Haftreibung, Kap. 3.9.4) begrenzt $v_\text{max} = \sqrt{a_\text{max}\rho}$.<br><br>
<b>Zusammenhang:</b> Die Zerlegung ist rein kinematisch. Dynamisch bedeutet sie: Nur die Kraftkomponente längs der Bahn leistet Arbeit und ändert die kinetische Energie (Kap. 4), die Normalkomponente lenkt nur um.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v = v\,\vec e_\parallel$<em>Geschwindigkeit als Betrag mal Richtung; beide können zeitabhängig sein.</em></li>
<li>$\vec a = \dot v\,\vec e_\parallel + v\,\dot{\vec e}_\parallel$<em>Produktregel (2.60).</em></li>
<li>$\vec e_\parallel\cdot\vec e_\parallel = 1\;\Rightarrow\;2\,\vec e_\parallel\cdot\dot{\vec e}_\parallel = 0$<em>Ein Einheitsvektor hat konstante Länge; ableiten ergibt null (2.61). Also steht $\dot{\vec e}_\parallel$ senkrecht auf $\vec e_\parallel$ (2.62).</em></li>
<li>$|d\vec e_\parallel| = |\vec e_\parallel|\,d\varphi = d\varphi$<em>Der Einheitsvektor dreht sich in der Zeit $dt$ um den kleinen Winkel $d\varphi$; seine Spitze bewegt sich um $1\cdot d\varphi$ (Abb. 2.8, 2.67).</em></li>
<li>$ds = \rho\,d\varphi\;\Rightarrow\;\frac{d\varphi}{dt} = \frac{1}{\rho}\frac{ds}{dt} = \frac{v}{\rho}$<em>Auf dem Anschmiegkreis mit Radius $\rho$ gehört zum Bogen $ds$ der Winkel $d\varphi = ds/\rho$ (2.68).</em></li>
<li>$v\,\dot{\vec e}_\parallel = v\cdot\frac{v}{\rho}\,\vec e_\perp = \frac{v^2}{\rho}\vec e_\perp$<em>Betrag und Richtung (senkrecht, zum Krümmungsmittelpunkt) des zweiten Terms (2.70). Zusammen ergibt das (2.71).</em></li>
</ol>`,
    example: R`<b>Krümmungsradius im Scheitel einer Wurfparabel:</b> Dort ist $\vec v = (v\cos\alpha, 0)$ horizontal und $\vec a = \vec g$ steht senkrecht dazu. Also $\dot v = 0$ und $g = a_\perp = \frac{v^2\cos^2\alpha}{\rho}$, also $\rho = \frac{v^2\cos^2\alpha}{g}$.<br>
Mit $v = 20\,\text{m/s}$, $\alpha = 30^\circ$: $\rho = \frac{400\cdot0{,}75}{9{,}81}\,\text{m} = 30{,}6\,\text{m}$.<br><br>
<b>Kurvengrenze:</b> Bei maximal $a_\perp = 8\,\text{m/s}^2$ (trockene Strasse) und $\rho = 50\,\text{m}$: $v_\text{max} = \sqrt{8\cdot50}\,\text{m/s} = 20\,\text{m/s} = 72\,\text{km/h}$.`,
    counterexample: R`<b>$\rho$ ist nicht der Abstand zum Ursprung:</b> Bei einer Ellipsenbahn um den Brennpunkt ist der Krümmungsradius im Perihel nicht gleich dem Abstand $r$ zum Brennpunkt. $\rho$ ist eine lokale Eigenschaft der Kurve, $r$ hängt von der Wahl des Ursprungs ab.<br>
<b>Wendepunkt einer Kurve</b> (z. B. S-Kurve): Dort ist $\rho\to\infty$, also $a_\perp = 0$, obwohl die Bahn im Ganzen gekrümmt ist.`,
    pitfalls: R`<ul><li>Annehmen, $\vec a$ sei parallel zu $\vec v$, nur weil sich das Tempo ändert. Es gibt fast immer auch eine Normalkomponente.</li>
<li>Die Richtung von $\vec e_\perp$ falsch wählen: Sie zeigt zur <b>konkaven</b> Seite, zum Krümmungsmittelpunkt.</li>
<li>$\dot v$ (Ableitung des Betrags) mit $|\vec a|$ gleichsetzen.</li>
<li>$\rho$ und $r$ (Ortsvektorlänge) verwechseln.</li></ul>`
  },

  // ========================================================================
  // ERGÄNZUNGEN: typische Prüfungsaufgaben und Brücken zu Physik II
  // ========================================================================
  {
    id: "ph2_relativbewegung",
    title: "Relativbewegung: Addition von Geschwindigkeiten (Boot im Fluss, Regen)",
    category: "2.4 Geschwindigkeit",
    type: "beispiel",
    front: R`Ein Boot fährt mit $v' = 2\,\text{m/s}$ relativ zum Wasser über einen $60\,\text{m}$ breiten Fluss, der mit $u = 1\,\text{m/s}$ strömt. (a) In welche Richtung muss es steuern, um genau gegenüber anzukommen, und wie lange braucht es? (b) Wie überquert es den Fluss am schnellsten? Wie lautet das allgemeine Gesetz?`,
    back: R`<b>Galilei’sche Addition</b> der Geschwindigkeiten (Bezugssystem $K'$ bewegt sich mit $\vec u$ relativ zu $K$, vgl. $\vec r' = \vec r-\vec u t$, Abb. 3.8):
$$\vec v = \vec v\,'+\vec u,\qquad\vec v_{A\,\text{rel}\,B} = \vec v_A-\vec v_B$$
<b>(a) Genau gegenüber:</b> Die Strömung muss kompensiert werden: $v'\sin\alpha = u$ (Bug stromaufwärts geneigt):
$$\sin\alpha = \frac u{v'} = 0{,}5\Rightarrow\alpha = 30^\circ,\qquad t = \frac{b}{v'\cos\alpha} = \frac{60}{1{,}73}\,\text{s} = 34{,}6\,\text{s}$$
<b>(b) Schnellste Überfahrt:</b> Bug senkrecht zum Ufer, $t = b/v' = 30\,\text{s}$; dabei wird das Boot um $u\,t = 30\,\text{m}$ abgetrieben.<br>
Ohne $v'\gt u$ ist (a) unmöglich.`,
    meta: "Ergänzung (typische Prüfungsaufgabe); baut auf Abschnitt 2.4 und Abschnitt 3.5 (Abb. 3.8, Inertialsysteme) auf",
    explanation: R`<b>Intuition:</b> Bewegungen in zwei Bezugssystemen addieren sich wie Vektoren: Das Boot bewegt sich gegenüber dem Wasser, das Wasser gegenüber dem Ufer. Die Querbewegung bestimmt die Überfahrtszeit, die Längsbewegung die Abdrift – die Komponenten sind unabhängig (wie beim schiefen Wurf).<br><br>
<b>Abhängigkeiten:</b> Die Überfahrtszeit hängt nur von der Geschwindigkeitskomponente quer zum Fluss ab: $t = b/(v'\cos\alpha)$. Jede Neigung gegen die Strömung verlängert die Fahrt.<br><br>
<b>Relativgeschwindigkeit:</b> $\vec v_A-\vec v_B$ ist die Geschwindigkeit, mit der B den Körper A sieht. Begegnungs- und Überholaufgaben werden im Bezugssystem eines der Körper oft trivial.<br><br>
<b>Zusammenhang:</b> Galilei-Transformation zwischen Inertialsystemen (3.5): Beschleunigungen und Kräfte sind in allen gleich. Im Schwerpunktsystem (6.4) vereinfachen sich Stösse. Für Geschwindigkeiten nahe der Lichtgeschwindigkeit gilt die Addition nicht mehr (Relativitätstheorie).`,
    derivation: R`Regen auf einem fahrenden Auto (Regen fällt senkrecht mit $8\,\text{m/s}$, Auto fährt $20\,\text{m/s}$):
<ol class="fc-steps">
<li>$\vec v_\text{Regen} = (0,-8)\,\text{m/s}$, $\vec v_\text{Auto} = (20,0)\,\text{m/s}$<em>Beide im Bodensystem.</em></li>
<li>$\vec v_\text{Regen rel Auto} = \vec v_\text{Regen}-\vec v_\text{Auto} = (-20,-8)\,\text{m/s}$<em>Relativgeschwindigkeit.</em></li>
<li>$|\vec v_\text{rel}| = \sqrt{400+64} = 21{,}5\,\text{m/s}$<em>Betrag.</em></li>
<li>$\tan\beta = 20/8\Rightarrow\beta = 68^\circ$ gegen die Vertikale<em>Der Regen scheint schräg von vorne zu kommen.</em></li>
</ol>`,
    example: R`<b>Treffpunkt:</b> Zwei Züge fahren sich auf $10\,\text{km}$ Abstand mit $25$ und $15\,\text{m/s}$ entgegen. Im System des einen nähert sich der andere mit $40\,\text{m/s}$: Begegnung nach $250\,\text{s}$, $6{,}25\,\text{km}$ vom Startpunkt des schnelleren.<br>
<b>Flugzeug im Seitenwind:</b> Eigengeschwindigkeit $250\,\text{m/s}$, Seitenwind $30\,\text{m/s}$: Vorhaltewinkel $\arcsin(0{,}12) = 6{,}9^\circ$.`,
    counterexample: R`<b>Beschleunigte Bezugssysteme:</b> Im Karussell gilt die einfache Addition für Beschleunigungen nicht mehr – es kommen Zentrifugal- und Coriolisterme hinzu (3.11). Und bei Licht addieren sich Geschwindigkeiten nicht einfach: $c+u$ wird nie beobachtet.`,
    pitfalls: R`<ul><li>Relativgeschwindigkeit mit falschem Vorzeichen bilden ($\vec v_B-\vec v_A$ statt $\vec v_A-\vec v_B$).</li>
<li>Beträge addieren statt Vektoren.</li>
<li>Bei der Überfahrtszeit die volle Bootsgeschwindigkeit statt ihrer Querkomponente nehmen.</li></ul>`
  }
];
})();
