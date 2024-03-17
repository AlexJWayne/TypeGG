
/**
 * [CanvasTexture] is an alternative to [ImageTexture] for 2D rendering. It allows using normal maps and specular maps in any node that inherits from [CanvasItem]. [CanvasTexture] also allows overriding the texture's filter and repeat mode independently of the node's properties (or the project settings).
 *
 * **Note:** [CanvasTexture] cannot be used in 3D rendering. For physically-based materials in 3D, use [BaseMaterial3D] instead.
 *
*/
declare class CanvasTexture extends Texture2D  {

  
/**
 * [CanvasTexture] is an alternative to [ImageTexture] for 2D rendering. It allows using normal maps and specular maps in any node that inherits from [CanvasItem]. [CanvasTexture] also allows overriding the texture's filter and repeat mode independently of the node's properties (or the project settings).
 *
 * **Note:** [CanvasTexture] cannot be used in 3D rendering. For physically-based materials in 3D, use [BaseMaterial3D] instead.
 *
*/
  new(): CanvasTexture; 
  static "new"(): CanvasTexture 


/** The diffuse (color) texture to use. This is the main texture you want to set in most cases. */
diffuse_texture: Texture2D;

/**
 * The normal map texture to use. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture].
 *
 * **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.
 *
*/
normal_texture: Texture2D;


/** The multiplier for specular reflection colors. The [Light2D]'s color is also taken into account when determining the reflection color. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
specular_color: Color;

/** The specular exponent for [Light2D] specular reflections. Higher values result in a more glossy/"wet" look, with reflections becoming more localized and less visible overall. The default value of [code]1.0[/code] disables specular reflections entirely. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
specular_shininess: float;

/** The specular map to use for [Light2D] specular reflections. This should be a grayscale or colored texture, with brighter areas resulting in a higher [member specular_shininess] value. Using a colored [member specular_texture] allows controlling specular shininess on a per-channel basis. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
specular_texture: Texture2D;

/** The texture filtering mode to use when drawing this [CanvasTexture]. */
texture_filter: int;

/** The texture repeat mode to use when drawing this [CanvasTexture]. */
texture_repeat: int;



  connect<T extends SignalsOf<CanvasTexture>>(signal: T, method: SignalFunction<CanvasTexture[T]>): number;






}

