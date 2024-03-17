
/**
 * Translates to `mix(a, b, weight)` in the shader language.
 *
*/
declare class VisualShaderNodeMix extends VisualShaderNode  {

  
/**
 * Translates to `mix(a, b, weight)` in the shader language.
 *
*/
  new(): VisualShaderNodeMix; 
  static "new"(): VisualShaderNodeMix 


/** A type of operands and returned value. */
op_type: int;



  connect<T extends SignalsOf<VisualShaderNodeMix>>(signal: T, method: SignalFunction<VisualShaderNodeMix[T]>): number;



/**
 * A floating-point scalar.
 *
*/
static OP_TYPE_SCALAR: any;

/**
 * A 2D vector type.
 *
*/
static OP_TYPE_VECTOR_2D: any;

/**
 * The `a` and `b` ports use a 2D vector type. The `weight` port uses a scalar type.
 *
*/
static OP_TYPE_VECTOR_2D_SCALAR: any;

/**
 * A 3D vector type.
 *
*/
static OP_TYPE_VECTOR_3D: any;

/**
 * The `a` and `b` ports use a 3D vector type. The `weight` port uses a scalar type.
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

