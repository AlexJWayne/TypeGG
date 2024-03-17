
/**
 * A 2D agent used to pathfind to a position while avoiding static and dynamic obstacles. The calculation can be used by the parent node to dynamically move it along the path. Requires navigation data to work correctly.
 *
 * Dynamic obstacles are avoided using RVO collision avoidance. Avoidance is computed before physics, so the pathfinding information can be used safely in the physics step.
 *
 * **Note:** After setting the [member target_position] property, the [method get_next_path_position] method must be used once every physics frame to update the internal path logic of the navigation agent. The vector position it returns should be used as the next movement position for the agent's parent node.
 *
*/
declare class NavigationAgent2D extends Node  {

  
/**
 * A 2D agent used to pathfind to a position while avoiding static and dynamic obstacles. The calculation can be used by the parent node to dynamically move it along the path. Requires navigation data to work correctly.
 *
 * Dynamic obstacles are avoided using RVO collision avoidance. Avoidance is computed before physics, so the pathfinding information can be used safely in the physics step.
 *
 * **Note:** After setting the [member target_position] property, the [method get_next_path_position] method must be used once every physics frame to update the internal path logic of the navigation agent. The vector position it returns should be used as the next movement position for the agent's parent node.
 *
*/
  new(): NavigationAgent2D; 
  static "new"(): NavigationAgent2D 


/** If [code]true[/code] the agent is registered for an RVO avoidance callback on the [NavigationServer2D]. When [member velocity] is used and the processing is completed a [code]safe_velocity[/code] Vector2 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
avoidance_enabled: boolean;

/** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
avoidance_layers: int;

/** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
avoidance_mask: int;

/** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
avoidance_priority: float;

/** If [code]true[/code] shows debug visuals for this agent. */
debug_enabled: boolean;

/** If [member debug_use_custom] is [code]true[/code] uses this color for this agent instead of global color. */
debug_path_custom_color: Color;

/** If [member debug_use_custom] is [code]true[/code] uses this line width for rendering paths for this agent instead of global line width. */
debug_path_custom_line_width: float;

/** If [member debug_use_custom] is [code]true[/code] uses this rasterized point size for rendering path points for this agent instead of global point size. */
debug_path_custom_point_size: float;

/** If [code]true[/code] uses the defined [member debug_path_custom_color] for this agent instead of global color. */
debug_use_custom: boolean;

/** The maximum number of neighbors for the agent to consider. */
max_neighbors: int;

/** The maximum speed that an agent can move. */
max_speed: float;

/** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
navigation_layers: int;

/** The distance to search for other agents. */
neighbor_distance: float;

/** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the next point on each physics frame update. */
path_desired_distance: float;

/** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
path_max_distance: float;

/** Additional information to return with the navigation path. */
path_metadata_flags: int;

/** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
path_postprocessing: int;

/** The pathfinding algorithm used in the path query. */
pathfinding_algorithm: int;

/**
 * The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).
 *
 * Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.
 *
*/
radius: float;

/** The distance threshold before the final target point is considered to be reached. This allows agents to not have to hit the point of the final target exactly, but only to reach its general area. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot or undershoot the distance to the final target point on each physics frame update. */
target_desired_distance: float;

/** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
target_position: Vector2;

/** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
time_horizon_agents: float;

/** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
time_horizon_obstacles: float;

/** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
velocity: Vector2;

/** Returns the distance to the target position, using the agent's global position. The user must set [member target_position] in order for this to be accurate. */
distance_to_target(): float;

/** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
get_avoidance_layer_value(): boolean;

/** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
get_avoidance_mask_value(): boolean;

/** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
get_current_navigation_path(): PackedVector2Array;

/** Returns which index the agent is currently on in the navigation path's [PackedVector2Array]. */
get_current_navigation_path_index(): int;

/** Returns the path query result for the path the agent is currently following. */
get_current_navigation_result(): NavigationPathQueryResult2D;

/** Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [signal path_changed] signal. */
get_final_position(): Vector2;

/** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
get_navigation_layer_value(): boolean;

/** Returns the [RID] of the navigation map for this NavigationAgent node. This function returns always the map set on the NavigationAgent node and not the map of the abstract agent on the NavigationServer. If the agent map is changed directly with the NavigationServer API the NavigationAgent node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationAgent and also update the agent on the NavigationServer. */
get_navigation_map(): RID;

/** Returns the next position in global coordinates that can be moved to, making sure that there are no static objects in the way. If the agent does not have a navigation path, it will return the position of the agent's parent. The use of this function once every physics frame is required to update the internal path logic of the NavigationAgent. */
get_next_path_position(): Vector2;

/** Returns the [RID] of this agent on the [NavigationServer2D]. */
get_rid(): RID;

/**
 * Returns `true` if the end of the currently loaded navigation path has been reached.
 *
 * **Note:** While true prefer to stop calling update functions like [method get_next_path_position]. This avoids jittering the standing agent due to calling repeated path updates.
 *
*/
is_navigation_finished(): boolean;

/** Returns [code]true[/code] if [method get_final_position] is within [member target_desired_distance] of the [member target_position]. */
is_target_reachable(): boolean;

/** Returns true if [member target_position] is reached. It may not always be possible to reach the target position. It should always be possible to reach the final position though. See [method get_final_position]. */
is_target_reached(): boolean;

/** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
set_avoidance_layer_value(): void;

/** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
set_avoidance_mask_value(): void;

/** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
set_navigation_layer_value(): void;

/** Sets the [RID] of the navigation map this NavigationAgent node should use and also updates the [code]agent[/code] on the NavigationServer. */
set_navigation_map(): void;

/** Replaces the internal velocity in the collision avoidance simulation with [param velocity]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
set_velocity_forced(): void;

  connect<T extends SignalsOf<NavigationAgent2D>>(signal: T, method: SignalFunction<NavigationAgent2D[T]>): number;





/**
 * Notifies when a navigation link has been reached.
 *
 * The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:
 *
 * - `position`: The start position of the link that was reached.
 *
 * - `type`: Always [constant NavigationPathQueryResult2D.PATH_SEGMENT_TYPE_LINK].
 *
 * - `rid`: The [RID] of the link.
 *
 * - `owner`: The object which manages the link (usually [NavigationLink2D]).
 *
 * - `link_entry_position`: If `owner` is available and the owner is a [NavigationLink2D], it will contain the global position of the link's point the agent is entering.
 *
 * - `link_exit_position`: If `owner` is available and the owner is a [NavigationLink2D], it will contain the global position of the link's point which the agent is exiting.
 *
*/
$link_reached: Signal<() => void>

/**
 * Emitted once per loaded path when the agent internal navigation path index reaches the last index of the loaded path array. The agent internal navigation path index can be received with [method get_current_navigation_path_index].
 *
*/
$navigation_finished: Signal<() => void>

/**
 * Emitted when the agent had to update the loaded path:
 *
 * - because path was previously empty.
 *
 * - because navigation map has changed.
 *
 * - because agent pushed further away from the current path segment than the [member path_max_distance].
 *
*/
$path_changed: Signal<() => void>

/**
 * Emitted once per loaded path when the agent's global position is the first time within [member target_desired_distance] to the [member target_position].
 *
*/
$target_reached: Signal<() => void>

/**
 * Notifies when the collision avoidance velocity is calculated. Emitted when [member velocity] is set. Only emitted when [member avoidance_enabled] is true.
 *
*/
$velocity_computed: Signal<() => void>

/**
 * Notifies when a waypoint along the path has been reached.
 *
 * The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:
 *
 * - `position`: The position of the waypoint that was reached.
 *
 * - `type`: The type of navigation primitive (region or link) that contains this waypoint.
 *
 * - `rid`: The [RID] of the containing navigation primitive (region or link).
 *
 * - `owner`: The object which manages the containing navigation primitive (region or link).
 *
*/
$waypoint_reached: Signal<() => void>

}

