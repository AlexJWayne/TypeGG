
/**
 * A box-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.
 *
 * Particle collision shapes work in real-time and can be moved, rotated and scaled during gameplay. Unlike attractors, non-uniform scaling of collision shapes is **not** supported.
 *
 * **Note:** [member ParticleProcessMaterial.collision_mode] must be [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] on the [GPUParticles3D]'s process material for collision to work.
 *
 * **Note:** Particle collision only affects [GPUParticles3D], not [CPUParticles3D].
 *
*/
declare class GPUParticlesCollisionBox3D extends GPUParticlesCollision3D  {

  
/**
 * A box-shaped 3D particle collision shape affecting [GPUParticles3D] nodes.
 *
 * Particle collision shapes work in real-time and can be moved, rotated and scaled during gameplay. Unlike attractors, non-uniform scaling of collision shapes is **not** supported.
 *
 * **Note:** [member ParticleProcessMaterial.collision_mode] must be [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT] on the [GPUParticles3D]'s process material for collision to work.
 *
 * **Note:** Particle collision only affects [GPUParticles3D], not [CPUParticles3D].
 *
*/
  new(): GPUParticlesCollisionBox3D; 
  static "new"(): GPUParticlesCollisionBox3D 


/** The collision box's size in 3D units. */
size: Vector3;



  connect<T extends SignalsOf<GPUParticlesCollisionBox3D>>(signal: T, method: SignalFunction<GPUParticlesCollisionBox3D[T]>): number;






}

