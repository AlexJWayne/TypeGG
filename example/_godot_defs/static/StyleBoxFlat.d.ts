
/**
 * By configuring various properties of this style box, you can achieve many common looks without the need of a texture. This includes optionally rounded borders, antialiasing, shadows, and skew.
 *
 * Setting corner radius to high values is allowed. As soon as corners overlap, the stylebox will switch to a relative system.
 *
 * **Example:**
 *
 * @example 
 * 
 * height = 30
 * corner_radius_top_left = 50
 * corner_radius_bottom_left = 100
 * @summary 
 * 
 *
 * The relative system now would take the 1:2 ratio of the two left corners to calculate the actual corner width. Both corners added will **never** be more than the height. Result:
 *
 * @example 
 * 
 * corner_radius_top_left: 10
 * corner_radius_bottom_left: 20
 * @summary 
 * 
 *
*/
declare class StyleBoxFlat extends StyleBox  {

  
/**
 * By configuring various properties of this style box, you can achieve many common looks without the need of a texture. This includes optionally rounded borders, antialiasing, shadows, and skew.
 *
 * Setting corner radius to high values is allowed. As soon as corners overlap, the stylebox will switch to a relative system.
 *
 * **Example:**
 *
 * @example 
 * 
 * height = 30
 * corner_radius_top_left = 50
 * corner_radius_bottom_left = 100
 * @summary 
 * 
 *
 * The relative system now would take the 1:2 ratio of the two left corners to calculate the actual corner width. Both corners added will **never** be more than the height. Result:
 *
 * @example 
 * 
 * corner_radius_top_left: 10
 * corner_radius_bottom_left: 20
 * @summary 
 * 
 *
*/
  new(): StyleBoxFlat; 
  static "new"(): StyleBoxFlat 


/**
 * Antialiasing draws a small ring around the edges, which fades to transparency. As a result, edges look much smoother. This is only noticeable when using rounded corners or [member skew].
 *
 * **Note:** When using beveled corners with 45-degree angles ([member corner_detail] = 1), it is recommended to set [member anti_aliasing] to `false` to ensure crisp visuals and avoid possible visual glitches.
 *
*/
anti_aliasing: boolean;

/**
 * This changes the size of the antialiasing effect. `1.0` is recommended for an optimal result at 100% scale, identical to how rounded rectangles are rendered in web browsers and most vector drawing software.
 *
 * **Note:** Higher values may produce a blur effect but can also create undesired artifacts on small boxes with large-radius corners.
 *
*/
anti_aliasing_size: float;

/** The background color of the stylebox. */
bg_color: Color;

/** If [code]true[/code], the border will fade into the background color. */
border_blend: boolean;

/** Sets the color of the border. */
border_color: Color;

/** Border width for the bottom border. */
border_width_bottom: int;

/** Border width for the left border. */
border_width_left: int;

/** Border width for the right border. */
border_width_right: int;

/** Border width for the top border. */
border_width_top: int;

/**
 * This sets the number of vertices used for each corner. Higher values result in rounder corners but take more processing power to compute. When choosing a value, you should take the corner radius ([method set_corner_radius_all]) into account.
 *
 * For corner radii less than 10, `4` or `5` should be enough. For corner radii less than 30, values between `8` and `12` should be enough.
 *
 * A corner detail of `1` will result in chamfered corners instead of rounded corners, which is useful for some artistic effects.
 *
*/
corner_detail: int;

/** The bottom-left corner's radius. If [code]0[/code], the corner is not rounded. */
corner_radius_bottom_left: int;

/** The bottom-right corner's radius. If [code]0[/code], the corner is not rounded. */
corner_radius_bottom_right: int;

/** The top-left corner's radius. If [code]0[/code], the corner is not rounded. */
corner_radius_top_left: int;

/** The top-right corner's radius. If [code]0[/code], the corner is not rounded. */
corner_radius_top_right: int;

/** Toggles drawing of the inner part of the stylebox. */
draw_center: boolean;

/**
 * Expands the stylebox outside of the control rect on the bottom edge. Useful in combination with [member border_width_bottom] to draw a border outside the control rect.
 *
 * **Note:** Unlike [member StyleBox.content_margin_bottom], [member expand_margin_bottom] does **not** affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.
 *
*/
expand_margin_bottom: float;

/**
 * Expands the stylebox outside of the control rect on the left edge. Useful in combination with [member border_width_left] to draw a border outside the control rect.
 *
 * **Note:** Unlike [member StyleBox.content_margin_left], [member expand_margin_left] does **not** affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.
 *
*/
expand_margin_left: float;

/**
 * Expands the stylebox outside of the control rect on the right edge. Useful in combination with [member border_width_right] to draw a border outside the control rect.
 *
 * **Note:** Unlike [member StyleBox.content_margin_right], [member expand_margin_right] does **not** affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.
 *
*/
expand_margin_right: float;

/**
 * Expands the stylebox outside of the control rect on the top edge. Useful in combination with [member border_width_top] to draw a border outside the control rect.
 *
 * **Note:** Unlike [member StyleBox.content_margin_top], [member expand_margin_top] does **not** affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.
 *
*/
expand_margin_top: float;

/** The color of the shadow. This has no effect if [member shadow_size] is lower than 1. */
shadow_color: Color;

/** The shadow offset in pixels. Adjusts the position of the shadow relatively to the stylebox. */
shadow_offset: Vector2;

/** The shadow size in pixels. */
shadow_size: int;

/**
 * If set to a non-zero value on either axis, [member skew] distorts the StyleBox horizontally and/or vertically. This can be used for "futuristic"-style UIs. Positive values skew the StyleBox towards the right (X axis) and upwards (Y axis), while negative values skew the StyleBox towards the left (X axis) and downwards (Y axis).
 *
 * **Note:** To ensure text does not touch the StyleBox's edges, consider increasing the [StyleBox]'s content margin (see [member StyleBox.content_margin_bottom]). It is preferable to increase the content margin instead of the expand margin (see [member expand_margin_bottom]), as increasing the expand margin does not increase the size of the clickable area for [Control]s.
 *
*/
skew: Vector2;

/** Returns the specified [enum Side]'s border width. */
get_border_width(): int;

/** Returns the smallest border width out of all four borders. */
get_border_width_min(): int;

/** Returns the given [param corner]'s radius. See [enum Corner] for possible values. */
get_corner_radius(): int;

/** Returns the size of the specified [enum Side]'s expand margin. */
get_expand_margin(): float;

/** Sets the specified [enum Side]'s border width to [param width] pixels. */
set_border_width(): void;

/** Sets the border width to [param width] pixels for all sides. */
set_border_width_all(): void;

/** Sets the corner radius to [param radius] pixels for the given [param corner]. See [enum Corner] for possible values. */
set_corner_radius(): void;

/** Sets the corner radius to [param radius] pixels for all corners. */
set_corner_radius_all(): void;

/** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
set_expand_margin(): void;

/** Sets the expand margin to [param size] pixels for all sides. */
set_expand_margin_all(): void;

  connect<T extends SignalsOf<StyleBoxFlat>>(signal: T, method: SignalFunction<StyleBoxFlat[T]>): number;






}

