
/**
 * Translated to `uniform bool` in the shader language.
 *
*/
declare class VisualShaderNodeBooleanParameter extends VisualShaderNodeParameter  {

  
/**
 * Translated to `uniform bool` in the shader language.
 *
*/
  new(): VisualShaderNodeBooleanParameter; 
  static "new"(): VisualShaderNodeBooleanParameter 


/** A default value to be assigned within the shader. */
default_value: boolean;

/** Enables usage of the [member default_value]. */
default_value_enabled: boolean;



  connect<T extends SignalsOf<VisualShaderNodeBooleanParameter>>(signal: T, method: SignalFunction<VisualShaderNodeBooleanParameter[T]>): number;






}

