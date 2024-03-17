
/**
 * A texture that is loaded from a `.ctex` file. This file format is internal to Godot; it is created by importing other image formats with the import system. [CompressedTexture2D] can use one of 4 compression methods (including a lack of any compression):
 *
 * - Lossless (WebP or PNG, uncompressed on the GPU)
 *
 * - Lossy (WebP, uncompressed on the GPU)
 *
 * - VRAM Compressed (compressed on the GPU)
 *
 * - VRAM Uncompressed (uncompressed on the GPU)
 *
 * - Basis Universal (compressed on the GPU. Lower file sizes than VRAM Compressed, but slower to compress and lower quality than VRAM Compressed)
 *
 * Only **VRAM Compressed** actually reduces the memory usage on the GPU. The **Lossless** and **Lossy** compression methods will reduce the required storage on disk, but they will not reduce memory usage on the GPU as the texture is sent to the GPU uncompressed.
 *
 * Using **VRAM Compressed** also improves loading times, as VRAM-compressed textures are faster to load compared to textures using lossless or lossy compression. VRAM compression can exhibit noticeable artifacts and is intended to be used for 3D rendering, not 2D.
 *
*/
declare class CompressedTexture2D extends Texture2D  {

  
/**
 * A texture that is loaded from a `.ctex` file. This file format is internal to Godot; it is created by importing other image formats with the import system. [CompressedTexture2D] can use one of 4 compression methods (including a lack of any compression):
 *
 * - Lossless (WebP or PNG, uncompressed on the GPU)
 *
 * - Lossy (WebP, uncompressed on the GPU)
 *
 * - VRAM Compressed (compressed on the GPU)
 *
 * - VRAM Uncompressed (uncompressed on the GPU)
 *
 * - Basis Universal (compressed on the GPU. Lower file sizes than VRAM Compressed, but slower to compress and lower quality than VRAM Compressed)
 *
 * Only **VRAM Compressed** actually reduces the memory usage on the GPU. The **Lossless** and **Lossy** compression methods will reduce the required storage on disk, but they will not reduce memory usage on the GPU as the texture is sent to the GPU uncompressed.
 *
 * Using **VRAM Compressed** also improves loading times, as VRAM-compressed textures are faster to load compared to textures using lossless or lossy compression. VRAM compression can exhibit noticeable artifacts and is intended to be used for 3D rendering, not 2D.
 *
*/
  new(): CompressedTexture2D; 
  static "new"(): CompressedTexture2D 


/** The [CompressedTexture2D]'s file path to a [code].ctex[/code] file. */
load_path: string;


/** Loads the texture from the specified [param path]. */
load(): int;

  connect<T extends SignalsOf<CompressedTexture2D>>(signal: T, method: SignalFunction<CompressedTexture2D[T]>): number;






}

