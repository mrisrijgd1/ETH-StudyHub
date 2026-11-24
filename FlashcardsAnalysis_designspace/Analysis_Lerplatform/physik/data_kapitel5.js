/* ==========================================================================
   PHYSIK I – KAPITEL 5: Drehbewegungen
   Drehimpuls, Drehmoment, Drallsatz, Drehimpuls bei Kreisbewegung, Flächensatz
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_5 = [
  {
    id: "ph5_drehimpuls",
    title: "Bahndrehimpuls L = r × p",
    category: "5.2 Drehimpuls",
    type: "definition",
    front: R`Wie ist der <b>Drehimpuls</b> eines Massenpunktes bezüglich eines festen Punktes $O$ definiert? Warum darf man statt $\vec p_\perp$ den vollen Impuls $\vec p$ verwenden, welche Einheit hat $\vec L$, und warum hängt er vom Bezugspunkt ab?`,
    back: R`Mit $\vec r$ = Ortsvektor von $O$ zum Massenpunkt:
$$\vec L = \vec r\times\vec p_\perp\qquad(5.1)$$
Da $\vec r\times\vec p_\parallel = \vec 0$:
$$\vec r\times\vec p = \vec r\times(\vec p_\parallel+\vec p_\perp) = \vec r\times\vec p_\perp\qquad(5.2)$$
$$\vec L = \vec r\times\vec p = m\,(\vec r\times\vec v)\qquad(5.7)$$
<ul><li>Betrag: $L = r\,p\sin\vartheta = r_\perp p$ (Hebelarm mal Impuls).</li>
<li>Einheit: $[L] = \text{kg}\,\text{m}^2/\text{s}$ (5.10).</li>
<li>$\vec L$ ist ein <b>axialer Vektor</b>: Er gibt einen Drehsinn an (Rechte-Hand-Regel) und steht senkrecht auf der Ebene aus $\vec r$ und $\vec p$.</li>
<li>Er ist relativ zu einem Drehpunkt definiert.</li></ul>
In der $xy$-Ebene: $L_z = xp_y - yp_x$ (Abb. 5.2: positiv bei Bewegung gegen den Uhrzeigersinn um $O$).`,
    meta: "Skript: Abschnitte 5.1, 5.2.1, Gl. (5.1)–(5.2), (5.7), (5.10), Abb. 5.1–5.2, S. 129–131",
    explanation: R`<b>Intuition:</b> Der Drehimpuls misst, wie viel „Drehschwung“ ein Körper um einen Punkt hat. Nur der Teil des Impulses, der <i>quer</i> zur Verbindungslinie zeigt, trägt zum Umkreisen bei. Ein Körper, der direkt auf $O$ zu- oder von ihm wegfliegt, hat $\vec L = \vec 0$.<br><br>
<b>Hebelarm:</b> $L = r_\perp p$ mit $r_\perp$ = senkrechter Abstand der Bahngeraden von $O$. Eine gerade, gleichförmige Bewegung hat deshalb einen <i>konstanten</i> Drehimpuls um jeden Punkt: $r_\perp$ und $p$ bleiben gleich.<br><br>
<b>Abhängigkeit vom Bezugspunkt:</b> Verschiebt man $O$ um $\vec b$, wird $\vec L' = (\vec r-\vec b)\times\vec p = \vec L - \vec b\times\vec p$. Anders als der Impuls ist der Drehimpuls also keine reine Eigenschaft des Körpers, sondern eine Beziehung „Körper relativ zu $O$“.<br><br>
<b>Analogie:</b> Translation ↔ Rotation: $\vec p\leftrightarrow\vec L$, $\vec F\leftrightarrow\vec M$, $m\leftrightarrow I$ (Kap. 8), $\vec v\leftrightarrow\vec\omega$.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec p = \vec p_\parallel + \vec p_\perp$ (parallel bzw. senkrecht zu $\vec r$)<em>Impuls in eine radiale und eine dazu senkrechte Komponente zerlegen.</em></li>
<li>$\vec r\times\vec p_\parallel = \vec 0$<em>Kreuzprodukt paralleler Vektoren verschwindet ($\sin0 = 0$).</em></li>
<li>$\vec r\times\vec p = \vec r\times\vec p_\perp$<em>Linearität des Kreuzprodukts: Man darf den vollen Impuls nehmen (5.2).</em></li>
<li>$|\vec L| = r\,p\sin\vartheta = (r\sin\vartheta)\,p = r_\perp\,p$<em>Betrag des Kreuzprodukts; $r\sin\vartheta$ ist der senkrechte Abstand der Bahn von $O$.</em></li>
<li>$L_z = (\vec r\times\vec p)_z = xp_y - yp_x$<em>$z$-Komponente für eine Bewegung in der $xy$-Ebene (Abb. 5.2).</em></li>
</ol>`,
    example: R`<b>Geradlinige Bewegung:</b> Ein Körper ($m = 2\,\text{kg}$) fliegt mit $v = 3\,\text{m/s}$ in $x$-Richtung entlang der Geraden $y = 4\,\text{m}$. Um den Ursprung: $L_z = xp_y - yp_x = 0 - 4\cdot6 = -24\,\text{kg m}^2/\text{s}$, konstant, obwohl sich $x$ ändert (Bewegung im Uhrzeigersinn um $O$).<br><br>
<b>Erde um die Sonne:</b> $L = mrv = 5{,}97\cdot10^{24}\cdot1{,}50\cdot10^{11}\cdot2{,}98\cdot10^{4}\,\text{kg m}^2/\text{s}\approx2{,}7\cdot10^{40}\,\text{kg m}^2/\text{s}$.`,
    counterexample: R`<b>Radiale Bewegung:</b> Ein Stein, der senkrecht nach oben geworfen wird, hat bezüglich des Abwurfpunkts $\vec L = \vec 0$ ($\vec r\parallel\vec p$), obwohl er einen grossen Impuls hat. Bezüglich eines seitlich versetzten Punktes hat er dagegen einen Drehimpuls. „Hat der Körper Drehimpuls?“ ist ohne Bezugspunkt keine sinnvolle Frage.`,
    pitfalls: R`<ul><li>Den Bezugspunkt nicht angeben.</li>
<li>Reihenfolge im Kreuzprodukt vertauschen: $\vec p\times\vec r = -\vec L$.</li>
<li>Glauben, nur Kreisbewegungen hätten Drehimpuls.</li>
<li>$\vec L$ in Bewegungsrichtung einzeichnen; er steht senkrecht auf der Bewegungsebene.</li></ul>`
  },
  {
    id: "ph5_drallsatz",
    title: "Drehmoment und Drallsatz dL/dt = M, Drehimpulserhaltung",
    category: "5.2 Drehimpuls",
    type: "herleitung",
    front: R`Leite den <b>Drehimpulssatz</b> (Drallsatz) $\dot{\vec L} = \vec M$ für einen Massenpunkt her. Wie ist das <b>Drehmoment</b> definiert, und wann ist der Drehimpuls erhalten?`,
    back: R`$$\dot{\vec L} = \frac{d}{dt}(\vec r\times\vec p) = \dot{\vec r}\times\vec p + \vec r\times\dot{\vec p} = \underbrace{\tfrac1m\,\vec p\times\vec p}_{=\vec 0} + \vec r\times\vec F\qquad(5.3,\,5.4)$$
$$\Rightarrow\quad\dot{\vec L} = \vec r\times\vec F\qquad(5.5)$$
<b>Drehmoment:</b>
$$\vec M = \vec r\times\vec F\qquad(5.6),\qquad[M] = \text{N m}\qquad(5.11)$$
<b>Drallsatz</b> (Analogon zu Newton II für Drehbewegungen):
$$\vec M = \dot{\vec L} = \frac{d\vec L}{dt},\qquad d\vec L = \vec M\,dt\qquad(5.8,\,5.9)$$
Fehlt ein Drehmoment, so ist der <b>Drehimpuls erhalten</b> (im abgeschlossenen System mit $\vec F = \vec 0$ ist auch $\dot{\vec L} = \vec 0$). Wie bei Newton II ist das keine Definition des Drehmoments, sondern eine heuristische Gleichsetzung mit der kinematischen Grösse $\dot{\vec L}$. Auch $\vec M$ ist ein axialer Vektor und hängt vom Bezugspunkt ab.`,
    meta: "Skript: Abschnitt 5.2.1, Gl. (5.3)–(5.11), S. 129–131; Zusammenfassung 5.3",
    explanation: R`<b>Intuition:</b> Ein Drehmoment ist eine Kraft „mit Hebel“. Dieselbe Kraft dreht stärker, wenn sie weiter weg von der Achse und senkrecht zum Hebel angreift: $M = r_\perp F = rF\sin\vartheta$ (Türklinke aussen statt an der Angel).<br><br>
<b>Wann ist $\vec L$ erhalten?</b> Wenn $\vec r\times\vec F = \vec 0$, also bei $\vec F = \vec 0$ oder bei einer <b>Zentralkraft</b> $\vec F\parallel\vec r$ bezüglich des Kraftzentrums. Das gilt für Gravitation und Coulombkraft. Deshalb ist der Drehimpuls eines Planeten um die Sonne erhalten, obwohl ständig eine grosse Kraft wirkt, und die Bahn bleibt in einer Ebene (Kap. 7).<br><br>
<b>Komponentenweise:</b> Wie beim Impuls kann eine einzelne Komponente erhalten sein, z. B. $L_z$, wenn das Drehmoment keine $z$-Komponente hat.<br><br>
<b>Einheiten-Falle:</b> N m ist dimensionsgleich mit J, aber Drehmoment ist ein Vektor (Kreuzprodukt), Arbeit ein Skalar (Skalarprodukt). Für Drehmomente schreibt man N m, nie J.<br><br>
<b>Zusammenhang:</b> Für Vielteilchensysteme zählen nur äussere Drehmomente (Kap. 6.5.3); für starre Körper wird $\vec L = I\vec\omega$ (Kap. 8) und der Drallsatz erklärt die Kreiselpräzession (Kap. 13).`,
    derivation: R`<ol class="fc-steps">
<li>$\dot{\vec L} = \dfrac{d}{dt}(\vec r\times\vec p) = \dot{\vec r}\times\vec p + \vec r\times\dot{\vec p}$<em>Produktregel für das Kreuzprodukt (Reihenfolge beibehalten!) (5.3).</em></li>
<li>$\dot{\vec r}\times\vec p = \vec v\times m\vec v = \vec 0$<em>Geschwindigkeit und Impuls sind parallel; ihr Kreuzprodukt verschwindet (5.4).</em></li>
<li>$\dot{\vec p} = \vec F$<em>Newton II.</em></li>
<li>$\dot{\vec L} = \vec r\times\vec F =: \vec M$<em>Definition des Drehmoments (5.5, 5.6, 5.8).</em></li>
<li>Zentralkraft $\vec F = f(r)\hat r$: $\vec M = \vec r\times f(r)\hat r = \vec 0$<em>Kraft parallel zum Ortsvektor (bezüglich des Kraftzentrums): Drehimpuls erhalten.</em></li>
</ol>`,
    example: R`<b>Schraubenschlüssel:</b> $F = 50\,\text{N}$ senkrecht in $r = 0{,}30\,\text{m}$ Abstand: $M = 15\,\text{N m}$. Unter $60^\circ$ zum Hebel: $M = 50\cdot0{,}3\cdot\sin60^\circ\,\text{N m} = 13\,\text{N m}$.<br><br>
<b>Eiskunstläuferin</b> (Vorgriff auf Kap. 8): Zieht sie die Arme an, gibt es kein äusseres Drehmoment um die vertikale Achse; $L$ bleibt, der Trägheitsradius sinkt, also dreht sie schneller.`,
    counterexample: R`<b>Kraft ohne Drehmoment:</b> Ein Stein an einer Schnur kreist; die Schnurkraft zeigt immer zum Zentrum. Bezüglich des Zentrums ist $\vec M = \vec 0$, also $\vec L = \text{const}$. Bezüglich eines anderen Punktes ist $\vec M\neq\vec 0$, und $\vec L$ ändert sich. Ob $\vec L$ erhalten ist, hängt vom Bezugspunkt ab.`,
    pitfalls: R`<ul><li>Den Bezugspunkt für $\vec M$ und $\vec L$ verschieden wählen; beide müssen bezüglich <b>desselben</b> festen Punktes berechnet werden.</li>
<li>$\vec M = \vec F\times\vec r$ statt $\vec r\times\vec F$.</li>
<li>N m und J als gleichwertig behandeln.</li>
<li>Drehimpulserhaltung mit Impulserhaltung verwechseln: Bei der Planetenbahn ist $\vec L$ erhalten, $\vec p$ nicht.</li></ul>`
  },
  {
    id: "ph5_drehimpuls_kreis",
    title: "Drehimpuls bei Kreisbewegung: L = m r² ω",
    category: "5.2 Drehimpuls",
    type: "herleitung",
    front: R`Zeige für einen Massenpunkt auf einer Kreisbahn um den Mittelpunkt mit $\vec v = \vec\omega\times\vec r$, dass $\vec L = mr^2\vec\omega$. Welche Rolle spielt $mr^2$?`,
    back: R`Mit $\vec v = \vec\omega\times\vec r$ (2.46) und der BAC-CAB-Regel:
$$\vec L = m\,\vec r\times\vec v = m\,\vec r\times(\vec\omega\times\vec r) = m\{\vec\omega\,(\vec r\cdot\vec r) - \vec r\,\underbrace{(\vec r\cdot\vec\omega)}_{=0}\}\qquad(5.12)$$
$$\vec L = mr^2\,\vec\omega\qquad(5.13)$$
($\vec r\perp\vec\omega$, da der Ursprung im Kreismittelpunkt liegt.) $\vec L$ zeigt in Richtung von $\vec\omega$, entlang der Drehachse; der Betrag ist $L = mr^2\omega = mrv$.<br><br>
$mr^2$ ist das <b>Trägheitsmoment</b> eines Massenpunktes bezüglich der Achse, das Rotationsanalogon zur Masse: $L = I\omega$ wie $p = mv$.`,
    meta: "Skript: Abschnitt 5.2.2, Gl. (5.12)–(5.13), S. 131–132",
    explanation: R`<b>Intuition:</b> Je weiter die Masse von der Achse entfernt ist, desto mehr Drehimpuls hat sie bei gleicher Winkelgeschwindigkeit, und zwar doppelt: Sie ist schneller ($v = r\omega$) <i>und</i> hat einen längeren Hebelarm ($r$). Daher $L\propto r^2$.<br><br>
<b>Abhängigkeiten und Erhaltung:</b> Ist $L$ erhalten und ändert sich $r$, dann gilt $\omega\propto1/r^2$. Halbiert man den Radius, vervierfacht sich die Winkelgeschwindigkeit. Die Bahngeschwindigkeit $v = L/(mr)$ verdoppelt sich.<br><br>
<b>Energie:</b> $T = \tfrac12mv^2 = \tfrac12mr^2\omega^2 = \frac{L^2}{2mr^2}$. Bei konstantem $L$ wächst die Energie beim Hineinziehen. Die Arbeit dafür leistet die ziehende Kraft (Schnur, Arme).<br><br>
<b>Zusammenhang:</b> Für starre Körper summiert man $\sum m_ir_i^2 = I$ (Trägheitsmoment, Kap. 8.5.5). Für eine Achse, die nicht durch den Ursprung geht, ist $\vec L$ i. A. <i>nicht</i> parallel zu $\vec\omega$ (Trägheitstensor, Kap. 8.5.4, 13).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec L = m\,\vec r\times\vec v$, $\vec v = \vec\omega\times\vec r$<em>Definition des Drehimpulses und Kreisbewegung als Kreuzprodukt.</em></li>
<li>$\vec r\times(\vec\omega\times\vec r) = \vec\omega\,(\vec r\cdot\vec r) - \vec r\,(\vec r\cdot\vec\omega)$<em>BAC-CAB: $\vec a\times(\vec b\times\vec c) = \vec b(\vec a\cdot\vec c)-\vec c(\vec a\cdot\vec b)$.</em></li>
<li>$\vec r\cdot\vec r = r^2$, $\vec r\cdot\vec\omega = 0$<em>Ursprung im Kreismittelpunkt: Ortsvektor liegt in der Kreisebene, senkrecht zur Achse.</em></li>
<li>$\vec L = mr^2\vec\omega$<em>Ergebnis (5.13).</em></li>
<li>$L = mr^2\omega = mr\,(r\omega) = mrv$<em>Kontrolle mit $L = r_\perp p$: Beim Kreis ist $r_\perp = r$.</em></li>
</ol>`,
    example: R`<b>Stein an der Schnur:</b> $m = 0{,}1\,\text{kg}$, $r = 1\,\text{m}$, $\omega = 2\pi\,\text{s}^{-1}$ (1 Umlauf/s): $L = 0{,}1\cdot1\cdot6{,}28\,\text{kg m}^2/\text{s} = 0{,}63\,\text{kg m}^2/\text{s}$.<br>
Schnur durch ein Rohr auf $r = 0{,}5\,\text{m}$ verkürzt ($L$ erhalten): $\omega' = 4\omega = 25{,}1\,\text{s}^{-1}$ (4 Umläufe/s), $v' = 12{,}6\,\text{m/s}$ statt $6{,}3\,\text{m/s}$.<br>
Kinetische Energie steigt von $\frac{L^2}{2mr^2} = 2{,}0\,\text{J}$ auf $7{,}9\,\text{J}$.`,
    counterexample: R`<b>Ursprung nicht im Kreismittelpunkt:</b> Liegt $O$ auf der Achse, aber oberhalb der Kreisebene, ist $\vec r\cdot\vec\omega\neq0$. Dann hat $\vec L = m\vec r\times\vec v$ eine Komponente, die mit dem Körper mitrotiert und <i>nicht</i> parallel zu $\vec\omega$ ist. $\vec L = mr^2\vec\omega$ gilt dann nicht.`,
    pitfalls: R`<ul><li>$L = mr\omega$ statt $mr^2\omega$.</li>
<li>Bei Radiusänderung annehmen, $\omega$ oder $v$ bleibe konstant; erhalten ist $L$.</li>
<li>Annehmen, $\vec L\parallel\vec\omega$ gelte immer.</li></ul>`
  },
  {
    id: "ph5_flaechensatz",
    title: "Flächensatz: Drehimpulserhaltung ⇔ gleiche Flächen in gleichen Zeiten",
    category: "5.2 Drehimpuls",
    type: "herleitung",
    front: R`Wie lässt sich die Drehimpulserhaltung <b>geometrisch</b> deuten? Leite die Flächengeschwindigkeit $\dot A = L/(2m)$ her und folgere das 2. Kepler’sche Gesetz.`,
    back: R`Bewegung in der $xy$-Ebene: In der Zeit $dt$ ändert sich $\vec r$ um $d\vec r = \vec v\,dt$, und der Ortsvektor überstreicht das Dreieck
$$d\vec A = \tfrac12\{\vec r\times(\vec r+d\vec r)\} = \tfrac12(\vec r\times d\vec r) = \tfrac12(\vec r\times d\vec r_\perp)\qquad(5.14\text{–}5.16)$$
<b>Flächengeschwindigkeit:</b>
$$\dot{\vec A} = \tfrac12(\vec r\times\dot{\vec r}) = \frac1{2m}(\vec r\times\vec p)\qquad(5.17)$$
$$\dot A = \frac{L}{2m}\qquad(5.18)$$
Bei konstantem Drehimpuls ist $\dot A = \text{const}$: <b>In gleichen Zeiten werden gleiche Flächen überstrichen</b> (2. Kepler’sches Gesetz).`,
    meta: "Skript: Abschnitt 5.2.3, Gl. (5.14)–(5.18), Abb. 5.3, S. 132",
    explanation: R`<b>Intuition:</b> Der „Fahrstrahl“ von der Sonne zum Planeten überstreicht pro Zeit eine Fläche, die vom senkrechten Geschwindigkeitsanteil und vom Abstand abhängt, genau wie der Drehimpuls. Konstanter Drehimpuls heisst also konstante überstrichene Fläche pro Zeit.<br><br>
<b>Folge für Ellipsenbahnen:</b> Nahe der Sonne (kleines $r$) muss der Planet schneller laufen, weit weg langsamer. Im Perihel und Aphel steht $\vec v\perp\vec r$, deshalb gilt dort $r_Pv_P = r_Av_A$.<br><br>
<b>Allgemeinheit:</b> Der Flächensatz gilt für <b>jede Zentralkraft</b>, nicht nur für Gravitation. Kepler 2 sagt nichts über das $1/r^2$-Gesetz; dafür braucht man Kepler 1 und 3 (Kap. 7.2).<br><br>
<b>Zusammenhang:</b> Kepler fand das Gesetz empirisch aus Tycho Brahes Daten; Newton erkannte es als Drehimpulserhaltung. Im effektiven Potential (Kap. 7.3) erscheint $L$ als Zentrifugalbarriere $\frac{L^2}{2mr^2}$.`,
    derivation: R`<ol class="fc-steps">
<li>$dA = \tfrac12|\vec r\times(\vec r+d\vec r)|$<em>Fläche des Dreiecks aus $\vec r$ und $\vec r+d\vec r$: halbes Parallelogramm (5.14).</em></li>
<li>$\vec r\times(\vec r+d\vec r) = \vec r\times\vec r + \vec r\times d\vec r = \vec r\times d\vec r$<em>$\vec r\times\vec r = \vec 0$ (5.15).</em></li>
<li>$\vec r\times d\vec r = \vec r\times d\vec r_\perp$<em>Der radiale Anteil $d\vec r_\parallel$ überstreicht keine Fläche (5.16).</em></li>
<li>$\dot{\vec A} = \tfrac12\vec r\times\dfrac{d\vec r}{dt} = \tfrac12\vec r\times\vec v = \dfrac{1}{2m}\vec r\times\vec p$<em>Durch $dt$ teilen; $\vec v = \vec p/m$ (5.17).</em></li>
<li>$\dot A = \dfrac{L}{2m} = \text{const}$<em>Mit $\vec L = \vec r\times\vec p$; bei Drehimpulserhaltung konstant (5.18).</em></li>
</ol>`,
    example: R`<b>Erde:</b> Perihel $r_P = 1{,}471\cdot10^{11}\,\text{m}$, Aphel $r_A = 1{,}521\cdot10^{11}\,\text{m}$. Aus $r_Pv_P = r_Av_A$: $v_P/v_A = 1{,}034$. Im Januar (Perihel) ist die Erde etwa 3,4 % schneller als im Juli, deshalb ist das Winterhalbjahr der Nordhalbkugel einige Tage kürzer.<br><br>
<b>Komet Halley:</b> $r_P\approx0{,}59\,\text{AE}$, $r_A\approx35\,\text{AE}$, also $v_P/v_A\approx60$.`,
    counterexample: R`<b>Nicht-zentrale Kraft:</b> Auf einen Satelliten mit Triebwerksschub quer zur Bahn wirkt ein Drehmoment um die Erde. $L$ ändert sich und damit auch die Flächengeschwindigkeit; der Flächensatz gilt nicht mehr.<br>
<b>Bezugspunkt:</b> Misst man die Flächen von einem anderen Punkt als dem Kraftzentrum aus (z. B. dem leeren Brennpunkt der Ellipse), ist $\dot A$ nicht konstant.`,
    pitfalls: R`<ul><li>Den Faktor $\tfrac12$ vergessen ($\dot A = L/2m$, nicht $L/m$).</li>
<li>Den Flächensatz als speziell für Gravitation halten; er gilt für alle Zentralkräfte.</li>
<li>Gleiche Flächen mit gleichen Bogenlängen verwechseln.</li></ul>`
  },
  {
    id: "ph5_analogie",
    title: "Analogie Translation ↔ Rotation (Impuls/Drehimpuls, Kraft/Drehmoment)",
    category: "5.3 Zusammenfassung",
    type: "konzept",
    front: R`Stelle die <b>Analogie</b> zwischen Translation und Rotation für einen Massenpunkt zusammen: Welche Grössen und Gesetze entsprechen sich, und wo hört die Analogie auf?`,
    back: R`<table><tr><th>Translation</th><th>Rotation (bzgl. festem Punkt $O$)</th></tr>
<tr><td>Ort $\vec r$</td><td>Winkel $\varphi$</td></tr>
<tr><td>Geschwindigkeit $\vec v$</td><td>Winkelgeschwindigkeit $\vec\omega$</td></tr>
<tr><td>Masse $m$</td><td>Trägheitsmoment $I = mr^2$</td></tr>
<tr><td>Impuls $\vec p = m\vec v$</td><td>Drehimpuls $\vec L = \vec r\times\vec p$ ($= mr^2\vec\omega$ auf dem Kreis)</td></tr>
<tr><td>Kraft $\vec F$</td><td>Drehmoment $\vec M = \vec r\times\vec F$</td></tr>
<tr><td>$\vec F = \dot{\vec p}$</td><td>$\vec M = \dot{\vec L}$</td></tr>
<tr><td>$\vec F = \vec 0\Rightarrow\vec p = \text{const}$</td><td>$\vec M = \vec 0\Rightarrow\vec L = \text{const}$</td></tr>
<tr><td>$T = \tfrac12mv^2$</td><td>$T = \tfrac12I\omega^2$</td></tr></table>
Unterschiede: $\vec L$ und $\vec M$ hängen vom Bezugspunkt ab und sind axiale Vektoren; $\vec L$ ist i. A. nicht parallel zu $\vec\omega$ (Kap. 8, 13).`,
    meta: "Skript: Kap. 5 (Einleitung 5.1, Zusammenfassung 5.3); vgl. Kap. 8.5.6",
    explanation: R`<b>Intuition:</b> Fast jede Formel der Translation hat ein Rotationsgegenstück, wenn man ersetzt: $x\to\varphi$, $m\to I$, $F\to M$, $p\to L$. Das spart Lernaufwand und hilft beim Prüfen von Formeln: Die Struktur muss gleich sein.<br><br>
<b>Erhaltungssätze im Paar:</b> Impulserhaltung (Translationssymmetrie des Raumes) und Drehimpulserhaltung (Isotropie, keine ausgezeichnete Richtung) sind gleichrangige Grundgesetze. Kein Experiment hat je eine Verletzung gezeigt.<br><br>
<b>Wo die Analogie bricht:</b>
<ul><li>Die Masse ist eine Eigenschaft des Körpers, das Trägheitsmoment hängt zusätzlich von der Achse ab (Steiner, Kap. 8.5.8).</li>
<li>Bei ausgedehnten Körpern ist $I$ ein Tensor; $\vec L$ und $\vec\omega$ können verschiedene Richtungen haben. Daraus folgen Präzession und Nutation (Kap. 13).</li>
<li>Endliche Drehwinkel sind keine Vektoren (Kap. 2.5.4).</li></ul>
<b>Zusammenhang:</b> In Kap. 8.5.6 wird die Tabelle für starre Körper vervollständigt (Arbeit $\int M\,d\varphi$, Leistung $M\omega$).`,
    derivation: R`Die Rotationsform von Newton II für einen Massenpunkt auf einem festen Kreis:
<ol class="fc-steps">
<li>$F_t = ma_t = mr\alpha$<em>Tangentiale Kraftkomponente beschleunigt tangential; $a_t = r\alpha$ (Kap. 2.5.5).</em></li>
<li>$M = rF_t = mr^2\alpha$<em>Mit dem Hebelarm $r$ multiplizieren: Drehmoment um die Achse.</em></li>
<li>$M = I\alpha$ mit $I = mr^2$<em>Struktur wie $F = ma$: Trägheitsmoment statt Masse.</em></li>
<li>$\dfrac{dL}{dt} = \dfrac{d}{dt}(I\omega) = I\alpha = M$<em>Konsistent mit dem Drallsatz, solange $I$ konstant ist.</em></li>
<li>$T = \tfrac12mv^2 = \tfrac12m(r\omega)^2 = \tfrac12I\omega^2$<em>Auch die kinetische Energie hat die analoge Form.</em></li>
</ol>`,
    example: R`Ein $2\text{-kg}$-Körper auf einem $0{,}5\text{-m}$-Arm (masseloser Stab) wird von einem Drehmoment $M = 1\,\text{N m}$ angetrieben: $I = 0{,}5\,\text{kg m}^2$, $\alpha = M/I = 2\,\text{rad/s}^2$.<br>
Translatorisch gleichwertig: Tangentialkraft $F = M/r = 2\,\text{N}$, $a_t = F/m = 1\,\text{m/s}^2 = r\alpha$ ✓.`,
    counterexample: R`<b>Analogie falsch angewandt:</b> „Drehimpuls ist wie Impuls eine Eigenschaft des Körpers.“ Ein geradeaus fliegender Ball hat je nach Bezugspunkt den Drehimpuls 0 oder nicht 0, sein Impuls ist dagegen eindeutig. Die Analogie gilt für die <i>Gesetze</i>, nicht für alle Eigenschaften.`,
    pitfalls: R`<ul><li>$m$ statt $I$ in Rotationsformeln einsetzen.</li>
<li>Den Bezugspunkt bei $\vec L$ und $\vec M$ wechseln.</li>
<li>$\vec L\parallel\vec\omega$ für beliebige starre Körper annehmen.</li></ul>`
  }
];
})();
