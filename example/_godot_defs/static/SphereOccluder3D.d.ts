
/**
 * [SphereOccluder3D] stores a sphere shape that can be used by the engine's occlusion culling system.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
declare class SphereOccluder3D extends Occluder3D  {

  
/**
 * [SphereOccluder3D] stores a sphere shape that can be used by the engine's occlusion culling system.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
  new(): SphereOccluder3D; 
  static "new"(): SphereOccluder3D 


/** The sphere's radius in 3D units. */
radius: float;



  connect<T extends SignalsOf<SphereOccluder3D>>(signal: T, method: SignalFunction<SphereOccluder3D[T]>): number;






}

