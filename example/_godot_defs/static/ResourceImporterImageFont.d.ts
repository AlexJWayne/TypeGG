
/**
 * This image-based workflow can be easier to use than [ResourceImporterBMFont], but it requires all glyphs to have the same width and height. This makes [ResourceImporterImageFont] most suited to fixed-width fonts.
 *
 * See also [ResourceImporterDynamicFont].
 *
*/
declare class ResourceImporterImageFont extends ResourceImporter  {

  
/**
 * This image-based workflow can be easier to use than [ResourceImporterBMFont], but it requires all glyphs to have the same width and height. This makes [ResourceImporterImageFont] most suited to fixed-width fonts.
 *
 * See also [ResourceImporterDynamicFont].
 *
*/
  new(): ResourceImporterImageFont; 
  static "new"(): ResourceImporterImageFont 


/** Margin applied around every imported glyph. If your font image contains guides (in the form of lines between glyphs) or if spacing between characters appears incorrect, try adjusting [member character_margin]. */
character_margin: Rect2i;

/**
 * The character ranges to import from the font image. This is an array that maps each position on the image (in tile coordinates, not pixels). The font atlas is traversed from left to right and top to bottom. Characters can be specified with decimal numbers (127), hexadecimal numbers (`0x007f`) or between single quotes (`'~'`). Ranges can be specified with a hyphen between characters.
 *
 * For instance, `0-127` (or `0x0000-0x007f`) denotes the full ASCII range. As another example, `' '-'~'` is equivalent to `32-127` and denotes the range of printable (visible) ASCII characters.
 *
 * Make sure [member character_ranges] doesn't exceed the number of [member columns] * [member rows] defined. Otherwise, the font will fail to import.
 *
*/
character_ranges: PackedStringArray;

/** Number of columns in the font image. See also [member rows]. */
columns: int;

/** If [code]true[/code], uses lossless compression for the resulting font. */
compress: boolean;

/** List of font fallbacks to use if a glyph isn't found in this bitmap font. Fonts at the beginning of the array are attempted first. */
fallbacks: any[];

/** Margin to cut on the sides of the entire image. This can be used to cut parts of the image that contain attribution information or similar. */
image_margin: Rect2i;

/** Number of rows in the font image. See also [member columns]. */
rows: int;

/** Font scaling mode. */
scaling_mode: int;



  connect<T extends SignalsOf<ResourceImporterImageFont>>(signal: T, method: SignalFunction<ResourceImporterImageFont[T]>): number;






}

