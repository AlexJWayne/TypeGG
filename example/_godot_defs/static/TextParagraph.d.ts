
/**
 * Abstraction over [TextServer] for handling a single paragraph of text.
 *
*/
declare class TextParagraph extends RefCounted  {

  
/**
 * Abstraction over [TextServer] for handling a single paragraph of text.
 *
*/
  new(): TextParagraph; 
  static "new"(): TextParagraph 


/** Paragraph horizontal alignment. */
alignment: int;

/** Line breaking rules. For more info see [TextServer]. */
break_flags: int;

/** Custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
custom_punctuation: string;

/** Text writing direction. */
direction: int;

/** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
justification_flags: int;

/** Limits the lines of text shown. */
max_lines_visible: int;

/** Text orientation. */
orientation: int;

/** If set to [code]true[/code] text will display control characters. */
preserve_control: boolean;

/** If set to [code]true[/code] text will display invalid characters. */
preserve_invalid: boolean;

/** Sets the clipping behavior when the text exceeds the paragraph's set width. See [enum TextServer.OverrunBehavior] for a description of all modes. */
text_overrun_behavior: int;

/** Paragraph width. */
width: float;

/** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
add_object(): boolean;

/** Adds text span and font to draw it. */
add_string(): boolean;

/** Clears text paragraph (removes text and inline objects). */
clear(): void;

/** Removes dropcap. */
clear_dropcap(): void;

/** Draw all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
draw(): void;

/** Draw drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
draw_dropcap(): void;

/** Draw drop cap outline into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
draw_dropcap_outline(): void;

/** Draw single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
draw_line(): void;

/** Draw outline of the single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
draw_line_outline(): void;

/** Draw outlines of all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
draw_outline(): void;

/** Returns number of lines used by dropcap. */
get_dropcap_lines(): int;

/** Returns drop cap text buffer RID. */
get_dropcap_rid(): RID;

/** Returns drop cap bounding box size. */
get_dropcap_size(): Vector2;

/** Returns the text line ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
get_line_ascent(): float;

/** Returns number of lines in the paragraph. */
get_line_count(): int;

/** Returns the text line descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
get_line_descent(): float;

/** Returns bounding rectangle of the inline object. */
get_line_object_rect(): Rect2;

/** Returns array of inline objects in the line. */
get_line_objects(): any[];

/** Returns character range of the line. */
get_line_range(): Vector2i;

/** Returns TextServer line buffer RID. */
get_line_rid(): RID;

/** Returns size of the bounding box of the line of text. */
get_line_size(): Vector2;

/** Returns pixel offset of the underline below the baseline. */
get_line_underline_position(): float;

/** Returns thickness of the underline. */
get_line_underline_thickness(): float;

/** Returns width (for horizontal layout) or height (for vertical) of the line of text. */
get_line_width(): float;

/** Returns the size of the bounding box of the paragraph, without line breaks. */
get_non_wrapped_size(): Vector2;

/** Returns TextServer full string buffer RID. */
get_rid(): RID;

/** Returns the size of the bounding box of the paragraph. */
get_size(): Vector2;

/** Returns caret character offset at the specified coordinates. This function always returns a valid position. */
hit_test(): int;

/** Sets new size and alignment of embedded object. */
resize_object(): boolean;

/**
 * Overrides BiDi for the structured text.
 *
 * Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.
 *
*/
set_bidi_override(): void;

/** Sets drop cap, overrides previously set drop cap. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
set_dropcap(): boolean;

/** Aligns paragraph to the given tab-stops. */
tab_align(): void;

  connect<T extends SignalsOf<TextParagraph>>(signal: T, method: SignalFunction<TextParagraph[T]>): number;






}

