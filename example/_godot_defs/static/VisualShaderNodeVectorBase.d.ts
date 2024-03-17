
/**
 * This is an abstract class. See the derived types for descriptions of the possible operations.
 *
*/
declare class VisualShaderNodeVectorBase extends VisualShaderNode  {

  
/**
 * This is an abstract class. See the derived types for descriptions of the possible operations.
 *
*/
  new(): VisualShaderNodeVectorBase; 
  static "new"(): VisualShaderNodeVectorBase 


/** A vector type that this operation is performed on. */
op_type: int;



  connect<T extends SignalsOf<VisualShaderNodeVectorBase>>(signal: T, method: SignalFunction<VisualShaderNodeVectorBase[T]>): number;



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

