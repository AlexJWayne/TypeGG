
/**
 * Base node for geometry-based visual instances. Shares some common functionality like visibility and custom materials.
 *
*/
declare class GeometryInstance3D extends VisualInstance3D  {

  
/**
 * Base node for geometry-based visual instances. Shares some common functionality like visibility and custom materials.
 *
*/
  new(): GeometryInstance3D; 
  static "new"(): GeometryInstance3D 


/** The selected shadow casting flag. See [enum ShadowCastingSetting] for possible values. */
cast_shadow: int;

/** Overrides the bounding box of this node with a custom one. This can be used to avoid the expensive [AABB] recalculation that happens when a skeleton is used with a [MeshInstance3D] or to have fine control over the [MeshInstance3D]'s bounding box. To use the default AABB, set value to an [AABB] with all fields set to [code]0.0[/code]. To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as [code]AABB(-10000, -10000, -10000, 20000, 20000, 20000)[/code]. To disable all forms of culling (including occlusion culling), call [method RenderingServer.instance_set_ignore_culling] on the [GeometryInstance3D]'s [RID]. */
custom_aabb: AABB;

/** The extra distance added to the GeometryInstance3D's bounding box ([AABB]) to increase its cull box. */
extra_cull_margin: float;

/** The texel density to use for lightmapping in [LightmapGI]. Greater scale values provide higher resolution in the lightmap, which can result in sharper shadows for lights that have both direct and indirect light baked. However, greater scale values will also increase the space taken by the mesh in the lightmap texture, which increases the memory, storage, and bake time requirements. When using a single mesh at different scales, consider adjusting this value to keep the lightmap texel density consistent across meshes. */
gi_lightmap_scale: int;

/**
 * The global illumination mode to use for the whole geometry. To avoid inconsistent results, use a mode that matches the purpose of the mesh during gameplay (static/dynamic).
 *
 * **Note:** Lights' bake mode will also affect the global illumination rendering. See [member Light3D.light_bake_mode].
 *
*/
gi_mode: int;

/**
 * If `true`, disables occlusion culling for this instance. Useful for gizmos that must be rendered even when occlusion culling is in use.
 *
 * **Note:** [member ignore_occlusion_culling] does not affect frustum culling (which is what happens when an object is not visible given the camera's angle). To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`.
 *
*/
ignore_occlusion_culling: boolean;

/**
 * Changes how quickly the mesh transitions to a lower level of detail. A value of 0 will force the mesh to its lowest level of detail, a value of 1 will use the default settings, and larger values will keep the mesh in a higher level of detail at farther distances.
 *
 * Useful for testing level of detail transitions in the editor.
 *
*/
lod_bias: float;

/**
 * The material overlay for the whole geometry.
 *
 * If a material is assigned to this property, it will be rendered on top of any other active material for all the surfaces.
 *
*/
material_overlay: Material;

/**
 * The material override for the whole geometry.
 *
 * If a material is assigned to this property, it will be used instead of any material set in any material slot of the mesh.
 *
*/
material_override: Material;

/**
 * The transparency applied to the whole geometry (as a multiplier of the materials' existing transparency). `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [member transparency] to a value greater than `0.0` (exclusive) will **not** disable shadow rendering.
 *
 * In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.
 *
 * **Note:** [member transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.
 *
*/
transparency: float;

/** Starting distance from which the GeometryInstance3D will be visible, taking [member visibility_range_begin_margin] into account as well. The default value of 0 is used to disable the range check. */
visibility_range_begin: float;

/**
 * Margin for the [member visibility_range_begin] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_begin] threshold by this amount.
 *
 * If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.
 *
*/
visibility_range_begin_margin: float;

/** Distance from which the GeometryInstance3D will be hidden, taking [member visibility_range_end_margin] into account as well. The default value of 0 is used to disable the range check. */
visibility_range_end: float;

/**
 * Margin for the [member visibility_range_end] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_end] threshold by this amount.
 *
 * If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.
 *
*/
visibility_range_end_margin: float;

/** Controls which instances will be faded when approaching the limits of the visibility range. See [enum VisibilityRangeFadeMode] for possible values. */
visibility_range_fade_mode: int;

/** Get the value of a shader parameter as set on this instance. */
get_instance_shader_parameter(): any;

/**
 * Set the value of a shader uniform for this instance only ([url=$DOCS_URL/tutorials/shaders/shader_reference/shading_language.html#per-instance-uniforms]per-instance uniform[/url]). See also [method ShaderMaterial.set_shader_parameter] to assign a uniform on all instances using the same [ShaderMaterial].
 *
 * **Note:** For a shader uniform to be assignable on a per-instance basis, it **must** be defined with `instance uniform ...` rather than `uniform ...` in the shader code.
 *
 * **Note:** [param name] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).
 *
 * **Note:** Per-instance shader uniforms are currently only available in 3D, so there is no 2D equivalent of this method.
 *
*/
set_instance_shader_parameter(): void;

  connect<T extends SignalsOf<GeometryInstance3D>>(signal: T, method: SignalFunction<GeometryInstance3D[T]>): number;



/**
 * Will not cast any shadows. Use this to improve performance for small geometry that is unlikely to cast noticeable shadows (such as debris).
 *
*/
static SHADOW_CASTING_SETTING_OFF: any;

/**
 * Will cast shadows from all visible faces in the GeometryInstance3D.
 *
 * Will take culling into account, so faces not being rendered will not be taken into account when shadow casting.
 *
*/
static SHADOW_CASTING_SETTING_ON: any;

/**
 * Will cast shadows from all visible faces in the GeometryInstance3D.
 *
 * Will not take culling into account, so all faces will be taken into account when shadow casting.
 *
*/
static SHADOW_CASTING_SETTING_DOUBLE_SIDED: any;

/**
 * Will only show the shadows casted from this object.
 *
 * In other words, the actual mesh will not be visible, only the shadows casted from the mesh will be.
 *
*/
static SHADOW_CASTING_SETTING_SHADOWS_ONLY: any;

/**
 * Disabled global illumination mode. Use for dynamic objects that do not contribute to global illumination (such as characters). When using [VoxelGI] and SDFGI, the geometry will **receive** indirect lighting and reflections but the geometry will not be considered in GI baking. When using [LightmapGI], the object will receive indirect lighting using lightmap probes instead of using the baked lightmap texture.
 *
*/
static GI_MODE_DISABLED: any;

/**
 * Baked global illumination mode. Use for static objects that contribute to global illumination (such as level geometry). This GI mode is effective when using [VoxelGI], SDFGI and [LightmapGI].
 *
*/
static GI_MODE_STATIC: any;

/**
 * Dynamic global illumination mode. Use for dynamic objects that contribute to global illumination. This GI mode is only effective when using [VoxelGI], but it has a higher performance impact than [constant GI_MODE_STATIC]. When using other GI methods, this will act the same as [constant GI_MODE_DISABLED].
 *
*/
static GI_MODE_DYNAMIC: any;

/**
 * The standard texel density for lightmapping with [LightmapGI].
 *
*/
static LIGHTMAP_SCALE_1X: any;

/**
 * Multiplies texel density by 2× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor between 1.5 and 3.0.
 *
*/
static LIGHTMAP_SCALE_2X: any;

/**
 * Multiplies texel density by 4× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor between 3.0 and 6.0.
 *
*/
static LIGHTMAP_SCALE_4X: any;

/**
 * Multiplies texel density by 8× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor greater than 6.0.
 *
*/
static LIGHTMAP_SCALE_8X: any;

/**
 * Represents the size of the [enum LightmapScale] enum.
 *
*/
static LIGHTMAP_SCALE_MAX: any;

/**
 * Will not fade itself nor its visibility dependencies, hysteresis will be used instead. This is the fastest approach to manual LOD, but it can result in noticeable LOD transitions depending on how the LOD meshes are authored. See [member visibility_range_begin] and [member Node3D.visibility_parent] for more information.
 *
*/
static VISIBILITY_RANGE_FADE_DISABLED: any;

/**
 * Will fade-out itself when reaching the limits of its own visibility range. This is slower than [constant VISIBILITY_RANGE_FADE_DISABLED], but it can provide smoother transitions. The fading range is determined by [member visibility_range_begin_margin] and [member visibility_range_end_margin].
 *
*/
static VISIBILITY_RANGE_FADE_SELF: any;

/**
 * Will fade-in its visibility dependencies (see [member Node3D.visibility_parent]) when reaching the limits of its own visibility range. This is slower than [constant VISIBILITY_RANGE_FADE_DISABLED], but it can provide smoother transitions. The fading range is determined by [member visibility_range_begin_margin] and [member visibility_range_end_margin].
 *
*/
static VISIBILITY_RANGE_FADE_DEPENDENCIES: any;



}

