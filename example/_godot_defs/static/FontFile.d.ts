
/**
 * [FontFile] contains a set of glyphs to represent Unicode characters imported from a font file, as well as a cache of rasterized glyphs, and a set of fallback [Font]s to use.
 *
 * Use [FontVariation] to access specific OpenType variation of the font, create simulated bold / slanted version, and draw lines of text.
 *
 * For more complex text processing, use [FontVariation] in conjunction with [TextLine] or [TextParagraph].
 *
 * Supported font formats:
 *
 * - Dynamic font importer: TrueType (.ttf), TrueType collection (.ttc), OpenType (.otf), OpenType collection (.otc), WOFF (.woff), WOFF2 (.woff2), Type 1 (.pfb, .pfm).
 *
 * - Bitmap font importer: AngelCode BMFont (.fnt, .font), text and binary (version 3) format variants.
 *
 * - Monospace image font importer: All supported image formats.
 *
 * **Note:** A character is a symbol that represents an item (letter, digit etc.) in an abstract way.
 *
 * **Note:** A glyph is a bitmap or a shape used to draw one or more characters in a context-dependent manner. Glyph indices are bound to the specific font data source.
 *
 * **Note:** If none of the font data sources contain glyphs for a character used in a string, the character in question will be replaced with a box displaying its hexadecimal code.
 *
 * @example 
 * 
 * 
 * var f = load("res://BarlowCondensed-Bold.ttf")
 * $Label.add_theme_font_override("font", f)
 * $Label.add_theme_font_size_override("font_size", 64)
 * 
 * 
 * var f = ResourceLoader.Load<FontFile>("res://BarlowCondensed-Bold.ttf");
 * GetNode("Label").AddThemeFontOverride("font", f);
 * GetNode("Label").AddThemeFontSizeOverride("font_size", 64);
 * 
 * @summary 
 * 
 *
*/
declare class FontFile extends Font  {

  
/**
 * [FontFile] contains a set of glyphs to represent Unicode characters imported from a font file, as well as a cache of rasterized glyphs, and a set of fallback [Font]s to use.
 *
 * Use [FontVariation] to access specific OpenType variation of the font, create simulated bold / slanted version, and draw lines of text.
 *
 * For more complex text processing, use [FontVariation] in conjunction with [TextLine] or [TextParagraph].
 *
 * Supported font formats:
 *
 * - Dynamic font importer: TrueType (.ttf), TrueType collection (.ttc), OpenType (.otf), OpenType collection (.otc), WOFF (.woff), WOFF2 (.woff2), Type 1 (.pfb, .pfm).
 *
 * - Bitmap font importer: AngelCode BMFont (.fnt, .font), text and binary (version 3) format variants.
 *
 * - Monospace image font importer: All supported image formats.
 *
 * **Note:** A character is a symbol that represents an item (letter, digit etc.) in an abstract way.
 *
 * **Note:** A glyph is a bitmap or a shape used to draw one or more characters in a context-dependent manner. Glyph indices are bound to the specific font data source.
 *
 * **Note:** If none of the font data sources contain glyphs for a character used in a string, the character in question will be replaced with a box displaying its hexadecimal code.
 *
 * @example 
 * 
 * 
 * var f = load("res://BarlowCondensed-Bold.ttf")
 * $Label.add_theme_font_override("font", f)
 * $Label.add_theme_font_size_override("font_size", 64)
 * 
 * 
 * var f = ResourceLoader.Load<FontFile>("res://BarlowCondensed-Bold.ttf");
 * GetNode("Label").AddThemeFontOverride("font", f);
 * GetNode("Label").AddThemeFontSizeOverride("font_size", 64);
 * 
 * @summary 
 * 
 *
*/
  new(): FontFile; 
  static "new"(): FontFile 


/** If set to [code]true[/code], system fonts can be automatically used as fallbacks. */
allow_system_fallback: boolean;

/** Font anti-aliasing mode. */
antialiasing: int;

/** Contents of the dynamic font source file. */
data: PackedByteArray;

/** Font size, used only for the bitmap fonts. */
fixed_size: int;

/** Scaling mode, used only for the bitmap fonts with [member fixed_size] greater than zero. */
fixed_size_scale_mode: int;

/** Font family name. */
font_name: string;

/** Font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code]. */
font_stretch: int;

/** Font style flags, see [enum TextServer.FontStyle]. */
font_style: int;

/** Weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code]. */
font_weight: int;

/** If set to [code]true[/code], auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only (MSDF fonts don't support hinting). */
force_autohinter: boolean;

/** If set to [code]true[/code], generate mipmaps for the font textures. */
generate_mipmaps: boolean;

/** Font hinting mode. Used by dynamic fonts only. */
hinting: int;

/** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least [i]twice[/i] the size of the largest font outline. The default [member msdf_pixel_range] value of [code]16[/code] allows outline sizes up to [code]8[/code] to look correct. */
msdf_pixel_range: int;

/** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
msdf_size: int;

/**
 * If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field (MSDF) generated from the dynamic font vector data. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [Control]s that are scaled down (or for [Label3D]s viewed from a long distance). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.
 *
 * **Note:** If using font outlines, [member msdf_pixel_range] must be set to at least **twice** the size of the largest font outline.
 *
 * **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.
 *
*/
multichannel_signed_distance_field: boolean;

/** Font OpenType feature set override. */
opentype_feature_overrides: Dictionary<any, any>;

/** Font oversampling factor. If set to [code]0.0[/code], the global oversampling factor is used instead. Used by dynamic fonts only (MSDF fonts ignore oversampling). */
oversampling: float;

/** Font style name. */
style_name: string;

/** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of higher memory usage and lower font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
subpixel_positioning: int;

/** Removes all font cache entries. */
clear_cache(): void;

/**
 * Removes all rendered glyphs information from the cache entry.
 *
 * **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.
 *
*/
clear_glyphs(): void;

/** Removes all kerning overrides. */
clear_kerning_map(): void;

/** Removes all font sizes from the cache entry */
clear_size_cache(): void;

/**
 * Removes all textures from font cache entry.
 *
 * **Note:** This function will not remove glyphs associated with the texture, use [method remove_glyph] to remove them manually.
 *
*/
clear_textures(): void;

/** Returns the font ascent (number of pixels above the baseline). */
get_cache_ascent(): float;

/** Returns number of the font cache entries. */
get_cache_count(): int;

/** Returns the font descent (number of pixels below the baseline). */
get_cache_descent(): float;

/** Returns scaling factor of the color bitmap font. */
get_cache_scale(): float;

/** Returns pixel offset of the underline below the baseline. */
get_cache_underline_position(): float;

/** Returns thickness of the underline in pixels. */
get_cache_underline_thickness(): float;

/** Returns character code associated with [param glyph_index], or [code]0[/code] if [param glyph_index] is invalid. See [method get_glyph_index]. */
get_char_from_glyph_index(): int;

/** Returns embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
get_embolden(): float;

/** Returns spacing for [param spacing] (see [enum TextServer.SpacingType]) in pixels (not relative to the font size). */
get_extra_spacing(): int;

/** Returns an active face index in the TrueType / OpenType collection. */
get_face_index(): int;

/**
 * Returns glyph advance (offset of the next glyph).
 *
 * **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.
 *
*/
get_glyph_advance(): Vector2;

/** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. */
get_glyph_index(): int;

/** Returns list of rendered glyphs in the cache entry. */
get_glyph_list(): PackedInt32Array;

/** Returns glyph offset from the baseline. */
get_glyph_offset(): Vector2;

/** Returns glyph size. */
get_glyph_size(): Vector2;

/** Returns index of the cache texture containing the glyph. */
get_glyph_texture_idx(): int;

/** Returns rectangle in the cache texture containing the glyph. */
get_glyph_uv_rect(): Rect2;

/** Returns kerning for the pair of glyphs. */
get_kerning(): Vector2;

/** Returns list of the kerning overrides. */
get_kerning_list(): Vector2i[];

/** Returns [code]true[/code] if support override is enabled for the [param language]. */
get_language_support_override(): boolean;

/** Returns list of language support overrides. */
get_language_support_overrides(): PackedStringArray;

/** Returns [code]true[/code] if support override is enabled for the [param script]. */
get_script_support_override(): boolean;

/** Returns list of script support overrides. */
get_script_support_overrides(): PackedStringArray;

/** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
get_size_cache_list(): Vector2i[];

/** Returns number of textures used by font cache entry. */
get_texture_count(): int;

/** Returns a copy of the font cache texture image. */
get_texture_image(): Image;

/** Returns a copy of the array containing glyph packing data. */
get_texture_offsets(): PackedInt32Array;

/** Returns 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs. */
get_transform(): Transform2D;

/** Returns variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
get_variation_coordinates(): Dictionary<any, any>;

/**
 * Loads an AngelCode BMFont (.fnt, .font) bitmap font from file [param path].
 *
 * **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.
 *
*/
load_bitmap_font(): int;

/**
 * Loads a TrueType (.ttf), OpenType (.otf), WOFF (.woff), WOFF2 (.woff2) or Type 1 (.pfb, .pfm) dynamic font from file [param path].
 *
 * **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.
 *
*/
load_dynamic_font(): int;

/** Removes specified font cache entry. */
remove_cache(): void;

/**
 * Removes specified rendered glyph information from the cache entry.
 *
 * **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.
 *
*/
remove_glyph(): void;

/** Removes kerning override for the pair of glyphs. */
remove_kerning(): void;

/** Remove language support override. */
remove_language_support_override(): void;

/** Removes script support override. */
remove_script_support_override(): void;

/** Removes specified font size from the cache entry. */
remove_size_cache(): void;

/**
 * Removes specified texture from the cache entry.
 *
 * **Note:** This function will not remove glyphs associated with the texture. Remove them manually using [method remove_glyph].
 *
*/
remove_texture(): void;

/** Renders specified glyph to the font cache texture. */
render_glyph(): void;

/** Renders the range of characters to the font cache texture. */
render_range(): void;

/** Sets the font ascent (number of pixels above the baseline). */
set_cache_ascent(): void;

/** Sets the font descent (number of pixels below the baseline). */
set_cache_descent(): void;

/** Sets scaling factor of the color bitmap font. */
set_cache_scale(): void;

/** Sets pixel offset of the underline below the baseline. */
set_cache_underline_position(): void;

/** Sets thickness of the underline in pixels. */
set_cache_underline_thickness(): void;

/** Sets embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
set_embolden(): void;

/** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
set_extra_spacing(): void;

/** Sets an active face index in the TrueType / OpenType collection. */
set_face_index(): void;

/**
 * Sets glyph advance (offset of the next glyph).
 *
 * **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.
 *
*/
set_glyph_advance(): void;

/** Sets glyph offset from the baseline. */
set_glyph_offset(): void;

/** Sets glyph size. */
set_glyph_size(): void;

/** Sets index of the cache texture containing the glyph. */
set_glyph_texture_idx(): void;

/** Sets rectangle in the cache texture containing the glyph. */
set_glyph_uv_rect(): void;

/** Sets kerning for the pair of glyphs. */
set_kerning(): void;

/** Adds override for [method Font.is_language_supported]. */
set_language_support_override(): void;

/** Adds override for [method Font.is_script_supported]. */
set_script_support_override(): void;

/** Sets font cache texture image. */
set_texture_image(): void;

/** Sets array containing glyph packing data. */
set_texture_offsets(): void;

/** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs. */
set_transform(): void;

/** Sets variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
set_variation_coordinates(): void;

  connect<T extends SignalsOf<FontFile>>(signal: T, method: SignalFunction<FontFile[T]>): number;






}

