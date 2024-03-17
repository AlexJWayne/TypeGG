
/**
 * Translated to `uniform vec2` in the shader language.
 *
*/
declare class VisualShaderNodeVec2Parameter extends VisualShaderNodeParameter  {

  
/**
 * Translated to `uniform vec2` in the shader language.
 *
*/
  new(): VisualShaderNodeVec2Parameter; 
  static "new"(): VisualShaderNodeVec2Parameter 


/** A default value to be assigned within the shader. */
default_value: Vector2;

/** Enables usage of the [member default_value]. */
default_value_enabled: boolean;



  connect<T extends SignalsOf<VisualShaderNodeVec2Parameter>>(signal: T, method: SignalFunction<VisualShaderNodeVec2Parameter[T]>): number;






}

