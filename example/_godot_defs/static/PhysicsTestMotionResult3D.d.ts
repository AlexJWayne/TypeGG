
/**
 * Describes the motion and collision result from [method PhysicsServer3D.body_test_motion].
 *
*/
declare class PhysicsTestMotionResult3D extends RefCounted  {

  
/**
 * Describes the motion and collision result from [method PhysicsServer3D.body_test_motion].
 *
*/
  new(): PhysicsTestMotionResult3D; 
  static "new"(): PhysicsTestMotionResult3D 



/** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. */
get_collider(): Object;

/** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. See [method Object.get_instance_id]. */
get_collider_id(): int;

/** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default), if a collision occurred. */
get_collider_rid(): RID;

/** Returns the colliding body's shape index given a collision index (the deepest collision by default), if a collision occurred. See [CollisionObject3D]. */
get_collider_shape(): int;

/** Returns the colliding body's velocity given a collision index (the deepest collision by default), if a collision occurred. */
get_collider_velocity(): Vector3;

/** Returns the number of detected collisions. */
get_collision_count(): int;

/** Returns the length of overlap along the collision normal given a collision index (the deepest collision by default), if a collision occurred. */
get_collision_depth(): float;

/** Returns the moving object's colliding shape given a collision index (the deepest collision by default), if a collision occurred. */
get_collision_local_shape(): int;

/** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default), if a collision occurred. */
get_collision_normal(): Vector3;

/** Returns the point of collision in global coordinates given a collision index (the deepest collision by default), if a collision occurred. */
get_collision_point(): Vector3;

/** Returns the maximum fraction of the motion that can occur without a collision, between [code]0[/code] and [code]1[/code]. */
get_collision_safe_fraction(): float;

/** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between [code]0[/code] and [code]1[/code]. */
get_collision_unsafe_fraction(): float;

/** Returns the moving object's remaining movement vector. */
get_remainder(): Vector3;

/** Returns the moving object's travel before collision. */
get_travel(): Vector3;

  connect<T extends SignalsOf<PhysicsTestMotionResult3D>>(signal: T, method: SignalFunction<PhysicsTestMotionResult3D[T]>): number;






}

