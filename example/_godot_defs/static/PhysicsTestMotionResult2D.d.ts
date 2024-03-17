
/**
 * Describes the motion and collision result from [method PhysicsServer2D.body_test_motion].
 *
*/
declare class PhysicsTestMotionResult2D extends RefCounted  {

  
/**
 * Describes the motion and collision result from [method PhysicsServer2D.body_test_motion].
 *
*/
  new(): PhysicsTestMotionResult2D; 
  static "new"(): PhysicsTestMotionResult2D 



/** Returns the colliding body's attached [Object], if a collision occurred. */
get_collider(): Object;

/** Returns the unique instance ID of the colliding body's attached [Object], if a collision occurred. See [method Object.get_instance_id]. */
get_collider_id(): int;

/** Returns the colliding body's [RID] used by the [PhysicsServer2D], if a collision occurred. */
get_collider_rid(): RID;

/** Returns the colliding body's shape index, if a collision occurred. See [CollisionObject2D]. */
get_collider_shape(): int;

/** Returns the colliding body's velocity, if a collision occurred. */
get_collider_velocity(): Vector2;

/** Returns the length of overlap along the collision normal, if a collision occurred. */
get_collision_depth(): float;

/** Returns the moving object's colliding shape, if a collision occurred. */
get_collision_local_shape(): int;

/** Returns the colliding body's shape's normal at the point of collision, if a collision occurred. */
get_collision_normal(): Vector2;

/** Returns the point of collision in global coordinates, if a collision occurred. */
get_collision_point(): Vector2;

/** Returns the maximum fraction of the motion that can occur without a collision, between [code]0[/code] and [code]1[/code]. */
get_collision_safe_fraction(): float;

/** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between [code]0[/code] and [code]1[/code]. */
get_collision_unsafe_fraction(): float;

/** Returns the moving object's remaining movement vector. */
get_remainder(): Vector2;

/** Returns the moving object's travel before collision. */
get_travel(): Vector2;

  connect<T extends SignalsOf<PhysicsTestMotionResult2D>>(signal: T, method: SignalFunction<PhysicsTestMotionResult2D[T]>): number;






}

