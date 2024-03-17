
/**
 * By changing various properties of this object, such as the point position, you can configure the parameters for [method PhysicsDirectSpaceState2D.intersect_point].
 *
*/
declare class PhysicsPointQueryParameters2D extends RefCounted  {

  
/**
 * By changing various properties of this object, such as the point position, you can configure the parameters for [method PhysicsDirectSpaceState2D.intersect_point].
 *
*/
  new(): PhysicsPointQueryParameters2D; 
  static "new"(): PhysicsPointQueryParameters2D 


/**
 * If different from `0`, restricts the query to a specific canvas layer specified by its instance ID. See [method Object.get_instance_id].
 *
 * If `0`, restricts the query to the Viewport's default canvas layer.
 *
*/
canvas_instance_id: int;

/** If [code]true[/code], the query will take [Area2D]s into account. */
collide_with_areas: boolean;

/** If [code]true[/code], the query will take [PhysicsBody2D]s into account. */
collide_with_bodies: boolean;

/** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
exclude: RID[];

/** The position being queried for, in global coordinates. */
position: Vector2;



  connect<T extends SignalsOf<PhysicsPointQueryParameters2D>>(signal: T, method: SignalFunction<PhysicsPointQueryParameters2D[T]>): number;






}

