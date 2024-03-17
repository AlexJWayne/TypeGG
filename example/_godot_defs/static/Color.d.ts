
/**
 * A color represented in RGBA format by a red ([member r]), green ([member g]), blue ([member b]), and alpha ([member a]) component. Each component is a 16-bit floating-point value, usually ranging from `0.0` to `1.0`. Some properties (such as [member CanvasItem.modulate]) may support values greater than `1.0`, for overbright or HDR (High Dynamic Range) colors.
 *
 * Colors can be created in various ways: By the various [Color] constructors, by static methods such as [method from_hsv], and by using a name from the set of standardized colors based on [url=https://en.wikipedia.org/wiki/X11_color_names]X11 color names[/url] with the addition of [constant TRANSPARENT]. GDScript also provides [method @GDScript.Color8], which uses integers from `0` to `255` and doesn't support overbright colors.
 *
 * **Note:** In a boolean context, a Color will evaluate to `false` if it is equal to `Color(0, 0, 0, 1)` (opaque black). Otherwise, a Color will always evaluate to `true`.
 *
 * [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/color_constants.png]Color constants cheatsheet[/url]
 *
*/
declare class ColorConstructor {

  
/**
 * A color represented in RGBA format by a red ([member r]), green ([member g]), blue ([member b]), and alpha ([member a]) component. Each component is a 16-bit floating-point value, usually ranging from `0.0` to `1.0`. Some properties (such as [member CanvasItem.modulate]) may support values greater than `1.0`, for overbright or HDR (High Dynamic Range) colors.
 *
 * Colors can be created in various ways: By the various [Color] constructors, by static methods such as [method from_hsv], and by using a name from the set of standardized colors based on [url=https://en.wikipedia.org/wiki/X11_color_names]X11 color names[/url] with the addition of [constant TRANSPARENT]. GDScript also provides [method @GDScript.Color8], which uses integers from `0` to `255` and doesn't support overbright colors.
 *
 * **Note:** In a boolean context, a Color will evaluate to `false` if it is equal to `Color(0, 0, 0, 1)` (opaque black). Otherwise, a Color will always evaluate to `true`.
 *
 * [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/color_constants.png]Color constants cheatsheet[/url]
 *
*/


/** The color's alpha component, typically on the range of 0 to 1. A value of 0 means that the color is fully transparent. A value of 1 means that the color is fully opaque. */
a: float;

/** Wrapper for [member a] that uses the range 0 to 255, instead of 0 to 1. */
a8: int;

/** The color's blue component, typically on the range of 0 to 1. */
b: float;

/** Wrapper for [member b] that uses the range 0 to 255, instead of 0 to 1. */
b8: int;

/** The color's green component, typically on the range of 0 to 1. */
g: float;

/** Wrapper for [member g] that uses the range 0 to 255, instead of 0 to 1. */
g8: int;

/** The HSV hue of this color, on the range 0 to 1. */
h: float;

/** The color's red component, typically on the range of 0 to 1. */
r: float;

/** Wrapper for [member r] that uses the range 0 to 255, instead of 0 to 1. */
r8: int;

/** The HSV saturation of this color, on the range 0 to 1. */
s: float;

/** The HSV value (brightness) of this color, on the range 0 to 1. */
v: float;

/**
 * Returns a new color resulting from overlaying this color over the given color. In a painting program, you can imagine it as the [param over] color painted over this color (including alpha).
 *
 * @example 
 * 
 * 
 * var bg = Color(0.0, 1.0, 0.0, 0.5) # Green with alpha of 50%
 * var fg = Color(1.0, 0.0, 0.0, 0.5) # Red with alpha of 50%
 * var blended_color = bg.blend(fg) # Brown with alpha of 75%
 * 
 * 
 * var bg = new Color(0.0f, 1.0f, 0.0f, 0.5f); // Green with alpha of 50%
 * var fg = new Color(1.0f, 0.0f, 0.0f, 0.5f); // Red with alpha of 50%
 * Color blendedColor = bg.Blend(fg); // Brown with alpha of 75%
 * 
 * @summary 
 * 
 *
*/
blend(): Color;

/** Returns a new color with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
clamp(): Color;

/**
 * Returns a new color resulting from making this color darker by the specified [param amount] (ratio from 0.0 to 1.0). See also [method lightened].
 *
 * @example 
 * 
 * 
 * var green = Color(0.0, 1.0, 0.0)
 * var darkgreen = green.darkened(0.2) # 20% darker than regular green
 * 
 * 
 * var green = new Color(0.0f, 1.0f, 0.0f);
 * Color darkgreen = green.Darkened(0.2f); // 20% darker than regular green
 * 
 * @summary 
 * 
 *
*/
darkened(): Color;

/**
 * Constructs a color from an [url=https://en.wikipedia.org/wiki/HSL_and_HSV]HSV profile[/url]. The hue ([param h]), saturation ([param s]), and value ([param v]) are typically between 0.0 and 1.0.
 *
 * @example 
 * 
 * 
 * var color = Color.from_hsv(0.58, 0.5, 0.79, 0.8)
 * 
 * 
 * var color = Color.FromHsv(0.58f, 0.5f, 0.79f, 0.8f);
 * 
 * @summary 
 * 
 *
*/
from_hsv(): Color;

/**
 * Constructs a color from an [url=https://bottosson.github.io/posts/colorpicker/]OK HSL profile[/url]. The hue ([param h]), saturation ([param s]), and lightness ([param l]) are typically between 0.0 and 1.0.
 *
 * @example 
 * 
 * 
 * var color = Color.from_ok_hsl(0.58, 0.5, 0.79, 0.8)
 * 
 * 
 * var color = Color.FromOkHsl(0.58f, 0.5f, 0.79f, 0.8f);
 * 
 * @summary 
 * 
 *
*/
from_ok_hsl(): Color;

/** Decodes a [Color] from a RGBE9995 format integer. See [constant Image.FORMAT_RGBE9995]. */
from_rgbe9995(): Color;

/** Creates a [Color] from the given string, which can be either an HTML color code or a named color (case-insensitive). Returns [param default] if the color cannot be inferred from the string. */
from_string(): Color;

/**
 * Returns the light intensity of the color, as a value between 0.0 and 1.0 (inclusive). This is useful when determining light or dark color. Colors with a luminance smaller than 0.5 can be generally considered dark.
 *
 * **Note:** [method get_luminance] relies on the color being in the linear color space to return an accurate relative luminance value. If the color is in the sRGB color space, use [method srgb_to_linear] to convert it to the linear color space first.
 *
*/
get_luminance(): float;

/**
 * Returns the [Color] associated with the provided [param hex] integer in 32-bit RGBA format (8 bits per channel).
 *
 * In GDScript and C#, the [int] is best visualized with hexadecimal notation (`"0x"` prefix, making it `"0xRRGGBBAA"`).
 *
 * @example 
 * 
 * 
 * var red = Color.hex(0xff0000ff)
 * var dark_cyan = Color.hex(0x008b8bff)
 * var my_color = Color.hex(0xbbefd2a4)
 * 
 * 
 * var red = new Color(0xff0000ff);
 * var dark_cyan = new Color(0x008b8bff);
 * var my_color = new Color(0xbbefd2a4);
 * 
 * @summary 
 * 
 *
*/
hex(): Color;

/**
 * Returns the [Color] associated with the provided [param hex] integer in 64-bit RGBA format (16 bits per channel).
 *
 * In GDScript and C#, the [int] is best visualized with hexadecimal notation (`"0x"` prefix, making it `"0xRRRRGGGGBBBBAAAA"`).
 *
*/
hex64(): Color;

/**
 * Returns a new color from [param rgba], an HTML hexadecimal color string. [param rgba] is not case-sensitive, and may be prefixed by a hash sign (`#`).
 *
 * [param rgba] must be a valid three-digit or six-digit hexadecimal color string, and may contain an alpha channel value. If [param rgba] does not contain an alpha channel value, an alpha channel value of 1.0 is applied. If [param rgba] is invalid, returns an empty color.
 *
 * @example 
 * 
 * 
 * var blue = Color.html("#0000ff") # blue is Color(0.0, 0.0, 1.0, 1.0)
 * var green = Color.html("#0F0")   # green is Color(0.0, 1.0, 0.0, 1.0)
 * var col = Color.html("663399cc") # col is Color(0.4, 0.2, 0.6, 0.8)
 * 
 * 
 * var blue = Color.FromHtml("#0000ff"); // blue is Color(0.0, 0.0, 1.0, 1.0)
 * var green = Color.FromHtml("#0F0");   // green is Color(0.0, 1.0, 0.0, 1.0)
 * var col = Color.FromHtml("663399cc"); // col is Color(0.4, 0.2, 0.6, 0.8)
 * 
 * @summary 
 * 
 *
*/
html(): Color;

/**
 * Returns `true` if [param color] is a valid HTML hexadecimal color string. The string must be a hexadecimal value (case-insensitive) of either 3, 4, 6 or 8 digits, and may be prefixed by a hash sign (`#`). This method is identical to [method String.is_valid_html_color].
 *
 * @example 
 * 
 * 
 * Color.html_is_valid("#55aaFF")   # Returns true
 * Color.html_is_valid("#55AAFF20") # Returns true
 * Color.html_is_valid("55AAFF")    # Returns true
 * Color.html_is_valid("#F2C")      # Returns true
 * Color.html_is_valid("#AABBC")    # Returns false
 * Color.html_is_valid("#55aaFF5")  # Returns false
 * 
 * 
 * Color.HtmlIsValid("#55AAFF");   // Returns true
 * Color.HtmlIsValid("#55AAFF20"); // Returns true
 * Color.HtmlIsValid("55AAFF");    // Returns true
 * Color.HtmlIsValid("#F2C");      // Returns true
 * Color.HtmlIsValid("#AABBC");    // Returns false
 * Color.HtmlIsValid("#55aaFF5");  // Returns false
 * 
 * @summary 
 * 
 *
*/
html_is_valid(): boolean;

/**
 * Returns the color with its [member r], [member g], and [member b] components inverted (`(1 - r, 1 - g, 1 - b, a)`).
 *
 * @example 
 * 
 * 
 * var black = Color.WHITE.inverted()
 * var color = Color(0.3, 0.4, 0.9)
 * var inverted_color = color.inverted() # Equivalent to `Color(0.7, 0.6, 0.1)`
 * 
 * 
 * var black = Colors.White.Inverted();
 * var color = new Color(0.3f, 0.4f, 0.9f);
 * Color invertedColor = color.Inverted(); // Equivalent to `new Color(0.7f, 0.6f, 0.1f)`
 * 
 * @summary 
 * 
 *
*/
inverted(): Color;

/** Returns [code]true[/code] if this color and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
is_equal_approx(): boolean;

/**
 * Returns the linear interpolation between this color's components and [param to]'s components. The interpolation factor [param weight] should be between 0.0 and 1.0 (inclusive). See also [method @GlobalScope.lerp].
 *
 * @example 
 * 
 * 
 * var red = Color(1.0, 0.0, 0.0)
 * var aqua = Color(0.0, 1.0, 0.8)
 * red.lerp(aqua, 0.2) # Returns Color(0.8, 0.2, 0.16)
 * red.lerp(aqua, 0.5) # Returns Color(0.5, 0.5, 0.4)
 * red.lerp(aqua, 1.0) # Returns Color(0.0, 1.0, 0.8)
 * 
 * 
 * var red = new Color(1.0f, 0.0f, 0.0f);
 * var aqua = new Color(0.0f, 1.0f, 0.8f);
 * red.Lerp(aqua, 0.2f); // Returns Color(0.8f, 0.2f, 0.16f)
 * red.Lerp(aqua, 0.5f); // Returns Color(0.5f, 0.5f, 0.4f)
 * red.Lerp(aqua, 1.0f); // Returns Color(0.0f, 1.0f, 0.8f)
 * 
 * @summary 
 * 
 *
*/
lerp(): Color;

/**
 * Returns a new color resulting from making this color lighter by the specified [param amount], which should be a ratio from 0.0 to 1.0. See also [method darkened].
 *
 * @example 
 * 
 * 
 * var green = Color(0.0, 1.0, 0.0)
 * var light_green = green.lightened(0.2) # 20% lighter than regular green
 * 
 * 
 * var green = new Color(0.0f, 1.0f, 0.0f);
 * Color lightGreen = green.Lightened(0.2f); // 20% lighter than regular green
 * 
 * @summary 
 * 
 *
*/
lightened(): Color;

/** Returns the color converted to the [url=https://en.wikipedia.org/wiki/SRGB]sRGB[/url] color space. This method assumes the original color is in the linear color space. See also [method srgb_to_linear] which performs the opposite operation. */
linear_to_srgb(): Color;

/** Returns the color converted to the linear color space. This method assumes the original color already is in the sRGB color space. See also [method linear_to_srgb] which performs the opposite operation. */
srgb_to_linear(): Color;

/**
 * Returns the color converted to a 32-bit integer in ABGR format (each component is 8 bits). ABGR is the reversed version of the default RGBA format.
 *
 * @example 
 * 
 * 
 * var color = Color(1, 0.5, 0.2)
 * print(color.to_abgr32()) # Prints 4281565439
 * 
 * 
 * var color = new Color(1.0f, 0.5f, 0.2f);
 * GD.Print(color.ToAbgr32()); // Prints 4281565439
 * 
 * @summary 
 * 
 *
*/
to_abgr32(): int;

/**
 * Returns the color converted to a 64-bit integer in ABGR format (each component is 16 bits). ABGR is the reversed version of the default RGBA format.
 *
 * @example 
 * 
 * 
 * var color = Color(1, 0.5, 0.2)
 * print(color.to_abgr64()) # Prints -225178692812801
 * 
 * 
 * var color = new Color(1.0f, 0.5f, 0.2f);
 * GD.Print(color.ToAbgr64()); // Prints -225178692812801
 * 
 * @summary 
 * 
 *
*/
to_abgr64(): int;

/**
 * Returns the color converted to a 32-bit integer in ARGB format (each component is 8 bits). ARGB is more compatible with DirectX.
 *
 * @example 
 * 
 * 
 * var color = Color(1, 0.5, 0.2)
 * print(color.to_argb32()) # Prints 4294934323
 * 
 * 
 * var color = new Color(1.0f, 0.5f, 0.2f);
 * GD.Print(color.ToArgb32()); // Prints 4294934323
 * 
 * @summary 
 * 
 *
*/
to_argb32(): int;

/**
 * Returns the color converted to a 64-bit integer in ARGB format (each component is 16 bits). ARGB is more compatible with DirectX.
 *
 * @example 
 * 
 * 
 * var color = Color(1, 0.5, 0.2)
 * print(color.to_argb64()) # Prints -2147470541
 * 
 * 
 * var color = new Color(1.0f, 0.5f, 0.2f);
 * GD.Print(color.ToArgb64()); // Prints -2147470541
 * 
 * @summary 
 * 
 *
*/
to_argb64(): int;

/**
 * Returns the color converted to an HTML hexadecimal color [String] in RGBA format, without the hash (`#`) prefix.
 *
 * Setting [param with_alpha] to `false`, excludes alpha from the hexadecimal string, using RGB format instead of RGBA format.
 *
 * @example 
 * 
 * 
 * var white = Color(1, 1, 1, 0.5)
 * var with_alpha = white.to_html() # Returns "ffffff7f"
 * var without_alpha = white.to_html(false) # Returns "ffffff"
 * 
 * 
 * var white = new Color(1, 1, 1, 0.5f);
 * string withAlpha = white.ToHtml(); // Returns "ffffff7f"
 * string withoutAlpha = white.ToHtml(false); // Returns "ffffff"
 * 
 * @summary 
 * 
 *
*/
to_html(): string;

/**
 * Returns the color converted to a 32-bit integer in RGBA format (each component is 8 bits). RGBA is Godot's default format.
 *
 * @example 
 * 
 * 
 * var color = Color(1, 0.5, 0.2)
 * print(color.to_rgba32()) # Prints 4286526463
 * 
 * 
 * var color = new Color(1, 0.5f, 0.2f);
 * GD.Print(color.ToRgba32()); // Prints 4286526463
 * 
 * @summary 
 * 
 *
*/
to_rgba32(): int;

/**
 * Returns the color converted to a 64-bit integer in RGBA format (each component is 16 bits). RGBA is Godot's default format.
 *
 * @example 
 * 
 * 
 * var color = Color(1, 0.5, 0.2)
 * print(color.to_rgba64()) # Prints -140736629309441
 * 
 * 
 * var color = new Color(1, 0.5f, 0.2f);
 * GD.Print(color.ToRgba64()); // Prints -140736629309441
 * 
 * @summary 
 * 
 *
*/
to_rgba64(): int;

  connect<T extends SignalsOf<Color>>(signal: T, method: SignalFunction<Color[T]>): number;



/**
 * Alice blue color.
 *
*/
static ALICE_BLUE: Color;

/**
 * Antique white color.
 *
*/
static ANTIQUE_WHITE: Color;

/**
 * Aqua color.
 *
*/
static AQUA: Color;

/**
 * Aquamarine color.
 *
*/
static AQUAMARINE: Color;

/**
 * Azure color.
 *
*/
static AZURE: Color;

/**
 * Beige color.
 *
*/
static BEIGE: Color;

/**
 * Bisque color.
 *
*/
static BISQUE: Color;

/**
 * Black color. In GDScript, this is the default value of any color.
 *
*/
static BLACK: Color;

/**
 * Blanched almond color.
 *
*/
static BLANCHED_ALMOND: Color;

/**
 * Blue color.
 *
*/
static BLUE: Color;

/**
 * Blue violet color.
 *
*/
static BLUE_VIOLET: Color;

/**
 * Brown color.
 *
*/
static BROWN: Color;

/**
 * Burlywood color.
 *
*/
static BURLYWOOD: Color;

/**
 * Cadet blue color.
 *
*/
static CADET_BLUE: Color;

/**
 * Chartreuse color.
 *
*/
static CHARTREUSE: Color;

/**
 * Chocolate color.
 *
*/
static CHOCOLATE: Color;

/**
 * Coral color.
 *
*/
static CORAL: Color;

/**
 * Cornflower blue color.
 *
*/
static CORNFLOWER_BLUE: Color;

/**
 * Cornsilk color.
 *
*/
static CORNSILK: Color;

/**
 * Crimson color.
 *
*/
static CRIMSON: Color;

/**
 * Cyan color.
 *
*/
static CYAN: Color;

/**
 * Dark blue color.
 *
*/
static DARK_BLUE: Color;

/**
 * Dark cyan color.
 *
*/
static DARK_CYAN: Color;

/**
 * Dark goldenrod color.
 *
*/
static DARK_GOLDENROD: Color;

/**
 * Dark gray color.
 *
*/
static DARK_GRAY: Color;

/**
 * Dark green color.
 *
*/
static DARK_GREEN: Color;

/**
 * Dark khaki color.
 *
*/
static DARK_KHAKI: Color;

/**
 * Dark magenta color.
 *
*/
static DARK_MAGENTA: Color;

/**
 * Dark olive green color.
 *
*/
static DARK_OLIVE_GREEN: Color;

/**
 * Dark orange color.
 *
*/
static DARK_ORANGE: Color;

/**
 * Dark orchid color.
 *
*/
static DARK_ORCHID: Color;

/**
 * Dark red color.
 *
*/
static DARK_RED: Color;

/**
 * Dark salmon color.
 *
*/
static DARK_SALMON: Color;

/**
 * Dark sea green color.
 *
*/
static DARK_SEA_GREEN: Color;

/**
 * Dark slate blue color.
 *
*/
static DARK_SLATE_BLUE: Color;

/**
 * Dark slate gray color.
 *
*/
static DARK_SLATE_GRAY: Color;

/**
 * Dark turquoise color.
 *
*/
static DARK_TURQUOISE: Color;

/**
 * Dark violet color.
 *
*/
static DARK_VIOLET: Color;

/**
 * Deep pink color.
 *
*/
static DEEP_PINK: Color;

/**
 * Deep sky blue color.
 *
*/
static DEEP_SKY_BLUE: Color;

/**
 * Dim gray color.
 *
*/
static DIM_GRAY: Color;

/**
 * Dodger blue color.
 *
*/
static DODGER_BLUE: Color;

/**
 * Firebrick color.
 *
*/
static FIREBRICK: Color;

/**
 * Floral white color.
 *
*/
static FLORAL_WHITE: Color;

/**
 * Forest green color.
 *
*/
static FOREST_GREEN: Color;

/**
 * Fuchsia color.
 *
*/
static FUCHSIA: Color;

/**
 * Gainsboro color.
 *
*/
static GAINSBORO: Color;

/**
 * Ghost white color.
 *
*/
static GHOST_WHITE: Color;

/**
 * Gold color.
 *
*/
static GOLD: Color;

/**
 * Goldenrod color.
 *
*/
static GOLDENROD: Color;

/**
 * Gray color.
 *
*/
static GRAY: Color;

/**
 * Green color.
 *
*/
static GREEN: Color;

/**
 * Green yellow color.
 *
*/
static GREEN_YELLOW: Color;

/**
 * Honeydew color.
 *
*/
static HONEYDEW: Color;

/**
 * Hot pink color.
 *
*/
static HOT_PINK: Color;

/**
 * Indian red color.
 *
*/
static INDIAN_RED: Color;

/**
 * Indigo color.
 *
*/
static INDIGO: Color;

/**
 * Ivory color.
 *
*/
static IVORY: Color;

/**
 * Khaki color.
 *
*/
static KHAKI: Color;

/**
 * Lavender color.
 *
*/
static LAVENDER: Color;

/**
 * Lavender blush color.
 *
*/
static LAVENDER_BLUSH: Color;

/**
 * Lawn green color.
 *
*/
static LAWN_GREEN: Color;

/**
 * Lemon chiffon color.
 *
*/
static LEMON_CHIFFON: Color;

/**
 * Light blue color.
 *
*/
static LIGHT_BLUE: Color;

/**
 * Light coral color.
 *
*/
static LIGHT_CORAL: Color;

/**
 * Light cyan color.
 *
*/
static LIGHT_CYAN: Color;

/**
 * Light goldenrod color.
 *
*/
static LIGHT_GOLDENROD: Color;

/**
 * Light gray color.
 *
*/
static LIGHT_GRAY: Color;

/**
 * Light green color.
 *
*/
static LIGHT_GREEN: Color;

/**
 * Light pink color.
 *
*/
static LIGHT_PINK: Color;

/**
 * Light salmon color.
 *
*/
static LIGHT_SALMON: Color;

/**
 * Light sea green color.
 *
*/
static LIGHT_SEA_GREEN: Color;

/**
 * Light sky blue color.
 *
*/
static LIGHT_SKY_BLUE: Color;

/**
 * Light slate gray color.
 *
*/
static LIGHT_SLATE_GRAY: Color;

/**
 * Light steel blue color.
 *
*/
static LIGHT_STEEL_BLUE: Color;

/**
 * Light yellow color.
 *
*/
static LIGHT_YELLOW: Color;

/**
 * Lime color.
 *
*/
static LIME: Color;

/**
 * Lime green color.
 *
*/
static LIME_GREEN: Color;

/**
 * Linen color.
 *
*/
static LINEN: Color;

/**
 * Magenta color.
 *
*/
static MAGENTA: Color;

/**
 * Maroon color.
 *
*/
static MAROON: Color;

/**
 * Medium aquamarine color.
 *
*/
static MEDIUM_AQUAMARINE: Color;

/**
 * Medium blue color.
 *
*/
static MEDIUM_BLUE: Color;

/**
 * Medium orchid color.
 *
*/
static MEDIUM_ORCHID: Color;

/**
 * Medium purple color.
 *
*/
static MEDIUM_PURPLE: Color;

/**
 * Medium sea green color.
 *
*/
static MEDIUM_SEA_GREEN: Color;

/**
 * Medium slate blue color.
 *
*/
static MEDIUM_SLATE_BLUE: Color;

/**
 * Medium spring green color.
 *
*/
static MEDIUM_SPRING_GREEN: Color;

/**
 * Medium turquoise color.
 *
*/
static MEDIUM_TURQUOISE: Color;

/**
 * Medium violet red color.
 *
*/
static MEDIUM_VIOLET_RED: Color;

/**
 * Midnight blue color.
 *
*/
static MIDNIGHT_BLUE: Color;

/**
 * Mint cream color.
 *
*/
static MINT_CREAM: Color;

/**
 * Misty rose color.
 *
*/
static MISTY_ROSE: Color;

/**
 * Moccasin color.
 *
*/
static MOCCASIN: Color;

/**
 * Navajo white color.
 *
*/
static NAVAJO_WHITE: Color;

/**
 * Navy blue color.
 *
*/
static NAVY_BLUE: Color;

/**
 * Old lace color.
 *
*/
static OLD_LACE: Color;

/**
 * Olive color.
 *
*/
static OLIVE: Color;

/**
 * Olive drab color.
 *
*/
static OLIVE_DRAB: Color;

/**
 * Orange color.
 *
*/
static ORANGE: Color;

/**
 * Orange red color.
 *
*/
static ORANGE_RED: Color;

/**
 * Orchid color.
 *
*/
static ORCHID: Color;

/**
 * Pale goldenrod color.
 *
*/
static PALE_GOLDENROD: Color;

/**
 * Pale green color.
 *
*/
static PALE_GREEN: Color;

/**
 * Pale turquoise color.
 *
*/
static PALE_TURQUOISE: Color;

/**
 * Pale violet red color.
 *
*/
static PALE_VIOLET_RED: Color;

/**
 * Papaya whip color.
 *
*/
static PAPAYA_WHIP: Color;

/**
 * Peach puff color.
 *
*/
static PEACH_PUFF: Color;

/**
 * Peru color.
 *
*/
static PERU: Color;

/**
 * Pink color.
 *
*/
static PINK: Color;

/**
 * Plum color.
 *
*/
static PLUM: Color;

/**
 * Powder blue color.
 *
*/
static POWDER_BLUE: Color;

/**
 * Purple color.
 *
*/
static PURPLE: Color;

/**
 * Rebecca purple color.
 *
*/
static REBECCA_PURPLE: Color;

/**
 * Red color.
 *
*/
static RED: Color;

/**
 * Rosy brown color.
 *
*/
static ROSY_BROWN: Color;

/**
 * Royal blue color.
 *
*/
static ROYAL_BLUE: Color;

/**
 * Saddle brown color.
 *
*/
static SADDLE_BROWN: Color;

/**
 * Salmon color.
 *
*/
static SALMON: Color;

/**
 * Sandy brown color.
 *
*/
static SANDY_BROWN: Color;

/**
 * Sea green color.
 *
*/
static SEA_GREEN: Color;

/**
 * Seashell color.
 *
*/
static SEASHELL: Color;

/**
 * Sienna color.
 *
*/
static SIENNA: Color;

/**
 * Silver color.
 *
*/
static SILVER: Color;

/**
 * Sky blue color.
 *
*/
static SKY_BLUE: Color;

/**
 * Slate blue color.
 *
*/
static SLATE_BLUE: Color;

/**
 * Slate gray color.
 *
*/
static SLATE_GRAY: Color;

/**
 * Snow color.
 *
*/
static SNOW: Color;

/**
 * Spring green color.
 *
*/
static SPRING_GREEN: Color;

/**
 * Steel blue color.
 *
*/
static STEEL_BLUE: Color;

/**
 * Tan color.
 *
*/
static TAN: Color;

/**
 * Teal color.
 *
*/
static TEAL: Color;

/**
 * Thistle color.
 *
*/
static THISTLE: Color;

/**
 * Tomato color.
 *
*/
static TOMATO: Color;

/**
 * Transparent color (white with zero alpha).
 *
*/
static TRANSPARENT: Color;

/**
 * Turquoise color.
 *
*/
static TURQUOISE: Color;

/**
 * Violet color.
 *
*/
static VIOLET: Color;

/**
 * Web gray color.
 *
*/
static WEB_GRAY: Color;

/**
 * Web green color.
 *
*/
static WEB_GREEN: Color;

/**
 * Web maroon color.
 *
*/
static WEB_MAROON: Color;

/**
 * Web purple color.
 *
*/
static WEB_PURPLE: Color;

/**
 * Wheat color.
 *
*/
static WHEAT: Color;

/**
 * White color.
 *
*/
static WHITE: Color;

/**
 * White smoke color.
 *
*/
static WHITE_SMOKE: Color;

/**
 * Yellow color.
 *
*/
static YELLOW: Color;

/**
 * Yellow green color.
 *
*/
static YELLOW_GREEN: Color;



}

declare type Color = ColorConstructor;
declare var Color: typeof ColorConstructor & {
    new(): Color; 



}
