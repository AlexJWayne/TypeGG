
/**
 * Accept an unsigned integer scalar (`x`) to the input port and transform it according to [member function].
 *
*/
declare class VisualShaderNodeUIntFunc extends VisualShaderNode  {

  
/**
 * Accept an unsigned integer scalar (`x`) to the input port and transform it according to [member function].
 *
*/
  new(): VisualShaderNodeUIntFunc; 
  static "new"(): VisualShaderNodeUIntFunc 


/** A function to be applied to the scalar. See [enum Function] for options. */
function: int;



  connect<T extends SignalsOf<VisualShaderNodeUIntFunc>>(signal: T, method: SignalFunction<VisualShaderNodeUIntFunc[T]>): number;



/**
 * Negates the `x` using `-(x)`.
 *
*/
static FUNC_NEGATE: any;

/**
 * Returns the result of bitwise `NOT` operation on the integer. Translates to `~a` in the Godot Shader Language.
 *
*/
static FUNC_BITWISE_NOT: any;

/**
 * Represents the size of the [enum Function] enum.
 *
*/
static FUNC_MAX: any;



}

