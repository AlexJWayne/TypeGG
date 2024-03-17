
/**
 * Randomness node will output pseudo-random values of the given type based on the specified minimum and maximum values.
 *
*/
declare class VisualShaderNodeParticleRandomness extends VisualShaderNode  {

  
/**
 * Randomness node will output pseudo-random values of the given type based on the specified minimum and maximum values.
 *
*/
  new(): VisualShaderNodeParticleRandomness; 
  static "new"(): VisualShaderNodeParticleRandomness 


/** A type of operands and returned value. */
op_type: int;



  connect<T extends SignalsOf<VisualShaderNodeParticleRandomness>>(signal: T, method: SignalFunction<VisualShaderNodeParticleRandomness[T]>): number;



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



}

