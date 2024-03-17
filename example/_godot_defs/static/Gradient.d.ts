
/**
 * This resource describes a color transition by defining a set of colored points and how to interpolate between them.
 *
 * See also [Curve] which supports more complex easing methods, but does not support colors.
 *
*/
declare class Gradient extends Resource  {

  
/**
 * This resource describes a color transition by defining a set of colored points and how to interpolate between them.
 *
 * See also [Curve] which supports more complex easing methods, but does not support colors.
 *
*/
  new(): Gradient; 
  static "new"(): Gradient 


/**
 * Gradient's colors returned as a [PackedColorArray].
 *
 * **Note:** This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_color] method (for updating colors individually) or assign to this property directly (for bulk-updating all colors at once).
 *
*/
colors: PackedColorArray;

/**
 * The color space used to interpolate between points of the gradient. It does not affect the returned colors, which will always be in sRGB space. See [enum ColorSpace] for available modes.
 *
 * **Note:** This setting has no effect when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].
 *
*/
interpolation_color_space: int;

/** The algorithm used to interpolate between points of the gradient. See [enum InterpolationMode] for available modes. */
interpolation_mode: int;

/**
 * Gradient's offsets returned as a [PackedFloat32Array].
 *
 * **Note:** This property returns a copy, modifying the return value does not update the gradient. To update the gradient use [method set_offset] method (for updating offsets individually) or assign to this property directly (for bulk-updating all offsets at once).
 *
*/
offsets: PackedFloat32Array;

/** Adds the specified color to the gradient, with the specified offset. */
add_point(): void;

/** Returns the color of the gradient color at index [param point]. */
get_color(): Color;

/** Returns the offset of the gradient color at index [param point]. */
get_offset(): float;

/** Returns the number of colors in the gradient. */
get_point_count(): int;

/** Removes the color at index [param point]. */
remove_point(): void;

/**
 * Reverses/mirrors the gradient.
 *
 * **Note:** This method mirrors all points around the middle of the gradient, which may produce unexpected results when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].
 *
*/
reverse(): void;

/** Returns the interpolated color specified by [param offset]. */
sample(): Color;

/** Sets the color of the gradient color at index [param point]. */
set_color(): void;

/** Sets the offset for the gradient color at index [param point]. */
set_offset(): void;

  connect<T extends SignalsOf<Gradient>>(signal: T, method: SignalFunction<Gradient[T]>): number;



/**
 * Linear interpolation.
 *
*/
static GRADIENT_INTERPOLATE_LINEAR: any;

/**
 * Constant interpolation, color changes abruptly at each point and stays uniform between. This might cause visible aliasing when used for a gradient texture in some cases.
 *
*/
static GRADIENT_INTERPOLATE_CONSTANT: any;

/**
 * Cubic interpolation.
 *
*/
static GRADIENT_INTERPOLATE_CUBIC: any;

/**
 * sRGB color space.
 *
*/
static GRADIENT_COLOR_SPACE_SRGB: any;

/**
 * Linear sRGB color space.
 *
*/
static GRADIENT_COLOR_SPACE_LINEAR_SRGB: any;

/**
 * [url=https://bottosson.github.io/posts/oklab/]Oklab[/url] color space. This color space provides a smooth and uniform-looking transition between colors.
 *
*/
static GRADIENT_COLOR_SPACE_OKLAB: any;



}

