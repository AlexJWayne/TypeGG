
/**
 * A 3D world boundary shape, intended for use in physics. [WorldBoundaryShape3D] works like an infinite plane that forces all physics bodies to stay above it. The [member plane]'s normal determines which direction is considered as "above" and in the editor, the line over the plane represents this direction. It can for example be used for endless flat floors.
 *
*/
declare class WorldBoundaryShape3D extends Shape3D  {

  
/**
 * A 3D world boundary shape, intended for use in physics. [WorldBoundaryShape3D] works like an infinite plane that forces all physics bodies to stay above it. The [member plane]'s normal determines which direction is considered as "above" and in the editor, the line over the plane represents this direction. It can for example be used for endless flat floors.
 *
*/
  new(): WorldBoundaryShape3D; 
  static "new"(): WorldBoundaryShape3D 


/** The [Plane] used by the [WorldBoundaryShape3D] for collision. */
plane: Plane;



  connect<T extends SignalsOf<WorldBoundaryShape3D>>(signal: T, method: SignalFunction<WorldBoundaryShape3D[T]>): number;






}

