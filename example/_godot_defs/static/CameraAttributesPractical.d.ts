
/**
 * Controls camera-specific attributes such as auto-exposure, depth of field, and exposure override.
 *
 * When used in a [WorldEnvironment] it provides default settings for exposure, auto-exposure, and depth of field that will be used by all cameras without their own [CameraAttributes], including the editor camera. When used in a [Camera3D] it will override any [CameraAttributes] set in the [WorldEnvironment]. When used in [VoxelGI] or [LightmapGI], only the exposure settings will be used.
 *
*/
declare class CameraAttributesPractical extends CameraAttributes  {

  
/**
 * Controls camera-specific attributes such as auto-exposure, depth of field, and exposure override.
 *
 * When used in a [WorldEnvironment] it provides default settings for exposure, auto-exposure, and depth of field that will be used by all cameras without their own [CameraAttributes], including the editor camera. When used in a [Camera3D] it will override any [CameraAttributes] set in the [WorldEnvironment]. When used in [VoxelGI] or [LightmapGI], only the exposure settings will be used.
 *
*/
  new(): CameraAttributesPractical; 
  static "new"(): CameraAttributesPractical 


/** The maximum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing below a certain brightness, resulting in a cut off point where the scene will remain bright. */
auto_exposure_max_sensitivity: float;

/** The minimum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing above a certain brightness, resulting in a cut off point where the scene will remain dark. */
auto_exposure_min_sensitivity: float;

/** Sets the maximum amount of blur. When using physically-based blur amounts, will instead act as a multiplier. High values lead to an increased amount of bluriness, but can be much more expensive to calculate. It is best to keep this as low as possible for a given art style. */
dof_blur_amount: float;

/** Objects further from the [Camera3D] by this amount will be blurred by the depth of field effect. Measured in meters. */
dof_blur_far_distance: float;

/**
 * Enables depth of field blur for objects further than [member dof_blur_far_distance]. Strength of blur is controlled by [member dof_blur_amount] and modulated by [member dof_blur_far_transition].
 *
 * **Note:** Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 *
*/
dof_blur_far_enabled: boolean;

/** When positive, distance over which (starting from [member dof_blur_far_distance]) blur effect will scale from 0 to [member dof_blur_amount]. When negative, uses physically-based scaling so depth of field effect will scale from 0 at [member dof_blur_far_distance] and will increase in a physically accurate way as objects get further from the [Camera3D]. */
dof_blur_far_transition: float;

/** Objects closer from the [Camera3D] by this amount will be blurred by the depth of field effect. Measured in meters. */
dof_blur_near_distance: float;

/**
 * Enables depth of field blur for objects closer than [member dof_blur_near_distance]. Strength of blur is controlled by [member dof_blur_amount] and modulated by [member dof_blur_near_transition].
 *
 * **Note:** Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 *
*/
dof_blur_near_enabled: boolean;

/** When positive, distance over which blur effect will scale from 0 to [member dof_blur_amount], ending at [member dof_blur_near_distance]. When negative, uses physically-based scaling so depth of field effect will scale from 0 at [member dof_blur_near_distance] and will increase in a physically accurate way as objects get closer to the [Camera3D]. */
dof_blur_near_transition: float;



  connect<T extends SignalsOf<CameraAttributesPractical>>(signal: T, method: SignalFunction<CameraAttributesPractical[T]>): number;






}

