
/**
 * This object is used by [RenderingDevice].
 *
*/
declare class RDTextureFormat extends RefCounted  {

  
/**
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDTextureFormat; 
  static "new"(): RDTextureFormat 


/** The number of layers in the texture. Only relevant for 2D texture arrays. */
array_layers: int;

/** The texture's depth (in pixels). This is always [code]1[/code] for 2D textures. */
depth: int;

/** The texture's pixel data format. */
format: int;

/** The texture's height (in pixels). */
height: int;

/** The number of mipmaps available in the texture. */
mipmaps: int;

/** The number of samples used when sampling the texture. */
samples: int;

/** The texture type. */
texture_type: int;

/** The texture's usage bits, which determine what can be done using the texture. */
usage_bits: int;

/** The texture's width (in pixels). */
width: int;

/** No documentation provided. */
add_shareable_format(): void;

/** No documentation provided. */
remove_shareable_format(): void;

  connect<T extends SignalsOf<RDTextureFormat>>(signal: T, method: SignalFunction<RDTextureFormat[T]>): number;






}

