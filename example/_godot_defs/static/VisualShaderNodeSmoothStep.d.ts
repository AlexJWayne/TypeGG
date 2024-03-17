
/**
 * Translates to `smoothstep(edge0, edge1, x)` in the shader language.
 *
 * Returns `0.0` if `x` is smaller than `edge0` and `1.0` if `x` is larger than `edge1`. Otherwise, the return value is interpolated between `0.0` and `1.0` using Hermite polynomials.
 *
*/
declare class VisualShaderNodeSmoothStep extends VisualShaderNode  {

  
/**
 * Translates to `smoothstep(edge0, edge1, x)` in the shader language.
 *
 * Returns `0.0` if `x` is smaller than `edge0` and `1.0` if `x` is larger than `edge1`. Otherwise, the return value is interpolated between `0.0` and `1.0` using Hermite polynomials.
 *
*/
  new(): VisualShaderNodeSmoothStep; 
  static "new"(): VisualShaderNodeSmoothStep 


/** A type of operands and returned value. */
op_type: int;



  connect<T extends SignalsOf<VisualShaderNodeSmoothStep>>(signal: T, method: SignalFunction<VisualShaderNodeSmoothStep[T]>): number;



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
 * The `x` port uses a 2D vector type. The first two ports use a floating-point scalar type.
 *
*/
static OP_TYPE_VECTOR_2D_SCALAR: any;

/**
 * A 3D vector type.
 *
*/
static OP_TYPE_VECTOR_3D: any;

/**
 * The `x` port uses a 3D vector type. The first two ports use a floating-point scalar type.
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

