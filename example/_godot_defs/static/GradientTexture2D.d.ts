
/**
 * A 2D texture that obtains colors from a [Gradient] to fill the texture data. This texture is able to transform a color transition into different patterns such as a linear or a radial gradient. The gradient is sampled individually for each pixel so it does not necessarily represent an exact copy of the gradient(see [member width] and [member height]). See also [GradientTexture1D], [CurveTexture] and [CurveXYZTexture].
 *
*/
declare class GradientTexture2D extends Texture2D  {

  
/**
 * A 2D texture that obtains colors from a [Gradient] to fill the texture data. This texture is able to transform a color transition into different patterns such as a linear or a radial gradient. The gradient is sampled individually for each pixel so it does not necessarily represent an exact copy of the gradient(see [member width] and [member height]). See also [GradientTexture1D], [CurveTexture] and [CurveXYZTexture].
 *
*/
  new(): GradientTexture2D; 
  static "new"(): GradientTexture2D 


/** The gradient fill type, one of the [enum Fill] values. The texture is filled by interpolating colors starting from [member fill_from] to [member fill_to] offsets. */
fill: int;

/** The initial offset used to fill the texture specified in UV coordinates. */
fill_from: Vector2;

/** The final offset used to fill the texture specified in UV coordinates. */
fill_to: Vector2;

/** The [Gradient] used to fill the texture. */
gradient: Gradient;

/** The number of vertical color samples that will be obtained from the [Gradient], which also represents the texture's height. */
height: int;

/** The gradient repeat type, one of the [enum Repeat] values. The texture is filled starting from [member fill_from] to [member fill_to] offsets by default, but the gradient fill can be repeated to cover the entire texture. */
repeat: int;


/** If [code]true[/code], the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is [code]true[/code]. If [code]false[/code], the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
use_hdr: boolean;

/** The number of horizontal color samples that will be obtained from the [Gradient], which also represents the texture's width. */
width: int;



  connect<T extends SignalsOf<GradientTexture2D>>(signal: T, method: SignalFunction<GradientTexture2D[T]>): number;



/**
 * The colors are linearly interpolated in a straight line.
 *
*/
static FILL_LINEAR: any;

/**
 * The colors are linearly interpolated in a circular pattern.
 *
*/
static FILL_RADIAL: any;

/**
 * The colors are linearly interpolated in a square pattern.
 *
*/
static FILL_SQUARE: any;

/**
 * The gradient fill is restricted to the range defined by [member fill_from] to [member fill_to] offsets.
 *
*/
static REPEAT_NONE: any;

/**
 * The texture is filled starting from [member fill_from] to [member fill_to] offsets, repeating the same pattern in both directions.
 *
*/
static REPEAT: any;

/**
 * The texture is filled starting from [member fill_from] to [member fill_to] offsets, mirroring the pattern in both directions.
 *
*/
static REPEAT_MIRROR: any;



}

