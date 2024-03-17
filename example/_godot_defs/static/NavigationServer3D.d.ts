
/**
 * NavigationServer3D is the server that handles navigation maps, regions and agents. It does not handle A* navigation from [AStar3D].
 *
 * Maps are made up of regions, which are made of navigation meshes. Together, they define the navigable areas in the 3D world.
 *
 * **Note:** Most [NavigationServer3D] changes take effect after the next physics frame and not immediately. This includes all changes made to maps, regions or agents by navigation-related nodes in the scene tree or made through scripts.
 *
 * For two regions to be connected to each other, they must share a similar edge. An edge is considered connected to another if both of its two vertices are at a distance less than `edge_connection_margin` to the respective other edge's vertex.
 *
 * You may assign navigation layers to regions with [method NavigationServer3D.region_set_navigation_layers], which then can be checked upon when requesting a path with [method NavigationServer3D.map_get_path]. This can be used to allow or deny certain areas for some objects.
 *
 * To use the collision avoidance system, you may use agents. You can set an agent's target velocity, then the servers will emit a callback with a modified velocity.
 *
 * **Note:** The collision avoidance system ignores regions. Using the modified velocity directly may move an agent outside of the traversable area. This is a limitation of the collision avoidance system, any more complex situation may require the use of the physics engine.
 *
 * This server keeps tracks of any call and executes them during the sync phase. This means that you can request any change to the map, using any thread, without worrying.
 *
*/
declare class NavigationServer3DClass extends Object  {

  
/**
 * NavigationServer3D is the server that handles navigation maps, regions and agents. It does not handle A* navigation from [AStar3D].
 *
 * Maps are made up of regions, which are made of navigation meshes. Together, they define the navigable areas in the 3D world.
 *
 * **Note:** Most [NavigationServer3D] changes take effect after the next physics frame and not immediately. This includes all changes made to maps, regions or agents by navigation-related nodes in the scene tree or made through scripts.
 *
 * For two regions to be connected to each other, they must share a similar edge. An edge is considered connected to another if both of its two vertices are at a distance less than `edge_connection_margin` to the respective other edge's vertex.
 *
 * You may assign navigation layers to regions with [method NavigationServer3D.region_set_navigation_layers], which then can be checked upon when requesting a path with [method NavigationServer3D.map_get_path]. This can be used to allow or deny certain areas for some objects.
 *
 * To use the collision avoidance system, you may use agents. You can set an agent's target velocity, then the servers will emit a callback with a modified velocity.
 *
 * **Note:** The collision avoidance system ignores regions. Using the modified velocity directly may move an agent outside of the traversable area. This is a limitation of the collision avoidance system, any more complex situation may require the use of the physics engine.
 *
 * This server keeps tracks of any call and executes them during the sync phase. This means that you can request any change to the map, using any thread, without worrying.
 *
*/
  new(): NavigationServer3DClass; 
  static "new"(): NavigationServer3DClass 



/** Creates the agent. */
agent_create(): RID;

/** Returns [code]true[/code] if the provided [param agent] has avoidance enabled. */
agent_get_avoidance_enabled(): boolean;

/** Returns the navigation map [RID] the requested [param agent] is currently assigned to. */
agent_get_map(): RID;

/** Returns [code]true[/code] if the specified [param agent] is paused. */
agent_get_paused(): boolean;

/** Returns [code]true[/code] if the provided [param agent] uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z). */
agent_get_use_3d_avoidance(): boolean;

/** Returns true if the map got changed the previous frame. */
agent_is_map_changed(): boolean;

/**
 * Sets the callback [Callable] that gets called after each avoidance processing step for the [param agent]. The calculated `safe_velocity` will be dispatched with a signal to the object just before the physics calculations.
 *
 * **Note:** Created callbacks are always processed independently of the SceneTree state as long as the agent is on a navigation map and not freed. To disable the dispatch of a callback from an agent use [method agent_set_avoidance_callback] again with an empty [Callable].
 *
*/
agent_set_avoidance_callback(): void;

/** If [param enabled] is [code]true[/code], the provided [param agent] calculates avoidance. */
agent_set_avoidance_enabled(): void;

/** Set the agent's [code]avoidance_layers[/code] bitmask. */
agent_set_avoidance_layers(): void;

/** Set the agent's [code]avoidance_mask[/code] bitmask. */
agent_set_avoidance_mask(): void;

/**
 * Set the agent's `avoidance_priority` with a [param priority] between 0.0 (lowest priority) to 1.0 (highest priority).
 *
 * The specified [param agent] does not adjust the velocity for other agents that would match the `avoidance_mask` but have a lower ` avoidance_priority`. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.
 *
*/
agent_set_avoidance_priority(): void;

/** Updates the provided [param agent] [param height]. */
agent_set_height(): void;

/** Puts the agent in the map. */
agent_set_map(): void;

/** Sets the maximum number of other agents the agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
agent_set_max_neighbors(): void;

/** Sets the maximum speed of the agent. Must be positive. */
agent_set_max_speed(): void;

/** Sets the maximum distance to other agents this agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
agent_set_neighbor_distance(): void;

/** If [param paused] is true the specified [param agent] will not be processed, e.g. calculate avoidance velocities or receive avoidance callbacks. */
agent_set_paused(): void;

/** Sets the position of the agent in world space. */
agent_set_position(): void;

/** Sets the radius of the agent. */
agent_set_radius(): void;

/** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to other agents. The larger this number, the sooner this agent will respond to the presence of other agents, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
agent_set_time_horizon_agents(): void;

/** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to static avoidance obstacles. The larger this number, the sooner this agent will respond to the presence of static avoidance obstacles, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
agent_set_time_horizon_obstacles(): void;

/**
 * Sets if the agent uses the 2D avoidance or the 3D avoidance while avoidance is enabled.
 *
 * If `true` the agent calculates avoidance velocities in 3D for the xyz-axis, e.g. for games that take place in air, unterwater or space. The 3D using agent only avoids other 3D avoidance using agent's. The 3D using agent only reacts to radius based avoidance obstacles. The 3D using agent ignores any vertices based obstacles. The 3D using agent only avoids other 3D using agent's.
 *
 * If `false` the agent calculates avoidance velocities in 2D along the xz-axis ignoring the y-axis. The 2D using agent only avoids other 2D avoidance using agent's. The 2D using agent reacts to radius avoidance obstacles. The 2D using agent reacts to vertices based avoidance obstacles. The 2D using agent only avoids other 2D using agent's. 2D using agents will ignore other 2D using agents or obstacles that are below their current position or above their current position including the agents height in 2D avoidance.
 *
*/
agent_set_use_3d_avoidance(): void;

/** Sets [param velocity] as the new wanted velocity for the specified [param agent]. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agent's and obstacles. When an agent is teleported to a new position use [method agent_set_velocity_forced] as well to reset the internal simulation velocity. */
agent_set_velocity(): void;

/** Replaces the internal velocity in the collision avoidance simulation with [param velocity] for the specified [param agent]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
agent_set_velocity_forced(): void;

/** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data]. After the process is finished the optional [param callback] will be called. */
bake_from_source_geometry_data(): void;

/** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data] as an async task running on a background thread. After the process is finished the optional [param callback] will be called. */
bake_from_source_geometry_data_async(): void;

/** Destroys the given RID. */
free_rid(): void;

/** Returns [code]true[/code] when the NavigationServer has debug enabled. */
get_debug_enabled(): boolean;

/** Returns all created navigation map [RID]s on the NavigationServer. This returns both 2D and 3D created navigation maps as there is technically no distinction between them. */
get_maps(): RID[];

/** Returns information about the current state of the NavigationServer. See [enum ProcessInfo] for a list of available states. */
get_process_info(): int;

/** Create a new link between two positions on a map. */
link_create(): RID;

/** Returns [code]true[/code] if the specified [param link] is enabled. */
link_get_enabled(): boolean;

/** Returns the ending position of this [param link]. */
link_get_end_position(): Vector3;

/** Returns the enter cost of this [param link]. */
link_get_enter_cost(): float;

/** Returns the navigation map [RID] the requested [param link] is currently assigned to. */
link_get_map(): RID;

/** Returns the navigation layers for this [param link]. */
link_get_navigation_layers(): int;

/** Returns the [code]ObjectID[/code] of the object which manages this link. */
link_get_owner_id(): int;

/** Returns the starting position of this [param link]. */
link_get_start_position(): Vector3;

/** Returns the travel cost of this [param link]. */
link_get_travel_cost(): float;

/** Returns whether this [param link] can be travelled in both directions. */
link_is_bidirectional(): boolean;

/** Sets whether this [param link] can be travelled in both directions. */
link_set_bidirectional(): void;

/** If [param enabled] is [code]true[/code], the specified [param link] will contribute to its current navigation map. */
link_set_enabled(): void;

/** Sets the exit position for the [param link]. */
link_set_end_position(): void;

/** Sets the [param enter_cost] for this [param link]. */
link_set_enter_cost(): void;

/** Sets the navigation map [RID] for the link. */
link_set_map(): void;

/** Set the links's navigation layers. This allows selecting links from a path request (when using [method NavigationServer3D.map_get_path]). */
link_set_navigation_layers(): void;

/** Set the [code]ObjectID[/code] of the object which manages this link. */
link_set_owner_id(): void;

/** Sets the entry position for this [param link]. */
link_set_start_position(): void;

/** Sets the [param travel_cost] for this [param link]. */
link_set_travel_cost(): void;

/** Create a new map. */
map_create(): RID;

/**
 * This function immediately forces synchronization of the specified navigation [param map] [RID]. By default navigation maps are only synchronized at the end of each physics frame. This function can be used to immediately (re)calculate all the navigation meshes and region connections of the navigation map. This makes it possible to query a navigation path for a changed map immediately and in the same frame (multiple times if needed).
 *
 * Due to technical restrictions the current NavigationServer command queue will be flushed. This means all already queued update commands for this physics frame will be executed, even those intended for other maps, regions and agents not part of the specified map. The expensive computation of the navigation meshes and region connections of a map will only be done for the specified map. Other maps will receive the normal synchronization at the end of the physics frame. Should the specified map receive changes after the forced update it will update again as well when the other maps receive their update.
 *
 * Avoidance processing and dispatch of the `safe_velocity` signals is untouched by this function and continues to happen for all maps and agents at the end of the physics frame.
 *
 * **Note:** With great power comes great responsibility. This function should only be used by users that really know what they are doing and have a good reason for it. Forcing an immediate update of a navigation map requires locking the NavigationServer and flushing the entire NavigationServer command queue. Not only can this severely impact the performance of a game but it can also introduce bugs if used inappropriately without much foresight.
 *
*/
map_force_update(): void;

/** Returns all navigation agents [RID]s that are currently assigned to the requested navigation [param map]. */
map_get_agents(): RID[];

/** Returns the map cell height used to rasterize the navigation mesh vertices on the Y axis. */
map_get_cell_height(): float;

/** Returns the map cell size used to rasterize the navigation mesh vertices on the XZ plane. */
map_get_cell_size(): float;

/** Returns the point closest to the provided [param to_point] on the navigation mesh surface. */
map_get_closest_point(): Vector3;

/** Returns the normal for the point returned by [method map_get_closest_point]. */
map_get_closest_point_normal(): Vector3;

/** Returns the owner region RID for the point returned by [method map_get_closest_point]. */
map_get_closest_point_owner(): RID;

/** Returns the closest point between the navigation surface and the segment. */
map_get_closest_point_to_segment(): Vector3;

/** Returns the edge connection margin of the map. This distance is the minimum vertex distance needed to connect two edges from different regions. */
map_get_edge_connection_margin(): float;

/** Returns the link connection radius of the map. This distance is the maximum range any link will search for navigation mesh polygons to connect to. */
map_get_link_connection_radius(): float;

/** Returns all navigation link [RID]s that are currently assigned to the requested navigation [param map]. */
map_get_links(): RID[];

/** Returns all navigation obstacle [RID]s that are currently assigned to the requested navigation [param map]. */
map_get_obstacles(): RID[];

/** Returns the navigation path to reach the destination from the origin. [param navigation_layers] is a bitmask of all region navigation layers that are allowed to be in the path. */
map_get_path(): PackedVector3Array;

/** Returns all navigation regions [RID]s that are currently assigned to the requested navigation [param map]. */
map_get_regions(): RID[];

/** Returns the map's up direction. */
map_get_up(): Vector3;

/** Returns true if the navigation [param map] allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
map_get_use_edge_connections(): boolean;

/** Returns true if the map is active. */
map_is_active(): boolean;

/** Sets the map active. */
map_set_active(): void;

/** Sets the map cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height of the used navigation meshes. */
map_set_cell_height(): void;

/** Sets the map cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size of the used navigation meshes. */
map_set_cell_size(): void;

/** Set the map edge connection margin used to weld the compatible region edges. */
map_set_edge_connection_margin(): void;

/** Set the map's link connection radius used to connect links to navigation polygons. */
map_set_link_connection_radius(): void;

/** Sets the map up direction. */
map_set_up(): void;

/** Set the navigation [param map] edge connection use. If [param enabled] is [code]true[/code], the navigation map allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
map_set_use_edge_connections(): void;

/** Creates a new obstacle. */
obstacle_create(): RID;

/** Returns [code]true[/code] if the provided [param obstacle] has avoidance enabled. */
obstacle_get_avoidance_enabled(): boolean;

/** Returns the navigation map [RID] the requested [param obstacle] is currently assigned to. */
obstacle_get_map(): RID;

/** Returns [code]true[/code] if the specified [param obstacle] is paused. */
obstacle_get_paused(): boolean;

/** Returns [code]true[/code] if the provided [param obstacle] uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z). */
obstacle_get_use_3d_avoidance(): boolean;

/** If [param enabled] is [code]true[/code], the provided [param obstacle] affects avoidance using agents. */
obstacle_set_avoidance_enabled(): void;

/** Set the obstacles's [code]avoidance_layers[/code] bitmask. */
obstacle_set_avoidance_layers(): void;

/** Sets the [param height] for the [param obstacle]. In 3D agents will ignore obstacles that are above or below them while using 2D avoidance. */
obstacle_set_height(): void;

/** Assigns the [param obstacle] to a navigation map. */
obstacle_set_map(): void;

/** If [param paused] is true the specified [param obstacle] will not be processed, e.g. affect avoidance velocities. */
obstacle_set_paused(): void;

/** Updates the [param position] in world space for the [param obstacle]. */
obstacle_set_position(): void;

/** Sets the radius of the dynamic obstacle. */
obstacle_set_radius(): void;

/** Sets if the [param obstacle] uses the 2D avoidance or the 3D avoidance while avoidance is enabled. */
obstacle_set_use_3d_avoidance(): void;

/** Sets [param velocity] of the dynamic [param obstacle]. Allows other agents to better predict the movement of the dynamic obstacle. Only works in combination with the radius of the obstacle. */
obstacle_set_velocity(): void;

/** Sets the outline vertices for the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. */
obstacle_set_vertices(): void;

/**
 * Parses the [SceneTree] for source geometry according to the properties of [param navigation_mesh]. Updates the provided [param source_geometry_data] resource with the resulting data. The resource can then be used to bake a navigation mesh with [method bake_from_source_geometry_data]. After the process is finished the optional [param callback] will be called.
 *
 * **Note:** This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.
 *
 * **Performance:** While convenient, reading data arrays from [Mesh] resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [RenderingServer] in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.
 *
*/
parse_source_geometry_data(): void;

/** Queries a path in a given navigation map. Start and target position and other parameters are defined through [NavigationPathQueryParameters3D]. Updates the provided [NavigationPathQueryResult3D] result object with the path among other results requested by the query. */
query_path(): void;

/**
 * Bakes the [param navigation_mesh] with bake source geometry collected starting from the [param root_node].
 *
 * **Deprecated.** This function is deprecated due to core threading changes. To upgrade existing code, first create a [NavigationMeshSourceGeometryData3D] resource. Use this resource with [method parse_source_geometry_data] to parse the SceneTree for nodes that should contribute to the navigation mesh baking. The SceneTree parsing needs to happen on the main thread. After the parsing is finished use the resource with [method bake_from_source_geometry_data] to bake a navigation mesh.
 *
*/
region_bake_navigation_mesh(): void;

/** Creates a new region. */
region_create(): RID;

/** Returns the ending point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
region_get_connection_pathway_end(): Vector3;

/** Returns the starting point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
region_get_connection_pathway_start(): Vector3;

/** Returns how many connections this [param region] has with other regions in the map. */
region_get_connections_count(): int;

/** Returns [code]true[/code] if the specified [param region] is enabled. */
region_get_enabled(): boolean;

/** Returns the enter cost of this [param region]. */
region_get_enter_cost(): float;

/** Returns the navigation map [RID] the requested [param region] is currently assigned to. */
region_get_map(): RID;

/** Returns the region's navigation layers. */
region_get_navigation_layers(): int;

/** Returns the [code]ObjectID[/code] of the object which manages this region. */
region_get_owner_id(): int;

/** Returns the travel cost of this [param region]. */
region_get_travel_cost(): float;

/** Returns true if the navigation [param region] is set to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
region_get_use_edge_connections(): boolean;

/**
 * Returns `true` if the provided [param point] in world space is currently owned by the provided navigation [param region]. Owned in this context means that one of the region's navigation mesh polygon faces has a possible position at the closest distance to this point compared to all other navigation meshes from other navigation regions that are also registered on the navigation map of the provided region.
 *
 * If multiple navigation meshes have positions at equal distance the navigation region whose polygons are processed first wins the ownership. Polygons are processed in the same order that navigation regions were registered on the NavigationServer.
 *
 * **Note:** If navigation meshes from different navigation regions overlap (which should be avoided in general) the result might not be what is expected.
 *
*/
region_owns_point(): boolean;

/** If [param enabled] is [code]true[/code], the specified [param region] will contribute to its current navigation map. */
region_set_enabled(): void;

/** Sets the [param enter_cost] for this [param region]. */
region_set_enter_cost(): void;

/** Sets the map for the region. */
region_set_map(): void;

/** Set the region's navigation layers. This allows selecting regions from a path request (when using [method NavigationServer3D.map_get_path]). */
region_set_navigation_layers(): void;

/** Sets the navigation mesh for the region. */
region_set_navigation_mesh(): void;

/** Set the [code]ObjectID[/code] of the object which manages this region. */
region_set_owner_id(): void;

/** Sets the global transformation for the region. */
region_set_transform(): void;

/** Sets the [param travel_cost] for this [param region]. */
region_set_travel_cost(): void;

/** If [param enabled] is [code]true[/code], the navigation [param region] will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
region_set_use_edge_connections(): void;

/** Control activation of this server. */
set_active(): void;

/** If [code]true[/code] enables debug mode on the NavigationServer. */
set_debug_enabled(): void;

  connect<T extends SignalsOf<NavigationServer3DClass>>(signal: T, method: SignalFunction<NavigationServer3DClass[T]>): number;



/**
 * Constant to get the number of active navigation maps.
 *
*/
static INFO_ACTIVE_MAPS: any;

/**
 * Constant to get the number of active navigation regions.
 *
*/
static INFO_REGION_COUNT: any;

/**
 * Constant to get the number of active navigation agents processing avoidance.
 *
*/
static INFO_AGENT_COUNT: any;

/**
 * Constant to get the number of active navigation links.
 *
*/
static INFO_LINK_COUNT: any;

/**
 * Constant to get the number of navigation mesh polygons.
 *
*/
static INFO_POLYGON_COUNT: any;

/**
 * Constant to get the number of navigation mesh polygon edges.
 *
*/
static INFO_EDGE_COUNT: any;

/**
 * Constant to get the number of navigation mesh polygon edges that were merged due to edge key overlap.
 *
*/
static INFO_EDGE_MERGE_COUNT: any;

/**
 * Constant to get the number of navigation mesh polygon edges that are considered connected by edge proximity.
 *
*/
static INFO_EDGE_CONNECTION_COUNT: any;

/**
 * Constant to get the number of navigation mesh polygon edges that could not be merged but may be still connected by edge proximity or with links.
 *
*/
static INFO_EDGE_FREE_COUNT: any;


/**
 * Emitted when avoidance debug settings are changed. Only available in debug builds.
 *
*/
$avoidance_debug_changed: Signal<() => void>

/**
 * Emitted when a navigation map is updated, when a region moves or is modified.
 *
*/
$map_changed: Signal<() => void>

/**
 * Emitted when navigation debug settings are changed. Only available in debug builds.
 *
*/
$navigation_debug_changed: Signal<() => void>

}

