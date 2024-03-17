
/**
 * Translated to `uniform vec4` in the shader language.
 *
*/
declare class VisualShaderNodeColorParameter extends VisualShaderNodeParameter  {

  
/**
 * Translated to `uniform vec4` in the shader language.
 *
*/
  new(): VisualShaderNodeColorParameter; 
  static "new"(): VisualShaderNodeColorParameter 


/** A default value to be assigned within the shader. */
default_value: Color;

/** Enables usage of the [member default_value]. */
default_value_enabled: boolean;



  connect<T extends SignalsOf<VisualShaderNodeColorParameter>>(signal: T, method: SignalFunction<VisualShaderNodeColorParameter[T]>): number;






}

