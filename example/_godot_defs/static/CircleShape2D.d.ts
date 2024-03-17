
/**
 * A 2D circle shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D].
 *
 * **Performance:** [CircleShape2D] is fast to check collisions against. It is faster than [RectangleShape2D] and [CapsuleShape2D].
 *
*/
declare class CircleShape2D extends Shape2D  {

  
/**
 * A 2D circle shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D].
 *
 * **Performance:** [CircleShape2D] is fast to check collisions against. It is faster than [RectangleShape2D] and [CapsuleShape2D].
 *
*/
  new(): CircleShape2D; 
  static "new"(): CircleShape2D 


/** The circle's radius. */
radius: float;



  connect<T extends SignalsOf<CircleShape2D>>(signal: T, method: SignalFunction<CircleShape2D[T]>): number;






}

