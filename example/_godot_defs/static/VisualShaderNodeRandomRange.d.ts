
/**
 * Random range node will output a pseudo-random scalar value in the specified range, based on the seed. The value is always the same for the given seed and range, so you should provide a changing input, e.g. by using time.
 *
*/
declare class VisualShaderNodeRandomRange extends VisualShaderNode  {

  
/**
 * Random range node will output a pseudo-random scalar value in the specified range, based on the seed. The value is always the same for the given seed and range, so you should provide a changing input, e.g. by using time.
 *
*/
  new(): VisualShaderNodeRandomRange; 
  static "new"(): VisualShaderNodeRandomRange 





  connect<T extends SignalsOf<VisualShaderNodeRandomRange>>(signal: T, method: SignalFunction<VisualShaderNodeRandomRange[T]>): number;






}

