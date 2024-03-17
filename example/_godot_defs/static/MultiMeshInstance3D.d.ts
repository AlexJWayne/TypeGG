
/**
 * [MultiMeshInstance3D] is a specialized node to instance [GeometryInstance3D]s based on a [MultiMesh] resource.
 *
 * This is useful to optimize the rendering of a high number of instances of a given mesh (for example trees in a forest or grass strands).
 *
*/
declare class MultiMeshInstance3D extends GeometryInstance3D  {

  
/**
 * [MultiMeshInstance3D] is a specialized node to instance [GeometryInstance3D]s based on a [MultiMesh] resource.
 *
 * This is useful to optimize the rendering of a high number of instances of a given mesh (for example trees in a forest or grass strands).
 *
*/
  new(): MultiMeshInstance3D; 
  static "new"(): MultiMeshInstance3D 


/** The [MultiMesh] resource that will be used and shared among all instances of the [MultiMeshInstance3D]. */
multimesh: MultiMesh;



  connect<T extends SignalsOf<MultiMeshInstance3D>>(signal: T, method: SignalFunction<MultiMeshInstance3D[T]>): number;






}

