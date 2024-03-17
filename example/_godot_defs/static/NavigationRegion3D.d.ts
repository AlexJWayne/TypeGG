
/**
 * A traversable 3D region based on a [NavigationMesh] that [NavigationAgent3D]s can use for pathfinding.
 *
 * Two regions can be connected to each other if they share a similar edge. You can set the minimum distance between two vertices required to connect two edges by using [method NavigationServer3D.map_set_edge_connection_margin].
 *
 * **Note:** Overlapping two regions' navigation meshes is not enough for connecting two regions. They must share a similar edge.
 *
 * The cost of entering this region from another region can be controlled with the [member enter_cost] value.
 *
 * **Note:** This value is not added to the path cost when the start position is already inside this region.
 *
 * The cost of traveling distances inside this region can be controlled with the [member travel_cost] multiplier.
 *
 * **Note:** This node caches changes to its properties, so if you make changes to the underlying region [RID] in [NavigationServer3D], they will not be reflected in this node's properties.
 *
*/
declare class NavigationRegion3D extends Node3D  {

  
/**
 * A traversable 3D region based on a [NavigationMesh] that [NavigationAgent3D]s can use for pathfinding.
 *
 * Two regions can be connected to each other if they share a similar edge. You can set the minimum distance between two vertices required to connect two edges by using [method NavigationServer3D.map_set_edge_connection_margin].
 *
 * **Note:** Overlapping two regions' navigation meshes is not enough for connecting two regions. They must share a similar edge.
 *
 * The cost of entering this region from another region can be controlled with the [member enter_cost] value.
 *
 * **Note:** This value is not added to the path cost when the start position is already inside this region.
 *
 * The cost of traveling distances inside this region can be controlled with the [member travel_cost] multiplier.
 *
 * **Note:** This node caches changes to its properties, so if you make changes to the underlying region [RID] in [NavigationServer3D], they will not be reflected in this node's properties.
 *
*/
  new(): NavigationRegion3D; 
  static "new"(): NavigationRegion3D 


/** Determines if the [NavigationRegion3D] is enabled or disabled. */
enabled: boolean;

/** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
enter_cost: float;

/** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer3D.map_get_path]. */
navigation_layers: int;

/** The [NavigationMesh] resource to use. */
navigation_mesh: NavigationMesh;

/** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
travel_cost: float;

/** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
use_edge_connections: boolean;

/** Bakes the [NavigationMesh]. If [param on_thread] is set to [code]true[/code] (default), the baking is done on a separate thread. Baking on separate thread is useful because navigation baking is not a cheap operation. When it is completed, it automatically sets the new [NavigationMesh]. Please note that baking on separate thread may be very slow if geometry is parsed from meshes as async access to each mesh involves heavy synchronization. Also, please note that baking on a separate thread is automatically disabled on operating systems that cannot use threads (such as Web with threads disabled). */
bake_navigation_mesh(): void;

/** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
get_navigation_layer_value(): boolean;

/** Returns the current navigation map [RID] used by this region. */
get_navigation_map(): RID;

/**
 * Returns the [RID] of this region on the [NavigationServer3D].
 *
 * **Deprecated.** Use [method get_rid] instead.
 *
*/
get_region_rid(): RID;

/** Returns the [RID] of this region on the [NavigationServer3D]. Combined with [method NavigationServer3D.map_get_closest_point_owner] can be used to identify the [NavigationRegion3D] closest to a point on the merged navigation map. */
get_rid(): RID;

/** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
set_navigation_layer_value(): void;

/** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World3D] default navigation map so this function is only required to override the default map. */
set_navigation_map(): void;

  connect<T extends SignalsOf<NavigationRegion3D>>(signal: T, method: SignalFunction<NavigationRegion3D[T]>): number;





/**
 * Notifies when the navigation mesh bake operation is completed.
 *
*/
$bake_finished: Signal<() => void>

/**
 * Notifies when the [NavigationMesh] has changed.
 *
*/
$navigation_mesh_changed: Signal<() => void>

}

