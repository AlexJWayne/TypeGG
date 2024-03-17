
/**
 * This node defines how particles are emitted. It allows to customize e.g. position and velocity. Available ports are different depending on which function this node is inside (start, process, collision) and whether custom data is enabled.
 *
*/
declare class VisualShaderNodeParticleOutput extends VisualShaderNodeOutput  {

  
/**
 * This node defines how particles are emitted. It allows to customize e.g. position and velocity. Available ports are different depending on which function this node is inside (start, process, collision) and whether custom data is enabled.
 *
*/
  new(): VisualShaderNodeParticleOutput; 
  static "new"(): VisualShaderNodeParticleOutput 





  connect<T extends SignalsOf<VisualShaderNodeParticleOutput>>(signal: T, method: SignalFunction<VisualShaderNodeParticleOutput[T]>): number;






}

