
/**
 * A 4-element structure that can be used to represent 4D coordinates or any other quadruplet of numeric values.
 *
 * It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [float] which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.
 *
 * See [Vector4i] for its integer counterpart.
 *
 * **Note:** In a boolean context, a Vector4 will evaluate to `false` if it's equal to `Vector4(0, 0, 0, 0)`. Otherwise, a Vector4 will always evaluate to `true`.
 *
*/
declare class Vector4 {

  
/**
 * A 4-element structure that can be used to represent 4D coordinates or any other quadruplet of numeric values.
 *
 * It uses floating-point coordinates. By default, these floating-point values use 32-bit precision, unlike [float] which is always 64-bit. If double precision is needed, compile the engine with the option `precision=double`.
 *
 * See [Vector4i] for its integer counterpart.
 *
 * **Note:** In a boolean context, a Vector4 will evaluate to `false` if it's equal to `Vector4(0, 0, 0, 0)`. Otherwise, a Vector4 will always evaluate to `true`.
 *
*/
  new(): Vector4; 
  static "new"(): Vector4 


/** The vector's W component. Also accessible by using the index position [code][3][/code]. */
w: float;

/** The vector's X component. Also accessible by using the index position [code][0][/code]. */
x: float;

/** The vector's Y component. Also accessible by using the index position [code][1][/code]. */
y: float;

/** The vector's Z component. Also accessible by using the index position [code][2][/code]. */
z: float;

/** Returns a new vector with all components in absolute values (i.e. positive). */
abs(): Vector4;

/** Returns a new vector with all components rounded up (towards positive infinity). */
ceil(): Vector4;

/** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
clamp(): Vector4;

/** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
cubic_interpolate(): Vector4;

/**
 * Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.
 *
 * It can perform smoother interpolation than [method cubic_interpolate] by the time values.
 *
*/
cubic_interpolate_in_time(): Vector4;

/** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using [code](b - a).normalized()[/code]. */
direction_to(): Vector4;

/**
 * Returns the squared distance between this vector and [param to].
 *
 * This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.
 *
*/
distance_squared_to(): float;

/** Returns the distance between this vector and [param to]. */
distance_to(): float;

/** Returns the dot product of this vector and [param with]. */
dot(): float;

/** Returns a new vector with all components rounded down (towards negative infinity). */
floor(): Vector4;

/** Returns the inverse of the vector. This is the same as [code]Vector4(1.0 / v.x, 1.0 / v.y, 1.0 / v.z, 1.0 / v.w)[/code]. */
inverse(): Vector4;

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
lerp(): Vector4;

/** Returns the axis of the vector's highest value. See [code]AXIS_*[/code] constants. If all components are equal, this method returns [constant AXIS_X]. */
max_axis_index(): int;

/** Returns the axis of the vector's lowest value. See [code]AXIS_*[/code] constants. If all components are equal, this method returns [constant AXIS_W]. */
min_axis_index(): int;

/**
 * Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. See also [method is_normalized].
 *
 * **Note:** This function may return incorrect values if the input vector length is near zero.
 *
*/
normalized(): Vector4;

/** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
posmod(): Vector4;

/** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
posmodv(): Vector4;

/** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
round(): Vector4;

/** Returns a new vector with each component set to [code]1.0[/code] if it's positive, [code]-1.0[/code] if it's negative, and [code]0.0[/code] if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
sign(): Vector4;

/** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
snapped(): Vector4;

  connect<T extends SignalsOf<Vector4>>(signal: T, method: SignalFunction<Vector4[T]>): number;



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
 * Enumerated value for the W axis. Returned by [method max_axis_index] and [method min_axis_index].
 *
*/
static AXIS_W: any;

/**
 * Zero vector, a vector with all components set to `0`.
 *
*/
static ZERO: Vector4;

/**
 * One vector, a vector with all components set to `1`.
 *
*/
static ONE: Vector4;

/**
 * Infinity vector, a vector with all components set to [constant @GDScript.INF].
 *
*/
static INF: Vector4;



}

