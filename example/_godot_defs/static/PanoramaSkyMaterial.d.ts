
/**
 * A resource referenced in a [Sky] that is used to draw a background. [PanoramaSkyMaterial] functions similar to skyboxes in other engines, except it uses an equirectangular sky map instead of a [Cubemap].
 *
 * Using an HDR panorama is strongly recommended for accurate, high-quality reflections. Godot supports the Radiance HDR (`.hdr`) and OpenEXR (`.exr`) image formats for this purpose.
 *
 * You can use [url=https://danilw.github.io/GLSL-howto/cubemap_to_panorama_js/cubemap_to_panorama.html]this tool[/url] to convert a cubemap to an equirectangular sky map.
 *
*/
declare class PanoramaSkyMaterial extends Material  {

  
/**
 * A resource referenced in a [Sky] that is used to draw a background. [PanoramaSkyMaterial] functions similar to skyboxes in other engines, except it uses an equirectangular sky map instead of a [Cubemap].
 *
 * Using an HDR panorama is strongly recommended for accurate, high-quality reflections. Godot supports the Radiance HDR (`.hdr`) and OpenEXR (`.exr`) image formats for this purpose.
 *
 * You can use [url=https://danilw.github.io/GLSL-howto/cubemap_to_panorama_js/cubemap_to_panorama.html]this tool[/url] to convert a cubemap to an equirectangular sky map.
 *
*/
  new(): PanoramaSkyMaterial; 
  static "new"(): PanoramaSkyMaterial 


/** A boolean value to determine if the background texture should be filtered or not. */
filter: boolean;

/** [Texture2D] to be applied to the [PanoramaSkyMaterial]. */
panorama: Texture2D;



  connect<T extends SignalsOf<PanoramaSkyMaterial>>(signal: T, method: SignalFunction<PanoramaSkyMaterial[T]>): number;






}

