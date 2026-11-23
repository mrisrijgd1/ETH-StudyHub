/* ==========================================================================
   LINEARE ALGEBRA I – KAPITEL 1: Die Sprache der Mathematik
   (Logische Operatoren, Quantoren, Beweismethoden, abzählbar/überabzählbar)
   Lineare Algebra I – Prof. Dr. Lorenz Halbeisen, HS 2026
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_1 = [
  // ========================================================================
  // 1a LOGISCHE OPERATOREN
  // ========================================================================
  {
    id: "la1_def_operatoren",
    title: "Definition: Logische Operatoren und Wahrheitstafel",
    category: "1a Logische Operatoren",
    type: "definition",
    front: R`Welche <b>logischen Operatoren</b> führt das Skript ein, wie werden $\leftrightarrow$, $\veebar$ und $\neq$ abgekürzt, und wie sieht die <b>Wahrheitstafel</b> von $A\to B$ aus?`,
    back: R`Logische Operatoren sind 1- oder 2-stellige Operatoren auf Aussagen $A,B,C,\dots$:
<ul><li>$\neg A$: „NICHT $A$”, $\;A\wedge B$: „$A$ UND $B$”, $\;A\vee B$: „$A$ ODER $B$” (inkl. ODER),</li>
<li>$A\to B$: „WENN $A$ DANN $B$”, auch „$A$ IMPLIZIERT $B$”.</li></ul>
<b>Abkürzungen:</b> $A\leftrightarrow B$ für $(A\to B)\wedge(B\to A)$; $\;A\veebar B$ („entweder $A$ oder $B$”) für $(A\vee B)\wedge\neg(A\wedge B)$; $\;x\neq y$ für $\neg(x=y)$.<br><br>
<b>Wahrheitstafel</b> (0 falsch, 1 wahr):
$$\begin{array}{cc|cccc} A&B&\neg A&A\wedge B&A\vee B&A\to B\\\hline 0&0&1&0&0&1\\0&1&1&0&1&1\\1&0&0&0&1&0\\1&1&0&1&1&1\end{array}$$`,
    meta: "Skript: Kap. 1, Logische Operatoren, Wahrheitstafel",
    explanation: R`Die Wahrheitstafel ist die <b>Semantik</b> (Bedeutung) der Operatoren. Der einzige gewöhnungsbedürftige Eintrag ist $A\to B$: Eine Implikation ist <b>nur dann falsch, wenn $A$ wahr und $B$ falsch ist</b>. Ist $A$ falsch, ist $A\to B$ immer wahr („ex falso quodlibet”).<br><br>
<b>Intuition:</b> $A\to B$ ist ein <i>Versprechen</i>: „Wenn es regnet, nehme ich den Schirm.” Das Versprechen ist nur gebrochen, wenn es regnet <i>und</i> ich keinen Schirm nehme. Regnet es nicht, ist das Versprechen nicht gebrochen – egal, was ich tue.<br><br>
<b>Inklusives ODER:</b> $A\vee B$ ist auch wahr, wenn beide wahr sind. Das exklusive $\veebar$ wird „wenig gebraucht” – es taucht aber als symmetrische Differenz $\triangle$ (Serie 0) und als Addition in $\mathbb{F}_2$ wieder auf.`,
    example: R`<b>Bsp. aus dem Skript:</b> Ist $A$ die Aussage $0=1$ und $B$ die Aussage $1=1$ (interpretiert in $\mathbb{N}$), so ist $A$ falsch und <b>sowohl</b> $A\to B$ <b>wie auch</b> $A\to\neg B$ wahr: „$0=1\to 1=1$” und „$0=1\to 1\neq 1$” sind beide wahr.<br>
<b>Zahlenbeispiel:</b> „$x\gt 3\to x^2\gt 9$” ist für $x=5$ wahr ($1\to 1$), für $x=-4$ wahr ($0\to 1$) und für $x=1$ wahr ($0\to 0$).`,
    counterexample: R`<b>1.</b> „$x^2\gt 9\to x\gt 3$” ist für $x=-4$ <b>falsch</b>: $16\gt 9$ wahr, $-4\gt 3$ falsch (Zeile $1\to 0$). Die Umkehrung einer wahren Implikation muss nicht wahr sein!<br>
<b>2.</b> Inklusiv vs. exklusiv: Für $A$: „$2$ ist gerade” und $B$: „$2$ ist prim” ist $A\vee B$ wahr, aber $A\veebar B$ falsch (beide sind wahr).`
  },
  {
    id: "la1_def_aequivalenz",
    title: "Definition: Logische Äquivalenz, de Morgan",
    category: "1a Logische Operatoren",
    type: "definition",
    front: R`Wann sind zwei Aussagen <b>logisch äquivalent</b> ($A\iff B$)? Nenne die vier Grundäquivalenzen des Skripts (inkl. <b>de Morgan</b>) und warum man mit $\neg$ und $\wedge$ alles ausdrücken kann.`,
    back: R`$A$ und $B$ sind <b>logisch äquivalent</b>, in Zeichen $A\iff B$, wenn aus den log. Axiomen sowohl $A\to B$ wie auch $B\to A$ beweisbar ist. (Z.B. $A\iff A$, $A\iff A\wedge A$.)<br><br>
<b>Beispiele:</b>
$$\neg\neg A\iff A\quad\text{(Doppelnegationsregel)},\qquad A\to B\iff\neg A\vee B,$$
$$\neg(A_1\wedge\dots\wedge A_n)\iff\neg A_1\vee\dots\vee\neg A_n,\qquad \neg(A_1\vee\dots\vee A_n)\iff\neg A_1\wedge\dots\wedge\neg A_n$$
(die letzten beiden: <b>de Morgan’sche Regeln</b>).<br><br>
Damit lässt sich alles nur mit „$\neg$” und „$\wedge$” (bzw. „$\neg$” und „$\vee$”) schreiben:
$$A\vee B\iff\neg(\neg A\wedge\neg B),\qquad A\wedge B\iff\neg(\neg A\vee\neg B).$$`,
    meta: "Skript: Kap. 1, Definition (logisch äquivalent), Beispiele log. Äquivalenzen",
    explanation: R`Logisch äquivalente Aussagen sind <b>austauschbar</b>: Sie sind in jeder Interpretation gleichzeitig wahr oder falsch (gleiche Spalte in der Wahrheitstafel). Das ist das Werkzeug, um Aussagen umzuformen, bis man sie beweisen kann – z.B. eine Implikation in ihre Kontraposition (nächste Karte).<br><br>
<b>de Morgan intuitiv:</b> „Nicht (beides)” heisst „mindestens eines nicht”; „nicht (mindestens eines)” heisst „keines”. Beim Negieren werden $\wedge$ und $\vee$ vertauscht – genau wie beim Negieren von Quantoren $\forall$ und $\exists$ vertauscht werden.<br><br>
<b>$A\to B\iff\neg A\vee B$</b> erklärt die Wahrheitstafel der Implikation: $A\to B$ ist wahr, sobald $A$ falsch oder $B$ wahr ist.`,
    example: R`<b>1.</b> Negation von „$x\gt 0$ und $x\lt 5$”: „$x\le 0$ oder $x\ge 5$”. Für $x=7$: Original falsch, Negation wahr ✓.<br>
<b>2.</b> „Wenn $n$ durch $4$ teilbar ist, ist $n$ gerade” $\iff$ „$n$ ist nicht durch $4$ teilbar oder $n$ ist gerade”. Für $n=6$: $0\to 1$ bzw. $1\vee 1$, beide wahr.<br>
<b>3.</b> Wahrheitstafel-Check von $\neg(A\wedge B)\iff\neg A\vee\neg B$ für $A=1,B=0$: links $\neg 0 = 1$, rechts $0\vee 1 = 1$ ✓.`,
    counterexample: R`<b>1. Falsches de Morgan:</b> $\neg(A\wedge B)$ ist <b>nicht</b> äquivalent zu $\neg A\wedge\neg B$: Für $A$: „$6$ gerade” (wahr), $B$: „$6\gt 10$” (falsch) ist $\neg(A\wedge B)$ wahr, aber $\neg A\wedge\neg B$ falsch.<br>
<b>2.</b> $A\to B$ ist <b>nicht</b> äquivalent zu $B\to A$ (Umkehrung): „$n=4\to n$ gerade” ist wahr, „$n$ gerade $\to n=4$” ist für $n=2$ falsch.`
  },
  {
    id: "la1_kontraposition_aequivalenz",
    title: "Die Kontraposition: A → B ⟺ ¬B → ¬A",
    category: "1a Logische Operatoren",
    type: "satz",
    front: R`Leite mit den Grundäquivalenzen her, dass $A\to B\iff\neg B\to\neg A$ gilt.`,
    back: R`$$A\to B\iff\neg A\vee B\iff B\vee\neg A\iff\neg\neg B\vee\neg A\iff\neg B\to\neg A.$$
Schritte: (1) $A\to B\iff\neg A\vee B$; (2) $\vee$ ist kommutativ ($A\vee B\iff B\vee A$); (3) Doppelnegation $B\iff\neg\neg B$; (4) wieder $C\to D\iff\neg C\vee D$ mit $C=\neg B$, $D=\neg A$.<br><br>
Also: $\boxed{A\to B\iff\neg B\to\neg A}$ – „brauchen wir später” (Kontrapositionsregel, Beweis von $\sqrt 2\notin\mathbb{Q}$, Satz 2.1 (b), Satz 4.0, Lemma 5.3 (iii)).`,
    meta: "Skript: Kap. 1, Weitere Beispiele log. Äquivalenzen",
    explanation: R`Die Kontraposition ist dieselbe Aussage <b>von der anderen Seite</b> betrachtet: „Wenn es regnet, ist die Strasse nass” sagt genau dasselbe wie „Wenn die Strasse nicht nass ist, regnet es nicht.”<br><br>
<b>Warum nützlich?</b> Oft ist die Negation $\neg B$ eine <b>konkretere Voraussetzung</b> als $A$. Beispiel: „$x\cdot y = 0\to(x=0\vee y=0)$” ist schwer direkt zu zeigen; die Kontraposition „$(x\neq 0\wedge y\neq 0)\to x\cdot y\neq 0$” gibt einem die Inversen $x^{-1},y^{-1}$ in die Hand (Satz 2.1 (b)). Ebenso wird in Satz 4.0 (l.u. ⟺ nur triviale Darstellung der 0) jede Richtung per Kontraposition bewiesen.<br><br>
<b>Achtung bei der Negation:</b> $\neg(A\to B)\iff A\wedge\neg B$ (siehe Beweis von Satz 4.0).`,
    example: R`<b>1.</b> „$n^2$ gerade $\to n$ gerade” zeigt man per Kontraposition: „$n$ ungerade $\to n^2$ ungerade”: $n = 2k+1\Rightarrow n^2 = 4k^2+4k+1$ ungerade. Z.B. $n=7$: $49$ ungerade.<br>
<b>2.</b> Im Körper $\mathbb{Q}$: „$x\neq 0\wedge y\neq 0\to xy\neq 0$” ist die Kontraposition von „$xy=0\to x=0\vee y=0$”; z.B. $\tfrac23\cdot(-\tfrac{9}{4}) = -\tfrac32\neq 0$.`,
    counterexample: R`<b>Umkehrung ≠ Kontraposition:</b> „$n$ durch $6$ teilbar $\to n$ gerade” ist wahr; die <i>Umkehrung</i> „$n$ gerade $\to$ durch $6$ teilbar” ist falsch ($n=4$). Die <i>Negation beider Seiten</i> „$n$ nicht durch 6 teilbar $\to n$ ungerade” ist ebenfalls falsch ($n=4$) – nur die Kontraposition „$n$ ungerade $\to$ nicht durch 6 teilbar” ist äquivalent.`
  },
  // ========================================================================
  // 1b LOGISCHE QUANTOREN
  // ========================================================================
  {
    id: "la1_def_quantoren",
    title: "Definition: Logische Quantoren ∃ und ∀",
    category: "1b Logische Quantoren",
    type: "definition",
    front: R`Was bedeuten $\exists x\,A(x)$ und $\forall x\,A(x)$? Wie hängen die Quantoren über die Negation zusammen? Ist $\forall x\in\emptyset\,(x\neq x)$ wahr?`,
    back: R`Die log. Quantoren sind der <b>Existenzquantor</b> „$\exists$” und der <b>Allquantor</b> „$\forall$”; sie sagen etwas über die Elemente eines Bereichs (einer Menge) aus:
<ul><li>$\exists x\,A(x)$: „es existiert ein $x$, sodass die Aussage $A$ für $x$ gilt”,</li>
<li>$\forall x\,A(x)$: „für alle $x$ gilt die Aussage $A$ für $x$”.</li></ul>
Abkürzungen: $\forall x\in\mathbb{Z}\,(x+0=x)$ für $\forall x\,(x\in\mathbb{Z}\to x+0=x)$, und $\exists x\in\mathbb{Z}\,(x+x=0)$ für $\exists x\,(x\in\mathbb{Z}\wedge x+x=0)$.<br><br>
<b>Dualität:</b>
$$\forall x\,B(x)\iff\neg\exists x\,\neg B(x),\qquad\exists x\,B(x)\iff\neg\forall x\,\neg B(x).$$
<b>Bem.:</b> $\forall x\in\emptyset\,(x\neq x)\iff\neg\exists x\in\emptyset\,(x=x)$ – und das ist <b>wahr</b>, da es in $\emptyset$ kein $x$ gibt.`,
    meta: "Skript: Kap. 1, Logische Quantoren, Bem. zu ∀x∈∅",
    explanation: R`<b>Beachte die Abkürzungen:</b> Beim Allquantor wird der Bereich mit „$\to$” angehängt, beim Existenzquantor mit „$\wedge$”. Verwechselt man das, entsteht Unsinn: $\exists x\,(x\in\mathbb{Z}\to x+x=0)$ ist trivial wahr (nimm ein $x\notin\mathbb{Z}$).<br><br>
<b>Negieren:</b> „Nicht alle sind gut” = „es gibt einen, der nicht gut ist”. Beim Negieren wandert $\neg$ nach innen und kippt jeden Quantor ($\forall\leftrightarrow\exists$). So negiert man auch lange Aussagen wie die Definition der linearen Unabhängigkeit.<br><br>
<b>Leere Allaussagen sind wahr</b> („vacuous truth”): Das braucht man ständig, z.B. ist $\emptyset$ linear unabhängig (Basis des Nullraums, Kap. 4), weil die Bedingung „$\forall x\in\emptyset\dots$” leer erfüllt ist.`,
    example: R`<b>1. Skript:</b> $\neg\forall x\forall y\,(x=y\to y\neq x)\iff\exists x\exists y\,(x=y\wedge y=x)$ (mit $A\to B\iff\neg A\vee B$, de Morgan und Doppelnegation) – wahr, z.B. $x=y=3$.<br>
<b>2.</b> Negation von „$\forall n\in\mathbb{N}\,(n^2\ge n)$”: „$\exists n\in\mathbb{N}\,(n^2\lt n)$” – falsch, also ist das Original wahr ($0\ge 0$, $1\ge 1$, $4\ge 2$, …).<br>
<b>3.</b> „$\exists x\in\mathbb{Z}\,(x+x=0)$” ist wahr mit $x=0$.`,
    counterexample: R`<b>1. Reihenfolge der Quantoren:</b> $\forall x\in\mathbb{Z}\,\exists y\in\mathbb{Z}\,(x+y=0)$ ist wahr ($y=-x$), aber $\exists y\in\mathbb{Z}\,\forall x\in\mathbb{Z}\,(x+y=0)$ ist falsch: dasselbe $y$ müsste $1+y=0$ und $2+y=0$ erfüllen.<br>
<b>2. Falsche Negation:</b> Die Negation von „alle Primzahlen sind ungerade” ist <b>nicht</b> „alle Primzahlen sind gerade”, sondern „es gibt eine gerade Primzahl” (nämlich $2$).`
  },
  {
    id: "la1_gleichheit",
    title: "Eigenschaften der Gleichheitsrelation „=”",
    category: "1b Logische Quantoren",
    type: "proposition",
    front: R`Welche drei beweisbaren Eigenschaften hat die Gleichheitsrelation „$=$”, und was folgt daraus?`,
    back: R`<ul><li>$\forall x\,(x=x)$ — <b>reflexiv</b>,</li>
<li>$\forall x\forall y\,(x=y\to y=x)$ — <b>symmetrisch</b>,</li>
<li>$\forall x\forall y\forall z\,\big((x=y\wedge y=z)\to x=z\big)$ — <b>transitiv</b>.</li></ul>
Die Gleichheitsrelation „$=$” ist somit eine <b>Äquivalenzrelation</b> (siehe Analysis).`,
    meta: "Skript: Kap. 1, Beweisbare Eigenschaften der Gleichheitsrelation",
    explanation: R`Diese drei Eigenschaften sind genau das, was man braucht, um mit „$=$” ganz normal Ketten zu rechnen: $a = b = c\Rightarrow a=c$. Jede Relation mit diesen drei Eigenschaften verhält sich wie eine „Gleichheit auf einer gröberen Ebene”.<br><br>
<b>Wo kommt das wieder?</b> In Kapitel 5 ist $x\sim y:\iff x-y\in W$ eine Äquivalenzrelation (Lemma 5.4) – „gleich bis auf einen Fehler in $W$”. Ihre Äquivalenzklassen sind die affinen Räume $a+W$, und daraus entsteht der Quotientenraum $V/W$. Ebenso ist $\mathbb{Z}_m$ eine Menge von Äquivalenzklassen („gleich bis auf Vielfache von $m$”). In Serie 5 ist $x\sim y:\iff\exists\lambda\neq 0\,(\lambda x=y)$ eine Äquivalenzrelation.`,
    example: R`<b>1.</b> Kongruenz mod $5$: $x\equiv y:\iff 5\mid x-y$ ist reflexiv ($5\mid 0$), symmetrisch ($5\mid 12-2 \Rightarrow 5\mid 2-12$) und transitiv ($12\equiv 2$, $2\equiv 7\Rightarrow 12\equiv 7$).<br>
<b>2.</b> Auf $\mathbb{R}^2$: $x\sim y:\iff x-y\in\{(t,0):t\in\mathbb{R}\}$; z.B. $(3,5)\sim(-1,5)$, da $(4,0)$ in der $x$-Achse liegt.`,
    counterexample: R`<b>1.</b> „$\lt$” auf $\mathbb{N}$ ist transitiv, aber nicht reflexiv ($3\lt 3$ falsch) und nicht symmetrisch.<br>
<b>2.</b> „$\le$” ist reflexiv und transitiv, aber nicht symmetrisch: $2\le 5$, aber $5\not\le 2$.<br>
<b>3.</b> „$|x-y|\le 1$” auf $\mathbb{R}$ ist reflexiv und symmetrisch, aber nicht transitiv: $0\sim 0.8$, $0.8\sim 1.6$, aber $|0-1.6| = 1.6\gt 1$.`
  },
  // ========================================================================
  // 1c BEWEISMETHODEN
  // ========================================================================
  {
    id: "la1_schlussregeln",
    title: "Beweis und Schlussregeln: Modus Ponens, Kontraposition, Widerspruch",
    category: "1c Beweismethoden",
    type: "definition",
    front: R`Was ist ein <b>mathematischer Beweis</b>? Formuliere <b>Modus Ponens</b>, die <b>Kontrapositionsregel</b> und die <b>Widerspruchsregel</b>.`,
    back: R`Ein <b>Beweis</b> ist eine <b>endliche Folge von Aussagen</b>, sodass jede Aussage entweder ein Axiom ist oder aus vorherigen Aussagen geschlossen werden kann.<br><br>
<b>Modus Ponens:</b> $\dfrac{A,\quad A\to B}{B}$ („aus $A$ und $A\to B$ können wir $B$ schliessen”; diese Regel genügt, um alles zu beweisen).<br>
<b>Kontrapositionsregel:</b> $\dfrac{A,\quad\neg B\to\neg A}{B}$ (Modus Ponens mit $A\to B\iff\neg B\to\neg A$).<br>
<b>Widerspruchsregel:</b> $\dfrac{\neg A\to(C\wedge\neg C)}{A}$ ($C$ beliebige Aussage).<br>
<b>Weitere:</b> $\dfrac{A\to B,\;B\to C}{A\to C}$, $\;\dfrac{A\to B,\;A\to C}{A\to(B\wedge C)}$, $\;\dfrac{A\to C,\;B\to C}{(A\vee B)\to C}$.`,
    meta: "Skript: Kap. 1, Beweismethoden",
    explanation: R`Über dem Bruchstrich stehen die Voraussetzungen, darunter die Folgerung. Alle Beweistechniken des Skripts sind Anwendungen dieser Regeln:<br>
• <b>Direkter Beweis</b> = Ketten von Modus Ponens / Transitivität ($A\to B$, $B\to C$ ⇒ $A\to C$).<br>
• <b>Beweis mit Kontraposition</b> = man zeigt $\neg B\to\neg A$ statt $A\to B$.<br>
• <b>Widerspruchsbeweis</b> = man nimmt $\neg A$ an und leitet einen Widerspruch $C\wedge\neg C$ her. Da $C\wedge\neg C$ immer falsch ist, kann $\neg A\to(C\wedge\neg C)$ nur wahr sein, wenn $\neg A$ falsch, also $A$ wahr ist.<br>
• <b>Fallunterscheidung</b> = Regel $\frac{A\to C,\;B\to C}{(A\vee B)\to C}$.<br><br>
„Üblicherweise erwähnt man die Verwendung von Modus Ponens nicht und zeigt nur $A\to B$.”`,
    example: R`<b>Modus Ponens:</b> $A$: „$6$ ist durch $3$ teilbar” (wahr), $A\to B$: „durch $3$ teilbar $\to$ Quersumme durch 3 teilbar”, also $B$: Quersumme von $6$ ist durch 3 teilbar ✓.<br>
<b>Fallunterscheidung:</b> $n^2+n$ ist gerade: Fall $n$ gerade ($n=4$: $20$), Fall $n$ ungerade ($n=5$: $30$) – in beiden Fällen ist ein Faktor von $n(n+1)$ gerade.`,
    counterexample: R`<b>Falsche Schlussregel („Bejahung des Konsequens”):</b> $\dfrac{B,\;A\to B}{A}$ ist <b>ungültig</b>. Beispiel: $B$: „$4$ ist gerade” (wahr), $A\to B$: „$4$ durch 8 teilbar $\to 4$ gerade” (wahr), aber $A$: „$4$ durch 8 teilbar” ist falsch.<br>
<b>Unendliche „Beweise”</b> gibt es nicht: Ein Beweis ist per Definition eine <i>endliche</i> Folge – „man prüft alle $n=0,1,2,\dots$ nach” ist kein Beweis (dafür gibt es das Induktionsaxiom).`
  },
  {
    id: "la1_bsp_primzahlen",
    title: "Direkter Beweis: Es gibt keine grösste Primzahl",
    category: "1c Beweismethoden",
    type: "beweis",
    front: R`Beweise direkt: In $\mathbb{N}$ gibt es keine grösste Primzahl, d.h. $\neg\exists p\in\mathbb{P}\;\forall q\in\mathbb{P}\,(q\le p)$.`,
    back: R`Sei $p\in\mathbb{P}$ irgendeine Primzahl und $r := q_0\cdot q_1\cdots q_n$ das Produkt <b>aller</b> Primzahlen $q_i$ mit $q_i\le p$.<br>
Dann ist $r+1$ <b>nicht teilbar</b> durch $q_i$ für alle $0\le i\le n$ (Rest $1$).<br>
$\Rightarrow$ In der Primfaktorzerlegung von $r+1$ kommt eine Primzahl $p_0$ vor mit $p_0\gt p$.<br>
Weil $p$ beliebig war, ist gezeigt:
$$\forall p\in\mathbb{P}\;\exists p_0\in\mathbb{P}\,(p_0\gt p)\iff\neg\exists p\in\mathbb{P}\;\neg\forall p_0\in\mathbb{P}\,\neg(p_0\gt p)\iff\neg\exists p\in\mathbb{P}\;\forall q\in\mathbb{P}\,(q\le p).$$
(Im letzten Schritt wurde $p_0$ in $q$ umbenannt.)`,
    meta: "Skript: Kap. 1, Bsp. (direkter Beweis)",
    explanation: R`<b>Idee:</b> Man baut aus allen „kleinen” Primzahlen eine Zahl, die von keiner von ihnen geteilt wird. Ihre Primfaktoren müssen also „neu”, d.h. grösser als $p$ sein.<br><br>
<b>Logik dahinter:</b> Die Aussage $A$ ist eine Negation einer Existenzaussage. Der Beweis zeigt stattdessen die dazu äquivalente $\forall\exists$-Aussage („zu jeder Primzahl gibt es eine grössere”) und formt sie mit $\forall x\,B\iff\neg\exists x\,\neg B$ und $\neg(p_0\gt p)\iff p_0\le p$ um. So sieht man, wie die Quantorenregeln im echten Beweis benutzt werden.<br><br>
<b>Häufiges Missverständnis:</b> $r+1$ muss <b>nicht selbst prim</b> sein – nur seine Primfaktoren sind grösser als $p$.`,
    example: R`$p=5$: $r = 2\cdot 3\cdot 5 = 30$, $r+1 = 31$ ist prim und $31\gt 5$.<br>
$p=7$: $r = 210$, $r+1 = 211$ (prim) $\gt 7$.`,
    counterexample: R`$p=13$: $r = 2\cdot 3\cdot 5\cdot 7\cdot 11\cdot 13 = 30030$, und $r+1 = 30031 = 59\cdot 509$ ist <b>nicht prim</b>. Trotzdem: Die Primfaktoren $59$ und $509$ sind $\gt 13$ – genau das behauptet der Beweis. Wer „$r+1$ ist prim” behauptet, macht einen Fehler.`
  },
  {
    id: "la1_bsp_wurzel2",
    title: "Beweis mit Kontraposition: √2 ∉ ℚ",
    category: "1c Beweismethoden",
    type: "beweis",
    front: R`Wie beweist das Skript $\sqrt 2\notin\mathbb{Q}$ mit <b>Kontraposition</b>? Was sind $A$ und $B$?`,
    back: R`Sei $B$: „$\sqrt 2\notin\mathbb{Q}$” und $A$: „$(\sqrt 2)^2 = 2$”. Nach Definition von $\sqrt 2$ ist $A$ wahr; mit Modus Ponens genügt es, $A\to B$ zu zeigen.<br>
Anstelle von $A\to B$ zeigen wir die <b>Kontraposition</b> $\neg B\to\neg A$, also $\sqrt 2\in\mathbb{Q}\to(\sqrt 2)^2\neq 2$:
$$\sqrt 2\in\mathbb{Q}\Rightarrow\exists m\,\exists n\;\Big(\sqrt 2 = \tfrac mn\text{ mit }m,n\gt 1\text{ und }ggT(m,n)=1\Big)\Rightarrow ggT(m^2,n^2)=1\Rightarrow\tfrac{m^2}{n^2}\neq 2\Rightarrow(\sqrt 2)^2\neq 2.$$
Mit der Kontrapositionsregel folgt $B$, also $\sqrt 2\notin\mathbb{Q}$.`,
    meta: "Skript: Kap. 1, Bsp. (Beweis mit Kontraposition)",
    explanation: R`<b>Kernschritt:</b> Ein vollständig gekürzter Bruch bleibt beim Quadrieren gekürzt ($ggT(m,n)=1\Rightarrow ggT(m^2,n^2)=1$, eindeutige Primfaktorzerlegung). Ein gekürzter Bruch $\tfrac{m^2}{n^2}$ mit Nenner $n^2\gt 1$ ist aber keine ganze Zahl, also $\neq 2$. Dass man $n\gt 1$ annehmen darf, liegt daran, dass $n=1$ hiesse $\sqrt 2 = m\in\mathbb{N}$ – unmöglich wegen $1^2 = 1\lt 2\lt 4 = 2^2$ (und $m\gt 1$ folgt aus $\sqrt 2\gt 1$).<br><br>
<b>Warum Kontraposition?</b> „$\sqrt 2\in\mathbb{Q}$” liefert konkrete Objekte $m,n$, mit denen man rechnen kann. Die direkte Aussage „$\sqrt 2\notin\mathbb{Q}$” ist eine Negation – damit kann man nichts anfangen.<br><br>
Die Irrationalität von $\sqrt 2$ ist genau der Grund, warum $\mathbb{Q}(\sqrt 2) = \{a+b\sqrt 2: a,b\in\mathbb{Q}\}$ ein <b>echt grösserer</b> Körper als $\mathbb{Q}$ ist und $a^2-2b^2\neq 0$ für $(a,b)\neq(0,0)$ gilt (Kapitel 3).`,
    example: R`Versuch $\tfrac{m}{n} = \tfrac75$: $\tfrac{49}{25}$ – gekürzt, $\neq 2$. Versuch $\tfrac{17}{12}$: $\tfrac{289}{144}\approx 2.007$, gekürzt ($ggT(289,144) = 1$), $\neq 2$. Genauso $\sqrt 3\notin\mathbb{Q}$, $\sqrt 6\notin\mathbb{Q}$ (Serie 3, Aufgabe 19, Hilfssatz 1).`,
    counterexample: R`Der Beweis funktioniert <b>nicht</b> für $\sqrt 4$: Dort ist $\tfrac{m}{n} = \tfrac21$ mit Nenner $n = 1$, und $\tfrac{m^2}{n^2} = 4$ ist sehr wohl eine ganze Zahl. Das Argument „gekürzt $\Rightarrow\neq$ ganze Zahl” braucht $n\gt 1$ – bei $\sqrt 2$ ist das erfüllt (kein $m\in\mathbb{N}$ hat $m^2 = 2$), bei $\sqrt 4$ nicht.`
  },
  {
    id: "la1_bsp_induktion",
    title: "Induktionsbeweis: |P(M)| = 2ⁿ",
    category: "1c Beweismethoden",
    type: "beweis",
    front: R`Formuliere das <b>Induktionsaxiom</b> und beweise damit: Hat $M$ genau $n$ Elemente, so ist $|\mathcal{P}(M)| = 2^n$.`,
    back: R`<b>Induktionsaxiom:</b> Ist $A(n)$ eine Aussage über $n\in\mathbb{N}$ und gilt
$$\underbrace{A(0)}_{\text{Induktionsverankerung}}\wedge\underbrace{\forall n\,\big(A(n)\to A(n+1)\big)}_{\text{Induktionsschritt}},$$
so gilt $\forall n\,A(n)$.<br><br>
<b>Beweis:</b> $A(n)$: „$|M| = n\to|\mathcal{P}(M)| = 2^n$”.<br>
<b>Verankerung:</b> $|M|=0\Rightarrow M=\emptyset$, $\mathcal{P}(M)=\{\emptyset\}$, $|\mathcal{P}(M)| = 1 = 2^0$.<br>
<b>Schritt:</b> Sei $|M| = n$ und $A(n)$ wahr. Für $\tilde M := M\cup\{a\}$ mit $a\notin M$ ist $|\tilde M| = n+1$ und
$$\mathcal{P}(\tilde M) = \mathcal{P}(M)\cup\big\{x\cup\{a\}: x\in\mathcal{P}(M)\big\},$$
eine disjunkte Vereinigung zweier Mengen mit je $2^n$ Elementen. Also $|\mathcal{P}(\tilde M)| = 2\cdot 2^n = 2^{n+1}$.`,
    meta: "Skript: Kap. 1, Bsp. (Induktionsbeweis)",
    explanation: R`<b>Domino-Bild:</b> Der erste Stein fällt ($A(0)$), und jeder fallende Stein stösst den nächsten um ($A(n)\to A(n+1)$) – also fallen alle.<br><br>
<b>Idee des Schritts:</b> Jede Teilmenge von $\tilde M$ <b>enthält $a$ oder nicht</b>. Die ohne $a$ sind genau die Teilmengen von $M$; die mit $a$ entstehen aus diesen durch Hinzufügen von $a$. Ein neues Element verdoppelt also die Anzahl der Teilmengen.<br><br>
Da bei uns $0\in\mathbb{N}$, beginnt die Induktion bei $0$ – mit der leeren Menge, die genau eine Teilmenge hat ($\emptyset$ selbst).`,
    example: R`$M=\{1,2\}$: $\mathcal{P}(M) = \{\emptyset,\{1\},\{2\},\{1,2\}\}$, also $4 = 2^2$.<br>
$\tilde M = \{1,2,3\}$: die 4 alten plus $\{3\},\{1,3\},\{2,3\},\{1,2,3\}$ – zusammen $8 = 2^3$ ✓.`,
    counterexample: R`<b>Ohne Verankerung bricht alles:</b> $A(n)$: „$n = n+1$”. Der Schritt $A(n)\to A(n+1)$ ist richtig (addiere $1$), aber $A(0)$: „$0=1$” ist falsch – also folgt nichts.<br>
<b>Ohne korrekten Schritt:</b> Die Aussage „$n^2+n+41$ ist prim” stimmt für $n=0,\dots,39$, aber für $n=40$ ist $1681 = 41^2$ – viele geprüfte Fälle ersetzen keinen Induktionsschritt.`
  },
  {
    id: "la1_satz_cantor",
    title: "Widerspruchsbeweis: Satz von Cantor",
    category: "1c Beweismethoden",
    type: "satz",
    front: R`Formuliere und beweise den <b>Satz von Cantor</b>: Keine Funktion $g: M\to\mathcal{P}(M)$ ist surjektiv.`,
    back: R`<b>Satz von Cantor:</b> Ist $M$ irgendeine Menge (endlich oder unendlich) und $g: M\to\mathcal{P}(M)$ irgendeine Funktion, so ist $g$ nicht surjektiv, d.h. $\exists x\in\mathcal{P}(M)\;\forall a\in M\,(g(a)\neq x)$.<br><br>
<b>Beweis:</b> Definiere $Y := \{a\in M: a\notin g(a)\}$. Dann ist $Y\subseteq M$, also $Y\in\mathcal{P}(M)$.<br>
Sei $A$ die Aussage $\neg\exists a\in M\,(g(a)=Y)$; wir führen $\neg A$ zum Widerspruch. Sei $a_0\in M$ mit $g(a_0) = Y$. Dann gilt
$$a_0\in Y\iff a_0\notin g(a_0)\iff a_0\notin Y,$$
d.h. $\neg A\to(a_0\in Y\wedge a_0\notin Y)$. Mit der <b>Widerspruchsregel</b> folgt $A$: $g$ ist nicht surjektiv.`,
    meta: "Skript: Kap. 1, Bsp. (Widerspruchsbeweis), Satz von Cantor",
    explanation: R`<b>Diagonalidee:</b> $Y$ ist so gebaut, dass es sich von <b>jedem</b> Funktionswert $g(a)$ unterscheidet – und zwar genau am Element $a$: Liegt $a$ in $g(a)$, so ist $a$ nicht in $Y$, und umgekehrt. Damit kann $Y$ kein $g(a)$ sein.<br><br>
Man kann sich $g$ als Tabelle vorstellen (Zeile $a$, Spalte $b$, Eintrag „$b\in g(a)$?”). $Y$ entsteht durch <b>Umkippen der Diagonale</b> – es weicht von Zeile $a$ an der Stelle $(a,a)$ ab.<br><br>
<b>Konsequenz:</b> $\mathcal{P}(M)$ ist immer „echt grösser” als $M$; insbesondere ist $\mathcal{P}(\mathbb{N})$ (und damit $\mathbb{R}$) überabzählbar. In Serie 6 (Aufgabe 27) liefert das: Der Dualraum $c_{00}(\mathbb{F}_2)^*$ ist überabzählbar – grösser als $c_{00}(\mathbb{F}_2)$ selbst.`,
    example: R`$M=\{1,2,3\}$, $g(1) = \{1,2\}$, $g(2) = \{1\}$, $g(3) = \{2,3\}$.<br>
$1\in g(1)$ → $1\notin Y$; $\;2\notin g(2)$ → $2\in Y$; $\;3\in g(3)$ → $3\notin Y$. Also $Y = \{2\}$ – und tatsächlich ist $\{2\}$ kein Funktionswert. (Bei endlichem $M$ sieht man es auch durch Zählen: $3$ Werte, aber $2^3 = 8$ Teilmengen.)`,
    counterexample: R`<b>Umgekehrt geht es:</b> $M\to\mathcal{P}(M)$, $a\mapsto\{a\}$ ist <b>injektiv</b> – $\mathcal{P}(M)$ ist also mindestens so gross wie $M$, aber nie gleich gross. Z.B. $\{1,2,3\}\to\{\{1\},\{2\},\{3\}\}$ trifft nur $3$ von $8$ Teilmengen.<br>
<b>Keine Surjektion $\mathbb{N}\to\mathcal{P}(\mathbb{N})$</b>, obwohl es eine Surjektion $\mathbb{N}\to\mathbb{Z}$ gibt ($0,1,-1,2,-2,\dots$) – „unendlich” ist nicht gleich „unendlich”.`
  },
  // ========================================================================
  // 1d ABZÄHLBAR, SCHUBFACHPRINZIP
  // ========================================================================
  {
    id: "la1_def_abzaehlbar",
    title: "Definition: Abzählbar und überabzählbar",
    category: "1d Abzählbar und Schubfachprinzip",
    type: "definition",
    front: R`Wann heisst eine Menge <b>abzählbar</b> bzw. <b>überabzählbar</b>? Warum ist $\mathbb{R}$ überabzählbar?`,
    back: R`Eine Menge $M$ heisst <b>abzählbar</b>, falls sie endlich ist oder mit den natürlichen Zahlen aus $\mathbb{N}$ abgezählt werden kann, d.h. wenn es eine <b>Bijektion $f:\mathbb{N}\to M$</b> gibt; sonst heisst $M$ <b>überabzählbar</b>.<br><br>
Beispiele unendlicher abzählbarer Mengen: $\mathbb{N},\mathbb{Z},\mathbb{Q},\mathbb{P}$ (Primzahlen), $2\cdot\mathbb{Z}$.<br><br>
<b>$\mathbb{R}$ ist überabzählbar:</b> Es gibt eine Bijektion zwischen $\mathbb{R}$ und $\mathcal{P}(\mathbb{N})$. Nach dem Satz von Cantor gibt es keine Surjektion $\mathbb{N}\to\mathcal{P}(\mathbb{N})$, also ist $\mathcal{P}(\mathbb{N})$ – und damit $\mathbb{R}$ – nicht abzählbar.`,
    meta: "Skript: Kap. 1, Bemerkung zu abzählbar und überabzählbar",
    explanation: R`Abzählbar heisst: Man kann die Elemente in eine <b>(evtl. unendliche) Liste</b> $f(0),f(1),f(2),\dots$ schreiben, in der jedes Element irgendwann vorkommt.<br><br>
Überraschend: $\mathbb{Z}$ und sogar $\mathbb{Q}$ sind „nicht grösser” als $\mathbb{N}$, obwohl sie es auf den ersten Blick scheinen. $\mathbb{R}$ dagegen ist echt grösser – keine Liste erfasst alle reellen Zahlen (Diagonalargument).<br><br>
<b>Relevanz für die lineare Algebra:</b> Unendlich-dimensionale Vektorräume haben Basen verschiedener „Grösse” (Kardinalität). Satz 4.6 (alle Basen gleich gross) gilt auch dort; aber $\dim(V^*) = \dim(V)$ (Satz 6.2) gilt nur endlich-dimensional: $c_{00}(\mathbb{F}_2)$ hat eine abzählbare Basis, $c_{00}(\mathbb{F}_2)^*$ ist überabzählbar (Serie 6, Aufgabe 27).`,
    example: R`<b>$\mathbb{Z}$ abzählbar:</b> $f(0)=0$, $f(1)=1$, $f(2)=-1$, $f(3)=2$, $f(4)=-2$, …, d.h. $f(2k-1) = k$, $f(2k) = -k$.<br>
<b>Endliche Teilmengen von $\mathbb{N}$ sind abzählbar</b> (Musterlösung Serie 6): Ordne $S=\{m_1,\dots,m_n\}$ das Produkt der $m_i$-ten Primzahlen zu (Zählung $p_0 = 2$, $p_1 = 3$, $p_2 = 5$, …), z.B. $\{0,2\}\mapsto 2\cdot 5 = 10$ (injektiv dank eindeutiger Primfaktorzerlegung).`,
    counterexample: R`<b>$\mathcal{P}(\mathbb{N})$ und $\mathbb{R}$</b> sind überabzählbar. Auch die Menge <b>aller</b> 0-1-Folgen $\{0,1\}^{\mathbb{N}}$ ist überabzählbar (sie entspricht $\mathcal{P}(\mathbb{N})$: Folge = Indikator einer Teilmenge, z.B. $(1,0,1,0,\dots)\leftrightarrow\{0,2,4,\dots\}$) – im Gegensatz zu den Folgen mit nur endlich vielen Einsen ($c_{00}(\mathbb{F}_2)$), die abzählbar sind.`
  },
  {
    id: "la1_satz_schubfach",
    title: "Schubfachprinzip und der Satz über Z_p",
    category: "1d Abzählbar und Schubfachprinzip",
    type: "satz",
    front: R`Was besagt das <b>Schubfachprinzip</b>? Beweise damit: Ist $p\ge 3$ prim und $1\le a\le p-1$, so existiert $k$ mit $0\le k\le p-1$ und $\bar a\cdot\bar a^k = \bar 1$ in $\mathbb{Z}_p$.`,
    back: R`<b>Schubfachprinzip:</b> Werden $m+1$ Objekte in $m$ Schubfächer gelegt, so enthält mindestens ein Schubfach mindestens zwei Objekte.<br><br>
<b>Beweis des Satzes:</b> Betrachte die $p$ Objekte $a^0,a^1,\dots,a^{p-1}$ und lege sie via $a^n\mapsto\overline{a^n}$ in die $p-1$ Schubfächer $\bar 1,\dots,\overline{p-1}\in\mathbb{Z}_p$. Weil $p$ prim und $1\le a\le p-1$, ist $\bar a^n\neq\bar 0$.<br>
Schubfach ⇒ es gibt $0\le s\lt t\le p-1$ mit $\bar a^s = \bar a^t$. Mit $t = s+(k+1)$, $k\ge 0$:
$$\bar a^s = \bar a^s\cdot\bar a^{k+1}\;\Rightarrow\;\underbrace{\bar a^s}_{\neq\bar 0}\cdot\big(\bar a^{k+1}-\bar 1\big) = \bar 0\;\Rightarrow\;\bar a^{k+1} = \bar 1\;\Rightarrow\;\bar a\cdot\bar a^k = \bar 1,$$
wobei die vorletzte Folgerung gilt, weil $\mathbb{Z}_p$ ein Körper ist (keine Nullteiler).`,
    meta: "Skript: Kap. 1, Bsp. (Beweis mit dem Schubfachprinzip), Satz; vgl. Serie 1, Aufgabe 8(d)",
    explanation: R`Das Schubfachprinzip ist eine <b>Existenzaussage ohne Konstruktion</b>: Man weiss, dass zwei Potenzen zusammenfallen müssen, ohne zu wissen, welche. Das genügt, um das <b>multiplikative Inverse</b> $\bar a^{-1} = \bar a^k$ zu finden.<br><br>
<b>Intuition:</b> Die Folge $\bar a,\bar a^2,\bar a^3,\dots$ lebt in der endlichen Menge $\mathbb{Z}_p\setminus\{\bar 0\}$ und muss sich daher wiederholen; weil man in einem Körper kürzen kann, wiederholt sie sich schon ab $\bar a^0 = \bar 1$ – die Potenzen laufen im Kreis zurück zu $\bar 1$.<br><br>
<b>Achtung Zirkularität:</b> Der Schritt „$\bar a^s\neq\bar 0$ und Produkt $=\bar 0\Rightarrow$ zweiter Faktor $=\bar 0$” benutzt Nullteilerfreiheit (gilt in $\mathbb{Z}_p$, weil $p$ prim: $p\mid xy\Rightarrow p\mid x\vee p\mid y$).`,
    example: R`$p=7$, $a=3$: Potenzen $\bar 3^0,\dots,\bar 3^6 = \bar 1,\bar 3,\bar 2,\bar 6,\bar 4,\bar 5,\bar 1$. Wiederholung $\bar 3^0 = \bar 3^6$, also $k+1 = 6$, $k=5$: $\bar 3\cdot\bar 3^5 = \bar 3\cdot\bar 5 = \overline{15} = \bar 1$ ✓.<br>
<b>Schubfach direkt:</b> Unter 13 Personen haben zwei im selben Monat Geburtstag.`,
    counterexample: R`<b>$p$ nicht prim:</b> In $\mathbb{Z}_6$ mit $a=2$: $\bar 2^0,\bar 2^1,\bar 2^2,\bar 2^3,\dots = \bar 1,\bar 2,\bar 4,\bar 2,\bar 4,\dots$ – die Potenzen wiederholen sich ($\bar 2^1 = \bar 2^3$), kommen aber <b>nie zu $\bar 1$ zurück</b>. Der Kürzungsschritt $\bar 2\cdot(\bar 2^2-\bar 1) = \bar 2\cdot\bar 3 = \bar 0$ liefert <i>nicht</i> $\bar 2^2 = \bar 1$ (Nullteiler!).`
  }
];
})();
