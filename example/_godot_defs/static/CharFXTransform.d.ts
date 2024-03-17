
/**
 * By setting various properties on this object, you can control how individual characters will be displayed in a [RichTextEffect].
 *
*/
declare class CharFXTransform extends RefCounted  {

  
/**
 * By setting various properties on this object, you can control how individual characters will be displayed in a [RichTextEffect].
 *
*/
  new(): CharFXTransform; 
  static "new"(): CharFXTransform 


/** The color the character will be drawn with. */
color: Color;

/**
 * The time elapsed since the [RichTextLabel] was added to the scene tree (in seconds). Time stops when the [RichTextLabel] is paused (see [member Node.process_mode]). Resets when the text in the [RichTextLabel] is changed.
 *
 * **Note:** Time still passes while the [RichTextLabel] is hidden.
 *
*/
elapsed_time: float;

/**
 * Contains the arguments passed in the opening BBCode tag. By default, arguments are strings; if their contents match a type such as [bool], [int] or [float], they will be converted automatically. Color codes in the form `#rrggbb` or `#rgb` will be converted to an opaque [Color]. String arguments may not contain spaces, even if they're quoted. If present, quotes will also be present in the final string.
 *
 * For example, the opening BBCode tag `[example foo=hello bar=true baz=42 color=#ffffff]` will map to the following [Dictionary]:
 *
 * @example 
 * 
 * {"foo": "hello", "bar": true, "baz": 42, "color": Color(1, 1, 1, 1)}
 * @summary 
 * 
 *
*/
env: Dictionary<any, any>;

/** Font resource used to render glyph. */
font: RID;

/** Number of glyphs in the grapheme cluster. This value is set in the first glyph of a cluster. Setting this property won't affect drawing. */
glyph_count: int;

/** Glyph flags. See [enum TextServer.GraphemeFlag] for more info. Setting this property won't affect drawing. */
glyph_flags: int;

/** Font specific glyph index. */
glyph_index: int;

/** The position offset the character will be drawn with (in pixels). */
offset: Vector2;

/** If [code]true[/code], FX transform is called for outline drawing. Setting this property won't affect drawing. */
outline: boolean;

/** Absolute character range in the string, corresponding to the glyph. Setting this property won't affect drawing. */
range: Vector2i;

/** The character offset of the glyph, relative to the current [RichTextEffect] custom block. Setting this property won't affect drawing. */
relative_index: int;

/** The current transform of the current glyph. It can be overridden (for example, by driving the position and rotation from a curve). You can also alter the existing value to apply transforms on top of other effects. */
transform: Transform2D;

/** If [code]true[/code], the character will be drawn. If [code]false[/code], the character will be hidden. Characters around hidden characters will reflow to take the space of hidden characters. If this is not desired, set their [member color] to [code]Color(1, 1, 1, 0)[/code] instead. */
visible: boolean;



  connect<T extends SignalsOf<CharFXTransform>>(signal: T, method: SignalFunction<CharFXTransform[T]>): number;






}

