
/**
 * [Occluder3D] stores an occluder shape that can be used by the engine's occlusion culling system.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
declare class Occluder3D extends Resource  {

  
/**
 * [Occluder3D] stores an occluder shape that can be used by the engine's occlusion culling system.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
  new(): Occluder3D; 
  static "new"(): Occluder3D 



/** Returns the occluder shape's vertex indices. */
get_indices(): PackedInt32Array;

/** Returns the occluder shape's vertex positions. */
get_vertices(): PackedVector3Array;

  connect<T extends SignalsOf<Occluder3D>>(signal: T, method: SignalFunction<Occluder3D[T]>): number;






}

