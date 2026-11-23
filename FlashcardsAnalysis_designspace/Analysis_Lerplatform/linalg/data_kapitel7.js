/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 7: Der Vektorraum Hom(V, W)  (Teil III)
   (Darstellungsmatrizen, Matrixmultiplikation, Sätze 7.1–7.6, Korollar 7.5)
   + Serien 6 (Aufg. 29), 7 (Aufg. 30–32), 8 (Aufg. 33–35)
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_7 = [
  // ========================================================================
  // 7a HOM(V,W) UND DARSTELLUNGSMATRIZEN
  // ========================================================================
  {
    id: "la7_def_hom",
    title: "Definition: Vektorraumhomomorphismus und Hom(V, W)",
    category: "7a Hom(V,W) und Darstellungsmatrizen",
    type: "definition",
    front: R`Was ist ein <b>Vektorraumhomomorphismus</b>, und was bezeichnet $\mathrm{Hom}(V,W)$? Wie hängt $V^*$ damit zusammen?`,
    back: R`Seien $V$ und $W$ zwei VR über <b>demselben</b> Körper $K$. Eine lineare Abbildung $\varphi: V\to W$ (d.h. eine lineare Funktion $V\to W$) ist ein sogenannter <b>Vektorraumhomomorphismus</b> (homos = ähnlich), und
$$\mathrm{Hom}(V,W)$$
bezeichnet die Menge aller Vektorraumhomomorphismen von $V\to W$.<br><br>
<b>Bem.:</b> $V^* = \mathrm{Hom}(V,K)$, wobei $K$ der VR über $K$ ist.<br>
<b>Notation:</b> Die Elemente aus $\mathrm{Hom}(V,W)$ werden oft mit $\varphi,\psi$, etc. bezeichnet.`,
    meta: "Skript: Kap. 7 (Teil III Lineare Abbildungen), Definition, Bem., Notation",
    explanation: R`„Homomorphismus” = <b>strukturerhaltende</b> Abbildung. Für Vektorräume ist die Struktur „addieren und skalieren”, und lineare Abbildungen erhalten genau das.<br><br>
<b>Ab hier ist das Hauptthema:</b> Nicht mehr einzelne Vektorräume, sondern <b>Abbildungen zwischen ihnen</b>. Die grossen Fragen: Wie beschreibt man lineare Abbildungen konkret (Matrizen)? Wie verhalten sie sich bei Hintereinanderausführung (Matrixprodukt)? Was ändert sich beim Basiswechsel (Kap. 8)? Was wird auf $0$ abgebildet, was wird getroffen (Kern, Bild, Kap. 10)?<br><br>
<b>Wichtige Spezialfälle:</b> $\mathrm{Hom}(V,K) = V^*$ (Funktionale), $\mathrm{Hom}(V,V)$ (Selbstabbildungen, z.B. $\varphi^n$ in Serie 8, Aufgabe 35), $\mathrm{Hom}(K^n,K^m)\cong M_{m\times n}(K)$.`,
    example: R`<b>1.</b> $\varphi:\mathbb{R}^3\to\mathbb{R}^2$, $\varphi(x,y,z) = (x+y,y-z)$; z.B. $\varphi(1,2,3) = (3,-1)$.<br>
<b>2.</b> Ableitung $V\to W$ von Polynomen Grad $\le 3$ nach Grad $\le 2$: $1+x+2x^2\mapsto 1+4x$ (Kap. 9, Beispiel).<br>
<b>3.</b> Identität $\iota: V\to V$, $x\mapsto x$; Nullabbildung $x\mapsto 0_W$.`,
    counterexample: R`<b>1. Verschiedene Körper:</b> $\mathbb{C}\to\mathbb{C}$, $z\mapsto\bar z$ ist $\mathbb{R}$-linear, aber kein Homomorphismus von $\mathbb{C}$-Vektorräumen: $\overline{i\cdot 1} = -i\neq i\cdot\bar 1$.<br>
<b>2. Nicht linear:</b> Translation $x\mapsto x+(1,0)$ in $\mathbb{R}^2$ ($0\mapsto(1,0)$).<br>
<b>3.</b> Rotation um einen Punkt $\neq 0$ ist nicht linear (der Ursprung bewegt sich).`
  },
  {
    id: "la7_satz_7_1",
    title: "Satz 7.1: Hom(V, W) ist ein Vektorraum",
    category: "7a Hom(V,W) und Darstellungsmatrizen",
    type: "satz",
    front: R`Formuliere <b>Satz 7.1</b>: Mit welchen Operationen wird $\mathrm{Hom}(V,W)$ ein Vektorraum?`,
    back: R`Seien $V$ und $W$ zwei VR über $K$. Dann ist die Menge $\mathrm{Hom}(V,W)$ mit
$$(\varphi+_{\mathrm{Hom}}\psi)(x) := \varphi(x)+_W\psi(x)\qquad(x\in V)$$
ein VR über $K$, wobei die Skalarmultiplikation definiert ist durch
$$(\lambda\cdot_{\mathrm{Hom}}\varphi)(x) := \lambda\cdot\varphi(x)\quad[\text{Skalarmult. des VR }W\text{ über }K].$$
<b>Beweis:</b> Im Wesentlichen der Beweis von Satz 6.1 [eigentlich etwas einfacher, weil man besser zwischen dem VR $W$ und dem Körper $K$ unterscheiden kann; in Satz 6.1 war $W = K$]: $\varphi+\psi$ und $\lambda\varphi$ sind wieder linear, Nullabbildung neutral, $-\varphi$ invers, Axiome punktweise aus $W$.`,
    meta: "Skript: Kap. 7, Satz 7.1",
    explanation: R`Lineare Abbildungen werden <b>punktweise</b> addiert und skaliert – wie Funktionen. Der Inhalt des Satzes: Summen und Vielfache linearer Abbildungen sind wieder linear, z.B.
$$(\varphi+\psi)(x+y) = \varphi(x)+\varphi(y)+\psi(x)+\psi(y) = (\varphi+\psi)(x)+(\varphi+\psi)(y).$$
<b>Bedeutung:</b> Abbildungen sind selbst Vektoren. Mit Basen in $V$ und $W$ entspricht $\varphi\mapsto A_\varphi$ einem <b>Isomorphismus</b> $\mathrm{Hom}(V,W)\to M_{m\times n}(K)$ (Serie 7, Aufgabe 30 + Satz 7.6): Matrizenaddition ist Addition von Abbildungen.<br><br>
<b>Zusätzlich</b> gibt es auf $\mathrm{Hom}(V,V)$ die Verknüpfung $\circ$ (Satz 7.2) – dadurch wird $\mathrm{Hom}(V,V)$ sogar ein Ring (vgl. $M_{n\times n}(K)$, Serie 7, Aufgabe 32).`,
    example: R`$\varphi,\psi:\mathbb{R}^2\to\mathbb{R}^2$, $\varphi(a,b) = (a,0)$ (Projektion), $\psi(a,b) = (b,a)$ (Spiegelung): $(\varphi+2\psi)(a,b) = (a+2b,2a)$; z.B. $(\varphi+2\psi)(1,3) = (7,2) = (1,0)+2\cdot(3,1)$ ✓.`,
    counterexample: R`<b>Nicht abgeschlossen sind z.B. die Isomorphismen:</b> $\iota$ und $-\iota$ sind bijektiv, aber $\iota+(-\iota) = 0$ ist es nicht – die bijektiven linearen Abbildungen bilden <b>keinen</b> Unterraum von $\mathrm{Hom}(V,V)$.<br>
<b>Verschiedene Zielräume:</b> $\varphi\in\mathrm{Hom}(\mathbb{R}^2,\mathbb{R}^2)$ und $\psi\in\mathrm{Hom}(\mathbb{R}^2,\mathbb{R}^3)$ kann man nicht addieren.`
  },
  {
    id: "la7_def_darstellungsmatrix",
    title: "Darstellungsmatrix A_φ einer linearen Abbildung",
    category: "7a Hom(V,W) und Darstellungsmatrizen",
    type: "definition",
    front: R`Wie gehört zu $\varphi\in\mathrm{Hom}(V,W)$ bzgl. Basen $\mathcal{B}_V = \{x_1,\dots,x_n\}$, $\mathcal{B}_W = \{y_1,\dots,y_m\}$ eine $(m\times n)$-Matrix $A_\varphi$? Was steht in der $j$-ten Spalte?`,
    back: R`• Weil $\varphi$ linear ist, genügt es, $\varphi(x_1),\dots,\varphi(x_n)$ ($=: w_1,\dots,w_n$) zu kennen: Für $x = \sum_{j=1}^n\lambda_jx_j$ ist $\varphi(x) = \sum_{j=1}^n\lambda_j\cdot w_j$.<br>
• Da $\mathcal{B}_W$ eine Basis ist, ist jedes $w_j$ eindeutig $w_j = \sum_{i=1}^m\mu_i^j\cdot y_i$ mit $\mu_i^j\in K$.<br>
• Schreibt man die Koeffizienten von $w_j$ als Spalte, erhält man die $(m\times n)$-Matrix
$$A_\varphi := \begin{pmatrix}\mu_1^1&\cdots&\mu_1^n\\\mu_2^1&&\mu_2^n\\\vdots&\ddots&\vdots\\\mu_m^1&\cdots&\mu_m^n\end{pmatrix} = \begin{pmatrix}|&|&&|\\w_1&w_2&\cdots&w_n\\|&|&&|\end{pmatrix}.$$
<b>Merke:</b> Die <b>$j$-te Spalte</b> von $A_\varphi$ enthält die Koordinaten von $\varphi(x_j)$ bzgl. $\mathcal{B}_W$ ($m$ Zeilen, $n$ Spalten).`,
    meta: "Skript: Kap. 7, Matrizen linearer Abbildungen φ ∈ Hom(V,W)",
    explanation: R`<b>Merksatz:</b> „<b>Die Spalten sind die Bilder der Basisvektoren.</b>” Mehr Information braucht man nicht, denn eine lineare Abbildung ist durch ihre Werte auf einer Basis festgelegt (vgl. Satz 6.0 für Funktionale).<br><br>
<b>Indexkonvention</b> (wie bei $M_{m\times n}(K)$): oberer Index $j$ = Spalte = „welcher Basisvektor $x_j$ von $V$”, unterer Index $i$ = Zeile = „welche Koordinate bzgl. $y_i$”. Später kurz $A_\varphi = (\mu_i^j)_m^n$.<br><br>
<b>Die Matrix hängt von beiden Basen ab!</b> Dieselbe Abbildung kann sehr verschiedene Matrizen haben (Mathematica-Beispiel: einmal „voll”, einmal diagonal). Kapitel 8 beschreibt, wie sie sich beim Basiswechsel ändert. Mit Serie 8, Aufgabe 33: $\mu_i^j = y_i^*(\varphi(x_j))$.`,
    example: R`(Stammbach III.3.5) $\varphi(x_1,x_2,x_3) = (x_1+x_2,x_2-x_3)$. Standardbasen: $\varphi(e_1) = (1,0)$, $\varphi(e_2) = (1,1)$, $\varphi(e_3) = (0,-1)$ ⇒ $A_\varphi = \begin{pmatrix}1&1&0\\0&1&-1\end{pmatrix}$.<br>
Mit $\mathcal{B}_V = \{(1,1,0),(0,1,1),(1,1,1)\}$: $\varphi(1,1,0) = (2,1)$, $\varphi(0,1,1) = (1,0)$, $\varphi(1,1,1) = (2,0)$ ⇒ $A_\varphi = \begin{pmatrix}2&1&2\\1&0&0\end{pmatrix}$.`,
    counterexample: R`<b>Zeilen statt Spalten:</b> Schreibt man die Bilder $(1,0),(1,1),(0,-1)$ als <b>Zeilen</b>, erhält man $\begin{pmatrix}1&0\\1&1\\0&-1\end{pmatrix}$ – das ist $(A_\varphi)^t$ (die Matrix der dualen Abbildung, Kap. 9), nicht $A_\varphi$.<br>
<b>Ohne Basis keine Matrix:</b> Für $\varphi: \mathbb{Q}[X]\to\mathbb{Q}[X]$, $p\mapsto p'$ gibt es keine endliche Matrix (unendlich-dimensional).`
  },
  {
    id: "la7_matrix_mal_vektor",
    title: "Matrix mal Vektor: A_φ · (λ_j) = Koordinaten von φ(x)",
    category: "7a Hom(V,W) und Darstellungsmatrizen",
    type: "proposition",
    front: R`Wie ist das Produkt einer $(m\times n)$-Matrix mit einer $(n\times 1)$-Matrix definiert, und warum gilt $A_\varphi\cdot x = \varphi(x)$ (in Koordinaten)? Rechne das Skriptbeispiel $\begin{pmatrix}2&-1&0\\1&2&3\end{pmatrix}\cdot\begin{pmatrix}1\\1\\2\end{pmatrix}$.`,
    back: R`<b>Definition:</b> Für $A = (\mu_i^j)$ ($m\times n$) und $v = \begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix}$ ist
$$A\cdot v := \begin{pmatrix}\lambda_1\mu_1^1+\lambda_2\mu_1^2+\dots+\lambda_n\mu_1^n\\\vdots\\\lambda_1\mu_m^1+\lambda_2\mu_m^2+\dots+\lambda_n\mu_m^n\end{pmatrix} = \lambda_1\cdot\begin{pmatrix}|\\w_1\\|\end{pmatrix}+\dots+\lambda_n\cdot\begin{pmatrix}|\\w_n\\|\end{pmatrix}.$$
Die $\ell$-te Komponente ist $\alpha_\ell = (\mu_\ell^1,\dots,\mu_\ell^n)\cdot\begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix}$ (Zeile $\ell$ mal Spalte).<br>
<b>Begründung:</b> $\varphi(x) = \sum_j\lambda_jw_j = \sum_j\lambda_j\sum_i\mu_i^jy_i = \sum_i\alpha_iy_i$. Also $A_\varphi\cdot(\lambda_j) = (\alpha_i)$, kurz $A_\varphi\cdot x = \varphi(x)$.<br><br>
<b>Bsp. (Skript):</b> $\begin{pmatrix}2&-1&0\\1&2&3\end{pmatrix}\cdot\begin{pmatrix}1\\1\\2\end{pmatrix} = 1\cdot\begin{pmatrix}2\\1\end{pmatrix}+1\cdot\begin{pmatrix}-1\\2\end{pmatrix}+2\cdot\begin{pmatrix}0\\3\end{pmatrix} = \begin{pmatrix}1\\9\end{pmatrix}$.`,
    meta: "Skript: Kap. 7, Multiplikation einer (m×n)-Matrix mit einer (n×1)-Matrix, Bsp.; Zusammenfassung",
    explanation: R`<b>Zwei Lesarten</b> desselben Produkts:<br>
• <b>Spaltensicht:</b> $A\cdot v$ ist die <b>Linearkombination der Spalten</b> von $A$ mit den Gewichten $\lambda_j$ – genau „$\varphi(x) = \sum\lambda_j\varphi(x_j)$”.<br>
• <b>Zeilensicht:</b> Jede Komponente ist „Zeile mal Spalte” – jede Zeile ist ein Funktional (Satz 6.0), nämlich $y_i^*\circ\varphi$.<br><br>
<b>Format-Regel:</b> $(m\times n)\cdot(n\times 1)\leadsto(m\times 1)$ – die „inneren” Zahlen müssen übereinstimmen.<br><br>
<b>Zusammenfassung des Skripts:</b> Wir sind von $\varphi\in\mathrm{Hom}(V,W)$ ausgegangen und haben bzgl. zweier Basen einen Zusammenhang zwischen $\varphi(x)$ und $A_\varphi\cdot(\lambda_j)$ hergestellt. Man hätte die Multiplikation auch abstrakt definieren und erst später den Zusammenhang zeigen können – so aber ist sie <b>motiviert</b>.`,
    example: R`<b>Mathematica-Beispiel:</b> $A_\varphi = \begin{pmatrix}1&1&-1\\2&0&-2\\1&-1&-1\end{pmatrix}$, $\varphi(e_1+2e_2-3e_3)$: $A_\varphi\cdot\begin{pmatrix}1\\2\\-3\end{pmatrix} = \begin{pmatrix}1+2+3\\2+0+6\\1-2+3\end{pmatrix} = \begin{pmatrix}6\\8\\2\end{pmatrix}$, also $6e_1+8e_2+2e_3$.`,
    counterexample: R`<b>Format passt nicht:</b> $\begin{pmatrix}2&-1&0\\1&2&3\end{pmatrix}\cdot\begin{pmatrix}1\\2\end{pmatrix}$ ist <b>nicht definiert</b> ($3\neq 2$).<br>
<b>Falsche Leserichtung:</b> Rechnet man „Spalte mal Spalte”, z.B. erste Spalte $(2,1)$ mal Vektor, entsteht Unsinn. Richtig: Zeile 1 $(2,-1,0)\cdot(1,1,2)^t = 2-1+0 = 1$.`
  },
  {
    id: "la7_bsp_wurzeln",
    title: "Bsp.: Eine Abbildung zwischen Wurzel-Räumen – Matrix und Kern",
    category: "7a Hom(V,W) und Darstellungsmatrizen",
    type: "beispiel",
    front: R`$V = \{q_0+q_1\sqrt 2+q_2\sqrt 3\}$, $W = \{p_1\sqrt 5+p_2\sqrt 7\}$ über $\mathbb{Q}$, $\mathcal{B}_V = \{1,\sqrt 2,\sqrt 3\}$, $\mathcal{B}_W = \{\sqrt 5,\sqrt 5+\sqrt 7\}$, und $\varphi(1) = \sqrt 5+\sqrt 7$, $\varphi(\sqrt 2) = 3\sqrt 5+2\sqrt 7$, $\varphi(\sqrt 3) = 2\sqrt 5+\sqrt 7$. Bestimme $A_\varphi$ und $\varphi(1-\sqrt 2+\sqrt 3)$.`,
    back: R`Mit $y_1 = \sqrt 5$, $y_2 = \sqrt 5+\sqrt 7$:
$$\varphi(x_1) = y_2,\qquad\varphi(x_2) = y_1+2y_2,\qquad\varphi(x_3) = y_1+y_2$$
(Probe: $y_1+2y_2 = 3\sqrt 5+2\sqrt 7$ ✓). Also
$$A_\varphi = \begin{pmatrix}0&1&1\\1&2&1\end{pmatrix}.$$
Für $x_0 := x_1-x_2+x_3 = 1-\sqrt 2+\sqrt 3$:
$$A_\varphi\cdot\begin{pmatrix}1\\-1\\1\end{pmatrix} = \begin{pmatrix}0-1+1\\1-2+1\end{pmatrix} = \begin{pmatrix}0\\0\end{pmatrix}\;\Rightarrow\;\varphi(x_0) = 0_W.$$
Ersetzt man in $\mathcal{B}_V$ den Vektor $x_3$ durch $x_0$, so wird $A_\varphi = \begin{pmatrix}0&1&0\\1&2&0\end{pmatrix}$.<br>
<b>Bem.:</b> $\{x\in V: \varphi(x) = 0_W\}$ ist ein UR von $V$ (Aufgabe 25(d)) – der Kern (Kap. 10).`,
    meta: "Skript: Kap. 7, Bsp. (V, W mit Wurzeln) und Bem.",
    explanation: R`<b>Lektionen des Beispiels:</b><br>
1. Die Matrix hängt von den Basen ab – auch von der <b>Wahl in $W$</b>: Bzgl. $\{\sqrt 5,\sqrt 7\}$ hätte $\varphi(1)$ die Koordinaten $(1,1)$, bzgl. $\{\sqrt 5,\sqrt 5+\sqrt 7\}$ aber $(0,1)$.<br>
2. Ein Vektor, der auf $0$ abgebildet wird, liefert eine <b>Nullspalte</b>, wenn man ihn als Basisvektor wählt. Geschickte Basiswahl macht Matrizen einfacher – das Leitmotiv von Kapitel 8 (Basiswechsel).<br>
3. $\varphi$ kann nicht injektiv sein: $\dim(V) = 3\gt 2 = \dim(W)$; irgendein Vektor $\neq 0$ muss auf $0$ gehen.`,
    example: R`$\varphi(2+\sqrt 3)$: Koordinaten $(2,0,1)$ ⇒ $A_\varphi(2,0,1)^t = (1,3)^t$, also $\varphi(2+\sqrt 3) = y_1+3y_2 = 4\sqrt 5+3\sqrt 7$. Direkt: $2(\sqrt 5+\sqrt 7)+(2\sqrt 5+\sqrt 7) = 4\sqrt 5+3\sqrt 7$ ✓.`,
    counterexample: R`<b>Koordinaten bzgl. falscher Basis:</b> Liest man $\varphi(\sqrt 2) = 3\sqrt 5+2\sqrt 7$ als Spalte $(3,2)$, so benutzt man die Basis $\{\sqrt 5,\sqrt 7\}$ statt $\mathcal{B}_W$ – dann ergäbe $A_\varphi(1,-1,1)^t$ den Vektor $(1-3+2,1-2+1) = (0,0)$ zwar auch, aber die Matrix $\begin{pmatrix}1&3&2\\1&2&1\end{pmatrix}$ ist eine <b>andere</b> (gehört zu einem anderen Basispaar).`
  },
  // ========================================================================
  // 7b VERKNÜPFUNG UND MATRIXMULTIPLIKATION
  // ========================================================================
  {
    id: "la7_satz_7_2",
    title: "Satz 7.2: Die Verknüpfung linearer Abbildungen ist linear",
    category: "7b Verknüpfung und Matrixmultiplikation",
    type: "satz",
    front: R`Formuliere und beweise <b>Satz 7.2</b> (in einem Schritt für (i) und (ii)).`,
    back: R`<b>Satz 7.2:</b> Seien $V,W,U$ drei VR über demselben Körper $K$ und $\varphi\in\mathrm{Hom}(V,W)$, $\psi\in\mathrm{Hom}(W,U)$. Dann ist die Verknüpfung $\psi\circ\varphi$, definiert durch $(\psi\circ\varphi)(x) := \psi(\varphi(x))$, eine <b>lineare Abbildung $V\to U$</b>. [Bem.: Manchmal schreibt man $\psi\cdot\varphi$ oder $\psi\varphi$.]<br><br>
<b>Beweis:</b> $\psi\circ\varphi$ ist eine Abbildung $V\to U$. Linearität in einem Schritt:
$$\begin{aligned}(\psi\circ\varphi)(\lambda\cdot x+_Vy) &= \psi(\varphi(\lambda\cdot x+_Vy)) &&\text{Def. von }\psi\circ\varphi\\&= \psi(\lambda\cdot\varphi(x)+_W\varphi(y)) &&\varphi\text{ ist lin.}\\&= \lambda\cdot\psi(\varphi(x))+_U\psi(\varphi(y)) &&\psi\text{ ist lin.}\\&= \lambda\cdot(\psi\circ\varphi)(x)+_U(\psi\circ\varphi)(y).\end{aligned}$$
<b>Bem.:</b> $\psi\circ\varphi$ für $\varphi\in\mathrm{Hom}(V,W)$, $\psi\in\mathrm{Hom}(V',W')$ ist nur definiert, wenn $W = V'$ – insbesondere, wenn $\varphi,\psi\in\mathrm{Hom}(V,V)$.`,
    meta: "Skript: Kap. 7, Satz 7.2 mit Beweis (im Skript steht im Satz „V → W”, gemeint ist V → U)",
    explanation: R`<b>Der Ein-Schritt-Trick:</b> Statt (i) und (ii) einzeln zu prüfen, zeigt man $f(\lambda x+y) = \lambda f(x)+f(y)$. Mit $\lambda = 1$ folgt (i), mit $y = 0$ folgt (ii) (Stammbach III.2.1 (iii)).<br><br>
<b>Bedeutung:</b> Hintereinanderausführen bleibt in der Welt der linearen Abbildungen. Daraus wird gleich die <b>Matrixmultiplikation</b> definiert: $A_\psi\cdot A_\varphi := A_{\psi\circ\varphi}$. Assoziativität des Matrixprodukts folgt dann gratis aus der Assoziativität von $\circ$ (Serie 7, Aufgabe 32).<br><br>
<b>Lesart von rechts nach links:</b> $\psi\circ\varphi$ heisst „zuerst $\varphi$, dann $\psi$”.`,
    example: R`$\varphi:\mathbb{R}^2\to\mathbb{R}^3$, $\varphi(a,b) = (a,b,a+b)$; $\psi:\mathbb{R}^3\to\mathbb{R}$, $\psi(u,v,w) = u-w$. Dann $(\psi\circ\varphi)(a,b) = a-(a+b) = -b$ – linear. Z.B. $(\psi\circ\varphi)(3,5) = \psi(3,5,8) = -5$.`,
    counterexample: R`<b>1. Nicht definiert:</b> $\varphi:\mathbb{R}^2\to\mathbb{R}^3$, $\psi:\mathbb{R}^2\to\mathbb{R}^2$: $\psi\circ\varphi$ ergibt keinen Sinn ($\varphi(x)\in\mathbb{R}^3$ liegt nicht im Definitionsbereich von $\psi$).<br>
<b>2. Reihenfolge zählt:</b> Mit $\varphi(a,b) = (b,a)$ und $\psi(a,b) = (a,0)$ ist $\psi\circ\varphi(1,2) = (2,0)$, aber $\varphi\circ\psi(1,2) = (0,1)$.`
  },
  {
    id: "la7_matrixmultiplikation",
    title: "Multiplikation von Matrizen: A_ψ · A_φ := A_{ψ∘φ}",
    category: "7b Verknüpfung und Matrixmultiplikation",
    type: "definition",
    front: R`Wie definiert das Skript das Matrixprodukt $A_\psi\cdot A_\varphi$, und welche Formel ergibt sich für den Eintrag $\beta_{\ell_0}^{j_0}$ (Zeile $\ell_0$, Spalte $j_0$)? Rechne $\begin{pmatrix}1&2&3\\-1&0&1\end{pmatrix}\cdot\begin{pmatrix}1&-1\\0&2\\3&-1\end{pmatrix}$.`,
    back: R`Seien $\mathcal{B}_V = \{x_1,\dots,x_n\}$, $\mathcal{B}_W = \{y_1,\dots,y_m\}$, $\mathcal{B}_U = \{z_1,\dots,z_k\}$ Basen, $\varphi\in\mathrm{Hom}(V,W)$, $\psi\in\mathrm{Hom}(W,U)$. Dann ist $A_\psi$ eine $(k\times m)$-, $A_\varphi$ eine $(m\times n)$- und $A_{\psi\circ\varphi}$ eine $(k\times n)$-Matrix. <b>Definition:</b>
$$A_\psi\cdot A_\varphi := A_{\psi\circ\varphi}\qquad\text{„}(k\times m)\cdot(m\times n)\leadsto(k\times n)\text{”}.$$
Mit $A_\varphi = (\mu_i^j)$, $A_\psi = (\eta_\ell^i)$, $A_{\psi\circ\varphi} = (\beta_\ell^j)$: $(\psi\circ\varphi)(x_{j_0}) = \psi\big(\sum_i\mu_i^{j_0}y_i\big) = \sum_i\mu_i^{j_0}\sum_\ell\eta_\ell^iz_\ell$, also
$$\beta_{\ell_0}^{j_0} = \sum_{i=1}^m\mu_i^{j_0}\cdot\eta_{\ell_0}^i = (\eta_{\ell_0}^1,\dots,\eta_{\ell_0}^m)\cdot\begin{pmatrix}\mu_1^{j_0}\\\vdots\\\mu_m^{j_0}\end{pmatrix}$$
= <b>Zeile $\ell_0$ von $A_\psi$ mal Spalte $j_0$ von $A_\varphi$</b>.<br>
<b>Bsp.:</b> $\begin{pmatrix}1&2&3\\-1&0&1\end{pmatrix}\begin{pmatrix}1&-1\\0&2\\3&-1\end{pmatrix} = \begin{pmatrix}10&0\\2&0\end{pmatrix}$.`,
    meta: "Skript: Kap. 7, Multiplikation von Matrizen, Bsp.",
    explanation: R`<b>Die Matrixmultiplikation ist so definiert, dass sie die Hintereinanderausführung darstellt.</b> Das erklärt die seltsam wirkende Regel „Zeile mal Spalte”: Die $j$-te Spalte von $A_{\psi\circ\varphi}$ muss $\psi(\varphi(x_j))$ in Koordinaten sein, d.h. $A_\psi\cdot(\text{Spalte }j\text{ von }A_\varphi)$.<br><br>
<b>Spaltensicht:</b> Spalte $j$ von $A_\psi A_\varphi$ = $A_\psi\cdot$ (Spalte $j$ von $A_\varphi$). <b>Zeilensicht:</b> Eintrag = Zeile mal Spalte.<br><br>
<b>Format:</b> Die innere Dimension $m = \dim(W)$ muss passen (das „Zwischenziel”). Rechenregeln (Stammbach I.1.11): $A(B+C) = AB+AC$ (Serie 7, Aufgabe 31), $(\lambda A)B = \lambda(AB) = A(\lambda B)$, $A(BC) = (AB)C$ – aber im Allgemeinen <b>$AB\neq BA$</b>.`,
    example: R`Ausgerechnet: Zeile 1 mal Spalte 1: $1\cdot 1+2\cdot 0+3\cdot 3 = 10$; Zeile 1 mal Spalte 2: $-1+4-3 = 0$; Zeile 2 mal Spalte 1: $-1+0+3 = 2$; Zeile 2 mal Spalte 2: $1+0-1 = 0$.<br>
(Stammbach III.3.12) $B = \begin{pmatrix}2&-1\\1&1\\0&0\end{pmatrix}$, $A = \begin{pmatrix}1&1&0\\0&1&-1\end{pmatrix}$: $BA = \begin{pmatrix}2&1&1\\1&2&-1\\0&0&0\end{pmatrix}$ ($3\times 3$), $AB = \begin{pmatrix}3&0\\1&1\end{pmatrix}$ ($2\times 2$).`,
    counterexample: R`<b>Eintragsweise Multiplikation ist falsch:</b> $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ „mal” $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ eintragsweise gäbe $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, richtig ist $\begin{pmatrix}1&-1\\0&-1\end{pmatrix}$.<br>
<b>Format:</b> $\begin{pmatrix}1&2\\3&4\end{pmatrix}\cdot\begin{pmatrix}1&2&3\end{pmatrix}$ ist nicht definiert ($2\neq 1$).`
  },
  {
    id: "la7_nichtkommutativ",
    title: "Bem.: Matrixmultiplikation ist im Allgemeinen nicht kommutativ",
    category: "7b Verknüpfung und Matrixmultiplikation",
    type: "beispiel",
    front: R`Zeige an einem Beispiel des Skripts, dass für $(n\times n)$-Matrizen im Allgemeinen $A\cdot B\neq B\cdot A$ gilt. Was bedeutet das geometrisch?`,
    back: R`$$\begin{pmatrix}1&1\\0&1\end{pmatrix}\cdot\begin{pmatrix}1&0\\0&-1\end{pmatrix} = \begin{pmatrix}1&-1\\0&-1\end{pmatrix}\;\neq\;\begin{pmatrix}1&1\\0&-1\end{pmatrix} = \begin{pmatrix}1&0\\0&-1\end{pmatrix}\cdot\begin{pmatrix}1&1\\0&1\end{pmatrix}.$$
Allgemein (Serie 7, Aufgabe 32(b)): Der Ring $M_{n\times n}(K)$ ist <b>nur für $n = 1$</b> kommutativ; für $n\ge 2$ ist z.B. $E_{12}E_{21} = E_{11}\neq E_{22} = E_{21}E_{12}$.`,
    meta: "Skript: Kap. 7, Bem. nach der Matrixmultiplikation; Serie 7, Aufgabe 32(b)",
    explanation: R`Da $AB$ die Abbildung „zuerst $B$, dann $A$” darstellt, heisst Nicht-Kommutativität: <b>Die Reihenfolge von Transformationen zählt.</b><br><br>
<b>Geometrisch:</b> $S := \begin{pmatrix}1&1\\0&1\end{pmatrix}$ ist eine Scherung (schiebt nach rechts, proportional zur Höhe), $P := \begin{pmatrix}1&0\\0&-1\end{pmatrix}$ die Spiegelung an der $x$-Achse. „Erst spiegeln, dann scheren” ($SP$) schiebt einen Punkt unterhalb der Achse nach links; „erst scheren, dann spiegeln” ($PS$) schiebt den ursprünglichen Punkt nach rechts und spiegelt danach. Ergebnis verschieden.<br><br>
<b>Alltag:</b> Erst Socken, dann Schuhe ≠ erst Schuhe, dann Socken.<br><br>
<b>Ausnahmen:</b> Diagonalmatrizen kommutieren untereinander; jede Matrix kommutiert mit $I_n$ und mit ihren eigenen Potenzen.`,
    example: R`Mit der Scherung $S := \begin{pmatrix}1&1\\0&1\end{pmatrix}$ und der Spiegelung $P := \begin{pmatrix}1&0\\0&-1\end{pmatrix}$ auf den Vektor $(0,1)$: $SP(0,1)^t = S(0,-1)^t = (-1,-1)^t$, aber $PS(0,1)^t = P(1,1)^t = (1,-1)^t$.<br>
Kommutierend: $\begin{pmatrix}2&0\\0&3\end{pmatrix}\begin{pmatrix}5&0\\0&-1\end{pmatrix} = \begin{pmatrix}10&0\\0&-3\end{pmatrix} = \begin{pmatrix}5&0\\0&-1\end{pmatrix}\begin{pmatrix}2&0\\0&3\end{pmatrix}$.`,
    counterexample: R`<b>$n = 1$:</b> $(\alpha)\cdot(\beta) = (\alpha\beta) = (\beta\alpha) = (\beta)\cdot(\alpha)$ – $M_{1\times 1}(K)$ ist „im Wesentlichen $K$” und kommutativ.<br>
<b>Nicht einmal beide definiert:</b> Für $A$ ($2\times 3$) und $B$ ($3\times 3$) existiert $AB$, aber $BA$ nicht.`
  },
  {
    id: "la7_s7_a30_add",
    title: "Serie 7, Aufgabe 30: Addition und Skalarmultiplikation von Matrizen",
    category: "7b Verknüpfung und Matrixmultiplikation",
    type: "aufgabe",
    front: R`Wie müssen $A_\varphi+A_\psi$ und $\lambda\cdot A_\varphi$ definiert werden, damit $A_{\varphi+_{\mathrm{Hom}}\psi} = A_\varphi+A_\psi$ und $A_{\lambda\cdot\varphi} = \lambda\cdot A_\varphi$ gilt?`,
    back: R`Seien $A_\varphi = (\beta_i^j)$, $A_\psi = (\gamma_i^j)$, also $\varphi(x_j) = \sum_i\beta_i^jy_i$, $\psi(x_j) = \sum_i\gamma_i^jy_i$.<br>
<b>(a)</b> $(\varphi+_{\mathrm{Hom}}\psi)(x_j) = \varphi(x_j)+\psi(x_j) = \sum_{i=1}^m(\beta_i^j+\gamma_i^j)\cdot y_i$. Wegen der Eindeutigkeit der Koordinaten (Satz 4.1) muss gelten
$$(\beta_i^j)+(\gamma_i^j) := (\beta_i^j+\gamma_i^j)\quad\text{(eintragsweise)}.$$
<b>(b)</b> $(\lambda\cdot\varphi)(x_j) = \lambda\cdot\sum_i\beta_i^jy_i = \sum_i(\lambda\beta_i^j)y_i$ ⇒ $\lambda\cdot(\beta_i^j) := (\lambda\cdot\beta_i^j)$.<br><br>
<b>Bem.:</b> Damit ist $M_{m\times n}(K)$ ein VR über $K$, und $\varphi\mapsto A_\varphi$ ist eine lineare Abbildung $\mathrm{Hom}(V,W)\to M_{m\times n}(K)$, die nach Korollar 7.5 und Satz 7.6 bijektiv ist.`,
    meta: "Serie 7, Aufgabe 30; Skript Kap. 7, Addition von Matrizen und Multiplikation mit einem Skalar",
    explanation: R`Das Skript leitet <b>alle</b> Matrixoperationen aus den Abbildungen her: Produkt ↔ Verknüpfung, Summe ↔ punktweise Summe, Skalarmultiplikation ↔ punktweise Skalierung. Damit ist die Zuordnung $\varphi\mapsto A_\varphi$ <b>strukturerhaltend</b> – ein Isomorphismus von Vektorräumen (und für $V = W$ sogar von Ringen).<br><br>
<b>Der Schlüssel</b> ist wieder die Eindeutigkeit der Koordinaten: Hat ein Vektor zwei Darstellungen in einer Basis, so sind die Koeffizienten gleich – also ist die Matrix von $\varphi+\psi$ <b>gezwungenermassen</b> die eintragsweise Summe.`,
    example: R`$\varphi(a,b) = (a+b,a)$, $\psi(a,b) = (b,-a)$ auf $\mathbb{R}^2$ (Standardbasis): $A_\varphi = \begin{pmatrix}1&1\\1&0\end{pmatrix}$, $A_\psi = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $A_\varphi+A_\psi = \begin{pmatrix}1&2\\0&0\end{pmatrix}$. Direkt: $(\varphi+\psi)(a,b) = (a+2b,0)$ ✓.`,
    counterexample: R`<b>Matrix der Verknüpfung ist nicht die Summe:</b> $A_{\psi\circ\varphi} = A_\psi A_\varphi = \begin{pmatrix}0&1\\-1&0\end{pmatrix}\begin{pmatrix}1&1\\1&0\end{pmatrix} = \begin{pmatrix}1&0\\-1&-1\end{pmatrix}\neq A_\psi+A_\varphi$. Probe: $\psi(\varphi(a,b)) = \psi(a+b,a) = (a,-a-b)$ ✓.`
  },
  {
    id: "la7_s7_a31_distributiv",
    title: "Serie 7, Aufgabe 31: Distributivgesetz A·(B + C) = A·B + A·C",
    category: "7b Verknüpfung und Matrixmultiplikation",
    type: "aufgabe",
    front: R`Zeige für $A = (\alpha_l^i)$ ($k\times m$) und $B = (\beta_i^j)$, $C = (\gamma_i^j)$ ($m\times n$): $A\cdot(B+C) = (A\cdot B)+(A\cdot C)$ – einmal direkt, einmal über lineare Abbildungen.`,
    back: R`<b>1. Beweis (Einträge):</b> Mit $(A\cdot B)_l^j = \sum_{i=1}^m\alpha_l^i\beta_i^j$:
$$\big(A(B+C)\big)_l^j = \sum_{i=1}^m\alpha_l^i(\beta_i^j+\gamma_i^j) = \sum_i\alpha_l^i\beta_i^j+\sum_i\alpha_l^i\gamma_i^j = (AB)_l^j+(AC)_l^j.$$
<b>2. Beweis (Abbildungen):</b> Wähle (Korollar 7.5) $\varphi_1,\varphi_2\in\mathrm{Hom}(V,W)$, $\psi\in\mathrm{Hom}(W,U)$ mit $A_{\varphi_1} = B$, $A_{\varphi_2} = C$, $A_\psi = A$. Für $x\in V$:
$$\big(\psi\circ(\varphi_1+\varphi_2)\big)(x) = \psi(\varphi_1(x)+\varphi_2(x)) = \psi(\varphi_1(x))+\psi(\varphi_2(x)),$$
weil $\psi$ linear ist. Matrizen nehmen: $A(B+C) = A_\psi A_{\varphi_1+\varphi_2} = A_{\psi\circ\varphi_1+\psi\circ\varphi_2} = AB+AC$.`,
    meta: "Serie 7, Aufgabe 31",
    explanation: R`<b>Zwei Beweisstile</b>, die man beide beherrschen sollte:<br>
• <b>Koordinatenweise</b>: robust, aber man muss Indizes sorgfältig verwalten (oben = Spalte, unten = Zeile).<br>
• <b>Abstrakt</b>: Matrizenregeln sind Spiegelbilder von Abbildungsregeln. $A(B+C) = AB+AC$ ist genau die <b>Linearität von $\psi$</b>. Das zweite Distributivgesetz $(B+C)D = BD+CD$ ist dagegen schon die <b>Definition</b> der Summe von Abbildungen: $(\varphi_1+\varphi_2)\circ\chi = \varphi_1\circ\chi+\varphi_2\circ\chi$ (gilt sogar für nichtlineare $\varphi_i$).<br><br>
Zusammen mit Assoziativität werden die Distributivgesetze in Aufgabe 32 gebraucht, um zu zeigen, dass $M_{n\times n}(K)$ ein Ring ist.`,
    example: R`$A = \begin{pmatrix}1&2\\0&1\end{pmatrix}$, $B = \begin{pmatrix}1&0\\1&0\end{pmatrix}$, $C = \begin{pmatrix}0&1\\0&1\end{pmatrix}$: $B+C = \begin{pmatrix}1&1\\1&1\end{pmatrix}$, $A(B+C) = \begin{pmatrix}3&3\\1&1\end{pmatrix}$; $AB = \begin{pmatrix}3&0\\1&0\end{pmatrix}$, $AC = \begin{pmatrix}0&3\\0&1\end{pmatrix}$, Summe $\begin{pmatrix}3&3\\1&1\end{pmatrix}$ ✓.`,
    counterexample: R`<b>Reihenfolge beim Ausmultiplizieren:</b> $A(B+C) = AB+AC$, aber <b>nicht</b> $= BA+CA$: mit den Matrizen links ist $BA = \begin{pmatrix}1&2\\1&2\end{pmatrix}$, $CA = \begin{pmatrix}0&1\\0&1\end{pmatrix}$, Summe $\begin{pmatrix}1&3\\1&3\end{pmatrix}\neq\begin{pmatrix}3&3\\1&1\end{pmatrix}$.<br>
<b>Binomische Formel falsch:</b> $(A+B)^2 = A^2+AB+BA+B^2\neq A^2+2AB+B^2$, wenn $AB\neq BA$.`
  },
  {
    id: "la7_s7_a32_ring",
    title: "Serie 7, Aufgabe 32: M_{n×n}(K) ist ein Ring, nur für n = 1 kommutativ",
    category: "7b Verknüpfung und Matrixmultiplikation",
    type: "aufgabe",
    front: R`Zeige: (a) $(M_{n\times n}(K),+,\cdot)$ ist ein Ring; (b) er ist nur für $n = 1$ kommutativ. Welche Rolle spielt $I_n$?`,
    back: R`<b>(a)</b> $(M,+)$ abelsche Gruppe (eintragsweise). <b>Assoziativität:</b> Mit $A = A_\varphi$, $B = A_\psi$, $C = A_\chi$ (Korollar 7.5) folgt $(AB)C = A(BC)$ aus $(\varphi\circ\psi)\circ\chi = \varphi\circ(\psi\circ\chi)$ (beide: $x\mapsto\varphi(\psi(\chi(x)))$). <b>Einselement:</b> $I_n := (\delta_i^j) = A_{\mathrm{Id}}$ mit $I_nA = A = AI_n$. <b>Distributiv:</b> Aufgabe 31.<br>
<b>(b)</b> $n = 1$: $(\alpha)(\beta) = (\alpha\beta) = (\beta\alpha)$. $n\ge 2$: Für $E_{rs}$ (1 in Zeile $r$, Spalte $s$; im Skript, Satz 7.6: $E_r^s$) gilt
$$E_{rs}\cdot E_{tu} = \begin{cases}E_{ru} & s = t\\ 0 & s\neq t\end{cases},\qquad E_{12}E_{21} = E_{11}\neq E_{22} = E_{21}E_{12}.$$`,
    meta: "Serie 7, Aufgabe 32; Skript Kap. 8 (In, „Mn×n(K) ist ein Ring”)",
    explanation: R`<b>Matrizen erben die Algebra der Abbildungen:</b> Weil $\varphi\mapsto A_\varphi$ Verknüpfung in Produkt übersetzt, gilt jede Regel über $\circ$ auch für Matrizen – Assoziativität kostet nichts, während der direkte Beweis über Dreifachsummen mühsam ist.<br><br>
<b>$I_n$</b> ist die Matrix der Identität; sie wird in Kapitel 8 gebraucht: Basiswechselmatrizen erfüllen $(\alpha_i^j)(\tilde\alpha_i^j) = I_n$ – sie sind zueinander <b>invers</b>. Dort benutzt das Skript genau, dass $M_{n\times n}(K)$ ein Ring mit Einselement $I_n$ ist.<br><br>
<b>Konsequenzen der Nicht-Kommutativität:</b> Nullteiler ($E_{12}E_{12} = 0$), $(AB)^{-1} = B^{-1}A^{-1}$, binomische Formel nur für kommutierende Matrizen.`,
    example: R`$E_{12}E_{21} = \begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}0&0\\1&0\end{pmatrix} = \begin{pmatrix}1&0\\0&0\end{pmatrix}$, $E_{21}E_{12} = \begin{pmatrix}0&0\\0&1\end{pmatrix}$.<br>
$I_2\cdot\begin{pmatrix}2&7\\1&8\end{pmatrix} = \begin{pmatrix}2&7\\1&8\end{pmatrix}$.`,
    counterexample: R`<b>Kein Körper (für $n\ge 2$):</b> $E_{12}\neq 0$ hat kein Inverses, denn $E_{12}\cdot E_{12} = 0$ (Nullteiler, vgl. Satz 2.1 (b)).<br>
<b>Nicht-quadratische Matrizen</b> bilden keinen Ring: Das Produkt zweier $(2\times 3)$-Matrizen ist nicht definiert.`
  },
  {
    id: "la7_s8_a33",
    title: "Serie 8, Aufgabe 33: Einträge der Darstellungsmatrix via duale Basis",
    category: "7b Verknüpfung und Matrixmultiplikation",
    type: "aufgabe",
    front: R`Zeige mit dualen Basen: (a) $\alpha_i^j = y_i^*\big(\varphi(x_j)\big)$ für $A_\varphi = (\alpha_i^j)_m^n$; (b) für $A_{\psi\circ\varphi} = (\beta_l^j)_k^n$ gilt $\beta_l^j = \sum_{i=1}^mz_l^*(\psi(y_i))\cdot y_i^*(\varphi(x_j))$.`,
    back: R`<b>(a)</b> $\varphi(x_j) = \sum_{i'=1}^m\alpha_{i'}^jy_{i'}$. Wende das lineare Funktional $y_i^*$ an:
$$y_i^*(\varphi(x_j)) = \sum_{i'=1}^m\alpha_{i'}^j\cdot y_i^*(y_{i'}) = \sum_{i'}\alpha_{i'}^j\delta_i^{i'} = \alpha_i^j.$$
<b>(b)</b> Nach (a) für $\psi\circ\varphi$: $\beta_l^j = z_l^*((\psi\circ\varphi)(x_j))$. Mit $(\psi\circ\varphi)(x_j) = \psi\big(\sum_i\alpha_i^jy_i\big) = \sum_i\alpha_i^j\psi(y_i)$ folgt
$$\beta_l^j = \sum_{i=1}^m\alpha_i^j\cdot z_l^*(\psi(y_i)) = \sum_{i=1}^mz_l^*(\psi(y_i))\cdot y_i^*(\varphi(x_j)).$$
<b>Bem.:</b> Mit $A_\psi = (\eta_l^i)$, $\eta_l^i = z_l^*(\psi(y_i))$, ist das $\beta_l^j = \sum_i\eta_l^i\alpha_i^j$ – die Formel für $A_\psi\cdot A_\varphi$.`,
    meta: "Serie 8, Aufgabe 33",
    explanation: R`<b>Merksatz:</b> „Eintrag $(i,j)$ = $i$-te Koordinate des Bildes des $j$-ten Basisvektors” – und die $i$-te Koordinate liest das duale Funktional $y_i^*$ ab. Kompakter geht die Definition der Darstellungsmatrix nicht.<br><br>
<b>Nutzen:</b> Formeln für Matrizen werden zu Rechnungen mit Funktionalen, z.B. die Herleitung der Produktformel in (b), oder in Kap. 9 der Nachweis $A_{\varphi^*} = (A_\varphi)^t$: $\eta_j^i = (\varphi^*(y_i^*))(x_j) = y_i^*(\varphi(x_j)) = \mu_i^j$.`,
    example: R`$\varphi(x_1,x_2,x_3) = (x_1+x_2,x_2-x_3)$, $\mathcal{B}_V = \{(1,1,0),(0,1,1),(1,1,1)\}$, Standardbasis in $\mathbb{R}^2$ ($y_i^*$ = $i$-te Komponente): $\alpha_1^3 = y_1^*(\varphi(1,1,1)) = y_1^*(2,0) = 2$, $\alpha_2^1 = y_2^*(\varphi(1,1,0)) = y_2^*(2,1) = 1$ – passend zu $A_\varphi = \begin{pmatrix}2&1&2\\1&0&0\end{pmatrix}$.`,
    counterexample: R`<b>Falsches Funktional:</b> $\alpha_i^j\neq x_j^*(\varphi(\dots))$ – das duale Funktional muss aus dem <b>Zielraum</b> $W^*$ kommen ($y_i^*$), denn $\varphi(x_j)\in W$. $x_j^*$ ist auf $W$ gar nicht definiert (für $V\neq W$).<br>
<b>Duale Basis der falschen Basis:</b> Mit $\mathcal{B}_W = \{(1,1),(1,-1)\}$ ist $y_1^*(a,b) = \tfrac{a+b}2$, und $\alpha_1^3 = y_1^*(2,0) = 1\neq 2$ – andere Basis, andere Matrix.`
  },
  // ========================================================================
  // 7c ISOMORPHIE UND DIMENSION VON HOM(V,W)
  // ========================================================================
  {
    id: "la7_def_isomorph",
    title: "Definition: Isomorphe Vektorräume V ≅ W",
    category: "7c Isomorphie und dim Hom(V,W)",
    type: "definition",
    front: R`Wann sind zwei Vektorräume <b>isomorph</b>? Was folgt für die Umkehrabbildung?`,
    back: R`Zwei VR $V$ und $W$ über demselben Körper $K$ sind <b>isomorph</b> genau dann, wenn ein <b>bijektiver Vektorraumhomomorphismus</b> $\Phi\in\mathrm{Hom}(V,W)$ existiert. Sind $V$ und $W$ isomorph, so schreiben wir
$$V\cong W.$$
[und damit auch $\Phi^{-1}\in\mathrm{Hom}(W,V)$]`,
    meta: "Skript: Kap. 7, Hom(Kⁿ, Kᵐ): Definition isomorph",
    explanation: R`„Isomorph” = <b>gleich gebaut</b>: Ein Isomorphismus ist eine Umbenennung der Vektoren, die Addition und Skalarmultiplikation respektiert. Alles, was man in $V$ linear-algebraisch tun kann, kann man genauso in $W$ tun.<br><br>
<b>Die Umkehrabbildung ist automatisch linear</b> (Stammbach II.4.7): Aus $\Phi(\Phi^{-1}(u)+\Phi^{-1}(v)) = u+v$ folgt $\Phi^{-1}(u+v) = \Phi^{-1}(u)+\Phi^{-1}(v)$; analog für Skalare.<br><br>
<b>Isomorphismen erhalten l.u. und Basen</b> (Stammbach II.4.10): Daher haben isomorphe endlich-dimensionale VR gleiche Dimension – und umgekehrt sind gleich-dimensionale VR isomorph (Satz 7.3).`,
    example: R`<b>1.</b> Polynome vom Grad $\le 2$ $\cong\mathbb{R}^3$ via $a_0+a_1x+a_2x^2\mapsto(a_0,a_1,a_2)$.<br>
<b>2.</b> $\mathrm{Fib}\cong\mathbb{R}^2$ via $F_{a,b}\mapsto(a,b)$; z.B. $(1,1,2,3,5,\dots)\mapsto(1,1)$.<br>
<b>3.</b> $M_{2\times 3}(K)\cong K^6$ (Einträge auflisten).`,
    counterexample: R`<b>1.</b> $\mathbb{R}^2\not\cong\mathbb{R}^3$ (verschiedene Dimension); z.B. ist $(a,b)\mapsto(a,b,0)$ injektiv, aber nicht surjektiv.<br>
<b>2. Bijektiv, aber nicht linear:</b> $x\mapsto x^3$ auf $\mathbb{R}$ ist bijektiv, aber kein Isomorphismus ($2^3\neq 2\cdot 1^3$).<br>
<b>3.</b> $S(K)\cong\{(0,a_1,a_2,\dots)\}\subsetneq S(K)$ (Shift) – im Unendlichen kann ein VR zu einem echten Unterraum isomorph sein.`
  },
  {
    id: "la7_satz_7_3",
    title: "Satz 7.3: Jeder n-dimensionale VR ist isomorph zu Kⁿ",
    category: "7c Isomorphie und dim Hom(V,W)",
    type: "satz",
    front: R`Formuliere und beweise <b>Satz 7.3</b>. Wie sieht die Umkehrabbildung $\Phi^{-1}$ aus?`,
    back: R`<b>Satz 7.3:</b> Ist $V$ ein endl.-dim. VR über $K$ mit $\dim(V) = n$, so ist $V\cong K^n$.<br><br>
<b>Beweis:</b> Sei $\mathcal{B}_V = \{x_1,\dots,x_n\}$ eine Basis und
$$\Phi: K^n\to V,\qquad\begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix}\mapsto(x_1,\dots,x_n)\cdot\begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix} = \sum_{i=1}^n\lambda_ix_i.$$
<b>(1) $\Phi$ linear:</b> $\Phi(\eta(\lambda_i)+(\mu_i)) = \sum(\eta\lambda_i+\mu_i)x_i = \eta\Phi((\lambda_i))+\Phi((\mu_i))$.<br>
<b>(2) surjektiv:</b> $x = \sum\lambda_ix_i\in V$ ⇒ $\Phi((\lambda_i)) = x$.<br>
<b>(3) injektiv:</b> $\Phi((\lambda_i)) = \Phi((\mu_i))$ ⇒ $\sum\lambda_ix_i = \sum\mu_ix_i$ ⇒ (Basis) $\lambda_i = \mu_i$.<br>
<b>(4) Umkehrabbildung</b> mit der dualen Basis $\mathcal{B}_V^* = \{x_1^*,\dots,x_n^*\}$:
$$\Phi^{-1}: V\to K^n,\qquad x\mapsto\begin{pmatrix}x_1^*(x)\\\vdots\\x_n^*(x)\end{pmatrix},$$
denn $\Phi^{-1}(\Phi((\lambda_i))) = (x_i^*(\sum_j\lambda_jx_j)) = (\lambda_i)$.`,
    meta: "Skript: Kap. 7, Satz 7.3 mit Beweis",
    explanation: R`<b>„Koordinaten einführen” ist ein Isomorphismus.</b> $\Phi^{-1}$ ordnet jedem Vektor seinen Koordinatenvektor bzgl. $\mathcal{B}_V$ zu, $\Phi$ baut aus Koordinaten den Vektor zusammen. Deshalb kann man in jedem endlich-dimensionalen VR <b>wie in $K^n$ rechnen</b> – Polynome, Fibonacci-Folgen, Wurzelräume, …<br><br>
<b>Aber (Stammbach II.4.15):</b> Der Isomorphismus hängt von der <b>Wahl der Basis</b> ab. Verschiedene Basen liefern verschiedene Koordinaten (Basiswechsel, Kap. 8). Die wichtigen Eigenschaften (Dimension, Rang, l.u., …) sind basisunabhängig; viele Probleme bestehen gerade darin, eine <b>gute</b> Basis zu finden.<br><br>
<b>Folgerung:</b> Endlich-dimensionale VR über $K$ sind durch ihre Dimension bis auf Isomorphie bestimmt.`,
    example: R`$V$ = Polynome vom Grad $\le 2$, $\mathcal{B}_V = \{1,x,x^2\}$: $\Phi(3,-1,2)^t = 3-x+2x^2$; $\Phi^{-1}(5x^2-4) = (-4,0,5)^t$.<br>
Mit der Lagrange-Basis $\mathcal{L} = \{L_0,L_1,L_2\}$ (Stützstellen $0,1,2$): $\Phi_{\mathcal{L}}^{-1}(p) = (p(0),p(1),p(2))^t$, z.B. $\Phi_{\mathcal{L}}^{-1}(2+3x-x^2) = (2,4,4)^t$ (Kap. 8).`,
    counterexample: R`<b>Ohne Basis keine Koordinaten:</b> Für unendlich-dimensionale Räume gibt es keinen Isomorphismus zu einem $K^n$: $\mathbb{Q}[X]\not\cong\mathbb{Q}^n$ für jedes $n$.<br>
<b>„Koordinatenvektor” bzgl. Erzeugendensystem</b> ist nicht wohldefiniert: Mit $\{(1,0),(0,1),(1,1)\}$ hat $(1,1)$ die „Koordinaten” $(1,1,0)$ und $(0,0,1)$ – die Abbildung $K^3\to K^2$ ist nicht injektiv.`
  },
  {
    id: "la7_satz_7_4",
    title: "Satz 7.4: Das kommutierende Diagramm φ = Φ ∘ A_φ ∘ Φ⁻¹",
    category: "7c Isomorphie und dim Hom(V,W)",
    type: "satz",
    front: R`Was besagt <b>Satz 7.4</b>? Wann <b>kommutiert</b> ein Diagramm?`,
    back: R`<b>Satz 7.4:</b> Seien $V,W$ VR über $K$ mit Basen $\mathcal{B}_V = \{x_1,\dots,x_n\}$, $\mathcal{B}_W = \{y_1,\dots,y_m\}$ und $\varphi\in\mathrm{Hom}(V,W)$. Dann kommutiert das Diagramm
$$\begin{array}{ccc}V&\xrightarrow{\;\varphi\;}&W\\ {\scriptstyle\Phi}\uparrow\downarrow{\scriptstyle\Phi^{-1}}&\circlearrowleft&{\scriptstyle\Phi^{-1}}\downarrow\uparrow{\scriptstyle\Phi}\\ K^n&\xrightarrow{\;A_\varphi\;}&K^m\end{array}\qquad x\mapsto\varphi(x),\quad(\lambda_i)\mapsto A_\varphi\cdot(\lambda_i).$$
<b>Definition:</b> Ein Diagramm <b>kommutiert</b> ($\circlearrowleft$), falls alle Wege entlang der Pfeile mit denselben Anfangs- und Endpunkten dieselbe Abbildung ergeben. Z.B. gilt für alle $x\in V$:
$$\Phi\big(\underbrace{A_\varphi\cdot\underbrace{\Phi^{-1}(x)}_{\in K^n}}_{\in K^m}\big) = \varphi(x).$$
[Der Beweis folgt aus den Definitionen und Satz 7.3.]`,
    meta: "Skript: Kap. 7, Satz 7.4, Definition kommutierendes Diagramm",
    explanation: R`<b>Die drei Schritte</b> „Koordinaten nehmen ($\Phi^{-1}$) – Matrix anwenden ($A_\varphi$) – zurückübersetzen ($\Phi$)” liefern dasselbe wie „direkt $\varphi$ anwenden”. Kurz: <b>Die Matrix rechnet in Koordinaten, was die Abbildung im Raum tut.</b><br><br>
<b>Diagramme</b> sind eine kompakte Sprache für solche Gleichungen: Statt $\Phi\circ A_\varphi\circ\Phi^{-1} = \varphi$ zeichnet man ein Viereck. Dieselbe Technik beweist in Satz 8.1 die Basiswechselformel (zwei Vierecke übereinander) und veranschaulicht in Satz 9.1 die duale Abbildung.<br><br>
<b>Achtung:</b> Die beiden $\Phi$ sind verschieden: links $K^n\to V$ (mit $\mathcal{B}_V$), rechts $K^m\to W$ (mit $\mathcal{B}_W$).`,
    example: R`$\varphi$ = Ableitung, $V$ = Grad $\le 2$, $W$ = Grad $\le 1$, Monombasen: $A_\varphi = \begin{pmatrix}0&1&0\\0&0&2\end{pmatrix}$. Für $p = 4+3x-x^2$: $\Phi^{-1}(p) = (4,3,-1)^t$, $A_\varphi(4,3,-1)^t = (3,-2)^t$, $\Phi(3,-2)^t = 3-2x$ – und direkt $(4+3x-x^2)' = 3-2x$ ✓.`,
    counterexample: R`<b>Diagramm kommutiert nicht, wenn die Basen nicht zusammenpassen:</b> Im Beispiel links ist $A_\varphi$ bzgl. der Monombasis $\{1,x\}$ von $W$ berechnet. Übersetzt man oben rechts mit einer <b>anderen</b> Basis $\{1,1+x\}$ zurück, so erhält man $\Phi(3,-2)^t = 3\cdot 1-2\cdot(1+x) = 1-2x\neq 3-2x = \varphi(4+3x-x^2)$. $A_\varphi$, $\Phi$ und $\Phi^{-1}$ müssen sich auf <b>dieselben</b> Basen beziehen.`
  },
  {
    id: "la7_kor_7_5",
    title: "Korollar 7.5: Jede Matrix ist eine Darstellungsmatrix",
    category: "7c Isomorphie und dim Hom(V,W)",
    type: "satz",
    front: R`Was besagt <b>Korollar 7.5</b>, und wie beweist man es mit den kanonischen Basen?`,
    back: R`<b>Korollar 7.5:</b> Zu jeder $(m\times n)$-Matrix $M\in M_{m\times n}(K)$ existieren Vektorräume $V$ und $W$ über $K$ der Dimension $n$ bzw. $m$ und ein $\varphi\in\mathrm{Hom}(V,W)$, sodass $A_\varphi = M$.<br><br>
<b>Beweis:</b> Sei $V = K^n$, $W = K^m$ mit den <b>kanonischen Basen</b> $\mathcal{B}_V = \{e_1,\dots,e_n\}$, $\mathcal{B}_W = \{\tilde e_1,\dots,\tilde e_m\}$, wobei $e_j$ an der $j$-ten Stelle eine $1$ und sonst $0$ hat ($\tilde e_i$ analog). Definiere
$$\varphi: V\to W,\qquad\varphi(x) := \Phi\big(M\cdot\Phi^{-1}(x)\big)\quad(\text{hier einfach }\varphi(x) = M\cdot x).$$
Dann ist $A_\varphi = M$ [kanon = Massstab, Richtschnur (griechisch)].`,
    meta: "Skript: Kap. 7, Korollar 7.5 mit Beweis",
    explanation: R`Satz 7.4 sagt „jede lineare Abbildung hat eine Matrix”, Korollar 7.5 sagt umgekehrt „<b>jede Matrix ist die Matrix einer linearen Abbildung</b>”. Zusammen: Lineare Abbildungen (zwischen Räumen mit fixierten Basen) und Matrizen sind <b>dasselbe in zwei Sprachen</b>. Das ist der Grund, warum man Matrizenregeln über Abbildungen beweisen darf (Serie 7, Aufgaben 31/32).<br><br>
<b>Kanonische Basis</b> = die Standardbasis $e_1,\dots,e_n$; bezüglich ihr ist der Koordinatenvektor eines $x\in K^n$ einfach $x$ selbst ($\Phi = \mathrm{Id}$). Dann ist „Matrix anwenden” wörtlich die Abbildung $x\mapsto Mx$, und die Spalten von $M$ sind die Bilder $M e_j$.`,
    example: R`$M = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$ gehört zu $\varphi:\mathbb{R}^2\to\mathbb{R}^2$, $\varphi(a,b) = (-b,a)$ – Drehung um $90°$: $\varphi(e_1) = (0,1)^t$ = 1. Spalte, $\varphi(e_2) = (-1,0)^t$ = 2. Spalte. Z.B. $\varphi(3,1) = (-1,3)$.`,
    counterexample: R`<b>Nicht eindeutig ohne Basis:</b> Dieselbe Matrix $M$ gehört zu vielen Abbildungen, je nach Basiswahl: $\begin{pmatrix}1&0\\0&0\end{pmatrix}$ ist bzgl. $\{e_1,e_2\}$ die Projektion auf die $x$-Achse, bzgl. $\{(1,1),(1,-1)\}$ die Projektion auf die Gerade $y = x$ längs $y = -x$ (z.B. $(2,0) = (1,1)+(1,-1)\mapsto(1,1)$).`
  },
  {
    id: "la7_satz_7_6",
    title: "Satz 7.6: dim Hom(V, W) = m · n",
    category: "7c Isomorphie und dim Hom(V,W)",
    type: "satz",
    front: R`Formuliere und beweise <b>Satz 7.6</b> mit den Matrizen $E_{i_0}^{j_0}$. Wie sieht die entsprechende Basis von $\mathrm{Hom}(V,W)$ aus (Serie 8, Aufgabe 34)?`,
    back: R`<b>Satz 7.6:</b> Seien $V$ und $W$ VR über $K$ der Dimension $n$ bzw. $m$. Dann hat $\mathrm{Hom}(V,W)$ die Dimension $m\cdot n$.<br><br>
<b>Beweis:</b> $V\cong K^n$, $W\cong K^m$ (Satz 7.3); mit Satz 7.4 und Korollar 7.5 entspricht jedem $\varphi$ eindeutig eine $(m\times n)$-Matrix $A_\varphi$ und umgekehrt. Sei $E_{i_0}^{j_0}$ die Matrix mit $1$ in Zeile $i_0$, Spalte $j_0$ und sonst $0$. Für $A = (\alpha_i^j)$ gilt
$$A = \sum_{i_0=1}^m\sum_{j_0=1}^n\alpha_{i_0}^{j_0}\cdot E_{i_0}^{j_0},$$
die $E_{i_0}^{j_0}$ sind l.u., und es gibt $m\cdot n$ davon ⇒ $\dim(\mathrm{Hom}(V,W)) = m\cdot n$.<br><br>
<b>Serie 8, Aufgabe 34:</b> Die zugehörigen Abbildungen sind $\Psi_{i_0}^{j_0}: x\mapsto x_{j_0}^*(x)\cdot y_{i_0}$, d.h. $\Psi_{i_0}^{j_0}(x_j) = y_{i_0}$ für $j = j_0$, sonst $0_W$; und $\varphi = \sum_{i,j}\alpha_i^j\Psi_i^j$.`,
    meta: "Skript: Kap. 7, Satz 7.6 mit Beweis; Serie 8, Aufgabe 34 (a)–(f)",
    explanation: R`<b>Abzählen der Freiheitsgrade:</b> Eine lineare Abbildung $V\to W$ ist durch die Bilder der $n$ Basisvektoren bestimmt, jedes Bild hat $m$ Koordinaten, und alle diese Zahlen sind frei wählbar. Also $m\cdot n$ Freiheitsgrade.<br><br>
<b>$\Psi_{i_0}^{j_0}$ = „Elementarabbildung”</b> (Stammbach III.6.6): Sie liest die $j_0$-te Koordinate ab ($x_{j_0}^*$) und schreibt sie als Vielfaches von $y_{i_0}$ hin. Jede lineare Abbildung ist eine Summe solcher „Ablesen-und-Hinschreiben”-Operationen, gewichtet mit den Matrixeinträgen.<br><br>
<b>Spezialfälle:</b> $\dim(V^*) = \dim(\mathrm{Hom}(V,K)) = 1\cdot n = n$ (Satz 6.2); $\dim(\mathrm{Hom}(V,V)) = n^2$ – deshalb sind $\varphi^0,\varphi^1,\dots,\varphi^{n^2}$ immer l.a. (Minimalpolynom, Serie 8, Aufgabe 35).`,
    example: R`$m = n = 2$: $\begin{pmatrix}3&-1\\0&5\end{pmatrix} = 3E_1^1-1\cdot E_1^2+0\cdot E_2^1+5E_2^2$.<br>
$\dim(\mathrm{Hom}(\mathbb{R}^3,\mathbb{R}^2)) = 6$; $\dim(\mathrm{Hom}(\mathbb{F}_2^2,\mathbb{F}_2^2)) = 4$, also gibt es $2^4 = 16$ lineare Abbildungen $\mathbb{F}_2^2\to\mathbb{F}_2^2$.`,
    counterexample: R`<b>Nicht $m+n$:</b> $\mathrm{Hom}(\mathbb{R}^2,\mathbb{R}^3)$ hat Dimension $6$, nicht $5$ – man braucht für jeden der 2 Basisvektoren ein Bild mit 3 Koordinaten.<br>
<b>Unendlich-dimensional:</b> $\dim(\mathrm{Hom}(c_{00},K)) = \dim(c_{00}^*)\gt\dim(c_{00})\cdot 1$ (Serie 6, Aufgabe 27) – die Formel versagt.`
  },
  {
    id: "la7_bsp_mathematica_basen",
    title: "Mathematica-Bsp.: Dieselbe Abbildung in zwei Basen",
    category: "7c Isomorphie und dim Hom(V,W)",
    type: "beispiel",
    front: R`$\varphi:\mathbb{R}^3\to\mathbb{R}^3$ hat bzgl. $\mathcal{B}_1 = \{e_1,e_2,e_3\}$ die Matrix $A_\varphi = \begin{pmatrix}1&1&-1\\2&0&-2\\1&-1&-1\end{pmatrix}$. Bestimme die Matrix $B_\varphi$ bzgl. $\mathcal{B}_2 = \{x_1,x_2,x_3\}$ mit $x_1 = e_2+e_3$, $x_2 = e_1+e_2$, $x_3 = e_1+e_3$.`,
    back: R`Berechne $\varphi(x_j)$ in der kanonischen Basis und schreibe das Ergebnis in $\mathcal{B}_2$:
$$A_\varphi\begin{pmatrix}0\\1\\1\end{pmatrix} = \begin{pmatrix}0\\-2\\-2\end{pmatrix} = -2x_1,\quad A_\varphi\begin{pmatrix}1\\1\\0\end{pmatrix} = \begin{pmatrix}2\\2\\0\end{pmatrix} = 2x_2,\quad A_\varphi\begin{pmatrix}1\\0\\1\end{pmatrix} = \begin{pmatrix}0\\0\\0\end{pmatrix}.$$
Also
$$B_\varphi = \begin{pmatrix}-2&0&0\\0&2&0\\0&0&0\end{pmatrix}.$$
Z.B. $\varphi(x_1+2x_2-3x_3) = B_\varphi(1,2,-3)^t = (-2,4,0)^t$, d.h. $-2x_1+4x_2+0x_3$.<br>
„Die lineare Abbildung ist in beiden Fällen dieselbe, aber die Matrizen $A_\varphi$ und $B_\varphi$ sind sehr verschieden. Bzgl. $\mathcal{B}_2$ ist $\varphi$ einfacher zu verstehen.”`,
    meta: "Skript: Mathematica-Notebook „lineare_Abbildungen_und_Basen.nb” (nach Satz 7.6)",
    explanation: R`<b>Die beste Basis macht die Matrix diagonal:</b> In $\mathcal{B}_2$ sieht man sofort, was $\varphi$ tut – $x_1$ wird mit $-2$ gestreckt (und gespiegelt), $x_2$ mit $2$ gestreckt, $x_3$ auf $0$ geschickt. Diese $x_j$ sind <b>Eigenvektoren</b> (Ausblick: Eigenwerte $-2,2,0$), vgl. $M_{\mathrm{Fib}}$ in Serie 6, Aufgabe 29.<br><br>
<b>Rezept</b> für die Matrix bzgl. einer neuen Basis (Vorgriff auf Satz 8.1): (1) neue Basisvektoren in alten Koordinaten hinschreiben, (2) mit der alten Matrix abbilden, (3) Ergebnis in der neuen Basis ausdrücken – das ist genau $\tilde A_\varphi = B\cdot A_\varphi\cdot B^{-1}$.<br><br>
Aus $B_\varphi$ liest man auch Kern ($\langle x_3\rangle$) und Rang ($2$) ab.`,
    example: R`Konsistenzcheck: $x_1+2x_2-3x_3 = (0,1,1)+(2,2,0)-(3,0,3) = (-1,3,-2)$; $A_\varphi(-1,3,-2)^t = (-1+3+2,\,-2+0+4,\,-1-3+2)^t = (4,2,-2)^t$; und $-2x_1+4x_2 = (0,-2,-2)+(4,4,0) = (4,2,-2)$ ✓.`,
    counterexample: R`<b>Nur $V$-Basis wechseln, $W$-Koordinaten alt lassen:</b> Schreibt man die Bilder $\varphi(x_j)$ in <b>kanonischen</b> Koordinaten als Spalten, erhält man $\begin{pmatrix}0&2&0\\-2&2&0\\-2&0&0\end{pmatrix}$ – die Matrix bzgl. des Paares $(\mathcal{B}_2,\mathcal{B}_1)$, nicht $B_\varphi$. Für eine Selbstabbildung muss man in Start- und Zielraum <b>dieselbe</b> Basis nehmen, um die Diagonalform zu sehen.`
  },
  // ========================================================================
  // SERIEN 6 UND 8 – POTENZEN VON ABBILDUNGEN
  // ========================================================================
  {
    id: "la7_s6_a29_mfib",
    title: "Serie 6, Aufgabe 29: Die Fibonacci-Matrix M_Fib und ihre Eigenvektoren",
    category: "7c Isomorphie und dim Hom(V,W)",
    type: "aufgabe",
    front: R`$\varphi_{\mathrm{Fib}}:\mathrm{Fib}\to\mathrm{Fib}$ mit $\varphi(F_{1,0}) = F_{0,1}$, $\varphi(F_{0,1}) = F_{1,0}+F_{0,1}$ hat $M_{\mathrm{Fib}} = \begin{pmatrix}0&1\\1&1\end{pmatrix}$. Zeige (a) $M_{\mathrm{Fib}}^n\begin{pmatrix}a\\b\end{pmatrix} = \begin{pmatrix}f_n\\f_{n+1}\end{pmatrix}$ für $F_{a,b} = (f_0,f_1,\dots)$; (b) finde $x_1\neq x_2$, $\lambda_i$ mit $M_{\mathrm{Fib}}\begin{pmatrix}1\\x_i\end{pmatrix} = \lambda_i\begin{pmatrix}1\\x_i\end{pmatrix}$.`,
    back: R`$M_{\mathrm{Fib}}\begin{pmatrix}u\\v\end{pmatrix} = \begin{pmatrix}v\\u+v\end{pmatrix}$ – ein „Fibonacci-Schritt”.<br>
<b>(a) Induktion:</b> $n = 0$: $M^0 = I_2$. Schritt: $M^{n+1}\begin{pmatrix}a\\b\end{pmatrix} = M\begin{pmatrix}f_n\\f_{n+1}\end{pmatrix} = \begin{pmatrix}f_{n+1}\\f_n+f_{n+1}\end{pmatrix} = \begin{pmatrix}f_{n+1}\\f_{n+2}\end{pmatrix}$.<br>
<b>(b)</b> $M\begin{pmatrix}1\\x\end{pmatrix} = \begin{pmatrix}x\\1+x\end{pmatrix} = \lambda\begin{pmatrix}1\\x\end{pmatrix}$ ⇔ $\lambda = x$ und $1+x = x^2$, also
$$x_1 = \varphi = \tfrac{1+\sqrt 5}{2},\qquad x_2 = \psi = \tfrac{1-\sqrt 5}{2},\qquad\lambda_i = x_i.$$
<b>Bem.:</b> $M^n\begin{pmatrix}1\\x_i\end{pmatrix} = x_i^n\begin{pmatrix}1\\x_i\end{pmatrix}$, d.h. $F_{1,x_i} = (1,x_i,x_i^2,\dots)$ – die Basis $B_3$ aus Aufgabe 17. Mit $\begin{pmatrix}0\\1\end{pmatrix} = \tfrac{1}{\sqrt 5}\begin{pmatrix}1\\\varphi\end{pmatrix}-\tfrac{1}{\sqrt 5}\begin{pmatrix}1\\\psi\end{pmatrix}$ folgt erneut Binet: $f_n = \tfrac{1}{\sqrt 5}(\varphi^n-\psi^n)$.`,
    meta: "Serie 6, Aufgabe 29 (im Skript: Fib, Aufgaben 11, 17)",
    explanation: R`<b>Matrixpotenzen = wiederholtes Anwenden.</b> Die ganze Fibonacci-Rekursion steckt in einer $2\times 2$-Matrix, die das Paar $(f_n,f_{n+1})$ einen Schritt weiterschiebt.<br><br>
<b>Eigenvektoren machen Potenzen trivial:</b> Für einen Vektor $v$ mit $Mv = \lambda v$ ist $M^nv = \lambda^nv$. Zerlegt man einen beliebigen Startvektor in Eigenvektoren, so wird $M^n$ zu „jede Komponente mit $\lambda_i^n$ multiplizieren”. Das ist die Idee hinter Binet – und der Grund, warum man in Kapitel 8 nach Basen sucht, in denen eine Matrix <b>diagonal</b> ist ($\mathrm{diag}(\varphi,\psi)$).<br><br>
(Notation: Hier bezeichnen $\varphi,\psi$ die Zahlen $\tfrac{1\pm\sqrt 5}{2}$, nicht Abbildungen.)`,
    example: R`$M^5 = \begin{pmatrix}3&5\\5&8\end{pmatrix}$; $M^5\begin{pmatrix}0\\1\end{pmatrix} = \begin{pmatrix}5\\8\end{pmatrix} = \begin{pmatrix}f_5\\f_6\end{pmatrix}$ für $F_{0,1} = (0,1,1,2,3,5,8,\dots)$ ✓. Mit $F_{2,1}$: $M^5\begin{pmatrix}2\\1\end{pmatrix} = \begin{pmatrix}11\\18\end{pmatrix}$, und $F_{2,1} = (2,1,3,4,7,11,18,\dots)$ ✓.`,
    counterexample: R`<b>Kein Eigenvektor:</b> $M\begin{pmatrix}1\\2\end{pmatrix} = \begin{pmatrix}2\\3\end{pmatrix}$ ist kein Vielfaches von $(1,2)^t$ ($\tfrac21\neq\tfrac32$).<br>
<b>Geometrische Folge mit falschem $t$:</b> $(1,2,4,8,\dots)$ erfüllt die Rekursion nicht ($4\neq 2+1$), weil $2^2\neq 2+1$; nur $t\in\{\varphi,\psi\}$ funktioniert.`
  },
  {
    id: "la7_s8_a35_minimalpolynom",
    title: "Serie 8, Aufgabe 35: Annullierendes Polynom / Minimalpolynom",
    category: "7c Isomorphie und dim Hom(V,W)",
    type: "aufgabe",
    front: R`Für $\varphi\in\mathrm{Hom}(V,V)$ ($\dim(V) = n$) sei $\varphi^0 = \mathrm{Id}$, $\varphi^{k+1} = \varphi\circ\varphi^k$. Zeige: Es gibt $N\le n\cdot n$ und ein Polynom $p_\varphi = \sum_{k=0}^Na_kX^k$ mit $a_N = 1$, sodass $a_0\varphi^0+\dots+a_N\varphi^N$ die Nullabbildung ist.`,
    back: R`Sei $d := \dim(\mathrm{Hom}(V,V)) = n\cdot n$ (Satz 7.6). Betrachte die $d+1$ Abbildungen $\varphi^0,\varphi^1,\dots,\varphi^d\in\mathrm{Hom}(V,V)$.<br>
<b>Fall 1:</b> $\varphi^a = \varphi^b$ für ein $a\lt b\le d$ ⇒ $(-1)\varphi^a+1\cdot\varphi^b = 0_{\mathrm{Hom}}$; $N := b$.<br>
<b>Fall 2:</b> paarweise verschieden ⇒ $d+1$ Vektoren im $d$-dimensionalen Raum sind <b>l.a.</b> ⇒ (Satz 4.0) $\sum_{k=0}^d\lambda_k\varphi^k = 0_{\mathrm{Hom}}$, nicht alle $\lambda_k = 0$. Sei $N$ der grösste Index mit $\lambda_N\neq 0$; setze $a_k := \lambda_N^{-1}\lambda_k$. Dann $a_N = 1$ und $\sum_{k=0}^Na_k\varphi^k = \lambda_N^{-1}\cdot 0_{\mathrm{Hom}} = 0_{\mathrm{Hom}}$.<br><br>
<b>Bem.:</b> Das Polynom kleinsten Grades mit dieser Eigenschaft heisst <b>Minimalpolynom</b> $m_\varphi$. Für $\varphi_{\mathrm{Fib}}$: $m_{\varphi_{\mathrm{Fib}}} = X^2-X-1$; für die Nullabbildung auf $V\neq\{0\}$: $m_\varphi = X$.`,
    meta: "Serie 8, Aufgabe 35",
    explanation: R`<b>Dimensionsargument in Reinform:</b> In einem Raum der Dimension $d$ sind $d+1$ Vektoren immer l.a. Die Potenzen $\varphi^0,\varphi^1,\dots$ leben in $\mathrm{Hom}(V,V)$ mit $d = n^2$ – also muss irgendwann eine Potenz eine Linearkombination der vorherigen sein. Diese Abhängigkeit, normiert auf Leitkoeffizient $1$, ist das annullierende Polynom.<br><br>
<b>Ausblick:</b> Die Nullstellen des Minimalpolynoms sind die <b>Eigenwerte</b>: Für $M_{\mathrm{Fib}}$ sind das $\tfrac{1\pm\sqrt 5}{2}$ (Aufgabe 29). Der Satz von Cayley-Hamilton (später) verbessert die Schranke $N\le n^2$ zu $N\le n$.`,
    example: R`$M := M_{\mathrm{Fib}}$: $M^2 = \begin{pmatrix}1&1\\1&2\end{pmatrix}$, also $M^2-M-I_2 = \begin{pmatrix}1-0-1&1-1-0\\1-1-0&2-1-1\end{pmatrix} = 0$ ⇒ $X^2-X-1$ annulliert $\varphi_{\mathrm{Fib}}$.<br>
$S = \begin{pmatrix}1&1\\0&1\end{pmatrix}$: $(S-I_2)^2 = \begin{pmatrix}0&1\\0&0\end{pmatrix}^2 = 0$ ⇒ $X^2-2X+1$ annulliert $S$.`,
    counterexample: R`<b>Grad 1 reicht bei $M_{\mathrm{Fib}}$ nicht:</b> $M+a_0I_2 = 0$ hiesse $M = -a_0I_2$ (Diagonalmatrix), aber $M$ hat ausserhalb der Diagonalen eine $1$. Grad 0 ($a_0 = 1$) ergibt $\mathrm{Id}\neq 0$. Also ist $X^2-X-1$ minimal.<br>
<b>Nicht normiert ist kein „Minimalpolynom”:</b> $2X^2-2X-2$ annulliert auch, hat aber Leitkoeffizient $2\neq 1$.`
  }
];
})();
