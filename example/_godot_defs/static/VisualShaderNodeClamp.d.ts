
/**
 * Constrains a value to lie between `min` and `max` values.
 *
*/
declare class VisualShaderNodeClamp extends VisualShaderNode  {

  
/**
 * Constrains a value to lie between `min` and `max` values.
 *
*/
  new(): VisualShaderNodeClamp; 
  static "new"(): VisualShaderNodeClamp 


/** A type of operands and returned value. */
op_type: int;



  connect<T extends SignalsOf<VisualShaderNodeClamp>>(signal: T, method: SignalFunction<VisualShaderNodeClamp[T]>): number;



/**
 * A floating-point scalar.
 *
*/
static OP_TYPE_FLOAT: any;

/**
 * An integer scalar.
 *
*/
static OP_TYPE_INT: any;

/**
 * An unsigned integer scalar.
 *
*/
static OP_TYPE_UINT: any;

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

