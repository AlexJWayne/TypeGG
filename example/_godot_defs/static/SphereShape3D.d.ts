
/**
 * A 3D sphere shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D].
 *
 * **Performance:** [SphereShape3D] is fast to check collisions against. It is faster than [BoxShape3D], [CapsuleShape3D], and [CylinderShape3D].
 *
*/
declare class SphereShape3D extends Shape3D  {

  
/**
 * A 3D sphere shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D].
 *
 * **Performance:** [SphereShape3D] is fast to check collisions against. It is faster than [BoxShape3D], [CapsuleShape3D], and [CylinderShape3D].
 *
*/
  new(): SphereShape3D; 
  static "new"(): SphereShape3D 


/** The sphere's radius. The shape's diameter is double the radius. */
radius: float;



  connect<T extends SignalsOf<SphereShape3D>>(signal: T, method: SignalFunction<SphereShape3D[T]>): number;






}

