
/**
 * By changing various properties of this object, such as the point position, you can configure the parameters for [method PhysicsDirectSpaceState3D.intersect_point].
 *
*/
declare class PhysicsPointQueryParameters3D extends RefCounted  {

  
/**
 * By changing various properties of this object, such as the point position, you can configure the parameters for [method PhysicsDirectSpaceState3D.intersect_point].
 *
*/
  new(): PhysicsPointQueryParameters3D; 
  static "new"(): PhysicsPointQueryParameters3D 


/** If [code]true[/code], the query will take [Area3D]s into account. */
collide_with_areas: boolean;

/** If [code]true[/code], the query will take [PhysicsBody3D]s into account. */
collide_with_bodies: boolean;

/** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
exclude: RID[];

/** The position being queried for, in global coordinates. */
position: Vector3;



  connect<T extends SignalsOf<PhysicsPointQueryParameters3D>>(signal: T, method: SignalFunction<PhysicsPointQueryParameters3D[T]>): number;






}

