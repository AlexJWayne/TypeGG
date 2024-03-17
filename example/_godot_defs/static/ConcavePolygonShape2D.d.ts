
/**
 * A 2D polyline shape, intended for use in physics. Used internally in [CollisionPolygon2D] when it's in [constant CollisionPolygon2D.BUILD_SEGMENTS] mode.
 *
 * Being just a collection of interconnected line segments, [ConcavePolygonShape2D] is the most freely configurable single 2D shape. It can be used to form polygons of any nature, or even shapes that don't enclose an area. However, [ConcavePolygonShape2D] is **hollow** even if the interconnected line segments do enclose an area, which often makes it unsuitable for physics or detection.
 *
 * **Note:** When used for collision, [ConcavePolygonShape2D] is intended to work with static [CollisionShape2D] nodes like [StaticBody2D] and will likely not behave well for [CharacterBody2D]s or [RigidBody2D]s in a mode other than Static.
 *
 * **Warning:** Physics bodies that are small have a chance to clip through this shape when moving fast. This happens because on one frame, the physics body may be on the "outside" of the shape, and on the next frame it may be "inside" it. [ConcavePolygonShape2D] is hollow, so it won't detect a collision.
 *
 * **Performance:** Due to its complexity, [ConcavePolygonShape2D] is the slowest 2D collision shape to check collisions against. Its use should generally be limited to level geometry. If the polyline is closed, [CollisionPolygon2D]'s [constant CollisionPolygon2D.BUILD_SOLIDS] mode can be used, which decomposes the polygon into convex ones; see [ConvexPolygonShape2D]'s documentation for instructions.
 *
*/
declare class ConcavePolygonShape2D extends Shape2D  {

  
/**
 * A 2D polyline shape, intended for use in physics. Used internally in [CollisionPolygon2D] when it's in [constant CollisionPolygon2D.BUILD_SEGMENTS] mode.
 *
 * Being just a collection of interconnected line segments, [ConcavePolygonShape2D] is the most freely configurable single 2D shape. It can be used to form polygons of any nature, or even shapes that don't enclose an area. However, [ConcavePolygonShape2D] is **hollow** even if the interconnected line segments do enclose an area, which often makes it unsuitable for physics or detection.
 *
 * **Note:** When used for collision, [ConcavePolygonShape2D] is intended to work with static [CollisionShape2D] nodes like [StaticBody2D] and will likely not behave well for [CharacterBody2D]s or [RigidBody2D]s in a mode other than Static.
 *
 * **Warning:** Physics bodies that are small have a chance to clip through this shape when moving fast. This happens because on one frame, the physics body may be on the "outside" of the shape, and on the next frame it may be "inside" it. [ConcavePolygonShape2D] is hollow, so it won't detect a collision.
 *
 * **Performance:** Due to its complexity, [ConcavePolygonShape2D] is the slowest 2D collision shape to check collisions against. Its use should generally be limited to level geometry. If the polyline is closed, [CollisionPolygon2D]'s [constant CollisionPolygon2D.BUILD_SOLIDS] mode can be used, which decomposes the polygon into convex ones; see [ConvexPolygonShape2D]'s documentation for instructions.
 *
*/
  new(): ConcavePolygonShape2D; 
  static "new"(): ConcavePolygonShape2D 


/** The array of points that make up the [ConcavePolygonShape2D]'s line segments. The array (of length divisible by two) is naturally divided into pairs (one pair for each segment); each pair consists of the starting point of a segment and the endpoint of a segment. */
segments: PackedVector2Array;



  connect<T extends SignalsOf<ConcavePolygonShape2D>>(signal: T, method: SignalFunction<ConcavePolygonShape2D[T]>): number;






}

