
/**
*/
declare class PhysicsServer3DRenderingServerHandler extends Object  {

  
/**
*/
  new(): PhysicsServer3DRenderingServerHandler; 
  static "new"(): PhysicsServer3DRenderingServerHandler 



/** Called by the [PhysicsServer3D] to set the bounding box for the [SoftBody3D]. */
protected _set_aabb(): void;

/**
 * Called by the [PhysicsServer3D] to set the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id].
 *
 * **Note:** The [param normal] parameter used to be of type `const void*` prior to Godot 4.2.
 *
*/
protected _set_normal(): void;

/**
 * Called by the [PhysicsServer3D] to set the position for the [SoftBody3D] vertex at the index specified by [param vertex_id].
 *
 * **Note:** The [param vertex] parameter used to be of type `const void*` prior to Godot 4.2.
 *
*/
protected _set_vertex(): void;

/** Sets the bounding box for the [SoftBody3D]. */
set_aabb(): void;

/** Sets the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
set_normal(): void;

/** Sets the position for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
set_vertex(): void;

  connect<T extends SignalsOf<PhysicsServer3DRenderingServerHandler>>(signal: T, method: SignalFunction<PhysicsServer3DRenderingServerHandler[T]>): number;






}

