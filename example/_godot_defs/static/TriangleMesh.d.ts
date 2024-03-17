
/**
 * Mesh type used internally for collision calculations.
 *
*/
declare class TriangleMesh extends RefCounted  {

  
/**
 * Mesh type used internally for collision calculations.
 *
*/
  new(): TriangleMesh; 
  static "new"(): TriangleMesh 





  connect<T extends SignalsOf<TriangleMesh>>(signal: T, method: SignalFunction<TriangleMesh[T]>): number;






}

