
/**
 * Abstract base class for 2D physics objects. [CollisionObject2D] can hold any number of [Shape2D]s for collision. Each shape must be assigned to a **shape owner**. Shape owners are not nodes and do not appear in the editor, but are accessible through code using the `shape_owner_*` methods.
 *
 * **Note:** Only collisions between objects within the same canvas ([Viewport] canvas or [CanvasLayer]) are supported. The behavior of collisions between objects in different canvases is undefined.
 *
*/
declare class CollisionObject2D extends Node2D  {

  
/**
 * Abstract base class for 2D physics objects. [CollisionObject2D] can hold any number of [Shape2D]s for collision. Each shape must be assigned to a **shape owner**. Shape owners are not nodes and do not appear in the editor, but are accessible through code using the `shape_owner_*` methods.
 *
 * **Note:** Only collisions between objects within the same canvas ([Viewport] canvas or [CanvasLayer]) are supported. The behavior of collisions between objects in different canvases is undefined.
 *
*/
  new(): CollisionObject2D; 
  static "new"(): CollisionObject2D 


/**
 * The physics layers this CollisionObject2D is in. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].
 *
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
 *
*/
collision_layer: int;

/**
 * The physics layers this CollisionObject2D scans. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].
 *
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
 *
*/
collision_mask: int;

/** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
collision_priority: float;

/** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
disable_mode: int;

/** If [code]true[/code], this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one [member collision_layer] bit to be set. */
input_pickable: boolean;

/**
 * Accepts unhandled [InputEvent]s. [param shape_idx] is the child index of the clicked [Shape2D]. Connect to [signal input_event] to easily pick up these events.
 *
 * **Note:** [method _input_event] requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set.
 *
*/
protected _input_event(): void;

/** Called when the mouse pointer enters any of this object's shapes. Requires [member input_pickable] to be [code]true[/code] and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject2D] won't cause this function to be called. */
protected _mouse_enter(): void;

/** Called when the mouse pointer exits all this object's shapes. Requires [member input_pickable] to be [code]true[/code] and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject2D] won't cause this function to be called. */
protected _mouse_exit(): void;

/** Called when the mouse pointer enters any of this object's shapes or moves from one shape to another. [param shape_idx] is the child index of the newly entered [Shape2D]. Requires [member input_pickable] to be [code]true[/code] and at least one [member collision_layer] bit to be called. */
protected _mouse_shape_enter(): void;

/** Called when the mouse pointer exits any of this object's shapes. [param shape_idx] is the child index of the exited [Shape2D]. Requires [member input_pickable] to be [code]true[/code] and at least one [member collision_layer] bit to be called. */
protected _mouse_shape_exit(): void;

/** Creates a new shape owner for the given object. Returns [code]owner_id[/code] of the new owner for future reference. */
create_shape_owner(): int;

/** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_layer_value(): boolean;

/** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_mask_value(): boolean;

/** Returns the object's [RID]. */
get_rid(): RID;

/** Returns the [code]one_way_collision_margin[/code] of the shape owner identified by given [param owner_id]. */
get_shape_owner_one_way_collision_margin(): float;

/** Returns an [Array] of [code]owner_id[/code] identifiers. You can use these ids in other methods that take [code]owner_id[/code] as an argument. */
get_shape_owners(): PackedInt32Array;

/** If [code]true[/code], the shape owner and its shapes are disabled. */
is_shape_owner_disabled(): boolean;

/** Returns [code]true[/code] if collisions for the shape owner originating from this [CollisionObject2D] will not be reported to collided with [CollisionObject2D]s. */
is_shape_owner_one_way_collision_enabled(): boolean;

/** Removes the given shape owner. */
remove_shape_owner(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
set_collision_layer_value(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
set_collision_mask_value(): void;

/** Returns the [code]owner_id[/code] of the given shape. */
shape_find_owner(): int;

/** Adds a [Shape2D] to the shape owner. */
shape_owner_add_shape(): void;

/** Removes all shapes from the shape owner. */
shape_owner_clear_shapes(): void;

/** Returns the parent object of the given shape owner. */
shape_owner_get_owner(): Object;

/** Returns the [Shape2D] with the given ID from the given shape owner. */
shape_owner_get_shape(): Shape2D;

/** Returns the number of shapes the given shape owner contains. */
shape_owner_get_shape_count(): int;

/** Returns the child index of the [Shape2D] with the given ID from the given shape owner. */
shape_owner_get_shape_index(): int;

/** Returns the shape owner's [Transform2D]. */
shape_owner_get_transform(): Transform2D;

/** Removes a shape from the given shape owner. */
shape_owner_remove_shape(): void;

/** If [code]true[/code], disables the given shape owner. */
shape_owner_set_disabled(): void;

/** If [param enable] is [code]true[/code], collisions for the shape owner originating from this [CollisionObject2D] will not be reported to collided with [CollisionObject2D]s. */
shape_owner_set_one_way_collision(): void;

/** Sets the [code]one_way_collision_margin[/code] of the shape owner identified by given [param owner_id] to [param margin] pixels. */
shape_owner_set_one_way_collision_margin(): void;

/** Sets the [Transform2D] of the given shape owner. */
shape_owner_set_transform(): void;

  connect<T extends SignalsOf<CollisionObject2D>>(signal: T, method: SignalFunction<CollisionObject2D[T]>): number;



/**
 * When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [CollisionObject2D].
 *
 * Automatically re-added to the physics simulation when the [Node] is processed again.
 *
*/
static DISABLE_MODE_REMOVE: any;

/**
 * When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], make the body static. Doesn't affect [Area2D]. [PhysicsBody2D] can't be affected by forces or other bodies while static.
 *
 * Automatically set [PhysicsBody2D] back to its original mode when the [Node] is processed again.
 *
*/
static DISABLE_MODE_MAKE_STATIC: any;

/**
 * When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation.
 *
*/
static DISABLE_MODE_KEEP_ACTIVE: any;


/**
 * Emitted when an input event occurs. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. See [method _input_event] for details.
 *
*/
$input_event: Signal<() => void>

/**
 * Emitted when the mouse pointer enters any of this object's shapes. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject2D] won't cause this signal to be emitted.
 *
 * **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the [CollisionObject2D]'s area is small. This signal may also not be emitted if another [CollisionObject2D] is overlapping the [CollisionObject2D] in question.
 *
*/
$mouse_entered: Signal<() => void>

/**
 * Emitted when the mouse pointer exits all this object's shapes. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject2D] won't cause this signal to be emitted.
 *
 * **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the [CollisionObject2D]'s area is small. This signal may also not be emitted if another [CollisionObject2D] is overlapping the [CollisionObject2D] in question.
 *
*/
$mouse_exited: Signal<() => void>

/**
 * Emitted when the mouse pointer enters any of this object's shapes or moves from one shape to another. [param shape_idx] is the child index of the newly entered [Shape2D]. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set.
 *
*/
$mouse_shape_entered: Signal<() => void>

/**
 * Emitted when the mouse pointer exits any of this object's shapes. [param shape_idx] is the child index of the exited [Shape2D]. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set.
 *
*/
$mouse_shape_exited: Signal<() => void>

}

