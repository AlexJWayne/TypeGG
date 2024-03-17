
/**
 * Abstraction over [TextServer] for handling a single line of text.
 *
*/
declare class TextLine extends RefCounted  {

  
/**
 * Abstraction over [TextServer] for handling a single line of text.
 *
*/
  new(): TextLine; 
  static "new"(): TextLine 


/** Sets text alignment within the line as if the line was horizontal. */
alignment: int;

/** Text writing direction. */
direction: int;

/** Line alignment rules. For more info see [TextServer]. */
flags: int;

/** Text orientation. */
orientation: int;

/** If set to [code]true[/code] text will display control characters. */
preserve_control: boolean;

/** If set to [code]true[/code] text will display invalid characters. */
preserve_invalid: boolean;

/** Sets the clipping behavior when the text exceeds the text line's set width. See [enum TextServer.OverrunBehavior] for a description of all modes. */
text_overrun_behavior: int;

/** Text line width. */
width: float;

/** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
add_object(): boolean;

/** Adds text span and font to draw it. */
add_string(): boolean;

/** Clears text line (removes text and inline objects). */
clear(): void;

/** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
draw(): void;

/** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
draw_outline(): void;

/** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
get_line_ascent(): float;

/** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
get_line_descent(): float;

/** Returns pixel offset of the underline below the baseline. */
get_line_underline_position(): float;

/** Returns thickness of the underline. */
get_line_underline_thickness(): float;

/** Returns width (for horizontal layout) or height (for vertical) of the text. */
get_line_width(): float;

/** Returns bounding rectangle of the inline object. */
get_object_rect(): Rect2;

/** Returns array of inline objects. */
get_objects(): any[];

/** Returns TextServer buffer RID. */
get_rid(): RID;

/** Returns size of the bounding box of the text. */
get_size(): Vector2;

/** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
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

/** Aligns text to the given tab-stops. */
tab_align(): void;

  connect<T extends SignalsOf<TextLine>>(signal: T, method: SignalFunction<TextLine[T]>): number;






}

