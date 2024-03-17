
/**
 * [QuadOccluder3D] stores a flat plane shape that can be used by the engine's occlusion culling system. See also [PolygonOccluder3D] if you need to customize the quad's shape.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
declare class QuadOccluder3D extends Occluder3D  {

  
/**
 * [QuadOccluder3D] stores a flat plane shape that can be used by the engine's occlusion culling system. See also [PolygonOccluder3D] if you need to customize the quad's shape.
 *
 * See [OccluderInstance3D]'s documentation for instructions on setting up occlusion culling.
 *
*/
  new(): QuadOccluder3D; 
  static "new"(): QuadOccluder3D 


/** The quad's size in 3D units. */
size: Vector2;



  connect<T extends SignalsOf<QuadOccluder3D>>(signal: T, method: SignalFunction<QuadOccluder3D[T]>): number;






}

