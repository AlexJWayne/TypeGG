
/**
 * [AABB] consists of a position, a size, and several utility functions. It is typically used for fast overlap tests.
 *
 * It uses floating-point coordinates. The 2D counterpart to [AABB] is [Rect2].
 *
 * Negative values for [member size] are not supported and will not work for most methods. Use [method abs] to get an AABB with a positive size.
 *
 * **Note:** Unlike [Rect2], [AABB] does not have a variant that uses integer coordinates.
 *
*/
declare class AABB {

  
/**
 * [AABB] consists of a position, a size, and several utility functions. It is typically used for fast overlap tests.
 *
 * It uses floating-point coordinates. The 2D counterpart to [AABB] is [Rect2].
 *
 * Negative values for [member size] are not supported and will not work for most methods. Use [method abs] to get an AABB with a positive size.
 *
 * **Note:** Unlike [Rect2], [AABB] does not have a variant that uses integer coordinates.
 *
*/
  new(): AABB; 
  static "new"(): AABB 


/** Ending corner. This is calculated as [code]position + size[/code]. Setting this value will change the size. */
end: Vector3;

/** Beginning corner. Typically has values lower than [member end]. */
position: Vector3;

/**
 * Size from [member position] to [member end]. Typically, all components are positive.
 *
 * If the size is negative, you can use [method abs] to fix it.
 *
*/
size: Vector3;

/** Returns an AABB with equivalent position and size, modified so that the most-negative corner is the origin and the size is positive. */
abs(): AABB;

/** Returns [code]true[/code] if this [AABB] completely encloses another one. */
encloses(): boolean;

/**
 * Returns a copy of this [AABB] expanded to include a given point.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * # position (-3, 2, 0), size (1, 1, 1)
 * var box = AABB(Vector3(-3, 2, 0), Vector3(1, 1, 1))
 * # position (-3, -1, 0), size (3, 4, 2), so we fit both the original AABB and Vector3(0, -1, 2)
 * var box2 = box.expand(Vector3(0, -1, 2))
 * 
 * 
 * // position (-3, 2, 0), size (1, 1, 1)
 * var box = new Aabb(new Vector3(-3, 2, 0), new Vector3(1, 1, 1));
 * // position (-3, -1, 0), size (3, 4, 2), so we fit both the original AABB and Vector3(0, -1, 2)
 * var box2 = box.Expand(new Vector3(0, -1, 2));
 * 
 * @summary 
 * 
 *
*/
expand(): AABB;

/** Returns the center of the [AABB], which is equal to [member position] + ([member size] / 2). */
get_center(): Vector3;

/** Gets the position of the 8 endpoints of the [AABB] in space. */
get_endpoint(): Vector3;

/** Returns the normalized longest axis of the [AABB]. */
get_longest_axis(): Vector3;

/** Returns the index of the longest axis of the [AABB] (according to [Vector3]'s [code]AXIS_*[/code] constants). */
get_longest_axis_index(): int;

/** Returns the scalar length of the longest axis of the [AABB]. */
get_longest_axis_size(): float;

/** Returns the normalized shortest axis of the [AABB]. */
get_shortest_axis(): Vector3;

/** Returns the index of the shortest axis of the [AABB] (according to [Vector3]::AXIS* enum). */
get_shortest_axis_index(): int;

/** Returns the scalar length of the shortest axis of the [AABB]. */
get_shortest_axis_size(): float;

/** Returns the vertex of the AABB that's the farthest in a given direction. This point is commonly known as the support point in collision detection algorithms. */
get_support(): Vector3;

/** Returns the volume of the [AABB]. */
get_volume(): float;

/** Returns a copy of the [AABB] grown a given number of units towards all the sides. */
grow(): AABB;

/**
 * Returns `true` if the [AABB] contains a point. Points on the faces of the AABB are considered included, though float-point precision errors may impact the accuracy of such checks.
 *
 * **Note:** This method is not reliable for [AABB] with a **negative size**. Use [method abs] to get a positive sized equivalent [AABB] to check for contained points.
 *
*/
has_point(): boolean;

/** Returns [code]true[/code] if the [AABB] has a surface or a length, and [code]false[/code] if the [AABB] is empty (all components of [member size] are zero or negative). */
has_surface(): boolean;

/** Returns [code]true[/code] if the [AABB] has a volume, and [code]false[/code] if the [AABB] is flat, empty, or has a negative [member size]. */
has_volume(): boolean;

/** Returns the intersection between two [AABB]. An empty AABB (size [code](0, 0, 0)[/code]) is returned on failure. */
intersection(): AABB;

/** Returns [code]true[/code] if the [AABB] overlaps with another. */
intersects(): boolean;

/** Returns [code]true[/code] if the [AABB] is on both sides of a plane. */
intersects_plane(): boolean;

/** Returns the point of intersection of the given ray with this [AABB] or [code]null[/code] if there is no intersection. Ray length is infinite. */
intersects_ray(): any;

/** Returns the point of intersection between [param from] and [param to] with this [AABB] or [code]null[/code] if there is no intersection. */
intersects_segment(): any;

/** Returns [code]true[/code] if this [AABB] and [param aabb] are approximately equal, by calling [method @GlobalScope.is_equal_approx] on each component. */
is_equal_approx(): boolean;

/** Returns [code]true[/code] if this [AABB] is finite, by calling [method @GlobalScope.is_finite] on each component. */
is_finite(): boolean;

/** Returns a larger [AABB] that contains both this [AABB] and [param with]. */
merge(): AABB;

  connect<T extends SignalsOf<AABB>>(signal: T, method: SignalFunction<AABB[T]>): number;






}

