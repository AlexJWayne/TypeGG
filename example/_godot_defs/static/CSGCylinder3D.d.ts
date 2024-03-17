
/**
 * This node allows you to create a cylinder (or cone) for use with the CSG system.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
declare class CSGCylinder3D extends CSGPrimitive3D  {

  
/**
 * This node allows you to create a cylinder (or cone) for use with the CSG system.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
  new(): CSGCylinder3D; 
  static "new"(): CSGCylinder3D 


/** If [code]true[/code] a cone is created, the [member radius] will only apply to one side. */
cone: boolean;

/** The height of the cylinder. */
height: float;

/** The material used to render the cylinder. */
material: Material;

/** The radius of the cylinder. */
radius: float;

/** The number of sides of the cylinder, the higher this number the more detail there will be in the cylinder. */
sides: int;

/** If [code]true[/code] the normals of the cylinder are set to give a smooth effect making the cylinder seem rounded. If [code]false[/code] the cylinder will have a flat shaded look. */
smooth_faces: boolean;



  connect<T extends SignalsOf<CSGCylinder3D>>(signal: T, method: SignalFunction<CSGCylinder3D[T]>): number;






}

