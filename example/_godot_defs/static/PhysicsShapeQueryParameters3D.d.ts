
/**
 * By changing various properties of this object, such as the shape, you can configure the parameters for [method PhysicsDirectSpaceState3D.intersect_shape].
 *
*/
declare class PhysicsShapeQueryParameters3D extends RefCounted  {

  
/**
 * By changing various properties of this object, such as the shape, you can configure the parameters for [method PhysicsDirectSpaceState3D.intersect_shape].
 *
*/
  new(): PhysicsShapeQueryParameters3D; 
  static "new"(): PhysicsShapeQueryParameters3D 


/** If [code]true[/code], the query will take [Area3D]s into account. */
collide_with_areas: boolean;

/** If [code]true[/code], the query will take [PhysicsBody3D]s into account. */
collide_with_bodies: boolean;

/** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
exclude: RID[];

/** The collision margin for the shape. */
margin: float;

/** The motion of the shape being queried for. */
motion: Vector3;

/** The [Shape3D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
shape: Resource;

/**
 * The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:
 *
 * @example 
 * 
 * 
 * var shape_rid = PhysicsServer3D.shape_create(PhysicsServer3D.SHAPE_SPHERE)
 * var radius = 2.0
 * PhysicsServer3D.shape_set_data(shape_rid, radius)
 * var params = PhysicsShapeQueryParameters3D.new()
 * params.shape_rid = shape_rid
 * # Execute physics queries here...
 * # Release the shape when done with physics queries.
 * PhysicsServer3D.free_rid(shape_rid)
 * 
 * 
 * RID shapeRid = PhysicsServer3D.ShapeCreate(PhysicsServer3D.ShapeType.Sphere);
 * float radius = 2.0f;
 * PhysicsServer3D.ShapeSetData(shapeRid, radius);
 * var params = new PhysicsShapeQueryParameters3D();
 * params.ShapeRid = shapeRid;
 * // Execute physics queries here...
 * // Release the shape when done with physics queries.
 * PhysicsServer3D.FreeRid(shapeRid);
 * 
 * @summary 
 * 
 *
*/
shape_rid: RID;

/** The queried shape's transform matrix. */
transform: Transform3D;



  connect<T extends SignalsOf<PhysicsShapeQueryParameters3D>>(signal: T, method: SignalFunction<PhysicsShapeQueryParameters3D[T]>): number;






}

