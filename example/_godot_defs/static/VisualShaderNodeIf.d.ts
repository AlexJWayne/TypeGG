
/**
 * This visual shader node has six input ports. Port 1 and 2 provide the two floating point numbers `a` and `b` that will be compared. Port 3 is the tolerance, which allows similar floating point number to be considered equal. Ports 4 to 6 are the possible outputs, returned if `a == b`, `a > b`, or `a < b` respectively.
 *
*/
declare class VisualShaderNodeIf extends VisualShaderNode  {

  
/**
 * This visual shader node has six input ports. Port 1 and 2 provide the two floating point numbers `a` and `b` that will be compared. Port 3 is the tolerance, which allows similar floating point number to be considered equal. Ports 4 to 6 are the possible outputs, returned if `a == b`, `a > b`, or `a < b` respectively.
 *
*/
  new(): VisualShaderNodeIf; 
  static "new"(): VisualShaderNodeIf 





  connect<T extends SignalsOf<VisualShaderNodeIf>>(signal: T, method: SignalFunction<VisualShaderNodeIf[T]>): number;






}

