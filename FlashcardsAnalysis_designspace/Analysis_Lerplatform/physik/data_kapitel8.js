/* ==========================================================================
   PHYSIK I – KAPITEL 8: Dynamik des starren Körpers
   Schwerpunkt (Kegel), Wirkungslinie, Drehmoment, Kräftepaar, Statik,
   Eulerwinkel, Trägheitsmoment, Rotationsenergie, Steiner, Rollen,
   Rollreibung, Laufrolle, Maxwell-Rad, Billardkugel
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   (Trägheitsmoment hier wie im Skript mit J bezeichnet; anderswo oft I.)
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_8 = [
  // ========================================================================
  // 8.1–8.2 STARRER KÖRPER, MASSENSCHWERPUNKT
  // ========================================================================
  {
    id: "ph8_schwerpunkt_kontinuierlich",
    title: "Starrer Körper und Schwerpunkt einer kontinuierlichen Massenverteilung",
    category: "8.2 Massenschwerpunkt",
    type: "definition",
    front: R`Was ist ein <b>starrer Körper</b>, und warum ist das eine Idealisierung? Wie berechnet man den <b>Schwerpunkt</b> eines Körpers mit kontinuierlicher Dichte $\rho(\vec r)$?`,
    back: R`<b>Starrer Körper:</b> Festkörper, bei dem die Abstände zwischen allen Teilchen konstant bleiben, auch wenn äussere Kräfte und Drehmomente wirken. Spezialfall eines Vielteilchensystems; idealisiert, da sich reale Körper durch Zug, Druck oder Scherung verformen, aber meist wenig und nicht dauerhaft.<br><br>
<b>Schwerpunkt:</b> Massenpunkte $m_i$ durch Volumenelemente $\Delta V_i$ mit Dichte $\rho_i$ ersetzen:
$$\vec r_S = \frac{\sum_i m_i\vec r_i}{\sum_i m_i} = \frac1M\sum_i\vec r_i\,\rho(\vec r_i)\,\Delta V_i\qquad(8.1)$$
Grenzübergang $\Delta V_i\to0$, $N\to\infty$:
$$\vec r_S = \frac1M\int\vec r\,dm = \frac1M\int_V\vec r\,\rho\,dV,\qquad M = \int_V\rho\,dV\qquad(8.2)$$
(Die kontinuierliche Verteilung ist eine Näherung, da Materie aus Atomen mit der Masse fast ganz im Kern besteht; bei sehr vielen Atomen ist sie ausgezeichnet.)`,
    meta: "Skript: Abschnitte 8.1–8.2.1, Gl. (8.1)–(8.2), Abb. 8.1 (Fussnote 1), S. 183–184",
    explanation: R`<b>Intuition:</b> Der Schwerpunkt ist das massengewichtete Mittel aller Orte. Bei kontinuierlicher Masse ersetzt das Integral die Summe: Jedes kleine Stück $dm$ trägt mit seinem Ort $\vec r$ bei.<br><br>
<b>Symmetrie nutzen:</b> Hat der Körper eine Symmetrieachse oder -ebene (und ist die Dichte entsprechend symmetrisch), liegt der Schwerpunkt darauf. Dann muss man oft nur eine Koordinate integrieren (Kegel, 8.2.2).<br><br>
<b>Warum starr?</b> Weil alle Abstände fest sind, reichen 6 Freiheitsgrade (3 für den Schwerpunkt, 3 Winkel) statt $3N$. Alle Teile haben dieselbe Winkelgeschwindigkeit $\vec\omega$, und $\vec v_i = \vec v_S + \vec\omega\times\vec r_i^{\,*}$.<br><br>
<b>Zusammenhang:</b> Kap. 6 (Schwerpunktsatz) gilt weiter: $M\ddot{\vec r}_S = \vec F_\text{ext}$. Im homogenen Schwerefeld greift die Schwerkraft im Schwerpunkt an (8.3.3, Punkt 6).`,
    derivation: R`Schwerpunkt eines dünnen, homogenen Halbkreisbogens (Radius $R$, Masse $M$) als Übungsbeispiel:
<ol class="fc-steps">
<li>$dm = \lambda R\,d\varphi$, $\lambda = \dfrac{M}{\pi R}$<em>Längendichte; Bogen von $\varphi = 0$ bis $\pi$.</em></li>
<li>$x_S = 0$<em>Symmetrie bezüglich der $y$-Achse.</em></li>
<li>$y_S = \dfrac1M\displaystyle\int_0^\pi R\sin\varphi\,\lambda R\,d\varphi = \dfrac{\lambda R^2}{M}\left[-\cos\varphi\right]_0^\pi = \dfrac{2\lambda R^2}{M}$<em>Ort $y = R\sin\varphi$ mal Massenelement integrieren (8.2).</em></li>
<li>$y_S = \dfrac{2R^2}{\pi R} = \dfrac{2R}{\pi}\approx0{,}64\,R$<em>Der Schwerpunkt liegt im leeren Raum innerhalb des Bogens.</em></li>
</ol>`,
    example: R`<b>Halbkreisbogen</b> mit $R = 10\,\text{cm}$: $y_S = 6{,}4\,\text{cm}$ über dem Durchmesser.<br>
<b>Halbkreisscheibe</b> (Fläche statt Bogen): $y_S = \frac{4R}{3\pi}\approx0{,}42\,R$, also näher am Durchmesser, weil dort mehr Fläche liegt.<br>
<b>Dichte variabel:</b> Ein Stab ($0\le x\le\ell$) mit $\lambda(x) = \lambda_0x/\ell$: $x_S = \frac{\int x\lambda\,dx}{\int\lambda\,dx} = \frac{\ell^3/3}{\ell^2/2} = \frac23\ell$, zum schwereren Ende verschoben.`,
    counterexample: R`<b>Verformbare Körper:</b> Ein Mensch, der seine Arme hebt, verschiebt seinen Schwerpunkt. Beim Hochsprung (Fosbury-Flop) liegt der Schwerpunkt sogar ausserhalb des Körpers, unter der Latte. Für solche Systeme gilt der Schwerpunktsatz, aber nicht die Starrheit: Die Formeln für Trägheitsmomente mit fester Massenverteilung sind dann nur momentan richtig.`,
    pitfalls: R`<ul><li>Ungewichtet über das Volumen mitteln, obwohl die Dichte variiert.</li>
<li>Den Normierungsfaktor $1/M$ vergessen.</li>
<li>Annehmen, der Schwerpunkt liege immer im Material.</li></ul>`
  },
  {
    id: "ph8_kreiskegel",
    title: "Beispiel: Volumen und Schwerpunkt eines homogenen Kreiskegels (h/4)",
    category: "8.2 Massenschwerpunkt",
    type: "beispiel",
    front: R`Berechne für einen homogenen Kreiskegel (Masse $M$, Höhe $h$, Basisradius $R$, Spitze oben auf der $z$-Achse) das <b>Volumen</b>, die <b>Dichte</b> und die Lage des <b>Schwerpunkts</b>.`,
    back: R`Aus Symmetriegründen liegt $S$ auf der $z$-Achse. Schnitt mit der $xz$-Ebene: $x(z) = \frac Rh(h-z)$ (8.3). Volumenelement als Kreisscheibe der Dicke $dz$:
$$dV = \pi r^2\,dz,\qquad r(z) = \frac Rh(h-z)\qquad(8.4,\,8.5)$$
$$V = \int_0^h\pi\frac{R^2}{h^2}(h-z)^2dz = \tfrac13\pi R^2h,\qquad\rho_0 = \frac{3M}{\pi R^2h}\qquad(8.6\text{–}8.9)$$
$$z_S = \frac1M\int_V\rho_0z\,dV = \frac{3}{h^3}\int_0^h(h-z)^2z\,dz = \frac3{h^3}\cdot\frac{h^4}{12} = \frac h4\qquad(8.10\text{–}8.14)$$
$\vec r_S = (0,\,0,\,h/4)$: ein Viertel der Höhe über der Grundfläche.`,
    meta: "Skript: Abschnitt 8.2.2, Gl. (8.3)–(8.14), Abb. 8.2, S. 184–186",
    explanation: R`<b>Intuition:</b> Ein Kegel ist unten breit und oben spitz; die meiste Masse liegt nahe der Grundfläche. Deshalb liegt der Schwerpunkt deutlich tiefer als die halbe Höhe, bei genau einem Viertel.<br><br>
<b>Methode:</b> In Scheiben schneiden, deren Masse man kennt ($dm = \rho\pi r(z)^2dz$), und jede Scheibe mit ihrer Höhe gewichten. Dasselbe Rezept funktioniert für jeden Rotationskörper.<br><br>
<b>Abhängigkeiten:</b> $z_S = h/4$ hängt weder von $R$ noch von $M$ ab: Alle homogenen Kegel haben den Schwerpunkt auf $1/4$ der Höhe. Das Volumen ist genau ein Drittel des umschriebenen Zylinders.<br><br>
<b>Vergleich:</b> Zylinder: $h/2$; Halbkugel: $\frac38R$ über der Grundfläche; Pyramide: ebenfalls $h/4$ (allgemein für jeden Kegel mit beliebiger Grundfläche, weil der Querschnitt $\propto(h-z)^2$ ist).`,
    derivation: R`<ol class="fc-steps">
<li>$V = \pi\dfrac{R^2}{h^2}\displaystyle\int_0^h(h-z)^2dz = \pi\dfrac{R^2}{h^2}\left[h^2z - hz^2 + \tfrac13z^3\right]_0^h$<em>Scheiben aufsummieren; $(h-z)^2$ ausmultipliziert (8.7, 8.8).</em></li>
<li>$= \pi\dfrac{R^2}{h^2}\cdot\dfrac{h^3}{3} = \tfrac13\pi R^2h$<em>$h^3 - h^3 + \tfrac13h^3$.</em></li>
<li>$z_S = \dfrac{\rho_0}{M}\pi\dfrac{R^2}{h^2}\displaystyle\int_0^h(h-z)^2z\,dz = \dfrac3{h^3}\int_0^h(h-z)^2z\,dz$<em>$\rho_0 = 3M/(\pi R^2h)$ einsetzen; $R$ und $M$ kürzen sich (8.11, 8.12).</em></li>
<li>$\displaystyle\int_0^h(h^2z - 2hz^2 + z^3)\,dz = \tfrac12h^4 - \tfrac23h^4 + \tfrac14h^4 = \tfrac1{12}h^4$<em>Stammfunktion an den Grenzen (8.13).</em></li>
<li>$z_S = \dfrac3{h^3}\cdot\dfrac{h^4}{12} = \dfrac h4$<em>Ergebnis (8.14).</em></li>
</ol>`,
    example: R`Kegel aus Holz ($\rho = 600\,\text{kg/m}^3$), $R = 5\,\text{cm}$, $h = 20\,\text{cm}$: $V = \frac13\pi\cdot0{,}0025\cdot0{,}2\,\text{m}^3 = 5{,}24\cdot10^{-4}\,\text{m}^3$, $M = 0{,}31\,\text{kg}$, Schwerpunkt $5\,\text{cm}$ über der Grundfläche.<br>
Auf die Spitze gestellt ist er labil (Schwerpunkt $15\,\text{cm}$ hoch), auf der Grundfläche sehr stabil.`,
    counterexample: R`<b>Hohler Kegelmantel</b> (nur die Oberfläche, ohne Boden): Die Masse ist proportional zum Umfang $\propto(h-z)$, nicht zur Querschnittsfläche. Dann liegt der Schwerpunkt bei $h/3$, nicht bei $h/4$. Das Ergebnis hängt also davon ab, wie die Masse verteilt ist.`,
    pitfalls: R`<ul><li>Den Radius $r(z)$ verkehrt herum ansetzen (Spitze unten statt oben).</li>
<li>$z_S = h/3$ (Schwerpunkt eines Dreiecks) mit dem Kegel verwechseln.</li>
<li>Das Integral über $z$ ohne den Faktor $r(z)^2$ auswerten.</li></ul>`
  },

  // ========================================================================
  // 8.3 KRÄFTE UND DREHMOMENTE
  // ========================================================================
  {
    id: "ph8_wirkungslinie",
    title: "Wirkungslinie einer Kraft und Addition von Kräften am starren Körper",
    category: "8.3 Kräfte und Drehmomente",
    type: "konzept",
    front: R`Warum darf man beim starren Körper den Angriffspunkt einer Kraft entlang ihrer <b>Wirkungslinie</b> verschieben, aber nicht beliebig? Wie addiert man Kräfte, die (a) im selben Punkt, (b) in verschiedenen Punkten, (c) parallel in verschiedenen Punkten angreifen?`,
    back: R`Greift eine Kraft nicht im Schwerpunkt an, bewirkt sie zusätzlich ein Drehmoment. Für jeden Punkt $P'$ auf der Wirkungslinie gilt mit $\vec r = \vec r_\parallel + \vec r_\perp$ (8.15):
$$\vec M = \vec r\times\vec F = (\vec r_\parallel+\vec r_\perp)\times\vec F = \vec r_\perp\times\vec F\qquad(8.16\text{–}8.18)$$
Das Drehmoment bezüglich eines beliebigen festen Punktes $O$ ist für alle Punkte der Wirkungslinie <b>gleich</b>. Für die Beschleunigung spielt der Angriffspunkt beim starren Körper ohnehin keine Rolle.<br><br>
<b>Addition</b> (Abb. 8.4):
<ul><li>(a) gleicher Angriffspunkt: vektoriell addieren (Kräfteparallelogramm)</li>
<li>(b) verschiedene Punkte: beide Kräfte entlang ihrer Wirkungslinien zum Schnittpunkt verschieben, dann wie (a)</li>
<li>(c) parallele Kräfte: zwei entgegengesetzt gleiche Hilfskräfte hinzufügen, sodass sich die Wirkungslinien schneiden, dann wie (b)</li></ul>`,
    meta: "Skript: Abschnitte 8.3.1–8.3.2, Gl. (8.15)–(8.18), Abb. 8.3–8.4 (Fussnote 2), S. 186–188",
    explanation: R`<b>Intuition:</b> Ob man an einem Seil am vorderen oder hinteren Ende zieht, macht für einen starren Körper keinen Unterschied, solange die Zugrichtung auf derselben Linie liegt. Verschiebt man die Kraft dagegen seitlich, ändert sich der Hebelarm und damit das Drehmoment.<br><br>
<b>Warum funktioniert das?</b> Der Anteil $\vec r_\parallel$ (entlang der Kraft) liefert im Kreuzprodukt nichts. Nur der senkrechte Abstand $r_\perp$ der Wirkungslinie von $O$ zählt.<br><br>
<b>Hilfskräfte bei parallelen Kräften:</b> Man fügt $+\vec F_h$ und $-\vec F_h$ hinzu. Das ändert weder die Gesamtkraft noch das Gesamtdrehmoment, macht die Wirkungslinien aber schneidend. So findet man die Wirkungslinie der Resultierenden zweier paralleler Kräfte (z. B. zwei Personen, die einen Balken tragen).<br><br>
<b>Zusammenhang:</b> Für verformbare Körper gilt die Verschiebbarkeit nicht: Ziehen oder Drücken an verschiedenen Punkten verformt den Körper unterschiedlich.`,
    derivation: R`Resultierende zweier paralleler Kräfte $F_1$ (bei $x_1$) und $F_2$ (bei $x_2$), beide nach unten:
<ol class="fc-steps">
<li>$F = F_1 + F_2$<em>Gesamtkraft: Beträge addieren sich (gleiche Richtung).</em></li>
<li>$M_O = x_1F_1 + x_2F_2$<em>Gesamtdrehmoment um einen Punkt $O$ auf der $x$-Achse.</em></li>
<li>$x_RF = x_1F_1 + x_2F_2$<em>Die Resultierende muss dasselbe Drehmoment haben: Lage $x_R$ ihrer Wirkungslinie.</em></li>
<li>$x_R = \dfrac{x_1F_1+x_2F_2}{F_1+F_2}$<em>„Kraftgewichtetes Mittel“; für Gewichtskräfte ist das gerade der Schwerpunkt.</em></li>
</ol>`,
    example: R`Zwei Kisten auf einem Brett: $200\,\text{N}$ bei $x = 0{,}5\,\text{m}$, $300\,\text{N}$ bei $x = 2{,}0\,\text{m}$. Resultierende $500\,\text{N}$ bei $x_R = \frac{100+600}{500}\,\text{m} = 1{,}4\,\text{m}$. Stützt man das Brett genau dort, bleibt es im Gleichgewicht.`,
    counterexample: R`<b>Seitliches Verschieben ist verboten:</b> Eine Tür wird mit $F = 20\,\text{N}$ senkrecht am Griff ($r_\perp = 0{,}8\,\text{m}$) geöffnet: $M = 16\,\text{N m}$. Dieselbe Kraft, parallel nahe an der Angel angesetzt ($r_\perp = 0{,}1\,\text{m}$), gibt nur $2\,\text{N m}$. Gleiche Kraft, andere Wirkungslinie, ganz andere Wirkung.`,
    pitfalls: R`<ul><li>Den Angriffspunkt quer zur Kraftrichtung verschieben.</li>
<li>Bei verformbaren Körpern die Verschiebbarkeit annehmen.</li>
<li>Bei parallelen Kräften nur die Beträge addieren und die Lage der Resultierenden vergessen.</li></ul>`
  },
  {
    id: "ph8_drehmoment_eigenschaften",
    title: "Drehmoment am starren Körper: Pseudovektor, Bezugspunkt, Summe",
    category: "8.3 Kräfte und Drehmomente",
    type: "konzept",
    front: R`Welche Eigenschaften hat das <b>Drehmoment</b> $\vec M = \vec r\times\vec F$ am starren Körper? Erkläre (1) warum es ein <b>axialer Vektor</b> ist (Parität), (2) wie es vom <b>Bezugspunkt</b> abhängt und (3) wie sich Drehmomente mehrerer Kräfte addieren.`,
    back: R`Drehrichtung nach der Rechte-Hand-Regel (von $\vec r$ nach $\vec F$).<br><br>
<b>(1) Axialer Vektor (Pseudovektor):</b> Spiegelung aller Achsen am Ursprung ($\hat x' = -\hat x$, …, 8.19–8.21), die Paritätsoperation $P$. Polare Vektoren wechseln das Vorzeichen: $\vec r\to-\vec r$, $\vec F\to-\vec F$ (8.22–8.24). Das Drehmoment nicht:
$$\vec M = \vec r\times\vec F\;\stackrel{P}{\to}\;(-\vec r)\times(-\vec F) = +\vec M\qquad(8.25\text{–}8.27)$$
<b>(2) Bezugspunktabhängigkeit:</b> Verschiebung um $\vec b$:
$$\vec M_2 = (\vec r_1+\vec b)\times\vec F = \vec M_1 + \vec b\times\vec F,\qquad\vec r_{2\perp} = \vec r_{1\perp}+\vec b_\perp\qquad(8.28\text{–}8.31)$$
Das Vorzeichen wechselt, wenn $\vec b_\perp$ entgegengesetzt zu $\vec r_{1\perp}$ und $|\vec b_\perp|>|\vec r_{1\perp}|$ ist (8.32).<br><br>
<b>(3) Summe</b> mehrerer Kräfte am selben Punkt:
$$\vec M = \vec r\times\sum_i\vec F_i = \sum_i\vec M_i\qquad(8.33)$$`,
    meta: "Skript: Abschnitt 8.3.3, Punkte 1–3, Gl. (8.19)–(8.33), Abb. 8.5–8.7, S. 187–191",
    explanation: R`<b>Intuition (Parität):</b> Ein axialer Vektor steht für einen <i>Umlaufsinn</i> (eine orientierte Fläche), nicht für eine Richtung im Raum. Bei der Punktspiegelung $P$ bleibt ein Umlaufsinn erhalten, also bleibt $\vec M$ gleich, während jeder echte Pfeil ($\vec r$, $\vec F$, $\vec v$) umklappt. Bei einer Spiegelung an einer Ebene ist es genau umgekehrt wie bei polaren Vektoren: Die Komponente senkrecht zur Ebene bleibt, die parallelen Komponenten kehren sich um. Auch $\vec\omega$, $\vec L$ und $\vec B$ sind axial.<br><br>
<b>Bezugspunkt:</b> „Das Drehmoment“ einer Kraft gibt es nicht ohne Angabe des Punktes. Bei Gleichgewicht ($\sum\vec F = \vec 0$) wird das Gesamtdrehmoment aber unabhängig vom Bezugspunkt, denn der Zusatzterm $\vec b\times\sum\vec F$ verschwindet (wichtig für die Statik, 8.4).<br><br>
<b>Physik und Parität:</b> Die Gesetze der Mechanik (und des Elektromagnetismus) sind spiegelsymmetrisch: Eine Gleichung zwischen polaren und axialen Vektoren muss auf beiden Seiten denselben Typ haben ($\vec M = \dot{\vec L}$: beide axial ✓). Die schwache Wechselwirkung verletzt die Paritätssymmetrie (Wu-Experiment 1956).`,
    derivation: R`Drehmoment bezüglich eines verschobenen Punktes:
<ol class="fc-steps">
<li>$\vec r_2 = \vec r_1 + \vec b$<em>Ortsvektor des Angriffspunkts vom neuen Bezugspunkt aus (Abb. 8.7).</em></li>
<li>$\vec M_2 = \vec r_2\times\vec F = \vec r_1\times\vec F + \vec b\times\vec F$<em>Distributivgesetz des Kreuzprodukts (8.29).</em></li>
<li>$\vec M_2 = \vec M_1 + \vec b\times\vec F$<em>Der Zusatzterm hängt nur von der Verschiebung und der Kraft ab (8.30).</em></li>
<li>$\sum_i\vec M_{2,i} = \sum_i\vec M_{1,i} + \vec b\times\sum_i\vec F_i$<em>Für mehrere Kräfte summiert.</em></li>
<li>$\sum\vec F_i = \vec 0\;\Rightarrow\;\sum\vec M_{2,i} = \sum\vec M_{1,i}$<em>Im Kräftegleichgewicht ist das Gesamtdrehmoment bezugspunktunabhängig.</em></li>
</ol>`,
    example: R`Kraft $\vec F = (0,10,0)\,\text{N}$ am Punkt $(2,0,0)\,\text{m}$:<br>
Bezüglich des Ursprungs: $\vec M_1 = (2,0,0)\times(0,10,0) = (0,0,20)\,\text{N m}$.<br>
Bezüglich $O' = (3,0,0)$: $\vec r = (-1,0,0)$, $\vec M = (0,0,-10)\,\text{N m}$, umgekehrter Drehsinn!<br>
Kontrolle mit $\vec b = (-3,0,0)$ (vom neuen zum alten Ursprung): $\vec b\times\vec F = (0,0,-30)$, also $20-30 = -10$ ✓.`,
    counterexample: R`<b>Drehmoment ohne Bezugspunkt angeben:</b> „Die Schwerkraft übt auf das Pendel das Drehmoment $mg\ell\sin\varphi$ aus.“ Das stimmt nur bezüglich des Aufhängepunkts; bezüglich des Pendelkörpers selbst ist es null. Ohne Angabe des Punktes ist die Aussage sinnlos.`,
    pitfalls: R`<ul><li>Drehmomente bezüglich verschiedener Punkte addieren.</li>
<li>$\vec r$ vom falschen Punkt aus messen (vom Angriffspunkt statt vom Bezugspunkt).</li>
<li>Axiale Vektoren wie polare behandeln, z. B. bei Spiegelungsargumenten.</li></ul>`
  },
  {
    id: "ph8_kraeftepaar",
    title: "Kräftepaar, Reduktion von Kraftgruppen und Schwerkraft im Schwerpunkt",
    category: "8.3 Kräfte und Drehmomente",
    type: "gesetz",
    front: R`Was ist ein <b>Kräftepaar</b>, und warum hängt sein Drehmoment nicht vom Bezugspunkt ab? Wie lässt sich ein beliebiges Kraftsystem auf eine Kraft und ein Drehmoment <b>reduzieren</b>? Warum darf man die Schwerkraft im Schwerpunkt angreifen lassen?`,
    back: R`<b>(4) Kräftepaar:</b> zwei gleich grosse, entgegengesetzte Kräfte, die nicht auf derselben Wirkungslinie angreifen (Abb. 8.8):
$$\vec F_1+\vec F_2 = \vec 0,\qquad\vec M = \vec r_1\times\vec F_1 + \vec r_2\times\vec F_2 = \underbrace{(\vec r_1-\vec r_2)}_{\vec r_{12}}\times\vec F_1 = \vec r_{12\perp}\times\vec F_1\qquad(8.34\text{–}8.37)$$
Keine Beschleunigung, nur Winkelbeschleunigung; $\vec M$ hängt nur vom Relativabstand ab, nicht vom Ort der Drehachse (die sogar ausserhalb des Körpers liegen darf).<br><br>
<b>(5) Reduktion:</b> Eine Kraft in $P$ = gleiche Kraft im Drehpunkt $O$ plus Kräftepaar $\{\vec F',\vec F''\}$ mit $\vec M = \vec r\times\vec F$ (Abb. 8.9). Allgemein:
$$\vec M_\text{res} = \sum_i(\vec r_i\times\vec F_i),\qquad\vec F_\text{res} = \sum_i\vec F_i\qquad(8.38)$$
<b>(6) Schwerkraft:</b> Drehmoment um den Schwerpunkt im homogenen Feld:
$$\vec M = \sum_i\vec r_i^{\,*}\times\Delta m_i\vec g = \Big(\sum_i\Delta m_i\vec r_i^{\,*}\Big)\times\vec g = \vec 0\qquad(8.39)$$
Die gesamte Schwerkraft wirkt wie eine einzige Kraft $M\vec g$ im Schwerpunkt.`,
    meta: "Skript: Abschnitt 8.3.3, Punkte 4–6, Gl. (8.34)–(8.39), Abb. 8.8–8.10, S. 191–194",
    explanation: R`<b>Intuition:</b> Ein Kräftepaar ist „reine Drehung“: Beim Lenkrad drücken die Hände auf entgegengesetzten Seiten in entgegengesetzte Richtungen. Das Auto wird nicht seitwärts geschoben, das Lenkrad nur gedreht. Wo die Drehachse liegt, ist egal, weil das Paar keine Nettokraft hat.<br><br>
<b>Reduktion:</b> Jede noch so komplizierte Kraftverteilung auf einen starren Körper wirkt wie (i) eine Kraft im gewählten Bezugspunkt (z. B. Schwerpunkt), die die Translation bestimmt, plus (ii) ein Drehmoment, das die Rotation bestimmt. Das ist die Grundlage für Statik und Dynamik starrer Körper.<br><br>
<b>Abhängigkeit:</b> $M = F\cdot r_{12\perp}$: doppelter Abstand der Hände ergibt doppeltes Drehmoment bei gleicher Kraft (grosses Lenkrad bei alten Lastwagen ohne Servolenkung).<br><br>
<b>Zusammenhang:</b> Punkt (6) ist der eigentliche Grund, warum man den Schwerpunkt als Angriffspunkt der Schwerkraft verstehen darf (vgl. 6.17). Im inhomogenen Feld (Gezeiten) stimmt das nicht mehr exakt.`,
    derivation: R`Reduktion einer Kraft $\vec F$ in $P$ (Ortsvektor $\vec r$) auf den Punkt $O$:
<ol class="fc-steps">
<li>In $O$: $\vec F' = \vec F$ und $\vec F'' = -\vec F$ hinzufügen<em>Zwei entgegengesetzt gleiche Kräfte am selben Punkt ändern nichts (Summe null, Drehmoment null).</em></li>
<li>$\{\vec F\ \text{in}\ P,\ \vec F''\ \text{in}\ O\}$ ist ein Kräftepaar<em>Gleich gross, entgegengesetzt, verschiedene Wirkungslinien.</em></li>
<li>$\vec M_\text{Paar} = \vec r\times\vec F$<em>Nach (8.37) mit $\vec r_{12} = \vec r - \vec 0$.</em></li>
<li>Übrig: $\vec F' = \vec F$ in $O$<em>Bewirkt kein Drehmoment um $O$, aber die volle Translation.</em></li>
<li>$\vec F$ in $P$ $\equiv$ $\vec F$ in $O$ plus Drehmoment $\vec r\times\vec F$<em>Verallgemeinert für viele Kräfte: (8.38).</em></li>
</ol>`,
    example: R`<b>Lenkrad</b> ($\varnothing = 38\,\text{cm}$): Beide Hände ziehen mit je $25\,\text{N}$ tangential in entgegengesetzte Richtungen: $M = 25\,\text{N}\cdot0{,}38\,\text{m} = 9{,}5\,\text{N m}$, keine Nettokraft.<br><br>
<b>Schraubenschlüssel mit einer Hand:</b> $F = 50\,\text{N}$ bei $r = 0{,}2\,\text{m}$ wirkt auf die Schraube wie $50\,\text{N}$ Querkraft plus $10\,\text{N m}$ Drehmoment. Die Querkraft muss das Gewinde aufnehmen; ein Kreuzschlüssel mit beiden Händen (Kräftepaar) vermeidet sie.`,
    counterexample: R`<b>Kein Kräftepaar:</b> Zwei entgegengesetzt gleiche Kräfte auf <i>derselben</i> Wirkungslinie (z. B. Zug an beiden Enden eines Seils) erzeugen weder Kraft noch Drehmoment, nur innere Spannung. Und zwei gleich gerichtete Kräfte an verschiedenen Punkten haben eine Nettokraft und sind deshalb auch kein Kräftepaar.`,
    pitfalls: R`<ul><li>Annehmen, ein Kräftepaar verschiebe den Schwerpunkt.</li>
<li>Bei der Reduktion vergessen, die Kraft im Bezugspunkt mitzunehmen.</li>
<li>Die Schwerkraft im inhomogenen Feld im Schwerpunkt angreifen lassen.</li></ul>`
  },

  // ========================================================================
  // 8.4 STATISCHES GLEICHGEWICHT
  // ========================================================================
  {
    id: "ph8_statik",
    title: "Statisches Gleichgewicht: Kräfte- und Drehmomentbedingung (Block auf schiefer Ebene)",
    category: "8.4 Statisches Gleichgewicht",
    type: "beispiel",
    front: R`Welche zwei Bedingungen muss ein starrer Körper im <b>statischen Gleichgewicht</b> erfüllen? Ein quaderförmiger Block ($b/a = 4$) wird auf einer schiefen Ebene durch eine Schnur gehalten ($\mu_0 = 0{,}8$). Bis zu welchem Neigungswinkel $\alpha$ gleitet er nicht?`,
    back: R`<b>Bedingungen:</b>
$$\vec F_\text{res} = \sum_i\vec F_i = \vec 0\quad(\text{keine Translation}),\qquad\vec M_\text{res} = \sum_i\vec M_i = \vec 0\quad(\text{keine Rotation})\qquad(8.40)$$
Gilt die erste, ist die zweite unabhängig vom Bezugspunkt.<br><br>
<b>Block</b> (Tipler 12.14, Abb. 8.11): Grenzfall, in dem $\vec N$ gerade noch ein Drehmoment um $S$ ausüben kann, also Auflage nur noch im Punkt $A$. Kräfte: $G$, Seilkraft $Z$, Normalkraft $N$, Haftreibung $R$.
<ol><li>senkrecht: $N = mg\cos\alpha$ (8.41, 8.42)</li>
<li>parallel: $Z = mg\sin\alpha - R$, mit $R = \mu_0N$ (Grenzfall), also $Z = (\tan\alpha - \mu_0)mg\cos\alpha$ (8.43–8.48)</li>
<li>Drehmomente um $S$: $-\frac b2Z + \frac a2N + \frac b2\mu_0N = 0$, also $Z = \left(\frac ab+\mu_0\right)N$ (8.49–8.55)</li></ol>
Gleichsetzen ergibt
$$\tan\alpha = \frac ab + 2\mu_0\quad\Rightarrow\quad\alpha = 61{,}6^\circ\qquad(8.57,\,8.58)$$
Grenzfälle: $a/b\to0$: $\alpha = \arctan(2\mu_0) = 58{,}0^\circ$; $\mu_0\to0$: $\alpha = \arctan(a/b) = 14{,}0^\circ$ (8.59, 8.60).`,
    meta: "Skript: Abschnitt 8.4, Gl. (8.40)–(8.60), Abb. 8.11, S. 194–197",
    explanation: R`<b>Intuition:</b> Ein Körper bleibt nur dann in Ruhe, wenn er weder verschoben noch verdreht wird. Für den Massenpunkt reichte die Kräftebilanz; der ausgedehnte Körper kann zusätzlich kippen. Deshalb braucht man auch die Drehmomentbilanz.<br><br>
<b>Methodik:</b> (1) Alle Kräfte einzeichnen (mit Angriffspunkten!), (2) Kräftebilanz in zwei geschickten Richtungen (hier parallel/senkrecht zur Ebene), (3) Drehmomentbilanz um einen geschickten Punkt (einer, durch den möglichst viele unbekannte Kräfte gehen, oder der Schwerpunkt), (4) Grenzfall der Ungleichung ($R = \mu_0N$) einsetzen.<br><br>
<b>Der Trick mit dem Kipppunkt:</b> Im Grenzfall des Kippens wandert der Angriffspunkt der Normalkraft an die Kante $A$. Dort erzeugt $N$ das grösstmögliche rückdrehende Moment.<br><br>
<b>Abhängigkeiten:</b> Mehr Reibung oder ein flacherer Block (grösseres $a/b$) erlauben steilere Ebenen. Ohne Reibung hält die Schnur den Block nur bis $14^\circ$, weil er dann kippt.`,
    derivation: R`Drehmomente um den Schwerpunkt $S$ (Richtung $\hat z$ aus der Zeichenebene):
<ol class="fc-steps">
<li>$\vec r_Z\times\vec Z = -\dfrac b2Z\,\hat z$<em>Seilkraft mit Hebelarm $b/2$ bezüglich $S$; dreht im negativen Sinn (8.50).</em></li>
<li>$\vec r_A\times\vec N = r_AN\sin\beta\,\hat z = \dfrac a2N\,\hat z$<em>Normalkraft am Kipppunkt $A$; Hebelarm $a/2$ (8.51).</em></li>
<li>$\vec r_A\times\vec R = r_AR\cos\beta\,\hat z = \dfrac b2\mu_0N\,\hat z$<em>Reibung am Kipppunkt, Hebelarm $b/2$ (8.52, 8.53).</em></li>
<li>$-\dfrac b2Z + \dfrac a2N + \dfrac b2\mu_0N = 0\Rightarrow Z = \left(\dfrac ab+\mu_0\right)N$<em>Summe null; $G$ hat kein Moment um $S$ (8.54, 8.55).</em></li>
<li>$(\tan\alpha-\mu_0)mg\cos\alpha = \left(\dfrac ab+\mu_0\right)mg\cos\alpha$<em>Mit der Kräftebilanz gleichsetzen (8.56).</em></li>
<li>$\tan\alpha = \dfrac ab + 2\mu_0 = 0{,}25 + 1{,}6 = 1{,}85\Rightarrow\alpha = 61{,}6^\circ$<em>Zahlen einsetzen (8.57, 8.58).</em></li>
</ol>`,
    example: R`<b>Leiter an der Wand</b> (glatte Wand, Boden mit $\mu_0$): Länge $\ell$, Masse $m$, Winkel $\theta$ zum Boden. Kräfte: Boden $N_B = mg$, Reibung $R$; Wand $N_W$ horizontal. Drehmomente um den Fusspunkt: $N_W\ell\sin\theta = mg\frac\ell2\cos\theta$, also $R = N_W = \frac{mg}{2\tan\theta}\le\mu_0mg$, also $\tan\theta\ge\frac1{2\mu_0}$. Mit $\mu_0 = 0{,}4$: $\theta\ge51^\circ$.`,
    counterexample: R`<b>Nur Kräftebilanz:</b> Aus ihr folgt bloss $Z = (\tan\alpha-\mu_0)mg\cos\alpha$; das Seil könnte den Block scheinbar bei jedem Winkel halten, es müsste nur stärker ziehen. Erst die Drehmomentbilanz zeigt, dass ein zu grosses Seilmoment den Block um die Kante $A$ kippt. Ein hoher, schmaler Block kippt, bevor er gleitet; das sieht man nur mit der Drehmomentbilanz.`,
    pitfalls: R`<ul><li>Die Drehmomentbedingung vergessen.</li>
<li>Den Angriffspunkt der Normalkraft immer in der Mitte annehmen; beim Kippen wandert er an die Kante.</li>
<li>Drehmomente bezüglich verschiedener Punkte mischen.</li>
<li>$R = \mu_0N$ ausserhalb des Grenzfalls verwenden.</li></ul>`
  },

  // ========================================================================
  // 8.5 LINEARE UND DREHBEWEGUNG, TRÄGHEITSTENSOR
  // ========================================================================
  {
    id: "ph8_eulerwinkel",
    title: "Freiheitsgrade des starren Körpers und Eulerwinkel",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "definition",
    front: R`Wie viele <b>Freiheitsgrade</b> hat ein starrer Körper, und wie beschreibt man seine Orientierung mit den <b>Eulerwinkeln</b> $(\varphi,\vartheta,\psi)$? Wie lauten die Drehmatrizen, und warum ist $A^{-1} = A^t$?`,
    back: R`<b>Freiheitsgrade:</b> Massenpunkt 3 (auf einer Fläche 2, auf einer Bahnkurve 1). Starrer Körper <b>6</b>: 3 Ortskoordinaten eines Punktes $O'$ (meist der Schwerpunkt) und 3 Winkel. Bewegung = Translation von $O'$ plus Rotation um $O'$. Mit festem $O'$ bleiben 3, mit fester Achse 1 Freiheitsgrad.<br><br>
<b>Eulerwinkel</b> (Konvention nach Goldstein, Abb. 8.12):
<ol><li>Drehung um $z$ um $\varphi$: $x,y\to\xi,\eta$</li>
<li>Drehung um die $\xi$-Achse (Knotenlinie) um $\vartheta$: $\eta,\zeta\to\eta',\zeta'$</li>
<li>Drehung um $\zeta' = z'$ um $\psi$: $\xi,\eta'\to x',y'$</li></ol>
$$R_\varphi = \begin{pmatrix}\cos\varphi&\sin\varphi&0\\-\sin\varphi&\cos\varphi&0\\0&0&1\end{pmatrix},\quad R_\vartheta = \begin{pmatrix}1&0&0\\0&\cos\vartheta&\sin\vartheta\\0&-\sin\vartheta&\cos\vartheta\end{pmatrix},\quad R_\psi\ \text{wie}\ R_\varphi\qquad(8.61\text{–}8.63)$$
$$\vec r\,' = R_\psi R_\vartheta R_\varphi\,\vec r =: A\vec r,\qquad\vec r = A^{-1}\vec r\,',\qquad A^{-1} = R_\varphi^{-1}R_\vartheta^{-1}R_\psi^{-1} = A^t\qquad(8.64\text{–}8.67)$$`,
    meta: "Skript: Abschnitte 8.5.1–8.5.2, Gl. (8.61)–(8.67), Abb. 8.12, S. 197–200",
    explanation: R`<b>Intuition:</b> Um ein Flugzeug zu beschreiben, braucht man seine Position (3 Zahlen) und seine Lage: Richtung der Nase (2 Winkel) und die Drehung um die Längsachse (1 Winkel). Die Eulerwinkel sind eine systematische Wahl dieser drei Winkel.<br><br>
<b>Warum genau drei hintereinander?</b> Drehungen sind nicht vertauschbar (Kap. 2.5.4). Man muss eine feste Reihenfolge vereinbaren; verschiedene Bücher benutzen verschiedene Konventionen. Hier: erst um $z$, dann um die Knotenlinie, dann um die neue $z'$-Achse.<br><br>
<b>Orthogonale Matrizen:</b> Drehmatrizen erhalten Längen und Winkel; ihre Spalten sind orthonormal. Deshalb ist die Inverse die Transponierte, und die Umkehrung ist einfach. Die Inverse eines Produkts kehrt die Reihenfolge um.<br><br>
<b>Zusammenhang:</b> Die Eulerwinkel werden bei der Kreiselbewegung (Kap. 13) zu den natürlichen Koordinaten: $\dot\varphi$ ist die Präzession, $\dot\vartheta$ die Nutation, $\dot\psi$ die Eigendrehung.`,
    derivation: R`Warum $A^{-1} = A^t$:
<ol class="fc-steps">
<li>$R_\varphi^tR_\varphi = \begin{pmatrix}\cos^2+\sin^2&0&0\\0&\sin^2+\cos^2&0\\0&0&1\end{pmatrix} = \mathbb 1$<em>Für jede einzelne Drehmatrix nachrechnen: Sie ist orthogonal.</em></li>
<li>$R^{-1} = R^t$ für $R_\varphi$, $R_\vartheta$, $R_\psi$<em>Inverse einer orthogonalen Matrix ist die Transponierte.</em></li>
<li>$A^{-1} = (R_\psi R_\vartheta R_\varphi)^{-1} = R_\varphi^{-1}R_\vartheta^{-1}R_\psi^{-1}$<em>Inverse eines Produkts in umgekehrter Reihenfolge (8.67).</em></li>
<li>$= R_\varphi^tR_\vartheta^tR_\psi^t = (R_\psi R_\vartheta R_\varphi)^t = A^t$<em>Transponierte eines Produkts ebenfalls in umgekehrter Reihenfolge.</em></li>
</ol>`,
    example: R`<b>Nur $\varphi = 90^\circ$</b> ($\vartheta = \psi = 0$): $A = R_\varphi$, also $\vec e_x = (1,0,0)\mapsto(0,-1,0)$ in Körperkoordinaten: Der Punkt, der im Labor auf der $x$-Achse liegt, liegt im um $90^\circ$ gedrehten Körpersystem auf der negativen $y'$-Achse.<br><br>
<b>Freiheitsgrade zählen:</b> Eine Tür (feste Achse): 1. Ein Ball im Raum (als starrer Körper): 6. Ein Kreisel mit fester Spitze: 3.`,
    counterexample: R`<b>Kardanische Blockade („Gimbal Lock“):</b> Für $\vartheta = 0$ fallen die erste und die dritte Drehachse zusammen; $\varphi$ und $\psi$ sind dann nicht mehr unabhängig (nur $\varphi+\psi$ zählt). Die Eulerwinkel sind an dieser Stelle singulär; deshalb benutzt man in der Raumfahrt und Computergrafik oft Quaternionen.`,
    pitfalls: R`<ul><li>Die Reihenfolge der Drehungen vertauschen.</li>
<li>Konventionen verschiedener Bücher mischen (z. B. $x$-Konvention vs. $y$-Konvention).</li>
<li>$A^{-1}$ als $R_\psi^{-1}R_\vartheta^{-1}R_\varphi^{-1}$ schreiben (falsche Reihenfolge).</li></ul>`
  },
  {
    id: "ph8_translation_rotation_energie",
    title: "Impuls, Drehimpuls und Energie des starren Körpers: Translation plus Rotation",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "herleitung",
    front: R`Wie lauten Impuls, Drehimpuls und kinetische Energie eines starren Körpers? Zeige mit $\vec v_i = \vec v_S + \vec\omega\times\vec r_i^{\,*}$, dass $T = \tfrac12Mv_S^2 + T^*$ mit $T^* = \tfrac12\sum m_i(\vec\omega\times\vec r_i^{\,*})^2$.`,
    back: R`<b>Translation:</b> Bei reiner Translation sind alle $\vec v_i = \vec v_S$:
$$\vec p = \sum\Delta m_i\vec v_i = M\vec v_S = \vec v_S\int_V\rho\,dV,\qquad\frac{d\vec p}{dt} = \vec F_\text{ext},\qquad T = \tfrac12Mv_S^2\qquad(8.68\text{–}8.72)$$
<b>Rotation:</b> Drehimpuls (wie Kap. 6.4.4)
$$\vec L = \vec L^* + \vec r_S\times\vec p_S,\qquad\frac{d\vec L}{dt} = \vec M_\text{ext}\qquad(8.73,\,8.74)$$
<b>Allgemeine Bewegung:</b> $\vec v_i = \vec v_S + \vec v_i^{\,*} = \vec v_S + (\vec\omega\times\vec r_i^{\,*})$ (8.75):
$$T = \tfrac12\sum m_i\{\vec v_S+\vec\omega\times\vec r_i^{\,*}\}^2 = \tfrac12v_S^2\underbrace{\sum m_i}_{M} + \vec v_S\cdot\Big(\vec\omega\times\underbrace{\sum m_i\vec r_i^{\,*}}_{=\vec 0}\Big) + \tfrac12\sum m_i(\vec\omega\times\vec r_i^{\,*})^2\qquad(8.76,\,8.77)$$
$$T = \tfrac12Mv_S^2 + \tfrac12\sum_im_i(\vec\omega\times\vec r_i^{\,*})^2 =: T_S + T^*\qquad(8.78)$$`,
    meta: "Skript: Abschnitte 8.5.3–8.5.4, Gl. (8.68)–(8.78), Abb. 8.13–8.14, S. 200–203",
    explanation: R`<b>Intuition:</b> Ein fliegender, sich drehender Diskus hat zwei Energiekonten: Er fliegt als Ganzes (Translationsenergie des Schwerpunkts), und er dreht sich um den Schwerpunkt (Rotationsenergie). Der Mischterm verschwindet, weil der Schwerpunkt im Schwerpunktsystem im Ursprung liegt.<br><br>
<b>Die Rolle von $\vec\omega\times\vec r^{\,*}$:</b> Beim starren Körper ist die Relativbewegung zum Schwerpunkt keine beliebige Bewegung, sondern eine reine Drehung mit gemeinsamem $\vec\omega$. Darum lässt sich $T^*$ durch eine einzige Körpergrösse (Trägheitsmoment bzw. Trägheitstensor) und $\omega$ ausdrücken (8.5.5).<br><br>
<b>Bewegungsgleichungen:</b> Translation: $M\dot{\vec v}_S = \vec F_\text{ext}$; Rotation: $\dot{\vec L}^* = \vec M_\text{ext}^*$ (Drehmoment um den Schwerpunkt). Zusammen 6 Gleichungen für 6 Freiheitsgrade.<br><br>
<b>Zusammenhang:</b> Direkte Übertragung der Zerlegungen aus Kap. 6.4 (Impuls, Energie, Drehimpuls) auf den starren Körper.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v_i = \vec v_S + \vec\omega\times\vec r_i^{\,*}$<em>Starrer Körper: Relativgeschwindigkeit zum Schwerpunkt ist eine Drehung (8.75).</em></li>
<li>$v_i^2 = v_S^2 + 2\,\vec v_S\cdot(\vec\omega\times\vec r_i^{\,*}) + (\vec\omega\times\vec r_i^{\,*})^2$<em>Quadrat ausmultiplizieren.</em></li>
<li>$\sum m_i\,\vec v_S\cdot(\vec\omega\times\vec r_i^{\,*}) = \vec v_S\cdot\left(\vec\omega\times\sum m_i\vec r_i^{\,*}\right)$<em>Konstante Vektoren aus der Summe ziehen; Kreuzprodukt ist linear (8.77).</em></li>
<li>$\sum m_i\vec r_i^{\,*} = \vec 0$<em>Definition des Schwerpunkts (6.14).</em></li>
<li>$T = \tfrac12Mv_S^2 + \tfrac12\sum m_i(\vec\omega\times\vec r_i^{\,*})^2$<em>Mischterm fällt weg (8.78).</em></li>
</ol>`,
    example: R`<b>Rollender Zylinder</b> (Masse $M$, Radius $R$, $v_S = \omega R$): $T_S = \tfrac12Mv_S^2$, $T^* = \tfrac12\cdot\tfrac12MR^2\cdot\omega^2 = \tfrac14Mv_S^2$. Gesamt $T = \tfrac34Mv_S^2$; ein Drittel der Energie steckt in der Rotation.<br>
Mit $M = 2\,\text{kg}$, $v_S = 3\,\text{m/s}$: $T_S = 9\,\text{J}$, $T^* = 4{,}5\,\text{J}$.`,
    counterexample: R`<b>Zerlegung um einen anderen Punkt:</b> Zerlegt man bezüglich eines beliebigen Punkts auf dem Körper (nicht Schwerpunkt), bleibt ein Mischterm. Ausnahme: der momentan ruhende Kontaktpunkt eines rollenden Körpers. Dort ist $T = \tfrac12J_P\omega^2$ mit dem Trägheitsmoment um den Kontaktpunkt (Steiner) und ohne Translationsanteil.`,
    pitfalls: R`<ul><li>Rotationsenergie bei rollenden Körpern vergessen.</li>
<li>$T^*$ mit dem Abstand vom Ursprung statt vom Schwerpunkt berechnen.</li>
<li>Annehmen, Translation und Rotation seien bei starren Körpern immer gekoppelt; sie sind es nur durch Zwangsbedingungen (z. B. Rollen).</li></ul>`
  },
  {
    id: "ph8_traegheitsmoment",
    title: "Trägheitsmoment J_A = ∫ r⊥² dm bei Rotation um eine feste Achse",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "herleitung",
    front: R`Ein starrer Körper rotiert mit $\vec\omega$ um eine <b>raumfeste Achse</b> $A$. Leite $L_\parallel = J_A\,\omega$ her und definiere das <b>Trägheitsmoment</b> $J_A$. Warum hängt es von Lage und Richtung der Achse ab?`,
    back: R`Massgebend sind die <b>senkrechten Abstände</b> $r_{i\perp}$ von der Achse (Abb. 8.15). Drehimpuls eines Massenelements in Achsrichtung:
$$\vec L_{\parallel i} = \vec r_{i\perp}\times\vec p_i = \Delta m_i\{\vec r_{i\perp}\times(\vec\omega\times\vec r_{i\perp})\} = \Delta m_i\,r_{i\perp}^2\,\vec\omega\qquad(8.79\text{–}8.81)$$
Summe:
$$L_\parallel = \Big(\sum_i\Delta m_i\,r_{i\perp}^2\Big)\omega = J_A\,\omega\qquad(8.82,\,8.83)$$
<b>Trägheitsmoment</b> bezüglich der Achse $A$:
$$J_A = \sum_i\Delta m_i\,r_{i\perp}^2\;\longrightarrow\;J_A = \int r_\perp^2\,dm = \int_Vr_\perp^2\rho\,dV\qquad(8.84,\,8.85)$$
Einheit $\text{kg m}^2$. Es enthält ausschliesslich Eigenschaften des Körpers <i>und</i> der Achse; da nur $r_\perp$ zählt, hängt $J_A$ von Ort und Lage der Drehachse ab.`,
    meta: "Skript: Abschnitt 8.5.5.1, Gl. (8.79)–(8.85), Abb. 8.15, S. 204–205",
    explanation: R`<b>Intuition:</b> Das Trägheitsmoment ist die „Masse der Drehbewegung“: Es misst, wie schwer sich ein Körper in Drehung versetzen lässt. Entscheidend ist nicht nur, wie viel Masse da ist, sondern <b>wie weit sie von der Achse entfernt</b> ist, und zwar quadratisch.<br><br>
<b>Abhängigkeit $\propto r_\perp^2$:</b> Doppelter Abstand ergibt vierfaches Trägheitsmoment. Deshalb ist ein Ring ($MR^2$) doppelt so träge wie eine gleich schwere Scheibe ($\tfrac12MR^2$), und ein Seiltänzer verwendet eine lange Stange.<br><br>
<b>Herkunft von $r^2$:</b> Ein Faktor $r$ kommt von der Geschwindigkeit ($v = \omega r$), der zweite vom Hebelarm im Drehimpuls ($L = r\cdot p$). Dasselbe gilt für die Energie: $\tfrac12mv^2 = \tfrac12mr^2\omega^2$.<br><br>
<b>Zusammenhang:</b> Für eine feste Achse ist $\vec L_\parallel\parallel\vec\omega$. Bei freier Rotation ist $\vec L$ im Allgemeinen <i>nicht</i> parallel zu $\vec\omega$; dann braucht man den Trägheitstensor (Kap. 13).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v_i = \vec\omega\times\vec r_{i\perp}$<em>Jedes Massenelement läuft auf einem Kreis um die Achse; nur der senkrechte Abstand zählt.</em></li>
<li>$\vec L_{\parallel i} = \Delta m_i\,\vec r_{i\perp}\times(\vec\omega\times\vec r_{i\perp})$<em>Drehimpulskomponente entlang der Achse (8.80).</em></li>
<li>$= \Delta m_i\left[\vec\omega\,(\vec r_{i\perp}\cdot\vec r_{i\perp}) - \vec r_{i\perp}(\vec r_{i\perp}\cdot\vec\omega)\right]$<em>BAC-CAB-Regel.</em></li>
<li>$= \Delta m_i\,r_{i\perp}^2\,\vec\omega$<em>$\vec r_{i\perp}\perp\vec\omega$, zweiter Term null (8.81).</em></li>
<li>$L_\parallel = \omega\sum\Delta m_ir_{i\perp}^2 = J_A\omega$<em>$\omega$ ist für alle Elemente gleich und lässt sich ausklammern (8.82–8.84).</em></li>
</ol>`,
    example: R`<b>Hantel:</b> Zwei Massen je $1\,\text{kg}$ im Abstand $0{,}5\,\text{m}$ von der Achse (masselose Stange): $J = 2\cdot1\cdot0{,}25 = 0{,}5\,\text{kg m}^2$. Bei $\omega = 4\,\text{s}^{-1}$: $L = 2\,\text{kg m}^2/\text{s}$.<br>
Dieselben Massen auf $0{,}25\,\text{m}$ geschoben: $J = 0{,}125\,\text{kg m}^2$, ein Viertel. Bei gleichem $L$ (Drehimpulserhaltung) steigt $\omega$ auf $16\,\text{s}^{-1}$.`,
    counterexample: R`<b>„Trägheitsmoment eines Körpers“ ohne Achse ist bedeutungslos:</b> Ein Stab hat um seine Mittelachse quer $\frac1{12}M\ell^2$, um ein Ende $\frac13M\ell^2$, um seine Längsachse fast null. Dieselbe Masse, drei völlig verschiedene Trägheitsmomente.`,
    pitfalls: R`<ul><li>Den Abstand vom Ursprung $r$ statt des senkrechten Abstands $r_\perp$ zur Achse verwenden.</li>
<li>Mit $r$ statt $r^2$ gewichten.</li>
<li>Ein Trägheitsmoment ohne Angabe der Achse verwenden.</li></ul>`
  },
  {
    id: "ph8_rotationsenergie_drehmoment",
    title: "Rotationsenergie T* = ½Jω² und Bewegungsgleichung M = J dω/dt",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "gesetz",
    front: R`Leite für die Rotation um eine feste Achse die <b>Rotationsenergie</b> $T^* = \tfrac12J_A\omega^2$ und die <b>Bewegungsgleichung</b> $M_\parallel = J_A\dot\omega$ her. Welche Kraftkomponenten tragen zum Drehmoment bei? Stelle die Analogie zur Translation (Tab. 8.1) mit Arbeit und Leistung auf.`,
    back: R`<b>Energie</b> (im Schwerpunktsystem, $\vec r^{\,*}\equiv\vec r$, $\vec r\perp\vec\omega$):
$$T^* = \tfrac12\sum m_i(\vec\omega\times\vec r_i)^2 = \tfrac12\omega^2\sum m_ir_i^2 = \tfrac12J_A\omega^2\qquad(8.86\text{–}8.88)$$
<b>Drehmoment</b> auf ein Element:
$$\vec M_i = \frac{d\vec L_i}{dt} = \Delta m_i\Big(\vec r_{i\perp}\times\frac{d\vec v_i}{dt} + \underbrace{\frac{d\vec r_{i\perp}}{dt}\times\vec v_i}_{=\vec 0}\Big) = \vec r_{i\perp}\times\vec F_t\qquad(8.89,\,8.90)$$
Nur die <b>Transversalkomponente</b> $\vec F_t$ trägt bei; Radialkomponente und Komponente parallel zur Achse werden von den Lagern aufgenommen.
$$M_\parallel = \sum\Delta m_ir_{i\perp}^2\frac{d\omega}{dt} = J_A\frac{d\omega}{dt} = J_A\ddot\varphi\qquad(8.91\text{–}8.93)$$
<b>Tabelle 8.1:</b> $x\leftrightarrow\varphi$, $v\leftrightarrow\omega$, $a\leftrightarrow\alpha$, $m\leftrightarrow J_A$, $p = mv\leftrightarrow L = J_A\omega$, $F\leftrightarrow M$, $F = \dot p\leftrightarrow M = \dot L$, $W = \int\vec F\cdot d\vec r\leftrightarrow W = \int M\,d\varphi$, $T = \tfrac12mv^2\leftrightarrow T^* = \tfrac12J_A\omega^2$, $P = \vec F\cdot\vec v\leftrightarrow P = M\omega$.`,
    meta: "Skript: Abschnitte 8.5.5.2–8.5.6, Gl. (8.86)–(8.93), Tab. 8.1, S. 205–207",
    explanation: R`<b>Intuition:</b> Das Drehmoment spielt für die Drehung dieselbe Rolle wie die Kraft für die Translation; das Trägheitsmoment die der Masse. Ein grosses $J$ bedeutet: bei gleichem Drehmoment langsam auf Touren kommen, aber auch viel gespeicherte Energie (Schwungrad).<br><br>
<b>Lagerkräfte:</b> Bei einer festen Achse „frisst“ das Lager alle Kraftkomponenten, die die Achse verschieben oder kippen wollen. Für die Drehung zählt nur die tangentiale Komponente mal Hebelarm.<br><br>
<b>Arbeit und Leistung:</b> Beim Drehen um $d\varphi$ legt der Angriffspunkt den Weg $r\,d\varphi$ zurück; die Arbeit ist $F_tr\,d\varphi = M\,d\varphi$. Die Leistung ist $M\omega$, die bekannte Formel für Motoren (Drehmoment mal Drehzahl).<br><br>
<b>Abhängigkeiten:</b> $T^*\propto\omega^2$ und $\propto J$; bei gleichem $L$: $T^* = \frac{L^2}{2J}$, also wächst die Energie beim Verkleinern von $J$ (Pirouette).`,
    derivation: R`<ol class="fc-steps">
<li>$(\vec\omega\times\vec r_i)^2 = \omega^2r_i^2$ für $\vec r_i\perp\vec\omega$<em>Betrag des Kreuzprodukts senkrechter Vektoren (8.87).</em></li>
<li>$T^* = \tfrac12\omega^2\sum m_ir_i^2 = \tfrac12J_A\omega^2$<em>Gemeinsames $\omega^2$ ausklammern (8.88).</em></li>
<li>$\dfrac{d}{dt}(\vec r_{i\perp}\times\Delta m_i\vec v_i)$, mit $\dot{\vec r}_{i\perp}\parallel\vec v_i$<em>Der zweite Term der Produktregel verschwindet (8.89).</em></li>
<li>$\dfrac{dL_{\parallel i}}{dt} = \Delta m_ir_{i\perp}^2\dfrac{d\omega}{dt}$<em>Aus $L_{\parallel i} = \Delta m_ir_{i\perp}^2\omega$ mit festem $r_{i\perp}$ (8.91).</em></li>
<li>$M_\parallel = J_A\dot\omega$<em>Summe über alle Elemente (8.92, 8.93).</em></li>
<li>$dW = M\,d\varphi\Rightarrow P = M\dfrac{d\varphi}{dt} = M\omega$<em>Arbeit und Leistung der Rotation (Tab. 8.1).</em></li>
</ol>`,
    example: R`<b>Schwungrad</b> (Vollscheibe, $M = 100\,\text{kg}$, $R = 0{,}5\,\text{m}$, $J = \tfrac12MR^2 = 12{,}5\,\text{kg m}^2$) bei $3000\,\text{U/min}$ ($\omega = 314\,\text{s}^{-1}$): $T^* = \tfrac12\cdot12{,}5\cdot314^2\,\text{J} = 617\,\text{kJ}$.<br>
Antrieb mit $M = 50\,\text{N m}$: $\alpha = 4\,\text{s}^{-2}$, nach $78{,}5\,\text{s}$ auf Drehzahl.<br>
<b>Automotor:</b> $200\,\text{N m}$ bei $4000\,\text{U/min}$ ($419\,\text{s}^{-1}$): $P = 84\,\text{kW}$.`,
    counterexample: R`<b>$M = J\dot\omega$ bei veränderlichem $J$:</b> Eine Eiskunstläuferin zieht die Arme an, ohne äusseres Drehmoment. $M = J\dot\omega$ würde $\dot\omega = 0$ liefern, aber $\omega$ steigt. Korrekt ist $M = \frac{d}{dt}(J\omega) = \dot J\omega + J\dot\omega = 0$.`,
    pitfalls: R`<ul><li>N m (Drehmoment) und J (Energie) verwechseln.</li>
<li>Die Lagerkräfte als Ursache von Drehmomenten zählen.</li>
<li>$P = M\omega$ mit $\omega$ in U/min statt rad/s.</li>
<li>$M = J\dot\omega$ bei veränderlichem $J$ anwenden.</li></ul>`
  },
  {
    id: "ph8_traegheitsmomente_zylinder_kugel",
    title: "Trägheitsmomente: Hohlzylinder MR², Vollzylinder ½MR², Kugel ⅖MR²",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "herleitung",
    front: R`Berechne die Trägheitsmomente (homogen, Achse durch den Schwerpunkt) eines <b>dünnwandigen Zylinders</b>, eines <b>Vollzylinders</b> und einer <b>Vollkugel</b> (mit Zylinderkoordinaten). Warum sind sie verschieden, obwohl Masse und Radius gleich sind?`,
    back: R`<b>Dünnwandiger Zylinder</b> (alle Masse im Abstand $R$):
$$J_z = \int R^2\,dm = MR^2\qquad(8.94,\,8.95)$$
<b>Vollzylinder</b> (Höhe $h$), $dV = r_\perp\,dr_\perp\,d\varphi\,dz$:
$$J_z = \rho\int_0^hdz\int_0^{2\pi}d\varphi\int_0^Rr_\perp^2\,r_\perp\,dr_\perp = \rho\,h\cdot2\pi\cdot\tfrac14R^4 = \tfrac12\underbrace{\rho\pi R^2h}_{M}R^2 = \tfrac12MR^2\qquad(8.96,\,8.97)$$
<b>Vollkugel:</b> ebenfalls Zylinderkoordinaten (sie liefern den senkrechten Abstand zur $z$-Achse direkt), aber Grenze $0\le r_\perp\le\sqrt{R^2-z^2}$ (8.98):
$$J_z = 2\pi\rho\int_{-R}^{R}\tfrac14(R^2-z^2)^2dz = \tfrac{8}{15}\pi\rho R^5 = \tfrac25\underbrace{\rho\tfrac43\pi R^3}_{M}R^2 = \tfrac25MR^2\qquad(8.99,\,8.100)$$`,
    meta: "Skript: Abschnitt 8.5.7, Punkte 1–3, Gl. (8.94)–(8.100), Abb. 8.16a–c, S. 207–209",
    explanation: R`<b>Intuition:</b> Gleiche Masse, gleicher Radius, aber verschiedene Verteilung: Beim Hohlzylinder sitzt alles ganz aussen ($J = MR^2$, maximal möglich), beim Vollzylinder auch innen ($\tfrac12$), bei der Kugel noch mehr in der Nähe der Achse (die „Pole“ liegen auf der Achse, $\tfrac25$).<br><br>
<b>Faustregel:</b> $J = kMR^2$ mit einem Formfaktor $k\le1$, der angibt, wie weit aussen die Masse im Mittel liegt. Der „Trägheitsradius“ $R_g = \sqrt{J/M}$ ist der Abstand, in dem man die ganze Masse konzentrieren müsste: Hohlzylinder $R$, Vollzylinder $0{,}71R$, Kugel $0{,}63R$.<br><br>
<b>Unabhängigkeit von der Länge:</b> Für Zylinder um die Längsachse hängt $J$ nicht von der Höhe $h$ ab, nur von $M$ und $R$.<br><br>
<b>Zusammenhang:</b> Beim Rollen ($v = \omega R$) entscheidet $k$, wie viel Energie in die Rotation geht. Eine Kugel ($k = 0{,}4$) rollt eine schiefe Ebene schneller hinunter als ein Vollzylinder ($k = 0{,}5$) und dieser schneller als ein Hohlzylinder ($k = 1$), unabhängig von Masse und Radius (8.5.9).`,
    derivation: R`Vollkugel Schritt für Schritt:
<ol class="fc-steps">
<li>$J_z = \rho\displaystyle\int_{-R}^{R}dz\int_0^{2\pi}d\varphi\int_0^{\sqrt{R^2-z^2}}r_\perp^3\,dr_\perp$<em>Zylinderkoordinaten, Kugel in Scheiben der Höhe $dz$ zerlegt; jede Scheibe hat Radius $\sqrt{R^2-z^2}$ (8.98).</em></li>
<li>$\displaystyle\int_0^{\sqrt{R^2-z^2}}r_\perp^3dr_\perp = \tfrac14(R^2-z^2)^2$<em>Innerstes Integral: Trägheitsmoment einer Scheibe pro Dichte und Höhe.</em></li>
<li>$J_z = 2\pi\rho\cdot\tfrac14\displaystyle\int_{-R}^R(R^4-2R^2z^2+z^4)dz = \tfrac12\pi\rho\left[R^4z-\tfrac23R^2z^3+\tfrac15z^5\right]_{-R}^{R}$<em>Ausmultiplizieren und integrieren.</em></li>
<li>$= \tfrac12\pi\rho\cdot2R^5\left(1-\tfrac23+\tfrac15\right) = \pi\rho R^5\cdot\tfrac{8}{15}$<em>Ungerade Funktion: Grenzen symmetrisch, Faktor 2.</em></li>
<li>$J_z = \tfrac{8}{15}\pi\rho R^5 = \tfrac25\left(\tfrac43\pi R^3\rho\right)R^2 = \tfrac25MR^2$<em>Mit der Kugelmasse ausdrücken (8.99, 8.100).</em></li>
</ol>`,
    example: R`<b>Erde</b> als homogene Kugel: $J = \tfrac25\cdot5{,}97\cdot10^{24}\cdot(6{,}371\cdot10^{6})^2 = 9{,}7\cdot10^{37}\,\text{kg m}^2$. Gemessen sind $8{,}0\cdot10^{37}$, also $J = 0{,}33\,MR^2$: Die Erde ist zum Zentrum hin dichter.<br>
<b>Vergleich</b> bei $M = 1\,\text{kg}$, $R = 0{,}1\,\text{m}$: Hohlzylinder $0{,}010$, Vollzylinder $0{,}005$, Kugel $0{,}004\,\text{kg m}^2$.`,
    counterexample: R`<b>Hohlkugel</b> (dünne Schale): $J = \tfrac23MR^2$, nicht $MR^2$. Obwohl alle Masse im Abstand $R$ vom Mittelpunkt liegt, ist der senkrechte Abstand zur Drehachse bei den Polen klein. Für $J$ zählt der Abstand zur <i>Achse</i>, nicht zum Mittelpunkt.`,
    pitfalls: R`<ul><li>Bei der Kugel Kugelkoordinaten mit $r^2$ statt $r_\perp^2 = r^2\sin^2\vartheta$ verwenden.</li>
<li>Den Jacobi-Faktor $r_\perp$ im Volumenelement vergessen; das Ergebnis hat dann nicht einmal die Einheit $\text{kg m}^2$.</li>
<li>Hohlkugel ($\tfrac23$) und Vollkugel ($\tfrac25$) verwechseln.</li></ul>`
  },
  {
    id: "ph8_traegheitsmomente_quader_stab",
    title: "Trägheitsmomente: Quader M(a²+b²)/12 und dünner Stab Mℓ²/12",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "herleitung",
    front: R`Berechne das Trägheitsmoment eines homogenen <b>Quaders</b> (Kanten $a$, $b$, $c$) um die $z$-Achse durch den Schwerpunkt und eines <b>dünnen Stabs</b> der Länge $\ell$ um eine Querachse durch seine Mitte.`,
    back: R`<b>Quader</b> ($r_\perp^2 = x^2+y^2$):
$$J_z = \rho\int_{-c/2}^{c/2}dz\int_{-b/2}^{b/2}dy\int_{-a/2}^{a/2}(x^2+y^2)\,dx = \tfrac1{12}\underbrace{abc}_{V}\,(a^2+b^2)\,\rho\qquad(8.101)$$
$$J_z = \frac{M}{12}(a^2+b^2)\qquad(8.102)$$
<b>Dünner Stab</b> (Querdimensionen vernachlässigbar), mit Längendichte $\lambda = dm/dx$:
$$J_z = \int_{-\ell/2}^{\ell/2}x^2\lambda\,dx = \tfrac1{12}\lambda\ell^3 = \tfrac1{12}M\ell^2\qquad(8.103,\,8.104)$$
Die Kante $c$ in Achsrichtung spielt keine Rolle.`,
    meta: "Skript: Abschnitt 8.5.7, Punkte 4–5, Gl. (8.101)–(8.104), Abb. 8.16d–e, S. 209–210",
    explanation: R`<b>Intuition:</b> Beim Quader trägt jede Richtung senkrecht zur Achse unabhängig bei: die Ausdehnung in $x$ mit $a^2/12$, die in $y$ mit $b^2/12$ (pro Masse). Der Stab ist der Grenzfall $b\to0$ eines flachen Quaders.<br><br>
<b>Warum $1/12$?</b> Der Mittelwert von $x^2$ über ein Intervall $[-\ell/2,\ell/2]$ ist $\ell^2/12$. Das Trägheitsmoment ist $M$ mal das mittlere Abstandsquadrat.<br><br>
<b>Abhängigkeiten:</b> $J\propto\ell^2$: Doppelte Stablänge (bei gleicher Masse) ergibt vierfaches $J$; bei gleicher Dichte (also doppelte Masse) achtfaches. Die Kante entlang der Achse ($c$) zählt gar nicht, weil sie den Abstand zur Achse nicht ändert.<br><br>
<b>Zusammenhang:</b> Um ein Stabende (Steiner, 8.5.8): $\frac1{12}M\ell^2 + M\frac{\ell^2}4 = \frac13M\ell^2$, die Grundlage für das physikalische Pendel und die fallende Stange.`,
    derivation: R`Quader Schritt für Schritt:
<ol class="fc-steps">
<li>$\displaystyle\int_{-a/2}^{a/2}(x^2+y^2)\,dx = \left[\tfrac13x^3+y^2x\right]_{-a/2}^{a/2} = \tfrac1{12}a^3 + ay^2$<em>Innerstes Integral über $x$ bei festem $y$.</em></li>
<li>$\displaystyle\int_{-b/2}^{b/2}\left(\tfrac1{12}a^3+ay^2\right)dy = \tfrac1{12}a^3b + \tfrac1{12}ab^3 = \tfrac1{12}ab(a^2+b^2)$<em>Über $y$: $\int y^2dy = b^3/12$.</em></li>
<li>$\displaystyle\int_{-c/2}^{c/2}dz = c$<em>Über $z$: liefert nur die Länge $c$.</em></li>
<li>$J_z = \tfrac1{12}abc(a^2+b^2)\rho = \tfrac{M}{12}(a^2+b^2)$<em>Mit $M = \rho abc$ (8.101, 8.102).</em></li>
<li>Stab: $J = \lambda\left[\tfrac13x^3\right]_{-\ell/2}^{\ell/2} = \tfrac{\lambda\ell^3}{12} = \tfrac{M\ell^2}{12}$<em>Mit $M = \lambda\ell$ (8.103, 8.104).</em></li>
</ol>`,
    example: R`<b>Tür</b> ($M = 20\,\text{kg}$, Breite $0{,}9\,\text{m}$, Dicke $4\,\text{cm}$) um eine Achse durch den Schwerpunkt parallel zur Angel: $J = \frac{20}{12}(0{,}81+0{,}0016)\,\text{kg m}^2 = 1{,}35\,\text{kg m}^2$; um die Angel (Steiner): $1{,}35 + 20\cdot0{,}45^2 = 5{,}4\,\text{kg m}^2$, das Vierfache.<br>
<b>Meterstab</b> ($0{,}2\,\text{kg}$): Mitte $0{,}0167$, Ende $0{,}0667\,\text{kg m}^2$.`,
    counterexample: R`<b>Würfel:</b> $J = \frac{M}{12}(a^2+a^2) = \frac16Ma^2$ für <i>jede</i> Achse durch den Mittelpunkt, auch für die Raumdiagonale. Ein Würfel verhält sich bezüglich der Trägheit wie eine Kugel (alle drei Hauptträgheitsmomente gleich), obwohl er nicht kugelförmig ist. Formgleichheit und Trägheitsgleichheit sind verschiedene Dinge (Kap. 13).`,
    pitfalls: R`<ul><li>Die Kante entlang der Achse in die Formel einsetzen.</li>
<li>$\frac13M\ell^2$ (Ende) und $\frac1{12}M\ell^2$ (Mitte) verwechseln.</li>
<li>Bei Integration über $x^2$ die Grenzen $0$ bis $\ell$ statt $-\ell/2$ bis $\ell/2$ nehmen (das ergibt das Trägheitsmoment um das Ende).</li></ul>`
  },
  {
    id: "ph8_steiner",
    title: "Satz von Steiner: J_z' = J_z + M a²",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "herleitung",
    front: R`Leite den <b>Steiner’schen Satz</b> für das Trägheitsmoment um eine Achse $z'$ her, die im Abstand $a$ parallel zur Schwerpunktsachse $z$ liegt. Warum fällt der Mischterm weg, und was folgt für die Wahl der Drehachse?`,
    back: R`Mit $\vec r\,' = \vec a + \vec r$ (Abb. 8.17; $\vec a$, $\vec r$ jeweils senkrecht zur Achse gemessen):
$$J_{z'} = \int r'^2\,dm = \int(\vec a+\vec r)^2dm = a^2\underbrace{\int dm}_{=M} + 2\vec a\cdot\underbrace{\int\vec r\,dm}_{=\vec 0} + \underbrace{\int r^2\,dm}_{=J_z}\qquad(8.105)$$
Der mittlere Term verschwindet wegen der Definition des Schwerpunkts. <b>Steiner’scher Satz:</b>
$$J_{z'} = J_z + Ma^2\qquad(8.106)$$
Unter allen parallelen Achsen hat die Schwerpunktsachse das <b>kleinste</b> Trägheitsmoment.`,
    meta: "Skript: Abschnitt 8.5.8, Gl. (8.105)–(8.106), Abb. 8.17, S. 210",
    explanation: R`<b>Intuition:</b> Dreht sich ein Körper um eine Achse, die nicht durch seinen Schwerpunkt geht, bewegt sich der Schwerpunkt selbst auf einem Kreis mit Radius $a$; dazu kommt die Drehung des Körpers um den Schwerpunkt. Steiner zerlegt genau so: $Ma^2$ (Schwerpunkt als Punktmasse) plus $J_z$ (Eigenrotation).<br><br>
<b>Energieanalogie:</b> $\tfrac12J_{z'}\omega^2 = \tfrac12M(a\omega)^2 + \tfrac12J_z\omega^2$, also Translationsenergie des Schwerpunkts plus Rotationsenergie um ihn (8.5.4).<br><br>
<b>Abhängigkeit:</b> Das Trägheitsmoment wächst quadratisch mit dem Achsenabstand. Darum ist es leichter, einen Stab um seine Mitte zu drehen als um ein Ende (Faktor 4).<br><br>
<b>Zusammenhang:</b> Unverzichtbar für Pendel (Drehung um den Aufhängepunkt), rollende Körper (Drehung um den Kontaktpunkt), das Maxwell-Rad (8.5.9.2) und Kurbeln. Achtung: Steiner gilt nur für die Schwerpunktsachse als Ausgangspunkt.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r\,' = \vec a + \vec r$<em>Senkrechter Abstand eines Massenelements von der neuen Achse = Achsenabstand plus Abstand von der Schwerpunktsachse (als Vektoren in der Ebene senkrecht zur Achse).</em></li>
<li>$r'^2 = a^2 + 2\,\vec a\cdot\vec r + r^2$<em>Quadrat des Betrags.</em></li>
<li>$J_{z'} = a^2\int dm + 2\vec a\cdot\int\vec r\,dm + \int r^2\,dm$<em>$\vec a$ ist für alle Elemente gleich und kommt vor das Integral (8.105).</em></li>
<li>$\int\vec r\,dm = M\vec r_S = \vec 0$<em>$\vec r$ wird von der Schwerpunktsachse aus gemessen: Der Schwerpunkt liegt im Ursprung.</em></li>
<li>$J_{z'} = Ma^2 + J_z$<em>Steiner (8.106).</em></li>
</ol>`,
    example: R`<b>Stab um sein Ende:</b> $J = \frac1{12}M\ell^2 + M\left(\frac\ell2\right)^2 = \frac13M\ell^2$.<br>
<b>Vollzylinder um eine Mantellinie</b> (rollender Zylinder, Kontaktpunkt): $J = \tfrac12MR^2 + MR^2 = \tfrac32MR^2$.<br>
<b>Kugel um einen Tangentenpunkt:</b> $\tfrac25MR^2+MR^2 = \tfrac75MR^2$.`,
    counterexample: R`<b>Von einer Nicht-Schwerpunktsachse aus anwenden:</b> Bekannt sei $J_A = \frac13M\ell^2$ (Stabende). Für die andere Stabende-Achse ($a = \ell$) ergäbe „Steiner“ $\frac13M\ell^2 + M\ell^2 = \frac43M\ell^2$; richtig ist wieder $\frac13M\ell^2$. Man muss immer über den Schwerpunkt gehen: $J_B = J_S + M(\ell/2)^2$.`,
    pitfalls: R`<ul><li>Steiner zwischen zwei Achsen anwenden, von denen keine durch den Schwerpunkt geht.</li>
<li>Nicht parallele Achsen mit Steiner verbinden.</li>
<li>$Ma^2$ subtrahieren statt addieren (das Trägheitsmoment um den Schwerpunkt ist das kleinste).</li></ul>`
  },
  {
    id: "ph8_rollen",
    title: "Rollende Körper: Rollbedingung v_S = Rω und Rollen als Drehung um den Kontaktpunkt",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "konzept",
    front: R`Wie lautet die <b>Rollbedingung</b>? Unterscheide reines Gleiten, reine Rotation und Rollen. Warum ruht der Kontaktpunkt beim Rollen, und wie schnell ist der oberste Punkt? Wie schnell rollt ein Körper eine schiefe Ebene hinunter?`,
    back: R`<b>Rollbedingung</b> (Abb. 8.18):
$$v_S = R\omega = R\dot\varphi,\qquad a_S = R\ddot\varphi = R\alpha\qquad(8.107,\,8.108)$$
Je nach Reibung am Boden (Abb. 8.19–8.21):
<ul><li><b>Reine Translation:</b> Alle Punkte haben $v_0$, die Kugel rutscht.</li>
<li><b>Reine Rotation:</b> Drehung auf der Stelle; oben $+\omega R$, unten $-\omega R$.</li>
<li><b>Rollen</b> = Überlagerung mit $v = R\omega$: Am Berührungspunkt ist $v_x = 0$ (er ruht), oben $v_x = 2\omega R$. Man kann das Rollen auch als Drehung um den momentan ruhenden Kontaktpunkt mit $\omega$ betrachten; dieser Drehpunkt bewegt sich mit $v_S$.</li></ul>
<b>Schiefe Ebene</b> (Neigung $\theta$, Trägheitsmoment $J_S = kmR^2$), aus Energie oder Drehmoment um den Kontaktpunkt:
$$a_S = \frac{g\sin\theta}{1+J_S/(mR^2)} = \frac{g\sin\theta}{1+k}$$`,
    meta: "Skript: Abschnitt 8.5.9, Gl. (8.107)–(8.108), Abb. 8.18–8.21, S. 211–212",
    explanation: R`<b>Intuition:</b> Beim Rollen „berührt“ jeder Punkt des Umfangs kurz den Boden, ohne zu rutschen, also mit Geschwindigkeit null relativ zum Boden. Der oberste Punkt ist doppelt so schnell wie die Achse (Speichen oben am Fahrrad sehen im Foto verwischt aus, unten scharf).<br><br>
<b>Warum langsamer als Gleiten?</b> Die potentielle Energie verteilt sich auf Translation und Rotation: $mgh = \tfrac12mv^2(1+k)$. Je grösser $k$ (Masse weit aussen), desto mehr Energie geht in die Rotation, desto langsamer die Translation.<br><br>
<b>Rennen auf der schiefen Ebene:</b> Kugel ($k = 0{,}4$) vor Vollzylinder ($0{,}5$) vor Hohlzylinder ($1$), unabhängig von Masse und Radius.<br><br>
<b>Reibung:</b> Beim reinen Rollen ist die Reibungskraft eine <i>Haft</i>reibung am ruhenden Kontaktpunkt. Sie leistet keine Arbeit, aber sie sorgt für das Drehmoment, das die Rotation antreibt.`,
    derivation: R`Rollen auf der schiefen Ebene mit dem Drehmoment um den Kontaktpunkt $P$:
<ol class="fc-steps">
<li>$J_P = J_S + mR^2 = (k+1)mR^2$<em>Steiner: momentane Drehachse durch den ruhenden Kontaktpunkt.</em></li>
<li>$M_P = mgR\sin\theta$<em>Nur die Gewichtskraft hat ein Moment um $P$; Normal- und Reibungskraft greifen in $P$ an.</em></li>
<li>$J_P\alpha = mgR\sin\theta\;\Rightarrow\;\alpha = \dfrac{g\sin\theta}{(1+k)R}$<em>Bewegungsgleichung der Drehung um $P$.</em></li>
<li>$a_S = R\alpha = \dfrac{g\sin\theta}{1+k}$<em>Rollbedingung (8.108).</em></li>
<li>Energie-Kontrolle: $mgh = \tfrac12mv^2 + \tfrac12kmR^2\dfrac{v^2}{R^2}\Rightarrow v^2 = \dfrac{2gh}{1+k}$<em>Für konstante Beschleunigung gilt $v^2 = 2a_Ss$ mit $h = s\sin\theta$: übereinstimmend.</em></li>
</ol>`,
    example: R`Schiefe Ebene $\theta = 30^\circ$ ($g\sin\theta = 4{,}9\,\text{m/s}^2$):<br>
gleitend ohne Reibung $4{,}9$; Kugel $\frac{4{,}9}{1{,}4} = 3{,}5$; Vollzylinder $3{,}27$; Hohlzylinder $2{,}45\,\text{m/s}^2$.<br>
Nach $2\,\text{m}$ Weg ($h = 1\,\text{m}$): Kugel $v = \sqrt{2\cdot9{,}81/1{,}4} = 3{,}74\,\text{m/s}$, Hohlzylinder $3{,}13\,\text{m/s}$.`,
    counterexample: R`<b>Zu steile Ebene oder zu wenig Haftreibung:</b> Die nötige Haftreibung ist $F_R = \frac{k}{1+k}mg\sin\theta$. Ist sie grösser als $\mu_0mg\cos\theta$, also $\tan\theta>\frac{1+k}{k}\mu_0$, rutscht der Körper zusätzlich, und die Rollbedingung gilt nicht mehr (z. B. Kugel auf Eis).`,
    pitfalls: R`<ul><li>Rollbedingung ohne Prüfung annehmen.</li>
<li>Glauben, die Reibung beim Rollen verbrauche Energie (Haftreibung am ruhenden Punkt leistet keine Arbeit).</li>
<li>Die Rotationsenergie vergessen und $a = g\sin\theta$ verwenden.</li>
<li>Die Geschwindigkeit des obersten Punkts mit $v_S$ verwechseln ($2v_S$).</li></ul>`
  },
  {
    id: "ph8_rollreibung",
    title: "Rollreibung: μ_R = m_R / r",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "herleitung",
    front: R`Woher kommt die <b>Rollreibung</b>? Leite für ein nicht angetriebenes Rad mit konstanter Geschwindigkeit $F = \mu_RF_N$ mit $\mu_R = m_R/r$ her. Warum ist Rollreibung so viel kleiner als Gleitreibung?`,
    back: R`Gleichgewicht bei konstanter Geschwindigkeit (Abb. 8.22):
$$F = F_R\le\mu_0F_N,\qquad F_N = F_G\qquad(8.109,\,8.110)$$
($F$: Kraft, mit der das Fahrzeug das Rad vorwärts schiebt.) Entscheidend: Die Normalkraft $F_N$ greift um die Strecke $m_R$ <b>vor</b> der Lotlinie durch die Achse an (Verformung von Rad und Unterlage). Sie erzeugt ein bremsendes Moment:
$$M = F_Nm_R - rF_R\qquad(8.111)$$
Nicht angetriebenes Rad, Achsreibung vernachlässigt: $M = 0$, also
$$F = F_R = \frac{m_R}{r}F_N = \mu_RF_N,\qquad\mu_R = \frac{m_R}{r}\qquad(8.112,\,8.113)$$
$\mu_R$ hängt vom Radradius $r$ ab und ist typisch $0{,}001\dots0{,}01$, viel kleiner als $\mu$ oder $\mu_0$. Tab. 3.3: Hebelarm $m_R = 0{,}42\,\text{mm}$ (Stahl/Stahl), $0{,}9\,\text{mm}$ (Holz).`,
    meta: "Skript: Abschnitt 8.5.9.1, Gl. (8.109)–(8.113), Abb. 8.22, Tab. 3.3, S. 211–213",
    explanation: R`<b>Intuition:</b> Ein Rad und die Strasse verformen sich am Kontakt leicht. Vor dem Kontaktpunkt wird das Material zusammengedrückt, hinter ihm entspannt es sich (bei realen Materialien mit Verlust). Dadurch ist der Druck vorne grösser, und die Resultierende der Normalkraft sitzt etwas vor der Achse: Sie bremst wie ein kleiner Hebel.<br><br>
<b>Abhängigkeiten:</b> $\mu_R\propto m_R/r$. Grössere Räder rollen leichter (alte Kutschen, Mountainbikes über Hindernisse). Harte Materialien (Stahlrad auf Schiene) haben kleines $m_R$: Darum ist die Bahn energetisch so effizient.<br><br>
<b>Vergleich:</b> Gleitreibung $\mu\sim0{,}3$, Rollreibung $\mu_R\sim0{,}001$ (Bahn) bis $0{,}01$ (Autoreifen): ein Faktor 30–300. Das ist der Grund für die Erfindung des Rades.<br><br>
<b>Zusammenhang:</b> Rollreibung ist eine nichtkonservative Kraft und wandelt Energie in Wärme um (Reifenerwärmung). Achtung: Die Haftreibung $F_R$ am Kontaktpunkt muss davon unterschieden werden (8.5.9).`,
    derivation: R`<ol class="fc-steps">
<li>$F = F_R$, $F_N = F_G$<em>Konstante Geschwindigkeit: horizontales und vertikales Kräftegleichgewicht (8.109, 8.110).</em></li>
<li>$M = F_N\,m_R - r\,F_R$<em>Drehmomente um die Radachse: $F_N$ mit Hebelarm $m_R$ (Verschiebung des Angriffspunkts), $F_R$ mit Hebelarm $r$ (8.111).</em></li>
<li>$M = 0$<em>Nicht angetriebenes Rad, keine Achsreibung, konstante Drehzahl.</em></li>
<li>$F_R = \dfrac{m_R}{r}F_N$<em>Auflösen (8.112).</em></li>
<li>$\mu_R := \dfrac{m_R}{r}$<em>Rollreibungszahl; dimensionslos, abhängig vom Radius (8.113).</em></li>
</ol>`,
    example: R`<b>Eisenbahnwagen</b> ($m = 40\,\text{t}$, Raddurchmesser $1\,\text{m}$, $m_R = 0{,}42\,\text{mm}$): $\mu_R = 0{,}42/500 = 8{,}4\cdot10^{-4}$, Rollwiderstand $F = 8{,}4\cdot10^{-4}\cdot392\,\text{kN} = 330\,\text{N}$. Gleitend ($\mu = 0{,}15$) wären es $59\,\text{kN}$, 180-mal mehr.<br>
<b>Auto</b> (Reifen, $\mu_R\approx0{,}01$, $1500\,\text{kg}$): $147\,\text{N}$; bei $25\,\text{m/s}$ eine Leistung von $3{,}7\,\text{kW}$.`,
    counterexample: R`<b>Weiche Unterlage:</b> Auf Sand verformt sich der Boden stark, $m_R$ wird gross, und Rollen kann mühsamer werden als erwartet. Breite Ballonreifen verkleinern die Einsinktiefe und damit $m_R$. Die Konstanz von $\mu_R$ ist eine grobe Näherung.`,
    pitfalls: R`<ul><li>Rollreibung und Haftreibung am Kontaktpunkt verwechseln.</li>
<li>$m_R$ (Länge, Hebelarm) als Masse lesen.</li>
<li>Annehmen, $\mu_R$ sei unabhängig vom Radius; konstant ist eher der Hebelarm $m_R$.</li></ul>`
  },
  {
    id: "ph8_laufrolle",
    title: "Laufrolle mit Zugkraft und mit angehängter Masse",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "beispiel",
    front: R`Eine Laufrolle (Masse $m_1$, Radius $R$, $J = \tfrac12m_1R^2$) dreht sich reibungsfrei um eine feste Achse. (1) Ein Seil wird mit konstanter Kraft $F_Z$ abgezogen. (2) Am Seil hängt eine Masse $m_2$. Berechne jeweils $\ddot\varphi$ und erkläre, warum (2) nicht einfach (1) mit $F_Z = m_2g$ ist.`,
    back: R`<b>1. Beispiel</b> (Abb. 8.23): Schwerpunkt ruht, Lagerkräfte $2\vec F_L = -(m_1\vec g+\vec F_Z)$ (8.114, 8.115). Rotation:
$$J\ddot\varphi = F_ZR\;\Rightarrow\;\ddot\varphi = \frac{F_ZR}{J} = \frac{2F_Z}{m_1R},\qquad\omega(t) = \frac{2F_Z}{m_1R}t+\omega_0\qquad(8.116\text{–}8.120)$$
$\omega$ wächst linear mit der Zeit.<br><br>
<b>2. Beispiel</b> (Abb. 8.24): Seilkraft $S$.
$$m_2a = m_2g - S,\qquad J\ddot\varphi = SR\;\Rightarrow\;S = \frac{J\ddot\varphi}{R}\qquad(8.121\text{–}8.123)$$
Ohne Schlupf $a = R\ddot\varphi$ (8.125):
$$\ddot\varphi = \frac{m_2gR}{J+m_2R^2} = \frac{m_2g}{\left(\tfrac12m_1+m_2\right)R}\qquad(8.127,\,8.128)$$
Immer kleiner als in (1) mit $F_Z = m_2g$: Es ist eine zusätzliche Trägheit ($m_2$) beteiligt, und der Gewinn an potentieller Energie teilt sich auf kinetische Energie von $m_2$ und Rotationsenergie auf. Nur für $m_2\ll m_1$ stimmen beide überein.`,
    meta: "Skript: Abschnitt 8.5.9.2, Beispiele 1–2, Gl. (8.114)–(8.128), Abb. 8.23–8.24, S. 213–216",
    explanation: R`<b>Intuition:</b> Hängt eine Masse am Seil, ist das Seil weniger gespannt als $m_2g$, weil die Masse selbst beschleunigt (sonst würde sie nicht fallen). Die Seilkraft liegt irgendwo zwischen $0$ (freier Fall) und $m_2g$ (Rolle blockiert).<br><br>
<b>Effektive Masse:</b> $a = \frac{m_2g}{m_2+J/R^2}$. Die Rolle wirkt wie eine zusätzliche träge Masse $J/R^2 = \tfrac12m_1$, die mitbeschleunigt werden muss, aber nicht von der Schwerkraft gezogen wird.<br><br>
<b>Abhängigkeiten:</b> Schwere Rolle ($m_1\gg m_2$): $a\to\frac{2m_2}{m_1}g\to0$; leichte Rolle ($m_1\to0$): $a\to g$ (freier Fall).<br><br>
<b>Zusammenhang:</b> Das ist das Rotationsanalogon zur Atwood’schen Fallmaschine. Dasselbe Prinzip (zusätzliche Trägheit durch drehende Teile) erklärt, warum ein Auto mit schweren Felgen schlechter beschleunigt.`,
    derivation: R`<ol class="fc-steps">
<li>$m_2a = m_2g - S$<em>Newton II für die hängende Masse, Achse nach unten (8.121).</em></li>
<li>$J\ddot\varphi = SR$<em>Drallsatz für die Rolle: Das Seil greift tangential im Abstand $R$ an (8.122).</em></li>
<li>$a = R\ddot\varphi$<em>Seil rollt ohne Schlupf ab (8.125).</em></li>
<li>$m_2R\ddot\varphi = m_2g - \dfrac{J\ddot\varphi}{R}$<em>$S$ aus Schritt 2 und $a$ aus Schritt 3 in Schritt 1 (8.126).</em></li>
<li>$\ddot\varphi = \dfrac{m_2gR}{J+m_2R^2}$<em>Nach $\ddot\varphi$ auflösen (8.127).</em></li>
<li>$J = \tfrac12m_1R^2\Rightarrow\ddot\varphi = \dfrac{m_2g}{(\tfrac12m_1+m_2)R}$, $S = \dfrac{\tfrac12m_1m_2g}{\tfrac12m_1+m_2}$<em>Für die Vollscheibe (8.128); die Seilkraft ist kleiner als $m_2g$.</em></li>
</ol>`,
    example: R`$m_1 = 2\,\text{kg}$, $R = 0{,}1\,\text{m}$, $m_2 = 1\,\text{kg}$:<br>
(2): $a = R\ddot\varphi = \frac{1\cdot9{,}81}{1+1}\,\text{m/s}^2 = 4{,}9\,\text{m/s}^2$, Seilkraft $S = 4{,}9\,\text{N}$.<br>
(1) mit $F_Z = 9{,}81\,\text{N}$: $\ddot\varphi = \frac{2\cdot9{,}81}{2\cdot0{,}1} = 98\,\text{s}^{-2}$, also Seilbeschleunigung $9{,}8\,\text{m/s}^2$, doppelt so viel.`,
    counterexample: R`<b>Masselose Rolle:</b> Mit $m_1\to0$ ergibt (8.128) $a = g$ und $S = 0$: Die Masse fällt frei, die Rolle dreht sich einfach mit. In Lehrbuchaufgaben mit „masseloser Rolle“ übernimmt die Rolle deshalb nur die Umlenkung, nicht die Trägheit.`,
    pitfalls: R`<ul><li>Die Seilkraft mit $m_2g$ gleichsetzen.</li>
<li>Die Rotationsträgheit der Rolle vergessen.</li>
<li>$J = m_1R^2$ (Ring) statt $\tfrac12m_1R^2$ (Scheibe) verwenden.</li>
<li>Die Vorzeichen in Newton II für $m_2$ und im Drallsatz nicht konsistent wählen.</li></ul>`
  },
  {
    id: "ph8_maxwellrad",
    title: "Maxwell-Rad (Jo-Jo): a = g/(1 + R²/2r²)",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "beispiel",
    front: R`Ein Rad (Radius $R$, Masse $m$) sitzt auf einer dünnen, masselosen Achse (Radius $r\ll R$); um die Achse sind zwei Fäden gewickelt, die an der Decke befestigt sind. Mit welcher <b>Beschleunigung</b> sinkt das Rad, und wie teilt sich die Energie auf?`,
    back: R`Die momentane Drehachse liegt am Rand der Achse, wo der Faden abläuft, also im Abstand $r$ von der Radachse. Steiner:
$$J = \tfrac12mR^2 + mr^2\qquad(8.129)$$
Drehmoment der Schwerkraft um diese Achse $M = mgr$:
$$a = r\ddot\varphi = r\frac MJ = \frac{mgr^2}{\tfrac12mR^2+mr^2} = \frac{g}{1+R^2/(2r^2)}\qquad(8.130)$$
Konstante Beschleunigung: $v = at$, $s = \tfrac12at^2$, Fallzeit $t = \sqrt{2h/a}$, $v = \sqrt{2ah}$ (8.131–8.134). Energie:
$$T_z = \tfrac12mv^2 = mah = mgh\frac{2r^2}{R^2+2r^2},\qquad T^* = m(g-a)h = mgh\frac{R^2}{R^2+2r^2}\qquad(8.135,\,8.136)$$
Für $r\ll R$ geht fast alles in Rotationsenergie. Unten rotiert das Rad weiter (Drehimpuls), wickelt den Faden wieder auf und steigt; ohne Reibung erreicht es wieder die Anfangshöhe.`,
    meta: "Skript: Abschnitt 8.5.9.2, Beispiel 3, Gl. (8.129)–(8.136), Abb. 8.25, S. 216–218",
    explanation: R`<b>Intuition:</b> Der Faden wirkt wie ein „Rollen an einer senkrechten Wand“ mit winzigem Radius $r$. Wegen $v = r\omega$ muss das Rad sehr schnell rotieren, um ein bisschen zu sinken, und die Rotation „schluckt“ fast die ganze Energie. Das Rad sinkt deshalb wie in Zeitlupe.<br><br>
<b>Abhängigkeiten:</b> $a/g = \frac{1}{1+R^2/(2r^2)}\approx\frac{2r^2}{R^2}$ für $r\ll R$. Halber Achsradius ergibt etwa ein Viertel der Beschleunigung. Die Masse kürzt sich heraus.<br><br>
<b>Umkehrpunkt:</b> Unten kehrt sich die Bewegungsrichtung um, die Drehrichtung aber nicht. Der Faden wird kurz ruckartig belastet (Impulsumkehr, grosser Kraftstoss), und das Rad klettert wieder hoch.<br><br>
<b>Zusammenhang:</b> Identisch mit dem Jo-Jo und mit „Rollen auf einer schiefen Ebene“ mit $\theta = 90^\circ$ und dem kleinen Radius $r$: $a = \frac{g}{1+J_S/(mr^2)}$ (vgl. 8.5.9).`,
    derivation: R`<ol class="fc-steps">
<li>$J = J_S + mr^2 = \tfrac12mR^2 + mr^2$<em>Steiner: Drehachse durch den Abwickelpunkt im Abstand $r$ (8.129).</em></li>
<li>$J\ddot\varphi = mgr$<em>Drallsatz um diese Achse; die Fadenkraft greift dort an und liefert kein Moment.</em></li>
<li>$a = r\ddot\varphi = \dfrac{mgr^2}{\tfrac12mR^2+mr^2}$<em>Abwickelbedingung: Der Schwerpunkt sinkt mit $r\ddot\varphi$ (8.130).</em></li>
<li>$a = \dfrac{g}{1+R^2/(2r^2)}$<em>Durch $mr^2$ kürzen.</em></li>
<li>$T_z = \tfrac12mv^2 = \tfrac12m\cdot2ah = mah$<em>Translationsenergie nach der Fallhöhe $h$ (8.135).</em></li>
<li>$T^* = mgh - mah = m(g-a)h$<em>Energieerhaltung: Rest steckt in der Rotation (8.136).</em></li>
</ol>`,
    example: R`$R = 6\,\text{cm}$, $r = 0{,}5\,\text{cm}$: $\frac{R^2}{2r^2} = 72$, also $a = \frac{9{,}81}{73}\,\text{m/s}^2 = 0{,}134\,\text{m/s}^2$.<br>
Fallhöhe $h = 1\,\text{m}$: $t = \sqrt{2/0{,}134}\,\text{s} = 3{,}9\,\text{s}$ (frei: $0{,}45\,\text{s}$), $v = 0{,}52\,\text{m/s}$.<br>
Energieanteil Translation: $\frac{2r^2}{R^2+2r^2} = 1{,}4\,\%$; Rotation $98{,}6\,\%$.`,
    counterexample: R`<b>Dicke Achse</b> ($r\to R$, z. B. eine Fadenspule, die vom Aussenrand abläuft): $a = \frac{g}{1+1/2} = \frac23g$. Die „Zeitlupe“ verschwindet; der Effekt beruht auf $r\ll R$.`,
    pitfalls: R`<ul><li>Das Trägheitsmoment um die Radachse statt um den Abwickelpunkt verwenden (ohne $mr^2$). Das macht bei $r\ll R$ fast keinen Unterschied, ist aber konzeptionell falsch.</li>
<li>$a = g$ annehmen, weil „nur die Schwerkraft zieht“.</li>
<li>Glauben, die Drehrichtung kehre sich am unteren Umkehrpunkt um.</li></ul>`
  },
  {
    id: "ph8_billardkugel",
    title: "Billardkugel mit Rückwärtsdrall: Stoss unterhalb der Mitte",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "beispiel",
    front: R`Eine ruhende Billardkugel (Masse $m$, Radius $R$) wird horizontal $2R/3$ <b>unterhalb</b> ihres Mittelpunkts angestossen und erhält die Geschwindigkeit $v_0$. Berechne (1) die Anfangswinkelgeschwindigkeit $\omega_0$, (2) wann die Kugel zu rollen beginnt, (3) die Anfangsenergie.`,
    back: R`Kraftstoss $\int F_y\,dt = \Delta p_y = mv_0$ (8.137). Da er $2R/3$ vom Schwerpunkt angreift, entsteht ein Drehmomentstoss:
$$\Delta L_x = \int M_x\,dt = \tfrac23R\int F_y\,dt = \tfrac23Rmv_0\qquad(8.138\text{–}8.141)$$
Rückwärtsdrehung (entgegen dem Rollsinn).<br>
<b>(1)</b> $\Delta L_x = J\omega_0 = \tfrac25mR^2\omega_0\Rightarrow\omega_0 = \dfrac{5v_0}{3R}$ (8.142–8.144).<br>
<b>(2)</b> Reibungskraft $F_R = \mu_Rmg$ entgegen der Bewegung (8.145); ihr Drehmoment $M_R = F_RR$ bremst die Rückwärtsdrehung, die sich bei $t_1 = J\omega_0/M_R$ umkehrt. Rollen ($v_y = -\omega_xR$, 8.148) bei
$$t_2 = \frac{16}{21}\frac{v_0}{\mu_Rg}\qquad(8.153)$$
Dann ist $v_y = v_0 - \frac{F_R}{m}t_2 = \frac5{21}v_0$.<br>
<b>(3)</b> $E_0 = \tfrac12mv_0^2 + \tfrac12J\omega_0^2 = \tfrac12mv_0^2 + \tfrac12\cdot\tfrac25mR^2\cdot\tfrac{25v_0^2}{9R^2} = \tfrac{19}{18}mv_0^2$ (8.154–8.157).`,
    meta: "Skript: Abschnitt 8.5.9.2, Beispiel 4 (Tipler 84), Gl. (8.137)–(8.157), Abb. 8.26, S. 218–220",
    explanation: R`<b>Intuition:</b> Ein Stoss unterhalb der Mitte gibt der Kugel Vorwärtsgeschwindigkeit <i>und</i> Rückwärtsdrall („Rückläufer“). Zunächst rutscht die Kugel; die Reibung am Tuch bremst die Translation und dreht den Drall allmählich um, bis die Kugel schliesslich normal rollt, mit deutlich kleinerer Geschwindigkeit.<br><br>
<b>Wo muss man stossen, damit sie sofort rollt?</b> Rollen verlangt $\omega_0R = v_0$ im richtigen Sinn: $\frac{h\,mv_0}{\frac25mR^2} = \frac{v_0}{R}\Rightarrow h = \frac25R$ <i>oberhalb</i> der Mitte. Stösst man dort, rutscht die Kugel gar nicht, und es geht keine Energie durch Reibung verloren.<br><br>
<b>Energieverlust:</b> Von $\frac{19}{18}mv_0^2$ bleibt nach Rollbeginn $\frac12m\left(\frac5{21}v_0\right)^2\cdot\frac75 = \frac{5}{126}mv_0^2$, nur etwa 4 %. Der Rest wird durch Gleitreibung in Wärme umgewandelt.<br><br>
<b>Hinweis:</b> Das Skript schreibt die bremsende Kraft als $F_R = \mu_Rmg$. Physikalisch ist es während der Rutschphase <b>Gleit</b>reibung am Tuch, nicht die viel kleinere Rollreibung aus 8.5.9.1; $\mu_R$ steht hier also für einen Gleitreibungskoeffizienten.`,
    derivation: R`Bedingung für den Rollbeginn (Achsen wie im Skript, $y$ vorwärts):
<ol class="fc-steps">
<li>$v_y(t) = v_0 - \dfrac{F_R}{m}t$<em>Reibung bremst die Translation gleichmässig (8.145).</em></li>
<li>$\omega_x(t) = \omega_0 - \dfrac{M_R}{J}t$, $\dfrac{M_R}{J} = \dfrac{F_RR}{\frac25mR^2} = \dfrac{5F_R}{2mR}$<em>Das Reibungsmoment ist der Rückwärtsdrehung entgegengesetzt (8.146, 8.147).</em></li>
<li>$v_y(t_2) = -\omega_x(t_2)R$<em>Rollbedingung mit Vorzeichen: Vorwärtsrollen entspricht negativem $\omega_x$ (8.148).</em></li>
<li>$v_0 - \dfrac{F_R}{m}t_2 = -\dfrac53v_0 + \dfrac{5F_R}{2m}t_2$<em>Einsetzen mit $\omega_0R = \frac53v_0$ (8.149–8.151).</em></li>
<li>$\dfrac83v_0 = \dfrac72\dfrac{F_R}{m}t_2\Rightarrow t_2 = \dfrac{16}{21}\dfrac{mv_0}{F_R} = \dfrac{16}{21}\dfrac{v_0}{\mu_Rg}$<em>Auflösen (8.152, 8.153).</em></li>
<li>$v_y(t_2) = v_0 - \dfrac{16}{21}v_0 = \dfrac{5}{21}v_0$<em>Endgeschwindigkeit beim Rollen.</em></li>
</ol>`,
    example: R`$v_0 = 2\,\text{m/s}$, $R = 2{,}86\,\text{cm}$, $\mu_R = 0{,}2$: $\omega_0 = \frac{5\cdot2}{3\cdot0{,}0286}\,\text{s}^{-1} = 117\,\text{s}^{-1}$ (rückwärts), Rollbeginn nach $t_2 = \frac{16}{21}\cdot\frac{2}{1{,}96}\,\text{s} = 0{,}78\,\text{s}$ mit $v = 0{,}48\,\text{m/s}$.<br>
Die Kugel hat sich dabei nach $v_0t_2 - \frac12\frac{F_R}{m}t_2^2 = 1{,}56 - 0{,}60 = 0{,}96\,\text{m}$ „gefangen“.`,
    counterexample: R`<b>Stoss genau auf die Mitte:</b> Kein Drehimpuls, die Kugel rutscht zunächst, die Reibung baut Vorwärtsrotation auf: Rollen bei $v = \frac57v_0$ (Energie bleibt zu $\frac57$ erhalten). Der Rückwärtsdrall-Stoss ist also nur eine von mehreren Varianten; der Fall „$v = \frac5{21}v_0$“ gilt nur für $h = -\frac23R$.`,
    pitfalls: R`<ul><li>Vorzeichen des Dralls (rückwärts) und der Rollbedingung verwechseln.</li>
<li>Das Trägheitsmoment der Hohlkugel ($\frac23$) statt der Vollkugel ($\frac25$) verwenden.</li>
<li>Den Kraftstoss im Schwerpunkt ansetzen und das Drehmoment vergessen.</li>
<li>Annehmen, die Kugel rolle sofort.</li></ul>`
  },

  // ========================================================================
  // ERGÄNZUNGEN: typische Prüfungsaufgaben und Brücken zu Physik II
  // ========================================================================
  {
    id: "ph8_drehimpuls_stoss",
    title: "Drehimpuls bei Stössen mit starren Körpern: Kugel trifft drehbar gelagerten Stab, Pirouette",
    category: "8.5 Lineare und Drehbewegung, Trägheitstensor",
    type: "beispiel",
    front: R`Ein Stab (Masse $M = 1\,\text{kg}$, Länge $\ell = 1\,\text{m}$) hängt drehbar an seinem oberen Ende. Ein Geschoss ($m = 10\,\text{g}$, $v = 100\,\text{m/s}$) trifft horizontal das untere Ende und bleibt stecken. Berechne die Winkelgeschwindigkeit direkt nach dem Stoss, den Energieverlust und den maximalen Ausschlag. Warum ist der Impuls nicht erhalten?`,
    back: R`<b>Erhalten:</b> Drehimpuls um die Lagerachse (die Lagerkraft hat kein Moment um diese Achse; Gewicht wirkt während des kurzen Stosses nicht merklich). <b>Nicht erhalten:</b> Impuls (das Lager stösst zurück) und kinetische Energie (inelastisch).
$$L = mv\ell = J\omega,\qquad J = \tfrac13M\ell^2+m\ell^2$$
$$\omega = \frac{mv\ell}{\tfrac13M\ell^2+m\ell^2} = \frac{1}{0{,}3433}\,\text{s}^{-1} = 2{,}91\,\text{s}^{-1}$$
Energie: vorher $\tfrac12mv^2 = 50\,\text{J}$, nachher $\tfrac12J\omega^2 = \frac{L^2}{2J} = 1{,}46\,\text{J}$ (97 % dissipiert).<br>
<b>Aufschwung</b> (Energiesatz, Schwerpunkte von Stab und Geschoss steigen):
$$\tfrac12J\omega^2 = \left(M\tfrac\ell2+m\ell\right)g(1-\cos\varphi_\text{max})\;\Rightarrow\;\cos\varphi_\text{max} = 0{,}709,\ \varphi_\text{max} = 45^\circ$$`,
    meta: "Ergänzung (typische Prüfungsaufgabe); baut auf Abschnitten 5.2 (Drehimpulserhaltung), 8.5.5–8.5.8 (Trägheitsmoment, Steiner) und 8.5.9.2 (Billardkugel, Drehmomentstoss) auf",
    explanation: R`<b>Intuition:</b> Der Drehpunkt wird während des Stosses festgehalten; deshalb ist der Impuls nicht erhalten, wohl aber der Drehimpuls um genau diesen Punkt. Das ist das Rotationsgegenstück zum ballistischen Pendel.<br><br>
<b>Wahl des Bezugspunkts:</b> Immer den Punkt nehmen, an dem unbekannte (Lager-)Kräfte angreifen; dann fallen sie aus der Drehimpulsbilanz heraus.<br><br>
<b>Pirouette:</b> Ohne äusseres Drehmoment ist $L = J\omega$ konstant. Zieht die Läuferin die Arme an ($J$ von $4$ auf $1{,}6\,\text{kg m}^2$), steigt $\omega$ um den Faktor $2{,}5$, und die Rotationsenergie $L^2/(2J)$ steigt ebenfalls um $2{,}5$. Die zusätzliche Energie stammt aus der Muskelarbeit beim Heranziehen gegen die Zentrifugalwirkung.<br><br>
<b>Zusammenhang:</b> Billardkugel (8.5.9.2): Drehmomentstoss $\Delta L = \int M\,dt$; „Sweet Spot“ eines Schlägers (Stosszentrum): Trifft man dort, verschwindet die Lagerkraft im Griff.`,
    derivation: R`<ol class="fc-steps">
<li>$L_\text{vor} = \ell\cdot mv$<em>Drehimpuls des Geschosses um die Achse: Hebelarm $\ell$ (horizontaler Schuss, Treffpunkt im Abstand $\ell$).</em></li>
<li>$J = \tfrac13M\ell^2+m\ell^2 = (0{,}3333+0{,}01)\,\text{kg m}^2$<em>Stab um ein Ende (Steiner) plus Geschoss als Punktmasse.</em></li>
<li>$\omega = L/J = 2{,}91\,\text{s}^{-1}$<em>Drehimpulserhaltung um die Achse.</em></li>
<li>$E_\text{rot} = \tfrac12J\omega^2 = 1{,}46\,\text{J}$<em>Nur 3 % der Geschossenergie.</em></li>
<li>$1-\cos\varphi_\text{max} = \dfrac{1{,}46}{(0{,}5+0{,}01)\cdot9{,}81} = 0{,}291$<em>Energiesatz: Schwerpunkt des Stabes steigt um $\tfrac\ell2(1-\cos\varphi)$, Geschoss um $\ell(1-\cos\varphi)$.</em></li>
</ol>`,
    example: R`Impulsbilanz zur Kontrolle: Vorher $mv = 1\,\text{kg m/s}$; nachher bewegen sich die Schwerpunkte mit $\omega\tfrac\ell2$ (Stab) und $\omega\ell$ (Geschoss): $1\cdot1{,}46+0{,}01\cdot2{,}91 = 1{,}49\,\text{kg m/s}$. Das Lager hat also einen Kraftstoss von $0{,}49\,\text{N s}$ in Schussrichtung geliefert.<br>
<b>Pirouette:</b> $1\,\text{U/s}\to2{,}5\,\text{U/s}$.`,
    counterexample: R`<b>Freier Stab</b> (im Weltraum, nicht gelagert): Dann sind Impuls <i>und</i> Drehimpuls (um den gemeinsamen Schwerpunkt) erhalten; der Stab fliegt davon und dreht sich dabei. Die Lösung oben gilt nur mit Lager. Wer beim gelagerten Stab den Impulssatz verwendet, erhält ein falsches $\omega$.`,
    pitfalls: R`<ul><li>Impulserhaltung trotz Lager ansetzen.</li>
<li>Das Trägheitsmoment um den Schwerpunkt ($\tfrac1{12}M\ell^2$) statt um die Achse ($\tfrac13M\ell^2$) verwenden.</li>
<li>Beim Aufschwung die Höhe des Stabschwerpunkts mit $\ell$ statt $\ell/2$ rechnen.</li></ul>`
  }
];
})();
