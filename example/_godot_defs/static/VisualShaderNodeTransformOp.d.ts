
/**
 * Applies [member operator] to two transform (4x4 matrices) inputs.
 *
*/
declare class VisualShaderNodeTransformOp extends VisualShaderNode  {

  
/**
 * Applies [member operator] to two transform (4x4 matrices) inputs.
 *
*/
  new(): VisualShaderNodeTransformOp; 
  static "new"(): VisualShaderNodeTransformOp 


/** The type of the operation to be performed on the transforms. See [enum Operator] for options. */
operator: int;



  connect<T extends SignalsOf<VisualShaderNodeTransformOp>>(signal: T, method: SignalFunction<VisualShaderNodeTransformOp[T]>): number;



/**
 * Multiplies transform `a` by the transform `b`.
 *
*/
static OP_AxB: any;

/**
 * Multiplies transform `b` by the transform `a`.
 *
*/
static OP_BxA: any;

/**
 * Performs a component-wise multiplication of transform `a` by the transform `b`.
 *
*/
static OP_AxB_COMP: any;

/**
 * Performs a component-wise multiplication of transform `b` by the transform `a`.
 *
*/
static OP_BxA_COMP: any;

/**
 * Adds two transforms.
 *
*/
static OP_ADD: any;

/**
 * Subtracts the transform `a` from the transform `b`.
 *
*/
static OP_A_MINUS_B: any;

/**
 * Subtracts the transform `b` from the transform `a`.
 *
*/
static OP_B_MINUS_A: any;

/**
 * Divides the transform `a` by the transform `b`.
 *
*/
static OP_A_DIV_B: any;

/**
 * Divides the transform `b` by the transform `a`.
 *
*/
static OP_B_DIV_A: any;

/**
 * Represents the size of the [enum Operator] enum.
 *
*/
static OP_MAX: any;



}

