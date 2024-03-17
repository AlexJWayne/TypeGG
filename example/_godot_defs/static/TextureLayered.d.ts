
/**
 * Base class for [ImageTextureLayered] and [CompressedTextureLayered]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also [Texture3D].
 *
 * Data is set on a per-layer basis. For [Texture2DArray]s, the layer specifies the array layer.
 *
 * All images need to have the same width, height and number of mipmap levels.
 *
 * A [TextureLayered] can be loaded with [method ResourceLoader.load].
 *
 * Internally, Godot maps these files to their respective counterparts in the target rendering driver (Vulkan, OpenGL3).
 *
*/
declare class TextureLayered extends Texture  {

  
/**
 * Base class for [ImageTextureLayered] and [CompressedTextureLayered]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. See also [Texture3D].
 *
 * Data is set on a per-layer basis. For [Texture2DArray]s, the layer specifies the array layer.
 *
 * All images need to have the same width, height and number of mipmap levels.
 *
 * A [TextureLayered] can be loaded with [method ResourceLoader.load].
 *
 * Internally, Godot maps these files to their respective counterparts in the target rendering driver (Vulkan, OpenGL3).
 *
*/
  new(): TextureLayered; 
  static "new"(): TextureLayered 



/** Called when the [TextureLayered]'s format is queried. */
protected _get_format(): int;

/** Called when the [TextureLayered]'s height is queried. */
protected _get_height(): int;

/** Called when the data for a layer in the [TextureLayered] is queried. */
protected _get_layer_data(): Image;

/** Called when the layers' type in the [TextureLayered] is queried. */
protected _get_layered_type(): int;

/** Called when the number of layers in the [TextureLayered] is queried. */
protected _get_layers(): int;

/** Called when the [TextureLayered]'s width queried. */
protected _get_width(): int;

/** Called when the presence of mipmaps in the [TextureLayered] is queried. */
protected _has_mipmaps(): boolean;

/** Returns the current format being used by this texture. See [enum Image.Format] for details. */
get_format(): int;

/** Returns the height of the texture in pixels. Height is typically represented by the Y axis. */
get_height(): int;

/** Returns an [Image] resource with the data from specified [param layer]. */
get_layer_data(): Image;

/** Returns the [TextureLayered]'s type. The type determines how the data is accessed, with cubemaps having special types. */
get_layered_type(): int;

/** Returns the number of referenced [Image]s. */
get_layers(): int;

/** Returns the width of the texture in pixels. Width is typically represented by the X axis. */
get_width(): int;

/** Returns [code]true[/code] if the layers have generated mipmaps. */
has_mipmaps(): boolean;

  connect<T extends SignalsOf<TextureLayered>>(signal: T, method: SignalFunction<TextureLayered[T]>): number;



/**
 * Texture is a generic [Texture2DArray].
 *
*/
static LAYERED_TYPE_2D_ARRAY: any;

/**
 * Texture is a [Cubemap], with each side in its own layer (6 in total).
 *
*/
static LAYERED_TYPE_CUBEMAP: any;

/**
 * Texture is a [CubemapArray], with each cubemap being made of 6 layers.
 *
*/
static LAYERED_TYPE_CUBEMAP_ARRAY: any;



}

