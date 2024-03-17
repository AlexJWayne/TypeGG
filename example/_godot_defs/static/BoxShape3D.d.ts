
/**
 * A 3D box shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D].
 *
 * **Performance:** [BoxShape3D] is fast to check collisions against. It is faster than [CapsuleShape3D] and [CylinderShape3D], but slower than [SphereShape3D].
 *
*/
declare class BoxShape3D extends Shape3D  {

  
/**
 * A 3D box shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D].
 *
 * **Performance:** [BoxShape3D] is fast to check collisions against. It is faster than [CapsuleShape3D] and [CylinderShape3D], but slower than [SphereShape3D].
 *
*/
  new(): BoxShape3D; 
  static "new"(): BoxShape3D 


/** The box's width, height and depth. */
size: Vector3;



  connect<T extends SignalsOf<BoxShape3D>>(signal: T, method: SignalFunction<BoxShape3D[T]>): number;






}

