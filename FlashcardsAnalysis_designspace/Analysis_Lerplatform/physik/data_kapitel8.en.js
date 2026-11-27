(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_8 = {
  "ph8_schwerpunkt_kontinuierlich": {
    title: R`Rigid body and centre of mass of a continuous mass distribution`,
    category: R`8.2 Centre of mass`,
    type: "definition",
    front: R`What is a <b>rigid body</b>, and why is that an idealisation? How does one calculate the <b>centre of mass</b> of a body with continuous density $\rho(\vec r)$?`,
    back: R`<b>Rigid body:</b> a solid in which the distances between all particles stay constant, even when external forces and torques act. A special case of a many-particle system; an idealisation, since real bodies deform under tension, pressure or shear, but usually only slightly and not permanently.<br><br>
<b>Centre of mass:</b> replace the point masses $m_i$ by volume elements $\Delta V_i$ with density $\rho_i$:
$$\vec r_S = \frac{\sum_i m_i\vec r_i}{\sum_i m_i} = \frac1M\sum_i\vec r_i\,\rho(\vec r_i)\,\Delta V_i\qquad(8.1)$$
Limit $\Delta V_i\to0$, $N\to\infty$:
$$\vec r_S = \frac1M\int\vec r\,dm = \frac1M\int_V\vec r\,\rho\,dV,\qquad M = \int_V\rho\,dV\qquad(8.2)$$
(The continuous distribution is an approximation, since matter consists of atoms whose mass is almost entirely in the nucleus; for very many atoms it is excellent.)`,
    meta: R`Script: sections 8.1–8.2.1, Eqs. (8.1)–(8.2), Fig. 8.1 (footnote 1), pp. 183–184`,
    explanation: R`<b>Intuition:</b> The centre of mass is the mass-weighted average of all positions. For continuous mass the integral replaces the sum: every small piece $dm$ contributes with its position $\vec r$.<br><br>
<b>Use symmetry:</b> If the body has a symmetry axis or plane (and the density is symmetric accordingly), the centre of mass lies on it. Then one often has to integrate only one coordinate (cone, 8.2.2).<br><br>
<b>Why rigid?</b> Because all distances are fixed, 6 degrees of freedom suffice (3 for the centre of mass, 3 angles) instead of $3N$. All parts share the same angular velocity $\vec\omega$, and $\vec v_i = \vec v_S + \vec\omega\times\vec r_i^{\,*}$.<br><br>
<b>Connection:</b> Ch. 6 (centre-of-mass theorem) still holds: $M\ddot{\vec r}_S = \vec F_\text{ext}$. In a homogeneous gravitational field the weight acts at the centre of mass (8.3.3, point 6).`,
    derivation: R`Centre of mass of a thin, homogeneous semicircular arc (radius $R$, mass $M$) as an exercise:
<ol class="fc-steps">
<li>$dm = \lambda R\,d\varphi$, $\lambda = \dfrac{M}{\pi R}$<em>Linear density; arc from $\varphi = 0$ to $\pi$.</em></li>
<li>$x_S = 0$<em>Symmetry with respect to the $y$-axis.</em></li>
<li>$y_S = \dfrac1M\displaystyle\int_0^\pi R\sin\varphi\,\lambda R\,d\varphi = \dfrac{\lambda R^2}{M}\left[-\cos\varphi\right]_0^\pi = \dfrac{2\lambda R^2}{M}$<em>Position $y = R\sin\varphi$ times mass element, integrated (8.2).</em></li>
<li>$y_S = \dfrac{2R^2}{\pi R} = \dfrac{2R}{\pi}\approx0{,}64\,R$<em>The centre of mass lies in empty space inside the arc.</em></li>
</ol>`,
    example: R`<b>Semicircular arc</b> with $R = 10\,\text{cm}$: $y_S = 6{,}4\,\text{cm}$ above the diameter.<br>
<b>Semicircular disc</b> (area instead of arc): $y_S = \frac{4R}{3\pi}\approx0{,}42\,R$, closer to the diameter, because more area lies there.<br>
<b>Variable density:</b> A rod ($0\le x\le\ell$) with $\lambda(x) = \lambda_0x/\ell$: $x_S = \frac{\int x\lambda\,dx}{\int\lambda\,dx} = \frac{\ell^3/3}{\ell^2/2} = \frac23\ell$, shifted towards the heavier end.`,
    counterexample: R`<b>Deformable bodies:</b> A person who raises their arms shifts their centre of mass. In the high jump (Fosbury flop) the centre of mass even lies outside the body, below the bar. For such systems the centre-of-mass theorem holds, but rigidity does not: formulas for moments of inertia with a fixed mass distribution are then only momentarily correct.`,
    pitfalls: R`<ul><li>Averaging unweighted over the volume although the density varies.</li>
<li>Forgetting the normalisation factor $1/M$.</li>
<li>Assuming the centre of mass always lies within the material.</li></ul>`
  },
  "ph8_kreiskegel": {
    title: R`Example: volume and centre of mass of a homogeneous cone (h/4)`,
    category: R`8.2 Centre of mass`,
    type: "beispiel",
    front: R`For a homogeneous circular cone (mass $M$, height $h$, base radius $R$, apex on the $z$-axis at the top) calculate the <b>volume</b>, the <b>density</b> and the position of the <b>centre of mass</b>.`,
    back: R`For reasons of symmetry $S$ lies on the $z$-axis. Section with the $xz$-plane: $x(z) = \frac Rh(h-z)$ (8.3). Volume element as a circular disc of thickness $dz$:
$$dV = \pi r^2\,dz,\qquad r(z) = \frac Rh(h-z)\qquad(8.4,\,8.5)$$
$$V = \int_0^h\pi\frac{R^2}{h^2}(h-z)^2dz = \tfrac13\pi R^2h,\qquad\rho_0 = \frac{3M}{\pi R^2h}\qquad(8.6\text{–}8.9)$$
$$z_S = \frac1M\int_V\rho_0z\,dV = \frac{3}{h^3}\int_0^h(h-z)^2z\,dz = \frac3{h^3}\cdot\frac{h^4}{12} = \frac h4\qquad(8.10\text{–}8.14)$$
$\vec r_S = (0,\,0,\,h/4)$: one quarter of the height above the base.`,
    meta: R`Script: section 8.2.2, Eqs. (8.3)–(8.14), Fig. 8.2, pp. 184–186`,
    explanation: R`<b>Intuition:</b> A cone is broad at the bottom and pointed at the top; most of the mass lies near the base. That is why the centre of mass lies well below half the height, at exactly one quarter.<br><br>
<b>Method:</b> Slice the body into discs whose mass one knows ($dm = \rho\pi r(z)^2dz$) and weight each disc by its height. The same recipe works for every solid of revolution.<br><br>
<b>Dependencies:</b> $z_S = h/4$ depends neither on $R$ nor on $M$: all homogeneous cones have the centre of mass at $1/4$ of the height. The volume is exactly one third of the enclosing cylinder.<br><br>
<b>Comparison:</b> Cylinder: $h/2$; hemisphere: $\frac38R$ above the base; pyramid: also $h/4$ (in general for every cone with any base, because the cross-section is $\propto(h-z)^2$).`,
    derivation: R`<ol class="fc-steps">
<li>$V = \pi\dfrac{R^2}{h^2}\displaystyle\int_0^h(h-z)^2dz = \pi\dfrac{R^2}{h^2}\left[h^2z - hz^2 + \tfrac13z^3\right]_0^h$<em>Sum the discs; $(h-z)^2$ expanded (8.7, 8.8).</em></li>
<li>$= \pi\dfrac{R^2}{h^2}\cdot\dfrac{h^3}{3} = \tfrac13\pi R^2h$<em>$h^3 - h^3 + \tfrac13h^3$.</em></li>
<li>$z_S = \dfrac{\rho_0}{M}\pi\dfrac{R^2}{h^2}\displaystyle\int_0^h(h-z)^2z\,dz = \dfrac3{h^3}\int_0^h(h-z)^2z\,dz$<em>Insert $\rho_0 = 3M/(\pi R^2h)$; $R$ and $M$ cancel (8.11, 8.12).</em></li>
<li>$\displaystyle\int_0^h(h^2z - 2hz^2 + z^3)\,dz = \tfrac12h^4 - \tfrac23h^4 + \tfrac14h^4 = \tfrac1{12}h^4$<em>Antiderivative evaluated at the limits (8.13).</em></li>
<li>$z_S = \dfrac3{h^3}\cdot\dfrac{h^4}{12} = \dfrac h4$<em>Result (8.14).</em></li>
</ol>`,
    example: R`Wooden cone ($\rho = 600\,\text{kg/m}^3$), $R = 5\,\text{cm}$, $h = 20\,\text{cm}$: $V = \frac13\pi\cdot0{,}0025\cdot0{,}2\,\text{m}^3 = 5{,}24\cdot10^{-4}\,\text{m}^3$, $M = 0{,}31\,\text{kg}$, centre of mass $5\,\text{cm}$ above the base.<br>
Standing on its apex it is unstable (centre of mass $15\,\text{cm}$ high); on its base it is very stable.`,
    counterexample: R`<b>Hollow conical shell</b> (surface only, no base): the mass is proportional to the circumference $\propto(h-z)$, not to the cross-sectional area. Then the centre of mass lies at $h/3$, not $h/4$. The result therefore depends on how the mass is distributed.`,
    pitfalls: R`<ul><li>Setting up the radius $r(z)$ the wrong way round (apex at the bottom instead of the top).</li>
<li>Confusing $z_S = h/3$ (centre of mass of a triangle) with the cone.</li>
<li>Evaluating the integral over $z$ without the factor $r(z)^2$.</li></ul>`
  },
  "ph8_wirkungslinie": {
    title: R`Line of action of a force and addition of forces on a rigid body`,
    category: R`8.3 Forces and torques`,
    type: "konzept",
    front: R`Why may one shift the point of application of a force along its <b>line of action</b> on a rigid body, but not arbitrarily? How does one add forces that act (a) at the same point, (b) at different points, (c) parallel at different points?`,
    back: R`If a force does not act at the centre of mass, it additionally causes a torque. For every point $P'$ on the line of action, with $\vec r = \vec r_\parallel + \vec r_\perp$ (8.15):
$$\vec M = \vec r\times\vec F = (\vec r_\parallel+\vec r_\perp)\times\vec F = \vec r_\perp\times\vec F\qquad(8.16\text{–}8.18)$$
The torque about any fixed point $O$ is <b>the same</b> for all points on the line of action. For a rigid body the point of application plays no role for the acceleration anyway.<br><br>
<b>Addition</b> (Fig. 8.4):
<ul><li>(a) same point of application: add as vectors (parallelogram of forces)</li>
<li>(b) different points: shift both forces along their lines of action to the point of intersection, then proceed as in (a)</li>
<li>(c) parallel forces: add two equal and opposite auxiliary forces so that the lines of action intersect, then proceed as in (b)</li></ul>`,
    meta: R`Script: sections 8.3.1–8.3.2, Eqs. (8.15)–(8.18), Figs. 8.3–8.4 (footnote 2), pp. 186–188`,
    explanation: R`<b>Intuition:</b> For a rigid body it makes no difference whether you pull a rope at the front or the back end, as long as the direction of pull lies on the same line. If you shift the force sideways, however, the lever arm changes and with it the torque.<br><br>
<b>Why does this work?</b> The component $\vec r_\parallel$ (along the force) contributes nothing to the cross product. Only the perpendicular distance $r_\perp$ of the line of action from $O$ counts.<br><br>
<b>Auxiliary forces for parallel forces:</b> One adds $+\vec F_h$ and $-\vec F_h$. This changes neither the total force nor the total torque, but makes the lines of action intersect. In this way one finds the line of action of the resultant of two parallel forces (e.g. two people carrying a beam).<br><br>
<b>Connection:</b> For deformable bodies the shiftability does not hold: pulling or pushing at different points deforms the body differently.`,
    derivation: R`Resultant of two parallel forces $F_1$ (at $x_1$) and $F_2$ (at $x_2$), both pointing down:
<ol class="fc-steps">
<li>$F = F_1 + F_2$<em>Total force: magnitudes add (same direction).</em></li>
<li>$M_O = x_1F_1 + x_2F_2$<em>Total torque about a point $O$ on the $x$-axis.</em></li>
<li>$x_RF = x_1F_1 + x_2F_2$<em>The resultant must have the same torque: position $x_R$ of its line of action.</em></li>
<li>$x_R = \dfrac{x_1F_1+x_2F_2}{F_1+F_2}$<em>A "force-weighted mean"; for weights this is exactly the centre of mass.</em></li>
</ol>`,
    example: R`Two crates on a board: $200\,\text{N}$ at $x = 0{,}5\,\text{m}$, $300\,\text{N}$ at $x = 2{,}0\,\text{m}$. Resultant $500\,\text{N}$ at $x_R = \frac{100+600}{500}\,\text{m} = 1{,}4\,\text{m}$. If one supports the board exactly there, it stays in equilibrium.`,
    counterexample: R`<b>Sideways shifting is forbidden:</b> A door is opened with $F = 20\,\text{N}$ perpendicular at the handle ($r_\perp = 0{,}8\,\text{m}$): $M = 16\,\text{N m}$. The same force applied in parallel close to the hinge ($r_\perp = 0{,}1\,\text{m}$) gives only $2\,\text{N m}$. Same force, different line of action, completely different effect.`,
    pitfalls: R`<ul><li>Shifting the point of application across the direction of the force.</li>
<li>Assuming shiftability for deformable bodies.</li>
<li>For parallel forces, only adding the magnitudes and forgetting the position of the resultant.</li></ul>`
  },
  "ph8_drehmoment_eigenschaften": {
    title: R`Torque on a rigid body: pseudovector, reference point, sum`,
    category: R`8.3 Forces and torques`,
    type: "konzept",
    front: R`What properties does the <b>torque</b> $\vec M = \vec r\times\vec F$ have on a rigid body? Explain (1) why it is an <b>axial vector</b> (parity), (2) how it depends on the <b>reference point</b>, and (3) how the torques of several forces add up.`,
    back: R`The direction of rotation follows the right-hand rule (from $\vec r$ to $\vec F$).<br><br>
<b>(1) Axial vector (pseudovector):</b> Reflecting all axes at the origin ($\hat x' = -\hat x$, …, 8.19–8.21), the parity operation $P$. Polar vectors change sign: $\vec r\to-\vec r$, $\vec F\to-\vec F$ (8.22–8.24). The torque does not:
$$\vec M = \vec r\times\vec F\;\stackrel{P}{\to}\;(-\vec r)\times(-\vec F) = +\vec M\qquad(8.25\text{–}8.27)$$
<b>(2) Dependence on the reference point:</b> shift by $\vec b$:
$$\vec M_2 = (\vec r_1+\vec b)\times\vec F = \vec M_1 + \vec b\times\vec F,\qquad\vec r_{2\perp} = \vec r_{1\perp}+\vec b_\perp\qquad(8.28\text{–}8.31)$$
The sign flips if $\vec b_\perp$ is opposite to $\vec r_{1\perp}$ and $|\vec b_\perp|>|\vec r_{1\perp}|$ (8.32).<br><br>
<b>(3) Sum</b> of several forces at the same point:
$$\vec M = \vec r\times\sum_i\vec F_i = \sum_i\vec M_i\qquad(8.33)$$`,
    meta: R`Script: section 8.3.3, points 1–3, Eqs. (8.19)–(8.33), Figs. 8.5–8.7, pp. 187–191`,
    explanation: R`<b>Intuition (parity):</b> An axial vector stands for a <i>sense of rotation</i> (an oriented area), not for a direction in space. Under the point reflection $P$ a sense of rotation is preserved, so $\vec M$ stays the same, while every true arrow ($\vec r$, $\vec F$, $\vec v$) flips. For a reflection in a plane it is exactly the reverse of polar vectors: the component perpendicular to the plane stays, the parallel components flip. $\vec\omega$, $\vec L$ and $\vec B$ are axial too.<br><br>
<b>Reference point:</b> "The torque" of a force does not exist without stating the point. In equilibrium ($\sum\vec F = \vec 0$), however, the total torque becomes independent of the reference point, because the extra term $\vec b\times\sum\vec F$ vanishes (important for statics, 8.4).<br><br>
<b>Physics and parity:</b> The laws of mechanics (and of electromagnetism) are mirror-symmetric: an equation between polar and axial vectors must have the same type on both sides ($\vec M = \dot{\vec L}$: both axial ✓). The weak interaction violates parity symmetry (Wu experiment, 1956).`,
    derivation: R`Torque about a shifted point:
<ol class="fc-steps">
<li>$\vec r_2 = \vec r_1 + \vec b$<em>Position vector of the point of application from the new reference point (Fig. 8.7).</em></li>
<li>$\vec M_2 = \vec r_2\times\vec F = \vec r_1\times\vec F + \vec b\times\vec F$<em>Distributive law of the cross product (8.29).</em></li>
<li>$\vec M_2 = \vec M_1 + \vec b\times\vec F$<em>The extra term depends only on the shift and the force (8.30).</em></li>
<li>$\sum_i\vec M_{2,i} = \sum_i\vec M_{1,i} + \vec b\times\sum_i\vec F_i$<em>Summed over several forces.</em></li>
<li>$\sum\vec F_i = \vec 0\;\Rightarrow\;\sum\vec M_{2,i} = \sum\vec M_{1,i}$<em>In force equilibrium the total torque is independent of the reference point.</em></li>
</ol>`,
    example: R`Force $\vec F = (0,10,0)\,\text{N}$ at the point $(2,0,0)\,\text{m}$:<br>
About the origin: $\vec M_1 = (2,0,0)\times(0,10,0) = (0,0,20)\,\text{N m}$.<br>
About $O' = (3,0,0)$: $\vec r = (-1,0,0)$, $\vec M = (0,0,-10)\,\text{N m}$, opposite sense of rotation!<br>
Check with $\vec b = (-3,0,0)$ (from the new to the old origin): $\vec b\times\vec F = (0,0,-30)$, so $20-30 = -10$ ✓.`,
    counterexample: R`<b>Stating a torque without a reference point:</b> "Gravity exerts the torque $mg\ell\sin\varphi$ on the pendulum." This is correct only about the suspension point; about the pendulum body itself it is zero. Without stating the point the statement is meaningless.`,
    pitfalls: R`<ul><li>Adding torques taken about different points.</li>
<li>Measuring $\vec r$ from the wrong point (from the point of application instead of the reference point).</li>
<li>Treating axial vectors like polar ones, e.g. in reflection arguments.</li></ul>`
  },
  "ph8_kraeftepaar": {
    title: R`Couple, reduction of force systems, and gravity acting at the centre of mass`,
    category: R`8.3 Forces and torques`,
    type: "gesetz",
    front: R`What is a <b>couple</b>, and why does its torque not depend on the reference point? How can an arbitrary system of forces be <b>reduced</b> to one force and one torque? Why may one let gravity act at the centre of mass?`,
    back: R`<b>(4) Couple:</b> two equal and opposite forces that do not act along the same line of action (Fig. 8.8):
$$\vec F_1+\vec F_2 = \vec 0,\qquad\vec M = \vec r_1\times\vec F_1 + \vec r_2\times\vec F_2 = \underbrace{(\vec r_1-\vec r_2)}_{\vec r_{12}}\times\vec F_1 = \vec r_{12\perp}\times\vec F_1\qquad(8.34\text{–}8.37)$$
No acceleration of the centre of mass, only angular acceleration; $\vec M$ depends only on the relative distance, not on the location of the axis of rotation (which may even lie outside the body).<br><br>
<b>(5) Reduction:</b> A force at $P$ = the same force at the reference point $O$ plus a couple $\{\vec F',\vec F''\}$ with $\vec M = \vec r\times\vec F$ (Fig. 8.9). In general:
$$\vec M_\text{res} = \sum_i(\vec r_i\times\vec F_i),\qquad\vec F_\text{res} = \sum_i\vec F_i\qquad(8.38)$$
<b>(6) Gravity:</b> torque about the centre of mass in a homogeneous field:
$$\vec M = \sum_i\vec r_i^{\,*}\times\Delta m_i\vec g = \Big(\sum_i\Delta m_i\vec r_i^{\,*}\Big)\times\vec g = \vec 0\qquad(8.39)$$
The total weight acts like a single force $M\vec g$ at the centre of mass.`,
    meta: R`Script: section 8.3.3, points 4–6, Eqs. (8.34)–(8.39), Figs. 8.8–8.10, pp. 191–194`,
    explanation: R`<b>Intuition:</b> A couple is a "pure rotation": on a steering wheel the hands push in opposite directions on opposite sides. The car is not pushed sideways, only the wheel is turned. Where the axis of rotation lies does not matter, because the couple has no net force.<br><br>
<b>Reduction:</b> Any force distribution on a rigid body, however complicated, acts like (i) a force at the chosen reference point (e.g. the centre of mass), which determines the translation, plus (ii) a torque, which determines the rotation. This is the foundation of statics and dynamics of rigid bodies.<br><br>
<b>Dependence:</b> $M = F\cdot r_{12\perp}$: twice the distance between the hands gives twice the torque for the same force (a large steering wheel in old lorries without power steering).<br><br>
<b>Connection:</b> Point (6) is the real reason why one may understand the centre of mass as the point of application of gravity (cf. 6.17). In an inhomogeneous field (tides) this is no longer exactly true.`,
    derivation: R`Reduction of a force $\vec F$ at $P$ (position vector $\vec r$) to the point $O$:
<ol class="fc-steps">
<li>At $O$ add $\vec F' = \vec F$ and $\vec F'' = -\vec F$<em>Two equal and opposite forces at the same point change nothing (sum zero, torque zero).</em></li>
<li>$\{\vec F\ \text{at}\ P,\ \vec F''\ \text{at}\ O\}$ is a couple<em>Equal magnitude, opposite, different lines of action.</em></li>
<li>$\vec M_\text{couple} = \vec r\times\vec F$<em>From (8.37) with $\vec r_{12} = \vec r - \vec 0$.</em></li>
<li>Left over: $\vec F' = \vec F$ at $O$<em>Produces no torque about $O$, but the full translation.</em></li>
<li>$\vec F$ at $P$ $\equiv$ $\vec F$ at $O$ plus torque $\vec r\times\vec F$<em>Generalised to many forces: (8.38).</em></li>
</ol>`,
    example: R`<b>Steering wheel</b> ($\varnothing = 38\,\text{cm}$): both hands pull tangentially with $25\,\text{N}$ each in opposite directions: $M = 25\,\text{N}\cdot0{,}38\,\text{m} = 9{,}5\,\text{N m}$, no net force.<br><br>
<b>Spanner with one hand:</b> $F = 50\,\text{N}$ at $r = 0{,}2\,\text{m}$ acts on the bolt like a $50\,\text{N}$ transverse force plus $10\,\text{N m}$ torque. The transverse force must be taken up by the thread; a cross-wrench with both hands (a couple) avoids it.`,
    counterexample: R`<b>No couple:</b> Two equal and opposite forces on the <i>same</i> line of action (e.g. tension at both ends of a rope) produce neither force nor torque, only internal stress. And two forces in the same direction at different points have a net force, so they are not a couple either.`,
    pitfalls: R`<ul><li>Assuming a couple shifts the centre of mass.</li>
<li>Forgetting, during reduction, to include the force at the reference point.</li>
<li>Letting gravity act at the centre of mass in an inhomogeneous field.</li></ul>`
  },
  "ph8_statik": {
    title: R`Static equilibrium: force and torque conditions (block on an inclined plane)`,
    category: R`8.4 Static equilibrium`,
    type: "beispiel",
    front: R`Which two conditions must a rigid body in <b>static equilibrium</b> satisfy? A rectangular block ($b/a = 4$) is held on an inclined plane by a string ($\mu_0 = 0{,}8$). Up to which angle of inclination $\alpha$ does it not slide?`,
    back: R`<b>Conditions:</b>
$$\vec F_\text{res} = \sum_i\vec F_i = \vec 0\quad(\text{no translation}),\qquad\vec M_\text{res} = \sum_i\vec M_i = \vec 0\quad(\text{no rotation})\qquad(8.40)$$
If the first holds, the second is independent of the reference point.<br><br>
<b>Block</b> (Tipler 12.14, Fig. 8.11): limiting case in which $\vec N$ can just still exert a torque about $S$, i.e. support only at the point $A$. Forces: $G$, string force $Z$, normal force $N$, static friction $R$.
<ol><li>perpendicular: $N = mg\cos\alpha$ (8.41, 8.42)</li>
<li>parallel: $Z = mg\sin\alpha - R$, with $R = \mu_0N$ (limiting case), so $Z = (\tan\alpha - \mu_0)mg\cos\alpha$ (8.43–8.48)</li>
<li>torques about $S$: $-\frac b2Z + \frac a2N + \frac b2\mu_0N = 0$, so $Z = \left(\frac ab+\mu_0\right)N$ (8.49–8.55)</li></ol>
Equating gives
$$\tan\alpha = \frac ab + 2\mu_0\quad\Rightarrow\quad\alpha = 61{,}6^\circ\qquad(8.57,\,8.58)$$
Limiting cases: $a/b\to0$: $\alpha = \arctan(2\mu_0) = 58{,}0^\circ$; $\mu_0\to0$: $\alpha = \arctan(a/b) = 14{,}0^\circ$ (8.59, 8.60).`,
    meta: R`Script: section 8.4, Eqs. (8.40)–(8.60), Fig. 8.11, pp. 194–197`,
    explanation: R`<b>Intuition:</b> A body stays at rest only if it is neither shifted nor twisted. For a point mass the balance of forces sufficed; an extended body can additionally tip over. That is why one also needs the balance of torques.<br><br>
<b>Method:</b> (1) Draw all forces (with their points of application!), (2) balance of forces in two convenient directions (here parallel/perpendicular to the plane), (3) balance of torques about a convenient point (one through which many unknown forces pass, or the centre of mass), (4) insert the limiting case of the inequality ($R = \mu_0N$).<br><br>
<b>The tipping-point trick:</b> In the limiting case of tipping, the point of application of the normal force moves to the edge $A$. There $N$ produces the largest possible restoring torque.<br><br>
<b>Dependencies:</b> More friction or a flatter block (larger $a/b$) allow steeper planes. Without friction the string holds the block only up to $14^\circ$, because it then tips over.`,
    derivation: R`Torques about the centre of mass $S$ (direction $\hat z$ out of the plane of the drawing):
<ol class="fc-steps">
<li>$\vec r_Z\times\vec Z = -\dfrac b2Z\,\hat z$<em>String force with lever arm $b/2$ about $S$; turns in the negative sense (8.50).</em></li>
<li>$\vec r_A\times\vec N = r_AN\sin\beta\,\hat z = \dfrac a2N\,\hat z$<em>Normal force at the tipping point $A$; lever arm $a/2$ (8.51).</em></li>
<li>$\vec r_A\times\vec R = r_AR\cos\beta\,\hat z = \dfrac b2\mu_0N\,\hat z$<em>Friction at the tipping point, lever arm $b/2$ (8.52, 8.53).</em></li>
<li>$-\dfrac b2Z + \dfrac a2N + \dfrac b2\mu_0N = 0\Rightarrow Z = \left(\dfrac ab+\mu_0\right)N$<em>Sum zero; $G$ has no moment about $S$ (8.54, 8.55).</em></li>
<li>$(\tan\alpha-\mu_0)mg\cos\alpha = \left(\dfrac ab+\mu_0\right)mg\cos\alpha$<em>Equate with the balance of forces (8.56).</em></li>
<li>$\tan\alpha = \dfrac ab + 2\mu_0 = 0{,}25 + 1{,}6 = 1{,}85\Rightarrow\alpha = 61{,}6^\circ$<em>Insert numbers (8.57, 8.58).</em></li>
</ol>`,
    example: R`<b>Ladder against a wall</b> (smooth wall, floor with $\mu_0$): length $\ell$, mass $m$, angle $\theta$ to the floor. Forces: floor $N_B = mg$, friction $R$; wall $N_W$ horizontal. Torques about the foot of the ladder: $N_W\ell\sin\theta = mg\frac\ell2\cos\theta$, so $R = N_W = \frac{mg}{2\tan\theta}\le\mu_0mg$, hence $\tan\theta\ge\frac1{2\mu_0}$. With $\mu_0 = 0{,}4$: $\theta\ge51^\circ$.`,
    counterexample: R`<b>Force balance alone:</b> It yields only $Z = (\tan\alpha-\mu_0)mg\cos\alpha$; the string could then seemingly hold the block at any angle, it would just have to pull harder. Only the torque balance shows that too large a string torque tips the block over the edge $A$. A tall, narrow block tips before it slides; this can be seen only with the torque balance.`,
    pitfalls: R`<ul><li>Forgetting the torque condition.</li>
<li>Assuming the normal force always acts at the middle; when tipping it moves to the edge.</li>
<li>Mixing torques about different points.</li>
<li>Using $R = \mu_0N$ outside the limiting case.</li></ul>`
  },
  "ph8_eulerwinkel": {
    title: R`Degrees of freedom of a rigid body and Euler angles`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "definition",
    front: R`How many <b>degrees of freedom</b> does a rigid body have, and how does one describe its orientation with the <b>Euler angles</b> $(\varphi,\vartheta,\psi)$? What are the rotation matrices, and why is $A^{-1} = A^t$?`,
    back: R`<b>Degrees of freedom:</b> a mass point 3 (on a surface 2, on a path 1). A rigid body <b>6</b>: 3 coordinates of a point $O'$ (usually the centre of mass) and 3 angles. Motion = translation of $O'$ plus rotation about $O'$. With $O'$ fixed 3 remain, with a fixed axis 1.<br><br>
<b>Euler angles</b> (convention after Goldstein, Fig. 8.12):
<ol><li>rotation about $z$ by $\varphi$: $x,y\to\xi,\eta$</li>
<li>rotation about the $\xi$-axis (line of nodes) by $\vartheta$: $\eta,\zeta\to\eta',\zeta'$</li>
<li>rotation about $\zeta' = z'$ by $\psi$: $\xi,\eta'\to x',y'$</li></ol>
$$R_\varphi = \begin{pmatrix}\cos\varphi&\sin\varphi&0\\-\sin\varphi&\cos\varphi&0\\0&0&1\end{pmatrix},\quad R_\vartheta = \begin{pmatrix}1&0&0\\0&\cos\vartheta&\sin\vartheta\\0&-\sin\vartheta&\cos\vartheta\end{pmatrix},\quad R_\psi\ \text{as}\ R_\varphi\qquad(8.61\text{–}8.63)$$
$$\vec r\,' = R_\psi R_\vartheta R_\varphi\,\vec r =: A\vec r,\qquad\vec r = A^{-1}\vec r\,',\qquad A^{-1} = R_\varphi^{-1}R_\vartheta^{-1}R_\psi^{-1} = A^t\qquad(8.64\text{–}8.67)$$`,
    meta: R`Script: sections 8.5.1–8.5.2, Eqs. (8.61)–(8.67), Fig. 8.12, pp. 197–200`,
    explanation: R`<b>Intuition:</b> To describe an aeroplane one needs its position (3 numbers) and its attitude: direction of the nose (2 angles) and rotation about the longitudinal axis (1 angle). The Euler angles are a systematic choice of these three angles.<br><br>
<b>Why exactly three in succession?</b> Rotations do not commute (Ch. 2.5.4). One must agree on a fixed order; different books use different conventions. Here: first about $z$, then about the line of nodes, then about the new $z'$-axis.<br><br>
<b>Orthogonal matrices:</b> Rotation matrices preserve lengths and angles; their columns are orthonormal. Therefore the inverse is the transpose, and reversing the motion is simple. The inverse of a product reverses the order.<br><br>
<b>Connection:</b> The Euler angles become the natural coordinates in the motion of a gyroscope (Ch. 13): $\dot\varphi$ is the precession, $\dot\vartheta$ the nutation, $\dot\psi$ the spin.`,
    derivation: R`Why $A^{-1} = A^t$:
<ol class="fc-steps">
<li>$R_\varphi^tR_\varphi = \begin{pmatrix}\cos^2+\sin^2&0&0\\0&\sin^2+\cos^2&0\\0&0&1\end{pmatrix} = \mathbb 1$<em>Check for each single rotation matrix: it is orthogonal.</em></li>
<li>$R^{-1} = R^t$ for $R_\varphi$, $R_\vartheta$, $R_\psi$<em>The inverse of an orthogonal matrix is its transpose.</em></li>
<li>$A^{-1} = (R_\psi R_\vartheta R_\varphi)^{-1} = R_\varphi^{-1}R_\vartheta^{-1}R_\psi^{-1}$<em>Inverse of a product in reversed order (8.67).</em></li>
<li>$= R_\varphi^tR_\vartheta^tR_\psi^t = (R_\psi R_\vartheta R_\varphi)^t = A^t$<em>The transpose of a product also reverses the order.</em></li>
</ol>`,
    example: R`<b>Only $\varphi = 90^\circ$</b> ($\vartheta = \psi = 0$): $A = R_\varphi$, so $\vec e_x = (1,0,0)\mapsto(0,-1,0)$ in body coordinates: the point that lies on the $x$-axis in the laboratory lies on the negative $y'$-axis of the body frame rotated by $90^\circ$.<br><br>
<b>Counting degrees of freedom:</b> A door (fixed axis): 1. A ball in space (as a rigid body): 6. A top with a fixed tip: 3.`,
    counterexample: R`<b>Gimbal lock:</b> For $\vartheta = 0$ the first and third rotation axes coincide; $\varphi$ and $\psi$ are then no longer independent (only $\varphi+\psi$ counts). The Euler angles are singular at this point; therefore quaternions are often used in spaceflight and computer graphics.`,
    pitfalls: R`<ul><li>Swapping the order of the rotations.</li>
<li>Mixing conventions of different books (e.g. $x$-convention vs. $y$-convention).</li>
<li>Writing $A^{-1}$ as $R_\psi^{-1}R_\vartheta^{-1}R_\varphi^{-1}$ (wrong order).</li></ul>`
  },
  "ph8_translation_rotation_energie": {
    title: R`Momentum, angular momentum and energy of a rigid body: translation plus rotation`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "herleitung",
    front: R`What are the momentum, angular momentum and kinetic energy of a rigid body? Show with $\vec v_i = \vec v_S + \vec\omega\times\vec r_i^{\,*}$ that $T = \tfrac12Mv_S^2 + T^*$ with $T^* = \tfrac12\sum m_i(\vec\omega\times\vec r_i^{\,*})^2$.`,
    back: R`<b>Translation:</b> for pure translation all $\vec v_i = \vec v_S$:
$$\vec p = \sum\Delta m_i\vec v_i = M\vec v_S = \vec v_S\int_V\rho\,dV,\qquad\frac{d\vec p}{dt} = \vec F_\text{ext},\qquad T = \tfrac12Mv_S^2\qquad(8.68\text{–}8.72)$$
<b>Rotation:</b> angular momentum (as in Ch. 6.4.4)
$$\vec L = \vec L^* + \vec r_S\times\vec p_S,\qquad\frac{d\vec L}{dt} = \vec M_\text{ext}\qquad(8.73,\,8.74)$$
<b>General motion:</b> $\vec v_i = \vec v_S + \vec v_i^{\,*} = \vec v_S + (\vec\omega\times\vec r_i^{\,*})$ (8.75):
$$T = \tfrac12\sum m_i\{\vec v_S+\vec\omega\times\vec r_i^{\,*}\}^2 = \tfrac12v_S^2\underbrace{\sum m_i}_{M} + \vec v_S\cdot\Big(\vec\omega\times\underbrace{\sum m_i\vec r_i^{\,*}}_{=\vec 0}\Big) + \tfrac12\sum m_i(\vec\omega\times\vec r_i^{\,*})^2\qquad(8.76,\,8.77)$$
$$T = \tfrac12Mv_S^2 + \tfrac12\sum_im_i(\vec\omega\times\vec r_i^{\,*})^2 =: T_S + T^*\qquad(8.78)$$`,
    meta: R`Script: sections 8.5.3–8.5.4, Eqs. (8.68)–(8.78), Figs. 8.13–8.14, pp. 200–203`,
    explanation: R`<b>Intuition:</b> A flying, spinning discus has two energy accounts: it flies as a whole (translational energy of the centre of mass), and it spins about its centre of mass (rotational energy). The cross term vanishes because in the centre-of-mass frame the centre of mass sits at the origin.<br><br>
<b>The role of $\vec\omega\times\vec r^{\,*}$:</b> For a rigid body the motion relative to the centre of mass is not an arbitrary motion, but a pure rotation with a common $\vec\omega$. Therefore $T^*$ can be expressed by a single body quantity (moment of inertia or inertia tensor) and $\omega$ (8.5.5).<br><br>
<b>Equations of motion:</b> translation: $M\dot{\vec v}_S = \vec F_\text{ext}$; rotation: $\dot{\vec L}^* = \vec M_\text{ext}^*$ (torque about the centre of mass). Together 6 equations for 6 degrees of freedom.<br><br>
<b>Connection:</b> Direct transfer of the decompositions from Ch. 6.4 (momentum, energy, angular momentum) to the rigid body.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v_i = \vec v_S + \vec\omega\times\vec r_i^{\,*}$<em>Rigid body: the velocity relative to the centre of mass is a rotation (8.75).</em></li>
<li>$v_i^2 = v_S^2 + 2\,\vec v_S\cdot(\vec\omega\times\vec r_i^{\,*}) + (\vec\omega\times\vec r_i^{\,*})^2$<em>Expand the square.</em></li>
<li>$\sum m_i\,\vec v_S\cdot(\vec\omega\times\vec r_i^{\,*}) = \vec v_S\cdot\left(\vec\omega\times\sum m_i\vec r_i^{\,*}\right)$<em>Pull constant vectors out of the sum; the cross product is linear (8.77).</em></li>
<li>$\sum m_i\vec r_i^{\,*} = \vec 0$<em>Definition of the centre of mass (6.14).</em></li>
<li>$T = \tfrac12Mv_S^2 + \tfrac12\sum m_i(\vec\omega\times\vec r_i^{\,*})^2$<em>The cross term drops out (8.78).</em></li>
</ol>`,
    example: R`<b>Rolling cylinder</b> (mass $M$, radius $R$, $v_S = \omega R$): $T_S = \tfrac12Mv_S^2$, $T^* = \tfrac12\cdot\tfrac12MR^2\cdot\omega^2 = \tfrac14Mv_S^2$. Total $T = \tfrac34Mv_S^2$; one third of the energy is in the rotation.<br>
With $M = 2\,\text{kg}$, $v_S = 3\,\text{m/s}$: $T_S = 9\,\text{J}$, $T^* = 4{,}5\,\text{J}$.`,
    counterexample: R`<b>Decomposition about another point:</b> If one decomposes about an arbitrary point on the body (not the centre of mass), a cross term remains. Exception: the instantaneously resting contact point of a rolling body. There $T = \tfrac12J_P\omega^2$ with the moment of inertia about the contact point (Steiner) and no translational part.`,
    pitfalls: R`<ul><li>Forgetting the rotational energy of rolling bodies.</li>
<li>Computing $T^*$ with the distance from the origin instead of from the centre of mass.</li>
<li>Assuming that translation and rotation are always coupled for rigid bodies; they are coupled only through constraints (e.g. rolling).</li></ul>`
  },
  "ph8_traegheitsmoment": {
    title: R`Moment of inertia J_A = ∫ r⊥² dm for rotation about a fixed axis`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "herleitung",
    front: R`A rigid body rotates with $\vec\omega$ about a <b>space-fixed axis</b> $A$. Derive $L_\parallel = J_A\,\omega$ and define the <b>moment of inertia</b> $J_A$. Why does it depend on the position and direction of the axis?`,
    back: R`What matters are the <b>perpendicular distances</b> $r_{i\perp}$ from the axis (Fig. 8.15). Angular momentum of a mass element along the axis:
$$\vec L_{\parallel i} = \vec r_{i\perp}\times\vec p_i = \Delta m_i\{\vec r_{i\perp}\times(\vec\omega\times\vec r_{i\perp})\} = \Delta m_i\,r_{i\perp}^2\,\vec\omega\qquad(8.79\text{–}8.81)$$
Sum:
$$L_\parallel = \Big(\sum_i\Delta m_i\,r_{i\perp}^2\Big)\omega = J_A\,\omega\qquad(8.82,\,8.83)$$
<b>Moment of inertia</b> about the axis $A$:
$$J_A = \sum_i\Delta m_i\,r_{i\perp}^2\;\longrightarrow\;J_A = \int r_\perp^2\,dm = \int_Vr_\perp^2\rho\,dV\qquad(8.84,\,8.85)$$
Unit $\text{kg m}^2$. It contains exclusively properties of the body <i>and</i> of the axis; since only $r_\perp$ counts, $J_A$ depends on the location and direction of the rotation axis.`,
    meta: R`Script: section 8.5.5.1, Eqs. (8.79)–(8.85), Fig. 8.15, pp. 204–205`,
    explanation: R`<b>Intuition:</b> The moment of inertia is the "mass of rotational motion": it measures how hard it is to set a body spinning. What matters is not only how much mass there is, but <b>how far it lies from the axis</b>, and that enters squared.<br><br>
<b>Dependence $\propto r_\perp^2$:</b> Twice the distance gives four times the moment of inertia. That is why a ring ($MR^2$) is twice as inert as a disc of the same mass ($\tfrac12MR^2$), and why a tightrope walker uses a long pole.<br><br>
<b>Origin of $r^2$:</b> One factor $r$ comes from the speed ($v = \omega r$), the second from the lever arm in the angular momentum ($L = r\cdot p$). The same holds for energy: $\tfrac12mv^2 = \tfrac12mr^2\omega^2$.<br><br>
<b>Connection:</b> For a fixed axis $\vec L_\parallel\parallel\vec\omega$. In free rotation $\vec L$ is in general <i>not</i> parallel to $\vec\omega$; then one needs the inertia tensor (Ch. 13).`,
    derivation: R`<ol class="fc-steps">
<li>$\vec v_i = \vec\omega\times\vec r_{i\perp}$<em>Each mass element moves on a circle about the axis; only the perpendicular distance counts.</em></li>
<li>$\vec L_{\parallel i} = \Delta m_i\,\vec r_{i\perp}\times(\vec\omega\times\vec r_{i\perp})$<em>Angular momentum component along the axis (8.80).</em></li>
<li>$= \Delta m_i\left[\vec\omega\,(\vec r_{i\perp}\cdot\vec r_{i\perp}) - \vec r_{i\perp}(\vec r_{i\perp}\cdot\vec\omega)\right]$<em>BAC-CAB rule.</em></li>
<li>$= \Delta m_i\,r_{i\perp}^2\,\vec\omega$<em>$\vec r_{i\perp}\perp\vec\omega$, so the second term is zero (8.81).</em></li>
<li>$L_\parallel = \omega\sum\Delta m_ir_{i\perp}^2 = J_A\omega$<em>$\omega$ is the same for all elements and can be factored out (8.82–8.84).</em></li>
</ol>`,
    example: R`<b>Dumbbell:</b> two masses of $1\,\text{kg}$ each at a distance of $0{,}5\,\text{m}$ from the axis (massless rod): $J = 2\cdot1\cdot0{,}25 = 0{,}5\,\text{kg m}^2$. At $\omega = 4\,\text{s}^{-1}$: $L = 2\,\text{kg m}^2/\text{s}$.<br>
Same masses slid to $0{,}25\,\text{m}$: $J = 0{,}125\,\text{kg m}^2$, a quarter. At the same $L$ (conservation of angular momentum) $\omega$ rises to $16\,\text{s}^{-1}$.`,
    counterexample: R`<b>"The moment of inertia of a body" without an axis is meaningless:</b> A rod has $\frac1{12}M\ell^2$ about its transverse central axis, $\frac13M\ell^2$ about one end, and almost zero about its longitudinal axis. The same mass, three completely different moments of inertia.`,
    pitfalls: R`<ul><li>Using the distance from the origin $r$ instead of the perpendicular distance $r_\perp$ to the axis.</li>
<li>Weighting with $r$ instead of $r^2$.</li>
<li>Using a moment of inertia without stating the axis.</li></ul>`
  },
  "ph8_rotationsenergie_drehmoment": {
    title: R`Rotational energy T* = ½Jω² and equation of motion M = J dω/dt`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "gesetz",
    front: R`For rotation about a fixed axis, derive the <b>rotational energy</b> $T^* = \tfrac12J_A\omega^2$ and the <b>equation of motion</b> $M_\parallel = J_A\dot\omega$. Which force components contribute to the torque? Set up the analogy to translation (Tab. 8.1) with work and power.`,
    back: R`<b>Energy</b> (in the centre-of-mass frame, $\vec r^{\,*}\equiv\vec r$, $\vec r\perp\vec\omega$):
$$T^* = \tfrac12\sum m_i(\vec\omega\times\vec r_i)^2 = \tfrac12\omega^2\sum m_ir_i^2 = \tfrac12J_A\omega^2\qquad(8.86\text{–}8.88)$$
<b>Torque</b> on an element:
$$\vec M_i = \frac{d\vec L_i}{dt} = \Delta m_i\Big(\vec r_{i\perp}\times\frac{d\vec v_i}{dt} + \underbrace{\frac{d\vec r_{i\perp}}{dt}\times\vec v_i}_{=\vec 0}\Big) = \vec r_{i\perp}\times\vec F_t\qquad(8.89,\,8.90)$$
Only the <b>tangential component</b> $\vec F_t$ contributes; the radial component and the component parallel to the axis are taken up by the bearings.
$$M_\parallel = \sum\Delta m_ir_{i\perp}^2\frac{d\omega}{dt} = J_A\frac{d\omega}{dt} = J_A\ddot\varphi\qquad(8.91\text{–}8.93)$$
<b>Table 8.1:</b> $x\leftrightarrow\varphi$, $v\leftrightarrow\omega$, $a\leftrightarrow\alpha$, $m\leftrightarrow J_A$, $p = mv\leftrightarrow L = J_A\omega$, $F\leftrightarrow M$, $F = \dot p\leftrightarrow M = \dot L$, $W = \int\vec F\cdot d\vec r\leftrightarrow W = \int M\,d\varphi$, $T = \tfrac12mv^2\leftrightarrow T^* = \tfrac12J_A\omega^2$, $P = \vec F\cdot\vec v\leftrightarrow P = M\omega$.`,
    meta: R`Script: sections 8.5.5.2–8.5.6, Eqs. (8.86)–(8.93), Tab. 8.1, pp. 205–207`,
    explanation: R`<b>Intuition:</b> The torque plays for rotation the same role as force plays for translation; the moment of inertia plays the role of mass. A large $J$ means: at the same torque, slow to reach speed, but also a lot of stored energy (flywheel).<br><br>
<b>Bearing forces:</b> With a fixed axis, the bearing "absorbs" every force component that wants to shift or tilt the axis. For the rotation only the tangential component times the lever arm counts.<br><br>
<b>Work and power:</b> When turning by $d\varphi$, the point of application travels the distance $r\,d\varphi$; the work is $F_tr\,d\varphi = M\,d\varphi$. The power is $M\omega$, the familiar formula for motors (torque times rotational speed).<br><br>
<b>Dependencies:</b> $T^*\propto\omega^2$ and $\propto J$; at the same $L$: $T^* = \frac{L^2}{2J}$, so the energy grows when $J$ is reduced (pirouette).`,
    derivation: R`<ol class="fc-steps">
<li>$(\vec\omega\times\vec r_i)^2 = \omega^2r_i^2$ for $\vec r_i\perp\vec\omega$<em>Magnitude of the cross product of perpendicular vectors (8.87).</em></li>
<li>$T^* = \tfrac12\omega^2\sum m_ir_i^2 = \tfrac12J_A\omega^2$<em>Factor out the common $\omega^2$ (8.88).</em></li>
<li>$\dfrac{d}{dt}(\vec r_{i\perp}\times\Delta m_i\vec v_i)$, with $\dot{\vec r}_{i\perp}\parallel\vec v_i$<em>The second term of the product rule vanishes (8.89).</em></li>
<li>$\dfrac{dL_{\parallel i}}{dt} = \Delta m_ir_{i\perp}^2\dfrac{d\omega}{dt}$<em>From $L_{\parallel i} = \Delta m_ir_{i\perp}^2\omega$ with fixed $r_{i\perp}$ (8.91).</em></li>
<li>$M_\parallel = J_A\dot\omega$<em>Sum over all elements (8.92, 8.93).</em></li>
<li>$dW = M\,d\varphi\Rightarrow P = M\dfrac{d\varphi}{dt} = M\omega$<em>Work and power of rotation (Tab. 8.1).</em></li>
</ol>`,
    example: R`<b>Flywheel</b> (solid disc, $M = 100\,\text{kg}$, $R = 0{,}5\,\text{m}$, $J = \tfrac12MR^2 = 12{,}5\,\text{kg m}^2$) at $3000\,\text{rpm}$ ($\omega = 314\,\text{s}^{-1}$): $T^* = \tfrac12\cdot12{,}5\cdot314^2\,\text{J} = 617\,\text{kJ}$.<br>
Drive with $M = 50\,\text{N m}$: $\alpha = 4\,\text{s}^{-2}$, reaches the speed after $78{,}5\,\text{s}$.<br>
<b>Car engine:</b> $200\,\text{N m}$ at $4000\,\text{rpm}$ ($419\,\text{s}^{-1}$): $P = 84\,\text{kW}$.`,
    counterexample: R`<b>$M = J\dot\omega$ with variable $J$:</b> An ice skater pulls in her arms, with no external torque. $M = J\dot\omega$ would give $\dot\omega = 0$, but $\omega$ rises. The correct form is $M = \frac{d}{dt}(J\omega) = \dot J\omega + J\dot\omega = 0$.`,
    pitfalls: R`<ul><li>Confusing N m (torque) and J (energy).</li>
<li>Counting the bearing forces as the cause of torques.</li>
<li>$P = M\omega$ with $\omega$ in rpm instead of rad/s.</li>
<li>Applying $M = J\dot\omega$ with variable $J$.</li></ul>`
  },
  "ph8_traegheitsmomente_zylinder_kugel": {
    title: R`Moments of inertia: hollow cylinder MR², solid cylinder ½MR², sphere ⅖MR²`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "herleitung",
    front: R`Calculate the moments of inertia (homogeneous, axis through the centre of mass) of a <b>thin-walled cylinder</b>, a <b>solid cylinder</b> and a <b>solid sphere</b> (using cylindrical coordinates). Why are they different, although mass and radius are the same?`,
    back: R`<b>Thin-walled cylinder</b> (all mass at distance $R$):
$$J_z = \int R^2\,dm = MR^2\qquad(8.94,\,8.95)$$
<b>Solid cylinder</b> (height $h$), $dV = r_\perp\,dr_\perp\,d\varphi\,dz$:
$$J_z = \rho\int_0^hdz\int_0^{2\pi}d\varphi\int_0^Rr_\perp^2\,r_\perp\,dr_\perp = \rho\,h\cdot2\pi\cdot\tfrac14R^4 = \tfrac12\underbrace{\rho\pi R^2h}_{M}R^2 = \tfrac12MR^2\qquad(8.96,\,8.97)$$
<b>Solid sphere:</b> likewise cylindrical coordinates (they give the perpendicular distance to the $z$-axis directly), but limit $0\le r_\perp\le\sqrt{R^2-z^2}$ (8.98):
$$J_z = 2\pi\rho\int_{-R}^{R}\tfrac14(R^2-z^2)^2dz = \tfrac{8}{15}\pi\rho R^5 = \tfrac25\underbrace{\rho\tfrac43\pi R^3}_{M}R^2 = \tfrac25MR^2\qquad(8.99,\,8.100)$$`,
    meta: R`Script: section 8.5.7, points 1–3, Eqs. (8.94)–(8.100), Figs. 8.16a–c, pp. 207–209`,
    explanation: R`<b>Intuition:</b> Same mass, same radius, but different distribution: in the hollow cylinder everything sits at the outside ($J = MR^2$, the maximum possible), in the solid cylinder also inside ($\tfrac12$), in the sphere even more close to the axis (the "poles" lie on the axis, $\tfrac25$).<br><br>
<b>Rule of thumb:</b> $J = kMR^2$ with a shape factor $k\le1$, which says how far out the mass lies on average. The "radius of gyration" $R_g = \sqrt{J/M}$ is the distance at which one would have to concentrate the whole mass: hollow cylinder $R$, solid cylinder $0{,}71R$, sphere $0{,}63R$.<br><br>
<b>Independence of length:</b> For cylinders about the long axis $J$ does not depend on the height $h$, only on $M$ and $R$.<br><br>
<b>Connection:</b> When rolling ($v = \omega R$) $k$ decides how much energy goes into rotation. A sphere ($k = 0{,}4$) rolls down an inclined plane faster than a solid cylinder ($k = 0{,}5$), and that faster than a hollow cylinder ($k = 1$), regardless of mass and radius (8.5.9).`,
    derivation: R`Solid sphere step by step:
<ol class="fc-steps">
<li>$J_z = \rho\displaystyle\int_{-R}^{R}dz\int_0^{2\pi}d\varphi\int_0^{\sqrt{R^2-z^2}}r_\perp^3\,dr_\perp$<em>Cylindrical coordinates; the sphere is sliced into discs of height $dz$; each disc has radius $\sqrt{R^2-z^2}$ (8.98).</em></li>
<li>$\displaystyle\int_0^{\sqrt{R^2-z^2}}r_\perp^3dr_\perp = \tfrac14(R^2-z^2)^2$<em>Innermost integral: moment of inertia of a disc per density and height.</em></li>
<li>$J_z = 2\pi\rho\cdot\tfrac14\displaystyle\int_{-R}^R(R^4-2R^2z^2+z^4)dz = \tfrac12\pi\rho\left[R^4z-\tfrac23R^2z^3+\tfrac15z^5\right]_{-R}^{R}$<em>Expand and integrate.</em></li>
<li>$= \tfrac12\pi\rho\cdot2R^5\left(1-\tfrac23+\tfrac15\right) = \pi\rho R^5\cdot\tfrac{8}{15}$<em>Odd function: symmetric limits, factor 2.</em></li>
<li>$J_z = \tfrac{8}{15}\pi\rho R^5 = \tfrac25\left(\tfrac43\pi R^3\rho\right)R^2 = \tfrac25MR^2$<em>Expressed through the sphere's mass (8.99, 8.100).</em></li>
</ol>`,
    example: R`<b>Earth</b> as a homogeneous sphere: $J = \tfrac25\cdot5{,}97\cdot10^{24}\cdot(6{,}371\cdot10^{6})^2 = 9{,}7\cdot10^{37}\,\text{kg m}^2$. Measured is $8{,}0\cdot10^{37}$, so $J = 0{,}33\,MR^2$: the Earth is denser towards the centre.<br>
<b>Comparison</b> for $M = 1\,\text{kg}$, $R = 0{,}1\,\text{m}$: hollow cylinder $0{,}010$, solid cylinder $0{,}005$, sphere $0{,}004\,\text{kg m}^2$.`,
    counterexample: R`<b>Hollow sphere</b> (thin shell): $J = \tfrac23MR^2$, not $MR^2$. Although all mass lies at distance $R$ from the centre, the perpendicular distance to the axis is small near the poles. For $J$ what counts is the distance to the <i>axis</i>, not to the centre.`,
    pitfalls: R`<ul><li>Using spherical coordinates with $r^2$ instead of $r_\perp^2 = r^2\sin^2\vartheta$ for the sphere.</li>
<li>Forgetting the Jacobian factor $r_\perp$ in the volume element; the result then does not even have the unit $\text{kg m}^2$.</li>
<li>Confusing the hollow sphere ($\tfrac23$) and the solid sphere ($\tfrac25$).</li></ul>`
  },
  "ph8_traegheitsmomente_quader_stab": {
    title: R`Moments of inertia: cuboid M(a²+b²)/12 and thin rod Mℓ²/12`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "herleitung",
    front: R`Calculate the moment of inertia of a homogeneous <b>cuboid</b> (edges $a$, $b$, $c$) about the $z$-axis through the centre of mass, and of a <b>thin rod</b> of length $\ell$ about a transverse axis through its midpoint.`,
    back: R`<b>Cuboid</b> ($r_\perp^2 = x^2+y^2$):
$$J_z = \rho\int_{-c/2}^{c/2}dz\int_{-b/2}^{b/2}dy\int_{-a/2}^{a/2}(x^2+y^2)\,dx = \tfrac1{12}\underbrace{abc}_{V}\,(a^2+b^2)\,\rho\qquad(8.101)$$
$$J_z = \frac{M}{12}(a^2+b^2)\qquad(8.102)$$
<b>Thin rod</b> (transverse dimensions negligible), with linear density $\lambda = dm/dx$:
$$J_z = \int_{-\ell/2}^{\ell/2}x^2\lambda\,dx = \tfrac1{12}\lambda\ell^3 = \tfrac1{12}M\ell^2\qquad(8.103,\,8.104)$$
The edge $c$ along the axis plays no role.`,
    meta: R`Script: section 8.5.7, points 4–5, Eqs. (8.101)–(8.104), Figs. 8.16d–e, pp. 209–210`,
    explanation: R`<b>Intuition:</b> For the cuboid every direction perpendicular to the axis contributes independently: the extent in $x$ with $a^2/12$, the one in $y$ with $b^2/12$ (per mass). The rod is the limiting case $b\to0$ of a flat cuboid.<br><br>
<b>Why $1/12$?</b> The mean of $x^2$ over an interval $[-\ell/2,\ell/2]$ is $\ell^2/12$. The moment of inertia is $M$ times the mean square distance.<br><br>
<b>Dependencies:</b> $J\propto\ell^2$: doubling the rod length (at the same mass) gives four times $J$; at the same density (so doubled mass) eight times. The edge along the axis ($c$) does not count at all, because it does not change the distance to the axis.<br><br>
<b>Connection:</b> About the end of a rod (Steiner, 8.5.8): $\frac1{12}M\ell^2 + M\frac{\ell^2}4 = \frac13M\ell^2$, the basis of the physical pendulum and the falling rod.`,
    derivation: R`Cuboid step by step:
<ol class="fc-steps">
<li>$\displaystyle\int_{-a/2}^{a/2}(x^2+y^2)\,dx = \left[\tfrac13x^3+y^2x\right]_{-a/2}^{a/2} = \tfrac1{12}a^3 + ay^2$<em>Innermost integral over $x$ at fixed $y$.</em></li>
<li>$\displaystyle\int_{-b/2}^{b/2}\left(\tfrac1{12}a^3+ay^2\right)dy = \tfrac1{12}a^3b + \tfrac1{12}ab^3 = \tfrac1{12}ab(a^2+b^2)$<em>Over $y$: $\int y^2dy = b^3/12$.</em></li>
<li>$\displaystyle\int_{-c/2}^{c/2}dz = c$<em>Over $z$: gives only the length $c$.</em></li>
<li>$J_z = \tfrac1{12}abc(a^2+b^2)\rho = \tfrac{M}{12}(a^2+b^2)$<em>With $M = \rho abc$ (8.101, 8.102).</em></li>
<li>Rod: $J = \lambda\left[\tfrac13x^3\right]_{-\ell/2}^{\ell/2} = \tfrac{\lambda\ell^3}{12} = \tfrac{M\ell^2}{12}$<em>With $M = \lambda\ell$ (8.103, 8.104).</em></li>
</ol>`,
    example: R`<b>Door</b> ($M = 20\,\text{kg}$, width $0{,}9\,\text{m}$, thickness $4\,\text{cm}$) about an axis through the centre of mass parallel to the hinge: $J = \frac{20}{12}(0{,}81+0{,}0016)\,\text{kg m}^2 = 1{,}35\,\text{kg m}^2$; about the hinge (Steiner): $1{,}35 + 20\cdot0{,}45^2 = 5{,}4\,\text{kg m}^2$, four times as much.<br>
<b>Metre stick</b> ($0{,}2\,\text{kg}$): about the middle $0{,}0167$, about the end $0{,}0667\,\text{kg m}^2$.`,
    counterexample: R`<b>Cube:</b> $J = \frac{M}{12}(a^2+a^2) = \frac16Ma^2$ for <i>every</i> axis through the centre, even for the space diagonal. A cube behaves like a sphere with respect to inertia (all three principal moments of inertia equal), although it is not spherical. Having the same shape and the same inertia are different things (Ch. 13).`,
    pitfalls: R`<ul><li>Inserting the edge along the axis into the formula.</li>
<li>Confusing $\frac13M\ell^2$ (end) and $\frac1{12}M\ell^2$ (middle).</li>
<li>Integrating $x^2$ from $0$ to $\ell$ instead of from $-\ell/2$ to $\ell/2$ (that gives the moment of inertia about the end).</li></ul>`
  },
  "ph8_steiner": {
    title: R`Parallel axis theorem (Steiner): J_z' = J_z + M a²`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "herleitung",
    front: R`Derive the <b>Steiner parallel axis theorem</b> for the moment of inertia about an axis $z'$ at distance $a$, parallel to the centre-of-mass axis $z$. Why does the cross term vanish, and what follows for the choice of rotation axis?`,
    back: R`With $\vec r\,' = \vec a + \vec r$ (Fig. 8.17; $\vec a$, $\vec r$ each measured perpendicular to the axis):
$$J_{z'} = \int r'^2\,dm = \int(\vec a+\vec r)^2dm = a^2\underbrace{\int dm}_{=M} + 2\vec a\cdot\underbrace{\int\vec r\,dm}_{=\vec 0} + \underbrace{\int r^2\,dm}_{=J_z}\qquad(8.105)$$
The middle term vanishes because of the definition of the centre of mass. <b>Steiner’s theorem:</b>
$$J_{z'} = J_z + Ma^2\qquad(8.106)$$
Among all parallel axes the centre-of-mass axis has the <b>smallest</b> moment of inertia.`,
    meta: R`Script: section 8.5.8, Eqs. (8.105)–(8.106), Fig. 8.17, p. 210`,
    explanation: R`<b>Intuition:</b> If a body rotates about an axis that does not pass through its centre of mass, the centre of mass itself moves on a circle of radius $a$; in addition the body rotates about its centre of mass. Steiner splits exactly this way: $Ma^2$ (centre of mass as a point mass) plus $J_z$ (own rotation).<br><br>
<b>Energy analogy:</b> $\tfrac12J_{z'}\omega^2 = \tfrac12M(a\omega)^2 + \tfrac12J_z\omega^2$, i.e. translational energy of the centre of mass plus rotational energy about it (8.5.4).<br><br>
<b>Dependence:</b> The moment of inertia grows quadratically with the distance of the axis. That is why it is easier to rotate a rod about its middle than about one end (factor 4).<br><br>
<b>Connection:</b> Indispensable for pendulums (rotation about the suspension point), rolling bodies (rotation about the contact point), the Maxwell wheel (8.5.9.2) and cranks. Caution: Steiner applies only when starting from the centre-of-mass axis.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec r\,' = \vec a + \vec r$<em>Perpendicular distance of a mass element from the new axis = axis offset plus distance from the centre-of-mass axis (as vectors in the plane perpendicular to the axis).</em></li>
<li>$r'^2 = a^2 + 2\,\vec a\cdot\vec r + r^2$<em>Square of the magnitude.</em></li>
<li>$J_{z'} = a^2\int dm + 2\vec a\cdot\int\vec r\,dm + \int r^2\,dm$<em>$\vec a$ is the same for all elements and comes out of the integral (8.105).</em></li>
<li>$\int\vec r\,dm = M\vec r_S = \vec 0$<em>$\vec r$ is measured from the centre-of-mass axis: the centre of mass lies at the origin.</em></li>
<li>$J_{z'} = Ma^2 + J_z$<em>Steiner (8.106).</em></li>
</ol>`,
    example: R`<b>Rod about its end:</b> $J = \frac1{12}M\ell^2 + M\left(\frac\ell2\right)^2 = \frac13M\ell^2$.<br>
<b>Solid cylinder about a generator line</b> (rolling cylinder, contact point): $J = \tfrac12MR^2 + MR^2 = \tfrac32MR^2$.<br>
<b>Sphere about a tangent point:</b> $\tfrac25MR^2+MR^2 = \tfrac75MR^2$.`,
    counterexample: R`<b>Applying it starting from a non-centre-of-mass axis:</b> Suppose $J_A = \frac13M\ell^2$ (rod end) is known. For the other end axis ($a = \ell$), "Steiner" would give $\frac13M\ell^2 + M\ell^2 = \frac43M\ell^2$; the correct value is again $\frac13M\ell^2$. One must always go via the centre of mass: $J_B = J_S + M(\ell/2)^2$.`,
    pitfalls: R`<ul><li>Applying Steiner between two axes, neither of which passes through the centre of mass.</li>
<li>Linking non-parallel axes with Steiner.</li>
<li>Subtracting $Ma^2$ instead of adding it (the moment of inertia about the centre of mass is the smallest).</li></ul>`
  },
  "ph8_rollen": {
    title: R`Rolling bodies: rolling condition v_S = Rω and rolling as rotation about the contact point`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "konzept",
    front: R`What is the <b>rolling condition</b>? Distinguish pure sliding, pure rotation and rolling. Why is the contact point at rest during rolling, and how fast is the topmost point? How fast does a body roll down an inclined plane?`,
    back: R`<b>Rolling condition</b> (Fig. 8.18):
$$v_S = R\omega = R\dot\varphi,\qquad a_S = R\ddot\varphi = R\alpha\qquad(8.107,\,8.108)$$
Depending on the friction with the ground (Figs. 8.19–8.21):
<ul><li><b>Pure translation:</b> all points have $v_0$, the ball slides.</li>
<li><b>Pure rotation:</b> rotation on the spot; at the top $+\omega R$, at the bottom $-\omega R$.</li>
<li><b>Rolling</b> = superposition with $v = R\omega$: at the contact point $v_x = 0$ (it is at rest), at the top $v_x = 2\omega R$. Rolling can also be regarded as rotation about the instantaneously resting contact point with $\omega$; this pivot moves with $v_S$.</li></ul>
<b>Inclined plane</b> (inclination $\theta$, moment of inertia $J_S = kmR^2$), from energy or from the torque about the contact point:
$$a_S = \frac{g\sin\theta}{1+J_S/(mR^2)} = \frac{g\sin\theta}{1+k}$$`,
    meta: R`Script: section 8.5.9, Eqs. (8.107)–(8.108), Figs. 8.18–8.21, pp. 211–212`,
    explanation: R`<b>Intuition:</b> When rolling, every point of the rim briefly "touches" the ground without sliding, so with velocity zero relative to the ground. The topmost point is twice as fast as the axle (spokes at the top of a bicycle wheel look blurred in a photo, at the bottom sharp).<br><br>
<b>Why slower than sliding?</b> The potential energy is shared between translation and rotation: $mgh = \tfrac12mv^2(1+k)$. The larger $k$ (mass far out), the more energy goes into rotation, the slower the translation.<br><br>
<b>Race on the inclined plane:</b> ball ($k = 0{,}4$) ahead of solid cylinder ($0{,}5$) ahead of hollow cylinder ($1$), regardless of mass and radius.<br><br>
<b>Friction:</b> In pure rolling the friction force is a <i>static</i> friction at the resting contact point. It does no work, but it provides the torque that drives the rotation.`,
    derivation: R`Rolling on the inclined plane with the torque about the contact point $P$:
<ol class="fc-steps">
<li>$J_P = J_S + mR^2 = (k+1)mR^2$<em>Steiner: instantaneous axis of rotation through the resting contact point.</em></li>
<li>$M_P = mgR\sin\theta$<em>Only the weight has a moment about $P$; the normal and friction forces act at $P$.</em></li>
<li>$J_P\alpha = mgR\sin\theta\;\Rightarrow\;\alpha = \dfrac{g\sin\theta}{(1+k)R}$<em>Equation of motion of rotation about $P$.</em></li>
<li>$a_S = R\alpha = \dfrac{g\sin\theta}{1+k}$<em>Rolling condition (8.108).</em></li>
<li>Energy check: $mgh = \tfrac12mv^2 + \tfrac12kmR^2\dfrac{v^2}{R^2}\Rightarrow v^2 = \dfrac{2gh}{1+k}$<em>For constant acceleration $v^2 = 2a_Ss$ with $h = s\sin\theta$: consistent.</em></li>
</ol>`,
    example: R`Inclined plane $\theta = 30^\circ$ ($g\sin\theta = 4{,}9\,\text{m/s}^2$):<br>
sliding without friction $4{,}9$; ball $\frac{4{,}9}{1{,}4} = 3{,}5$; solid cylinder $3{,}27$; hollow cylinder $2{,}45\,\text{m/s}^2$.<br>
After $2\,\text{m}$ of path ($h = 1\,\text{m}$): ball $v = \sqrt{2\cdot9{,}81/1{,}4} = 3{,}74\,\text{m/s}$, hollow cylinder $3{,}13\,\text{m/s}$.`,
    counterexample: R`<b>Plane too steep or too little static friction:</b> The required static friction is $F_R = \frac{k}{1+k}mg\sin\theta$. If it exceeds $\mu_0mg\cos\theta$, i.e. $\tan\theta>\frac{1+k}{k}\mu_0$, the body additionally slides, and the rolling condition no longer holds (e.g. a ball on ice).`,
    pitfalls: R`<ul><li>Assuming the rolling condition without checking it.</li>
<li>Believing that friction during rolling consumes energy (static friction at the resting point does no work).</li>
<li>Forgetting the rotational energy and using $a = g\sin\theta$.</li>
<li>Confusing the speed of the topmost point with $v_S$ ($2v_S$).</li></ul>`
  },
  "ph8_rollreibung": {
    title: R`Rolling friction: μ_R = m_R / r`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "herleitung",
    front: R`Where does <b>rolling friction</b> come from? For an unpowered wheel at constant speed, derive $F = \mu_RF_N$ with $\mu_R = m_R/r$. Why is rolling friction so much smaller than sliding friction?`,
    back: R`Equilibrium at constant speed (Fig. 8.22):
$$F = F_R\le\mu_0F_N,\qquad F_N = F_G\qquad(8.109,\,8.110)$$
($F$: force with which the vehicle pushes the wheel forward.) Decisive: the normal force $F_N$ acts a distance $m_R$ <b>ahead</b> of the vertical through the axle (deformation of wheel and surface). It produces a braking torque:
$$M = F_Nm_R - rF_R\qquad(8.111)$$
Unpowered wheel, bearing friction neglected: $M = 0$, hence
$$F = F_R = \frac{m_R}{r}F_N = \mu_RF_N,\qquad\mu_R = \frac{m_R}{r}\qquad(8.112,\,8.113)$$
$\mu_R$ depends on the wheel radius $r$ and is typically $0{,}001\dots0{,}01$, much smaller than $\mu$ or $\mu_0$. Tab. 3.3: lever arm $m_R = 0{,}42\,\text{mm}$ (steel/steel), $0{,}9\,\text{mm}$ (wood).`,
    meta: R`Script: section 8.5.9.1, Eqs. (8.109)–(8.113), Fig. 8.22, Tab. 3.3, pp. 211–213`,
    explanation: R`<b>Intuition:</b> A wheel and the road deform slightly at the contact. In front of the contact point the material is compressed, behind it relaxes (with real materials, with losses). As a result the pressure is greater at the front, and the resultant of the normal force sits slightly ahead of the axle: it brakes like a small lever.<br><br>
<b>Dependencies:</b> $\mu_R\propto m_R/r$. Larger wheels roll more easily (old carriages, mountain bikes over obstacles). Hard materials (steel wheel on rail) have small $m_R$: that is why rail transport is so energy-efficient.<br><br>
<b>Comparison:</b> sliding friction $\mu\sim0{,}3$, rolling friction $\mu_R\sim0{,}001$ (rail) to $0{,}01$ (car tyre): a factor of 30–300. That is the reason for the invention of the wheel.<br><br>
<b>Connection:</b> Rolling friction is a non-conservative force and converts energy into heat (tyres warming up). Caution: the static friction $F_R$ at the contact point must be distinguished from it (8.5.9).`,
    derivation: R`<ol class="fc-steps">
<li>$F = F_R$, $F_N = F_G$<em>Constant speed: horizontal and vertical force equilibrium (8.109, 8.110).</em></li>
<li>$M = F_N\,m_R - r\,F_R$<em>Torques about the wheel axle: $F_N$ with lever arm $m_R$ (shift of the point of application), $F_R$ with lever arm $r$ (8.111).</em></li>
<li>$M = 0$<em>Unpowered wheel, no bearing friction, constant rotational speed.</em></li>
<li>$F_R = \dfrac{m_R}{r}F_N$<em>Solve (8.112).</em></li>
<li>$\mu_R := \dfrac{m_R}{r}$<em>Rolling friction coefficient; dimensionless, depends on the radius (8.113).</em></li>
</ol>`,
    example: R`<b>Railway wagon</b> ($m = 40\,\text{t}$, wheel diameter $1\,\text{m}$, $m_R = 0{,}42\,\text{mm}$): $\mu_R = 0{,}42/500 = 8{,}4\cdot10^{-4}$, rolling resistance $F = 8{,}4\cdot10^{-4}\cdot392\,\text{kN} = 330\,\text{N}$. Sliding ($\mu = 0{,}15$) would give $59\,\text{kN}$, 180 times more.<br>
<b>Car</b> (tyres, $\mu_R\approx0{,}01$, $1500\,\text{kg}$): $147\,\text{N}$; at $25\,\text{m/s}$ a power of $3{,}7\,\text{kW}$.`,
    counterexample: R`<b>Soft surface:</b> On sand the ground deforms strongly, $m_R$ becomes large, and rolling can be harder than expected. Wide balloon tyres reduce the sinking depth and therefore $m_R$. The constancy of $\mu_R$ is a rough approximation.`,
    pitfalls: R`<ul><li>Confusing rolling friction with static friction at the contact point.</li>
<li>Reading $m_R$ (a length, a lever arm) as a mass.</li>
<li>Assuming $\mu_R$ is independent of the radius; what is roughly constant is the lever arm $m_R$.</li></ul>`
  },
  "ph8_laufrolle": {
    title: R`Pulley with a pulling force and with a suspended mass`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "beispiel",
    front: R`A pulley (mass $m_1$, radius $R$, $J = \tfrac12m_1R^2$) rotates frictionlessly about a fixed axis. (1) A rope is pulled off with a constant force $F_Z$. (2) A mass $m_2$ hangs on the rope. Calculate $\ddot\varphi$ in each case and explain why (2) is not simply (1) with $F_Z = m_2g$.`,
    back: R`<b>Example 1</b> (Fig. 8.23): centre of mass at rest, bearing forces $2\vec F_L = -(m_1\vec g+\vec F_Z)$ (8.114, 8.115). Rotation:
$$J\ddot\varphi = F_ZR\;\Rightarrow\;\ddot\varphi = \frac{F_ZR}{J} = \frac{2F_Z}{m_1R},\qquad\omega(t) = \frac{2F_Z}{m_1R}t+\omega_0\qquad(8.116\text{–}8.120)$$
$\omega$ grows linearly with time.<br><br>
<b>Example 2</b> (Fig. 8.24): rope force $S$.
$$m_2a = m_2g - S,\qquad J\ddot\varphi = SR\;\Rightarrow\;S = \frac{J\ddot\varphi}{R}\qquad(8.121\text{–}8.123)$$
Without slip $a = R\ddot\varphi$ (8.125):
$$\ddot\varphi = \frac{m_2gR}{J+m_2R^2} = \frac{m_2g}{\left(\tfrac12m_1+m_2\right)R}\qquad(8.127,\,8.128)$$
Always smaller than in (1) with $F_Z = m_2g$: additional inertia ($m_2$) is involved, and the gain in potential energy is shared between the kinetic energy of $m_2$ and the rotational energy. Only for $m_2\ll m_1$ do both agree.`,
    meta: R`Script: section 8.5.9.2, Examples 1–2, Eqs. (8.114)–(8.128), Figs. 8.23–8.24, pp. 213–216`,
    explanation: R`<b>Intuition:</b> If a mass hangs on the rope, the rope is under less tension than $m_2g$, because the mass itself accelerates (otherwise it would not fall). The rope force lies somewhere between $0$ (free fall) and $m_2g$ (pulley blocked).<br><br>
<b>Effective mass:</b> $a = \frac{m_2g}{m_2+J/R^2}$. The pulley acts like an additional inert mass $J/R^2 = \tfrac12m_1$, which must be accelerated too, but is not pulled by gravity.<br><br>
<b>Dependencies:</b> Heavy pulley ($m_1\gg m_2$): $a\to\frac{2m_2}{m_1}g\to0$; light pulley ($m_1\to0$): $a\to g$ (free fall).<br><br>
<b>Connection:</b> This is the rotational analogue of the Atwood machine. The same principle (additional inertia from rotating parts) explains why a car with heavy rims accelerates more poorly.`,
    derivation: R`<ol class="fc-steps">
<li>$m_2a = m_2g - S$<em>Newton II for the hanging mass, axis pointing down (8.121).</em></li>
<li>$J\ddot\varphi = SR$<em>Angular momentum theorem for the pulley: the rope acts tangentially at distance $R$ (8.122).</em></li>
<li>$a = R\ddot\varphi$<em>Rope unrolls without slip (8.125).</em></li>
<li>$m_2R\ddot\varphi = m_2g - \dfrac{J\ddot\varphi}{R}$<em>$S$ from step 2 and $a$ from step 3 inserted into step 1 (8.126).</em></li>
<li>$\ddot\varphi = \dfrac{m_2gR}{J+m_2R^2}$<em>Solve for $\ddot\varphi$ (8.127).</em></li>
<li>$J = \tfrac12m_1R^2\Rightarrow\ddot\varphi = \dfrac{m_2g}{(\tfrac12m_1+m_2)R}$, $S = \dfrac{\tfrac12m_1m_2g}{\tfrac12m_1+m_2}$<em>For the solid disc (8.128); the rope force is smaller than $m_2g$.</em></li>
</ol>`,
    example: R`$m_1 = 2\,\text{kg}$, $R = 0{,}1\,\text{m}$, $m_2 = 1\,\text{kg}$:<br>
(2): $a = R\ddot\varphi = \frac{1\cdot9{,}81}{1+1}\,\text{m/s}^2 = 4{,}9\,\text{m/s}^2$, rope force $S = 4{,}9\,\text{N}$.<br>
(1) with $F_Z = 9{,}81\,\text{N}$: $\ddot\varphi = \frac{2\cdot9{,}81}{2\cdot0{,}1} = 98\,\text{s}^{-2}$, so rope acceleration $9{,}8\,\text{m/s}^2$, twice as much.`,
    counterexample: R`<b>Massless pulley:</b> With $m_1\to0$ (8.128) gives $a = g$ and $S = 0$: the mass falls freely, the pulley simply turns along. In textbook problems with a "massless pulley" the pulley therefore only redirects the force, and does not contribute inertia.`,
    pitfalls: R`<ul><li>Setting the rope force equal to $m_2g$.</li>
<li>Forgetting the rotational inertia of the pulley.</li>
<li>Using $J = m_1R^2$ (ring) instead of $\tfrac12m_1R^2$ (disc).</li>
<li>Choosing the signs in Newton II for $m_2$ and in the angular momentum theorem inconsistently.</li></ul>`
  },
  "ph8_maxwellrad": {
    title: R`Maxwell wheel (yo-yo): a = g/(1 + R²/2r²)`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "beispiel",
    front: R`A wheel (radius $R$, mass $m$) sits on a thin, massless axle (radius $r\ll R$); two threads wound around the axle are fixed to the ceiling. With what <b>acceleration</b> does the wheel descend, and how is the energy shared?`,
    back: R`The instantaneous axis of rotation lies at the edge of the axle, where the thread unwinds, i.e. at distance $r$ from the wheel's axis. Steiner:
$$J = \tfrac12mR^2 + mr^2\qquad(8.129)$$
Torque of gravity about this axis $M = mgr$:
$$a = r\ddot\varphi = r\frac MJ = \frac{mgr^2}{\tfrac12mR^2+mr^2} = \frac{g}{1+R^2/(2r^2)}\qquad(8.130)$$
Constant acceleration: $v = at$, $s = \tfrac12at^2$, fall time $t = \sqrt{2h/a}$, $v = \sqrt{2ah}$ (8.131–8.134). Energy:
$$T_z = \tfrac12mv^2 = mah = mgh\frac{2r^2}{R^2+2r^2},\qquad T^* = m(g-a)h = mgh\frac{R^2}{R^2+2r^2}\qquad(8.135,\,8.136)$$
For $r\ll R$ almost everything goes into rotational energy. At the bottom the wheel keeps rotating (angular momentum), winds the thread up again and rises; without friction it reaches the initial height again.`,
    meta: R`Script: section 8.5.9.2, Example 3, Eqs. (8.129)–(8.136), Fig. 8.25, pp. 216–218`,
    explanation: R`<b>Intuition:</b> The thread acts like "rolling on a vertical wall" with a tiny radius $r$. Because $v = r\omega$, the wheel must rotate very fast to sink a little, and the rotation "swallows" almost all the energy. The wheel therefore sinks as if in slow motion.<br><br>
<b>Dependencies:</b> $a/g = \frac{1}{1+R^2/(2r^2)}\approx\frac{2r^2}{R^2}$ for $r\ll R$. Half the axle radius gives about a quarter of the acceleration. The mass cancels out.<br><br>
<b>Turning point:</b> At the bottom the direction of motion reverses, but the direction of rotation does not. The thread is briefly loaded with a jerk (reversal of momentum, large force impulse), and the wheel climbs up again.<br><br>
<b>Connection:</b> Identical to the yo-yo and to "rolling on an inclined plane" with $\theta = 90^\circ$ and the small radius $r$: $a = \frac{g}{1+J_S/(mr^2)}$ (cf. 8.5.9).`,
    derivation: R`<ol class="fc-steps">
<li>$J = J_S + mr^2 = \tfrac12mR^2 + mr^2$<em>Steiner: rotation axis through the unwinding point at distance $r$ (8.129).</em></li>
<li>$J\ddot\varphi = mgr$<em>Angular momentum theorem about this axis; the thread force acts there and gives no moment.</em></li>
<li>$a = r\ddot\varphi = \dfrac{mgr^2}{\tfrac12mR^2+mr^2}$<em>Unwinding condition: the centre of mass sinks with $r\ddot\varphi$ (8.130).</em></li>
<li>$a = \dfrac{g}{1+R^2/(2r^2)}$<em>Cancel $mr^2$.</em></li>
<li>$T_z = \tfrac12mv^2 = \tfrac12m\cdot2ah = mah$<em>Translational energy after the fall height $h$ (8.135).</em></li>
<li>$T^* = mgh - mah = m(g-a)h$<em>Energy conservation: the rest sits in rotation (8.136).</em></li>
</ol>`,
    example: R`$R = 6\,\text{cm}$, $r = 0{,}5\,\text{cm}$: $\frac{R^2}{2r^2} = 72$, so $a = \frac{9{,}81}{73}\,\text{m/s}^2 = 0{,}134\,\text{m/s}^2$.<br>
Fall height $h = 1\,\text{m}$: $t = \sqrt{2/0{,}134}\,\text{s} = 3{,}9\,\text{s}$ (free fall: $0{,}45\,\text{s}$), $v = 0{,}52\,\text{m/s}$.<br>
Share of translational energy: $\frac{2r^2}{R^2+2r^2} = 1{,}4\,\%$; rotation $98{,}6\,\%$.`,
    counterexample: R`<b>Thick axle</b> ($r\to R$, e.g. a thread spool unwinding from its outer rim): $a = \frac{g}{1+1/2} = \frac23g$. The "slow motion" disappears; the effect rests on $r\ll R$.`,
    pitfalls: R`<ul><li>Using the moment of inertia about the wheel axis instead of about the unwinding point (without $mr^2$). For $r\ll R$ this makes almost no numerical difference, but it is conceptually wrong.</li>
<li>Assuming $a = g$ because "only gravity pulls".</li>
<li>Believing the direction of rotation reverses at the lower turning point.</li></ul>`
  },
  "ph8_billardkugel": {
    title: R`Billiard ball with backspin: impact below the centre`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "beispiel",
    front: R`A resting billiard ball (mass $m$, radius $R$) is struck horizontally $2R/3$ <b>below</b> its centre and receives the velocity $v_0$. Calculate (1) the initial angular velocity $\omega_0$, (2) when the ball starts to roll, (3) the initial energy.`,
    back: R`Force impulse $\int F_y\,dt = \Delta p_y = mv_0$ (8.137). Because it acts $2R/3$ from the centre of mass, a torque impulse arises:
$$\Delta L_x = \int M_x\,dt = \tfrac23R\int F_y\,dt = \tfrac23Rmv_0\qquad(8.138\text{–}8.141)$$
Backward rotation (against the rolling sense).<br>
<b>(1)</b> $\Delta L_x = J\omega_0 = \tfrac25mR^2\omega_0\Rightarrow\omega_0 = \dfrac{5v_0}{3R}$ (8.142–8.144).<br>
<b>(2)</b> Friction force $F_R = \mu_Rmg$ against the motion (8.145); its torque $M_R = F_RR$ brakes the backward rotation, which reverses at $t_1 = J\omega_0/M_R$. Rolling ($v_y = -\omega_xR$, 8.148) at
$$t_2 = \frac{16}{21}\frac{v_0}{\mu_Rg}\qquad(8.153)$$
Then $v_y = v_0 - \frac{F_R}{m}t_2 = \frac5{21}v_0$.<br>
<b>(3)</b> $E_0 = \tfrac12mv_0^2 + \tfrac12J\omega_0^2 = \tfrac12mv_0^2 + \tfrac12\cdot\tfrac25mR^2\cdot\tfrac{25v_0^2}{9R^2} = \tfrac{19}{18}mv_0^2$ (8.154–8.157).`,
    meta: R`Script: section 8.5.9.2, Example 4 (Tipler 84), Eqs. (8.137)–(8.157), Fig. 8.26, pp. 218–220`,
    explanation: R`<b>Intuition:</b> A strike below the centre gives the ball forward velocity <i>and</i> backspin ("reverse spin"). At first the ball slides; the friction on the cloth brakes the translation and gradually reverses the spin, until the ball finally rolls normally, at a much lower speed.<br><br>
<b>Where must one strike so that it rolls immediately?</b> Rolling requires $\omega_0R = v_0$ in the right sense: $\frac{h\,mv_0}{\frac25mR^2} = \frac{v_0}{R}\Rightarrow h = \frac25R$ <i>above</i> the centre. If one strikes there, the ball does not slide at all, and no energy is lost to friction.<br><br>
<b>Energy loss:</b> Of $\frac{19}{18}mv_0^2$ only $\frac12m\left(\frac5{21}v_0\right)^2\cdot\frac75 = \frac{5}{126}mv_0^2$ remains after rolling begins, only about 4 %. The rest is converted into heat by sliding friction.<br><br>
<b>Note:</b> The script writes the braking force as $F_R = \mu_Rmg$. Physically, during the sliding phase it is <b>sliding</b> friction on the cloth, not the much smaller rolling friction from 8.5.9.1; so $\mu_R$ here stands for a sliding friction coefficient.`,
    derivation: R`Condition for the start of rolling (axes as in the script, $y$ forward):
<ol class="fc-steps">
<li>$v_y(t) = v_0 - \dfrac{F_R}{m}t$<em>Friction brakes the translation uniformly (8.145).</em></li>
<li>$\omega_x(t) = \omega_0 - \dfrac{M_R}{J}t$, $\dfrac{M_R}{J} = \dfrac{F_RR}{\frac25mR^2} = \dfrac{5F_R}{2mR}$<em>The friction torque opposes the backward rotation (8.146, 8.147).</em></li>
<li>$v_y(t_2) = -\omega_x(t_2)R$<em>Rolling condition with sign: forward rolling corresponds to negative $\omega_x$ (8.148).</em></li>
<li>$v_0 - \dfrac{F_R}{m}t_2 = -\dfrac53v_0 + \dfrac{5F_R}{2m}t_2$<em>Insert with $\omega_0R = \frac53v_0$ (8.149–8.151).</em></li>
<li>$\dfrac83v_0 = \dfrac72\dfrac{F_R}{m}t_2\Rightarrow t_2 = \dfrac{16}{21}\dfrac{mv_0}{F_R} = \dfrac{16}{21}\dfrac{v_0}{\mu_Rg}$<em>Solve (8.152, 8.153).</em></li>
<li>$v_y(t_2) = v_0 - \dfrac{16}{21}v_0 = \dfrac{5}{21}v_0$<em>Final speed at the start of rolling.</em></li>
</ol>`,
    example: R`$v_0 = 2\,\text{m/s}$, $R = 2{,}86\,\text{cm}$, $\mu_R = 0{,}2$: $\omega_0 = \frac{5\cdot2}{3\cdot0{,}0286}\,\text{s}^{-1} = 117\,\text{s}^{-1}$ (backward), rolling begins after $t_2 = \frac{16}{21}\cdot\frac{2}{1{,}96}\,\text{s} = 0{,}78\,\text{s}$ with $v = 0{,}48\,\text{m/s}$.<br>
In that time the ball has "caught" itself after $v_0t_2 - \frac12\frac{F_R}{m}t_2^2 = 1{,}56 - 0{,}60 = 0{,}96\,\text{m}$.`,
    counterexample: R`<b>Strike exactly at the centre:</b> No angular momentum; the ball first slides, friction builds up forward rotation: rolling at $v = \frac57v_0$ (energy retained as $\frac57$). The backspin strike is therefore only one of several variants; the case "$v = \frac5{21}v_0$" holds only for $h = -\frac23R$.`,
    pitfalls: R`<ul><li>Confusing the sign of the spin (backward) and of the rolling condition.</li>
<li>Using the moment of inertia of the hollow sphere ($\frac23$) instead of the solid sphere ($\frac25$).</li>
<li>Placing the force impulse at the centre of mass and forgetting the torque.</li>
<li>Assuming the ball rolls immediately.</li></ul>`
  },

  // ========================================================================
  // SUPPLEMENTS: typical exam tasks and bridges to Physics II
  // ========================================================================
  "ph8_drehimpuls_stoss": {
    title: R`Angular momentum in collisions with rigid bodies: bullet hits a pivoted rod, pirouette`,
    category: R`8.5 Linear and rotational motion, inertia tensor`,
    type: "beispiel",
    front: R`A rod (mass $M = 1\,\text{kg}$, length $\ell = 1\,\text{m}$) hangs pivoted at its upper end. A bullet ($m = 10\,\text{g}$, $v = 100\,\text{m/s}$) hits the lower end horizontally and remains embedded. Calculate the angular velocity right after the impact, the energy loss and the maximum deflection. Why is the momentum not conserved?`,
    back: R`<b>Conserved:</b> angular momentum about the bearing axis (the bearing force has no moment about this axis; weight has no noticeable effect during the short impact). <b>Not conserved:</b> momentum (the bearing pushes back) and kinetic energy (inelastic).
$$L = mv\ell = J\omega,\qquad J = \tfrac13M\ell^2+m\ell^2$$
$$\omega = \frac{mv\ell}{\tfrac13M\ell^2+m\ell^2} = \frac{1}{0{,}3433}\,\text{s}^{-1} = 2{,}91\,\text{s}^{-1}$$
Energy: before $\tfrac12mv^2 = 50\,\text{J}$, after $\tfrac12J\omega^2 = \frac{L^2}{2J} = 1{,}46\,\text{J}$ (97 % dissipated).<br>
<b>Swing-up</b> (energy conservation, centres of mass of rod and bullet rise):
$$\tfrac12J\omega^2 = \left(M\tfrac\ell2+m\ell\right)g(1-\cos\varphi_\text{max})\;\Rightarrow\;\cos\varphi_\text{max} = 0{,}709,\ \varphi_\text{max} = 45^\circ$$`,
    meta: R`Supplement (typical exam task); builds on sections 5.2 (conservation of angular momentum), 8.5.5–8.5.8 (moment of inertia, Steiner) and 8.5.9.2 (billiard ball, torque impulse)`,
    explanation: R`<b>Intuition:</b> The pivot is held fixed during the impact; therefore momentum is not conserved, but angular momentum about exactly this point is. This is the rotational counterpart of the ballistic pendulum.<br><br>
<b>Choice of reference point:</b> Always take the point at which unknown (bearing) forces act; they then drop out of the angular momentum balance.<br><br>
<b>Pirouette:</b> Without external torque $L = J\omega$ is constant. If the skater pulls in her arms ($J$ from $4$ to $1{,}6\,\text{kg m}^2$), $\omega$ rises by a factor of $2{,}5$, and the rotational energy $L^2/(2J)$ rises by the same factor $2{,}5$. The additional energy comes from the muscular work of pulling in against the centrifugal effect.<br><br>
<b>Connection:</b> Billiard ball (8.5.9.2): torque impulse $\Delta L = \int M\,dt$; "sweet spot" of a racket (centre of percussion): striking there makes the bearing force in the grip vanish.`,
    derivation: R`<ol class="fc-steps">
<li>$L_\text{before} = \ell\cdot mv$<em>Angular momentum of the bullet about the axis: lever arm $\ell$ (horizontal shot, impact point at distance $\ell$).</em></li>
<li>$J = \tfrac13M\ell^2+m\ell^2 = (0{,}3333+0{,}01)\,\text{kg m}^2$<em>Rod about one end (Steiner) plus bullet as a point mass.</em></li>
<li>$\omega = L/J = 2{,}91\,\text{s}^{-1}$<em>Conservation of angular momentum about the axis.</em></li>
<li>$E_\text{rot} = \tfrac12J\omega^2 = 1{,}46\,\text{J}$<em>Only 3 % of the bullet's energy.</em></li>
<li>$1-\cos\varphi_\text{max} = \dfrac{1{,}46}{(0{,}5+0{,}01)\cdot9{,}81} = 0{,}291$<em>Energy conservation: the centre of mass of the rod rises by $\tfrac\ell2(1-\cos\varphi)$, the bullet by $\ell(1-\cos\varphi)$.</em></li>
</ol>`,
    example: R`Momentum check: before $mv = 1\,\text{kg m/s}$; afterwards the centres of mass move with $\omega\tfrac\ell2$ (rod) and $\omega\ell$ (bullet): $1\cdot1{,}46+0{,}01\cdot2{,}91 = 1{,}49\,\text{kg m/s}$. So the bearing has delivered a force impulse of $0{,}49\,\text{N s}$ in the direction of the shot.<br>
<b>Pirouette:</b> $1\,\text{rev/s}\to2{,}5\,\text{rev/s}$.`,
    counterexample: R`<b>Free rod</b> (in space, not pivoted): then momentum <i>and</i> angular momentum (about the common centre of mass) are conserved; the rod flies off and rotates at the same time. The solution above holds only with a pivot. Whoever applies the momentum balance to the pivoted rod gets a wrong $\omega$.`,
    pitfalls: R`<ul><li>Assuming momentum conservation despite the pivot.</li>
<li>Using the moment of inertia about the centre of mass ($\tfrac1{12}M\ell^2$) instead of about the axis ($\tfrac13M\ell^2$).</li>
<li>Computing the height of the rod's centre of mass with $\ell$ instead of $\ell/2$ during the swing-up.</li></ul>`
  }
};
})();
