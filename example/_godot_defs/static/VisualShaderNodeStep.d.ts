
/**
 * Translates to `step(edge, x)` in the shader language.
 *
 * Returns `0.0` if `x` is smaller than `edge` and `1.0` otherwise.
 *
*/
declare class VisualShaderNodeStep extends VisualShaderNode  {

  
/**
 * Translates to `step(edge, x)` in the shader language.
 *
 * Returns `0.0` if `x` is smaller than `edge` and `1.0` otherwise.
 *
*/
  new(): VisualShaderNodeStep; 
  static "new"(): VisualShaderNodeStep 


/** A type of operands and returned value. */
op_type: int;



  connect<T extends SignalsOf<VisualShaderNodeStep>>(signal: T, method: SignalFunction<VisualShaderNodeStep[T]>): number;



/**
 * A floating-point scalar type.
 *
*/
static OP_TYPE_SCALAR: any;

/**
 * A 2D vector type.
 *
*/
static OP_TYPE_VECTOR_2D: any;

/**
 * The `x` port uses a 2D vector type, while the `edge` port uses a floating-point scalar type.
 *
*/
static OP_TYPE_VECTOR_2D_SCALAR: any;

/**
 * A 3D vector type.
 *
*/
static OP_TYPE_VECTOR_3D: any;

/**
 * The `x` port uses a 3D vector type, while the `edge` port uses a floating-point scalar type.
 *
*/
static OP_TYPE_VECTOR_3D_SCALAR: any;

/**
 * A 4D vector type.
 *
*/
static OP_TYPE_VECTOR_4D: any;

/**
 * The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type.
 *
*/
static OP_TYPE_VECTOR_4D_SCALAR: any;

/**
 * Represents the size of the [enum OpType] enum.
 *
*/
static OP_TYPE_MAX: any;



}

