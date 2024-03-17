
/**
 * Gives access to input variables (built-ins) available for the shader. See the shading reference for the list of available built-ins for each shader type (check `Tutorials` section for link).
 *
*/
declare class VisualShaderNodeInput extends VisualShaderNode  {

  
/**
 * Gives access to input variables (built-ins) available for the shader. See the shading reference for the list of available built-ins for each shader type (check `Tutorials` section for link).
 *
*/
  new(): VisualShaderNodeInput; 
  static "new"(): VisualShaderNodeInput 


/** One of the several input constants in lower-case style like: "vertex" ([code]VERTEX[/code]) or "point_size" ([code]POINT_SIZE[/code]). */
input_name: string;

/** Returns a translated name of the current constant in the Godot Shader Language. E.g. [code]"ALBEDO"[/code] if the [member input_name] equal to [code]"albedo"[/code]. */
get_input_real_name(): string;

  connect<T extends SignalsOf<VisualShaderNodeInput>>(signal: T, method: SignalFunction<VisualShaderNodeInput[T]>): number;





/**
 * Emitted when input is changed via [member input_name].
 *
*/
$input_type_changed: Signal<() => void>

}

