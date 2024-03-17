
/**
 * Creating a reference to a [VisualShaderNodeParameter] allows you to reuse this parameter in different shaders or shader stages easily.
 *
*/
declare class VisualShaderNodeParameterRef extends VisualShaderNode  {

  
/**
 * Creating a reference to a [VisualShaderNodeParameter] allows you to reuse this parameter in different shaders or shader stages easily.
 *
*/
  new(): VisualShaderNodeParameterRef; 
  static "new"(): VisualShaderNodeParameterRef 


/** The name of the parameter which this reference points to. */
parameter_name: string;



  connect<T extends SignalsOf<VisualShaderNodeParameterRef>>(signal: T, method: SignalFunction<VisualShaderNodeParameterRef[T]>): number;






}

