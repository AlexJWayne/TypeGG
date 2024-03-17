
/**
 * [BitMap] resources are typically used as click masks in [TextureButton] and [TouchScreenButton].
 *
*/
declare class ResourceImporterBitMap extends ResourceImporter  {

  
/**
 * [BitMap] resources are typically used as click masks in [TextureButton] and [TouchScreenButton].
 *
*/
  new(): ResourceImporterBitMap; 
  static "new"(): ResourceImporterBitMap 


/**
 * The data source to use for generating the bitmap.
 *
 * **Black & White:** Pixels whose HSV value is greater than the [member threshold] will be considered as "enabled" (bit is `true`). If the pixel is lower than or equal to the threshold, it will be considered as "disabled" (bit is `false`).
 *
 * **Alpha:** Pixels whose alpha value is greater than the [member threshold] will be considered as "enabled" (bit is `true`). If the pixel is lower than or equal to the threshold, it will be considered as "disabled" (bit is `false`).
 *
*/
create_from: int;

/** The threshold to use to determine which bits should be considered enabled or disabled. See also [member create_from]. */
threshold: float;



  connect<T extends SignalsOf<ResourceImporterBitMap>>(signal: T, method: SignalFunction<ResourceImporterBitMap[T]>): number;






}

