
/**
 * Generic 3D position hint for editing. It's just like a plain [Node3D], but it displays as a cross in the 3D editor at all times.
 *
*/
declare class Marker3D extends Node3D  {

  
/**
 * Generic 3D position hint for editing. It's just like a plain [Node3D], but it displays as a cross in the 3D editor at all times.
 *
*/
  new(): Marker3D; 
  static "new"(): Marker3D 


/** Size of the gizmo cross that appears in the editor. */
gizmo_extents: float;



  connect<T extends SignalsOf<Marker3D>>(signal: T, method: SignalFunction<Marker3D[T]>): number;






}

