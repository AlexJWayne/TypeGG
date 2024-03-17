
/**
 * A 3D convex polyhedron shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D].
 *
 * [ConvexPolygonShape3D] is **solid**, which means it detects collisions from objects that are fully inside it, unlike [ConcavePolygonShape3D] which is hollow. This makes it more suitable for both detection and physics.
 *
 * **Convex decomposition:** A concave polyhedron can be split up into several convex polyhedra. This allows dynamic physics bodies to have complex concave collisions (at a performance cost) and can be achieved by using several [ConvexPolygonShape3D] nodes. To generate a convex decomposition from a mesh, select the [MeshInstance3D] node, go to the **Mesh** menu that appears above the viewport, and choose **Create Multiple Convex Collision Siblings**. Alternatively, [method MeshInstance3D.create_multiple_convex_collisions] can be called in a script to perform this decomposition at run-time.
 *
 * **Performance:** [ConvexPolygonShape3D] is faster to check collisions against compared to [ConcavePolygonShape3D], but it is slower than primitive collision shapes such as [SphereShape3D] and [BoxShape3D]. Its use should generally be limited to medium-sized objects that cannot have their collision accurately represented by primitive shapes.
 *
*/
declare class ConvexPolygonShape3D extends Shape3D  {

  
/**
 * A 3D convex polyhedron shape, intended for use in physics. Usually used to provide a shape for a [CollisionShape3D].
 *
 * [ConvexPolygonShape3D] is **solid**, which means it detects collisions from objects that are fully inside it, unlike [ConcavePolygonShape3D] which is hollow. This makes it more suitable for both detection and physics.
 *
 * **Convex decomposition:** A concave polyhedron can be split up into several convex polyhedra. This allows dynamic physics bodies to have complex concave collisions (at a performance cost) and can be achieved by using several [ConvexPolygonShape3D] nodes. To generate a convex decomposition from a mesh, select the [MeshInstance3D] node, go to the **Mesh** menu that appears above the viewport, and choose **Create Multiple Convex Collision Siblings**. Alternatively, [method MeshInstance3D.create_multiple_convex_collisions] can be called in a script to perform this decomposition at run-time.
 *
 * **Performance:** [ConvexPolygonShape3D] is faster to check collisions against compared to [ConcavePolygonShape3D], but it is slower than primitive collision shapes such as [SphereShape3D] and [BoxShape3D]. Its use should generally be limited to medium-sized objects that cannot have their collision accurately represented by primitive shapes.
 *
*/
  new(): ConvexPolygonShape3D; 
  static "new"(): ConvexPolygonShape3D 


/** The list of 3D points forming the convex polygon shape. */
points: PackedVector3Array;



  connect<T extends SignalsOf<ConvexPolygonShape3D>>(signal: T, method: SignalFunction<ConvexPolygonShape3D[T]>): number;






}

