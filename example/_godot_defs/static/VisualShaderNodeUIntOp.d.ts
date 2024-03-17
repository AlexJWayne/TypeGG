
/**
 * Applies [member operator] to two unsigned integer inputs: `a` and `b`.
 *
*/
declare class VisualShaderNodeUIntOp extends VisualShaderNode  {

  
/**
 * Applies [member operator] to two unsigned integer inputs: `a` and `b`.
 *
*/
  new(): VisualShaderNodeUIntOp; 
  static "new"(): VisualShaderNodeUIntOp 


/** An operator to be applied to the inputs. See [enum Operator] for options. */
operator: int;



  connect<T extends SignalsOf<VisualShaderNodeUIntOp>>(signal: T, method: SignalFunction<VisualShaderNodeUIntOp[T]>): number;



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
 * Calculates the remainder of two numbers using `a % b`.
 *
*/
static OP_MOD: any;

/**
 * Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language.
 *
*/
static OP_MAX: any;

/**
 * Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language.
 *
*/
static OP_MIN: any;

/**
 * Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language.
 *
*/
static OP_BITWISE_AND: any;

/**
 * Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language.
 *
*/
static OP_BITWISE_OR: any;

/**
 * Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language.
 *
*/
static OP_BITWISE_XOR: any;

/**
 * Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language.
 *
*/
static OP_BITWISE_LEFT_SHIFT: any;

/**
 * Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language.
 *
*/
static OP_BITWISE_RIGHT_SHIFT: any;

/**
 * Represents the size of the [enum Operator] enum.
 *
*/
static OP_ENUM_SIZE: any;



}

