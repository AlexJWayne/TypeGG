
/**
 * The BMFont format is a format created by the [url=https://www.angelcode.com/products/bmfont/]BMFont[/url] program. Many BMFont-compatible programs also exist, like [url=https://www.bmglyph.com/]BMGlyph[/url].
 *
 * Compared to [ResourceImporterImageFont], [ResourceImporterBMFont] supports bitmap fonts with varying glyph widths/heights.
 *
 * See also [ResourceImporterDynamicFont].
 *
*/
declare class ResourceImporterBMFont extends ResourceImporter  {

  
/**
 * The BMFont format is a format created by the [url=https://www.angelcode.com/products/bmfont/]BMFont[/url] program. Many BMFont-compatible programs also exist, like [url=https://www.bmglyph.com/]BMGlyph[/url].
 *
 * Compared to [ResourceImporterImageFont], [ResourceImporterBMFont] supports bitmap fonts with varying glyph widths/heights.
 *
 * See also [ResourceImporterDynamicFont].
 *
*/
  new(): ResourceImporterBMFont; 
  static "new"(): ResourceImporterBMFont 


/** If [code]true[/code], uses lossless compression for the resulting font. */
compress: boolean;

/** List of font fallbacks to use if a glyph isn't found in this bitmap font. Fonts at the beginning of the array are attempted first. */
fallbacks: any[];

/** Font scaling mode. */
scaling_mode: int;



  connect<T extends SignalsOf<ResourceImporterBMFont>>(signal: T, method: SignalFunction<ResourceImporterBMFont[T]>): number;






}

