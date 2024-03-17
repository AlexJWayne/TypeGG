
/**
 * Performs a lookup operation on the provided texture, with support for multiple texture sources to choose from.
 *
*/
declare class VisualShaderNodeTexture extends VisualShaderNode  {

  
/**
 * Performs a lookup operation on the provided texture, with support for multiple texture sources to choose from.
 *
*/
  new(): VisualShaderNodeTexture; 
  static "new"(): VisualShaderNodeTexture 


/** Determines the source for the lookup. See [enum Source] for options. */
source: int;

/** The source texture, if needed for the selected [member source]. */
texture: Texture2D;

/** Specifies the type of the texture if [member source] is set to [constant SOURCE_TEXTURE]. See [enum TextureType] for options. */
texture_type: int;



  connect<T extends SignalsOf<VisualShaderNodeTexture>>(signal: T, method: SignalFunction<VisualShaderNodeTexture[T]>): number;



/**
 * Use the texture given as an argument for this function.
 *
*/
static SOURCE_TEXTURE: any;

/**
 * Use the current viewport's texture as the source.
 *
*/
static SOURCE_SCREEN: any;

/**
 * Use the texture from this shader's texture built-in (e.g. a texture of a [Sprite2D]).
 *
*/
static SOURCE_2D_TEXTURE: any;

/**
 * Use the texture from this shader's normal map built-in.
 *
*/
static SOURCE_2D_NORMAL: any;

/**
 * Use the depth texture captured during the depth prepass. Only available when the depth prepass is used (i.e. in spatial shaders and in the forward_plus or gl_compatibility renderers).
 *
*/
static SOURCE_DEPTH: any;

/**
 * Use the texture provided in the input port for this function.
 *
*/
static SOURCE_PORT: any;

/**
 * Use the normal buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer).
 *
*/
static SOURCE_3D_NORMAL: any;

/**
 * Use the roughness buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer).
 *
*/
static SOURCE_ROUGHNESS: any;

/**
 * Represents the size of the [enum Source] enum.
 *
*/
static SOURCE_MAX: any;

/**
 * No hints are added to the uniform declaration.
 *
*/
static TYPE_DATA: any;

/**
 * Adds `hint_albedo` as hint to the uniform declaration for proper sRGB to linear conversion.
 *
*/
static TYPE_COLOR: any;

/**
 * Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map.
 *
*/
static TYPE_NORMAL_MAP: any;

/**
 * Represents the size of the [enum TextureType] enum.
 *
*/
static TYPE_MAX: any;



}

