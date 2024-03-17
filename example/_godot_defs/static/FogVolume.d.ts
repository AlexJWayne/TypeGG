
/**
 * [FogVolume]s are used to add localized fog into the global volumetric fog effect. [FogVolume]s can also remove volumetric fog from specific areas if using a [FogMaterial] with a negative [member FogMaterial.density].
 *
 * Performance of [FogVolume]s is directly related to their relative size on the screen and the complexity of their attached [FogMaterial]. It is best to keep [FogVolume]s relatively small and simple where possible.
 *
 * **Note:** [FogVolume]s only have a visible effect if [member Environment.volumetric_fog_enabled] is `true`. If you don't want fog to be globally visible (but only within [FogVolume] nodes), set [member Environment.volumetric_fog_density] to `0.0`.
 *
*/
declare class FogVolume extends VisualInstance3D  {

  
/**
 * [FogVolume]s are used to add localized fog into the global volumetric fog effect. [FogVolume]s can also remove volumetric fog from specific areas if using a [FogMaterial] with a negative [member FogMaterial.density].
 *
 * Performance of [FogVolume]s is directly related to their relative size on the screen and the complexity of their attached [FogMaterial]. It is best to keep [FogVolume]s relatively small and simple where possible.
 *
 * **Note:** [FogVolume]s only have a visible effect if [member Environment.volumetric_fog_enabled] is `true`. If you don't want fog to be globally visible (but only within [FogVolume] nodes), set [member Environment.volumetric_fog_density] to `0.0`.
 *
*/
  new(): FogVolume; 
  static "new"(): FogVolume 


/** The [Material] used by the [FogVolume]. Can be either a built-in [FogMaterial] or a custom [ShaderMaterial]. */
material: Material;

/** The shape of the [FogVolume]. This can be set to either [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], [constant RenderingServer.FOG_VOLUME_SHAPE_BOX] or [constant RenderingServer.FOG_VOLUME_SHAPE_WORLD]. */
shape: int;

/**
 * The size of the [FogVolume] when [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER] or [constant RenderingServer.FOG_VOLUME_SHAPE_BOX].
 *
 * **Note:** Thin fog volumes may appear to flicker when the camera moves or rotates. This can be alleviated by increasing [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth] (at a performance cost) or by decreasing [member Environment.volumetric_fog_length] (at no performance cost, but at the cost of lower fog range). Alternatively, the [FogVolume] can be made thicker and use a lower density in the [member material].
 *
 * **Note:** If [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_CONE] or [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], the cone/cylinder will be adjusted to fit within the size. Non-uniform scaling of cone/cylinder shapes via the [member size] property is not supported, but you can scale the [FogVolume] node instead.
 *
*/
size: Vector3;



  connect<T extends SignalsOf<FogVolume>>(signal: T, method: SignalFunction<FogVolume[T]>): number;






}

