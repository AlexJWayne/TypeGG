
/**
 * A 2D rectangle shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D].
 *
 * **Performance:** [RectangleShape2D] is fast to check collisions against. It is faster than [CapsuleShape2D], but slower than [CircleShape2D].
 *
*/
declare class RectangleShape2D extends Shape2D  {

  
/**
 * A 2D rectangle shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D].
 *
 * **Performance:** [RectangleShape2D] is fast to check collisions against. It is faster than [CapsuleShape2D], but slower than [CircleShape2D].
 *
*/
  new(): RectangleShape2D; 
  static "new"(): RectangleShape2D 


/** The rectangle's width and height. */
size: Vector2;



  connect<T extends SignalsOf<RectangleShape2D>>(signal: T, method: SignalFunction<RectangleShape2D[T]>): number;






}

