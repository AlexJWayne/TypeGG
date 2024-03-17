
/**
 * Base class for [ImageTexture3D] and [CompressedTexture3D]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. [Texture3D] is the base class for all 3-dimensional texture types. See also [TextureLayered].
 *
 * All images need to have the same width, height and number of mipmap levels.
 *
 * To create such a texture file yourself, reimport your image files using the Godot Editor import presets.
 *
*/
declare class Texture3D extends Texture  {

  
/**
 * Base class for [ImageTexture3D] and [CompressedTexture3D]. Cannot be used directly, but contains all the functions necessary for accessing the derived resource types. [Texture3D] is the base class for all 3-dimensional texture types. See also [TextureLayered].
 *
 * All images need to have the same width, height and number of mipmap levels.
 *
 * To create such a texture file yourself, reimport your image files using the Godot Editor import presets.
 *
*/
  new(): Texture3D; 
  static "new"(): Texture3D 



/** Called when the [Texture3D]'s data is queried. */
protected _get_data(): Image[];

/** Called when the [Texture3D]'s depth is queried. */
protected _get_depth(): int;

/** Called when the [Texture3D]'s format is queried. */
protected _get_format(): int;

/** Called when the [Texture3D]'s height is queried. */
protected _get_height(): int;

/** Called when the [Texture3D]'s width is queried. */
protected _get_width(): int;

/** Called when the presence of mipmaps in the [Texture3D] is queried. */
protected _has_mipmaps(): boolean;

/** Creates a placeholder version of this resource ([PlaceholderTexture3D]). */
create_placeholder(): Resource;

/** Returns the [Texture3D]'s data as an array of [Image]s. Each [Image] represents a [i]slice[/i] of the [Texture3D], with different slices mapping to different depth (Z axis) levels. */
get_data(): Image[];

/** Returns the [Texture3D]'s depth in pixels. Depth is typically represented by the Z axis (a dimension not present in [Texture2D]). */
get_depth(): int;

/** Returns the current format being used by this texture. See [enum Image.Format] for details. */
get_format(): int;

/** Returns the [Texture3D]'s height in pixels. Width is typically represented by the Y axis. */
get_height(): int;

/** Returns the [Texture3D]'s width in pixels. Width is typically represented by the X axis. */
get_width(): int;

/** Returns [code]true[/code] if the [Texture3D] has generated mipmaps. */
has_mipmaps(): boolean;

  connect<T extends SignalsOf<Texture3D>>(signal: T, method: SignalFunction<Texture3D[T]>): number;






}

