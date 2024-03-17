
/**
 * By changing various properties of this object, such as the ray position, you can configure the parameters for [method PhysicsDirectSpaceState3D.intersect_ray].
 *
*/
declare class PhysicsRayQueryParameters3D extends RefCounted  {

  
/**
 * By changing various properties of this object, such as the ray position, you can configure the parameters for [method PhysicsDirectSpaceState3D.intersect_ray].
 *
*/
  new(): PhysicsRayQueryParameters3D; 
  static "new"(): PhysicsRayQueryParameters3D 


/** If [code]true[/code], the query will take [Area3D]s into account. */
collide_with_areas: boolean;

/** If [code]true[/code], the query will take [PhysicsBody3D]s into account. */
collide_with_bodies: boolean;

/** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
exclude: RID[];

/** The starting point of the ray being queried for, in global coordinates. */
from: Vector3;

/** If [code]true[/code], the query will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
hit_back_faces: boolean;

/** If [code]true[/code], the query will detect a hit when starting inside shapes. In this case the collision normal will be [code]Vector3(0, 0, 0)[/code]. Does not affect concave polygon shapes or heightmap shapes. */
hit_from_inside: boolean;

/** The ending point of the ray being queried for, in global coordinates. */
to: Vector3;

/**
 * Returns a new, pre-configured [PhysicsRayQueryParameters3D] object. Use it to quickly create query parameters using the most common options.
 *
 * @example 
 * 
 * var query = PhysicsRayQueryParameters3D.create(position, position + Vector3(0, -10, 0))
 * var collision = get_world_3d().direct_space_state.intersect_ray(query)
 * @summary 
 * 
 *
*/
create(): PhysicsRayQueryParameters3D;

  connect<T extends SignalsOf<PhysicsRayQueryParameters3D>>(signal: T, method: SignalFunction<PhysicsRayQueryParameters3D[T]>): number;






}

