
/**
 * This class allows for a RenderSceneBuffer implementation to be made in GDExtension.
 *
*/
declare class RenderSceneBuffersExtension extends RenderSceneBuffers  {

  
/**
 * This class allows for a RenderSceneBuffer implementation to be made in GDExtension.
 *
*/
  new(): RenderSceneBuffersExtension; 
  static "new"(): RenderSceneBuffersExtension 



/** Implement this in GDExtension to handle the (re)sizing of a viewport. */
protected _configure(): void;

/** Implement this in GDExtension to record a new FSR sharpness value. */
protected _set_fsr_sharpness(): void;

/** Implement this in GDExtension to change the texture mipmap bias. */
protected _set_texture_mipmap_bias(): void;

/** Implement this in GDExtension to react to the debanding flag changing. */
protected _set_use_debanding(): void;

  connect<T extends SignalsOf<RenderSceneBuffersExtension>>(signal: T, method: SignalFunction<RenderSceneBuffersExtension[T]>): number;






}

