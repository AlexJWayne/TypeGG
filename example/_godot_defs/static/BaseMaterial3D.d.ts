
/**
 * This class serves as a default material with a wide variety of rendering features and properties without the need to write shader code. See the tutorial below for details.
 *
*/
declare class BaseMaterial3D extends Material  {

  
/**
 * This class serves as a default material with a wide variety of rendering features and properties without the need to write shader code. See the tutorial below for details.
 *
*/
  new(): BaseMaterial3D; 
  static "new"(): BaseMaterial3D 


/**
 * The material's base color.
 *
 * **Note:** If [member detail_enabled] is `true` and a [member detail_albedo] texture is specified, [member albedo_color] will **not** modulate the detail texture. This can be used to color partial areas of a material by not specifying an albedo texture and using a transparent [member detail_albedo] texture instead.
 *
*/
albedo_color: Color;

/**
 * Texture to multiply by [member albedo_color]. Used for basic texturing of objects.
 *
 * If the texture appears unexpectedly too dark or too bright, check [member albedo_texture_force_srgb].
 *
*/
albedo_texture: Texture2D;

/**
 * If `true`, forces a conversion of the [member albedo_texture] from sRGB color space to linear color space. See also [member vertex_color_is_srgb].
 *
 * This should only be enabled when needed (typically when using a [ViewportTexture] as [member albedo_texture]). If [member albedo_texture_force_srgb] is `true` when it shouldn't be, the texture will appear to be too dark. If [member albedo_texture_force_srgb] is `false` when it shouldn't be, the texture will appear to be too bright.
 *
*/
albedo_texture_force_srgb: boolean;

/** Enables multichannel signed distance field rendering shader. Use [member msdf_pixel_range] and [member msdf_outline_size] to configure MSDF parameters. */
albedo_texture_msdf: boolean;

/** Threshold at which antialiasing will be applied on the alpha channel. */
alpha_antialiasing_edge: float;

/** The type of alpha antialiasing to apply. See [enum AlphaAntiAliasing]. */
alpha_antialiasing_mode: int;

/** The hashing scale for Alpha Hash. Recommended values between [code]0[/code] and [code]2[/code]. */
alpha_hash_scale: float;

/** Threshold at which the alpha scissor will discard values. Higher values will result in more pixels being discarded. If the material becomes too opaque at a distance, try increasing [member alpha_scissor_threshold]. If the material disappears at a distance, try decreasing [member alpha_scissor_threshold]. */
alpha_scissor_threshold: float;

/** The strength of the anisotropy effect. This is multiplied by [member anisotropy_flowmap]'s alpha channel if a texture is defined there and the texture contains an alpha channel. */
anisotropy: float;

/**
 * If `true`, anisotropy is enabled. Anisotropy changes the shape of the specular blob and aligns it to tangent space. This is useful for brushed aluminium and hair reflections.
 *
 * **Note:** Mesh tangents are needed for anisotropy to work. If the mesh does not contain tangents, the anisotropy effect will appear broken.
 *
 * **Note:** Material anisotropy should not to be confused with anisotropic texture filtering, which can be enabled by setting [member texture_filter] to [constant TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC].
 *
*/
anisotropy_enabled: boolean;

/**
 * Texture that offsets the tangent map for anisotropy calculations and optionally controls the anisotropy effect (if an alpha channel is present). The flowmap texture is expected to be a derivative map, with the red channel representing distortion on the X axis and green channel representing distortion on the Y axis. Values below 0.5 will result in negative distortion, whereas values above 0.5 will result in positive distortion.
 *
 * If present, the texture's alpha channel will be used to multiply the strength of the [member anisotropy] effect. Fully opaque pixels will keep the anisotropy effect's original strength while fully transparent pixels will disable the anisotropy effect entirely. The flowmap texture's blue channel is ignored.
 *
*/
anisotropy_flowmap: Texture2D;

/** If [code]true[/code], ambient occlusion is enabled. Ambient occlusion darkens areas based on the [member ao_texture]. */
ao_enabled: boolean;

/** Amount that ambient occlusion affects lighting from lights. If [code]0[/code], ambient occlusion only affects ambient light. If [code]1[/code], ambient occlusion affects lights just as much as it affects ambient light. This can be used to impact the strength of the ambient occlusion effect, but typically looks unrealistic. */
ao_light_affect: float;

/** If [code]true[/code], use [code]UV2[/code] coordinates to look up from the [member ao_texture]. */
ao_on_uv2: boolean;

/** Texture that defines the amount of ambient occlusion for a given point on the object. */
ao_texture: Texture2D;

/** Specifies the channel of the [member ao_texture] in which the ambient occlusion information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
ao_texture_channel: int;

/** The color used by the backlight effect. Represents the light passing through an object. */
backlight: Color;

/** If [code]true[/code], the backlight effect is enabled. See also [member subsurf_scatter_transmittance_enabled]. */
backlight_enabled: boolean;

/** Texture used to control the backlight effect per-pixel. Added to [member backlight]. */
backlight_texture: Texture2D;

/** If [code]true[/code], the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. Only applies when [member billboard_mode] is not [constant BILLBOARD_DISABLED]. */
billboard_keep_scale: boolean;

/**
 * Controls how the object faces the camera. See [enum BillboardMode].
 *
 * **Note:** Billboard mode is not suitable for VR because the left-right vector of the camera is not horizontal when the screen is attached to your head instead of on the table. See [url=https://github.com/godotengine/godot/issues/41567]GitHub issue #41567[/url] for details.
 *
*/
billboard_mode: int;

/**
 * The material's blend mode.
 *
 * **Note:** Values other than `Mix` force the object into the transparent pipeline. See [enum BlendMode].
 *
*/
blend_mode: int;

/** Sets the strength of the clearcoat effect. Setting to [code]0[/code] looks the same as disabling the clearcoat effect. */
clearcoat: float;

/**
 * If `true`, clearcoat rendering is enabled. Adds a secondary transparent pass to the lighting calculation resulting in an added specular blob. This makes materials appear as if they have a clear layer on them that can be either glossy or rough.
 *
 * **Note:** Clearcoat rendering is not visible if the material's [member shading_mode] is [constant SHADING_MODE_UNSHADED].
 *
*/
clearcoat_enabled: boolean;

/** Sets the roughness of the clearcoat pass. A higher value results in a rougher clearcoat while a lower value results in a smoother clearcoat. */
clearcoat_roughness: float;

/** Texture that defines the strength of the clearcoat effect and the glossiness of the clearcoat. Strength is specified in the red channel while glossiness is specified in the green channel. */
clearcoat_texture: Texture2D;

/** Determines which side of the triangle to cull depending on whether the triangle faces towards or away from the camera. See [enum CullMode]. */
cull_mode: int;

/** Determines when depth rendering takes place. See [enum DepthDrawMode]. See also [member transparency]. */
depth_draw_mode: int;

/**
 * Texture that specifies the color of the detail overlay. [member detail_albedo]'s alpha channel is used as a mask, even when the material is opaque. To use a dedicated texture as a mask, see [member detail_mask].
 *
 * **Note:** [member detail_albedo] is **not** modulated by [member albedo_color].
 *
*/
detail_albedo: Texture2D;

/** Specifies how the [member detail_albedo] should blend with the current [code]ALBEDO[/code]. See [enum BlendMode] for options. */
detail_blend_mode: int;

/** If [code]true[/code], enables the detail overlay. Detail is a second texture that gets mixed over the surface of the object based on [member detail_mask] and [member detail_albedo]'s alpha channel. This can be used to add variation to objects, or to blend between two different albedo/normal textures. */
detail_enabled: boolean;

/** Texture used to specify how the detail textures get blended with the base textures. [member detail_mask] can be used together with [member detail_albedo]'s alpha channel (if any). */
detail_mask: Texture2D;

/**
 * Texture that specifies the per-pixel normal of the detail overlay. The [member detail_normal] texture only uses the red and green channels; the blue and alpha channels are ignored. The normal read from [member detail_normal] is oriented around the surface normal provided by the [Mesh].
 *
 * **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.
 *
*/
detail_normal: Texture2D;

/** Specifies whether to use [code]UV[/code] or [code]UV2[/code] for the detail layer. See [enum DetailUV] for options. */
detail_uv_layer: int;

/** The algorithm used for diffuse light scattering. See [enum DiffuseMode]. */
diffuse_mode: int;

/** If [code]true[/code], the object receives no ambient light. */
disable_ambient_light: boolean;

/** If [code]true[/code], the object will not be affected by fog (neither volumetric nor depth fog). This is useful for unshaded or transparent materials (e.g. particles), which without this setting will be affected even if fully transparent. */
disable_fog: boolean;

/** If [code]true[/code], the object receives no shadow that would otherwise be cast onto it. */
disable_receive_shadows: boolean;

/**
 * Distance at which the object appears fully opaque.
 *
 * **Note:** If [member distance_fade_max_distance] is less than [member distance_fade_min_distance], the behavior will be reversed. The object will start to fade away at [member distance_fade_max_distance] and will fully disappear once it reaches [member distance_fade_min_distance].
 *
*/
distance_fade_max_distance: float;

/**
 * Distance at which the object starts to become visible. If the object is less than this distance away, it will be invisible.
 *
 * **Note:** If [member distance_fade_min_distance] is greater than [member distance_fade_max_distance], the behavior will be reversed. The object will start to fade away at [member distance_fade_max_distance] and will fully disappear once it reaches [member distance_fade_min_distance].
 *
*/
distance_fade_min_distance: float;

/** Specifies which type of fade to use. Can be any of the [enum DistanceFadeMode]s. */
distance_fade_mode: int;

/** The emitted light's color. See [member emission_enabled]. */
emission: Color;

/** If [code]true[/code], the body emits light. Emitting light makes the object appear brighter. The object can also cast light on other objects if a [VoxelGI], SDFGI, or [LightmapGI] is used and this object is used in baked lighting. */
emission_enabled: boolean;

/** Multiplier for emitted light. See [member emission_enabled]. */
emission_energy_multiplier: float;

/** Luminance of emitted light, measured in nits (candela per square meter). Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. The default is roughly equivalent to an indoor lightbulb. */
emission_intensity: float;

/** Use [code]UV2[/code] to read from the [member emission_texture]. */
emission_on_uv2: boolean;

/** Sets how [member emission] interacts with [member emission_texture]. Can either add or multiply. See [enum EmissionOperator] for options. */
emission_operator: int;

/** Texture that specifies how much surface emits light at a given point. */
emission_texture: Texture2D;

/** If [code]true[/code], the object is rendered at the same size regardless of distance. */
fixed_size: boolean;

/**
 * If `true`, enables the vertex grow setting. This can be used to create mesh-based outlines using a second material pass and its [member cull_mode] set to [constant CULL_FRONT]. See also [member grow_amount].
 *
 * **Note:** Vertex growth cannot create new vertices, which means that visible gaps may occur in sharp corners. This can be alleviated by designing the mesh to use smooth normals exclusively using [url=https://wiki.polycount.com/wiki/Face_weighted_normals]face weighted normals[/url] in the 3D authoring software. In this case, grow will be able to join every outline together, just like in the original mesh.
 *
*/
grow: boolean;

/** Grows object vertices in the direction of their normals. Only effective if [member grow] is [code]true[/code]. */
grow_amount: float;

/** If [code]true[/code], uses parallax occlusion mapping to represent depth in the material instead of simple offset mapping (see [member heightmap_enabled]). This results in a more convincing depth effect, but is much more expensive on the GPU. Only enable this on materials where it makes a significant visual difference. */
heightmap_deep_parallax: boolean;

/**
 * If `true`, height mapping is enabled (also called "parallax mapping" or "depth mapping"). See also [member normal_enabled]. Height mapping is a demanding feature on the GPU, so it should only be used on materials where it makes a significant visual difference.
 *
 * **Note:** Height mapping is not supported if triplanar mapping is used on the same material. The value of [member heightmap_enabled] will be ignored if [member uv1_triplanar] is enabled.
 *
*/
heightmap_enabled: boolean;

/** If [code]true[/code], flips the mesh's binormal vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [member heightmap_scale]), try setting this to [code]true[/code]. */
heightmap_flip_binormal: boolean;

/** If [code]true[/code], flips the mesh's tangent vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [member heightmap_scale]), try setting this to [code]true[/code]. */
heightmap_flip_tangent: boolean;

/**
 * If `true`, interprets the height map texture as a depth map, with brighter values appearing to be "lower" in altitude compared to darker values.
 *
 * This can be enabled for compatibility with some materials authored for Godot 3.x. This is not necessary if the Invert import option was used to invert the depth map in Godot 3.x, in which case [member heightmap_flip_texture] should remain `false`.
 *
*/
heightmap_flip_texture: boolean;

/**
 * The number of layers to use for parallax occlusion mapping when the camera is up close to the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.
 *
 * **Note:** Only effective if [member heightmap_deep_parallax] is `true`.
 *
*/
heightmap_max_layers: int;

/**
 * The number of layers to use for parallax occlusion mapping when the camera is far away from the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.
 *
 * **Note:** Only effective if [member heightmap_deep_parallax] is `true`.
 *
*/
heightmap_min_layers: int;

/**
 * The heightmap scale to use for the parallax effect (see [member heightmap_enabled]). The default value is tuned so that the highest point (value = 255) appears to be 5 cm higher than the lowest point (value = 0). Higher values result in a deeper appearance, but may result in artifacts appearing when looking at the material from oblique angles, especially when the camera moves. Negative values can be used to invert the parallax effect, but this is different from inverting the texture using [member heightmap_flip_texture] as the material will also appear to be "closer" to the camera. In most cases, [member heightmap_scale] should be kept to a positive value.
 *
 * **Note:** If the height map effect looks strange regardless of this value, try adjusting [member heightmap_flip_binormal] and [member heightmap_flip_tangent]. See also [member heightmap_texture] for recommendations on authoring heightmap textures, as the way the heightmap texture is authored affects how [member heightmap_scale] behaves.
 *
*/
heightmap_scale: float;

/**
 * The texture to use as a height map. See also [member heightmap_enabled].
 *
 * For best results, the texture should be normalized (with [member heightmap_scale] reduced to compensate). In [url=https://gimp.org]GIMP[/url], this can be done using **Colors > Auto > Equalize**. If the texture only uses a small part of its available range, the parallax effect may look strange, especially when the camera moves.
 *
 * **Note:** To reduce memory usage and improve loading times, you may be able to use a lower-resolution heightmap texture as most heightmaps are only comprised of low-frequency data.
 *
*/
heightmap_texture: Texture2D;

/** A high value makes the material appear more like a metal. Non-metals use their albedo as the diffuse color and add diffuse to the specular reflection. With non-metals, the reflection appears on top of the albedo color. Metals use their albedo as a multiplier to the specular reflection and set the diffuse color to black resulting in a tinted reflection. Materials work better when fully metal or fully non-metal, values between [code]0[/code] and [code]1[/code] should only be used for blending between metal and non-metal sections. To alter the amount of reflection use [member roughness]. */
metallic: float;

/**
 * Adjusts the strength of specular reflections. Specular reflections are composed of scene reflections and the specular lobe which is the bright spot that is reflected from light sources. When set to `0.0`, no specular reflections will be visible. This differs from the [constant SPECULAR_DISABLED] [enum SpecularMode] as [constant SPECULAR_DISABLED] only applies to the specular lobe from the light source.
 *
 * **Note:** Unlike [member metallic], this is not energy-conserving, so it should be left at `0.5` in most cases. See also [member roughness].
 *
*/
metallic_specular: float;

/** Texture used to specify metallic for an object. This is multiplied by [member metallic]. */
metallic_texture: Texture2D;

/** Specifies the channel of the [member metallic_texture] in which the metallic information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
metallic_texture_channel: int;

/** The width of the shape outline. */
msdf_outline_size: float;

/** The width of the range around the shape between the minimum and maximum representable signed distance. */
msdf_pixel_range: float;

/** If [code]true[/code], depth testing is disabled and the object will be drawn in render order. */
no_depth_test: boolean;

/** If [code]true[/code], normal mapping is enabled. This has a slight performance cost, especially on mobile GPUs. */
normal_enabled: boolean;

/** The strength of the normal map's effect. */
normal_scale: float;

/**
 * Texture used to specify the normal at a given pixel. The [member normal_texture] only uses the red and green channels; the blue and alpha channels are ignored. The normal read from [member normal_texture] is oriented around the surface normal provided by the [Mesh].
 *
 * **Note:** The mesh must have both normals and tangents defined in its vertex data. Otherwise, the normal map won't render correctly and will only appear to darken the whole surface. If creating geometry with [SurfaceTool], you can use [method SurfaceTool.generate_normals] and [method SurfaceTool.generate_tangents] to automatically generate normals and tangents respectively.
 *
 * **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.
 *
 * **Note:** If [member detail_enabled] is `true`, the [member detail_albedo] texture is drawn **below** the [member normal_texture]. To display a normal map **above** the [member detail_albedo] texture, use [member detail_normal] instead.
 *
*/
normal_texture: Texture2D;

/** The Occlusion/Roughness/Metallic texture to use. This is a more efficient replacement of [member ao_texture], [member roughness_texture] and [member metallic_texture] in [ORMMaterial3D]. Ambient occlusion is stored in the red channel. Roughness map is stored in the green channel. Metallic map is stored in the blue channel. The alpha channel is ignored. */
orm_texture: Texture2D;

/** The number of horizontal frames in the particle sprite sheet. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
particles_anim_h_frames: int;

/** If [code]true[/code], particle animations are looped. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
particles_anim_loop: boolean;

/** The number of vertical frames in the particle sprite sheet. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
particles_anim_v_frames: int;

/** The point size in pixels. See [member use_point_size]. */
point_size: float;

/** Distance over which the fade effect takes place. The larger the distance the longer it takes for an object to fade. */
proximity_fade_distance: float;

/** If [code]true[/code], the proximity fade effect is enabled. The proximity fade effect fades out each pixel based on its distance to another object. */
proximity_fade_enabled: boolean;

/** If [code]true[/code], the refraction effect is enabled. Distorts transparency based on light from behind the object. */
refraction_enabled: boolean;

/** The strength of the refraction effect. */
refraction_scale: float;

/** Texture that controls the strength of the refraction per-pixel. Multiplied by [member refraction_scale]. */
refraction_texture: Texture2D;

/** Specifies the channel of the [member refraction_texture] in which the refraction information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored refraction in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
refraction_texture_channel: int;

/** Sets the strength of the rim lighting effect. */
rim: float;

/**
 * If `true`, rim effect is enabled. Rim lighting increases the brightness at glancing angles on an object.
 *
 * **Note:** Rim lighting is not visible if the material's [member shading_mode] is [constant SHADING_MODE_UNSHADED].
 *
*/
rim_enabled: boolean;

/** Texture used to set the strength of the rim lighting effect per-pixel. Multiplied by [member rim]. */
rim_texture: Texture2D;

/** The amount of to blend light and albedo color when rendering rim effect. If [code]0[/code] the light color is used, while [code]1[/code] means albedo color is used. An intermediate value generally works best. */
rim_tint: float;

/** Surface reflection. A value of [code]0[/code] represents a perfect mirror while a value of [code]1[/code] completely blurs the reflection. See also [member metallic]. */
roughness: float;

/** Texture used to control the roughness per-pixel. Multiplied by [member roughness]. */
roughness_texture: Texture2D;

/** Specifies the channel of the [member roughness_texture] in which the roughness information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
roughness_texture_channel: int;

/**
 * Sets whether the shading takes place, per-pixel, per-vertex or unshaded. Per-vertex lighting is faster, making it the best choice for mobile applications, however it looks considerably worse than per-pixel. Unshaded rendering is the fastest, but disables all interactions with lights.
 *
 * **Note:** Setting the shading mode vertex shading currently has no effect, as vertex shading is not implemented yet.
 *
*/
shading_mode: int;

/** If [code]true[/code], enables the "shadow to opacity" render mode where lighting modifies the alpha so shadowed areas are opaque and non-shadowed areas are transparent. Useful for overlaying shadows onto a camera feed in AR. */
shadow_to_opacity: boolean;

/**
 * The method for rendering the specular blob. See [enum SpecularMode].
 *
 * **Note:** [member specular_mode] only applies to the specular blob. It does not affect specular reflections from the sky, screen-space reflections, [VoxelGI], SDFGI or [ReflectionProbe]s. To disable reflections from these sources as well, set [member metallic_specular] to `0.0` instead.
 *
*/
specular_mode: int;

/** If [code]true[/code], subsurface scattering is enabled. Emulates light that penetrates an object's surface, is scattered, and then emerges. Subsurface scattering quality is controlled by [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality]. */
subsurf_scatter_enabled: boolean;

/** If [code]true[/code], subsurface scattering will use a special mode optimized for the color and density of human skin, such as boosting the intensity of the red channel in subsurface scattering. */
subsurf_scatter_skin_mode: boolean;

/** The strength of the subsurface scattering effect. The depth of the effect is also controlled by [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale], which is set globally. */
subsurf_scatter_strength: float;

/** Texture used to control the subsurface scattering strength. Stored in the red texture channel. Multiplied by [member subsurf_scatter_strength]. */
subsurf_scatter_texture: Texture2D;

/** The intensity of the subsurface scattering transmittance effect. */
subsurf_scatter_transmittance_boost: float;

/** The color to multiply the subsurface scattering transmittance effect with. Ignored if [member subsurf_scatter_skin_mode] is [code]true[/code]. */
subsurf_scatter_transmittance_color: Color;

/** The depth of the subsurface scattering transmittance effect. */
subsurf_scatter_transmittance_depth: float;

/** If [code]true[/code], enables subsurface scattering transmittance. Only effective if [member subsurf_scatter_enabled] is [code]true[/code]. See also [member backlight_enabled]. */
subsurf_scatter_transmittance_enabled: boolean;

/** The texture to use for multiplying the intensity of the subsurface scattering transmitteance intensity. See also [member subsurf_scatter_texture]. Ignored if [member subsurf_scatter_skin_mode] is [code]true[/code]. */
subsurf_scatter_transmittance_texture: Texture2D;

/**
 * Filter flags for the texture. See [enum TextureFilter] for options.
 *
 * **Note:** [member heightmap_texture] is always sampled with linear filtering, even if nearest-neighbor filtering is selected here. This is to ensure the heightmap effect looks as intended. If you need sharper height transitions between pixels, resize the heightmap texture in an image editor with nearest-neighbor filtering.
 *
*/
texture_filter: int;

/** Repeat flags for the texture. See [enum TextureFilter] for options. */
texture_repeat: boolean;

/** The material's transparency mode. Some transparency modes will disable shadow casting. Any transparency mode other than [constant TRANSPARENCY_DISABLED] has a greater performance impact compared to opaque rendering. See also [member blend_mode]. */
transparency: int;

/** If [code]true[/code], enables parts of the shader required for [GPUParticles3D] trails to function. This also requires using a mesh with appropriate skinning, such as [RibbonTrailMesh] or [TubeTrailMesh]. Enabling this feature outside of materials used in [GPUParticles3D] meshes will break material rendering. */
use_particle_trails: boolean;

/**
 * If `true`, render point size can be changed.
 *
 * **Note:** This is only effective for objects whose geometry is point-based rather than triangle-based. See also [member point_size].
 *
*/
use_point_size: boolean;

/** How much to offset the [code]UV[/code] coordinates. This amount will be added to [code]UV[/code] in the vertex function. This can be used to offset a texture. The Z component is used when [member uv1_triplanar] is enabled, but it is not used anywhere else. */
uv1_offset: Vector3;

/** How much to scale the [code]UV[/code] coordinates. This is multiplied by [code]UV[/code] in the vertex function. The Z component is used when [member uv1_triplanar] is enabled, but it is not used anywhere else. */
uv1_scale: Vector3;

/** If [code]true[/code], instead of using [code]UV[/code] textures will use a triplanar texture lookup to determine how to apply textures. Triplanar uses the orientation of the object's surface to blend between texture coordinates. It reads from the source texture 3 times, once for each axis and then blends between the results based on how closely the pixel aligns with each axis. This is often used for natural features to get a realistic blend of materials. Because triplanar texturing requires many more texture reads per-pixel it is much slower than normal UV texturing. Additionally, because it is blending the texture between the three axes, it is unsuitable when you are trying to achieve crisp texturing. */
uv1_triplanar: boolean;

/**
 * A lower number blends the texture more softly while a higher number blends the texture more sharply.
 *
 * **Note:** [member uv1_triplanar_sharpness] is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.
 *
*/
uv1_triplanar_sharpness: float;

/** If [code]true[/code], triplanar mapping for [code]UV[/code] is calculated in world space rather than object local space. See also [member uv1_triplanar]. */
uv1_world_triplanar: boolean;

/** How much to offset the [code]UV2[/code] coordinates. This amount will be added to [code]UV2[/code] in the vertex function. This can be used to offset a texture. The Z component is used when [member uv2_triplanar] is enabled, but it is not used anywhere else. */
uv2_offset: Vector3;

/** How much to scale the [code]UV2[/code] coordinates. This is multiplied by [code]UV2[/code] in the vertex function. The Z component is used when [member uv2_triplanar] is enabled, but it is not used anywhere else. */
uv2_scale: Vector3;

/** If [code]true[/code], instead of using [code]UV2[/code] textures will use a triplanar texture lookup to determine how to apply textures. Triplanar uses the orientation of the object's surface to blend between texture coordinates. It reads from the source texture 3 times, once for each axis and then blends between the results based on how closely the pixel aligns with each axis. This is often used for natural features to get a realistic blend of materials. Because triplanar texturing requires many more texture reads per-pixel it is much slower than normal UV texturing. Additionally, because it is blending the texture between the three axes, it is unsuitable when you are trying to achieve crisp texturing. */
uv2_triplanar: boolean;

/**
 * A lower number blends the texture more softly while a higher number blends the texture more sharply.
 *
 * **Note:** [member uv2_triplanar_sharpness] is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.
 *
*/
uv2_triplanar_sharpness: float;

/** If [code]true[/code], triplanar mapping for [code]UV2[/code] is calculated in world space rather than object local space. See also [member uv2_triplanar]. */
uv2_world_triplanar: boolean;

/**
 * If `true`, vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. If `false`, vertex colors are considered to be stored in linear color space and are rendered as-is. See also [member albedo_texture_force_srgb].
 *
 * **Note:** Only effective when using the Forward+ and Mobile rendering methods, not Compatibility.
 *
*/
vertex_color_is_srgb: boolean;

/** If [code]true[/code], the vertex color is used as albedo color. */
vertex_color_use_as_albedo: boolean;

/** Returns [code]true[/code], if the specified [enum Feature] is enabled. */
get_feature(): boolean;

/** Returns [code]true[/code], if the specified flag is enabled. See [enum Flags] enumerator for options. */
get_flag(): boolean;

/** Returns the [Texture2D] associated with the specified [enum TextureParam]. */
get_texture(): Texture2D;

/** If [code]true[/code], enables the specified [enum Feature]. Many features that are available in [BaseMaterial3D]s need to be enabled before use. This way the cost for using the feature is only incurred when specified. Features can also be enabled by setting the corresponding member to [code]true[/code]. */
set_feature(): void;

/** If [code]true[/code], enables the specified flag. Flags are optional behavior that can be turned on and off. Only one flag can be enabled at a time with this function, the flag enumerators cannot be bit-masked together to enable or disable multiple flags at once. Flags can also be enabled by setting the corresponding member to [code]true[/code]. See [enum Flags] enumerator for options. */
set_flag(): void;

/** Sets the texture for the slot specified by [param param]. See [enum TextureParam] for available slots. */
set_texture(): void;

  connect<T extends SignalsOf<BaseMaterial3D>>(signal: T, method: SignalFunction<BaseMaterial3D[T]>): number;



/**
 * Texture specifying per-pixel color.
 *
*/
static TEXTURE_ALBEDO: any;

/**
 * Texture specifying per-pixel metallic value.
 *
*/
static TEXTURE_METALLIC: any;

/**
 * Texture specifying per-pixel roughness value.
 *
*/
static TEXTURE_ROUGHNESS: any;

/**
 * Texture specifying per-pixel emission color.
 *
*/
static TEXTURE_EMISSION: any;

/**
 * Texture specifying per-pixel normal vector.
 *
*/
static TEXTURE_NORMAL: any;

/**
 * Texture specifying per-pixel rim value.
 *
*/
static TEXTURE_RIM: any;

/**
 * Texture specifying per-pixel clearcoat value.
 *
*/
static TEXTURE_CLEARCOAT: any;

/**
 * Texture specifying per-pixel flowmap direction for use with [member anisotropy].
 *
*/
static TEXTURE_FLOWMAP: any;

/**
 * Texture specifying per-pixel ambient occlusion value.
 *
*/
static TEXTURE_AMBIENT_OCCLUSION: any;

/**
 * Texture specifying per-pixel height.
 *
*/
static TEXTURE_HEIGHTMAP: any;

/**
 * Texture specifying per-pixel subsurface scattering.
 *
*/
static TEXTURE_SUBSURFACE_SCATTERING: any;

/**
 * Texture specifying per-pixel transmittance for subsurface scattering.
 *
*/
static TEXTURE_SUBSURFACE_TRANSMITTANCE: any;

/**
 * Texture specifying per-pixel backlight color.
 *
*/
static TEXTURE_BACKLIGHT: any;

/**
 * Texture specifying per-pixel refraction strength.
 *
*/
static TEXTURE_REFRACTION: any;

/**
 * Texture specifying per-pixel detail mask blending value.
 *
*/
static TEXTURE_DETAIL_MASK: any;

/**
 * Texture specifying per-pixel detail color.
 *
*/
static TEXTURE_DETAIL_ALBEDO: any;

/**
 * Texture specifying per-pixel detail normal.
 *
*/
static TEXTURE_DETAIL_NORMAL: any;

/**
 * Texture holding ambient occlusion, roughness, and metallic.
 *
*/
static TEXTURE_ORM: any;

/**
 * Represents the size of the [enum TextureParam] enum.
 *
*/
static TEXTURE_MAX: any;

/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static TEXTURE_FILTER_NEAREST: any;

/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static TEXTURE_FILTER_LINEAR: any;

/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 *
*/
static TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: any;

/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 *
*/
static TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: any;

/**
 * The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
*/
static TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC: any;

/**
 * The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
*/
static TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC: any;

/**
 * Represents the size of the [enum TextureFilter] enum.
 *
*/
static TEXTURE_FILTER_MAX: any;

/**
 * Use `UV` with the detail texture.
 *
*/
static DETAIL_UV_1: any;

/**
 * Use `UV2` with the detail texture.
 *
*/
static DETAIL_UV_2: any;

/**
 * The material will not use transparency. This is the fastest to render.
 *
*/
static TRANSPARENCY_DISABLED: any;

/**
 * The material will use the texture's alpha values for transparency. This is the slowest to render, and disables shadow casting.
 *
*/
static TRANSPARENCY_ALPHA: any;

/**
 * The material will cut off all values below a threshold, the rest will remain opaque. The opaque portions will be rendered in the depth prepass. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows.
 *
*/
static TRANSPARENCY_ALPHA_SCISSOR: any;

/**
 * The material will cut off all values below a spatially-deterministic threshold, the rest will remain opaque. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows. Alpha hashing is suited for hair rendering.
 *
*/
static TRANSPARENCY_ALPHA_HASH: any;

/**
 * The material will use the texture's alpha value for transparency, but will discard fragments with an alpha of less than 0.99 during the depth prepass and fragments with an alpha less than 0.1 during the shadow pass. This also supports casting shadows.
 *
*/
static TRANSPARENCY_ALPHA_DEPTH_PRE_PASS: any;

/**
 * Represents the size of the [enum Transparency] enum.
 *
*/
static TRANSPARENCY_MAX: any;

/**
 * The object will not receive shadows. This is the fastest to render, but it disables all interactions with lights.
 *
*/
static SHADING_MODE_UNSHADED: any;

/**
 * The object will be shaded per pixel. Useful for realistic shading effects.
 *
*/
static SHADING_MODE_PER_PIXEL: any;

/**
 * The object will be shaded per vertex. Useful when you want cheaper shaders and do not care about visual quality. Not implemented yet (this mode will act like [constant SHADING_MODE_PER_PIXEL]).
 *
*/
static SHADING_MODE_PER_VERTEX: any;

/**
 * Represents the size of the [enum ShadingMode] enum.
 *
*/
static SHADING_MODE_MAX: any;

/**
 * Constant for setting [member emission_enabled].
 *
*/
static FEATURE_EMISSION: any;

/**
 * Constant for setting [member normal_enabled].
 *
*/
static FEATURE_NORMAL_MAPPING: any;

/**
 * Constant for setting [member rim_enabled].
 *
*/
static FEATURE_RIM: any;

/**
 * Constant for setting [member clearcoat_enabled].
 *
*/
static FEATURE_CLEARCOAT: any;

/**
 * Constant for setting [member anisotropy_enabled].
 *
*/
static FEATURE_ANISOTROPY: any;

/**
 * Constant for setting [member ao_enabled].
 *
*/
static FEATURE_AMBIENT_OCCLUSION: any;

/**
 * Constant for setting [member heightmap_enabled].
 *
*/
static FEATURE_HEIGHT_MAPPING: any;

/**
 * Constant for setting [member subsurf_scatter_enabled].
 *
*/
static FEATURE_SUBSURFACE_SCATTERING: any;

/**
 * Constant for setting [member subsurf_scatter_transmittance_enabled].
 *
*/
static FEATURE_SUBSURFACE_TRANSMITTANCE: any;

/**
 * Constant for setting [member backlight_enabled].
 *
*/
static FEATURE_BACKLIGHT: any;

/**
 * Constant for setting [member refraction_enabled].
 *
*/
static FEATURE_REFRACTION: any;

/**
 * Constant for setting [member detail_enabled].
 *
*/
static FEATURE_DETAIL: any;

/**
 * Represents the size of the [enum Feature] enum.
 *
*/
static FEATURE_MAX: any;

/**
 * Default blend mode. The color of the object is blended over the background based on the object's alpha value.
 *
*/
static BLEND_MODE_MIX: any;

/**
 * The color of the object is added to the background.
 *
*/
static BLEND_MODE_ADD: any;

/**
 * The color of the object is subtracted from the background.
 *
*/
static BLEND_MODE_SUB: any;

/**
 * The color of the object is multiplied by the background.
 *
*/
static BLEND_MODE_MUL: any;

/**
 * Disables Alpha AntiAliasing for the material.
 *
*/
static ALPHA_ANTIALIASING_OFF: any;

/**
 * Enables AlphaToCoverage. Alpha values in the material are passed to the AntiAliasing sample mask.
 *
*/
static ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE: any;

/**
 * Enables AlphaToCoverage and forces all non-zero alpha values to `1`. Alpha values in the material are passed to the AntiAliasing sample mask.
 *
*/
static ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE: any;

/**
 * Default depth draw mode. Depth is drawn only for opaque objects during the opaque prepass (if any) and during the opaque pass.
 *
*/
static DEPTH_DRAW_OPAQUE_ONLY: any;

/**
 * Objects will write to depth during the opaque and the transparent passes. Transparent objects that are close to the camera may obscure other transparent objects behind them.
 *
 * **Note:** This does not influence whether transparent objects are included in the depth prepass or not. For that, see [enum Transparency].
 *
*/
static DEPTH_DRAW_ALWAYS: any;

/**
 * Objects will not write their depth to the depth buffer, even during the depth prepass (if enabled).
 *
*/
static DEPTH_DRAW_DISABLED: any;

/**
 * Default cull mode. The back of the object is culled when not visible. Back face triangles will be culled when facing the camera. This results in only the front side of triangles being drawn. For closed-surface meshes, this means that only the exterior of the mesh will be visible.
 *
*/
static CULL_BACK: any;

/**
 * Front face triangles will be culled when facing the camera. This results in only the back side of triangles being drawn. For closed-surface meshes, this means that the interior of the mesh will be drawn instead of the exterior.
 *
*/
static CULL_FRONT: any;

/**
 * No face culling is performed; both the front face and back face will be visible.
 *
*/
static CULL_DISABLED: any;

/**
 * Disables the depth test, so this object is drawn on top of all others drawn before it. This puts the object in the transparent draw pass where it is sorted based on distance to camera. Objects drawn after it in the draw order may cover it. This also disables writing to depth.
 *
*/
static FLAG_DISABLE_DEPTH_TEST: any;

/**
 * Set `ALBEDO` to the per-vertex color specified in the mesh.
 *
*/
static FLAG_ALBEDO_FROM_VERTEX_COLOR: any;

/**
 * Vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. See also [member vertex_color_is_srgb].
 *
 * **Note:** Only effective when using the Forward+ and Mobile rendering methods.
 *
*/
static FLAG_SRGB_VERTEX_COLOR: any;

/**
 * Uses point size to alter the size of primitive points. Also changes the albedo texture lookup to use `POINT_COORD` instead of `UV`.
 *
*/
static FLAG_USE_POINT_SIZE: any;

/**
 * Object is scaled by depth so that it always appears the same size on screen.
 *
*/
static FLAG_FIXED_SIZE: any;

/**
 * Shader will keep the scale set for the mesh. Otherwise the scale is lost when billboarding. Only applies when [member billboard_mode] is [constant BILLBOARD_ENABLED].
 *
*/
static FLAG_BILLBOARD_KEEP_SCALE: any;

/**
 * Use triplanar texture lookup for all texture lookups that would normally use `UV`.
 *
*/
static FLAG_UV1_USE_TRIPLANAR: any;

/**
 * Use triplanar texture lookup for all texture lookups that would normally use `UV2`.
 *
*/
static FLAG_UV2_USE_TRIPLANAR: any;

/**
 * Use triplanar texture lookup for all texture lookups that would normally use `UV`.
 *
*/
static FLAG_UV1_USE_WORLD_TRIPLANAR: any;

/**
 * Use triplanar texture lookup for all texture lookups that would normally use `UV2`.
 *
*/
static FLAG_UV2_USE_WORLD_TRIPLANAR: any;

/**
 * Use `UV2` coordinates to look up from the [member ao_texture].
 *
*/
static FLAG_AO_ON_UV2: any;

/**
 * Use `UV2` coordinates to look up from the [member emission_texture].
 *
*/
static FLAG_EMISSION_ON_UV2: any;

/**
 * Forces the shader to convert albedo from sRGB space to linear space. See also [member albedo_texture_force_srgb].
 *
*/
static FLAG_ALBEDO_TEXTURE_FORCE_SRGB: any;

/**
 * Disables receiving shadows from other objects.
 *
*/
static FLAG_DONT_RECEIVE_SHADOWS: any;

/**
 * Disables receiving ambient light.
 *
*/
static FLAG_DISABLE_AMBIENT_LIGHT: any;

/**
 * Enables the shadow to opacity feature.
 *
*/
static FLAG_USE_SHADOW_TO_OPACITY: any;

/**
 * Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture.
 *
*/
static FLAG_USE_TEXTURE_REPEAT: any;

/**
 * Invert values read from a depth texture to convert them to height values (heightmap).
 *
*/
static FLAG_INVERT_HEIGHTMAP: any;

/**
 * Enables the skin mode for subsurface scattering which is used to improve the look of subsurface scattering when used for human skin.
 *
*/
static FLAG_SUBSURFACE_MODE_SKIN: any;

/**
 * Enables parts of the shader required for [GPUParticles3D] trails to function. This also requires using a mesh with appropriate skinning, such as [RibbonTrailMesh] or [TubeTrailMesh]. Enabling this feature outside of materials used in [GPUParticles3D] meshes will break material rendering.
 *
*/
static FLAG_PARTICLE_TRAILS_MODE: any;

/**
 * Enables multichannel signed distance field rendering shader.
 *
*/
static FLAG_ALBEDO_TEXTURE_MSDF: any;

/**
 * Disables receiving depth-based or volumetric fog.
 *
*/
static FLAG_DISABLE_FOG: any;

/**
 * Represents the size of the [enum Flags] enum.
 *
*/
static FLAG_MAX: any;

/**
 * Default diffuse scattering algorithm.
 *
*/
static DIFFUSE_BURLEY: any;

/**
 * Diffuse scattering ignores roughness.
 *
*/
static DIFFUSE_LAMBERT: any;

/**
 * Extends Lambert to cover more than 90 degrees when roughness increases.
 *
*/
static DIFFUSE_LAMBERT_WRAP: any;

/**
 * Uses a hard cut for lighting, with smoothing affected by roughness.
 *
*/
static DIFFUSE_TOON: any;

/**
 * Default specular blob.
 *
*/
static SPECULAR_SCHLICK_GGX: any;

/**
 * Toon blob which changes size based on roughness.
 *
*/
static SPECULAR_TOON: any;

/**
 * No specular blob. This is slightly faster to render than other specular modes.
 *
*/
static SPECULAR_DISABLED: any;

/**
 * Billboard mode is disabled.
 *
*/
static BILLBOARD_DISABLED: any;

/**
 * The object's Z axis will always face the camera.
 *
*/
static BILLBOARD_ENABLED: any;

/**
 * The object's X axis will always face the camera.
 *
*/
static BILLBOARD_FIXED_Y: any;

/**
 * Used for particle systems when assigned to [GPUParticles3D] and [CPUParticles3D] nodes (flipbook animation). Enables `particles_anim_*` properties.
 *
 * The [member ParticleProcessMaterial.anim_speed_min] or [member CPUParticles3D.anim_speed_min] should also be set to a value bigger than zero for the animation to play.
 *
*/
static BILLBOARD_PARTICLES: any;

/**
 * Used to read from the red channel of a texture.
 *
*/
static TEXTURE_CHANNEL_RED: any;

/**
 * Used to read from the green channel of a texture.
 *
*/
static TEXTURE_CHANNEL_GREEN: any;

/**
 * Used to read from the blue channel of a texture.
 *
*/
static TEXTURE_CHANNEL_BLUE: any;

/**
 * Used to read from the alpha channel of a texture.
 *
*/
static TEXTURE_CHANNEL_ALPHA: any;

/**
 * Used to read from the linear (non-perceptual) average of the red, green and blue channels of a texture.
 *
*/
static TEXTURE_CHANNEL_GRAYSCALE: any;

/**
 * Adds the emission color to the color from the emission texture.
 *
*/
static EMISSION_OP_ADD: any;

/**
 * Multiplies the emission color by the color from the emission texture.
 *
*/
static EMISSION_OP_MULTIPLY: any;

/**
 * Do not use distance fade.
 *
*/
static DISTANCE_FADE_DISABLED: any;

/**
 * Smoothly fades the object out based on each pixel's distance from the camera using the alpha channel.
 *
*/
static DISTANCE_FADE_PIXEL_ALPHA: any;

/**
 * Smoothly fades the object out based on each pixel's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [constant DISTANCE_FADE_PIXEL_ALPHA].
 *
*/
static DISTANCE_FADE_PIXEL_DITHER: any;

/**
 * Smoothly fades the object out based on the object's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [constant DISTANCE_FADE_PIXEL_ALPHA] and [constant DISTANCE_FADE_PIXEL_DITHER].
 *
*/
static DISTANCE_FADE_OBJECT_DITHER: any;



}

