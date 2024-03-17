
/**
 * The PointMesh is made from a single point. Instead of relying on triangles, points are rendered as a single rectangle on the screen with a constant size. They are intended to be used with Particle systems, but can be used as a cheap way to render constant size billboarded sprites (for example in a point cloud).
 *
 * PointMeshes, must be used with a material that has a point size. Point size can be accessed in a shader with `POINT_SIZE`, or in a [BaseMaterial3D] by setting [member BaseMaterial3D.use_point_size] and the variable [member BaseMaterial3D.point_size].
 *
 * When using PointMeshes, properties that normally alter vertices will be ignored, including billboard mode, grow, and cull face.
 *
*/
declare class PointMesh extends PrimitiveMesh  {

  
/**
 * The PointMesh is made from a single point. Instead of relying on triangles, points are rendered as a single rectangle on the screen with a constant size. They are intended to be used with Particle systems, but can be used as a cheap way to render constant size billboarded sprites (for example in a point cloud).
 *
 * PointMeshes, must be used with a material that has a point size. Point size can be accessed in a shader with `POINT_SIZE`, or in a [BaseMaterial3D] by setting [member BaseMaterial3D.use_point_size] and the variable [member BaseMaterial3D.point_size].
 *
 * When using PointMeshes, properties that normally alter vertices will be ignored, including billboard mode, grow, and cull face.
 *
*/
  new(): PointMesh; 
  static "new"(): PointMesh 





  connect<T extends SignalsOf<PointMesh>>(signal: T, method: SignalFunction<PointMesh[T]>): number;






}

