
/**
 * Performs a lookup operation on the texture provided as a uniform for the shader.
 *
*/
declare class VisualShaderNodeTextureParameter extends VisualShaderNodeParameter  {

  
/**
 * Performs a lookup operation on the texture provided as a uniform for the shader.
 *
*/
  new(): VisualShaderNodeTextureParameter; 
  static "new"(): VisualShaderNodeTextureParameter 


/** Sets the default color if no texture is assigned to the uniform. */
color_default: int;

/** Sets the texture filtering mode. See [enum TextureFilter] for options. */
texture_filter: int;

/** Sets the texture repeating mode. See [enum TextureRepeat] for options. */
texture_repeat: int;

/** Sets the texture source mode. Used for reading from the screen, depth, or normal_roughness texture. See [enum TextureSource] for options. */
texture_source: int;

/** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
texture_type: int;



  connect<T extends SignalsOf<VisualShaderNodeTextureParameter>>(signal: T, method: SignalFunction<VisualShaderNodeTextureParameter[T]>): number;



/**
 * No hints are added to the uniform declaration.
 *
*/
static TYPE_DATA: any;

/**
 * Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion.
 *
*/
static TYPE_COLOR: any;

/**
 * Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map.
 *
*/
static TYPE_NORMAL_MAP: any;

/**
 * Adds `hint_anisotropy` as hint to the uniform declaration to use for a flowmap.
 *
*/
static TYPE_ANISOTROPY: any;

/**
 * Represents the size of the [enum TextureType] enum.
 *
*/
static TYPE_MAX: any;

/**
 * Defaults to fully opaque white color.
 *
*/
static COLOR_DEFAULT_WHITE: any;

/**
 * Defaults to fully opaque black color.
 *
*/
static COLOR_DEFAULT_BLACK: any;

/**
 * Defaults to fully transparent black color.
 *
*/
static COLOR_DEFAULT_TRANSPARENT: any;

/**
 * Represents the size of the [enum ColorDefault] enum.
 *
*/
static COLOR_DEFAULT_MAX: any;

/**
 * Sample the texture using the filter determined by the node this shader is attached to.
 *
*/
static FILTER_DEFAULT: any;

/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static FILTER_NEAREST: any;

/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static FILTER_LINEAR: any;

/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 *
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 *
*/
static FILTER_NEAREST_MIPMAP: any;

/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 *
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 *
*/
static FILTER_LINEAR_MIPMAP: any;

/**
 * The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
 * **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_NEAREST_MIPMAP] is usually more appropriate in this case.
 *
*/
static FILTER_NEAREST_MIPMAP_ANISOTROPIC: any;

/**
 * The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
 * **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_LINEAR_MIPMAP] is usually more appropriate in this case.
 *
*/
static FILTER_LINEAR_MIPMAP_ANISOTROPIC: any;

/**
 * Represents the size of the [enum TextureFilter] enum.
 *
*/
static FILTER_MAX: any;

/**
 * Sample the texture using the repeat mode determined by the node this shader is attached to.
 *
*/
static REPEAT_DEFAULT: any;

/**
 * Texture will repeat normally.
 *
*/
static REPEAT_ENABLED: any;

/**
 * Texture will not repeat.
 *
*/
static REPEAT_DISABLED: any;

/**
 * Represents the size of the [enum TextureRepeat] enum.
 *
*/
static REPEAT_MAX: any;

/**
 * The texture source is not specified in the shader.
 *
*/
static SOURCE_NONE: any;

/**
 * The texture source is the screen texture which captures all opaque objects drawn this frame.
 *
*/
static SOURCE_SCREEN: any;

/**
 * The texture source is the depth texture from the depth prepass.
 *
*/
static SOURCE_DEPTH: any;

/**
 * The texture source is the normal-roughness buffer from the depth prepass.
 *
*/
static SOURCE_NORMAL_ROUGHNESS: any;

/**
 * Represents the size of the [enum TextureSource] enum.
 *
*/
static SOURCE_MAX: any;



}

