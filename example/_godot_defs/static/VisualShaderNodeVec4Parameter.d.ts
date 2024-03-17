
/**
 * Translated to `uniform vec4` in the shader language.
 *
*/
declare class VisualShaderNodeVec4Parameter extends VisualShaderNodeParameter  {

  
/**
 * Translated to `uniform vec4` in the shader language.
 *
*/
  new(): VisualShaderNodeVec4Parameter; 
  static "new"(): VisualShaderNodeVec4Parameter 


/** A default value to be assigned within the shader. */
default_value: Vector4;

/** Enables usage of the [member default_value]. */
default_value_enabled: boolean;



  connect<T extends SignalsOf<VisualShaderNodeVec4Parameter>>(signal: T, method: SignalFunction<VisualShaderNodeVec4Parameter[T]>): number;






}

