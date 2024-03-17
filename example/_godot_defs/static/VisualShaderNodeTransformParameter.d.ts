
/**
 * Translated to `uniform mat4` in the shader language.
 *
*/
declare class VisualShaderNodeTransformParameter extends VisualShaderNodeParameter  {

  
/**
 * Translated to `uniform mat4` in the shader language.
 *
*/
  new(): VisualShaderNodeTransformParameter; 
  static "new"(): VisualShaderNodeTransformParameter 


/** A default value to be assigned within the shader. */
default_value: Transform3D;

/** Enables usage of the [member default_value]. */
default_value_enabled: boolean;



  connect<T extends SignalsOf<VisualShaderNodeTransformParameter>>(signal: T, method: SignalFunction<VisualShaderNodeTransformParameter[T]>): number;






}

