
/**
 * Base class for [CompressedTexture2DArray] and [CompressedTexture3D]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also [TextureLayered].
 *
*/
declare class CompressedTextureLayered extends TextureLayered  {

  
/**
 * Base class for [CompressedTexture2DArray] and [CompressedTexture3D]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also [TextureLayered].
 *
*/
  new(): CompressedTextureLayered; 
  static "new"(): CompressedTextureLayered 


/** The path the texture should be loaded from. */
load_path: string;

/** Loads the texture at [param path]. */
load(): int;

  connect<T extends SignalsOf<CompressedTextureLayered>>(signal: T, method: SignalFunction<CompressedTextureLayered[T]>): number;






}

