
/**
 * By changing various properties of this object, such as the ray position, you can configure the parameters for [method PhysicsDirectSpaceState2D.intersect_ray].
 *
*/
declare class PhysicsRayQueryParameters2D extends RefCounted  {

  
/**
 * By changing various properties of this object, such as the ray position, you can configure the parameters for [method PhysicsDirectSpaceState2D.intersect_ray].
 *
*/
  new(): PhysicsRayQueryParameters2D; 
  static "new"(): PhysicsRayQueryParameters2D 


/** If [code]true[/code], the query will take [Area2D]s into account. */
collide_with_areas: boolean;

/** If [code]true[/code], the query will take [PhysicsBody2D]s into account. */
collide_with_bodies: boolean;

/** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
exclude: RID[];

/** The starting point of the ray being queried for, in global coordinates. */
from: Vector2;

/** If [code]true[/code], the query will detect a hit when starting inside shapes. In this case the collision normal will be [code]Vector2(0, 0)[/code]. Does not affect concave polygon shapes. */
hit_from_inside: boolean;

/** The ending point of the ray being queried for, in global coordinates. */
to: Vector2;

/**
 * Returns a new, pre-configured [PhysicsRayQueryParameters2D] object. Use it to quickly create query parameters using the most common options.
 *
 * @example 
 * 
 * var query = PhysicsRayQueryParameters2D.create(global_position, global_position + Vector2(0, 100))
 * var collision = get_world_2d().direct_space_state.intersect_ray(query)
 * @summary 
 * 
 *
*/
create(): PhysicsRayQueryParameters2D;

  connect<T extends SignalsOf<PhysicsRayQueryParameters2D>>(signal: T, method: SignalFunction<PhysicsRayQueryParameters2D[T]>): number;






}

