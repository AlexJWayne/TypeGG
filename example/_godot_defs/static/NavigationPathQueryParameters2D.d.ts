
/**
 * By changing various properties of this object, such as the start and target position, you can configure path queries to the [NavigationServer2D].
 *
*/
declare class NavigationPathQueryParameters2D extends RefCounted  {

  
/**
 * By changing various properties of this object, such as the start and target position, you can configure path queries to the [NavigationServer2D].
 *
*/
  new(): NavigationPathQueryParameters2D; 
  static "new"(): NavigationPathQueryParameters2D 


/** The navigation map [RID] used in the path query. */
map: RID;

/** Additional information to include with the navigation path. */
metadata_flags: int;

/** The navigation layers the query will use (as a bitmask). */
navigation_layers: int;

/** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
path_postprocessing: int;

/** The pathfinding algorithm used in the path query. */
pathfinding_algorithm: int;

/** The pathfinding start position in global coordinates. */
start_position: Vector2;

/** The pathfinding target position in global coordinates. */
target_position: Vector2;



  connect<T extends SignalsOf<NavigationPathQueryParameters2D>>(signal: T, method: SignalFunction<NavigationPathQueryParameters2D[T]>): number;



/**
 * The path query uses the default A* pathfinding algorithm.
 *
*/
static PATHFINDING_ALGORITHM_ASTAR: any;

/**
 * Applies a funnel algorithm to the raw path corridor found by the pathfinding algorithm. This will result in the shortest path possible inside the path corridor. This postprocessing very much depends on the navigation mesh polygon layout and the created corridor. Especially tile- or gridbased layouts can face artificial corners with diagonal movement due to a jagged path corridor imposed by the cell shapes.
 *
*/
static PATH_POSTPROCESSING_CORRIDORFUNNEL: any;

/**
 * Centers every path position in the middle of the traveled navigation mesh polygon edge. This creates better paths for tile- or gridbased layouts that restrict the movement to the cells center.
 *
*/
static PATH_POSTPROCESSING_EDGECENTERED: any;

/**
 * Don't include any additional metadata about the returned path.
 *
*/
static PATH_METADATA_INCLUDE_NONE: any;

/**
 * Include the type of navigation primitive (region or link) that each point of the path goes through.
 *
*/
static PATH_METADATA_INCLUDE_TYPES: any;

/**
 * Include the [RID]s of the regions and links that each point of the path goes through.
 *
*/
static PATH_METADATA_INCLUDE_RIDS: any;

/**
 * Include the `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through.
 *
*/
static PATH_METADATA_INCLUDE_OWNERS: any;

/**
 * Include all available metadata about the returned path.
 *
*/
static PATH_METADATA_INCLUDE_ALL: any;



}

