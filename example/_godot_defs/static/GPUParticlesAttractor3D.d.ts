
/**
 * Particle attractors can be used to attract particles towards the attractor's origin, or to push them away from the attractor's origin.
 *
 * Particle attractors work in real-time and can be moved, rotated and scaled during gameplay. Unlike collision shapes, non-uniform scaling of attractors is also supported.
 *
 * Attractors can be temporarily disabled by hiding them, or by setting their [member strength] to `0.0`.
 *
 * **Note:** Particle attractors only affect [GPUParticles3D], not [CPUParticles3D].
 *
*/
declare class GPUParticlesAttractor3D extends VisualInstance3D  {

  
/**
 * Particle attractors can be used to attract particles towards the attractor's origin, or to push them away from the attractor's origin.
 *
 * Particle attractors work in real-time and can be moved, rotated and scaled during gameplay. Unlike collision shapes, non-uniform scaling of attractors is also supported.
 *
 * Attractors can be temporarily disabled by hiding them, or by setting their [member strength] to `0.0`.
 *
 * **Note:** Particle attractors only affect [GPUParticles3D], not [CPUParticles3D].
 *
*/
  new(): GPUParticlesAttractor3D; 
  static "new"(): GPUParticlesAttractor3D 


/** The particle attractor's attenuation. Higher values result in more gradual pushing of particles as they come closer to the attractor's origin. Zero or negative values will cause particles to be pushed very fast as soon as the touch the attractor's edges. */
attenuation: float;

/**
 * The particle rendering layers ([member VisualInstance3D.layers]) that will be affected by the attractor. By default, all particles are affected by an attractor.
 *
 * After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.
 *
 * Particle attraction can also be disabled on a per-process material basis by setting [member ParticleProcessMaterial.attractor_interaction_enabled] on the [GPUParticles3D] node.
 *
*/
cull_mask: int;

/**
 * Adjusts how directional the attractor is. At `0.0`, the attractor is not directional at all: it will attract particles towards its center. At `1.0`, the attractor is fully directional: particles will always be pushed towards local -Z (or +Z if [member strength] is negative).
 *
 * **Note:** If [member directionality] is greater than `0.0`, the direction in which particles are pushed can be changed by rotating the [GPUParticlesAttractor3D] node.
 *
*/
directionality: float;

/** Adjusts the strength of the attractor. If [member strength] is negative, particles will be pushed in the opposite direction. Particles will be pushed [i]away[/i] from the attractor's origin if [member directionality] is [code]0.0[/code], or towards local +Z if [member directionality] is greater than [code]0.0[/code]. */
strength: float;



  connect<T extends SignalsOf<GPUParticlesAttractor3D>>(signal: T, method: SignalFunction<GPUParticlesAttractor3D[T]>): number;






}

