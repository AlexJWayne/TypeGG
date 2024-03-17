
/**
 * Translated to `texture(cubemap, vec3)` in the shader language. Returns a color vector and alpha channel as scalar.
 *
*/
declare class VisualShaderNodeCubemap extends VisualShaderNode  {

  
/**
 * Translated to `texture(cubemap, vec3)` in the shader language. Returns a color vector and alpha channel as scalar.
 *
*/
  new(): VisualShaderNodeCubemap; 
  static "new"(): VisualShaderNodeCubemap 


/** The [Cubemap] texture to sample when using [constant SOURCE_TEXTURE] as [member source]. */
cube_map: Cubemap;

/** Defines which source should be used for the sampling. See [enum Source] for options. */
source: int;

/** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
texture_type: int;



  connect<T extends SignalsOf<VisualShaderNodeCubemap>>(signal: T, method: SignalFunction<VisualShaderNodeCubemap[T]>): number;



/**
 * Use the [Cubemap] set via [member cube_map]. If this is set to [member source], the `samplerCube` port is ignored.
 *
*/
static SOURCE_TEXTURE: any;

/**
 * Use the [Cubemap] sampler reference passed via the `samplerCube` port. If this is set to [member source], the [member cube_map] texture is ignored.
 *
*/
static SOURCE_PORT: any;

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

