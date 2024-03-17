
/**
 * Particle accelerator can be used in "process" step of particle shader. It will accelerate the particles. Connect it to the Velocity output port.
 *
*/
declare class VisualShaderNodeParticleAccelerator extends VisualShaderNode  {

  
/**
 * Particle accelerator can be used in "process" step of particle shader. It will accelerate the particles. Connect it to the Velocity output port.
 *
*/
  new(): VisualShaderNodeParticleAccelerator; 
  static "new"(): VisualShaderNodeParticleAccelerator 


/** Defines in what manner the particles will be accelerated. */
mode: int;



  connect<T extends SignalsOf<VisualShaderNodeParticleAccelerator>>(signal: T, method: SignalFunction<VisualShaderNodeParticleAccelerator[T]>): number;



/**
 * The particles will be accelerated based on their velocity.
 *
*/
static MODE_LINEAR: any;

/**
 * The particles will be accelerated towards or away from the center.
 *
*/
static MODE_RADIAL: any;

/**
 * The particles will be accelerated tangentially to the radius vector from center to their position.
 *
*/
static MODE_TANGENTIAL: any;

/**
 * Represents the size of the [enum Mode] enum.
 *
*/
static MODE_MAX: any;



}

