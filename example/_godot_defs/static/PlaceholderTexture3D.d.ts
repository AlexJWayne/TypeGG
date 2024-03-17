
/**
 * This class is used when loading a project that uses a [Texture3D] subclass in 2 conditions:
 *
 * - When running the project exported in dedicated server mode, only the texture's dimensions are kept (as they may be relied upon for gameplay purposes or positioning of other elements). This allows reducing the exported PCK's size significantly.
 *
 * - When this subclass is missing due to using a different engine version or build (e.g. modules disabled).
 *
 * **Note:** This is not intended to be used as an actual texture for rendering. It is not guaranteed to work like one in shaders or materials (for example when calculating UV).
 *
*/
declare class PlaceholderTexture3D extends Texture3D  {

  
/**
 * This class is used when loading a project that uses a [Texture3D] subclass in 2 conditions:
 *
 * - When running the project exported in dedicated server mode, only the texture's dimensions are kept (as they may be relied upon for gameplay purposes or positioning of other elements). This allows reducing the exported PCK's size significantly.
 *
 * - When this subclass is missing due to using a different engine version or build (e.g. modules disabled).
 *
 * **Note:** This is not intended to be used as an actual texture for rendering. It is not guaranteed to work like one in shaders or materials (for example when calculating UV).
 *
*/
  new(): PlaceholderTexture3D; 
  static "new"(): PlaceholderTexture3D 


/** The texture's size (in pixels). */
size: Vector3i;



  connect<T extends SignalsOf<PlaceholderTexture3D>>(signal: T, method: SignalFunction<PlaceholderTexture3D[T]>): number;






}

