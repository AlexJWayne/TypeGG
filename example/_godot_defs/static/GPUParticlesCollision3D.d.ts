
/**
 * Particle collision shapes can be used to make particles stop or bounce against them.
 *
 * Particle collision shapes work in real-time and can be moved, rotated and scaled during gameplay. Unlike attractors, non-uniform scaling of collision shapes is **not** supported.
 *
 * Particle collision shapes can be temporarily disabled by hiding them.
 *
 * **Note:** [member ParticleProcessMaterial.collision_mode] must be [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] on the [GPUParticles3D]'s process material for collision to work.
 *
 * **Note:** Particle collision only affects [GPUParticles3D], not [CPUParticles3D].
 *
 * **Note:** Particles pushed by a collider that is being moved will not be interpolated, which can result in visible stuttering. This can be alleviated by setting [member GPUParticles3D.fixed_fps] to `0` or a value that matches or exceeds the target framerate.
 *
*/
declare class GPUParticlesCollision3D extends VisualInstance3D  {

  
/**
 * Particle collision shapes can be used to make particles stop or bounce against them.
 *
 * Particle collision shapes work in real-time and can be moved, rotated and scaled during gameplay. Unlike attractors, non-uniform scaling of collision shapes is **not** supported.
 *
 * Particle collision shapes can be temporarily disabled by hiding them.
 *
 * **Note:** [member ParticleProcessMaterial.collision_mode] must be [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] on the [GPUParticles3D]'s process material for collision to work.
 *
 * **Note:** Particle collision only affects [GPUParticles3D], not [CPUParticles3D].
 *
 * **Note:** Particles pushed by a collider that is being moved will not be interpolated, which can result in visible stuttering. This can be alleviated by setting [member GPUParticles3D.fixed_fps] to `0` or a value that matches or exceeds the target framerate.
 *
*/
  new(): GPUParticlesCollision3D; 
  static "new"(): GPUParticlesCollision3D 


/**
 * The particle rendering layers ([member VisualInstance3D.layers]) that will be affected by the collision shape. By default, all particles that have [member ParticleProcessMaterial.collision_mode] set to [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] will be affected by a collision shape.
 *
 * After configuring particle nodes accordingly, specific layers can be unchecked to prevent certain particles from being affected by attractors. For example, this can be used if you're using an attractor as part of a spell effect but don't want the attractor to affect unrelated weather particles at the same position.
 *
 * Particle attraction can also be disabled on a per-process material basis by setting [member ParticleProcessMaterial.attractor_interaction_enabled] on the [GPUParticles3D] node.
 *
*/
cull_mask: int;



  connect<T extends SignalsOf<GPUParticlesCollision3D>>(signal: T, method: SignalFunction<GPUParticlesCollision3D[T]>): number;






}

