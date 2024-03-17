
/**
 * Comma-separated values are a plain text table storage format. The format's simplicity makes it easy to edit in any text editor or spreadsheet software. This makes it a common choice for game localization.
 *
 * **Example CSV file:**
 *
 * @example 
 * 
 * keys,en,es,ja
 * GREET,"Hello, friend!","Hola, amigo!",こんにちは
 * ASK,How are you?,Cómo está?,元気ですか
 * BYE,Goodbye,Adiós,さようなら
 * QUOTE,"""Hello"" said the man.","""Hola"" dijo el hombre.",「こんにちは」男は言いました
 * @summary 
 * 
 *
*/
declare class ResourceImporterCSVTranslation extends ResourceImporter  {

  
/**
 * Comma-separated values are a plain text table storage format. The format's simplicity makes it easy to edit in any text editor or spreadsheet software. This makes it a common choice for game localization.
 *
 * **Example CSV file:**
 *
 * @example 
 * 
 * keys,en,es,ja
 * GREET,"Hello, friend!","Hola, amigo!",こんにちは
 * ASK,How are you?,Cómo está?,元気ですか
 * BYE,Goodbye,Adiós,さようなら
 * QUOTE,"""Hello"" said the man.","""Hola"" dijo el hombre.",「こんにちは」男は言いました
 * @summary 
 * 
 *
*/
  new(): ResourceImporterCSVTranslation; 
  static "new"(): ResourceImporterCSVTranslation 


/** If [code]true[/code], creates an [OptimizedTranslation] instead of a [Translation]. This makes the resulting file smaller at the cost of a small CPU overhead. */
compress: boolean;

/** The delimiter to use in the CSV file. The default value matches the common CSV convention. Tab-separated values are sometimes called TSV files. */
delimiter: int;



  connect<T extends SignalsOf<ResourceImporterCSVTranslation>>(signal: T, method: SignalFunction<ResourceImporterCSVTranslation[T]>): number;






}

