/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 6: Der Dualraum
   (lineare Abbildung, Funktional, Sätze 6.0–6.2, duale Basis) + Serien 5, 6
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_6 = [
  // ========================================================================
  // 6a LINEARE ABBILDUNGEN UND FUNKTIONALE
  // ========================================================================
  {
    id: "la6_def_linabb_funktional",
    title: "Definition: Lineare Abbildung und Funktional",
    category: "6a Lineare Abbildungen und Funktionale",
    type: "definition",
    front: R`Wann ist $f: V\to W$ eine <b>lineare Abbildung</b>? Was ist ein <b>Funktional</b>?`,
    back: R`Seien $V$ und $W$ Vektorräume über dem Körper $K$. Eine <b>lineare Abbildung</b> von $V$ nach $W$ ist eine Funktion $f: V\to W$, sodass für alle $x,y\in V$ und alle $\lambda\in K$ gilt:
<ul><li><b>(i)</b> $f(x+_Vy) = f(x)+_Wf(y)$,</li>
<li><b>(ii)</b> $f(\lambda\cdot x) = \lambda\cdot f(x)$.</li></ul>
[Für $\lambda = 0$ folgt damit $f(0_V) = 0_W$.]<br><br>
Ist $W = K$ (also $W$ der VR $K$ über $K$, bzw. $W = K^1$), so nennen wir eine lineare Abbildung $f: V\to K$ ein <b>Funktional</b>. [Ein Funktional ist also eine spezielle lineare Abbildung.]<br>
<b>Bem.:</b> Lineare Abbildungen $V\to W$ für beliebige (endl.-dim.) VR sind das Hauptthema der Lin. Alg.`,
    meta: "Skript: Kap. 6, Definition lineare Abbildung, Funktional, Bem.",
    explanation: R`<b>Linear = verträglich mit der Struktur:</b> Es ist egal, ob man zuerst addiert/streckt und dann abbildet, oder zuerst abbildet und dann addiert/streckt. Dadurch werden <b>Linearkombinationen auf Linearkombinationen</b> abgebildet: $f(\sum\lambda_ix_i) = \sum\lambda_if(x_i)$ (Induktion, Stammbach II.4.4).<br><br>
<b>Konsequenz (Satz 6.0, 7.x):</b> Eine lineare Abbildung ist durch ihre <b>Werte auf einer Basis</b> vollständig bestimmt – man muss nur endlich viele Bilder kennen. Bei Funktionalen auf $K^n$ heisst das: $f(x) = a_1\alpha_1+\dots+a_n\alpha_n$ für feste Zahlen $a_i$.<br><br>
<b>Schnelltest:</b> $f(0_V)\neq 0_W$ ⇒ nicht linear. Konstante Summanden („$+1$”), Quadrate, Produkte von Koordinaten, Beträge zerstören Linearität.<br>
(Das Skript schreibt in der Klammer „$f(0_V) = 0_K$”, gemeint ist im allgemeinen Fall der Nullvektor $0_W$; bei Funktionalen ist $W = K$ und $0_W = 0_K$.)`,
    example: R`<b>1.</b> $f:\mathbb{R}^3\to\mathbb{R}^2$, $f(x,y,z) = (x+y,y-z)$ (Stammbach III.2.3).<br>
<b>2.</b> Funktional $f:\mathbb{R}^3\to\mathbb{R}$, $f(x_1,x_2,x_3) = x_1-x_2+2x_3$: $f((1,2,3)+(0,1,-1)) = f(1,3,2) = 2$ und $f(1,2,3)+f(0,1,-1) = 5+(-3) = 2$ ✓.<br>
<b>3.</b> Ableitung $p\mapsto p'$ auf Polynomen; Integral $p\mapsto\int_0^1p(x)\,dx$ (Funktional).`,
    counterexample: R`<b>1.</b> $f(x,y) = (x,1+y)$: $f(0,0) = (0,1)\neq 0$.<br>
<b>2.</b> $f(x,y) = (x^2,1)$ und $g(x) = x^2$: $g(2\cdot 3) = 36\neq 2\cdot g(3) = 18$.<br>
<b>3.</b> $h(x) = |x|$ auf $\mathbb{R}$: $h(1+(-1)) = 0\neq 2 = h(1)+h(-1)$.<br>
<b>4. Nur (i), nicht (ii):</b> $\mathbb{C}\to\mathbb{C}$, $z\mapsto\bar z$ (komplex konjugiert) ist additiv, aber über $\mathbb{C}$ nicht linear: $\overline{i\cdot 1} = -i\neq i\cdot\bar 1 = i$.`
  },
  {
    id: "la6_bsp_funktionale_r2",
    title: "Beispiele 0.–2.: Jedes Funktional auf ℝ² ist von der Form f_{a,b}",
    category: "6a Lineare Abbildungen und Funktionale",
    type: "beispiel",
    front: R`Zeige: Jede Abbildung $f_{a,b}:\mathbb{R}^2\to\mathbb{R}$, $(\alpha,\beta)\mapsto a\cdot\alpha+b\cdot\beta$ ist ein Funktional, und umgekehrt ist <b>jedes</b> Funktional auf $\mathbb{R}^2$ von dieser Form.`,
    back: R`<b>0.</b> Das <b>Nullfunktional</b> $f: V\to K$, $x\mapsto 0_K$ ist ein Funktional.<br>
<b>1.</b> $f_{a,b}$ ist ein Funktional ($a = b = 0$: Nullfunktional): Für $x_1 = (\alpha_1,\beta_1)$, $x_2 = (\alpha_2,\beta_2)$:
$$f_{a,b}(x_1+x_2) = a(\alpha_1+\alpha_2)+b(\beta_1+\beta_2) = f_{a,b}(x_1)+f_{a,b}(x_2),\qquad f_{a,b}(\lambda x) = \lambda(a\alpha+b\beta) = \lambda f_{a,b}(x).$$
<b>2.</b> Ist $f$ ein beliebiges Funktional, $e_1 = (1,0)$, $e_2 = (0,1)$, so gilt für $x = (\alpha,\beta) = \alpha e_1+\beta e_2$:
$$f(x) = \alpha\cdot\underbrace{f(e_1)}_{=:a}+\beta\cdot\underbrace{f(e_2)}_{=:b} = a\alpha+b\beta = f_{a,b}(x).$$`,
    meta: "Skript: Kap. 6, Bsp. 0., 1., 2. (mit Beweisen)",
    explanation: R`<b>Die zentrale Einsicht:</b> Ein Funktional auf $\mathbb{R}^2$ ist durch <b>zwei Zahlen</b> $a = f(e_1)$ und $b = f(e_2)$ vollständig festgelegt – seine Werte auf der Basis. Alles andere folgt aus der Linearität.<br><br>
<b>Geometrisch:</b> Der Graph von $f_{a,b}$ ist eine Ebene $z = a\alpha+b\beta$ durch den Ursprung (vgl. $U_f$ in Serie 5, Aufgabe 25); die Nullstellenmenge $\{a\alpha+b\beta = 0\}$ ist eine Gerade durch $0$ (für $(a,b)\neq 0$).<br><br>
Bsp. 2 ist der Spezialfall $n = 2$ von <b>Satz 6.0</b> und begründet, warum der Dualraum $\mathbb{R}^{2*}$ dem Raum der Paare $(a,b)$ entspricht ($\mathbb{R}^2\cong\mathbb{R}^{2*}$).`,
    example: R`$f$ sei linear mit $f(1,0) = 3$ und $f(0,1) = -2$. Dann $f(4,5) = 4\cdot 3+5\cdot(-2) = 2$, also $f = f_{3,-2}$.<br>
Kennt man $f$ auf einer <b>anderen</b> Basis, z.B. $f(1,1) = 5$, $f(1,-1) = 1$: dann $f(1,0) = f(\tfrac12(1,1)+\tfrac12(1,-1)) = 3$, $f(0,1) = f(\tfrac12(1,1)-\tfrac12(1,-1)) = 2$, also $f = f_{3,2}$.`,
    counterexample: R`<b>Affine statt lineare Funktion:</b> $g(\alpha,\beta) = 2\alpha+3\beta+1$ ist kein Funktional ($g(0,0) = 1$) und nicht von der Form $f_{a,b}$.<br>
<b>Werte auf Nicht-Basis legen nichts fest:</b> Kennt man nur $f(1,2) = 4$ und $f(2,4) = 8$, so ist $f$ <b>nicht</b> bestimmt: $f_{4,0}$ und $f_{0,2}$ erfüllen beide.`
  },
  {
    id: "la6_satz_6_0",
    title: "Satz 6.0: Funktionale in Koordinaten – Zeile mal Spalte",
    category: "6a Lineare Abbildungen und Funktionale",
    type: "satz",
    front: R`Formuliere und beweise <b>Satz 6.0</b>. Wie schreibt man ein Funktional als Matrixprodukt $(1\times n)\cdot(n\times 1)$?`,
    back: R`<b>Satz 6.0:</b> Sei $V$ ein endl.-dim. VR über $K$, $\{x_1,\dots,x_n\}$ eine Basis von $V$ und $f: V\to K$ ein Funktional. Dann existieren $a_1,\dots,a_n\in K$, sodass für jedes $y = \sum_{i=1}^n\alpha_ix_i$ gilt:
$$f(y) = \sum_{i=1}^na_i\cdot\alpha_i.$$
<b>Beweis:</b> Setze $a_i := f(x_i)$. Zu $y\in V$ existieren (eindeutig) $\alpha_i$ mit $y = \sum\alpha_ix_i$, und da $f$ linear ist:
$$f(y) = f\Big(\sum_{i=1}^n\alpha_ix_i\Big) = \sum_{i=1}^nf(\alpha_ix_i) = \sum_{i=1}^n\alpha_i f(x_i) = \sum_{i=1}^na_i\alpha_i.$$
<b>Darstellung mit Matrizen:</b> $a_1,\dots,a_n$ als $(1\times n)$-Matrix, $y$ als Spaltenvektor ($(n\times 1)$-Matrix):
$$\underset{(1\times n)}{(a_1,\dots,a_n)}\cdot\underset{(n\times 1)}{\begin{pmatrix}\alpha_1\\\vdots\\\alpha_n\end{pmatrix}} := a_1\alpha_1+\dots+a_n\alpha_n = f(y),$$
wobei $a_j = f(x_j)$. Das Ergebnis ist eine $(1\times 1)$-Matrix; das Produkt ist dasselbe wie das übliche Skalarprodukt.`,
    meta: "Skript: Kap. 6, Satz 6.0 mit Beweis, Darstellung von f mit Matrizen",
    explanation: R`<b>Kern der linearen Algebra in einem Satz:</b> Kennt man eine lineare Abbildung auf einer Basis, kennt man sie überall. Für Funktionale sind das $n$ Zahlen – eine <b>Zeile</b>. Vektoren werden <b>Spalten</b> (ihre Koordinaten), und das Auswerten ist „Zeile mal Spalte”.<br><br>
<b>Das ist der Ursprung der Matrixmultiplikation:</b> In Kap. 7 wird eine lineare Abbildung $V\to W$ ($\dim(W) = m$) zu $m$ solchen Zeilen übereinander – einer $(m\times n)$-Matrix – und das Anwenden auf einen Vektor zu $m$ Skalarprodukten.<br><br>
<b>Achtung:</b> Die Zahlen $a_i$ hängen von der gewählten Basis ab! Dasselbe Funktional hat in einer anderen Basis eine andere Zeile (Basiswechsel, Kap. 8).`,
    example: R`$V$ = Polynome vom Grad $\le 2$, Basis $\{1,x,x^2\}$, $f(p) := \int_0^1p(x)\,dx$. Dann $a_1 = \int_0^11 = 1$, $a_2 = \int_0^1x = \tfrac12$, $a_3 = \int_0^1x^2 = \tfrac13$.<br>
Für $p = 2-3x+6x^2$: $(1,\tfrac12,\tfrac13)\cdot\begin{pmatrix}2\\-3\\6\end{pmatrix} = 2-\tfrac32+2 = \tfrac52$, und direkt $\int_0^1(2-3x+6x^2)dx = 2-\tfrac32+2 = \tfrac52$ ✓.`,
    counterexample: R`<b>Unendlich-dimensional:</b> Für $F(f) = \int_a^bf\,dx$ auf den Treppenfunktionen (Serie 6, 28) mit Basis $B$ ist $F(\chi_t) = t-a\neq 0$ für unendlich viele Basisvektoren – die „Zeile” $(a_i)$ hat unendlich viele Einträge $\neq 0$ und ist keine endliche LK der $\chi^*$.<br>
<b>Nicht-lineare Funktion:</b> $g(p) = p(0)^2$ hat keine solche Darstellung: $g(2) = 4\neq 2\cdot g(1) = 2$.`
  },
  // ========================================================================
  // 6b DER DUALRAUM
  // ========================================================================
  {
    id: "la6_satz_6_1",
    title: "Satz 6.1: Die Funktionale bilden einen Vektorraum V*",
    category: "6b Der Dualraum V*",
    type: "satz",
    front: R`Formuliere <b>Satz 6.1</b>: Wie werden Funktionale addiert und mit Skalaren multipliziert, und warum ist das Ergebnis wieder ein Funktional?`,
    back: R`<b>Satz 6.1:</b> Sei $V$ ein VR über $K$. Dann ist die Menge $V^*$ der Funktionale $f: V\to K$ mit
$$(f+^*g)(x) := f(x)+_Kg(x),\qquad(\lambda\cdot^*f)(x) := \lambda\cdot f(x)\;[\text{Mult. in }K]$$
ein VR über $K$. [Korrektur: in $(f+^*g)(x)$ steht rechts $+_K$, nicht $+_V$.]<br><br>
<b>Beweis (Auszug):</b> $f+^*g$ ist ein Funktional:<br>
(i) $(f+^*g)(x+y) = f(x)+f(y)+g(x)+g(y) = (f+^*g)(x)+(f+^*g)(y)$;<br>
(ii) $(f+^*g)(\lambda x) = \lambda f(x)+\lambda g(x) = \lambda(f+^*g)(x)$.<br>
• $+^*$ assoz. und komm., da $+$ in $K$ es ist ⇒ komm. Halbgruppe.<br>
• Neutralelement: das <b>Nullfunktional</b>; Inverses von $f$: $-f: x\mapsto-f(x)$ ⇒ abelsche Gruppe.<br>
• Axiome der Skalarmult. analog, z.B. $((\lambda+\mu)\cdot^*f)(x) = (\lambda+\mu)f(x) = (\lambda\cdot^*f)(x)+_K(\mu\cdot^*f)(x)$.`,
    meta: "Skript: Kap. 6, Satz 6.1 mit Beweis und Korrekturen",
    explanation: R`Funktionale werden <b>punktweise</b> addiert und skaliert – wie Funktionen in Serie 2, Aufgabe 14. Neu ist nur der Nachweis, dass <b>Linearität erhalten bleibt</b>: Summen und Vielfache linearer Funktionale sind wieder linear. Damit ist $V^*$ ein Unterraum des Raums aller Funktionen $V\to K$.<br><br>
<b>Warum das wichtig ist:</b> Funktionale sind nicht nur Werkzeuge, sondern selbst <b>Vektoren</b>. Man kann über ihre Dimension (Satz 6.2), Basen (duale Basis) und sogar Funktionale auf ihnen (Bidualraum $V^{**}$, Kap. 9) sprechen.<br><br>
In Satz 7.1 wird das zu $\mathrm{Hom}(V,W)$ verallgemeinert; dort ist der Beweis „etwas einfacher, weil man besser zwischen $W$ und $K$ unterscheiden kann”.`,
    example: R`$f(x_1,x_2) = 3x_1-x_2$, $g(x_1,x_2) = x_1+2x_2$ auf $\mathbb{R}^2$: $(f+^*g)(x) = 4x_1+x_2$; $(2\cdot^*f)(x) = 6x_1-2x_2$. Z.B. $(f+^*g)(1,1) = 5 = f(1,1)+g(1,1) = 2+3$ ✓. In Zeilenform: $(3,-1)+(1,2) = (4,1)$.`,
    counterexample: R`<b>Produkt ist keine VR-Operation in $V^*$:</b> $(f\cdot g)(x) := f(x)\cdot g(x)$ ist i.A. <b>nicht linear</b>: mit $f = g = $ id auf $\mathbb{R}$ ist $(fg)(2) = 4\neq 2\cdot(fg)(1) = 2$.<br>
<b>Verwechslung $+_V$ / $+_K$:</b> $f(x)$ liegt in $K$, nicht in $V$ – darum ist „$f(x)+_Vg(x)$” (Fehler im offiziellen Skript) nicht sinnvoll, sobald $V\neq K$.`
  },
  {
    id: "la6_def_dualraum",
    title: "Definition: Dualraum V* (und ℝ²* ≅ ℝ²)",
    category: "6b Der Dualraum V*",
    type: "definition",
    front: R`Was ist der <b>Dualraum</b> $V^*$? Warum „entspricht” $\mathbb{R}^{2*}$ dem Raum $\mathbb{R}^2$?`,
    back: R`<b>Definition:</b> Sei $V$ ein VR über $K$. Der VR aller Funktionale $f: V\to K$ heisst <b>Dualraum</b> von $V$ und wird mit $V^*$ bezeichnet. (Später: $V^* = \mathrm{Hom}(V,K)$.)<br><br>
<b>Bsp.:</b> Mit Bsp. 2 entspricht der Dualraum $\mathbb{R}^{2*}$ von $\mathbb{R}^2 = \{(\alpha,\beta)\}$ dem Raum $\{(a,b): a,b\in\mathbb{R}\}$ (über $f = f_{a,b}$). D.h. $\mathbb{R}^2$ und $\mathbb{R}^{2*}$ sind <b>isomorph</b> (haben dieselbe Struktur; iso = gleich, morphe = Form, Gestalt).`,
    meta: "Skript: Kap. 6, Definition Dualraum, Bsp. ℝ²*",
    explanation: R`<b>Vektoren vs. Funktionale – Spalten vs. Zeilen:</b> Ein Vektor $x\in K^n$ ist eine Spalte von Koordinaten, ein Funktional $f\in K^{n*}$ ist eine Zeile $(a_1,\dots,a_n)$, und $f(x)$ ist Zeile mal Spalte. Beide Räume haben dieselbe Dimension (Satz 6.2), sind aber <b>konzeptionell verschieden</b>: Ein Funktional ist ein „Messgerät”, das einem Vektor eine Zahl zuordnet.<br><br>
<b>Beispiele von Funktionalen:</b> Koordinate ablesen ($x\mapsto\alpha_i$), Auswerten eines Polynoms an einer Stelle $t_0$ ($p\mapsto p(t_0)$), Ableitung an einer Stelle ($p\mapsto p'(t_0)$), Integral ($p\mapsto\int_0^1p$), Summe aller Folgenglieder in $c_{00}$.<br><br>
<b>Vorsicht:</b> $\mathbb{R}^2\cong\mathbb{R}^{2*}$ ist zwar wahr, aber der Isomorphismus $f_{a,b}\leftrightarrow(a,b)$ hängt von der Wahl der Basis $\{e_1,e_2\}$ ab. Erst $V\cong V^{**}$ (Satz 9.0) ist „kanonisch”.`,
    example: R`<b>Evaluation:</b> $\mathrm{ev}_2: \mathbb{Q}[X]\to\mathbb{Q}$, $p\mapsto p(2)$ ist in $\mathbb{Q}[X]^*$; z.B. $\mathrm{ev}_2(1+X-X^3) = 1+2-8 = -5$.<br>
<b>Zeile ↔ Funktional:</b> $(5,-1)\in\mathbb{R}^2$ entspricht $f_{5,-1}$, und $f_{5,-1}(2,3) = 10-3 = 7$.`,
    counterexample: R`<b>$V\not\cong V^*$ im Unendlichen:</b> Für $c_{00}(\mathbb{F}_2)$ ist $\dim(c_{00}) \lt\dim(c_{00}^*)$ – der Dualraum ist überabzählbar, $c_{00}(\mathbb{F}_2)$ nur abzählbar (Serie 6, Aufgabe 27).<br>
<b>Kein Element des Dualraums:</b> $p\mapsto\deg(p)$ (Grad) ist nicht linear: $\deg(X+(-X)) = \deg(0)\neq\deg X+\deg(-X) = 2$.`
  },
  // ========================================================================
  // 6c DUALE BASIS
  // ========================================================================
  {
    id: "la6_def_duale_basis",
    title: "Definition: δ-Funktion und duale Basis B*",
    category: "6c Duale Basis",
    type: "definition",
    front: R`Wie ist die <b>δ-Funktion</b> $\delta_i^j$ definiert? Was ist die zu $B = \{x_1,\dots,x_n\}$ <b>duale Basis</b> $B^*$?`,
    back: R`<b>δ-Funktion:</b> Für $i,j\in\mathbb{N}$:
$$\delta_i^j := \begin{cases}1 & \text{falls } i = j,\\ 0 & \text{falls } i\neq j.\end{cases}$$
<b>Definition:</b> Ist $B = \{x_1,\dots,x_n\}$ eine Basis von $V$, so heisst $B^* = \{x_1^*,\dots,x_n^*\}\subseteq V^*$ mit
$$x_i^*(x_j) := \delta_i^j$$
(und linear fortgesetzt: $x_i^*(x+y) := x_i^*(x)+x_i^*(y)$, $x_i^*(\lambda x) := \lambda x_i^*(x)$) die zu $B$ <b>duale Basis</b> von $V^*$; $B$ und $B^*$ sind ein <b>Paar dualer Basen</b>.<br><br>
Konkret: $x_i^*$ liest die <b>$i$-te Koordinate</b> bzgl. $B$ ab: $x_i^*\big(\sum_j\lambda_jx_j\big) = \lambda_i$.`,
    meta: "Skript: Kap. 6, δ-Funktion (im Beweis von Satz 6.2), Definition duale Basis",
    explanation: R`<b>Die duale Basis = die Koordinaten-Ablesegeräte.</b> $x_i^*$ ist das Funktional, das „$1$ auf $x_i$, $0$ auf allen anderen Basisvektoren” ist. Wendet man es auf einen beliebigen Vektor an, erhält man dessen $i$-te Koordinate.<br><br>
<b>Damit wird alles „ablesbar”:</b><br>
• Koordinaten eines Vektors: $\lambda_i = x_i^*(x)$;<br>
• Koeffizienten eines Funktionals: $f = \sum_i f(x_i)\cdot x_i^*$ (Beweis von Satz 6.2);<br>
• Einträge einer Darstellungsmatrix: $\alpha_i^j = y_i^*(\varphi(x_j))$ (Serie 8, Aufgabe 33);<br>
• Umkehrabbildung $\Phi^{-1}: V\to K^n$ in Satz 7.3.<br><br>
<b>Wichtigste Falle:</b> $x_i^*$ hängt von der <b>ganzen</b> Basis $B$ ab, nicht nur von $x_i$ (Gegenbeispiel).`,
    example: R`$\mathbb{R}^2$ mit Basis $x_1 = (1,1)$, $x_2 = (1,-1)$: $x_1^*(a,b) = \tfrac{a+b}{2}$, $x_2^*(a,b) = \tfrac{a-b}{2}$. Probe: $x_1^*(x_1) = 1$, $x_1^*(x_2) = 0$, $x_2^*(x_1) = 0$, $x_2^*(x_2) = 1$ ✓. Für $(5,1)$: Koordinaten $(3,2)$, und tatsächlich $(5,1) = 3x_1+2x_2$.`,
    counterexample: R`<b>$x_1^*$ hängt nicht nur von $x_1$ ab:</b> In der Standardbasis $\{(1,0),(0,1)\}$ ist $(1,0)^*(a,b) = a$. In der Basis $\{(1,0),(1,1)\}$ ist aber $(1,0)^*(a,b) = a-b$ (Probe: $(1,0)\mapsto 1$, $(1,1)\mapsto 0$ ✓). Derselbe Vektor $(1,0)$, zwei verschiedene duale Funktionale!`
  },
  {
    id: "la6_satz_6_2",
    title: "Satz 6.2: dim(V*) = dim(V)",
    category: "6c Duale Basis",
    type: "satz",
    front: R`Formuliere <b>Satz 6.2</b> und skizziere die Beweisidee. Gilt er auch für unendlich-dimensionale VR?`,
    back: R`<b>Satz 6.2:</b> Sei $V$ ein <b>endlich-dimensionaler</b> VR über $K$. Dann gilt
$$\dim(V^*) = \dim(V).$$
<b>Beweisidee:</b> Ist $\{x_1,\dots,x_n\}$ eine Basis von $V$, so ist die duale Familie $\{x_1^*,\dots,x_n^*\}$ mit $x_i^*(x_j) = \delta_i^j$ eine Basis von $V^*$:<br>
• <b>erzeugend:</b> jedes $f\in V^*$ ist $f = \sum_{i=1}^nf(x_i)\cdot x_i^*$;<br>
• <b>l.u.:</b> aus $\sum\lambda_ix_i^* = 0_{V^*}$ folgt durch Einsetzen von $x_j$: $\lambda_j = 0$.<br><br>
<b>Nur endlich-dimensional:</b> Für $c_{00}$ (unendlich-dim. über $\mathbb{Q}$ bzw. $\mathbb{F}_2$) gilt $\dim(c_{00})\lt\dim(c_{00}^*)$ (Bsp. 2 / Aufgabe 27).`,
    meta: "Skript: Kap. 6, Satz 6.2; Bsp. 2 (c₀₀, Aufgabe 27)",
    explanation: R`<b>Intuition:</b> Ein Funktional ist durch seine $n$ Werte auf einer Basis bestimmt (Satz 6.0), und diese Werte darf man <b>frei wählen</b>. Also gibt es „genau $n$ Freiheitsgrade” – so viele wie Koordinaten eines Vektors.<br><br>
<b>Warum bricht es im Unendlichen?</b> Bei einer unendlichen Basis darf man die Werte eines Funktionals auf <b>allen unendlich vielen</b> Basisvektoren frei wählen (z.B. überall $1$), aber eine Linearkombination der $x_i^*$ ist auf fast allen Basisvektoren $0$ (endliche Summen!). Die $x_i^*$ erzeugen also nur einen kleinen Teil von $V^*$.<br><br>
<b>Folge:</b> $V\cong V^*$ (endl.-dim.), aber erst über die gewählte Basis; ohne Basiswahl gilt kanonisch $V\cong V^{**}$ (Satz 9.0).`,
    example: R`$V$ = Polynome vom Grad $\le 2$ (Dimension $3$), Basis $\{1,x,x^2\}$, duale Basis $\{p_0^*,p_1^*,p_2^*\}$ (Koeffizient ablesen). Das Funktional $\mathrm{ev}_2: p\mapsto p(2)$ ist $\mathrm{ev}_2 = 1\cdot p_0^*+2\cdot p_1^*+4\cdot p_2^*$, denn $\mathrm{ev}_2(1) = 1$, $\mathrm{ev}_2(x) = 2$, $\mathrm{ev}_2(x^2) = 4$. Probe: $\mathrm{ev}_2(3-x+x^2) = 3-2+4 = 5$ ✓.`,
    counterexample: R`<b>Serie 6, Aufgabe 27:</b> In $c_{00}(\mathbb{F}_2)$ mit Basis $\{e_i\}$ ist $f_{\mathbb{N}}(a) := \sum_na_n$ (Parität der Einsen) ein Funktional mit $f_{\mathbb{N}}(e_j) = 1$ für <b>alle</b> $j$; jede endliche LK $\sum_{i\in T}\lambda_ie_i^*$ ist aber $0$ auf allen $e_j$ mit $j\notin T$. Also $f_{\mathbb{N}}\notin\langle\{e_i^*\}\rangle$.`
  },
  {
    id: "la6_beweis_6_2",
    title: "Beweis von Satz 6.2 (die duale Basis ist eine Basis)",
    category: "6c Duale Basis",
    type: "beweis",
    front: R`Beweise ausführlich: Ist $\{x_1,\dots,x_n\}$ eine Basis von $V$, so ist $\{x_1^*,\dots,x_n^*\}$ eine Basis von $V^*$.`,
    back: R`Definiere $x_i^*(x_j) := \delta_i^j$ und setze linear fort.<br>
<b>1. $\langle\{x_1^*,\dots,x_n^*\}\rangle = V^*$:</b> Sei $f\in V^*$, $a_i := f(x_i)$. Wir zeigen $f = \sum_{i=1}^na_ix_i^*$. Für beliebiges $y = \sum_{j=1}^n\lambda_jx_j$ ist einerseits $f(y) = \sum_ja_j\lambda_j$, andererseits
$$\Big(\sum_{i=1}^na_ix_i^*\Big)(y) = \sum_{i=1}^n\sum_{j=1}^n a_i\lambda_j\underbrace{x_i^*(x_j)}_{=\delta_i^j} = \sum_{i=1}^na_i\lambda_i.$$
Also stimmen beide Funktionale überall überein.<br>
<b>2. l.u.:</b> Ist $f := \sum_{i=1}^n\lambda_ix_i^* = 0_{V^*}$ (das Nullfunktional), so gilt für alle $1\le j\le n$:
$$\Big(\sum_{i=1}^n\lambda_ix_i^*\Big)(x_j) = \begin{cases}0_K & \text{weil }f = 0_{V^*},\\ \lambda_j & \text{aus der Def. der }x_i^*,\end{cases}$$
also $\lambda_j = 0$ für alle $j$.<br>
Somit ist $\{x_1^*,\dots,x_n^*\}$ eine Basis von $V^*$ und $\dim(V^*) = n = \dim(V)$.`,
    meta: "Skript: Kap. 6, Beweis von Satz 6.2",
    explanation: R`<b>Zwei Standardtricks</b>, die man sich merken sollte:<br>
• <b>Gleichheit von Funktionalen</b> (allgemein: linearer Abbildungen) zeigt man durch Auswerten auf beliebigen Vektoren – oder nur auf einer Basis, da Linearität den Rest erledigt.<br>
• <b>Koeffizienten herausfiltern</b> durch Einsetzen eines Basisvektors: Wegen $x_i^*(x_j) = \delta_i^j$ „überlebt” aus der Summe genau der $j$-te Summand. Das δ wirkt wie ein Sieb.<br><br>
Dieselbe Technik liefert in Kap. 9 die Matrix der dualen Abbildung ($\eta_j^i = \mu_i^j$) und in Serie 8 die Formel $\alpha_i^j = y_i^*(\varphi(x_j))$.`,
    example: R`$V = \mathbb{R}^2$, Basis $x_1 = (1,1)$, $x_2 = (1,-1)$, $f(a,b) = 2a+3b$. Dann $a_1 = f(x_1) = 5$, $a_2 = f(x_2) = -1$, also $f = 5x_1^*-x_2^*$. Probe in $(4,2)$: $5\cdot\tfrac{6}{2}-\tfrac{2}{2} = 15-1 = 14 = 2\cdot 4+3\cdot 2$ ✓.`,
    counterexample: R`<b>Gleichheit nur auf einem Vektor genügt nicht:</b> $f(a,b) = a$ und $g(a,b) = b$ stimmen auf $(1,1)$ überein, sind aber verschieden ($f(1,0) = 1\neq 0 = g(1,0)$). Man braucht Übereinstimmung auf einer <b>ganzen Basis</b>.`
  },
  {
    id: "la6_bsp_fib_dual",
    title: "Bsp.: Duale Basis von Fib und das Funktional als Zeilenvektor",
    category: "6c Duale Basis",
    type: "beispiel",
    front: R`Sei $B = \{F_{1,0},F_{0,1}\}$ die Basis von $\mathrm{Fib}$. Beschreibe die duale Basis $B^*$ und wie ein Funktional $F^* = \lambda_1F_{1,0}^*+\lambda_2F_{0,1}^*$ auf $F_{a,b}$ wirkt.`,
    back: R`• $F_{a,b} = a\cdot F_{1,0}+b\cdot F_{0,1}$.<br>
• $B^* = \{F_{1,0}^*,F_{0,1}^*\}$ mit $F_{i,1-i}^*(F_{j,1-j}) = \delta_i^j$ für $i,j\in\{0,1\}$ – konkret: $F_{1,0}^*$ liest $f_0$ ab, $F_{0,1}^*$ liest $f_1$ ab.<br>
• $B$ und $B^*$ sind ein Paar dualer Basen.<br>
• Für $F^* = \lambda_1F_{1,0}^*+\lambda_2F_{0,1}^*$ gilt
$$F^*(F_{a,b}) = \lambda_1\cdot a+\lambda_2\cdot b = \underbrace{(\lambda_1,\lambda_2)}_{\text{entspricht }F^*}\cdot\underbrace{\begin{pmatrix}a\\b\end{pmatrix}}_{\text{entspricht }F_{a,b}}.$$`,
    meta: "Skript: Kap. 6, Bsp. 1 nach der Definition der dualen Basis (Fib, Aufgaben 11, 17)",
    explanation: R`Das Beispiel zeigt die Zeilen-Spalten-Sichtweise in einem „abstrakten” Raum: Fibonacci-Folgen sind unendliche Folgen, aber da $\dim(\mathrm{Fib}) = 2$, reichen zwei Koordinaten (die Anfangswerte). Funktionale auf Fib sind dann einfach Zeilen $(\lambda_1,\lambda_2)$.<br><br>
<b>Interessante Funktionale auf Fib</b> sind z.B. „lies das $n$-te Glied ab”: $\mathrm{ev}_n(F_{a,b}) = f_n$. Da $f_n$ linear in $(a,b)$ ist, gibt es $(\lambda_1,\lambda_2)$ mit $f_n = \lambda_1a+\lambda_2b$ – und zwar $\lambda_1 = f_n(F_{1,0})$, $\lambda_2 = f_n(F_{0,1})$.`,
    example: R`$\mathrm{ev}_4$ (viertes Glied, Index $4$): $F_{1,0} = (1,0,1,1,2,\dots)$, $F_{0,1} = (0,1,1,2,3,\dots)$ ⇒ $\mathrm{ev}_4 = 2F_{1,0}^*+3F_{0,1}^*$. Für $F_{3,5} = (3,5,8,13,21,\dots)$: $(2,3)\cdot\begin{pmatrix}3\\5\end{pmatrix} = 6+15 = 21$ ✓.`,
    counterexample: R`<b>„Summe aller Glieder”</b> ist auf Fib kein Funktional (die Reihe divergiert, z.B. für $F_{1,1} = (1,1,2,3,5,\dots)$) – nicht jede „natürliche” Zuordnung ist überhaupt definiert. Dagegen ist $F_{a,b}\mapsto f_0+f_1+f_2 = 2a+2b$ ein Funktional, nämlich $2F_{1,0}^*+2F_{0,1}^*$.`
  },
  // ========================================================================
  // SERIEN 5 UND 6
  // ========================================================================
  {
    id: "la6_s5_a26_f23",
    title: "Serie 5, Aufgabe 26: Ein Funktional auf 𝔽₂₃² auswerten",
    category: "6a Lineare Abbildungen und Funktionale",
    type: "aufgabe",
    front: R`Sei $f:\mathbb{F}_{23}^2\to\mathbb{F}_{23}$ das Funktional mit $f(22,2) = 7$ und $f(1,22) = 20$. Berechne $f(11,3)$.`,
    back: R`Setze $x_1 := (22,2) = (-1,2)$, $x_2 := (1,22) = (1,-1)$, $e_1 = (1,0)$, $e_2 = (0,1)$.<br>
<b>Standardbasis durch $x_1,x_2$ ausdrücken:</b> Ansatz $e_1 = \lambda x_1+\mu x_2$: $-\lambda+\mu = 1$, $2\lambda-\mu = 0$ ⇒ $\lambda = 1$, $\mu = 2$. Analog $e_2 = x_1+x_2$. Also
$$e_1 = x_1+2x_2,\qquad e_2 = x_1+x_2.$$
<b>Werte:</b> $f(e_1) = 7+2\cdot(-3) = 1$, $f(e_2) = 7+(-3) = 4$ (da $20 = -3$ in $\mathbb{F}_{23}$).<br>
<b>Ergebnis:</b>
$$f(11,3) = 11\cdot f(e_1)+3\cdot f(e_2) = 11+12 = 23 = 0.$$`,
    meta: "Serie 5, Aufgabe 26",
    explanation: R`<b>Strategie (Satz 6.0 rückwärts):</b> Ein Funktional ist durch seine Werte auf einer Basis bestimmt. Hier kennt man die Werte auf der Basis $\{x_1,x_2\}$; um $f(11,3)$ bequem zu berechnen, bestimmt man zuerst die Werte auf der Standardbasis – also die Zeile $(f(e_1),f(e_2)) = (1,4)$. Dann ist $f(\alpha,\beta) = \alpha+4\beta$.<br><br>
<b>Rechnen in $\mathbb{F}_{23}$:</b> Statt mit $22$ und $20$ zu rechnen, ersetzt man sie durch die kleinen Repräsentanten $-1$ und $-3$. Am Ende reduziert man modulo $23$.<br><br>
<b>Kontrolle:</b> $f(x_1) = f(-1,2) = -1+8 = 7$ ✓ und $f(x_2) = f(1,-1) = 1-4 = -3 = 20$ ✓.`,
    example: R`Mit der Formel $f(\alpha,\beta) = \alpha+4\beta$ in $\mathbb{F}_{23}$: $f(5,5) = 25 = 2$; $f(0,6) = 24 = 1$; $f(19,1) = 23 = 0$ – also liegen $(11,3)$ und $(19,1)$ im Kern von $f$ (und tatsächlich $(19,1)\cdot 3 = (57,3) = (11,3)$).`,
    counterexample: R`<b>Rechnen über $\mathbb{Q}$ statt $\mathbb{F}_{23}$ wäre falsch:</b> Mit $f(22,2) = 7$, $f(1,22) = 20$ über $\mathbb{R}$ erhielte man ein ganz anderes Funktional (die Vektoren $(22,2),(1,22)$ hätten andere Koordinaten). Der Körper bestimmt, welche Gleichungen gelten – $22 = -1$ gilt nur in $\mathbb{F}_{23}$.`
  },
  {
    id: "la6_s6_a27_c00",
    title: "Serie 6, Aufgabe 27: c₀₀(𝔽₂) – die duale Familie ist keine Basis",
    category: "6c Duale Basis",
    type: "aufgabe",
    front: R`$c_{00}(\mathbb{F}_2)$ = Folgen in $\mathbb{F}_2$ mit nur endlich vielen Einsen. Zeige: (a) $\{e_i: i\in\mathbb{N}\}$ ist eine Basis; (b) $f_S(a) := \sum_{n\in S}a_n$ ist für jedes $S\subseteq\mathbb{N}$ ein Funktional; (c) $\langle\{e_i^*\}\rangle\neq c_{00}(\mathbb{F}_2)^*$.`,
    back: R`<b>(a)</b> Für $a$ mit endlichem Träger $T = \mathrm{supp}(a) = \{n: a_n = 1\}$ ist $a = \sum_{i\in T}e_i$ (gliedweise vergleichen). l.u.: aus $\sum_k\lambda_ke_{i_k} = 0$ folgt durch Ablesen an der Stelle $i_l$: $\lambda_l = 0$.<br>
<b>(b)</b> Die Summe hat nur endlich viele Summanden $\neq 0$ ($n\in S\cap\mathrm{supp}(a)$), also wohldefiniert; Linearität gliedweise. Z.B. $f_{\{i\}} = e_i^*$; $f_{\mathbb{N}}$ = Parität der Anzahl Einsen.<br>
<b>(c)</b> Jedes $g\in W := \langle\{e_i^*\}\rangle$ ist $g = \sum_{i\in T}\lambda_ie_i^*$ ($T$ endlich), also $g(e_j) = 0$ für $j\notin T$. Aber $f_{\mathbb{N}}(e_j) = 1$ für <b>alle</b> $j$. Also $f_{\mathbb{N}}\notin W$.<br>
<b>Bem.:</b> $c_{00}(\mathbb{F}_2)^*$ ist sogar überabzählbar ($S\mapsto f_S$ ist injektiv auf $\mathcal{P}(\mathbb{N})$, Cantor), $c_{00}(\mathbb{F}_2)$ nur abzählbar – Satz 6.2 gilt nur endlich-dimensional.`,
    meta: "Serie 6, Aufgabe 27 (mit Bemerkungen); Skript Kap. 6, Bsp. 2 nach der dualen Basis",
    explanation: R`<b>Der Mechanismus:</b> Lineare Hüllen enthalten nur <b>endliche</b> Kombinationen. Ein Funktional ist aber durch beliebige Werte auf <b>allen</b> Basisvektoren festlegbar. Die $e_i^*$ erfassen nur Funktionale, die „fast überall null” auf der Basis sind.<br><br>
<b>Zählargument</b> (Musterlösung): $W$ ist abzählbar (jedes $g\in W$ entspricht einer endlichen Teilmenge von $\mathbb{N}$), aber $\{f_S: S\subseteq\mathbb{N}\}$ ist so gross wie $\mathcal{P}(\mathbb{N})$ – überabzählbar (Satz von Cantor, Kap. 1). Hier treffen sich Logik-Kapitel und lineare Algebra.<br><br>
<b>Bemerkung:</b> $\{e_i^*\}$ ist l.u. und lässt sich (Auswahlaxiom) zu einer Basis von $c_{00}^*$ erweitern – die aber echt grösser ist.`,
    example: R`$a = (1,0,1,1,0,0,\dots) = e_0+e_2+e_3$. Mit $S = \{0,1,2\}$: $f_S(a) = 1+0+1 = \bar 0$. Mit $S = \mathbb{N}$: $f_{\mathbb{N}}(a) = 1+1+1 = \bar 1$ (drei Einsen, ungerade). $e_2^*(a) = 1$.`,
    counterexample: R`<b>Im Endlichen klappt es:</b> Auf $\mathbb{F}_2^3$ ist $f_{\{0,1,2\}} = e_0^*+e_1^*+e_2^*$ – jedes Funktional liegt in der Hülle der dualen Basis, und $\dim(\mathbb{F}_2^3)^* = 3$ (es gibt $2^3 = 8$ Funktionale = 8 Teilmengen $S$).`
  },
  {
    id: "la6_s6_a28_treppen",
    title: "Serie 6, Aufgabe 28: Treppenfunktionen und das Integral als Funktional",
    category: "6c Duale Basis",
    type: "aufgabe",
    front: R`$TF([a,b])$ = Treppenfunktionen auf $[a,b]$. Zeige: (a) $B = \{\chi_t: t\in(a,b]\}\cup\{\chi_{\{s\}}: s\in[a,b]\}$ ist eine Basis ($\chi_t = 1$ auf $[a,t)$, $\chi_{\{s\}} = 1$ nur in $s$); (b) $F(f) = \int_a^bf\,dx$ ist ein Funktional; (c) $F\notin\langle\{\chi^*:\chi\in B\}\rangle$.`,
    back: R`<b>Beobachtung:</b> $\chi_t-\chi_u = \mathbb{1}_{[u,t)}$ für $a\le u\lt t\le b$ (mit $\chi_a := 0$).<br>
<b>(a) erzeugend:</b> Für $f$ mit Zerlegung $a = t_0\lt\dots\lt t_k = b$ und Werten $c_j$ auf $(t_{j-1},t_j)$ ist
$$f = \sum_{j=1}^kc_j(\chi_{t_j}-\chi_{t_{j-1}})+\sum_{j=0}^k\big(f(t_j)-g(t_j)\big)\chi_{\{t_j\}},$$
wobei $g$ die erste Summe ist. <b>l.u.:</b> In $\sum\lambda_i\chi_{t_i}+\sum\mu_j\chi_{\{s_j\}} = 0$ setze Punkte $r\in[t_{i-1},t_i)$ ausserhalb der $s_j$ ein (absteigende Induktion ⇒ $\lambda_i = 0$), dann $r = s_j$ ⇒ $\mu_j = 0$.<br>
<b>(b)</b> $\int_a^bf = \sum_jc_j(t_j-t_{j-1})$ ist linear (gemeinsame Verfeinerung).<br>
<b>(c)</b> Jedes $G\in\langle\{\chi^*\}\rangle$ verschwindet auf fast allen $\chi\in B$; aber $F(\chi_t) = t-a\gt 0$ für alle $t\in(a,b]$ – unendlich viele.`,
    meta: "Serie 6, Aufgabe 28",
    explanation: R`Wie in Aufgabe 27: Ein unendlich-dimensionaler Raum hat einen „zu grossen” Dualraum. Das <b>Integral</b> – das natürlichste Funktional auf Treppenfunktionen – ist <b>keine endliche Kombination</b> von Koordinatenfunktionalen, weil es auf jedem „Stufenbaustein” $\chi_t$ einen Wert $\neq 0$ hat.<br><br>
<b>Intuition zur Basis:</b> $\chi_t$ sind „Stufen ab $a$ bis $t$”; Differenzen von Stufen geben beliebige Treppenstufen $\mathbb{1}_{[u,t)}$. Die Punktfunktionen $\chi_{\{s\}}$ korrigieren die Werte an den endlich vielen Sprungstellen (die das Integral nicht sieht).<br><br>
<b>Verbindung zur Analysis:</b> Linearität des Integrals ist genau die Aussage „$F\in TF([a,b])^*$”.`,
    example: R`Auf $[0,3]$: $f = 2$ auf $(0,1)$, $5$ auf $(1,3)$, $f(0) = f(1) = f(3) = 0$. Dann $g = 2(\chi_1-\chi_0)+5(\chi_3-\chi_1) = -3\chi_1+5\chi_3$ (mit $\chi_0 = 0$), $g(0) = 2$, $g(1) = 5$, $g(3) = 0$, also $f = -3\chi_1+5\chi_3-2\chi_{\{0\}}-5\chi_{\{1\}}$. Integral: $F(f) = 2\cdot 1+5\cdot 2 = 12 = -3F(\chi_1)+5F(\chi_3) = -3+15$ ✓.`,
    counterexample: R`<b>Punktfunktionen allein genügen nicht:</b> $\{\chi_{\{s\}}: s\in[a,b]\}$ ist l.u., aber erzeugt nur Funktionen, die fast überall $0$ sind – $\chi_t$ (konstant $1$ auf einem Intervall) ist keine endliche Summe von Punktfunktionen.<br>
<b>Das Integral sieht Punkte nicht:</b> $F(\chi_{\{s\}}) = 0$ für alle $s$.`
  }
];
})();
