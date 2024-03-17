
/**
 * Particle emitter nodes can be used in "start" step of particle shaders and they define the starting position of the particles. Connect them to the Position output port.
 *
*/
declare class VisualShaderNodeParticleEmitter extends VisualShaderNode  {

  
/**
 * Particle emitter nodes can be used in "start" step of particle shaders and they define the starting position of the particles. Connect them to the Position output port.
 *
*/
  new(): VisualShaderNodeParticleEmitter; 
  static "new"(): VisualShaderNodeParticleEmitter 


/** If [code]true[/code], the result of this emitter is projected to 2D space. By default it is [code]false[/code] and meant for use in 3D space. */
mode_2d: boolean;



  connect<T extends SignalsOf<VisualShaderNodeParticleEmitter>>(signal: T, method: SignalFunction<VisualShaderNodeParticleEmitter[T]>): number;






}

