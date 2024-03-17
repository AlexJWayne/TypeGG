
/**
 * A traversable 2D region based on a [NavigationPolygon] that [NavigationAgent2D]s can use for pathfinding.
 *
 * Two regions can be connected to each other if they share a similar edge. You can set the minimum distance between two vertices required to connect two edges by using [method NavigationServer2D.map_set_edge_connection_margin].
 *
 * **Note:** Overlapping two regions' navigation polygons is not enough for connecting two regions. They must share a similar edge.
 *
 * The pathfinding cost of entering a region from another region can be controlled with the [member enter_cost] value.
 *
 * **Note:** This value is not added to the path cost when the start position is already inside this region.
 *
 * The pathfinding cost of traveling distances inside this region can be controlled with the [member travel_cost] multiplier.
 *
 * **Note:** This node caches changes to its properties, so if you make changes to the underlying region [RID] in [NavigationServer2D], they will not be reflected in this node's properties.
 *
*/
declare class NavigationRegion2D extends Node2D  {

  
/**
 * A traversable 2D region based on a [NavigationPolygon] that [NavigationAgent2D]s can use for pathfinding.
 *
 * Two regions can be connected to each other if they share a similar edge. You can set the minimum distance between two vertices required to connect two edges by using [method NavigationServer2D.map_set_edge_connection_margin].
 *
 * **Note:** Overlapping two regions' navigation polygons is not enough for connecting two regions. They must share a similar edge.
 *
 * The pathfinding cost of entering a region from another region can be controlled with the [member enter_cost] value.
 *
 * **Note:** This value is not added to the path cost when the start position is already inside this region.
 *
 * The pathfinding cost of traveling distances inside this region can be controlled with the [member travel_cost] multiplier.
 *
 * **Note:** This node caches changes to its properties, so if you make changes to the underlying region [RID] in [NavigationServer2D], they will not be reflected in this node's properties.
 *
*/
  new(): NavigationRegion2D; 
  static "new"(): NavigationRegion2D 


/** A bitfield determining all avoidance layers for the avoidance constrain. */
avoidance_layers: int;

/**
 * If `true` constraints avoidance agent's with an avoidance mask bit that matches with a bit of the [member avoidance_layers] to the navigation polygon. Due to each navigation polygon outline creating an obstacle and each polygon edge creating an avoidance line constrain keep the navigation polygon shape as simple as possible for performance.
 *
 * **Experimental:** This is an experimental feature and should not be used in production as agent's can get stuck on the navigation polygon corners and edges especially at high frame rate.
 *
*/
constrain_avoidance: boolean;

/** Determines if the [NavigationRegion2D] is enabled or disabled. */
enabled: boolean;

/** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
enter_cost: float;

/** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer2D.map_get_path]. */
navigation_layers: int;

/** The [NavigationPolygon] resource to use. */
navigation_polygon: NavigationPolygon;

/** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
travel_cost: float;

/** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
use_edge_connections: boolean;

/** Bakes the [NavigationPolygon]. If [param on_thread] is set to [code]true[/code] (default), the baking is done on a separate thread. */
bake_navigation_polygon(): void;

/** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
get_avoidance_layer_value(): boolean;

/** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
get_navigation_layer_value(): boolean;

/** Returns the current navigation map [RID] used by this region. */
get_navigation_map(): RID;

/**
 * Returns the [RID] of this region on the [NavigationServer2D].
 *
 * **Deprecated.** Use [method get_rid] instead.
 *
*/
get_region_rid(): RID;

/** Returns the [RID] of this region on the [NavigationServer2D]. Combined with [method NavigationServer2D.map_get_closest_point_owner] can be used to identify the [NavigationRegion2D] closest to a point on the merged navigation map. */
get_rid(): RID;

/** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
set_avoidance_layer_value(): void;

/** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
set_navigation_layer_value(): void;

/** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World2D] default navigation map so this function is only required to override the default map. */
set_navigation_map(): void;

  connect<T extends SignalsOf<NavigationRegion2D>>(signal: T, method: SignalFunction<NavigationRegion2D[T]>): number;





/**
 * Emitted when a navigation polygon bake operation is completed.
 *
*/
$bake_finished: Signal<() => void>

/**
 * Emitted when the used navigation polygon is replaced or changes to the internals of the current navigation polygon are committed.
 *
*/
$navigation_polygon_changed: Signal<() => void>

}

