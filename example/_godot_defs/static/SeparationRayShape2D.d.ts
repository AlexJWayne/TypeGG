
/**
 * A 2D ray shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D]. When a [SeparationRayShape2D] collides with an object, it tries to separate itself from it by moving its endpoint to the collision point. For example, a [SeparationRayShape2D] next to a character can allow it to instantly move up when touching stairs.
 *
*/
declare class SeparationRayShape2D extends Shape2D  {

  
/**
 * A 2D ray shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D]. When a [SeparationRayShape2D] collides with an object, it tries to separate itself from it by moving its endpoint to the collision point. For example, a [SeparationRayShape2D] next to a character can allow it to instantly move up when touching stairs.
 *
*/
  new(): SeparationRayShape2D; 
  static "new"(): SeparationRayShape2D 


/** The ray's length. */
length: float;

/**
 * If `false` (default), the shape always separates and returns a normal along its own direction.
 *
 * If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.
 *
*/
slide_on_slope: boolean;



  connect<T extends SignalsOf<SeparationRayShape2D>>(signal: T, method: SignalFunction<SeparationRayShape2D[T]>): number;






}

