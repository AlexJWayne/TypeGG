
/**
 * Translated to `uniform vec3` in the shader language.
 *
*/
declare class VisualShaderNodeVec3Parameter extends VisualShaderNodeParameter  {

  
/**
 * Translated to `uniform vec3` in the shader language.
 *
*/
  new(): VisualShaderNodeVec3Parameter; 
  static "new"(): VisualShaderNodeVec3Parameter 


/** A default value to be assigned within the shader. */
default_value: Vector3;

/** Enables usage of the [member default_value]. */
default_value_enabled: boolean;



  connect<T extends SignalsOf<VisualShaderNodeVec3Parameter>>(signal: T, method: SignalFunction<VisualShaderNodeVec3Parameter[T]>): number;






}

