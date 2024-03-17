
/**
 * A* (A star) is a computer algorithm used in pathfinding and graph traversal, the process of plotting short paths among vertices (points), passing through a given set of edges (segments). It enjoys widespread use due to its performance and accuracy. Godot's A* implementation uses points in 3D space and Euclidean distances by default.
 *
 * You must add points manually with [method add_point] and create segments manually with [method connect_points]. Once done, you can test if there is a path between two points with the [method are_points_connected] function, get a path containing indices by [method get_id_path], or one containing actual coordinates with [method get_point_path].
 *
 * It is also possible to use non-Euclidean distances. To do so, create a class that extends [AStar3D] and override methods [method _compute_cost] and [method _estimate_cost]. Both take two indices and return a length, as is shown in the following example.
 *
 * @example 
 * 
 * 
 * class MyAStar:
 *     extends AStar3D
 *     func _compute_cost(u, v):
 *         return abs(u - v)
 *     func _estimate_cost(u, v):
 *         return min(0, abs(u - v) - 1)
 * 
 * 
 * public partial class MyAStar : AStar3D
 * {
 *     public override float _ComputeCost(long fromId, long toId)
 *     {
 *         return Mathf.Abs((int)(fromId - toId));
 *     }
 *     public override float _EstimateCost(long fromId, long toId)
 *     {
 *         return Mathf.Min(0, Mathf.Abs((int)(fromId - toId)) - 1);
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * [method _estimate_cost] should return a lower bound of the distance, i.e. `_estimate_cost(u, v) <= _compute_cost(u, v)`. This serves as a hint to the algorithm because the custom [method _compute_cost] might be computation-heavy. If this is not the case, make [method _estimate_cost] return the same value as [method _compute_cost] to provide the algorithm with the most accurate information.
 *
 * If the default [method _estimate_cost] and [method _compute_cost] methods are used, or if the supplied [method _estimate_cost] method returns a lower bound of the cost, then the paths returned by A* will be the lowest-cost paths. Here, the cost of a path equals the sum of the [method _compute_cost] results of all segments in the path multiplied by the `weight_scale`s of the endpoints of the respective segments. If the default methods are used and the `weight_scale`s of all points are set to `1.0`, then this equals the sum of Euclidean distances of all segments in the path.
 *
*/
declare class AStar3D extends RefCounted  {

  
/**
 * A* (A star) is a computer algorithm used in pathfinding and graph traversal, the process of plotting short paths among vertices (points), passing through a given set of edges (segments). It enjoys widespread use due to its performance and accuracy. Godot's A* implementation uses points in 3D space and Euclidean distances by default.
 *
 * You must add points manually with [method add_point] and create segments manually with [method connect_points]. Once done, you can test if there is a path between two points with the [method are_points_connected] function, get a path containing indices by [method get_id_path], or one containing actual coordinates with [method get_point_path].
 *
 * It is also possible to use non-Euclidean distances. To do so, create a class that extends [AStar3D] and override methods [method _compute_cost] and [method _estimate_cost]. Both take two indices and return a length, as is shown in the following example.
 *
 * @example 
 * 
 * 
 * class MyAStar:
 *     extends AStar3D
 *     func _compute_cost(u, v):
 *         return abs(u - v)
 *     func _estimate_cost(u, v):
 *         return min(0, abs(u - v) - 1)
 * 
 * 
 * public partial class MyAStar : AStar3D
 * {
 *     public override float _ComputeCost(long fromId, long toId)
 *     {
 *         return Mathf.Abs((int)(fromId - toId));
 *     }
 *     public override float _EstimateCost(long fromId, long toId)
 *     {
 *         return Mathf.Min(0, Mathf.Abs((int)(fromId - toId)) - 1);
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * [method _estimate_cost] should return a lower bound of the distance, i.e. `_estimate_cost(u, v) <= _compute_cost(u, v)`. This serves as a hint to the algorithm because the custom [method _compute_cost] might be computation-heavy. If this is not the case, make [method _estimate_cost] return the same value as [method _compute_cost] to provide the algorithm with the most accurate information.
 *
 * If the default [method _estimate_cost] and [method _compute_cost] methods are used, or if the supplied [method _estimate_cost] method returns a lower bound of the cost, then the paths returned by A* will be the lowest-cost paths. Here, the cost of a path equals the sum of the [method _compute_cost] results of all segments in the path multiplied by the `weight_scale`s of the endpoints of the respective segments. If the default methods are used and the `weight_scale`s of all points are set to `1.0`, then this equals the sum of Euclidean distances of all segments in the path.
 *
*/
  new(): AStar3D; 
  static "new"(): AStar3D 



/**
 * Called when computing the cost between two connected points.
 *
 * Note that this function is hidden in the default [AStar3D] class.
 *
*/
protected _compute_cost(): float;

/**
 * Called when estimating the cost between a point and the path's ending point.
 *
 * Note that this function is hidden in the default [AStar3D] class.
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
 * var astar = AStar3D.new()
 * astar.add_point(1, Vector3(1, 0, 0), 4) # Adds the point (1, 0, 0) with weight_scale 4 and id 1
 * 
 * 
 * var astar = new AStar3D();
 * astar.AddPoint(1, new Vector3(1, 0, 0), 4); // Adds the point (1, 0, 0) with weight_scale 4 and id 1
 * 
 * @summary 
 * 
 *
 * If there already exists a point for the given [param id], its position and weight scale are updated to the given values.
 *
*/
add_point(): void;

/** Returns whether the two given points are directly connected by a segment. If [param bidirectional] is [code]false[/code], returns whether movement from [param id] to [param to_id] is possible through this segment. */
are_points_connected(): boolean;

/** Clears all the points and segments. */
clear(): void;

/**
 * Creates a segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is allowed, not the reverse direction.
 *
 * @example 
 * 
 * 
 * var astar = AStar3D.new()
 * astar.add_point(1, Vector3(1, 1, 0))
 * astar.add_point(2, Vector3(0, 5, 0))
 * astar.connect_points(1, 2, false)
 * 
 * 
 * var astar = new AStar3D();
 * astar.AddPoint(1, new Vector3(1, 1, 0));
 * astar.AddPoint(2, new Vector3(0, 5, 0));
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
 * var astar = AStar3D.new()
 * astar.add_point(1, Vector3(0, 0, 0))
 * astar.add_point(2, Vector3(0, 5, 0))
 * astar.connect_points(1, 2)
 * var res = astar.get_closest_position_in_segment(Vector3(3, 3, 0)) # Returns (0, 3, 0)
 * 
 * 
 * var astar = new AStar3D();
 * astar.AddPoint(1, new Vector3(0, 0, 0));
 * astar.AddPoint(2, new Vector3(0, 5, 0));
 * astar.ConnectPoints(1, 2);
 * Vector3 res = astar.GetClosestPositionInSegment(new Vector3(3, 3, 0)); // Returns (0, 3, 0)
 * 
 * @summary 
 * 
 *
 * The result is in the segment that goes from `y = 0` to `y = 5`. It's the closest position in the segment to the given point.
 *
*/
get_closest_position_in_segment(): Vector3;

/**
 * Returns an array with the IDs of the points that form the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.
 *
 * @example 
 * 
 * 
 * var astar = AStar3D.new()
 * astar.add_point(1, Vector3(0, 0, 0))
 * astar.add_point(2, Vector3(0, 1, 0), 1) # Default weight is 1
 * astar.add_point(3, Vector3(1, 1, 0))
 * astar.add_point(4, Vector3(2, 0, 0))
 * astar.connect_points(1, 2, false)
 * astar.connect_points(2, 3, false)
 * astar.connect_points(4, 3, false)
 * astar.connect_points(1, 4, false)
 * var res = astar.get_id_path(1, 3) # Returns [1, 2, 3]
 * 
 * 
 * var astar = new AStar3D();
 * astar.AddPoint(1, new Vector3(0, 0, 0));
 * astar.AddPoint(2, new Vector3(0, 1, 0), 1); // Default weight is 1
 * astar.AddPoint(3, new Vector3(1, 1, 0));
 * astar.AddPoint(4, new Vector3(2, 0, 0));
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
 * var astar = AStar3D.new()
 * astar.add_point(1, Vector3(0, 0, 0))
 * astar.add_point(2, Vector3(0, 1, 0))
 * astar.add_point(3, Vector3(1, 1, 0))
 * astar.add_point(4, Vector3(2, 0, 0))
 * astar.connect_points(1, 2, true)
 * astar.connect_points(1, 3, true)
 * var neighbors = astar.get_point_connections(1) # Returns [2, 3]
 * 
 * 
 * var astar = new AStar3D();
 * astar.AddPoint(1, new Vector3(0, 0, 0));
 * astar.AddPoint(2, new Vector3(0, 1, 0));
 * astar.AddPoint(3, new Vector3(1, 1, 0));
 * astar.AddPoint(4, new Vector3(2, 0, 0));
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
 * Returns an array with the points that are in the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.
 *
 * **Note:** This method is not thread-safe. If called from a [Thread], it will return an empty [PackedVector3Array] and will print an error message.
 *
*/
get_point_path(): PackedVector3Array;

/** Returns the position of the point associated with the given [param id]. */
get_point_position(): Vector3;

/** Returns the weight scale of the point associated with the given [param id]. */
get_point_weight_scale(): float;

/** Returns whether a point associated with the given [param id] exists. */
has_point(): boolean;

/** Returns whether a point is disabled or not for pathfinding. By default, all points are enabled. */
is_point_disabled(): boolean;

/** Removes the point associated with the given [param id] from the points pool. */
remove_point(): void;

/** Reserves space internally for [param num_nodes] points. Useful if you're adding a known large number of points at once, such as points on a grid. New capacity must be greater or equals to old capacity. */
reserve_space(): void;

/** Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle. */
set_point_disabled(): void;

/** Sets the [param position] for the point with the given [param id]. */
set_point_position(): void;

/** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. */
set_point_weight_scale(): void;

  connect<T extends SignalsOf<AStar3D>>(signal: T, method: SignalFunction<AStar3D[T]>): number;






}

