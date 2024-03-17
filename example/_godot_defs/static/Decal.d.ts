
/**
 * [Decal]s are used to project a texture onto a [Mesh] in the scene. Use Decals to add detail to a scene without affecting the underlying [Mesh]. They are often used to add weathering to building, add dirt or mud to the ground, or add variety to props. Decals can be moved at any time, making them suitable for things like blob shadows or laser sight dots.
 *
 * They are made of an [AABB] and a group of [Texture2D]s specifying [Color], normal, ORM (ambient occlusion, roughness, metallic), and emission. Decals are projected within their [AABB] so altering the orientation of the Decal affects the direction in which they are projected. By default, Decals are projected down (i.e. from positive Y to negative Y).
 *
 * The [Texture2D]s associated with the Decal are automatically stored in a texture atlas which is used for drawing the decals so all decals can be drawn at once. Godot uses clustered decals, meaning they are stored in cluster data and drawn when the mesh is drawn, they are not drawn as a post-processing effect after.
 *
 * **Note:** Decals cannot affect an underlying material's transparency, regardless of its transparency mode (alpha blend, alpha scissor, alpha hash, opaque pre-pass). This means translucent or transparent areas of a material will remain translucent or transparent even if an opaque decal is applied on them.
 *
 * **Note:** Decals are only supported in the Forward+ and Mobile rendering methods, not Compatibility. When using the Mobile rendering method, only 8 decals can be displayed on each mesh resource. Attempting to display more than 8 decals on a single mesh resource will result in decals flickering in and out as the camera moves.
 *
 * **Note:** When using the Mobile rendering method, decals will only correctly affect meshes whose visibility AABB intersects with the decal's AABB. If using a shader to deform the mesh in a way that makes it go outside its AABB, [member GeometryInstance3D.extra_cull_margin] must be increased on the mesh. Otherwise, the decal may not be visible on the mesh.
 *
*/
declare class Decal extends VisualInstance3D  {

  
/**
 * [Decal]s are used to project a texture onto a [Mesh] in the scene. Use Decals to add detail to a scene without affecting the underlying [Mesh]. They are often used to add weathering to building, add dirt or mud to the ground, or add variety to props. Decals can be moved at any time, making them suitable for things like blob shadows or laser sight dots.
 *
 * They are made of an [AABB] and a group of [Texture2D]s specifying [Color], normal, ORM (ambient occlusion, roughness, metallic), and emission. Decals are projected within their [AABB] so altering the orientation of the Decal affects the direction in which they are projected. By default, Decals are projected down (i.e. from positive Y to negative Y).
 *
 * The [Texture2D]s associated with the Decal are automatically stored in a texture atlas which is used for drawing the decals so all decals can be drawn at once. Godot uses clustered decals, meaning they are stored in cluster data and drawn when the mesh is drawn, they are not drawn as a post-processing effect after.
 *
 * **Note:** Decals cannot affect an underlying material's transparency, regardless of its transparency mode (alpha blend, alpha scissor, alpha hash, opaque pre-pass). This means translucent or transparent areas of a material will remain translucent or transparent even if an opaque decal is applied on them.
 *
 * **Note:** Decals are only supported in the Forward+ and Mobile rendering methods, not Compatibility. When using the Mobile rendering method, only 8 decals can be displayed on each mesh resource. Attempting to display more than 8 decals on a single mesh resource will result in decals flickering in and out as the camera moves.
 *
 * **Note:** When using the Mobile rendering method, decals will only correctly affect meshes whose visibility AABB intersects with the decal's AABB. If using a shader to deform the mesh in a way that makes it go outside its AABB, [member GeometryInstance3D.extra_cull_margin] must be increased on the mesh. Otherwise, the decal may not be visible on the mesh.
 *
*/
  new(): Decal; 
  static "new"(): Decal 


/** Blends the albedo [Color] of the decal with albedo [Color] of the underlying mesh. This can be set to [code]0.0[/code] to create a decal that only affects normal or ORM. In this case, an albedo texture is still required as its alpha channel will determine where the normal and ORM will be overridden. See also [member modulate]. */
albedo_mix: float;

/** Specifies which [member VisualInstance3D.layers] this decal will project on. By default, Decals affect all layers. This is used so you can specify which types of objects receive the Decal and which do not. This is especially useful so you can ensure that dynamic objects don't accidentally receive a Decal intended for the terrain under them. */
cull_mask: int;

/** The distance from the camera at which the Decal begins to fade away (in 3D units). */
distance_fade_begin: float;

/** If [code]true[/code], decals will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. The Decal will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active Decals in a scene and thus improve performance. */
distance_fade_enabled: boolean;

/** The distance over which the Decal fades (in 3D units). The Decal becomes slowly more transparent over this distance and is completely invisible at the end. Higher values result in a smoother fade-out transition, which is more suited when the camera moves fast. */
distance_fade_length: float;

/** Energy multiplier for the emission texture. This will make the decal emit light at a higher or lower intensity, independently of the albedo color. See also [member modulate]. */
emission_energy: float;

/** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to [code]0.0[/code]). See also [member upper_fade]. */
lower_fade: float;

/** Changes the [Color] of the Decal by multiplying the albedo and emission colors with this value. The alpha component is only taken into account when multiplying the albedo color, not the emission color. See also [member emission_energy] and [member albedo_mix] to change the emission and albedo intensity independently of each other. */
modulate: Color;

/**
 * Fades the Decal if the angle between the Decal's [AABB] and the target surface becomes too large. A value of `0` projects the Decal regardless of angle, a value of `1` limits the Decal to surfaces that are nearly perpendicular.
 *
 * **Note:** Setting [member normal_fade] to a value greater than `0.0` has a small performance cost due to the added normal angle computations.
 *
*/
normal_fade: float;

/**
 * Sets the size of the [AABB] used by the decal. All dimensions must be set to a value greater than zero (they will be clamped to `0.001` if this is not the case). The AABB goes from `-size/2` to `size/2`.
 *
 * **Note:** To improve culling efficiency of "hard surface" decals, set their [member upper_fade] and [member lower_fade] to `0.0` and set the Y component of the [member size] as low as possible. This will reduce the decals' AABB size without affecting their appearance.
 *
*/
size: Vector3;

/**
 * [Texture2D] with the base [Color] of the Decal. Either this or the [member texture_emission] must be set for the Decal to be visible. Use the alpha channel like a mask to smoothly blend the edges of the decal with the underlying object.
 *
 * **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for [Decal] textures is set globally with [member ProjectSettings.rendering/textures/decals/filter].
 *
*/
texture_albedo: Texture2D;

/**
 * [Texture2D] with the emission [Color] of the Decal. Either this or the [member texture_albedo] must be set for the Decal to be visible. Use the alpha channel like a mask to smoothly blend the edges of the decal with the underlying object.
 *
 * **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for [Decal] textures is set globally with [member ProjectSettings.rendering/textures/decals/filter].
 *
*/
texture_emission: Texture2D;

/**
 * [Texture2D] with the per-pixel normal map for the decal. Use this to add extra detail to decals.
 *
 * **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for [Decal] textures is set globally with [member ProjectSettings.rendering/textures/decals/filter].
 *
 * **Note:** Setting this texture alone will not result in a visible decal, as [member texture_albedo] must also be set. To create a normal-only decal, load an albedo texture into [member texture_albedo] and set [member albedo_mix] to `0.0`. The albedo texture's alpha channel will be used to determine where the underlying surface's normal map should be overridden (and its intensity).
 *
*/
texture_normal: Texture2D;

/**
 * [Texture2D] storing ambient occlusion, roughness, and metallic for the decal. Use this to add extra detail to decals.
 *
 * **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for [Decal] textures is set globally with [member ProjectSettings.rendering/textures/decals/filter].
 *
 * **Note:** Setting this texture alone will not result in a visible decal, as [member texture_albedo] must also be set. To create an ORM-only decal, load an albedo texture into [member texture_albedo] and set [member albedo_mix] to `0.0`. The albedo texture's alpha channel will be used to determine where the underlying surface's ORM map should be overridden (and its intensity).
 *
*/
texture_orm: Texture2D;

/** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to [code]0.0[/code]). See also [member lower_fade]. */
upper_fade: float;

/**
 * Returns the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.
 *
 * For example, instead of `albedo_tex = $Decal.get_texture(Decal.TEXTURE_ALBEDO)`, use `albedo_tex = $Decal.texture_albedo`.
 *
 * One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:
 *
 * @example 
 * 
 * 
 * for i in Decal.TEXTURE_MAX:
 *     $NewDecal.set_texture(i, $OldDecal.get_texture(i))
 * 
 * 
 * for (int i = 0; i < (int)Decal.DecalTexture.Max; i++)
 * {
 *     GetNode<Decal>("NewDecal").SetTexture(i, GetNode<Decal>("OldDecal").GetTexture(i));
 * }
 * 
 * @summary 
 * 
 *
*/
get_texture(): Texture2D;

/**
 * Sets the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.
 *
 * For example, instead of `$Decal.set_texture(Decal.TEXTURE_ALBEDO, albedo_tex)`, use `$Decal.texture_albedo = albedo_tex`.
 *
 * One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:
 *
 * @example 
 * 
 * 
 * for i in Decal.TEXTURE_MAX:
 *     $NewDecal.set_texture(i, $OldDecal.get_texture(i))
 * 
 * 
 * for (int i = 0; i < (int)Decal.DecalTexture.Max; i++)
 * {
 *     GetNode<Decal>("NewDecal").SetTexture(i, GetNode<Decal>("OldDecal").GetTexture(i));
 * }
 * 
 * @summary 
 * 
 *
*/
set_texture(): void;

  connect<T extends SignalsOf<Decal>>(signal: T, method: SignalFunction<Decal[T]>): number;



/**
 * [Texture2D] corresponding to [member texture_albedo].
 *
*/
static TEXTURE_ALBEDO: any;

/**
 * [Texture2D] corresponding to [member texture_normal].
 *
*/
static TEXTURE_NORMAL: any;

/**
 * [Texture2D] corresponding to [member texture_orm].
 *
*/
static TEXTURE_ORM: any;

/**
 * [Texture2D] corresponding to [member texture_emission].
 *
*/
static TEXTURE_EMISSION: any;

/**
 * Max size of [enum DecalTexture] enum.
 *
*/
static TEXTURE_MAX: any;



}

