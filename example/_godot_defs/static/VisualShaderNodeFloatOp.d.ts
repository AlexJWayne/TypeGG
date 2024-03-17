
/**
 * Applies [member operator] to two floating-point inputs: `a` and `b`.
 *
*/
declare class VisualShaderNodeFloatOp extends VisualShaderNode  {

  
/**
 * Applies [member operator] to two floating-point inputs: `a` and `b`.
 *
*/
  new(): VisualShaderNodeFloatOp; 
  static "new"(): VisualShaderNodeFloatOp 


/** An operator to be applied to the inputs. See [enum Operator] for options. */
operator: int;



  connect<T extends SignalsOf<VisualShaderNodeFloatOp>>(signal: T, method: SignalFunction<VisualShaderNodeFloatOp[T]>): number;



/**
 * Sums two numbers using `a + b`.
 *
*/
static OP_ADD: any;

/**
 * Subtracts two numbers using `a - b`.
 *
*/
static OP_SUB: any;

/**
 * Multiplies two numbers using `a * b`.
 *
*/
static OP_MUL: any;

/**
 * Divides two numbers using `a / b`.
 *
*/
static OP_DIV: any;

/**
 * Calculates the remainder of two numbers. Translates to `mod(a, b)` in the Godot Shader Language.
 *
*/
static OP_MOD: any;

/**
 * Raises the `a` to the power of `b`. Translates to `pow(a, b)` in the Godot Shader Language.
 *
*/
static OP_POW: any;

/**
 * Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language.
 *
*/
static OP_MAX: any;

/**
 * Returns the lesser of two numbers. Translates to `min(a, b)` in the Godot Shader Language.
 *
*/
static OP_MIN: any;

/**
 * Returns the arc-tangent of the parameters. Translates to `atan(a, b)` in the Godot Shader Language.
 *
*/
static OP_ATAN2: any;

/**
 * Generates a step function by comparing `b`(x) to `a`(edge). Returns 0.0 if `x` is smaller than `edge` and otherwise 1.0. Translates to `step(a, b)` in the Godot Shader Language.
 *
*/
static OP_STEP: any;

/**
 * Represents the size of the [enum Operator] enum.
 *
*/
static OP_ENUM_SIZE: any;



}

