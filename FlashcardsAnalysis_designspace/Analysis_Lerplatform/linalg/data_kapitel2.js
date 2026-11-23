/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 2: Einfache Beweise
   (Satz 2.0 Gruppenaxiome, Satz 2.1 Körper, Satz 2.2 Ringe)
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_2 = [
  // ========================================================================
  // 2a GRUPPENAXIOME
  // ========================================================================
  {
    id: "la2_satz_2_0",
    title: "Satz 2.0: Die Gruppenaxiome G0, G1, G2",
    category: "2a Gruppenaxiome (Satz 2.0)",
    type: "satz",
    front: R`Formuliere <b>Satz 2.0</b>: Welche drei „einseitigen” Axiome genügen, damit $(M,\circ,e)$ eine Gruppe ist?`,
    back: R`Sei $M$ eine Menge, auf der eine binäre Operation „$\circ$” definiert ist, und sei $e\in M$. Dann ist $(M,\circ,e)$ <b>genau dann eine Gruppe</b>, wenn die drei <b>Gruppenaxiome</b> gelten:
$$\begin{aligned}
G_0&:\;\forall x\,\forall y\,\forall z\;\big(x\circ(y\circ z) = (x\circ y)\circ z\big) &&\text{„}\circ\text{” ist assoziativ}\\
G_1&:\;\forall x\;(e\circ x = x) &&e\text{ ist Linksneutralelement}\\
G_2&:\;\forall x\,\exists\bar x\;(\bar x\circ x = e) &&\text{jedes }x\text{ besitzt ein Linksinverses}
\end{aligned}$$
Für „$\Leftarrow$” zeigt man: (a) jedes Linksinverse ist Rechtsinverses, (b) $e$ ist auch rechtsneutral, (c) das Neutralelement ist eindeutig, (d) das Inverse von $x$ ist eindeutig.`,
    meta: "Skript: Kap. 2, Satz 2.0",
    explanation: R`Die Definition einer Gruppe (KW 38) verlangt viel: ein <b>beidseitiges</b> Neutralelement, <b>beidseitige</b> Inverse, und beides <b>eindeutig</b>. Satz 2.0 sagt: Man muss nur die <b>Hälfte</b> prüfen – Assoziativität plus „von links” neutral und „von links” invers. Den Rest erzwingt die Assoziativität.<br><br>
<b>Praktischer Nutzen:</b> Beim Nachweis, dass etwas eine Gruppe ist, spart man Arbeit (vor allem in nicht-kommutativen Situationen wie Matrizen oder Abbildungen).<br><br>
<b>Wichtig:</b> Beide Bedingungen müssen von <b>derselben Seite</b> kommen. „Rechtsneutral + Linksinverse” genügt <b>nicht</b> – das zeigt das Unbeispiel $a\ast b := a$.`,
    example: R`<b>Nachweis für $(\mathbb{Q}\setminus\{0\},\cdot)$ mit $e=1$:</b> $G_0$ – Multiplikation ist assoziativ; $G_1$ – $1\cdot x = x$; $G_2$ – zu $x = \tfrac{a}{b}$ ist $\bar x = \tfrac ba$ mit $\tfrac ba\cdot\tfrac ab = 1$. Beidseitigkeit folgt aus dem Satz (hier auch aus der Kommutativität).<br>
<b>Zahlen in $\mathbb{Z}_7^{\times}$:</b> $\bar x = \bar 3$ hat Linksinverses $\bar 5$ ($\bar 5\cdot\bar 3 = \bar 1$), und nach (a) auch $\bar 3\cdot\bar 5 = \bar 1$.`,
    counterexample: R`<b>Unbeispiel (Skript):</b> $M = \{p,q\}$, $a\ast b := a$. $G_0$ gilt, jedes Element ist <b>rechts</b>neutral, jedes Element hat ein Linksinverses – aber kein Element ist <b>links</b>neutral ($q\ast p = q\neq p$, $p\ast q = p\neq q$). $G_1$ ist verletzt, und $(M,\ast)$ ist keine Gruppe.<br>
<b>Ohne Assoziativität:</b> $(\mathbb{Z},-)$ mit $e=0$: $0$ ist <i>rechts</i>neutral ($x-0=x$), jedes $x$ ist zu sich selbst „invers” ($x-x = 0$) – aber $G_0$ fehlt: $(5-3)-1 = 1\neq 3 = 5-(3-1)$.`
  },
  {
    id: "la2_beweis_2_0",
    title: "Beweis von Satz 2.0 (a)–(d)",
    category: "2a Gruppenaxiome (Satz 2.0)",
    type: "beweis",
    front: R`Beweise die Richtung „$\Leftarrow$” von Satz 2.0: Aus $G_0$, $G_1$, $G_2$ folgen (a) Linksinverse sind Rechtsinverse, (b) $e$ ist rechtsneutral, (c) $e$ ist eindeutig, (d) Inverse sind eindeutig.`,
    back: R`<b>(a)</b> Sei $\bar{\bar x}$ ein Linksinverses von $\bar x$. Es gilt $(\bar x\circ x)\circ\bar x = e\circ\bar x = \bar x$, also wegen $G_0$: $\bar x\circ(x\circ\bar x) = \bar x$. Multipliziere von links mit $\bar{\bar x}$:
$$\underbrace{\bar{\bar x}\circ\bar x}_{=e}\circ(x\circ\bar x) = \bar{\bar x}\circ\bar x = e\quad\text{und}\quad e\circ(x\circ\bar x) = x\circ\bar x.$$
Also $x\circ\bar x = e$.<br>
<b>(b)</b> $x\circ e = x\circ(\bar x\circ x) \overset{G_0}{=} (x\circ\bar x)\circ x \overset{(a)}{=} e\circ x = x$.<br>
<b>(c)</b> Sind $e,e'$ Neutralelemente: $e\circ e' = e$ (da $e'$ rechtsneutral) und $e\circ e' = e'$ (da $e$ linksneutral), also $e = e'$.<br>
<b>(d)</b> Sind $\bar x,\tilde x$ Inverse von $x$: $\bar x = \bar x\circ(x\circ\tilde x)\overset{G_0}{=}(\bar x\circ x)\circ\tilde x = e\circ\tilde x = \tilde x$.<br>
<b>(⇒)</b> ist klar: Eine Gruppe erfüllt $G_0,G_1,G_2$.`,
    meta: "Skript: Kap. 2, Beweis von Satz 2.0",
    explanation: R`<b>Die Strategie in (a):</b> Wir wissen nur etwas über Produkte, bei denen das Inverse <b>links</b> steht. Um $x\circ\bar x$ (Inverses rechts) zu kontrollieren, schieben wir es mit Assoziativität zwischen zwei Faktoren, die wir kennen: $\bar x\circ(x\circ\bar x)$. Dann holen wir mit einem <b>Linksinversen des Linksinversen</b> ($\bar{\bar x}$) den vorderen Faktor weg. Derselbe Ausdruck $\bar{\bar x}\circ\bar x\circ(x\circ\bar x)$ wird auf zwei Arten geklammert: einmal ergibt er $e$, einmal $x\circ\bar x$.<br><br>
<b>Reihenfolge ist wichtig:</b> (b) benutzt (a), (c) und (d) benutzen, dass $e$ beidseitig neutral und $\bar x$ beidseitig invers ist.<br><br>
<b>Der Trick in (c)</b> („$e\circ e'$ auf zwei Arten auswerten”) und in (d) („$\bar x\circ x\circ\tilde x$ auf zwei Arten klammern”) taucht immer wieder auf, z.B. in der Eindeutigkeit inverser Matrizen (Kap. 8).`,
    example: R`<b>In $(\mathbb{Z}_5\setminus\{\bar 0\},\cdot_5)$ nachgerechnet:</b> $x=\bar 2$, Linksinverses $\bar x = \bar 3$ ($\bar 3\cdot\bar 2 = \bar 6 = \bar 1$), Linksinverses von $\bar 3$ ist $\bar{\bar x} = \bar 2$. Schritt (a): $\bar 3\circ(\bar 2\circ\bar 3) = \bar 3\cdot\bar 1 = \bar 3$ ✓, und $x\circ\bar x = \bar 2\cdot\bar 3 = \bar 1$ ✓. Ausserdem $\bar{\bar x} = x$, wie die Behauptung nach dem Satz sagt.`,
    counterexample: R`<b>Wo der Beweis ohne $G_1$ scheitert:</b> Bei $a\ast b := a$ auf $\{p,q\}$ mit „$e$” $:=p$ (nur rechtsneutral) ist $G_2$ erfüllt: $\bar x := p$ leistet $p\ast x = p = e$ für alle $x$. Aber $G_1$ fehlt ($p\ast q = p\neq q$), und prompt scheitert die Folgerung (a): Das Linksinverse $p$ von $q$ ist <b>kein</b> Rechtsinverses, denn $q\ast p = q\neq e$. Der Beweisschritt „$e\circ\bar x = \bar x$” ist genau die Stelle, an der $G_1$ gebraucht wird.<br>
<b>Zwei verschiedene einseitige Neutrale</b> kann es nur geben, wenn kein beidseitiges existiert: Im Unbeispiel sind $p$ und $q$ <b>beide</b> rechtsneutral – (c) greift nicht, weil keines linksneutral ist.`
  },
  {
    id: "la2_inverses_des_inversen",
    title: "Behauptung: Das Inverse des Inversen; Schreibweisen −x, x⁻¹, x − y, x : y",
    category: "2a Gruppenaxiome (Satz 2.0)",
    type: "proposition",
    front: R`Zeige: In einer Gruppe ist das Inverse des Inversen wieder $x$. Welche Schreibweisen ($-x$, $x^{-1}$, $x-y$, $x:y$) definiert das Skript?`,
    back: R`<b>Behauptung:</b> Ist $(M,\circ)$ eine Gruppe, $x\in M$, $\bar x$ das Inverse von $x$ und $\bar{\bar x}$ das Inverse von $\bar x$, so ist $\bar{\bar x} = x$.<br>
<b>Beweis:</b> $\underbrace{(\bar{\bar x}\circ\bar x)}_{=e}\circ x = x$ und $\bar{\bar x}\circ\underbrace{(\bar x\circ x)}_{=e} = \bar{\bar x}$; beide linken Seiten sind wegen der Assoziativität gleich, also $x = \bar{\bar x}$.<br><br>
<b>Definition (Schreibweisen):</b>
<ul><li>Additiv geschriebene Gruppe („$+$”): Inverses von $x$ ist $-x$; multiplikativ: $x^{-1}$. Damit gilt $-(-x) = x$ bzw. $(x^{-1})^{-1} = x$.</li>
<li>In additiven Gruppen: $x-y := x+(-y)$; in multiplikativen Gruppen: $x:y := x\cdot y^{-1}$.</li></ul>`,
    meta: "Skript: Kap. 2, Behauptung nach Satz 2.0 und Definition",
    explanation: R`„Rückgängig machen rückgängig machen” = nichts tun. Formal ist das eine direkte Folge der <b>Eindeutigkeit</b> von Inversen (Satz 2.0 (d)): $x$ selbst ist ein Inverses von $\bar x$ (weil $\bar x\circ x = e = x\circ\bar x$), und Inverse sind eindeutig.<br><br>
<b>Subtraktion ist keine neue Operation</b>, sondern Addition des Inversen. Darum muss man z.B. in Vektorräumen nichts Neues über „$-$” beweisen: $x - y$ ist definiert als $x+(-y)$, und $-y = (-1)\cdot y$ (Lemma 3.0 (c)).<br><br>
<b>Vorsicht bei Nicht-Kommutativität:</b> $x:y = x\cdot y^{-1}$ ist im Allgemeinen nicht $y^{-1}\cdot x$; und $(x\cdot y)^{-1} = y^{-1}\cdot x^{-1}$ (Reihenfolge dreht sich, vgl. Satz 2.1 (b)).`,
    example: R`<b>1.</b> $(\mathbb{Z},+)$: $-(-7) = 7$; $\;10-3 = 10+(-3) = 7$.<br>
<b>2.</b> $(\mathbb{Q}\setminus\{0\},\cdot)$: $\big((\tfrac25)^{-1}\big)^{-1} = (\tfrac52)^{-1} = \tfrac25$; $\;3:\tfrac34 = 3\cdot\tfrac43 = 4$.<br>
<b>3.</b> $\mathbb{Z}_7$: $-\bar 3 = \bar 4$ (da $3+4 = 7$), und $-\bar 4 = \bar 3$ ✓.`,
    counterexample: R`<b>Reihenfolge bei $(xy)^{-1}$:</b> Für $2\times 2$-Matrizen $X = \begin{pmatrix}1&1\\0&1\end{pmatrix}$, $Y = \begin{pmatrix}1&0\\1&1\end{pmatrix}$ ist $XY = \begin{pmatrix}2&1\\1&1\end{pmatrix}$ mit $(XY)^{-1} = \begin{pmatrix}1&-1\\-1&2\end{pmatrix} = Y^{-1}X^{-1}$, aber $X^{-1}Y^{-1} = \begin{pmatrix}2&-1\\-1&1\end{pmatrix}\neq(XY)^{-1}$.<br>
<b>Subtraktion ist nicht assoziativ</b> (also keine Gruppenoperation): $(8-4)-2 = 2\neq 6 = 8-(4-2)$.`
  },
  // ========================================================================
  // 2b KÖRPER UND RINGE
  // ========================================================================
  {
    id: "la2_satz_2_1",
    title: "Satz 2.1: 0 ≠ 1 und Nullteilerfreiheit in Körpern",
    category: "2b Folgerungen in Körpern und Ringen (Sätze 2.1, 2.2)",
    type: "satz",
    front: R`Was besagt <b>Satz 2.1</b> über Körper $(K,+,\cdot,0,1)$, und wie wird er bewiesen?`,
    back: R`In Körpern $(K,+,\cdot,0,1)$ [bzw. $(K,+,\cdot,0_K,1_K)$] gilt:
<ul><li><b>(a)</b> $0\neq 1$,</li>
<li><b>(b)</b> $\forall x\,\forall y\;\big(x\cdot y = 0\to(x=0\vee y=0)\big)$.</li></ul>
<b>Beweis (a):</b> Nach Definition ist $(K\setminus\{0\},\cdot)$ eine abelsche Gruppe mit Neutralelement $1$. Wäre $0 = 1$, so wäre $1\notin K\setminus\{0\}$ – dann kann $(K\setminus\{0\},\cdot)$ keine Gruppe mit Neutralelement $1$ sein.<br>
<b>Beweis (b), Kontraposition:</b> Ist $x\neq 0$ und $y\neq 0$, so existieren $x^{-1},y^{-1}\in K$ und damit auch $(x\cdot y)^{-1} = x^{-1}\cdot y^{-1}$ (eigentlich $y^{-1}\cdot x^{-1}$, aber „$\cdot$” ist kommutativ). Also $x\cdot y\neq 0$.<br>
<b>Bem.:</b> Im Nullring $(\{0\},+,\cdot,0_R,1_R)$ ist $0_R = 1_R = 0$.`,
    meta: "Skript: Kap. 2, Satz 2.1, Bem. Nullring",
    explanation: R`<b>(b) ist das Fundament fürs Gleichungslösen:</b> „Ein Produkt ist genau dann null, wenn ein Faktor null ist.” Deshalb kann man $(x-2)(x+3) = 0$ in $x=2$ oder $x=-3$ zerlegen – das klappt <b>nur</b> in nullteilerfreien Strukturen.<br><br>
<b>Intuition für den Beweis von (b):</b> Wäre $x\cdot y = 0$ mit $x,y\neq 0$, so könnte man mit $x^{-1}$ multiplizieren und erhielte $y = x^{-1}\cdot 0 = 0$ (Satz 2.2 (a)) – Widerspruch. Inverse „vertragen sich nicht” mit Nullteilern.<br><br>
<b>Wo gebraucht:</b> Lemma 3.0 (d) ($\lambda x = 0_V\Rightarrow\lambda = 0\vee x = 0_V$) ist die Vektorraum-Version von (b); der Schubfach-Satz in Kap. 1 kürzt $\bar a^s$ mit (b).`,
    example: R`<b>1.</b> In $\mathbb{Q}$: $x\cdot y = 0$ mit $x = \tfrac35$ erzwingt $y = \tfrac53\cdot 0 = 0$.<br>
<b>2.</b> In $\mathbb{Z}_5$: Die Produkte von Nicht-Null-Elementen sind nie $\bar 0$, z.B. $\bar 2\cdot\bar 3 = \bar 1$, $\bar 4\cdot\bar 4 = \bar 1$, $\bar 3\cdot\bar 4 = \bar 2$.<br>
<b>3.</b> $0\neq 1$ in $\mathbb{F}_2 = \{\bar 0,\bar 1\}$ – der kleinstmögliche Körper hat schon 2 Elemente.`,
    counterexample: R`<b>1. Ring mit Nullteilern:</b> In $\mathbb{Z}_6$ ist $\bar 2\cdot\bar 3 = \bar 0$, obwohl $\bar 2,\bar 3\neq\bar 0$ – also ist $\mathbb{Z}_6$ kein Körper (Serie 1, 8(c)).<br>
<b>2.</b> In $M_{2\times 2}(\mathbb{R})$: $\begin{pmatrix}0&1\\0&0\end{pmatrix}\cdot\begin{pmatrix}0&1\\0&0\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}$ – eine Matrix $\neq 0$ mit Quadrat $0$.<br>
<b>3.</b> Im Nullring ist $0 = 1$ – er ist daher kein Körper.`
  },
  {
    id: "la2_satz_2_2",
    title: "Satz 2.2: Folgerungen aus den Distributivgesetzen",
    category: "2b Folgerungen in Körpern und Ringen (Sätze 2.1, 2.2)",
    type: "satz",
    front: R`Was folgt in einem Ring $(R,+,\cdot,0,1)$ aus den Distributivgesetzen (<b>Satz 2.2</b>)? Beweise (a) und (b).`,
    back: R`Sei $(R,+,\cdot,0,1)$ ein Ring. Dann gilt:
<ul><li><b>(a)</b> $\forall x\,(0\cdot x = 0\wedge x\cdot 0 = 0)$,</li>
<li><b>(b)</b> $\forall x\,\big((-1)\cdot x = -x\wedge x\cdot(-1) = -x\big)$,</li>
<li><b>(c)</b> $\forall x\,\forall y\,\big((-x)\cdot(-y) = x\cdot y\big)$.</li></ul>
<b>Beweis (a):</b> $x = 1\cdot x = (1+0)\cdot x = (1\cdot x)+(0\cdot x) = x+0\cdot x$. Addiere $-x$: $\;0 = (-x)+x = (-x)+x+0\cdot x = 0+0\cdot x = 0\cdot x$.<br>
<b>Beweis (b):</b> $0\overset{(a)}{=}0\cdot x = \big((-1)+1\big)\cdot x = (-1)\cdot x+1\cdot x = (-1)\cdot x+x$, also $(-1)\cdot x = -x$.<br>
<b>Beweis (c):</b> $(-x)\cdot(-y) = x\cdot(-1)\cdot(-1)\cdot y = x\cdot\big((-1)\cdot(-1)\big)\cdot y = x\cdot(1\cdot y) = x\cdot y$, da $(-1)\cdot(-1)\overset{(b)}{=}-(-1) = 1$.`,
    meta: "Skript: Kap. 2, Satz 2.2 mit Beweis",
    explanation: R`Diese Schulregeln („mal Null ist Null”, „Minus mal Minus gibt Plus”) sind <b>keine Axiome</b>, sondern Konsequenzen der Distributivität. Die Null ist ursprünglich nur das Neutralelement der <i>Addition</i> – dass sie beim <i>Multiplizieren</i> alles „verschluckt”, muss man beweisen, und die einzige Brücke zwischen $+$ und $\cdot$ ist das Distributivgesetz.<br><br>
<b>Kerntrick von (a):</b> Die Gleichung $u = u + v$ in einer Gruppe erzwingt $v = 0$ (addiere $-u$). Mit $u = x$, $v = 0\cdot x$ erhält man $0\cdot x = 0$. Genau derselbe Hilfssatz („$u+u=u\Rightarrow u=0$”) beweist Lemma 3.0 (a),(b) für Vektorräume (Serie 2, Aufgabe 10).<br><br>
<b>(b) begründet die Schreibweise:</b> Das additive Inverse ist „mal $-1$”.`,
    example: R`<b>In $\mathbb{Z}_5$</b> mit $x=\bar 3$: $-\bar 1 = \bar 4$, und $\bar 4\cdot\bar 3 = \overline{12} = \bar 2 = -\bar 3$ ✓ (da $\bar 3+\bar 2 = \bar 0$).<br>
(c): $(-\bar 2)(-\bar 4) = \bar 3\cdot\bar 1 = \bar 3$ und $\bar 2\cdot\bar 4 = \bar 8 = \bar 3$ ✓.<br>
<b>Matrizenring:</b> $0\cdot\begin{pmatrix}1&2\\3&4\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}$ und $(-I_2)\cdot A = -A$.`,
    counterexample: R`<b>Ohne Distributivität kein $0\cdot x = 0$:</b> Auf $\mathbb{Z}$ mit $+$ und $x\ast y := x+y+1$ (assoziativ, kommutativ, Neutralelement $-1$, aber nicht distributiv über $+$): $0\ast 5 = 6\neq 0$.<br>
<b>Vorsicht in nicht-kommutativen Ringen:</b> (a)–(c) gelten trotzdem (der Beweis braucht keine Kommutativität), aber $x\cdot y = y\cdot x$ nicht: $\begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}0&0\\1&0\end{pmatrix} = \begin{pmatrix}1&0\\0&0\end{pmatrix}\neq\begin{pmatrix}0&0\\0&1\end{pmatrix}$ (Serie 7, Aufgabe 32).`
  }
];
})();
