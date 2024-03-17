
/**
 * This node internally calls `emit_subparticle` shader method. It will emit a particle from the configured sub-emitter and also allows to customize how its emitted. Requires a sub-emitter assigned to the particles node with this shader.
 *
*/
declare class VisualShaderNodeParticleEmit extends VisualShaderNode  {

  
/**
 * This node internally calls `emit_subparticle` shader method. It will emit a particle from the configured sub-emitter and also allows to customize how its emitted. Requires a sub-emitter assigned to the particles node with this shader.
 *
*/
  new(): VisualShaderNodeParticleEmit; 
  static "new"(): VisualShaderNodeParticleEmit 


/** Flags used to override the properties defined in the sub-emitter's process material. */
flags: int;



  connect<T extends SignalsOf<VisualShaderNodeParticleEmit>>(signal: T, method: SignalFunction<VisualShaderNodeParticleEmit[T]>): number;



/**
 * If enabled, the particle starts with the position defined by this node.
 *
*/
static EMIT_FLAG_POSITION: any;

/**
 * If enabled, the particle starts with the rotation and scale defined by this node.
 *
*/
static EMIT_FLAG_ROT_SCALE: any;

/**
 * If enabled,the particle starts with the velocity defined by this node.
 *
*/
static EMIT_FLAG_VELOCITY: any;

/**
 * If enabled, the particle starts with the color defined by this node.
 *
*/
static EMIT_FLAG_COLOR: any;

/**
 * If enabled, the particle starts with the `CUSTOM` data defined by this node.
 *
*/
static EMIT_FLAG_CUSTOM: any;



}

