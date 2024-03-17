
/**
 * A [Material] resource that can be used by [FogVolume]s to draw volumetric effects.
 *
 * If you need more advanced effects, use a custom [url=$DOCS_URL/tutorials/shaders/shader_reference/fog_shader.html]fog shader[/url].
 *
*/
declare class FogMaterial extends Material  {

  
/**
 * A [Material] resource that can be used by [FogVolume]s to draw volumetric effects.
 *
 * If you need more advanced effects, use a custom [url=$DOCS_URL/tutorials/shaders/shader_reference/fog_shader.html]fog shader[/url].
 *
*/
  new(): FogMaterial; 
  static "new"(): FogMaterial 


/** The single-scattering [Color] of the [FogVolume]. Internally, [member albedo] is converted into single-scattering, which is additively blended with other [FogVolume]s and the [member Environment.volumetric_fog_albedo]. */
albedo: Color;

/**
 * The density of the [FogVolume]. Denser objects are more opaque, but may suffer from under-sampling artifacts that look like stripes. Negative values can be used to subtract fog from other [FogVolume]s or global volumetric fog.
 *
 * **Note:** Due to limited precision, [member density] values between `-0.001` and `0.001` (exclusive) act like `0.0`. This does not apply to [member Environment.volumetric_fog_density].
 *
*/
density: float;

/** The 3D texture that is used to scale the [member density] of the [FogVolume]. This can be used to vary fog density within the [FogVolume] with any kind of static pattern. For animated effects, consider using a custom [url=$DOCS_URL/tutorials/shaders/shader_reference/fog_shader.html]fog shader[/url]. */
density_texture: Texture3D;

/** The hardness of the edges of the [FogVolume]. A higher value will result in softer edges, while a lower value will result in harder edges. */
edge_fade: float;

/** The [Color] of the light emitted by the [FogVolume]. Emitted light will not cast light or shadows on other objects, but can be useful for modulating the [Color] of the [FogVolume] independently from light sources. */
emission: Color;

/** The rate by which the height-based fog decreases in density as height increases in world space. A high falloff will result in a sharp transition, while a low falloff will result in a smoother transition. A value of [code]0.0[/code] results in uniform-density fog. The height threshold is determined by the height of the associated [FogVolume]. */
height_falloff: float;



  connect<T extends SignalsOf<FogMaterial>>(signal: T, method: SignalFunction<FogMaterial[T]>): number;






}

