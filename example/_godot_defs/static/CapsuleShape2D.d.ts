
/**
 * A 2D capsule shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D].
 *
 * **Performance:** [CapsuleShape2D] is fast to check collisions against, but it is slower than [RectangleShape2D] and [CircleShape2D].
 *
*/
declare class CapsuleShape2D extends Shape2D  {

  
/**
 * A 2D capsule shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D].
 *
 * **Performance:** [CapsuleShape2D] is fast to check collisions against, but it is slower than [RectangleShape2D] and [CircleShape2D].
 *
*/
  new(): CapsuleShape2D; 
  static "new"(): CapsuleShape2D 


/** The capsule's height. */
height: float;

/** The capsule's radius. */
radius: float;



  connect<T extends SignalsOf<CapsuleShape2D>>(signal: T, method: SignalFunction<CapsuleShape2D[T]>): number;






}

