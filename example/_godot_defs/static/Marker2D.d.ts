
/**
 * Generic 2D position hint for editing. It's just like a plain [Node2D], but it displays as a cross in the 2D editor at all times. You can set the cross' visual size by using the gizmo in the 2D editor while the node is selected.
 *
*/
declare class Marker2D extends Node2D  {

  
/**
 * Generic 2D position hint for editing. It's just like a plain [Node2D], but it displays as a cross in the 2D editor at all times. You can set the cross' visual size by using the gizmo in the 2D editor while the node is selected.
 *
*/
  new(): Marker2D; 
  static "new"(): Marker2D 


/** Size of the gizmo cross that appears in the editor. */
gizmo_extents: float;



  connect<T extends SignalsOf<Marker2D>>(signal: T, method: SignalFunction<Marker2D[T]>): number;






}

