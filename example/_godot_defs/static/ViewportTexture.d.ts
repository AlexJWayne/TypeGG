
/**
 * Provides the content of a [Viewport] as a dynamic [Texture2D]. This can be used to mix controls, 2D game objects, and 3D game objects in the same scene.
 *
 * To create a [ViewportTexture] in code, use the [method Viewport.get_texture] method on the target viewport.
 *
 * **Note:** A [ViewportTexture] is always local to its scene (see [member Resource.resource_local_to_scene]). If the scene root is not ready, it may return incorrect data (see [signal Node.ready]).
 *
*/
declare class ViewportTexture extends Texture2D  {

  
/**
 * Provides the content of a [Viewport] as a dynamic [Texture2D]. This can be used to mix controls, 2D game objects, and 3D game objects in the same scene.
 *
 * To create a [ViewportTexture] in code, use the [method Viewport.get_texture] method on the target viewport.
 *
 * **Note:** A [ViewportTexture] is always local to its scene (see [member Resource.resource_local_to_scene]). If the scene root is not ready, it may return incorrect data (see [signal Node.ready]).
 *
*/
  new(): ViewportTexture; 
  static "new"(): ViewportTexture 


/**
 * The path to the [Viewport] node to display. This is relative to the scene root, not to the node that uses the texture.
 *
 * **Note:** In the editor, this path is automatically updated when the target viewport or one of its ancestors is renamed or moved. At runtime, the path may not be able to automatically update due to the inability to determine the scene root.
 *
*/
viewport_path: NodePathType;



  connect<T extends SignalsOf<ViewportTexture>>(signal: T, method: SignalFunction<ViewportTexture[T]>): number;






}

