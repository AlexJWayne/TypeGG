
/**
 * Parent class for various CSG primitives. It contains code and functionality that is common between them. It cannot be used directly. Instead use one of the various classes that inherit from it.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
declare class CSGPrimitive3D extends CSGShape3D  {

  
/**
 * Parent class for various CSG primitives. It contains code and functionality that is common between them. It cannot be used directly. Instead use one of the various classes that inherit from it.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
  new(): CSGPrimitive3D; 
  static "new"(): CSGPrimitive3D 


/** If set, the order of the vertices in each triangle are reversed resulting in the backside of the mesh being drawn. */
flip_faces: boolean;



  connect<T extends SignalsOf<CSGPrimitive3D>>(signal: T, method: SignalFunction<CSGPrimitive3D[T]>): number;






}

