
/**
 * Class representing a torus [PrimitiveMesh].
 *
*/
declare class TorusMesh extends PrimitiveMesh  {

  
/**
 * Class representing a torus [PrimitiveMesh].
 *
*/
  new(): TorusMesh; 
  static "new"(): TorusMesh 


/** The inner radius of the torus. */
inner_radius: float;

/** The outer radius of the torus. */
outer_radius: float;

/** The number of edges each ring of the torus is constructed of. */
ring_segments: int;

/** The number of slices the torus is constructed of. */
rings: int;



  connect<T extends SignalsOf<TorusMesh>>(signal: T, method: SignalFunction<TorusMesh[T]>): number;






}

