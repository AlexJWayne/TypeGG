
/**
 * Abstract scene buffers object, created for each viewport for which 3D rendering is done. It manages any additional buffers used during rendering and will discard buffers when the viewport is resized.
 *
 * **Note:** this is an internal rendering server object only exposed for GDExtension plugins.
 *
*/
declare class RenderSceneBuffers extends RefCounted  {

  
/**
 * Abstract scene buffers object, created for each viewport for which 3D rendering is done. It manages any additional buffers used during rendering and will discard buffers when the viewport is resized.
 *
 * **Note:** this is an internal rendering server object only exposed for GDExtension plugins.
 *
*/
  new(): RenderSceneBuffers; 
  static "new"(): RenderSceneBuffers 



/** This method is called by the rendering server when the associated viewports configuration is changed. It will discard the old buffers and recreate the internal buffers used. */
configure(): void;

  connect<T extends SignalsOf<RenderSceneBuffers>>(signal: T, method: SignalFunction<RenderSceneBuffers[T]>): number;






}

