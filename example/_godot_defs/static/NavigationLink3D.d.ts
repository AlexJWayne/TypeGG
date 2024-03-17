
/**
 * A link between two positions on [NavigationRegion3D]s that agents can be routed through. These positions can be on the same [NavigationRegion3D] or on two different ones. Links are useful to express navigation methods other than traveling along the surface of the navigation mesh, such as ziplines, teleporters, or gaps that can be jumped across.
 *
*/
declare class NavigationLink3D extends Node3D  {

  
/**
 * A link between two positions on [NavigationRegion3D]s that agents can be routed through. These positions can be on the same [NavigationRegion3D] or on two different ones. Links are useful to express navigation methods other than traveling along the surface of the navigation mesh, such as ziplines, teleporters, or gaps that can be jumped across.
 *
*/
  new(): NavigationLink3D; 
  static "new"(): NavigationLink3D 


/** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
bidirectional: boolean;

/** Whether this link is currently active. If [code]false[/code], [method NavigationServer3D.map_get_path] will ignore this link. */
enabled: boolean;

/**
 * Ending position of the link.
 *
 * This position will search out the nearest polygon in the navigation mesh to attach to.
 *
 * The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].
 *
*/
end_position: Vector3;

/** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
enter_cost: float;

/** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer3D.map_get_path]. */
navigation_layers: int;

/**
 * Starting position of the link.
 *
 * This position will search out the nearest polygon in the navigation mesh to attach to.
 *
 * The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].
 *
*/
start_position: Vector3;

/** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
travel_cost: float;

/** Returns the [member end_position] that is relative to the link as a global position. */
get_global_end_position(): Vector3;

/** Returns the [member start_position] that is relative to the link as a global position. */
get_global_start_position(): Vector3;

/** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
get_navigation_layer_value(): boolean;

/** Returns the [RID] of this link on the [NavigationServer3D]. */
get_rid(): RID;

/** Sets the [member end_position] that is relative to the link from a global [param position]. */
set_global_end_position(): void;

/** Sets the [member start_position] that is relative to the link from a global [param position]. */
set_global_start_position(): void;

/** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
set_navigation_layer_value(): void;

  connect<T extends SignalsOf<NavigationLink3D>>(signal: T, method: SignalFunction<NavigationLink3D[T]>): number;






}

