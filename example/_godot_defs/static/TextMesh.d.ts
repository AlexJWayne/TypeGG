
/**
 * Generate an [PrimitiveMesh] from the text.
 *
 * TextMesh can be generated only when using dynamic fonts with vector glyph contours. Bitmap fonts (including bitmap data in the TrueType/OpenType containers, like color emoji fonts) are not supported.
 *
 * The UV layout is arranged in 4 horizontal strips, top to bottom: 40% of the height for the front face, 40% for the back face, 10% for the outer edges and 10% for the inner edges.
 *
*/
declare class TextMesh extends PrimitiveMesh  {

  
/**
 * Generate an [PrimitiveMesh] from the text.
 *
 * TextMesh can be generated only when using dynamic fonts with vector glyph contours. Bitmap fonts (including bitmap data in the TrueType/OpenType containers, like color emoji fonts) are not supported.
 *
 * The UV layout is arranged in 4 horizontal strips, top to bottom: 40% of the height for the front face, 40% for the back face, 10% for the outer edges and 10% for the inner edges.
 *
*/
  new(): TextMesh; 
  static "new"(): TextMesh 


/** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
autowrap_mode: int;

/** Step (in pixels) used to approximate Bézier curves. */
curve_step: float;

/** Depths of the mesh, if set to [code]0.0[/code] only front surface, is generated, and UV layout is changed to use full texture for the front face only. */
depth: float;

/** Font configuration used to display text. */
font: Font;

/** Font size of the [TextMesh]'s text. */
font_size: int;

/** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
horizontal_alignment: int;

/** Line fill alignment rules. For more info see [enum TextServer.JustificationFlag]. */
justification_flags: int;

/** Language code used for text shaping algorithms, if left empty current locale is used instead. */
language: string;

/** Vertical space between lines in multiline [TextMesh]. */
line_spacing: float;

/** The text drawing offset (in pixels). */
offset: Vector2;

/** The size of one pixel's width on the text to scale it in 3D. */
pixel_size: float;

/** Set BiDi algorithm override for the structured text. */
structured_text_bidi_override: int;

/** Set additional options for BiDi override. */
structured_text_bidi_override_options: any[];

/** The text to generate mesh from. */
text: string;

/** Base text writing direction. */
text_direction: int;

/** If [code]true[/code], all the text displays as UPPERCASE. */
uppercase: boolean;

/** Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [enum VerticalAlignment] constants. */
vertical_alignment: int;

/** Text width (in pixels), used for fill alignment. */
width: float;



  connect<T extends SignalsOf<TextMesh>>(signal: T, method: SignalFunction<TextMesh[T]>): number;






}

