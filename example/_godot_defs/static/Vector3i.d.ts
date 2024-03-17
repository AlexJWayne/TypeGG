
/**
 * A 3-element structure that can be used to represent 3D grid coordinates or any other triplet of integers.
 *
 * It uses integer coordinates and is therefore preferable to [Vector3] when exact precision is required. Note that the values are limited to 32 bits, and unlike [Vector3] this cannot be configured with an engine build option. Use [int] or [PackedInt64Array] if 64-bit values are needed.
 *
 * **Note:** In a boolean context, a Vector3i will evaluate to `false` if it's equal to `Vector3i(0, 0, 0)`. Otherwise, a Vector3i will always evaluate to `true`.
 *
*/
declare class Vector3iConstructor {

  
/**
 * A 3-element structure that can be used to represent 3D grid coordinates or any other triplet of integers.
 *
 * It uses integer coordinates and is therefore preferable to [Vector3] when exact precision is required. Note that the values are limited to 32 bits, and unlike [Vector3] this cannot be configured with an engine build option. Use [int] or [PackedInt64Array] if 64-bit values are needed.
 *
 * **Note:** In a boolean context, a Vector3i will evaluate to `false` if it's equal to `Vector3i(0, 0, 0)`. Otherwise, a Vector3i will always evaluate to `true`.
 *
*/


/** The vector's X component. Also accessible by using the index position [code][0][/code]. */
x: int;

/** The vector's Y component. Also accessible by using the index position [code][1][/code]. */
y: int;

/** The vector's Z component. Also accessible by using the index position [code][2][/code]. */
z: int;

/** Returns a new vector with all components in absolute values (i.e. positive). */
abs(): Vector3i;

/** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
clamp(): Vector3i;

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

/** Returns the axis of the vector's lowest value. See [code]AXIS_*[/code] constants. If all components are equal, this method returns [constant AXIS_Z]. */
min_axis_index(): int;

/** Returns a new vector with each component set to [code]1[/code] if it's positive, [code]-1[/code] if it's negative, and [code]0[/code] if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
sign(): Vector3i;

/** Returns a new vector with each component snapped to the closest multiple of the corresponding component in [param step]. */
snapped(): Vector3i;

  connect<T extends SignalsOf<Vector3i>>(signal: T, method: SignalFunction<Vector3i[T]>): number;


add(other: number | Vector3i): Vector3i;
sub(other: number | Vector3i): Vector3i;
mul(other: number | Vector3i): Vector3i;
div(other: number | Vector3i): Vector3i;


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
static ZERO: Vector3i;

/**
 * One vector, a vector with all components set to `1`.
 *
*/
static ONE: Vector3i;

/**
 * Min vector, a vector with all components equal to `INT32_MIN`. Can be used as a negative integer equivalent of [constant Vector3.INF].
 *
*/
static MIN: Vector3i;

/**
 * Max vector, a vector with all components equal to `INT32_MAX`. Can be used as an integer equivalent of [constant Vector3.INF].
 *
*/
static MAX: Vector3i;

/**
 * Left unit vector. Represents the local direction of left, and the global direction of west.
 *
*/
static LEFT: Vector3i;

/**
 * Right unit vector. Represents the local direction of right, and the global direction of east.
 *
*/
static RIGHT: Vector3i;

/**
 * Up unit vector.
 *
*/
static UP: Vector3i;

/**
 * Down unit vector.
 *
*/
static DOWN: Vector3i;

/**
 * Forward unit vector. Represents the local direction of forward, and the global direction of north.
 *
*/
static FORWARD: Vector3i;

/**
 * Back unit vector. Represents the local direction of back, and the global direction of south.
 *
*/
static BACK: Vector3i;



}

declare type Vector3i = Vector3iConstructor;
declare var Vector3i: typeof Vector3iConstructor & {
    new(): Vector3i; 



}
