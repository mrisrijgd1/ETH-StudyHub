(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_11 = {
  "ph11_ableitung_taylor": {
    title: R`Derivative and Taylor series: linear and quadratic approximations`,
    category: R`11.1 Differential and integral calculus`,
    type: "definition",
    front: R`How is the <b>derivative</b> $f'(x_0)$ defined, and what does it mean geometrically? What is the <b>Taylor series</b> of $f$ about $x_0$, and why is it so important in physics?`,
    back: R`<b>Derivative</b> = slope of the tangent at the point $(x_0,y_0)$ (Fig. 11.1):
$$y'(x_0) := \frac{df}{dx}\Big|_{x_0} := \lim_{x_1\to x_0}\frac{f(x_0)-f(x_1)}{x_0-x_1} = \lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}\qquad(11.1,\,11.2)$$
<b>Taylor series</b> about $x_0$ with $\Delta x = x-x_0$:
$$f(x) = f(x_0)+\Delta x\,\frac{df}{dx}\Big|_{x_0}+\frac12(\Delta x)^2\frac{d^2f}{dx^2}\Big|_{x_0}+\dots = f(x_0)+\sum_{n=1}^\infty\frac1{n!}(\Delta x)^n\frac{d^nf}{dx^n}\Big|_{x_0}\qquad(11.3,\,11.4)$$
Truncating after the linear term: tangent approximation; after the quadratic term: parabolic approximation.`,
    meta: R`Script: sections 11.1.1–11.1.2, Eqs. (11.1)–(11.4), Fig. 11.1, appendix pp. 1–2`,
    explanation: R`<b>Intuition:</b> Every smooth function looks like a straight line under a magnifying glass (derivative), and somewhat less strongly magnified like a parabola (second derivative). The Taylor series collects these ever finer corrections.<br><br>
<b>Why central in physics?</b> Almost every "small" approximation is a truncated Taylor series: $\sin\varphi\approx\varphi$ (pendulum), $\cos\varphi\approx1-\varphi^2/2$, $\sqrt{1+x}\approx1+x/2$, $U(r)\approx U_0+\tfrac12k(r-r_0)^2$ (harmonic oscillator, 9.2.2), $1-e^{-T/\tau}\approx T/\tau$ (quality factor, 9.3.3).<br><br>
<b>Dependencies:</b> The error of an $n$-th order approximation is of order $(\Delta x)^{n+1}$: halving $\Delta x$ makes the error of a linear approximation about four times smaller.<br><br>
<b>Connection:</b> In several variables partial derivatives are added (11.1.3). The Taylor series of $e^{i\varphi}$ gives Euler's formula $e^{i\varphi} = \cos\varphi+i\sin\varphi$ (Ch. 9, 12).`,
    derivation: R`Taylor series of $\sqrt{1+x}$ about $x_0 = 0$:
<ol class="fc-steps">
<li>$f(0) = 1$<em>Function value.</em></li>
<li>$f'(x) = \tfrac12(1+x)^{-1/2}\Rightarrow f'(0) = \tfrac12$<em>First derivative (chain rule).</em></li>
<li>$f''(x) = -\tfrac14(1+x)^{-3/2}\Rightarrow f''(0) = -\tfrac14$<em>Second derivative.</em></li>
<li>$\sqrt{1+x}\approx1+\tfrac12x-\tfrac18x^2$<em>Insert into (11.3): $\tfrac12\cdot(-\tfrac14) = -\tfrac18$.</em></li>
<li>$x = 0{,}1$: approximation $1{,}04875$, exact $1{,}04881$<em>Error $6\cdot10^{-5}$, of order $x^3$.</em></li>
</ol>`,
    example: R`$\sin0{,}2 = 0{,}19867$; the approximation $\sin x\approx x$ gives $0{,}2$ (error $0{,}7\,\%$).<br>
$e^x\approx1+x+\tfrac12x^2$: $e^{0{,}1} = 1{,}10517$, approximation $1{,}105$.<br>
Pendulum energy: $mg\ell(1-\cos\varphi)\approx\tfrac12mg\ell\varphi^2$ – from this the harmonic pendulum oscillation.`,
    counterexample: R`<b>Not every function can be expanded in a Taylor series:</b> $|x|$ has no derivative at $0$ (kink), $\sqrt x$ has an infinite slope at $0$. And the Taylor series of $\frac1{1-x}$ about $0$ ($1+x+x^2+\dots$) converges only for $|x|\lt1$: outside this range it gives nonsense, no matter how many terms one takes.`,
    pitfalls: R`<ul><li>Forgetting the factor $\frac1{n!}$.</li>
<li>Evaluating the derivatives at $x$ instead of at the expansion point $x_0$.</li>
<li>Using an approximation far outside its range of validity ($\sin\varphi\approx\varphi$ at $90^\circ$).</li></ul>`
  },
  "ph11_partielle_ableitung": {
    title: R`Partial derivative and total differential`,
    category: R`11.1 Differential and integral calculus`,
    type: "definition",
    front: R`What is the <b>partial derivative</b> $\partial f/\partial x$ of a function of several variables? Calculate it for $f = xyz$ and $f = \sqrt{x^2+y^2}$. How is the total change $df$ built up from these?`,
    back: R`$\partial f/\partial x$: derivative of $f(x,y,z,\dots)$ with respect to $x$, where all other variables are <b>held constant</b>.<br><br>
<b>Examples:</b>
$$f = xyz\;\Rightarrow\;\frac{\partial f}{\partial x} = yz,\quad\frac{\partial f}{\partial z} = xy\qquad(11.5)$$
$$f = \sqrt{x^2+y^2}\;\Rightarrow\;\frac{\partial f}{\partial x} = \frac1{2\sqrt{x^2+y^2}}\cdot2x = \frac x{\sqrt{x^2+y^2}}\qquad(11.6)$$
<b>Total differential</b> (total change when all variables change slightly at the same time):
$$df = \frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy+\frac{\partial f}{\partial z}dz$$`,
    meta: R`Script: section 11.1.3, Eqs. (11.5)–(11.6), appendix pp. 1–3; application e.g. Eq. (10.110)`,
    explanation: R`<b>Intuition:</b> On a hilly landscape $h(x,y)$, $\partial h/\partial x$ is the slope if one walks exactly east, $\partial h/\partial y$ the slope going north. If one walks diagonally, the contributions add up (total differential).<br><br>
<b>Physics:</b> State quantities depend on several variables, $p(V,T)$, $U(V,T)$, $H(V,T)$. Which variable is held constant must always be stated; in thermodynamics one writes this as an index, e.g. $(\partial H/\partial T)_p$.<br><br>
<b>Geometric meaning:</b> The vector of partial derivatives (gradient) points in the direction of steepest ascent and is perpendicular to the level surfaces. Example: $\nabla\sqrt{x^2+y^2} = \vec r/r$, the radial unit vector. For a top, the angular momentum is perpendicular to the inertia ellipsoid, because it is parallel to the gradient (13.1.4.3).<br><br>
<b>Connection:</b> In the Joule-Thomson effect the temperature change follows from $dH = \frac{\partial H}{\partial V}dV+\frac{\partial H}{\partial T}dT = 0$ (10.110).`,
    derivation: R`Total differential of the ideal gas equation $p(V,T) = \nu RT/V$:
<ol class="fc-steps">
<li>$\dfrac{\partial p}{\partial T} = \dfrac{\nu R}V$<em>Hold $V$ fixed.</em></li>
<li>$\dfrac{\partial p}{\partial V} = -\dfrac{\nu RT}{V^2} = -\dfrac pV$<em>Hold $T$ fixed.</em></li>
<li>$dp = \dfrac{\nu R}V\,dT-\dfrac pV\,dV$<em>Total differential.</em></li>
<li>$\dfrac{dp}p = \dfrac{dT}T-\dfrac{dV}V$<em>Relative changes add up.</em></li>
<li>$T$ $+1\,\%$, $V$ $+2\,\%$ $\Rightarrow$ $p$ $-1\,\%$<em>Quick error and change estimate.</em></li>
</ol>`,
    example: R`$f = \sqrt{x^2+y^2}$ at $(3,4)$: $\partial f/\partial x = 3/5$, $\partial f/\partial y = 4/5$. A step $(dx,dy) = (0{,}1;\,0)$ changes the distance from the origin by $0{,}06$.<br>
<b>Error propagation:</b> Pendulum $g = 4\pi^2\ell/T^2$: $\frac{dg}g = \frac{d\ell}\ell-2\frac{dT}T$; a $1\,\%$ error in $T$ gives $2\,\%$ in $g$.`,
    counterexample: R`<b>"Held constant" is not unambiguous without a statement:</b> For an ideal gas $(\partial U/\partial T)_V = \nu C_V$, but the heat supplied per kelvin at constant pressure is $\nu C_p\neq\nu C_V$. Whoever does not say which variable stays fixed gets different "derivatives with respect to $T$".`,
    pitfalls: R`<ul><li>Accidentally differentiating other variables too when taking a partial derivative.</li>
<li>Confusing partial and total derivative ($\partial f/\partial t$ vs. $df/dt$) when $x = x(t)$ itself depends on $t$.</li>
<li>Not stating the variable held constant in thermodynamics.</li></ul>`
  },
  "ph11_integral": {
    title: R`Definite integral, antiderivative and fundamental theorem`,
    category: R`11.1 Differential and integral calculus`,
    type: "definition",
    front: R`How is the <b>definite integral</b> defined as the limit of a sum? What is an <b>antiderivative</b>, why is it determined only up to a constant, and why must the integration variable not have the same name as the upper limit?`,
    back: R`Area under $f$ as a sum of rectangles of width $\Delta x$ (midpoint rule, Fig. 11.2):
$$A\approx\sum_{i = 0}^{n-1}f(x_i+\Delta x/2)\cdot\Delta x\qquad(11.7)$$
$$A = \int_{x_0}^{x_n}f(x)\,dx = \lim_{\Delta x\to0}\sum_{i = 0}^{n-1}f(x_i+\Delta x/2)\,\Delta x = F(x_n)-F(x_0)\qquad(11.8)$$
<b>Antiderivative:</b>
$$F(x) = \int_a^xf(x')\,dx',\qquad\frac{dF}{dx} = \frac{d}{dx}\int_a^xf(x')\,dx' = f(x)\qquad(11.9,\,11.10)$$
$a$ is arbitrary; also $\tilde F = F+b$ satisfies (11.10). The prime in $x'$ does not denote a derivative, only another integration variable. Together:
$$\int_a^xf(x')\,dx' = \int_a^x\frac{dF}{dx'}dx' = \int_a^xdF = F(x)-F(a)\qquad(11.11)$$`,
    meta: R`Script: section 11.1.4, Eqs. (11.7)–(11.11), Fig. 11.2, appendix pp. 2–4`,
    explanation: R`<b>Intuition:</b> Integrating means adding up: distance = sum of many small $v\,dt$, work = sum of many $F\,ds$, mass = sum of many $\rho\,dV$. The fundamental theorem says: to compute this sum, one only has to find a function whose derivative is the integrand.<br><br>
<b>The constant:</b> Differentiation "forgets" constants. Integration therefore gives only a family of solutions; initial conditions decide which one holds ($x(0) = x_0$, $v(0) = v_0$ in kinematics).<br><br>
<b>Integration variable:</b> $x'$ runs from $a$ to $x$; $x$ is the fixed upper limit. If both are written as $x$, it becomes unclear what is integrated and what is held fixed.<br><br>
<b>Connection:</b> Kinematics (Ch. 2): $v(t) = v_0+\int_0^ta(t')\,dt'$. Work (Ch. 4): $W = \int\vec F\cdot d\vec r$. Centre of mass and moment of inertia (Ch. 8): volume integrals.`,
    derivation: R`Midpoint rule for $\int_0^1x^2dx$ with $n = 4$:
<ol class="fc-steps">
<li>$\Delta x = 0{,}25$; midpoints $0{,}125;\,0{,}375;\,0{,}625;\,0{,}875$<em>Interval divided into 4 equal parts.</em></li>
<li>$\sum f = 0{,}015625+0{,}140625+0{,}390625+0{,}765625 = 1{,}3125$<em>Function values at the midpoints.</em></li>
<li>$A\approx1{,}3125\cdot0{,}25 = 0{,}328$<em>Sum times width (11.7).</em></li>
<li>Exact: $F = \tfrac13x^3$, $A = \tfrac13-0 = 0{,}333$<em>Fundamental theorem (11.8); error $1{,}6\,\%$ already with 4 rectangles.</em></li>
</ol>`,
    example: R`Free fall: $v(t) = \int_0^tg\,dt' = gt$, $z(t) = z_0-\int_0^tgt'\,dt' = z_0-\tfrac12gt^2$.<br>
Spring work: $W = \int_0^xkx'\,dx' = \tfrac12kx^2$; for $k = 200\,\text{N/m}$, $x = 0{,}1\,\text{m}$: $1\,\text{J}$.`,
    counterexample: R`<b>Integral ≠ always area:</b> If $f$ lies below the axis, its contributions count negatively: $\int_0^{2\pi}\sin x\,dx = 0$, although the enclosed geometric area is $4$. For "area" one needs $\int|f|\,dx$. Physically: a pendulum that swings back and forth has zero net displacement, but a path length that is not zero.`,
    pitfalls: R`<ul><li>Forgetting the integration constant or the initial condition.</li>
<li>Naming the integration variable and the upper limit the same.</li>
<li>Overlooking negative contributions when calculating an area.</li></ul>`
  },
  "ph11_vektoralgebra": {
    title: R`Scalars, vectors and vector algebra (abelian group, unit vector)`,
    category: R`11.2 Vectors`,
    type: "definition",
    front: R`What distinguishes a <b>scalar</b> from a <b>vector</b>? Which rules apply to vector addition and to multiplication by a scalar? How is the unit vector $\vec e_a$ defined, and why does a vector not depend on the coordinate system?`,
    back: R`<b>Scalar:</b> given by a real number, independent of the coordinate system (temperature, mass, charge). <b>Vector:</b> magnitude and direction (velocity, momentum, force); in $\mathbb R^3$ three <i>components</i> that depend on the coordinate system – the vector itself does not. Physical laws must be formulable without coordinates.<br><br>
<b>Addition</b> $\vec c = \vec a+\vec b$ forms an <b>abelian group</b> (11.12, 11.13):
$$\vec a+\vec b = \vec b+\vec a,\quad(\vec a+\vec b)+\vec c = \vec a+(\vec b+\vec c),\quad\vec 0+\vec b = \vec b,\quad\vec b+(-\vec b) = \vec 0$$
<b>Scalar multiplication</b> (11.14): $\lambda\vec a = \vec a\lambda$, $\lambda(\mu\vec a) = (\lambda\mu)\vec a$, $1\cdot\vec a = \vec a$, $(\lambda+\mu)\vec a = \lambda\vec a+\mu\vec a$, $\lambda(\vec a+\vec b) = \lambda\vec a+\lambda\vec b$.<br><br>
<b>Unit vector:</b>
$$\vec e_a = \frac{\vec a}{|\vec a|}\quad\text{or}\quad\vec a = |\vec a|\,\vec e_a\qquad(11.23)$$
Vectors can represent displacements: $\vec a = \overrightarrow{OP}$ (11.24, Fig. 11.9).`,
    meta: R`Script: sections 11.2.1–11.2.3, Eqs. (11.12)–(11.14), (11.23)–(11.24), Figs. 11.3–11.6, 11.9, appendix pp. 5–10`,
    explanation: R`<b>Intuition:</b> A vector is a displacement: "3 m to the north-east". Two displacements one after the other give a third, in either order (commutativity, parallelogram, Fig. 11.3).<br><br>
<b>Components vs. vector:</b> If one rotates the coordinate system, the components change, but the arrow in space stays the same (change of basis, 11.2.9). That is why equations such as $\vec F = m\vec a$ hold in every coordinate system.<br><br>
<b>Dependencies:</b> $|\lambda\vec a| = |\lambda|\,|\vec a|$; for $\lambda\lt0$ the direction reverses. The length of a sum is at most the sum of the lengths (triangle inequality).<br><br>
<b>Connection:</b> Not every quantity with a direction is a vector: finite rotations have an axis and an angle, but are not commutative and therefore not vectors (Ch. 2.5.4). Axial vectors (torque, angular momentum) behave differently under reflection (8.3.3).`,
    derivation: R`Why $\vec e_a$ has magnitude 1:
<ol class="fc-steps">
<li>$|\lambda\vec a| = |\lambda|\,|\vec a|$<em>Scalar multiplication stretches the length by $|\lambda|$.</em></li>
<li>$\lambda = \dfrac1{|\vec a|}$<em>Choice of the stretch factor ($\vec a\neq\vec 0$).</em></li>
<li>$|\vec e_a| = \dfrac{|\vec a|}{|\vec a|} = 1$<em>Same direction, length 1.</em></li>
<li>$\vec a = |\vec a|\,\vec e_a$<em>Decomposition into "how much" (magnitude) and "where to" (direction).</em></li>
</ol>`,
    example: R`Hike: $3\,\text{km}$ east, then $4\,\text{km}$ north: displacement $5\,\text{km}$ in the direction $53^\circ$ north of east; path length $7\,\text{km}$.<br>
$\vec a = (3,4,0)$: $\vec e_a = (0{,}6;\,0{,}8;\,0)$.`,
    counterexample: R`<b>Finite rotations:</b> A book first rotated by $90^\circ$ about $x$, then by $90^\circ$ about $y$, ends up differently than in the reverse order. Rotations have an axis and an angle, but do not satisfy the commutativity of addition – they are not vectors. (Infinitesimal rotations, or angular velocities, on the other hand are.)`,
    pitfalls: R`<ul><li>Adding magnitudes instead of vectors ($|\vec a+\vec b|\neq|\vec a|+|\vec b|$ in general).</li>
<li>Confusing the zero vector $\vec 0$ with the number $0$.</li>
<li>Trying to form a unit vector from the zero vector.</li></ul>`
  },
  "ph11_skalarprodukt": {
    title: R`Dot product: a·b = ab cos φ, projection, law of cosines`,
    category: R`11.2 Vectors`,
    type: "definition",
    front: R`How is the <b>dot product</b> defined, and what geometric meaning does it have (projection)? What is it in Cartesian components? Use it to derive the <b>law of cosines</b>.`,
    back: R`$$\vec a\cdot\vec b = ab\cos\varphi = |\vec a|\,|\vec b|\cos\varphi\qquad(11.15)$$
($\varphi$: angle between the vectors.) It introduces a <b>metric</b>: lengths and angles.
$$\vec a\cdot\vec b = a(b\cos\varphi) = b(a\cos\varphi)\qquad(11.16)$$
$b\cos\varphi$: component (projection) of $\vec b$ in the direction of $\vec a$. Further properties:
$$\vec a\cdot\vec a = a^2 = |\vec a|^2,\qquad\vec a\cdot\vec b = \vec b\cdot\vec a,\qquad\vec a\cdot(\vec b+\vec c) = \vec a\cdot\vec b+\vec a\cdot\vec c\qquad(11.17\text{–}11.19)$$
$\vec a\cdot\vec b = 0\Leftrightarrow\vec a = \vec 0$ or $\vec b = \vec 0$ or $\vec a\perp\vec b$.<br><br>
<b>Components:</b> $\vec a\cdot\vec b = a_xb_x+a_yb_y+a_zb_z$ (11.41).<br>
<b>Law of cosines</b> for $\vec c = \vec a+\vec b$:
$$|\vec c|^2 = (\vec a+\vec b)^2 = |\vec a|^2+|\vec b|^2+2|\vec a||\vec b|\cos\varphi\qquad(11.20\text{–}11.22)$$`,
    meta: R`Script: sections 11.2.4, 11.2.6, Eqs. (11.15)–(11.22), (11.41), Figs. 11.7–11.8, appendix pp. 8–14`,
    explanation: R`<b>Intuition:</b> The dot product measures "how much" of one vector points in the direction of the other. Parallel: full product; perpendicular: zero; opposite: negative.<br><br>
<b>Physics:</b> Work $W = \vec F\cdot\vec s$ – only the force component along the path counts (Ch. 4). Power $P = \vec F\cdot\vec v$. Magnetic flux $\Phi = \vec B\cdot\vec A$ (physics II).<br><br>
<b>Sign of the law of cosines:</b> Here $\varphi$ is the angle between $\vec a$ and $\vec b$ (arrows placed head to tail), hence $+2ab\cos\varphi$. In school geometry one writes $-2ab\cos\gamma$ with the interior angle $\gamma = \pi-\varphi$ of the triangle.<br><br>
<b>Connection:</b> The same structure appears in the superposition of two oscillations: $A^2 = A_1^2+A_2^2+2A_1A_2\cos(\delta_1-\delta_2)$ (9.5.2). Fourier coefficients are "dot products" of functions (9.6.1).`,
    derivation: R`Component form from orthonormality:
<ol class="fc-steps">
<li>$\vec a\cdot\vec b = (a_x\vec e_x+a_y\vec e_y+a_z\vec e_z)\cdot(b_x\vec e_x+b_y\vec e_y+b_z\vec e_z)$<em>Both vectors in the basis.</em></li>
<li>Multiply out: 9 terms $a_ib_j\,(\vec e_i\cdot\vec e_j)$<em>Distributive law (11.19).</em></li>
<li>$\vec e_i\cdot\vec e_j = 1$ for $i = j$, otherwise $0$<em>Orthonormal basis (11.33, 11.34).</em></li>
<li>$\vec a\cdot\vec b = a_xb_x+a_yb_y+a_zb_z$<em>Only the three diagonal terms remain (11.41).</em></li>
<li>$\cos\varphi = \dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}$<em>Angle between two vectors from their components.</em></li>
</ol>`,
    example: R`$\vec a = (1,2,2)$, $\vec b = (2,0,1)$: $\vec a\cdot\vec b = 4$, $|\vec a| = 3$, $|\vec b| = \sqrt5$, $\cos\varphi = 0{,}596$, $\varphi = 53{,}4^\circ$.<br>
Work: force $\vec F = (3,4,0)\,\text{N}$ along $\vec s = (2,0,0)\,\text{m}$: $W = 6\,\text{J}$; the $y$ component of the force does no work.`,
    counterexample: R`<b>Component formula in oblique coordinates:</b> $a_xb_x+a_yb_y+a_zb_z$ holds only in an <i>orthonormal</i> basis. In an oblique basis (e.g. crystal axes of a monoclinic lattice) cross terms appear. The definition $ab\cos\varphi$, on the other hand, always holds.`,
    pitfalls: R`<ul><li>Reading $\vec a\cdot\vec b = 0$ as "one of the vectors is zero" (they can be perpendicular).</li>
<li>Confusing the sign in the law of cosines with the interior angle of the triangle.</li>
<li>Writing the result of a dot product as a vector.</li></ul>`
  },
  "ph11_vektorprodukt": {
    title: R`Exterior product and cross product a × b`,
    category: R`11.2 Vectors`,
    type: "definition",
    front: R`What is the <b>exterior product</b> $\vec a\wedge\vec b$ (oriented area), and how is it related to the <b>cross product</b> $\vec a\times\vec b$? What properties does the cross product have, and how is it calculated in components?`,
    back: R`<b>Exterior product</b> (bivector): $\vec A = \vec a\wedge\vec b$ is the <b>oriented area</b> spanned by $\vec a$ and $\vec b$, with the sense of rotation from $\vec a$ to $\vec b$ (Fig. 11.10):
$$\vec a\wedge\vec b = -\vec b\wedge\vec a,\qquad\vec a\wedge\vec a = 0\qquad(11.25,\,11.26)$$
Defined in every $\mathbb R^n$ ($n\ge2$). In $\mathbb R^3$ (only there is there exactly one normal direction) one works with the dual <b>cross product</b>:
$$\vec c = \vec a\times\vec b,\qquad|\vec c| = ab\sin\varphi\qquad(11.27,\,11.28)$$
$\vec c$ is perpendicular to the area; direction by the right-hand rule (fingers from $\vec a$ to $\vec b$ along the shortest route, thumb = $\vec c$); magnitude = area of the parallelogram.<br>
$$\vec a\times\vec a = \vec 0,\quad\vec a\times\vec b = -\vec b\times\vec a,\quad\vec a\times(\vec b+\vec c) = \vec a\times\vec b+\vec a\times\vec c\qquad(11.29\text{–}11.31)$$
$$\vec e_x\times\vec e_y = \vec e_z\ \text{(cyclic)},\qquad\vec a\times\vec b = \begin{pmatrix}a_yb_z-a_zb_y\\a_zb_x-a_xb_z\\a_xb_y-a_yb_x\end{pmatrix}\qquad(11.35,\,11.42)$$`,
    meta: R`Script: sections 11.2.5–11.2.6, Eqs. (11.25)–(11.31), (11.35), (11.42), Fig. 11.10, appendix pp. 10–14`,
    explanation: R`<b>Intuition:</b> The cross product describes a <i>sense of rotation</i> with a magnitude: how strongly and about which axis does $\vec a$ "turn" towards $\vec b$? The fundamental object is the oriented area; the perpendicular arrow is a practical representation in three-dimensional space.<br><br>
<b>Dependencies:</b> Maximal at $\varphi = 90^\circ$, zero for parallel vectors. Anticommutative: swapping the order reverses the direction.<br><br>
<b>Physics:</b> Torque $\vec M = \vec r\times\vec F$, angular momentum $\vec L = \vec r\times\vec p$, orbital velocity $\vec v = \vec\omega\times\vec r$, Coriolis force $-2m\vec\omega\times\vec v$, Lorentz force $q\vec v\times\vec B$. All these quantities are axial vectors (8.3.3).<br><br>
<b>Connection:</b> Useful identities: $\vec a\times(\vec b\times\vec c) = \vec b(\vec a\cdot\vec c)-\vec c(\vec a\cdot\vec b)$ ("BAC-CAB"), $(\vec a\times\vec b)\cdot\vec c = (\vec b\times\vec c)\cdot\vec a$ (scalar triple product, cyclic). Both are needed for the inertia tensor (13.21, 13.22).`,
    derivation: R`Component formula from the basis products:
<ol class="fc-steps">
<li>$\vec a\times\vec b = \sum_{i,j}a_ib_j\,(\vec e_i\times\vec e_j)$<em>Distributivity (11.31) for all 9 combinations.</em></li>
<li>$\vec e_i\times\vec e_i = \vec 0$<em>Three terms drop out (11.29).</em></li>
<li>$\vec e_x\times\vec e_y = \vec e_z$, $\vec e_y\times\vec e_x = -\vec e_z$ etc.<em>(11.35) and anticommutativity.</em></li>
<li>$= a_xb_y\vec e_z-a_xb_z\vec e_y-a_yb_x\vec e_z+a_yb_z\vec e_x+a_zb_x\vec e_y-a_zb_y\vec e_x$<em>Six terms remain.</em></li>
<li>Sort by $\vec e_x$, $\vec e_y$, $\vec e_z$: (11.42)<em>Memory aid: cyclic $x\to y\to z$, each "forward minus backward".</em></li>
</ol>`,
    example: R`$\vec a = (1,2,3)$, $\vec b = (4,5,6)$: $\vec a\times\vec b = (12-15,\;12-6,\;5-8) = (-3,6,-3)$. Check: $\vec a\cdot(\vec a\times\vec b) = -3+12-9 = 0$ ✓. Parallelogram area $\sqrt{54} = 7{,}35$.<br>
Torque: $\vec r = (0{,}5;0;0)\,\text{m}$, $\vec F = (0;20;0)\,\text{N}$: $\vec M = (0;0;10)\,\text{N m}$.`,
    counterexample: R`<b>No associative law:</b> $(\vec e_x\times\vec e_x)\times\vec e_y = \vec 0$, but $\vec e_x\times(\vec e_x\times\vec e_y) = \vec e_x\times\vec e_z = -\vec e_y$. Brackets in a cross product must not be dropped. And in two or four dimensions there is no cross product in the usual sense, but there is the exterior product.`,
    pitfalls: R`<ul><li>Swapping the order (sign error, e.g. $\vec F\times\vec r$ instead of $\vec r\times\vec F$).</li>
<li>Using the left hand instead of the right.</li>
<li>In the component scheme writing the middle component the wrong way round ($a_xb_z-a_zb_x$ instead of $a_zb_x-a_xb_z$).</li></ul>`
  },
  "ph11_basis_basiswechsel": {
    title: R`Cartesian basis, components as projections and change of basis`,
    category: R`11.2 Vectors`,
    type: "konzept",
    front: R`What properties does the Cartesian basis $\vec e_x,\vec e_y,\vec e_z$ have? How does one obtain the components of a vector? How do the components change if one rotates the basis by the angle $\varphi$?`,
    back: R`<b>Orthonormal basis:</b>
$$\vec e_x\cdot\vec e_y = \vec e_x\cdot\vec e_z = \vec e_y\cdot\vec e_z = 0,\qquad\vec e_x\cdot\vec e_x = \vec e_y\cdot\vec e_y = \vec e_z\cdot\vec e_z = 1\qquad(11.32\text{–}11.34)$$
right-handed: $\vec e_x\times\vec e_y = \vec e_z$ (11.35).<br>
<b>Components</b> = projections onto the basis vectors:
$$\vec r = r_x\vec e_x+r_y\vec e_y+r_z\vec e_z,\qquad x = \vec r\cdot\vec e_x\ \text{etc.}\qquad(11.36)$$
Addition, subtraction and scalar multiplication component by component (11.37–11.40).<br><br>
<b>Change of basis</b> (Fig. 11.15): the same vector $\vec A$ in two bases: $A_i = \vec e_i\cdot\vec A$, $A_i' = \vec e_i\,'\cdot\vec A$ (11.71–11.76). Substituting $\vec A = A_1\vec e_1+A_2\vec e_2$:
$$A_1' = A_1(\vec e_1\,'\cdot\vec e_1)+A_2(\vec e_1\,'\cdot\vec e_2),\qquad A_2' = A_1(\vec e_2\,'\cdot\vec e_1)+A_2(\vec e_2\,'\cdot\vec e_2)\qquad(11.77,\,11.78)$$
Basis rotated by $\varphi$:
$$\begin{pmatrix}A_1'\\A_2'\end{pmatrix} = \begin{pmatrix}\cos\varphi&\sin\varphi\\-\sin\varphi&\cos\varphi\end{pmatrix}\begin{pmatrix}A_1\\A_2\end{pmatrix}\qquad(11.79)$$`,
    meta: R`Script: sections 11.2.6, 11.2.9, Eqs. (11.32)–(11.40), (11.71)–(11.79), Fig. 11.15, appendix pp. 12–21`,
    explanation: R`<b>Intuition:</b> The components are the "shadows" of the vector on the axes. If one turns the axes, the shadows change, the vector itself stays. The rotation matrix turns the components opposite to the basis (passive rotation).<br><br>
<b>Why orthonormal?</b> Then the projection is simply a dot product, and lengths and dot products are calculated with the simple sum formula. With oblique bases one would need the "dual basis".<br><br>
<b>Dependencies:</b> The rotation matrix is orthogonal ($R^{-1} = R^t$, $\det R = 1$); it preserves lengths: $A_1'^2+A_2'^2 = A_1^2+A_2^2$.<br><br>
<b>Connection:</b> The Euler angles (8.5.2) are three such rotations one after another. For a top the inertia tensor transforms under a change of basis; in the principal-axes system it becomes diagonal (13.1.4).`,
    derivation: R`Matrix elements for a rotation of the basis by $\varphi$:
<ol class="fc-steps">
<li>$\vec e_1\,' = \cos\varphi\,\vec e_1+\sin\varphi\,\vec e_2$<em>New first axis rotated by $\varphi$ against the old one.</em></li>
<li>$\vec e_2\,' = -\sin\varphi\,\vec e_1+\cos\varphi\,\vec e_2$<em>Perpendicular to it, right-handed.</em></li>
<li>$\vec e_1\,'\cdot\vec e_1 = \cos\varphi$, $\vec e_1\,'\cdot\vec e_2 = \sin\varphi$<em>Dot products of the basis vectors.</em></li>
<li>$\vec e_2\,'\cdot\vec e_1 = -\sin\varphi$, $\vec e_2\,'\cdot\vec e_2 = \cos\varphi$<em>Likewise.</em></li>
<li>Insert into (11.77), (11.78): (11.79)<em>The matrix elements are the cosines of the angles between new and old axes.</em></li>
</ol>`,
    example: R`$\vec A = (1;0)$, basis rotated by $30^\circ$: $A_1' = \cos30^\circ = 0{,}866$, $A_2' = -\sin30^\circ = -0{,}5$. Length: $0{,}75+0{,}25 = 1$ ✓.<br>
Inclined plane: weight $(0;-mg)$ in coordinates parallel/perpendicular to the plane (inclination $\alpha$): $(-mg\sin\alpha;\,-mg\cos\alpha)$.`,
    counterexample: R`<b>Active vs. passive rotation:</b> If one rotates the <i>vector</i> by $+\varphi$ (active) instead of the basis, the matrix is $\begin{pmatrix}\cos\varphi&-\sin\varphi\\\sin\varphi&\cos\varphi\end{pmatrix}$ – the transpose of (11.79). Whoever confuses the two rotates in the wrong direction.`,
    pitfalls: R`<ul><li>Confusing active and passive rotation.</li>
<li>Treating the components as properties of the vector itself (they depend on the basis).</li>
<li>Treating the position vector like a freely movable vector (it is anchored at the origin).</li></ul>`
  },
  "ph11_ableitung_vektoren": {
    title: R`Derivative of vectors: product rules and |a| = const. ⇔ ȧ ⊥ a`,
    category: R`11.2 Vectors`,
    type: "gesetz",
    front: R`Which product rules hold for the time derivative of $c\,\vec a$, $\vec a\cdot\vec b$ and $\vec a\times\vec b$? Show that a vector has constant magnitude if and only if its derivative is perpendicular to it. How does one differentiate in Cartesian coordinates?`,
    back: R`$$\frac{d}{dt}(c\,\vec a) = \frac{dc}{dt}\vec a+c\frac{d\vec a}{dt}\qquad(11.43)$$
$$\frac{d}{dt}(\vec a\cdot\vec b) = \frac{d\vec a}{dt}\cdot\vec b+\vec a\cdot\frac{d\vec b}{dt}\qquad(11.44)$$
$$\frac{d}{dt}(\vec a\times\vec b) = \frac{d\vec a}{dt}\times\vec b+\vec a\times\frac{d\vec b}{dt}\quad\text{(mind the order!)}\qquad(11.45)$$
With $\vec a = \vec b$:
$$\frac{d}{dt}a^2 = \frac{d}{dt}(\vec a\cdot\vec a) = 2\vec a\cdot\frac{d\vec a}{dt}\qquad(11.46)$$
$$\vec a\perp\frac{d\vec a}{dt}\;\Leftrightarrow\;\vec a\cdot\frac{d\vec a}{dt} = 0\;\Leftrightarrow\;\frac{d}{dt}a^2 = 0\;\Leftrightarrow\;a^2 = \text{const.}\qquad(11.47)$$
In Cartesian coordinates (fixed basis vectors) component by component: $\frac{d\vec a}{dt} = \left(\frac{da_x}{dt},\frac{da_y}{dt},\frac{da_z}{dt}\right)$ (11.48).`,
    meta: R`Script: section 11.2.7, Eqs. (11.43)–(11.48), appendix pp. 14–15`,
    explanation: R`<b>Intuition:</b> If an arrow changes only perpendicular to itself, it turns without becoming longer or shorter – like a clock hand. Every component of the change <i>along</i> the arrow, on the other hand, changes its length.<br><br>
<b>Physics:</b> Uniform circular motion: $|\vec v|$ constant, hence $\vec a\perp\vec v$ (centripetal acceleration, Ch. 2). A force perpendicular to the velocity (Lorentz force, centripetal force) does not change the magnitude of the velocity and does no work. Precession: $\dot{\vec L} = \vec M\perp\vec L$, so $\vec L$ only turns (13.1.7).<br><br>
<b>Order in the cross product:</b> Because $\times$ is anticommutative, in (11.45) each factor must keep its place; otherwise sign errors arise.<br><br>
<b>Connection:</b> In curvilinear coordinates (polar coordinates) the basis vectors also change: $\dot{\vec e}_r = \dot\varphi\,\vec e_\varphi$. This gives the centripetal and Coriolis terms of kinematics.`,
    derivation: R`Angular momentum theorem from the product rule (11.45):
<ol class="fc-steps">
<li>$\vec L = \vec r\times\vec p$<em>Definition (Ch. 5).</em></li>
<li>$\dot{\vec L} = \dot{\vec r}\times\vec p+\vec r\times\dot{\vec p}$<em>Product rule, order kept.</em></li>
<li>$\dot{\vec r}\times\vec p = \vec v\times m\vec v = \vec 0$<em>Parallel vectors (11.29).</em></li>
<li>$\dot{\vec L} = \vec r\times\vec F = \vec M$<em>With $\dot{\vec p} = \vec F$: theorem of angular momentum.</em></li>
</ol>`,
    example: R`$\vec r(t) = R(\cos\omega t,\sin\omega t,0)$: $\dot{\vec r} = R\omega(-\sin\omega t,\cos\omega t,0)$; $\vec r\cdot\dot{\vec r} = R^2\omega(-\cos\sin+\sin\cos) = 0$ ✓, so $|\vec r| = R$ constant.<br>
$\vec v(t) = (3,4t,0)$: $\frac{d}{dt}v^2 = 2\vec v\cdot\dot{\vec v} = 2\cdot16t = 32t$; directly: $v^2 = 9+16t^2$ ✓.`,
    counterexample: R`<b>Constant direction, but $\dot{\vec a}\not\perp\vec a$:</b> In free fall from rest $\vec v\parallel\dot{\vec v}$; the magnitude changes at most. And "$\dot{\vec a}\perp\vec a$ at one instant" only means that $|\vec a|$ is momentarily stationary there (e.g. a turning point at a distance on an elliptical orbit), not that it stays constant.`,
    pitfalls: R`<ul><li>Swapping the factors when differentiating a cross product.</li>
<li>Forgetting the derivative of the basis vectors in polar coordinates.</li>
<li>Confusing $\frac{d}{dt}|\vec a|$ with $\left|\frac{d\vec a}{dt}\right|$ (circular motion: the first is zero, the second is not).</li></ul>`
  },
  "ph11_koordinatensysteme": {
    title: R`Polar, cylindrical and spherical coordinates`,
    category: R`11.2 Vectors`,
    type: "definition",
    front: R`Give the conversions between Cartesian coordinates and <b>polar</b>, <b>cylindrical</b> and <b>spherical</b> coordinates, with their domains. Why is a case distinction needed for $\varphi$? What are direction cosines?`,
    back: R`<b>Polar</b> (plane, Fig. 11.11):
$$\vec r = r\begin{pmatrix}\cos\varphi\\\sin\varphi\end{pmatrix},\quad r = \sqrt{x^2+y^2},\quad\varphi = \begin{cases}\arctan\frac yx,&x\gt0\\\arctan\frac yx+\pi,&x\lt0\end{cases},\quad0\le r\lt\infty,\ 0\le\varphi\lt2\pi\qquad(11.49\text{–}11.53)$$
<b>Direction cosines</b> (space): $\cos\alpha = \frac{\vec r\cdot\vec e_x}r$, $\cos\beta = \frac{\vec r\cdot\vec e_y}r$, $\cos\gamma = \frac{\vec r\cdot\vec e_z}r$ (11.54–11.56).<br>
<b>Cylindrical</b> (rotational symmetry about $z$, Fig. 11.13): polar coordinates plus $z$:
$$\vec r = (\rho\cos\varphi,\ \rho\sin\varphi,\ z),\quad\rho = \sqrt{x^2+y^2},\quad-\infty\lt z\lt\infty\qquad(11.57\text{–}11.63)$$
<b>Spherical</b> (point symmetry, Fig. 11.14):
$$\vec r = (r\sin\vartheta\cos\varphi,\ r\sin\vartheta\sin\varphi,\ r\cos\vartheta),\quad r = \sqrt{x^2+y^2+z^2},\quad\vartheta = \arccos\frac zr\qquad(11.64\text{–}11.67)$$
with $0\le\varphi\lt2\pi$, $0\le\vartheta\le\pi$ (11.68–11.70).<br>
The case distinction is necessary because $\arctan$ returns only values in $[-\pi/2,\pi/2]$.`,
    meta: R`Script: section 11.2.8, Eqs. (11.49)–(11.70), Figs. 11.11–11.14, appendix pp. 15–20`,
    explanation: R`<b>Intuition:</b> One chooses the coordinates in which the problem looks simplest. A cylinder is complicated in Cartesian coordinates ($x^2+y^2\le R^2$), trivial in cylindrical coordinates ($\rho\le R$). Likewise the sphere ($r\le R$).<br><br>
<b>Volume elements</b> (supplement, used in the script): cylinder $dV = \rho\,d\rho\,d\varphi\,dz$ (8.96), sphere $dV = r^2\sin\vartheta\,dr\,d\vartheta\,d\varphi = r^2\,dr\,d\varphi\,d\cos\vartheta$ (14.25). The factor $\rho$ or $r^2\sin\vartheta$ is decisive.<br><br>
<b>Conventions:</b> $\vartheta$ is measured from the north pole ($+z$) (polar angle), not from the equator like geographic latitude.<br><br>
<b>Connection:</b> Moments of inertia of cylinder and sphere (8.5.7), gravitational field of a spherical shell (Ch. 7), Maxwell distribution in velocity space (14.1.2).`,
    derivation: R`Point $(x,y,z) = (1,1,\sqrt2)$ in spherical coordinates:
<ol class="fc-steps">
<li>$r = \sqrt{1+1+2} = 2$<em>Distance from the origin (11.65).</em></li>
<li>$\vartheta = \arccos\dfrac{\sqrt2}2 = 45^\circ$<em>Angle to the $z$ axis (11.67).</em></li>
<li>$\varphi = \arctan\dfrac11 = 45^\circ$<em>$x\gt0$, so no correction.</em></li>
<li>Check: $x = 2\sin45^\circ\cos45^\circ = 1$ ✓, $z = 2\cos45^\circ = \sqrt2$ ✓<em>Back-transformation (11.64).</em></li>
</ol>`,
    example: R`Polar: $(-1,1)$: $r = \sqrt2$, $\varphi = \arctan(-1)+\pi = 135^\circ$; $(-1,-1)$: $\arctan(1)+\pi = 225^\circ$.<br>
Cylindrical: $(0,3,5)$: $\rho = 3$, $\varphi = 90^\circ$ ($x = 0$: read off directly), $z = 5$.`,
    counterexample: R`<b>Fourth quadrant:</b> $(1,-1)$ gives with (11.51) $\varphi = \arctan(-1) = -45^\circ$, which lies outside $[0,2\pi)$; one must add $2\pi$: $315^\circ$. And for $x = 0$, $\arctan(y/x)$ is not defined at all ($\varphi = 90^\circ$ or $270^\circ$). The two-step formula does not cover all cases; in programs one uses $\text{atan2}(y,x)$.`,
    pitfalls: R`<ul><li>Using $\arctan(y/x)$ without checking the quadrant.</li>
<li>Swapping the polar angle $\vartheta$ and the azimuth $\varphi$ (physics vs. mathematics convention).</li>
<li>Forgetting the Jacobian factor in the volume element.</li></ul>`
  }
};
})();
