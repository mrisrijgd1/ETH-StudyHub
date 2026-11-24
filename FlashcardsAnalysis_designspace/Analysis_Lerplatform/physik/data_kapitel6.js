/* ==========================================================================
   PHYSIK I – KAPITEL 6: Vielteilchensysteme
   Schwerpunktsatz, Labor- und Schwerpunktsystem, Zerlegung von Impuls, Energie,
   Drehimpuls, Erhaltungssätze, 2-Teilchen-System (reduzierte Masse), Teilchenstösse
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_6 = [
  // ========================================================================
  // 6.2 SCHWERPUNKTSATZ
  // ========================================================================
  {
    id: "ph6_schwerpunktsatz",
    title: "Schwerpunktsatz: M r̈_S = F_ext",
    category: "6.2 Schwerpunktsatz",
    type: "herleitung",
    front: R`Leite für ein System von $N$ Massenpunkten den <b>Schwerpunktsatz</b> $m_\text{tot}\ddot{\vec r}_S = \vec F_\text{ext}$ her. Warum fallen die inneren Kräfte heraus?`,
    back: R`Bewegungsgleichung des $i$-ten Teilchens: innere Kräfte der übrigen $N-1$ Teilchen plus äussere Kraft:
$$m_i\ddot{\vec r}_i = \sum_{k\neq i}\vec F_{ik} + \vec F_{\text{ext},i}\qquad(6.1)$$
Summe über alle Teilchen:
$$\sum_i m_i\ddot{\vec r}_i = \underbrace{\sum_i\sum_{k\neq i}\vec F_{ik}}_{=\vec 0} + \underbrace{\sum_i\vec F_{\text{ext},i}}_{=:\vec F_\text{ext}}\qquad(6.2)$$
Die Doppelsumme verschwindet, weil zu jeder Kraft $\vec F_{ik}$ nach Newton III eine Gegenkraft $\vec F_{ki} = -\vec F_{ik}$ gehört. Mit $m_\text{tot} = \sum m_i$ (6.5) und dem <b>Schwerpunkt</b>
$$\vec r_S := \frac{\sum_i m_i\vec r_i}{\sum_i m_i}\qquad(6.7)$$
folgt
$$m_\text{tot}\frac{d^2\vec r_S}{dt^2} = \vec F_\text{ext}\qquad(6.9)$$
Der Schwerpunkt bewegt sich wie ein Massenpunkt mit der Gesamtmasse, an dem die Summe aller äusseren Kräfte angreift.`,
    meta: "Skript: Abschnitt 6.2, Gl. (6.1)–(6.9), Abb. 6.1–6.2, S. 135–137",
    explanation: R`<b>Intuition:</b> Egal wie kompliziert die Teile eines Systems miteinander wechselwirken (Explosion, Stösse, Federn, Muskeln), die inneren Kräfte können den Schwerpunkt nicht bewegen. Nur äussere Kräfte können das.<br><br>
<b>Konsequenzen:</b>
<ul><li>Ein Feuerwerkskörper explodiert in der Luft: Der Schwerpunkt der Bruchstücke fliegt auf der ursprünglichen Wurfparabel weiter (bis das erste Stück landet).</li>
<li>Ein Mensch kann sich im schwerelosen Raum nicht durch „Strampeln“ von der Stelle bewegen; sein Schwerpunkt bleibt.</li>
<li>Für $\vec F_\text{ext} = \vec 0$ ist $\vec v_S$ konstant: Gesamtimpuls erhalten.</li></ul>
<b>Rechtfertigung des Massenpunktmodells:</b> Der Satz erklärt, warum man ausgedehnte Körper für die Translation als Massenpunkt behandeln darf (Kap. 2.2). Er sagt aber nichts über Rotation oder Verformung.<br><br>
<b>Zusammenhang:</b> Mit $\vec p_\text{tot} = m_\text{tot}\vec v_S$ lautet er $\dot{\vec p}_\text{tot} = \vec F_\text{ext}$ (6.39), die Verallgemeinerung von Newton II.`,
    derivation: R`<ol class="fc-steps">
<li>$m_i\ddot{\vec r}_i = \sum_{k\neq i}\vec F_{ik} + \vec F_{\text{ext},i}$<em>Newton II für Teilchen $i$ (6.1).</em></li>
<li>$\sum_i\sum_{k\neq i}\vec F_{ik} = \sum_{i\lt k}(\vec F_{ik}+\vec F_{ki}) = \vec 0$<em>Doppelsumme paarweise zusammenfassen; Newton III (6.2).</em></li>
<li>$\sum_im_i\ddot{\vec r}_i = \dfrac{d^2}{dt^2}\sum_im_i\vec r_i$<em>Konstante Massen: Ableitung und Summe vertauschen (6.3, 6.4).</em></li>
<li>$\sum_im_i\vec r_i = m_\text{tot}\vec r_S$<em>Definition des Schwerpunkts (6.7) eingesetzt.</em></li>
<li>$m_\text{tot}\ddot{\vec r}_S = \vec F_\text{ext}$<em>Ergebnis (6.6, 6.9).</em></li>
</ol>`,
    example: R`<b>Boot und Person:</b> Eine Person ($70\,\text{kg}$) geht in einem ruhenden Boot ($140\,\text{kg}$, reibungsfrei auf dem Wasser) $3\,\text{m}$ nach vorne. Der Schwerpunkt bleibt in Ruhe: $70\cdot\Delta x_P + 140\cdot\Delta x_B = 0$ und $\Delta x_P - \Delta x_B = 3\,\text{m}$, also $\Delta x_B = -1\,\text{m}$ und $\Delta x_P = +2\,\text{m}$ relativ zum Ufer.`,
    counterexample: R`<b>Innere Kräfte bewegen sehr wohl die Teile:</b> Der Schwerpunktsatz sagt nichts darüber, wie sich die einzelnen Teilchen relativ zueinander bewegen. Eine Katze, die sich im Fall dreht, verletzt den Satz nicht: Ihr Schwerpunkt fällt auf der Parabel, ihre Orientierung ändert sie mit inneren Kräften (und ohne äusseres Drehmoment, mit $L = 0$).`,
    pitfalls: R`<ul><li>Innere Kräfte in $\vec F_\text{ext}$ mitzählen.</li>
<li>Annehmen, der Schwerpunkt liege immer in einem Teilchen (bei einem Ring liegt er im leeren Zentrum).</li>
<li>Den Schwerpunktsatz für die Rotation verwenden; dafür braucht man den Drallsatz.</li></ul>`
  },
  {
    id: "ph6_schwerpunkt_def",
    title: "Schwerpunktsystem, Σ mᵢrᵢ* = 0 und Schwerpunkt im Schwerefeld",
    category: "6.2 Schwerpunktsatz",
    type: "definition",
    front: R`Was ist das <b>Schwerpunktsystem</b>? Zeige $\sum_im_i\vec r_i^{\,*} = \vec 0$, und folgere, dass die Schwerkraft bezüglich des Schwerpunkts <b>kein Drehmoment</b> ausübt. Wann sind Massenmittelpunkt und Schwerpunkt identisch?`,
    back: R`$\vec r_S$ ist das massengewichtete Mittel der Ortsvektoren; das Gewicht von Teilchen $k$ ist $\frac{m_k}{m_\text{tot}}$ (6.8). <b>Schwerpunktsystem</b>: Bezugssystem mit Ursprung im Schwerpunkt:
$$\vec r_i = \vec r_S + \vec r_i^{\,*}\qquad(6.10)$$
Einsetzen in die Definition:
$$\vec r_S = \frac1{m_\text{tot}}\sum m_i(\vec r_S+\vec r_i^{\,*}) = \vec r_S + \frac1{m_\text{tot}}\sum m_i\vec r_i^{\,*}\;\Rightarrow\;\sum_im_i\vec r_i^{\,*} = \vec 0\qquad(6.11\text{–}6.14)$$
<b>Drehmoment der Schwerkraft</b> bezüglich $S$ (homogenes $\vec g$):
$$\sum_i\vec M_i = \sum_i\vec r_i^{\,*}\times m_i\vec g = \Big(\sum_im_i\vec r_i^{\,*}\Big)\times\vec g = \vec 0\qquad(6.15\text{–}6.17)$$
Man findet den Schwerpunkt also, indem man den Aufhängepunkt so lange verändert, bis die Schwerkraft kein Drehmoment mehr ausübt. Massenmittelpunkt und Schwerpunkt sind identisch, wenn $\vec g$ für alle Massenpunkte gleich ist.`,
    meta: "Skript: Abschnitte 6.2–6.3, Gl. (6.7)–(6.17), Abb. 6.3, S. 137–139 (Fussnote 1)",
    explanation: R`<b>Intuition:</b> Der Schwerpunkt ist der „Balancierpunkt“. Unterstützt man einen Körper genau dort, kippt er in keine Richtung, weil sich die Drehmomente aller Teile um diesen Punkt aufheben ($\sum m_i\vec r_i^{\,*} = \vec 0$ heisst: im Mittel liegt genauso viel Masse links wie rechts).<br><br>
<b>Experimentelle Bestimmung:</b> Einen Körper nacheinander an zwei Punkten aufhängen und jeweils das Lot einzeichnen. Der Schnittpunkt ist der Schwerpunkt, denn im Gleichgewicht liegt er immer senkrecht unter dem Aufhängepunkt.<br><br>
<b>Massenmittelpunkt vs. Schwerpunkt:</b> Begrifflich ist der Massenmittelpunkt rein über die Massenverteilung definiert, der Schwerpunkt über die Schwerkraft. Im homogenen Feld fallen sie zusammen; für sehr grosse Körper (z. B. ein langer Satellit im Erdfeld) nicht exakt, daher die Gezeitenkräfte.<br><br>
<b>Zusammenhang:</b> Statik (Kap. 8.4): Man darf die Gewichtskraft eines starren Körpers im Schwerpunkt angreifen lassen. Kontinuierliche Körper: $\vec r_S = \frac1M\int\vec r\,dm$ (Kap. 8.2).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r_i = \vec r_S + \vec r_i^{\,*}$<em>Ortsvektor zerlegen in Schwerpunktslage plus Lage relativ zum Schwerpunkt (6.10).</em></li>
<li>$m_\text{tot}\vec r_S = \sum m_i\vec r_i = \sum m_i\vec r_S + \sum m_i\vec r_i^{\,*}$<em>In die Definition (6.7) einsetzen (6.11, 6.12).</em></li>
<li>$\sum m_i\vec r_S = m_\text{tot}\vec r_S$<em>$\vec r_S$ hängt nicht von $i$ ab.</em></li>
<li>$\sum m_i\vec r_i^{\,*} = \vec 0$<em>Beide Seiten vergleichen (6.14): Der Schwerpunkt liegt im Schwerpunktsystem im Ursprung.</em></li>
<li>$\sum\vec r_i^{\,*}\times m_i\vec g = \left(\sum m_i\vec r_i^{\,*}\right)\times\vec g = \vec 0$<em>Konstantes $\vec g$ ausklammern (6.16, 6.17).</em></li>
</ol>`,
    example: R`<b>Drei Massen</b> (Abb. 6.3): $2m$ bei $(0,2)$, $m$ bei $(-1,0)$, $m$ bei $(1,0)$: $\vec r_S = \frac{2m(0,2)+m(-1,0)+m(1,0)}{4m} = (0;\ 1)$.<br>
Kontrolle: $\vec r^{\,*}$: $(0,1)$, $(-1,-1)$, $(1,-1)$; $2m(0,1)+m(-1,-1)+m(1,-1) = (0,0)$ ✓.<br><br>
<b>Hantel</b> $m_1 = 1\,\text{kg}$, $m_2 = 3\,\text{kg}$, Abstand $1\,\text{m}$: Schwerpunkt $0{,}75\,\text{m}$ von $m_1$, also näher bei der schweren Masse.`,
    counterexample: R`<b>Inhomogenes Feld:</b> Ein langer, vertikal ausgerichteter Satellit im Erdorbit: Das untere Ende wird stärker angezogen als das obere. Der Angriffspunkt der resultierenden Gravitationskraft (Schwerpunkt) liegt etwas unter dem Massenmittelpunkt, und es entsteht ein Drehmoment, sobald der Satellit schräg steht (Gravitationsgradienten-Stabilisierung).`,
    pitfalls: R`<ul><li>Ungewichtet mitteln (geometrische Mitte statt Massenmittel).</li>
<li>$\sum\vec r_i^{\,*} = \vec 0$ statt $\sum m_i\vec r_i^{\,*} = \vec 0$ schreiben.</li>
<li>Annehmen, der Schwerpunkt müsse innerhalb des Körpers liegen (Hufeisen, Ring, Hochspringer).</li></ul>`
  },

  // ========================================================================
  // 6.4 LINEAR- UND DREHBEWEGUNG
  // ========================================================================
  {
    id: "ph6_impuls_zerlegung",
    title: "Geschwindigkeit und Impuls im Labor- und Schwerpunktsystem: Σ pᵢ* = 0",
    category: "6.4 Linear- und Drehbewegung",
    type: "gesetz",
    front: R`Wie hängen Geschwindigkeit und Impuls eines Teilchens im <b>Laborsystem</b> mit denen im <b>Schwerpunktsystem</b> zusammen? Zeige, dass die Summe der Impulse im Schwerpunktsystem verschwindet.`,
    back: R`$$\vec v_i = \frac{d\vec r_i}{dt} = \frac{d\vec r_S}{dt}+\frac{d\vec r_i^{\,*}}{dt} = \vec v_S + \vec v_i^{\,*}\qquad(6.18,\,6.19)$$
$$\vec p_i = m_i\vec v_i = m_i\vec v_S + \vec p_i^{\,*}\qquad(6.20,\,6.21)$$
Aus $\sum m_i\vec r_i^{\,*} = \vec 0$ (6.14) durch Ableiten:
$$\vec 0 = \frac{d}{dt}\sum m_i\vec r_i^{\,*} = \sum m_i\vec v_i^{\,*}\quad\Rightarrow\quad\sum_i\vec p_i^{\,*} = \vec 0\qquad(6.22,\,6.23)$$
Das wird oft als <b>Definition des Schwerpunktsystems</b> verwendet: das System, in dem der Gesamtimpuls null ist. Im Laborsystem ist $\vec p_\text{tot} = \sum\vec p_i = m_\text{tot}\vec v_S$.`,
    meta: "Skript: Abschnitte 6.4.1–6.4.2, Gl. (6.18)–(6.23), S. 139–140",
    explanation: R`<b>Intuition:</b> Jede Bewegung eines Teilchensystems setzt sich aus zwei Teilen zusammen: dem gemeinsamen „Mitfliegen“ mit dem Schwerpunkt ($\vec v_S$) und der Bewegung relativ zum Schwerpunkt ($\vec v_i^{\,*}$). Im Schwerpunktsystem sieht man nur Letztere, und dort heben sich alle Impulse auf.<br><br>
<b>Warum ist das so praktisch?</b> Bei Stössen und Zerfällen ist im Schwerpunktsystem alles symmetrisch: Zwei Teilchen haben stets entgegengesetzt gleiche Impulse. Man rechnet dort und transformiert am Ende zurück (6.8).<br><br>
<b>Ist das Schwerpunktsystem ein Inertialsystem?</b> Ja, wenn keine äusseren Kräfte wirken ($\vec v_S = \text{const}$). Mit äusseren Kräften ist es beschleunigt, und man braucht im Prinzip Trägheitskräfte. Für den Drallsatz darf man den Schwerpunkt trotzdem immer als Bezugspunkt nehmen (6.4.5).<br><br>
<b>Zusammenhang:</b> Die Zerlegung $\vec v_i = \vec v_S + \vec v_i^{\,*}$ ist eine Galilei-Transformation mit $\vec u = \vec v_S$ (Kap. 3.5).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r_i = \vec r_S + \vec r_i^{\,*}$<em>Zerlegung des Ortsvektors (6.10).</em></li>
<li>$\vec v_i = \vec v_S + \vec v_i^{\,*}$<em>Nach der Zeit ableiten (6.18).</em></li>
<li>$\vec p_i = m_i\vec v_S + m_i\vec v_i^{\,*} = m_i\vec v_S + \vec p_i^{\,*}$<em>Mit $m_i$ multiplizieren (6.20, 6.21).</em></li>
<li>$\sum m_i\vec r_i^{\,*} = \vec 0$ für alle $t$ $\Rightarrow$ $\sum m_i\vec v_i^{\,*} = \vec 0$<em>Eine Grösse, die immer null ist, hat die Zeitableitung null (6.22).</em></li>
<li>$\sum\vec p_i = m_\text{tot}\vec v_S + \sum\vec p_i^{\,*} = m_\text{tot}\vec v_S$<em>Summe der Laborimpulse: Der Relativanteil fällt heraus.</em></li>
</ol>`,
    example: R`Zwei Teilchen: $m_1 = 1\,\text{kg}$ mit $v_1 = 4\,\text{m/s}$, $m_2 = 3\,\text{kg}$ in Ruhe (1D).<br>
$v_S = \frac{4}{4}\,\text{m/s} = 1\,\text{m/s}$; $v_1^* = 3\,\text{m/s}$, $v_2^* = -1\,\text{m/s}$; $p_1^* = 3$, $p_2^* = -3\,\text{kg m/s}$, Summe null ✓.<br>
Im Schwerpunktsystem laufen beide aufeinander zu mit gleich grossen Impulsen, wie zwei gleich starke „Gegner“.`,
    counterexample: R`<b>Geschwindigkeiten summieren sich nicht zu null:</b> Im Beispiel ist $v_1^*+v_2^* = 2\,\text{m/s}\neq0$. Nur die <i>massengewichtete</i> Summe verschwindet. Wer im Schwerpunktsystem gleiche Geschwindigkeitsbeträge erwartet, liegt nur bei gleichen Massen richtig.`,
    pitfalls: R`<ul><li>$\sum\vec v_i^{\,*} = \vec 0$ statt $\sum m_i\vec v_i^{\,*} = \vec 0$ annehmen.</li>
<li>Beim Zurücktransformieren $\vec v_S$ vergessen.</li>
<li>Impulse im Laborsystem und im Schwerpunktsystem in derselben Bilanz mischen.</li></ul>`
  },
  {
    id: "ph6_energie_zerlegung",
    title: "Kinetische Energie: T = Σ pᵢ*²/2mᵢ + ½ M v_S²",
    category: "6.4 Linear- und Drehbewegung",
    type: "herleitung",
    front: R`Zeige, dass sich die kinetische Energie eines $N$-Teilchen-Systems im Laborsystem in die <b>innere</b> kinetische Energie (im Schwerpunktsystem) und die kinetische Energie des <b>Schwerpunkts</b> zerlegt. Warum fällt der Mischterm weg?`,
    back: R`$$T = \sum_i\frac{p_i^2}{2m_i} = \sum_i\frac{1}{2m_i}\{\vec p_i^{\,*}+m_i\vec v_S\}^2\qquad(6.24,\,6.25)$$
$$= \sum_i\frac{p_i^{*2}}{2m_i} + \underbrace{\Big(\sum_i\vec p_i^{\,*}\Big)}_{=\vec 0}\cdot\vec v_S + \tfrac12v_S^2\underbrace{\sum_im_i}_{=m_\text{tot}}\qquad(6.26,\,6.27)$$
$$T = \sum_i\frac{p_i^{*2}}{2m_i} + \tfrac12m_\text{tot}v_S^2\qquad(6.28)$$
Die gesamte kinetische Energie ist die Summe der Einzelenergien im Schwerpunktsystem plus der kinetischen Energie des Schwerpunkts (gemessen im Laborsystem). Auch ein System mit ruhendem Schwerpunkt kann kinetische Energie haben; beim idealen Gas hängt diese innere kinetische Energie mit der <b>Temperatur</b> zusammen.`,
    meta: "Skript: Abschnitt 6.4.3, Gl. (6.24)–(6.28), S. 140",
    explanation: R`<b>Intuition:</b> Ein fliegender, sich drehender Ball hat zwei „Energiekonten“: die Bewegung als Ganzes ($\tfrac12Mv_S^2$) und die Bewegung der Teile relativ zum Schwerpunkt (hier: Rotation). Es gibt keine gemischten Terme, weil die Relativimpulse sich im Schwerpunktsystem zu null summieren.<br><br>
<b>Wichtige Folgen:</b>
<ul><li>Bei einem Stoss kann höchstens die innere Energie $T^*$ in Wärme/Verformung umgewandelt werden. $\tfrac12Mv_S^2$ bleibt wegen Impulserhaltung zwingend erhalten. Daher kann bei einem vollständig inelastischen Stoss nicht die gesamte Energie verloren gehen.</li>
<li>Teilchenbeschleuniger: Beim Beschuss eines ruhenden Ziels steht nur $T^*$ für die Erzeugung neuer Teilchen zur Verfügung. Deshalb baut man Collider mit gegeneinanderlaufenden Strahlen ($v_S = 0$).</li></ul>
<b>Zusammenhang:</b> Für starre Körper wird $T^* = \tfrac12I_S\omega^2$ (Rotationsenergie um den Schwerpunkt, Kap. 8/13), für Gase $T^* = \tfrac32Nk_BT$ (Kap. 10, 14).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec p_i = \vec p_i^{\,*}+m_i\vec v_S$<em>Laborimpuls aus (6.21).</em></li>
<li>$\dfrac{p_i^2}{2m_i} = \dfrac{p_i^{*2}}{2m_i} + \vec p_i^{\,*}\cdot\vec v_S + \tfrac12m_iv_S^2$<em>Quadrat ausmultiplizieren und durch $2m_i$ teilen (6.26).</em></li>
<li>$\sum_i\vec p_i^{\,*}\cdot\vec v_S = \left(\sum_i\vec p_i^{\,*}\right)\cdot\vec v_S = 0$<em>$\vec v_S$ ist für alle Teilchen gleich; die Summe der Schwerpunktsimpulse ist null (6.23).</em></li>
<li>$\sum_i\tfrac12m_iv_S^2 = \tfrac12m_\text{tot}v_S^2$<em>Gesamtmasse.</em></li>
<li>$T = T^* + \tfrac12m_\text{tot}v_S^2$<em>Ergebnis (6.28).</em></li>
</ol>`,
    example: R`Wie oben: $m_1 = 1\,\text{kg}$ mit $4\,\text{m/s}$ auf $m_2 = 3\,\text{kg}$ (ruhend).<br>
Labor: $T = \tfrac12\cdot1\cdot16 = 8\,\text{J}$.<br>
Zerlegt: $T^* = \frac{3^2}{2\cdot1}+\frac{3^2}{2\cdot3} = 4{,}5+1{,}5 = 6\,\text{J}$, Schwerpunkt: $\tfrac12\cdot4\cdot1^2 = 2\,\text{J}$. Summe $8\,\text{J}$ ✓.<br>
Kleben sie zusammen, gehen maximal die $6\,\text{J}$ verloren; $2\,\text{J}$ bleiben als Bewegung des gemeinsamen Körpers.`,
    counterexample: R`<b>Bezugspunkt beliebig wählen:</b> Zerlegt man bezüglich eines Punktes, der nicht der Schwerpunkt ist, verschwindet der Mischterm i. A. <i>nicht</i>. Die saubere Aufteilung in „innere“ und „äussere“ Energie gibt es nur bezüglich des Schwerpunkts.`,
    pitfalls: R`<ul><li>Bei inelastischen Stössen annehmen, die gesamte kinetische Energie könne verloren gehen.</li>
<li>Den Mischterm $\sum\vec p_i^{\,*}\cdot\vec v_S$ falsch behandeln.</li>
<li>$T$ wie den Impuls als Vektor addieren.</li></ul>`
  },
  {
    id: "ph6_drehimpuls_zerlegung",
    title: "Drehimpuls: L = L* + L_S (Eigendrehimpuls und Bahndrehimpuls)",
    category: "6.4 Linear- und Drehbewegung",
    type: "herleitung",
    front: R`Zerlege den Gesamtdrehimpuls eines Teilchensystems (Laborsystem) in einen <b>Bahndrehimpuls</b> des Schwerpunkts und einen <b>Eigendrehimpuls</b> (Spin). Welche Mischterme verschwinden und warum?`,
    back: R`$$\vec L = \sum_i\vec r_i\times\vec p_i = \sum_i(\vec r_S+\vec r_i^{\,*})\times(m_i\vec v_S+\vec p_i^{\,*})\qquad(6.29,\,6.30)$$
$$= \underbrace{\vec r_S\times(m_\text{tot}\vec v_S)}_{=:\vec L_S} + \vec r_S\times\underbrace{\sum_i\vec p_i^{\,*}}_{=\vec 0} + \underbrace{\Big(\sum_im_i\vec r_i^{\,*}\Big)}_{=\vec 0}\times\vec v_S + \underbrace{\sum_i\vec r_i^{\,*}\times\vec p_i^{\,*}}_{=:\vec L^*}\qquad(6.31,\,6.32)$$
$$\vec L = \vec L^* + \vec L_S\qquad(6.33)$$
<ul><li>$\vec L^*$: <b>Eigendrehimpuls</b> oder Spin, der Drehimpuls bezüglich des Schwerpunkts, unabhängig vom Ursprung.</li>
<li>$\vec L_S$: <b>Bahndrehimpuls</b> des Schwerpunkts im Laborsystem, hängt vom Ursprung ab.</li></ul>`,
    meta: "Skript: Abschnitt 6.4.4, Gl. (6.29)–(6.33), S. 141",
    explanation: R`<b>Intuition:</b> Die Erde hat zwei Drehimpulse: einen, weil sie um die Sonne läuft (Bahn), und einen, weil sie sich um ihre eigene Achse dreht (Spin). Die Zerlegung zeigt, dass sich diese sauber trennen lassen, genau wie die kinetische Energie in 6.4.3.<br><br>
<b>Warum verschwinden die Mischterme?</b> Beide enthalten eine der zwei Schwerpunktsbedingungen: $\sum\vec p_i^{\,*} = \vec 0$ bzw. $\sum m_i\vec r_i^{\,*} = \vec 0$.<br><br>
<b>Unabhängigkeit vom Ursprung:</b> Verschiebt man den Laborursprung, ändert sich nur $\vec L_S$. $\vec L^*$ ist eine echte Eigenschaft des Systems (wie die Masse), daher der Name Eigendrehimpuls.<br><br>
<b>Zusammenhang:</b> In der Quantenmechanik ist „Spin“ ein intrinsischer Drehimpuls von Elementarteilchen ohne klassisches Gegenstück, aber die Aufteilung Bahn plus Spin ist dieselbe Idee. Für starre Körper ist $\vec L^* = I_S\vec\omega$ (bzw. mit Trägheitstensor, Kap. 8, 13).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r_i\times\vec p_i = (\vec r_S+\vec r_i^{\,*})\times(m_i\vec v_S+\vec p_i^{\,*})$<em>Zerlegungen (6.10) und (6.21) einsetzen (6.30).</em></li>
<li>$= m_i\,\vec r_S\times\vec v_S + \vec r_S\times\vec p_i^{\,*} + m_i\,\vec r_i^{\,*}\times\vec v_S + \vec r_i^{\,*}\times\vec p_i^{\,*}$<em>Distributiv ausmultiplizieren; vier Terme (6.31).</em></li>
<li>$\sum_im_i\,\vec r_S\times\vec v_S = \vec r_S\times(m_\text{tot}\vec v_S) = \vec L_S$<em>Erster Term summiert: Bahndrehimpuls eines Massenpunkts $m_\text{tot}$ im Schwerpunkt.</em></li>
<li>$\sum_i\vec r_S\times\vec p_i^{\,*} = \vec r_S\times\sum_i\vec p_i^{\,*} = \vec 0$<em>Zweiter Term: Schwerpunktimpulse summieren sich zu null (6.23).</em></li>
<li>$\sum_im_i\vec r_i^{\,*}\times\vec v_S = \Big(\sum_im_i\vec r_i^{\,*}\Big)\times\vec v_S = \vec 0$<em>Dritter Term: (6.14).</em></li>
<li>$\vec L = \vec L_S + \vec L^*$<em>Es bleibt der vierte Term als Eigendrehimpuls (6.32, 6.33).</em></li>
</ol>`,
    example: R`<b>Erde:</b> Bahndrehimpuls um die Sonne $L_S\approx2{,}7\cdot10^{40}\,\text{kg m}^2/\text{s}$; Spin $L^* = I\omega\approx8{,}0\cdot10^{37}\,\text{kg}\,\text{m}^2\cdot7{,}29\cdot10^{-5}\,\text{s}^{-1}\approx5{,}9\cdot10^{33}\,\text{kg m}^2/\text{s}$, also etwa 4,6 Millionen Mal kleiner.<br><br>
<b>Rollendes Rad</b> (Radius $R$, Masse $M$, Ursprung am Boden): Bahnanteil $L_S = MRv_S$, Spin $L^* = I_S\,v_S/R$.`,
    counterexample: R`<b>Spin ist nicht immer „Drehung um sich selbst“ im Alltagssinn:</b> Zwei Massen, die an einer Feder radial schwingen (ohne Drehung), haben $\vec L^* = \vec 0$, obwohl sich ihre Teile relativ zum Schwerpunkt bewegen. Nur der tangentiale Anteil der Relativbewegung trägt zum Eigendrehimpuls bei.`,
    pitfalls: R`<ul><li>Annehmen, der Gesamtdrehimpuls hänge nicht vom Ursprung ab; nur $\vec L^*$ ist ursprungsunabhängig.</li>
<li>Die Schwerpunktbedingungen beim Wegfallen der Mischterme verwechseln.</li>
<li>$\vec L_S$ bezüglich eines anderen Punkts berechnen als die Bahn.</li></ul>`
  },
  {
    id: "ph6_drallsatz_system",
    title: "Innere Drehmomente heben sich auf: dL/dt = M_ext",
    category: "6.4 Linear- und Drehbewegung",
    type: "gesetz",
    front: R`Zeige, dass sich die <b>inneren Drehmomente</b> eines Teilchensystems paarweise aufheben. Wie lautet der Drallsatz für Systeme, und bezüglich welcher Punkte darf er angewendet werden?`,
    back: R`Kräftepaar $\vec F_{ik} = -\vec F_{ki}$; Drehmomente bezüglich des Schwerpunkts:
$$\vec M_i^* = \vec r_i^{\,*}\times\vec F_{ik},\qquad\vec M_k^* = \vec r_k^{\,*}\times\vec F_{ki}\qquad(6.34,\,6.35)$$
$$\vec M^* = \vec M_i^*+\vec M_k^* = (\vec r_i^{\,*}-\vec r_k^{\,*})\times\vec F_{ik} = \vec 0\qquad(6.36)$$
weil die Kraft entlang der Verbindungslinie wirkt: $\vec F_{ik}\parallel(\vec r_i^{\,*}-\vec r_k^{\,*})$.<br><br>
<b>Drallsatz für beliebige Systeme:</b>
$$\dot{\vec L} = \vec M_\text{ext}\qquad(6.37),\qquad\vec M_\text{ext} = \vec 0\;\Rightarrow\;\vec L = \text{const}\qquad(6.38)$$
<b>Voraussetzungen:</b> $\vec L$ und $\vec M_\text{ext}$ bezüglich <b>desselben</b> Punktes $O$; $O$ muss entweder ein in einem <b>Inertialsystem ruhender Punkt</b> oder der <b>Schwerpunkt</b> sein.`,
    meta: "Skript: Abschnitt 6.4.5, Gl. (6.34)–(6.38), Abb. 6.4, S. 141–142",
    explanation: R`<b>Intuition:</b> Zwei Teilchen, die sich entlang ihrer Verbindungslinie anziehen oder abstossen, können sich gegenseitig nicht „verdrehen“: Kraft und Gegenkraft liegen auf derselben Geraden, ihre Hebelarme sind gleich, ihre Drehmomente entgegengesetzt. Deshalb kann ein System seinen Gesamtdrehimpuls nicht durch innere Kräfte ändern.<br><br>
<b>Beispiele:</b> Eine Eiskunstläuferin ändert ihre Winkelgeschwindigkeit durch Armbewegungen, aber nicht ihren Drehimpuls. Ein Hubschrauber braucht einen Heckrotor, weil der Motor sonst den Rumpf gegenläufig zum Hauptrotor drehen würde (Drehimpulserhaltung des Gesamtsystems).<br><br>
<b>Warum ist der Schwerpunkt erlaubt?</b> Auch wenn er beschleunigt, verschwindet das Drehmoment der Trägheitskraft $-m_i\vec A$ um den Schwerpunkt, aus demselben Grund wie das der Schwerkraft (6.17): $\sum m_i\vec r_i^{\,*}\times\vec A = \vec 0$.<br><br>
<b>Annahme:</b> „Starkes“ Newton III, d. h. die Kräfte wirken entlang der Verbindungslinie (Zentralkräfte). Das gilt für Gravitation und Elektrostatik.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec F_{ki} = -\vec F_{ik}$<em>Newton III.</em></li>
<li>$\vec M^* = \vec r_i^{\,*}\times\vec F_{ik} + \vec r_k^{\,*}\times(-\vec F_{ik}) = (\vec r_i^{\,*}-\vec r_k^{\,*})\times\vec F_{ik}$<em>Gemeinsames $\vec F_{ik}$ ausklammern (6.36).</em></li>
<li>$\vec F_{ik}\parallel(\vec r_i^{\,*}-\vec r_k^{\,*})\;\Rightarrow\;\vec M^* = \vec 0$<em>Die Kraft wirkt entlang der Verbindungslinie; das Kreuzprodukt paralleler Vektoren verschwindet.</em></li>
<li>$\dot{\vec L} = \sum_i\vec r_i\times\vec F_i = \sum_i\vec r_i\times\vec F_{\text{ext},i} + \underbrace{\sum_{\text{Paare}}\vec M_{ik}}_{=\vec 0}$<em>Drallsatz für jedes Teilchen summiert; innere Paare fallen weg.</em></li>
<li>$\dot{\vec L} = \vec M_\text{ext}$<em>Nur äussere Drehmomente ändern den Gesamtdrehimpuls (6.37, 6.41).</em></li>
</ol>`,
    example: R`<b>Drehstuhl mit Hanteln:</b> Eine Person ($I = 2\,\text{kg m}^2$ ohne Hanteln) hält zwei Hanteln (je $2\,\text{kg}$) in $0{,}8\,\text{m}$ Abstand von der Achse und dreht sich mit $1\,\text{U/s}$. $I_1 = 2+2\cdot2\cdot0{,}64 = 4{,}56\,\text{kg m}^2$. Zieht sie die Hanteln auf $0{,}2\,\text{m}$ heran: $I_2 = 2+2\cdot2\cdot0{,}04 = 2{,}16\,\text{kg m}^2$, also $\omega_2 = \omega_1I_1/I_2 = 2{,}1\,\text{U/s}$.`,
    counterexample: R`<b>Beliebiger beschleunigter Bezugspunkt:</b> Nimmt man als Bezugspunkt den Radnabenpunkt eines bremsenden Autos (nicht Schwerpunkt, nicht inertial), so erzeugen die Trägheitskräfte i. A. ein Drehmoment, und $\dot{\vec L} = \vec M_\text{ext}$ gilt dort nicht ohne Korrektur.`,
    pitfalls: R`<ul><li>$\vec L$ und $\vec M$ bezüglich verschiedener Punkte berechnen.</li>
<li>Einen beschleunigten Punkt, der nicht der Schwerpunkt ist, als Bezugspunkt wählen.</li>
<li>Innere Drehmomente (z. B. Muskelkraft) als Ursache für Änderungen von $\vec L$ angeben.</li></ul>`
  },

  // ========================================================================
  // 6.5 ERHALTUNGSSÄTZE FÜR N-TEILCHEN-SYSTEME
  // ========================================================================
  {
    id: "ph6_erhaltungssaetze",
    title: "Die vier Erhaltungssätze für N-Teilchen-Systeme",
    category: "6.5 Erhaltungssätze für N-Teilchen-Systeme",
    type: "gesetz",
    front: R`Formuliere für ein $N$-Teilchen-System den <b>Schwerpunktsatz</b>, den <b>Impulssatz</b> (auch bei veränderter Teilchenzahl), den <b>Drehimpulssatz</b> und den <b>mechanischen Energiesatz</b>. Welchen erkenntnistheoretischen Status haben sie?`,
    back: R`<b>Schwerpunktsatz:</b> Der Schwerpunkt bewegt sich mit konstantem Impuls, wenn die Summe der äusseren Kräfte verschwindet:
$$\frac{d\vec p_S}{dt} = \sum_i\vec F_{\text{ext},i}\qquad(6.39)$$
<b>Impulssatz:</b> Bei einer Wechselwirkung bleibt die Summe der Impulse konstant, auch wenn sich die Teilchenzahl ändert ($N_1$ vorher, $N_2$ nachher):
$$\sum_{i=1}^{N_1}\vec p_i = \sum_{i=1}^{N_2}\vec p_i\,'\qquad(6.40)$$
<b>Drehimpulssatz:</b> Innere Drehmomente heben sich auf; nur äussere ändern $\vec L$:
$$\frac{d\vec L}{dt} = \sum_i\vec r_i\times\vec F_{\text{ext},i} = \vec M_\text{ext}\qquad(6.41)$$
<b>Mechanischer Energiesatz</b> (äussere und innere Kräfte konservativ):
$$E_\text{tot} = \sum_i\tfrac12m_iv_i^2 + U_\text{int} + U_\text{ext} = \sum_i\tfrac12m_iv_i'^2 + U'_\text{int} + U'_\text{ext}\qquad(6.42)$$
Status: Erhaltungssätze sind <b>nicht beweisbar</b>, aber durch ein einziges Experiment widerlegbar. Das ist nie gelungen.`,
    meta: "Skript: Abschnitt 6.5, Gl. (6.39)–(6.42), S. 143–144",
    explanation: R`<b>Intuition:</b> Die Erhaltungssätze sind die stärksten Werkzeuge der Mechanik: Sie liefern Aussagen über Anfangs- und Endzustand, ohne dass man die (oft unbekannten) Kräfte während eines Vorgangs kennen muss. Typisch: Stösse, Explosionen, Zerfälle.<br><br>
<b>Teilchenzahl:</b> Beim Impulssatz dürfen Teilchen entstehen oder verschwinden (Zerfall, Fusion, Rakete), solange man <i>alle</i> beteiligten Teilchen mitzählt.<br><br>
<b>Innere Energie:</b> Im Energiesatz steht nun auch $U_\text{int}$, die Wechselwirkungsenergie der Teilchen untereinander (gespannte Feder zwischen zwei Wagen, chemische Bindung). Wird sie frei, kann kinetische Energie entstehen (Rückstossversuch, Explosion).<br><br>
<b>Symmetrien:</b> Impuls aus Homogenität des Raumes, Drehimpuls aus Isotropie, Energie aus Homogenität der Zeit.<br><br>
<b>Zusammenhang:</b> Die Teilchenstösse (6.8) sind die Paradeanwendung: Impuls- und Energiesatz zusammen legen die Kinematik fest.`,
    derivation: R`Wie man die Sätze kombiniert, am Beispiel des Rückstossversuchs (Kap. 3.1) mit gespannter Feder:
<ol class="fc-steps">
<li>$\vec p_A + \vec p_B = \vec 0$ (vorher und nachher)<em>Impulssatz (6.40): Vorher ruhen beide.</em></li>
<li>$U_\text{int} = \tfrac12kx^2 = \tfrac12m_Av_A^2 + \tfrac12m_Bv_B^2$<em>Energiesatz (6.42): Die Federenergie wird ganz in kinetische Energie umgesetzt.</em></li>
<li>$v_B = \dfrac{m_A}{m_B}v_A$<em>Aus Schritt 1 (Beträge).</em></li>
<li>$\tfrac12kx^2 = \tfrac12m_Av_A^2\left(1+\dfrac{m_A}{m_B}\right)$<em>Einsetzen in Schritt 2.</em></li>
<li>$v_A = x\sqrt{\dfrac{k\,m_B}{m_A(m_A+m_B)}}$<em>Auflösen: Beide Geschwindigkeiten sind durch die Erhaltungssätze bestimmt, ohne den Ablauf der Entspannung zu kennen.</em></li>
</ol>`,
    example: R`Rückstossversuch: $k = 400\,\text{N/m}$, $x = 5\,\text{cm}$ ($U_\text{int} = 0{,}5\,\text{J}$), $m_A = 1\,\text{kg}$, $m_B = 2\,\text{kg}$:
$v_A = 0{,}05\sqrt{\frac{400\cdot2}{1\cdot3}}\,\text{m/s} = 0{,}816\,\text{m/s}$, $v_B = 0{,}408\,\text{m/s}$.<br>
Kontrolle: $\tfrac12\cdot1\cdot0{,}667+\tfrac12\cdot2\cdot0{,}167 = 0{,}333+0{,}167 = 0{,}5\,\text{J}$ ✓.`,
    counterexample: R`<b>Energiesatz mit Reibung:</b> Gleiten die Wagen mit Reibung aus, bleibt der Impuls (System Wagen + Erde) erhalten, die mechanische Energie aber nicht. Der mechanische Energiesatz (6.42) setzt konservative Kräfte voraus.`,
    pitfalls: R`<ul><li>$U_\text{int}$ vergessen, wenn Federn, Bindungen oder Sprengstoff im Spiel sind.</li>
<li>Beim Impulssatz neu entstandene Teilchen (z. B. Gas der Rakete) nicht mitzählen.</li>
<li>Erhaltungssätze als bewiesene mathematische Sätze darstellen; sie sind experimentell gestützte Axiome.</li></ul>`
  },

  // ========================================================================
  // 6.6–6.7 2-TEILCHEN-SYSTEM, 3-TEILCHEN-SYSTEM
  // ========================================================================
  {
    id: "ph6_reduzierte_masse",
    title: "Zwei-Teilchen-System: Relativkoordinate und reduzierte Masse μ",
    category: "6.6 Spezialfall: 2-Teilchen-System",
    type: "herleitung",
    front: R`Drücke für zwei Teilchen die Orte, Geschwindigkeiten und Impulse im Schwerpunktsystem durch die <b>Relativkoordinate</b> $\vec r_{12} = \vec r_1-\vec r_2$ aus und definiere die <b>reduzierte Masse</b> $\mu$. Zeige $\vec p_1^{\,*} = \mu\vec v_{12} = -\vec p_2^{\,*}$.`,
    back: R`$$\vec r_S = \frac{m_1\vec r_1+m_2\vec r_2}{m_1+m_2},\qquad\vec r_1^{\,*} = \vec r_1-\vec r_S = \frac{m_2}{m_1+m_2}\underbrace{(\vec r_1-\vec r_2)}_{=:\vec r_{12}}\qquad(6.43\text{–}6.46)$$
$$\vec r_1^{\,*} = +\frac{m_2}{m_1+m_2}\vec r_{12},\qquad\vec r_2^{\,*} = -\frac{m_1}{m_1+m_2}\vec r_{12},\qquad m_1\vec r_1^{\,*}+m_2\vec r_2^{\,*} = \vec 0\qquad(6.47,\,6.48)$$
Ableiten mit $\vec v_{12} := \dot{\vec r}_{12}$: $\vec v_1^{\,*} = +\frac{m_2}{m_1+m_2}\vec v_{12}$, $\vec v_2^{\,*} = -\frac{m_1}{m_1+m_2}\vec v_{12}$ (6.49, 6.50).<br><br>
<b>Reduzierte Masse:</b>
$$\mu := \frac{m_1m_2}{m_1+m_2},\qquad\frac1\mu = \frac1{m_1}+\frac1{m_2}\qquad(6.52)$$
$$\vec p_1^{\,*} = +\mu\vec v_{12},\qquad\vec p_2^{\,*} = -\mu\vec v_{12},\qquad\vec p_1^{\,*}+\vec p_2^{\,*} = \vec 0\qquad(6.51\text{–}6.55)$$
(6.55) ist gerade die Definition des Schwerpunktsystems.`,
    meta: "Skript: Abschnitte 6.6.1–6.6.3, Gl. (6.43)–(6.55), S. 144–145",
    explanation: R`<b>Intuition:</b> Im Schwerpunktsystem liegen beide Teilchen immer auf entgegengesetzten Seiten des Schwerpunkts, auf einer Geraden durch ihn. Ihre Abstände verhalten sich umgekehrt wie die Massen ($r_1^*/r_2^* = m_2/m_1$): Die schwere Masse bleibt nahe beim Schwerpunkt, die leichte macht die grossen Bewegungen. Deshalb genügt eine einzige Vektorgrösse, $\vec r_{12}$, um beide zu beschreiben.<br><br>
<b>Reduzierte Masse:</b> $\mu$ ist immer kleiner als die kleinere der beiden Massen. Ist $m_2\gg m_1$, dann ist $\mu\approx m_1$: Das schwere Teilchen ruht praktisch, und man beschreibt nur das leichte. Bei gleichen Massen ist $\mu = m/2$.<br><br>
<b>Abhängigkeit:</b> $\frac1\mu = \frac1{m_1}+\frac1{m_2}$ ist wie die „Parallelschaltung“ von Massen: Die kleinere dominiert.<br><br>
<b>Zusammenhang:</b> Das ist die Grundlage für die Reduktion des Kepler-Problems (Kap. 7) und des Wasserstoffatoms auf ein Einteilchenproblem (6.6.5–6.6.6).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r_1^{\,*} = \vec r_1 - \dfrac{m_1\vec r_1+m_2\vec r_2}{m_1+m_2}$<em>Definition des Schwerpunkts einsetzen (6.45).</em></li>
<li>$= \dfrac{(m_1+m_2)\vec r_1 - m_1\vec r_1 - m_2\vec r_2}{m_1+m_2} = \dfrac{m_2(\vec r_1-\vec r_2)}{m_1+m_2}$<em>Gemeinsamer Nenner, $m_1\vec r_1$ hebt sich (6.46).</em></li>
<li>$\vec r_2^{\,*} = -\dfrac{m_1}{m_1+m_2}\vec r_{12}$<em>Analog mit vertauschten Rollen; Vorzeichen, weil $\vec r_2-\vec r_1 = -\vec r_{12}$ (6.47).</em></li>
<li>$\vec v_1^{\,*} = \dfrac{m_2}{m_1+m_2}\vec v_{12}$<em>Zeitableitung bei konstanten Massen (6.49).</em></li>
<li>$\vec p_1^{\,*} = m_1\vec v_1^{\,*} = \dfrac{m_1m_2}{m_1+m_2}\vec v_{12} = \mu\,\vec v_{12}$<em>Mit $m_1$ multiplizieren; die Kombination ist die reduzierte Masse (6.51–6.53).</em></li>
<li>$\vec p_2^{\,*} = -\mu\vec v_{12}\;\Rightarrow\;\vec p_1^{\,*}+\vec p_2^{\,*} = \vec 0$<em>Analog; Summe null (6.54, 6.55).</em></li>
</ol>`,
    example: R`<b>Erde–Mond:</b> $m_\text{Mo}\approx0{,}0123\,m_E$, also $\mu = \frac{m_Em_\text{Mo}}{m_E+m_\text{Mo}}\approx0{,}988\,m_\text{Mo}$. Die Erde bewegt sich um den gemeinsamen Schwerpunkt auf einem Kreis von $r_E = \frac{m_\text{Mo}}{m_E+m_\text{Mo}}R\approx0{,}012\cdot384\,400\,\text{km}\approx4700\,\text{km}$ (also noch im Erdinneren).<br><br>
<b>Gleiche Massen</b> (Doppelstern mit zwei gleichen Sternen): $\mu = m/2$, beide umkreisen den Mittelpunkt auf gleich grossen Bahnen.`,
    counterexample: R`<b>Drei Teilchen</b> (6.7): $m_i\ddot{\vec r}_i = \sum_{k\neq i}\vec F_{ik}+\vec F_{\text{ext},i}$ (6.69–6.71) bilden ein gekoppeltes System, das sich im Allgemeinen <i>nicht</i> auf ein Einteilchenproblem reduzieren lässt. Die Kräfte hängen von allen Relativabständen ab; meist gibt es nur numerische Lösungen (Dreikörperproblem). Die Reduktion mit $\mu$ ist eine Besonderheit von genau zwei Körpern.`,
    pitfalls: R`<ul><li>$\mu = m_1+m_2$ oder $\mu = \frac{m_1+m_2}{m_1m_2}$ schreiben.</li>
<li>Die Vorzeichen von $\vec r_1^{\,*}$ und $\vec r_2^{\,*}$ verwechseln.</li>
<li>Glauben, das schwere Teilchen ruhe exakt; es bewegt sich (wenig) um den Schwerpunkt.</li></ul>`
  },
  {
    id: "ph6_relativbewegung",
    title: "Bewegungsgleichung der Relativbewegung: μ v̇₁₂ = F₁₂",
    category: "6.6 Spezialfall: 2-Teilchen-System",
    type: "herleitung",
    front: R`Leite aus den Bewegungsgleichungen beider Teilchen die Gleichung $\mu\,\dot{\vec v}_{12} = \vec F_{12}$ her. Beschreibe den 4-Schritte-Lösungsweg für ein Zwei-Teilchen-System und gib $\vec L^*$ und $T^*$ an.`,
    back: R`$$m_1\frac{d\vec v_1}{dt} = \vec F_{12},\qquad m_2\frac{d\vec v_2}{dt} = \vec F_{21} = -\vec F_{12}\qquad(6.59,\,6.60)$$
Durch die Massen teilen und subtrahieren:
$$\frac{d}{dt}(\vec v_1-\vec v_2) = \left(\frac1{m_1}+\frac1{m_2}\right)\vec F_{12}\quad\Rightarrow\quad\mu\frac{d\vec v_{12}}{dt} = \vec F_{12}\qquad(6.61,\,6.62)$$
<b>Lösungsweg:</b>
<ol><li>Schwerpunkt aus den äusseren Kräften: $(m_1+m_2)\dot{\vec v}_S = \vec F_\text{ext}$ (6.63).</li>
<li>Reduziertes System: $\vec r_{12}(t)$, $\vec v_{12}(t)$ aus $\mu\dot{\vec v}_{12} = \vec F_{12}$.</li>
<li>Daraus $\vec r_i^{\,*}(t)$ und $\vec r_i(t)$ berechnen.</li>
<li>Eigendrehimpuls und innere kinetische Energie:</li></ol>
$$\vec L^* = \vec r_{12}\times\mu\vec v_{12},\qquad T^* = \tfrac12\mu v_{12}^2 = \frac{p^{*2}}{2\mu}\qquad(6.64,\,6.65)$$
Transformation Labor → Schwerpunktsystem: $\vec p_1^{\,*} = -\vec p_2^{\,*} = \frac{m_2\vec p_1-m_1\vec p_2}{m_1+m_2}$ (6.56–6.58).`,
    meta: "Skript: Abschnitte 6.6.4–6.6.5, Gl. (6.56)–(6.65), S. 145–146",
    explanation: R`<b>Intuition:</b> Aus zwei gekoppelten Gleichungen werden zwei <i>entkoppelte</i>: eine für den Schwerpunkt (freier Massenpunkt mit $M = m_1+m_2$) und eine für die Relativbewegung (ein fiktives Teilchen der Masse $\mu$ im Kraftfeld $\vec F_{12}(\vec r_{12})$). Das Zweikörperproblem wird zu zwei Einkörperproblemen.<br><br>
<b>Warum $\mu$ statt $m_1$?</b> Auch das „Zentrum“ ($m_2$) wird beschleunigt. Die Relativbeschleunigung ist deshalb grösser, als wenn $m_2$ festgehalten würde, so als hätte das Teilchen die kleinere Masse $\mu$.<br><br>
<b>Energie und Drehimpuls:</b> $T^*$ und $\vec L^*$ haben genau die Form eines Einteilchensystems mit Masse $\mu$. Alle Erhaltungssätze des Einteilchenproblems (Energie, Drehimpuls bei Zentralkraft) gelten für die Relativbewegung.<br><br>
<b>Zusammenhang:</b> Kap. 7 löst damit das Kepler-Problem ($\vec F_{12} = -G_Nm_1m_2\hat r_{12}/r_{12}^2$); in der Atomphysik verschiebt $\mu$ statt $m_e$ die Spektrallinien messbar (Isotopieeffekt Wasserstoff/Deuterium).`,
    derivation: R`<ol class="fc-steps">
<li>$\dot{\vec v}_1 = \dfrac{\vec F_{12}}{m_1},\quad\dot{\vec v}_2 = -\dfrac{\vec F_{12}}{m_2}$<em>Newton II für beide; Newton III für die Gegenkraft.</em></li>
<li>$\dot{\vec v}_1-\dot{\vec v}_2 = \left(\dfrac1{m_1}+\dfrac1{m_2}\right)\vec F_{12}$<em>Subtrahieren (6.61).</em></li>
<li>$\dfrac1{m_1}+\dfrac1{m_2} = \dfrac1\mu$<em>Definition der reduzierten Masse (6.52).</em></li>
<li>$\mu\dot{\vec v}_{12} = \vec F_{12}$<em>Mit $\mu$ multiplizieren (6.62).</em></li>
<li>$T^* = \dfrac{p_1^{*2}}{2m_1}+\dfrac{p_2^{*2}}{2m_2} = \dfrac{\mu^2v_{12}^2}{2}\left(\dfrac1{m_1}+\dfrac1{m_2}\right) = \tfrac12\mu v_{12}^2$<em>Mit $p_1^* = p_2^* = \mu v_{12}$ (6.65).</em></li>
</ol>`,
    example: R`<b>Zwei Wagen an einer Feder</b> ($m_1 = 1\,\text{kg}$, $m_2 = 2\,\text{kg}$, $k = 300\,\text{N/m}$): Die Relativkoordinate schwingt mit $\omega = \sqrt{k/\mu}$, $\mu = \frac23\,\text{kg}$, also $\omega = 21{,}2\,\text{s}^{-1}$, schneller als $\sqrt{k/m_1} = 17{,}3\,\text{s}^{-1}$ (als ob $m_2$ an der Wand befestigt wäre).<br><br>
<b>Transformation:</b> $\vec p_1 = (6,0)$, $\vec p_2 = (0,0)\,\text{kg m/s}$: $\vec p_1^{\,*} = \frac{2\cdot(6,0)-1\cdot0}{3} = (4,0)$, $\vec p_2^{\,*} = (-4,0)$.`,
    counterexample: R`<b>Äussere Kräfte, die von der Relativlage abhängen</b> (z. B. ein Doppelstern im inhomogenen Feld einer Galaxie): Dann koppeln Schwerpunkt- und Relativbewegung wieder. Die saubere Trennung setzt voraus, dass $\vec F_\text{ext}$ auf beide Teilchen so wirkt, dass $\vec F_\text{ext,1}/m_1 = \vec F_\text{ext,2}/m_2$ (z. B. homogene Schwerkraft).`,
    pitfalls: R`<ul><li>$m_1$ statt $\mu$ in die Relativbewegung einsetzen.</li>
<li>Die Transformation ins Schwerpunktsystem mit Impulsen und Geschwindigkeiten verwechseln (für $\vec v_S$ braucht man Geschwindigkeiten, für Erhaltungssätze im Schwerpunktsystem Impulse).</li>
<li>Vergessen, am Ende die Schwerpunktsbewegung wieder hinzuzufügen.</li></ul>`
  },
  {
    id: "ph6_beispiele_2teilchen",
    title: "Beispiele: Erde–Mond-Schwerpunkt und das Wasserstoffatom",
    category: "6.6 Spezialfall: 2-Teilchen-System",
    type: "beispiel",
    front: R`Wo liegt der <b>Schwerpunkt des Systems Erde–Mond</b>, und auf welchen Bahnen bewegen sich die beiden Körper? Wie gross ist die reduzierte Masse im <b>Wasserstoffatom</b>, und wie teilt sich seine kinetische Energie auf?`,
    back: R`<b>Erde–Mond:</b> Die Relativbewegung ist ein Einteilchenproblem mit $\mu = \frac{m_Em_\text{Mo}}{m_E+m_\text{Mo}}\approx0{,}99\,m_\text{Mo}$ im Zentralfeld der Gravitation. Wegen $m_\text{Mo}\approx0{,}01\,m_E$ liegt der Schwerpunkt etwa $4600\,\text{km}$ vom Erdmittelpunkt entfernt (Skript: 4552 km), also noch im Erdinneren. Beide laufen auf fast kreisförmigen Ellipsen um $S$ mit
$$r_E = \frac{m_\text{Mo}}{m_E+m_\text{Mo}}R\approx0{,}01\,R,\qquad r_\text{Mo} = \frac{m_E}{m_E+m_\text{Mo}}R\approx0{,}99\,R\qquad(6.66,\,6.67)$$
($R$ = Abstand Erde–Mond).<br><br>
<b>Wasserstoffatom:</b> $m_p = 1836\,m_e$, also $\mu = 0{,}99946\,m_e$. $S$ liegt $r_{pe}/1837$ vom Protonmittelpunkt.
$$T = \tfrac12(m_p+m_e)v_S^2 + \tfrac12\mu v_{pe}^2\qquad(6.68)$$
Bei thermischen Geschwindigkeiten ist die Translationsenergie ($\approx0{,}03\,\text{eV}$) sehr klein gegenüber der inneren kinetischen Energie ($\approx10\,\text{eV}$).`,
    meta: "Skript: Abschnitt 6.6.6, Gl. (6.66)–(6.68), Abb. 6.5, S. 147–148",
    explanation: R`<b>Intuition:</b> Auch die Erde „eiert“ jeden Monat einmal um den gemeinsamen Schwerpunkt mit dem Mond, auf einem Kreis von etwa 4600–4700 km Radius. Dieser Punkt (das Baryzentrum) läuft auf der eigentlichen Ellipse um die Sonne.<br><br>
<b>Proportionalität:</b> Die Bahnradien um den Schwerpunkt verhalten sich umgekehrt wie die Massen: $r_E/r_\text{Mo} = m_\text{Mo}/m_E$. Ebenso die Geschwindigkeiten (gleiche Umlaufzeit).<br><br>
<b>Wasserstoff:</b> Weil das Proton 1836-mal schwerer ist, ist $\mu$ nur um 0,054 % kleiner als $m_e$. Das genügt, um die Spektrallinien von Wasserstoff und Deuterium (anderes $\mu$) messbar zu unterscheiden. So wurde Deuterium entdeckt.<br><br>
<b>Energieskalen:</b> Die Bewegung des Atoms als Ganzes (thermisch, $\sim\tfrac32k_BT\approx0{,}04\,\text{eV}$ bei Raumtemperatur) und die innere Bewegung (Elektron, eV-Bereich) unterscheiden sich um Grössenordnungen. Daher ändern Stösse bei Raumtemperatur den inneren Zustand der Atome kaum.`,
    derivation: R`Lage des Erde-Mond-Schwerpunkts:
<ol class="fc-steps">
<li>$r_E = \dfrac{m_\text{Mo}}{m_E+m_\text{Mo}}R$<em>Betrag von $\vec r_1^{\,*}$ aus (6.47) mit $m_1 = m_E$, $m_2 = m_\text{Mo}$ (6.66).</em></li>
<li>$\dfrac{m_\text{Mo}}{m_E} = \dfrac{7{,}35\cdot10^{22}}{5{,}97\cdot10^{24}} = 0{,}0123$<em>Massenverhältnis.</em></li>
<li>$r_E = \dfrac{0{,}0123}{1{,}0123}\cdot384\,400\,\text{km}\approx4670\,\text{km}$<em>Mit dem mittleren Abstand $R$; je nach verwendeten Werten 4550–4700 km.</em></li>
<li>$r_E\lt R_E = 6371\,\text{km}$<em>Der Schwerpunkt liegt im Erdinneren, etwa 1700 km unter der Oberfläche.</em></li>
<li>$\mu_H = \dfrac{m_e\cdot1836m_e}{1837m_e} = \dfrac{1836}{1837}m_e = 0{,}99946\,m_e$<em>Reduzierte Masse des Wasserstoffatoms.</em></li>
</ol>`,
    example: R`<b>Geschwindigkeit der Erde um den Erde-Mond-Schwerpunkt:</b> $v_E = \frac{2\pi r_E}{T} = \frac{2\pi\cdot4{,}67\cdot10^{6}\,\text{m}}{27{,}3\cdot86\,400\,\text{s}}\approx12\,\text{m/s}$, gegenüber etwa $1{,}0\,\text{km/s}$ des Mondes.<br>
<b>Doppelsternsystem</b> mit $m_1 = 2m_2$: Der schwerere Stern läuft auf dem halb so grossen Kreis mit halber Geschwindigkeit.`,
    counterexample: R`<b>Sonne–Jupiter:</b> Jupiter hat etwa $1/1047$ der Sonnenmasse, ist aber $5{,}2\,\text{AE}$ entfernt. Der Schwerpunkt liegt $\approx\frac{5{,}2\cdot1{,}5\cdot10^{8}\,\text{km}}{1048}\approx7{,}4\cdot10^{5}\,\text{km}$ vom Sonnenzentrum, also knapp <i>ausserhalb</i> der Sonne ($R_\odot = 6{,}96\cdot10^{5}\,\text{km}$). „Der schwere Körper ruht“ ist hier also keine gute Vorstellung; Exoplaneten werden genau über dieses Wackeln des Sterns entdeckt.`,
    pitfalls: R`<ul><li>Annehmen, die Erde ruhe und nur der Mond kreise.</li>
<li>Den Schwerpunkt auf der Erdoberfläche oder ausserhalb vermuten.</li>
<li>$\mu = m_e$ exakt setzen, wenn es auf Präzision ankommt (Spektroskopie).</li></ul>`
  },

  // ========================================================================
  // 6.8 TEILCHENSTÖSSE
  // ========================================================================
  {
    id: "ph6_zentraler_stoss",
    title: "Zentraler elastischer Stoss auf ein ruhendes Teilchen: drei Fälle",
    category: "6.8 Teilchenstösse",
    type: "herleitung",
    front: R`Teilchen 1 ($m_1$, Geschwindigkeit $v_1$) stösst zentral und elastisch auf das ruhende Teilchen 2 ($m_2$). Leite $u_1$ und $u_2$ durch Elimination her. Was bedeutet die zweite (triviale) Lösung, und welche drei Fälle unterscheidet man?`,
    back: R`<b>Elastisch:</b> Impuls und kinetische Energie werden ausgetauscht, die innere Energie ändert sich nicht (keine Verformung, keine Erwärmung). 1D mit vorzeichenbehafteten Komponenten $v_i$, $u_i$:
$$m_1v_1 = m_1u_1 + m_2u_2,\qquad\tfrac12m_1v_1^2 = \tfrac12m_1u_1^2 + \tfrac12m_2u_2^2\qquad(6.73,\,6.74)$$
Elimination von $u_1$ ergibt
$$u_2^2(m_1+m_2) - 2m_1v_1u_2 = 0\qquad(6.77)$$
Zwei Lösungen:
$$u_2 = \frac{2m_1}{m_1+m_2}v_1,\quad u_1 = \frac{m_1-m_2}{m_1+m_2}v_1\qquad(6.78)$$
$$u_2 = 0,\quad u_1 = v_1\quad(\text{Teilchen 1 fliegt ohne Wechselwirkung hindurch})\qquad(6.79)$$
<b>Fälle</b> (6.80):
<ul><li>$m_1>m_2$: $0\lt u_1\lt v_1$, $u_2>v_1$</li>
<li>$m_1 = m_2$: $u_1 = 0$, $u_2 = v_1$ (Geschwindigkeitsaustausch)</li>
<li>$m_1\lt m_2$: $u_1\lt0$ (Rückprall), $0\lt u_2\lt v_1$</li></ul>`,
    meta: "Skript: Abschnitte 6.8.1–6.8.2, Gl. (6.72)–(6.80), Abb. 6.6, S. 148–150",
    explanation: R`<b>Intuition:</b> Wie beim Billard: Eine Kugel, die eine gleich schwere ruhende zentral trifft, bleibt liegen und gibt ihre ganze Bewegung ab. Ein leichter Ball prallt von einem schweren zurück, ein schwerer schiebt einen leichten vor sich her (bis zu doppelt so schnell).<br><br>
<b>Energieübertrag:</b> Der Anteil der Energie, den Teilchen 2 erhält, ist
$\frac{T_2'}{T_1} = \frac{4m_1m_2}{(m_1+m_2)^2}$, maximal (= 1) bei gleichen Massen. Das ist der Grund, warum man in Kernreaktoren Neutronen mit leichten Kernen (Wasserstoff in Wasser) abbremst: Bei fast gleicher Masse verliert das Neutron pro Stoss am meisten Energie.<br><br>
<b>Die triviale Lösung</b> ist mathematisch ebenfalls mit beiden Erhaltungssätzen verträglich: „Es passiert nichts.“ Die Erhaltungssätze sagen also, <i>was</i> möglich ist, nicht <i>ob</i> ein Stoss stattfindet.<br><br>
<b>Zusammenhang:</b> Im Schwerpunktsystem kehren sich beim elastischen Zentralstoss einfach beide Geschwindigkeiten um (6.8.4); die drei Fälle folgen aus der Rücktransformation.`,
    derivation: R`<ol class="fc-steps">
<li>$m_1u_1 = m_1v_1 - m_2u_2$<em>Impulssatz nach $m_1u_1$ aufgelöst (6.75).</em></li>
<li>$m_1m_2u_2^2 = m_1^2v_1^2 - m_1^2u_1^2$<em>Energiesatz mit $2m_1$ multipliziert und umgestellt.</em></li>
<li>$m_1m_2u_2^2 = m_1^2v_1^2 - (m_1v_1-m_2u_2)^2$<em>$m_1u_1$ aus Schritt 1 einsetzen (6.76).</em></li>
<li>$m_1m_2u_2^2 = 2m_1m_2v_1u_2 - m_2^2u_2^2$<em>Quadrat ausmultiplizieren; $m_1^2v_1^2$ hebt sich.</em></li>
<li>$u_2\left[u_2(m_1+m_2) - 2m_1v_1\right] = 0$<em>Durch $m_2$ teilen und $u_2$ ausklammern (6.77).</em></li>
<li>$u_2 = \dfrac{2m_1v_1}{m_1+m_2}$, $u_1 = v_1 - \dfrac{m_2}{m_1}u_2 = \dfrac{m_1-m_2}{m_1+m_2}v_1$<em>Nichttriviale Lösung und Rückeinsetzen (6.78).</em></li>
</ol>`,
    example: R`<b>Neutron auf Proton</b> (Massen ≈ gleich): $u_1\approx0$; das Neutron gibt bei einem zentralen Stoss praktisch seine ganze Energie ab.<br>
<b>Neutron auf Kohlenstoff</b> ($m_2 = 12m_1$): $u_1 = -\frac{11}{13}v_1$, Energieübertrag $\frac{4\cdot12}{169} = 28\,\%$.<br>
<b>Tennisball auf Wand</b> ($m_2\to\infty$): $u_1 = -v_1$, $u_2 = 0$.`,
    counterexample: R`<b>Unelastisch:</b> Zwei Knetkugeln gleicher Masse kleben zusammen: $u = v_1/2$ für beide; die Hälfte der kinetischen Energie geht in Verformung. Die Formeln (6.78) gelten dann nicht; der Energiesatz für die kinetische Energie ist verletzt (Q-Wert $\lt0$, 6.8.3).`,
    pitfalls: R`<ul><li>$u_i$ als Beträge statt als vorzeichenbehaftete Komponenten behandeln (das Skript betont: hier können sie negativ werden).</li>
<li>Die triviale Lösung als physikalisches Ergebnis eines Stosses ausgeben.</li>
<li>Die Formeln für ein bewegtes Teilchen 2 unverändert verwenden; dann gelten die allgemeineren Formeln (Kap. 3.7.2).</li></ul>`
  },
  {
    id: "ph6_streuung_q_wert",
    title: "Allgemeine Streuung: Kinematik vs. Dynamik, Wahrscheinlichkeitsdichte, Q-Wert",
    category: "6.8 Teilchenstösse",
    type: "konzept",
    front: R`Was unterscheidet den <b>kinematischen</b> vom <b>dynamischen</b> Teil eines Streuprozesses? Was ist eine Wahrscheinlichkeitsdichte $d\Gamma/dp$? Wie ist der <b>Q-Wert</b> eines Stosses definiert, und welche drei Stossarten unterscheidet man damit?`,
    back: R`Im allgemeinen Fall sind beide Teilchen bewegt und der Stoss nicht zentral (transversaler Impulsübertrag, Abb. 6.7).
<ul><li><b>Kinematik:</b> Abhängigkeit $p_i(\vartheta)$ bzw. $E_i(\vartheta)$ vom Streuwinkel, allein aus den Erhaltungssätzen. Dient zur Planung (Winkelbereich, Detektoren); fragt nicht nach den Ursachen.</li>
<li><b>Dynamik:</b> Häufigkeitsverteilungen $dN/dp_i$, $dN/dE_i$: Wie viele Teilchen landen wo? Sie hängen von der Wechselwirkung ab; ihre Analyse gibt Auskunft über die Kraft (z. B. Rutherford: Atomkern).</li></ul>
<b>Normierte Wahrscheinlichkeitsdichte:</b>
$$\int\frac{d\Gamma}{dp}\,dp = 1\qquad(6.81),\qquad\left[\frac{d\Gamma}{dE}\right] = \frac1{\text{J}}\qquad(6.82)$$
Erst das Integral ergibt eine (dimensionslose) Wahrscheinlichkeit.<br><br>
<b>Prozess</b> $1+2\to3+4\,(+5+\dots)$ (6.83) im Schwerpunktsystem: $\vec p_1^{\,*}+\vec p_2^{\,*} = \vec p_3^{\,*}+\vec p_4^{\,*}$ (6.84) und
$$T_1^*+T_2^* = T_3^*+T_4^* - Q\qquad(6.86,\,6.87)$$
<ul><li>$Q = 0$: elastisch</li>
<li>$Q\lt0$: unelastisch (endogen), kinetische Energie wird zu innerer Energie</li>
<li>$Q>0$: superelastisch (exogen), innere Energie wird frei</li></ul>`,
    meta: "Skript: Abschnitte 6.8.3.1–6.8.3.2, Gl. (6.81)–(6.87), Abb. 6.7, S. 150–153",
    explanation: R`<b>Intuition:</b> Die Erhaltungssätze sagen, welche Endzustände <i>erlaubt</i> sind (Kinematik). Wie <i>häufig</i> jeder erlaubte Endzustand vorkommt, entscheidet die Wechselwirkung (Dynamik). Das ist das Grundprinzip aller Streuexperimente: Aus gemessenen Verteilungen schliesst man auf die Kraft.<br><br>
<b>Historisches Beispiel:</b> Rutherford beschoss Goldfolie mit α-Teilchen. Kinematisch wären auch Rückstreuungen bei einer gleichmässig verteilten Ladung erlaubt gewesen, sie sollten aber extrem selten sein. Dass sie häufig auftraten, zeigte die Dynamik: Die positive Ladung ist in einem winzigen Kern konzentriert.<br><br>
<b>Q-Wert:</b> Er misst, wie viel kinetische Energie in innere umgewandelt wird oder umgekehrt. Inelastische Stösse regen Atome oder Kerne an (Franck-Hertz-Versuch), superelastische geben gespeicherte Energie ab (Kernreaktionen, chemische Explosionen).<br><br>
<b>Dichten:</b> Eine Wahrscheinlichkeitsdichte hat die inverse Einheit ihrer Variablen. $d\Gamma/dE = 10^{19}\,\text{J}^{-1}$ ist keine „Wahrscheinlichkeit von $10^{19}$“, sondern eine Dichte.`,
    derivation: R`Zählen der Freiheitsgrade im Endzustand ($1+2\to3+4$):
<ol class="fc-steps">
<li>Unbekannte: $\vec p_3^{\,*}$, $\vec p_4^{\,*}$, also 6 Komponenten<em>Nach dem Stoss sind beide Impulse unbekannt.</em></li>
<li>Gleichungen: Impulserhaltung (3) und Energieerhaltung (1), also 4<em>Bei bekanntem Q-Wert (6.84, 6.86).</em></li>
<li>Freiheitsgrade: $6 - 4 = 2$<em>Die Kinematik lässt zwei Grössen frei, z. B. die Winkel $\vartheta^*$ und $\varphi^*$.</em></li>
<li>Dynamik bestimmt $\dfrac{d\Gamma}{d\Omega^*}(\vartheta^*,\varphi^*)$<em>Die Wechselwirkung legt fest, wie die Ereignisse über die erlaubten Winkel verteilt sind.</em></li>
<li>Ohne Spin: Rotationssymmetrie um die Stossachse, also nur $\vartheta^*$<em>Dann ist $\varphi^*$ gleichverteilt, und man kann sich auf eine Ebene beschränken (6.108).</em></li>
</ol>`,
    example: R`<b>Q-Werte:</b> Billardkugeln: $Q\approx0$ (fast elastisch). Auto-Crash: $Q\ll0$ (Verformung). Kernfusion $\text{D}+\text{T}\to{}^4\text{He}+n$: $Q = +17{,}6\,\text{MeV}$ (superelastisch: Massendefekt wird zu kinetischer Energie).<br><br>
<b>Dichte:</b> Ist $d\Gamma/dE = \frac1{E_0}$ im Bereich $0\le E\le E_0$ (gleichverteilt), so ist die Wahrscheinlichkeit für $E\in[0,E_0/4]$ gleich $\frac14$.`,
    counterexample: R`<b>„Kinematisch erlaubt“ heisst nicht „beobachtet“:</b> Manche Energiebereiche sind durch die Erhaltungssätze erlaubt, kommen aber kaum vor, weil die Wechselwirkung sie unterdrückt (6.8.3.1). Umgekehrt kann man aus einer gemessenen Verteilung nicht ohne Theorie auf die Kraft schliessen.`,
    pitfalls: R`<ul><li>Wahrscheinlichkeit und Wahrscheinlichkeitsdichte verwechseln.</li>
<li>Das Vorzeichen des Q-Werts verdrehen (Skript: $T_\text{vorher} = T_\text{nachher}-Q$, also $Q\lt0$ bei Energieverlust).</li>
<li>Annehmen, Massen änderten sich bei normalen Stössen; erst bei Energien vergleichbar mit $mc^2$.</li></ul>`
  },
  {
    id: "ph6_stoss_schwerpunktsystem",
    title: "Elastischer Stoss im Schwerpunktsystem: Impulsbeträge bleiben gleich",
    category: "6.8 Teilchenstösse",
    type: "herleitung",
    front: R`Ein Teilchen $m_1$ (Impuls $\vec p_1$) stösst elastisch auf ein ruhendes $m_2$. Berechne $\vec v_S$ und $p^*$, und zeige, dass sich im Schwerpunktsystem nur die <b>Richtung</b>, nicht der <b>Betrag</b> der Impulse ändert. Welche Parameter bleiben frei?`,
    back: R`Das ganze System als ein Teilchen mit $m = m_1+m_2$, $\vec p = \vec p_1$ (6.91, 6.92):
$$\vec v_S = \frac{\vec p_1+\vec p_2}{m_1+m_2} = \frac{m_1}{m_1+m_2}\vec v_1\qquad(6.93,\,6.94)$$
Vor dem Stoss im Schwerpunktsystem:
$$\vec v_1^{\,*} = \frac{m_2}{m_1+m_2}\vec v_1,\quad\vec v_2^{\,*} = -\vec v_S,\quad|\vec p_1^{\,*}| = |\vec p_2^{\,*}| = p^* = \frac{m_2}{m_1+m_2}p_1\qquad(6.95\text{–}6.99)$$
Nach dem Stoss $\vec p_3^{\,*}+\vec p_4^{\,*} = \vec 0$ (6.100). Energieerhaltung:
$$T_i^* = \frac{m_1+m_2}{2m_1m_2}p_1^{*2} = T_f^* = \frac{m_1+m_2}{2m_1m_2}p_3^{*2}\;\Rightarrow\;|\vec p_3^{\,*}| = |\vec p_1^{\,*}| = p^*\qquad(6.102\text{–}6.106)$$
Beim elastischen Stoss ändern sich im Schwerpunktsystem weder die Impulsbeträge noch die kinetischen Energien. Frei bleiben $2$ Parameter: $\vartheta^*$, $\varphi^*$:
$$\vec p_3^{\,*} = p^*(\sin\vartheta^*\cos\varphi^*,\ \sin\vartheta^*\sin\varphi^*,\ \cos\vartheta^*),\qquad\vec p_4^{\,*} = -\vec p_3^{\,*}\qquad(6.107)$$`,
    meta: "Skript: Abschnitte 6.8.4.1–6.8.4.2, Gl. (6.88)–(6.108), Abb. 6.8, S. 153–156",
    explanation: R`<b>Intuition:</b> Im Schwerpunktsystem kommen die beiden Teilchen mit entgegengesetzt gleichen Impulsen aufeinander zu und fliegen danach mit entgegengesetzt gleichen Impulsen wieder auseinander. Beim elastischen Stoss ist sogar der Betrag derselbe; der Stoss <b>dreht</b> nur das Impulspaar um den Winkel $\vartheta^*$. Einfacher geht es nicht.<br><br>
<b>Rezept für jeden elastischen Stoss:</b> (1) Ins Schwerpunktsystem transformieren (mit $\vec v_S$). (2) Impulse drehen. (3) Zurücktransformieren ($\vec v = \vec v^{\,*}+\vec v_S$). Das Skript betont: Für die Transformation braucht man Geschwindigkeiten, für die Erhaltungssätze im Schwerpunktsystem Impulse.<br><br>
<b>Impulsraum:</b> Im Raum der Impulse $(p_x,p_y,p_z)$ liegen alle möglichen $\vec p_3^{\,*}$ auf einer Kugel vom Radius $p^*$. Das legt Kugelkoordinaten nahe.<br><br>
<b>Zusammenhang:</b> Der zentrale Stoss (6.8.2) ist der Spezialfall $\vartheta^* = \pi$ (volle Umkehr); $\vartheta^* = 0$ entspricht der trivialen Lösung „kein Stoss“.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v_S = \dfrac{m_1\vec v_1 + m_2\cdot\vec 0}{m_1+m_2} = \dfrac{m_1}{m_1+m_2}\vec v_1$<em>Schwerpunktsgeschwindigkeit (6.94).</em></li>
<li>$\vec v_1^{\,*} = \vec v_1-\vec v_S = \dfrac{m_2}{m_1+m_2}\vec v_1$, also $p^* = m_1v_1^* = \dfrac{m_2}{m_1+m_2}p_1$<em>Relativgeschwindigkeit und Impuls im Schwerpunktsystem (6.95, 6.99).</em></li>
<li>$T^* = \dfrac{p^{*2}}{2m_1}+\dfrac{p^{*2}}{2m_2} = \dfrac{m_1+m_2}{2m_1m_2}p^{*2}$<em>Beide Teilchen haben im Schwerpunktsystem denselben Impulsbetrag (6.102).</em></li>
<li>Nachher: $|\vec p_3^{\,*}| = |\vec p_4^{\,*}|$, $T_f^* = \dfrac{m_1+m_2}{2m_1m_2}p_3^{*2}$<em>Impulserhaltung im Schwerpunktsystem; die Massen sind unverändert (6.100–6.103).</em></li>
<li>$T_i^* = T_f^*\Rightarrow p_3^* = p^*$<em>Elastisch: Gleiche Energie heisst gleicher Impulsbetrag (6.104–6.106).</em></li>
<li>6 Unbekannte − 4 Gleichungen = 2 freie Winkel<em>Polar- und Azimutwinkel; ohne Spin rotationssymmetrisch, dann nur $\vartheta^*$ (6.107, 6.108).</em></li>
</ol>`,
    example: R`$m_1 = 2\,\text{kg}$ mit $v_1 = 3\,\text{m/s}$ auf $m_2 = 1\,\text{kg}$ (ruhend): $v_S = 2\,\text{m/s}$, $v_1^* = 1\,\text{m/s}$, $v_2^* = -2\,\text{m/s}$, $p^* = 2\,\text{kg m/s}$.<br>
Streuung um $\vartheta^* = 90^\circ$: $\vec v_3^{\,*} = (1,0)\,\text{m/s}$ (senkrecht), $\vec v_4^{\,*} = (-2,0)$; im Labor: $\vec v_3 = (1;\,2)$, $\vec v_4 = (-2;\,2)\,\text{m/s}$ (z-Achse als zweite Komponente).<br>
Kontrolle Energie: $\tfrac12\cdot2\cdot5+\tfrac12\cdot1\cdot8 = 9\,\text{J} = \tfrac12\cdot2\cdot9$ ✓.`,
    counterexample: R`<b>Unelastischer Stoss</b> ($Q\lt0$): Im Schwerpunktsystem bleiben die Impulse entgegengesetzt gleich, aber ihr Betrag wird kleiner ($p_3^*\lt p^*$). Beim vollständig inelastischen Stoss ist $p_3^* = 0$: Beide ruhen im Schwerpunktsystem und fliegen im Labor gemeinsam mit $\vec v_S$.`,
    pitfalls: R`<ul><li>Für die Transformation Impulse statt Geschwindigkeiten verwenden.</li>
<li>$\vec p_4^{\,*}$ mit demselben Vorzeichen wie $\vec p_3^{\,*}$ ansetzen.</li>
<li>$p^* = p_1$ setzen (es ist $\frac{m_2}{m_1+m_2}p_1$).</li></ul>`
  },
  {
    id: "ph6_stoss_labor_energie",
    title: "Elastische Streuung im Laborsystem: Impulse und Energien als Funktion von ϑ*",
    category: "6.8 Teilchenstösse",
    type: "herleitung",
    front: R`Transformiere die Endimpulse des elastischen Stosses (ruhendes Ziel) zurück ins <b>Laborsystem</b>, mit $\xi = m_1/m_2$. Leite $T_3(\vartheta^*)$ und $T_4(\vartheta^*)$ her. Wie viel Energie kann maximal übertragen werden?`,
    back: R`Mit $\vec v_3 = \vec v_3^{\,*}+\vec v_S$, $\vec v_4 = \vec v_4^{\,*}+\vec v_S$ (6.109, 6.110), Streuung in der $xz$-Ebene, $\vec p_1\parallel\vec e_z$:
$$\vec p_3 = \frac{p_1}{1+\xi}\begin{pmatrix}\sin\vartheta^*\\0\\\xi+\cos\vartheta^*\end{pmatrix},\qquad\vec p_4 = \frac{p_1}{1+\xi}\begin{pmatrix}-\sin\vartheta^*\\0\\1-\cos\vartheta^*\end{pmatrix}\qquad(6.111\text{–}6.117)$$
Energien im Labor:
$$T_3(\vartheta^*) = T_1\frac{1+2\xi\cos\vartheta^*+\xi^2}{(1+\xi)^2},\qquad T_4(\vartheta^*) = T_1\frac{2\xi(1-\cos\vartheta^*)}{(1+\xi)^2}\qquad(6.118\text{–}6.122)$$
Maximaler Übertrag bei Rückwärtsstreuung im Schwerpunktsystem ($\vartheta^* = \pi$):
$$\frac{T_{4,\max}}{T_1} = \frac{4\xi}{(1+\xi)^2}$$
gleich 1 nur für $\xi = 1$ (gleiche Massen).`,
    meta: "Skript: Abschnitte 6.8.4.3–6.8.4.4, Gl. (6.109)–(6.122), Abb. 6.9, S. 156–158",
    explanation: R`<b>Intuition:</b> Wie viel Energie das ruhende Teilchen bekommt, hängt davon ab, wie „hart“ es getroffen wird. Streifschüsse ($\vartheta^*\approx0$) übertragen fast nichts, Frontalstösse ($\vartheta^* = \pi$) am meisten. Die Masse bestimmt, wie viel überhaupt möglich ist.<br><br>
<b>Abhängigkeit vom Massenverhältnis:</b> $\frac{4\xi}{(1+\xi)^2}$ ist symmetrisch unter $\xi\to1/\xi$ und maximal bei $\xi = 1$. Ein Elektron (leicht) gibt an einen Atomkern (schwer) fast keine Energie ab ($\xi\approx10^{-4}$, Übertrag $\lesssim4\cdot10^{-4}$). Deshalb heizen Elektronen in Gasentladungen die Ionen kaum auf.<br><br>
<b>Energiesumme:</b> $T_3+T_4 = T_1$ für jeden Winkel, wie es beim elastischen Stoss sein muss.<br><br>
<b>Zusammenhang:</b> Der Ausdruck für $T_4$ ist die Grundlage der Neutronenmoderation und der Rückstossspektroskopie (Rutherford-Rückstreuung zur Materialanalyse).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec p_3 = m_1(\vec v_3^{\,*}+\vec v_S) = \vec p_3^{\,*}+m_1\vec v_S$<em>Zurücktransformieren (6.111).</em></li>
<li>$\vec p_3^{\,*} = \dfrac{m_2p_1}{m_1+m_2}(\sin\vartheta^*,0,\cos\vartheta^*)$, $m_1\vec v_S = \dfrac{m_1p_1}{m_1+m_2}(0,0,1)$<em>Mit $p^*$ aus (6.106) und $\vec v_S$ aus (6.94) (6.112).</em></li>
<li>$\vec p_3 = \dfrac{p_1}{1+\xi}(\sin\vartheta^*,\,0,\,\xi+\cos\vartheta^*)$<em>Durch $m_2$ kürzen, $m_1 = \xi m_2$ (6.113, 6.117).</em></li>
<li>$p_3^2 = \dfrac{p_1^2}{(1+\xi)^2}\left(\sin^2\vartheta^*+\xi^2+2\xi\cos\vartheta^*+\cos^2\vartheta^*\right)$<em>Betragsquadrat; $\sin^2+\cos^2 = 1$.</em></li>
<li>$T_3 = \dfrac{p_3^2}{2m_1} = T_1\dfrac{1+2\xi\cos\vartheta^*+\xi^2}{(1+\xi)^2}$<em>Mit $T_1 = p_1^2/2m_1$ (6.118, 6.119).</em></li>
<li>$p_4^2 = \dfrac{p_1^2}{(1+\xi)^2}\cdot2(1-\cos\vartheta^*)$, $T_4 = \dfrac{p_4^2}{2m_2} = T_1\dfrac{2\xi(1-\cos\vartheta^*)}{(1+\xi)^2}$<em>Analog; $\frac{1}{2m_2} = \frac{\xi}{2m_1}$ (6.120, 6.121).</em></li>
</ol>`,
    example: R`<b>Neutron</b> ($T_1 = 2\,\text{MeV}$) auf ruhende Kerne, maximaler Übertrag ($\vartheta^* = \pi$):<br>
Wasserstoff ($\xi\approx1$): $T_{4,\max} = 2\,\text{MeV}$ (100 %).<br>
Deuterium ($\xi = \frac12$): $\frac{4\cdot0{,}5}{2{,}25} = 89\,\%$.<br>
Kohlenstoff ($\xi = \frac1{12}$): $28\,\%$.<br>
Blei ($\xi\approx\frac1{207}$): $1{,}9\,\%$. Schwere Kerne bremsen Neutronen kaum.`,
    counterexample: R`<b>$T_3$ als Funktion des Laborwinkels ist nicht eindeutig:</b> Für $\xi>1$ gehören zu jedem Laborwinkel $\vartheta_3\lt\vartheta_3^\text{max}$ <i>zwei</i> Schwerpunktwinkel und damit zwei Energien (Abb. 6.9). Deshalb rechnet man bevorzugt mit $\vartheta^*$, wo die Zuordnung eindeutig ist.`,
    pitfalls: R`<ul><li>$\xi = m_2/m_1$ statt $m_1/m_2$ einsetzen.</li>
<li>Laborwinkel $\vartheta_3$ und Schwerpunktwinkel $\vartheta^*$ verwechseln.</li>
<li>Vergessen, dass $T_3+T_4 = T_1$ als Kontrolle dienen kann.</li></ul>`
  },
  {
    id: "ph6_streuwinkel",
    title: "Streuwinkel im Labor: 90° bei gleichen Massen, maximaler Winkel für m₁ > m₂",
    category: "6.8 Teilchenstösse",
    type: "herleitung",
    front: R`Leite für die elastische Streuung am ruhenden Ziel die Laborwinkel $\cos\vartheta_3$, $\cos\vartheta_4$ und den Öffnungswinkel $\vartheta_{34}$ her. Zeige: Bei gleichen Massen fliegen die Teilchen <b>unter 90°</b> auseinander, und für $m_1>m_2$ gibt es einen <b>maximalen Streuwinkel</b>.`,
    back: R`Aus (6.117):
$$\cos\vartheta_3 = \frac{\cos\vartheta^*+\xi}{\sqrt{1+2\xi\cos\vartheta^*+\xi^2}},\qquad\cos\vartheta_4 = \sqrt{\frac{1-\cos\vartheta^*}{2}}\qquad(6.123\text{–}6.125)$$
Öffnungswinkel:
$$\cos\vartheta_{34} = \frac{\vec p_3\cdot\vec p_4}{|\vec p_3||\vec p_4|} = \sqrt{\frac{1-\cos\vartheta^*}{2}}\;\frac{\xi-1}{\sqrt{1+2\xi\cos\vartheta^*+\xi^2}}\qquad(6.126\text{–}6.128)$$
<b>Gleiche Massen</b> ($\xi = 1$): $\cos\vartheta_{34} = 0$, also $\vartheta_{34} = \pi/2$ immer.<br><br>
<b>$\xi>1$:</b> $\frac{d\cos\vartheta_3}{d\cos\vartheta^*} = \frac{1+\xi\cos\vartheta^*}{(1+2\xi\cos\vartheta^*+\xi^2)^{3/2}} = 0$ bei $\cos\vartheta^* = -\frac1\xi$:
$$\cos\vartheta_3^\text{max} = \sqrt{1-\frac1{\xi^2}}\qquad(6.129\text{–}6.132)$$
Unter jedem Winkel $\vartheta_3\lt\vartheta_3^\text{max}$ treten zwei Energien auf. Das schwere einlaufende Teilchen wird <b>nur vorwärts</b> gestreut (für $\xi\ge1$, weil $v_S\ge\frac12v_1$, 6.133–6.138).`,
    meta: "Skript: Abschnitt 6.8.4.4, Gl. (6.123)–(6.144), Abb. 6.8–6.11, S. 158–161 (Zusammenfassung der Laborwinkel in 6.142–6.144, T₃/T₁ über ϑ₃ in Abb. 6.11)",
    explanation: R`<b>Intuition (gleiche Massen):</b> Billard-Spieler kennen das: Trifft die weisse Kugel eine ruhende gleich schwere schräg, laufen beide danach rechtwinklig auseinander. Grund: Impuls- und Energieerhaltung zusammen ergeben $\vec p_1 = \vec p_3+\vec p_4$ und $p_1^2 = p_3^2+p_4^2$, also Pythagoras, also ein rechter Winkel.<br><br>
<b>Intuition (schweres Projektil):</b> Eine Bowlingkugel, die einen Tischtennisball trifft, wird kaum abgelenkt. Geometrisch: Im Labor ist $\vec v_3 = \vec v_3^{\,*}+\vec v_S$; ist $|\vec v_S|>|\vec v_3^{\,*}|$, liegt die Spitze von $\vec v_3$ auf einem Kreis, der den Ursprung nicht umschliesst. Dann gibt es einen maximalen Winkel (Tangente an den Kreis, Abb. 6.10), und zu jedem kleineren Winkel zwei Schnittpunkte.<br><br>
<b>Abhängigkeit:</b> $\sin\vartheta_3^\text{max} = 1/\xi$. Für ein α-Teilchen ($\xi\approx4$) auf ein Proton: $\vartheta_3^\text{max} = 14{,}5^\circ$.<br><br>
<b>Zusammenhang:</b> Das Rückstossteilchen 4 fliegt immer vorwärts ($\vartheta_4\le90^\circ$), weil es aus der Ruhe angestossen wird.`,
    derivation: R`Der rechte Winkel für gleiche Massen ohne Schwerpunktsystem:
<ol class="fc-steps">
<li>$\vec p_1 = \vec p_3+\vec p_4$<em>Impulserhaltung im Labor (Teilchen 2 ruht).</em></li>
<li>$\dfrac{p_1^2}{2m} = \dfrac{p_3^2}{2m}+\dfrac{p_4^2}{2m}\;\Rightarrow\;p_1^2 = p_3^2+p_4^2$<em>Energieerhaltung bei gleichen Massen $m$.</em></li>
<li>$p_1^2 = (\vec p_3+\vec p_4)^2 = p_3^2+p_4^2+2\,\vec p_3\cdot\vec p_4$<em>Quadrat von Schritt 1.</em></li>
<li>$\vec p_3\cdot\vec p_4 = 0$<em>Schritte 2 und 3 vergleichen.</em></li>
<li>$\vartheta_{34} = 90^\circ$ (sofern $\vec p_3,\vec p_4\neq\vec 0$)<em>Das Skalarprodukt verschwindet: senkrecht; in Übereinstimmung mit (6.128) für $\xi = 1$.</em></li>
</ol>`,
    example: R`<b>$\xi = 2$</b> (z. B. Deuteron auf Proton): $\cos\vartheta_3^\text{max} = \sqrt{1-\frac14} = 0{,}866$, also $\vartheta_3^\text{max} = 30^\circ$; erreicht bei $\cos\vartheta^* = -\frac12$ ($\vartheta^* = 120^\circ$).<br>
<b>$\xi = 1$, $\vartheta^* = 90^\circ$:</b> $\cos\vartheta_3 = \frac{1}{\sqrt2}$, also $\vartheta_3 = 45^\circ$; $\vartheta_4 = 45^\circ$; Summe $90^\circ$ ✓.`,
    counterexample: R`<b>Leichtes Projektil</b> ($\xi\lt1$): Es gibt keinen maximalen Winkel. Ein Elektron kann an einem schweren Kern unter jedem Winkel bis $180^\circ$ gestreut werden (Rückstreuung). Die Aussage „nur Vorwärtsstreuung“ gilt nur für $\xi\ge1$.<br>
<b>Unelastisch:</b> Die 90°-Regel für gleiche Massen gilt nicht; z. B. bleiben beim vollständig inelastischen Stoss beide zusammen ($\vartheta_{34} = 0$).`,
    pitfalls: R`<ul><li>Den 90°-Satz auf ungleiche Massen oder unelastische Stösse anwenden.</li>
<li>$\vartheta_3^\text{max}$ mit $\vartheta^*$ verwechseln.</li>
<li>Bei gegebenem Laborwinkel nur eine Energie erwarten.</li></ul>`
  },

  // ========================================================================
  // ERGÄNZUNGEN: typische Prüfungsaufgaben und Brücken zu Physik II
  // ========================================================================
  {
    id: "ph6_erhaltungssatz_strategie",
    title: "Welcher Erhaltungssatz wann? Impuls, Energie, Drehimpuls in Aufgaben",
    category: "6.5 Erhaltungssätze für N-Teilchen-Systeme",
    type: "konzept",
    front: R`Unter welchen Bedingungen darf man in einer Aufgabe den <b>Impuls-</b>, den <b>Energie-</b> bzw. den <b>Drehimpulssatz</b> verwenden? Wie zerlegt man eine Aufgabe wie das ballistische Pendel in Phasen mit verschiedenen Erhaltungssätzen?`,
    back: R`<ul><li><b>Impuls</b> $\vec P = \sum m_i\vec v_i$ erhalten, wenn $\vec F_\text{ext} = \vec 0$ – oder komponentenweise, wenn eine Komponente der äusseren Kraft verschwindet. Kurze Stösse: Äussere Kräfte (Gewicht, Reibung) liefern während $\Delta t\to0$ keinen nennenswerten Kraftstoss, Impuls also <i>während des Stosses</i> erhalten. Ausnahme: Lager- oder Aufhängekräfte, die im Stoss selbst gross werden.</li>
<li><b>Mechanische Energie</b> $T+U$ erhalten, wenn nur konservative Kräfte Arbeit leisten. Nicht bei inelastischen Stössen, Gleitreibung, Verformung. Zwangskräfte, die senkrecht zur Bewegung stehen (Normalkraft, Fadenkraft am Pendel, Haftreibung beim Rollen), leisten keine Arbeit.</li>
<li><b>Drehimpuls</b> bezüglich eines Punktes $O$ erhalten, wenn das äussere Drehmoment um $O$ verschwindet: Zentralkräfte, Kräfte durch $O$ (z. B. Lagerkraft am Drehpunkt), kurze Stösse um eine feste Achse.</li></ul>
<b>Phasen trennen:</b> Ballistisches Pendel: (1) Stoss: Impulssatz (Energie <i>nicht</i> erhalten). (2) Aufschwung: Energiesatz (Impuls <i>nicht</i> erhalten, Fadenkraft und Gewicht wirken).`,
    meta: "Ergänzung (Prüfungsstrategie); fasst Abschnitte 3.3, 4.5, 5.2, 6.5 (Gl. 6.39–6.42) und 8.5 zusammen",
    explanation: R`<b>Intuition:</b> Erhaltungssätze sind Abkürzungen: Sie verbinden Anfangs- und Endzustand, ohne dass man die Kräfte im Detail kennen muss. Aber jeder gilt nur unter seiner Bedingung – und die meisten Fehler entstehen, weil man einen Satz über eine Phase hinweg anwendet, in der er verletzt ist.<br><br>
<b>Checkliste vor jeder Aufgabe:</b> (1) Welches System betrachte ich (welche Körper gehören dazu)? (2) Welche äusseren Kräfte und Drehmomente wirken, in welcher Phase? (3) Wird Energie dissipiert (Reibung, plastischer Stoss)?<br><br>
<b>Bezugspunkt beim Drehimpuls:</b> Wähle ihn so, dass unbekannte Kräfte (Lager, Aufhängung) kein Drehmoment haben – dann ist $L$ um diesen Punkt erhalten, obwohl der Impuls es nicht ist (Kugel trifft drehbar gelagerten Stab).<br><br>
<b>Zusammenhang:</b> Nach dem Noether-Theorem (Ausblick) gehören die Erhaltungssätze zu Symmetrien: Impuls zur Translations-, Energie zur Zeit-, Drehimpuls zur Rotationsinvarianz. Die Erhaltungssätze für $N$-Teilchen-Systeme: 6.5.`,
    derivation: R`Ballistisches Pendel in zwei Phasen (Geschoss $m$, $v$; Block $M$ am Faden):
<ol class="fc-steps">
<li>Stoss (kurz): $mv = (m+M)u$<em>Impulssatz; Faden vertikal, Gewicht und Fadenkraft haben keine horizontale Komponente.</em></li>
<li>$u = \dfrac{m}{m+M}v$<em>Gemeinsame Geschwindigkeit nach dem vollkommen inelastischen Stoss.</em></li>
<li>Aufschwung: $\tfrac12(m+M)u^2 = (m+M)gh$<em>Energiesatz; Fadenkraft steht senkrecht zur Bewegung.</em></li>
<li>$v = \dfrac{m+M}m\sqrt{2gh}$<em>Aus der Steighöhe auf die Geschossgeschwindigkeit zurückrechnen.</em></li>
<li>Falsch wäre: $\tfrac12mv^2 = (m+M)gh$<em>Energie über den Stoss hinweg erhalten anzunehmen, überschätzt $h$ um den Faktor $(m+M)/m$.</em></li>
</ol>`,
    example: R`$m = 10\,\text{g}$, $v = 400\,\text{m/s}$, $M = 2\,\text{kg}$: $u = 1{,}99\,\text{m/s}$, $h = 20{,}2\,\text{cm}$. Von $800\,\text{J}$ Geschossenergie bleiben nur $4{,}0\,\text{J}$ ($0{,}5\,\%$) mechanisch; der Rest wird Verformung und Wärme.<br>
Planet auf Ellipsenbahn: Drehimpuls um die Sonne erhalten (Zentralkraft), Energie erhalten, Impuls nicht (Kraft wirkt ständig).`,
    counterexample: R`<b>Impuls bei gelagertem Körper:</b> Trifft eine Kugel einen an einem Ende drehbar gelagerten Stab, liefert das Lager während des Stosses eine grosse Kraft – der Impuls von Kugel plus Stab ist <i>nicht</i> erhalten. Erhalten ist nur der Drehimpuls um die Lagerachse (Karte „Drehimpuls bei Stössen mit starren Körpern“).`,
    pitfalls: R`<ul><li>Energieerhaltung über einen inelastischen Stoss hinweg ansetzen.</li>
<li>Impulserhaltung trotz äusserer Lagerkräfte verwenden.</li>
<li>Den Drehimpuls um verschiedene Punkte vergleichen.</li>
<li>Das System nicht klar abgrenzen (was ist innen, was aussen?).</li></ul>`
  },
  {
    id: "ph6_stoesse_1d",
    title: "Gerade Stösse: elastisch (allgemein) und vollkommen inelastisch, Energieverlust ½μv²_rel",
    category: "6.8 Teilchenstösse",
    type: "herleitung",
    front: R`Zwei Körper $m_1$, $m_2$ mit $v_1$, $v_2$ stossen gerade (eindimensional). Bestimme die Geschwindigkeiten nach (a) einem <b>elastischen</b> und (b) einem <b>vollkommen inelastischen</b> Stoss. Wie viel kinetische Energie geht im inelastischen Fall verloren?`,
    back: R`<b>(a) Elastisch</b> (Impuls und kinetische Energie erhalten):
$$u_1 = \frac{(m_1-m_2)v_1+2m_2v_2}{m_1+m_2},\qquad u_2 = \frac{(m_2-m_1)v_2+2m_1v_1}{m_1+m_2}$$
Äquivalent: Relativgeschwindigkeit kehrt sich um, $u_1-u_2 = -(v_1-v_2)$. Im Schwerpunktsystem kehren beide Geschwindigkeiten einfach das Vorzeichen um: $u_i = 2v_S-v_i$ mit $v_S = \frac{m_1v_1+m_2v_2}{m_1+m_2}$.<br><br>
<b>(b) Vollkommen inelastisch</b> (Körper haften aneinander, nur Impuls erhalten):
$$u = \frac{m_1v_1+m_2v_2}{m_1+m_2} = v_S$$
Energieverlust = gesamte kinetische Energie im Schwerpunktsystem:
$$\Delta T = \frac12\frac{m_1m_2}{m_1+m_2}(v_1-v_2)^2 = \tfrac12\mu v_\text{rel}^2$$`,
    meta: "Ergänzung (typische Prüfungsaufgabe); verallgemeinert Abschnitte 6.8.1–6.8.2 (Gl. 6.72–6.80) und nutzt 6.4.3 (T = T* + ½Mv_S²), 6.6 (reduzierte Masse)",
    explanation: R`<b>Intuition:</b> Jeder Stoss lässt sich im Schwerpunktsystem am einfachsten verstehen: Dort ist der Gesamtimpuls null. Beim elastischen Stoss prallen beide mit unveränderten Beträgen zurück; beim vollkommen inelastischen bleiben beide stehen. Zurück ins Labor kommt man durch Addieren von $v_S$.<br><br>
<b>Energie:</b> Nach (6.4.3) ist $T = \tfrac12Mv_S^2+T^*$. Der Schwerpunktsanteil kann sich ohne äussere Kraft nicht ändern; verlieren kann ein Stoss also höchstens $T^* = \tfrac12\mu v_\text{rel}^2$. Der vollkommen inelastische Stoss verliert genau das Maximum.<br><br>
<b>Abhängigkeiten:</b> Leichter Körper auf ruhenden schweren ($m_1\ll m_2$, $v_2 = 0$): Fast alle Energie bleibt kinetisch (Reflexion, $u_1\approx-v_1$); beim inelastischen Fall geht fast alles verloren ($\Delta T/T\approx1$). Schwerer auf leichten: $u_2\approx2v_1$ (Golfschläger).<br><br>
<b>Zusammenhang:</b> Teilelastische Stösse beschreibt man mit der Stosszahl $e = -\frac{u_1-u_2}{v_1-v_2}$ ($0\le e\le1$, Ergänzung). Die drei Fälle des Skripts (6.8.2) sind der Spezialfall $v_2 = 0$.`,
    derivation: R`Elastisch, über die Relativgeschwindigkeit:
<ol class="fc-steps">
<li>$m_1(v_1-u_1) = m_2(u_2-v_2)$<em>Impulserhaltung umsortiert.</em></li>
<li>$m_1(v_1^2-u_1^2) = m_2(u_2^2-v_2^2)$<em>Energieerhaltung (Faktor $\tfrac12$ gekürzt).</em></li>
<li>$v_1+u_1 = u_2+v_2$<em>Zweite durch erste Gleichung teilen ($a^2-b^2 = (a-b)(a+b)$), für $v_1\neq u_1$.</em></li>
<li>$u_1-u_2 = -(v_1-v_2)$<em>Relativgeschwindigkeit kehrt sich um.</em></li>
<li>$u_2 = u_1+v_1-v_2$ in den Impulssatz $\Rightarrow u_1 = \dfrac{(m_1-m_2)v_1+2m_2v_2}{m_1+m_2}$<em>Lineares Gleichungssystem lösen.</em></li>
</ol>`,
    example: R`Elastisch: $m_1 = 1\,\text{kg}$, $v_1 = 3\,\text{m/s}$; $m_2 = 2\,\text{kg}$, $v_2 = -1\,\text{m/s}$: $u_1 = -\tfrac73$, $u_2 = \tfrac53\,\text{m/s}$. Probe: Impuls $1 = 1$ ✓, Energie $5{,}5 = 5{,}5\,\text{J}$ ✓, $u_1-u_2 = -4$ ✓.<br>
Inelastisch, gleiche Daten: $u = \tfrac13\,\text{m/s}$, $\Delta T = \tfrac12\cdot\tfrac23\cdot16 = 5{,}33\,\text{J}$ von $5{,}5\,\text{J}$.`,
    counterexample: R`<b>„Bei inelastischen Stössen geht der Impuls verloren“:</b> Falsch – der Impuls ist bei jedem Stoss erhalten (ohne äussere Kräfte), nur kinetische Energie geht in innere Energie über. Und auch beim vollkommen inelastischen Stoss geht nicht alle Energie verloren, sondern nur der Schwerpunktsanteil $T^*$.`,
    pitfalls: R`<ul><li>Vorzeichen der Geschwindigkeiten (Richtungen) vergessen.</li>
<li>Bei inelastischen Stössen Energieerhaltung ansetzen.</li>
<li>Den Spezialfall $v_2 = 0$ ohne Prüfung auf bewegte Ziele übertragen.</li></ul>`
  }
];
})();
