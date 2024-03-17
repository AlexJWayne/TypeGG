
/**
 * An implementation of the A* algorithm, used to find the shortest path between two vertices on a connected graph in 2D space.
 *
 * See [AStar3D] for a more thorough explanation on how to use this class. [AStar2D] is a wrapper for [AStar3D] that enforces 2D coordinates.
 *
*/
declare class AStar2D extends RefCounted  {

  
/**
 * An implementation of the A* algorithm, used to find the shortest path between two vertices on a connected graph in 2D space.
 *
 * See [AStar3D] for a more thorough explanation on how to use this class. [AStar2D] is a wrapper for [AStar3D] that enforces 2D coordinates.
 *
*/
  new(): AStar2D; 
  static "new"(): AStar2D 



/**
 * Called when computing the cost between two connected points.
 *
 * Note that this function is hidden in the default [AStar2D] class.
 *
*/
protected _compute_cost(): float;

/**
 * Called when estimating the cost between a point and the path's ending point.
 *
 * Note that this function is hidden in the default [AStar2D] class.
 *
*/
protected _estimate_cost(): float;

/**
 * Adds a new point at the given position with the given identifier. The [param id] must be 0 or larger, and the [param weight_scale] must be 0.0 or greater.
 *
 * The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower [param weight_scale]s to form a path.
 *
 * @example 
 * 
 * 
 * var astar = AStar2D.new()
 * astar.add_point(1, Vector2(1, 0), 4) # Adds the point (1, 0) with weight_scale 4 and id 1
 * 
 * 
 * var astar = new AStar2D();
 * astar.AddPoint(1, new Vector2(1, 0), 4); // Adds the point (1, 0) with weight_scale 4 and id 1
 * 
 * @summary 
 * 
 *
 * If there already exists a point for the given [param id], its position and weight scale are updated to the given values.
 *
*/
add_point(): void;

/** Returns whether there is a connection/segment between the given points. If [param bidirectional] is [code]false[/code], returns whether movement from [param id] to [param to_id] is possible through this segment. */
are_points_connected(): boolean;

/** Clears all the points and segments. */
clear(): void;

/**
 * Creates a segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is allowed, not the reverse direction.
 *
 * @example 
 * 
 * 
 * var astar = AStar2D.new()
 * astar.add_point(1, Vector2(1, 1))
 * astar.add_point(2, Vector2(0, 5))
 * astar.connect_points(1, 2, false)
 * 
 * 
 * var astar = new AStar2D();
 * astar.AddPoint(1, new Vector2(1, 1));
 * astar.AddPoint(2, new Vector2(0, 5));
 * astar.ConnectPoints(1, 2, false);
 * 
 * @summary 
 * 
 *
*/
connect_points(): void;

/** Deletes the segment between the given points. If [param bidirectional] is [code]false[/code], only movement from [param id] to [param to_id] is prevented, and a unidirectional segment possibly remains. */
disconnect_points(): void;

/** Returns the next available point ID with no point associated to it. */
get_available_point_id(): int;

/**
 * Returns the ID of the closest point to [param to_position], optionally taking disabled points into account. Returns `-1` if there are no points in the points pool.
 *
 * **Note:** If several points are the closest to [param to_position], the one with the smallest ID will be returned, ensuring a deterministic result.
 *
*/
get_closest_point(): int;

/**
 * Returns the closest position to [param to_position] that resides inside a segment between two connected points.
 *
 * @example 
 * 
 * 
 * var astar = AStar2D.new()
 * astar.add_point(1, Vector2(0, 0))
 * astar.add_point(2, Vector2(0, 5))
 * astar.connect_points(1, 2)
 * var res = astar.get_closest_position_in_segment(Vector2(3, 3)) # Returns (0, 3)
 * 
 * 
 * var astar = new AStar2D();
 * astar.AddPoint(1, new Vector2(0, 0));
 * astar.AddPoint(2, new Vector2(0, 5));
 * astar.ConnectPoints(1, 2);
 * Vector2 res = astar.GetClosestPositionInSegment(new Vector2(3, 3)); // Returns (0, 3)
 * 
 * @summary 
 * 
 *
 * The result is in the segment that goes from `y = 0` to `y = 5`. It's the closest position in the segment to the given point.
 *
*/
get_closest_position_in_segment(): Vector2;

/**
 * Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.
 *
 * @example 
 * 
 * 
 * var astar = AStar2D.new()
 * astar.add_point(1, Vector2(0, 0))
 * astar.add_point(2, Vector2(0, 1), 1) # Default weight is 1
 * astar.add_point(3, Vector2(1, 1))
 * astar.add_point(4, Vector2(2, 0))
 * astar.connect_points(1, 2, false)
 * astar.connect_points(2, 3, false)
 * astar.connect_points(4, 3, false)
 * astar.connect_points(1, 4, false)
 * var res = astar.get_id_path(1, 3) # Returns [1, 2, 3]
 * 
 * 
 * var astar = new AStar2D();
 * astar.AddPoint(1, new Vector2(0, 0));
 * astar.AddPoint(2, new Vector2(0, 1), 1); // Default weight is 1
 * astar.AddPoint(3, new Vector2(1, 1));
 * astar.AddPoint(4, new Vector2(2, 0));
 * astar.ConnectPoints(1, 2, false);
 * astar.ConnectPoints(2, 3, false);
 * astar.ConnectPoints(4, 3, false);
 * astar.ConnectPoints(1, 4, false);
 * int[] res = astar.GetIdPath(1, 3); // Returns [1, 2, 3]
 * 
 * @summary 
 * 
 *
 * If you change the 2nd point's weight to 3, then the result will be `[1, 4, 3]` instead, because now even though the distance is longer, it's "easier" to get through point 4 than through point 2.
 *
*/
get_id_path(): PackedInt64Array;

/** Returns the capacity of the structure backing the points, useful in conjunction with [method reserve_space]. */
get_point_capacity(): int;

/**
 * Returns an array with the IDs of the points that form the connection with the given point.
 *
 * @example 
 * 
 * 
 * var astar = AStar2D.new()
 * astar.add_point(1, Vector2(0, 0))
 * astar.add_point(2, Vector2(0, 1))
 * astar.add_point(3, Vector2(1, 1))
 * astar.add_point(4, Vector2(2, 0))
 * astar.connect_points(1, 2, true)
 * astar.connect_points(1, 3, true)
 * var neighbors = astar.get_point_connections(1) # Returns [2, 3]
 * 
 * 
 * var astar = new AStar2D();
 * astar.AddPoint(1, new Vector2(0, 0));
 * astar.AddPoint(2, new Vector2(0, 1));
 * astar.AddPoint(3, new Vector2(1, 1));
 * astar.AddPoint(4, new Vector2(2, 0));
 * astar.ConnectPoints(1, 2, true);
 * astar.ConnectPoints(1, 3, true);
 * int[] neighbors = astar.GetPointConnections(1); // Returns [2, 3]
 * 
 * @summary 
 * 
 *
*/
get_point_connections(): PackedInt64Array;

/** Returns the number of points currently in the points pool. */
get_point_count(): int;

/** Returns an array of all point IDs. */
get_point_ids(): PackedInt64Array;

/**
 * Returns an array with the points that are in the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.
 *
 * **Note:** This method is not thread-safe. If called from a [Thread], it will return an empty [PackedVector2Array] and will print an error message.
 *
*/
get_point_path(): PackedVector2Array;

/** Returns the position of the point associated with the given [param id]. */
get_point_position(): Vector2;

/** Returns the weight scale of the point associated with the given [param id]. */
get_point_weight_scale(): float;

/** Returns whether a point associated with the given [param id] exists. */
has_point(): boolean;

/** Returns whether a point is disabled or not for pathfinding. By default, all points are enabled. */
is_point_disabled(): boolean;

/** Removes the point associated with the given [param id] from the points pool. */
remove_point(): void;

/** Reserves space internally for [param num_nodes] points, useful if you're adding a known large number of points at once, such as points on a grid. New capacity must be greater or equals to old capacity. */
reserve_space(): void;

/** Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle. */
set_point_disabled(): void;

/** Sets the [param position] for the point with the given [param id]. */
set_point_position(): void;

/** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. */
set_point_weight_scale(): void;

  connect<T extends SignalsOf<AStar2D>>(signal: T, method: SignalFunction<AStar2D[T]>): number;






}

