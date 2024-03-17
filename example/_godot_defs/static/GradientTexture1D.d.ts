
/**
 * A 1D texture that obtains colors from a [Gradient] to fill the texture data. The texture is filled by sampling the gradient for each pixel. Therefore, the texture does not necessarily represent an exact copy of the gradient, as it may miss some colors if there are not enough pixels. See also [GradientTexture2D], [CurveTexture] and [CurveXYZTexture].
 *
*/
declare class GradientTexture1D extends Texture2D  {

  
/**
 * A 1D texture that obtains colors from a [Gradient] to fill the texture data. The texture is filled by sampling the gradient for each pixel. Therefore, the texture does not necessarily represent an exact copy of the gradient, as it may miss some colors if there are not enough pixels. See also [GradientTexture2D], [CurveTexture] and [CurveXYZTexture].
 *
*/
  new(): GradientTexture1D; 
  static "new"(): GradientTexture1D 


/** The [Gradient] used to fill the texture. */
gradient: Gradient;


/** If [code]true[/code], the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is [code]true[/code]. If [code]false[/code], the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
use_hdr: boolean;

/** The number of color samples that will be obtained from the [Gradient]. */
width: int;



  connect<T extends SignalsOf<GradientTexture1D>>(signal: T, method: SignalFunction<GradientTexture1D[T]>): number;






}

