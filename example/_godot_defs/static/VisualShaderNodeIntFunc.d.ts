
/**
 * Accept an integer scalar (`x`) to the input port and transform it according to [member function].
 *
*/
declare class VisualShaderNodeIntFunc extends VisualShaderNode  {

  
/**
 * Accept an integer scalar (`x`) to the input port and transform it according to [member function].
 *
*/
  new(): VisualShaderNodeIntFunc; 
  static "new"(): VisualShaderNodeIntFunc 


/** A function to be applied to the scalar. See [enum Function] for options. */
function: int;



  connect<T extends SignalsOf<VisualShaderNodeIntFunc>>(signal: T, method: SignalFunction<VisualShaderNodeIntFunc[T]>): number;



/**
 * Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language.
 *
*/
static FUNC_ABS: any;

/**
 * Negates the `x` using `-(x)`.
 *
*/
static FUNC_NEGATE: any;

/**
 * Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language.
 *
*/
static FUNC_SIGN: any;

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

