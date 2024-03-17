
/**
 * Base class for [Texture2DArray], [Cubemap] and [CubemapArray]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also [Texture3D].
 *
*/
declare class ImageTextureLayered extends TextureLayered  {

  
/**
 * Base class for [Texture2DArray], [Cubemap] and [CubemapArray]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also [Texture3D].
 *
*/
  new(): ImageTextureLayered; 
  static "new"(): ImageTextureLayered 



/**
 * Creates an [ImageTextureLayered] from an array of [Image]s. See [method Image.create] for the expected data format. The first image decides the width, height, image format and mipmapping setting. The other images **must** have the same width, height, image format and mipmapping setting.
 *
 * Each [Image] represents one `layer`.
 *
*/
create_from_images(): int;

/**
 * Replaces the existing [Image] data at the given [param layer] with this new image.
 *
 * The given [Image] must have the same width, height, image format, and mipmapping flag as the rest of the referenced images.
 *
 * If the image format is unsupported, it will be decompressed and converted to a similar and supported [enum Image.Format].
 *
 * The update is immediate: it's synchronized with drawing.
 *
*/
update_layer(): void;

  connect<T extends SignalsOf<ImageTextureLayered>>(signal: T, method: SignalFunction<ImageTextureLayered[T]>): number;






}

