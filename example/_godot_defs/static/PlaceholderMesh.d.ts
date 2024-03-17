
/**
 * This class is used when loading a project that uses a [Mesh] subclass in 2 conditions:
 *
 * - When running the project exported in dedicated server mode, only the texture's dimensions are kept (as they may be relied upon for gameplay purposes or positioning of other elements). This allows reducing the exported PCK's size significantly.
 *
 * - When this subclass is missing due to using a different engine version or build (e.g. modules disabled).
 *
*/
declare class PlaceholderMesh extends Mesh  {

  
/**
 * This class is used when loading a project that uses a [Mesh] subclass in 2 conditions:
 *
 * - When running the project exported in dedicated server mode, only the texture's dimensions are kept (as they may be relied upon for gameplay purposes or positioning of other elements). This allows reducing the exported PCK's size significantly.
 *
 * - When this subclass is missing due to using a different engine version or build (e.g. modules disabled).
 *
*/
  new(): PlaceholderMesh; 
  static "new"(): PlaceholderMesh 


/** The smallest [AABB] enclosing this mesh in local space. */
aabb: AABB;



  connect<T extends SignalsOf<PlaceholderMesh>>(signal: T, method: SignalFunction<PlaceholderMesh[T]>): number;






}

