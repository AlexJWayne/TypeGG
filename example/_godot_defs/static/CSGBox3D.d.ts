
/**
 * This node allows you to create a box for use with the CSG system.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
declare class CSGBox3D extends CSGPrimitive3D  {

  
/**
 * This node allows you to create a box for use with the CSG system.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
  new(): CSGBox3D; 
  static "new"(): CSGBox3D 


/** The material used to render the box. */
material: Material;

/** The box's width, height and depth. */
size: Vector3;



  connect<T extends SignalsOf<CSGBox3D>>(signal: T, method: SignalFunction<CSGBox3D[T]>): number;






}

