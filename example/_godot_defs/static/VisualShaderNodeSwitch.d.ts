
/**
 * Returns an associated value of the [member op_type] type if the provided boolean value is `true` or `false`.
 *
*/
declare class VisualShaderNodeSwitch extends VisualShaderNode  {

  
/**
 * Returns an associated value of the [member op_type] type if the provided boolean value is `true` or `false`.
 *
*/
  new(): VisualShaderNodeSwitch; 
  static "new"(): VisualShaderNodeSwitch 


/** A type of operands and returned value. */
op_type: int;



  connect<T extends SignalsOf<VisualShaderNodeSwitch>>(signal: T, method: SignalFunction<VisualShaderNodeSwitch[T]>): number;



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
 * A boolean type.
 *
*/
static OP_TYPE_BOOLEAN: any;

/**
 * A transform type.
 *
*/
static OP_TYPE_TRANSFORM: any;

/**
 * Represents the size of the [enum OpType] enum.
 *
*/
static OP_TYPE_MAX: any;



}

