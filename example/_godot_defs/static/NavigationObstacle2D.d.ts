
/**
 * 2D Obstacle used in navigation to constrain avoidance controlled agents outside or inside an area. The obstacle needs a navigation map and outline vertices defined to work correctly.
 *
 * If the obstacle's vertices are winded in clockwise order, avoidance agents will be pushed in by the obstacle, otherwise, avoidance agents will be pushed out. Outlines must not cross or overlap.
 *
 * Obstacles are **not** a replacement for a (re)baked navigation mesh. Obstacles **don't** change the resulting path from the pathfinding, obstacles only affect the navigation avoidance agent movement by altering the suggested velocity of the avoidance agent.
 *
 * Obstacles using vertices can warp to a new position but should not moved every frame as each move requires a rebuild of the avoidance map.
 *
*/
declare class NavigationObstacle2D extends Node2D  {

  
/**
 * 2D Obstacle used in navigation to constrain avoidance controlled agents outside or inside an area. The obstacle needs a navigation map and outline vertices defined to work correctly.
 *
 * If the obstacle's vertices are winded in clockwise order, avoidance agents will be pushed in by the obstacle, otherwise, avoidance agents will be pushed out. Outlines must not cross or overlap.
 *
 * Obstacles are **not** a replacement for a (re)baked navigation mesh. Obstacles **don't** change the resulting path from the pathfinding, obstacles only affect the navigation avoidance agent movement by altering the suggested velocity of the avoidance agent.
 *
 * Obstacles using vertices can warp to a new position but should not moved every frame as each move requires a rebuild of the avoidance map.
 *
*/
  new(): NavigationObstacle2D; 
  static "new"(): NavigationObstacle2D 


/** If [code]true[/code] the obstacle affects avoidance using agents. */
avoidance_enabled: boolean;

/** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
avoidance_layers: int;

/** Sets the avoidance radius for the obstacle. */
radius: float;

/** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
velocity: Vector2;

/** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
vertices: PackedVector2Array;

/** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
get_avoidance_layer_value(): boolean;

/** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
get_navigation_map(): RID;

/** Returns the [RID] of this obstacle on the [NavigationServer2D]. */
get_rid(): RID;

/** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
set_avoidance_layer_value(): void;

/** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the [code]obstacle[/code] on the NavigationServer. */
set_navigation_map(): void;

  connect<T extends SignalsOf<NavigationObstacle2D>>(signal: T, method: SignalFunction<NavigationObstacle2D[T]>): number;






}

