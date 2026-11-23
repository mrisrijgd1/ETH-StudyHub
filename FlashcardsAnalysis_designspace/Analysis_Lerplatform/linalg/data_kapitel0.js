/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 0: Bekannte Beispiele alg. Strukturen
   (Vorlesungsnotizen KW 38, Definitionen 1–7) + Serien 0 und 1
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   Texte als String.raw: Backslashes stehen einfach (\mathbb statt \\mathbb).
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_0 = [
  // ========================================================================
  // 0a HALBGRUPPEN, NEUTRALELEMENTE UND MONOIDE
  // ========================================================================
  {
    id: "la0_def1_halbgruppe",
    title: "Definition 1: Halbgruppe",
    category: "0a Halbgruppen, Neutralelemente und Monoide",
    type: "definition",
    front: R`Was ist eine <b>(kommutative) Halbgruppe</b> $(M, \circ)$?`,
    back: R`Ist $M$ eine Menge zusammen mit einer <b>binären, assoziativen</b> Operation „$\circ$”, so ist die Struktur $(M,\circ)$ eine <b>Halbgruppe</b>:
$$\forall x\,\forall y\,\forall z\;\big(x\circ(y\circ z) = (x\circ y)\circ z\big).$$
Ist „$\circ$” zusätzlich <b>kommutativ</b> ($\forall x\,\forall y\; x\circ y = y\circ x$), so ist $(M,\circ)$ eine <b>kommutative Halbgruppe</b>.<br><br>
<b>Binär</b> heisst: $\circ: M\times M\to M$, d.h. für alle $x,y\in M$ ist $x\circ y$ <b>wieder in $M$</b> (Abgeschlossenheit steckt im Wort „Operation auf $M$”).`,
    meta: "Skript: KW 38, Definition 1, Beispiel 1, Unbeispiel 1",
    explanation: R`Eine Halbgruppe ist die <b>ärmste</b> algebraische Struktur des Skripts: Man darf zwei Elemente verknüpfen und das Ergebnis bleibt in der Menge, und bei längeren Ketten ist die Klammerung egal. Mehr nicht – es muss weder ein neutrales Element noch Inverse geben.<br><br>
<b>Zwei Dinge prüfen:</b><br>
1. <b>Ist „$\circ$” überhaupt eine Operation auf $M$?</b> Das ist die häufigste Falle: $x\circ y$ muss für <i>alle</i> $x,y\in M$ definiert sein und wieder in $M$ liegen.<br>
2. <b>Assoziativität</b> – sie erlaubt es, Ausdrücke wie $x_1\circ x_2\circ\dots\circ x_n$ ohne Klammern zu schreiben.<br><br>
Die Begriffe des Skripts bauen aufeinander auf: Halbgruppe $\subset$ Monoid (+ Neutralelement) $\subset$ Gruppe (+ Inverse) – und Ring/Körper kombinieren zwei solche Strukturen auf derselben Menge.`,
    example: R`<b>1.</b> $(\mathbb{N}_{>0},+)$ ist eine kommutative Halbgruppe: z.B. $(2+3)+4 = 9 = 2+(3+4)$, und $2+3=3+2$. (Es gibt <i>kein</i> Neutralelement, weil $0\notin\mathbb{N}_{>0}$.)<br>
<b>2.</b> Beispiel 1 im Skript: $2\cdot\mathbb{N}_{>0} = \{2,4,6,\dots\}$ mit $+$ ist eine komm. Halbgruppe ($4+6=10\in 2\cdot\mathbb{N}_{>0}$); ebenso $n\cdot\mathbb{N}_{>0}$ und $(\mathbb{R},\cdot)$.<br>
<b>3.</b> Nicht kommutativ, aber Halbgruppe: $(M_{2\times 2}(\mathbb{R}),\cdot)$ – Matrizenprodukt ist assoziativ, aber $\begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}1&0\\0&-1\end{pmatrix}\neq\begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix}$ (Kapitel 7).`,
    counterexample: R`<b>1. Unbeispiel 1 (Skript):</b> $(-\mathbb{N},\cdot)$ mit $-\mathbb{N}=\{0,-1,-2,\dots\}$ ist <b>keine</b> Halbgruppe, weil „$\cdot$” keine Operation auf $-\mathbb{N}$ ist: $(-2)\cdot(-3) = 6\notin -\mathbb{N}$.<br>
<b>2.</b> $(\mathbb{Z},-)$ ist abgeschlossen, aber <b>nicht assoziativ</b>: $(5-3)-1 = 1$, aber $5-(3-1) = 3$.<br>
<b>3.</b> $(\mathbb{N},\,x\circ y := x^y)$: $(2^3)^2 = 64$, aber $2^{(3^2)} = 512$ – nicht assoziativ.`
  },
  {
    id: "la0_def2_neutral",
    title: "Definition 2: Links-, Rechts- und Neutralelement",
    category: "0a Halbgruppen, Neutralelemente und Monoide",
    type: "definition",
    front: R`Was ist ein <b>linksneutrales</b>, <b>rechtsneutrales</b> und ein <b>Neutralelement</b> einer Halbgruppe $(M,\circ)$?`,
    back: R`Sei $(M,\circ)$ eine Halbgruppe und $e\in M$. Gilt für <b>alle</b> $x\in M$:
<ul><li>$e\circ x = x$, so ist $e$ ein <b>linksneutrales Element</b>,</li>
<li>$x\circ e = x$, so ist $e$ ein <b>rechtsneutrales Element</b></li></ul>
bezüglich der Operation „$\circ$”. Ist $e$ sowohl links- wie auch rechtsneutral, so ist $e$ ein <b>Neutralelement</b> bzgl. „$\circ$”.`,
    meta: "Skript: KW 38, Definition 2",
    explanation: R`Ein Neutralelement „tut nichts”: Verknüpfen mit $e$ lässt jedes Element unverändert. Die Unterscheidung links/rechts ist nötig, weil „$\circ$” nicht kommutativ sein muss – dann kann ein Element nur von einer Seite neutral wirken.<br><br>
<b>Wichtig:</b> Die Bedingung muss für <b>alle</b> $x\in M$ gelten, nicht nur für ein einzelnes. Und das Neutralelement hängt an der <b>Operation</b>: In $\mathbb{Z}$ ist $0$ neutral für $+$, aber $1$ für $\cdot$ – deshalb schreibt das Skript später $e_\circ$ bzw. Neutralelemente „bzgl. $\circ$”.<br><br>
<b>Ausblick:</b> In Satz 2.0 (c) wird gezeigt: Gibt es ein linksneutrales $e$ und ein rechtsneutrales $e'$, so ist $e = e\circ e' = e'$ – ein Neutralelement ist dann eindeutig.`,
    example: R`<b>1.</b> In $(\mathbb{N},+)$ ist $0$ neutral: $0+7 = 7 = 7+0$.<br>
<b>2.</b> In $(\mathbb{Z},\cdot)$ ist $1$ neutral: $1\cdot(-4) = -4 = (-4)\cdot 1$.<br>
<b>3.</b> In $(M_{2\times 2}(\mathbb{R}),\cdot)$ ist $I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ neutral, z.B. $I_2\begin{pmatrix}2&5\\1&3\end{pmatrix}=\begin{pmatrix}2&5\\1&3\end{pmatrix}=\begin{pmatrix}2&5\\1&3\end{pmatrix}I_2$.`,
    counterexample: R`<b>1. Nur rechtsneutral:</b> Auf $M=\{p,q\}$ mit $a\ast b := a$ (Unbeispiel aus Kap. 2) ist <i>jedes</i> Element rechtsneutral ($p\ast q = p$), aber <i>keines</i> linksneutral: $q\ast p = q\neq p$.<br>
<b>2.</b> In $(\mathbb{Z},-)$ ist $0$ rechtsneutral ($7-0=7$), aber nicht linksneutral: $0-7 = -7\neq 7$.<br>
<b>3.</b> $(\mathbb{N}_{>0},+)$ hat überhaupt kein Neutralelement: aus $e+5 = 5$ folgt $e=0\notin\mathbb{N}_{>0}$.`
  },
  {
    id: "la0_def3_monoid",
    title: "Definition 3: Kommutatives Monoid",
    category: "0a Halbgruppen, Neutralelemente und Monoide",
    type: "definition",
    front: R`Wann ist eine Struktur $(M,\circ)$ ein <b>kommutatives Monoid</b>? Was bedeutet die Schreibweise $\langle M,\circ,e\rangle$?`,
    back: R`Ist $(M,\circ)$ eine <b>kommutative Halbgruppe</b> und existiert <b>genau ein</b> Neutralelement $e\in M$ (bzgl. „$\circ$”), so ist die Struktur $(M,\circ)$ ein <b>kommutatives Monoid</b>.<br><br>
<b>Bemerkung 1:</b> Manchmal schreiben wir auch $\langle M,\circ,e\rangle$, um das Neutralelement mitzunennen.`,
    meta: "Skript: KW 38, Definition 3, Bemerkung 1, Beispiel 2, Unbeispiel 2",
    explanation: R`Monoid = Halbgruppe <b>mit Neutralelement</b>. Man kann also „nichts tun” als Element ausdrücken. Das ist genau der Zwischenschritt zur Gruppe: Erst wenn ein Neutralelement existiert, kann man überhaupt sagen, was ein Inverses ist ($x'\circ x = e$).<br><br>
Die Forderung „<b>genau ein</b>” Neutralelement ist bequem, aber eigentlich automatisch: Zwei Neutralelemente $e,e'$ erfüllen $e = e\circ e' = e'$ (vgl. Satz 2.0 (c)).<br><br>
<b>Merkhilfe für die Hierarchie:</b><br>
Halbgruppe (assoziativ) $\;\to\;$ Monoid (+ Neutralelement) $\;\to\;$ Gruppe (+ Inverse zu jedem Element).`,
    example: R`<b>1.</b> $(\mathbb{N},+)$ ist ein komm. Monoid mit Neutralelement $0$: $0+12 = 12$.<br>
<b>2. Beispiel 2 (Skript):</b> $(\mathbb{Z},\cdot)$ ist ein komm. Monoid mit Neutralelement $1$, kurz $\langle\mathbb{Z},\cdot,1\rangle$.<br>
<b>3.</b> $(\mathcal{P}(M),\cap)$ ist ein komm. Monoid mit Neutralelement $M$: Für $M=\{1,2,3\}$ ist $M\cap\{1,3\} = \{1,3\}$ (vgl. Serie 1, Aufgabe 6).`,
    counterexample: R`<b>1. Unbeispiel 2 (Skript):</b> $(2\mathbb{Z},\cdot)$ ist eine Halbgruppe ($4\cdot 6 = 24\in 2\mathbb{Z}$), aber <b>kein Monoid</b>: Das einzige Element mit $e\cdot 2 = 2$ in $\mathbb{Z}$ wäre $e=1$, und $1\notin 2\mathbb{Z}$.<br>
<b>2.</b> $(\mathbb{N}_{>0},+)$ ist eine komm. Halbgruppe, aber kein Monoid (kein Neutralelement, da $0\notin\mathbb{N}_{>0}$).`
  },
  // ========================================================================
  // 0b INVERSE UND ABELSCHE GRUPPEN
  // ========================================================================
  {
    id: "la0_def4_inverses",
    title: "Definition 4: Links-, Rechtsinverses und Inverses",
    category: "0b Inverse und abelsche Gruppen",
    type: "definition",
    front: R`Sei $(M,\circ)$ ein Monoid mit Neutralelement $e$. Wann ist $x'$ ein <b>Links-</b>, <b>Rechtsinverses</b> bzw. ein <b>Inverses</b> von $x$?`,
    back: R`Ist $(M,\circ)$ ein Monoid mit Neutralelement $e$, und gilt für $x,x'\in M$:
<ul><li>$x'\circ x = e$, so ist $x'$ ein <b>Linksinverses</b> von $x$,</li>
<li>$x\circ x' = e$, so ist $x'$ ein <b>Rechtsinverses</b> von $x$.</li></ul>
Ist $x'$ sowohl Links- als auch Rechtsinverses von $x$, so ist $x'$ ein <b>Inverses</b> von $x$.`,
    meta: "Skript: KW 38, Definition 4",
    explanation: R`Ein Inverses „macht $x$ rückgängig”: Verknüpft man $x$ mit $x'$, landet man beim Neutralelement $e$, also beim „Nichtstun”. Darum braucht man <b>zuerst</b> ein Neutralelement (Monoid), bevor man von Inversen sprechen kann.<br><br>
Ob man „$x'\circ x$” oder „$x\circ x'$” rechnet, spielt in kommutativen Strukturen keine Rolle; die Unterscheidung wird wichtig für Matrizen (Kapitel 7/8) oder Abbildungen. In Satz 2.0 (a) wird gezeigt: In einer Struktur, die G0, G1, G2 erfüllt, ist jedes Linksinverse automatisch auch Rechtsinverses.<br><br>
<b>Schreibweise</b> (Kapitel 2): additiv $-x$, multiplikativ $x^{-1}$.`,
    example: R`<b>1.</b> In $(\mathbb{Z},+)$ ist $-5$ das Inverse von $5$: $5+(-5) = 0 = (-5)+5$.<br>
<b>2.</b> In $(\mathbb{Q}\setminus\{0\},\cdot)$ ist $\tfrac{3}{2}$ das Inverse von $\tfrac{2}{3}$: $\tfrac23\cdot\tfrac32 = 1$.<br>
<b>3.</b> In $\mathbb{Z}_7$ ist $\bar 5$ das multiplikative Inverse von $\bar 3$, denn $3\cdot 5 = 15 = 2\cdot 7+1$, also $\bar 3\cdot_7\bar 5 = \bar 1$.`,
    counterexample: R`<b>1.</b> In $(\mathbb{Z},\cdot)$ hat $2$ kein Inverses: $2\cdot x' = 1$ hätte nur die Lösung $x'=\tfrac12\notin\mathbb{Z}$.<br>
<b>2. Nur einseitig invers:</b> Auf $M=\{p,q\}$ mit $a\ast b := a$ ist $p$ nur <i>rechts</i>neutral (also kein Monoid – das Beispiel zeigt, was ohne echtes Neutralelement schiefgeht). Rechnet man trotzdem mit $e:=p$: $p\ast q = p = e$, also wirkt $p$ wie ein Linksinverses von $q$ – aber $q\ast p = q\neq e$, also kein Rechtsinverses.<br>
<b>3.</b> In $\mathbb{Z}_6$ hat $\bar 2$ kein multiplikatives Inverses: $2\cdot k\in\{0,2,4\}\pmod 6$ für alle $k$, nie $1$.`
  },
  {
    id: "la0_def5_abelsche_gruppe",
    title: "Definition 5: Abelsche Gruppe",
    category: "0b Inverse und abelsche Gruppen",
    type: "definition",
    front: R`Wann ist $(M,\circ)$ eine <b>abelsche Gruppe</b>?`,
    back: R`Ist $(M,\circ)$ ein <b>(kommutatives) Monoid</b> und besitzt <b>jedes</b> $x\in M$ <b>genau ein</b> Inverses $x'$, so ist $(M,\circ)$ eine <b>abelsche Gruppe</b>.<br><br>
<b>Bemerkung 2:</b> Kommutative Gruppen heissen abelsche Gruppen.<br><br>
Ausgeschrieben: „$\circ$” ist eine Operation auf $M$, assoziativ, kommutativ, es gibt ein Neutralelement $e$, und zu jedem $x$ gibt es $x'$ mit $x'\circ x = e = x\circ x'$.`,
    meta: "Skript: KW 38, Definition 5, Bemerkung 2, Unbeispiel 3; Serie 0",
    explanation: R`In einer Gruppe kann man jede Gleichung $a\circ x = b$ <b>eindeutig lösen</b>: $x = a'\circ b$. Das ist die eigentliche Bedeutung von „Inverse existieren” – man kann jede Operation rückgängig machen.<br><br>
<b>Checkliste (wie in Serie 0):</b><br>
1. Operation auf $M$ (Abgeschlossenheit!),<br>
2. assoziativ, 3. kommutativ,<br>
4. Neutralelement angeben,<br>
5. zu jedem $x$ ein Inverses angeben <b>und zeigen, dass es in $M$ liegt</b>.<br><br>
Abelsche Gruppen sind die „additive Hälfte” jedes Vektorraums: Definition 1 in Kapitel 3 verlangt, dass $(V,\circ)$ eine abelsche Gruppe ist.`,
    example: R`<b>1.</b> $(\mathbb{Z},+)$: Neutralelement $0$, Inverses von $x$ ist $-x$, z.B. $8+(-8)=0$.<br>
<b>2.</b> $(\mathbb{Q}\setminus\{0\},\cdot)$ (Unbeispiel 3 / Serie 0, Aufgabe 1(b)): Inverses von $\tfrac ab$ ist $\tfrac ba$, z.B. $-\tfrac{4}{7}\cdot(-\tfrac74)=1$.<br>
<b>3.</b> Serie 0, Aufgabe 2: $\mathbb{Z}^4$ mit komponentenweiser Addition: $\begin{pmatrix}1\\-2\\0\\5\end{pmatrix}+\begin{pmatrix}-1\\2\\0\\-5\end{pmatrix}=0_V$.<br>
<b>4.</b> Die triviale Gruppe $(\{0\},\circ)$ mit $0\circ 0 := 0$ (Serie 0, Aufgabe 0).`,
    counterexample: R`<b>1. Unbeispiel 3 (Skript):</b> $(\mathbb{Z},\cdot,1)$ ist <b>keine</b> Gruppe: $3$ hat kein Inverses in $\mathbb{Z}$.<br>
<b>2.</b> $(\mathbb{Q},\cdot)$ ist keine Gruppe: $0\cdot x = 0\neq 1$ für alle $x$ – deshalb muss man für Körper $0$ herausnehmen.<br>
<b>3.</b> $(\mathbb{N},+)$ ist ein Monoid, aber keine Gruppe: $3+x=0$ hat in $\mathbb{N}$ keine Lösung.<br>
<b>4.</b> Gruppe, aber nicht abelsch: invertierbare $2\times 2$-Matrizen mit $\cdot$, siehe das Gegenbeispiel aus Kapitel 7.`
  },
  {
    id: "la0_s0_a4_symdiff",
    title: "Serie 0, Aufgabe 4: (P(M), △) ist eine abelsche Gruppe",
    category: "0b Inverse und abelsche Gruppen",
    type: "aufgabe",
    front: R`Zeige: Für eine nicht-leere Menge $M$ ist $(\mathcal{P}(M),\triangle)$ mit $x\triangle y := (x\setminus y)\cup(y\setminus x)$ eine <b>abelsche Gruppe</b>. Wie zeigt man die Assoziativität elegant?`,
    back: R`<b>Operation:</b> $x\triangle y\subseteq x\cup y\subseteq M$, also $x\triangle y\in\mathcal{P}(M)$.<br>
<b>Schlüsselbeobachtung (∗):</b> $t\in x\triangle y \iff t$ liegt in <b>genau einer</b> der Mengen $x,y$.<br>
<b>Kommutativ:</b> $(x\setminus y)\cup(y\setminus x) = (y\setminus x)\cup(x\setminus y)$.<br>
<b>Neutralelement:</b> $\emptyset$, denn $\emptyset\triangle x = x$.<br>
<b>Inverse:</b> $x\triangle x = \emptyset$ – jedes Element ist <b>zu sich selbst invers</b>.<br>
<b>Assoziativ:</b> Mit (∗) zeigt man (∗∗): $t\in(x\triangle y)\triangle z \iff t$ liegt in einer <b>ungeraden Anzahl</b> der Mengen $x,y,z$. Diese Bedingung ist symmetrisch in $x,y,z$, also $(x\triangle y)\triangle z = x\triangle(y\triangle z)$.`,
    meta: "Serie 0, Aufgabe 4 (Musterlösung)",
    explanation: R`Die symmetrische Differenz ist „<b>exklusives Oder</b>” ($\veebar$ aus Kapitel 1) auf Mengen: $t\in x\triangle y \iff (t\in x)\veebar(t\in y)$. Denkt man an jedes Element $t\in M$ als Lichtschalter, so heisst „$\triangle x$”: <i>alle Schalter in $x$ umlegen</i>. Zweimal umlegen = nichts tun ($x\triangle x=\emptyset$), und die Reihenfolge des Umlegens ist egal (kommutativ und assoziativ). Ein Schalter ist am Ende genau dann „an”, wenn er <b>ungerade oft</b> umgelegt wurde – das ist die Paritätsaussage (∗∗).<br><br>
Der Trick, Mengengleichheit <b>elementweise</b> über eine Eigenschaft zu zeigen, die nicht von der Reihenfolge abhängt, erspart eine Fallunterscheidung mit 8 Fällen.<br><br>
Diese Gruppe ist auch der Hintergrund für die Addition in $\mathbb{F}_4$ (Serie 1, Aufgabe 9) und für $c_{00}(\mathbb{F}_2)$ (Serie 6).`,
    example: R`$M=\{1,2,3,4\}$, $x=\{1,2\}$, $y=\{2,3\}$, $z=\{3,4\}$:<br>
$x\triangle y = \{1,3\}$, $(x\triangle y)\triangle z = \{1,4\}$;<br>
$y\triangle z = \{2,4\}$, $x\triangle(y\triangle z) = \{1,4\}$ ✓.<br>
Paritätscheck: $1$ liegt nur in $x$ (1-mal), $2$ in $x,y$ (2-mal), $3$ in $y,z$ (2-mal), $4$ nur in $z$ (1-mal) – genau $\{1,4\}$ ungerade oft.`,
    counterexample: R`<b>1.</b> $(\mathcal{P}(M),\cup)$ ist <b>keine</b> Gruppe: Neutralelement ist $\emptyset$, aber für $x=\{1\}$ gibt es kein $x'$ mit $\{1\}\cup x' = \emptyset$.<br>
<b>2.</b> $(\mathcal{P}(M),\setminus)$ ist nicht einmal assoziativ: $(\{1,2\}\setminus\{2\})\setminus\{1\} = \emptyset$, aber $\{1,2\}\setminus(\{2\}\setminus\{1\}) = \{1\}$.`
  },
  {
    id: "la0_s0_a3_fib",
    title: "Serie 0, Aufgabe 3: Folgenraum S und Fib – der Teilmengen-Trick",
    category: "0b Inverse und abelsche Gruppen",
    type: "aufgabe",
    front: R`$(S,+_S)$ sei die Menge aller reellen Folgen mit gliedweiser Addition, $\mathrm{Fib}\subseteq S$ die Folgen mit $f_{i+2} = f_{i+1}+f_i$. Warum genügt es für „$(\mathrm{Fib},+_S)$ ist abelsche Gruppe”, nur wenige Dinge nachzuprüfen – welche?`,
    back: R`$(S,+_S)$ ist eine abelsche Gruppe (gliedweise von $\mathbb{R}$ geerbt: Nullfolge neutral, $(-a_n)_{n\in\mathbb{N}}$ invers).<br><br>
Für die Teilmenge $\mathrm{Fib}\subseteq S$ gelten <b>Assoziativität und Kommutativität automatisch</b> (sie gelten für alle Elemente von $S$). Zu zeigen bleibt nur:<br>
<b>1. Abgeschlossenheit:</b> Mit $h_n := f_n+g_n$ ist
$$h_{i+2} = f_{i+2}+g_{i+2} = (f_{i+1}+f_i)+(g_{i+1}+g_i) = h_{i+1}+h_i.$$
<b>2. Neutralelement in Fib:</b> $0 = 0+0$, also Nullfolge $\in\mathrm{Fib}$.<br>
<b>3. Inverse in Fib:</b> $-f_{i+2} = (-f_{i+1})+(-f_i)$, also $(-f_n)\in\mathrm{Fib}$.`,
    meta: "Serie 0, Aufgabe 3 (a), (b)",
    explanation: R`Das ist das Grundmuster, das später das <b>Unterraumkriterium</b> wird (Kapitel 5, Lemma 5.0): Liegt eine Teilmenge in einer bekannten Struktur, erbt sie alle „Für-alle-Gesetze” (Assoziativität, Kommutativität, später die Vektorraumaxiome (a)–(d)). Prüfen muss man nur, was <b>Existenz in der Teilmenge</b> verlangt: Bleibt man beim Rechnen drin, und liegen Neutralelement und Inverse wieder drin?<br><br>
Warum klappt es bei Fib? Weil die Rekursion $f_{i+2}=f_{i+1}+f_i$ <b>linear</b> ist: Summen und Vielfache von Lösungen sind wieder Lösungen. Bei einer nichtlinearen Rekursion bricht das sofort zusammen (Gegenbeispiel). Fib wird in Serie 2 zum Vektorraum über $\mathbb{R}$ und in Serie 3 bekommt er die Dimension 2.`,
    example: R`$f = (1,0,1,1,2,3,5,\dots)$ und $g = (0,1,1,2,3,5,8,\dots)$ liegen in Fib. Summe: $f+g = (1,1,2,3,5,8,13,\dots)$, und tatsächlich $2 = 1+1$, $3=2+1$, $5 = 3+2$ ✓ – wieder eine Fibonacci-artige Folge.`,
    counterexample: R`<b>Nichtlineare Rekursion:</b> $Q := \{(a_n): a_{n+1} = a_n^2\}\subseteq S$ ist nicht abgeschlossen: $(1,1,1,\dots)\in Q$, aber $(1,1,1,\dots)+(1,1,1,\dots) = (2,2,2,\dots)$ und $2\neq 2^2 = 4$.<br>
<b>Inhomogene Rekursion:</b> $\{(a_n): a_{n+2}=a_{n+1}+a_n+1\}$ enthält die Nullfolge nicht ($0\neq 0+0+1$) – also keine Gruppe bzgl. $+_S$.`
  },
  // ========================================================================
  // 0c RINGE UND KÖRPER
  // ========================================================================
  {
    id: "la0_def6_ring",
    title: "Definition 6: (Kommutativer) Ring",
    category: "0c Ringe und Körper",
    type: "definition",
    front: R`Wann ist $(M,\circ,\ast)$ ein <b>(kommutativer) Ring</b>?`,
    back: R`Sei $M$ eine Menge, auf der zwei binäre Operationen „$\circ$” und „$\ast$” definiert sind. Ist
<ul><li>$(M,\circ)$ eine <b>abelsche Gruppe</b>,</li>
<li>$(M,\ast)$ ein <b>(kommutatives) Monoid</b>,</li>
<li>und gelten die <b>Distributivgesetze</b> bzgl. „$\ast$” über „$\circ$”:
$$x\ast(y\circ z) = (x\ast y)\circ(x\ast z),\qquad (x\circ y)\ast z = (x\ast z)\circ(y\ast z),$$</li></ul>
so ist $(M,\circ,\ast)$ ein <b>(kommutativer) Ring</b>.`,
    meta: "Skript: KW 38, Definition 6; Serie 1, Aufgaben 6–8",
    explanation: R`Ein Ring ist das abstrakte Modell von „$\mathbb{Z}$ mit $+$ und $\cdot$”: Man kann addieren, subtrahieren und multiplizieren – aber <b>nicht unbedingt dividieren</b>. Die Distributivgesetze sind das Bindeglied, das die beiden Operationen miteinander verträglich macht (Ausmultiplizieren!).<br><br>
Typisch: „$\circ$” spielt die Rolle von $+$ (mit Neutralelement $0$), „$\ast$” die Rolle von $\cdot$ (mit Neutralelement $1$). Aus den Distributivgesetzen allein folgen schon Regeln wie $0\cdot x = 0$ und $(-x)(-y) = xy$ (Satz 2.2) – „Minus mal Minus gibt Plus” ist also kein Axiom, sondern ein Satz!<br><br>
Im Skript ist (wie bei Definition 3) das Monoid kommutativ gemeint; nicht-kommutative Ringe (z.B. $M_{n\times n}(K)$, Serie 7) heissen dann einfach „Ring”.`,
    example: R`<b>1.</b> $(\mathbb{Z},+,\cdot)$ ist ein komm. Ring mit $0$ bzgl. $+$ und $1$ bzgl. $\cdot$; Distributivität: $3\cdot(4+5) = 27 = 3\cdot 4+3\cdot 5$.<br>
<b>2.</b> $(\mathbb{Z}_6,+_6,\cdot_6)$ (Serie 1, Aufgabe 8(b)): $\bar 2\cdot_6(\bar 4+_6\bar 5) = \bar 2\cdot_6\bar 3 = \bar 0$ und $\bar 2\cdot_6\bar 4+_6\bar 2\cdot_6\bar 5 = \bar 2+_6\bar 4 = \bar 0$ ✓.<br>
<b>3.</b> $\mathbb{Q}[X]$ mit Polynomaddition und -multiplikation (Serie 1, Aufgabe 7).<br>
<b>4.</b> $(\mathcal{P}(M),\triangle,\cap)$ mit Null $\emptyset$ und Eins $M$ (Serie 1, Aufgabe 6).`,
    counterexample: R`<b>1.</b> $(\mathbb{N},+,\cdot)$ ist <b>kein</b> Ring: $(\mathbb{N},+)$ ist keine Gruppe ($2$ hat kein additives Inverses).<br>
<b>2.</b> $(2\mathbb{Z},+,\cdot)$ ist im Sinne des Skripts kein Ring: $(2\mathbb{Z},\cdot)$ ist kein Monoid ($1\notin 2\mathbb{Z}$).<br>
<b>3.</b> $(\mathbb{Z},+,\ast)$ mit $x\ast y := x+y$ ist nicht distributiv: $1\ast(1+1) = 3$, aber $(1\ast 1)+(1\ast 1) = 4$.`
  },
  {
    id: "la0_def7_koerper",
    title: "Definition 7: Körper",
    category: "0c Ringe und Körper",
    type: "definition",
    front: R`Wann ist $(M,\circ,\ast)$ ein <b>Körper</b>?`,
    back: R`Ist $(M,\circ,\ast)$ ein <b>kommutativer Ring</b> mit Neutralelementen bzgl. „$\circ$” (genannt $e_\circ$) und bzgl. „$\ast$”, und ist
$$(M\setminus\{e_\circ\},\ast)$$
eine <b>abelsche Gruppe</b>, so ist $(M,\circ,\ast)$ ein <b>Körper</b>.<br><br>
In der üblichen Schreibweise $(K,+,\cdot,0,1)$: $(K,+)$ abelsche Gruppe mit $0$, $(K\setminus\{0\},\cdot)$ abelsche Gruppe mit $1$, Distributivgesetze.`,
    meta: "Skript: KW 38, Definition 7, Beispiel 3; Serie 1",
    explanation: R`Ein Körper ist ein Ring, in dem man durch <b>jedes Element ausser $0$ dividieren</b> kann. Das ist genau, was man für lineare Algebra braucht: Um $\lambda\cdot x = y$ nach $x$ aufzulösen (oder in Satz 4.0 durch $\lambda_1$ zu teilen), muss $\lambda^{-1}$ existieren.<br><br>
<b>Warum $M\setminus\{e_\circ\}$?</b> Die Null kann nie ein multiplikatives Inverses haben (es gilt $0\cdot x = 0\neq 1$, Satz 2.2 (a) und 2.1 (a)). Also verlangt man die Gruppenstruktur nur auf dem Rest. Weil $(K\setminus\{0\},\cdot)$ eine Gruppe ist, ist insbesondere „$\cdot$” eine <b>Operation auf $K\setminus\{0\}$</b>: Produkte von Nicht-Null-Elementen sind nie $0$ – das ist Satz 2.1 (b) (keine Nullteiler).<br><br>
Körper des Skripts: $\mathbb{Q},\mathbb{R},\mathbb{C}$, $\mathbb{F}_p$, $\mathbb{F}_4$, $\mathbb{Q}(\sqrt 2)$ (Kapitel 3).`,
    example: R`<b>1. Beispiel 3 (Skript):</b> $(\mathbb{Q},+,\cdot)$: $(\mathbb{Q},+)$ abelsche Gruppe mit $0$, $(\mathbb{Q}\setminus\{0\},\cdot)$ abelsche Gruppe, Distributivgesetze gelten. Inverses von $\tfrac{-5}{3}$ ist $\tfrac{-3}{5}$.<br>
<b>2.</b> $\mathbb{Z}_5$ ist ein Körper: Inverse $\bar 1^{-1}=\bar 1$, $\bar 2^{-1}=\bar 3$ ($2\cdot 3 = 6 = 5+1$), $\bar 4^{-1} = \bar 4$ ($16 = 3\cdot 5+1$).<br>
<b>3.</b> Der kleinste Körper: $\mathbb{F}_2=\{\bar 0,\bar 1\}$ mit $\bar 1+\bar 1=\bar 0$.`,
    counterexample: R`<b>1.</b> $(\mathbb{Z},+,\cdot)$ ist ein komm. Ring, aber <b>kein</b> Körper: $2$ hat kein Inverses.<br>
<b>2.</b> $\mathbb{Z}_6$ ist kein Körper: $\bar 2\cdot_6\bar 3 = \bar 0$, also ist „$\cdot_6$” keine Operation auf $\mathbb{Z}_6\setminus\{\bar 0\}$ (Nullteiler).<br>
<b>3.</b> Der Nullring $\{0\}$ ist kein Körper: $\{0\}\setminus\{0\} = \emptyset$ ist keine Gruppe (Satz 2.1 (a): in Körpern ist $0\neq 1$).`
  },
  {
    id: "la0_s1_a8_zm",
    title: "Serien 0/1, Aufgaben 5 & 8: Z_m ist genau dann ein Körper, wenn m prim ist",
    category: "0c Ringe und Körper",
    type: "aufgabe",
    front: R`Wie sind $+_m$ und $\cdot_m$ auf $\mathbb{Z}_m=\{\bar 0,\dots,\overline{m-1}\}$ definiert, und warum ist $(\mathbb{Z}_m,+_m,\cdot_m)$ <b>genau dann ein Körper, wenn $m$ eine Primzahl ist</b>?`,
    back: R`<b>Definition:</b> $\bar k+_m\bar l := \bar a$ bzw. $\bar k\cdot_m\bar l := \bar a$, wobei $0\le a\lt m$ und $m\cdot q + a = k+l$ bzw. $= k\cdot l$ (Rest bei Division durch $m$). $a$ ist eindeutig (Aufgaben 5(a), 8(a)).<br><br>
<b>Ring:</b> Für jedes $m\ge 1$ ist $\mathbb{Z}_m$ ein komm. Ring (Aufgabe 8(b), über $\rho(r+s) = \rho(\rho(r)+\rho(s))$, $\rho(rs) = \rho(\rho(r)\rho(s))$).<br>
<b>(c) $m$ nicht prim ⇒ kein Körper:</b> $m = k\cdot l$ mit $1\lt k,l\lt m$ liefert $\bar k\cdot_m\bar l = \bar 0$ mit $\bar k,\bar l\neq\bar 0$ – <b>Nullteiler</b>. ($m=1$: Nullring.)<br>
<b>(d) $m$ prim ⇒ Körper:</b> Für $1\le k\le m-1$ gibt es (Bézout) $u,v\in\mathbb{Z}$ mit $uk+vm = 1$; dann ist $\bar u$ (auf $[0,m)$ reduziert) das Inverse von $\bar k$. Alternativ: Schubfachprinzip (Satz in Kapitel 1).`,
    meta: "Serie 0, Aufgabe 5; Serie 1, Aufgabe 8 (a)–(d); Skript: Körper F_p (Kap. 3)",
    explanation: R`$\mathbb{Z}_m$ ist „Rechnen auf einer Uhr mit $m$ Stunden”. Ob man dort dividieren kann, hängt an einer einzigen Frage: Gibt es Nicht-Null-Elemente, deren Produkt $0$ ist?<br><br>
<b>Intuition für (d):</b> Ist $m$ prim und $\bar k\neq\bar 0$, so ist die Abbildung $\bar x\mapsto\bar x\cdot_m\bar k$ <b>injektiv</b> (aus $\bar x\bar k = \bar y\bar k$ folgt $m\mid (x-y)k$, und da $m$ prim ist und $m\nmid k$, folgt $m\mid x-y$). Eine injektive Abbildung einer endlichen Menge in sich ist surjektiv – also wird auch $\bar 1$ getroffen. Das ist die Bemerkung am Ende der Musterlösung und das Schubfachprinzip aus Kapitel 1.<br><br>
Diese Körper heissen ab Kapitel 3 $\mathbb{F}_p$. Endliche Körper gibt es genau mit $p^n$ Elementen ($\mathbb{F}_4$ ist <b>nicht</b> $\mathbb{Z}_4$!).`,
    example: R`<b>$\mathbb{Z}_7$:</b> Inverse via Bézout: $1 = 5\cdot 3-2\cdot 7$, also $\bar 3^{-1}=\bar 5$; Probe $3\cdot 5 = 15 = 2\cdot 7+1$ ✓. Vollständige Liste: $\bar 1\leftrightarrow\bar 1$, $\bar 2\leftrightarrow\bar 4$, $\bar 3\leftrightarrow\bar 5$, $\bar 6\leftrightarrow\bar 6$.<br>
<b>Rechnen:</b> $\bar 5+_7\bar 4 = \bar 2$ ($9 = 1\cdot 7+2$), $\bar 5\cdot_7\bar 4 = \bar 6$ ($20 = 2\cdot 7+6$).`,
    counterexample: R`<b>$\mathbb{Z}_6$:</b> $\bar 2\cdot_6\bar 3 = \bar 0$, $\bar 3\cdot_6\bar 4 = \bar 0$; $\bar 2$ hat kein Inverses ($2k\bmod 6\in\{0,2,4\}$).<br>
<b>$\mathbb{Z}_4$:</b> $\bar 2\cdot_4\bar 2 = \bar 0$ – deshalb muss der Körper mit 4 Elementen (Serie 1, Aufgabe 9) anders gebaut werden.`
  },
  {
    id: "la0_s1_a6_a7",
    title: "Serie 1, Aufgaben 6 & 7: Ringe, die keine Körper sind",
    category: "0c Ringe und Körper",
    type: "aufgabe",
    front: R`Warum sind $(\mathcal{P}(M),\triangle,\cap)$ (für $|M|\gt 1$) und $\mathbb{Q}[X]$ zwar <b>kommutative Ringe</b>, aber <b>keine Körper</b>?`,
    back: R`<b>$(\mathcal{P}(M),\triangle,\cap)$:</b> Null $=\emptyset$, Eins $=M$. Distributiv: $x\cap(y\triangle z) = (x\cap y)\triangle(x\cap z)$ (elementweise mit (∗) aus Aufgabe 4). <b>Kein Körper:</b> Für $x\neq\emptyset$, $x\neq M$ gilt $x\cap y\subseteq x\subsetneq M$ für alle $y$ – also nie $x\cap y = M$. Oder: $\{t_1\}\cap\{t_2\} = \emptyset$ (Nullteiler).<br><br>
<b>$\mathbb{Q}[X]$:</b> Polynome $p = \sum_{i\ge 0} a_i X^i$ (fast alle $a_i=0$), $(p\cdot q)_k = \sum_{i+j=k} a_i b_j$. <b>Kein Körper:</b> $X$ hat kein Inverses, denn der konstante Koeffizient von $X\cdot q$ ist $(X\cdot q)_0 = 0\cdot b_0 = 0\neq 1$. (Gradargument: für $q\neq 0$ ist $\deg(Xq) = 1+\deg q\ge 1\gt 0 = \deg(1)$.)`,
    meta: "Serie 1, Aufgaben 6 (a), (b) und 7 (a), (b)",
    explanation: R`Beide Beispiele zeigen: Die Ringaxiome erzwingen <b>keine Division</b>. Um zu zeigen, dass etwas kein Körper ist, reicht <b>ein</b> Element $\neq 0$ ohne Inverses – oder ein Nullteilerpaar (dann kann es keine Inversen geben, Satz 2.1 (b)).<br><br>
Bemerkenswert: Für $|M| = 1$ ist $\mathcal{P}(M) = \{\emptyset,M\}$ <b>doch</b> ein Körper – nämlich (bis auf Umbenennung) $\mathbb{F}_2$. „$\triangle$” ist „Addition mod 2”, „$\cap$” ist „Multiplikation mod 2” (Und-Verknüpfung).<br><br>
$\mathbb{Q}[X]$ kommt in Kapitel 3/4 als Vektorraum über $\mathbb{Q}$ mit Basis $\{X^i: i\in\mathbb{N}\}$ wieder – dort braucht man nur Addition und Skalarmultiplikation, die fehlende Division stört nicht.`,
    example: R`<b>Nullteiler:</b> $M=\{1,2\}$: $\{1\}\cap\{2\} = \emptyset$, obwohl beide $\neq\emptyset$.<br>
<b>Polynom-Produkt:</b> $(1+2X)(3-X+X^2) = 3+5X-X^2+2X^3$; konstanter Koeffizient $1\cdot 3 = 3$.<br>
<b>Distributiv:</b> $x=\{1,2\}$, $y=\{2,3\}$, $z=\{3\}$ in $M=\{1,2,3\}$: $x\cap(y\triangle z) = \{1,2\}\cap\{2\} = \{2\}$ und $(x\cap y)\triangle(x\cap z) = \{2\}\triangle\emptyset = \{2\}$ ✓.`,
    counterexample: R`<b>Doch ein Körper:</b> $M=\{t\}$: $\mathcal{P}(M) = \{\emptyset,\{t\}\}$, und $\{t\}\cap\{t\} = \{t\} = $ Eins – das ist $\mathbb{F}_2$ (Bemerkung der Musterlösung zu 6(b)).<br>
<b>Konstante Polynome:</b> In $\mathbb{Q}[X]$ sind die Konstanten $\neq 0$ sehr wohl invertierbar, z.B. $3\cdot\tfrac13 = 1$ – „kein Körper” heisst nur: <i>nicht alle</i> Elemente $\neq 0$ sind invertierbar.`
  },
  {
    id: "la0_s1_a9_f4",
    title: "Serie 1, Aufgabe 9: Ein Körper mit 4 Elementen",
    category: "0c Ringe und Körper",
    type: "aufgabe",
    front: R`Wie definiert man „$+$” und „$\cdot$” auf $K=\{0,1,a,b\}$, sodass ein <b>Körper</b> entsteht? Warum funktioniert $\mathbb{Z}_4$ nicht?`,
    back: R`<b>Addition:</b> $x+x = 0$ für alle $x$, $1+a = b$, $1+b = a$, $a+b = 1$ (und $0$ neutral).<br>
<b>Multiplikation:</b> $1$ neutral, $0\cdot x = 0$, $a\cdot a = b$, $a\cdot b = 1$, $b\cdot b = a$.<br><br>
<b>Warum ein Körper?</b> $(K,+)$ entspricht $(\mathcal{P}(\{1,2\}),\triangle)$ via $0\mapsto\emptyset$, $1\mapsto\{1\}$, $a\mapsto\{2\}$, $b\mapsto\{1,2\}$. $(K\setminus\{0\},\cdot)$ entspricht $(\mathbb{Z}_3,+_3)$ via $1\mapsto\bar 0$, $a\mapsto\bar 1$, $b\mapsto\bar 2$. Distributivität: Fallprüfung (6 echte Fälle).<br><br>
<b>$\mathbb{Z}_4$ geht nicht:</b> $\bar 2\cdot_4\bar 2 = \bar 0$ (Nullteiler).`,
    meta: "Serie 1, Aufgabe 9; Skript: Beispiele von Körpern (Kap. 3, Punkt 2: F_4)",
    explanation: R`Die Konstruktion ist ein Mini-Vorbild für $\mathbb{Q}(\sqrt 2)$: Man nimmt den Körper $\mathbb{F}_2 = \{0,1\}$ und fügt eine Nullstelle $a$ des Polynoms $X^2+X+1$ hinzu (das in $\mathbb{F}_2$ keine Nullstelle hat: $0^2+0+1 = 1$, $1^2+1+1 = 1$). Dann gilt $a^2 = a+1 = b$, und jedes Element ist von der Form $\lambda+\mu a$ mit $\lambda,\mu\in\mathbb{F}_2$: $0, 1, a, 1+a = b$.<br><br>
Deshalb ist $\mathbb{F}_4$ ein <b>2-dimensionaler Vektorraum über $\mathbb{F}_2$</b> mit Basis $\{1,a\}$ (Kapitel 3/4) – genau wie $\mathbb{Q}(\sqrt 2)$ über $\mathbb{Q}$ die Basis $\{1,\sqrt 2\}$ hat. Allgemein haben endliche Körper immer $p^n$ Elemente ($\mathbb{F}_{p^n}$).`,
    example: R`Prüfe $a\cdot(1+b) = a\cdot a = b$ und $a\cdot 1+a\cdot b = a+1 = b$ ✓.<br>
Inverse: $a^{-1} = b$ (da $ab=1$), $b^{-1} = a$, $1^{-1} = 1$.<br>
Potenzen von $a$: $a^1 = a$, $a^2 = b$, $a^3 = ab = 1$ – die multiplikative Gruppe ist zyklisch der Ordnung 3, wie $\mathbb{Z}_3$.`,
    counterexample: R`<b>1.</b> $\mathbb{Z}_4$: $\bar 2\cdot_4\bar 2 = \bar 0$, und $\bar 2$ hat kein Inverses ($\bar 2\cdot\bar k\in\{\bar 0,\bar 2\}$).<br>
<b>2.</b> Wählt man naiv $a\cdot a = 1$, so gälte $(a+1)^2 = a^2+2a+1 = 1+0+1 = 0$ (in Charakteristik 2), also $b\cdot b = 0$ mit $b = a+1 \neq 0$ – Nullteiler, kein Körper.`
  }
];
})();
