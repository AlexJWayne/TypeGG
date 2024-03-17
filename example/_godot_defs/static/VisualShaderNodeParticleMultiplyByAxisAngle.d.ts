
/**
 * This node helps to multiply a position input vector by rotation using specific axis. Intended to work with emitters.
 *
*/
declare class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode  {

  
/**
 * This node helps to multiply a position input vector by rotation using specific axis. Intended to work with emitters.
 *
*/
  new(): VisualShaderNodeParticleMultiplyByAxisAngle; 
  static "new"(): VisualShaderNodeParticleMultiplyByAxisAngle 


/** If [code]true[/code], the angle will be interpreted in degrees instead of radians. */
degrees_mode: boolean;



  connect<T extends SignalsOf<VisualShaderNodeParticleMultiplyByAxisAngle>>(signal: T, method: SignalFunction<VisualShaderNodeParticleMultiplyByAxisAngle[T]>): number;






}

