
/**
 * A node that provides a [Shape2D] to a [CollisionObject2D] parent and allows to edit it. This can give a detection shape to an [Area2D] or turn a [PhysicsBody2D] into a solid object.
 *
*/
declare class CollisionShape2D extends Node2D  {

  
/**
 * A node that provides a [Shape2D] to a [CollisionObject2D] parent and allows to edit it. This can give a detection shape to an [Area2D] or turn a [PhysicsBody2D] into a solid object.
 *
*/
  new(): CollisionShape2D; 
  static "new"(): CollisionShape2D 


/**
 * The collision shape debug color.
 *
 * **Note:** The default value is [member ProjectSettings.debug/shapes/collision/shape_color]. The `Color(0, 0, 0, 1)` value documented here is a placeholder, and not the actual default debug color.
 *
*/
debug_color: Color;

/** A disabled collision shape has no effect in the world. This property should be changed with [method Object.set_deferred]. */
disabled: boolean;

/**
 * Sets whether this collision shape should only detect collision on one side (top or bottom).
 *
 * **Note:** This property has no effect if this [CollisionShape2D] is a child of an [Area2D] node.
 *
*/
one_way_collision: boolean;

/** The margin used for one-way collision (in pixels). Higher values will make the shape thicker, and work better for colliders that enter the shape at a high velocity. */
one_way_collision_margin: float;

/** The actual shape owned by this collision shape. */
shape: Shape2D;



  connect<T extends SignalsOf<CollisionShape2D>>(signal: T, method: SignalFunction<CollisionShape2D[T]>): number;






}

