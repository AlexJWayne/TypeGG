
/**
 * A sphere-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.
 *
 * Particle collision shapes work in real-time and can be moved, rotated and scaled during gameplay. Unlike attractors, non-uniform scaling of collision shapes is **not** supported.
 *
 * **Note:** [member ParticleProcessMaterial.collision_mode] must be [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] on the [GPUParticles3D]'s process material for collision to work.
 *
 * **Note:** Particle collision only affects [GPUParticles3D], not [CPUParticles3D].
 *
*/
declare class GPUParticlesCollisionSphere3D extends GPUParticlesCollision3D  {

  
/**
 * A sphere-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.
 *
 * Particle collision shapes work in real-time and can be moved, rotated and scaled during gameplay. Unlike attractors, non-uniform scaling of collision shapes is **not** supported.
 *
 * **Note:** [member ParticleProcessMaterial.collision_mode] must be [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] on the [GPUParticles3D]'s process material for collision to work.
 *
 * **Note:** Particle collision only affects [GPUParticles3D], not [CPUParticles3D].
 *
*/
  new(): GPUParticlesCollisionSphere3D; 
  static "new"(): GPUParticlesCollisionSphere3D 


/** The collision sphere's radius in 3D units. */
radius: float;



  connect<T extends SignalsOf<GPUParticlesCollisionSphere3D>>(signal: T, method: SignalFunction<GPUParticlesCollisionSphere3D[T]>): number;






}

