
/**
 * A Texture2DArray is different from a Texture3D: The Texture2DArray does not support trilinear interpolation between the [Image]s, i.e. no blending. See also [Cubemap] and [CubemapArray], which are texture arrays with specialized cubemap functions.
 *
 * A Texture2DArray is also different from an [AtlasTexture]: In a Texture2DArray, all images are treated separately. In an atlas, the regions (i.e. the single images) can be of different sizes. Furthermore, you usually need to add a padding around the regions, to prevent accidental UV mapping to more than one region. The same goes for mipmapping: Mipmap chains are handled separately for each layer. In an atlas, the slicing has to be done manually in the fragment shader.
 *
 * To create such a texture file yourself, reimport your image files using the Godot Editor import presets.
 *
*/
declare class Texture2DArray extends ImageTextureLayered  {

  
/**
 * A Texture2DArray is different from a Texture3D: The Texture2DArray does not support trilinear interpolation between the [Image]s, i.e. no blending. See also [Cubemap] and [CubemapArray], which are texture arrays with specialized cubemap functions.
 *
 * A Texture2DArray is also different from an [AtlasTexture]: In a Texture2DArray, all images are treated separately. In an atlas, the regions (i.e. the single images) can be of different sizes. Furthermore, you usually need to add a padding around the regions, to prevent accidental UV mapping to more than one region. The same goes for mipmapping: Mipmap chains are handled separately for each layer. In an atlas, the slicing has to be done manually in the fragment shader.
 *
 * To create such a texture file yourself, reimport your image files using the Godot Editor import presets.
 *
*/
  new(): Texture2DArray; 
  static "new"(): Texture2DArray 



/** Creates a placeholder version of this resource ([PlaceholderTexture2DArray]). */
create_placeholder(): Resource;

  connect<T extends SignalsOf<Texture2DArray>>(signal: T, method: SignalFunction<Texture2DArray[T]>): number;






}

