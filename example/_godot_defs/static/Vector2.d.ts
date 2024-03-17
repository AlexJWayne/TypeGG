
/**
 * A 2-element structure that can be used to represent 2D coordinates or any other pair of numeric values.
 *
 * It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [float] which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.
 *
 * See [Vector2i] for its integer counterpart.
 *
 * **Note:** In a boolean context, a Vector2 will evaluate to `false` if it's equal to `Vector2(0, 0)`. Otherwise, a Vector2 will always evaluate to `true`.
 *
*/
declare class Vector2Constructor {

  
/**
 * A 2-element structure that can be used to represent 2D coordinates or any other pair of numeric values.
 *
 * It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [float] which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.
 *
 * See [Vector2i] for its integer counterpart.
 *
 * **Note:** In a boolean context, a Vector2 will evaluate to `false` if it's equal to `Vector2(0, 0)`. Otherwise, a Vector2 will always evaluate to `true`.
 *
*/


/** The vector's X component. Also accessible by using the index position [code][0][/code]. */
x: float;

/** The vector's Y component. Also accessible by using the index position [code][1][/code]. */
y: float;

/** Returns a new vector with all components in absolute values (i.e. positive). */
abs(): Vector2;

/**
 * Returns this vector's angle with respect to the positive X axis, or `(1, 0)` vector, in radians.
 *
 * For example, `Vector2.RIGHT.angle()` will return zero, `Vector2.DOWN.angle()` will return `PI / 2` (a quarter turn, or 90 degrees), and `Vector2(1, -1).angle()` will return `-PI / 4` (a negative eighth turn, or -45 degrees).
 *
 * [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle.png]Illustration of the returned angle.[/url]
 *
 * Equivalent to the result of [method @GlobalScope.atan2] when called with the vector's [member y] and [member x] as parameters: `atan2(y, x)`.
 *
*/
angle(): float;

/**
 * Returns the angle to the given vector, in radians.
 *
 * [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to.png]Illustration of the returned angle.[/url]
 *
*/
angle_to(): float;

/**
 * Returns the angle between the line connecting the two points and the X axis, in radians.
 *
 * `a.angle_to_point(b)` is equivalent of doing `(b - a).angle()`.
 *
 * [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to_point.png]Illustration of the returned angle.[/url]
 *
*/
angle_to_point(): float;

/** Returns the aspect ratio of this vector, the ratio of [member x] to [member y]. */
aspect(): float;

/** Returns the derivative at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
bezier_derivative(): Vector2;

/** Returns the point at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
bezier_interpolate(): Vector2;

/** Returns a new vector "bounced off" from a plane defined by the given normal. */
bounce(): Vector2;

/** Returns a new vector with all components rounded up (towards positive infinity). */
ceil(): Vector2;

/** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
clamp(): Vector2;

/**
 * Returns the 2D analog of the cross product for this vector and [param with].
 *
 * This is the signed area of the parallelogram formed by the two vectors. If the second vector is clockwise from the first vector, then the cross product is the positive area. If counter-clockwise, the cross product is the negative area.
 *
 * **Note:** Cross product is not defined in 2D mathematically. This method embeds the 2D vectors in the XY plane of 3D space and uses their cross product's Z component as the analog.
 *
*/
cross(): float;

/** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
cubic_interpolate(): Vector2;

/**
 * Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.
 *
 * It can perform smoother interpolation than [method cubic_interpolate] by the time values.
 *
*/
cubic_interpolate_in_time(): Vector2;

/** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using [code](b - a).normalized()[/code]. */
direction_to(): Vector2;

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
floor(): Vector2;

/**
 * Creates a unit [Vector2] rotated to the given [param angle] in radians. This is equivalent to doing `Vector2(cos(angle), sin(angle))` or `Vector2.RIGHT.rotated(angle)`.
 *
 * @example 
 * 
 * print(Vector2.from_angle(0)) # Prints (1, 0).
 * print(Vector2(1, 0).angle()) # Prints 0, which is the angle used above.
 * print(Vector2.from_angle(PI / 2)) # Prints (0, 1).
 * @summary 
 * 
 *
*/
from_angle(): Vector2;

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
lerp(): Vector2;

/** Returns the vector with a maximum length by limiting its length to [param length]. */
limit_length(): Vector2;

/** Returns the axis of the vector's highest value. See [code]AXIS_*[/code] constants. If all components are equal, this method returns [constant AXIS_X]. */
max_axis_index(): int;

/** Returns the axis of the vector's lowest value. See [code]AXIS_*[/code] constants. If all components are equal, this method returns [constant AXIS_Y]. */
min_axis_index(): int;

/** Returns a new vector moved toward [param to] by the fixed [param delta] amount. Will not go past the final value. */
move_toward(): Vector2;

/**
 * Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. See also [method is_normalized].
 *
 * **Note:** This function may return incorrect values if the input vector length is near zero.
 *
*/
normalized(): Vector2;

/** Returns a perpendicular vector rotated 90 degrees counter-clockwise compared to the original, with the same length. */
orthogonal(): Vector2;

/** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
posmod(): Vector2;

/** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
posmodv(): Vector2;

/** Returns the result of projecting the vector onto the given vector [param b]. */
project(): Vector2;

/** Returns the result of reflecting the vector from a line defined by the given direction vector [param n]. */
reflect(): Vector2;

/** Returns the result of rotating this vector by [param angle] (in radians). See also [method @GlobalScope.deg_to_rad]. */
rotated(): Vector2;

/** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
round(): Vector2;

/** Returns a new vector with each component set to [code]1.0[/code] if it's positive, [code]-1.0[/code] if it's negative, and [code]0.0[/code] if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
sign(): Vector2;

/**
 * Returns the result of spherical linear interpolation between this vector and [param to], by amount [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.
 *
 * This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [method lerp].
 *
*/
slerp(): Vector2;

/** Returns the result of sliding the vector along a plane defined by the given normal. */
slide(): Vector2;

/** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
snapped(): Vector2;

  connect<T extends SignalsOf<Vector2>>(signal: T, method: SignalFunction<Vector2[T]>): number;


add(other: number | Vector2): Vector2;
sub(other: number | Vector2): Vector2;
mul(other: number | Vector2): Vector2;
div(other: number | Vector2): Vector2;


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
 * Zero vector, a vector with all components set to `0`.
 *
*/
static ZERO: Vector2;

/**
 * One vector, a vector with all components set to `1`.
 *
*/
static ONE: Vector2;

/**
 * Infinity vector, a vector with all components set to [constant @GDScript.INF].
 *
*/
static INF: Vector2;

/**
 * Left unit vector. Represents the direction of left.
 *
*/
static LEFT: Vector2;

/**
 * Right unit vector. Represents the direction of right.
 *
*/
static RIGHT: Vector2;

/**
 * Up unit vector. Y is down in 2D, so this vector points -Y.
 *
*/
static UP: Vector2;

/**
 * Down unit vector. Y is down in 2D, so this vector points +Y.
 *
*/
static DOWN: Vector2;



}

declare type Vector2 = Vector2Constructor;
declare var Vector2: typeof Vector2Constructor & {
    new(): Vector2; 



}
