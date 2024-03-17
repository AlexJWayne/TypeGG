
/**
 * This CSG node allows you to use any mesh resource as a CSG shape, provided it is closed, does not self-intersect, does not contain internal faces and has no edges that connect to more than two faces. See also [CSGPolygon3D] for drawing 2D extruded polygons to be used as CSG nodes.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
declare class CSGMesh3D extends CSGPrimitive3D  {

  
/**
 * This CSG node allows you to use any mesh resource as a CSG shape, provided it is closed, does not self-intersect, does not contain internal faces and has no edges that connect to more than two faces. See also [CSGPolygon3D] for drawing 2D extruded polygons to be used as CSG nodes.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
  new(): CSGMesh3D; 
  static "new"(): CSGMesh3D 


/** The [Material] used in drawing the CSG shape. */
material: Material;

/**
 * The [Mesh] resource to use as a CSG shape.
 *
 * **Note:** When using an [ArrayMesh], all vertex attributes except [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL] and [constant Mesh.ARRAY_TEX_UV] are left unused. Only [constant Mesh.ARRAY_VERTEX] and [constant Mesh.ARRAY_TEX_UV] will be passed to the GPU.
 *
 * [constant Mesh.ARRAY_NORMAL] is only used to determine which faces require the use of flat shading. By default, CSGMesh will ignore the mesh's vertex normals, recalculate them for each vertex and use a smooth shader. If a flat shader is required for a face, ensure that all vertex normals of the face are approximately equal.
 *
*/
mesh: Mesh;



  connect<T extends SignalsOf<CSGMesh3D>>(signal: T, method: SignalFunction<CSGMesh3D[T]>): number;






}

