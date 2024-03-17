
/**
 * Casts light in a 2D environment. This light's shape is defined by a (usually grayscale) texture.
 *
*/
declare class PointLight2D extends Light2D  {

  
/**
 * Casts light in a 2D environment. This light's shape is defined by a (usually grayscale) texture.
 *
*/
  new(): PointLight2D; 
  static "new"(): PointLight2D 


/** The height of the light. Used with 2D normal mapping. The units are in pixels, e.g. if the height is 100, then it will illuminate an object 100 pixels away at a 45° angle to the plane. */
height: float;

/** The offset of the light's [member texture]. */
offset: Vector2;

/** [Texture2D] used for the light's appearance. */
texture: Texture2D;

/** The [member texture]'s scale factor. */
texture_scale: float;



  connect<T extends SignalsOf<PointLight2D>>(signal: T, method: SignalFunction<PointLight2D[T]>): number;






}

