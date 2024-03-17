
/**
 * [ArrayOccluder3D] stores an arbitrary 3D polygon shape that can be used by the engine's occlusion culling system. This is analogous to [ArrayMesh], but for occluders.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
declare class ArrayOccluder3D extends Occluder3D  {

  
/**
 * [ArrayOccluder3D] stores an arbitrary 3D polygon shape that can be used by the engine's occlusion culling system. This is analogous to [ArrayMesh], but for occluders.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
  new(): ArrayOccluder3D; 
  static "new"(): ArrayOccluder3D 


/**
 * The occluder's index position. Indices determine which points from the [member vertices] array should be drawn, and in which order.
 *
 * **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using [method set_arrays] instead to avoid updating the occluder twice when it's created.
 *
*/
indices: PackedInt32Array;

/**
 * The occluder's vertex positions in local 3D coordinates.
 *
 * **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using [method set_arrays] instead to avoid updating the occluder twice when it's created.
 *
*/
vertices: PackedVector3Array;

/** Sets [member indices] and [member vertices], while updating the final occluder only once after both values are set. */
set_arrays(): void;

  connect<T extends SignalsOf<ArrayOccluder3D>>(signal: T, method: SignalFunction<ArrayOccluder3D[T]>): number;






}

