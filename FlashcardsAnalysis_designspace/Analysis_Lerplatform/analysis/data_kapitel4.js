/* ==========================================================================
   FLASHCARDS KAPITEL 4: Das Riemann-Integral
   Analysis I - Prof. Dr. Manfred Einsiedler (Skript S. 177-209)
   Vollständig verifiziert gegen das offizielle Skript (Abschnitte 4.1-4.7)
   ========================================================================== */

window.FLASHCARDS_KAPITEL_4 = [
  // ========================================================================
  // 4.1 TREPPENFUNKTIONEN UND DEREN INTEGRAL
  // ========================================================================
  {
    id: "k4_def_4_1",
    title: "Definition 4.1: Zerlegung",
    category: "4.1 Treppenfunktionen und deren Integral",
    type: "definition",
    front: "Was ist formal eine <b>Zerlegung</b> (oder Unterteilung) $\\mathfrak{Z}$ eines kompakten Intervalls $[a,b]$?",
    back: "Eine Zerlegung $\\mathfrak{Z}$ von $[a,b]$ ist gegeben durch endlich viele Punkte $x_0, \\dots, x_n \\in [a,b]$ mit $n \\in \\mathbb{N}$ und<br>$$a = x_0 < x_1 < \\dots < x_{n-1} < x_n = b.$$<br>Die Punkte $x_0,\\dots,x_n$ heissen <b>Teilungspunkte</b>. Wir schreiben $\\mathfrak{Z} = \\{a = x_0 < x_1 < \\dots < x_n = b\\}$.<br><br>Jede Zerlegung induziert die Partition<br>$$\\mathcal{P}(\\mathfrak{Z}) = \\big\\{\\{a\\}, (x_0,x_1), \\{x_1\\}, \\dots, (x_{n-1},x_n), \\{b\\}\\big\\}$$<br>von $[a,b]$ in offene Intervalle und einzelne Punkte.",
    meta: "Skript: Definition 4.1, S. 178",
    explanation: "Die Zerlegung ist das Gitter auf der $x$-Achse, auf dem wir später die Rechtecke (Treppenstufen) aufbauen. Formal ist sie eine endliche Teilmenge von $[a,b]$, die $a$ und $b$ enthält &ndash; die strenge Monotonie $x_0 < x_1 < \\dots < x_n$ macht die Aufzählung eindeutig.",
    example: "Für $[0,1]$ ist $\\mathfrak{Z} = \\{0 < 0{,}3 < 0{,}8 < 1\\}$ eine gültige Zerlegung mit $n = 3$ Teilintervallen. Die induzierte Partition ist $\\{\\{0\\}, (0, 0{,}3), \\{0{,}3\\}, (0{,}3, 0{,}8), \\{0{,}8\\}, (0{,}8, 1), \\{1\\}\\}$.",
    counterexample: "<b>1.</b> $\\{0{,}3 < 0{,}8\\}$ ist <i>keine</i> Zerlegung von $[0,1]$: Die Randpunkte $a=0$ und $b=1$ müssen Teilungspunkte sein ($x_0 = a$, $x_n = b$).<br><b>2.</b> Eine unendliche Punktmenge wie $\\{0\\} \\cup \\{\\tfrac{1}{n} : n \\in \\mathbb{N}\\} \\cup \\{1\\}$ ist keine Zerlegung &ndash; es sind nur <i>endlich viele</i> Teilungspunkte erlaubt."
  },
  {
    id: "k4_def_4_2",
    title: "Definition 4.2: Treppenfunktion",
    category: "4.1 Treppenfunktionen und deren Integral",
    type: "definition",
    front: "Wann heisst eine Funktion $f: [a,b] \\to \\mathbb{R}$ eine <b>Treppenfunktion</b> ($\\mathcal{TF}$)? Definiere auch <b>Konstanzintervalle</b> und <b>Konstanzwerte</b>.",
    back: "$f$ ist eine <b>Treppenfunktion</b>, falls es eine Zerlegung $\\mathfrak{Z} = \\{a = x_0 < \\dots < x_n = b\\}$ gibt, so dass es für jedes $k \\in \\{1,\\dots,n\\}$ eine Zahl $c_k \\in \\mathbb{R}$ gibt mit<br>$$\\forall x \\in (x_{k-1}, x_k): f(x) = c_k.$$<br>Die offenen Intervalle $(x_{k-1}, x_k)$ heissen <b>Konstanzintervalle</b>, $\\mathfrak{Z}$ heisst <b>Zerlegung in Konstanzintervalle</b> von $f$, und $c_1,\\dots,c_n$ sind die <b>Konstanzwerte</b> von $f$ bezüglich $\\mathfrak{Z}$.",
    meta: "Skript: Definition 4.2, S. 178",
    explanation: "<b>Der entscheidende Punkt:</b> $f$ muss nur auf den <i>offenen</i> Intervallen konstant sein &ndash; die Werte an den Teilungspunkten $x_k$ selbst dürfen völlig beliebig sein. Da einzelne Punkte keine Breite haben, tragen sie später nichts zum Integral bei.",
    example: "Jede konstante Funktion $f(x) = c$ ist eine Treppenfunktion (mit der trivialen Zerlegung $\\mathfrak{Z} = \\{a < b\\}$). Auch $f$ mit $f(x) = 1$ auf $(0, \\tfrac12)$, $f(x) = -2$ auf $(\\tfrac12, 1)$ und beliebigen Werten bei $x \\in \\{0, \\tfrac12, 1\\}$ ist eine Treppenfunktion auf $[0,1]$.",
    counterexample: "<b>1.</b> $f(x) = x$ auf $[0,1]$ ist keine Treppenfunktion: Sie ist auf keinem noch so kleinen offenen Intervall konstant.<br><b>2.</b> Die Dirichlet-Funktion $\\mathbb{1}_{\\mathbb{Q} \\cap [0,1]}$ ist keine Treppenfunktion: In jedem offenen Intervall nimmt sie beide Werte $0$ und $1$ an (Dichtheit von $\\mathbb{Q}$ und $\\mathbb{R} \\setminus \\mathbb{Q}$), kann dort also nicht konstant sein."
  },
  {
    id: "k4_def_4_3_verfeinerung",
    title: "Definition 4.3: Verfeinerung",
    category: "4.1 Treppenfunktionen und deren Integral",
    type: "definition",
    front: "Wann ist eine Zerlegung $\\mathfrak{Z}'$ <b>feiner</b> als $\\mathfrak{Z}$, und was ist die <b>gemeinsame Verfeinerung</b> zweier Zerlegungen?",
    back: "Seien $\\mathfrak{Z}, \\mathfrak{Z}'$ zwei Zerlegungen von $[a,b]$.<br>&bull; $\\mathfrak{Z}'$ ist <b>feiner als</b> $\\mathfrak{Z}$, falls jeder Teilungspunkt von $\\mathfrak{Z}$ auch ein Teilungspunkt von $\\mathfrak{Z}'$ ist.<br>&bull; Die <b>gemeinsame Verfeinerung</b> von $\\mathfrak{Z}$ und $\\mathfrak{Z}'$ ist die Zerlegung, deren Menge von Teilungspunkten die <i>Vereinigung</i> der Teilungspunkte von $\\mathfrak{Z}$ und $\\mathfrak{Z}'$ ist.",
    meta: "Skript: Definition 4.3, S. 179",
    explanation: "Will man zwei Treppenfunktionen addieren, passen ihre Stufen meist nicht zusammen. Die gemeinsame Verfeinerung erzeugt ein Über-Gitter, auf dem <i>beide</i> gleichzeitig konstant auf allen Konstanzintervallen sind. Das ist das technische Fundament für die Linearität (Lemma 4.7).",
    example: "$\\mathfrak{Z}_1 = \\{0 < 1 < 2\\}$ und $\\mathfrak{Z}_2 = \\{0 < 1{,}5 < 2\\}$ haben die gemeinsame Verfeinerung $\\{0 < 1 < 1{,}5 < 2\\}$.",
    counterexample: "<b>1.</b> $\\{0 < 1{,}5 < 2\\}$ ist <i>nicht</i> feiner als $\\{0 < 1 < 2\\}$: Der Teilungspunkt $1$ fehlt. &bdquo;Mehr Punkte haben&ldquo; genügt nicht &ndash; es müssen <i>alle alten</i> Punkte enthalten sein.<br><b>2.</b> Eine Zerlegung in Konstanzintervalle ist nicht eindeutig: Jede feinere Zerlegung leistet dasselbe. Deshalb braucht es Lemma 4.5, damit das Integral wohldefiniert ist."
  },
  {
    id: "k4_def_4_4_integral",
    title: "Definition 4.4-4.6: Integral einer Treppenfunktion",
    category: "4.1 Treppenfunktionen und deren Integral",
    type: "definition",
    front: "Wie ist das <b>Integral einer Treppenfunktion</b> definiert, und was besagt <b>Lemma 4.5</b> zur Wohldefiniertheit?",
    back: "Sei $f \\in \\mathcal{TF}([a,b])$ mit Zerlegung $\\mathfrak{Z}$ in Konstanzintervalle und Konstanzwerten $c_1,\\dots,c_n$. Dann (Def. 4.4):<br>$$I(f, \\mathfrak{Z}) = \\sum_{k=1}^n c_k (x_k - x_{k-1}) = \\sum_{k=1}^n c_k \\Delta x_k$$<br><b>Lemma 4.5 (Unabhängigkeit):</b> $I(f,\\mathfrak{Z})$ hängt <i>weder</i> von den Funktionswerten $f(x_k)$ an den Teilungspunkten <i>noch</i> von der Wahl der Zerlegung $\\mathfrak{Z}$ in Konstanzintervalle ab.<br><br>Deshalb definieren wir (Def. 4.6): $\\int_a^b f(x)\\,\\mathrm{d}x = \\int_a^b f\\,\\mathrm{d}x = I(f, \\mathfrak{Z})$.",
    meta: "Skript: Definition 4.4, Lemma 4.5, Definition 4.6, S. 179-180",
    explanation: "<b>Beweisidee von Lemma 4.5:</b> Fügt man einen einzelnen neuen Teilungspunkt $y \\in (x_{\\ell-1}, x_\\ell)$ ein, zerschneidet man nur ein Rechteck in zwei kleinere: $c_\\ell(x_\\ell - x_{\\ell-1}) = c_\\ell(x_\\ell - y) + c_\\ell(y - x_{\\ell-1})$. Per Induktion folgt die Aussage für jede feinere Zerlegung, und für zwei beliebige Zerlegungen vergleicht man beide mit ihrer gemeinsamen Verfeinerung: $I(f,\\mathfrak{Z}) = I(f,\\mathfrak{Z}'') = I(f,\\mathfrak{Z}')$.<br><br>Für $f \\ge 0$ interpretieren wir $I(f,\\mathfrak{Z})$ als Flächeninhalt der <b>Ordinatenmenge</b> $\\{(x,y) \\in \\mathbb{R}^2 \\mid a \\le x \\le b,\\ 0 \\le y \\le f(x)\\}$, allgemein als vorzeichenbehafteten Nettoflächeninhalt.",
    example: "$f$ auf $[0,3]$ mit $f = 2$ auf $(0,1)$ und $f = -1$ auf $(1,3)$: $\\int_0^3 f\\,\\mathrm{d}x = 2 \\cdot 1 + (-1) \\cdot 2 = 0$. Positive und negative Flächen heben sich hier exakt auf.",
    counterexample: "<b>1.</b> Ändert man $f$ nur am Teilungspunkt $x_1$ (z.B. $f(x_1) = 1000$), ändert sich das Integral <i>nicht</i> &ndash; einzelne Punkte haben Breite null.<br><b>2.</b> Die Summe $\\sum c_k \\Delta x_k$ über eine Zerlegung, die <i>keine</i> Zerlegung in Konstanzintervalle ist, ist im Allgemeinen bedeutungslos: Ist $f$ auf $(x_{k-1},x_k)$ nicht konstant, gibt es dort gar keinen Konstanzwert $c_k$."
  },
  {
    id: "k4_lemma_4_7",
    title: "Lemma 4.7: Linearität (Treppenintegral)",
    category: "4.1 Treppenfunktionen und deren Integral",
    type: "lemma",
    front: "Was besagt <b>Lemma 4.7</b> über die Struktur von $\\mathcal{TF}([a,b])$ und die Linearität des Integrals?",
    back: "Die nicht-leere Menge $\\mathcal{TF}([a,b]) = \\{f \\in \\mathcal{F}([a,b]) \\mid f \\text{ ist Treppenfunktion}\\}$ ist ein <b>Unterraum</b> des Vektorraums $\\mathcal{F}([a,b])$ der reellwertigen Funktionen auf $[a,b]$, und $\\int : \\mathcal{TF}([a,b]) \\to \\mathbb{R}$ ist <b>linear</b>: Für alle $f, g \\in \\mathcal{TF}([a,b])$ und $s \\in \\mathbb{R}$ ist $f + g \\in \\mathcal{TF}([a,b])$, $sf \\in \\mathcal{TF}([a,b])$ und<br>$$\\int_a^b (f+g)\\,\\mathrm{d}x = \\int_a^b f\\,\\mathrm{d}x + \\int_a^b g\\,\\mathrm{d}x, \\qquad \\int_a^b (sf)\\,\\mathrm{d}x = s \\int_a^b f\\,\\mathrm{d}x.$$",
    meta: "Skript: Lemma 4.7, S. 181",
    explanation: "<b>Beweis-Trick:</b> Bilde die gemeinsame Verfeinerung $\\mathfrak{Z}$ der Zerlegungen $\\mathfrak{Z}_f$ und $\\mathfrak{Z}_g$. Auf ihr sind beide Funktionen konstant ($c_k$ bzw. $d_k$ auf $(x_{k-1},x_k)$), also ist $f + g$ dort konstant mit Wert $c_k + d_k$, und<br>$$\\sum_k (c_k + d_k)\\Delta x_k = \\sum_k c_k \\Delta x_k + \\sum_k d_k \\Delta x_k.$$",
    example: "$f = \\mathbb{1}$ auf $(0,1)$-Stufen und $g$ mit Stufe bei $\\tfrac12$: Erst nach gemeinsamer Verfeinerung $\\{0 < \\tfrac12 < 1\\}$ kann man beide stufenweise addieren. Konkret: $\\int_0^1 (f+g) = \\int_0^1 f + \\int_0^1 g$ rechnet man dann Stufe für Stufe nach.",
    counterexample: "<b>1.</b> Das <i>Produkt</i>-Integral ist nicht multiplikativ: Im Allgemeinen ist $\\int_a^b fg\\,\\mathrm{d}x \\neq \\big(\\int_a^b f\\,\\mathrm{d}x\\big)\\big(\\int_a^b g\\,\\mathrm{d}x\\big)$. Beispiel: $f = g = \\mathbb{1}$ auf $[0,2]$: links $2$, rechts $4$.<br><b>2.</b> Linearität gilt nur mit <i>konstanten</i> Skalaren $s$: Für eine Funktion $h$ ist $\\int h f\\,\\mathrm{d}x \\neq h \\int f\\,\\mathrm{d}x$ &ndash; letzteres ist nicht einmal eine reelle Zahl."
  },
  {
    id: "k4_lemma_4_8",
    title: "Lemma 4.8: Monotonie (Treppenintegral)",
    category: "4.1 Treppenfunktionen und deren Integral",
    type: "lemma",
    front: "Was besagt die <b>Monotonie des Integrals</b> von Treppenfunktionen (Lemma 4.8)?",
    back: "Sind $f, g \\in \\mathcal{TF}([a,b])$ zwei Treppenfunktionen mit $f \\le g$ (d.h. $f(x) \\le g(x)$ für alle $x \\in [a,b]$), dann gilt<br>$$\\int_a^b f\\,\\mathrm{d}x \\le \\int_a^b g\\,\\mathrm{d}x.$$<br><i>Insbesondere:</i> $f \\in \\mathcal{TF}([a,b])$ und $f \\ge 0$ implizieren $\\int_a^b f\\,\\mathrm{d}x \\ge 0$.",
    meta: "Skript: Lemma 4.8, S. 182",
    explanation: "<b>Beweis:</b> Auf einer gemeinsamen Zerlegung in Konstanzintervalle gilt $c_k \\le d_k$ für alle $k$; da $\\Delta x_k > 0$, überträgt sich dies auf die Summen. <br><br><b>Feinheit aus dem Skript:</b> Für die Konklusion genügt sogar, dass $f \\le g$ nur auf den <i>offenen</i> Konstanzintervallen einer Zerlegung gilt &ndash; die Werte an den endlich vielen Teilungspunkten sind egal.",
    example: "$f = 1$ und $g = 2$ (konstant) auf $[0,1]$: $\\int_0^1 f\\,\\mathrm{d}x = 1 \\le 2 = \\int_0^1 g\\,\\mathrm{d}x$.",
    counterexample: "<b>1.</b> Die Umkehrung ist falsch: Aus $\\int_a^b f\\,\\mathrm{d}x \\le \\int_a^b g\\,\\mathrm{d}x$ folgt <i>nicht</i> $f \\le g$. Beispiel auf $[0,2]$: $f = \\mathbb{1}_{(0,1)}$-Stufe mit Wert $1$ auf $(0,1)$, $0$ sonst, und $g = $ Stufe mit Wert $1$ auf $(1,2)$: beide Integrale sind $1$, aber weder $f \\le g$ noch $g \\le f$.<br><b>2.</b> Aus $\\int_a^b f\\,\\mathrm{d}x \\ge 0$ folgt nicht $f \\ge 0$: Die Treppenfunktion mit Wert $3$ auf $(0,1)$ und $-1$ auf $(1,2)$ hat Integral $2 \\ge 0$, ist aber nicht überall $\\ge 0$."
  },

  // ========================================================================
  // 4.2 DEFINITION DES RIEMANN-INTEGRALS
  // ========================================================================
  {
    id: "k4_def_4_10",
    title: "Definition 4.10: Unter- und Obersummen",
    category: "4.2 Definition des Riemann-Integrals",
    type: "definition",
    front: "Wie sind für eine beschränkte Funktion $f \\in \\mathcal{F}([a,b])$ die Mengen der <b>Untersummen $\\mathcal{U}(f)$</b> und <b>Obersummen $\\mathcal{O}(f)$</b> definiert? Warum sind sie nicht-leer?",
    back: "$$\\mathcal{U}(f) = \\left\\{ \\int_a^b u\\,\\mathrm{d}x \\;\\middle|\\; u \\in \\mathcal{TF}([a,b]) \\text{ und } u \\le f \\right\\}$$<br>$$\\mathcal{O}(f) = \\left\\{ \\int_a^b o\\,\\mathrm{d}x \\;\\middle|\\; o \\in \\mathcal{TF}([a,b]) \\text{ und } f \\le o \\right\\}$$<br>Da $f$ beschränkt ist, existieren konstante Treppenfunktionen $u \\le f \\le o$ (z.B. $u = \\inf f([a,b])$, $o = \\sup f([a,b])$), also sind beide Mengen nicht-leer.<br><br>Mit Lemma 4.8 folgt die zentrale Ungleichung (4.2):<br>$$\\sup \\mathcal{U}(f) \\le \\inf \\mathcal{O}(f).$$",
    meta: "Skript: Definition 4.10 & Gl. (4.2), S. 183",
    explanation: "Man nähert die &bdquo;wahre&ldquo; Fläche durch bekannte Bausteine an: Untersummen = Integrale von Treppen, die <i>unter</i> dem Graphen liegen; Obersummen = Integrale von Treppen, die ihn <i>einschliessen</i>. Jede Untersumme ist $\\le$ jeder Obersumme, denn aus $u \\le f \\le o$ folgt $\\int u \\le \\int o$ (Lemma 4.8). Deshalb trennt die reelle Achse die beiden Mengen, und es gilt $\\sup\\mathcal{U}(f) \\le \\inf\\mathcal{O}(f)$.<br><br><b>Merke:</b> Beschränktheit ist äquivalent dazu, dass überhaupt Treppenfunktionen $u \\le f \\le o$ existieren.",
    example: "Für $f(x) = x^2$ auf $[0,1]$ gilt (Übung 4.15): $\\mathcal{U}(f) = \\big({-\\infty}, \\tfrac13\\big)$ und $\\mathcal{O}(f) = \\big(\\tfrac13, \\infty\\big)$ &ndash; beide Mengen sind offene Halbgeraden, die sich bei $\\tfrac13$ treffen, ohne $\\tfrac13$ zu enthalten.",
    counterexample: "<b>1.</b> Für <i>unbeschränktes</i> $f$ (z.B. $f(x) = \\tfrac1x$ auf $(0,1]$, $f(0) = 0$) ist $\\mathcal{O}(f) = \\emptyset$: Keine Treppenfunktion liegt oberhalb von $f$. Die Konstruktion bricht zusammen &ndash; deshalb verlangt die Definition Beschränktheit.<br><b>2.</b> $\\sup\\mathcal{U}(f) = \\inf\\mathcal{O}(f)$ gilt <i>nicht</i> immer: Für die Dirichlet-Funktion ist $\\sup\\mathcal{U}(f) = 0 < 1 = \\inf\\mathcal{O}(f)$ (Beispiel 4.17)."
  },
  {
    id: "k4_def_4_11",
    title: "Definition 4.11: Riemann-Integrierbarkeit",
    category: "4.2 Definition des Riemann-Integrals",
    type: "definition",
    front: "Definiere das <b>untere und obere Integral</b> und die <b>Riemann-Integrierbarkeit</b> einer beschränkten Funktion $f \\in \\mathcal{F}([a,b])$.",
    back: "&bull; $\\underline{I}(f) = \\sup\\, \\mathcal{U}(f)$ heisst <b>unteres Integral</b> von $f$.<br>&bull; $\\overline{I}(f) = \\inf\\, \\mathcal{O}(f)$ heisst <b>oberes Integral</b> von $f$.<br><br>$f$ heisst <b>Riemann-integrierbar</b> (R-integrierbar), falls $\\underline{I}(f) = \\overline{I}(f)$. Der gemeinsame Wert ist das <b>Riemann-Integral</b><br>$$\\int_a^b f\\,\\mathrm{d}x = \\underline{I}(f) = \\overline{I}(f).$$<br>Weiter: $\\mathcal{R}([a,b]) = \\{f \\in \\mathcal{F}([a,b]) \\mid f \\text{ ist Riemann-integrierbar}\\}$; $a$ heisst <b>untere</b>, $b$ <b>obere Integrationsgrenze</b>, $f$ der <b>Integrand</b>.",
    meta: "Skript: Definition 4.11, S. 183-184",
    explanation: "Wegen (4.2) gilt immer $\\underline{I}(f) \\le \\overline{I}(f)$. Riemann-Integrierbarkeit bedeutet: Die &bdquo;Schere&ldquo; zwischen Approximation von unten und von oben geht komplett zu. <br><br><b>Historische Einordnung (Skript):</b> Dieser Zugang über Treppenfunktionen stammt von <i>Darboux</i>; die äquivalenten <i>Riemann-Summen</i> werden erst in Kapitel 6 besprochen. Für $f \\ge 0$ interpretiert man $\\int_a^b f\\,\\mathrm{d}x$ als Flächeninhalt von $\\{(x,y) \\mid a \\le x \\le b,\\ 0 \\le y \\le f(x)\\}$.",
    example: "Jede Treppenfunktion $t \\in \\mathcal{TF}([a,b])$ ist Riemann-integrierbar, und ihr Riemann-Integral stimmt mit dem Treppenintegral aus Definition 4.6 überein (Übung 4.14) &ndash; das Riemann-Integral ist also eine echte Verallgemeinerung. Ebenso: $\\int_0^1 x^2\\,\\mathrm{d}x = \\tfrac13$ (Übung 4.15).",
    counterexample: "<b>1.</b> Die Dirichlet-Funktion $\\mathbb{1}_{\\mathbb{Q} \\cap [0,1]}$ ist beschränkt, aber <i>nicht</i> R-integrierbar: $\\underline{I}(f) = 0 \\neq 1 = \\overline{I}(f)$ (Beispiel 4.17).<br><b>2.</b> Unbeschränkte Funktionen sind per Definition nie Riemann-integrierbar &ndash; $\\tfrac1x$ auf $(0,1]$ fällt nicht unter diesen Integralbegriff (dafür braucht es später uneigentliche Integrale)."
  },
  {
    id: "k4_prop_4_12",
    title: "Proposition 4.12: Charakterisierungen der R-Integrierbarkeit",
    category: "4.2 Definition des Riemann-Integrals",
    type: "proposition",
    front: "Nenne die <b>drei äquivalenten Charakterisierungen</b> der Riemann-Integrierbarkeit (Proposition 4.12), insbesondere das <b>$\\varepsilon$-Kriterium</b>.",
    back: "Sei $f \\in \\mathcal{F}([a,b])$ beschränkt. Äquivalent sind:<br>(i) $f$ ist Riemann-integrierbar.<br>(ii) Es existiert <i>höchstens eine</i> (dann genau eine) reelle Zahl $I$ mit<br>$$\\int_a^b u\\,\\mathrm{d}x \\le I \\le \\int_a^b o\\,\\mathrm{d}x$$<br>für alle $u, o \\in \\mathcal{TF}([a,b])$ mit $u \\le f \\le o$.<br>(iii) <b>$\\varepsilon$-Kriterium:</b> Für alle $\\varepsilon > 0$ existieren $u, o \\in \\mathcal{TF}([a,b])$ mit $u \\le f \\le o$, so dass<br>$$\\int_a^b (o - u)\\,\\mathrm{d}x < \\varepsilon.$$",
    meta: "Skript: Proposition 4.12, S. 184-185",
    explanation: "Kriterium (iii) ist das wichtigste Beweiswerkzeug des Kapitels: $f$ lässt sich zwischen zwei Treppenfunktionen <b>einquetschen</b>, deren Flächendifferenz beliebig klein wird. Genau damit beweist das Skript die Integrierbarkeit monotoner (Satz 4.31) und stetiger (Satz 4.42) Funktionen.<br><br><b>Verschärfung (Wichtige Übung 4.16):</b> Es genügt sogar, spezielle Familien $T_U, T_O$ von Treppenfunktionen zu betrachten; dann ist $\\int_a^b f\\,\\mathrm{d}x = \\sup\\{\\int u \\mid u \\in T_U\\} = \\inf\\{\\int o \\mid o \\in T_O\\}$.",
    example: "Für $f(x) = x^2$ auf $[0,1]$ liefern äquidistante Zerlegungen Treppen mit $\\int_0^1 (o-u)\\,\\mathrm{d}x = \\tfrac{1}{n} \\to 0$; also ist $f$ R-integrierbar mit $\\int_0^1 x^2\\,\\mathrm{d}x = \\tfrac13$.",
    counterexample: "<b>1.</b> Dirichlet-Funktion: Für jede Wahl $u \\le f \\le o$ gilt $\\int_0^1 (o-u)\\,\\mathrm{d}x \\ge 1$ &ndash; das $\\varepsilon$-Kriterium scheitert für jedes $\\varepsilon < 1$.<br><b>2.</b> In (ii) ist die Eindeutigkeit entscheidend, nicht die Existenz: Ein $I$ mit $\\int u \\le I \\le \\int o$ existiert wegen (4.2) <i>immer</i> (z.B. $I = \\underline{I}(f)$). Bei der Dirichlet-Funktion erfüllt aber <i>jedes</i> $I \\in [0,1]$ die Ungleichungen &ndash; keine Eindeutigkeit, nicht integrierbar."
  },
  {
    id: "k4_bsp_4_17_dirichlet",
    title: "Beispiel 4.17: Die Dirichlet-Funktion",
    category: "4.2 Definition des Riemann-Integrals",
    type: "beispiel",
    front: "Zeige anhand der <b>Dirichlet-Funktion</b>, dass nicht jede beschränkte Funktion Riemann-integrierbar ist.",
    back: "Betrachte die charakteristische Funktion<br>$$f = \\mathbb{1}_{\\mathbb{Q} \\cap [0,1]} : [0,1] \\to \\{0,1\\}, \\quad x \\mapsto \\begin{cases} 1 & x \\in \\mathbb{Q} \\\\ 0 & x \\notin \\mathbb{Q} \\end{cases}$$<br><b>Oberes Integral $= 1$:</b> Sei $o \\in \\mathcal{TF}([0,1])$ mit $f \\le o$ und Konstanzwerten $c_k$. Da $\\mathbb{Q}$ dicht in $\\mathbb{R}$ ist (Korollar 2.70), enthält jedes $(x_{k-1},x_k)$ ein rationales $x$, also $c_k = o(x) \\ge f(x) = 1$. Mit Teleskopsumme: $\\int_0^1 o\\,\\mathrm{d}x \\ge \\sum_k (x_k - x_{k-1}) = 1$.<br><b>Unteres Integral $= 0$:</b> Analog mit der Dichtheit der irrationalen Zahlen (Übung 4.18).<br>Da $0 \\neq 1$: $f \\notin \\mathcal{R}([0,1])$.",
    meta: "Skript: Beispiel 4.17 & Übung 4.18, S. 186-187",
    explanation: "Die Funktion springt &bdquo;überall dicht&ldquo; zwischen $0$ und $1$: In jedem noch so kleinen Intervall liegen sowohl rationale als auch irrationale Zahlen. Jede Treppe von oben muss daher auf Höhe $\\ge 1$, jede von unten auf Höhe $\\le 0$ bleiben &ndash; die Lücke der Fläche $1$ lässt sich nie schliessen.",
    example: "Dasselbe Argument zeigt: $\\mathbb{1}_{\\mathbb{Q} \\cap [a,b]}$ ist auf keinem Intervall $[a,b]$ mit $a < b$ Riemann-integrierbar &ndash; das obere Integral ist $b - a$, das untere $0$.",
    counterexample: "<b>1.</b> Beschränktheit allein garantiert also keine Integrierbarkeit &ndash; die Dirichlet-Funktion ist das Standard-Gegenbeispiel.<br><b>2.</b> Aber Vorsicht mit der Intuition &bdquo;zu viele Sprünge $\\Rightarrow$ nicht integrierbar&ldquo;: Die <i>modifizierte</i> Dirichlet-Funktion (Riemann-Funktion, Übung 4.25) mit $g(\\tfrac{p}{q}) = \\tfrac1q$ und $g(x) = 0$ für irrationale $x$ ist in jedem rationalen Punkt unstetig und trotzdem Riemann-integrierbar!"
  },
  {
    id: "k4_uebung_4_22",
    title: "Übung 4.22: Ändern an endlich vielen Punkten",
    category: "4.3 Erste Integrationsgesetze",
    type: "lemma",
    front: "Was passiert mit der Riemann-Integrierbarkeit und dem Integral, wenn man eine Funktion $f \\in \\mathcal{R}([a,b])$ an <b>einem Punkt</b> (oder endlich vielen Punkten) abändert?",
    back: "<b>Übung 4.22:</b> Entsteht $f^* \\in \\mathcal{F}([a,b])$ aus $f \\in \\mathcal{R}([a,b])$ durch Abändern des Wertes an <i>nur einem Punkt</i>, so ist $f^*$ Riemann-integrierbar mit demselben Integral:<br>$$\\int_a^b f^*\\,\\mathrm{d}x = \\int_a^b f\\,\\mathrm{d}x.$$<br>Per Induktion gilt dies auch für <b>endlich viele</b> Punktänderungen.",
    meta: "Skript: Übung 4.22, S. 190 (vgl. auch Übung in Abschnitt 4.8)",
    explanation: "Einzelne Punkte haben &bdquo;Breite null&ldquo; und tragen nichts zur Fläche bei &ndash; genau wie beim Treppenintegral die Werte an den Teilungspunkten irrelevant sind (Lemma 4.5). Das Integral &bdquo;sieht&ldquo; endlich viele Ausreisser nicht.",
    example: "Die Funktion $f$ auf $[0,1]$ mit $f(x) = x^2$ für $x \\neq \\tfrac12$ und $f(\\tfrac12) = 100$ ist Riemann-integrierbar mit $\\int_0^1 f\\,\\mathrm{d}x = \\tfrac13$.",
    counterexample: "<b>1.</b> Für <b>abzählbar unendlich viele</b> Punkte ist die Aussage <i>falsch</i>: Die Dirichlet-Funktion entsteht aus der Nullfunktion durch Abändern an den abzählbar vielen Punkten $\\mathbb{Q} \\cap [0,1]$ &ndash; und ist nicht mehr integrierbar (Abschnitt 4.8, Multiple-Choice).<br><b>2.</b> Auch der Wert kann sich bei unendlich vielen Änderungen ändern, selbst wenn Integrierbarkeit erhalten bleibt: Ändert man die Nullfunktion zur Riemann-Funktion (Übung 4.25) ab, bleibt das Integral zufällig $0$ &ndash; aber das muss man dann neu <i>beweisen</i>, es folgt nicht aus Übung 4.22."
  },

  // ========================================================================
  // 4.3 ERSTE INTEGRATIONSGESETZE
  // ========================================================================
  {
    id: "k4_satz_4_19",
    title: "Satz 4.19: Linearität des Riemann-Integrals",
    category: "4.3 Erste Integrationsgesetze",
    type: "satz",
    front: "Was besagt <b>Satz 4.19</b> über die Struktur von $\\mathcal{R}([a,b])$ und die Linearität des Riemann-Integrals?",
    back: "Die Menge $\\mathcal{R}([a,b])$ der Riemann-integrierbaren Funktionen bildet einen <b>Unterraum</b> von $\\mathcal{F}([a,b])$, und das Integral ist eine <b>lineare Funktion</b> auf $\\mathcal{R}([a,b])$: Für $f_1, f_2, f \\in \\mathcal{R}([a,b])$ und $s \\in \\mathbb{R}$ ist $f_1 + f_2 \\in \\mathcal{R}([a,b])$, $sf \\in \\mathcal{R}([a,b])$ und<br>$$\\int_a^b (f_1 + f_2)(x)\\,\\mathrm{d}x = \\int_a^b f_1(x)\\,\\mathrm{d}x + \\int_a^b f_2(x)\\,\\mathrm{d}x,$$<br>$$\\int_a^b (sf)(x)\\,\\mathrm{d}x = s \\int_a^b f(x)\\,\\mathrm{d}x.$$",
    meta: "Skript: Satz 4.19, S. 188-190",
    explanation: "<b>Beweis-Prinzip:</b> Alles wird auf die Treppenfunktions-Ebene zurückgespielt. Für $s \\ge 0$ gilt $s\\,\\mathcal{U}(f) \\subseteq \\mathcal{U}(sf)$ und $s\\,\\mathcal{O}(f) \\subseteq \\mathcal{O}(sf)$; mit den Rechenregeln für Suprema (Proposition 2.62/2.63) folgt $\\underline{I}(sf) = \\overline{I}(sf) = s\\int f$. Für die Summe nutzt man $\\mathcal{U}(f_1) + \\mathcal{U}(f_2) \\subseteq \\mathcal{U}(f_1 + f_2)$ und $\\mathcal{O}(f_1) + \\mathcal{O}(f_2) \\subseteq \\mathcal{O}(f_1+f_2)$ (Gl. 4.3); der Fall $s < 0$ geht analog, da sich alle Abschätzungen umkehren (Übung 4.20).",
    example: "$\\int_1^2 (x^4 + 5x^2 - x + 1)\\,\\mathrm{d}x = \\int_1^2 x^4\\,\\mathrm{d}x + 5\\int_1^2 x^2\\,\\mathrm{d}x - \\int_1^2 x\\,\\mathrm{d}x + 1 = \\tfrac{521}{30}$ (Beispiel 4.40) &ndash; Linearität zerlegt das Polynom in Monom-Integrale.",
    counterexample: "<b>1.</b> In den Inklusionen $\\mathcal{U}(f_1) + \\mathcal{U}(f_2) \\subseteq \\mathcal{U}(f_1+f_2)$ muss <i>keine Gleichheit</i> gelten (Übung 4.21): Es gibt Untersummen von $f_1 + f_2$, die sich nicht als Summe einzelner Untersummen schreiben lassen.<br><b>2.</b> $\\mathcal{R}([a,b])$ ist zwar ein Vektorraum, aber die Umkehrung der Summenregel ist falsch: Aus $f_1 + f_2 \\in \\mathcal{R}$ folgt nicht $f_1, f_2 \\in \\mathcal{R}$. Beispiel: $f_1 = \\mathbb{1}_{\\mathbb{Q} \\cap [0,1]}$ und $f_2 = -f_1$ sind beide nicht integrierbar, ihre Summe $0$ schon."
  },
  {
    id: "k4_uebung_4_23",
    title: "4.3.2 & Übung 4.23: Positivteil und Negativteil",
    category: "4.3 Erste Integrationsgesetze",
    type: "definition",
    front: "Definiere <b>Positivteil $f^+$</b>, <b>Negativteil $f^-$</b> und <b>Absolutbetrag $|f|$</b> einer Funktion $f \\in \\mathcal{F}([a,b])$ und nenne ihre Beziehungen (Übung 4.23).",
    back: "Für $x \\in [a,b]$:<br>$$f^+(x) = \\max\\{0, f(x)\\}, \\quad f^-(x) = \\max\\{0, -f(x)\\},$$<br>$$|f|(x) = \\max\\{f(x), -f(x)\\} = |f(x)|.$$<br><b>Beziehungen (Übung 4.23):</b><br>$$f = f^+ - f^-, \\quad |f| = f^+ + f^-, \\quad f^+ = \\frac{|f| + f}{2}, \\quad f^- = \\frac{|f| - f}{2}.$$",
    meta: "Skript: Abschnitt 4.3.2 & Übung 4.23, S. 190",
    explanation: "Diese Zerlegung ist ein Standard-Trick der Analysis: Beweise werden erst für nicht-negative Funktionen geführt und dann via $f = f^+ - f^-$ auf beliebige Funktionen übertragen. Im Beweis von Satz 4.24 (iii) zeigt man zuerst, dass $f^+$ integrierbar ist, und erhält daraus $|f| = 2f^+ - f$ mittels Linearität.<br><br><b>Achtung Vorzeichen:</b> $f^-$ ist als $\\max\\{0, -f\\}$ definiert und damit selbst $\\ge 0$ &ndash; der Negativteil ist eine <i>nicht-negative</i> Funktion!",
    example: "$f(x) = -3$: $f^+(x) = 0$, $f^-(x) = 3$. Probe: $f = 0 - 3 = -3$, $|f| = 0 + 3 = 3$. Für $f(x) = \\sin x$ schneidet $f^+$ die negativen Bögen ab und $f^-$ klappt sie nach oben.",
    counterexample: "<b>1.</b> Häufiger Fehler: $f^-(x) = \\min\\{0, f(x)\\}$ wäre <i>falsch</i> (das wäre $-f^-$). Mit dieser Variante würde $f^+ + f^- = f \\neq |f|$ gelten.<br><b>2.</b> Es gilt <i>nicht</i> $\\int_a^b |f|\\,\\mathrm{d}x = \\big|\\int_a^b f\\,\\mathrm{d}x\\big|$: Für $f$ mit $\\int_0^2 f = 0$, aber $f = 1$ auf $(0,1)$, $f = -1$ auf $(1,2)$ ist $\\int|f| = 2 \\neq 0$."
  },
  {
    id: "k4_satz_4_24",
    title: "Satz 4.24: Monotonie & Dreiecksungleichung",
    category: "4.3 Erste Integrationsgesetze",
    type: "satz",
    front: "Nenne die <b>drei Monotonie-Eigenschaften</b> des Riemann-Integrals aus Satz 4.24, insbesondere die <b>Dreiecksungleichung</b>.",
    back: "Für $f_1, f_2 \\in \\mathcal{R}([a,b])$ gilt:<br>(i) Falls $f_1 \\ge 0$, so ist $\\int_a^b f_1(x)\\,\\mathrm{d}x \\ge 0$.<br>(ii) Falls $f_1 \\le f_2$, so gilt $\\int_a^b f_1(x)\\,\\mathrm{d}x \\le \\int_a^b f_2(x)\\,\\mathrm{d}x$.<br>(iii) $|f_1|$ ist Riemann-integrierbar auf $[a,b]$ und es gilt die <b>Dreiecksungleichung</b><br>$$\\left| \\int_a^b f_1(x)\\,\\mathrm{d}x \\right| \\le \\int_a^b |f_1(x)|\\,\\mathrm{d}x.$$",
    meta: "Skript: Satz 4.24, S. 190-192",
    explanation: "<b>Warum &bdquo;Dreiecksungleichung&ldquo;?</b> (iii) ist die &bdquo;kontinuierliche Version&ldquo; der verallgemeinerten Dreiecksungleichung $|\\sum_i z_i| \\le \\sum_i |z_i|$: Das Integral ist ein Grenzfall von Summen. $\\int f$ misst <i>Netto</i>-Fläche (Vorzeichen löschen sich aus), $\\int |f|$ die <i>Gesamt</i>-Fläche.<br><br><b>Beweisskizze (iii):</b> $s \\le t \\Rightarrow t^+ - s^+ \\le t - s$, also $o^+ - u^+ \\le o - u$ für einquetschende Treppen; mit Prop. 4.12 (iii) ist $f^+$ integrierbar, dann $|f| = 2f^+ - f$ (Satz 4.19), und aus $\\pm f \\le |f|$ folgt die Ungleichung via (ii).",
    example: "$f(x) = \\sin x$ auf $[0, 2\\pi]$ (sobald verfügbar): $\\int_0^{2\\pi} \\sin x\\,\\mathrm{d}x = 0$, aber $\\int_0^{2\\pi} |\\sin x|\\,\\mathrm{d}x = 4$ &ndash; die Ungleichung $0 \\le 4$ ist strikt. Elementar: $f = 1$ auf $(0,1)$, $f = -1$ auf $(1,2)$ liefert $|0| \\le 2$.",
    counterexample: "<b>1.</b> Die Umkehrung von (i) ist falsch: $\\int_a^b f \\ge 0$ impliziert nicht $f \\ge 0$ (negative Dellen können kompensiert werden).<br><b>2.</b> Die Umkehrung von (iii) gilt nicht: Aus der Integrierbarkeit von $|f|$ folgt <i>nicht</i> die von $f$. Beispiel: $f = \\mathbb{1}_{\\mathbb{Q} \\cap [0,1]} - \\mathbb{1}_{[0,1] \\setminus \\mathbb{Q}}$ (Wert $1$ auf $\\mathbb{Q}$, $-1$ sonst) ist nicht integrierbar, aber $|f| = 1$ ist es."
  },
  {
    id: "k4_satz_4_26",
    title: "Satz 4.26: Additionseigenschaft bezüglich Intervallen",
    category: "4.3 Erste Integrationsgesetze",
    type: "satz",
    front: "Was besagt <b>Satz 4.26</b> (Additionseigenschaft bezüglich Intervallen) und welche <b>Konventionen</b> (Gl. 4.9) trifft man für Integrationsgrenzen?",
    back: "<b>Satz 4.26:</b> Seien $a < b < c$ und $f \\in \\mathcal{F}([a,c])$ mit $f_1 = f|_{[a,b]}$, $f_2 = f|_{[b,c]}$. Dann ist $f$ <i>genau dann</i> Riemann-integrierbar, wenn $f_1$ <i>und</i> $f_2$ Riemann-integrierbar sind, und in diesem Fall gilt<br>$$\\int_a^c f(x)\\,\\mathrm{d}x = \\int_a^b f_1(x)\\,\\mathrm{d}x + \\int_b^c f_2(x)\\,\\mathrm{d}x.$$<br><b>Konventionen (4.9):</b><br>$$\\int_b^a f\\,\\mathrm{d}x = -\\int_a^b f\\,\\mathrm{d}x \\quad \\text{und} \\quad \\int_a^a f\\,\\mathrm{d}x = 0.$$<br>Damit gilt die Intervalladditivität für <b>beliebige</b> $a, b, c \\in I$ (Wichtige Übung 4.27).",
    meta: "Skript: Satz 4.26, Gl. (4.9), Übung 4.27, S. 193-194",
    explanation: "Geometrisch: Flächen werden aneinandergeklebt. Wichtig ist, dass der Satz eine <i>Äquivalenz</i> ist &ndash; Integrierbarkeit auf dem grossen Intervall ist gleichwertig zur Integrierbarkeit auf beiden Teilen. Beweisidee: Für Treppenfunktionen zerschneidet man die Zerlegung bei $b$ (Gl. 4.4/4.5); allgemein überträgt sich das auf $\\mathcal{U}(f) = \\mathcal{U}(f_1) + \\mathcal{U}(f_2)$ und damit $\\underline{I}(f) = \\underline{I}(f_1) + \\underline{I}(f_2)$ sowie analog für $\\overline{I}$. Die Vorzeichenkonvention macht die $x$-Achse zum &bdquo;gerichteten Weg&ldquo;.",
    example: "$\\int_3^1 f\\,\\mathrm{d}x = -\\int_1^3 f\\,\\mathrm{d}x$ und z.B. $\\int_0^2 f = \\int_0^5 f + \\int_5^2 f$ &ndash; die Additivität $\\int_\\alpha^\\beta + \\int_\\beta^\\gamma = \\int_\\alpha^\\gamma$ gilt dank (4.9) für jede Reihenfolge der Punkte.",
    counterexample: "<b>1.</b> Ohne die Konvention (4.9) wäre $\\int_a^b + \\int_b^c = \\int_a^c$ für $b \\notin [a,c]$ schlicht falsch bzw. sinnlos &ndash; die Konvention ist genau so gemacht, dass keine Fallunterscheidung nötig ist.<br><b>2.</b> Stückweises Zusammensetzen erhält Integrierbarkeit, aber nicht Stetigkeit: $f = \\mathbb{1}$ auf $[0,1]$, $f = 0$ auf $(1,2]$ ist integrierbar mit $\\int_0^2 f = 1$, obwohl $f$ bei $x = 1$ springt &ndash; Integrierbarkeit ist eine viel schwächere Eigenschaft als Stetigkeit."
  },
  {
    id: "k4_uebung_4_28",
    title: "Übung 4.28: Stetigkeit des partikulären Integrals",
    category: "4.3 Erste Integrationsgesetze",
    type: "lemma",
    front: "Was besagt Übung 4.28 über das <b>partikuläre Integral</b> $x \\mapsto \\int_a^x f(t)\\,\\mathrm{d}t$ einer Riemann-integrierbaren Funktion?",
    back: "Sei $a < b$ und $f: [a,b] \\to \\mathbb{R}$ Riemann-integrierbar. Dann definiert das <b>partikuläre Integral</b><br>$$F: x \\in [a,b] \\mapsto \\int_a^x f(t)\\,\\mathrm{d}t$$<br>eine <b>stetige</b> reellwertige Funktion auf $[a,b]$. Die Übung fragt weiter: $F$ ist sogar <b>Lipschitz-stetig</b> (und damit gleichmässig stetig).",
    meta: "Skript: Übung 4.28, S. 194",
    explanation: "Da $f$ integrierbar ist, ist $f$ beschränkt, etwa $|f| \\le M$. Für $x < y$ gilt dann mit Intervalladditivität und Dreiecksungleichung:<br>$$|F(y) - F(x)| = \\left|\\int_x^y f(t)\\,\\mathrm{d}t\\right| \\le \\int_x^y |f(t)|\\,\\mathrm{d}t \\le M \\cdot |y - x|.$$<br>Die aufgesammelte Fläche kann bei kleiner Verschiebung von $x$ also keinen Sprung machen &ndash; <b>Integrieren glättet</b>.",
    example: "$f(x) = \\operatorname{sgn}(x)$ auf $[-1,1]$ ist unstetig bei $0$, aber $F(x) = \\int_{-1}^x \\operatorname{sgn}(t)\\,\\mathrm{d}t = |x| - 1$ ist stetig (sogar Lipschitz mit Konstante $1$). Der Sprung des Integranden wird zum Knick der Integralfunktion.",
    counterexample: "<b>1.</b> $F$ ist im Allgemeinen <i>nicht differenzierbar</i>: Beim obigen Beispiel hat $F(x) = |x| - 1$ bei $x = 0$ einen Knick &ndash; Stetigkeit von $F$ ja, Ableitung nein (das klärt erst der Fundamentalsatz in Kapitel 9 unter Stetigkeitsannahmen an $f$).<br><b>2.</b> Ohne Beschränktheit bricht das Argument zusammen: Für unbeschränkte Integranden (die hier gar nicht zugelassen sind) wäre keine Lipschitz-Schranke $M$ verfügbar."
  },

  // ========================================================================
  // 4.4 ANWENDUNGEN
  // ========================================================================
  {
    id: "k4_def_4_29",
    title: "Definition 4.29: Additive Intervallfunktion",
    category: "4.4 Anwendungen",
    type: "definition",
    front: "Wann heisst eine Funktion $\\mathcal{I}: (\\alpha,\\beta) \\in [a,b]^2 \\mapsto \\mathcal{I}(\\alpha,\\beta) \\in \\mathbb{R}$ eine <b>additive Intervallfunktion</b> auf $[a,b]$?",
    back: "$\\mathcal{I}$ heisst <b>additive Intervallfunktion</b> auf $[a,b]$, falls:<br>(i) Für alle $\\alpha \\in [a,b]$ gilt $\\mathcal{I}(\\alpha, \\alpha) = 0$.<br>(ii) Für alle $\\alpha, \\beta \\in [a,b]$ gilt $\\mathcal{I}(\\alpha, \\beta) = -\\mathcal{I}(\\beta, \\alpha)$.<br>(iii) Für alle $\\alpha, \\beta, \\gamma \\in [a,b]$ gilt $\\mathcal{I}(\\alpha,\\beta) + \\mathcal{I}(\\beta,\\gamma) = \\mathcal{I}(\\alpha,\\gamma)$.",
    meta: "Skript: Definition 4.29, S. 195",
    explanation: "Das abstrahiert genau die Eigenschaften, die das bestimmte Integral nach Satz 4.26 und den Konventionen (4.9) besitzt. Äquivalent kann man $\\mathcal{I}$ als Funktion $\\mathcal{J}$ auf den nicht-leeren Teilintervallen von $[a,b]$ auffassen mit $\\mathcal{J}([\\alpha,\\alpha]) = 0$ und $\\mathcal{J}([\\alpha,\\beta] \\cup [\\beta,\\gamma]) = \\mathcal{J}([\\alpha,\\beta]) + \\mathcal{J}([\\beta,\\gamma])$ (Gl. 4.10) &ndash; daher der Name &bdquo;additiv&ldquo;.",
    example: "Für jede Riemann-integrierbare Funktion $f: [a,b] \\to \\mathbb{R}$ ist $\\mathcal{I}(\\alpha,\\beta) = \\int_\\alpha^\\beta f(x)\\,\\mathrm{d}x$ eine additive Intervallfunktion (Gl. 4.11, via Satz 4.26 und Übung 4.27). Physikalisch: $\\mathcal{I}(\\alpha,\\beta)$ = Masse des Stababschnitts $[\\alpha,\\beta]$.",
    counterexample: "<b>1.</b> Nicht jede additive Intervallfunktion ist von der Form $\\int_\\alpha^\\beta f\\,\\mathrm{d}x$ &ndash; das Skript merkt dies explizit an; erst die Zusatzbedingung aus Proposition 4.30 erzwingt die Integraldarstellung.<br><b>2.</b> $\\mathcal{I}(\\alpha,\\beta) = (\\beta - \\alpha)^2$ ist <i>keine</i> additive Intervallfunktion: (iii) verlangt $(\\beta-\\alpha)^2 + (\\gamma-\\beta)^2 = (\\gamma-\\alpha)^2$, was z.B. für $\\alpha=0, \\beta=1, \\gamma=2$ falsch ist ($1 + 1 \\neq 4$); auch (ii) scheitert, da Quadrate nie negativ sind."
  },
  {
    id: "k4_prop_4_30",
    title: "Proposition 4.30: Charakterisierung via Einschliessung",
    category: "4.4 Anwendungen",
    type: "proposition",
    front: "Unter welcher Bedingung ist eine additive Intervallfunktion $\\mathcal{I}$ nach <b>Proposition 4.30</b> zwingend das Riemann-Integral einer Funktion $f$?",
    back: "Seien $a < b$, $f: [a,b] \\to \\mathbb{R}$ Riemann-integrierbar und $\\mathcal{I}$ eine additive Intervallfunktion auf $[a,b]$. Gilt<br>$$(\\beta - \\alpha) \\inf_{x \\in (\\alpha,\\beta)} f(x) \\;\\le\\; \\mathcal{I}(\\alpha,\\beta) \\;\\le\\; (\\beta - \\alpha) \\sup_{x \\in (\\alpha,\\beta)} f(x)$$<br>für alle $\\alpha < \\beta$ in $[a,b]$ (Gl. 4.12), dann ist<br>$$\\mathcal{I}(\\alpha,\\beta) = \\int_\\alpha^\\beta f(x)\\,\\mathrm{d}x \\quad \\text{für alle } \\alpha, \\beta \\in [a,b].$$",
    meta: "Skript: Proposition 4.30, S. 195-196",
    explanation: "<b>Beweisidee:</b> Für eine Treppenfunktion $u \\le f$ mit Konstanzwerten $c_k$ gilt $c_k \\le \\inf_{(x_{k-1},x_k)} f$; Additivität von $\\mathcal{I}$ liefert $\\int_\\alpha^\\beta u\\,\\mathrm{d}x \\le \\sum_k \\mathcal{I}(x_{k-1},x_k) = \\mathcal{I}(\\alpha,\\beta)$, analog von oben. Also $\\underline{I} \\le \\mathcal{I}(\\alpha,\\beta) \\le \\overline{I}$, und da $f$ Riemann-integrierbar ist, bleibt nur der eine Wert $\\int_\\alpha^\\beta f\\,\\mathrm{d}x$.<br><br><b>Bedeutung:</b> Die Proposition ist der <i>Wegweiser für Anwendungen</i> &ndash; jede Grösse, die intervallweise additiv ist und sich durch $\\inf$ und $\\sup$ der Dichte abschätzen lässt, <i>muss</i> das Integral der Dichte sein.",
    example: "<b>Masse eines Stabes</b> (4.4.3): Dichte $\\rho(x)$ in kg/m $\\Rightarrow$ $m = \\int_a^b \\rho(x)\\,\\mathrm{d}x$. <b>Weitere Anwendungen:</b> Flächeninhalt unter dem Graphen (4.4.2), Gesamtmoment $M(a,b) = \\int_a^b \\rho(x)\\,g\\,x\\,\\mathrm{d}x$ und Schwerpunkt $x_0 = \\frac{1}{m}\\int_a^b \\rho(x)\\,x\\,\\mathrm{d}x$ (4.4.3), geleistete Arbeit/Energie $\\int_a^b f(t)\\,\\mathrm{d}t$ aus der Leistung $f(t)$ (4.4.4).",
    counterexample: "<b>1.</b> Ohne (4.12) ist die Schlussfolgerung falsch: $\\mathcal{I}(\\alpha,\\beta) = 0$ für alle $\\alpha,\\beta$ ist additiv, erfüllt aber (4.12) für $f = 1$ nicht &ndash; und ist auch nicht $\\int_\\alpha^\\beta 1\\,\\mathrm{d}x = \\beta - \\alpha$.<br><b>2.</b> Die Momentfunktion $M(\\alpha,\\beta)$ aus 4.4.3 erfüllt (4.12) bezüglich $\\rho$ <i>nicht</i> direkt (sie hat die Form $g\\alpha\\inf\\{\\rho\\}(\\beta-\\alpha) \\le M \\le g\\beta\\sup\\{\\rho\\}(\\beta-\\alpha)$) &ndash; das Skript passt den Beweis mit der Stetigkeit von $x \\mapsto x$ an. Die Voraussetzungen muss man also wirklich prüfen, nicht nur die Additivität."
  },

  // ========================================================================
  // 4.5 INTEGRIERBARKEIT MONOTONER FUNKTIONEN
  // ========================================================================
  {
    id: "k4_satz_4_31",
    title: "Satz 4.31: Integrierbarkeit monotoner Funktionen",
    category: "4.5 Integrierbarkeit monotoner Funktionen",
    type: "satz",
    front: "Was besagt <b>Satz 4.31</b> über monotone Funktionen, und wie funktioniert der Beweis?",
    back: "<b>Satz 4.31:</b> Jede monotone Funktion in $\\mathcal{F}([a,b])$ ist Riemann-integrierbar.<br><br><b>Beweis (für $f$ monoton wachsend):</b> Wähle die äquidistante Zerlegung $x_k = a + \\frac{b-a}{n}k$ und die Treppenfunktionen $u, o$ mit $u = f(x_{k-1})$ und $o = f(x_k)$ auf $(x_{k-1}, x_k)$ (links- bzw. rechtsseitiger Wert). Wegen Monotonie gilt $u \\le f \\le o$, und mit Teleskopsumme:<br>$$\\int_a^b (o-u)\\,\\mathrm{d}x = \\sum_{k=1}^n \\big(f(x_k) - f(x_{k-1})\\big)\\frac{b-a}{n} = \\frac{b-a}{n}\\big(f(b) - f(a)\\big).$$<br>Nach dem Archimedischen Prinzip wird dies $< \\varepsilon$ für grosses $n$; Prop. 4.12 (iii) schliesst den Beweis. (Monoton fallend: wende das Resultat auf $-f$ an, Satz 4.19.)",
    meta: "Skript: Satz 4.31, S. 199-200",
    explanation: "Die Differenz von Ober- und Untertreppe besteht aus $n$ Rechtecken, die man übereinandergestapelt in ein einziges Rechteck der Breite $\\frac{b-a}{n}$ und Höhe $f(b) - f(a)$ schieben kann &ndash; und dessen Fläche schrumpft mit $n \\to \\infty$ gegen null. Monotonie ersetzt hier jede Stetigkeitsannahme: Die Funktion darf beliebig viele Sprünge haben!",
    example: "<b>1.</b> $x \\mapsto \\sqrt{1 - x^2}$ auf $[0,1]$ ist monoton fallend, also Riemann-integrierbar (Übung 4.32, Kreisfunktion).<br><b>2.</b> Die Gauss-Abbildung $g(x) = \\{\\tfrac1x\\}$ (gebrochener Anteil) für $x \\in (0,1]$, $g(0) = 0$, ist Riemann-integrierbar, obwohl sie abzählbar unendlich viele Sprungstellen bei $\\tfrac1n$ hat (Übung 4.36) &ndash; sie ist auf jedem $(\\tfrac{1}{n+1}, \\tfrac{1}{n})$ monoton.",
    counterexample: "<b>1.</b> Monotonie ist hinreichend, aber nicht notwendig: $x^2$ auf $[-1,1]$ ist nicht monoton und trotzdem integrierbar.<br><b>2.</b> Beschränktheit allein (ohne Monotonie) genügt nicht &ndash; die Dirichlet-Funktion ist beschränkt, in keinem Teilintervall monoton und nicht integrierbar."
  },
  {
    id: "k4_def_4_33_korollar_4_34",
    title: "Definition 4.33 & Korollar 4.34: Stückweise Monotonie",
    category: "4.5 Integrierbarkeit monotoner Funktionen",
    type: "definition",
    front: "Wann heisst $f \\in \\mathcal{F}([a,b])$ <b>stückweise monoton</b>, und was besagt <b>Korollar 4.34</b>?",
    back: "<b>Definition 4.33:</b> $f$ heisst <b>stückweise monoton</b>, falls es eine Zerlegung $\\mathfrak{Z} = \\{a = x_0 < \\dots < x_n = b\\}$ gibt, so dass $f|_{(x_{k-1},x_k)}$ für alle $k \\in \\{1,\\dots,n\\}$ monoton ist.<br><br><b>Korollar 4.34:</b> Jede stückweise monotone, <i>beschränkte</i> Funktion in $\\mathcal{F}([a,b])$ ist Riemann-integrierbar.<br><br>(Beweis via Satz 4.31 auf jedem Teilintervall, Satz 4.26 zum Zusammenkleben und Übung 4.22 für die Randpunkte &ndash; Übung 4.35.)",
    meta: "Skript: Definition 4.33, Korollar 4.34, Übung 4.35, S. 200",
    explanation: "Stückweise Monotonie deckt fast alle &bdquo;in der Praxis vorkommenden&ldquo; Funktionen ab. Insbesondere: Jedes Monom $x^d$ ist stückweise monoton (für $a < 0 < b$ zerlege bei $0$), also integrierbar &ndash; und mit Linearität (Satz 4.19) per Induktion <b>jedes Polynom</b>.",
    example: "$f(x) = x^2$ auf $[-1, 2]$: Mit $\\mathfrak{Z} = \\{-1 < 0 < 2\\}$ ist $f$ auf $(-1,0)$ monoton fallend und auf $(0,2)$ monoton wachsend $\\Rightarrow$ stückweise monoton $\\Rightarrow$ Riemann-integrierbar.",
    counterexample: "<b>1.</b> Die <i>Beschränktheit</i> in Korollar 4.34 ist wesentlich und folgt nicht aus stückweiser Monotonie: $f(x) = \\tfrac1x$ für $x \\in (0,1]$, $f(0) = 0$, ist auf $(0,1)$ monoton, aber unbeschränkt und damit nicht Riemann-integrierbar.<br><b>2.</b> Nicht jede integrierbare Funktion ist stückweise monoton: Die Riemann-Funktion (Übung 4.25) ist in keinem Teilintervall monoton, aber integrierbar. Auch $x \\mapsto x \\sin(\\tfrac1x)$ oszilliert nahe $0$ unendlich oft &ndash; keine endliche Zerlegung in Monotoniestücke, aber (als stetige Funktion, Satz 4.42) integrierbar."
  },

  // ========================================================================
  // 4.6 INTEGRATION VON POLYNOMEN
  // ========================================================================
  {
    id: "k4_satz_4_37",
    title: "Satz 4.37: Integration von Polynomen",
    category: "4.6 Integration von Polynomen",
    type: "satz",
    front: "Was besagt <b>Satz 4.37</b> über die Riemann-Integrierbarkeit von Polynomen, und wie lautet die Formel für Monome $x^d$?",
    back: "Die Einschränkung einer reellen Polynomfunktion auf $[a,b]$ ist Riemann-integrierbar. Für alle Monome $x^d$ mit $d \\in \\mathbb{N}_0$ gilt<br>$$\\int_a^b x^d\\,\\mathrm{d}x = \\frac{1}{d+1}\\left(b^{d+1} - a^{d+1}\\right).$$",
    meta: "Skript: Satz 4.37, S. 202-203",
    explanation: "<b>Beweisidee (Fall $0 = a < b$):</b> $x^d$ ist auf $[0,b]$ monoton wachsend; mit äquidistanter Zerlegung $x_k = \\frac{k}{n}b$ erhält man (Gl. 4.13)<br>$$\\frac{b^{d+1}}{n^{d+1}} \\sum_{k=1}^{n-1} k^d \\le \\int_0^b x^d\\,\\mathrm{d}x \\le \\frac{b^{d+1}}{n^{d+1}} \\sum_{k=1}^{n} k^d.$$<br>Die Potenzsummenformel $\\sum_{k=1}^n k^d = \\frac{n^{d+1}}{d+1} + c_d n^d + \\dots + c_0$ (Proposition 3.32!) quetscht beide Seiten gegen $\\frac{b^{d+1}}{d+1}$; das Archimedische Prinzip schliesst den Beweis. Allgemeine Grenzen via Satz 4.26 (Übung 4.38).<br><br><b>Bemerkung (Skript):</b> Satz 4.37 ist das &bdquo;kontinuierliche Analog&ldquo; zu Proposition 3.32 &ndash; und bemerkenswerterweise <i>einfacher</i>: keine unbekannten Koeffizienten $c_k$, sondern eine geschlossene Formel.",
    example: "<b>Beispiel 4.40:</b> Mit der Notation $[f(x)]_a^b = f(b) - f(a)$:<br>$$\\int_1^2 (x^4 + 5x^2 - x + 1)\\,\\mathrm{d}x = \\left[\\tfrac{x^5}{5}\\right]_1^2 + 5\\left[\\tfrac{x^3}{3}\\right]_1^2 - \\left[\\tfrac{x^2}{2}\\right]_1^2 + 1 = \\tfrac{521}{30}.$$<br>Auch schön (Übung 4.41): $\\int_0^1 x^m\\,\\mathrm{d}x + \\int_0^1 x^{1/m}\\,\\mathrm{d}x = 1$ &ndash; die beiden Graphen sind Spiegelbilder an der Diagonale des Einheitsquadrats.",
    counterexample: "<b>1.</b> Die Formel gilt nur für $d \\in \\mathbb{N}_0$: Für $d = -1$ wäre $\\frac{1}{d+1}$ nicht definiert &ndash; $\\int_a^b \\tfrac1x\\,\\mathrm{d}x$ führt auf den Logarithmus (Kapitel 9), nicht auf eine Potenzfunktion.<br><b>2.</b> Vorsicht bei naiver Grenzwert-Argumentation: Das Skript betont, dass in diesem Kapitel bewusst <i>ohne</i> Grenzwerte gearbeitet wird (die gibt es erst in Kapitel 6) &ndash; der Abschluss des Beweises benutzt das Archimedische Prinzip (Satz 2.68), nicht &bdquo;$n \\to \\infty$&ldquo;."
  },

  // ========================================================================
  // 4.7 INTEGRIERBARKEIT STETIGER FUNKTIONEN
  // ========================================================================
  {
    id: "k4_satz_4_42",
    title: "Satz 4.42: Integrierbarkeit stetiger Funktionen",
    category: "4.7 Integrierbarkeit stetiger Funktionen",
    type: "satz",
    front: "Was besagt <b>Satz 4.42</b>, und welche beiden grossen Sätze aus Kapitel 3 gehen in den Beweis ein?",
    back: "<b>Satz 4.42:</b> Eine stetige Funktion auf einem kompakten Intervall $[a,b]$ mit $a < b$ ist Riemann-integrierbar.<br><br><b>Beweis-Zutaten:</b><br>&bull; <b>Gleichmässige Stetigkeit</b> (Satz 3.75): Zu $\\varepsilon > 0$ gibt es $\\delta > 0$ mit $|x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon$ für <i>alle</i> $x, y \\in [a,b]$.<br>&bull; <b>Min/Max-Annahme</b> (Korollar 3.69): Auf jedem $[x_{k-1}, x_k]$ existieren $m_k = \\min f([x_{k-1},x_k])$ und $M_k = \\max f([x_{k-1},x_k])$.<br><br>Wählt man die Zerlegung mit Maschenweite $< \\delta$, gilt $M_k - m_k < \\varepsilon$, und die Treppen $u = m_k$, $o = M_k$ liefern<br>$$\\int_a^b (o-u)\\,\\mathrm{d}x = \\sum_{k=1}^n (M_k - m_k)\\Delta x_k < \\varepsilon(b-a),$$<br>womit Prop. 4.12 (iii) greift.",
    meta: "Skript: Satz 4.42, S. 205-206",
    explanation: "Gleichmässige Stetigkeit ist der Schlüssel: Das <i>eine</i> $\\delta$ funktioniert überall auf $[a,b]$ gleichzeitig, sodass <i>alle</i> Stufen gleichzeitig niedrig ($< \\varepsilon$) werden. Auf einem kompakten Intervall ist Stetigkeit automatisch gleichmässig &ndash; genau hier geht die Kompaktheit ein. Selbst eine &bdquo;zittrige&ldquo; stetige Funktion (Figur 4.4) wird so eingequetscht.",
    example: "Jedes Polynom, $x \\mapsto |x|$, $x \\mapsto \\sqrt{x}$ auf $[0,1]$ &ndash; alle stetig auf kompakten Intervallen, also Riemann-integrierbar. Auch $x \\mapsto x\\sin(\\tfrac1x)$ (stetig fortgesetzt durch $0$ bei $x=0$) ist integrierbar, obwohl es in keine endlich vielen Monotoniestücke zerfällt.",
    counterexample: "<b>1.</b> Stetigkeit ist hinreichend, aber nicht notwendig: Treppenfunktionen und monotone Funktionen mit Sprüngen (Satz 4.31) sind integrierbar, ohne stetig zu sein.<br><b>2.</b> Die Kompaktheit des Intervalls ist wesentlich: $f(x) = \\tfrac1x$ ist auf $(0, 1]$ stetig, aber unbeschränkt &ndash; auf dem <i>nicht kompakten</i> Definitionsbereich existiert kein Riemann-Integral. Gleichmässige Stetigkeit (und damit der Beweis) versagt dort."
  },
  {
    id: "k4_prop_4_44",
    title: "Proposition 4.44: Sandwich-Kriterium mit stetigen Funktionen",
    category: "4.7 Integrierbarkeit stetiger Funktionen",
    type: "proposition",
    front: "Wie charakterisiert <b>Proposition 4.44</b> die Riemann-Integrierbarkeit mittels <b>stetiger</b> Funktionen (Sandwich-Kriterium)?",
    back: "Eine Funktion $f \\in \\mathcal{F}([a,b])$ auf einem kompakten Intervall $[a,b]$ mit $a < b$ ist <b>genau dann</b> Riemann-integrierbar, wenn für alle $\\varepsilon > 0$ <i>stetige</i> Funktionen $f_+, f_-$ existieren mit $f_- \\le f \\le f_+$ und<br>$$\\int_a^b (f_+ - f_-)\\,\\mathrm{d}x < \\varepsilon.$$",
    meta: "Skript: Proposition 4.44, S. 206-208",
    explanation: "Bemerkenswert: Man kann Treppenfunktionen in Prop. 4.12 (iii) durch stetige Funktionen ersetzen &ndash; blockige und glatte Approximation sind gleich mächtig.<br><br><b>Beweisidee ($\\Leftarrow$):</b> Stetige $f_\\pm$ sind nach Satz 4.42 integrierbar und lassen sich selbst durch Treppen einquetschen; Kombination gibt $\\int(o - u) < 3\\varepsilon$.<br><b>($\\Rightarrow$):</b> Es genügt, eine Treppenfunktion $t$ stetig zu dominieren: Man ersetzt $t$ nahe der Teilungspunkte durch steile <i>stetige Spitzen</i> der halben Breite $\\delta$ (Figur 4.5) &ndash; stückweise linear &ndash; mit $\\int_a^b (t_+ - t)\\,\\mathrm{d}x \\le 2(M-m)\\delta n$, was mit $\\delta < \\frac{\\varepsilon}{2(M-m)n}$ beliebig klein wird.",
    example: "Die Signum-Funktion auf $[-1,1]$: Ersetze den Sprung bei $0$ durch eine steile lineare Rampe von $-1$ auf $1$ auf $[-\\delta, \\delta]$ (von oben) &ndash; die Differenzfläche $\\sim 2\\delta$ wird beliebig klein. So sieht man die Integrierbarkeit von $\\operatorname{sgn}$ auch über stetige Sandwiches.",
    counterexample: "<b>1.</b> Für die Dirichlet-Funktion scheitert auch dieses Kriterium: Jede stetige Funktion $f_+ \\ge \\mathbb{1}_{\\mathbb{Q}\\cap[0,1]}$ erfüllt $f_+ \\ge 1$ auf ganz $[0,1]$ (Stetigkeit + Dichtheit von $\\mathbb{Q}$), jede stetige $f_- \\le f$ erfüllt $f_- \\le 0$; also $\\int (f_+ - f_-) \\ge 1$.<br><b>2.</b> Die Richtung &bdquo;$f$ stetig einquetschbar $\\Rightarrow$ $f$ stetig&ldquo; ist falsch: Treppenfunktionen sind beliebig gut stetig einquetschbar, aber unstetig. Das Sandwich-Kriterium charakterisiert <i>Integrierbarkeit</i>, nicht Stetigkeit."
  },
  {
    id: "k4_uebung_4_25",
    title: "Übung 4.25: Die Riemann-Funktion (modifizierte Dirichlet-Funktion)",
    category: "4.3 Erste Integrationsgesetze",
    type: "beispiel",
    front: "Was besagt Übung 4.25 über die <b>Riemann-Funktion</b> (modifizierte Dirichlet-Funktion), und warum ist das Resultat überraschend?",
    back: "Die Funktion<br>$$g: [0,1] \\to [0,1], \\quad x \\mapsto \\begin{cases} 0 & \\text{falls } x \\text{ irrational} \\\\ \\frac{1}{q} & \\text{falls } x = \\frac{p}{q} \\text{ mit } p, q \\text{ teilerfremd} \\end{cases}$$<br>ist <b>Riemann-integrierbar</b> (mit Integral $0$).",
    meta: "Skript: Übung 4.25, S. 192",
    explanation: "<b>Warum integrierbar, obwohl überall dicht gestört?</b> Der entscheidende Unterschied zur Dirichlet-Funktion: Zu jedem $\\varepsilon > 0$ gibt es nur <i>endlich viele</i> Punkte mit $g(x) \\ge \\varepsilon$ (nämlich Brüche mit Nenner $q \\le \\tfrac1\\varepsilon$). Man deckt diese endlich vielen &bdquo;hohen Spitzen&ldquo; mit sehr schmalen Stufen ab und bleibt sonst unterhalb von $\\varepsilon$ &ndash; so wird $\\int (o - u)$ beliebig klein. Die Untersumme bleibt $0$, da die Irrationalen dicht liegen.",
    example: "$g(\\tfrac12) = \\tfrac12$, $g(\\tfrac23) = \\tfrac13$, $g(\\sqrt{2}-1) = 0$. Nur $x$ mit kleinem Nenner haben grosse Werte &ndash; der Graph ist das berühmte &bdquo;Popcorn&ldquo;-Muster.",
    counterexample: "<b>1.</b> Die (unmodifizierte) Dirichlet-Funktion $\\mathbb{1}_{\\mathbb{Q}\\cap[0,1]}$ ist dagegen <i>nicht</i> integrierbar: Dort haben <i>alle</i> rationalen Punkte den vollen Wert $1$, es gibt unendlich viele &bdquo;hohe&ldquo; Spitzen.<br><b>2.</b> Intuition &bdquo;unendlich viele Unstetigkeitsstellen $\\Rightarrow$ nicht integrierbar&ldquo; ist falsch: $g$ ist in jedem rationalen Punkt unstetig (das sind abzählbar unendlich viele, dicht!) und trotzdem integrierbar. Riemann-Integrierbarkeit toleriert &bdquo;kleine&ldquo; Mengen von Unstetigkeiten."
  }
];
