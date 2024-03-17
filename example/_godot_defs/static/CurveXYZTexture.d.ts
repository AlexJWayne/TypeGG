
/**
 * A 1D texture where the red, green, and blue color channels correspond to points on 3 [Curve] resources. Compared to using separate [CurveTexture]s, this further simplifies the task of saving curves as image files.
 *
 * If you only need to store one curve within a single texture, use [CurveTexture] instead. See also [GradientTexture1D] and [GradientTexture2D].
 *
*/
declare class CurveXYZTexture extends Texture2D  {

  
/**
 * A 1D texture where the red, green, and blue color channels correspond to points on 3 [Curve] resources. Compared to using separate [CurveTexture]s, this further simplifies the task of saving curves as image files.
 *
 * If you only need to store one curve within a single texture, use [CurveTexture] instead. See also [GradientTexture1D] and [GradientTexture2D].
 *
*/
  new(): CurveXYZTexture; 
  static "new"(): CurveXYZTexture 


/** The [Curve] that is rendered onto the texture's red channel. */
curve_x: Curve;

/** The [Curve] that is rendered onto the texture's green channel. */
curve_y: Curve;

/** The [Curve] that is rendered onto the texture's blue channel. */
curve_z: Curve;


/** The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage. */
width: int;



  connect<T extends SignalsOf<CurveXYZTexture>>(signal: T, method: SignalFunction<CurveXYZTexture[T]>): number;






}

