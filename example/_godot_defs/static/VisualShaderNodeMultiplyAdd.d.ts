
/**
 * Uses three operands to compute `(a * b + c)` expression.
 *
*/
declare class VisualShaderNodeMultiplyAdd extends VisualShaderNode  {

  
/**
 * Uses three operands to compute `(a * b + c)` expression.
 *
*/
  new(): VisualShaderNodeMultiplyAdd; 
  static "new"(): VisualShaderNodeMultiplyAdd 


/** A type of operands and returned value. */
op_type: int;



  connect<T extends SignalsOf<VisualShaderNodeMultiplyAdd>>(signal: T, method: SignalFunction<VisualShaderNodeMultiplyAdd[T]>): number;



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
 * A 3D vector type.
 *
*/
static OP_TYPE_VECTOR_3D: any;

/**
 * A 4D vector type.
 *
*/
static OP_TYPE_VECTOR_4D: any;

/**
 * Represents the size of the [enum OpType] enum.
 *
*/
static OP_TYPE_MAX: any;



}

