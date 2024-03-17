
/**
 * A 3-element structure that can be used to represent 3D coordinates or any other triplet of numeric values.
 *
 * It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [float] which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.
 *
 * See [Vector3i] for its integer counterpart.
 *
 * **Note:** In a boolean context, a Vector3 will evaluate to `false` if it's equal to `Vector3(0, 0, 0)`. Otherwise, a Vector3 will always evaluate to `true`.
 *
*/
declare class Vector3Constructor {

  
/**
 * A 3-element structure that can be used to represent 3D coordinates or any other triplet of numeric values.
 *
 * It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [float] which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.
 *
 * See [Vector3i] for its integer counterpart.
 *
 * **Note:** In a boolean context, a Vector3 will evaluate to `false` if it's equal to `Vector3(0, 0, 0)`. Otherwise, a Vector3 will always evaluate to `true`.
 *
*/


/** The vector's X component. Also accessible by using the index position [code][0][/code]. */
x: float;

/** The vector's Y component. Also accessible by using the index position [code][1][/code]. */
y: float;

/** The vector's Z component. Also accessible by using the index position [code][2][/code]. */
z: float;

/** Returns a new vector with all components in absolute values (i.e. positive). */
abs(): Vector3;

/** Returns the unsigned minimum angle to the given vector, in radians. */
angle_to(): float;

/** Returns the derivative at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
bezier_derivative(): Vector3;

/** Returns the point at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
bezier_interpolate(): Vector3;

/** Returns the vector "bounced off" from a plane defined by the given normal. */
bounce(): Vector3;

/** Returns a new vector with all components rounded up (towards positive infinity). */
ceil(): Vector3;

/** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
clamp(): Vector3;

/** Returns the cross product of this vector and [param with]. */
cross(): Vector3;

/** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
cubic_interpolate(): Vector3;

/**
 * Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.
 *
 * It can perform smoother interpolation than [method cubic_interpolate] by the time values.
 *
*/
cubic_interpolate_in_time(): Vector3;

/** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using [code](b - a).normalized()[/code]. */
direction_to(): Vector3;

/**
 * Returns the squared distance between this vector and [param to].
 *
 * This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.
 *
*/
distance_squared_to(): float;

/** Returns the distance between this vector and [param to]. */
distance_to(): float;

/**
 * Returns the dot product of this vector and [param with]. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.
 *
 * The dot product will be `0` for a straight angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.
 *
 * When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.
 *
 * **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.
 *
*/
dot(): float;

/** Returns a new vector with all components rounded down (towards negative infinity). */
floor(): Vector3;

/** Returns the inverse of the vector. This is the same as [code]Vector3(1.0 / v.x, 1.0 / v.y, 1.0 / v.z)[/code]. */
inverse(): Vector3;

/** Returns [code]true[/code] if this vector and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
is_equal_approx(): boolean;

/** Returns [code]true[/code] if this vector is finite, by calling [method @GlobalScope.is_finite] on each component. */
is_finite(): boolean;

/** Returns [code]true[/code] if the vector is normalized, i.e. its length is approximately equal to 1. */
is_normalized(): boolean;

/**
 * Returns `true` if this vector's values are approximately zero, by running [method @GlobalScope.is_zero_approx] on each component.
 *
 * This method is faster than using [method is_equal_approx] with one value as a zero vector.
 *
*/
is_zero_approx(): boolean;

/** Returns the length (magnitude) of this vector. */
length(): float;

/**
 * Returns the squared length (squared magnitude) of this vector.
 *
 * This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.
 *
*/
length_squared(): float;

/** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of [code]0.0[/code] to [code]1.0[/code], representing the amount of interpolation. */
lerp(): Vector3;

/** Returns the vector with a maximum length by limiting its length to [param length]. */
limit_length(): Vector3;

/** Returns the axis of the vector's highest value. See [code]AXIS_*[/code] constants. If all components are equal, this method returns [constant AXIS_X]. */
max_axis_index(): int;

/** Returns the axis of the vector's lowest value. See [code]AXIS_*[/code] constants. If all components are equal, this method returns [constant AXIS_Z]. */
min_axis_index(): int;

/** Returns a new vector moved toward [param to] by the fixed [param delta] amount. Will not go past the final value. */
move_toward(): Vector3;

/**
 * Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. See also [method is_normalized].
 *
 * **Note:** This function may return incorrect values if the input vector length is near zero.
 *
*/
normalized(): Vector3;

/** Returns the [Vector3] from an octahedral-compressed form created using [method octahedron_encode] (stored as a [Vector2]). */
octahedron_decode(): Vector3;

/**
 * Returns the octahedral-encoded (oct32) form of this [Vector3] as a [Vector2]. Since a [Vector2] occupies 1/3 less memory compared to [Vector3], this form of compression can be used to pass greater amounts of [method normalized] [Vector3]s without increasing storage or memory requirements. See also [method octahedron_decode].
 *
 * **Note:** [method octahedron_encode] can only be used for [method normalized] vectors. [method octahedron_encode] does **not** check whether this [Vector3] is normalized, and will return a value that does not decompress to the original value if the [Vector3] is not normalized.
 *
 * **Note:** Octahedral compression is **lossy**, although visual differences are rarely perceptible in real world scenarios.
 *
*/
octahedron_encode(): Vector2;

/** Returns the outer product with [param with]. */
outer(): Basis;

/** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
posmod(): Vector3;

/** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
posmodv(): Vector3;

/** Returns the result of projecting the vector onto the given vector [param b]. */
project(): Vector3;

/** Returns the result of reflecting the vector from a plane defined by the given normal [param n]. */
reflect(): Vector3;

/** Returns the result of rotating this vector around a given axis by [param angle] (in radians). The axis must be a normalized vector. See also [method @GlobalScope.deg_to_rad]. */
rotated(): Vector3;

/** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
round(): Vector3;

/** Returns a new vector with each component set to [code]1.0[/code] if it's positive, [code]-1.0[/code] if it's negative, and [code]0.0[/code] if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
sign(): Vector3;

/** Returns the signed angle to the given vector, in radians. The sign of the angle is positive in a counter-clockwise direction and negative in a clockwise direction when viewed from the side specified by the [param axis]. */
signed_angle_to(): float;

/**
 * Returns the result of spherical linear interpolation between this vector and [param to], by amount [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.
 *
 * This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [method lerp].
 *
*/
slerp(): Vector3;

/** Returns a new vector slid along a plane defined by the given normal. */
slide(): Vector3;

/** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
snapped(): Vector3;

  connect<T extends SignalsOf<Vector3>>(signal: T, method: SignalFunction<Vector3[T]>): number;


add(other: number | Vector3): Vector3;
sub(other: number | Vector3): Vector3;
mul(other: number | Vector3): Vector3;
div(other: number | Vector3): Vector3;


/**
 * Enumerated value for the X axis. Returned by [method max_axis_index] and [method min_axis_index].
 *
*/
static AXIS_X: any;

/**
 * Enumerated value for the Y axis. Returned by [method max_axis_index] and [method min_axis_index].
 *
*/
static AXIS_Y: any;

/**
 * Enumerated value for the Z axis. Returned by [method max_axis_index] and [method min_axis_index].
 *
*/
static AXIS_Z: any;

/**
 * Zero vector, a vector with all components set to `0`.
 *
*/
static ZERO: Vector3;

/**
 * One vector, a vector with all components set to `1`.
 *
*/
static ONE: Vector3;

/**
 * Infinity vector, a vector with all components set to [constant @GDScript.INF].
 *
*/
static INF: Vector3;

/**
 * Left unit vector. Represents the local direction of left, and the global direction of west.
 *
*/
static LEFT: Vector3;

/**
 * Right unit vector. Represents the local direction of right, and the global direction of east.
 *
*/
static RIGHT: Vector3;

/**
 * Up unit vector.
 *
*/
static UP: Vector3;

/**
 * Down unit vector.
 *
*/
static DOWN: Vector3;

/**
 * Forward unit vector. Represents the local direction of forward, and the global direction of north. Keep in mind that the forward direction for lights, cameras, etc is different from 3D assets like characters, which face towards the camera by convention. Use [constant Vector3.MODEL_FRONT] and similar constants when working in 3D asset space.
 *
*/
static FORWARD: Vector3;

/**
 * Back unit vector. Represents the local direction of back, and the global direction of south.
 *
*/
static BACK: Vector3;

/**
 * Unit vector pointing towards the left side of imported 3D assets.
 *
*/
static MODEL_LEFT: Vector3;

/**
 * Unit vector pointing towards the right side of imported 3D assets.
 *
*/
static MODEL_RIGHT: Vector3;

/**
 * Unit vector pointing towards the top side (up) of imported 3D assets.
 *
*/
static MODEL_TOP: Vector3;

/**
 * Unit vector pointing towards the bottom side (down) of imported 3D assets.
 *
*/
static MODEL_BOTTOM: Vector3;

/**
 * Unit vector pointing towards the front side (facing forward) of imported 3D assets.
 *
*/
static MODEL_FRONT: Vector3;

/**
 * Unit vector pointing towards the rear side (back) of imported 3D assets.
 *
*/
static MODEL_REAR: Vector3;



}

declare type Vector3 = Vector3Constructor;
declare var Vector3: typeof Vector3Constructor & {
    new(): Vector3; 



}
