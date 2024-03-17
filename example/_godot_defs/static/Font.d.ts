
/**
 * Abstract base class for different font types. It has methods for drawing text and font character introspection.
 *
*/
declare class Font extends Resource  {

  
/**
 * Abstract base class for different font types. It has methods for drawing text and font character introspection.
 *
*/
  new(): Font; 
  static "new"(): Font 


/**
 * Array of fallback [Font]s to use as a substitute if a glyph is not found in this current [Font].
 *
 * If this array is empty in a [FontVariation], the [member FontVariation.base_font]'s fallbacks are used instead.
 *
*/
fallbacks: Font[];

/**
 * Draw a single Unicode character [param char] into a canvas item using the font, at a given position, with [param modulate] color. [param pos] specifies the baseline, not the top. To draw from the top, **ascent** must be added to the Y axis.
 *
 * **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.
 *
*/
draw_char(): float;

/**
 * Draw a single Unicode character [param char] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size. [param pos] specifies the baseline, not the top. To draw from the top, **ascent** must be added to the Y axis.
 *
 * **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.
 *
*/
draw_char_outline(): float;

/**
 * Breaks [param text] into lines using rules specified by [param brk_flags] and draws it into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top, **ascent** must be added to the Y axis.
 *
 * See also [method CanvasItem.draw_multiline_string].
 *
*/
draw_multiline_string(): void;

/**
 * Breaks [param text] to the lines using rules specified by [param brk_flags] and draws text outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top, **ascent** must be added to the Y axis.
 *
 * See also [method CanvasItem.draw_multiline_string_outline].
 *
*/
draw_multiline_string_outline(): void;

/**
 * Draw [param text] into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top, **ascent** must be added to the Y axis.
 *
 * See also [method CanvasItem.draw_string].
 *
*/
draw_string(): void;

/**
 * Draw [param text] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top, **ascent** must be added to the Y axis.
 *
 * See also [method CanvasItem.draw_string_outline].
 *
*/
draw_string_outline(): void;

/** Returns [TextServer] RID of the font cache for specific variation. */
find_variation(): RID;

/**
 * Returns the average font ascent (number of pixels above the baseline).
 *
 * **Note:** Real ascent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the ascent of empty line).
 *
*/
get_ascent(): float;

/**
 * Returns the size of a character, optionally taking kerning into account if the next character is provided.
 *
 * **Note:** Do not use this function to calculate width of the string character by character, use [method get_string_size] or [TextLine] instead. The height returned is the font height (see also [method get_height]) and has no relation to the glyph height.
 *
*/
get_char_size(): Vector2;

/**
 * Returns the average font descent (number of pixels below the baseline).
 *
 * **Note:** Real descent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the descent of empty line).
 *
*/
get_descent(): float;

/** Returns number of faces in the TrueType / OpenType collection. */
get_face_count(): int;

/** Returns font family name. */
get_font_name(): string;

/** Returns font stretch amount, compared to a normal width. A percentage value between [code]50%[/code] and [code]200%[/code]. */
get_font_stretch(): int;

/** Returns font style flags, see [enum TextServer.FontStyle]. */
get_font_style(): int;

/** Returns font style name. */
get_font_style_name(): string;

/** Returns weight (boldness) of the font. A value in the [code]100...999[/code] range, normal font weight is [code]400[/code], bold font weight is [code]700[/code]. */
get_font_weight(): int;

/**
 * Returns the total average font height (ascent plus descent) in pixels.
 *
 * **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the height of empty line).
 *
*/
get_height(): float;

/**
 * Returns the size of a bounding box of a string broken into the lines, taking kerning and advance into account.
 *
 * See also [method draw_multiline_string].
 *
*/
get_multiline_string_size(): Vector2;

/** Returns a set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
get_opentype_features(): Dictionary<any, any>;

/** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
get_ot_name_strings(): Dictionary<any, any>;

/** Returns [Array] of valid [Font] [RID]s, which can be passed to the [TextServer] methods. */
get_rids(): RID[];

/** Returns the spacing for the given [code]type[/code] (see [enum TextServer.SpacingType]). */
get_spacing(): int;

/**
 * Returns the size of a bounding box of a single-line string, taking kerning, advance and subpixel positioning into account. See also [method get_multiline_string_size] and [method draw_string].
 *
 * For example, to get the string size as displayed by a single-line Label, use:
 *
 * @example 
 * 
 * 
 * var string_size = $Label.get_theme_font("font").get_string_size($Label.text, HORIZONTAL_ALIGNMENT_LEFT, -1, $Label.get_theme_font_size("font_size"))
 * 
 * 
 * Label label = GetNode<Label>("Label");
 * Vector2 stringSize = label.GetThemeFont("font").GetStringSize(label.Text, HorizontalAlignment.Left, -1, label.GetThemeFontSize("font_size"));
 * 
 * @summary 
 * 
 *
 * **Note:** Since kerning, advance and subpixel positioning are taken into account by [method get_string_size], using separate [method get_string_size] calls on substrings of a string then adding the results together will return a different result compared to using a single [method get_string_size] call on the full string.
 *
 * **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by [method get_height].
 *
*/
get_string_size(): Vector2;

/**
 * Returns a string containing all the characters available in the font.
 *
 * If a given character is included in more than one font data source, it appears only once in the returned string.
 *
*/
get_supported_chars(): string;

/** Returns list of OpenType features supported by font. */
get_supported_feature_list(): Dictionary<any, any>;

/**
 * Returns list of supported [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]variation coordinates[/url], each coordinate is returned as `tag: Vector3i(min_value,max_value,default_value)`.
 *
 * Font variations allow for continuous change of glyph characteristics along some given design axis, such as weight, width or slant.
 *
 * To print available variation axes of a variable font:
 *
 * @example 
 * 
 * var fv = FontVariation.new()
 * fv.set_base_font = load("res://RobotoFlex.ttf")
 * var variation_list = fv.get_supported_variation_list()
 * for tag in variation_list:
 *     var name = TextServerManager.get_primary_interface().tag_to_name(tag)
 *     var values = variation_list[tag]
 *     print("variation axis: %s (%d)\n\tmin, max, default: %s" % [name, tag, values])
 * @summary 
 * 
 *
 * **Note:** To set and get variation coordinates of a [FontVariation], use [member FontVariation.variation_opentype].
 *
*/
get_supported_variation_list(): Dictionary<any, any>;

/**
 * Returns average pixel offset of the underline below the baseline.
 *
 * **Note:** Real underline position of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.
 *
*/
get_underline_position(): float;

/**
 * Returns average thickness of the underline.
 *
 * **Note:** Real underline thickness of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.
 *
*/
get_underline_thickness(): float;

/** Returns [code]true[/code] if a Unicode [param char] is available in the font. */
has_char(): boolean;

/** Returns [code]true[/code], if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
is_language_supported(): boolean;

/** Returns [code]true[/code], if font supports given script ([url=https://en.wikipedia.org/wiki/ISO_15924]ISO 15924[/url] code). */
is_script_supported(): boolean;

/** Sets LRU cache capacity for [code]draw_*[/code] methods. */
set_cache_capacity(): void;

  connect<T extends SignalsOf<Font>>(signal: T, method: SignalFunction<Font[T]>): number;






}

