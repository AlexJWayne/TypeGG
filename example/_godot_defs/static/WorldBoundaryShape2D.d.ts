
/**
 * A 2D world boundary shape, intended for use in physics. [WorldBoundaryShape2D] works like an infinite straight line that forces all physics bodies to stay above it. The line's normal determines which direction is considered as "above" and in the editor, the smaller line over it represents this direction. It can for example be used for endless flat floors.
 *
*/
declare class WorldBoundaryShape2D extends Shape2D  {

  
/**
 * A 2D world boundary shape, intended for use in physics. [WorldBoundaryShape2D] works like an infinite straight line that forces all physics bodies to stay above it. The line's normal determines which direction is considered as "above" and in the editor, the smaller line over it represents this direction. It can for example be used for endless flat floors.
 *
*/
  new(): WorldBoundaryShape2D; 
  static "new"(): WorldBoundaryShape2D 


/**
 * The distance from the origin to the line, expressed in terms of [member normal] (according to its direction and magnitude). Actual absolute distance from the origin to the line can be calculated as `abs(distance) / normal.length()`.
 *
 * In the scalar equation of the line `ax + by = d`, this is `d`, while the `(a, b)` coordinates are represented by the [member normal] property.
 *
*/
distance: float;

/** The line's normal, typically a unit vector. Its direction indicates the non-colliding half-plane. Can be of any length but zero. Defaults to [constant Vector2.UP]. */
normal: Vector2;



  connect<T extends SignalsOf<WorldBoundaryShape2D>>(signal: T, method: SignalFunction<WorldBoundaryShape2D[T]>): number;






}

