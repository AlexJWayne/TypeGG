
/**
 * Holds collision data from the movement of a [PhysicsBody2D], usually from [method PhysicsBody2D.move_and_collide]. When a [PhysicsBody2D] is moved, it stops if it detects a collision with another body. If a collision is detected, a [KinematicCollision2D] object is returned.
 *
 * The collision data includes the colliding object, the remaining motion, and the collision position. This data can be used to determine a custom response to the collision.
 *
*/
declare class KinematicCollision2D extends RefCounted  {

  
/**
 * Holds collision data from the movement of a [PhysicsBody2D], usually from [method PhysicsBody2D.move_and_collide]. When a [PhysicsBody2D] is moved, it stops if it detects a collision with another body. If a collision is detected, a [KinematicCollision2D] object is returned.
 *
 * The collision data includes the colliding object, the remaining motion, and the collision position. This data can be used to determine a custom response to the collision.
 *
*/
  new(): KinematicCollision2D; 
  static "new"(): KinematicCollision2D 



/** Returns the collision angle according to [param up_direction], which is [constant Vector2.UP] by default. This value is always positive. */
get_angle(): float;

/** Returns the colliding body's attached [Object]. */
get_collider(): Object;

/** Returns the unique instance ID of the colliding body's attached [Object]. See [method Object.get_instance_id]. */
get_collider_id(): int;

/** Returns the colliding body's [RID] used by the [PhysicsServer2D]. */
get_collider_rid(): RID;

/** Returns the colliding body's shape. */
get_collider_shape(): Object;

/** Returns the colliding body's shape index. See [CollisionObject2D]. */
get_collider_shape_index(): int;

/** Returns the colliding body's velocity. */
get_collider_velocity(): Vector2;

/** Returns the colliding body's length of overlap along the collision normal. */
get_depth(): float;

/** Returns the moving object's colliding shape. */
get_local_shape(): Object;

/** Returns the colliding body's shape's normal at the point of collision. */
get_normal(): Vector2;

/** Returns the point of collision in global coordinates. */
get_position(): Vector2;

/** Returns the moving object's remaining movement vector. */
get_remainder(): Vector2;

/** Returns the moving object's travel before collision. */
get_travel(): Vector2;

  connect<T extends SignalsOf<KinematicCollision2D>>(signal: T, method: SignalFunction<KinematicCollision2D[T]>): number;






}

