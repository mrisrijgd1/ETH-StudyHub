/* ==========================================================================
   FLASHCARDS KAPITEL 6: Grenzwerte reeller Folgen und Funktionen
   Analysis I - Prof. Dr. Manfred Einsiedler
   ========================================================================== */

window.FLASHCARDS_KAPITEL_6 = [
  // ========================================================================
  // 6.1 REELLE FOLGEN
  // ========================================================================
  {
    id: "k6_prop_6_1",
    title: "Proposition 6.1: Grenzwerte und Ungleichungen",
    category: "6.1 Reelle Folgen",
    type: "proposition",
    front: "Wie verhalten sich <b>Grenzwerte</b> reeller Folgen zu <b>Ungleichungen</b> (Proposition 6.1)?",
    back: "Seien $(a_n)_n, (b_n)_n$ reelle Folgen mit Grenzwerten $a = \\lim_{n\\to\\infty} a_n$, $b = \\lim_{n\\to\\infty} b_n$.<br><br>(i) Falls $a_n \\le b_n$ für alle $n \\in \\mathbb{N}$, dann gilt auch $a \\le b$.<br>(ii) Falls $a < b$, dann existiert ein $N \\in \\mathbb{N}$, so dass $a_n < b_n$ für alle $n \\ge N$.",
    meta: "Skript: Proposition 6.1, Abschnitt 6.1",
    explanation: "<b>Beweisidee für (ii):</b> Mit $\\varepsilon = \\frac{b-a}{2}$ liegen späte Folgenglieder in den disjunkten Bällen $(a - \\varepsilon, a + \\varepsilon)$ und $(b - \\varepsilon, b + \\varepsilon)$ mit $a + \\varepsilon = b - \\varepsilon$. (i) folgt daraus per Kontraposition. Grenzwerte 'erhalten' also nicht-strikte Ungleichungen.",
    example: "$a_n = -\\tfrac1n \\le b_n = \\tfrac1n$ liefert im Limes $0 \\le 0$ - korrekt.",
    counterexample: "<b>1.</b> Strikte Ungleichungen gehen im Limes verloren: $a_n = 0 < b_n = \\tfrac1n$ für alle $n$, aber $\\lim a_n = \\lim b_n = 0$ - aus $a_n < b_n$ folgt NUR $a \\le b$.<br><b>2.</b> (ii) gilt nur ab einem $N$, nicht für alle $n$: $a_n = \\tfrac{(-1)^n}{n} \\to 0 < 1 = \\lim b_n$ mit $b_n = 1$, aber $a_1 < b_1$ kann trotzdem erst spät 'stabil' werden - frühe Glieder sind beliebig."
  },
  {
    id: "k6_lemma_6_2",
    title: "Lemma 6.2: Das Sandwich-Lemma",
    category: "6.1 Reelle Folgen",
    type: "lemma",
    front: "Was besagt das <b>Sandwich-Lemma</b> (Lemma 6.2), und wofür ist es nützlich (Beispiel 6.4)?",
    back: "Seien $(a_n)_n, (b_n)_n, (c_n)_n$ reelle Folgen mit $a_n \\le b_n \\le c_n$ für alle $n \\in \\mathbb{N}$. Sind $(a_n)_n$ und $(c_n)_n$ konvergent mit <b>demselben</b> Grenzwert $A = \\lim a_n = \\lim c_n$, dann ist auch $(b_n)_n$ konvergent mit<br>$$\\lim_{n\\to\\infty} b_n = A.$$",
    meta: "Skript: Lemma 6.2 & Beispiel 6.4, Wichtige Übung 6.3",
    explanation: "Die eingeklemmte Folge hat 'keine andere Wahl': Ab dem grösseren der beiden Indizes liegen $a_n$ und $c_n$ in $(A - \\varepsilon, A + \\varepsilon)$, also auch $b_n$ dazwischen. Das Lemma verwandelt Konvergenzbeweise in Abschätzungsaufgaben - man muss den Grenzwert der mittleren Folge nie direkt angreifen. Es gibt auch uneigentliche Versionen (Übung 6.21): $a_n \\le b_n$ und $a_n \\to \\infty$ erzwingt $b_n \\to \\infty$.",
    example: "Beispiel 6.4: $-\\tfrac1n \\le \\tfrac{(-1)^n}{n} \\le \\tfrac1n$ zeigt $\\lim \\tfrac{(-1)^n}{n} = 0$. Ebenso beweist man $\\lim_{n\\to\\infty} \\sqrt[n]{n} = 1$ mit geschickten Schranken.",
    counterexample: "<b>1.</b> Verschiedene Grenzwerte der äusseren Folgen genügen nicht: $-1 \\le (-1)^n \\le 1$ klemmt $(-1)^n$ zwischen konvergente Folgen - trotzdem divergiert die Mitte, denn $\\lim(-1) = -1 \\neq 1$.<br><b>2.</b> Die Ungleichung muss (schliesslich) wirklich gelten: Aus $b_n \\le a_n + c_n$ mit $a_n, c_n \\to 0$ folgt nichts über $(b_n)_n$ - das Sandwich braucht Schranken von beiden Seiten."
  },
  {
    id: "k6_satz_6_5",
    title: "Satz 6.5: Konvergenz monotoner Folgen",
    category: "6.1 Reelle Folgen",
    type: "satz",
    front: "Wann konvergiert eine <b>monotone</b> reelle Folge, und was ist dann ihr Grenzwert (Satz 6.5)?",
    back: "Eine monotone reelle Folge $(a_n)_n$ konvergiert <b>genau dann, wenn sie beschränkt ist</b>. In diesem Fall gilt:<br><br>&bull; $(a_n)_n$ monoton wachsend: $\\displaystyle\\lim_{n\\to\\infty} a_n = \\sup\\{a_n \\mid n \\in \\mathbb{N}\\}$<br>&bull; $(a_n)_n$ monoton fallend: $\\displaystyle\\lim_{n\\to\\infty} a_n = \\inf\\{a_n \\mid n \\in \\mathbb{N}\\}$",
    meta: "Skript: Satz 6.5, Abschnitt 6.1.1",
    explanation: "<b>Beweis:</b> Zum Supremum $a$ gibt es nach Satz 2.59 zu jedem $\\varepsilon > 0$ ein $a_N > a - \\varepsilon$; Monotonie gibt $a - \\varepsilon < a_N \\le a_n \\le a$ für $n \\ge N$. Hier verbindet sich das Vollständigkeitsaxiom zum ersten Mal mit Konvergenz: Die Folge 'muss' gegen das Supremum kriechen. Grosser praktischer Vorteil: Man zeigt Konvergenz, <i>ohne den Grenzwert zu kennen</i>.",
    example: "Übung 6.6: Die rekursive Folge $a_1 = 1$, $a_{n+1} = \\tfrac23\\left(a_n + \\tfrac{1}{a_n}\\right)$ konvergiert (monoton & beschränkt); der Grenzwert $a$ erfüllt $a = \\tfrac23(a + \\tfrac1a)$, also $a = \\sqrt{2}$. Auch die exp-Folge $(1 + \\tfrac{x}{n})^n$ wird so behandelt (Abschnitt 6.3).",
    counterexample: "<b>1.</b> Ohne Monotonie ist Beschränktheit nicht hinreichend: $(-1)^n$ ist beschränkt und divergent.<br><b>2.</b> Ohne Beschränktheit divergiert eine monotone Folge (uneigentlich): $a_n = n$ wächst monoton gegen $\\infty$ - 'monoton' allein genügt nicht."
  },
  {
    id: "k6_def_6_8_6_9",
    title: "Definitionen 6.8 & 6.9: Limes superior und Limes inferior",
    category: "6.1 Reelle Folgen",
    type: "definition",
    front: "Wie sind <b>Limes superior</b> und <b>Limes inferior</b> einer beschränkten reellen Folge definiert?",
    back: "Für eine beschränkte reelle Folge $(a_n)_n$:<br>$$\\limsup_{n\\to\\infty} a_n = \\lim_{n\\to\\infty}\\Big(\\sup_{k \\ge n} a_k\\Big) = \\inf_{n \\in \\mathbb{N}}\\Big(\\sup_{k\\ge n} a_k\\Big)$$<br>$$\\liminf_{n\\to\\infty} a_n = \\lim_{n\\to\\infty}\\Big(\\inf_{k \\ge n} a_k\\Big) = \\sup_{n \\in \\mathbb{N}}\\Big(\\inf_{k\\ge n} a_k\\Big)$$<br>Die Folgen $S_n = \\sup_{k\\ge n} a_k$ (monoton fallend) und $I_n = \\inf_{k \\ge n} a_k$ (monoton wachsend) konvergieren nach Satz 6.5 - limsup und liminf <b>existieren für jede beschränkte Folge</b>.",
    meta: "Skript: Definitionen 6.8 & 6.9, Beispiel 6.10",
    explanation: "Intuition: $\\limsup$ = 'grösster Wert, den die Folge immer wieder erreicht' (Grenzwert der laufenden Suprema), $\\liminf$ analog von unten. Für unbeschränkte Folgen erweitert man mit $\\pm\\infty$ (Abschnitt 6.1.4). Stets gilt $\\liminf a_n \\le \\limsup a_n$.",
    example: "Beispiel 6.10: $a_n = (-1)^n + \\tfrac1n$ hat $S_n = 1 + \\tfrac1n$ bzw. $1 + \\tfrac{1}{n+1}$ und $I_n = -1$, also $\\limsup a_n = 1$ und $\\liminf a_n = -1$. Für $a_n = (-1)^n$: $\\limsup = 1$, $\\liminf = -1$.",
    counterexample: "<b>1.</b> $\\limsup a_n$ ist NICHT $\\sup_n a_n$: Für $a_n = (-1)^n + \\tfrac1n$ ist $\\sup_n a_n = \\tfrac32$ (bei $n=2$), aber $\\limsup = 1$ - frühe Ausreisser zählen nicht.<br><b>2.</b> $\\limsup(a_n + b_n) \\neq \\limsup a_n + \\limsup b_n$ im Allgemeinen: $a_n = (-1)^n$, $b_n = (-1)^{n+1}$ geben links $\\limsup 0 = 0$, rechts $1 + 1 = 2$ - es gilt nur '$\\le$'."
  },
  {
    id: "k6_satz_6_11",
    title: "Satz 6.11 & Korollar 6.14: Eigenschaften des Limes superior",
    category: "6.1 Reelle Folgen",
    type: "satz",
    front: "Welche zwei Eigenschaften <b>charakterisieren</b> den Limes superior (Satz 6.11), und wie charakterisiert man damit Konvergenz (Korollar 6.14)?",
    back: "<b>Satz 6.11:</b> Für eine beschränkte reelle Folge $(a_n)_n$ und $S = \\limsup_{n\\to\\infty} a_n$ gilt:<br>&bull; Für alle $\\varepsilon > 0$ gibt es nur <b>endlich viele</b> $n$ mit $a_n > S + \\varepsilon$.<br>&bull; Für alle $\\varepsilon > 0$ gibt es <b>unendlich viele</b> $n$ mit $a_n > S - \\varepsilon$.<br>(Diese beiden Eigenschaften bestimmen $S$ eindeutig; analog für den Limes inferior.)<br><br><b>Korollar 6.14:</b> $(a_n)_n$ ist genau dann konvergent, wenn<br>$$\\liminf_{n\\to\\infty} a_n = \\limsup_{n\\to\\infty} a_n$$<br>(und dann ist dies der Grenzwert).",
    meta: "Skript: Satz 6.11 & Korollar 6.14",
    explanation: "Die Folge bleibt also nie lange weit <i>über</i> dem limsup, kehrt aber immer wieder in seine Nähe zurück - er ist der grösste Häufungspunkt. Das Korollar ist das zentrale Werkzeug im Beweis des Cauchy-Kriteriums (Satz 6.26): Konvergenz = 'die Schere zwischen liminf und limsup schliesst sich'.",
    example: "$a_n = \\tfrac1n$: $\\liminf = \\limsup = 0$ $\\Rightarrow$ konvergent gegen $0$. Bei $a_n = (-1)^n$: $-1 \\neq 1$ $\\Rightarrow$ divergent - ganz ohne $\\varepsilon$-Argument.",
    counterexample: "<b>1.</b> 'Unendlich viele $a_n > S - \\varepsilon$' heisst nicht 'fast alle': Bei $(-1)^n$ liegen unendlich viele Glieder nahe $1 = \\limsup$, aber eben auch unendlich viele bei $-1$.<br><b>2.</b> Nur eine der beiden Eigenschaften genügt nicht zur Charakterisierung: $S' = \\sup_n a_n$ erfüllt ebenfalls die erste Eigenschaft (endlich viele - nämlich keine - Glieder über $S' + \\varepsilon$), ist aber i.A. zu gross."
  },
  {
    id: "k6_satz_6_15",
    title: "Satz 6.15: Konvergente Teilfolgen (Bolzano-Weierstrass)",
    category: "6.1 Reelle Folgen",
    type: "satz",
    front: "Was besagt <b>Satz 6.15</b> über die Grenzwerte konvergenter Teilfolgen einer beschränkten Folge?",
    back: "Für jede konvergente Teilfolge $(a_{n_k})_k$ einer <b>beschränkten</b> reellen Folge $(a_n)_n$ gilt<br>$$\\lim_{k\\to\\infty} a_{n_k} \\in \\Big[\\liminf_{n\\to\\infty} a_n,\\ \\limsup_{n\\to\\infty} a_n\\Big].$$<br>Zudem <b>existieren</b> konvergente Teilfolgen mit Grenzwert $\\limsup_{n\\to\\infty} a_n$ bzw. $\\liminf_{n\\to\\infty} a_n$.<br><br><b>Insbesondere (Bolzano-Weierstrass):</b> Jede beschränkte reelle Folge besitzt eine konvergente Teilfolge. Die Häufungspunkte der Folge liegen genau zwischen liminf und limsup, und beide sind selbst Häufungspunkte.",
    meta: "Skript: Satz 6.15, Abschnitt 6.1.3",
    explanation: "limsup/liminf sind also der grösste bzw. kleinste Häufungspunkt. <b>Folgenkompaktheit:</b> Daraus folgt, dass $[a,b]$ <i>folgenkompakt</i> ist - jede Folge in $[a,b]$ hat eine konvergente Teilfolge mit Grenzwert in $[a,b]$ (Prop. 6.1 hält den Limes im Intervall). Dieser Begriff wird im 2. Semester zentral.",
    example: "$a_n = (-1)^n$: Die Teilfolge $(a_{2k})_k$ konvergiert gegen $\\limsup = 1$, $(a_{2k+1})_k$ gegen $\\liminf = -1$.",
    counterexample: "<b>1.</b> Ohne Beschränktheit kann es gar keine Häufungspunkte geben: $(n)_n$ hat keine konvergente Teilfolge.<br><b>2.</b> Häufungspunkte der <i>Folge</i> $\\neq$ Häufungspunkte der <i>Wertemenge</i> (Def. 2.73): $(-1)^n$ hat die Folgen-Häufungspunkte $\\pm 1$, aber die Menge $\\{-1, 1\\}$ hat keine Mengen-Häufungspunkte."
  },
  {
    id: "k6_def_6_19",
    title: "Definition 6.19: Uneigentliche Grenzwerte",
    category: "6.1 Reelle Folgen",
    type: "definition",
    front: "Wann <b>divergiert</b> eine reelle Folge <b>gegen $\\infty$</b> bzw. $-\\infty$ (Definition 6.19)?",
    back: "$(a_n)_n$ <b>divergiert gegen $\\infty$</b> ($\\lim_{n\\to\\infty} a_n = \\infty$), falls für jedes $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ existiert mit<br>$$a_n \\ge \\varepsilon^{-1} \\quad \\text{für alle } n \\ge N.$$<br>Analog: $\\lim_{n\\to\\infty} a_n = -\\infty$, falls $a_n \\le -\\varepsilon^{-1}$ für alle $n \\ge N$. Man spricht von <b>uneigentlicher Konvergenz</b>.<br><br>Damit erweitert man auch limsup/liminf auf unbeschränkte Folgen: z.B. $\\limsup a_n = \\infty$, falls $(a_n)_n$ nicht von oben beschränkt ist.",
    meta: "Skript: Definition 6.19 & Übungen 6.20/6.21, Abschnitt 6.1.4",
    explanation: "'$\\ge \\varepsilon^{-1}$' statt '$\\ge M$' ist nur Geschmack: $\\varepsilon$ klein bedeutet $\\varepsilon^{-1}$ gross. Divergenz gegen $\\infty$ ist eine <i>geordnete</i> Form der Divergenz - die Folge entkommt jeder Schranke nach oben und bleibt dort. Übung 6.20: Jede unbeschränkte Folge hat zumindest eine Teilfolge, die gegen $\\infty$ oder $-\\infty$ divergiert.",
    example: "$a_n = n^2 \\to \\infty$; $a_n = \\log\\tfrac1n \\to -\\infty$. Sandwich-Variante (Übung 6.21): $a_n \\le b_n$ und $a_n \\to \\infty$ $\\Rightarrow$ $b_n \\to \\infty$.",
    counterexample: "<b>1.</b> Unbeschränkt $\\neq$ divergent gegen $\\infty$: Die Folge $1, 2, 1, 4, 1, 6, \\dots$ ($a_n = 1$ für ungerade, $a_n = n$ für gerade $n$) ist unbeschränkt und divergent, divergiert aber NICHT gegen $\\infty$ (sie kehrt immer wieder zu $1$ zurück).<br><b>2.</b> Die Rechenregeln übertragen sich nur teilweise: $\\lim a_n = \\infty$ und $\\lim b_n = -\\infty$ lassen $\\lim (a_n + b_n)$ völlig offen ($n + (-n) = 0$, $2n + (-n) = n \\to \\infty$) - '$\\infty - \\infty$' ist undefiniert."
  },

  // ========================================================================
  // 6.2 CAUCHY-FOLGEN
  // ========================================================================
  {
    id: "k6_def_6_22",
    title: "Definition 6.22: Cauchy-Folgen",
    category: "6.2 Cauchy-Folgen",
    type: "definition",
    front: "Wann heisst eine Folge in einem metrischen Raum $(X, \\mathrm{d})$ eine <b>Cauchy-Folge</b>, und wie hängt der Begriff mit Konvergenz zusammen?",
    back: "$(a_n)_n$ ist eine <b>Cauchy-Folge</b>, falls es für jedes $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ gibt, so dass<br>$$\\mathrm{d}(a_m, a_n) < \\varepsilon \\quad \\text{für alle } m, n \\ge N.$$<br><b>Wichtige Übung 6.23:</b> Jede konvergente Folge ist eine Cauchy-Folge.<br><b>Wichtige Übung 6.24:</b> Besitzt eine Cauchy-Folge eine konvergente Teilfolge, so konvergiert sie selbst (gegen denselben Grenzwert).<br><b>Übung 6.25:</b> In $\\mathbb{C}$: Cauchy $\\iff$ Real- und Imaginärteil sind Cauchy.",
    meta: "Skript: Definition 6.22 & Übungen 6.23-6.25",
    explanation: "Entscheidend: Die Bedingung spricht nur über die Folgenglieder <i>untereinander</i> - der Grenzwert kommt nicht vor! Man kann also 'Konvergenzverdacht' prüfen, ohne einen Kandidaten zu kennen. Beachte: $m, n$ laufen <i>unabhängig</i> - es genügt nicht, nur Nachbarn zu vergleichen.",
    example: "$a_n = \\tfrac1n$: Für $m, n \\ge N$ ist $|a_m - a_n| \\le \\tfrac1N < \\varepsilon$ für $N > \\tfrac1\\varepsilon$ - Cauchy, wie es sich für eine konvergente Folge gehört.",
    counterexample: "<b>1.</b> In unvollständigen Räumen konvergieren Cauchy-Folgen nicht immer: Die Dezimalnäherungen $1; 1{,}4; 1{,}41; \\dots$ von $\\sqrt{2}$ bilden eine Cauchy-Folge in $\\mathbb{Q}$ ohne Grenzwert in $\\mathbb{Q}$.<br><b>2.</b> $(a_n)_n$ beschränkt $\\not\\Rightarrow$ Cauchy: $(-1)^n$ ist beschränkt, aber $|a_n - a_{n+1}| = 2$ für alle $n$."
  },
  {
    id: "k6_satz_6_26",
    title: "Satz 6.26: Das Cauchy-Kriterium",
    category: "6.2 Cauchy-Folgen",
    type: "satz",
    front: "Was besagt das <b>Cauchy-Kriterium für reelle Folgen</b> (Satz 6.26), und warum genügt die Bedingung $|a_{n+1} - a_n| \\to 0$ NICHT (Beispiel 6.27)?",
    back: "<b>Satz 6.26:</b> Eine reelle Folge ist <b>genau dann konvergent, wenn sie eine Cauchy-Folge ist</b>.<br><br><b>Beweisidee ($\\Leftarrow$):</b> Eine Cauchy-Folge ist beschränkt; für $m = N$ gilt $a_m - \\varepsilon < a_n < a_m + \\varepsilon$ ab $N$, also $\\limsup - \\liminf \\le 2\\varepsilon$ für jedes $\\varepsilon$; mit Korollar 6.14 folgt Konvergenz.<br><br><b>Beispiel 6.27 (falsches Kriterium):</b> Die Bedingung $\\forall \\varepsilon > 0\\,\\exists N\\,\\forall n \\ge N: |a_n - a_{n+1}| < \\varepsilon$ ist <i>nicht</i> äquivalent zur Konvergenz!",
    meta: "Skript: Satz 6.26, Beispiel 6.27, Übung 6.28",
    explanation: "Das Cauchy-Kriterium ist 'die' Vollständigkeit: Übung 6.28 zeigt, dass es (zusammen mit dem Archimedischen Prinzip) zum Vollständigkeitsaxiom äquivalent ist - man sagt, $\\mathbb{R}$ ist ein <i>vollständiger</i> metrischer Raum. Vorteile: anders als Satz 6.5 für beliebige (nicht nur monotone) Folgen anwendbar, und ohne Kenntnis des Grenzwerts.",
    example: "Reihen-Anwendungen folgen in Kapitel 7 (Cauchy-Kriterium für Reihen, Satz 7.26): Konvergenz von $\\sum \\tfrac{1}{k^2}$ lässt sich über Partialsummen-Abstände prüfen.",
    counterexample: "<b>1.</b> Beispiel 6.27: Listet man für jedes $\\ell$ die Brüche zwischen $\\ell$ und $\\ell+1$ mit Nenner $\\ell$ auf ($1; 2; 2; 2\\tfrac12; 3; 3\\tfrac13; 3\\tfrac23; 4; \\dots$), so gilt $|a_{n+1} - a_n| \\to 0$, aber die Folge ist unbeschränkt und divergiert - Nachbarabstände klein zu halten genügt nicht, $m$ und $n$ müssen unabhängig laufen!<br><b>2.</b> In $\\mathbb{Q}$ ist das Kriterium falsch (Cauchy-Folgen gegen $\\sqrt2$) - es ist eine Eigenschaft von $\\mathbb{R}$, kein Logiktrick."
  },

  // ========================================================================
  // 6.3 DIE EXPONENTIALFUNKTION
  // ========================================================================
  {
    id: "k6_prop_6_29",
    title: "Proposition 6.29: Die reelle Exponentialfunktion",
    category: "6.3 Die Exponentialfunktion",
    type: "proposition",
    front: "Wie wird die <b>Exponentialfunktion</b> in Kapitel 6 definiert, und welche Eigenschaften fasst Proposition 6.29 zusammen?",
    back: "Für alle $x \\in \\mathbb{R}$ existiert der Grenzwert<br>$$\\exp(x) = \\lim_{n\\to\\infty}\\left(1 + \\frac{x}{n}\\right)^n > 0,$$<br>und dies definiert die <b>streng monoton wachsende, bijektive, stetige</b> Abbildung $\\exp: \\mathbb{R} \\to \\mathbb{R}_{>0}$ mit der <b>Additionsformel</b><br>$$\\exp(x + y) = \\exp(x)\\exp(y) \\qquad \\forall x, y \\in \\mathbb{R}.$$<br>Die <b>Eulersche Zahl</b> ist $e = \\exp(1) = \\lim_{n\\to\\infty}\\left(1 + \\tfrac1n\\right)^n \\in [2, 3]$.",
    meta: "Skript: Proposition 6.29, Abschnitte 6.3.1-6.3.7",
    explanation: "<b>Zins-Interpretation (6.3.1):</b> $(1 + \\tfrac{x}{n})^n$ ist das Kapital nach einem Jahr bei Zinssatz $x$ und $n$-facher unterjähriger Verzinsung - mehr Zinstermine bringen mehr (Monotonie in $n$), aber nicht grenzenlos (Beschränktheit): Satz 6.5 liefert die Existenz des Grenzwerts. Es gilt die wichtige Schranke $1 + x \\le \\exp(x)$ für alle $x$.",
    example: "$\\exp(0) = 1$; Übung 6.32: $1 + x + \\tfrac{x^2}{2} \\le \\exp(x)$ für $x \\ge 0$ - exp wächst schneller als jedes Polynom (vgl. Übung 6.45: $\\lim_{x\\to\\infty} \\tfrac{e^x}{x^a} = \\infty$).",
    counterexample: "<b>1.</b> $\\exp(x+y) = \\exp(x)\\exp(y)$, NICHT $\\exp(x)+\\exp(y)$: $\\exp$ verwandelt Addition in Multiplikation - genau das macht sie zur Exponentialfunktion.<br><b>2.</b> $\\left(1 + \\tfrac{x}{n}\\right)^n$ ist für festes $n$ ein Polynom in $x$ - erst der Grenzwert liefert die exp; etwa ist $(1 + \\tfrac{x}{n})^n$ für $x < -n$ negativ oder nicht monoton, der Limes aber stets positiv."
  },
  {
    id: "k6_exp_beweis",
    title: "6.3.3-6.3.7: Die Beweisschritte zu Proposition 6.29",
    category: "6.3 Die Exponentialfunktion",
    type: "beweis",
    front: "Skizziere die <b>fünf Beweisschritte</b>, mit denen das Skript die Eigenschaften von $\\exp$ zeigt (Inversionsformel, Additionsformel, Stetigkeit, Monotonie, Surjektivität).",
    back: "1. <b>Inversionsformel (6.3.3):</b> $\\exp(-x) = \\exp(x)^{-1}$, denn $\\big(1 - \\tfrac{x^2}{n^2}\\big)^n \\to 1$ via Bernoulli + Sandwich.<br>2. <b>Additionsformel (6.3.4):</b> analoger Produkt-Trick für $\\big(1 + \\tfrac{x}{n}\\big)\\big(1 + \\tfrac{y}{n}\\big)$.<br>3. <b>Stetigkeit (6.3.5):</b> zuerst bei $0$ über $1 + x \\le \\exp(x) \\le \\tfrac{1}{1-x}$; dann überall via $\\exp(x) = \\exp(x - x_0)\\exp(x_0)$ als Verknüpfung stetiger Abbildungen (Prop. 3.52).<br>4. <b>Strenge Monotonie (6.3.6):</b> $x < y \\Rightarrow \\exp(y) = \\exp(x)\\exp(y-x) > \\exp(x)$, da $\\exp(y-x) > 1$.<br>5. <b>Surjektivität (6.3.7):</b> Zu $y > 0$ gilt $\\exp(-\\tfrac1y) < y < \\exp(y)$; der <b>Zwischenwertsatz</b> (Satz 3.58) liefert ein $x$ mit $\\exp(x) = y$.",
    meta: "Skript: Abschnitte 6.3.3-6.3.7",
    explanation: "Ein Paradebeispiel dafür, wie die Theorie zusammenspielt: Satz 6.5 (Existenz), Bernoulli-Ungleichung und Sandwich (Formeln), Verknüpfungssätze (Stetigkeit), ZWS (Surjektivität). Die Additionsformel ist dabei der 'Generalschlüssel' - aus der Stetigkeit bei $0$ folgt sie überall, aus $\\exp > 0$ bei einem Punkt überall.",
    example: "Die Schranke $1 + x \\le \\exp(x)$ (für alle $x \\in \\mathbb{R}$) trägt gleich drei Schritte: Stetigkeit bei 0, Monotonie und Surjektivität.",
    counterexample: "<b>1.</b> Die Stetigkeit 'nur bei 0' wäre für allgemeine Funktionen wertlos - erst die Additionsformel transportiert sie zu jedem $x_0$; ohne Funktionalgleichung gibt es solche Vererbung nicht.<br><b>2.</b> Surjektivität auf $\\mathbb{R}$ (statt $\\mathbb{R}_{>0}$) ist falsch: $\\exp(x) > 0$ stets - der Wertebereich gehört zur Aussage dazu."
  },
  {
    id: "k6_kor_6_33",
    title: "Korollar 6.33: Logarithmus und allgemeine Potenzen",
    category: "6.3 Die Exponentialfunktion",
    type: "satz",
    front: "Welche Eigenschaften hat der <b>natürliche Logarithmus</b> (Korollar 6.33), und wie definiert man damit <b>allgemeine Potenzen</b> $x^a$?",
    back: "<b>Korollar 6.33:</b> Die Umkehrfunktion $\\log: \\mathbb{R}_{>0} \\to \\mathbb{R}$ von $\\exp$ ist <b>streng monoton wachsend, stetig und bijektiv</b>, und es gilt<br>$$\\log(ab) = \\log a + \\log b \\qquad \\forall a, b \\in \\mathbb{R}_{>0}.$$<br><b>Allgemeine Potenzen:</b> Für $x > 0$ und $a \\in \\mathbb{R}$ definiert man<br>$$x^a := \\exp(a \\log x).$$<br>Insbesondere $e^x = \\exp(x)$, und es gelten (Übung 6.34):<br>$$\\log(x^a) = a\\log x, \\qquad x^a x^b = x^{a+b}, \\qquad (x^a)^b = x^{ab}.$$",
    meta: "Skript: Korollar 6.33 & Übung 6.34, Abschnitt 6.3.8",
    explanation: "Die Existenz und Stetigkeit von $\\log$ ist der Umkehrsatz (Satz 3.62) in Aktion. Die Produktformel ist die 'gespiegelte' Additionsformel: $x = \\log a, y = \\log b$ einsetzen. Für rationale $a$ stimmt $x^a$ mit den Wurzeldefinitionen aus Beispiel 3.63 überein - die neue Definition ist eine echte Fortsetzung. Nützlich: $\\log$ wächst langsamer als jede Potenz, $\\log x = o(x^\\alpha)$ für $\\alpha > 0$ (Übung 6.35).",
    example: "$2^{\\sqrt{2}} = \\exp(\\sqrt{2}\\,\\log 2)$ - erst diese Definition gibt irrationalen Exponenten einen Sinn. $\\log(e^3) = 3$, $\\log 1 = 0$.",
    counterexample: "<b>1.</b> $\\log(a + b) \\neq \\log a + \\log b$: Der Logarithmus verwandelt <i>Produkte</i> in Summen, nicht Summen in Summen ($\\log 2 + \\log 2 = \\log 4$).<br><b>2.</b> $x^a$ via $\\exp(a \\log x)$ verlangt $x > 0$: $(-2)^{1/2}$ lässt sich so nicht definieren ($\\log(-2)$ existiert nicht in $\\mathbb{R}$) - negative Basen bleiben rationalen Exponenten mit ungeradem Nenner vorbehalten."
  },

  // ========================================================================
  // 6.4 GRENZWERTE VON FUNKTIONEN
  // ========================================================================
  {
    id: "k6_def_funktionsgrenzwert",
    title: "6.4.1: Der Grenzwert einer Funktion",
    category: "6.4 Grenzwerte von Funktionen",
    type: "definition",
    front: "Wie ist der <b>Grenzwert $\\lim_{x \\to x_0} f(x)$</b> einer Funktion definiert, und welche Rechenregeln gelten (Übung 6.38)?",
    back: "Sei $D \\subseteq \\mathbb{R}$, $x_0 \\in \\mathbb{R}$ ein <b>Häufungspunkt</b> von $D$ und $f: D \\to \\mathbb{R}$. Dann ist $A = \\lim_{x\\to x_0} f(x)$, falls<br>$$\\forall \\varepsilon > 0\\ \\exists \\delta > 0\\ \\forall x \\in D \\cap (x_0 - \\delta, x_0 + \\delta) \\setminus \\{x_0\\}: |f(x) - A| < \\varepsilon.$$<br>Die Menge $\\dot{U}_\\delta(x_0) = (x_0-\\delta, x_0+\\delta) \\setminus \\{x_0\\}$ heisst <b>punktierte $\\delta$-Umgebung</b>.<br><br>Der Grenzwert ist (falls existent) <b>eindeutig</b>, <b>linear</b>, <b>multiplikativ</b>, <b>monoton</b> und erfüllt ein <b>Sandwich-Lemma</b> (Übung 6.38).",
    meta: "Skript: Abschnitt 6.4.1 & Übung 6.38",
    explanation: "Zwei Besonderheiten: (1) $x_0$ muss Häufungspunkt sein, sonst wäre der Grenzwert nicht eindeutig (die Bedingung wäre leer erfüllt). (2) Der Punkt $x_0$ selbst wird <i>ausgenommen</i> - der Wert $f(x_0)$ (falls definiert) spielt keine Rolle! Genau das erlaubt Grenzwerte an Definitionslücken, der wichtigste Fall für die Ableitung in Kapitel 8 ($\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}$).",
    example: "$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x\\to 2}(x+2) = 4$ (Übung 6.45 behandelt $\\lim_{x\\to2}\\frac{x^3 - x^2 - x - 2}{x-2}$ analog), obwohl die Funktion bei $x_0 = 2$ gar nicht definiert ist - genau dafür ist die punktierte Umgebung gemacht.",
    counterexample: "<b>1.</b> $\\lim_{x\\to x_0} f(x)$ kann existieren und $\\neq f(x_0)$ sein: $f(x) = 0$ für $x \\neq 0$, $f(0) = 1$ hat $\\lim_{x\\to 0} f(x) = 0 \\neq 1 = f(0)$ (hebbare Unstetigkeitsstelle).<br><b>2.</b> An isolierten Punkten von $D$ gibt es keinen Grenzwertbegriff: Für $D = \\{0\\} \\cup [1,2]$ und $x_0 = 0$ ist die punktierte Bedingung leer - jedes $A$ würde sie erfüllen; deshalb die Häufungspunkt-Voraussetzung."
  },
  {
    id: "k6_lemma_6_39_40",
    title: "Lemmata 6.39-6.41: Grenzwerte, Stetigkeit und Folgen",
    category: "6.4 Grenzwerte von Funktionen",
    type: "lemma",
    front: "Wie hängen Funktionsgrenzwerte mit <b>Stetigkeit</b> (Lemma 6.39), <b>Folgen</b> (Lemma 6.40) und <b>Verknüpfungen</b> (Proposition 6.41) zusammen?",
    back: "&bull; <b>Lemma 6.39:</b> Ist $x_0 \\in D$ ein Häufungspunkt von $D$, so ist $f$ genau dann stetig bei $x_0$, wenn $\\lim_{x\\to x_0} f(x) = f(x_0)$.<br>&bull; <b>Lemma 6.40:</b> $A = \\lim_{x \\to x_0} f(x)$ gilt genau dann, wenn für <b>jede</b> Folge $(a_n)_n$ in $D \\setminus \\{x_0\\}$ mit $a_n \\to x_0$ auch $f(a_n) \\to A$ gilt.<br>&bull; <b>Proposition 6.41:</b> Ist $y_0 = \\lim_{x\\to x_0} f(x)$ und $g$ stetig bei $y_0$, so gilt $$\\lim_{x\\to x_0} g(f(x)) = g(y_0).$$",
    meta: "Skript: Lemma 6.39, Lemma 6.40, Proposition 6.41",
    explanation: "<b>Hebbare Unstetigkeitsstellen:</b> Existiert $\\lim_{x\\to x_0} f(x) \\neq f(x_0)$, kann man $f$ durch Abändern des einen Wertes stetig machen ($f_{\\text{neu}}(x_0) = \\lim_{x\\to x_0} f(x)$); für $x_0 \\notin D$ liefert der Grenzwert eine stetige Fortsetzung. Lemma 6.40 übersetzt Funktionsgrenzwerte vollständig in Folgensprache - der Beweis der Rückrichtung konstruiert mit $\\delta = \\tfrac1n$ wieder eine 'Fallen-Folge'.",
    example: "Beispiel 6.44 nutzt Prop. 6.41: $\\lim_{x\\to 0} x^x = \\lim_{x \\to 0} \\exp(x \\log x) = \\exp(0) = 1$, da $x \\log x \\to 0$ (via $y\\exp(-y) \\to 0$ und Sandwich) und $\\exp$ stetig ist.",
    counterexample: "<b>1.</b> EINE brave Folge genügt in Lemma 6.40 nicht: $f = \\mathbb{1}_{\\mathbb{Q}}$ erfüllt $f(a_n) \\to 1$ für jede rationale Folge $a_n \\to 0$, hat aber keinen Grenzwert bei $0$ (irrationale Folgen liefern $0$).<br><b>2.</b> In Prop. 6.41 ist die Stetigkeit von $g$ bei $y_0$ wesentlich: Mit $f(x) = x$, $y_0 = 0$ und $g = \\operatorname{sgn}$ gilt $\\lim_{x\\to 0} g(f(x))$ nicht - der Sprung von $g$ zerstört die Vertauschung."
  },
  {
    id: "k6_einseitige",
    title: "6.4.2-6.4.4: Einseitige Grenzwerte, Sprungstellen, x → ∞",
    category: "6.4 Grenzwerte von Funktionen",
    type: "definition",
    front: "Definiere <b>links-/rechtsseitige Grenzwerte</b>, <b>Sprungstellen</b> und den Grenzwert <b>für $x \\to \\infty$</b>.",
    back: "&bull; <b>Rechtsseitiger Grenzwert</b> ($x_0$ rechtsseitiger Häufungspunkt: $D \\cap (x_0, x_0 + \\delta) \\neq \\emptyset$ für alle $\\delta$):<br>$$A = \\lim_{x \\searrow x_0} f(x) \\iff \\forall \\varepsilon > 0\\ \\exists \\delta > 0\\ \\forall x \\in D \\cap (x_0, x_0+\\delta): |f(x) - A| < \\varepsilon$$<br>analog $\\lim_{x \\nearrow x_0}$ (linksseitig) sowie uneigentliche Versionen mit $f(x) > \\varepsilon^{-1}$.<br>&bull; Der beidseitige Grenzwert existiert genau dann, wenn beide einseitigen existieren und übereinstimmen.<br>&bull; <b>Sprungstelle:</b> beide einseitigen Grenzwerte existieren, sind aber <b>verschieden</b>. $f$ heisst <b>rechtsseitig stetig</b> bei $x_0$, falls $\\lim_{x\\searrow x_0} f(x) = f(x_0)$.<br>&bull; <b>$x \\to \\infty$:</b> $\\lim_{x\\to\\infty} f(x) = A$, falls $\\forall \\varepsilon > 0\\ \\exists \\delta > 0\\ \\forall x \\in (\\tfrac1\\delta, \\infty) \\cap D: |f(x) - A| < \\varepsilon$.",
    meta: "Skript: Abschnitte 6.4.2-6.4.4",
    explanation: "Alle 'Bewegungen' ($x \\to x_0$, $x \\searrow x_0$, $x \\to \\pm\\infty$, eigentlich/uneigentlich) folgen demselben Muster: In einer geeigneten (punktierten, einseitigen oder Unendlichkeits-) Umgebung liegen die Werte nahe am Ziel. Das Skript zählt im Applet 6.54 augenzwinkernd '40 Definitionen' - wer das Muster versteht, braucht keine davon auswendig.",
    example: "$\\lim_{x\\searrow 0} \\tfrac1x = +\\infty$, $\\lim_{x\\nearrow 0}\\tfrac1x = -\\infty$, $\\lim_{x \\searrow 0}\\log x = -\\infty$, $\\lim_{x\\to 0}\\sqrt{x} = \\lim_{x \\searrow 0}\\sqrt{x} = 0$. Die Signum-Funktion hat bei $0$ eine Sprungstelle (einseitige Grenzwerte $-1$ und $1$).",
    counterexample: "<b>1.</b> $\\tfrac1x$ hat bei $0$ KEINE Sprungstelle im Sinne der Definition: Die einseitigen Grenzwerte sind uneigentlich ($\\pm\\infty$), nicht reell - 'Polstelle' ist etwas anderes als 'Sprungstelle'.<br><b>2.</b> Existenz beider einseitiger Grenzwerte garantiert nicht die Stetigkeit: Bei der Gaussklammer $\\lfloor \\cdot \\rfloor$ existieren an jeder ganzen Zahl beide einseitigen Grenzwerte ($n-1$ und $n$), aber sie differieren - Sprungstelle."
  },

  // ========================================================================
  // 6.5 RIEMANN-SUMMEN
  // ========================================================================
  {
    id: "k6_def_6_46",
    title: "Definition 6.46 & Satz 6.47: Riemann-Summen",
    category: "6.5 Riemann-Summen",
    type: "satz",
    front: "Was sind <b>Riemann-Summen</b>, und in welchem Sinn approximieren sie das Riemann-Integral (Satz 6.47)?",
    back: "<b>Definition 6.46:</b> Für eine Zerlegung $Z = \\{a = x_0 < \\dots < x_n = b\\}$ mit <b>Maschenweite</b> $|Z| = \\max_k (x_k - x_{k-1})$ und einer erlaubten Wahl von <b>Zwischenpunkten</b> $z_k \\in [x_{k-1}, x_k]$ ist die Riemann-Summe<br>$$R(f, Z, z) = \\sum_{k=1}^n f(z_k)(x_k - x_{k-1}).$$<br><b>Satz 6.47:</b> Ist $f$ Riemann-integrierbar auf $[a,b]$, so gilt<br>$$\\forall \\varepsilon > 0\\ \\exists \\delta > 0\\ \\forall Z\\ \\forall z: |Z| < \\delta \\implies \\left|R(f,Z,z) - \\int_a^b f(x)\\,\\mathrm{d}x\\right| < \\varepsilon.$$<br>Das Integral ist also der 'Grenzwert der Riemann-Summen bei Maschenweite $\\to 0$' - und diese Konvergenz <i>charakterisiert</i> sogar die Riemann-Integrierbarkeit (Übung 6.49).",
    meta: "Skript: Definition 6.46, Satz 6.47, Übungen 6.49/6.50",
    explanation: "Das ist Riemanns historischer Zugang (1854) zum Integral, der sich hier nachträglich als äquivalent zum Darboux-Zugang aus Kapitel 4 erweist. Die Pointe: Die Zwischenpunkte $z_k$ dürfen <i>beliebig</i> gewählt werden - bei kleiner Maschenweite spielt die Wahl keine Rolle mehr. Praktisch wichtig für Numerik und für vektorwertige Integrale (6.5.1): komponentenweise mit der Dreiecksungleichung $\\big\\|\\int f\\big\\| \\le \\int \\|f\\|$ (Übung 6.51).",
    example: "Mit äquidistanter Zerlegung und $z_k = \\tfrac{k}{n}$: $\\int_0^1 x^2\\,\\mathrm{d}x = \\lim_{n\\to\\infty} \\sum_{k=1}^n \\tfrac{k^2}{n^2}\\cdot\\tfrac1n = \\lim_n \\tfrac{(n+1)(2n+1)}{6n^2} = \\tfrac13$ - Grenzwerte von Summenfolgen werden zu Integralen.",
    counterexample: "<b>1.</b> Für nicht integrierbare Funktionen hängt die Riemann-Summe von der Zwischenpunktwahl ab: Bei der Dirichlet-Funktion liefern rationale $z_k$ stets $1$, irrationale stets $0$ - kein Grenzwert bei $|Z| \\to 0$.<br><b>2.</b> Nur 'Maschenweite klein' zählt, nicht 'viele Teilpunkte': Eine Zerlegung mit 1000 Punkten, die ein grobes Teilstück der Länge $\\tfrac{b-a}{2}$ behält, approximiert schlecht - $|Z|$ misst das grösste Stück."
  },

  // ========================================================================
  // 6.6 LANDAU-NOTATION
  // ========================================================================
  {
    id: "k6_landau",
    title: "6.6: Landau-Notation (Gross-O und Klein-o)",
    category: "6.6 Landau Notation",
    type: "definition",
    front: "Was bedeuten $f(x) = O(g(x))$ und $f(x) = o(g(x))$ für $x \\to x_0$?",
    back: "Sei $x_0$ Häufungspunkt von $D$ und $f, g: D \\to \\mathbb{R}$.<br><br>&bull; <b>Gross-O:</b> $f(x) = O(g(x))$ für $x \\to x_0$, falls es $\\delta > 0$ und $M > 0$ gibt mit<br>$$|f(x)| \\le M|g(x)| \\quad \\forall x \\in D \\cap \\dot{U}_\\delta(x_0)$$<br>('$f$ ist nahe $x_0$ höchstens konstant mal $g$').<br>&bull; <b>Klein-o:</b> $f(x) = o(g(x))$ für $x \\to x_0$, falls es zu <b>jedem</b> $\\varepsilon > 0$ ein $\\delta > 0$ gibt mit $|f(x)| \\le \\varepsilon|g(x)|$ auf $D \\cap \\dot{U}_\\delta(x_0)$. Für $g \\neq 0$ äquivalent:<br>$$\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = 0$$<br>('$f$ ist gegenüber $g$ vernachlässigbar'). Beide Begriffe gelten analog für $x \\to \\infty$, $x \\searrow x_0$ und Folgen.",
    meta: "Skript: Abschnitt 6.6 & Übungen 6.52/6.53",
    explanation: "Der Nutzen: Die 'implizite Konstante' $M$ bekommt keinen Namen - man rechnet nur mit dem Wesentlichen. Klein-o ist strikt stärker als Gross-O. Wichtige Asymptotiken (Übung 6.52, mit 6.35): $\\log x = o(x^b)$ für $x\\to\\infty$, $x^a = o(e^x)$ für $x \\to \\infty$, $x^p = o(x)$ für $x \\to 0$ ($p > 1$). In Kapitel 8 wird die Ableitung über $f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)$ gelesen.",
    example: "$x^2 = O(x)$ für $x \\to 0$ (sogar $o(x)$), aber $x^2 \\neq O(x)$ für $x \\to \\infty$ (dort umgekehrt $x = o(x^2)$) - die Bewegung gehört zwingend zur Aussage dazu! $\\frac{x+1}{x} = O(1)$ für $x \\to \\infty$.",
    counterexample: "<b>1.</b> $O$ ist keine Gleichheit: Aus $x = O(x)$ und $2x = O(x)$ folgt nicht $x = 2x$ - das '='-Zeichen ist eine (gewöhnungsbedürftige) Zugehörigkeits-Notation.<br><b>2.</b> Existieren beide Grenzwerte in $\\mathbb{R}\\setminus\\{0\\}$, so gilt zwar $f = O(g)$, aber nie $f = o(g)$: $\\tfrac{f(x)}{g(x)}$ strebt dann gegen einen Wert $\\neq 0$ - Klein-o lebt von Grenzwerten, die $0$ oder $\\infty$ sind."
  }
];
