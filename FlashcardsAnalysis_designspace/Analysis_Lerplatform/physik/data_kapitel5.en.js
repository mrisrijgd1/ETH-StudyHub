/* ==========================================================================
   PHYSICS I – CHAPTER 5 (English): Rotational motion
   Angular momentum, torque, angular momentum theorem, angular momentum in circular motion, area theorem
   Script Physics I – Prof. K. Ensslin, ETH Zurich, HS 2025
   English translation of data_kapitel5.js. Formulas, HTML and ids are identical.
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_5 = {
  "ph5_drehimpuls": {
    title: R`Orbital angular momentum L = r × p`,
    category: R`5.2 Angular momentum`,
    type: "definition",
    front: R`How is the <b>angular momentum</b> of a point mass defined with respect to a fixed point $O$? Why may one use the full momentum $\vec p$ instead of $\vec p_\perp$, what is the unit of $\vec L$, and why does it depend on the reference point?`,
    back: R`With $\vec r$ = position vector from $O$ to the mass point:
$$\vec L = \vec r\times\vec p_\perp\qquad(5.1)$$
Since $\vec r\times\vec p_\parallel = \vec 0$:
$$\vec r\times\vec p = \vec r\times(\vec p_\parallel+\vec p_\perp) = \vec r\times\vec p_\perp\qquad(5.2)$$
$$\vec L = \vec r\times\vec p = m\,(\vec r\times\vec v)\qquad(5.7)$$
<ul><li>Magnitude: $L = r\,p\sin\vartheta = r_\perp p$ (lever arm times momentum).</li>
<li>Unit: $[L] = \text{kg}\,\text{m}^2/\text{s}$ (5.10).</li>
<li>$\vec L$ is an <b>axial vector</b>: it specifies a sense of rotation (right-hand rule) and stands perpendicular to the plane spanned by $\vec r$ and $\vec p$.</li>
<li>It is defined relative to a point of rotation.</li></ul>
In the $xy$-plane: $L_z = xp_y - yp_x$ (Fig. 5.2: positive for motion counterclockwise about $O$).`,
    meta: R`Script: sections 5.1, 5.2.1, Eqs. (5.1)–(5.2), (5.7), (5.10), Figs. 5.1–5.2, pp. 129–131`,
    explanation: R`<b>Intuition:</b> Angular momentum measures how much "rotational momentum" a body has about a point. Only the part of the momentum that points <i>across</i> the line joining the point to the body contributes to going around it. A body that flies straight towards $O$ or away from it has $\vec L = \vec 0$.<br><br>
<b>Lever arm:</b> $L = r_\perp p$, where $r_\perp$ is the perpendicular distance of the straight path from $O$. A straight, uniform motion therefore has a <i>constant</i> angular momentum about any point: $r_\perp$ and $p$ stay the same.<br><br>
<b>Dependence on the reference point:</b> If you shift $O$ by $\vec b$, then $\vec L' = (\vec r-\vec b)\times\vec p = \vec L - \vec b\times\vec p$. Unlike momentum, angular momentum is therefore not a pure property of the body, but a relation "body relative to $O$".<br><br>
<b>Analogy:</b> Translation ↔ rotation: $\vec p\leftrightarrow\vec L$, $\vec F\leftrightarrow\vec M$, $m\leftrightarrow I$ (Ch. 8), $\vec v\leftrightarrow\vec\omega$.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec p = \vec p_\parallel + \vec p_\perp$ (parallel and perpendicular to $\vec r$)<em>Split the momentum into a radial and a perpendicular component.</em></li>
<li>$\vec r\times\vec p_\parallel = \vec 0$<em>The cross product of parallel vectors vanishes ($\sin0 = 0$).</em></li>
<li>$\vec r\times\vec p = \vec r\times\vec p_\perp$<em>Linearity of the cross product: one may take the full momentum (5.2).</em></li>
<li>$|\vec L| = r\,p\sin\vartheta = (r\sin\vartheta)\,p = r_\perp\,p$<em>Magnitude of the cross product; $r\sin\vartheta$ is the perpendicular distance of the path from $O$.</em></li>
<li>$L_z = (\vec r\times\vec p)_z = xp_y - yp_x$<em>$z$-component for motion in the $xy$-plane (Fig. 5.2).</em></li>
</ol>`,
    example: R`<b>Straight-line motion:</b> A body ($m = 2\,\text{kg}$) flies with $v = 3\,\text{m/s}$ in the $x$-direction along the line $y = 4\,\text{m}$. About the origin: $L_z = xp_y - yp_x = 0 - 4\cdot6 = -24\,\text{kg m}^2/\text{s}$, constant, although $x$ changes (motion clockwise about $O$).<br><br>
<b>Earth around the Sun:</b> $L = mrv = 5{,}97\cdot10^{24}\cdot1{,}50\cdot10^{11}\cdot2{,}98\cdot10^{4}\,\text{kg m}^2/\text{s}\approx2{,}7\cdot10^{40}\,\text{kg m}^2/\text{s}$.`,
    counterexample: R`<b>Radial motion:</b> A stone thrown straight up has $\vec L = \vec 0$ about the throwing point ($\vec r\parallel\vec p$), although it has a large momentum. About a point offset to the side, on the other hand, it has angular momentum. "Does the body have angular momentum?" is not a meaningful question without a reference point.`,
    pitfalls: R`<ul><li>Not stating the reference point.</li>
<li>Swapping the order in the cross product: $\vec p\times\vec r = -\vec L$.</li>
<li>Believing that only circular motions have angular momentum.</li>
<li>Drawing $\vec L$ in the direction of motion; it is perpendicular to the plane of motion.</li></ul>`
  },
  "ph5_drallsatz": {
    title: R`Torque and angular momentum theorem dL/dt = M, conservation of angular momentum`,
    category: R`5.2 Angular momentum`,
    type: "herleitung",
    front: R`Derive the <b>angular momentum theorem</b> (Drallsatz) $\dot{\vec L} = \vec M$ for a point mass. How is the <b>torque</b> defined, and when is angular momentum conserved?`,
    back: R`$$\dot{\vec L} = \frac{d}{dt}(\vec r\times\vec p) = \dot{\vec r}\times\vec p + \vec r\times\dot{\vec p} = \underbrace{\tfrac1m\,\vec p\times\vec p}_{=\vec 0} + \vec r\times\vec F\qquad(5.3,\,5.4)$$
$$\Rightarrow\quad\dot{\vec L} = \vec r\times\vec F\qquad(5.5)$$
<b>Torque:</b>
$$\vec M = \vec r\times\vec F\qquad(5.6),\qquad[M] = \text{N m}\qquad(5.11)$$
<b>Angular momentum theorem</b> (the analogue of Newton II for rotational motion):
$$\vec M = \dot{\vec L} = \frac{d\vec L}{dt},\qquad d\vec L = \vec M\,dt\qquad(5.8,\,5.9)$$
If there is no torque, <b>angular momentum is conserved</b> (in a closed system with $\vec F = \vec 0$, also $\dot{\vec L} = \vec 0$). As with Newton II, this is not a definition of the torque but a heuristic identification with the kinematic quantity $\dot{\vec L}$. $\vec M$ is also an axial vector and depends on the reference point.`,
    meta: R`Script: section 5.2.1, Eqs. (5.3)–(5.11), pp. 129–131; summary 5.3`,
    explanation: R`<b>Intuition:</b> A torque is a force "with a lever". The same force turns more strongly if it acts further from the axis and perpendicular to the lever: $M = r_\perp F = rF\sin\vartheta$ (a door handle at the outer edge rather than next to the hinge).<br><br>
<b>When is $\vec L$ conserved?</b> When $\vec r\times\vec F = \vec 0$, i.e. when $\vec F = \vec 0$ or for a <b>central force</b> $\vec F\parallel\vec r$ with respect to the centre of force. This holds for gravitation and the Coulomb force. That is why the angular momentum of a planet around the Sun is conserved, although a large force acts all the time, and the orbit stays in one plane (Ch. 7).<br><br>
<b>Component by component:</b> As with momentum, a single component can be conserved, e.g. $L_z$, if the torque has no $z$-component.<br><br>
<b>Unit trap:</b> N m has the same dimensions as J, but torque is a vector (cross product), work a scalar (scalar product). For torques one writes N m, never J.<br><br>
<b>Connection:</b> For many-particle systems only external torques count (Ch. 6.5.3). For rigid bodies $\vec L = I\vec\omega$ (Ch. 8), and the angular momentum theorem explains gyroscopic precession (Ch. 13).`,
    derivation: R`<ol class="fc-steps">
<li>$\dot{\vec L} = \dfrac{d}{dt}(\vec r\times\vec p) = \dot{\vec r}\times\vec p + \vec r\times\dot{\vec p}$<em>Product rule for the cross product (keep the order!) (5.3).</em></li>
<li>$\dot{\vec r}\times\vec p = \vec v\times m\vec v = \vec 0$<em>Velocity and momentum are parallel; their cross product vanishes (5.4).</em></li>
<li>$\dot{\vec p} = \vec F$<em>Newton II.</em></li>
<li>$\dot{\vec L} = \vec r\times\vec F =: \vec M$<em>Definition of the torque (5.5, 5.6, 5.8).</em></li>
<li>Central force $\vec F = f(r)\hat r$: $\vec M = \vec r\times f(r)\hat r = \vec 0$<em>Force parallel to the position vector (with respect to the centre of force): angular momentum conserved.</em></li>
</ol>`,
    example: R`<b>Spanner:</b> $F = 50\,\text{N}$ perpendicular at a distance $r = 0{,}30\,\text{m}$: $M = 15\,\text{N m}$. At $60^\circ$ to the lever: $M = 50\cdot0{,}3\cdot\sin60^\circ\,\text{N m} = 13\,\text{N m}$.<br><br>
<b>Figure skater</b> (preview of Ch. 8): If she pulls her arms in, there is no external torque about the vertical axis; $L$ stays, the radius of gyration decreases, so she spins faster.`,
    counterexample: R`<b>Force without torque:</b> A stone on a string moves in a circle; the string force always points to the centre. With respect to the centre $\vec M = \vec 0$, so $\vec L = \text{const}$. With respect to another point $\vec M\neq\vec 0$, and $\vec L$ changes. Whether $\vec L$ is conserved depends on the reference point.`,
    pitfalls: R`<ul><li>Choosing different reference points for $\vec M$ and $\vec L$; both must be computed about the <b>same</b> fixed point.</li>
<li>Writing $\vec M = \vec F\times\vec r$ instead of $\vec r\times\vec F$.</li>
<li>Treating N m and J as equivalent.</li>
<li>Confusing conservation of angular momentum with conservation of momentum: for the planetary orbit $\vec L$ is conserved, $\vec p$ is not.</li></ul>`
  },
  "ph5_drehimpuls_kreis": {
    title: R`Angular momentum in circular motion: L = m r² ω`,
    category: R`5.2 Angular momentum`,
    type: "herleitung",
    front: R`Show for a point mass on a circular path around the centre, with $\vec v = \vec\omega\times\vec r$, that $\vec L = mr^2\vec\omega$. What role does $mr^2$ play?`,
    back: R`With $\vec v = \vec\omega\times\vec r$ (2.46) and the BAC-CAB rule:
$$\vec L = m\,\vec r\times\vec v = m\,\vec r\times(\vec\omega\times\vec r) = m\{\vec\omega\,(\vec r\cdot\vec r) - \vec r\,\underbrace{(\vec r\cdot\vec\omega)}_{=0}\}\qquad(5.12)$$
$$\vec L = mr^2\,\vec\omega\qquad(5.13)$$
($\vec r\perp\vec\omega$, since the origin lies at the centre of the circle.) $\vec L$ points in the direction of $\vec\omega$, along the axis of rotation; its magnitude is $L = mr^2\omega = mrv$.<br><br>
$mr^2$ is the <b>moment of inertia</b> of a point mass about the axis, the rotational analogue of mass: $L = I\omega$ just as $p = mv$.`,
    meta: R`Script: section 5.2.2, Eqs. (5.12)–(5.13), pp. 131–132`,
    explanation: R`<b>Intuition:</b> The further the mass is from the axis, the more angular momentum it has at the same angular velocity, and twice over: it is faster ($v = r\omega$) <i>and</i> has a longer lever arm ($r$). Hence $L\propto r^2$.<br><br>
<b>Dependencies and conservation:</b> If $L$ is conserved and $r$ changes, then $\omega\propto1/r^2$. Halving the radius quadruples the angular velocity. The orbital speed $v = L/(mr)$ doubles.<br><br>
<b>Energy:</b> $T = \tfrac12mv^2 = \tfrac12mr^2\omega^2 = \frac{L^2}{2mr^2}$. At constant $L$ the energy grows when the mass is pulled inward. The work for this is done by the pulling force (string, arms).<br><br>
<b>Connection:</b> For rigid bodies one sums $\sum m_ir_i^2 = I$ (moment of inertia, Ch. 8.5.5). For an axis that does not pass through the origin, $\vec L$ is in general <i>not</i> parallel to $\vec\omega$ (inertia tensor, Ch. 8.5.4, 13).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec L = m\,\vec r\times\vec v$, $\vec v = \vec\omega\times\vec r$<em>Definition of angular momentum and circular motion as a cross product.</em></li>
<li>$\vec r\times(\vec\omega\times\vec r) = \vec\omega\,(\vec r\cdot\vec r) - \vec r\,(\vec r\cdot\vec\omega)$<em>BAC-CAB: $\vec a\times(\vec b\times\vec c) = \vec b(\vec a\cdot\vec c)-\vec c(\vec a\cdot\vec b)$.</em></li>
<li>$\vec r\cdot\vec r = r^2$, $\vec r\cdot\vec\omega = 0$<em>Origin at the centre of the circle: the position vector lies in the plane of the circle, perpendicular to the axis.</em></li>
<li>$\vec L = mr^2\vec\omega$<em>Result (5.13).</em></li>
<li>$L = mr^2\omega = mr\,(r\omega) = mrv$<em>Check with $L = r_\perp p$: for a circle $r_\perp = r$.</em></li>
</ol>`,
    example: R`<b>Stone on a string:</b> $m = 0{,}1\,\text{kg}$, $r = 1\,\text{m}$, $\omega = 2\pi\,\text{s}^{-1}$ (1 revolution/s): $L = 0{,}1\cdot1\cdot6{,}28\,\text{kg m}^2/\text{s} = 0{,}63\,\text{kg m}^2/\text{s}$.<br>
The string is pulled through a tube to $r = 0{,}5\,\text{m}$ ($L$ conserved): $\omega' = 4\omega = 25{,}1\,\text{s}^{-1}$ (4 revolutions/s), $v' = 12{,}6\,\text{m/s}$ instead of $6{,}3\,\text{m/s}$.<br>
Kinetic energy rises from $\frac{L^2}{2mr^2} = 2{,}0\,\text{J}$ to $7{,}9\,\text{J}$.`,
    counterexample: R`<b>Origin not at the centre of the circle:</b> If $O$ lies on the axis but above the plane of the circle, then $\vec r\cdot\vec\omega\neq0$. Then $\vec L = m\vec r\times\vec v$ has a component that rotates with the body and is <i>not</i> parallel to $\vec\omega$. $\vec L = mr^2\vec\omega$ does not hold in that case.`,
    pitfalls: R`<ul><li>Using $L = mr\omega$ instead of $mr^2\omega$.</li>
<li>Assuming $\omega$ or $v$ stays constant when the radius changes; what is conserved is $L$.</li>
<li>Assuming $\vec L\parallel\vec\omega$ always holds.</li></ul>`
  },
  "ph5_flaechensatz": {
    title: R`Area theorem: conservation of angular momentum ⇔ equal areas in equal times`,
    category: R`5.2 Angular momentum`,
    type: "herleitung",
    front: R`How can conservation of angular momentum be interpreted <b>geometrically</b>? Derive the areal velocity $\dot A = L/(2m)$ and deduce Kepler's second law.`,
    back: R`Motion in the $xy$-plane: in the time $dt$, $\vec r$ changes by $d\vec r = \vec v\,dt$, and the position vector sweeps out the triangle
$$d\vec A = \tfrac12\{\vec r\times(\vec r+d\vec r)\} = \tfrac12(\vec r\times d\vec r) = \tfrac12(\vec r\times d\vec r_\perp)\qquad(5.14\text{–}5.16)$$
<b>Areal velocity:</b>
$$\dot{\vec A} = \tfrac12(\vec r\times\dot{\vec r}) = \frac1{2m}(\vec r\times\vec p)\qquad(5.17)$$
$$\dot A = \frac{L}{2m}\qquad(5.18)$$
At constant angular momentum $\dot A = \text{const}$: <b>equal areas are swept out in equal times</b> (Kepler's second law).`,
    meta: R`Script: section 5.2.3, Eqs. (5.14)–(5.18), Fig. 5.3, p. 132`,
    explanation: R`<b>Intuition:</b> The "radius vector" from the Sun to the planet sweeps out an area per unit time that depends on the perpendicular velocity component and on the distance, exactly as the angular momentum does. Constant angular momentum therefore means a constant swept area per unit time.<br><br>
<b>Consequence for elliptical orbits:</b> Close to the Sun (small $r$) the planet must move faster, far away more slowly. At perihelion and aphelion $\vec v\perp\vec r$, so there $r_Pv_P = r_Av_A$.<br><br>
<b>Generality:</b> The area theorem holds for <b>any central force</b>, not only for gravitation. Kepler's second law says nothing about the $1/r^2$ law; for that one needs Kepler's first and third laws (Ch. 7.2).<br><br>
<b>Connection:</b> Kepler found the law empirically from Tycho Brahe's data; Newton recognised it as conservation of angular momentum. In the effective potential (Ch. 7.3), $L$ appears as a centrifugal barrier $\frac{L^2}{2mr^2}$.`,
    derivation: R`<ol class="fc-steps">
<li>$dA = \tfrac12|\vec r\times(\vec r+d\vec r)|$<em>Area of the triangle formed by $\vec r$ and $\vec r+d\vec r$: half a parallelogram (5.14).</em></li>
<li>$\vec r\times(\vec r+d\vec r) = \vec r\times\vec r + \vec r\times d\vec r = \vec r\times d\vec r$<em>$\vec r\times\vec r = \vec 0$ (5.15).</em></li>
<li>$\vec r\times d\vec r = \vec r\times d\vec r_\perp$<em>The radial part $d\vec r_\parallel$ sweeps out no area (5.16).</em></li>
<li>$\dot{\vec A} = \tfrac12\vec r\times\dfrac{d\vec r}{dt} = \tfrac12\vec r\times\vec v = \dfrac{1}{2m}\vec r\times\vec p$<em>Divide by $dt$; $\vec v = \vec p/m$ (5.17).</em></li>
<li>$\dot A = \dfrac{L}{2m} = \text{const}$<em>With $\vec L = \vec r\times\vec p$; constant when angular momentum is conserved (5.18).</em></li>
</ol>`,
    example: R`<b>Earth:</b> perihelion $r_P = 1{,}471\cdot10^{11}\,\text{m}$, aphelion $r_A = 1{,}521\cdot10^{11}\,\text{m}$. From $r_Pv_P = r_Av_A$: $v_P/v_A = 1{,}034$. In January (perihelion) the Earth is about 3.4 % faster than in July, which is why the northern hemisphere's winter half-year is a few days shorter.<br><br>
<b>Comet Halley:</b> $r_P\approx0{,}59\,\text{AU}$, $r_A\approx35\,\text{AU}$, so $v_P/v_A\approx60$.`,
    counterexample: R`<b>Non-central force:</b> A satellite whose thruster pushes sideways to the orbit experiences a torque about the Earth. $L$ changes, and with it the areal velocity; the area theorem no longer holds.<br>
<b>Reference point:</b> If you measure the areas from a point other than the centre of force (e.g. the empty focus of the ellipse), $\dot A$ is not constant.`,
    pitfalls: R`<ul><li>Forgetting the factor $\tfrac12$ ($\dot A = L/2m$, not $L/m$).</li>
<li>Regarding the area theorem as specific to gravitation; it holds for all central forces.</li>
<li>Confusing equal areas with equal arc lengths.</li></ul>`
  },
  "ph5_analogie": {
    title: R`Analogy translation ↔ rotation (momentum/angular momentum, force/torque)`,
    category: R`5.3 Summary`,
    type: "konzept",
    front: R`Summarise the <b>analogy</b> between translation and rotation for a point mass: which quantities and laws correspond to each other, and where does the analogy stop?`,
    back: R`<table><tr><th>Translation</th><th>Rotation (about a fixed point $O$)</th></tr>
<tr><td>Position $\vec r$</td><td>Angle $\varphi$</td></tr>
<tr><td>Velocity $\vec v$</td><td>Angular velocity $\vec\omega$</td></tr>
<tr><td>Mass $m$</td><td>Moment of inertia $I = mr^2$</td></tr>
<tr><td>Momentum $\vec p = m\vec v$</td><td>Angular momentum $\vec L = \vec r\times\vec p$ ($= mr^2\vec\omega$ on the circle)</td></tr>
<tr><td>Force $\vec F$</td><td>Torque $\vec M = \vec r\times\vec F$</td></tr>
<tr><td>$\vec F = \dot{\vec p}$</td><td>$\vec M = \dot{\vec L}$</td></tr>
<tr><td>$\vec F = \vec 0\Rightarrow\vec p = \text{const}$</td><td>$\vec M = \vec 0\Rightarrow\vec L = \text{const}$</td></tr>
<tr><td>$T = \tfrac12mv^2$</td><td>$T = \tfrac12I\omega^2$</td></tr></table>
Differences: $\vec L$ and $\vec M$ depend on the reference point and are axial vectors; $\vec L$ is in general not parallel to $\vec\omega$ (Ch. 8, 13).`,
    meta: R`Script: Ch. 5 (introduction 5.1, summary 5.3); cf. Ch. 8.5.6`,
    explanation: R`<b>Intuition:</b> Almost every formula of translation has a rotational counterpart after substitution: $x\to\varphi$, $m\to I$, $F\to M$, $p\to L$. That saves learning effort and helps check formulas: the structure must be the same.<br><br>
<b>Conservation laws as a pair:</b> Conservation of momentum (translational symmetry of space) and conservation of angular momentum (isotropy, no preferred direction) are equally fundamental laws. No experiment has ever shown a violation.<br><br>
<b>Where the analogy breaks:</b>
<ul><li>Mass is a property of the body, but the moment of inertia additionally depends on the axis (Steiner, Ch. 8.5.8).</li>
<li>For extended bodies $I$ is a tensor; $\vec L$ and $\vec\omega$ can point in different directions. From this follow precession and nutation (Ch. 13).</li>
<li>Finite rotation angles are not vectors (Ch. 2.5.4).</li></ul>
<b>Connection:</b> In Ch. 8.5.6 the table is completed for rigid bodies (work $\int M\,d\varphi$, power $M\omega$).`,
    derivation: R`The rotational form of Newton II for a point mass on a fixed circle:
<ol class="fc-steps">
<li>$F_t = ma_t = mr\alpha$<em>The tangential force component accelerates tangentially; $a_t = r\alpha$ (Ch. 2.5.5).</em></li>
<li>$M = rF_t = mr^2\alpha$<em>Multiply by the lever arm $r$: torque about the axis.</em></li>
<li>$M = I\alpha$ with $I = mr^2$<em>Same structure as $F = ma$: moment of inertia instead of mass.</em></li>
<li>$\dfrac{dL}{dt} = \dfrac{d}{dt}(I\omega) = I\alpha = M$<em>Consistent with the angular momentum theorem as long as $I$ is constant.</em></li>
<li>$T = \tfrac12mv^2 = \tfrac12m(r\omega)^2 = \tfrac12I\omega^2$<em>The kinetic energy has the analogous form too.</em></li>
</ol>`,
    example: R`A $2\text{-kg}$ body on a $0{,}5\text{-m}$ arm (massless rod) is driven by a torque $M = 1\,\text{N m}$: $I = 0{,}5\,\text{kg m}^2$, $\alpha = M/I = 2\,\text{rad/s}^2$.<br>
Equivalent in translation: tangential force $F = M/r = 2\,\text{N}$, $a_t = F/m = 1\,\text{m/s}^2 = r\alpha$ ✓.`,
    counterexample: R`<b>Analogy applied wrongly:</b> "Angular momentum, like momentum, is a property of the body." A ball flying straight has angular momentum 0 or not 0 depending on the reference point, whereas its momentum is unambiguous. The analogy holds for the <i>laws</i>, not for every property.`,
    pitfalls: R`<ul><li>Inserting $m$ instead of $I$ in rotational formulas.</li>
<li>Changing the reference point between $\vec L$ and $\vec M$.</li>
<li>Assuming $\vec L\parallel\vec\omega$ for arbitrary rigid bodies.</li></ul>`
  }
};
})();
