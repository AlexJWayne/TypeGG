
/**
 * This imports native GLSL shaders as [RDShaderFile] resources, for use with low-level [RenderingDevice] operations. This importer does **not** handle `.gdshader` files.
 *
*/
declare class ResourceImporterShaderFile extends ResourceImporter  {

  
/**
 * This imports native GLSL shaders as [RDShaderFile] resources, for use with low-level [RenderingDevice] operations. This importer does **not** handle `.gdshader` files.
 *
*/
  new(): ResourceImporterShaderFile; 
  static "new"(): ResourceImporterShaderFile 





  connect<T extends SignalsOf<ResourceImporterShaderFile>>(signal: T, method: SignalFunction<ResourceImporterShaderFile[T]>): number;






}

