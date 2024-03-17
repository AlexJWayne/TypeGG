
/**
 * This configuration object is created and populated by the render engine on a viewport change and used to (re)configure a [RenderSceneBuffers] object.
 *
*/
declare class RenderSceneBuffersConfiguration extends RefCounted  {

  
/**
 * This configuration object is created and populated by the render engine on a viewport change and used to (re)configure a [RenderSceneBuffers] object.
 *
*/
  new(): RenderSceneBuffersConfiguration; 
  static "new"(): RenderSceneBuffersConfiguration 


/** FSR Sharpness applicable if FSR upscaling is used. */
fsr_sharpness: float;

/** The size of the 3D render buffer used for rendering. */
internal_size: Vector2i;

/** The MSAA mode we're using for 3D rendering. */
msaa_3d: int;

/** The render target associated with these buffer. */
render_target: RID;

/** The requested scaling mode with which we upscale/downscale if [member internal_size] and [member target_size] are not equal. */
scaling_3d_mode: int;

/** The requested screen space AA applied in post processing. */
screen_space_aa: int;

/** The target (upscale) size if scaling is used. */
target_size: Vector2i;

/** Bias applied to mipmaps. */
texture_mipmap_bias: float;

/** The number of views we're rendering. */
view_count: int;



  connect<T extends SignalsOf<RenderSceneBuffersConfiguration>>(signal: T, method: SignalFunction<RenderSceneBuffersConfiguration[T]>): number;






}

