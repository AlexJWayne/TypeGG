
/**
 * By changing various properties of this object, such as the shape, you can configure the parameters for [method PhysicsDirectSpaceState2D.intersect_shape].
 *
*/
declare class PhysicsShapeQueryParameters2D extends RefCounted  {

  
/**
 * By changing various properties of this object, such as the shape, you can configure the parameters for [method PhysicsDirectSpaceState2D.intersect_shape].
 *
*/
  new(): PhysicsShapeQueryParameters2D; 
  static "new"(): PhysicsShapeQueryParameters2D 


/** If [code]true[/code], the query will take [Area2D]s into account. */
collide_with_areas: boolean;

/** If [code]true[/code], the query will take [PhysicsBody2D]s into account. */
collide_with_bodies: boolean;

/** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
exclude: RID[];

/** The collision margin for the shape. */
margin: float;

/** The motion of the shape being queried for. */
motion: Vector2;

/** The [Shape2D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
shape: Resource;

/**
 * The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:
 *
 * @example 
 * 
 * 
 * var shape_rid = PhysicsServer2D.circle_shape_create()
 * var radius = 64
 * PhysicsServer2D.shape_set_data(shape_rid, radius)
 * var params = PhysicsShapeQueryParameters2D.new()
 * params.shape_rid = shape_rid
 * # Execute physics queries here...
 * # Release the shape when done with physics queries.
 * PhysicsServer2D.free_rid(shape_rid)
 * 
 * 
 * RID shapeRid = PhysicsServer2D.CircleShapeCreate();
 * int radius = 64;
 * PhysicsServer2D.ShapeSetData(shapeRid, radius);
 * var params = new PhysicsShapeQueryParameters2D();
 * params.ShapeRid = shapeRid;
 * // Execute physics queries here...
 * // Release the shape when done with physics queries.
 * PhysicsServer2D.FreeRid(shapeRid);
 * 
 * @summary 
 * 
 *
*/
shape_rid: RID;

/** The queried shape's transform matrix. */
transform: Transform2D;



  connect<T extends SignalsOf<PhysicsShapeQueryParameters2D>>(signal: T, method: SignalFunction<PhysicsShapeQueryParameters2D[T]>): number;






}

