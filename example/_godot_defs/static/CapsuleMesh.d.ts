
/**
 * Class representing a capsule-shaped [PrimitiveMesh].
 *
*/
declare class CapsuleMesh extends PrimitiveMesh  {

  
/**
 * Class representing a capsule-shaped [PrimitiveMesh].
 *
*/
  new(): CapsuleMesh; 
  static "new"(): CapsuleMesh 


/** Total height of the capsule mesh (including the hemispherical ends). */
height: float;

/** Number of radial segments on the capsule mesh. */
radial_segments: int;

/** Radius of the capsule mesh. */
radius: float;

/** Number of rings along the height of the capsule. */
rings: int;



  connect<T extends SignalsOf<CapsuleMesh>>(signal: T, method: SignalFunction<CapsuleMesh[T]>): number;






}

