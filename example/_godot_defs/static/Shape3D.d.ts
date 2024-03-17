
/**
 * Abstract base class for all 3D shapes, intended for use in physics.
 *
 * **Performance:** Primitive shapes, especially [SphereShape3D], are fast to check collisions against. [ConvexPolygonShape3D] and [HeightMapShape3D] are slower, and [ConcavePolygonShape3D] is the slowest.
 *
*/
declare class Shape3D extends Resource  {

  
/**
 * Abstract base class for all 3D shapes, intended for use in physics.
 *
 * **Performance:** Primitive shapes, especially [SphereShape3D], are fast to check collisions against. [ConvexPolygonShape3D] and [HeightMapShape3D] are slower, and [ConcavePolygonShape3D] is the slowest.
 *
*/
  new(): Shape3D; 
  static "new"(): Shape3D 


/**
 * The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.
 *
 * When set to `0`, the default value from [member ProjectSettings.physics/3d/solver/default_contact_bias] is used.
 *
*/
custom_solver_bias: float;

/**
 * The collision margin for the shape. This is not used in Godot Physics.
 *
 * Collision margins allow collision detection to be more efficient by adding an extra shell around shapes. Collision algorithms are more expensive when objects overlap by more than their margin, so a higher value for margins is better for performance, at the cost of accuracy around edges as it makes them less sharp.
 *
*/
margin: float;

/** Returns the [ArrayMesh] used to draw the debug collision for this [Shape3D]. */
get_debug_mesh(): ArrayMesh;

  connect<T extends SignalsOf<Shape3D>>(signal: T, method: SignalFunction<Shape3D[T]>): number;






}

