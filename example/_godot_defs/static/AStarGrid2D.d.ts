
/**
 * [AStarGrid2D] is a variant of [AStar2D] that is specialized for partial 2D grids. It is simpler to use because it doesn't require you to manually create points and connect them together. This class also supports multiple types of heuristics, modes for diagonal movement, and a jumping mode to speed up calculations.
 *
 * To use [AStarGrid2D], you only need to set the [member region] of the grid, optionally set the [member cell_size], and then call the [method update] method:
 *
 * @example 
 * 
 * 
 * var astar_grid = AStarGrid2D.new()
 * astar_grid.region = Rect2i(0, 0, 32, 32)
 * astar_grid.cell_size = Vector2(16, 16)
 * astar_grid.update()
 * print(astar_grid.get_id_path(Vector2i(0, 0), Vector2i(3, 4))) # prints (0, 0), (1, 1), (2, 2), (3, 3), (3, 4)
 * print(astar_grid.get_point_path(Vector2i(0, 0), Vector2i(3, 4))) # prints (0, 0), (16, 16), (32, 32), (48, 48), (48, 64)
 * 
 * 
 * AStarGrid2D astarGrid = new AStarGrid2D();
 * astarGrid.Region = new Rect2I(0, 0, 32, 32);
 * astarGrid.CellSize = new Vector2I(16, 16);
 * astarGrid.Update();
 * GD.Print(astarGrid.GetIdPath(Vector2I.Zero, new Vector2I(3, 4))); // prints (0, 0), (1, 1), (2, 2), (3, 3), (3, 4)
 * GD.Print(astarGrid.GetPointPath(Vector2I.Zero, new Vector2I(3, 4))); // prints (0, 0), (16, 16), (32, 32), (48, 48), (48, 64)
 * 
 * @summary 
 * 
 *
 * To remove a point from the pathfinding grid, it must be set as "solid" with [method set_point_solid].
 *
*/
declare class AStarGrid2D extends RefCounted  {

  
/**
 * [AStarGrid2D] is a variant of [AStar2D] that is specialized for partial 2D grids. It is simpler to use because it doesn't require you to manually create points and connect them together. This class also supports multiple types of heuristics, modes for diagonal movement, and a jumping mode to speed up calculations.
 *
 * To use [AStarGrid2D], you only need to set the [member region] of the grid, optionally set the [member cell_size], and then call the [method update] method:
 *
 * @example 
 * 
 * 
 * var astar_grid = AStarGrid2D.new()
 * astar_grid.region = Rect2i(0, 0, 32, 32)
 * astar_grid.cell_size = Vector2(16, 16)
 * astar_grid.update()
 * print(astar_grid.get_id_path(Vector2i(0, 0), Vector2i(3, 4))) # prints (0, 0), (1, 1), (2, 2), (3, 3), (3, 4)
 * print(astar_grid.get_point_path(Vector2i(0, 0), Vector2i(3, 4))) # prints (0, 0), (16, 16), (32, 32), (48, 48), (48, 64)
 * 
 * 
 * AStarGrid2D astarGrid = new AStarGrid2D();
 * astarGrid.Region = new Rect2I(0, 0, 32, 32);
 * astarGrid.CellSize = new Vector2I(16, 16);
 * astarGrid.Update();
 * GD.Print(astarGrid.GetIdPath(Vector2I.Zero, new Vector2I(3, 4))); // prints (0, 0), (1, 1), (2, 2), (3, 3), (3, 4)
 * GD.Print(astarGrid.GetPointPath(Vector2I.Zero, new Vector2I(3, 4))); // prints (0, 0), (16, 16), (32, 32), (48, 48), (48, 64)
 * 
 * @summary 
 * 
 *
 * To remove a point from the pathfinding grid, it must be set as "solid" with [method set_point_solid].
 *
*/
  new(): AStarGrid2D; 
  static "new"(): AStarGrid2D 


/** The size of the point cell which will be applied to calculate the resulting point position returned by [method get_point_path]. If changed, [method update] needs to be called before finding the next path. */
cell_size: Vector2;

/** The default [enum Heuristic] which will be used to calculate the cost between two points if [method _compute_cost] was not overridden. */
default_compute_heuristic: int;

/** The default [enum Heuristic] which will be used to calculate the cost between the point and the end point if [method _estimate_cost] was not overridden. */
default_estimate_heuristic: int;

/** A specific [enum DiagonalMode] mode which will force the path to avoid or accept the specified diagonals. */
diagonal_mode: int;

/**
 * Enables or disables jumping to skip up the intermediate points and speeds up the searching algorithm.
 *
 * **Note:** Currently, toggling it on disables the consideration of weight scaling in pathfinding.
 *
*/
jumping_enabled: boolean;

/** The offset of the grid which will be applied to calculate the resulting point position returned by [method get_point_path]. If changed, [method update] needs to be called before finding the next path. */
offset: Vector2;

/** The region of grid cells available for pathfinding. If changed, [method update] needs to be called before finding the next path. */
region: Rect2i;

/**
 * The size of the grid (number of cells of size [member cell_size] on each axis). If changed, [method update] needs to be called before finding the next path.
 *
 * **Deprecated.** Use [member region] instead.
 *
*/
size: Vector2i;

/**
 * Called when computing the cost between two connected points.
 *
 * Note that this function is hidden in the default [AStarGrid2D] class.
 *
*/
protected _compute_cost(): float;

/**
 * Called when estimating the cost between a point and the path's ending point.
 *
 * Note that this function is hidden in the default [AStarGrid2D] class.
 *
*/
protected _estimate_cost(): float;

/** Clears the grid and sets the [member region] to [code]Rect2i(0, 0, 0, 0)[/code]. */
clear(): void;

/**
 * Fills the given [param region] on the grid with the specified value for the solid flag.
 *
 * **Note:** Calling [method update] is not needed after the call of this function.
 *
*/
fill_solid_region(): void;

/**
 * Fills the given [param region] on the grid with the specified value for the weight scale.
 *
 * **Note:** Calling [method update] is not needed after the call of this function.
 *
*/
fill_weight_scale_region(): void;

/** Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path. */
get_id_path(): Vector2i[];

/**
 * Returns an array with the points that are in the path found by [AStarGrid2D] between the given points. The array is ordered from the starting point to the ending point of the path.
 *
 * **Note:** This method is not thread-safe. If called from a [Thread], it will return an empty [PackedVector3Array] and will print an error message.
 *
*/
get_point_path(): PackedVector2Array;

/** Returns the position of the point associated with the given [param id]. */
get_point_position(): Vector2;

/** Returns the weight scale of the point associated with the given [param id]. */
get_point_weight_scale(): float;

/** Indicates that the grid parameters were changed and [method update] needs to be called. */
is_dirty(): boolean;

/** Returns [code]true[/code] if the [param x] and [param y] is a valid grid coordinate (id), i.e. if it is inside [member region]. Equivalent to [code]region.has_point(Vector2i(x, y))[/code]. */
is_in_bounds(): boolean;

/** Returns [code]true[/code] if the [param id] vector is a valid grid coordinate, i.e. if it is inside [member region]. Equivalent to [code]region.has_point(id)[/code]. */
is_in_boundsv(): boolean;

/** Returns [code]true[/code] if a point is disabled for pathfinding. By default, all points are enabled. */
is_point_solid(): boolean;

/**
 * Disables or enables the specified point for pathfinding. Useful for making an obstacle. By default, all points are enabled.
 *
 * **Note:** Calling [method update] is not needed after the call of this function.
 *
*/
set_point_solid(): void;

/**
 * Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point.
 *
 * **Note:** Calling [method update] is not needed after the call of this function.
 *
*/
set_point_weight_scale(): void;

/**
 * Updates the internal state of the grid according to the parameters to prepare it to search the path. Needs to be called if parameters like [member region], [member cell_size] or [member offset] are changed. [method is_dirty] will return `true` if this is the case and this needs to be called.
 *
 * **Note:** All point data (solidity and weight scale) will be cleared.
 *
*/
update(): void;

  connect<T extends SignalsOf<AStarGrid2D>>(signal: T, method: SignalFunction<AStarGrid2D[T]>): number;



/**
 * The [url=https://en.wikipedia.org/wiki/Euclidean_distance]Euclidean heuristic[/url] to be used for the pathfinding using the following formula:
 *
 * @example 
 * 
 * dx = abs(to_id.x - from_id.x)
 * dy = abs(to_id.y - from_id.y)
 * result = sqrt(dx * dx + dy * dy)
 * @summary 
 * 
 *
 * **Note:** This is also the internal heuristic used in [AStar3D] and [AStar2D] by default (with the inclusion of possible z-axis coordinate).
 *
*/
static HEURISTIC_EUCLIDEAN: any;

/**
 * The [url=https://en.wikipedia.org/wiki/Taxicab_geometry]Manhattan heuristic[/url] to be used for the pathfinding using the following formula:
 *
 * @example 
 * 
 * dx = abs(to_id.x - from_id.x)
 * dy = abs(to_id.y - from_id.y)
 * result = dx + dy
 * @summary 
 * 
 *
 * **Note:** This heuristic is intended to be used with 4-side orthogonal movements, provided by setting the [member diagonal_mode] to [constant DIAGONAL_MODE_NEVER].
 *
*/
static HEURISTIC_MANHATTAN: any;

/**
 * The Octile heuristic to be used for the pathfinding using the following formula:
 *
 * @example 
 * 
 * dx = abs(to_id.x - from_id.x)
 * dy = abs(to_id.y - from_id.y)
 * f = sqrt(2) - 1
 * result = (dx < dy) ? f * dx + dy : f * dy + dx;
 * @summary 
 * 
 *
*/
static HEURISTIC_OCTILE: any;

/**
 * The [url=https://en.wikipedia.org/wiki/Chebyshev_distance]Chebyshev heuristic[/url] to be used for the pathfinding using the following formula:
 *
 * @example 
 * 
 * dx = abs(to_id.x - from_id.x)
 * dy = abs(to_id.y - from_id.y)
 * result = max(dx, dy)
 * @summary 
 * 
 *
*/
static HEURISTIC_CHEBYSHEV: any;

/**
 * Represents the size of the [enum Heuristic] enum.
 *
*/
static HEURISTIC_MAX: any;

/**
 * The pathfinding algorithm will ignore solid neighbors around the target cell and allow passing using diagonals.
 *
*/
static DIAGONAL_MODE_ALWAYS: any;

/**
 * The pathfinding algorithm will ignore all diagonals and the way will be always orthogonal.
 *
*/
static DIAGONAL_MODE_NEVER: any;

/**
 * The pathfinding algorithm will avoid using diagonals if at least two obstacles have been placed around the neighboring cells of the specific path segment.
 *
*/
static DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE: any;

/**
 * The pathfinding algorithm will avoid using diagonals if any obstacle has been placed around the neighboring cells of the specific path segment.
 *
*/
static DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES: any;

/**
 * Represents the size of the [enum DiagonalMode] enum.
 *
*/
static DIAGONAL_MODE_MAX: any;



}

