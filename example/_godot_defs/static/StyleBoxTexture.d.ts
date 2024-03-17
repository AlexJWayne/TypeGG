
/**
 * A texture-based nine-patch [StyleBox], in a way similar to [NinePatchRect]. This stylebox performs a 3×3 scaling of a texture, where only the center cell is fully stretched. This makes it possible to design bordered styles regardless of the stylebox's size.
 *
*/
declare class StyleBoxTexture extends StyleBox  {

  
/**
 * A texture-based nine-patch [StyleBox], in a way similar to [NinePatchRect]. This stylebox performs a 3×3 scaling of a texture, where only the center cell is fully stretched. This makes it possible to design bordered styles regardless of the stylebox's size.
 *
*/
  new(): StyleBoxTexture; 
  static "new"(): StyleBoxTexture 


/** Controls how the stylebox's texture will be stretched or tiled horizontally. See [enum AxisStretchMode] for possible values. */
axis_stretch_horizontal: int;

/** Controls how the stylebox's texture will be stretched or tiled vertically. See [enum AxisStretchMode] for possible values. */
axis_stretch_vertical: int;

/** If [code]true[/code], the nine-patch texture's center tile will be drawn. */
draw_center: boolean;

/** Expands the bottom margin of this style box when drawing, causing it to be drawn larger than requested. */
expand_margin_bottom: float;

/** Expands the left margin of this style box when drawing, causing it to be drawn larger than requested. */
expand_margin_left: float;

/** Expands the right margin of this style box when drawing, causing it to be drawn larger than requested. */
expand_margin_right: float;

/** Expands the top margin of this style box when drawing, causing it to be drawn larger than requested. */
expand_margin_top: float;

/** Modulates the color of the texture when this style box is drawn. */
modulate_color: Color;

/**
 * Species a sub-region of the texture to use.
 *
 * This is equivalent to first wrapping the texture in an [AtlasTexture] with the same region.
 *
 * If empty (`Rect2(0, 0, 0, 0)`), the whole texture will be used.
 *
*/
region_rect: Rect2;

/** The texture to use when drawing this style box. */
texture: Texture2D;

/**
 * Increases the bottom margin of the 3×3 texture box.
 *
 * A higher value means more of the source texture is considered to be part of the bottom border of the 3×3 box.
 *
 * This is also the value used as fallback for [member StyleBox.content_margin_bottom] if it is negative.
 *
*/
texture_margin_bottom: float;

/**
 * Increases the left margin of the 3×3 texture box.
 *
 * A higher value means more of the source texture is considered to be part of the left border of the 3×3 box.
 *
 * This is also the value used as fallback for [member StyleBox.content_margin_left] if it is negative.
 *
*/
texture_margin_left: float;

/**
 * Increases the right margin of the 3×3 texture box.
 *
 * A higher value means more of the source texture is considered to be part of the right border of the 3×3 box.
 *
 * This is also the value used as fallback for [member StyleBox.content_margin_right] if it is negative.
 *
*/
texture_margin_right: float;

/**
 * Increases the top margin of the 3×3 texture box.
 *
 * A higher value means more of the source texture is considered to be part of the top border of the 3×3 box.
 *
 * This is also the value used as fallback for [member StyleBox.content_margin_top] if it is negative.
 *
*/
texture_margin_top: float;

/** Returns the expand margin size of the specified [enum Side]. */
get_expand_margin(): float;

/** Returns the margin size of the specified [enum Side]. */
get_texture_margin(): float;

/** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
set_expand_margin(): void;

/** Sets the expand margin to [param size] pixels for all sides. */
set_expand_margin_all(): void;

/** Sets the margin to [param size] pixels for the specified [enum Side]. */
set_texture_margin(): void;

/** Sets the margin to [param size] pixels for all sides. */
set_texture_margin_all(): void;

  connect<T extends SignalsOf<StyleBoxTexture>>(signal: T, method: SignalFunction<StyleBoxTexture[T]>): number;



/**
 * Stretch the stylebox's texture. This results in visible distortion unless the texture size matches the stylebox's size perfectly.
 *
*/
static AXIS_STRETCH_MODE_STRETCH: any;

/**
 * Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system.
 *
*/
static AXIS_STRETCH_MODE_TILE: any;

/**
 * Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system. Unlike [constant AXIS_STRETCH_MODE_TILE], the texture may be slightly stretched to make the nine-patch texture tile seamlessly.
 *
*/
static AXIS_STRETCH_MODE_TILE_FIT: any;



}

