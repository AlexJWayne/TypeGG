
/**
 * A 3D capsule shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D].
 *
 * **Performance:** [CapsuleShape3D] is fast to check collisions against. It is faster than [CylinderShape3D], but slower than [SphereShape3D] and [BoxShape3D].
 *
*/
declare class CapsuleShape3D extends Shape3D  {

  
/**
 * A 3D capsule shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D].
 *
 * **Performance:** [CapsuleShape3D] is fast to check collisions against. It is faster than [CylinderShape3D], but slower than [SphereShape3D] and [BoxShape3D].
 *
*/
  new(): CapsuleShape3D; 
  static "new"(): CapsuleShape3D 


/** The capsule's height. */
height: float;

/** The capsule's radius. */
radius: float;



  connect<T extends SignalsOf<CapsuleShape3D>>(signal: T, method: SignalFunction<CapsuleShape3D[T]>): number;






}

