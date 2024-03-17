
/**
 * A box-shaped attractor that influences particles from [GPUParticles3D] nodes. Can be used to attract particles towards its origin, or to push them away from its origin.
 *
 * Particle attractors work in real-time and can be moved, rotated and scaled during gameplay. Unlike collision shapes, non-uniform scaling of attractors is also supported.
 *
 * **Note:** Particle attractors only affect [GPUParticles3D], not [CPUParticles3D].
 *
*/
declare class GPUParticlesAttractorBox3D extends GPUParticlesAttractor3D  {

  
/**
 * A box-shaped attractor that influences particles from [GPUParticles3D] nodes. Can be used to attract particles towards its origin, or to push them away from its origin.
 *
 * Particle attractors work in real-time and can be moved, rotated and scaled during gameplay. Unlike collision shapes, non-uniform scaling of attractors is also supported.
 *
 * **Note:** Particle attractors only affect [GPUParticles3D], not [CPUParticles3D].
 *
*/
  new(): GPUParticlesAttractorBox3D; 
  static "new"(): GPUParticlesAttractorBox3D 


/** The attractor box's size in 3D units. */
size: Vector3;



  connect<T extends SignalsOf<GPUParticlesAttractorBox3D>>(signal: T, method: SignalFunction<GPUParticlesAttractorBox3D[T]>): number;






}

