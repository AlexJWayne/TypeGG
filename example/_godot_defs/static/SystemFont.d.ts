
/**
 * [SystemFont] loads a font from a system font with the first matching name from [member font_names].
 *
 * It will attempt to match font style, but it's not guaranteed.
 *
 * The returned font might be part of a font collection or be a variable font with OpenType "weight", "width" and/or "italic" features set.
 *
 * You can create [FontVariation] of the system font for fine control over its features.
 *
 * **Note:** This class is implemented on iOS, Linux, macOS and Windows, on other platforms it will fallback to default theme font.
 *
*/
declare class SystemFont extends Font  {

  
/**
 * [SystemFont] loads a font from a system font with the first matching name from [member font_names].
 *
 * It will attempt to match font style, but it's not guaranteed.
 *
 * The returned font might be part of a font collection or be a variable font with OpenType "weight", "width" and/or "italic" features set.
 *
 * You can create [FontVariation] of the system font for fine control over its features.
 *
 * **Note:** This class is implemented on iOS, Linux, macOS and Windows, on other platforms it will fallback to default theme font.
 *
*/
  new(): SystemFont; 
  static "new"(): SystemFont 


/** If set to [code]true[/code], system fonts can be automatically used as fallbacks. */
allow_system_fallback: boolean;

/** Font anti-aliasing mode. */
antialiasing: int;

/** If set to [code]true[/code], italic or oblique font is preferred. */
font_italic: boolean;

/** Array of font family names to search, first matching font found is used. */
font_names: PackedStringArray;

/** Preferred font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code]. */
font_stretch: int;

/** Preferred weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code]. */
font_weight: int;

/** If set to [code]true[/code], auto-hinting is supported and preferred over font built-in hinting. */
force_autohinter: boolean;

/** If set to [code]true[/code], generate mipmaps for the font textures. */
generate_mipmaps: boolean;

/** Font hinting mode. */
hinting: int;

/** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least [i]twice[/i] the size of the largest font outline. The default [member msdf_pixel_range] value of [code]16[/code] allows outline sizes up to [code]8[/code] to look correct. */
msdf_pixel_range: int;

/** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
msdf_size: int;

/** If set to [code]true[/code], glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
multichannel_signed_distance_field: boolean;

/** Font oversampling factor, if set to [code]0.0[/code] global oversampling factor is used instead. */
oversampling: float;

/** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of memory usage and font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
subpixel_positioning: int;



  connect<T extends SignalsOf<SystemFont>>(signal: T, method: SignalFunction<SystemFont[T]>): number;






}

