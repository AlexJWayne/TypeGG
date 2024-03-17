
/**
 * LightmapperRD ("RD" stands for [RenderingDevice]) is the built-in GPU-based lightmapper for use with [LightmapGI]. On most dedicated GPUs, it can bake lightmaps much faster than most CPU-based lightmappers. LightmapperRD uses compute shaders to bake lightmaps, so it does not require CUDA or OpenCL libraries to be installed to be usable.
 *
 * **Note:** Only usable when using the Vulkan backend (Forward+ or Mobile), not OpenGL.
 *
*/
declare class LightmapperRD extends Lightmapper  {

  
/**
 * LightmapperRD ("RD" stands for [RenderingDevice]) is the built-in GPU-based lightmapper for use with [LightmapGI]. On most dedicated GPUs, it can bake lightmaps much faster than most CPU-based lightmappers. LightmapperRD uses compute shaders to bake lightmaps, so it does not require CUDA or OpenCL libraries to be installed to be usable.
 *
 * **Note:** Only usable when using the Vulkan backend (Forward+ or Mobile), not OpenGL.
 *
*/
  new(): LightmapperRD; 
  static "new"(): LightmapperRD 





  connect<T extends SignalsOf<LightmapperRD>>(signal: T, method: SignalFunction<LightmapperRD[T]>): number;






}

