
/**
 * This importer imports [Image] resources, as opposed to [CompressedTexture2D]. If you need to render the image in 2D or 3D, use [ResourceImporterTexture] instead.
 *
*/
declare class ResourceImporterImage extends ResourceImporter  {

  
/**
 * This importer imports [Image] resources, as opposed to [CompressedTexture2D]. If you need to render the image in 2D or 3D, use [ResourceImporterTexture] instead.
 *
*/
  new(): ResourceImporterImage; 
  static "new"(): ResourceImporterImage 





  connect<T extends SignalsOf<ResourceImporterImage>>(signal: T, method: SignalFunction<ResourceImporterImage[T]>): number;






}

