
/**
 * This class describes a Bézier curve in 2D space. It is mainly used to give a shape to a [Path2D], but can be manually sampled for other purposes.
 *
 * It keeps a cache of precalculated points along the curve, to speed up further calculations.
 *
*/
declare class Curve2D extends Resource  {

  
/**
 * This class describes a Bézier curve in 2D space. It is mainly used to give a shape to a [Path2D], but can be manually sampled for other purposes.
 *
 * It keeps a cache of precalculated points along the curve, to speed up further calculations.
 *
*/
  new(): Curve2D; 
  static "new"(): Curve2D 


/** The distance in pixels between two adjacent cached points. Changing it forces the cache to be recomputed the next time the [method get_baked_points] or [method get_baked_length] function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care. */
bake_interval: float;

/** The number of points describing the curve. */
point_count: int;

/**
 * Adds a point with the specified [param position] relative to the curve's own position, with control points [param in] and [param out]. Appends the new point at the end of the point list.
 *
 * If [param index] is given, the new point is inserted before the existing point identified by index [param index]. Every existing point starting from [param index] is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See [member point_count].
 *
*/
add_point(): void;

/** Removes all points from the curve. */
clear_points(): void;

/** Returns the total length of the curve, based on the cached points. Given enough density (see [member bake_interval]), it should be approximate enough. */
get_baked_length(): float;

/** Returns the cache of points as a [PackedVector2Array]. */
get_baked_points(): PackedVector2Array;

/**
 * Returns the closest offset to [param to_point]. This offset is meant to be used in [method sample_baked].
 *
 * [param to_point] must be in this curve's local space.
 *
*/
get_closest_offset(): float;

/**
 * Returns the closest point on baked segments (in curve's local space) to [param to_point].
 *
 * [param to_point] must be in this curve's local space.
 *
*/
get_closest_point(): Vector2;

/** Returns the position of the control point leading to the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code](0, 0)[/code]. */
get_point_in(): Vector2;

/** Returns the position of the control point leading out of the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code](0, 0)[/code]. */
get_point_out(): Vector2;

/** Returns the position of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns [code](0, 0)[/code]. */
get_point_position(): Vector2;

/** Deletes the point [param idx] from the curve. Sends an error to the console if [param idx] is out of bounds. */
remove_point(): void;

/**
 * Returns the position between the vertex [param idx] and the vertex `idx + 1`, where [param t] controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of [param t] outside the range (`0.0 >= t <=1`) give strange, but predictable results.
 *
 * If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0)`.
 *
*/
sample(): Vector2;

/**
 * Returns a point within the curve at position [param offset], where [param offset] is measured as a pixel distance along the curve.
 *
 * To do that, it finds the two cached points where the [param offset] lies between, then interpolates the values. This interpolation is cubic if [param cubic] is set to `true`, or linear if set to `false`.
 *
 * Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).
 *
*/
sample_baked(): Vector2;

/**
 * Similar to [method sample_baked], but returns [Transform2D] that includes a rotation along the curve, with [member Transform2D.origin] as the point position, [member Transform2D.x] as the sideways vector, and [member Transform2D.y] as the forward vector. Returns an empty transform if the length of the curve is `0`.
 *
 * @example 
 * 
 * var baked = curve.sample_baked_with_rotation(offset)
 * # This will rotate and position the node with the up direction pointing along the curve.
 * position = baked.get_origin()
 * rotation = baked.get_rotation()
 * # Alternatively, not preserving scale.
 * transform = baked * Transform2D.FLIP_Y
 * # To match the rotation of PathFollow2D, not preserving scale.
 * transform = Transform2D(baked.y, baked.x, baked.origin)
 * @summary 
 * 
 *
*/
sample_baked_with_rotation(): Transform2D;

/** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as [code]idx[/code], and its fractional part as [code]t[/code]. */
samplef(): Vector2;

/** Sets the position of the control point leading to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
set_point_in(): void;

/** Sets the position of the control point leading out of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
set_point_out(): void;

/** Sets the position for the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. */
set_point_position(): void;

/**
 * Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.
 *
 * This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.
 *
 * [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
 *
 * [param tolerance_degrees] controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.
 *
*/
tessellate(): PackedVector2Array;

/**
 * Returns a list of points along the curve, with almost uniform density. [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!
 *
 * [param tolerance_length] controls the maximal distance between two neighboring points, before the segment has to be subdivided.
 *
*/
tessellate_even_length(): PackedVector2Array;

  connect<T extends SignalsOf<Curve2D>>(signal: T, method: SignalFunction<Curve2D[T]>): number;






}

