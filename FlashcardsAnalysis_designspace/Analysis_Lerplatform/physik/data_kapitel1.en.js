/* ==========================================================================
   PHYSICS I – CHAPTER 1 (English): Introduction
   Physics as a science, physical quantities, units, angles, orders of magnitude
   Script Physics I – Prof. K. Ensslin, ETH Zurich, HS 2025 (original script Prof. W. Fetscher)
   English translation of data_kapitel1.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_1 = {
  "ph1_wissenschaft": {
    title: R`Physics as a science: experiment, model, falsification`,
    category: R`1.1 Physics as a science`,
    type: "konzept",
    front: R`How does physics gain knowledge? What roles do <b>experiment</b> and <b>theory</b> play, and why can a physical theory never be finally <b>proved</b>?`,
    back: R`<b>Subject:</b> Physics describes the building blocks of matter, their interactions and the phenomena that result from them, quantitatively and in mathematical language.<br><br>
<b>The only quality criterion:</b> A valid theory must agree with <i>all</i> experiments and observations.<br><br>
<b>Cycle of knowledge:</b>
<ul><li>Observation / experiment (a targeted question to nature, with disturbing effects switched off as far as possible)</li>
<li>Model or theory (rules in mathematical form)</li>
<li>Prediction of new, testable measured values</li>
<li>New experiment → confirmation <i>or</i> contradiction</li></ul>
<b>Key point:</b> A model can <b>never be proved absolutely correct</b>, only <b>falsified</b> (or recognised as incomplete). Additionally, computer simulations (“computational science”) help to treat problems that cannot be solved analytically and to develop models.`,
    meta: "Script: Section 1.1, Figs. 1.1–1.3, Summary 1.3, pp. 1–5 and 9",
    explanation: R`<b>Intuition:</b> A theory makes a <i>universal statement</i> (“in every situation, …holds”). Each experiment, however, tests only <i>one</i> case. Finitely many confirmations can never force a universal statement, whereas a single reproducible contradiction can refute it. This asymmetry is the core of falsification.<br><br>
<b>Range of validity instead of “true/false”:</b> A falsified theory does not become worthless. Newtonian mechanics is excellently confirmed for $v\ll c$ and for macroscopic bodies. Outside that range (high speeds, atomic scales, strong gravity) it is replaced by relativity theory or quantum mechanics, which contain it as a <b>limiting case</b>. Physics is therefore a hierarchy of models with known ranges of validity.<br><br>
<b>Connection to the rest of the lecture:</b> Even the “point mass” (Ch. 2) is such an idealised model. One must always ask whether the idealisation is admissible for the specific question.<br><br>
<b>On the content of the universe (Fig. 1.3):</b> Only about 4 % is known (“ordinary”) matter, about 23 % is “dark matter” (not yet directly detected) and about 73 % is “dark energy” (nature unknown). This shows how much is still open: new models are being developed right now and still have to be tested experimentally.`,
    derivation: R`Logical structure of confirmation and refutation (modus tollens):
<ol class="fc-steps">
<li>$T \Rightarrow V$<em>The theory $T$ implies a prediction $V$ (e.g. a specific measured value).</em></li>
<li>$V$ observed $\;\not\Rightarrow\; T$ true<em>A confirmed measured value makes $T$ only more credible: another theory $T'$ could also predict the same $V$.</em></li>
<li>$\neg V$ observed $\;\Rightarrow\; \neg T$<em>Contraposition: if the measurement is reproducibly and significantly away from $V$, then $T$ is false in this form, or at least incomplete.</em></li>
<li>Significance: $|x_\text{measured} - x_\text{theory}| \gg \sigma$<em>A “contradiction” counts only once the deviation is clearly larger than the measurement uncertainty $\sigma$; otherwise it cannot be statistically distinguished from chance.</em></li>
</ol>`,
    example: R`<b>Perihelion precession of Mercury:</b> Newtonian gravitation (including perturbations by the other planets) predicts a rotation of Mercury’s orbit of about $532''$ per century; about $575''$ is observed. The difference of roughly $43''$ per century lies far outside the measurement uncertainty. Newtonian theory is therefore <i>falsified</i> here, and general relativity explains exactly these $43''$.<br>
Nevertheless, satellite orbits are still calculated with Newton: within its range of validity the deviations are negligible.`,
    counterexample: R`<b>1. Not a physical statement:</b> “There is a force that in principle escapes every measurement.” No experiment can refute it, so it is not falsifiable and therefore not a physical theory.<br>
<b>2. Confirmation is not proof:</b> Thousands of falling experiments confirm $s=\tfrac12 g t^2$. They do not “prove” that this also holds with air resistance or at very great heights. There, nature does in fact deviate.`,
    pitfalls: R`<ul><li>Confusing “confirmed” with “proved”. Physics does not prove in the way mathematics does.</li>
<li>Treating a deviation as a refutation without considering the measurement uncertainty. Only significant, reproducible deviations count.</li>
<li>Forgetting the range of validity of a model (e.g. point mass for rotating bodies, Newton for $v\to c$).</li>
<li>Equating model and reality: a model is a deliberate simplification.</li></ul>`
  },

  "ph1_groesse": {
    title: R`Physical quantity: G = {G}·[G] and dimensional analysis`,
    category: R`1.2 Physical quantities`,
    type: "definition",
    front: R`What does a <b>physical quantity</b> $G$ consist of? What do $\{G\}$ and $[G]$ mean? And how can <b>dimensional considerations</b> be used to derive and check formulas?`,
    back: R`A physical quantity characterises properties and states (or changes of state) of objects. It is always the <b>product</b> of a numerical value and a unit:
$$G = \{G\}\cdot[G] \qquad (1.1)$$
<ul><li>$\{G\}$: <b>numerical value</b>, the quantitative statement: how often the comparison standard fits.</li>
<li>$[G]$: <b>unit</b>, the qualitative statement: what it is compared with.</li></ul>
Example: $\ell = 2{,}3\,\text{m}$, so $\{\ell\}=2{,}3$ and $[\ell]=\text{m}$ (Eqs. 1.2–1.5).<br><br>
Because multiplication is involved, the unit is <b>never in the plural</b> and cancels like an algebraic factor.<br><br>
<b>Dimensional analysis:</b> Both sides of a physical equation must have the same dimension. This serves to <i>check</i> formulas and to <i>derive</i> them up to dimensionless constants.`,
    meta: "Script: Section 1.2.1, Eqs. (1.1)–(1.5), p. 6; dimensional considerations: Summary 1.3",
    explanation: R`<b>Intuition:</b> The quantity $G$ itself is independent of the chosen unit; only its split into number times unit changes. If you choose a unit 1000 times smaller, the numerical value becomes 1000 times larger: $\{G\}\propto 1/[G]$.<br><br>
<b>Calculating with units:</b> Units are treated like variables: they multiply, divide and cancel. You may only add quantities of the same dimension: $2\,\text{m}+3\,\text{s}$ is meaningless.<br><br>
<b>Arguments of functions:</b> In $\sin(x)$, $e^{x}$, $\ln(x)$, $x$ must be dimensionless. That is why an oscillation always contains $\omega t$ (with $[\omega]=1/\text{s}$) or $x/\lambda$, and a damping term $e^{-t/\tau}$.<br><br>
<b>Connection:</b> Dimensional analysis is the fastest tool for checking a final formula. It finds factor errors such as $v^2$ instead of $v$, or $g$ instead of $1/g$. It does not, however, find constants such as $2\pi$ or $\tfrac12$.`,
    derivation: R`Example: period $T$ of a simple pendulum from dimensions. Possible influencing quantities: length $\ell$, mass $m$, gravitational acceleration $g$.
<ol class="fc-steps">
<li>$T = C\,\ell^{a}\,m^{b}\,g^{c}$<em>Ansatz as a power product, $C$ is a dimensionless constant.</em></li>
<li>$\text{s}^1 = \text{m}^{a}\,\text{kg}^{b}\,(\text{m}\,\text{s}^{-2})^{c} = \text{m}^{a+c}\,\text{kg}^{b}\,\text{s}^{-2c}$<em>Insert the units and sort by base units.</em></li>
<li>$\text{m}:\ a+c=0,\quad \text{kg}:\ b=0,\quad \text{s}:\ -2c=1$<em>Compare exponents: each base unit must appear equally often on both sides.</em></li>
<li>$c=-\tfrac12,\quad a=\tfrac12,\quad b=0$<em>Solve the linear system. Remarkably, the mass drops out: $T$ does not depend on $m$.</em></li>
<li>$T = C\sqrt{\ell/g}$<em>Result up to $C$. The full calculation (Ch. 9) gives $C=2\pi$ (for small amplitudes).</em></li>
</ol>`,
    example: R`<b>Changing units:</b> $v = 72\,\tfrac{\text{km}}{\text{h}} = 72\cdot\tfrac{1000\,\text{m}}{3600\,\text{s}} = 20\,\tfrac{\text{m}}{\text{s}}$. The speed $v$ stays the same; only $\{v\}$ changes from 72 to 20, because $[v]$ changes from km/h to m/s.<br><br>
<b>Checking a formula:</b> Is $s = v^2/(2a)$ (braking distance) dimensionally correct? $\frac{(\text{m/s})^2}{\text{m/s}^2} = \frac{\text{m}^2/\text{s}^2}{\text{m}/\text{s}^2}=\text{m}$ ✓.`,
    counterexample: R`<b>1. Dimensionally correct but wrong:</b> $T=\sqrt{\ell/g}$ has the correct dimension, but the factor $2\pi$ is missing. Dimensional analysis never detects dimensionless factors.<br>
<b>2. Limit of the method:</b> If there is an additional dimensionless quantity (e.g. the amplitude $\varphi_0$ of the pendulum), then $T = \sqrt{\ell/g}\,f(\varphi_0)$ with an arbitrary function $f$. The analysis alone cannot determine $f$.`,
    pitfalls: R`<ul><li>Adding or comparing quantities of different dimensions.</li>
<li>Leaving units out when substituting and guessing at the end. Always carry the units through the calculation.</li>
<li>Converting prefixes incorrectly: $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$, not $10^{-2}\,\text{m}^2$.</li>
<li>Dimensional arguments in $\sin$, $\exp$, $\ln$.</li>
<li>Writing units in the plural, or mixing up unit and symbol (e.g. “m” for mass and metre in the same calculation).</li></ul>`
  },

  "ph1_si_einheiten": {
    title: R`SI units of mechanics: second, metre, kilogram`,
    category: R`1.2 Physical quantities`,
    type: "definition",
    front: R`How are the second, the metre and the kilogram defined today in the <b>SI system</b> (MKS), and why were the old definitions abandoned?`,
    back: R`In the lecture, calculations are consistently done in <b>SI/MKS units</b> (metre, kilogram, second).
<ul><li><b>Second:</b> $1\,\text{s}$ = the duration of $9\,192\,631\,770$ periods of the radiation of a $^{133}\text{Cs}$ transition (caesium atomic clock). Previously it was defined astronomically from the length of the day.</li>
<li><b>Metre:</b> the distance that light travels in a vacuum in $\tfrac{1}{299\,792\,458}\,\text{s}$. This makes $c = 299\,792\,458\,\text{m/s}$ <i>exact</i>. Previously: the $40\,000\,000$th part of the meridian through Paris, then the Pt-Ir reference metre bar.</li>
<li><b>Kilogram:</b> since 20 May 2019 defined via Planck’s constant $h$. Previously: the Pt-Ir prototype at Sèvres (BIPM).</li></ul>
Derived units: velocity in m/s, acceleration in m/s², force $1\,\text{N}=1\,\text{kg}\,\text{m}/\text{s}^2$.`,
    meta: "Script: Section 1.2.2, pp. 6–7 (including footnotes 1 and 2)",
    explanation: R`<b>Guiding idea of the modern definitions:</b> units should not be tied to a changeable object (the Earth, a metal bar, a metal cylinder) but to <b>natural constants</b> that are the same everywhere and at all times. Then any sufficiently good laboratory can realise the unit itself.<br><br>
<b>Why no longer the length of the day?</b> The Earth does not rotate uniformly. The length of the day fluctuates seasonally by about $3\,\text{ms}$ (relatively about $3\cdot10^{-8}$; even the foliage of trees changes the Earth’s moment of inertia and thus, through conservation of angular momentum, the duration of the day). Atomic clocks, by contrast, are accurate to about $10^{-15}$.<br><br>
<b>Connection:</b> Because $c$ is exact by definition, a length measurement is today effectively a <b>time measurement</b> ($\ell = c\,t$). Mechanics needs exactly these three base units; all others (N, J, W, Pa …) are derived from them.`,
    derivation: R`How the derived units follow from the base units:
<ol class="fc-steps">
<li>$\ell = c\cdot t \;\Rightarrow\; 1\,\text{m} = c\cdot\frac{1}{299\,792\,458}\,\text{s}$<em>With the exactly fixed $c$, the metre is determined by the second.</em></li>
<li>$[v] = \frac{[\ell]}{[t]} = \frac{\text{m}}{\text{s}},\qquad [a] = \frac{[v]}{[t]} = \frac{\text{m}}{\text{s}^2}$<em>Velocity and acceleration, as time derivatives, each add a factor $1/\text{s}$ per derivative.</em></li>
<li>$[F] = [m][a] = \text{kg}\,\frac{\text{m}}{\text{s}^2} =: \text{N}$<em>Newton II ($F=ma$, Ch. 3) gives the unit of force, the newton.</em></li>
<li>$[W] = [F][\ell] = \text{N}\,\text{m} = \text{kg}\,\frac{\text{m}^2}{\text{s}^2} =: \text{J}$<em>Work = force times distance (Ch. 4) gives the joule.</em></li>
</ol>`,
    example: R`<b>Light nanosecond:</b> In $1\,\text{ns}$ light travels $c\cdot 10^{-9}\,\text{s}\approx 0{,}30\,\text{m}$. This is why GPS needs clocks with nanosecond accuracy: a timing error of $1\,\text{ns}$ means a position error of about $30\,\text{cm}$.<br><br>
<b>Conversion:</b> $1\,\text{N} = 1\,\text{kg}\cdot 1\,\text{m/s}^2$. A bar of chocolate ($100\,\text{g}$) weighs on Earth about $0{,}1\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\approx 1\,\text{N}$.`,
    counterexample: R`<b>Unstable references:</b> The kilogram prototype and its official copies drifted against each other by a few tens of micrograms over a century. One could not even say which cylinder had changed. A standard that changes itself is no good as a definition; that is precisely why the switch to $h$ was made in 2019.`,
    pitfalls: R`<ul><li>Using grams instead of kilograms: the SI base unit of mass is <b>kg</b>.</li>
<li>Using km/h without conversion in formulas with m and s (factor $3{,}6$).</li>
<li>Believing that $c$ is “measured”: since 1983 $c$ has been <i>defined</i>; what is measured is the length.</li></ul>`
  },
  "ph1_winkel": {
    title: R`Plane angle in radians and small-angle approximation`,
    category: R`1.2 Physical quantities`,
    type: "definition",
    front: R`How is the <b>plane angle</b> defined in radians? How are radians and degrees related, and which <b>approximations for small angles</b> hold (with an estimate)?`,
    back: R`<b>Definition:</b> angle = arc length divided by radius:
$$\varphi = \frac{S}{R},\qquad \text{unit: } 1\,\text{rad} \;(\text{dimensionless: m/m})$$
<b>Conversion (1.6):</b>
$$2\pi\,\text{rad} = 360^\circ,\qquad 1^\circ \approx 0{,}01745\,\text{rad},\qquad 1\,\text{rad} = \frac{180^\circ}{\pi}\approx 57{,}296^\circ$$
<b>Small angles</b> (Fig. 1.4, $H$ = tangent segment, $h$ = perpendicular to the radius):
$$\varphi \approx \frac{H}{R} = \tan\varphi \approx \sin\varphi = \frac{h}{R},\qquad \frac{h}{R}\le \varphi \le \frac{H}{R}$$`,
    meta: "Script: Section 1.2.2, Eq. (1.6), Fig. 1.4, p. 7",
    explanation: R`<b>Intuition:</b> In radians the angle measures directly “how many radii” you walk along the circle. That is why, without any conversion factor, $S = R\varphi$ and, for circular motion, $v = R\omega$ (Ch. 2).<br><br>
<b>Why radians and not degrees?</b> Only in radians do $\frac{d}{d\varphi}\sin\varphi=\cos\varphi$ and $\sin\varphi\approx\varphi$ hold. In degrees, factors of $\pi/180$ would appear everywhere.<br><br>
<b>Geometrically (Fig. 1.4):</b> The arc $S$ lies between the perpendicular $h=R\sin\varphi$ (shorter) and the tangent segment $H=R\tan\varphi$ (longer). It follows that $\sin\varphi\le\varphi\le\tan\varphi$ for $0\le\varphi<\pi/2$. As $\varphi\to0$, all three move together.<br><br>
<b>Connection:</b> The small-angle approximation turns the simple pendulum into a harmonic oscillator ($\sin\varphi\approx\varphi$, Ch. 9), and it appears in optics and in equilibrium considerations.`,
    derivation: R`How good is $\sin\varphi\approx\tan\varphi\approx\varphi$? Taylor expansion about $\varphi=0$ (Appendix 11.1.2):
<ol class="fc-steps">
<li>$\sin\varphi = \varphi - \frac{\varphi^3}{6} + \mathcal{O}(\varphi^5)$<em>Odd function, only odd powers; the coefficient comes from $\sin'''(0) = -1$, divided by $3!$.</em></li>
<li>$\tan\varphi = \varphi + \frac{\varphi^3}{3} + \mathcal{O}(\varphi^5)$<em>Also odd, but the correction has the opposite sign: $\tan$ lies above $\varphi$.</em></li>
<li>$\frac{\varphi-\sin\varphi}{\varphi}\approx\frac{\varphi^2}{6},\qquad \frac{\tan\varphi-\varphi}{\varphi}\approx\frac{\varphi^2}{3}$<em>Relative error of the approximation: grows <b>quadratically</b> with the angle.</em></li>
<li>$\frac{\varphi^2}{6} < 1\,\% \iff \varphi < 0{,}245\,\text{rad}\approx 14^\circ$<em>Rule of thumb: up to about $14^\circ$, $\sin\varphi\approx\varphi$ is accurate to 1 %; $\tan\varphi\approx\varphi$ is accurate to 1 % only up to about $10^\circ$.</em></li>
</ol>`,
    example: R`$\varphi = 10^\circ = 0{,}1745\,\text{rad}$: $\sin\varphi = 0{,}1736$ (deviation $0{,}5\,\%$), $\tan\varphi = 0{,}1763$ ($1{,}0\,\%$). This matches $\varphi^2/6 = 0{,}51\,\%$ and $\varphi^2/3 = 1{,}0\,\%$.<br><br>
<b>Angular diameter of the Moon:</b> $D\approx 3{,}5\cdot10^{6}\,\text{m}$, distance $R\approx 3{,}8\cdot10^{8}\,\text{m}$, so $\varphi\approx D/R\approx 9{,}2\cdot10^{-3}\,\text{rad}\approx 0{,}53^\circ$. For angles this small the approximation is practically exact.`,
    counterexample: R`<b>Large angles:</b> At $\varphi = 30^\circ = 0{,}524\,\text{rad}$, $\sin\varphi = 0{,}5$, i.e. a $4{,}5\,\%$ deviation. At $60^\circ$: $\sin\varphi = 0{,}866$ against $\varphi = 1{,}047$, i.e. $17\,\%$ too small. A pendulum displaced by $60^\circ$ is therefore clearly <i>not</i> harmonic: its period is about $7\,\%$ longer than $2\pi\sqrt{\ell/g}$.`,
    pitfalls: R`<ul><li>Applying $\sin\varphi\approx\varphi$ with $\varphi$ in <b>degrees</b>: $\sin 10^\circ\neq 10$!</li>
<li>Using the calculator in the wrong mode (DEG/RAD).</li>
<li>Confusing $\omega$ (rad/s) with the frequency $\nu$ (Hz): $\omega = 2\pi\nu$.</li>
<li>Using the approximation unchecked for large angles. The error grows like $\varphi^2$.</li></ul>`
  },
  "ph1_groessenordnungen": {
    title: R`Time and length scales, orders of magnitude and estimates`,
    category: R`1.2 Physical quantities`,
    type: "konzept",
    front: R`Across how many <b>powers of ten</b> do the time and length scales of nature extend? Name typical values and explain how to estimate quickly using <b>orders of magnitude</b>.`,
    back: R`<b>Times</b> (script pp. 7–8):
<ul><li>Light crossing a proton: $10^{-24}\,\text{s}$; shortest directly measurable time: $10^{-20}\,\text{s}$</li>
<li>Light oscillation: $10^{-15}\,\text{s}$; sound oscillation: $10^{-3}\,\text{s}$</li>
<li>Day: $8{,}64\cdot10^{4}\,\text{s}$; year: $\approx\pi\cdot10^{7}\,\text{s}$</li>
<li>Age of the Earth: $1{,}4\cdot10^{17}\,\text{s}$; age of the universe: $4\cdot10^{17}\,\text{s}$; lifetime of the proton: $>5\cdot10^{32}\,\text{s}$</li></ul>
<b>Lengths</b> (about 40 powers of ten):
<ul><li>Proton $10^{-15}\,\text{m}$, atom $10^{-10}\,\text{m}$, visible light $(4\text{–}7)\cdot10^{-7}\,\text{m}$</li>
<li>Human $\sim1{,}7\,\text{m}$, Earth $1{,}3\cdot10^{7}\,\text{m}$, solar system $10^{13}\,\text{m}$</li>
<li>Galaxy $10^{21}\,\text{m}$, universe $10^{26}\,\text{m}$</li></ul>
<b>Measurement precision:</b> quartz clock relative $\approx10^{-7}$, hydrogen maser $\approx10^{-15}$ (1 s in $3\cdot10^{7}$ years).`,
    meta: "Script: Section 1.2.2, pp. 7–8",
    explanation: R`<b>Intuition:</b> Physics covers phenomena whose scales differ by factors such as $10^{40}$. That is why one thinks in <b>orders of magnitude</b> (exponents) rather than exact digits. For a first assessment, often only the question matters whether something is $10^{-3}$ or $10^{3}$.<br><br>
<b>Estimating (“Fermi calculation”):</b> One breaks an unknown quantity into factors whose order of magnitude one knows, multiplies them and rounds roughly. The errors of the factors often partly cancel out.<br><br>
<b>Relative accuracy:</b> What matters is the error <i>relative</i> to the quantity: $\Delta T/T$. A quartz clock that is off by “a few seconds per year” has $\Delta T/T\approx 3\,\text{s}/(3\cdot10^7\,\text{s})\approx 10^{-7}$.<br><br>
<b>Connection:</b> Knowing typical orders of magnitude helps to check final results for plausibility: a falling speed of $10^{5}\,\text{m/s}$ from a height of 10 m is obviously wrong.`,
    derivation: R`Two useful rules of thumb, step by step:
<ol class="fc-steps">
<li>$1\,\text{day} = 24\cdot 3600\,\text{s} = 86\,400\,\text{s} = 8{,}64\cdot 10^{4}\,\text{s}$<em>Hours times seconds per hour.</em></li>
<li>$1\,\text{year} = 365{,}25\cdot 8{,}64\cdot10^{4}\,\text{s} = 3{,}156\cdot10^{7}\,\text{s}$<em>Mean calendar year including leap years.</em></li>
<li>$\pi\cdot10^{7}\,\text{s} = 3{,}142\cdot10^{7}\,\text{s}\;\Rightarrow\;$ deviation $0{,}45\,\%$<em>Hence the mnemonic “one year ≈ π·10⁷ s”.</em></li>
<li>$\frac{\Delta T}{T} = \frac{1\,\text{s}}{3\cdot10^{7}\cdot\pi\cdot10^{7}\,\text{s}}\approx 10^{-15}$<em>Relative accuracy of the hydrogen maser (1 s error in 3·10⁷ years).</em></li>
</ol>`,
    example: R`<b>Heartbeats in a lifetime:</b> $80\,\text{a}\cdot\pi\cdot10^{7}\,\tfrac{\text{s}}{\text{a}}\cdot 1{,}2\,\tfrac{1}{\text{s}}\approx 3\cdot10^{9}$. The order of magnitude “a few billion” is right, even though each factor is only roughly known.<br><br>
<b>Age of the universe:</b> $4\cdot10^{17}\,\text{s}\,/\,(\pi\cdot10^{7}\,\text{s/a})\approx 1{,}3\cdot10^{10}\,\text{a}$, i.e. about 13 billion years.`,
    counterexample: R`<b>Spurious precision:</b> “Diameter of the universe $= 10^{26}\,\text{m}$” is an order-of-magnitude statement, not a precise number. Turning it into “$1{,}000\cdot10^{26}\,\text{m}$” pretends to an accuracy that does not exist. The number of significant digits must match the accuracy.`,
    pitfalls: R`<ul><li>Adding or subtracting powers of ten incorrectly when multiplying or dividing.</li>
<li>Confusing absolute and relative accuracy.</li>
<li>Giving too many decimal places in estimates.</li>
<li>Not checking results for plausibility (“Is this order of magnitude realistic?”).</li></ul>`
  },

  "ph1_aufgabenstrategie": {
    title: R`Strategy for exam problems: from the problem to a checked solution`,
    category: R`1.2 Physical quantities`,
    type: "konzept",
    front: R`What scheme should be followed to solve a physics exam problem systematically? Which <b>checks</b> (units, limiting cases, order of magnitude, symmetry) should always be done at the end? Show them for $a = g\frac{m_1-m_2}{m_1+m_2}$ (Atwood).`,
    back: R`<b>Solution scheme:</b>
<ol><li><b>Sketch the situation</b>, note the given and sought quantities (with units).</li>
<li><b>Choose a model:</b> point mass or rigid body? Friction? Small-angle approximation? Ideal gas? Write the assumptions down.</li>
<li><b>Choose the physical principle:</b> Newton II (forces, free-body diagram), energy conservation, momentum conservation, angular momentum conservation, laws of thermodynamics (cf. the card “Which conservation law when?”).</li>
<li><b>Set up coordinates</b> sensibly (e.g. along the inclined plane), fix the signs.</li>
<li><b>Write the equations</b>, count the unknowns = number of equations (do not forget constraints such as string length or the rolling condition).</li>
<li><b>Solve symbolically (in general form)</b>, substitute numbers only at the end.</li>
<li><b>Check:</b> units, limiting cases, order of magnitude, symmetry, signs.</li></ol>
<b>Example Atwood:</b> units of $g\frac{m_1-m_2}{m_1+m_2}$: $\text{m/s}^2$ ✓. $m_2 = 0$: $a = g$ (free fall) ✓. $m_1 = m_2$: $a = 0$ ✓. $m_1\leftrightarrow m_2$: the sign reverses ✓. $|a|\le g$ ✓.`,
    meta: "Supplement (exam strategy); builds on Section 1.2.1 (dimensional analysis) and 3.8.1–3.8.2 (solution recipe)",
    explanation: R`<b>Intuition:</b> In exams, most points are not lost through lack of knowledge, but through wrongly chosen principles, forgotten forces, sign errors and numbers substituted too early. A fixed scheme prevents this.<br><br>
<b>Why symbolic?</b> A formula can be checked for units and limiting cases; a number cannot. Moreover, one sees dependencies (e.g. that the mass cancels out) and earns partial credit for the method.<br><br>
<b>Limiting cases as a detector:</b> Every physical formula must return what is already known in special cases: no friction, zero mass, angle $0^\circ$ or $90^\circ$, $t\to\infty$ (stationary state). A wrong sign or an inverted fraction almost always shows up here.<br><br>
<b>Order of magnitude:</b> Compare the result with everyday knowledge: a car accelerates by a few $\text{m/s}^2$, not by $10^4$; a human sustains about $100\,\text{W}$ on average.<br><br>
<b>Connection:</b> Dimensional analysis (1.2.1), solution recipe for motion problems (3.8), Taylor approximations (11.1.2) for limiting cases.`,
    derivation: R`Checking the pendulum formula by dimensional analysis (without solving the differential equation):
<ol class="fc-steps">
<li>Possible quantities: $\ell$ [m], $m$ [kg], $g$ [m/s²]<em>What can the period depend on?</em></li>
<li>$T = C\,\ell^\alpha m^\beta g^\gamma$<em>Power ansatz.</em></li>
<li>$[\text s] = [\text m]^{\alpha+\gamma}[\text{kg}]^\beta[\text s]^{-2\gamma}$<em>Compare units.</em></li>
<li>$\beta = 0$, $\gamma = -\tfrac12$, $\alpha = \tfrac12$<em>Determine the exponents.</em></li>
<li>$T = C\sqrt{\ell/g}$, the mass cannot enter at all<em>Apart from the number $C = 2\pi$, the result is forced.</em></li>
</ol>`,
    example: R`<b>Error exposed:</b> Someone obtains for the range of a projectile $w = \frac{v_0\sin2\alpha}{g}$. Unit: $\frac{\text{m/s}}{\text{m/s}^2} = \text{s}$ – wrong. Correct: $w = \frac{v_0^2\sin2\alpha}{g}$ (m) ✓, limiting cases $\alpha = 0$ and $90^\circ$: $w = 0$ ✓.<br>
<b>Order of magnitude:</b> A result of “braking distance $3\,\text{km}$ at $50\,\text{km/h}$” is obviously wrong (realistically about $15\,\text{m}$).`,
    counterexample: R`<b>Unit correct, result still wrong:</b> $T = \sqrt{\ell/g}$ has the correct unit, but the factor $2\pi$ was forgotten. And $a = g\frac{m_1-m_2}{m_1}$ passes the limiting case $m_2 = 0$, but fails $|a|\le g$ for $m_1\ll m_2$. Checks find many, but not all, errors – they do not replace a clean derivation.`,
    pitfalls: R`<ul><li>Substituting numbers immediately, and thereby losing the unit check and partial credit.</li>
<li>Setting up fewer equations than unknowns (forgetting a constraint).</li>
<li>Not stating assumptions (no friction, small angles).</li>
<li>Changing the sign convention midway.</li></ul>`
  }
};
})();
