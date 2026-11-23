/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 8: Basiswechsel
   (Basiswechselmatrix, Lemma 8.0, Inverse, Lagrange-Polynome, Satz 8.1)
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_8 = [
  // ========================================================================
  // 8a BASISWECHSELMATRIZEN
  // ========================================================================
  {
    id: "la8_def_basiswechselmatrix",
    title: "Definition: Basiswechselmatrix (alte Basis in der neuen ausdrücken)",
    category: "8a Basiswechselmatrizen",
    type: "definition",
    front: R`Seien $\mathcal{B}_V = \{x_1,\dots,x_n\}$ (alte) und $\tilde{\mathcal{B}}_V = \{\tilde x_1,\dots,\tilde x_n\}$ (neue Basis) von $V$. Was ist die <b>Basiswechselmatrix</b> zum Basiswechsel $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$? Was bedeutet die Notation $(\alpha_i^j)_m^n$?`,
    back: R`Jedes $x_j$ lässt sich als LK der neuen Basisvektoren schreiben:
$$x_j = \sum_{i=1}^n\alpha_i^j\cdot\tilde x_i\quad(1\le j\le n),\qquad\text{umgekehrt}\quad\tilde x_j = \sum_{i=1}^n\tilde\alpha_i^j\cdot x_i.$$
Zum Basiswechsel $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$ (bzw. $\tilde{\mathcal{B}}_V\to\mathcal{B}_V$) gehört die <b>Basiswechselmatrix</b> $(\alpha_i^j)_n^n$ (bzw. $(\tilde\alpha_i^j)_n^n$).<br>
<b>Merke:</b> Beim Basiswechsel $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$ schreiben wir die <b>alten Basisvektoren als LK der neuen</b>; deren Koeffizienten bilden die <b>Spalten</b>.<br><br>
<b>Notation:</b> $(\alpha_i^j)_m^n$ bezeichnet die $(m\times n)$-Matrix $\begin{pmatrix}\alpha_1^1&\cdots&\alpha_1^n\\\vdots&&\vdots\\\alpha_m^1&\cdots&\alpha_m^n\end{pmatrix}$. Ist $n = 1$ bzw. $m = 1$, lassen wir $n,j$ bzw. $m,i$ weg: $(\lambda_i)_m$ = Spaltenvektor in $K^m$, $(\mu^j)^n = (\mu^1,\dots,\mu^n)$ = Zeilenvektor.<br>
<b>Bem.:</b> $(\alpha_i^j)_n^n$ und $(\tilde\alpha_i^j)_n^n$ sind die Matrizen der <b>identischen Abbildung</b> $\iota: V\to V$ bzgl. $\mathcal{B}_V$, $\tilde{\mathcal{B}}_V$ (bzw. $\tilde{\mathcal{B}}_V$, $\mathcal{B}_V$).`,
    meta: "Skript: Kap. 8, Basiswechselmatrix, Notation, Bem.",
    explanation: R`<b>Warum „alt in neu”?</b> Weil man damit <b>Koordinaten von alt nach neu</b> umrechnet (Lemma 8.0): $(\mu_i)_n = (\alpha_i^j)_n^n\cdot(\lambda_j)_n$. Die Matrix „übersetzt” eine Koordinatenliste bzgl. $\mathcal{B}_V$ in eine bzgl. $\tilde{\mathcal{B}}_V$.<br><br>
<b>Bem. (Identität):</b> Die Basiswechselmatrix ist nichts Neues – sie ist die Darstellungsmatrix $A_\iota$ der Identität, wenn man im Startraum die alte und im Zielraum die neue Basis nimmt. Die $j$-te Spalte = Koordinaten von $\iota(x_j) = x_j$ bzgl. $\tilde{\mathcal{B}}_V$. Damit folgen alle Rechenregeln aus Kapitel 7.<br><br>
<b>Häufigster Fehler:</b> die neuen Vektoren in alten Koordinaten als Spalten schreiben – das ist die <b>inverse</b> Matrix $(\tilde\alpha_i^j)$ (Gegenbeispiel).`,
    example: R`$V = \mathbb{R}^2$, alt $\{e_1,e_2\}$, neu $\tilde x_1 = (1,0)$, $\tilde x_2 = (1,1)$. Alt in neu: $e_1 = 1\cdot\tilde x_1+0\cdot\tilde x_2$, $e_2 = -1\cdot\tilde x_1+1\cdot\tilde x_2$ ⇒
$$(\alpha_i^j) = \begin{pmatrix}1&-1\\0&1\end{pmatrix}.$$
(Stammbach II.8.2.1) Drehung der Basis um $\phi$: $(\alpha_i^j) = \begin{pmatrix}\cos\phi&\sin\phi\\-\sin\phi&\cos\phi\end{pmatrix}$.`,
    counterexample: R`<b>Verwechslung mit der Inversen:</b> Neue in alten Koordinaten: $\tilde x_1 = (1,0)$, $\tilde x_2 = (1,1)$ ergibt $\begin{pmatrix}1&1\\0&1\end{pmatrix} = (\tilde\alpha_i^j)$ – das ist die Matrix zu $\tilde{\mathcal{B}}_V\to\mathcal{B}_V$, also $(\alpha_i^j)^{-1}$. Benutzt man sie für $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$, erhält man für $(3,5)$ die falschen „Koordinaten” $(8,5)$: $8\tilde x_1+5\tilde x_2 = (13,5)\neq(3,5)$.`
  },
  {
    id: "la8_lemma_8_0",
    title: "Lemma 8.0: Koordinatenumrechnung (μᵢ)ₙ = (αᵢʲ)ₙⁿ · (λⱼ)ₙ",
    category: "8a Basiswechselmatrizen",
    type: "lemma",
    front: R`Formuliere und beweise <b>Lemma 8.0</b>: Wie erhält man die neuen Koordinaten $\mu_i$ aus den alten $\lambda_j$?`,
    back: R`<b>Lemma 8.0:</b> Ist $x = \sum_{j=1}^n\lambda_j\cdot x_j = \sum_{i=1}^n\mu_i\cdot\tilde x_i$, so ist
$$(\mu_i)_n = (\alpha_i^j)_n^n\cdot(\lambda_j)_n,\qquad\text{d.h.}\quad\begin{pmatrix}\mu_1\\\vdots\\\mu_n\end{pmatrix} = \begin{pmatrix}\alpha_1^1&\cdots&\alpha_1^n\\\vdots&\ddots&\vdots\\\alpha_n^1&\cdots&\alpha_n^n\end{pmatrix}\cdot\begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix}.$$
<b>Beweis:</b>
$$\underbrace{\sum_{j=1}^n\lambda_j\cdot x_j}_{=x} = \sum_{j=1}^n\lambda_j\cdot\underbrace{\sum_{i=1}^n\alpha_i^j\cdot\tilde x_i}_{=x_j} = \sum_{j=1}^n\sum_{i=1}^n(\lambda_j\cdot\alpha_i^j)\cdot\tilde x_i = \sum_{i=1}^n\underbrace{\Big(\sum_{j=1}^n\lambda_j\cdot\alpha_i^j\Big)}_{=\mu_i}\cdot\tilde x_i.$$
Wegen der Eindeutigkeit der Koordinaten ist $\mu_{i_0} = \sum_{j=1}^n\lambda_j\cdot\alpha_{i_0}^j$ für jedes $1\le i_0\le n$, also $(\mu_i)_n = (\alpha_i^j)_n^n\cdot(\lambda_j)_n$.`,
    meta: "Skript: Kap. 8, Lemma 8.0 mit Beweis und Veranschaulichung",
    explanation: R`<b>Kern des Beweises:</b> Man setzt die Darstellung der alten Basisvektoren in die alte Koordinatendarstellung ein und sortiert nach den neuen Basisvektoren um (Summen vertauschen). Das ist exakt „Matrix mal Vektor”.<br><br>
<b>Als Spezialfall von Kapitel 7:</b> $(\alpha_i^j) = A_\iota$ (Identität von $(V,\mathcal{B}_V)$ nach $(V,\tilde{\mathcal{B}}_V)$), und $A_\iota\cdot(\text{Koord. von }x) = (\text{Koord. von }\iota(x) = x)$ – nur eben bzgl. der neuen Basis.<br><br>
<b>Wichtig: „gegenläufig”</b> (Stammbach II.8.1): Die <b>Basisvektoren</b> werden alt-durch-neu ausgedrückt, die <b>Koordinaten</b> dagegen neu-durch-alt berechnet. Man beachte die verschiedenen Summationsindizes ($\sum_i$ bei den Basen, $\sum_j$ bei den Koordinaten).`,
    example: R`Mit $(\alpha_i^j) = \begin{pmatrix}1&-1\\0&1\end{pmatrix}$ (alt $\{e_1,e_2\}$, neu $\{(1,0),(1,1)\}$) und $x = (3,5) = 3e_1+5e_2$:
$$\begin{pmatrix}1&-1\\0&1\end{pmatrix}\begin{pmatrix}3\\5\end{pmatrix} = \begin{pmatrix}-2\\5\end{pmatrix}.$$
Probe: $-2\cdot(1,0)+5\cdot(1,1) = (3,5)$ ✓.`,
    counterexample: R`<b>Zeilen statt Spalten:</b> Liest man die Koeffizienten $x_j = \sum_i\alpha_i^j\tilde x_i$ als <b>Zeilen</b>, rechnet man mit der Transponierten $\begin{pmatrix}1&0\\-1&1\end{pmatrix}$ und erhält $(3,2)$; aber $3\cdot(1,0)+2\cdot(1,1) = (5,2)\neq(3,5)$.`
  },
  {
    id: "la8_inverse",
    title: "Behauptung: Die beiden Basiswechselmatrizen sind zueinander invers",
    category: "8a Basiswechselmatrizen",
    type: "proposition",
    front: R`Zeige: $(\alpha_i^j)_n^n\cdot(\tilde\alpha_i^j)_n^n = (\tilde\alpha_i^j)_n^n\cdot(\alpha_i^j)_n^n = I_n$. Was ist $I_n$?`,
    back: R`$I_n$ bezeichnet die $(n\times n)$-<b>Identitätsmatrix</b> $\begin{pmatrix}1&0&\cdots&0\\0&1&\cdots&0\\\vdots&&\ddots&\vdots\\0&0&\cdots&1\end{pmatrix} = (\delta_i^j)_n^n$.<br><br>
<b>Beweis:</b> Ist $x = \sum_j\lambda_jx_j$, so liefert Lemma 8.0 die neuen Koordinaten $(\mu_i) = (\alpha_i^j)(\lambda_j)$. Wendet man Lemma 8.0 in der Gegenrichtung an, erhält man die alten zurück: $(\lambda_j) = (\tilde\alpha_i^j)(\mu_i)$. Also
$$(\lambda_j)_n = (\tilde\alpha_i^j)_n^n\cdot(\alpha_i^j)_n^n\cdot(\lambda_j)_n\quad\text{für alle }(\lambda_j)_n\in K^n,$$
somit $(\tilde\alpha_i^j)(\alpha_i^j) = I_n$. Weil $M_{n\times n}(K)$ ein Ring ist mit Einselement $I_n$ (Aufgabe 32(a)), gilt auch $(\alpha_i^j)(\tilde\alpha_i^j) = I_n$.<br>
Insbesondere ist $(\tilde\alpha_i^j)_n^n = \big((\alpha_i^j)_n^n\big)^{-1}$.`,
    meta: "Skript: Kap. 8, Behauptung nach Lemma 8.0 mit Beweis",
    explanation: R`<b>Intuition:</b> Von alt nach neu umrechnen und dann wieder von neu nach alt ergibt die ursprünglichen Koordinaten – „hin und zurück = nichts tun”. In der Sprache von Kapitel 7: $A_\iota\cdot A_\iota = A_{\iota\circ\iota} = A_\iota = I_n$ (mit passenden Basen).<br><br>
<b>Zur zweiten Gleichung:</b> Die Begründung des Skripts („weil $M_{n\times n}(K)$ ein Ring ist”) lässt sich auch direkt so sehen: Vertauscht man die Rollen der Basen, liefert dasselbe Argument $(\alpha_i^j)(\tilde\alpha_i^j) = I_n$ (Stammbach II.8.7).<br><br>
<b>Folgerung:</b> Basiswechselmatrizen sind immer <b>invertierbar</b> (regulär). Umgekehrt ist jede invertierbare $(n\times n)$-Matrix die Matrix eines Basiswechsels (Stammbach II.8.7).`,
    example: R`$(\alpha_i^j) = \begin{pmatrix}1&-1\\0&1\end{pmatrix}$, $(\tilde\alpha_i^j) = \begin{pmatrix}1&1\\0&1\end{pmatrix}$: $\begin{pmatrix}1&-1\\0&1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix}$ ✓.<br>
Lagrange-Beispiel (nächste Karten): $A\cdot B = B\cdot A = I_3$.`,
    counterexample: R`<b>Nicht jede Matrix ist eine Basiswechselmatrix:</b> $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ hat keine Inverse – ihre Spalten $(1,2),(2,4)$ sind l.a., können also nicht die Koordinaten einer Basis sein.<br>
<b>Inverse ≠ eintragsweiser Kehrwert:</b> $\begin{pmatrix}1&2\\1&3\end{pmatrix}^{-1} = \begin{pmatrix}3&-2\\-1&1\end{pmatrix}$ (Probe: Produkt $= I_2$), nicht $\begin{pmatrix}1&\frac12\\1&\frac13\end{pmatrix}$.`
  },
  // ========================================================================
  // 8b LAGRANGE-INTERPOLATION
  // ========================================================================
  {
    id: "la8_lagrange_basis",
    title: "Lagrange-Interpolationspolynome als Basis",
    category: "8b Lagrange-Interpolation",
    type: "definition",
    front: R`Wie sind die <b>Lagrange-Polynome</b> $L_0,\dots,L_{n-1}$ zu paarweise verschiedenen Stützstellen $x_0,\dots,x_{n-1}$ definiert? Warum bilden sie eine Basis der Polynomfunktionen vom Grad $\le n-1$, und was sind die Koordinaten eines Polynoms bzgl. dieser Basis?`,
    back: R`$$L_i(x) := \prod_{j\neq i}\frac{x-x_j}{x_i-x_j}\qquad\text{mit}\qquad L_i(x_j) = \delta_i^j.$$
Jedes $L_i$ hat Grad $n-1$, ist $1$ an seiner eigenen Stützstelle und $0$ an allen anderen.<br><br>
<b>Basis:</b> Ist $\sum_i\lambda_iL_i = 0$, so liefert Einsetzen von $x_j$: $\lambda_j = 0$ ⇒ l.u.; $n$ l.u. Vektoren im $n$-dimensionalen Raum ⇒ Basis (Satz 4.6).<br>
<b>Koordinaten = Funktionswerte:</b>
$$p = \sum_{i=0}^{n-1}p(x_i)\cdot L_i.$$
Damit ist <b>Interpolation</b> trivial: Das Polynom vom Grad $\le n-1$ mit Werten $\lambda_i$ an den Stellen $x_i$ ist $\sum_i\lambda_iL_i$.`,
    meta: "Skript: Mathematica-Notebooks „Lagrange_Interpolationspolynome1/2.nb” (nach Kap. 7)",
    explanation: R`<b>Zwei Basen, zwei Sichtweisen</b> auf denselben Raum:<br>
• <b>Monombasis</b> $\{1,x,\dots,x^{n-1}\}$: Koordinaten = Koeffizienten.<br>
• <b>Lagrange-Basis</b> $\mathcal{L}$: Koordinaten = Funktionswerte an den Stützstellen.<br>
Der Basiswechsel zwischen ihnen ist „Koeffizienten ↔ Werte”: von Monomen zu $\mathcal{L}$ heisst <b>auswerten</b>, von $\mathcal{L}$ zu Monomen heisst <b>interpolieren</b>.<br><br>
<b>Das δ-Prinzip:</b> $L_i(x_j) = \delta_i^j$ ist dieselbe Struktur wie bei der dualen Basis ($x_i^*(x_j) = \delta_i^j$). Tatsächlich sind die Auswertungsfunktionale $p\mapsto p(x_i)$ genau die duale Basis zu $\mathcal{L}$.<br><br>
Mathematica-Beispiel: Stützstellen $-3,-1,0,4,5$ und Werte $2,2,3,4,-1$ ergeben $g = 3+\tfrac{131}{105}x+\tfrac{317}{1680}x^2-\tfrac{29}{420}x^3-\tfrac{17}{1680}x^4$.`,
    example: R`Stützstellen $0,1,2$: $L_0 = \tfrac{(x-1)(x-2)}{2} = 1-\tfrac32x+\tfrac12x^2$, $L_1 = \tfrac{x(x-2)}{-1} = 2x-x^2$, $L_2 = \tfrac{x(x-1)}{2} = -\tfrac12x+\tfrac12x^2$. Probe: $L_1(0) = 0$, $L_1(1) = 1$, $L_1(2) = 0$ ✓.<br>
$f = 2+3x-x^2$: $f(0) = 2$, $f(1) = 4$, $f(2) = 4$ ⇒ $f = 2L_0+4L_1+4L_2$.`,
    counterexample: R`<b>Doppelte Stützstelle:</b> Für $x_0 = x_1$ ist der Nenner $x_0-x_1 = 0$ – $L_0$ undefiniert. Die Stützstellen müssen paarweise verschieden sein.<br>
<b>Zu viele Bedingungen:</b> Durch 3 Punkte $(0,1),(1,2),(2,-1)$ geht genau ein Polynom vom Grad $\le 2$ ($1+3x-2x^2$), aber keine Gerade (Grad $\le 1$): $1+x$ trifft $(2,3)\neq(2,-1)$.`
  },
  {
    id: "la8_bsp_lagrange_grad2",
    title: "Beispiel: Basiswechsel Monome ↔ Lagrange-Polynome (Grad ≤ 2)",
    category: "8b Lagrange-Interpolation",
    type: "beispiel",
    front: R`$V$ = reelle Polynomfunktionen vom Grad $\le 2$, $\mathcal{B} = \{p_0,p_1,p_2\} = \{1,x,x^2\}$, $\mathcal{L} = \{L_0,L_1,L_2\}$ zu den Stützstellen $0,1,2$. Bestimme die Basiswechselmatrizen $A$ ($\mathcal{B}\to\mathcal{L}$) und $B$ ($\mathcal{L}\to\mathcal{B}$). Welche Polynome sind $A\cdot(2,3,-1)^t$ und $B\cdot(1,2,-1)^t$?`,
    back: R`<b>$\mathcal{B}\to\mathcal{L}$:</b> alte Basis $p_j$ in $\mathcal{L}$ schreiben – die Koordinaten sind die Werte $p_j(0),p_j(1),p_j(2)$:
$$A = \begin{pmatrix}1&0&0\\1&1&1\\1&2&4\end{pmatrix}\quad(\text{Spalten }p_0,p_1,p_2;\;\text{Zeilen }L_0,L_1,L_2).$$
<b>$\mathcal{L}\to\mathcal{B}$:</b> $L_0 = 1-\tfrac32x+\tfrac12x^2$, $L_1 = 0+2x-x^2$, $L_2 = 0-\tfrac12x+\tfrac12x^2$:
$$B = \begin{pmatrix}1&0&0\\-\tfrac32&2&-\tfrac12\\\tfrac12&-1&\tfrac12\end{pmatrix},\qquad A\cdot B = B\cdot A = I_3.$$
<b>Anwendungen:</b> $A\begin{pmatrix}2\\3\\-1\end{pmatrix} = \begin{pmatrix}2\\4\\4\end{pmatrix}$: $2+3x-x^2 = 2L_0+4L_1+4L_2$.<br>
$B\begin{pmatrix}1\\2\\-1\end{pmatrix} = \begin{pmatrix}1\\3\\-2\end{pmatrix}$: Das Polynom vom Grad $\le 2$ mit Werten $1,2,-1$ an $0,1,2$ ist $1+3x-2x^2$.`,
    meta: "Skript: Kap. 8, Beispiel (KW 46, Tag 2) mit Zu.Inf.",
    explanation: R`<b>Zu.Inf. (Skript):</b> „Die Koeffizienten bzgl. $\mathcal{L}$ sind genau die Funktionswerte an den Stützstellen $0,1,2$. Die Matrix $A$ rechnet also <b>Koeffizienten → Werte</b>, die Matrix $B$ rechnet <b>Werte → Koeffizienten</b> (Interpolation).”<br><br>
<b>Struktur von $A$:</b> Zeile $i$ ist $(1,x_i,x_i^2)$ – eine <b>Vandermonde-Matrix</b>. „$A$ mal Koeffizientenvektor” wertet das Polynom an allen Stützstellen gleichzeitig aus.<br><br>
<b>Kontrolle von $B$:</b> Spalte $j$ von $B$ = Koeffizienten von $L_j$; deshalb muss $A\cdot(\text{Spalte }j\text{ von }B)$ die Werte von $L_j$ an $0,1,2$ liefern, also $e_j$ – das ist $AB = I_3$.`,
    example: R`Probe zu $1+3x-2x^2$: Werte $1$, $1+3-2 = 2$, $1+6-8 = -1$ ✓.<br>
Weiteres: Werte $(0,1,4)$ ⇒ $B(0,1,4)^t = (0,\,2-2,\,-1+2)^t = (0,0,1)^t$, also $x^2$ ✓ (natürlich: $x^2$ hat an $0,1,2$ die Werte $0,1,4$).`,
    counterexample: R`<b>Matrix falsch herum benutzt:</b> $B\cdot(2,3,-1)^t$ (Koeffizienten statt Werte eingesetzt) liefert $(2,\,-3+6+\tfrac12,\,1-3-\tfrac12)^t = (2,\tfrac72,-\tfrac52)^t$ – das Polynom $2+\tfrac72x-\tfrac52x^2$ hat Werte $2,3,-1$ und hat mit $2+3x-x^2$ nichts zu tun.`
  },
  {
    id: "la8_bsp_taylor",
    title: "Beispiel (Stammbach): Taylor-Basis 1, x−c, (x−c)², …",
    category: "8b Lagrange-Interpolation",
    type: "beispiel",
    front: R`Für Polynome vom Grad $\le 3$ seien $\alpha_k = x^{k-1}$ (Monome) und $\beta_k = (x-c)^{k-1}$. Wie sieht die Basiswechselmatrix aus, und warum sind die neuen Koordinaten von $p$ gerade $p(c),p'(c),\tfrac{p''(c)}{2!},\tfrac{p'''(c)}{3!}$?`,
    back: R`Alte in neue Basis: $x = (x-c)+c$, $x^2 = ((x-c)+c)^2$, … ergibt
$$(\alpha_i^j) = \begin{pmatrix}1&c&c^2&c^3\\0&1&2c&3c^2\\0&0&1&3c\\0&0&0&1\end{pmatrix}.$$
Für $p = a_1+a_2x+a_3x^2+a_4x^3 = b_1+b_2(x-c)+b_3(x-c)^2+b_4(x-c)^3$ liefert Lemma 8.0:
$$b_1 = a_1+a_2c+a_3c^2+a_4c^3 = p(c),\;\; b_2 = a_2+2a_3c+3a_4c^2 = p'(c),\;\; b_3 = a_3+3a_4c = \tfrac{p''(c)}{2!},\;\; b_4 = a_4 = \tfrac{p'''(c)}{3!}.$$`,
    meta: "Stammbach II.8.2.2 (ergänzendes Beispiel zu Kap. 8 / Lemma 8.0)",
    explanation: R`<b>Taylor-Entwicklung als Basiswechsel:</b> „Ein Polynom um den Punkt $c$ entwickeln” heisst nichts anderes, als es in der Basis $\{1,(x-c),(x-c)^2,\dots\}$ darzustellen. Dass die Koordinaten die (skalierten) Ableitungen sind, sieht man durch Ableiten von $\sum b_k(x-c)^{k-1}$ und Einsetzen von $x = c$ – alle Terme ausser einem verschwinden (wieder das δ-Prinzip).<br><br>
<b>Matrix:</b> Die Spalten enthalten Binomialkoeffizienten mal Potenzen von $c$ (binomischer Lehrsatz); die Matrix ist obere Dreiecksmatrix mit Einsen auf der Diagonalen – also immer invertierbar (Inverse: dieselbe Matrix mit $-c$ statt $c$).`,
    example: R`$p = 1+2x+3x^2$, $c = 1$: $p(1) = 6$, $p'(1) = 2+6 = 8$, $\tfrac{p''(1)}{2} = 3$ ⇒ $p = 6+8(x-1)+3(x-1)^2$. Probe: $6+8x-8+3x^2-6x+3 = 1+2x+3x^2$ ✓.<br>
Mit der Matrix ($n = 3$): $\begin{pmatrix}1&1&1\\0&1&2\\0&0&1\end{pmatrix}\begin{pmatrix}1\\2\\3\end{pmatrix} = \begin{pmatrix}6\\8\\3\end{pmatrix}$ ✓.`,
    counterexample: R`<b>Falsche Annahme „Koeffizienten bleiben gleich”:</b> $1+2x+3x^2\neq 1+2(x-1)+3(x-1)^2 = 2-4x+3x^2$. Ein Basiswechsel ändert die Koordinaten fast immer.<br>
<b>Nicht-Polynom:</b> Für $e^x$ ist die „Koordinatenliste” bzgl. $\{(x-c)^k\}$ unendlich – keine endliche LK, also nicht im Polynomraum.`
  },
  // ========================================================================
  // 8c DARSTELLUNGSMATRIX BEIM BASISWECHSEL
  // ========================================================================
  {
    id: "la8_satz_8_1",
    title: "Satz 8.1: Ã_φ = B_W · A_φ · B_V⁻¹",
    category: "8c Darstellungsmatrix beim Basiswechsel",
    type: "satz",
    front: R`Formuliere <b>Satz 8.1</b>: Wie ändert sich die Darstellungsmatrix von $\varphi\in\mathrm{Hom}(V,W)$, wenn man in $V$ und $W$ die Basis wechselt? Beweise ihn mit einem Diagramm.`,
    back: R`<b>Satz 8.1:</b> Seien $V,W$ VR über $K$ der Dimension $n$ bzw. $m$, $\mathcal{B}_V,\tilde{\mathcal{B}}_V$ Basen von $V$ und $\mathcal{B}_W,\tilde{\mathcal{B}}_W$ Basen von $W$. Seien $B_V = (\alpha_i^j)_n^n$ und $B_W = (\beta_i^j)_m^m$ die Basiswechselmatrizen zu $\mathcal{B}_V\to\tilde{\mathcal{B}}_V$ bzw. $\mathcal{B}_W\to\tilde{\mathcal{B}}_W$. Weiter sei $\varphi\in\mathrm{Hom}(V,W)$ mit Darstellungsmatrix $A_\varphi$ bzgl. $\mathcal{B}_V$ und $\mathcal{B}_W$. Dann gilt für die Darstellungsmatrix $\tilde A_\varphi$ bzgl. $\tilde{\mathcal{B}}_V$ und $\tilde{\mathcal{B}}_W$:
$$\boxed{\tilde A_\varphi = B_W\cdot A_\varphi\cdot B_V^{-1}}\qquad(\text{damit }A_\varphi = B_W^{-1}\cdot\tilde A_\varphi\cdot B_V).$$
<b>Beweis:</b> Für $x\in V$, $y\in W$ gilt nach Lemma 8.0 $x_{\tilde{\mathcal{B}}_V} = B_V\cdot x_{\mathcal{B}_V}$ und $y_{\tilde{\mathcal{B}}_W} = B_W\cdot y_{\mathcal{B}_W}$. Im Diagramm
$$\begin{array}{ccc}x_{\tilde{\mathcal{B}}_V}&\xrightarrow{\;\tilde A_\varphi\;}&\varphi(x)_{\tilde{\mathcal{B}}_W}\\ {\scriptstyle B_V}\uparrow&&\uparrow{\scriptstyle B_W}\\ x_{\mathcal{B}_V}&\xrightarrow{\;A_\varphi\;}&\varphi(x)_{\mathcal{B}_W}\end{array}$$
führen beide Wege zu den Koordinaten von $\varphi(x)$ bzgl. $\tilde{\mathcal{B}}_W$; es kommutiert, d.h. $\tilde A_\varphi\cdot B_V = B_W\cdot A_\varphi$, also $\tilde A_\varphi = B_W\cdot A_\varphi\cdot B_V^{-1}$.`,
    meta: "Skript: Kap. 8, Satz 8.1 mit Beweis; Mathematica „Basiswechsel.nb”",
    explanation: R`<b>Von rechts nach links lesen</b> (wie bei Verknüpfungen): Gegeben neue Koordinaten $x_{\tilde{\mathcal{B}}_V}$:<br>
1. $B_V^{-1}$: zurück in alte Koordinaten,<br>
2. $A_\varphi$: abbilden (in alten Koordinaten),<br>
3. $B_W$: Ergebnis in neue Koordinaten umrechnen.<br><br>
<b>Spezialfall Selbstabbildung</b> ($V = W$, dieselbe Basis in Start und Ziel): $\tilde A_\varphi = B\cdot A_\varphi\cdot B^{-1}$ – „Ähnlichkeit” von Matrizen. Ziel ist oft, $B$ so zu wählen, dass $\tilde A_\varphi$ <b>diagonal</b> wird (Eigenbasis, vgl. Mathematica-Beispiel $\mathrm{diag}(-2,2,0)$ und $M_{\mathrm{Fib}}$).<br><br>
<b>Mathematica-Bsp. (dim 5 → 4):</b> Eine volle $4\times 5$-Matrix $A_\varphi$ wird durch geeignete Basen zu $\tilde A_\varphi = \begin{pmatrix}2&1&0&0&0\\0&2&0&0&0\\0&0&-1&0&0\\0&0&0&0&0\end{pmatrix}$, und $B_W^{-1}\tilde A_\varphi B_V = A_\varphi$ zurück.`,
    example: R`$V = W = \mathbb{R}^2$, $A_\varphi = \begin{pmatrix}2&1\\0&3\end{pmatrix}$ (Standardbasis), neue Basis $\{(1,0),(1,1)\}$ in Start und Ziel: $B_V = B_W = \begin{pmatrix}1&-1\\0&1\end{pmatrix}$, $B_V^{-1} = \begin{pmatrix}1&1\\0&1\end{pmatrix}$.
$$\tilde A_\varphi = \begin{pmatrix}1&-1\\0&1\end{pmatrix}\begin{pmatrix}2&1\\0&3\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix} = \begin{pmatrix}2&0\\0&3\end{pmatrix}.$$
Probe: $\varphi(1,0) = (2,0) = 2\cdot(1,0)$, $\varphi(1,1) = (3,3) = 3\cdot(1,1)$ ✓.`,
    counterexample: R`<b>Falsche Reihenfolge / fehlende Inverse:</b> $B_V\cdot A_\varphi\cdot B_V = \begin{pmatrix}2&-4\\0&3\end{pmatrix}$ und $B_V^{-1}A_\varphi B_V = \begin{pmatrix}2&2\\0&3\end{pmatrix}$ – beide falsch (die zweite ist die Matrix bzgl. eines <i>anderen</i> Basiswechsels). Nur $B_W A_\varphi B_V^{-1}$ liefert $\mathrm{diag}(2,3)$.`
  },
  {
    id: "la8_rezept_satz_8_1",
    title: "Rezept: Neue Darstellungsmatrix direkt berechnen (ohne Formel)",
    category: "8c Darstellungsmatrix beim Basiswechsel",
    type: "beispiel",
    front: R`Wie bestimmt man $\tilde A_\varphi$ bzgl. neuer Basen „von Hand” (ohne $B_W A_\varphi B_V^{-1}$), und wie prüft man das Ergebnis? Wende es an auf $\varphi:\mathbb{R}^3\to\mathbb{R}^2$ mit $A_\varphi = \begin{pmatrix}1&0&1\\1&-1&2\end{pmatrix}$ (Standardbasen), $\tilde{\mathcal{B}}_V = \{(1,0,0),(1,1,0),(1,1,1)\}$, $\tilde{\mathcal{B}}_W = \{(1,1),(1,0)\}$.`,
    back: R`<b>Rezept:</b> (1) Neue Basisvektoren von $V$ in alten Koordinaten hinschreiben. (2) Mit $A_\varphi$ abbilden. (3) Die Bilder in der neuen Basis von $W$ ausdrücken → das sind die Spalten von $\tilde A_\varphi$.<br><br>
<b>Anwendung</b> (Stammbach III.5.5):<br>
$A_\varphi(1,0,0)^t = (1,1)^t = 1\cdot(1,1)+0\cdot(1,0)$;<br>
$A_\varphi(1,1,0)^t = (1,0)^t = 0\cdot(1,1)+1\cdot(1,0)$;<br>
$A_\varphi(1,1,1)^t = (2,2)^t = 2\cdot(1,1)+0\cdot(1,0)$.
$$\tilde A_\varphi = \begin{pmatrix}1&0&2\\0&1&0\end{pmatrix}.$$
<b>Mit Satz 8.1:</b> $B_W$ = alte in neue: $e_1 = (1,0)$ = $0\cdot(1,1)+1\cdot(1,0)$, $e_2 = (1,1)-(1,0)$ ⇒ $B_W = \begin{pmatrix}0&1\\1&-1\end{pmatrix}$; $B_V^{-1}$ = neue in alten Koordinaten $= \begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}$; $B_WA_\varphi B_V^{-1}$ ergibt dieselbe Matrix.`,
    meta: "Ergänzung zu Satz 8.1 (Stammbach III.5.5; Skript: Mathematica-Beispiel nach Satz 7.6)",
    explanation: R`Das Rezept ist einfach die <b>Definition der Darstellungsmatrix</b> (Spalten = Bilder der Basisvektoren in Koordinaten der Zielbasis), angewendet auf die neuen Basen. Satz 8.1 ist die kompakte Matrixform davon: $B_V^{-1}$ liefert Schritt (1), $A_\varphi$ Schritt (2), $B_W$ Schritt (3).<br><br>
<b>Merke zu $B_V^{-1}$:</b> Die Matrix, deren Spalten die <b>neuen</b> Basisvektoren in <b>alten</b> Koordinaten sind, ist $B_V^{-1}$ (= Basiswechsel $\tilde{\mathcal{B}}_V\to\mathcal{B}_V$). Sie ist meist die, die man direkt hinschreiben kann – deshalb taucht in Satz 8.1 die Inverse auf.`,
    example: R`Kontrolle mit einem Vektor: $x = 2\cdot(1,0,0)+0\cdot(1,1,0)+1\cdot(1,1,1) = (3,1,1)$. Alt: $\varphi(x) = A_\varphi(3,1,1)^t = (4,4)^t$. Neu: $\tilde A_\varphi(2,0,1)^t = (4,0)^t$, d.h. $4\cdot(1,1)+0\cdot(1,0) = (4,4)$ ✓.`,
    counterexample: R`<b>Bilder in alten statt neuen Koordinaten:</b> Schreibt man in Schritt (3) die Bilder $(1,1),(1,0),(2,2)$ direkt als Spalten, erhält man $\begin{pmatrix}1&1&2\\1&0&2\end{pmatrix} = A_\varphi B_V^{-1}$ – die Matrix bzgl. $(\tilde{\mathcal{B}}_V,\mathcal{B}_W)$, nicht bzgl. $(\tilde{\mathcal{B}}_V,\tilde{\mathcal{B}}_W)$.`
  }
];
})();
