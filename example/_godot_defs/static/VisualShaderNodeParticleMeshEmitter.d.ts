
/**
 * [VisualShaderNodeParticleEmitter] that makes the particles emitted in a shape of the assigned [member mesh]. It will emit from the mesh's surfaces, either all or only the specified one.
 *
*/
declare class VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter  {

  
/**
 * [VisualShaderNodeParticleEmitter] that makes the particles emitted in a shape of the assigned [member mesh]. It will emit from the mesh's surfaces, either all or only the specified one.
 *
*/
  new(): VisualShaderNodeParticleMeshEmitter; 
  static "new"(): VisualShaderNodeParticleMeshEmitter 


/** The [Mesh] that defines emission shape. */
mesh: Mesh;

/** Index of the surface that emits particles. [member use_all_surfaces] must be [code]false[/code] for this to take effect. */
surface_index: int;

/** If [code]true[/code], the particles will emit from all surfaces of the mesh. */
use_all_surfaces: boolean;



  connect<T extends SignalsOf<VisualShaderNodeParticleMeshEmitter>>(signal: T, method: SignalFunction<VisualShaderNodeParticleMeshEmitter[T]>): number;






}

