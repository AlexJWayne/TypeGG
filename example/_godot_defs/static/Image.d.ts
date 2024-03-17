
/**
 * Native image datatype. Contains image data which can be converted to an [ImageTexture] and provides commonly used **image processing** methods. The maximum width and height for an [Image] are [constant MAX_WIDTH] and [constant MAX_HEIGHT].
 *
 * An [Image] cannot be assigned to a texture property of an object directly (such as [member Sprite2D.texture]), and has to be converted manually to an [ImageTexture] first.
 *
 * **Note:** The maximum image size is 16384×16384 pixels due to graphics hardware limitations. Larger images may fail to import.
 *
*/
declare class Image extends Resource  {

  
/**
 * Native image datatype. Contains image data which can be converted to an [ImageTexture] and provides commonly used **image processing** methods. The maximum width and height for an [Image] are [constant MAX_WIDTH] and [constant MAX_HEIGHT].
 *
 * An [Image] cannot be assigned to a texture property of an object directly (such as [member Sprite2D.texture]), and has to be converted manually to an [ImageTexture] first.
 *
 * **Note:** The maximum image size is 16384×16384 pixels due to graphics hardware limitations. Larger images may fail to import.
 *
*/
  new(): Image; 
  static "new"(): Image 


/** Holds all the image's color data in a given format. See [enum Format] constants. */
data: Dictionary<any, any>;

/** No documentation provided. */
adjust_bcs(): void;

/** Alpha-blends [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image [b]must[/b] have the same format. [param src_rect] with non-positive size is treated as empty. */
blend_rect(): void;

/** Alpha-blends [param src_rect] from [param src] image to this image using [param mask] image at coordinates [param dst], clipped accordingly to both image bounds. Alpha channels are required for both [param src] and [param mask]. [param dst] pixels and [param src] pixels will blend if the corresponding mask pixel's alpha value is not 0. This image and [param src] image [b]must[/b] have the same format. [param src] image and [param mask] image [b]must[/b] have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
blend_rect_mask(): void;

/** Copies [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image [b]must[/b] have the same format. [param src_rect] with non-positive size is treated as empty. */
blit_rect(): void;

/** Blits [param src_rect] area from [param src] image to this image at the coordinates given by [param dst], clipped accordingly to both image bounds. [param src] pixel is copied onto [param dst] if the corresponding [param mask] pixel's alpha value is not 0. This image and [param src] image [b]must[/b] have the same format. [param src] image and [param mask] image [b]must[/b] have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
blit_rect_mask(): void;

/** Converts a bump map to a normal map. A bump map provides a height offset per-pixel, while a normal map provides a normal direction per pixel. */
bump_map_to_normal_map(): void;

/** Removes the image's mipmaps. */
clear_mipmaps(): void;

/**
 * Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.
 *
 * The [param source] parameter helps to pick the best compression method for DXT and ETC2 formats. It is ignored for ASTC compression.
 *
 * For ASTC compression, the [param astc_format] parameter must be supplied.
 *
*/
compress(): int;

/**
 * Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.
 *
 * This is an alternative to [method compress] that lets the user supply the channels used in order for the compressor to pick the best DXT and ETC2 formats. For other formats (non DXT or ETC2), this argument is ignored.
 *
 * For ASTC compression, the [param astc_format] parameter must be supplied.
 *
*/
compress_from_channels(): int;

/**
 * Compute image metrics on the current image and the compared image.
 *
 * The dictionary contains `max`, `mean`, `mean_squared`, `root_mean_squared` and `peak_snr`.
 *
*/
compute_image_metrics(): Dictionary<any, any>;

/** Converts the image's format. See [enum Format] constants. */
convert(): void;

/** Copies [param src] image to this image. */
copy_from(): void;

/** Creates an empty image of given size and format. See [enum Format] constants. If [param use_mipmaps] is [code]true[/code], then generate mipmaps for this image. See the [method generate_mipmaps]. */
create(): Image;

/** Creates a new image of given size and format. See [enum Format] constants. Fills the image with the given raw data. If [param use_mipmaps] is [code]true[/code] then loads mipmaps for this image from [param data]. See [method generate_mipmaps]. */
create_from_data(): Image;

/** Crops the image to the given [param width] and [param height]. If the specified size is larger than the current size, the extra area is filled with black pixels. */
crop(): void;

/**
 * Decompresses the image if it is VRAM compressed in a supported format. Returns [constant OK] if the format is supported, otherwise [constant ERR_UNAVAILABLE].
 *
 * **Note:** The following formats can be decompressed: DXT, RGTC, BPTC. The formats ETC1 and ETC2 are not supported.
 *
*/
decompress(): int;

/** Returns [constant ALPHA_BLEND] if the image has data for alpha values. Returns [constant ALPHA_BIT] if all the alpha values are stored in a single bit. Returns [constant ALPHA_NONE] if no data for alpha values is found. */
detect_alpha(): int;

/** No documentation provided. */
detect_used_channels(): int;

/** Fills the image with [param color]. */
fill(): void;

/** Fills [param rect] with [param color]. */
fill_rect(): void;

/** Blends low-alpha pixels with nearby pixels. */
fix_alpha_edges(): void;

/** Flips the image horizontally. */
flip_x(): void;

/** Flips the image vertically. */
flip_y(): void;

/**
 * Generates mipmaps for the image. Mipmaps are precalculated lower-resolution copies of the image that are automatically used if the image needs to be scaled down when rendered. They help improve image quality and performance when rendering. This method returns an error if the image is compressed, in a custom format, or if the image's width/height is `0`. Enabling [param renormalize] when generating mipmaps for normal map textures will make sure all resulting vector values are normalized.
 *
 * It is possible to check if the image has mipmaps by calling [method has_mipmaps] or [method get_mipmap_count]. Calling [method generate_mipmaps] on an image that already has mipmaps will replace existing mipmaps in the image.
 *
*/
generate_mipmaps(): int;

/** Returns a copy of the image's raw data. */
get_data(): PackedByteArray;

/** Returns the image's format. See [enum Format] constants. */
get_format(): int;

/** Returns the image's height. */
get_height(): int;

/** Returns the number of mipmap levels or 0 if the image has no mipmaps. The largest main level image is not counted as a mipmap level by this method, so if you want to include it you can add 1 to this count. */
get_mipmap_count(): int;

/** Returns the offset where the image's mipmap with index [param mipmap] is stored in the [member data] dictionary. */
get_mipmap_offset(): int;

/**
 * Returns the color of the pixel at `(x, y)`.
 *
 * This is the same as [method get_pixelv], but with two integer arguments instead of a [Vector2i] argument.
 *
*/
get_pixel(): Color;

/**
 * Returns the color of the pixel at [param point].
 *
 * This is the same as [method get_pixel], but with a [Vector2i] argument instead of two integer arguments.
 *
*/
get_pixelv(): Color;

/** Returns a new [Image] that is a copy of this [Image]'s area specified with [param region]. */
get_region(): Image;

/** Returns the image's size (width and height). */
get_size(): Vector2i;

/** Returns a [Rect2i] enclosing the visible portion of the image, considering each pixel with a non-zero alpha channel as visible. */
get_used_rect(): Rect2i;

/** Returns the image's width. */
get_width(): int;

/** Returns [code]true[/code] if the image has generated mipmaps. */
has_mipmaps(): boolean;

/** Returns [code]true[/code] if the image is compressed. */
is_compressed(): boolean;

/** Returns [code]true[/code] if the image has no data. */
is_empty(): boolean;

/** Returns [code]true[/code] if all the image's pixels have an alpha value of 0. Returns [code]false[/code] if any pixel has an alpha value higher than 0. */
is_invisible(): boolean;

/**
 * Loads an image from file [param path]. See [url=$DOCS_URL/tutorials/assets_pipeline/importing_images.html#supported-image-formats]Supported image formats[/url] for a list of supported image formats and limitations.
 *
 * **Warning:** This method should only be used in the editor or in cases when you need to load external images at run-time, such as images located at the `user://` directory, and may not work in exported projects.
 *
 * See also [ImageTexture] description for usage examples.
 *
*/
load(): int;

/**
 * Loads an image from the binary contents of a BMP file.
 *
 * **Note:** Godot's BMP module doesn't support 16-bit per pixel images. Only 1-bit, 4-bit, 8-bit, 24-bit, and 32-bit per pixel images are supported.
 *
 * **Note:** This method is only available in engine builds with the BMP module enabled. By default, the BMP module is enabled, but it can be disabled at build-time using the `module_bmp_enabled=no` SCons option.
 *
*/
load_bmp_from_buffer(): int;

/** Creates a new [Image] and loads data from the specified file. */
load_from_file(): Image;

/** Loads an image from the binary contents of a JPEG file. */
load_jpg_from_buffer(): int;

/**
 * Loads an image from the binary contents of a [url=https://github.com/KhronosGroup/KTX-Software]KTX[/url] file. Unlike most image formats, KTX can store VRAM-compressed data and embed mipmaps.
 *
 * **Note:** Godot's libktx implementation only supports 2D images. Cubemaps, texture arrays, and de-padding are not supported.
 *
 * **Note:** This method is only available in engine builds with the KTX module enabled. By default, the KTX module is enabled, but it can be disabled at build-time using the `module_ktx_enabled=no` SCons option.
 *
*/
load_ktx_from_buffer(): int;

/** Loads an image from the binary contents of a PNG file. */
load_png_from_buffer(): int;

/**
 * Loads an image from the UTF-8 binary contents of an **uncompressed** SVG file (**.svg**).
 *
 * **Note:** Beware when using compressed SVG files (like **.svgz**), they need to be `decompressed` before loading.
 *
 * **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.
 *
*/
load_svg_from_buffer(): int;

/**
 * Loads an image from the string contents of a SVG file (**.svg**).
 *
 * **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.
 *
*/
load_svg_from_string(): int;

/**
 * Loads an image from the binary contents of a TGA file.
 *
 * **Note:** This method is only available in engine builds with the TGA module enabled. By default, the TGA module is enabled, but it can be disabled at build-time using the `module_tga_enabled=no` SCons option.
 *
*/
load_tga_from_buffer(): int;

/** Loads an image from the binary contents of a WebP file. */
load_webp_from_buffer(): int;

/** Converts the image's data to represent coordinates on a 3D plane. This is used when the image represents a normal map. A normal map can add lots of detail to a 3D surface without increasing the polygon count. */
normal_map_to_xy(): void;

/** Multiplies color values with alpha values. Resulting color values for a pixel are [code](color * alpha)/256[/code]. See also [member CanvasItemMaterial.blend_mode]. */
premultiply_alpha(): void;

/** Resizes the image to the given [param width] and [param height]. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
resize(): void;

/** Resizes the image to the nearest power of 2 for the width and height. If [param square] is [code]true[/code] then set width and height to be the same. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
resize_to_po2(): void;

/** Converts a standard RGBE (Red Green Blue Exponent) image to an sRGB image. */
rgbe_to_srgb(): Image;

/** Rotates the image in the specified [param direction] by [code]90[/code] degrees. The width and height of the image must be greater than [code]1[/code]. If the width and height are not equal, the image will be resized. */
rotate_90(): void;

/** Rotates the image by [code]180[/code] degrees. The width and height of the image must be greater than [code]1[/code]. */
rotate_180(): void;

/**
 * Saves the image as an EXR file to [param path]. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return [constant ERR_UNAVAILABLE] if Godot was compiled without the TinyEXR module.
 *
 * **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return [constant ERR_UNAVAILABLE] when it is called from an exported project.
 *
*/
save_exr(): int;

/**
 * Saves the image as an EXR file to a byte array. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return an empty byte array if Godot was compiled without the TinyEXR module.
 *
 * **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return an empty byte array when it is called from an exported project.
 *
*/
save_exr_to_buffer(): PackedByteArray;

/**
 * Saves the image as a JPEG file to [param path] with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger file sizes. Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.
 *
 * **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting JPEG file won't contain the alpha channel.
 *
*/
save_jpg(): int;

/**
 * Saves the image as a JPEG file to a byte array with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger byte array sizes (and therefore memory usage). Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.
 *
 * **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting byte array won't contain the alpha channel.
 *
*/
save_jpg_to_buffer(): PackedByteArray;

/** Saves the image as a PNG file to the file at [param path]. */
save_png(): int;

/** Saves the image as a PNG file to a byte array. */
save_png_to_buffer(): PackedByteArray;

/**
 * Saves the image as a WebP (Web Picture) file to the file at [param path]. By default it will save lossless. If [param lossy] is true, the image will be saved lossy, using the [param quality] setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.
 *
 * **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.
 *
*/
save_webp(): int;

/**
 * Saves the image as a WebP (Web Picture) file to a byte array. By default it will save lossless. If [param lossy] is true, the image will be saved lossy, using the [param quality] setting between 0.0 and 1.0 (inclusive). Lossless WebP offers more efficient compression than PNG.
 *
 * **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.
 *
*/
save_webp_to_buffer(): PackedByteArray;

/** Overwrites data of an existing [Image]. Non-static equivalent of [method create_from_data]. */
set_data(): void;

/**
 * Sets the [Color] of the pixel at `(x, y)` to [param color].
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var img_width = 10
 * var img_height = 5
 * var img = Image.create(img_width, img_height, false, Image.FORMAT_RGBA8)
 * img.set_pixel(1, 2, Color.RED) # Sets the color at (1, 2) to red.
 * 
 * 
 * int imgWidth = 10;
 * int imgHeight = 5;
 * var img = Image.Create(imgWidth, imgHeight, false, Image.Format.Rgba8);
 * img.SetPixel(1, 2, Colors.Red); // Sets the color at (1, 2) to red.
 * 
 * @summary 
 * 
 *
 * This is the same as [method set_pixelv], but with a two integer arguments instead of a [Vector2i] argument.
 *
*/
set_pixel(): void;

/**
 * Sets the [Color] of the pixel at [param point] to [param color].
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var img_width = 10
 * var img_height = 5
 * var img = Image.create(img_width, img_height, false, Image.FORMAT_RGBA8)
 * img.set_pixelv(Vector2i(1, 2), Color.RED) # Sets the color at (1, 2) to red.
 * 
 * 
 * int imgWidth = 10;
 * int imgHeight = 5;
 * var img = Image.Create(imgWidth, imgHeight, false, Image.Format.Rgba8);
 * img.SetPixelv(new Vector2I(1, 2), Colors.Red); // Sets the color at (1, 2) to red.
 * 
 * @summary 
 * 
 *
 * This is the same as [method set_pixel], but with a [Vector2i] argument instead of two integer arguments.
 *
*/
set_pixelv(): void;

/** Shrinks the image by a factor of 2 on each axis (this divides the pixel count by 4). */
shrink_x2(): void;

/** Converts the raw data from the sRGB colorspace to a linear scale. */
srgb_to_linear(): void;

  connect<T extends SignalsOf<Image>>(signal: T, method: SignalFunction<Image[T]>): number;



/**
 * The maximal width allowed for [Image] resources.
 *
*/
static MAX_WIDTH: any;

/**
 * The maximal height allowed for [Image] resources.
 *
*/
static MAX_HEIGHT: any;

/**
 * Texture format with a single 8-bit depth representing luminance.
 *
*/
static FORMAT_L8: any;

/**
 * OpenGL texture format with two values, luminance and alpha each stored with 8 bits.
 *
*/
static FORMAT_LA8: any;

/**
 * OpenGL texture format `RED` with a single component and a bitdepth of 8.
 *
*/
static FORMAT_R8: any;

/**
 * OpenGL texture format `RG` with two components and a bitdepth of 8 for each.
 *
*/
static FORMAT_RG8: any;

/**
 * OpenGL texture format `RGB` with three components, each with a bitdepth of 8.
 *
 * **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.
 *
*/
static FORMAT_RGB8: any;

/**
 * OpenGL texture format `RGBA` with four components, each with a bitdepth of 8.
 *
 * **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.
 *
*/
static FORMAT_RGBA8: any;

/**
 * OpenGL texture format `RGBA` with four components, each with a bitdepth of 4.
 *
*/
static FORMAT_RGBA4444: any;

/** No documentation provided. */
static FORMAT_RGB565: any;

/**
 * OpenGL texture format `GL_R32F` where there's one component, a 32-bit floating-point value.
 *
*/
static FORMAT_RF: any;

/**
 * OpenGL texture format `GL_RG32F` where there are two components, each a 32-bit floating-point values.
 *
*/
static FORMAT_RGF: any;

/**
 * OpenGL texture format `GL_RGB32F` where there are three components, each a 32-bit floating-point values.
 *
*/
static FORMAT_RGBF: any;

/**
 * OpenGL texture format `GL_RGBA32F` where there are four components, each a 32-bit floating-point values.
 *
*/
static FORMAT_RGBAF: any;

/**
 * OpenGL texture format `GL_R16F` where there's one component, a 16-bit "half-precision" floating-point value.
 *
*/
static FORMAT_RH: any;

/**
 * OpenGL texture format `GL_RG16F` where there are two components, each a 16-bit "half-precision" floating-point value.
 *
*/
static FORMAT_RGH: any;

/**
 * OpenGL texture format `GL_RGB16F` where there are three components, each a 16-bit "half-precision" floating-point value.
 *
*/
static FORMAT_RGBH: any;

/**
 * OpenGL texture format `GL_RGBA16F` where there are four components, each a 16-bit "half-precision" floating-point value.
 *
*/
static FORMAT_RGBAH: any;

/**
 * A special OpenGL texture format where the three color components have 9 bits of precision and all three share a single 5-bit exponent.
 *
*/
static FORMAT_RGBE9995: any;

/**
 * The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format that uses Block Compression 1, and is the smallest variation of S3TC, only providing 1 bit of alpha and color data being premultiplied with alpha.
 *
 * **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.
 *
*/
static FORMAT_DXT1: any;

/**
 * The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format that uses Block Compression 2, and color data is interpreted as not having been premultiplied by alpha. Well suited for images with sharp alpha transitions between translucent and opaque areas.
 *
 * **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.
 *
*/
static FORMAT_DXT3: any;

/**
 * The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format also known as Block Compression 3 or BC3 that contains 64 bits of alpha channel data followed by 64 bits of DXT1-encoded color data. Color data is not premultiplied by alpha, same as DXT3. DXT5 generally produces superior results for transparent gradients compared to DXT3.
 *
 * **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.
 *
*/
static FORMAT_DXT5: any;

/**
 * Texture format that uses [url=https://www.khronos.org/opengl/wiki/Red_Green_Texture_Compression]Red Green Texture Compression[/url], normalizing the red channel data using the same compression algorithm that DXT5 uses for the alpha channel.
 *
*/
static FORMAT_RGTC_R: any;

/**
 * Texture format that uses [url=https://www.khronos.org/opengl/wiki/Red_Green_Texture_Compression]Red Green Texture Compression[/url], normalizing the red and green channel data using the same compression algorithm that DXT5 uses for the alpha channel.
 *
*/
static FORMAT_RGTC_RG: any;

/**
 * Texture format that uses [url=https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression]BPTC[/url] compression with unsigned normalized RGBA components.
 *
 * **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.
 *
*/
static FORMAT_BPTC_RGBA: any;

/**
 * Texture format that uses [url=https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression]BPTC[/url] compression with signed floating-point RGB components.
 *
*/
static FORMAT_BPTC_RGBF: any;

/**
 * Texture format that uses [url=https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression]BPTC[/url] compression with unsigned floating-point RGB components.
 *
*/
static FORMAT_BPTC_RGBFU: any;

/**
 * [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC1]Ericsson Texture Compression format 1[/url], also referred to as "ETC1", and is part of the OpenGL ES graphics standard. This format cannot store an alpha channel.
 *
*/
static FORMAT_ETC: any;

/**
 * [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`R11_EAC` variant), which provides one channel of unsigned data.
 *
*/
static FORMAT_ETC2_R11: any;

/**
 * [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`SIGNED_R11_EAC` variant), which provides one channel of signed data.
 *
*/
static FORMAT_ETC2_R11S: any;

/**
 * [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RG11_EAC` variant), which provides two channels of unsigned data.
 *
*/
static FORMAT_ETC2_RG11: any;

/**
 * [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`SIGNED_RG11_EAC` variant), which provides two channels of signed data.
 *
*/
static FORMAT_ETC2_RG11S: any;

/**
 * [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGB8` variant), which is a follow-up of ETC1 and compresses RGB888 data.
 *
 * **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.
 *
*/
static FORMAT_ETC2_RGB8: any;

/**
 * [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGBA8`variant), which compresses RGBA8888 data with full alpha support.
 *
 * **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.
 *
*/
static FORMAT_ETC2_RGBA8: any;

/**
 * [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGB8_PUNCHTHROUGH_ALPHA1` variant), which compresses RGBA data to make alpha either fully transparent or fully opaque.
 *
 * **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.
 *
*/
static FORMAT_ETC2_RGB8A1: any;

/** No documentation provided. */
static FORMAT_ETC2_RA_AS_RG: any;

/** No documentation provided. */
static FORMAT_DXT5_RA_AS_RG: any;

/**
 * [url=https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression]Adaptive Scalable Texture Compression[/url]. This implements the 4x4 (high quality) mode.
 *
*/
static FORMAT_ASTC_4x4: any;

/**
 * Same format as [constant FORMAT_ASTC_4x4], but with the hint to let the GPU know it is used for HDR.
 *
*/
static FORMAT_ASTC_4x4_HDR: any;

/**
 * [url=https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression]Adaptive Scalable Texture Compression[/url]. This implements the 8x8 (low quality) mode.
 *
*/
static FORMAT_ASTC_8x8: any;

/**
 * Same format as [constant FORMAT_ASTC_8x8], but with the hint to let the GPU know it is used for HDR.
 *
*/
static FORMAT_ASTC_8x8_HDR: any;

/**
 * Represents the size of the [enum Format] enum.
 *
*/
static FORMAT_MAX: any;

/**
 * Performs nearest-neighbor interpolation. If the image is resized, it will be pixelated.
 *
*/
static INTERPOLATE_NEAREST: any;

/**
 * Performs bilinear interpolation. If the image is resized, it will be blurry. This mode is faster than [constant INTERPOLATE_CUBIC], but it results in lower quality.
 *
*/
static INTERPOLATE_BILINEAR: any;

/**
 * Performs cubic interpolation. If the image is resized, it will be blurry. This mode often gives better results compared to [constant INTERPOLATE_BILINEAR], at the cost of being slower.
 *
*/
static INTERPOLATE_CUBIC: any;

/**
 * Performs bilinear separately on the two most-suited mipmap levels, then linearly interpolates between them.
 *
 * It's slower than [constant INTERPOLATE_BILINEAR], but produces higher-quality results with far fewer aliasing artifacts.
 *
 * If the image does not have mipmaps, they will be generated and used internally, but no mipmaps will be generated on the resulting image.
 *
 * **Note:** If you intend to scale multiple copies of the original image, it's better to call [method generate_mipmaps]] on it in advance, to avoid wasting processing power in generating them again and again.
 *
 * On the other hand, if the image already has mipmaps, they will be used, and a new set will be generated for the resulting image.
 *
*/
static INTERPOLATE_TRILINEAR: any;

/**
 * Performs Lanczos interpolation. This is the slowest image resizing mode, but it typically gives the best results, especially when downscalng images.
 *
*/
static INTERPOLATE_LANCZOS: any;

/**
 * Image does not have alpha.
 *
*/
static ALPHA_NONE: any;

/**
 * Image stores alpha in a single bit.
 *
*/
static ALPHA_BIT: any;

/**
 * Image uses alpha.
 *
*/
static ALPHA_BLEND: any;

/**
 * Use S3TC compression.
 *
*/
static COMPRESS_S3TC: any;

/**
 * Use ETC compression.
 *
*/
static COMPRESS_ETC: any;

/**
 * Use ETC2 compression.
 *
*/
static COMPRESS_ETC2: any;

/**
 * Use BPTC compression.
 *
*/
static COMPRESS_BPTC: any;

/**
 * Use ASTC compression.
 *
*/
static COMPRESS_ASTC: any;

/**
 * Represents the size of the [enum CompressMode] enum.
 *
*/
static COMPRESS_MAX: any;

/** No documentation provided. */
static USED_CHANNELS_L: any;

/** No documentation provided. */
static USED_CHANNELS_LA: any;

/** No documentation provided. */
static USED_CHANNELS_R: any;

/** No documentation provided. */
static USED_CHANNELS_RG: any;

/** No documentation provided. */
static USED_CHANNELS_RGB: any;

/** No documentation provided. */
static USED_CHANNELS_RGBA: any;

/**
 * Source texture (before compression) is a regular texture. Default for all textures.
 *
*/
static COMPRESS_SOURCE_GENERIC: any;

/**
 * Source texture (before compression) is in sRGB space.
 *
*/
static COMPRESS_SOURCE_SRGB: any;

/**
 * Source texture (before compression) is a normal texture (e.g. it can be compressed into two channels).
 *
*/
static COMPRESS_SOURCE_NORMAL: any;

/**
 * Hint to indicate that the high quality 4x4 ASTC compression format should be used.
 *
*/
static ASTC_FORMAT_4x4: any;

/**
 * Hint to indicate that the low quality 8x8 ASTC compression format should be used.
 *
*/
static ASTC_FORMAT_8x8: any;



}

