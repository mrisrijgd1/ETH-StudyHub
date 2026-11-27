/* ==========================================================================
   PHYSICS I – CHAPTER 7 (English): Gravitation theory
   Kepler's laws from Newton, Kepler's equation, conic sections, effective potential,
   field of a spherical shell and of a solid sphere, rotation curves of galaxies
   Script Physics I – Prof. K. Ensslin, ETH Zurich, HS 2025
   English translation of data_kapitel7.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_7 = {
  "ph7_ebene_flaechensatz": {
    title: R`Two-body problem Sun–planet: centre of mass, planar orbit, Kepler's second law`,
    category: R`7.2 Celestial mechanics`,
    type: "herleitung",
    front: R`Which simplifications does the script make for the motion of a planet around the Sun? Deduce from conservation of momentum and angular momentum that (a) the centre of mass can be at rest, (b) the orbit is <b>planar</b>, and (c) <b>Kepler's second law</b> holds.`,
    back: R`Gravitation (7.1–7.3): $U(r) = -G_N\frac{m_1m_2}{r}$ ($U(\infty) = 0$), $\vec F = -G_Nm_1m_2\frac{\hat r}{r^2}$, $G_N = 6{,}67\cdot10^{-11}\,\text{N m}^2/\text{kg}^2$.<br><br>
<b>Assumptions:</b> only the Sun ($M$) and one planet ($m$); other stars and planets are neglected, so the system is closed: $\vec F_\text{ext} = \vec 0$, $\vec M_\text{ext} = \vec 0$ (7.4).
<ul><li>(a) $\vec p_\text{tot} = m\vec v + M\vec V = \text{const}$, so $\dot{\vec s} = \frac{\vec p_\text{tot}}{m+M} = \text{const}$ (7.5–7.7). Choose $\vec s = \vec 0$, $\dot{\vec s} = \vec 0$ (7.8). Because $M\gg m$, the motion of the Sun is neglected ($R, V\to0$).</li>
<li>(b) $\vec L_\text{tot} = m(\vec r\times\vec v) = \text{const}$ (7.9). Since $\vec L$ keeps its direction, $\vec r$ and $\vec v$ always lie in the same plane ($\perp\vec L$).</li>
<li>(c) $dA = \tfrac12|\vec r\times\vec v|\,dt = \frac{L}{2m}dt$, so $\dot A = \frac{L}{2m} = \text{const}$ (7.10, 7.11): the radius vector sweeps out equal areas in equal times. This holds for <b>all</b> central forces.</li></ul>`,
    meta: R`Script: sections 7.1–7.2, Eqs. (7.1)–(7.11), Fig. 7.1, pp. 163–165 (footnotes 1–4)`,
    explanation: R`<b>Intuition:</b> Kepler found his laws from Tycho Brahe's measurements; Newton showed that they follow from $F\propto1/r^2$. The script takes the "simpler" route in reverse: from the conservation laws to Kepler's laws.<br><br>
<b>Why planar?</b> A central force always lies in the plane spanned by $\vec r$ and $\vec v$; it cannot pull the body out of this plane. Formally: $\vec L\perp\vec r$ and $\vec L = \text{const}$.<br><br>
<b>Neglected effects:</b> The Sun actually moves slightly about the common centre of mass (treatable exactly with the reduced mass, Ch. 6.6); the solar system orbits the centre of the galaxy (small external force); planets perturb each other (orbital perturbations, 7.2); intrinsic angular momenta are ignored.<br><br>
<b>Connection:</b> Kepler 2 is pure conservation of angular momentum (Ch. 5.2.3). For Kepler 1 and 3 one additionally needs the energy and the exact $1/r$ form of the potential.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec s = \dfrac{m\vec r+M\vec R}{m+M}$, $\dot{\vec s} = \dfrac{\vec p_\text{tot}}{m+M}$<em>Centre of mass and its velocity (7.6, 7.7).</em></li>
<li>$\vec F_\text{ext} = \vec 0\Rightarrow\vec p_\text{tot} = \text{const}\Rightarrow\dot{\vec s} = \text{const}$<em>Choose the inertial frame in which the centre of mass is at rest (7.8).</em></li>
<li>$\dot{\vec L} = \vec r\times\vec F = \vec r\times f(r)\hat r = \vec 0$<em>Central force: no torque about the centre (7.9).</em></li>
<li>$\vec r\perp\vec L$ and $\vec v\perp\vec L$ for all $t$<em>The cross product is perpendicular to both factors; a fixed $\vec L$ means a fixed orbital plane.</em></li>
<li>$dA = \tfrac12|\vec r\times d\vec r| = \tfrac12|\vec r\times\vec v|dt = \dfrac{L}{2m}dt$<em>Triangle swept by the radius vector in $dt$ (7.10).</em></li>
<li>$\dot A = \dfrac{L}{2m} = \text{const}$<em>Kepler's second law (7.11).</em></li>
</ol>`,
    example: R`<b>Areal velocity of the Earth:</b> $\dot A = \frac{\pi ab}{T}\approx\frac{\pi(1{,}496\cdot10^{11}\,\text{m})^2}{3{,}156\cdot10^{7}\,\text{s}} = 2{,}2\cdot10^{15}\,\text{m}^2/\text{s}$ (nearly circular, $b\approx a$).<br>
Perihelion $1{,}471\cdot10^{11}\,\text{m}$, aphelion $1{,}521\cdot10^{11}\,\text{m}$: at perihelion the Earth is $3{,}4\,\%$ faster.`,
    counterexample: R`<b>Non-central force:</b> Radiation pressure or thruster thrust perpendicular to the orbital plane produces a torque about the Sun; the orbital plane can tilt. The mutual perturbations of the planets (not central with respect to the Sun) also make the orbital planes precess slowly.`,
    pitfalls: R`<ul><li>Regarding the area theorem as a special feature of gravitation.</li>
<li>Assuming the centre of mass is at the Sun's centre without naming the approximation $M\gg m$.</li>
<li>Forgetting that $\dot A$, not $v$, is constant.</li></ul>`
  },
  "ph7_energie_polar": {
    title: R`Energy theorem in polar coordinates: φ̇ = L/(mr²) and the quantities a and ε`,
    category: R`7.2 Celestial mechanics`,
    type: "herleitung",
    front: R`Write the velocity in polar coordinates, express $\dot\varphi$ through $L$, and state the <b>energy theorem</b> for the planet only as a function of $r$ and $\dot r$. How are the later orbital parameters $a$ and $\varepsilon$ defined through $E$ and $L$?`,
    back: R`Polar coordinates $x = r\cos\varphi$, $y = r\sin\varphi$ (7.12, 7.13):
$$v^2 = \dot x^2+\dot y^2 = (\dot r\cos\varphi - r\dot\varphi\sin\varphi)^2 + (\dot r\sin\varphi + r\dot\varphi\cos\varphi)^2 = \dot r^2 + r^2\dot\varphi^2\qquad(7.14\text{–}7.16)$$
From the areal velocity $\dot A = \frac{L}{2m} = \tfrac12r^2\dot\varphi$:
$$\dot\varphi = \frac{L}{mr^2}\qquad(7.17,\,7.18)$$
Energy theorem (no friction in vacuum, intrinsic rotation neglected):
$$E = \tfrac12mv^2 - G_N\frac{mM}{r} = \tfrac12m\left(\dot r^2 + \frac{L^2}{m^2r^2}\right) - G_N\frac{mM}{r} = \text{const}\qquad(7.19\text{–}7.21)$$
Abbreviations (later the semi-major axis and the numerical eccentricity):
$$a = -G_N\frac{mM}{2E},\qquad\varepsilon^2 = 1 + \frac{2EL^2}{G_N^2M^2m^3}\qquad(7.22)$$
For bound orbits $E\lt0$, so $a>0$ and $\varepsilon\lt1$.`,
    meta: R`Script: section 7.2, Eqs. (7.12)–(7.22) with footnotes 5–6, p. 166`,
    explanation: R`<b>Intuition:</b> In polar coordinates the velocity splits into a radial part $\dot r$ (nearer/farther) and a tangential part $r\dot\varphi$ (around). Conservation of angular momentum fixes the tangential part completely: $r\dot\varphi = \frac{L}{mr}$. What remains is an equation in $r$ alone, a one-dimensional problem.<br><br>
<b>Dependence:</b> $\dot\varphi\propto1/r^2$: at half the distance the planet sweeps through the angle four times as fast (angle per unit time).<br><br>
<b>Meaning of $a$:</b> $a = \frac{G_NmM}{2|E|}$ depends <i>only</i> on the energy, not on the angular momentum. All orbits of the same energy have the same semi-major axis and (Kepler 3) the same orbital period, whether circular or very eccentric.<br><br>
<b>Meaning of $\varepsilon$:</b> For a given energy, the angular momentum determines the shape: maximal $L$ gives a circle ($\varepsilon = 0$), small $L$ a very elongated ellipse.<br><br>
<b>Connection:</b> The term $\frac{L^2}{2mr^2}$ is counted in 7.3 as the "centrifugal potential" that forms part of the effective potential.`,
    derivation: R`<ol class="fc-steps">
<li>$\dot x = \dot r\cos\varphi - r\dot\varphi\sin\varphi$, $\dot y = \dot r\sin\varphi + r\dot\varphi\cos\varphi$<em>Product and chain rule (7.15).</em></li>
<li>$\dot x^2+\dot y^2 = \dot r^2(\cos^2+\sin^2) + r^2\dot\varphi^2(\sin^2+\cos^2) + 0$<em>The mixed terms $\mp2\dot rr\dot\varphi\sin\varphi\cos\varphi$ cancel (7.16).</em></li>
<li>$\dot A = \tfrac12r\cdot r\dot\varphi = \dfrac{L}{2m}\;\Rightarrow\;\dot\varphi = \dfrac{L}{mr^2}$<em>Area of the narrow sector: $\tfrac12r^2d\varphi$ (7.17, 7.18).</em></li>
<li>$\tfrac12mr^2\dot\varphi^2 = \tfrac12mr^2\dfrac{L^2}{m^2r^4} = \dfrac{L^2}{2mr^2}$<em>Tangential part of the kinetic energy expressed through $L$.</em></li>
<li>$E = \tfrac12m\dot r^2 + \dfrac{L^2}{2mr^2} - \dfrac{G_NmM}{r}$<em>Energy theorem as a function of $r$ and $\dot r$ alone (7.21).</em></li>
</ol>`,
    example: R`<b>Earth:</b> $E = -\frac{G_NM_\odot m}{2a}$, so with $a = 1{,}496\cdot10^{11}\,\text{m}$: $E = -2{,}65\cdot10^{33}\,\text{J}$ (bound).<br>
<b>Comet Halley:</b> $\varepsilon = 0{,}967$ (eq. 7.38 in the script gives $0{,}976$), so very small $L$ for the given energy: it dives almost radially into the inner solar system.`,
    counterexample: R`<b>Velocity not split into polar components:</b> Whoever writes $v^2 = \dot r^2+\dot\varphi^2$ (without $r^2$) gets a dimensionally wrong equation. In curvilinear coordinates the basis vectors carry factors (Ch. 2.4.1).`,
    pitfalls: R`<ul><li>Forgetting the factor $r^2$ in front of $\dot\varphi^2$.</li>
<li>Assuming $E>0$ for bound orbits (with $U(\infty) = 0$, bound orbits have negative energy).</li>
<li>Carrying $m^3$ over incorrectly into $\varepsilon^2$ (check the dimensions: $\frac{EL^2}{G_N^2M^2m^3}$ is dimensionless).</li></ul>`
  },
  "ph7_keplergleichung": {
    title: R`Time course of the orbit: eccentric anomaly and Kepler's equation`,
    category: R`7.2 Celestial mechanics`,
    type: "herleitung",
    front: R`How does one obtain the <b>time</b> dependence $r(t)$, $\varphi(t)$ of a planetary orbit? Using the substitution $r = a(1-\varepsilon\cos\alpha)$, derive <b>Kepler's equation</b> $\alpha - \varepsilon\sin\alpha = \sqrt{G_NM/a^3}\,t$ and explain how to solve it.`,
    back: R`From the energy theorem with $a$, $\varepsilon$ (7.22):
$$\dot r = \frac{dr}{dt} = \sqrt{\frac{G_NM}{a}}\;\frac1r\sqrt{a^2\varepsilon^2-(r-a)^2}\qquad(7.23)$$
Separating: $\int\frac{r\,dr}{\sqrt{a^2\varepsilon^2-(r-a)^2}} = \int\sqrt{\frac{G_NM}{a}}dt$ (7.24). Substitution
$$r = a(1-\varepsilon\cos\alpha),\qquad dr = a\varepsilon\sin\alpha\,d\alpha\qquad(7.25,\,7.26)$$
yields <b>Kepler's equation</b>
$$\alpha - \varepsilon\sin\alpha = \mu \stackrel{\text{def}}{=} \sqrt{\frac{G_NM}{a^3}}\,t + \text{const}\qquad(7.27,\,7.28)$$
$\alpha$: <b>eccentric anomaly</b>, $\mu$: <b>mean anomaly</b>. To solve: get $\mu(t)$, then $\alpha$ from the transcendental equation (iteratively $\alpha_0 = 0$, $\alpha_i = \mu+\varepsilon\sin\alpha_{i-1}$ for $\varepsilon\ll1$), then $r$ from (7.25). For the angle:
$$\frac{d\varphi}{d\alpha} = \frac{\sqrt{1-\varepsilon^2}}{1-\varepsilon\cos\alpha},\qquad\tan\frac\varphi2 = \sqrt{\frac{1+\varepsilon}{1-\varepsilon}}\tan\frac\alpha2\qquad(7.29\text{–}7.32)$$`,
    meta: R`Script: section 7.2, Eqs. (7.23)–(7.32) with footnote 7, pp. 166–168`,
    explanation: R`<b>Intuition:</b> The shape of the orbit (an ellipse) is simple, but the timing of its traversal is not: the planet is fast at perihelion and slow at aphelion. Kepler's equation translates the uniformly growing "mean anomaly" $\mu\propto t$ into the actual position.<br><br>
<b>Geometric meaning:</b> $\alpha$ is the angle of an auxiliary point on the circumscribed circle (radius $a$). $\mu$ would be the angle of a fictitious planet moving uniformly around a circle. For $\varepsilon = 0$, $\mu$, $\alpha$ and $\varphi$ coincide.<br><br>
<b>No closed form:</b> $\alpha - \varepsilon\sin\alpha = \mu$ is transcendental; one solves it numerically. For small $\varepsilon$ (all planets except Mercury) the fixed-point iteration converges in a few steps.<br><br>
<b>Connection:</b> After one revolution $\alpha$ increases by $2\pi$, so $T = 2\pi\sqrt{a^3/(G_NM)}$: a second route to Kepler's third law. Navigation and astronomy software still calculates exactly this way.`,
    derivation: R`<ol class="fc-steps">
<li>$\dot r^2 = \dfrac2m\left(E + \dfrac{G_NmM}{r}\right) - \dfrac{L^2}{m^2r^2}$<em>Energy theorem (7.21) solved for $\dot r^2$.</em></li>
<li>$\dot r^2 = \dfrac{G_NM}{a}\cdot\dfrac{a^2\varepsilon^2-(r-a)^2}{r^2}$<em>Replace $E$ and $L^2$ by $a$ and $\varepsilon$ from (7.22) and bring to a common denominator (7.23).</em></li>
<li>$\dfrac{r\,dr}{\sqrt{a^2\varepsilon^2-(r-a)^2}} = \sqrt{\dfrac{G_NM}{a}}\,dt$<em>Separate the variables (7.24).</em></li>
<li>$r-a = -a\varepsilon\cos\alpha\;\Rightarrow\;\sqrt{a^2\varepsilon^2-(r-a)^2} = a\varepsilon\sin\alpha$<em>The substitution (7.25) simplifies the root using $1-\cos^2 = \sin^2$.</em></li>
<li>$\dfrac{a(1-\varepsilon\cos\alpha)\cdot a\varepsilon\sin\alpha\,d\alpha}{a\varepsilon\sin\alpha} = a(1-\varepsilon\cos\alpha)\,d\alpha$<em>Insert $dr$ from (7.26); $a\varepsilon\sin\alpha$ cancels.</em></li>
<li>$a(\alpha-\varepsilon\sin\alpha) = \sqrt{\dfrac{G_NM}{a}}\,t + \text{const}$<em>Integrate and divide by $a$: Kepler's equation (7.27, 7.28).</em></li>
</ol>`,
    example: R`<b>Earth, a quarter of a year after perihelion</b> ($\mu = \pi/2$, $\varepsilon = 0{,}0167$):
$\alpha_1 = 1{,}5708 + 0{,}0167\sin0 = 1{,}5708$; $\alpha_2 = 1{,}5708+0{,}0167\sin1{,}5708 = 1{,}5875$; $\alpha_3 = 1{,}5875$ (converged).
$\tan\frac\varphi2 = \sqrt{\frac{1{,}0167}{0{,}9833}}\tan(0{,}7937) = 1{,}0339$, so $\varphi = 91{,}9^\circ$.
After a quarter of the orbital period the Earth is thus already $1{,}9^\circ$ beyond $90^\circ$, because it runs faster near perihelion.`,
    counterexample: R`<b>Iteration for large $\varepsilon$:</b> For $\varepsilon\to1$ (comets) the simple fixed-point iteration converges only slowly; one then uses Newton's method. The script's footnote ("a few iteration steps") holds only for $\varepsilon\ll1$.`,
    pitfalls: R`<ul><li>Confusing the eccentric anomaly $\alpha$ with the true angle $\varphi$.</li>
<li>Confusing $\mu$ (mean anomaly) with the reduced mass (same symbol!).</li>
<li>Trying to solve Kepler's equation "algebraically for $\alpha$"; it is transcendental.</li></ul>`
  },
  "ph7_kepler1_kegelschnitte": {
    title: R`Kepler's first law: orbit as a conic section r = p/(1 + ε cos φ)`,
    category: R`7.2 Celestial mechanics`,
    type: "gesetz",
    front: R`How does one get the <b>orbit equation</b> $r(\varphi)$ from the solutions $r(t)$, $\varphi(t)$? Give the semi-major and semi-minor axes through $E$ and $L$, and assign the orbit shapes (circle, ellipse, parabola, hyperbola) to the energy and the eccentricity.`,
    back: R`From (7.32) $\cos\alpha = \frac{\varepsilon+\cos\varphi}{1+\varepsilon\cos\varphi}$ (7.33), inserted into (7.25):
$$r = a(1-\varepsilon\cos\alpha) = \frac{a(1-\varepsilon^2)}{1+\varepsilon\cos\varphi} = \frac{p}{1+\varepsilon\cos\varphi},\qquad p := a(1-\varepsilon^2)\qquad(7.34,\,7.35)$$
Equation of a <b>conic section</b> with a focus at the origin. <b>Kepler's first law:</b> the planets move on ellipses, with the Sun at one focus.
$$a = \frac12\left(\frac{p}{1+\varepsilon}+\frac{p}{1-\varepsilon}\right) = \frac{p}{1-\varepsilon^2} = \frac{G_NmM}{2|E|},\qquad b = a\sqrt{1-\varepsilon^2} = \frac{L}{\sqrt{2m|E|}}\qquad(7.36,\,7.37)$$
<table><tr><td>$\varepsilon = 0$, $E\lt0$</td><td>Circle</td></tr>
<tr><td>$0\lt\varepsilon\lt1$, $E\lt0$</td><td>Ellipse (Earth $0{,}017$, Halley $0{,}976$)</td></tr>
<tr><td>$\varepsilon = 1$, $E = 0$</td><td>Parabola</td></tr>
<tr><td>$\varepsilon>1$, $E>0$</td><td>Hyperbola</td></tr></table>
(7.38). Systems with $E\lt0$ are called <b>bound</b>. Perihelion $a(1-\varepsilon)$, aphelion $a(1+\varepsilon)$.`,
    meta: R`Script: section 7.2, Eqs. (7.33)–(7.38), Fig. 7.2, pp. 168–169`,
    explanation: R`<b>Intuition:</b> Depending on the energy, the body is bound to the Sun (closed orbit: ellipse, special case circle) or not (open orbit: hyperbola; borderline case parabola with exactly escape energy). That bound orbits are <i>closed</i> (the planet returns exactly to the same point) is a special property of the $1/r$ potential.<br><br>
<b>Geometry (Fig. 7.2):</b> The Sun sits at the focus $F_1$, not at the centre. Distance centre–focus $e = a\varepsilon$, with $e^2 = a^2-b^2$. $p$ is the "semi-latus rectum", the distance at $\varphi = 90^\circ$.<br><br>
<b>Dependencies:</b> $a$ determines the energy ($E = -G_NmM/2a$), $b$ additionally the angular momentum ($L = b\sqrt{2m|E|}$). For given $a$ the circle ($b = a$) has the maximal angular momentum.<br><br>
<b>Connection:</b> Comets on hyperbolic orbits visit the solar system only once (e.g. ʻOumuamua). Space probes use hyperbolic orbits past planets for gravity-assist (swing-by) manoeuvres.`,
    derivation: R`Semi-axes from perihelion and aphelion:
<ol class="fc-steps">
<li>$r_P = r(\varphi = 0) = \dfrac{p}{1+\varepsilon},\quad r_A = r(\varphi = \pi) = \dfrac{p}{1-\varepsilon}$<em>Smallest and largest distance from (7.34).</em></li>
<li>$a = \tfrac12(r_P+r_A) = \dfrac p2\cdot\dfrac{(1-\varepsilon)+(1+\varepsilon)}{1-\varepsilon^2} = \dfrac{p}{1-\varepsilon^2}$<em>The major axis is $r_P+r_A$ (7.36).</em></li>
<li>$a = -\dfrac{G_NmM}{2E} = \dfrac{G_NmM}{2|E|}$<em>Consistent with the definition (7.22).</em></li>
<li>$b = a\sqrt{1-\varepsilon^2}$, $1-\varepsilon^2 = -\dfrac{2EL^2}{G_N^2M^2m^3}$<em>Ellipse geometry and (7.22).</em></li>
<li>$b = \dfrac{G_NmM}{2|E|}\cdot\dfrac{L\sqrt{2|E|}}{G_NMm^{3/2}} = \dfrac{L}{\sqrt{2m|E|}}$<em>Insert and cancel (7.37).</em></li>
</ol>`,
    example: R`<b>Earth</b> ($a = 1{,}496\cdot10^{11}\,\text{m}$, $\varepsilon = 0{,}0167$): perihelion $1{,}471\cdot10^{11}\,\text{m}$ (early January), aphelion $1{,}521\cdot10^{11}\,\text{m}$ (early July); $b = a\sqrt{1-0{,}00028} = 0{,}99986\,a$, practically a circle, but the Sun sits $2{,}5\cdot10^{9}\,\text{m}$ away from the centre.<br>
<b>Mars</b> ($\varepsilon = 0{,}093$): perihelion $1{,}38$, aphelion $1{,}67\,\text{AU}$, clearly eccentric.`,
    counterexample: R`<b>Non-$1/r$ potentials:</b> Even a small deviation from the $1/r^2$ force law (e.g. from other planets or from general relativity) means the ellipse does not close: the perihelion drifts (perihelion precession, Mercury). The Kepler ellipse is a special case, not a general law for central forces.`,
    pitfalls: R`<ul><li>Putting the Sun at the centre of the ellipse.</li>
<li>Confusing $\varepsilon$ (numerical eccentricity, dimensionless) with $e = a\varepsilon$ (linear eccentricity, a length).</li>
<li>Regarding parabolas and hyperbolas as "bound".</li>
<li>Writing $a = \frac{G_NmM}{2E}$ without the absolute value (then negative).</li></ul>`
  },
  "ph7_kepler3": {
    title: R`Kepler's third law: T² = 4π² a³/(G_N M)`,
    category: R`7.2 Celestial mechanics`,
    type: "herleitung",
    front: R`Derive the <b>third Kepler law</b> from the area of the ellipse and the areal velocity. Why is $T^2/a^3$ the same for all planets, and how can one use it to determine the mass of the Sun?`,
    back: R`$$T = \frac{\text{area of the ellipse}}{\text{areal velocity}} = \frac{\pi ab}{L/(2m)}\qquad(7.39)$$
$$T^2 = \frac{4\pi^2a^2b^2m^2}{L^2} = \frac{4\pi^2a^3p\,m^2}{L^2} = \frac{4\pi^2}{G_NM}a^3\qquad(7.40)$$
with $b^2 = ap$ and $p = a(1-\varepsilon^2) = \frac{L^2}{G_Nm^2M}$. Hence
$$\frac{T^2}{a^3} = \frac{4\pi^2}{G_NM} = \text{const}\qquad(7.41)$$
independent of the properties of the individual planet (mass, eccentricity, angular momentum). <b>Third Kepler law:</b> the squares of the orbital periods are proportional to the cubes of the semi-major axes.`,
    meta: R`Script: section 7.2, Eqs. (7.39)–(7.41), Tab. 7.1, pp. 169–170`,
    explanation: R`<b>Intuition:</b> Further out the orbit is longer <i>and</i> the planet is slower (weaker attraction). Both together give $T\propto a^{3/2}$.<br><br>
<b>Quick check with the circle:</b> $\frac{mv^2}{r} = \frac{G_NmM}{r^2}$ and $v = \frac{2\pi r}{T}$ give directly $T^2 = \frac{4\pi^2}{G_NM}r^3$.<br><br>
<b>Dependencies:</b> $T\propto a^{3/2}$, $v\propto a^{-1/2}$ (circular orbit). A planet with four times the orbital radius needs eight times as long and is half as fast.<br><br>
<b>Mass determination:</b> From $T$ and $a$ of any companion one obtains the mass of the central body: $M = \frac{4\pi^2a^3}{G_NT^2}$. This is how one "weighs" the Sun, planets (via their moons), binary stars, and the black hole at the centre of the Milky Way. More precisely, one gets $M+m$ there (reduced mass, Ch. 6.6).<br><br>
<b>Connection:</b> Table 7.1 confirms the constancy over a factor of 100 in $a$ (Mercury to Neptune).`,
    derivation: R`<ol class="fc-steps">
<li>$T = \dfrac{\pi ab}{\dot A} = \dfrac{2\pi abm}{L}$<em>Area of the ellipse divided by the constant areal velocity (7.39).</em></li>
<li>$b^2 = a^2(1-\varepsilon^2) = a\cdot a(1-\varepsilon^2) = ap$<em>From $b = a\sqrt{1-\varepsilon^2}$ and $p = a(1-\varepsilon^2)$.</em></li>
<li>$p = \dfrac{L^2}{G_Nm^2M}$<em>From (7.22): $a(1-\varepsilon^2) = \frac{G_NmM}{2|E|}\cdot\frac{2|E|L^2}{G_N^2M^2m^3}$.</em></li>
<li>$T^2 = \dfrac{4\pi^2a^2\,ap\,m^2}{L^2} = \dfrac{4\pi^2a^3m^2}{L^2}\cdot\dfrac{L^2}{G_Nm^2M}$<em>Square and insert (7.40).</em></li>
<li>$\dfrac{T^2}{a^3} = \dfrac{4\pi^2}{G_NM}$<em>$L$ and $m$ cancel: a constant for all planets (7.41).</em></li>
</ol>`,
    example: R`<b>Solar mass from the Earth's orbit:</b> $M = \frac{4\pi^2(1{,}496\cdot10^{11})^3}{6{,}674\cdot10^{-11}\cdot(3{,}156\cdot10^{7})^2}\,\text{kg} = 1{,}99\cdot10^{30}\,\text{kg}$.<br>
<b>Jupiter</b> ($a = 5{,}20\,\text{AU}$): $T = 5{,}20^{3/2}\,\text{a} = 11{,}9\,\text{a}$ ✓ (Tab. 7.1). Neptune ($30{,}06\,\text{AU}$): $164{,}8\,\text{a}$ ✓.<br>
<b>ISS</b> ($r = 6771\,\text{km}$, central body Earth): $T = 2\pi\sqrt{r^3/(G_NM_E)} = 92\,\text{min}$; geostationary ($T = 1$ sidereal day): $r = 42\,160\,\text{km}$.`,
    counterexample: R`<b>Different central bodies:</b> $T^2/a^3$ is the same only for bodies orbiting the <i>same</i> central body. The Moon around the Earth and the Earth around the Sun have completely different constants (factor $M_\odot/M_E\approx3{,}3\cdot10^{5}$).<br>
<b>Heavy companions:</b> For binary stars of equal mass, $T^2 = \frac{4\pi^2a^3}{G_N(m_1+m_2)}$; with only one mass in the denominator one would determine the mass wrongly by a factor of 2.`,
    pitfalls: R`<ul><li>Writing $T\propto a^3$ or $T^2\propto a^2$.</li>
<li>Inserting the distance at perihelion instead of the semi-major axis for ellipses.</li>
<li>Mixing units: in AU and years the constant for the Sun is exactly 1; in SI it is not.</li></ul>`
  },
  "ph7_bahnstoerungen": {
    title: R`Orbital perturbations: discovery of Neptune and the perihelion precession of Mercury`,
    category: R`7.2 Celestial mechanics`,
    type: "experiment",
    front: R`Which deviations from Kepler orbits are observed in the solar system, and how were they explained? Describe the <b>discovery of Neptune</b> and the <b>perihelion precession of Mercury</b>.`,
    back: R`For more accurate orbits one must take into account the mutual influence of the planets, especially for the outer ones (<b>orbital perturbations</b>); formerly laborious analytically, today numerically.<br><br>
<b>Neptune:</b> Around 1800–1850 it became clear that Uranus did not obey the laws exactly (apparent violation of the law of gravitation, energy and angular momentum theorems). Leverrier and Adams postulated an unknown planet and calculated its position from the very small perturbations; Galle found it at the predicted position: one of the greatest triumphs of classical mechanics.<br><br>
<b>Mercury:</b> The perihelion of the innermost planet rotates. After subtracting all Newtonian perturbations, for Mercury there remains
$$\omega_\text{obs} = (43{,}11\pm0{,}45)''\ \text{per century}\qquad(7.42)$$
Einstein's general theory of relativity gives
$$\omega_\text{calc} = 43{,}03''\ \text{per century}\qquad(7.43)$$`,
    meta: R`Script: section 7.2 (after Tab. 7.1), Eqs. (7.42)–(7.43), pp. 170–171`,
    explanation: R`<b>Intuition:</b> Both stories start from the same situation, a small but significant deviation from the theory, but have different resolutions:
<ul><li>Uranus: the theory was right, a body was missing (additional mass). The theory was brilliantly confirmed and predicted a discovery.</li>
<li>Mercury: no additional planet ("Vulcan") was found; the theory itself had to be extended.</li></ul>
<b>Method (Ch. 1.1):</b> This is falsification in pure form. A deviation of $43''$ per century is tiny, but far outside the measurement uncertainty ($\pm0{,}45''$), so it must be taken seriously. The agreement $43{,}03''$ with $43{,}11\pm0{,}45''$ is among the classic tests of the general theory of relativity.<br><br>
<b>Physics of the perihelion precession:</b> Every deviation from the pure $1/r$ potential (perturbations by other planets, relativistic corrections $\propto1/r^3$) means that the ellipse does not close exactly; the perihelion moves on a little further each revolution.<br><br>
<b>Connection:</b> Today one also detects exoplanets this way (wobbles of the star) and dark matter (rotation curves, 7.4.3).`,
    derivation: R`Order of magnitude of the Mercury effect:
<ol class="fc-steps">
<li>Revolutions per century: $100\,\text{a}/0{,}24\,\text{a}\approx415$<em>Mercury's orbital period $0{,}24\,\text{a}$ (Tab. 7.1).</em></li>
<li>Rotation per revolution: $\dfrac{43''}{415}\approx0{,}10''$<em>The relativistic part of the perihelion precession per revolution.</em></li>
<li>$0{,}10'' = 0{,}10\cdot\dfrac{\pi}{180\cdot3600}\,\text{rad}\approx5\cdot10^{-7}\,\text{rad}$<em>Conversion to radians.</em></li>
<li>Theory: $\Delta\varphi\approx\dfrac{6\pi G_NM}{c^2a(1-\varepsilon^2)}\approx5\cdot10^{-7}\,\text{rad}$<em>Formula of general relativity (not in the script): with $a = 5{,}79\cdot10^{10}\,\text{m}$, $\varepsilon = 0{,}206$ the order of magnitude matches.</em></li>
</ol>`,
    example: R`<b>Total perihelion precession</b> of Mercury (observed from Earth): roughly $5600''$ per century. Of this about $5025''$ come from the precession of the coordinate system (Earth's axis) and about $532''$ from perturbations by the other planets (Newton). The mysterious $43''$ remain.<br><br>
<b>Neptune 1846:</b> Galle found it within about $1^\circ$ of the position predicted by Leverrier, on the first night of the search.`,
    counterexample: R`<b>"Vulcan":</b> After the success with Neptune, Leverrier also suspected an inner, undiscovered planet for Mercury. It was never found. The same strategy ("unknown mass") led astray here, because this time the force law itself was not exact.`,
    pitfalls: R`<ul><li>Attributing the entire observed perihelion precession to relativity; it is only $43''$ of the roughly $5600''$.</li>
<li>Confusing arcseconds per century with arcseconds per year.</li>
<li>Assuming the discovery of Neptune refuted Newton's theory; it confirmed it.</li></ul>`
  },
  "ph7_effektives_potential": {
    title: R`Effective gravitational potential and orbit shapes`,
    category: R`7.3 The effective gravitational potential`,
    type: "konzept",
    front: R`What is the <b>effective potential</b> $E_p^\text{eff}(r)$ in a gravitational field? Where is its minimum, and how does one read from it, for a given energy, the possible orbits (bound, circle, scattering) and the turning points?`,
    back: R`Kinetic energy split into radial and angular parts (7.44–7.46):
$$T_r = \tfrac12m\dot r^2,\qquad T_\varphi = \frac{L^2}{2mr^2}$$
At constant $L$ the term $T_\varphi$ depends only on $r$ and is added to the potential:
$$E_p^\text{eff} := E_p(r) + \frac{L^2}{2mr^2} = -G_N\frac{mM}{r} + \frac{L^2}{2mr^2}\qquad(7.47,\,7.48)$$
Minimum ($dE_p^\text{eff}/dr = 0$):
$$r_0 = \frac{L^2}{G_Nm^2M},\qquad E_0 = E_p^\text{eff}(r_0) = -\frac{G_N^2m^3M^2}{2L^2}\qquad(7.49)$$
Radial kinetic energy $T(r) = E - E_p^\text{eff}(r)\ge0$ (7.50):
<ul><li>$E = E_1\lt0$: bound, motion between $r_A = a(1-\varepsilon)$ (perihelion) and $r_B = a(1+\varepsilon)$ (aphelion)</li>
<li>$E = E_0$: $r = r_0$ fixed, i.e. a circular orbit</li>
<li>$E = E_2>0$: not bound, minimum distance $r_\text{min}$, hyperbola (scattering)</li></ul>`,
    meta: R`Script: section 7.3, Eqs. (7.44)–(7.50), Fig. 7.3, pp. 171–172`,
    explanation: R`<b>Intuition:</b> The angular momentum acts like a repulsive "centrifugal barrier" $\propto1/r^2$: the closer the body comes, the faster it must move tangentially (at fixed $L$), and this energy is then missing for the radial motion. That is why a planet with $L\neq0$ never falls into the Sun.<br><br>
<b>Method:</b> A 3D problem becomes a 1D motion in $r$ in the potential $E_p^\text{eff}$. One draws a horizontal line at the total energy $E$; where it lies above the curve the body may be present, and its intersections are the turning points of the radial motion.<br><br>
<b>Dependencies:</b> At large $r$ the term $-1/r$ dominates (attractive), at small $r$ the term $+1/r^2$ dominates (repulsive). $r_0\propto L^2$: more angular momentum gives a circular orbit further out.<br><br>
<b>Connection:</b> The same method describes molecular vibrations, the scattering of α-particles (Rutherford) and orbits around black holes (there the effective potential has an additional maximum, so unstable orbits).`,
    derivation: R`Position of the minimum and turning points:
<ol class="fc-steps">
<li>$\dfrac{dE_p^\text{eff}}{dr} = \dfrac{G_NmM}{r^2} - \dfrac{L^2}{mr^3} = 0$<em>Differentiate with respect to $r$ and set to zero.</em></li>
<li>$r_0 = \dfrac{L^2}{G_Nm^2M}$<em>Multiply by $r^3$ and solve (7.49).</em></li>
<li>$E_0 = -\dfrac{G_NmM}{r_0} + \dfrac{L^2}{2mr_0^2} = -\dfrac{G_N^2m^3M^2}{L^2} + \dfrac{G_N^2m^3M^2}{2L^2} = -\dfrac{G_N^2m^3M^2}{2L^2}$<em>Insert $r_0$.</em></li>
<li>Turning points: $E = -\dfrac{G_NmM}{r} + \dfrac{L^2}{2mr^2}$<em>There $\dot r = 0$: the whole energy is in the effective potential.</em></li>
<li>$Er^2 + G_NmMr - \dfrac{L^2}{2m} = 0$<em>Multiply by $r^2$: a quadratic equation in $r$; for $E\lt0$ two positive solutions $r_{A,B} = a(1\mp\varepsilon)$.</em></li>
</ol>`,
    example: R`<b>Circular orbit as a special case:</b> For $E = E_0$ we always have $\dot r = 0$. Check with forces: $\frac{mv^2}{r_0} = \frac{G_NmM}{r_0^2}$ with $L = mvr_0$ also gives $r_0 = \frac{L^2}{G_Nm^2M}$ ✓.<br><br>
<b>Satellite</b> with too little tangential velocity: at the same energy but smaller $L$ the centrifugal barrier shifts inward; the perigee drops and can reach the atmosphere.`,
    counterexample: R`<b>$L = 0$:</b> Without angular momentum there is no barrier; $E_p^\text{eff} = E_p = -G_NmM/r$, and the body falls radially into the centre. The statement "one cannot fall into the Sun" holds only for $L\neq0$ (and a point-like Sun).`,
    pitfalls: R`<ul><li>Confusing the effective potential with the real potential; the centrifugal barrier is kinetic energy.</li>
<li>Assuming the effective potential is the same for all orbits; it depends on $L$.</li>
<li>Writing $m^2$ instead of $m^3$ in $E_0$ (check the dimensions).</li></ul>`
  },
  "ph7_kugelschale": {
    title: R`Gravitational field of a homogeneous spherical shell: zero inside, point mass outside`,
    category: R`7.4 Gravitational field of extended bodies`,
    type: "herleitung",
    front: R`Calculate the gravitational field of a thin, homogeneous spherical shell (radius $r$, thickness $dr$, density $\rho$) at a point at distance $a$ from the centre. Show: for $a\lt r$ the field is <b>zero</b>, for $a>r$ it is that of a <b>point mass at the centre</b>.`,
    back: R`Mass element and field contribution (point $\vec a$ on the $z$-axis):
$$d^3m = r^2\rho\,d\cos\vartheta\,d\varphi\,dr,\qquad d^3\vec g = G_N\,d^3m\,\frac{\vec r-\vec a}{|\vec r-\vec a|^3}\qquad(7.51,\,7.52)$$
$|\vec r-\vec a| = r\sqrt{1-2\xi\cos\vartheta+\xi^2}$ with $\xi := a/r$ (7.54–7.56). The $\varphi$-integration leaves only the $z$-component (rotational symmetry):
$$dg_z = 2\pi\rho\,G_N\,dr\int_{-1}^{1}\frac{\cos\vartheta-\xi}{(1-2\xi\cos\vartheta+\xi^2)^{3/2}}\,d\cos\vartheta\qquad(7.58\text{–}7.60)$$
Substitution $u = \sqrt{1-2\xi\cos\vartheta+\xi^2}$ (7.61–7.65):
<ul><li><b>inside</b> ($\xi\lt1$, limits $1-\xi$ to $1+\xi$): $dg_z = 0$ (7.66–7.72)</li>
<li><b>outside</b> ($\xi>1$, limits $\xi-1$ to $\xi+1$): $dg_z = -\dfrac{4\pi\rho G_N\,dr}{\xi^2} = -\dfrac{G_N\,dm}{a^2}$ with $dm = 4\pi r^2\rho\,dr$ (7.73–7.80)</li></ul>`,
    meta: R`Script: section 7.4.1, Eqs. (7.51)–(7.80), Fig. 7.4, pp. 173–176`,
    explanation: R`<b>Intuition (inside):</b> If you stand anywhere inside a hollow spherical shell, the near wall pulls strongly but is small; the far wall pulls weakly but is large. With $1/r^2$ both effects cancel exactly, because the area of a cone-shaped slice grows like $r^2$ (Newton's geometric proof).<br><br>
<b>Intuition (outside):</b> From outside one "sees" only the total mass; every spherically symmetric distribution acts like a point mass at the centre. That is why we have so far been allowed to treat the Earth and the Sun as mass points.<br><br>
<b>Link to Gauss:</b> With the Gauss theorem (Ch. 4.1.6) it takes one line: the flux of $\vec g$ through a sphere of radius $a$ is $-4\pi G_N\cdot$(enclosed mass). Inside, the enclosed mass is zero, so $g = 0$.<br><br>
<b>Connection:</b> The same calculation holds for the electric force: inside a charged conducting sphere the field is zero (Faraday cage principle). The "shell theorem" is the basis of 7.4.2 (solid sphere) and 7.4.3 (galaxies).`,
    derivation: R`The decisive integration step:
<ol class="fc-steps">
<li>$u^2 = 1-2\xi\cos\vartheta+\xi^2\Rightarrow d\cos\vartheta = -\dfrac{u\,du}{\xi}$<em>Differentiate: $2u\,du = -2\xi\,d\cos\vartheta$ (7.61–7.63).</em></li>
<li>$\cos\vartheta-\xi = \dfrac{1-\xi^2-u^2}{2\xi}$<em>From $\cos\vartheta = \frac{1+\xi^2-u^2}{2\xi}$, subtracting $\xi$ (7.64, 7.65).</em></li>
<li>$dg_z = \dfrac{\pi\rho G_Ndr}{\xi^2}\displaystyle\int_{u_o}^{u_u}\left(\dfrac{1-\xi^2}{u^2}-1\right)du$<em>Insert; the integrand simplifies. Limits: $u_u = 1+\xi$ ($\cos\vartheta = -1$), $u_o = |1-\xi|$ ($\cos\vartheta = 1$) (7.68, 7.69).</em></li>
<li>$= -\dfrac{\pi\rho G_Ndr}{\xi^2}\left[\dfrac{1-\xi^2}{u}+u\right]_{u_o}^{u_u}$<em>Antiderivative (7.70).</em></li>
<li>Inside ($u_o = 1-\xi$): $\left[(1-\xi)+(1+\xi)\right] - \left[(1+\xi)+(1-\xi)\right] = 0$<em>At both limits the bracket has the value 2: $dg_z = 0$ (7.71, 7.72).</em></li>
<li>Outside ($u_o = \xi-1$): bracket difference $= -4$, so $dg_z = -\dfrac{4\pi\rho G_Ndr}{\xi^2} = -\dfrac{G_N\,4\pi r^2\rho\,dr}{a^2}$<em>With $\xi = a/r$; this is $-G_Ndm/a^2$ (7.75–7.80).</em></li>
</ol>`,
    example: R`<b>Hollow sphere thought experiment:</b> At the centre of a hollow planet (or at any other point in the cavity) you would be weightless, without falling.<br><br>
<b>Earth from outside:</b> Although the density varies from $\sim13\,\text{g/cm}^3$ in the core to $\sim3\,\text{g/cm}^3$ in the crust (spherically symmetric), the field outside is exactly $G_NM/r^2$: $g(R_E) = 9{,}82\,\text{m/s}^2$ with the total mass.`,
    counterexample: R`<b>Distributions that are not spherically symmetric:</b> A cube or a flattened Earth does not act from outside exactly like a point mass; there are corrections that decrease faster with distance (quadrupole $\propto1/r^4$ in the force). Satellite orbits clearly feel the flattening of the Earth (orbital precession).<br>
<b>Other force laws:</b> For $F\propto1/r^3$ the field inside would <i>not</i> be zero; the shell theorem depends on the $1/r^2$ law.`,
    pitfalls: R`<ul><li>Assuming gravity is zero inside the Earth; it is zero only inside a <i>hollow shell</i>.</li>
<li>Setting the limits wrongly in the substitution ($|1-\xi|$ differs for inside and outside).</li>
<li>Swapping $a$ (distance of the field point) and $r$ (radius of the shell).</li></ul>`
  },
  "ph7_vollkugel": {
    title: R`Field of a solid sphere: g ∝ r inside, g ∝ 1/r² outside`,
    category: R`7.4 Gravitational field of extended bodies`,
    type: "herleitung",
    front: R`Calculate the specific gravitational field $\vec g(r)$ of a homogeneous sphere (mass $M$, radius $R$) inside and outside. What kind of force acts inside, and what follows for a tunnel through the Earth?`,
    back: R`Treat the sphere as an onion of shells. For a field point at distance $r$ only shells with $r'\le r$ contribute (outer shells give zero inside, 7.4.1):
$$g(r) = \frac{G_N}{r^2}\int_0^r dm = \frac{G_N}{r^2}\int_0^r\rho\,4\pi r'^2dr' = \frac{4\pi}{3}\rho G_N\,r\qquad(7.81\text{–}7.83)$$
With $\rho = \frac{M}{4\pi R^3/3}$ (7.84):
$$\vec g(r) = \begin{cases}-\dfrac{G_NM}{R^3}\,r\,\hat r & r\le R\\[6pt]-\dfrac{G_NM}{r^2}\,\hat r & r\ge R\end{cases}\qquad(7.85,\,7.86)$$
Inside $g$ increases <b>linearly</b> with $r$ up to the maximum at the surface; the force is of the type of the <b>spring force</b> ($F\propto-r$). Outside the $1/r^2$ law of the point mass applies. (The density may vary radially as long as spherical symmetry holds; then inside $g = G_NM(r)/r^2$.)`,
    meta: R`Script: section 7.4.2, Eqs. (7.81)–(7.86), Fig. 7.5, pp. 176–178`,
    explanation: R`<b>Intuition:</b> If you dig into a homogeneous sphere, only the mass beneath you pulls, and the outer shells cancel. This inner mass decreases like $r^3$, the distance to the centre like $r$, so $g\propto r^3/r^2 = r$.<br><br>
<b>Dependencies:</b> inside $g\propto r$ (zero at the centre), outside $g\propto1/r^2$; maximum at the surface, where both formulas agree ($G_NM/R^2$).<br><br>
<b>Earth tunnel:</b> A frictionless tunnel through the Earth's centre: $\ddot r = -\frac{G_NM}{R^3}r = -\frac{g}{R}r$, a harmonic oscillation with $\omega = \sqrt{g/R}$. Remarkably, the period is exactly that of a satellite orbit just above the surface.<br><br>
<b>Real Earth:</b> It is not homogeneous (denser core). Therefore $g$ first even increases slightly on the way down (up to the core–mantle boundary), instead of falling linearly.<br><br>
<b>Connection:</b> Galactic centres (7.4.3) and the potential inside (a parabola, as for the spring, Ch. 4.4.2.2).`,
    derivation: R`<ol class="fc-steps">
<li>$g(r) = \dfrac{G_NM(r)}{r^2}$, $M(r) = \displaystyle\int_0^r\rho\,4\pi r'^2\,dr'$<em>Only the enclosed mass acts, as if it were a point mass at the centre (shell theorem, 7.81, 7.82).</em></li>
<li>$M(r) = \dfrac{4\pi}{3}\rho r^3$ (homogeneous)<em>Integral of $r'^2$.</em></li>
<li>$g(r) = \dfrac{4\pi}{3}\rho G_N\,r$<em>Linear in $r$ (7.83).</em></li>
<li>$\rho = \dfrac{3M}{4\pi R^3}\Rightarrow g(r) = \dfrac{G_NM}{R^3}r$<em>Replace the density by the total mass (7.84, 7.85).</em></li>
<li>Tunnel: $m\ddot r = -m\dfrac{G_NM}{R^3}r\Rightarrow\omega^2 = \dfrac{G_NM}{R^3} = \dfrac gR$<em>Spring-force type: harmonic oscillation (Ch. 3.9.3).</em></li>
<li>$T = 2\pi\sqrt{R/g} = 2\pi\sqrt{\dfrac{6{,}371\cdot10^{6}}{9{,}81}}\,\text{s} = 84{,}4\,\text{min}$<em>Half a period (one crossing): 42 min.</em></li>
</ol>`,
    example: R`<b>Half the Earth's radius</b> (homogeneous Earth): $g = 4{,}9\,\text{m/s}^2$; zero at the centre.<br>
<b>Maximum tunnel speed</b> at the centre: $v_\text{max} = \omega R = \sqrt{gR} = 7{,}9\,\text{km/s}$, exactly the first cosmic velocity (circular orbit at the surface).`,
    counterexample: R`<b>The real Earth is not homogeneous:</b> The mean density ($5{,}5\,\text{g/cm}^3$) is about twice that of the crust ($2{,}7\,\text{g/cm}^3$). Therefore $g$ at a depth of 2900 km (core–mantle boundary) is about $10{,}7\,\text{m/s}^2$, even <i>larger</i> than at the surface. The linear decrease holds only for homogeneous spheres.`,
    pitfalls: R`<ul><li>Using $g\propto1/r^2$ also inside; then $g$ would diverge towards the centre.</li>
<li>Inserting the total mass $M$ instead of the enclosed mass $M(r)$.</li>
<li>Forgetting that the result presupposes spherical symmetry.</li></ul>`
  },
  "ph7_rotationskurven": {
    title: R`Rotation curves of galaxies and dark matter`,
    category: R`7.4 Gravitational field of extended bodies`,
    type: "experiment",
    front: R`What orbital speed $v(r)$ would one expect for stars in a galaxy with a homogeneous, spherical core (mass $M_K$, radius $R_K$), inside and outside the core? What is actually measured, and which mass distribution explains a flat rotation curve?`,
    back: R`<b>Inside the core</b> ($r\le R_K$): $F_G = G_N\frac{M_K}{R_K^3}mr = m\frac{v^2}{r}$ (7.87–7.89), so
$$v = \sqrt{\frac{G_NM_K}{R_K^3}}\,r = C_1r,\qquad v_\text{max} = \sqrt{\frac{G_NM_K}{R_K}}\qquad(7.90,\,7.91)$$
<b>Outside:</b> $G_N\frac{M_K}{r^2}m = m\frac{v^2}{r}$:
$$v = \sqrt{G_NM_K}\,\frac{1}{\sqrt r} = \frac{C_2}{\sqrt r}\qquad(7.92,\,7.93)$$
<b>Measurement</b> (Doppler shift of Fraunhofer lines): practically <b>constant</b> $v$ far outside the core. There must be more mass, not shining: <b>dark matter</b>.<br><br>
<b>Model</b> (halo): $\rho_\text{DM} = \rho_0/r^2$ (7.94), so $M_\text{DM}(r) = 4\pi\rho_0r$ (7.95; the script writes $\frac{4\pi}{3}\rho_0r$) and
$$v^2 = \frac{G_NM_\text{DM}(r)}{r} = \text{const}\qquad(7.96\text{–}7.99)$$
The existence of dark matter is plausible but not yet conclusively proven (direct searches e.g. at CERN, cosmological missions).`,
    meta: R`Script: section 7.4.3, Eqs. (7.87)–(7.99), Fig. 7.6, pp. 178–181`,
    explanation: R`<b>Intuition:</b> The speed on a circular orbit reveals the mass <i>inside</i> the orbit: $M(r) = \frac{v^2r}{G_N}$. If $v$ does not fall off outwards, $M(r)$ must keep growing linearly with $r$, even where hardly any stars shine.<br><br>
<b>Expectation vs. measurement:</b> Core: rigid rotation ($v\propto r$, like a merry-go-round); outside: Kepler decrease ($v\propto1/\sqrt r$, like the planets). Measured: flat curves, $v\approx\text{const}$ far out.<br><br>
<b>Why $\rho\propto1/r^2$?</b> Then the mass in a spherical shell of thickness $dr$ grows like $4\pi r^2\rho\,dr = 4\pi\rho_0\,dr$, i.e. independent of $r$, and $M(r)\propto r$.<br><br>
<b>Connection:</b> According to current understanding dark matter makes up about 23 % of the universe (Ch. 1.1, Fig. 1.3), roughly five times as much as ordinary matter. It is a current example of how deviations from expectations (as with Uranus, 7.2) lead to new hypotheses.`,
    derivation: R`Flat rotation curve from the $1/r^2$ density:
<ol class="fc-steps">
<li>$M_\text{DM}(r) = \displaystyle\int_0^r\frac{\rho_0}{r'^2}4\pi r'^2\,dr' = 4\pi\rho_0r$<em>Enclosed mass grows linearly with $r$.</em></li>
<li>$F_G = \dfrac{G_NM_\text{DM}(r)m}{r^2} = \dfrac{4\pi\rho_0G_Nm}{r}$<em>Shell theorem: only the enclosed mass counts (7.96, 7.97).</em></li>
<li>$\dfrac{4\pi\rho_0G_Nm}{r} = \dfrac{mv^2}{r}$<em>Gravitation supplies the centripetal force (7.98).</em></li>
<li>$v = \sqrt{4\pi\rho_0G_N} = \text{const}$<em>$r$ and $m$ cancel: flat rotation curve (7.99; the script has the prefactor $\frac{4\pi}{3}$).</em></li>
</ol>`,
    example: R`<b>Milky Way:</b> The Sun moves at $v\approx220\,\text{km/s}$ at a distance $r\approx8\,\text{kpc} = 2{,}5\cdot10^{20}\,\text{m}$ around the centre. Enclosed mass: $M = \frac{v^2r}{G_N} = \frac{(2{,}2\cdot10^{5})^2\cdot2{,}47\cdot10^{20}}{6{,}67\cdot10^{-11}}\,\text{kg}\approx1{,}8\cdot10^{41}\,\text{kg}\approx9\cdot10^{10}\,M_\odot$.<br>
Since $v$ stays almost the same out to beyond $20\,\text{kpc}$, the mass within $20\,\text{kpc}$ is about 2.5 times larger, far more than all visible stars.`,
    counterexample: R`<b>Solar system:</b> There $v\propto1/\sqrt r$ falls off exactly (Tab. 7.1: Mercury $47{,}9$, Neptune $5{,}4\,\text{km/s}$), because practically all the mass sits in the Sun. A flat curve is therefore not a general feature of gravitational systems, but a sign of distributed, invisible mass.<br>
<b>Alternative explanation:</b> Modified laws of gravity (e.g. MOND) try to explain flat curves without dark matter. They are (not yet) as successful, but show that the interpretation is not compulsory.`,
    pitfalls: R`<ul><li>Using $v\propto1/\sqrt r$ also in the core.</li>
<li>Believing dark matter has been directly detected.</li>
<li>Inserting the whole galaxy mass into the formula instead of the mass within $r$.</li></ul>`
  },

  // ========================================================================
  // SUPPLEMENTS: typical exam tasks and bridges to Physics II
  // ========================================================================
  "ph7_satellitenbahnen": {
    title: R`Satellite orbits: circular-orbit speed, geostationary orbit, escape speed, orbital energy`,
    category: R`7.2 Celestial mechanics`,
    type: "beispiel",
    front: R`For a satellite (mass $m$) around the Earth (mass $M$), derive the <b>circular-orbit speed</b>, the <b>orbital period</b>, the orbit height of a <b>geostationary</b> orbit, the <b>escape speed</b> and the <b>total energy</b> of a circular orbit. How much energy is needed to change from a low to a higher orbit?`,
    back: R`<b>Circular orbit</b> (gravitation = centripetal force):
$$\frac{GMm}{r^2} = \frac{mv^2}r\;\Rightarrow\;v_K = \sqrt{\frac{GM}r},\qquad T = \frac{2\pi r}{v_K} = 2\pi\sqrt{\frac{r^3}{GM}}$$
(3rd Kepler law, 7.39–7.41.) <b>Geostationary:</b> $T$ = sidereal day $86\,164\,\text{s}$, equatorial plane: $r = \left(\frac{GMT^2}{4\pi^2}\right)^{1/3} = 42\,164\,\text{km}$.<br><br>
<b>Energy</b> of the circular orbit:
$$E = \tfrac12mv_K^2-\frac{GMm}r = -\frac{GMm}{2r} = -T_\text{kin}\qquad(\text{ellipse: }E = -\tfrac{GMm}{2a})$$
<b>Escape speed</b> from the surface ($E = 0$): $v_F = \sqrt{\frac{2GM}R} = \sqrt2\,v_K(R) = 11{,}2\,\text{km/s}$.<br>
<b>Change of orbit</b> $r_1\to r_2$: $\Delta E = \frac{GMm}2\left(\frac1{r_1}-\frac1{r_2}\right)$.`,
    meta: R`Supplement (typical exam task); builds on sections 7.2 (Eqs. 7.39–7.41, energy of the ellipse), 7.3 (effective potential) and 4.4.2.4 (gravitational potential)`,
    explanation: R`<b>Intuition:</b> A satellite is constantly falling, but misses the Earth because it is fast enough sideways. Higher orbits need less speed ($v_K\propto1/\sqrt r$), but more energy (less negative potential energy).<br><br>
<b>Paradox of braking:</b> Friction in the upper atmosphere lowers the energy $E = -GMm/(2r)$; as a result $r$ becomes smaller and $v_K$ <i>larger</i>. Braking makes satellites faster. Reason: $T_\text{kin} = -E$ (virial theorem); the loss of energy increases the kinetic energy, while the potential energy drops twice as much.<br><br>
<b>Dependencies:</b> $T\propto r^{3/2}$; $v_K$ and $T$ are independent of $m$ (equivalence principle). $v_F = \sqrt2v_K$ at the same place.<br><br>
<b>Connection:</b> Effective potential (7.3): $E\lt0$ bound (ellipse/circle), $E = 0$ parabola, $E\gt0$ hyperbola. For the Sun: Earth's orbit $v\approx30\,\text{km/s}$.`,
    derivation: R`Energy of the circular orbit:
<ol class="fc-steps">
<li>$mv_K^2 = \dfrac{GMm}r$<em>Force equation multiplied by $r$.</em></li>
<li>$T_\text{kin} = \tfrac12mv_K^2 = \dfrac{GMm}{2r}$<em>Kinetic energy.</em></li>
<li>$U = -\dfrac{GMm}r = -2T_\text{kin}$<em>Potential energy (zero point at infinity).</em></li>
<li>$E = T_\text{kin}+U = -\dfrac{GMm}{2r}$<em>Bound: $E\lt0$.</em></li>
<li>$E = 0$ at the surface: $\tfrac12mv_F^2 = \dfrac{GMm}R\Rightarrow v_F = \sqrt{2GM/R}$<em>Just unbound.</em></li>
</ol>`,
    example: R`ISS-like orbit ($400\,\text{km}$ height, $r = 6771\,\text{km}$, $GM = 3{,}986\cdot10^{14}\,\text{m}^3/\text{s}^2$): $v_K = 7{,}67\,\text{km/s}$, $T = 92\,\text{min}$.<br>
Geostationary: height $35\,790\,\text{km}$, $v = 3{,}07\,\text{km/s}$.<br>
$1000\,\text{kg}$ from $400\,\text{km}$ to geostationary: $\Delta E = 2{,}5\cdot10^{10}\,\text{J}$ (without propulsion losses).`,
    counterexample: R`<b>Escape speed does not depend on direction</b> (energy argument), as long as one does not aim at the Earth; and it applies without air resistance. On the other hand, a circular orbit needs <i>tangential</i> speed – launched straight upwards at $7{,}9\,\text{km/s}$ you simply fall back.`,
    pitfalls: R`<ul><li>Inserting the height above ground instead of the distance from the Earth's centre.</li>
<li>Confusing the sidereal day ($86\,164\,\text{s}$) with the solar day ($86\,400\,\text{s}$) (a small error, but relevant in exams).</li>
<li>Believing a higher satellite is faster.</li></ul>`
  },
  "ph7_gauss_gravitation": {
    title: R`Gauss's theorem for the gravitational field: ∮g·dA = −4πG M_inside`,
    category: R`7.4 Gravitational field of extended bodies`,
    type: "herleitung",
    front: R`Show with Gauss's theorem (4.1.6) that the flux of the gravitational field $\vec g$ through any closed surface is $-4\pi G\,M_\text{inside}$. Use this to derive the results for the spherical shell and the solid sphere (7.4.1, 7.4.2) in two lines. Why is this an important preparation for electrostatics?`,
    back: R`Point mass $M$: $\vec g = -\frac{GM}{r^2}\hat r$. Flux through a sphere of radius $r$:
$$\oint\vec g\cdot d\vec A = -\frac{GM}{r^2}\cdot4\pi r^2 = -4\pi GM$$
independent of $r$; since $\nabla\cdot\vec g = 0$ outside the mass, this holds for every enclosing surface. Superposition:
$$\oint_{\partial V}\vec g\cdot d\vec A = -4\pi G\,M_\text{inside},\qquad\nabla\cdot\vec g = -4\pi G\rho$$
<b>Spherically symmetric mass:</b> $|\vec g|$ is constant on spheres and radial, so $g(r)\cdot4\pi r^2 = -4\pi GM(r)$:
$$g(r) = -\frac{GM(r)}{r^2}$$
<ul><li>Spherical shell inside: $M(r) = 0\Rightarrow g = 0$; outside: like a point mass.</li>
<li>Homogeneous solid sphere inside: $M(r) = M\frac{r^3}{R^3}\Rightarrow g = -\frac{GM}{R^3}r\propto r$.</li></ul>`,
    meta: R`Supplement (bridge to Physics II); connects sections 4.1.5–4.1.6 (flux, divergence, Gauss) with 7.4.1–7.4.2 (Eqs. 7.51–7.86)`,
    explanation: R`<b>Intuition:</b> Field lines begin and end only at masses (for gravitation: they end in masses). Counting how many field lines pass through a closed envelope measures the enclosed mass – whatever the envelope looks like and wherever the mass sits inside it.<br><br>
<b>Why $1/r^2$ is decisive:</b> The sphere's surface grows as $r^2$, the field falls as $1/r^2$: the flux is constant. With any other force law there would be no Gauss theorem in this form, and the inside of a shell would not be field-free.<br><br>
<b>Dependencies:</b> Inside a homogeneous sphere $g$ grows linearly (only the mass within $r$ counts). It follows that a tunnel through the Earth would give a harmonic oscillation with $T = 2\pi\sqrt{R^3/(GM)}\approx84\,\text{min}$ (supplement).<br><br>
<b>Connection (Physics II):</b> With $\vec g\to\vec E$, $-4\pi G\to1/\varepsilon_0$, $M\to Q$ this becomes Gauss's law of electrostatics $\oint\vec E\cdot d\vec A = Q/\varepsilon_0$ – the first Maxwell equation. Whoever understands it here can apply it there immediately (sphere, cylinder, plane).`,
    derivation: R`Mean density of the Earth from $g$ (application):
<ol class="fc-steps">
<li>$g(R)\cdot4\pi R^2 = 4\pi GM$<em>Gauss at the Earth's surface (magnitudes).</em></li>
<li>$M = \tfrac43\pi R^3\bar\rho$<em>Mean density $\bar\rho$.</em></li>
<li>$g = \tfrac43\pi G\bar\rho R$<em>Insert.</em></li>
<li>$\bar\rho = \dfrac{3g}{4\pi GR} = \dfrac{3\cdot9{,}81}{4\pi\cdot6{,}674\cdot10^{-11}\cdot6{,}371\cdot10^6}\,\dfrac{\text{kg}}{\text{m}^3} = 5510\,\dfrac{\text{kg}}{\text{m}^3}$<em>About twice as dense as surface rock: the Earth's core is heavy (iron).</em></li>
</ol>`,
    example: R`Infinitely long cylinders or planes can be treated in the same way: for an infinitely extended mass layer with surface density $\sigma$, $|g| = 2\pi G\sigma$, independent of distance – the counterpart of the homogeneous field of a plate capacitor.<br>
Field at half the Earth's depth (homogeneous Earth assumed): $g/2 = 4{,}9\,\text{m/s}^2$.`,
    counterexample: R`<b>Gauss without symmetry:</b> The theorem always holds, but it helps to calculate $\vec g$ only if symmetry allows pulling $|\vec g|$ out of the integral. For a cube or a ring it gives only the total flux, not the field at a point.`,
    pitfalls: R`<ul><li>Applying the theorem to surfaces on which $|\vec g|$ is not constant or not perpendicular, yet pulling $g$ out.</li>
<li>Inserting the total mass instead of the enclosed mass $M(r)$.</li>
<li>Signs: the gravitational field points inward, the flux is negative.</li></ul>`
  }
};
})();
