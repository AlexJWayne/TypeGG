
/**
 * An optimized translation, used by default for CSV Translations. Uses real-time compressed translations, which results in very small dictionaries.
 *
*/
declare class OptimizedTranslation extends Translation  {

  
/**
 * An optimized translation, used by default for CSV Translations. Uses real-time compressed translations, which results in very small dictionaries.
 *
*/
  new(): OptimizedTranslation; 
  static "new"(): OptimizedTranslation 



/** Generates and sets an optimized translation from the given [Translation] resource. */
generate(): void;

  connect<T extends SignalsOf<OptimizedTranslation>>(signal: T, method: SignalFunction<OptimizedTranslation[T]>): number;






}

