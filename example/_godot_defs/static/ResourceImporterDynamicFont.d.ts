
/**
 * Unlike bitmap fonts, dynamic fonts can be resized to any size and still look crisp. Dynamic fonts also optionally support MSDF font rendering, which allows for run-time scale changes with no re-rasterization cost.
 *
 * While WOFF and especially WOFF2 tend to result in smaller file sizes, there is no universally "better" font format. In most situations, it's recommended to use the font format that was shipped on the font developer's website.
 *
 * See also [ResourceImporterBMFont] and [ResourceImporterImageFont].
 *
*/
declare class ResourceImporterDynamicFont extends ResourceImporter  {

  
/**
 * Unlike bitmap fonts, dynamic fonts can be resized to any size and still look crisp. Dynamic fonts also optionally support MSDF font rendering, which allows for run-time scale changes with no re-rasterization cost.
 *
 * While WOFF and especially WOFF2 tend to result in smaller file sizes, there is no universally "better" font format. In most situations, it's recommended to use the font format that was shipped on the font developer's website.
 *
 * See also [ResourceImporterBMFont] and [ResourceImporterImageFont].
 *
*/
  new(): ResourceImporterDynamicFont; 
  static "new"(): ResourceImporterDynamicFont 


/**
 * If `true`, automatically use system fonts as a fallback if a glyph isn't found in this dynamic font. This makes supporting CJK characters or emoji more straightforward, as you don't need to include a CJK/emoji font in your project. See also [member fallbacks].
 *
 * **Note:** The appearance of system fonts varies across platforms. Loading system fonts is only supported on Windows, macOS, Linux, Android and iOS.
 *
*/
allow_system_fallback: boolean;

/**
 * The font antialiasing method to use.
 *
 * **Disabled:** Most suited for pixel art fonts, although you do not **have** to change the antialiasing from the default **Grayscale** if the font file was well-created and the font is used at an integer multiple of its intended size. If pixel art fonts have a bad appearance at their intended size, try setting [member subpixel_positioning] to **Disabled** instead.
 *
 * **Grayscale:** Use grayscale antialiasing. This is the approach used by the operating system on macOS, Android and iOS.
 *
 * **LCD Subpixel:** Use antialiasing with subpixel patterns to make fonts sharper on LCD displays. This is the approach used by the operating system on Windows and most Linux distributions. The downside is that this can introduce "fringing" on edges, especially on display technologies that don't use standard RGB subpixels (such as OLED displays). The LCD subpixel layout is globally controlled by [member ProjectSettings.gui/theme/lcd_subpixel_layout], which also allows falling back to grayscale antialiasing.
 *
*/
antialiasing: int;

/** If [code]true[/code], uses lossless compression for the resulting font. */
compress: boolean;

/** List of font fallbacks to use if a glyph isn't found in this dynamic font. Fonts at the beginning of the array are attempted first, but fallback fonts that don't support the glyph's language and script are attempted last (see [member language_support] and [member script_support]). See also [member allow_system_fallback]. */
fallbacks: any[];

/** If [code]true[/code], forces generation of hinting data for the font using [url=https://freetype.org/]FreeType[/url]'s autohinter. This will make [member hinting] effective with fonts that don't include hinting data. */
force_autohinter: boolean;

/**
 * If `true`, this font will have mipmaps generated. This prevents text from looking grainy when a [Control] is scaled down, or when a [Label3D] is viewed from a long distance (if [member Label3D.texture_filter] is set to a mode that displays mipmaps).
 *
 * Enabling [member generate_mipmaps] increases font generation time and memory usage. Only enable this setting if you actually need it.
 *
*/
generate_mipmaps: boolean;

/**
 * The hinting mode to use. This controls how aggressively glyph edges should be snapped to pixels when rasterizing the font. Depending on personal preference, you may prefer using one hinting mode over the other. Hinting modes other than **None** are only effective if the font contains hinting data (see [member force_autohinter]).
 *
 * **None:** Smoothest appearance, which can make the font look blurry at small sizes.
 *
 * **Light:** Sharp result by snapping glyph edges to pixels on the Y axis only.
 *
 * **Full:** Sharpest by snapping glyph edges to pixels on both X and Y axes.
 *
*/
hinting: int;

/** Override the list of languages supported by this font. If left empty, this is supplied by the font metadata. There is usually no need to change this. See also [member script_support]. */
language_support: Dictionary<any, any>;

/** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least [i]twice[/i] the size of the largest font outline. The default [member msdf_pixel_range] value of [code]8[/code] allows outline sizes up to [code]4[/code] to look correct. */
msdf_pixel_range: int;

/** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. Only effective if [member multichannel_signed_distance_field] is [code]true[/code]. */
msdf_size: int;

/**
 * If set to `true`, the default font will use multichannel signed distance field (MSDF) for crisp rendering at any size. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [Control]s that are scaled down (or for [Label3D]s viewed from a long distance).
 *
 * MSDF font rendering can be combined with [member generate_mipmaps] to further improve font rendering quality when scaled down.
 *
*/
multichannel_signed_distance_field: boolean;

/** The OpenType features to enable, disable or set a value for this font. This can be used to enable optional features provided by the font, such as ligatures or alternative glyphs. The list of supported OpenType features varies on a per-font basis. */
opentype_features: Dictionary<any, any>;

/** If set to a value greater than [code]0.0[/code], overrides the oversampling factor for the font. This can be used to render the font at a higher or lower resolution than intended without affecting its physical size. In most cases, this should be left at [code]0.0[/code]. */
oversampling: float;

/** The glyph ranges to prerender. This can avoid stuttering during gameplay when new characters need to be rendered, especially if [member subpixel_positioning] is enabled. The downside of using preloading is that initial project load times will increase, as well as memory usage. */
preload: any[];

/** Override the list of language scripts supported by this font. If left empty, this is supplied by the font metadata. There is usually no need to change this. See also [member language_support]. */
script_support: Dictionary<any, any>;

/**
 * Subpixel positioning improves font rendering appearance, especially at smaller font sizes. The downside is that it takes more time to initially render the font, which can cause stuttering during gameplay, especially if used with large font sizes. This should be set to **Disabled** for fonts with a pixel art appearance.
 *
 * **Disabled:** No subpixel positioning. Lowest quality, fastest rendering.
 *
 * **Auto:** Use subpixel positioning at small font sizes (the chosen quality varies depending on font size). Large fonts will not use subpixel positioning. This is a good tradeoff between performance and quality.
 *
 * **One Half of a Pixel:** Always perform intermediate subpixel positioning regardless of font size. High quality, slow rendering.
 *
 * **One Quarter of a Pixel:** Always perform precise subpixel positioning regardless of font size. Highest quality, slowest rendering.
 *
*/
subpixel_positioning: int;



  connect<T extends SignalsOf<ResourceImporterDynamicFont>>(signal: T, method: SignalFunction<ResourceImporterDynamicFont[T]>): number;






}

