
/**
 * Class representing a square [PrimitiveMesh]. This flat mesh does not have a thickness. By default, this mesh is aligned on the X and Y axes; this rotation is more suited for use with billboarded materials. A [QuadMesh] is equivalent to a [PlaneMesh] except its default [member PlaneMesh.orientation] is [constant PlaneMesh.FACE_Z].
 *
*/
declare class QuadMesh extends PlaneMesh  {

  
/**
 * Class representing a square [PrimitiveMesh]. This flat mesh does not have a thickness. By default, this mesh is aligned on the X and Y axes; this rotation is more suited for use with billboarded materials. A [QuadMesh] is equivalent to a [PlaneMesh] except its default [member PlaneMesh.orientation] is [constant PlaneMesh.FACE_Z].
 *
*/
  new(): QuadMesh; 
  static "new"(): QuadMesh 






  connect<T extends SignalsOf<QuadMesh>>(signal: T, method: SignalFunction<QuadMesh[T]>): number;






}

