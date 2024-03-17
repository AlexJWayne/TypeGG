
/**
 * A 2D line segment shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D].
 *
*/
declare class SegmentShape2D extends Shape2D  {

  
/**
 * A 2D line segment shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape2D].
 *
*/
  new(): SegmentShape2D; 
  static "new"(): SegmentShape2D 


/** The segment's first point position. */
a: Vector2;

/** The segment's second point position. */
b: Vector2;



  connect<T extends SignalsOf<SegmentShape2D>>(signal: T, method: SignalFunction<SegmentShape2D[T]>): number;






}

