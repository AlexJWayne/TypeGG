
/**
 * This node can be used in "start" step of particle shader. It defines the initial velocity of the particles, making them move in cone shape starting from the center, with a given spread.
 *
*/
declare class VisualShaderNodeParticleConeVelocity extends VisualShaderNode  {

  
/**
 * This node can be used in "start" step of particle shader. It defines the initial velocity of the particles, making them move in cone shape starting from the center, with a given spread.
 *
*/
  new(): VisualShaderNodeParticleConeVelocity; 
  static "new"(): VisualShaderNodeParticleConeVelocity 





  connect<T extends SignalsOf<VisualShaderNodeParticleConeVelocity>>(signal: T, method: SignalFunction<VisualShaderNodeParticleConeVelocity[T]>): number;






}

