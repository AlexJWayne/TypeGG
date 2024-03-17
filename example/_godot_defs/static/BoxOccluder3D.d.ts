
/**
 * [BoxOccluder3D] stores a cuboid shape that can be used by the engine's occlusion culling system.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
declare class BoxOccluder3D extends Occluder3D  {

  
/**
 * [BoxOccluder3D] stores a cuboid shape that can be used by the engine's occlusion culling system.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
  new(): BoxOccluder3D; 
  static "new"(): BoxOccluder3D 


/** The box's size in 3D units. */
size: Vector3;



  connect<T extends SignalsOf<BoxOccluder3D>>(signal: T, method: SignalFunction<BoxOccluder3D[T]>): number;






}

