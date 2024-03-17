
/**
 * This object is used by [RenderingDevice].
 *
*/
declare class RDTextureView extends RefCounted  {

  
/**
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDTextureView; 
  static "new"(): RDTextureView 


/** Optional override for the data format to return sampled values in. The default value of [constant RenderingDevice.DATA_FORMAT_MAX] does not override the format. */
format_override: int;

/** The channel to sample when sampling the alpha channel. */
swizzle_a: int;

/** The channel to sample when sampling the blue color channel. */
swizzle_b: int;

/** The channel to sample when sampling the green color channel. */
swizzle_g: int;

/** The channel to sample when sampling the red color channel. */
swizzle_r: int;



  connect<T extends SignalsOf<RDTextureView>>(signal: T, method: SignalFunction<RDTextureView[T]>): number;






}

