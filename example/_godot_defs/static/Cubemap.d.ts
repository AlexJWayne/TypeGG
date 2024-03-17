
/**
 * A cubemap is made of 6 textures organized in layers. They are typically used for faking reflections in 3D rendering (see [ReflectionProbe]). It can be used to make an object look as if it's reflecting its surroundings. This usually delivers much better performance than other reflection methods.
 *
 * This resource is typically used as a uniform in custom shaders. Few core Godot methods make use of [Cubemap] resources.
 *
 * To create such a texture file yourself, reimport your image files using the Godot Editor import presets.
 *
 * **Note:** Godot doesn't support using cubemaps in a [PanoramaSkyMaterial]. You can use [url=https://danilw.github.io/GLSL-howto/cubemap_to_panorama_js/cubemap_to_panorama.html]this tool[/url] to convert a cubemap to an equirectangular sky map.
 *
*/
declare class Cubemap extends ImageTextureLayered  {

  
/**
 * A cubemap is made of 6 textures organized in layers. They are typically used for faking reflections in 3D rendering (see [ReflectionProbe]). It can be used to make an object look as if it's reflecting its surroundings. This usually delivers much better performance than other reflection methods.
 *
 * This resource is typically used as a uniform in custom shaders. Few core Godot methods make use of [Cubemap] resources.
 *
 * To create such a texture file yourself, reimport your image files using the Godot Editor import presets.
 *
 * **Note:** Godot doesn't support using cubemaps in a [PanoramaSkyMaterial]. You can use [url=https://danilw.github.io/GLSL-howto/cubemap_to_panorama_js/cubemap_to_panorama.html]this tool[/url] to convert a cubemap to an equirectangular sky map.
 *
*/
  new(): Cubemap; 
  static "new"(): Cubemap 



/** Creates a placeholder version of this resource ([PlaceholderCubemap]). */
create_placeholder(): Resource;

  connect<T extends SignalsOf<Cubemap>>(signal: T, method: SignalFunction<Cubemap[T]>): number;






}

