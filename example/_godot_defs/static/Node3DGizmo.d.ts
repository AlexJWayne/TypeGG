
/**
 * This abstract class helps connect the [Node3D] scene with the editor-specific [EditorNode3DGizmo] class.
 *
 * [Node3DGizmo] by itself has no exposed API, refer to [method Node3D.add_gizmo] and pass it an [EditorNode3DGizmo] instance.
 *
*/
declare class Node3DGizmo extends RefCounted  {

  
/**
 * This abstract class helps connect the [Node3D] scene with the editor-specific [EditorNode3DGizmo] class.
 *
 * [Node3DGizmo] by itself has no exposed API, refer to [method Node3D.add_gizmo] and pass it an [EditorNode3DGizmo] instance.
 *
*/
  new(): Node3DGizmo; 
  static "new"(): Node3DGizmo 





  connect<T extends SignalsOf<Node3DGizmo>>(signal: T, method: SignalFunction<Node3DGizmo[T]>): number;






}

