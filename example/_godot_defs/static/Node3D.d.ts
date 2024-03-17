
/**
 * Most basic 3D game object, with a [Transform3D] and visibility settings. All other 3D game objects inherit from [Node3D]. Use [Node3D] as a parent node to move, scale, rotate and show/hide children in a 3D project.
 *
 * Affine operations (rotate, scale, translate) happen in parent's local coordinate system, unless the [Node3D] object is set as top-level. Affine operations in this coordinate system correspond to direct affine operations on the [Node3D]'s transform. The word local below refers to this coordinate system. The coordinate system that is attached to the [Node3D] object itself is referred to as object-local coordinate system.
 *
 * **Note:** Unless otherwise specified, all methods that have angle parameters must have angles specified as **radians**. To convert degrees to radians, use [method @GlobalScope.deg_to_rad].
 *
 * **Note:** Be aware that "Spatial" nodes are now called "Node3D" starting with Godot 4. Any Godot 3.x references to "Spatial" nodes refer to "Node3D" in Godot 4.
 *
*/
declare class Node3D extends Node  {

  
/**
 * Most basic 3D game object, with a [Transform3D] and visibility settings. All other 3D game objects inherit from [Node3D]. Use [Node3D] as a parent node to move, scale, rotate and show/hide children in a 3D project.
 *
 * Affine operations (rotate, scale, translate) happen in parent's local coordinate system, unless the [Node3D] object is set as top-level. Affine operations in this coordinate system correspond to direct affine operations on the [Node3D]'s transform. The word local below refers to this coordinate system. The coordinate system that is attached to the [Node3D] object itself is referred to as object-local coordinate system.
 *
 * **Note:** Unless otherwise specified, all methods that have angle parameters must have angles specified as **radians**. To convert degrees to radians, use [method @GlobalScope.deg_to_rad].
 *
 * **Note:** Be aware that "Spatial" nodes are now called "Node3D" starting with Godot 4. Any Godot 3.x references to "Spatial" nodes refer to "Node3D" in Godot 4.
 *
*/
  new(): Node3D; 
  static "new"(): Node3D 


/** Direct access to the 3x3 basis of the [member transform] property. */
basis: Basis;

/** Global basis of this node. This is equivalent to [code]global_transform.basis[/code]. */
global_basis: Basis;

/** Global position of this node. This is equivalent to [code]global_transform.origin[/code]. */
global_position: Vector3;

/**
 * Rotation part of the global transformation in radians, specified in terms of YXZ-Euler angles in the format (X angle, Y angle, Z angle).
 *
 * **Note:** In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a [Vector3] data structure not because the rotation is a vector, but only because [Vector3] exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.
 *
*/
global_rotation: Vector3;

/** Helper property to access [member global_rotation] in degrees instead of radians. */
global_rotation_degrees: Vector3;

/** World3D space (global) [Transform3D] of this node. */
global_transform: Transform3D;

/** Local position or translation of this node relative to the parent. This is equivalent to [code]transform.origin[/code]. */
position: Vector3;

/** Access to the node rotation as a [Quaternion]. This property is ideal for tweening complex rotations. */
quaternion: Quaternion;

/**
 * Rotation part of the local transformation in radians, specified in terms of Euler angles. The angles construct a rotation in the order specified by the [member rotation_order] property.
 *
 * **Note:** In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a [Vector3] data structure not because the rotation is a vector, but only because [Vector3] exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.
 *
 * **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].
 *
*/
rotation: Vector3;

/** Helper property to access [member rotation] in degrees instead of radians. */
rotation_degrees: Vector3;

/** Specify how rotation (and scale) will be presented in the editor. */
rotation_edit_mode: int;

/** Specify the axis rotation order of the [member rotation] property. The final orientation is constructed by rotating the Euler angles in the order specified by this property. */
rotation_order: int;

/**
 * Scale part of the local transformation.
 *
 * **Note:** Mixed negative scales in 3D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, the scale values will either be all positive or all negative.
 *
 * **Note:** Not all nodes are visually scaled by the [member scale] property. For example, [Light3D]s are not visually affected by [member scale].
 *
*/
scale: Vector3;

/** If [code]true[/code], the node will not inherit its transformations from its parent. Node transformations are only in global space. */
top_level: boolean;

/** Local space [Transform3D] of this node, with respect to the parent node. */
transform: Transform3D;

/** Defines the visibility range parent for this node and its subtree. The visibility parent must be a GeometryInstance3D. Any visual instance will only be visible if the visibility parent (and all of its visibility ancestors) is hidden by being closer to the camera than its own [member GeometryInstance3D.visibility_range_begin]. Nodes hidden via the [member Node3D.visible] property are essentially removed from the visibility dependency tree, so dependent instances will not take the hidden node or its ancestors into account. */
visibility_parent: NodePathType;

/** If [code]true[/code], this node is drawn. The node is only visible if all of its ancestors are visible as well (in other words, [method is_visible_in_tree] must return [code]true[/code]). */
visible: boolean;

/**
 * Attach an editor gizmo to this [Node3D].
 *
 * **Note:** The gizmo object would typically be an instance of [EditorNode3DGizmo], but the argument type is kept generic to avoid creating a dependency on editor classes in [Node3D].
 *
*/
add_gizmo(): void;

/** Clear all gizmos attached to this [Node3D]. */
clear_gizmos(): void;

/** Clears subgizmo selection for this node in the editor. Useful when subgizmo IDs become invalid after a property change. */
clear_subgizmo_selection(): void;

/** Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations. */
force_update_transform(): void;

/** Returns all the gizmos attached to this [Node3D]. */
get_gizmos(): Node3DGizmo[];

/** Returns the parent [Node3D], or an empty [Object] if no parent exists or parent is not of type [Node3D]. */
get_parent_node_3d(): Node3D;

/** Returns the current [World3D] resource this [Node3D] node is registered to. */
get_world_3d(): World3D;

/** Rotates the global (world) transformation around axis, a unit [Vector3], by specified angle in radians. The rotation axis is in global coordinate system. */
global_rotate(): void;

/** Scales the global (world) transformation by the given [Vector3] scale factors. */
global_scale(): void;

/** Moves the global (world) transformation by [Vector3] offset. The offset is in global coordinate system. */
global_translate(): void;

/** Disables rendering of this node. Changes [member visible] to [code]false[/code]. */
hide(): void;

/** Returns whether node notifies about its local transformation changes. [Node3D] will not propagate this by default. */
is_local_transform_notification_enabled(): boolean;

/** Returns whether this node uses a scale of [code](1, 1, 1)[/code] or its local transformation scale. */
is_scale_disabled(): boolean;

/** Returns whether the node notifies about its global and local transformation changes. [Node3D] will not propagate this by default. */
is_transform_notification_enabled(): boolean;

/** Returns [code]true[/code] if the node is present in the [SceneTree], its [member visible] property is [code]true[/code] and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree. */
is_visible_in_tree(): boolean;

/**
 * Rotates the node so that the local forward axis (-Z, [constant Vector3.FORWARD]) points toward the [param target] position.
 *
 * The local up axis (+Y) points as close to the [param up] vector as possible while staying perpendicular to the local forward axis. The resulting transform is orthogonal, and the scale is preserved. Non-uniform scaling may not work correctly.
 *
 * The [param target] position cannot be the same as the node's position, the [param up] vector cannot be zero, and the direction from the node's position to the [param target] vector cannot be parallel to the [param up] vector.
 *
 * Operations take place in global space, which means that the node must be in the scene tree.
 *
 * If [param use_model_front] is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the [param target] position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).
 *
*/
look_at(): void;

/** Moves the node to the specified [param position], and then rotates the node to point toward the [param target] as per [method look_at]. Operations take place in global space. */
look_at_from_position(): void;

/** Resets this node's transformations (like scale, skew and taper) preserving its rotation and translation by performing Gram-Schmidt orthonormalization on this node's [Transform3D]. */
orthonormalize(): void;

/** Rotates the local transformation around axis, a unit [Vector3], by specified angle in radians. */
rotate(): void;

/** Rotates the local transformation around axis, a unit [Vector3], by specified angle in radians. The rotation axis is in object-local coordinate system. */
rotate_object_local(): void;

/** Rotates the local transformation around the X axis by angle in radians. */
rotate_x(): void;

/** Rotates the local transformation around the Y axis by angle in radians. */
rotate_y(): void;

/** Rotates the local transformation around the Z axis by angle in radians. */
rotate_z(): void;

/** Scales the local transformation by given 3D scale factors in object-local coordinate system. */
scale_object_local(): void;

/** Sets whether the node uses a scale of [code](1, 1, 1)[/code] or its local transformation scale. Changes to the local transformation scale are preserved. */
set_disable_scale(): void;

/** Reset all transformations for this node (sets its [Transform3D] to the identity matrix). */
set_identity(): void;

/** Sets whether the node ignores notification that its transformation (global or local) changed. */
set_ignore_transform_notification(): void;

/** Sets whether the node notifies about its local transformation changes. [Node3D] will not propagate this by default. */
set_notify_local_transform(): void;

/** Sets whether the node notifies about its global and local transformation changes. [Node3D] will not propagate this by default, unless it is in the editor context and it has a valid gizmo. */
set_notify_transform(): void;

/**
 * Set subgizmo selection for this node in the editor.
 *
 * **Note:** The gizmo object would typically be an instance of [EditorNode3DGizmo], but the argument type is kept generic to avoid creating a dependency on editor classes in [Node3D].
 *
*/
set_subgizmo_selection(): void;

/** Enables rendering of this node. Changes [member visible] to [code]true[/code]. */
show(): void;

/** Transforms [param local_point] from this node's local space to world space. */
to_global(): Vector3;

/** Transforms [param global_point] from world space to this node's local space. */
to_local(): Vector3;

/**
 * Changes the node's position by the given offset [Vector3].
 *
 * Note that the translation [param offset] is affected by the node's scale, so if scaled by e.g. `(10, 1, 1)`, a translation by an offset of `(2, 0, 0)` would actually add 20 (`2 * 10`) to the X coordinate.
 *
*/
translate(): void;

/** Changes the node's position by the given offset [Vector3] in local space. */
translate_object_local(): void;

/** Updates all the [Node3D] gizmos attached to this node. */
update_gizmos(): void;

  connect<T extends SignalsOf<Node3D>>(signal: T, method: SignalFunction<Node3D[T]>): number;



/**
 * [Node3D] nodes receive this notification when their global transform changes. This means that either the current or a parent node changed its transform.
 *
 * In order for [constant NOTIFICATION_TRANSFORM_CHANGED] to work, users first need to ask for it, with [method set_notify_transform]. The notification is also sent if the node is in the editor context and it has at least one valid gizmo.
 *
*/
static NOTIFICATION_TRANSFORM_CHANGED: any;

/**
 * [Node3D] nodes receive this notification when they are registered to new [World3D] resource.
 *
*/
static NOTIFICATION_ENTER_WORLD: any;

/**
 * [Node3D] nodes receive this notification when they are unregistered from current [World3D] resource.
 *
*/
static NOTIFICATION_EXIT_WORLD: any;

/**
 * [Node3D] nodes receive this notification when their visibility changes.
 *
*/
static NOTIFICATION_VISIBILITY_CHANGED: any;

/**
 * [Node3D] nodes receive this notification when their local transform changes. This is not received when the transform of a parent node is changed.
 *
 * In order for [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] to work, users first need to ask for it, with [method set_notify_local_transform].
 *
*/
static NOTIFICATION_LOCAL_TRANSFORM_CHANGED: any;

/**
 * The rotation is edited using [Vector3] Euler angles.
 *
*/
static ROTATION_EDIT_MODE_EULER: any;

/**
 * The rotation is edited using a [Quaternion].
 *
*/
static ROTATION_EDIT_MODE_QUATERNION: any;

/**
 * The rotation is edited using a [Basis]. In this mode, [member scale] can't be edited separately.
 *
*/
static ROTATION_EDIT_MODE_BASIS: any;


/**
 * Emitted when node visibility changes.
 *
*/
$visibility_changed: Signal<() => void>

}

