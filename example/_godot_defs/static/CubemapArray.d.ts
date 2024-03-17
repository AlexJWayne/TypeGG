
/**
 * [CubemapArray]s are made of an array of [Cubemap]s. Like [Cubemap]s, they are made of multiple textures, the amount of which must be divisible by 6 (one for each face of the cube). The primary benefit of [CubemapArray]s is that they can be accessed in shader code using a single texture reference. In other words, you can pass multiple [Cubemap]s into a shader using a single [CubemapArray].
 *
 * Moreover, [Cubemap]s are allocated in adjacent cache regions on the GPU. This makes [CubemapArray]s the most efficient way to store multiple [Cubemap]s.
 *
 * Internally, Godot uses [CubemapArray]s for many effects, including the [Sky] if you set [member ProjectSettings.rendering/reflections/sky_reflections/texture_array_reflections] to `true`.
 *
 * To create such a texture file yourself, reimport your image files using the import presets of the File System dock.
 *
 * **Note:** [CubemapArray] is not supported in the OpenGL 3 rendering backend.
 *
*/
declare class CubemapArray extends ImageTextureLayered  {

  
/**
 * [CubemapArray]s are made of an array of [Cubemap]s. Like [Cubemap]s, they are made of multiple textures, the amount of which must be divisible by 6 (one for each face of the cube). The primary benefit of [CubemapArray]s is that they can be accessed in shader code using a single texture reference. In other words, you can pass multiple [Cubemap]s into a shader using a single [CubemapArray].
 *
 * Moreover, [Cubemap]s are allocated in adjacent cache regions on the GPU. This makes [CubemapArray]s the most efficient way to store multiple [Cubemap]s.
 *
 * Internally, Godot uses [CubemapArray]s for many effects, including the [Sky] if you set [member ProjectSettings.rendering/reflections/sky_reflections/texture_array_reflections] to `true`.
 *
 * To create such a texture file yourself, reimport your image files using the import presets of the File System dock.
 *
 * **Note:** [CubemapArray] is not supported in the OpenGL 3 rendering backend.
 *
*/
  new(): CubemapArray; 
  static "new"(): CubemapArray 



/** Creates a placeholder version of this resource ([PlaceholderCubemapArray]). */
create_placeholder(): Resource;

  connect<T extends SignalsOf<CubemapArray>>(signal: T, method: SignalFunction<CubemapArray[T]>): number;






}

