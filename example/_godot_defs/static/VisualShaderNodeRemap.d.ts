
/**
 * Remap will transform the input range into output range, e.g. you can change a `0..1` value to `-2..2` etc. See [method @GlobalScope.remap] for more details.
 *
*/
declare class VisualShaderNodeRemap extends VisualShaderNode  {

  
/**
 * Remap will transform the input range into output range, e.g. you can change a `0..1` value to `-2..2` etc. See [method @GlobalScope.remap] for more details.
 *
*/
  new(): VisualShaderNodeRemap; 
  static "new"(): VisualShaderNodeRemap 





  connect<T extends SignalsOf<VisualShaderNodeRemap>>(signal: T, method: SignalFunction<VisualShaderNodeRemap[T]>): number;






}

