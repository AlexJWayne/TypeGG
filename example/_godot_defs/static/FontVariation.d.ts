
/**
 * Provides OpenType variations, simulated bold / slant, and additional font settings like OpenType features and extra spacing.
 *
 * To use simulated bold font variant:
 *
 * @example 
 * 
 * 
 * var fv = FontVariation.new()
 * fv.set_base_font(load("res://BarlowCondensed-Regular.ttf"))
 * fv.set_variation_embolden(1.2)
 * $Label.add_theme_font_override("font", fv)
 * $Label.add_theme_font_size_override("font_size", 64)
 * 
 * 
 * var fv = new FontVariation();
 * fv.SetBaseFont(ResourceLoader.Load<FontFile>("res://BarlowCondensed-Regular.ttf"));
 * fv.SetVariationEmbolden(1.2);
 * GetNode("Label").AddThemeFontOverride("font", fv);
 * GetNode("Label").AddThemeFontSizeOverride("font_size", 64);
 * 
 * @summary 
 * 
 *
 * To set the coordinate of multiple variation axes:
 *
 * @example 
 * 
 * var fv = FontVariation.new();
 * var ts = TextServerManager.get_primary_interface()
 * fv.base_font = load("res://BarlowCondensed-Regular.ttf")
 * fv.variation_opentype = { ts.name_to_tag("wght"): 900, ts.name_to_tag("custom_hght"): 900 }
 * @summary 
 * 
 *
*/
declare class FontVariation extends Font  {

  
/**
 * Provides OpenType variations, simulated bold / slant, and additional font settings like OpenType features and extra spacing.
 *
 * To use simulated bold font variant:
 *
 * @example 
 * 
 * 
 * var fv = FontVariation.new()
 * fv.set_base_font(load("res://BarlowCondensed-Regular.ttf"))
 * fv.set_variation_embolden(1.2)
 * $Label.add_theme_font_override("font", fv)
 * $Label.add_theme_font_size_override("font_size", 64)
 * 
 * 
 * var fv = new FontVariation();
 * fv.SetBaseFont(ResourceLoader.Load<FontFile>("res://BarlowCondensed-Regular.ttf"));
 * fv.SetVariationEmbolden(1.2);
 * GetNode("Label").AddThemeFontOverride("font", fv);
 * GetNode("Label").AddThemeFontSizeOverride("font_size", 64);
 * 
 * @summary 
 * 
 *
 * To set the coordinate of multiple variation axes:
 *
 * @example 
 * 
 * var fv = FontVariation.new();
 * var ts = TextServerManager.get_primary_interface()
 * fv.base_font = load("res://BarlowCondensed-Regular.ttf")
 * fv.variation_opentype = { ts.name_to_tag("wght"): 900, ts.name_to_tag("custom_hght"): 900 }
 * @summary 
 * 
 *
*/
  new(): FontVariation; 
  static "new"(): FontVariation 


/** Base font used to create a variation. If not set, default [Theme] font is used. */
base_font: Font;

/** A set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
opentype_features: Dictionary<any, any>;

/** Extra spacing at the bottom of the line in pixels. */
spacing_bottom: int;

/** Extra spacing between graphical glyphs. */
spacing_glyph: int;

/** Extra width of the space glyphs. */
spacing_space: int;

/** Extra spacing at the top of the line in pixels. */
spacing_top: int;

/**
 * If is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.
 *
 * **Note:** Emboldened fonts might have self-intersecting outlines, which will prevent MSDF fonts and [TextMesh] from working correctly.
 *
*/
variation_embolden: float;

/** Active face index in the TrueType / OpenType collection file. */
variation_face_index: int;

/**
 * Font OpenType variation coordinates. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]OpenType variation tags[/url].
 *
 * **Note:** This [Dictionary] uses OpenType tags as keys. Variation axes can be identified both by tags ([int], e.g. `0x77678674`) and names ([String], e.g. `wght`). Some axes might be accessible by multiple names. For example, `wght` refers to the same axis as `weight`. Tags on the other hand are unique. To convert between names and tags, use [method TextServer.name_to_tag] and [method TextServer.tag_to_name].
 *
 * **Note:** To get available variation axes of a font, use [method Font.get_supported_variation_list].
 *
*/
variation_opentype: Dictionary<any, any>;

/**
 * 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.
 *
 * For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.
 *
*/
variation_transform: Transform2D;

/** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
set_spacing(): void;

  connect<T extends SignalsOf<FontVariation>>(signal: T, method: SignalFunction<FontVariation[T]>): number;






}

