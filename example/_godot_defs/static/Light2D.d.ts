
/**
 * Casts light in a 2D environment. A light is defined as a color, an energy value, a mode (see constants), and various other parameters (range and shadows-related).
 *
*/
declare class Light2D extends Node2D  {

  
/**
 * Casts light in a 2D environment. A light is defined as a color, an energy value, a mode (see constants), and various other parameters (range and shadows-related).
 *
*/
  new(): Light2D; 
  static "new"(): Light2D 


/** The Light2D's blend mode. See [enum BlendMode] constants for values. */
blend_mode: int;

/** The Light2D's [Color]. */
color: Color;

/** If [code]true[/code], Light2D will only appear when editing the scene. */
editor_only: boolean;

/** If [code]true[/code], Light2D will emit light. */
enabled: boolean;

/** The Light2D's energy value. The larger the value, the stronger the light. */
energy: float;

/**
 * The layer mask. Only objects with a matching [member CanvasItem.light_mask] will be affected by the Light2D. See also [member shadow_item_cull_mask], which affects which objects can cast shadows.
 *
 * **Note:** [member range_item_cull_mask] is ignored by [DirectionalLight2D], which will always light a 2D node regardless of the 2D node's [member CanvasItem.light_mask].
 *
*/
range_item_cull_mask: int;

/** Maximum layer value of objects that are affected by the Light2D. */
range_layer_max: int;

/** Minimum layer value of objects that are affected by the Light2D. */
range_layer_min: int;

/** Maximum [code]z[/code] value of objects that are affected by the Light2D. */
range_z_max: int;

/** Minimum [code]z[/code] value of objects that are affected by the Light2D. */
range_z_min: int;

/** [Color] of shadows cast by the Light2D. */
shadow_color: Color;

/** If [code]true[/code], the Light2D will cast shadows. */
shadow_enabled: boolean;

/** Shadow filter type. See [enum ShadowFilter] for possible values. */
shadow_filter: int;

/** Smoothing value for shadows. Higher values will result in softer shadows, at the cost of visible streaks that can appear in shadow rendering. [member shadow_filter_smooth] only has an effect if [member shadow_filter] is [constant SHADOW_FILTER_PCF5] or [constant SHADOW_FILTER_PCF13]. */
shadow_filter_smooth: float;

/** The shadow mask. Used with [LightOccluder2D] to cast shadows. Only occluders with a matching [member CanvasItem.light_mask] will cast shadows. See also [member range_item_cull_mask], which affects which objects can [i]receive[/i] the light. */
shadow_item_cull_mask: int;

/** Returns the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
get_height(): float;

/** Sets the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
set_height(): void;

  connect<T extends SignalsOf<Light2D>>(signal: T, method: SignalFunction<Light2D[T]>): number;



/**
 * No filter applies to the shadow map. This provides hard shadow edges and is the fastest to render. See [member shadow_filter].
 *
*/
static SHADOW_FILTER_NONE: any;

/**
 * Percentage closer filtering (5 samples) applies to the shadow map. This is slower compared to hard shadow rendering. See [member shadow_filter].
 *
*/
static SHADOW_FILTER_PCF5: any;

/**
 * Percentage closer filtering (13 samples) applies to the shadow map. This is the slowest shadow filtering mode, and should be used sparingly. See [member shadow_filter].
 *
*/
static SHADOW_FILTER_PCF13: any;

/**
 * Adds the value of pixels corresponding to the Light2D to the values of pixels under it. This is the common behavior of a light.
 *
*/
static BLEND_MODE_ADD: any;

/**
 * Subtracts the value of pixels corresponding to the Light2D to the values of pixels under it, resulting in inversed light effect.
 *
*/
static BLEND_MODE_SUB: any;

/**
 * Mix the value of pixels corresponding to the Light2D to the values of pixels under it by linear interpolation.
 *
*/
static BLEND_MODE_MIX: any;



}

