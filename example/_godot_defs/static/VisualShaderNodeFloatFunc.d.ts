
/**
 * Accept a floating-point scalar (`x`) to the input port and transform it according to [member function].
 *
*/
declare class VisualShaderNodeFloatFunc extends VisualShaderNode  {

  
/**
 * Accept a floating-point scalar (`x`) to the input port and transform it according to [member function].
 *
*/
  new(): VisualShaderNodeFloatFunc; 
  static "new"(): VisualShaderNodeFloatFunc 


/** A function to be applied to the scalar. See [enum Function] for options. */
function: int;



  connect<T extends SignalsOf<VisualShaderNodeFloatFunc>>(signal: T, method: SignalFunction<VisualShaderNodeFloatFunc[T]>): number;



/**
 * Returns the sine of the parameter. Translates to `sin(x)` in the Godot Shader Language.
 *
*/
static FUNC_SIN: any;

/**
 * Returns the cosine of the parameter. Translates to `cos(x)` in the Godot Shader Language.
 *
*/
static FUNC_COS: any;

/**
 * Returns the tangent of the parameter. Translates to `tan(x)` in the Godot Shader Language.
 *
*/
static FUNC_TAN: any;

/**
 * Returns the arc-sine of the parameter. Translates to `asin(x)` in the Godot Shader Language.
 *
*/
static FUNC_ASIN: any;

/**
 * Returns the arc-cosine of the parameter. Translates to `acos(x)` in the Godot Shader Language.
 *
*/
static FUNC_ACOS: any;

/**
 * Returns the arc-tangent of the parameter. Translates to `atan(x)` in the Godot Shader Language.
 *
*/
static FUNC_ATAN: any;

/**
 * Returns the hyperbolic sine of the parameter. Translates to `sinh(x)` in the Godot Shader Language.
 *
*/
static FUNC_SINH: any;

/**
 * Returns the hyperbolic cosine of the parameter. Translates to `cosh(x)` in the Godot Shader Language.
 *
*/
static FUNC_COSH: any;

/**
 * Returns the hyperbolic tangent of the parameter. Translates to `tanh(x)` in the Godot Shader Language.
 *
*/
static FUNC_TANH: any;

/**
 * Returns the natural logarithm of the parameter. Translates to `log(x)` in the Godot Shader Language.
 *
*/
static FUNC_LOG: any;

/**
 * Returns the natural exponentiation of the parameter. Translates to `exp(x)` in the Godot Shader Language.
 *
*/
static FUNC_EXP: any;

/**
 * Returns the square root of the parameter. Translates to `sqrt(x)` in the Godot Shader Language.
 *
*/
static FUNC_SQRT: any;

/**
 * Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language.
 *
*/
static FUNC_ABS: any;

/**
 * Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language.
 *
*/
static FUNC_SIGN: any;

/**
 * Finds the nearest integer less than or equal to the parameter. Translates to `floor(x)` in the Godot Shader Language.
 *
*/
static FUNC_FLOOR: any;

/**
 * Finds the nearest integer to the parameter. Translates to `round(x)` in the Godot Shader Language.
 *
*/
static FUNC_ROUND: any;

/**
 * Finds the nearest integer that is greater than or equal to the parameter. Translates to `ceil(x)` in the Godot Shader Language.
 *
*/
static FUNC_CEIL: any;

/**
 * Computes the fractional part of the argument. Translates to `fract(x)` in the Godot Shader Language.
 *
*/
static FUNC_FRACT: any;

/**
 * Clamps the value between `0.0` and `1.0` using `min(max(x, 0.0), 1.0)`.
 *
*/
static FUNC_SATURATE: any;

/**
 * Negates the `x` using `-(x)`.
 *
*/
static FUNC_NEGATE: any;

/**
 * Returns the arc-hyperbolic-cosine of the parameter. Translates to `acosh(x)` in the Godot Shader Language.
 *
*/
static FUNC_ACOSH: any;

/**
 * Returns the arc-hyperbolic-sine of the parameter. Translates to `asinh(x)` in the Godot Shader Language.
 *
*/
static FUNC_ASINH: any;

/**
 * Returns the arc-hyperbolic-tangent of the parameter. Translates to `atanh(x)` in the Godot Shader Language.
 *
*/
static FUNC_ATANH: any;

/**
 * Convert a quantity in radians to degrees. Translates to `degrees(x)` in the Godot Shader Language.
 *
*/
static FUNC_DEGREES: any;

/**
 * Returns 2 raised by the power of the parameter. Translates to `exp2(x)` in the Godot Shader Language.
 *
*/
static FUNC_EXP2: any;

/**
 * Returns the inverse of the square root of the parameter. Translates to `inversesqrt(x)` in the Godot Shader Language.
 *
*/
static FUNC_INVERSE_SQRT: any;

/**
 * Returns the base 2 logarithm of the parameter. Translates to `log2(x)` in the Godot Shader Language.
 *
*/
static FUNC_LOG2: any;

/**
 * Convert a quantity in degrees to radians. Translates to `radians(x)` in the Godot Shader Language.
 *
*/
static FUNC_RADIANS: any;

/**
 * Finds reciprocal value of dividing 1 by `x` (i.e. `1 / x`).
 *
*/
static FUNC_RECIPROCAL: any;

/**
 * Finds the nearest even integer to the parameter. Translates to `roundEven(x)` in the Godot Shader Language.
 *
*/
static FUNC_ROUNDEVEN: any;

/**
 * Returns a value equal to the nearest integer to `x` whose absolute value is not larger than the absolute value of `x`. Translates to `trunc(x)` in the Godot Shader Language.
 *
*/
static FUNC_TRUNC: any;

/**
 * Subtracts scalar `x` from 1 (i.e. `1 - x`).
 *
*/
static FUNC_ONEMINUS: any;

/**
 * Represents the size of the [enum Function] enum.
 *
*/
static FUNC_MAX: any;



}

