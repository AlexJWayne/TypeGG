
/**
 * This node is only available in `Fragment` and `Light` visual shaders.
 *
*/
declare class VisualShaderNodeDerivativeFunc extends VisualShaderNode  {

  
/**
 * This node is only available in `Fragment` and `Light` visual shaders.
 *
*/
  new(): VisualShaderNodeDerivativeFunc; 
  static "new"(): VisualShaderNodeDerivativeFunc 


/** A derivative function type. See [enum Function] for options. */
function: int;

/** A type of operands and returned value. See [enum OpType] for options. */
op_type: int;

/** Sets the level of precision to use for the derivative function. See [enum Precision] for options. When using the GL Compatibility renderer, this setting has no effect. */
precision: int;



  connect<T extends SignalsOf<VisualShaderNodeDerivativeFunc>>(signal: T, method: SignalFunction<VisualShaderNodeDerivativeFunc[T]>): number;



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

/**
 * Sum of absolute derivative in `x` and `y`.
 *
*/
static FUNC_SUM: any;

/**
 * Derivative in `x` using local differencing.
 *
*/
static FUNC_X: any;

/**
 * Derivative in `y` using local differencing.
 *
*/
static FUNC_Y: any;

/**
 * Represents the size of the [enum Function] enum.
 *
*/
static FUNC_MAX: any;

/**
 * No precision is specified, the GPU driver is allowed to use whatever level of precision it chooses. This is the default option and is equivalent to using `dFdx()` or `dFdy()` in text shaders.
 *
*/
static PRECISION_NONE: any;

/**
 * The derivative will be calculated using the current fragment's neighbors (which may not include the current fragment). This tends to be faster than using [constant PRECISION_FINE], but may not be suitable when more precision is needed. This is equivalent to using `dFdxCoarse()` or `dFdyCoarse()` in text shaders.
 *
*/
static PRECISION_COARSE: any;

/**
 * The derivative will be calculated using the current fragment and its immediate neighbors. This tends to be slower than using [constant PRECISION_COARSE], but may be necessary when more precision is needed. This is equivalent to using `dFdxFine()` or `dFdyFine()` in text shaders.
 *
*/
static PRECISION_FINE: any;

/**
 * Represents the size of the [enum Precision] enum.
 *
*/
static PRECISION_MAX: any;



}

