
/**
 * A 2-element structure that can be used to represent 2D grid coordinates or any other pair of integers.
 *
 * It uses integer coordinates and is therefore preferable to [Vector2] when exact precision is required. Note that the values are limited to 32 bits, and unlike [Vector2] this cannot be configured with an engine build option. Use [int] or [PackedInt64Array] if 64-bit values are needed.
 *
 * **Note:** In a boolean context, a Vector2i will evaluate to `false` if it's equal to `Vector2i(0, 0)`. Otherwise, a Vector2i will always evaluate to `true`.
 *
*/
declare class Vector2iConstructor {

  
/**
 * A 2-element structure that can be used to represent 2D grid coordinates or any other pair of integers.
 *
 * It uses integer coordinates and is therefore preferable to [Vector2] when exact precision is required. Note that the values are limited to 32 bits, and unlike [Vector2] this cannot be configured with an engine build option. Use [int] or [PackedInt64Array] if 64-bit values are needed.
 *
 * **Note:** In a boolean context, a Vector2i will evaluate to `false` if it's equal to `Vector2i(0, 0)`. Otherwise, a Vector2i will always evaluate to `true`.
 *
*/


/** The vector's X component. Also accessible by using the index position [code][0][/code]. */
x: int;

/** The vector's Y component. Also accessible by using the index position [code][1][/code]. */
y: int;

/** Returns a new vector with all components in absolute values (i.e. positive). */
abs(): Vector2i;

/** Returns the aspect ratio of this vector, the ratio of [member x] to [member y]. */
aspect(): float;

/** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
clamp(): Vector2i;

/** Returns the length (magnitude) of this vector. */
length(): float;

/**
 * Returns the squared length (squared magnitude) of this vector.
 *
 * This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.
 *
*/
length_squared(): int;

/** Returns the axis of the vector's highest value. See [code]AXIS_*[/code] constants. If all components are equal, this method returns [constant AXIS_X]. */
max_axis_index(): int;

/** Returns the axis of the vector's lowest value. See [code]AXIS_*[/code] constants. If all components are equal, this method returns [constant AXIS_Y]. */
min_axis_index(): int;

/** Returns a new vector with each component set to [code]1[/code] if it's positive, [code]-1[/code] if it's negative, and [code]0[/code] if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
sign(): Vector2i;

/** Returns a new vector with each component snapped to the closest multiple of the corresponding component in [param step]. */
snapped(): Vector2i;

  connect<T extends SignalsOf<Vector2i>>(signal: T, method: SignalFunction<Vector2i[T]>): number;


add(other: number | Vector2i): Vector2i;
sub(other: number | Vector2i): Vector2i;
mul(other: number | Vector2i): Vector2i;
div(other: number | Vector2i): Vector2i;


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
static ZERO: Vector2i;

/**
 * One vector, a vector with all components set to `1`.
 *
*/
static ONE: Vector2i;

/**
 * Min vector, a vector with all components equal to `INT32_MIN`. Can be used as a negative integer equivalent of [constant Vector2.INF].
 *
*/
static MIN: Vector2i;

/**
 * Max vector, a vector with all components equal to `INT32_MAX`. Can be used as an integer equivalent of [constant Vector2.INF].
 *
*/
static MAX: Vector2i;

/**
 * Left unit vector. Represents the direction of left.
 *
*/
static LEFT: Vector2i;

/**
 * Right unit vector. Represents the direction of right.
 *
*/
static RIGHT: Vector2i;

/**
 * Up unit vector. Y is down in 2D, so this vector points -Y.
 *
*/
static UP: Vector2i;

/**
 * Down unit vector. Y is down in 2D, so this vector points +Y.
 *
*/
static DOWN: Vector2i;



}

declare type Vector2i = Vector2iConstructor;
declare var Vector2i: typeof Vector2iConstructor & {
    new(): Vector2i; 



}
