
/**
 * Abstract base class for 3D physics objects. [CollisionObject3D] can hold any number of [Shape3D]s for collision. Each shape must be assigned to a **shape owner**. Shape owners are not nodes and do not appear in the editor, but are accessible through code using the `shape_owner_*` methods.
 *
 * **Warning:** With a non-uniform scale, this node will likely not behave as expected. It is advised to keep its scale the same on all axes and adjust its collision shape(s) instead.
 *
*/
declare class CollisionObject3D extends Node3D  {

  
/**
 * Abstract base class for 3D physics objects. [CollisionObject3D] can hold any number of [Shape3D]s for collision. Each shape must be assigned to a **shape owner**. Shape owners are not nodes and do not appear in the editor, but are accessible through code using the `shape_owner_*` methods.
 *
 * **Warning:** With a non-uniform scale, this node will likely not behave as expected. It is advised to keep its scale the same on all axes and adjust its collision shape(s) instead.
 *
*/
  new(): CollisionObject3D; 
  static "new"(): CollisionObject3D 


/**
 * The physics layers this CollisionObject3D **is in**. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].
 *
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
 *
*/
collision_layer: int;

/**
 * The physics layers this CollisionObject3D **scans**. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].
 *
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
 *
*/
collision_mask: int;

/** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
collision_priority: float;

/** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
disable_mode: int;

/** If [code]true[/code], the [CollisionObject3D] will continue to receive input events as the mouse is dragged across its shapes. */
input_capture_on_drag: boolean;

/** If [code]true[/code], this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one [member collision_layer] bit to be set. */
input_ray_pickable: boolean;

/**
 * Receives unhandled [InputEvent]s. [param position] is the location in world space of the mouse pointer on the surface of the shape with index [param shape_idx] and [param normal] is the normal vector of the surface at that point. Connect to the [signal input_event] signal to easily pick up these events.
 *
 * **Note:** [method _input_event] requires [member input_ray_pickable] to be `true` and at least one [member collision_layer] bit to be set.
 *
*/
protected _input_event(): void;

/** Called when the mouse pointer enters any of this object's shapes. Requires [member input_ray_pickable] to be [code]true[/code] and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject3D] won't cause this function to be called. */
protected _mouse_enter(): void;

/** Called when the mouse pointer exits all this object's shapes. Requires [member input_ray_pickable] to be [code]true[/code] and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject3D] won't cause this function to be called. */
protected _mouse_exit(): void;

/** Creates a new shape owner for the given object. Returns [code]owner_id[/code] of the new owner for future reference. */
create_shape_owner(): int;

/** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_layer_value(): boolean;

/** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_mask_value(): boolean;

/** Returns the object's [RID]. */
get_rid(): RID;

/** Returns an [Array] of [code]owner_id[/code] identifiers. You can use these ids in other methods that take [code]owner_id[/code] as an argument. */
get_shape_owners(): PackedInt32Array;

/** If [code]true[/code], the shape owner and its shapes are disabled. */
is_shape_owner_disabled(): boolean;

/** Removes the given shape owner. */
remove_shape_owner(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
set_collision_layer_value(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
set_collision_mask_value(): void;

/** Returns the [code]owner_id[/code] of the given shape. */
shape_find_owner(): int;

/** Adds a [Shape3D] to the shape owner. */
shape_owner_add_shape(): void;

/** Removes all shapes from the shape owner. */
shape_owner_clear_shapes(): void;

/** Returns the parent object of the given shape owner. */
shape_owner_get_owner(): Object;

/** Returns the [Shape3D] with the given ID from the given shape owner. */
shape_owner_get_shape(): Shape3D;

/** Returns the number of shapes the given shape owner contains. */
shape_owner_get_shape_count(): int;

/** Returns the child index of the [Shape3D] with the given ID from the given shape owner. */
shape_owner_get_shape_index(): int;

/** Returns the shape owner's [Transform3D]. */
shape_owner_get_transform(): Transform3D;

/** Removes a shape from the given shape owner. */
shape_owner_remove_shape(): void;

/** If [code]true[/code], disables the given shape owner. */
shape_owner_set_disabled(): void;

/** Sets the [Transform3D] of the given shape owner. */
shape_owner_set_transform(): void;

  connect<T extends SignalsOf<CollisionObject3D>>(signal: T, method: SignalFunction<CollisionObject3D[T]>): number;



/**
 * When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [CollisionObject3D].
 *
 * Automatically re-added to the physics simulation when the [Node] is processed again.
 *
*/
static DISABLE_MODE_REMOVE: any;

/**
 * When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], make the body static. Doesn't affect [Area3D]. [PhysicsBody3D] can't be affected by forces or other bodies while static.
 *
 * Automatically set [PhysicsBody3D] back to its original mode when the [Node] is processed again.
 *
*/
static DISABLE_MODE_MAKE_STATIC: any;

/**
 * When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation.
 *
*/
static DISABLE_MODE_KEEP_ACTIVE: any;


/**
 * Emitted when the object receives an unhandled [InputEvent]. [param position] is the location in world space of the mouse pointer on the surface of the shape with index [param shape_idx] and [param normal] is the normal vector of the surface at that point.
 *
*/
$input_event: Signal<() => void>

/**
 * Emitted when the mouse pointer enters any of this object's shapes. Requires [member input_ray_pickable] to be `true` and at least one [member collision_layer] bit to be set.
 *
 * **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the [CollisionObject3D]'s area is small. This signal may also not be emitted if another [CollisionObject3D] is overlapping the [CollisionObject3D] in question.
 *
*/
$mouse_entered: Signal<() => void>

/**
 * Emitted when the mouse pointer exits all this object's shapes. Requires [member input_ray_pickable] to be `true` and at least one [member collision_layer] bit to be set.
 *
 * **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the [CollisionObject3D]'s area is small. This signal may also not be emitted if another [CollisionObject3D] is overlapping the [CollisionObject3D] in question.
 *
*/
$mouse_exited: Signal<() => void>

}

