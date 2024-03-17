
/**
 * Resource for environment nodes (like [WorldEnvironment]) that define multiple environment operations (such as background [Sky] or [Color], ambient light, fog, depth-of-field...). These parameters affect the final render of the scene. The order of these operations is:
 *
 * - Depth of Field Blur
 *
 * - Glow
 *
 * - Tonemap (Auto Exposure)
 *
 * - Adjustments
 *
*/
declare class Environment extends Resource  {

  
/**
 * Resource for environment nodes (like [WorldEnvironment]) that define multiple environment operations (such as background [Sky] or [Color], ambient light, fog, depth-of-field...). These parameters affect the final render of the scene. The order of these operations is:
 *
 * - Depth of Field Blur
 *
 * - Glow
 *
 * - Tonemap (Auto Exposure)
 *
 * - Adjustments
 *
*/
  new(): Environment; 
  static "new"(): Environment 


/** The global brightness value of the rendered scene. Effective only if [member adjustment_enabled] is [code]true[/code]. */
adjustment_brightness: float;

/** The [Texture2D] or [Texture3D] lookup table (LUT) to use for the built-in post-process color grading. Can use a [GradientTexture1D] for a 1-dimensional LUT, or a [Texture3D] for a more complex LUT. Effective only if [member adjustment_enabled] is [code]true[/code]. */
adjustment_color_correction: Texture;

/** The global contrast value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is [code]true[/code]. */
adjustment_contrast: float;

/**
 * If `true`, enables the `adjustment_*` properties provided by this resource. If `false`, modifications to the `adjustment_*` properties will have no effect on the rendered scene.
 *
 * **Note:** Adjustments are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 *
*/
adjustment_enabled: boolean;

/** The global color saturation value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is [code]true[/code]. */
adjustment_saturation: float;

/** The ambient light's [Color]. Only effective if [member ambient_light_sky_contribution] is lower than [code]1.0[/code] (exclusive). */
ambient_light_color: Color;

/** The ambient light's energy. The higher the value, the stronger the light. Only effective if [member ambient_light_sky_contribution] is lower than [code]1.0[/code] (exclusive). */
ambient_light_energy: float;

/**
 * Defines the amount of light that the sky brings on the scene. A value of `0.0` means that the sky's light emission has no effect on the scene illumination, thus all ambient illumination is provided by the ambient light. On the contrary, a value of `1.0` means that **all** the light that affects the scene is provided by the sky, thus the ambient light parameter has no effect on the scene.
 *
 * **Note:** [member ambient_light_sky_contribution] is internally clamped between `0.0` and `1.0` (inclusive).
 *
*/
ambient_light_sky_contribution: float;

/** The ambient light source to use for rendering materials and global illumination. */
ambient_light_source: int;

/** The ID of the camera feed to show in the background. */
background_camera_feed_id: int;

/** The maximum layer ID to display. Only effective when using the [constant BG_CANVAS] background mode. */
background_canvas_max_layer: int;

/** The [Color] displayed for clear areas of the scene. Only effective when using the [constant BG_COLOR] background mode. */
background_color: Color;

/** Multiplier for background energy. Increase to make background brighter, decrease to make background dimmer. */
background_energy_multiplier: float;

/** Luminance of background measured in nits (candela per square meter). Only used when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. The default value is roughly equivalent to the sky at midday. */
background_intensity: float;

/** The background mode. See [enum BGMode] for possible values. */
background_mode: int;

/**
 * If set above `0.0` (exclusive), blends between the fog's color and the color of the background [Sky]. This has a small performance cost when set above `0.0`. Must have [member background_mode] set to [constant BG_SKY].
 *
 * This is useful to simulate [url=https://en.wikipedia.org/wiki/Aerial_perspective]aerial perspective[/url] in large scenes with low density fog. However, it is not very useful for high-density fog, as the sky will shine through. When set to `1.0`, the fog color comes completely from the [Sky]. If set to `0.0`, aerial perspective is disabled.
 *
*/
fog_aerial_perspective: float;

/** The [i]exponential[/i] fog density to use. Higher values result in a more dense fog. Fog rendering is exponential as in real life. */
fog_density: float;

/** If [code]true[/code], fog effects are enabled. */
fog_enabled: boolean;

/** The height at which the height fog effect begins. */
fog_height: float;

/** The density used to increase fog as height decreases. To make fog increase as height increases, use a negative value. */
fog_height_density: float;

/** The fog's color. */
fog_light_color: Color;

/** The fog's brightness. Higher values result in brighter fog. */
fog_light_energy: float;

/**
 * The factor to use when affecting the sky with non-volumetric fog. `1.0` means that fog can fully obscure the sky. Lower values reduce the impact of fog on sky rendering, with `0.0` not affecting sky rendering at all.
 *
 * **Note:** [member fog_sky_affect] has no visual effect if [member fog_aerial_perspective] is `1.0`.
 *
*/
fog_sky_affect: float;

/** If set above [code]0.0[/code], renders the scene's directional light(s) in the fog color depending on the view angle. This can be used to give the impression that the sun is "piercing" through the fog. */
fog_sun_scatter: float;

/** The glow blending mode. */
glow_blend_mode: int;

/** The bloom's intensity. If set to a value higher than [code]0[/code], this will make glow visible in areas darker than the [member glow_hdr_threshold]. */
glow_bloom: float;

/**
 * If `true`, the glow effect is enabled.
 *
 * **Note:** Glow is only supported in the Forward+ and Mobile rendering methods, not Compatibility. When using the Mobile rendering method, glow will look different due to the lower dynamic range available in the Mobile rendering method.
 *
*/
glow_enabled: boolean;

/** The higher threshold of the HDR glow. Areas brighter than this threshold will be clamped for the purposes of the glow effect. */
glow_hdr_luminance_cap: float;

/** The bleed scale of the HDR glow. */
glow_hdr_scale: float;

/** The lower threshold of the HDR glow. When using the Mobile rendering method (which only supports a lower dynamic range up to [code]2.0[/code]), this may need to be below [code]1.0[/code] for glow to be visible. A value of [code]0.9[/code] works well in this case. This value also needs to be decreased below [code]1.0[/code] when using glow in 2D, as 2D rendering is performed in SDR. */
glow_hdr_threshold: float;

/** The overall brightness multiplier of the glow effect. When using the Mobile rendering method (which only supports a lower dynamic range up to [code]2.0[/code]), this should be increased to [code]1.5[/code] to compensate. */
glow_intensity: float;

/** The intensity of the 1st level of glow. This is the most "local" level (least blurry). */
"glow_levels/1": float;

/** The intensity of the 2nd level of glow. */
"glow_levels/2": float;

/** The intensity of the 3rd level of glow. */
"glow_levels/3": float;

/** The intensity of the 4th level of glow. */
"glow_levels/4": float;

/** The intensity of the 5th level of glow. */
"glow_levels/5": float;

/** The intensity of the 6th level of glow. */
"glow_levels/6": float;

/** The intensity of the 7th level of glow. This is the most "global" level (blurriest). */
"glow_levels/7": float;

/**
 * The texture that should be used as a glow map to **multiply** the resulting glow color according to [member glow_map_strength]. This can be used to create a "lens dirt" effect. The texture's RGB color channels are used for modulation, but the alpha channel is ignored.
 *
 * **Note:** The texture will be stretched to fit the screen. Therefore, it's recommended to use a texture with an aspect ratio that matches your project's base aspect ratio (typically 16:9).
 *
*/
glow_map: Texture;

/** How strong of an impact the [member glow_map] should have on the overall glow effect. A strength of [code]0.0[/code] means the glow map has no effect on the overall glow effect. A strength of [code]1.0[/code] means the glow has a full effect on the overall glow effect (and can turn off glow entirely in specific areas of the screen if the glow map has black areas). */
glow_map_strength: float;

/** When using the [constant GLOW_BLEND_MODE_MIX] [member glow_blend_mode], this controls how much the source image is blended with the glow layer. A value of [code]0.0[/code] makes the glow rendering invisible, while a value of [code]1.0[/code] is equivalent to [constant GLOW_BLEND_MODE_REPLACE]. */
glow_mix: float;

/** If [code]true[/code], glow levels will be normalized so that summed together their intensities equal [code]1.0[/code]. */
glow_normalized: boolean;

/** The strength of the glow effect. This applies as the glow is blurred across the screen and increases the distance and intensity of the blur. When using the Mobile rendering method, this should be increased to compensate for the lower dynamic range. */
glow_strength: float;

/** The reflected (specular) light source. */
reflected_light_source: int;

/**
 * The energy multiplier applied to light every time it bounces from a surface when using SDFGI. Values greater than `0.0` will simulate multiple bounces, resulting in a more realistic appearance. Increasing [member sdfgi_bounce_feedback] generally has no performance impact. See also [member sdfgi_energy].
 *
 * **Note:** Values greater than `0.5` can cause infinite feedback loops and should be avoided in scenes with bright materials.
 *
 * **Note:** If [member sdfgi_bounce_feedback] is `0.0`, indirect lighting will not be represented in reflections as light will only bounce one time.
 *
*/
sdfgi_bounce_feedback: float;

/** [b]Note:[/b] This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_max_distance]. Changing its value will automatically change those properties as well. */
sdfgi_cascade0_distance: float;

/** The number of cascades to use for SDFGI (between 1 and 8). A higher number of cascades allows displaying SDFGI further away while preserving detail up close, at the cost of performance. When using SDFGI on small-scale levels, [member sdfgi_cascades] can often be decreased between [code]1[/code] and [code]4[/code] to improve performance. */
sdfgi_cascades: int;

/**
 * If `true`, enables signed distance field global illumination for meshes that have their [member GeometryInstance3D.gi_mode] set to [constant GeometryInstance3D.GI_MODE_STATIC]. SDFGI is a real-time global illumination technique that works well with procedurally generated and user-built levels, including in situations where geometry is created during gameplay. The signed distance field is automatically generated around the camera as it moves. Dynamic lights are supported, but dynamic occluders and emissive surfaces are not.
 *
 * **Note:** SDFGI is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 *
 * **Performance:** SDFGI is relatively demanding on the GPU and is not suited to low-end hardware such as integrated graphics (consider [LightmapGI] instead). To improve SDFGI performance, enable [member ProjectSettings.rendering/global_illumination/gi/use_half_resolution] in the Project Settings.
 *
 * **Note:** Meshes should have sufficiently thick walls to avoid light leaks (avoid one-sided walls). For interior levels, enclose your level geometry in a sufficiently large box and bridge the loops to close the mesh.
 *
*/
sdfgi_enabled: boolean;

/** The energy multiplier to use for SDFGI. Higher values will result in brighter indirect lighting and reflections. See also [member sdfgi_bounce_feedback]. */
sdfgi_energy: float;

/**
 * The maximum distance at which SDFGI is visible. Beyond this distance, environment lighting or other sources of GI such as [ReflectionProbe] will be used as a fallback.
 *
 * **Note:** This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.
 *
*/
sdfgi_max_distance: float;

/**
 * The cell size to use for the closest SDFGI cascade (in 3D units). Lower values allow SDFGI to be more precise up close, at the cost of making SDFGI updates more demanding. This can cause stuttering when the camera moves fast. Higher values allow SDFGI to cover more ground, while also reducing the performance impact of SDFGI updates.
 *
 * **Note:** This property is linked to [member sdfgi_max_distance] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.
 *
*/
sdfgi_min_cell_size: float;

/** The normal bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking. */
sdfgi_normal_bias: float;

/** The constant bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking. */
sdfgi_probe_bias: float;

/** If [code]true[/code], SDFGI takes the environment lighting into account. This should be set to [code]false[/code] for interior scenes. */
sdfgi_read_sky_light: boolean;

/** If [code]true[/code], SDFGI uses an occlusion detection approach to reduce light leaking. Occlusion may however introduce dark blotches in certain spots, which may be undesired in mostly outdoor scenes. [member sdfgi_use_occlusion] has a performance impact and should only be enabled when needed. */
sdfgi_use_occlusion: boolean;

/** The Y scale to use for SDFGI cells. Lower values will result in SDFGI cells being packed together more closely on the Y axis. This is used to balance between quality and covering a lot of vertical ground. [member sdfgi_y_scale] should be set depending on how vertical your scene is (and how fast your camera may move on the Y axis). */
sdfgi_y_scale: int;

/** The [Sky] resource used for this [Environment]. */
sky: Sky;

/** If set to a value greater than [code]0.0[/code], overrides the field of view to use for sky rendering. If set to [code]0.0[/code], the same FOV as the current [Camera3D] is used for sky rendering. */
sky_custom_fov: float;

/** The rotation to use for sky rendering. */
sky_rotation: Vector3;

/** The screen-space ambient occlusion intensity on materials that have an AO texture defined. Values higher than [code]0[/code] will make the SSAO effect visible in areas darkened by AO textures. */
ssao_ao_channel_affect: float;

/** Sets the strength of the additional level of detail for the screen-space ambient occlusion effect. A high value makes the detail pass more prominent, but it may contribute to aliasing in your final image. */
ssao_detail: float;

/**
 * If `true`, the screen-space ambient occlusion effect is enabled. This darkens objects' corners and cavities to simulate ambient light not reaching the entire object as in real life. This works well for small, dynamic objects, but baked lighting or ambient occlusion textures will do a better job at displaying ambient occlusion on large static objects. Godot uses a form of SSAO called Adaptive Screen Space Ambient Occlusion which is itself a form of Horizon Based Ambient Occlusion.
 *
 * **Note:** SSAO is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 *
*/
ssao_enabled: boolean;

/** The threshold for considering whether a given point on a surface is occluded or not represented as an angle from the horizon mapped into the [code]0.0-1.0[/code] range. A value of [code]1.0[/code] results in no occlusion. */
ssao_horizon: float;

/** The primary screen-space ambient occlusion intensity. Acts as a multiplier for the screen-space ambient occlusion effect. A higher value results in darker occlusion. */
ssao_intensity: float;

/** The screen-space ambient occlusion intensity in direct light. In real life, ambient occlusion only applies to indirect light, which means its effects can't be seen in direct light. Values higher than [code]0[/code] will make the SSAO effect visible in direct light. */
ssao_light_affect: float;

/** The distribution of occlusion. A higher value results in darker occlusion, similar to [member ssao_intensity], but with a sharper falloff. */
ssao_power: float;

/** The distance at which objects can occlude each other when calculating screen-space ambient occlusion. Higher values will result in occlusion over a greater distance at the cost of performance and quality. */
ssao_radius: float;

/** The amount that the screen-space ambient occlusion effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry. */
ssao_sharpness: float;

/**
 * If `true`, the screen-space indirect lighting effect is enabled. Screen space indirect lighting is a form of indirect lighting that allows diffuse light to bounce between nearby objects. Screen-space indirect lighting works very similarly to screen-space ambient occlusion, in that it only affects a limited range. It is intended to be used along with a form of proper global illumination like SDFGI or [VoxelGI]. Screen-space indirect lighting is not affected by individual light's [member Light3D.light_indirect_energy].
 *
 * **Note:** SSIL is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 *
*/
ssil_enabled: boolean;

/** The brightness multiplier for the screen-space indirect lighting effect. A higher value will result in brighter light. */
ssil_intensity: float;

/** Amount of normal rejection used when calculating screen-space indirect lighting. Normal rejection uses the normal of a given sample point to reject samples that are facing away from the current pixel. Normal rejection is necessary to avoid light leaking when only one side of an object is illuminated. However, normal rejection can be disabled if light leaking is desirable, such as when the scene mostly contains emissive objects that emit light from faces that cannot be seen from the camera. */
ssil_normal_rejection: float;

/** The distance that bounced lighting can travel when using the screen space indirect lighting effect. A larger value will result in light bouncing further in a scene, but may result in under-sampling artifacts which look like long spikes surrounding light sources. */
ssil_radius: float;

/** The amount that the screen-space indirect lighting effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry. */
ssil_sharpness: float;

/** The depth tolerance for screen-space reflections. */
ssr_depth_tolerance: float;

/**
 * If `true`, screen-space reflections are enabled. Screen-space reflections are more accurate than reflections from [VoxelGI]s or [ReflectionProbe]s, but are slower and can't reflect surfaces occluded by others.
 *
 * **Note:** SSR is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 *
*/
ssr_enabled: boolean;

/** The fade-in distance for screen-space reflections. Affects the area from the reflected material to the screen-space reflection. Only positive values are valid (negative values will be clamped to [code]0.0[/code]). */
ssr_fade_in: float;

/** The fade-out distance for screen-space reflections. Affects the area from the screen-space reflection to the "global" reflection. Only positive values are valid (negative values will be clamped to [code]0.0[/code]). */
ssr_fade_out: float;

/** The maximum number of steps for screen-space reflections. Higher values are slower. */
ssr_max_steps: int;

/** The default exposure used for tonemapping. Higher values result in a brighter image. See also [member tonemap_white]. */
tonemap_exposure: float;

/** The tonemapping mode to use. Tonemapping is the process that "converts" HDR values to be suitable for rendering on a LDR display. (Godot doesn't support rendering on HDR displays yet.) */
tonemap_mode: int;

/** The white reference value for tonemapping (also called "whitepoint"). Higher values can make highlights look less blown out, and will also slightly darken the whole scene as a result. Only effective if the [member tonemap_mode] isn't set to [constant TONE_MAPPER_LINEAR]. See also [member tonemap_exposure]. */
tonemap_white: float;

/** The [Color] of the volumetric fog when interacting with lights. Mist and fog have an albedo close to [code]Color(1, 1, 1, 1)[/code] while smoke has a darker albedo. */
volumetric_fog_albedo: Color;

/**
 * Scales the strength of ambient light used in the volumetric fog. A value of `0.0` means that ambient light will not impact the volumetric fog. [member volumetric_fog_ambient_inject] has a small performance cost when set above `0.0`.
 *
 * **Note:** This has no visible effect if [member volumetric_fog_density] is `0.0` or if [member volumetric_fog_albedo] is a fully black color.
 *
*/
volumetric_fog_ambient_inject: float;

/** The direction of scattered light as it goes through the volumetric fog. A value close to [code]1.0[/code] means almost all light is scattered forward. A value close to [code]0.0[/code] means light is scattered equally in all directions. A value close to [code]-1.0[/code] means light is scattered mostly backward. Fog and mist scatter light slightly forward, while smoke scatters light equally in all directions. */
volumetric_fog_anisotropy: float;

/**
 * The base **exponential** density of the volumetric fog. Set this to the lowest density you want to have globally. [FogVolume]s can be used to add to or subtract from this density in specific areas. Fog rendering is exponential as in real life.
 *
 * A value of `0.0` disables global volumetric fog while allowing [FogVolume]s to display volumetric fog in specific areas.
 *
 * To make volumetric fog work as a volumetric **lighting** solution, set [member volumetric_fog_density] to the lowest non-zero value (`0.0001`) then increase lights' [member Light3D.light_volumetric_fog_energy] to values between `10000` and `100000` to compensate for the very low density.
 *
*/
volumetric_fog_density: float;

/** The distribution of size down the length of the froxel buffer. A higher value compresses the froxels closer to the camera and places more detail closer to the camera. */
volumetric_fog_detail_spread: float;

/** The emitted light from the volumetric fog. Even with emission, volumetric fog will not cast light onto other surfaces. Emission is useful to establish an ambient color. As the volumetric fog effect uses single-scattering only, fog tends to need a little bit of emission to soften the harsh shadows. */
volumetric_fog_emission: Color;

/** The brightness of the emitted light from the volumetric fog. */
volumetric_fog_emission_energy: float;

/**
 * Enables the volumetric fog effect. Volumetric fog uses a screen-aligned froxel buffer to calculate accurate volumetric scattering in the short to medium range. Volumetric fog interacts with [FogVolume]s and lights to calculate localized and global fog. Volumetric fog uses a PBR single-scattering model based on extinction, scattering, and emission which it exposes to users as density, albedo, and emission.
 *
 * **Note:** Volumetric fog is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 *
*/
volumetric_fog_enabled: boolean;

/**
 * Scales the strength of Global Illumination used in the volumetric fog's albedo color. A value of `0.0` means that Global Illumination will not impact the volumetric fog. [member volumetric_fog_gi_inject] has a small performance cost when set above `0.0`.
 *
 * **Note:** This has no visible effect if [member volumetric_fog_density] is `0.0` or if [member volumetric_fog_albedo] is a fully black color.
 *
 * **Note:** Only [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) are taken into account when using [member volumetric_fog_gi_inject]. Global illumination from [LightmapGI], [ReflectionProbe] and SSIL (see [member ssil_enabled]) will be ignored by volumetric fog.
 *
*/
volumetric_fog_gi_inject: float;

/** The distance over which the volumetric fog is computed. Increase to compute fog over a greater range, decrease to add more detail when a long range is not needed. For best quality fog, keep this as low as possible. See also [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth]. */
volumetric_fog_length: float;

/**
 * The factor to use when affecting the sky with volumetric fog. `1.0` means that volumetric fog can fully obscure the sky. Lower values reduce the impact of volumetric fog on sky rendering, with `0.0` not affecting sky rendering at all.
 *
 * **Note:** [member volumetric_fog_sky_affect] also affects [FogVolume]s, even if [member volumetric_fog_density] is `0.0`. If you notice [FogVolume]s are disappearing when looking towards the sky, set [member volumetric_fog_sky_affect] to `1.0`.
 *
*/
volumetric_fog_sky_affect: float;

/** The amount by which to blend the last frame with the current frame. A higher number results in smoother volumetric fog, but makes "ghosting" much worse. A lower value reduces ghosting but can result in the per-frame temporal jitter becoming visible. */
volumetric_fog_temporal_reprojection_amount: float;

/** Enables temporal reprojection in the volumetric fog. Temporal reprojection blends the current frame's volumetric fog with the last frame's volumetric fog to smooth out jagged edges. The performance cost is minimal; however, it leads to moving [FogVolume]s and [Light3D]s "ghosting" and leaving a trail behind them. When temporal reprojection is enabled, try to avoid moving [FogVolume]s or [Light3D]s too fast. Short-lived dynamic lighting effects should have [member Light3D.light_volumetric_fog_energy] set to [code]0.0[/code] to avoid ghosting. */
volumetric_fog_temporal_reprojection_enabled: boolean;

/** Returns the intensity of the glow level [param idx]. */
get_glow_level(): float;

/** Sets the intensity of the glow level [param idx]. A value above [code]0.0[/code] enables the level. Each level relies on the previous level. This means that enabling higher glow levels will slow down the glow effect rendering, even if previous levels aren't enabled. */
set_glow_level(): void;

  connect<T extends SignalsOf<Environment>>(signal: T, method: SignalFunction<Environment[T]>): number;



/**
 * Clears the background using the clear color defined in [member ProjectSettings.rendering/environment/defaults/default_clear_color].
 *
*/
static BG_CLEAR_COLOR: any;

/**
 * Clears the background using a custom clear color.
 *
*/
static BG_COLOR: any;

/**
 * Displays a user-defined sky in the background.
 *
*/
static BG_SKY: any;

/**
 * Displays a [CanvasLayer] in the background.
 *
*/
static BG_CANVAS: any;

/**
 * Keeps on screen every pixel drawn in the background. This is the fastest background mode, but it can only be safely used in fully-interior scenes (no visible sky or sky reflections). If enabled in a scene where the background is visible, "ghost trail" artifacts will be visible when moving the camera.
 *
*/
static BG_KEEP: any;

/**
 * Displays a camera feed in the background.
 *
*/
static BG_CAMERA_FEED: any;

/**
 * Represents the size of the [enum BGMode] enum.
 *
*/
static BG_MAX: any;

/**
 * Gather ambient light from whichever source is specified as the background.
 *
*/
static AMBIENT_SOURCE_BG: any;

/**
 * Disable ambient light. This provides a slight performance boost over [constant AMBIENT_SOURCE_SKY].
 *
*/
static AMBIENT_SOURCE_DISABLED: any;

/**
 * Specify a specific [Color] for ambient light. This provides a slight performance boost over [constant AMBIENT_SOURCE_SKY].
 *
*/
static AMBIENT_SOURCE_COLOR: any;

/**
 * Gather ambient light from the [Sky] regardless of what the background is.
 *
*/
static AMBIENT_SOURCE_SKY: any;

/**
 * Use the background for reflections.
 *
*/
static REFLECTION_SOURCE_BG: any;

/**
 * Disable reflections. This provides a slight performance boost over other options.
 *
*/
static REFLECTION_SOURCE_DISABLED: any;

/**
 * Use the [Sky] for reflections regardless of what the background is.
 *
*/
static REFLECTION_SOURCE_SKY: any;

/**
 * Linear tonemapper operator. Reads the linear data and passes it on unmodified. This can cause bright lighting to look blown out, with noticeable clipping in the output colors.
 *
*/
static TONE_MAPPER_LINEAR: any;

/**
 * Reinhardt tonemapper operator. Performs a variation on rendered pixels' colors by this formula: `color = color / (1 + color)`. This avoids clipping bright highlights, but the resulting image can look a bit dull.
 *
*/
static TONE_MAPPER_REINHARDT: any;

/**
 * Filmic tonemapper operator. This avoids clipping bright highlights, with a resulting image that usually looks more vivid than [constant TONE_MAPPER_REINHARDT].
 *
*/
static TONE_MAPPER_FILMIC: any;

/**
 * Use the Academy Color Encoding System tonemapper. ACES is slightly more expensive than other options, but it handles bright lighting in a more realistic fashion by desaturating it as it becomes brighter. ACES typically has a more contrasted output compared to [constant TONE_MAPPER_REINHARDT] and [constant TONE_MAPPER_FILMIC].
 *
 * **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.
 *
*/
static TONE_MAPPER_ACES: any;

/**
 * Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources.
 *
*/
static GLOW_BLEND_MODE_ADDITIVE: any;

/**
 * Screen glow blending mode. Increases brightness, used frequently with bloom.
 *
*/
static GLOW_BLEND_MODE_SCREEN: any;

/**
 * Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom).
 *
*/
static GLOW_BLEND_MODE_SOFTLIGHT: any;

/**
 * Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness.
 *
*/
static GLOW_BLEND_MODE_REPLACE: any;

/**
 * Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect.
 *
*/
static GLOW_BLEND_MODE_MIX: any;

/**
 * Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality.
 *
*/
static SDFGI_Y_SCALE_50_PERCENT: any;

/**
 * Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales.
 *
*/
static SDFGI_Y_SCALE_75_PERCENT: any;

/**
 * Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings.
 *
*/
static SDFGI_Y_SCALE_100_PERCENT: any;



}

