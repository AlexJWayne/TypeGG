
/**
 * This node allows you to create a torus for use with the CSG system.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
declare class CSGTorus3D extends CSGPrimitive3D  {

  
/**
 * This node allows you to create a torus for use with the CSG system.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
  new(): CSGTorus3D; 
  static "new"(): CSGTorus3D 


/** The inner radius of the torus. */
inner_radius: float;

/** The material used to render the torus. */
material: Material;

/** The outer radius of the torus. */
outer_radius: float;

/** The number of edges each ring of the torus is constructed of. */
ring_sides: int;

/** The number of slices the torus is constructed of. */
sides: int;

/** If [code]true[/code] the normals of the torus are set to give a smooth effect making the torus seem rounded. If [code]false[/code] the torus will have a flat shaded look. */
smooth_faces: boolean;



  connect<T extends SignalsOf<CSGTorus3D>>(signal: T, method: SignalFunction<CSGTorus3D[T]>): number;






}

