
/**
 * This node allows you to create a sphere for use with the CSG system.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
declare class CSGSphere3D extends CSGPrimitive3D  {

  
/**
 * This node allows you to create a sphere for use with the CSG system.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
  new(): CSGSphere3D; 
  static "new"(): CSGSphere3D 


/** The material used to render the sphere. */
material: Material;

/** Number of vertical slices for the sphere. */
radial_segments: int;

/** Radius of the sphere. */
radius: float;

/** Number of horizontal slices for the sphere. */
rings: int;

/** If [code]true[/code] the normals of the sphere are set to give a smooth effect making the sphere seem rounded. If [code]false[/code] the sphere will have a flat shaded look. */
smooth_faces: boolean;



  connect<T extends SignalsOf<CSGSphere3D>>(signal: T, method: SignalFunction<CSGSphere3D[T]>): number;






}

