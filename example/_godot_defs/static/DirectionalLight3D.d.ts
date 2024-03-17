
/**
 * A directional light is a type of [Light3D] node that models an infinite number of parallel rays covering the entire scene. It is used for lights with strong intensity that are located far away from the scene to model sunlight or moonlight. The worldspace location of the DirectionalLight3D transform (origin) is ignored. Only the basis is used to determine light direction.
 *
*/
declare class DirectionalLight3D extends Light3D  {

  
/**
 * A directional light is a type of [Light3D] node that models an infinite number of parallel rays covering the entire scene. It is used for lights with strong intensity that are located far away from the scene to model sunlight or moonlight. The worldspace location of the DirectionalLight3D transform (origin) is ignored. Only the basis is used to determine light direction.
 *
*/
  new(): DirectionalLight3D; 
  static "new"(): DirectionalLight3D 


/** If [code]true[/code], shadow detail is sacrificed in exchange for smoother transitions between splits. Enabling shadow blend splitting also has a moderate performance cost. This is ignored when [member directional_shadow_mode] is [constant SHADOW_ORTHOGONAL]. */
directional_shadow_blend_splits: boolean;

/** Proportion of [member directional_shadow_max_distance] at which point the shadow starts to fade. At [member directional_shadow_max_distance], the shadow will disappear. The default value is a balance between smooth fading and distant shadow visibility. If the camera moves fast and the [member directional_shadow_max_distance] is low, consider lowering [member directional_shadow_fade_start] below [code]0.8[/code] to make shadow transitions less noticeable. On the other hand, if you tuned [member directional_shadow_max_distance] to cover the entire scene, you can set [member directional_shadow_fade_start] to [code]1.0[/code] to prevent the shadow from fading in the distance (it will suddenly cut off instead). */
directional_shadow_fade_start: float;

/** The maximum distance for shadow splits. Increasing this value will make directional shadows visible from further away, at the cost of lower overall shadow detail and performance (since more objects need to be included in the directional shadow rendering). */
directional_shadow_max_distance: float;

/** The light's shadow rendering algorithm. See [enum ShadowMode]. */
directional_shadow_mode: int;

/** Sets the size of the directional shadow pancake. The pancake offsets the start of the shadow's camera frustum to provide a higher effective depth resolution for the shadow. However, a high pancake size can cause artifacts in the shadows of large objects that are close to the edge of the frustum. Reducing the pancake size can help. Setting the size to [code]0[/code] turns off the pancaking effect. */
directional_shadow_pancake_size: float;

/** The distance from camera to shadow split 1. Relative to [member directional_shadow_max_distance]. Only used when [member directional_shadow_mode] is [constant SHADOW_PARALLEL_2_SPLITS] or [constant SHADOW_PARALLEL_4_SPLITS]. */
directional_shadow_split_1: float;

/** The distance from shadow split 1 to split 2. Relative to [member directional_shadow_max_distance]. Only used when [member directional_shadow_mode] is [constant SHADOW_PARALLEL_4_SPLITS]. */
directional_shadow_split_2: float;

/** The distance from shadow split 2 to split 3. Relative to [member directional_shadow_max_distance]. Only used when [member directional_shadow_mode] is [constant SHADOW_PARALLEL_4_SPLITS]. */
directional_shadow_split_3: float;

/** Set whether this [DirectionalLight3D] is visible in the sky, in the scene, or both in the sky and in the scene. See [enum SkyMode] for options. */
sky_mode: int;



  connect<T extends SignalsOf<DirectionalLight3D>>(signal: T, method: SignalFunction<DirectionalLight3D[T]>): number;



/**
 * Renders the entire scene's shadow map from an orthogonal point of view. This is the fastest directional shadow mode. May result in blurrier shadows on close objects.
 *
*/
static SHADOW_ORTHOGONAL: any;

/**
 * Splits the view frustum in 2 areas, each with its own shadow map. This shadow mode is a compromise between [constant SHADOW_ORTHOGONAL] and [constant SHADOW_PARALLEL_4_SPLITS] in terms of performance.
 *
*/
static SHADOW_PARALLEL_2_SPLITS: any;

/**
 * Splits the view frustum in 4 areas, each with its own shadow map. This is the slowest directional shadow mode.
 *
*/
static SHADOW_PARALLEL_4_SPLITS: any;

/**
 * Makes the light visible in both scene lighting and sky rendering.
 *
*/
static SKY_MODE_LIGHT_AND_SKY: any;

/**
 * Makes the light visible in scene lighting only (including direct lighting and global illumination). When using this mode, the light will not be visible from sky shaders.
 *
*/
static SKY_MODE_LIGHT_ONLY: any;

/**
 * Makes the light visible to sky shaders only. When using this mode the light will not cast light into the scene (either through direct lighting or through global illumination), but can be accessed through sky shaders. This can be useful, for example, when you want to control sky effects without illuminating the scene (during a night cycle, for example).
 *
*/
static SKY_MODE_SKY_ONLY: any;



}

