
/**
 * The engine supports multiple image formats out of the box (PNG, SVG, JPEG, WebP to name a few), but you can choose to implement support for additional image formats by extending this class.
 *
 * Be sure to respect the documented return types and values. You should create an instance of it, and call [method add_format_loader] to register that loader during the initialization phase.
 *
*/
declare class ImageFormatLoaderExtension extends ImageFormatLoader  {

  
/**
 * The engine supports multiple image formats out of the box (PNG, SVG, JPEG, WebP to name a few), but you can choose to implement support for additional image formats by extending this class.
 *
 * Be sure to respect the documented return types and values. You should create an instance of it, and call [method add_format_loader] to register that loader during the initialization phase.
 *
*/
  new(): ImageFormatLoaderExtension; 
  static "new"(): ImageFormatLoaderExtension 



/** Returns the list of file extensions for this image format. Files with the given extensions will be treated as image file and loaded using this class. */
protected _get_recognized_extensions(): PackedStringArray;

/** Loads the content of [param fileaccess] into the provided [param image]. */
protected _load_image(): int;

/** Add this format loader to the engine, allowing it to recognize the file extensions returned by [method _get_recognized_extensions]. */
add_format_loader(): void;

/** Remove this format loader from the engine. */
remove_format_loader(): void;

  connect<T extends SignalsOf<ImageFormatLoaderExtension>>(signal: T, method: SignalFunction<ImageFormatLoaderExtension[T]>): number;






}

