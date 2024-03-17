
/**
 * This class should be extended by custom lightmapper classes. Lightmappers can then be used with [LightmapGI] to provide fast baked global illumination in 3D.
 *
 * Godot contains a built-in GPU-based lightmapper [LightmapperRD] that uses compute shaders, but custom lightmappers can be implemented by C++ modules.
 *
*/
declare class Lightmapper extends RefCounted  {

  
/**
 * This class should be extended by custom lightmapper classes. Lightmappers can then be used with [LightmapGI] to provide fast baked global illumination in 3D.
 *
 * Godot contains a built-in GPU-based lightmapper [LightmapperRD] that uses compute shaders, but custom lightmappers can be implemented by C++ modules.
 *
*/
  new(): Lightmapper; 
  static "new"(): Lightmapper 





  connect<T extends SignalsOf<Lightmapper>>(signal: T, method: SignalFunction<Lightmapper[T]>): number;






}

