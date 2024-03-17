
/**
 * This object is used by [RenderingDevice].
 *
*/
declare class RDSamplerState extends RefCounted  {

  
/**
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDSamplerState; 
  static "new"(): RDSamplerState 


/**
 * Maximum anisotropy that can be used when sampling. Only effective if [member use_anisotropy] is `true`. Higher values result in a sharper sampler at oblique angles, at the cost of performance (due to memory bandwidth). This value may be limited by the graphics hardware in use. Most graphics hardware only supports values up to `16.0`.
 *
 * If [member anisotropy_max] is `1.0`, forcibly disables anisotropy even if [member use_anisotropy] is `true`.
 *
*/
anisotropy_max: float;

/** The border color that will be returned when sampling outside the sampler's bounds and the [member repeat_u], [member repeat_v] or [member repeat_w] modes have repeating disabled. */
border_color: int;

/** The compare operation to use. Only effective if [member enable_compare] is [code]true[/code]. */
compare_op: int;

/** If [code]true[/code], returned values will be based on the comparison operation defined in [member compare_op]. This is a hardware-based approach and is therefore faster than performing this manually in a shader. For example, compare operations are used for shadow map rendering by comparing depth values from a shadow sampler. */
enable_compare: boolean;

/** The mipmap LOD bias to use. Positive values will make the sampler blurrier at a given distance, while negative values will make the sampler sharper at a given distance (at the risk of looking grainy). Recommended values are between [code]-0.5[/code] and [code]0.0[/code]. Only effective if the sampler has mipmaps available. */
lod_bias: float;

/** The sampler's magnification filter. */
mag_filter: int;

/** The maximum mipmap LOD bias to display (lowest resolution). Only effective if the sampler has mipmaps available. */
max_lod: float;


/** The minimum mipmap LOD bias to display (highest resolution). Only effective if the sampler has mipmaps available. */
min_lod: float;

/** The filtering method to use for mipmaps. */
mip_filter: int;

/** The repeat mode to use along the U axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
repeat_u: int;

/** The repeat mode to use along the V axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
repeat_v: int;

/** The repeat mode to use along the W axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. Only effective for 3D samplers. */
repeat_w: int;


/** If [code]true[/code], perform anisotropic sampling. See [member anisotropy_max]. */
use_anisotropy: boolean;



  connect<T extends SignalsOf<RDSamplerState>>(signal: T, method: SignalFunction<RDSamplerState[T]>): number;






}

