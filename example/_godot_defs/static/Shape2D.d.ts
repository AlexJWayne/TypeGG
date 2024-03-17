
/**
 * Abstract base class for all 2D shapes, intended for use in physics.
 *
 * **Performance:** Primitive shapes, especially [CircleShape2D], are fast to check collisions against. [ConvexPolygonShape2D] is slower, and [ConcavePolygonShape2D] is the slowest.
 *
*/
declare class Shape2D extends Resource  {

  
/**
 * Abstract base class for all 2D shapes, intended for use in physics.
 *
 * **Performance:** Primitive shapes, especially [CircleShape2D], are fast to check collisions against. [ConvexPolygonShape2D] is slower, and [ConcavePolygonShape2D] is the slowest.
 *
*/
  new(): Shape2D; 
  static "new"(): Shape2D 


/**
 * The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.
 *
 * When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_contact_bias] is used.
 *
*/
custom_solver_bias: float;

/**
 * Returns `true` if this shape is colliding with another.
 *
 * This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).
 *
*/
collide(): boolean;

/**
 * Returns a list of contact point pairs where this shape touches another.
 *
 * If there are no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].
 *
 * A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.
 *
 * This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).
 *
*/
collide_and_get_contacts(): PackedVector2Array;

/**
 * Returns whether this shape would collide with another, if a given movement was applied.
 *
 * This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).
 *
*/
collide_with_motion(): boolean;

/**
 * Returns a list of contact point pairs where this shape would touch another, if a given movement was applied.
 *
 * If there would be no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].
 *
 * A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.
 *
 * This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).
 *
*/
collide_with_motion_and_get_contacts(): PackedVector2Array;

/** Draws a solid shape onto a [CanvasItem] with the [RenderingServer] API filled with the specified [param color]. The exact drawing method is specific for each shape and cannot be configured. */
draw(): void;

/** Returns a [Rect2] representing the shapes boundary. */
get_rect(): Rect2;

  connect<T extends SignalsOf<Shape2D>>(signal: T, method: SignalFunction<Shape2D[T]>): number;






}

