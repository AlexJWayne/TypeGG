
/**
 * This is the CSG base class that provides CSG operation support to the various CSG nodes in Godot.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
declare class CSGShape3D extends GeometryInstance3D  {

  
/**
 * This is the CSG base class that provides CSG operation support to the various CSG nodes in Godot.
 *
 * **Note:** CSG nodes are intended to be used for level prototyping. Creating CSG nodes has a significant CPU cost compared to creating a [MeshInstance3D] with a [PrimitiveMesh]. Moving a CSG node within another CSG node also has a significant CPU cost, so it should be avoided during gameplay.
 *
*/
  new(): CSGShape3D; 
  static "new"(): CSGShape3D 


/** Calculate tangents for the CSG shape which allows the use of normal maps. This is only applied on the root shape, this setting is ignored on any child. */
calculate_tangents: boolean;

/**
 * The physics layers this area is in.
 *
 * Collidable objects can exist in any of 32 different layers. These layers work like a tagging system, and are not visual. A collidable can use these layers to select with which objects it can collide, using the collision_mask property.
 *
 * A contact is detected if object A is in any of the layers that object B scans, or object B is in any layer scanned by object A. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
 *
*/
collision_layer: int;

/** The physics layers this CSG shape scans for collisions. Only effective if [member use_collision] is [code]true[/code]. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
collision_mask: int;

/** The priority used to solve colliding when occurring penetration. Only effective if [member use_collision] is [code]true[/code]. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
collision_priority: float;

/** The operation that is performed on this shape. This is ignored for the first CSG child node as the operation is between this node and the previous child of this nodes parent. */
operation: int;

/** Snap makes the mesh vertices snap to a given distance so that the faces of two meshes can be perfectly aligned. A lower value results in greater precision but may be harder to adjust. */
snap: float;

/** Adds a collision shape to the physics engine for our CSG shape. This will always act like a static body. Note that the collision shape is still active even if the CSG shape itself is hidden. See also [member collision_mask] and [member collision_priority]. */
use_collision: boolean;

/** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_layer_value(): boolean;

/** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_mask_value(): boolean;

/** Returns an [Array] with two elements, the first is the [Transform3D] of this node and the second is the root [Mesh] of this node. Only works when this node is the root shape. */
get_meshes(): any[];

/** Returns [code]true[/code] if this is a root shape and is thus the object that is rendered. */
is_root_shape(): boolean;

/** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
set_collision_layer_value(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
set_collision_mask_value(): void;

  connect<T extends SignalsOf<CSGShape3D>>(signal: T, method: SignalFunction<CSGShape3D[T]>): number;



/**
 * Geometry of both primitives is merged, intersecting geometry is removed.
 *
*/
static OPERATION_UNION: any;

/**
 * Only intersecting geometry remains, the rest is removed.
 *
*/
static OPERATION_INTERSECTION: any;

/**
 * The second shape is subtracted from the first, leaving a dent with its shape.
 *
*/
static OPERATION_SUBTRACTION: any;



}

