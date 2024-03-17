
/**
 * UV functions are similar to [Vector2] functions, but the input port of this node uses the shader's UV value by default.
 *
*/
declare class VisualShaderNodeUVFunc extends VisualShaderNode  {

  
/**
 * UV functions are similar to [Vector2] functions, but the input port of this node uses the shader's UV value by default.
 *
*/
  new(): VisualShaderNodeUVFunc; 
  static "new"(): VisualShaderNodeUVFunc 


/** A function to be applied to the texture coordinates. See [enum Function] for options. */
function: int;



  connect<T extends SignalsOf<VisualShaderNodeUVFunc>>(signal: T, method: SignalFunction<VisualShaderNodeUVFunc[T]>): number;



/**
 * Translates `uv` by using `scale` and `offset` values using the following formula: `uv = uv + offset * scale`. `uv` port is connected to `UV` built-in by default.
 *
*/
static FUNC_PANNING: any;

/**
 * Scales `uv` by using `scale` and `pivot` values using the following formula: `uv = (uv - pivot) * scale + pivot`. `uv` port is connected to `UV` built-in by default.
 *
*/
static FUNC_SCALING: any;

/**
 * Represents the size of the [enum Function] enum.
 *
*/
static FUNC_MAX: any;



}

