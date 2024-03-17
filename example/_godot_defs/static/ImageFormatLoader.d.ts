
/**
 * The engine supports multiple image formats out of the box (PNG, SVG, JPEG, WebP to name a few), but you can choose to implement support for additional image formats by extending [ImageFormatLoaderExtension].
 *
*/
declare class ImageFormatLoader extends RefCounted  {

  
/**
 * The engine supports multiple image formats out of the box (PNG, SVG, JPEG, WebP to name a few), but you can choose to implement support for additional image formats by extending [ImageFormatLoaderExtension].
 *
*/
  new(): ImageFormatLoader; 
  static "new"(): ImageFormatLoader 





  connect<T extends SignalsOf<ImageFormatLoader>>(signal: T, method: SignalFunction<ImageFormatLoader[T]>): number;



/** No documentation provided. */
static FLAG_NONE: any;

/** No documentation provided. */
static FLAG_FORCE_LINEAR: any;

/** No documentation provided. */
static FLAG_CONVERT_COLORS: any;



}

