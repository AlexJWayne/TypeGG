
/**
 * A node for displaying plain text in 3D space. By adjusting various properties of this node, you can configure things such as the text's appearance and whether it always faces the camera.
 *
*/
declare class Label3D extends GeometryInstance3D  {

  
/**
 * A node for displaying plain text in 3D space. By adjusting various properties of this node, you can configure things such as the text's appearance and whether it always faces the camera.
 *
*/
  new(): Label3D; 
  static "new"(): Label3D 


/** Threshold at which antialiasing will be applied on the alpha channel. */
alpha_antialiasing_edge: float;

/** The type of alpha antialiasing to apply. See [enum BaseMaterial3D.AlphaAntiAliasing]. */
alpha_antialiasing_mode: int;

/** The alpha cutting mode to use for the sprite. See [enum AlphaCutMode] for possible values. */
alpha_cut: int;

/** The hashing scale for Alpha Hash. Recommended values between [code]0[/code] and [code]2[/code]. */
alpha_hash_scale: float;

/** Threshold at which the alpha scissor will discard values. */
alpha_scissor_threshold: float;

/** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
autowrap_mode: int;

/** The billboard mode to use for the label. See [enum BaseMaterial3D.BillboardMode] for possible values. */
billboard: int;


/** If [code]true[/code], text can be seen from the back as well, if [code]false[/code], it is invisible when looking at it from behind. */
double_sided: boolean;

/** If [code]true[/code], the label is rendered at the same size regardless of distance. */
fixed_size: boolean;

/** Font configuration used to display text. */
font: Font;

/**
 * Font size of the [Label3D]'s text. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time.
 *
 * Higher font sizes require more time to render new characters, which can cause stuttering during gameplay.
 *
*/
font_size: int;


/** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
horizontal_alignment: int;

/** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
justification_flags: int;

/** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
language: string;

/** Vertical space between lines in multiline [Label3D]. */
line_spacing: float;

/** Text [Color] of the [Label3D]. */
modulate: Color;

/** If [code]true[/code], depth testing is disabled and the object will be drawn in render order. */
no_depth_test: boolean;

/** The text drawing offset (in pixels). */
offset: Vector2;

/** The tint of text outline. */
outline_modulate: Color;

/**
 * Sets the render priority for the text outline. Higher priority objects will be sorted in front of lower priority objects.
 *
 * **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).
 *
 * **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).
 *
*/
outline_render_priority: int;

/** Text outline size. */
outline_size: int;

/** The size of one pixel's width on the label to scale it in 3D. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time. */
pixel_size: float;

/**
 * Sets the render priority for the text. Higher priority objects will be sorted in front of lower priority objects.
 *
 * **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).
 *
 * **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).
 *
*/
render_priority: int;

/** If [code]true[/code], the [Light3D] in the [Environment] has effects on the label. */
shaded: boolean;

/** Set BiDi algorithm override for the structured text. */
structured_text_bidi_override: int;

/** Set additional options for BiDi override. */
structured_text_bidi_override_options: any[];

/** The text to display on screen. */
text: string;

/** Base text writing direction. */
text_direction: int;

/** Filter flags for the texture. See [enum BaseMaterial3D.TextureFilter] for options. */
texture_filter: int;

/** If [code]true[/code], all the text displays as UPPERCASE. */
uppercase: boolean;

/** Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [enum VerticalAlignment] constants. */
vertical_alignment: int;

/** Text width (in pixels), used for autowrap and fill alignment. */
width: float;

/** Returns a [TriangleMesh] with the label's vertices following its current configuration (such as its [member pixel_size]). */
generate_triangle_mesh(): TriangleMesh;

/** Returns the value of the specified flag. */
get_draw_flag(): boolean;

/** If [code]true[/code], the specified flag will be enabled. See [enum Label3D.DrawFlags] for a list of flags. */
set_draw_flag(): void;

  connect<T extends SignalsOf<Label3D>>(signal: T, method: SignalFunction<Label3D[T]>): number;



/**
 * If set, lights in the environment affect the label.
 *
*/
static FLAG_SHADED: any;

/**
 * If set, text can be seen from the back as well. If not, the text is invisible when looking at it from behind.
 *
*/
static FLAG_DOUBLE_SIDED: any;

/**
 * Disables the depth test, so this object is drawn on top of all others. However, objects drawn after it in the draw order may cover it.
 *
*/
static FLAG_DISABLE_DEPTH_TEST: any;

/**
 * Label is scaled by depth so that it always appears the same size on screen.
 *
*/
static FLAG_FIXED_SIZE: any;

/**
 * Represents the size of the [enum DrawFlags] enum.
 *
*/
static FLAG_MAX: any;

/**
 * This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping. [member GeometryInstance3D.cast_shadow] has no effect when this transparency mode is used; the [Label3D] will never cast shadows.
 *
*/
static ALPHA_CUT_DISABLED: any;

/**
 * This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa]). This mode is also known as **alpha testing** or **1-bit transparency**.
 *
 * **Note:** This mode might have issues with anti-aliased fonts and outlines, try adjusting [member alpha_scissor_threshold] or using MSDF font.
 *
 * **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.
 *
*/
static ALPHA_CUT_DISCARD: any;

/**
 * This mode draws fully opaque pixels in the depth prepass. This is slower than [constant ALPHA_CUT_DISABLED] or [constant ALPHA_CUT_DISCARD], but it allows displaying translucent areas and smooth edges while using proper sorting.
 *
 * **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.
 *
*/
static ALPHA_CUT_OPAQUE_PREPASS: any;

/**
 * This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque.
 *
*/
static ALPHA_CUT_HASH: any;



}

