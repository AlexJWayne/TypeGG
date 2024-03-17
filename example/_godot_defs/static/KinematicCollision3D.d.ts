
/**
 * Holds collision data from the movement of a [PhysicsBody3D], usually from [method PhysicsBody3D.move_and_collide]. When a [PhysicsBody3D] is moved, it stops if it detects a collision with another body. If a collision is detected, a [KinematicCollision3D] object is returned.
 *
 * The collision data includes the colliding object, the remaining motion, and the collision position. This data can be used to determine a custom response to the collision.
 *
*/
declare class KinematicCollision3D extends RefCounted  {

  
/**
 * Holds collision data from the movement of a [PhysicsBody3D], usually from [method PhysicsBody3D.move_and_collide]. When a [PhysicsBody3D] is moved, it stops if it detects a collision with another body. If a collision is detected, a [KinematicCollision3D] object is returned.
 *
 * The collision data includes the colliding object, the remaining motion, and the collision position. This data can be used to determine a custom response to the collision.
 *
*/
  new(): KinematicCollision3D; 
  static "new"(): KinematicCollision3D 



/** Returns the collision angle according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive. */
get_angle(): float;

/** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default). */
get_collider(): Object;

/** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default). See [method Object.get_instance_id]. */
get_collider_id(): int;

/** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default). */
get_collider_rid(): RID;

/** Returns the colliding body's shape given a collision index (the deepest collision by default). */
get_collider_shape(): Object;

/** Returns the colliding body's shape index given a collision index (the deepest collision by default). See [CollisionObject3D]. */
get_collider_shape_index(): int;

/** Returns the colliding body's velocity given a collision index (the deepest collision by default). */
get_collider_velocity(): Vector3;

/** Returns the number of detected collisions. */
get_collision_count(): int;

/** Returns the colliding body's length of overlap along the collision normal. */
get_depth(): float;

/** Returns the moving object's colliding shape given a collision index (the deepest collision by default). */
get_local_shape(): Object;

/** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default). */
get_normal(): Vector3;

/** Returns the point of collision in global coordinates given a collision index (the deepest collision by default). */
get_position(): Vector3;

/** Returns the moving object's remaining movement vector. */
get_remainder(): Vector3;

/** Returns the moving object's travel before collision. */
get_travel(): Vector3;

  connect<T extends SignalsOf<KinematicCollision3D>>(signal: T, method: SignalFunction<KinematicCollision3D[T]>): number;






}

