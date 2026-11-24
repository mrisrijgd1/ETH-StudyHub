/* ==========================================================================
   PHYSIK I – KAPITEL 13 (Zusatzabschnitt): Kreiselbewegung
   Trägheitstensor, Rotationsenergie, Trägheitsellipsoid, Hauptachsen,
   Kreiseltypen, Drehimpuls und Tangentialebene, freie Achsen,
   kräftefreier symmetrischer Kreisel (Nutation), Präzession
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_13 = [
  {
    id: "ph13_traegheitstensor",
    title: "Trägheitstensor: L = J·ω, und warum L nicht parallel zu ω sein muss",
    category: "13.1 Kreiselbewegung",
    type: "herleitung",
    front: R`Ein starrer Körper dreht sich mit $\vec\omega$ um eine <b>nicht raumfeste</b> Achse durch den Schwerpunkt. Leite $\vec L = \mathsf J\vec\omega$ her und gib die Komponenten des <b>Trägheitstensors</b> an. Warum ist $\vec L$ im Allgemeinen nicht parallel zu $\vec\omega$?`,
    back: R`Ohne Lager gibt es keine Kräfte, die Drehmomente kompensieren; man darf nicht nur $r_\perp$ verwenden. Eigendrehimpuls bezüglich des Schwerpunkts (Sterne weggelassen):
$$\vec L = \sum\Delta m_i\,\vec r_i\times(\vec\omega\times\vec r_i) = \sum\Delta m_i\left[r_i^2\vec\omega-(\vec r_i\cdot\vec\omega)\vec r_i\right]\;\to\;\int_M\left[r^2\vec\omega-(\vec r\cdot\vec\omega)\vec r\right]dm\qquad(13.1\text{–}13.5)$$
Der zweite Term hat eine Komponente in Richtung $\vec r$, nicht $\vec\omega$. $x$-Komponente:
$$L_x = \omega_x\int(y^2+z^2)dm-\omega_y\int xy\,dm-\omega_z\int xz\,dm\qquad(13.7\text{–}13.10)$$
$$J_{xx} = \int(y^2+z^2)\,dm,\qquad J_{xy} = -\int xy\,dm,\qquad J_{xz} = -\int xz\,dm\qquad(13.11\text{–}13.13)$$
$$\vec L = \mathsf J\cdot\vec\omega,\qquad\mathsf J = \begin{pmatrix}J_{xx}&J_{xy}&J_{xz}\\J_{yx}&J_{yy}&J_{yz}\\J_{zx}&J_{zy}&J_{zz}\end{pmatrix},\qquad J_{ik} = J_{ki}\qquad(13.14\text{–}13.19)$$
Diagonalelemente: Trägheitsmomente bezüglich der Koordinatenachsen; Nichtdiagonalelemente: Deviationsmomente. Zwei Vektoren verschiedener Richtung kann man nicht mit einem Skalar verknüpfen, sondern nur mit einem Tensor (2. Stufe).`,
    meta: "Skript: Abschnitt 13.1.1, Gl. (13.1)–(13.19), Fussnote 1, Anhang S. 41–43",
    explanation: R`<b>Intuition:</b> Bei einer unsymmetrisch montierten Hantel, die man um eine schräge Achse dreht, zeigt der Drehimpuls nicht in Richtung der Drehachse. Bei einer festen Achse merkt man das als „Unwucht“: Die Lager müssen ein ständig umlaufendes Drehmoment aufnehmen (Auswuchten von Autoreifen).<br><br>
<b>Woher die Nichtdiagonalterme?</b> Sie messen, wie asymmetrisch die Masse bezüglich der Achsen verteilt ist ($\int xy\,dm$). Bei einem symmetrischen Körper in Symmetrieachsen verschwinden sie.<br><br>
<b>Abhängigkeiten:</b> Die Komponenten von $\mathsf J$ hängen vom Koordinatensystem ab; es gibt aber stets ein Hauptachsensystem, in dem $\mathsf J$ diagonal ist (13.1.4). Symmetrie $J_{ik} = J_{ki}$ folgt aus $xy = yx$.<br><br>
<b>Zusammenhang:</b> Für eine raumfeste Achse liefern die Lager einen Drehmomentstoss, der die Anteile senkrecht zu $\vec\omega$ eliminiert; übrig bleibt $L_\parallel = J_A\omega$ (8.5.5, Gl. 8.83). Der Tensor ist die Verallgemeinerung.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v_i = \vec\omega\times\vec r_i$<em>Starrer Körper, Drehung um den Schwerpunkt.</em></li>
<li>$\vec r\times(\vec\omega\times\vec r) = \vec\omega(\vec r\cdot\vec r)-\vec r(\vec r\cdot\vec\omega)$<em>BAC-CAB-Regel (13.4).</em></li>
<li>$L_x = \int\left[r^2\omega_x-(x\omega_x+y\omega_y+z\omega_z)x\right]dm$<em>$x$-Komponente (13.7).</em></li>
<li>$= \int\left[(r^2-x^2)\omega_x-xy\,\omega_y-xz\,\omega_z\right]dm$<em>Ordnen (13.8).</em></li>
<li>$r^2-x^2 = y^2+z^2$<em>Damit erscheint der senkrechte Abstand zur $x$-Achse (13.9, 13.10).</em></li>
<li>$L_x = J_{xx}\omega_x+J_{xy}\omega_y+J_{xz}\omega_z$<em>Mit den Definitionen (13.11–13.14).</em></li>
</ol>`,
    example: R`Zwei Punktmassen $m = 1\,\text{kg}$ bei $(1,0,1)\,\text{m}$ und $(-1,0,-1)\,\text{m}$ (schräge Hantel): $J_{xx} = 2$, $J_{yy} = 4$, $J_{zz} = 2$, $J_{xz} = -2\,\text{kg m}^2$, sonst null.<br>
Drehung um $z$ ($\vec\omega = (0,0,\omega)$): $\vec L = (-2\omega,0,2\omega)$, also $45^\circ$ gegen $\vec\omega$ geneigt und senkrecht zur Hantelachse.`,
    counterexample: R`<b>Kugel oder Würfel:</b> Hier ist $\mathsf J = J\cdot\mathbb 1$ in jedem Koordinatensystem durch den Schwerpunkt; $\vec L\parallel\vec\omega$ für jede Achse. Der Tensorcharakter ist zwar vorhanden, aber unsichtbar. Erst asymmetrische Körper zeigen ihn.`,
    pitfalls: R`<ul><li>Das Minuszeichen in der Definition der Deviationsmomente vergessen.</li>
<li>Glauben, jede $3\times3$-Matrix sei ein Tensor (ein Tensor hat ein definiertes Transformationsverhalten).</li>
<li>$\vec L = J\vec\omega$ mit skalarem $J$ für beliebige Achsen verwenden.</li></ul>`
  },
  {
    id: "ph13_rotationsenergie_tensor",
    title: "Rotationsenergie mit dem Trägheitstensor: T* = ½ ωᵗ J ω",
    category: "13.1 Kreiselbewegung",
    type: "herleitung",
    front: R`Leite die Rotationsenergie eines Kreisels bezüglich des Schwerpunkts her und zeige $T^* = \tfrac12\vec\omega^{\,t}\mathsf J\vec\omega$. Welche Vektoridentitäten braucht man? Tragen die Deviationsmomente zur Energie bei?`,
    back: R`$$T^* = \frac12\int_Mv^2\,dm = \frac12\int_M(\vec\omega\times\vec r)^2\,dm\qquad(13.20)$$
Mit dem Spatprodukt $(\vec a\times\vec b)\cdot\vec c = (\vec b\times\vec c)\cdot\vec a$ und BAC-CAB $\vec a\times(\vec b\times\vec c) = \vec b(\vec a\cdot\vec c)-\vec c(\vec a\cdot\vec b)$ (13.21, 13.22):
$$(\vec\omega\times\vec r)\cdot(\vec\omega\times\vec r) = \{\vec r\times(\vec\omega\times\vec r)\}\cdot\vec\omega = r^2\omega^2-(\vec r\cdot\vec\omega)^2\qquad(13.23\text{–}13.25)$$
$$T^* = \frac12\int\left[r^2\omega^2-(\vec r\cdot\vec\omega)^2\right]dm = \frac12\left(J_{xx}\omega_x^2+J_{yy}\omega_y^2+J_{zz}\omega_z^2+2J_{xy}\omega_x\omega_y+2J_{yz}\omega_y\omega_z+2J_{zx}\omega_z\omega_x\right)\qquad(13.26\text{–}13.28)$$
$$T^* = \tfrac12\,\vec\omega^{\,t}\cdot\mathsf J\cdot\vec\omega\qquad(13.29,\,13.30)$$
Alle Komponenten des Tensors, auch die Deviationsmomente, tragen zur Energie bei. Gleichwertig: $T^* = \tfrac12\vec\omega\cdot\vec L$.`,
    meta: "Skript: Abschnitt 13.1.2, Gl. (13.20)–(13.30), Anhang S. 44",
    explanation: R`<b>Intuition:</b> Die Energie ist eine quadratische Form in $\vec\omega$, wie $\tfrac12mv^2$, nur dass die „Masse“ jetzt richtungsabhängig ist. Je nach Achse kostet dieselbe Winkelgeschwindigkeit verschieden viel Energie.<br><br>
<b>Zwei Schreibweisen:</b> $T^* = \tfrac12\vec\omega\cdot\vec L$ (wegen $\vec L = \mathsf J\vec\omega$). Für eine feste Achse mit $\vec\omega = \omega\hat n$ ergibt sich $T^* = \tfrac12J_\omega\omega^2$ mit $J_\omega = \hat n^t\mathsf J\hat n$ – das Trägheitsmoment um diese Achse (Trägheitsellipsoid, 13.1.3).<br><br>
<b>Abhängigkeiten:</b> $T^*\propto\omega^2$; im Hauptachsensystem $T^* = \tfrac12(J_a\omega_a^2+J_b\omega_b^2+J_c\omega_c^2) = \frac{L_a^2}{2J_a}+\frac{L_b^2}{2J_b}+\frac{L_c^2}{2J_c}$ (13.42).<br><br>
<b>Zusammenhang:</b> Die Form $\vec x^{\,t}\mathsf A\vec x$ ist aus der linearen Algebra bekannt (quadratische Form, Hauptachsentransformation). Für den kräftefreien Kreisel sind $T^*$ und $\vec L$ beide erhalten (13.1.6).`,
    derivation: R`<ol class="fc-steps">
<li>$(\vec\omega\times\vec r)\cdot\vec c$ mit $\vec c = \vec\omega\times\vec r$: $= \{\vec r\times(\vec\omega\times\vec r)\}\cdot\vec\omega$<em>Spatprodukt zyklisch vertauscht (13.21, 13.23).</em></li>
<li>$\vec r\times(\vec\omega\times\vec r) = \vec\omega r^2-\vec r(\vec r\cdot\vec\omega)$<em>BAC-CAB (13.22, 13.24).</em></li>
<li>$\cdot\vec\omega$: $r^2\omega^2-(\vec r\cdot\vec\omega)^2$<em>(13.25).</em></li>
<li>$r^2\omega^2-(x\omega_x+y\omega_y+z\omega_z)^2 = \omega_x^2(y^2+z^2)+\dots-2\omega_x\omega_yxy-\dots$<em>Ausmultiplizieren: Diagonal- und Mischterme (13.27).</em></li>
<li>$T^* = \tfrac12\sum_{i,k}J_{ik}\omega_i\omega_k$<em>Mit den Tensorkomponenten; Mischterme doppelt wegen $J_{ik} = J_{ki}$ (13.28, 13.29).</em></li>
</ol>`,
    example: R`Schräge Hantel von oben ($J_{zz} = 2\,\text{kg m}^2$), Drehung um $z$ mit $\omega = 1\,\text{s}^{-1}$: $T^* = \tfrac12J_{zz}\omega^2 = 1\,\text{J}$. Direkt: Jede Masse läuft im Abstand $1\,\text{m}$ um die $z$-Achse, $T = 2\cdot\tfrac12\cdot1\cdot1^2 = 1\,\text{J}$ ✓. Probe mit $\tfrac12\vec\omega\cdot\vec L = \tfrac12(0,0,1)\cdot(-2,0,2) = 1\,\text{J}$ ✓.`,
    counterexample: R`<b>Deviationsmomente „spielen für die Energie keine Rolle“:</b> Falsch, sobald $\vec\omega$ mehrere Komponenten hat. Für $\vec\omega = (1,0,1)/\sqrt2$ bei der schrägen Hantel (Drehung um die Hantelachse) ergeben die Diagonalterme $\tfrac12(2\cdot\tfrac12+2\cdot\tfrac12) = 1$, der Mischterm $\tfrac12\cdot2J_{xz}\cdot\tfrac12 = -1$: Summe $0$ – korrekt, denn um die eigene Achse drehen sich Punktmassen gar nicht.`,
    pitfalls: R`<ul><li>Den Faktor 2 bei den Mischtermen vergessen.</li>
<li>$T^* = \tfrac12J\omega^2$ mit einem Diagonalelement statt mit $J_\omega$ der tatsächlichen Achse rechnen.</li>
<li>Vektoridentitäten mit falscher Reihenfolge (Vorzeichen) anwenden.</li></ul>`
  },
  {
    id: "ph13_traegheitsellipsoid",
    title: "Trägheitsellipsoid: Trägheitsmoment J_ω um eine beliebige Achse",
    category: "13.1 Kreiselbewegung",
    type: "konzept",
    front: R`Wie berechnet man das Trägheitsmoment $J_\omega$ um eine beliebige Achse durch den Schwerpunkt mit Richtungskosinus $\cos\alpha,\cos\beta,\cos\gamma$? Was ist das <b>Trägheitsellipsoid</b>, und wie liest man daraus $J_\omega$ ab?`,
    back: R`Mit $\vec\omega = \omega(\cos\alpha,\cos\beta,\cos\gamma)$ (13.31) ist $T^* = \tfrac12J_\omega\omega^2$ (13.32) mit
$$J_\omega = J_{xx}\cos^2\alpha+J_{yy}\cos^2\beta+J_{zz}\cos^2\gamma+2J_{xy}\cos\alpha\cos\beta+2J_{yz}\cos\beta\cos\gamma+2J_{zx}\cos\gamma\cos\alpha\qquad(13.33)$$
Vektor in Achsrichtung $\vec R = R(\cos\alpha,\cos\beta,\cos\gamma) = (x,y,z)$ (13.34):
$$R^2J_\omega = x^2J_{xx}+y^2J_{yy}+z^2J_{zz}+2xyJ_{xy}+2yzJ_{yz}+2zxJ_{zx}\qquad(13.35)$$
Für $R^2J_\omega = k$ (Konstante, Einheit $\text{kg m}^4$) ist das ein <b>Ellipsoid</b>:
$$J_\omega = \frac k{R^2}\qquad(13.36)$$
$J_\omega$ ist umgekehrt proportional zum Quadrat des Abstands $R$ vom Mittelpunkt bis zur Ellipsoidoberfläche in Richtung der Drehachse. Das Trägheitsellipsoid ist fest mit dem Körper verbunden.`,
    meta: "Skript: Abschnitt 13.1.3, Gl. (13.31)–(13.36), Abb. 13.1, Anhang S. 44–46",
    explanation: R`<b>Intuition:</b> Das Trägheitsellipsoid ist eine „Landkarte“ der Drehträgheit: In Richtungen, in denen der Körper leicht zu drehen ist (kleines $J$), ragt das Ellipsoid weit hinaus; in schwer drehbaren Richtungen ist es flach.<br><br>
<b>Achtung, Kehrwert:</b> Die Halbachsen sind $\propto1/\sqrt J$. Ein langer Stab (kleines $J$ um die Längsachse) hat ein Ellipsoid, das entlang der Stabachse lang ist – wie der Stab selbst. Eine flache Scheibe (grösstes $J$ um die Symmetrieachse) hat ein in dieser Richtung gestauchtes Ellipsoid.<br><br>
<b>Abhängigkeiten:</b> Kugel, Würfel und jeder Körper mit drei gleichen Hauptträgheitsmomenten: Das Ellipsoid ist eine Kugel, $J_\omega$ in allen Richtungen gleich.<br><br>
<b>Zusammenhang:</b> Die Hauptachsen des Ellipsoids sind die Hauptträgheitsachsen (13.1.4); der Drehimpuls steht senkrecht auf der Tangentialebene am Durchstosspunkt der Drehachse (13.1.4.3).`,
    derivation: R`Warum $J_\omega = \hat n^t\mathsf J\hat n$:
<ol class="fc-steps">
<li>$T^* = \tfrac12\vec\omega^{\,t}\mathsf J\vec\omega$ mit $\vec\omega = \omega\hat n$<em>(13.29) mit Einheitsvektor $\hat n$ der Achse.</em></li>
<li>$T^* = \tfrac12\omega^2\,\hat n^t\mathsf J\hat n$<em>$\omega$ ausklammern.</em></li>
<li>Vergleich mit $T^* = \tfrac12J_\omega\omega^2$: $J_\omega = \hat n^t\mathsf J\hat n$<em>(13.32, 13.33) ausgeschrieben.</em></li>
<li>$\vec R = R\hat n$: $\vec R^{\,t}\mathsf J\vec R = R^2J_\omega$<em>Quadratische Form in $(x,y,z)$ (13.35).</em></li>
<li>$R^2J_\omega = k$ = konst. $\Rightarrow$ Fläche zweiten Grades, positiv definit: Ellipsoid<em>Alle $J_\omega\gt0$ (ausser entartete Fälle wie Punktmassen auf einer Linie).</em></li>
</ol>`,
    example: R`Schräge Hantel aus der Tensorkarte, Drehung um die $z$-Achse: $J_\omega = J_{zz} = 2\,\text{kg m}^2$. Um die Achse $\hat n = (1,0,-1)/\sqrt2$ (senkrecht zur Hantel): $J_\omega = \tfrac12(2+2)-J_{xz}\cdot1 = 2+2 = 4\,\text{kg m}^2 = 2m\ell^2$ mit $\ell = \sqrt2\,\text{m}$ ✓.`,
    counterexample: R`<b>Entartetes Ellipsoid:</b> Bei einer Hantel aus zwei Punktmassen ist $J = 0$ um die Hantelachse; das „Ellipsoid“ entartet zu einem unendlich langen Kreiszylinder (13.1.4.4). Die Ellipsoid-Darstellung braucht positive Trägheitsmomente in allen Richtungen.`,
    pitfalls: R`<ul><li>Annehmen, das Ellipsoid habe die Form des Körpers (es ist eher „umgekehrt“: Halbachsen $\propto1/\sqrt J$).</li>
<li>Die Mischterme in $J_\omega$ vergessen.</li>
<li>Das Ellipsoid für raumfest halten (es dreht sich mit dem Körper).</li></ul>`
  },
  {
    id: "ph13_hauptachsen",
    title: "Hauptachsen, Hauptträgheitsmomente und Kreiseltypen",
    category: "13.1 Kreiselbewegung",
    type: "definition",
    front: R`Was sind <b>Hauptachsen</b> und <b>Hauptträgheitsmomente</b>? Wie sehen $\vec L$ und $T^*$ im Hauptachsensystem aus? Wann ist $\vec L\parallel\vec\omega$? Unterscheide asymmetrischen, symmetrischen (prolat/oblat) und sphärischen Kreisel.`,
    back: R`Im System der drei Ellipsoid-Hauptachsen (Hauptachsentransformation) wird der Tensor diagonal:
$$R^2J_\omega = x'^2J_a+y'^2J_b+z'^2J_c,\qquad\mathsf J' = \text{diag}(J_a,J_b,J_c),\qquad J_a\ge J_b\ge J_c\qquad(13.37\text{–}13.39)$$
$J_\omega$ bleibt als Skalar unverändert; $J_a,J_b,J_c$ stimmen im Allgemeinen nicht mit $J_{xx},J_{yy},J_{zz}$ überein. Mit Richtungskosinus zu den Hauptachsen: $J_\omega = J_a\cos^2\alpha+J_b\cos^2\beta+J_c\cos^2\gamma$ (13.40).
$$\vec L = (J_a\omega_a,\,J_b\omega_b,\,J_c\omega_c),\qquad T^* = \tfrac12(J_a\omega_a^2+J_b\omega_b^2+J_c\omega_c^2) = \frac{L_a^2}{2J_a}+\frac{L_b^2}{2J_b}+\frac{L_c^2}{2J_c}\qquad(13.41,\,13.42)$$
$\vec L\parallel\vec\omega$ allgemein nur für $J_a = J_b = J_c$ (13.43) – oder wenn $\vec\omega$ entlang einer Hauptachse liegt (13.44).
<ul><li><b>Asymmetrisch:</b> alle drei verschieden (Quader $a\neq b\neq c$, H₂O, NO₂).</li>
<li><b>Symmetrisch:</b> zwei gleich (alle rotationssymmetrischen Körper, lineare Moleküle, Quader mit quadratischem Querschnitt); Ellipsoid rotationssymmetrisch. <b>Prolat:</b> Moment um die Symmetrieachse am kleinsten (Zigarre, Ellipsoid gestreckt); <b>oblat:</b> am grössten (Scheibe, Ellipsoid gestaucht).</li>
<li><b>Sphärisch:</b> alle gleich (Kugel, Würfel).</li></ul>`,
    meta: "Skript: Abschnitt 13.1.4.1–13.1.4.2, Gl. (13.37)–(13.45), Abb. 13.2, Anhang S. 46–49",
    explanation: R`<b>Intuition:</b> Jeder starre Körper, egal wie unregelmässig, hat drei zueinander senkrechte „natürliche“ Drehachsen. Dreht er sich um eine davon, zeigt der Drehimpuls genau entlang der Achse, und es gibt keine Unwucht.<br><br>
<b>Mathematisch:</b> Hauptachsen sind die Eigenvektoren, Hauptträgheitsmomente die Eigenwerte des symmetrischen Tensors $\mathsf J$ (Spektralsatz der linearen Algebra: reelle Eigenwerte, orthogonale Eigenvektoren).<br><br>
<b>Symmetrie hilft:</b> Jede Symmetrieachse eines Körpers ist eine Hauptachse. Ein quadratischer Quader ist ein symmetrischer Kreisel, obwohl er nicht rotationssymmetrisch ist; sein Ellipsoid ist es trotzdem.<br><br>
<b>Zusammenhang:</b> Die Kreiseltypen bestimmen Molekülspektren (Rotationsspektroskopie) und die Stabilität freier Rotationen (13.1.5).`,
    derivation: R`Hauptachsen der schrägen Hantel (Massen $1\,\text{kg}$ bei $\pm(1,0,1)\,\text{m}$):
<ol class="fc-steps">
<li>$\mathsf J = \begin{pmatrix}2&0&-2\\0&4&0\\-2&0&2\end{pmatrix}\,\text{kg m}^2$<em>Aus der Tensor-Karte.</em></li>
<li>$y$-Achse: $\mathsf J\vec e_y = 4\vec e_y$<em>Eigenvektor mit Eigenwert 4.</em></li>
<li>$xz$-Block $\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$: Eigenwerte $4$ (Vektor $(1,-1)$) und $0$ (Vektor $(1,1)$)<em>Charakteristisches Polynom $(2-\lambda)^2-4 = 0$.</em></li>
<li>$J_a = J_b = 4\,\text{kg m}^2$, $J_c = 0$ entlang $(1,0,1)/\sqrt2$<em>Die Hantelachse ist Hauptachse mit $J = 0$; jede Achse senkrecht dazu hat $2m\ell^2 = 4$.</em></li>
<li>Prolater symmetrischer Kreisel (Grenzfall)<em>Zwei gleiche grosse, ein kleines Moment um die Symmetrieachse.</em></li>
</ol>`,
    example: R`Quader $3\times2\times1\,\text{cm}$, $M = 0{,}1\,\text{kg}$: $J = \frac M{12}(b^2+c^2)$ usw.: um eine Achse parallel zur kürzesten Kante $\frac{0{,}1}{12}(9+4) = 0{,}108$, parallel zur mittleren $\frac{0{,}1}{12}(9+1) = 0{,}083$, parallel zur längsten $\frac{0{,}1}{12}(4+1) = 0{,}042\,\text{kg cm}^2$ – asymmetrischer Kreisel.<br>
Wasserstoffmolekül: symmetrisch (linear); Benzol: oblat; Methan: sphärisch.`,
    counterexample: R`<b>Bezeichnungen im Skript:</b> Nach (13.39) gilt $J_a\ge J_b\ge J_c$. Später schreibt das Skript für den prolaten Kreisel „$J_a\lt J_b = J_c$“ und für den Kreisel mit Symmetrieachse $c$ „$J_a = J_b\lt J_c$“ – das passt nicht zur Konvention (13.39). Massgeblich ist die Physik: prolat = kleinstes Moment um die Symmetrieachse, oblat = grösstes.`,
    pitfalls: R`<ul><li>Hauptträgheitsmomente mit den Diagonalelementen eines beliebigen Koordinatensystems gleichsetzen.</li>
<li>„Symmetrischer Kreisel“ mit „rotationssymmetrischer Körper“ gleichsetzen (quadratischer Quader).</li>
<li>Prolat und oblat über die Körperform statt über die Trägheitsmomente definieren.</li></ul>`
  },
  {
    id: "ph13_L_tangentialebene",
    title: "Drehimpuls steht senkrecht auf der Tangentialebene des Trägheitsellipsoids",
    category: "13.1 Kreiselbewegung",
    type: "herleitung",
    front: R`Zeige, dass der Drehimpuls $\vec L$ senkrecht auf der Tangentialebene an das Trägheitsellipsoid im Durchstosspunkt der Drehachse $\vec\omega$ steht. Wie gross ist der Abstand $R$ dieses Punktes vom Schwerpunkt? Wende das auf die rotierende Hantel an.`,
    back: R`Im Hauptachsensystem: $k(x,y,z) = x^2J_a+y^2J_b+z^2J_c$ (13.46). Durchstosspunkt $\vec r_\omega = R\vec\omega/|\vec\omega|$ (13.47). Der Gradient steht senkrecht auf der Niveaufläche:
$$\nabla k\big|_{\vec r_\omega} = 2\begin{pmatrix}xJ_a\\yJ_b\\zJ_c\end{pmatrix} = \frac{2R}{|\vec\omega|}\begin{pmatrix}\omega_aJ_a\\\omega_bJ_b\\\omega_cJ_c\end{pmatrix} = \frac{2R}{|\vec\omega|}\vec L\qquad(13.48)$$
Also $\vec L\parallel\nabla k$, d. h. $\vec L$ senkrecht zur Tangentialebene.<br>
Über Normalform und Hesse’sche Normalform der Tangentialebene (13.49–13.60) folgt:
$$R^2 = \frac{2kT^*}{L^2}\qquad(13.61)$$
$R$ ist konstant, genau wenn $T^*$ und $L$ erhalten sind.<br><br>
<b>Hantel</b> (zwei Massen $m$, Stange $2\ell$, Abb. 13.3): $J_c = 0$ (Stabachse), $J_a = J_b = 2m\ell^2$; das Ellipsoid entartet zu einem Kreiszylinder um die Stabachse mit Radius $\sqrt{k/(2m\ell^2)}$. $\vec L$ steht senkrecht zur Hantelachse, liegt in der Ebene aus Achse und $\vec\omega$ und rotiert mit der Hantel.`,
    meta: "Skript: Abschnitte 13.1.4.3–13.1.4.4, Gl. (13.46)–(13.61), Abb. 13.3, Anhang S. 50–52",
    explanation: R`<b>Intuition:</b> $\vec\omega$ zeigt auf einen Punkt der Ellipsoidoberfläche; $\vec L$ zeigt in Richtung der Flächennormale dort. Nur an den Polen (Hauptachsen) fallen Richtung und Normale zusammen – überall sonst sind $\vec L$ und $\vec\omega$ gegeneinander verkippt.<br><br>
<b>Bedeutung für den kräftefreien Kreisel:</b> $\vec L$ ist raumfest, also ist auch die Tangentialebene raumfest orientiert, und wegen (13.61) hat sie einen festen Abstand vom Schwerpunkt. Das Ellipsoid rollt deshalb auf einer festen Ebene ab (Poinsot-Konstruktion, 13.1.6).<br><br>
<b>Hantel:</b> Weil die Massen keine Ausdehnung senkrecht zur Stange haben, trägt nur die Komponente von $\vec\omega$ senkrecht zur Stange zum Drehimpuls bei; $\vec L$ steht deshalb immer senkrecht auf der Stange. Dreht sich die Hantel um eine schräge feste Achse, läuft $\vec L$ mit ihr um: Das braucht ein Drehmoment aus den Lagern (Unwucht).<br><br>
<b>Zusammenhang:</b> Gradient als Normale (11.1.3); Energie- und Drehimpulserhaltung (13.1.6).`,
    derivation: R`<ol class="fc-steps">
<li>$\nabla(x^2J_a+y^2J_b+z^2J_c) = (2xJ_a,2yJ_b,2zJ_c)$<em>Partielle Ableitungen (13.48).</em></li>
<li>$(x,y,z) = \dfrac R{|\vec\omega|}(\omega_a,\omega_b,\omega_c)$<em>Durchstosspunkt liegt in Richtung $\vec\omega$ (13.47).</em></li>
<li>$\nabla k = \dfrac{2R}{|\vec\omega|}(J_a\omega_a,J_b\omega_b,J_c\omega_c) = \dfrac{2R}{|\vec\omega|}\vec L$<em>Mit (13.41).</em></li>
<li>Gradient $\perp$ Niveaufläche $\Rightarrow$ $\vec L\perp$ Tangentialebene<em>Geometrische Eigenschaft des Gradienten.</em></li>
<li>$\cos\alpha = \dfrac{Rx_\omega}{A^2} = \dfrac{J_a\omega_a}{J_\omega\omega}$ usw.<em>Koeffizientenvergleich der Tangentialebene mit ihrer Hesse’schen Normalform, $A^2 = R^2J_\omega/J_a$ (13.50–13.56).</em></li>
<li>$\sum\cos^2 = 1\Rightarrow L^2 = J_\omega^2\omega^2$, und mit $k = R^2J_\omega$, $2T^* = J_\omega\omega^2$: $R^2 = \dfrac{2kT^*}{L^2}$<em>(13.57–13.61).</em></li>
</ol>`,
    example: R`Schräge Hantel bei Drehung um $z$: $\vec\omega = (0,0,1)\,\text{s}^{-1}$, $\vec L = (-2,0,2)\,\text{kg m}^2/\text{s}$; $\vec L\cdot$ Hantelrichtung $(1,0,1) = 0$ ✓. Winkel zwischen $\vec L$ und $\vec\omega$: $45^\circ$. Bei der Drehung läuft $\vec L$ auf einem Kegel um die $z$-Achse: $|\dot{\vec L}| = \omega\cdot2 = 2\,\text{N m}$ muss das Lager liefern.`,
    counterexample: R`<b>„$\vec L$ zeigt in Richtung der Drehachse, nur etwas verkürzt“:</b> Nein – $\vec L$ zeigt in Richtung der Normalen des Ellipsoids, die bei schrägen Achsen deutlich von $\vec\omega$ abweicht. Bei der Hantel steht $\vec L$ sogar immer senkrecht auf der Stange, egal wie schräg $\vec\omega$ ist.`,
    pitfalls: R`<ul><li>Den Gradienten der Ellipsoidgleichung mit $\vec\omega$ statt mit $\vec L$ identifizieren.</li>
<li>Annehmen, $R$ sei auch bei äusserem Drehmoment konstant.</li>
<li>Bei der Hantel das Trägheitsmoment um die Stabachse für endlich halten.</li></ul>`
  },
  {
    id: "ph13_freie_achsen",
    title: "Freie Achsen und Stabilität der Rotation (mittlere Achse instabil)",
    category: "13.1 Kreiselbewegung",
    type: "konzept",
    front: R`Was sind <b>freie Achsen</b>? Wann zeigen $\vec L$ und $\vec\omega$ in dieselbe Richtung, sodass die Drehachse ohne Lager raumfest bleibt? Um welche freien Achsen ist die Rotation <b>stabil</b>?`,
    back: R`$\vec L$ und $\vec\omega$ zeigen in dieselbe Richtung, wenn
<ul><li>der Körper um eine seiner <b>Hauptträgheitsachsen</b> rotiert (nur eine Komponente von $\vec\omega$ ungleich null), oder</li>
<li>bei einem symmetrischen Kreisel um eine beliebige Achse durch $S$ senkrecht zur Symmetrieachse (dort sind die beiden Momente gleich).</li></ul>
Ohne äusseres Drehmoment ist $\vec L$ konstant; dann ist in diesen Fällen auch die Drehachse raumfest, und die Bewegung entspricht einer Rotation um eine starre Achse – ohne Lager. Deshalb heissen die Hauptachsen <b>freie Achsen</b>.<br><br>
<b>Stabilität:</b> Stabil nur um die Achsen des <b>grössten</b> und des <b>kleinsten</b> Trägheitsmoments. Um die Achse des <b>mittleren</b> Moments wirken sich kleine Störungen destruktiv aus; der Körper beginnt zu taumeln.`,
    meta: "Skript: Abschnitt 13.1.5, Anhang S. 52–53",
    explanation: R`<b>Intuition (Tennisschläger-Theorem):</b> Wirft man einen Schläger, ein Buch oder ein Handy hoch und lässt es um die Achse des mittleren Trägheitsmoments rotieren, macht es zusätzlich unweigerlich halbe Überschläge. Um die längste und die kürzeste Achse dreht es sauber.<br><br>
<b>Erklärung über Energie und Drehimpuls:</b> Mit $L$ und $T^*$ fest liegt $\vec L$ (im Körpersystem) auf der Schnittkurve der Kugel $L^2$ = konst. mit dem Ellipsoid $\sum L_i^2/(2J_i) = T^*$. Nahe der Achsen des grössten und kleinsten $J$ sind diese Schnittkurven kleine geschlossene Kreise um die Achse (stabil); bei der mittleren Achse kreuzen sie sich (Sattelpunkt), kleine Störungen führen weit weg.<br><br>
<b>Abhängigkeiten:</b> Je unterschiedlicher die drei Momente, desto ausgeprägter die Instabilität.<br><br>
<b>Zusammenhang:</b> Kräftefreie Kreiselbewegung (13.1.6) beschreibt, was bei kleinen Abweichungen von einer stabilen Achse passiert: Nutation. Raumfahrt: Satelliten werden um eine stabile Hauptachse spinstabilisiert.`,
    derivation: R`Warum die Hauptachse eine freie Achse ist:
<ol class="fc-steps">
<li>$\vec\omega = \omega_a\vec e_a$<em>Drehung genau um eine Hauptachse (13.44).</em></li>
<li>$\vec L = \mathsf J\vec\omega = J_a\omega_a\vec e_a\parallel\vec\omega$<em>Diagonaler Tensor im Hauptachsensystem.</em></li>
<li>$\vec M = 0\Rightarrow\vec L$ = konst.<em>Kräftefrei (drehmomentfrei).</em></li>
<li>$\vec\omega = \vec L/J_a$ konstant, raumfest<em>Die Achse braucht kein Lager.</em></li>
<li>$\vec\omega$ schräg zu den Hauptachsen: $\vec L\not\parallel\vec\omega$, $\vec L$ fest $\Rightarrow\vec\omega$ wandert<em>Taumeln bzw. Nutation (13.1.6).</em></li>
</ol>`,
    example: R`Buch (z. B. $24\times17\times3\,\text{cm}$): Um die Achse senkrecht zum Deckel (grösstes $J$) und um die lange Kante parallele Achse (kleinstes $J$) rotiert es stabil; um die Achse parallel zur kurzen Seite des Deckels (mittleres $J$) überschlägt es sich.<br>
Auf der ISS spektakulär gezeigt mit einer Flügelmutter (Dzhanibekov-Effekt).`,
    counterexample: R`<b>Mit Energieverlust ist nur die Achse des grössten Moments stabil:</b> Der Satellit Explorer 1 (1958) sollte um seine Längsachse (kleinstes $J$) rotieren, kippte aber in eine Taumelbewegung und schliesslich in eine Rotation quer dazu, weil flexible Antennen Energie dissipierten. Bei festem $L$ ist $T^* = L^2/(2J)$ minimal für das grösste $J$. Die Aussage des Skripts gilt für den starren, verlustfreien Körper.`,
    pitfalls: R`<ul><li>Glauben, jede Hauptachse sei stabil.</li>
<li>Freie Achse mit Symmetrieachse gleichsetzen (auch asymmetrische Körper haben drei freie Achsen).</li>
<li>Dissipation ignorieren, wenn man über Langzeitstabilität spricht.</li></ul>`
  },
  {
    id: "ph13_kraeftefreier_kreisel",
    title: "Kräftefreier symmetrischer Kreisel: Nutation, Rastpol- und Gangpolkegel",
    category: "13.1 Kreiselbewegung",
    type: "konzept",
    front: R`Ein symmetrischer Kreisel ist reibungsfrei im Schwerpunkt gelagert. Warum heisst er „kräftefrei“ (besser: drehmomentfrei), welche Grössen sind erhalten, und welche drei Achsen muss man unterscheiden? Beschreibe die <b>Nutation</b> mit Rastpol-, Gangpol- und Nutationskegel.`,
    back: R`Im Schwerpunkt gelagert verschwindet das Moment der Schwerkraft:
$$\frac{d\vec L}{dt} = \vec M = \vec 0\;\Rightarrow\;\vec L = \text{konst.}\qquad(13.62)$$
Auch $T^*$ ist konstant (indifferentes Gleichgewicht, Schwerkraft leistet keine Arbeit).<br>
<b>Drei Achsen</b> (Abb. 13.4): raumfeste Drehimpulsachse $\vec L$; momentane Drehachse $\vec\omega$ (nicht raumfest); Figurenachse $c$ (raumfest nur, wenn $\vec L$ in ihr liegt).<br>
<b>Geometrie:</b> Gleichzeitig gilt
$$L_x^2+L_y^2+L_z^2 = L^2\ \text{(Kugel, raumfest)},\qquad\frac{L_a^2}{J_a}+\frac{L_b^2}{J_b}+\frac{L_c^2}{J_c} = 2T^*\ \text{(Ellipsoid, körperfest)}\qquad(13.63,\,13.64)$$
Die Spitze von $\vec L$ liegt auf der Schnittkurve (Abb. 13.5); der Körper muss so rotieren, dass das stets erfüllt ist. Ergebnis: $\vec\omega$ und Figurenachse umlaufen das raumfeste $\vec L$ (Nutation).
<ul><li><b>Rastpolkegel</b> (raumfest, Achse $\vec L$): Bahn von $\vec\omega$.</li>
<li><b>Nutationskegel</b>: Bahn der Figurenachse um $\vec L$ (Winkel $\alpha$ konstant).</li>
<li><b>Gangpolkegel</b> (körperfest, um die Figurenachse, Winkel $\beta$ zwischen $\vec\omega$ und $c$ konstant): rollt auf dem Rastpolkegel ab – aussen beim prolaten, innen beim oblaten Kreisel (Abb. 13.7).</li></ul>
$c$, $\vec L$ und $\vec\omega$ liegen in einer Ebene; Winkel zwischen $\vec L$ und $\vec\omega$: $\beta-\alpha$.`,
    meta: "Skript: Abschnitt 13.1.6, Gl. (13.62)–(13.64), Abb. 13.4–13.7, Fussnote 3, Anhang S. 53–57",
    explanation: R`<b>Intuition:</b> Wirft man einen Teller mit leichtem Schlag in die Luft, „eiert“ er: Seine Symmetrieachse kreist um eine feste Richtung, während er sich schnell dreht. Die feste Richtung ist $\vec L$, das Eiern ist die Nutation.<br><br>
<b>Poinsot-Bild:</b> Die Tangentialebene an das Trägheitsellipsoid im Durchstosspunkt von $\vec\omega$ ist raumfest (senkrecht zu $\vec L$, fester Abstand wegen 13.61). Das Ellipsoid rollt ohne zu gleiten auf dieser Ebene; der Berührpunkt ist der momentane Drehpunkt.<br><br>
<b>Abhängigkeiten (Ergänzung):</b> Im Raum läuft die Figurenachse mit $\omega_\text{Nut} = L/J_\perp$ um $\vec L$; im Körpersystem läuft $\vec\omega$ mit $\frac{J_\parallel-J_\perp}{J_\perp}\omega_c$ um die Figurenachse.<br><br>
<b>Zusammenhang:</b> Erde: Die Rotationsachse wandert relativ zur Erdoberfläche (Chandler-Wobble), weil die Erde ein leicht oblater Kreisel ist.`,
    derivation: R`Warum $c$, $\vec L$ und $\vec\omega$ in einer Ebene liegen:
<ol class="fc-steps">
<li>$\vec\omega = \vec\omega_\perp+\omega_c\hat c$<em>Zerlegung in Komponenten senkrecht und parallel zur Figurenachse (Abb. 13.4a).</em></li>
<li>$\vec L = J_\perp\vec\omega_\perp+J_c\omega_c\hat c$<em>Symmetrischer Kreisel: beide senkrechten Momente gleich ($J_\perp$).</em></li>
<li>$\vec L$ ist Linearkombination von $\vec\omega_\perp$ und $\hat c$<em>Also liegt $\vec L$ in der Ebene, die $\hat c$ und $\vec\omega$ aufspannen.</em></li>
<li>$\tan\angle(\hat c,\vec L) = \dfrac{J_\perp}{J_c}\tan\angle(\hat c,\vec\omega)$<em>Oblat ($J_c\gt J_\perp$): $\vec L$ näher an $c$ als $\vec\omega$; prolat umgekehrt.</em></li>
<li>$|\vec\omega_\perp|$, $\omega_c$ konstant $\Rightarrow$ Winkel konstant<em>Aus $L$ = konst. und $T^*$ = konst.: alle drei Kegel haben feste Öffnung.</em></li>
</ol>`,
    example: R`<b>Erde</b> (oblat, $(J_c-J_\perp)/J_\perp\approx1/305$): Euler sagte eine Wanderung der Drehachse relativ zur Erdkruste mit $\approx305$ Tagen Periode voraus; beobachtet wird der Chandler-Wobble mit $\approx433$ Tagen (die Erde ist nicht starr), Amplitude einige Meter am Pol.`,
    counterexample: R`<b>„Kräftefrei“ heisst nicht ohne Kräfte:</b> Die Schwerkraft wirkt sehr wohl, und das Lager trägt den Kreisel. Entscheidend ist nur, dass das <i>Drehmoment</i> um den Schwerpunkt verschwindet. Wird der Kreisel ausserhalb des Schwerpunkts unterstützt, präzediert er zusätzlich (13.1.7).`,
    pitfalls: R`<ul><li>Die Begriffe Nutation und Präzession vertauschen.</li>
<li>Glauben, die Figurenachse sei beim kräftefreien Kreisel raumfest.</li>
<li>Rastpolkegel (raumfest) und Gangpolkegel (körperfest) verwechseln.</li></ul>`
  },
  {
    id: "ph13_praezession",
    title: "Präzession des symmetrischen Kreisels: ω_P = M/L = mgr/(Jω)",
    category: "13.1 Kreiselbewegung",
    type: "herleitung",
    front: R`Ein schnell um seine Figurenachse rotierender Kreisel wird nicht im Schwerpunkt, sondern im Abstand $r$ unterstützt. Warum kippt er nicht, sondern <b>präzediert</b>? Leite die Präzessionsfrequenz her und zeige, dass sie nicht vom Neigungswinkel abhängt.`,
    back: R`Bei Drehung um die Figurenachse fallen $\vec L$, $\vec\omega$ und $c$ zusammen; keine Nutation (Abb. 13.8). Die Schwerkraft erzeugt
$$\vec M = \vec r\times m\vec g\qquad(13.65)$$
($\vec r$: vom Unterstützungspunkt zum Schwerpunkt). $\vec M\perp\vec L$: Nur die Richtung von $\vec L$ ändert sich, nicht der Betrag; $\vec L$ (und mit ihm der Kreisel) dreht sich horizontal im Kreis.
$$|d\vec L| = L\,d\varphi\;\Rightarrow\;M = \frac{dL}{dt} = L\frac{d\varphi}{dt},\qquad\omega_P = \frac{d\varphi}{dt} = \frac ML = \frac M{J\omega}\qquad(13.66\text{–}13.68)$$
(Annahme $\omega_P\ll\omega$.) Bei Neigung $\alpha$ gegen die Vertikale:
$$M = mgr\sin\alpha,\qquad dL = L\sin\alpha\,d\varphi\;\Rightarrow\;\omega_P = \frac{mgr\sin\alpha}{J\omega\sin\alpha} = \frac{mgr}{J\omega}\qquad(13.69\text{–}13.71)$$
Unabhängig von der Orientierung der Kreiselachse; nur Drehimpuls und Drehmoment zählen.`,
    meta: "Skript: Abschnitt 13.1.7, Gl. (13.65)–(13.71), Abb. 13.8, Anhang S. 56–58",
    explanation: R`<b>Intuition:</b> Das Drehmoment will den Kreisel umkippen, also $\vec L$ nach unten drehen. Aber $\dot{\vec L} = \vec M$ zeigt <i>horizontal</i> (senkrecht zu $\vec r$ und $\vec g$). Deshalb weicht die Achse seitlich aus, statt zu fallen – wie ein Rad, das man an einem Ende der Achse an einer Schnur aufhängt.<br><br>
<b>Abhängigkeiten:</b> $\omega_P\propto\frac1\omega$: Je schneller der Kreisel, desto langsamer die Präzession. Wird er durch Reibung langsamer, präzediert er schneller und beginnt schliesslich zu taumeln und umzufallen. $\omega_P\propto r$ und $\propto m$.<br><br>
<b>Warum unabhängig von $\alpha$?</b> Sowohl das Drehmoment als auch der Radius des Kreises, den die Spitze von $\vec L$ beschreibt, sind $\propto\sin\alpha$; beides kürzt sich.<br><br>
<b>Zusammenhang:</b> Präzession der Erdachse (Mond und Sonne üben ein Drehmoment auf den Äquatorwulst aus): Periode etwa $25\,800$ Jahre. Kernspinpräzession im Magnetfeld (Larmorfrequenz) ist das magnetische Analogon (MRI).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec M = \vec r\times m\vec g$, $|\vec M| = mgr\sin\alpha$<em>Drehmoment der Schwerkraft um den Unterstützungspunkt (13.65, 13.69).</em></li>
<li>$\vec M\perp\vec L\Rightarrow\dfrac{d}{dt}L^2 = 2\vec L\cdot\vec M = 0$<em>Betrag von $\vec L$ bleibt (11.47).</em></li>
<li>$|d\vec L| = (L\sin\alpha)\,d\varphi$<em>Die Spitze von $\vec L$ läuft auf einem Kreis mit Radius $L\sin\alpha$ (13.70).</em></li>
<li>$M\,dt = L\sin\alpha\,d\varphi$<em>$d\vec L = \vec M\,dt$.</em></li>
<li>$\omega_P = \dfrac{d\varphi}{dt} = \dfrac{mgr\sin\alpha}{L\sin\alpha} = \dfrac{mgr}{J\omega}$<em>(13.71); gültig für $\omega_P\ll\omega$ (dann ist $L\approx J\omega$).</em></li>
</ol>`,
    example: R`Kreiselscheibe $m = 1\,\text{kg}$, $R = 10\,\text{cm}$ ($J = \tfrac12mR^2 = 0{,}005\,\text{kg m}^2$), $50\,\text{U/s}$ ($\omega = 314\,\text{s}^{-1}$, $L = 1{,}57\,\text{kg m}^2/\text{s}$), Schwerpunkt $r = 10\,\text{cm}$ vom Auflagepunkt: $M = 0{,}98\,\text{N m}$, $\omega_P = 0{,}62\,\text{s}^{-1}$, Präzessionsperiode $10\,\text{s}$. Bei halber Drehzahl: $5\,\text{s}$.`,
    counterexample: R`<b>Langsamer Kreisel:</b> Für $\omega\to0$ würde $\omega_P = M/(J\omega)\to\infty$ – die Näherung $\omega_P\ll\omega$ bricht zusammen. Ein nicht rotierender „Kreisel“ fällt einfach um; zwischen beiden Grenzfällen treten Präzession und Nutation gemeinsam auf (schwerer Kreisel).`,
    pitfalls: R`<ul><li>Erwarten, dass der Kreisel in Richtung des Drehmoments „kippt“ statt seitlich auszuweichen.</li>
<li>$\omega_P\propto\omega$ statt $\propto1/\omega$ annehmen.</li>
<li>Den Faktor $\sin\alpha$ nur im Drehmoment, nicht aber im Kreisradius von $\vec L$ berücksichtigen.</li></ul>`
  }
];
})();
