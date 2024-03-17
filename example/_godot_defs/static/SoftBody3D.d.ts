
/**
 * A deformable 3D physics mesh. Used to create elastic or deformable objects such as cloth, rubber, or other flexible materials.
 *
 * **Note:** There are many known bugs in [SoftBody3D]. Therefore, it's not recommended to use them for things that can affect gameplay (such as trampolines).
 *
*/
declare class SoftBody3D extends MeshInstance3D  {

  
/**
 * A deformable 3D physics mesh. Used to create elastic or deformable objects such as cloth, rubber, or other flexible materials.
 *
 * **Note:** There are many known bugs in [SoftBody3D]. Therefore, it's not recommended to use them for things that can affect gameplay (such as trampolines).
 *
*/
  new(): SoftBody3D; 
  static "new"(): SoftBody3D 


/**
 * The physics layers this SoftBody3D **is in**. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].
 *
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
 *
*/
collision_layer: int;

/**
 * The physics layers this SoftBody3D **scans**. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].
 *
 * **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=$DOCS_URL/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.
 *
*/
collision_mask: int;


/** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
disable_mode: int;


/** Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between [code]0.0[/code] and [code]1.0[/code] (inclusive). */
linear_stiffness: float;

/** [NodePath] to a [CollisionObject3D] this SoftBody3D should avoid clipping. */
parent_collision_ignore: NodePathType;


/** If [code]true[/code], the [SoftBody3D] will respond to [RayCast3D]s. */
ray_pickable: boolean;

/** Increasing this value will improve the resulting simulation, but can affect performance. Use with care. */
simulation_precision: int;

/** The SoftBody3D's mass. */
total_mass: float;

/** Adds a body to the list of bodies that this body can't collide with. */
add_collision_exception_with(): void;

/** Returns an array of nodes that were added as collision exceptions for this body. */
get_collision_exceptions(): PhysicsBody3D[];

/** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_layer_value(): boolean;

/** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
get_collision_mask_value(): boolean;

/** No documentation provided. */
get_physics_rid(): RID;

/** Returns local translation of a vertex in the surface array. */
get_point_transform(): Vector3;

/** Returns [code]true[/code] if vertex is set to pinned. */
is_point_pinned(): boolean;

/** Removes a body from the list of bodies that this body can't collide with. */
remove_collision_exception_with(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
set_collision_layer_value(): void;

/** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
set_collision_mask_value(): void;

/** Sets the pinned state of a surface vertex. When set to [code]true[/code], the optional [param attachment_path] can define a [Node3D] the pinned vertex will be attached to. */
set_point_pinned(): void;

  connect<T extends SignalsOf<SoftBody3D>>(signal: T, method: SignalFunction<SoftBody3D[T]>): number;



/**
 * When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [SoftBody3D].
 *
 * Automatically re-added to the physics simulation when the [Node] is processed again.
 *
*/
static DISABLE_MODE_REMOVE: any;

/**
 * When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation.
 *
*/
static DISABLE_MODE_KEEP_ACTIVE: any;



}

