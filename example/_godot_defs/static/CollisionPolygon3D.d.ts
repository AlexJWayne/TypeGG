
/**
 * A node that provides a thickened polygon shape (a prism) to a [CollisionObject3D] parent and allows to edit it. The polygon can be concave or convex. This can give a detection shape to an [Area3D] or turn [PhysicsBody3D] into a solid object.
 *
 * **Warning:** A non-uniformly scaled [CollisionShape3D] will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its shape resource instead.
 *
*/
declare class CollisionPolygon3D extends Node3D  {

  
/**
 * A node that provides a thickened polygon shape (a prism) to a [CollisionObject3D] parent and allows to edit it. The polygon can be concave or convex. This can give a detection shape to an [Area3D] or turn [PhysicsBody3D] into a solid object.
 *
 * **Warning:** A non-uniformly scaled [CollisionShape3D] will likely not behave as expected. Make sure to keep its scale the same on all axes and adjust its shape resource instead.
 *
*/
  new(): CollisionPolygon3D; 
  static "new"(): CollisionPolygon3D 


/** Length that the resulting collision extends in either direction perpendicular to its 2D polygon. */
depth: float;

/** If [code]true[/code], no collision will be produced. */
disabled: boolean;

/** The collision margin for the generated [Shape3D]. See [member Shape3D.margin] for more details. */
margin: float;

/**
 * Array of vertices which define the 2D polygon in the local XY plane.
 *
 * **Note:** The returned value is a copy of the original. Methods which mutate the size or properties of the return value will not impact the original polygon. To change properties of the polygon, assign it to a temporary variable and make changes before reassigning the class property.
 *
*/
polygon: PackedVector2Array;



  connect<T extends SignalsOf<CollisionPolygon3D>>(signal: T, method: SignalFunction<CollisionPolygon3D[T]>): number;






}

