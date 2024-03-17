
/**
 * PhysicsServer3D is the server responsible for all 3D physics. It can directly create and manipulate all physics objects:
 *
 * - A **space** is a self-contained world for a physics simulation. It contains bodies, areas, and joints. Its state can be queried for collision and intersection information, and several parameters of the simulation can be modified.
 *
 * - A **shape** is a geometric shape such as a sphere, a box, a cylinder, or a polygon. It can be used for collision detection by adding it to a body/area, possibly with an extra transformation relative to the body/area's origin. Bodies/areas can have multiple (transformed) shapes added to them, and a single shape can be added to bodies/areas multiple times with different local transformations.
 *
 * - A **body** is a physical object which can be in static, kinematic, or rigid mode. Its state (such as position and velocity) can be queried and updated. A force integration callback can be set to customize the body's physics.
 *
 * - An **area** is a region in space which can be used to detect bodies and areas entering and exiting it. A body monitoring callback can be set to report entering/exiting body shapes, and similarly an area monitoring callback can be set. Gravity and damping can be overridden within the area by setting area parameters.
 *
 * - A **joint** is a constraint, either between two bodies or on one body relative to a point. Parameters such as the joint bias and the rest length of a spring joint can be adjusted.
 *
 * Physics objects in [PhysicsServer3D] may be created and manipulated independently; they do not have to be tied to nodes in the scene tree.
 *
 * **Note:** All the 3D physics nodes use the physics server internally. Adding a physics node to the scene tree will cause a corresponding physics object to be created in the physics server. A rigid body node registers a callback that updates the node's transform with the transform of the respective body object in the physics server (every physics update). An area node registers a callback to inform the area node about overlaps with the respective area object in the physics server. The raycast node queries the direct state of the relevant space in the physics server.
 *
*/
declare class PhysicsServer3DClass extends Object  {

  
/**
 * PhysicsServer3D is the server responsible for all 3D physics. It can directly create and manipulate all physics objects:
 *
 * - A **space** is a self-contained world for a physics simulation. It contains bodies, areas, and joints. Its state can be queried for collision and intersection information, and several parameters of the simulation can be modified.
 *
 * - A **shape** is a geometric shape such as a sphere, a box, a cylinder, or a polygon. It can be used for collision detection by adding it to a body/area, possibly with an extra transformation relative to the body/area's origin. Bodies/areas can have multiple (transformed) shapes added to them, and a single shape can be added to bodies/areas multiple times with different local transformations.
 *
 * - A **body** is a physical object which can be in static, kinematic, or rigid mode. Its state (such as position and velocity) can be queried and updated. A force integration callback can be set to customize the body's physics.
 *
 * - An **area** is a region in space which can be used to detect bodies and areas entering and exiting it. A body monitoring callback can be set to report entering/exiting body shapes, and similarly an area monitoring callback can be set. Gravity and damping can be overridden within the area by setting area parameters.
 *
 * - A **joint** is a constraint, either between two bodies or on one body relative to a point. Parameters such as the joint bias and the rest length of a spring joint can be adjusted.
 *
 * Physics objects in [PhysicsServer3D] may be created and manipulated independently; they do not have to be tied to nodes in the scene tree.
 *
 * **Note:** All the 3D physics nodes use the physics server internally. Adding a physics node to the scene tree will cause a corresponding physics object to be created in the physics server. A rigid body node registers a callback that updates the node's transform with the transform of the respective body object in the physics server (every physics update). An area node registers a callback to inform the area node about overlaps with the respective area object in the physics server. The raycast node queries the direct state of the relevant space in the physics server.
 *
*/
  new(): PhysicsServer3DClass; 
  static "new"(): PhysicsServer3DClass 



/** Adds a shape to the area, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index. */
area_add_shape(): void;

/** Assigns the area to a descendant of [Object], so it can exist in the node tree. */
area_attach_object_instance_id(): void;

/** Removes all shapes from an area. It does not delete the shapes, so they can be reassigned later. */
area_clear_shapes(): void;

/** Creates an [Area3D]. */
area_create(): RID;

/** Returns the physics layer or layers an area belongs to. */
area_get_collision_layer(): int;

/** Returns the physics layer or layers an area can contact with. */
area_get_collision_mask(): int;

/** Gets the instance ID of the object the area is assigned to. */
area_get_object_instance_id(): int;

/** Returns an area parameter value. A list of available parameters is on the [enum AreaParameter] constants. */
area_get_param(): any;

/** Returns the [RID] of the nth shape of an area. */
area_get_shape(): RID;

/** Returns the number of shapes assigned to an area. */
area_get_shape_count(): int;

/** Returns the transform matrix of a shape within an area. */
area_get_shape_transform(): Transform3D;

/** Returns the space assigned to the area. */
area_get_space(): RID;

/** Returns the transform matrix for an area. */
area_get_transform(): Transform3D;

/** Removes a shape from an area. It does not delete the shape, so it can be reassigned later. */
area_remove_shape(): void;

/**
 * Sets the area's area monitor callback. This callback will be called when any other (shape of an) area enters or exits (a shape of) the given area, and must take the following five parameters:
 *
 * 1. an integer `status`: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other area's shape entered or exited the area,
 *
 * 2. an [RID] `area_rid`: the [RID] of the other area that entered or exited the area,
 *
 * 3. an integer `instance_id`: the `ObjectID` attached to the other area,
 *
 * 4. an integer `area_shape_idx`: the index of the shape of the other area that entered or exited the area,
 *
 * 5. an integer `self_shape_idx`: the index of the shape of the area where the other area entered or exited.
 *
 * By counting (or keeping track of) the shapes that enter and exit, it can be determined if an area (with all its shapes) is entering for the first time or exiting for the last time.
 *
*/
area_set_area_monitor_callback(): void;

/** Assigns the area to one or many physics layers. */
area_set_collision_layer(): void;

/** Sets which physics layers the area will monitor. */
area_set_collision_mask(): void;

/**
 * Sets the area's body monitor callback. This callback will be called when any other (shape of a) body enters or exits (a shape of) the given area, and must take the following five parameters:
 *
 * 1. an integer `status`: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other body shape entered or exited the area,
 *
 * 2. an [RID] `body_rid`: the [RID] of the body that entered or exited the area,
 *
 * 3. an integer `instance_id`: the `ObjectID` attached to the body,
 *
 * 4. an integer `body_shape_idx`: the index of the shape of the body that entered or exited the area,
 *
 * 5. an integer `self_shape_idx`: the index of the shape of the area where the body entered or exited.
 *
 * By counting (or keeping track of) the shapes that enter and exit, it can be determined if a body (with all its shapes) is entering for the first time or exiting for the last time.
 *
*/
area_set_monitor_callback(): void;

/** No documentation provided. */
area_set_monitorable(): void;

/** Sets the value for an area parameter. A list of available parameters is on the [enum AreaParameter] constants. */
area_set_param(): void;

/** Sets object pickable with rays. */
area_set_ray_pickable(): void;

/** Substitutes a given area shape by another. The old shape is selected by its index, the new one by its [RID]. */
area_set_shape(): void;

/** No documentation provided. */
area_set_shape_disabled(): void;

/** Sets the transform matrix for an area shape. */
area_set_shape_transform(): void;

/** Assigns a space to the area. */
area_set_space(): void;

/** Sets the transform matrix for an area. */
area_set_transform(): void;

/** Adds a body to the list of bodies exempt from collisions. */
body_add_collision_exception(): void;

/**
 * Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `body_set_constant_force(body, Vector3(0, 0, 0))`.
 *
 * This is equivalent to using [method body_add_constant_force] at the body's center of mass.
 *
*/
body_add_constant_central_force(): void;

/**
 * Adds a constant positioned force to the body that keeps being applied over time until cleared with `body_set_constant_force(body, Vector3(0, 0, 0))`.
 *
 * [param position] is the offset from the body origin in global coordinates.
 *
*/
body_add_constant_force(): void;

/** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with [code]body_set_constant_torque(body, Vector3(0, 0, 0))[/code]. */
body_add_constant_torque(): void;

/** Adds a shape to the body, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index. */
body_add_shape(): void;

/**
 * Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.
 *
 * This is equivalent to using [method body_apply_force] at the body's center of mass.
 *
*/
body_apply_central_force(): void;

/**
 * Applies a directional impulse without affecting rotation.
 *
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 *
 * This is equivalent to using [method body_apply_impulse] at the body's center of mass.
 *
*/
body_apply_central_impulse(): void;

/**
 * Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.
 *
 * [param position] is the offset from the body origin in global coordinates.
 *
*/
body_apply_force(): void;

/**
 * Applies a positioned impulse to the body.
 *
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 *
 * [param position] is the offset from the body origin in global coordinates.
 *
*/
body_apply_impulse(): void;

/** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update. */
body_apply_torque(): void;

/**
 * Applies a rotational impulse to the body without affecting the position.
 *
 * An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).
 *
*/
body_apply_torque_impulse(): void;

/** Assigns the area to a descendant of [Object], so it can exist in the node tree. */
body_attach_object_instance_id(): void;

/** Removes all shapes from a body. */
body_clear_shapes(): void;

/** No documentation provided. */
body_create(): RID;

/** Returns the physics layer or layers a body belongs to. */
body_get_collision_layer(): int;

/** Returns the physics layer or layers a body can collide with. */
body_get_collision_mask(): int;

/** Returns the body's collision priority. */
body_get_collision_priority(): float;

/**
 * Returns the body's total constant positional forces applied during each physics update.
 *
 * See [method body_add_constant_force] and [method body_add_constant_central_force].
 *
*/
body_get_constant_force(): Vector3;

/**
 * Returns the body's total constant rotational forces applied during each physics update.
 *
 * See [method body_add_constant_torque].
 *
*/
body_get_constant_torque(): Vector3;

/** Returns the [PhysicsDirectBodyState3D] of the body. Returns [code]null[/code] if the body is destroyed or removed from the physics space. */
body_get_direct_state(): PhysicsDirectBodyState3D;

/** Returns the maximum contacts that can be reported. See [method body_set_max_contacts_reported]. */
body_get_max_contacts_reported(): int;

/** Returns the body mode. */
body_get_mode(): int;

/** Gets the instance ID of the object the area is assigned to. */
body_get_object_instance_id(): int;

/** Returns the value of a body parameter. A list of available parameters is on the [enum BodyParameter] constants. */
body_get_param(): any;

/** Returns the [RID] of the nth shape of a body. */
body_get_shape(): RID;

/** Returns the number of shapes assigned to a body. */
body_get_shape_count(): int;

/** Returns the transform matrix of a body shape. */
body_get_shape_transform(): Transform3D;

/** Returns the [RID] of the space assigned to a body. */
body_get_space(): RID;

/** Returns a body state. */
body_get_state(): any;

/** No documentation provided. */
body_is_axis_locked(): boolean;

/** If [code]true[/code], the continuous collision detection mode is enabled. */
body_is_continuous_collision_detection_enabled(): boolean;

/** Returns whether a body uses a callback function to calculate its own physics (see [method body_set_force_integration_callback]). */
body_is_omitting_force_integration(): boolean;

/**
 * Removes a body from the list of bodies exempt from collisions.
 *
 * Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.
 *
*/
body_remove_collision_exception(): void;

/** Removes a shape from a body. The shape is not deleted, so it can be reused afterwards. */
body_remove_shape(): void;

/** Restores the default inertia and center of mass based on shapes to cancel any custom values previously set using [method body_set_param]. */
body_reset_mass_properties(): void;

/** No documentation provided. */
body_set_axis_lock(): void;

/** Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
body_set_axis_velocity(): void;

/** Sets the physics layer or layers a body belongs to. */
body_set_collision_layer(): void;

/** Sets the physics layer or layers a body can collide with. */
body_set_collision_mask(): void;

/** Sets the body's collision priority. */
body_set_collision_priority(): void;

/**
 * Sets the body's total constant positional forces applied during each physics update.
 *
 * See [method body_add_constant_force] and [method body_add_constant_central_force].
 *
*/
body_set_constant_force(): void;

/**
 * Sets the body's total constant rotational forces applied during each physics update.
 *
 * See [method body_add_constant_torque].
 *
*/
body_set_constant_torque(): void;

/**
 * If `true`, the continuous collision detection mode is enabled.
 *
 * Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.
 *
*/
body_set_enable_continuous_collision_detection(): void;

/**
 * Sets the function used to calculate physics for an object, if that object allows it (see [method body_set_omit_force_integration]). The force integration function takes 2 arguments:
 *
 * - `state` — [PhysicsDirectBodyState3D] used to retrieve and modify the body's state.
 *
 * - [code skip-lint]userdata` — optional user data passed to [method body_set_force_integration_callback].
 *
*/
body_set_force_integration_callback(): void;

/** Sets the maximum contacts to report. Bodies can keep a log of the contacts with other bodies. This is enabled by setting the maximum number of contacts reported to a number greater than 0. */
body_set_max_contacts_reported(): void;

/** Sets the body mode, from one of the [enum BodyMode] constants. */
body_set_mode(): void;

/** Sets whether a body uses a callback function to calculate its own physics (see [method body_set_force_integration_callback]). */
body_set_omit_force_integration(): void;

/** Sets a body parameter. A list of available parameters is on the [enum BodyParameter] constants. */
body_set_param(): void;

/** Sets the body pickable with rays if [param enable] is set. */
body_set_ray_pickable(): void;

/** Substitutes a given body shape by another. The old shape is selected by its index, the new one by its [RID]. */
body_set_shape(): void;

/** No documentation provided. */
body_set_shape_disabled(): void;

/** Sets the transform matrix for a body shape. */
body_set_shape_transform(): void;

/** Assigns a space to the body (see [method space_create]). */
body_set_space(): void;

/** Sets a body state (see [enum BodyState] constants). */
body_set_state(): void;

/** Returns [code]true[/code] if a collision would result from moving along a motion vector from a given point in space. [PhysicsTestMotionParameters3D] is passed to set motion parameters. [PhysicsTestMotionResult3D] can be passed to return additional information. */
body_test_motion(): boolean;

/** No documentation provided. */
box_shape_create(): RID;

/** No documentation provided. */
capsule_shape_create(): RID;

/** No documentation provided. */
concave_polygon_shape_create(): RID;

/** Gets a cone_twist_joint parameter (see [enum ConeTwistJointParam] constants). */
cone_twist_joint_get_param(): float;

/** Sets a cone_twist_joint parameter (see [enum ConeTwistJointParam] constants). */
cone_twist_joint_set_param(): void;

/** No documentation provided. */
convex_polygon_shape_create(): RID;

/** No documentation provided. */
custom_shape_create(): RID;

/** No documentation provided. */
cylinder_shape_create(): RID;

/** Destroys any of the objects created by PhysicsServer3D. If the [RID] passed is not one of the objects that can be created by PhysicsServer3D, an error will be sent to the console. */
free_rid(): void;

/** Gets a generic_6_DOF_joint flag (see [enum G6DOFJointAxisFlag] constants). */
generic_6dof_joint_get_flag(): boolean;

/** Gets a generic_6_DOF_joint parameter (see [enum G6DOFJointAxisParam] constants). */
generic_6dof_joint_get_param(): float;

/** Sets a generic_6_DOF_joint flag (see [enum G6DOFJointAxisFlag] constants). */
generic_6dof_joint_set_flag(): void;

/** Sets a generic_6_DOF_joint parameter (see [enum G6DOFJointAxisParam] constants). */
generic_6dof_joint_set_param(): void;

/** Returns information about the current state of the 3D physics engine. See [enum ProcessInfo] for a list of available states. */
get_process_info(): int;

/** No documentation provided. */
heightmap_shape_create(): RID;

/** Gets a hinge_joint flag (see [enum HingeJointFlag] constants). */
hinge_joint_get_flag(): boolean;

/** Gets a hinge_joint parameter (see [enum HingeJointParam]). */
hinge_joint_get_param(): float;

/** Sets a hinge_joint flag (see [enum HingeJointFlag] constants). */
hinge_joint_set_flag(): void;

/** Sets a hinge_joint parameter (see [enum HingeJointParam] constants). */
hinge_joint_set_param(): void;

/** No documentation provided. */
joint_clear(): void;

/** No documentation provided. */
joint_create(): RID;

/** Sets whether the bodies attached to the [Joint3D] will collide with each other. */
joint_disable_collisions_between_bodies(): void;

/** Gets the priority value of the Joint3D. */
joint_get_solver_priority(): int;

/** Returns the type of the Joint3D. */
joint_get_type(): int;

/** Returns whether the bodies attached to the [Joint3D] will collide with each other. */
joint_is_disabled_collisions_between_bodies(): boolean;

/** No documentation provided. */
joint_make_cone_twist(): void;

/** No documentation provided. */
joint_make_generic_6dof(): void;

/** No documentation provided. */
joint_make_hinge(): void;

/** No documentation provided. */
joint_make_pin(): void;

/** No documentation provided. */
joint_make_slider(): void;

/** Sets the priority value of the Joint3D. */
joint_set_solver_priority(): void;

/** Returns position of the joint in the local space of body a of the joint. */
pin_joint_get_local_a(): Vector3;

/** Returns position of the joint in the local space of body b of the joint. */
pin_joint_get_local_b(): Vector3;

/** Gets a pin_joint parameter (see [enum PinJointParam] constants). */
pin_joint_get_param(): float;

/** Sets position of the joint in the local space of body a of the joint. */
pin_joint_set_local_a(): void;

/** Sets position of the joint in the local space of body b of the joint. */
pin_joint_set_local_b(): void;

/** Sets a pin_joint parameter (see [enum PinJointParam] constants). */
pin_joint_set_param(): void;

/** No documentation provided. */
separation_ray_shape_create(): RID;

/** Activates or deactivates the 3D physics engine. */
set_active(): void;

/** Returns the shape data. */
shape_get_data(): any;

/** Returns the type of shape (see [enum ShapeType] constants). */
shape_get_type(): int;

/** Sets the shape data that defines its shape and size. The data to be passed depends on the kind of shape created [method shape_get_type]. */
shape_set_data(): void;

/** Gets a slider_joint parameter (see [enum SliderJointParam] constants). */
slider_joint_get_param(): float;

/** Gets a slider_joint parameter (see [enum SliderJointParam] constants). */
slider_joint_set_param(): void;

/** No documentation provided. */
soft_body_get_bounds(): AABB;

/** Creates a space. A space is a collection of parameters for the physics engine that can be assigned to an area or a body. It can be assigned to an area with [method area_set_space], or to a body with [method body_set_space]. */
space_create(): RID;

/** Returns the state of a space, a [PhysicsDirectSpaceState3D]. This object can be used to make collision/intersection queries. */
space_get_direct_state(): PhysicsDirectSpaceState3D;

/** Returns the value of a space parameter. */
space_get_param(): float;

/** Returns whether the space is active. */
space_is_active(): boolean;

/** Marks a space as active. It will not have an effect, unless it is assigned to an area or body. */
space_set_active(): void;

/** Sets the value for a space parameter. A list of available parameters is on the [enum SpaceParameter] constants. */
space_set_param(): void;

/** No documentation provided. */
sphere_shape_create(): RID;

/** No documentation provided. */
world_boundary_shape_create(): RID;

  connect<T extends SignalsOf<PhysicsServer3DClass>>(signal: T, method: SignalFunction<PhysicsServer3DClass[T]>): number;



/**
 * The [Joint3D] is a [PinJoint3D].
 *
*/
static JOINT_TYPE_PIN: any;

/**
 * The [Joint3D] is a [HingeJoint3D].
 *
*/
static JOINT_TYPE_HINGE: any;

/**
 * The [Joint3D] is a [SliderJoint3D].
 *
*/
static JOINT_TYPE_SLIDER: any;

/**
 * The [Joint3D] is a [ConeTwistJoint3D].
 *
*/
static JOINT_TYPE_CONE_TWIST: any;

/**
 * The [Joint3D] is a [Generic6DOFJoint3D].
 *
*/
static JOINT_TYPE_6DOF: any;

/**
 * Represents the size of the [enum JointType] enum.
 *
*/
static JOINT_TYPE_MAX: any;

/**
 * The strength with which the pinned objects try to stay in positional relation to each other.
 *
 * The higher, the stronger.
 *
*/
static PIN_JOINT_BIAS: any;

/**
 * The strength with which the pinned objects try to stay in velocity relation to each other.
 *
 * The higher, the stronger.
 *
*/
static PIN_JOINT_DAMPING: any;

/**
 * If above 0, this value is the maximum value for an impulse that this Joint3D puts on its ends.
 *
*/
static PIN_JOINT_IMPULSE_CLAMP: any;

/**
 * The speed with which the two bodies get pulled together when they move in different directions.
 *
*/
static HINGE_JOINT_BIAS: any;

/**
 * The maximum rotation across the Hinge.
 *
*/
static HINGE_JOINT_LIMIT_UPPER: any;

/**
 * The minimum rotation across the Hinge.
 *
*/
static HINGE_JOINT_LIMIT_LOWER: any;

/**
 * The speed with which the rotation across the axis perpendicular to the hinge gets corrected.
 *
*/
static HINGE_JOINT_LIMIT_BIAS: any;

/** No documentation provided. */
static HINGE_JOINT_LIMIT_SOFTNESS: any;

/**
 * The lower this value, the more the rotation gets slowed down.
 *
*/
static HINGE_JOINT_LIMIT_RELAXATION: any;

/**
 * Target speed for the motor.
 *
*/
static HINGE_JOINT_MOTOR_TARGET_VELOCITY: any;

/**
 * Maximum acceleration for the motor.
 *
*/
static HINGE_JOINT_MOTOR_MAX_IMPULSE: any;

/**
 * If `true`, the Hinge has a maximum and a minimum rotation.
 *
*/
static HINGE_JOINT_FLAG_USE_LIMIT: any;

/**
 * If `true`, a motor turns the Hinge.
 *
*/
static HINGE_JOINT_FLAG_ENABLE_MOTOR: any;

/**
 * The maximum difference between the pivot points on their X axis before damping happens.
 *
*/
static SLIDER_JOINT_LINEAR_LIMIT_UPPER: any;

/**
 * The minimum difference between the pivot points on their X axis before damping happens.
 *
*/
static SLIDER_JOINT_LINEAR_LIMIT_LOWER: any;

/**
 * A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement.
 *
*/
static SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS: any;

/**
 * The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost.
 *
*/
static SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION: any;

/**
 * The amount of damping once the slider limits are surpassed.
 *
*/
static SLIDER_JOINT_LINEAR_LIMIT_DAMPING: any;

/**
 * A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement.
 *
*/
static SLIDER_JOINT_LINEAR_MOTION_SOFTNESS: any;

/**
 * The amount of restitution inside the slider limits.
 *
*/
static SLIDER_JOINT_LINEAR_MOTION_RESTITUTION: any;

/**
 * The amount of damping inside the slider limits.
 *
*/
static SLIDER_JOINT_LINEAR_MOTION_DAMPING: any;

/**
 * A factor applied to the movement across axes orthogonal to the slider.
 *
*/
static SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS: any;

/**
 * The amount of restitution when movement is across axes orthogonal to the slider.
 *
*/
static SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION: any;

/**
 * The amount of damping when movement is across axes orthogonal to the slider.
 *
*/
static SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING: any;

/**
 * The upper limit of rotation in the slider.
 *
*/
static SLIDER_JOINT_ANGULAR_LIMIT_UPPER: any;

/**
 * The lower limit of rotation in the slider.
 *
*/
static SLIDER_JOINT_ANGULAR_LIMIT_LOWER: any;

/**
 * A factor applied to the all rotation once the limit is surpassed.
 *
*/
static SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS: any;

/**
 * The amount of restitution of the rotation when the limit is surpassed.
 *
*/
static SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION: any;

/**
 * The amount of damping of the rotation when the limit is surpassed.
 *
*/
static SLIDER_JOINT_ANGULAR_LIMIT_DAMPING: any;

/**
 * A factor that gets applied to the all rotation in the limits.
 *
*/
static SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS: any;

/**
 * The amount of restitution of the rotation in the limits.
 *
*/
static SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION: any;

/**
 * The amount of damping of the rotation in the limits.
 *
*/
static SLIDER_JOINT_ANGULAR_MOTION_DAMPING: any;

/**
 * A factor that gets applied to the all rotation across axes orthogonal to the slider.
 *
*/
static SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS: any;

/**
 * The amount of restitution of the rotation across axes orthogonal to the slider.
 *
*/
static SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION: any;

/**
 * The amount of damping of the rotation across axes orthogonal to the slider.
 *
*/
static SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING: any;

/**
 * Represents the size of the [enum SliderJointParam] enum.
 *
*/
static SLIDER_JOINT_MAX: any;

/**
 * Swing is rotation from side to side, around the axis perpendicular to the twist axis.
 *
 * The swing span defines, how much rotation will not get corrected along the swing axis.
 *
 * Could be defined as looseness in the [ConeTwistJoint3D].
 *
 * If below 0.05, this behavior is locked.
 *
*/
static CONE_TWIST_JOINT_SWING_SPAN: any;

/**
 * Twist is the rotation around the twist axis, this value defined how far the joint can twist.
 *
 * Twist is locked if below 0.05.
 *
*/
static CONE_TWIST_JOINT_TWIST_SPAN: any;

/**
 * The speed with which the swing or twist will take place.
 *
 * The higher, the faster.
 *
*/
static CONE_TWIST_JOINT_BIAS: any;

/**
 * The ease with which the Joint3D twists, if it's too low, it takes more force to twist the joint.
 *
*/
static CONE_TWIST_JOINT_SOFTNESS: any;

/**
 * Defines, how fast the swing- and twist-speed-difference on both sides gets synced.
 *
*/
static CONE_TWIST_JOINT_RELAXATION: any;

/**
 * The minimum difference between the pivot points' axes.
 *
*/
static G6DOF_JOINT_LINEAR_LOWER_LIMIT: any;

/**
 * The maximum difference between the pivot points' axes.
 *
*/
static G6DOF_JOINT_LINEAR_UPPER_LIMIT: any;

/**
 * A factor that gets applied to the movement across the axes. The lower, the slower the movement.
 *
*/
static G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS: any;

/**
 * The amount of restitution on the axes movement. The lower, the more velocity-energy gets lost.
 *
*/
static G6DOF_JOINT_LINEAR_RESTITUTION: any;

/**
 * The amount of damping that happens at the linear motion across the axes.
 *
*/
static G6DOF_JOINT_LINEAR_DAMPING: any;

/**
 * The velocity that the joint's linear motor will attempt to reach.
 *
*/
static G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY: any;

/**
 * The maximum force that the linear motor can apply while trying to reach the target velocity.
 *
*/
static G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT: any;

/**
 * The minimum rotation in negative direction to break loose and rotate around the axes.
 *
*/
static G6DOF_JOINT_ANGULAR_LOWER_LIMIT: any;

/**
 * The minimum rotation in positive direction to break loose and rotate around the axes.
 *
*/
static G6DOF_JOINT_ANGULAR_UPPER_LIMIT: any;

/**
 * A factor that gets multiplied onto all rotations across the axes.
 *
*/
static G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS: any;

/**
 * The amount of rotational damping across the axes. The lower, the more damping occurs.
 *
*/
static G6DOF_JOINT_ANGULAR_DAMPING: any;

/**
 * The amount of rotational restitution across the axes. The lower, the more restitution occurs.
 *
*/
static G6DOF_JOINT_ANGULAR_RESTITUTION: any;

/**
 * The maximum amount of force that can occur, when rotating around the axes.
 *
*/
static G6DOF_JOINT_ANGULAR_FORCE_LIMIT: any;

/**
 * When correcting the crossing of limits in rotation across the axes, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower.
 *
*/
static G6DOF_JOINT_ANGULAR_ERP: any;

/**
 * Target speed for the motor at the axes.
 *
*/
static G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY: any;

/**
 * Maximum acceleration for the motor at the axes.
 *
*/
static G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT: any;

/**
 * If set, linear motion is possible within the given limits.
 *
*/
static G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT: any;

/**
 * If set, rotational motion is possible.
 *
*/
static G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT: any;

/**
 * If set, there is a rotational motor across these axes.
 *
*/
static G6DOF_JOINT_FLAG_ENABLE_MOTOR: any;

/**
 * If set, there is a linear motor on this axis that targets a specific velocity.
 *
*/
static G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR: any;

/**
 * The [Shape3D] is a [WorldBoundaryShape3D].
 *
*/
static SHAPE_WORLD_BOUNDARY: any;

/**
 * The [Shape3D] is a [SeparationRayShape3D].
 *
*/
static SHAPE_SEPARATION_RAY: any;

/**
 * The [Shape3D] is a [SphereShape3D].
 *
*/
static SHAPE_SPHERE: any;

/**
 * The [Shape3D] is a [BoxShape3D].
 *
*/
static SHAPE_BOX: any;

/**
 * The [Shape3D] is a [CapsuleShape3D].
 *
*/
static SHAPE_CAPSULE: any;

/**
 * The [Shape3D] is a [CylinderShape3D].
 *
*/
static SHAPE_CYLINDER: any;

/**
 * The [Shape3D] is a [ConvexPolygonShape3D].
 *
*/
static SHAPE_CONVEX_POLYGON: any;

/**
 * The [Shape3D] is a [ConcavePolygonShape3D].
 *
*/
static SHAPE_CONCAVE_POLYGON: any;

/**
 * The [Shape3D] is a [HeightMapShape3D].
 *
*/
static SHAPE_HEIGHTMAP: any;

/**
 * The [Shape3D] is used internally for a soft body. Any attempt to create this kind of shape results in an error.
 *
*/
static SHAPE_SOFT_BODY: any;

/**
 * This constant is used internally by the engine. Any attempt to create this kind of shape results in an error.
 *
*/
static SHAPE_CUSTOM: any;

/**
 * Constant to set/get gravity override mode in an area. See [enum AreaSpaceOverrideMode] for possible values.
 *
*/
static AREA_PARAM_GRAVITY_OVERRIDE_MODE: any;

/**
 * Constant to set/get gravity strength in an area.
 *
*/
static AREA_PARAM_GRAVITY: any;

/**
 * Constant to set/get gravity vector/center in an area.
 *
*/
static AREA_PARAM_GRAVITY_VECTOR: any;

/**
 * Constant to set/get whether the gravity vector of an area is a direction, or a center point.
 *
*/
static AREA_PARAM_GRAVITY_IS_POINT: any;

/**
 * Constant to set/get the distance at which the gravity strength is equal to the gravity controlled by [constant AREA_PARAM_GRAVITY]. For example, on a planet 100 meters in radius with a surface gravity of 4.0 m/s², set the gravity to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 meters from the center the gravity will be 1.0 m/s² (twice the distance, 1/4th the gravity), at 50 meters it will be 16.0 m/s² (half the distance, 4x the gravity), and so on.
 *
 * The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.
 *
*/
static AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE: any;

/**
 * Constant to set/get linear damping override mode in an area. See [enum AreaSpaceOverrideMode] for possible values.
 *
*/
static AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE: any;

/**
 * Constant to set/get the linear damping factor of an area.
 *
*/
static AREA_PARAM_LINEAR_DAMP: any;

/**
 * Constant to set/get angular damping override mode in an area. See [enum AreaSpaceOverrideMode] for possible values.
 *
*/
static AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE: any;

/**
 * Constant to set/get the angular damping factor of an area.
 *
*/
static AREA_PARAM_ANGULAR_DAMP: any;

/**
 * Constant to set/get the priority (order of processing) of an area.
 *
*/
static AREA_PARAM_PRIORITY: any;

/**
 * Constant to set/get the magnitude of area-specific wind force.
 *
*/
static AREA_PARAM_WIND_FORCE_MAGNITUDE: any;

/**
 * Constant to set/get the 3D vector that specifies the origin from which an area-specific wind blows.
 *
*/
static AREA_PARAM_WIND_SOURCE: any;

/**
 * Constant to set/get the 3D vector that specifies the direction in which an area-specific wind blows.
 *
*/
static AREA_PARAM_WIND_DIRECTION: any;

/**
 * Constant to set/get the exponential rate at which wind force decreases with distance from its origin.
 *
*/
static AREA_PARAM_WIND_ATTENUATION_FACTOR: any;

/**
 * This area does not affect gravity/damp. These are generally areas that exist only to detect collisions, and objects entering or exiting them.
 *
*/
static AREA_SPACE_OVERRIDE_DISABLED: any;

/**
 * This area adds its gravity/damp values to whatever has been calculated so far. This way, many overlapping areas can combine their physics to make interesting effects.
 *
*/
static AREA_SPACE_OVERRIDE_COMBINE: any;

/**
 * This area adds its gravity/damp values to whatever has been calculated so far. Then stops taking into account the rest of the areas, even the default one.
 *
*/
static AREA_SPACE_OVERRIDE_COMBINE_REPLACE: any;

/**
 * This area replaces any gravity/damp, even the default one, and stops taking into account the rest of the areas.
 *
*/
static AREA_SPACE_OVERRIDE_REPLACE: any;

/**
 * This area replaces any gravity/damp calculated so far, but keeps calculating the rest of the areas, down to the default one.
 *
*/
static AREA_SPACE_OVERRIDE_REPLACE_COMBINE: any;

/**
 * Constant for static bodies. In this mode, a body can be only moved by user code and doesn't collide with other bodies along its path when moved.
 *
*/
static BODY_MODE_STATIC: any;

/**
 * Constant for kinematic bodies. In this mode, a body can be only moved by user code and collides with other bodies along its path.
 *
*/
static BODY_MODE_KINEMATIC: any;

/**
 * Constant for rigid bodies. In this mode, a body can be pushed by other bodies and has forces applied.
 *
*/
static BODY_MODE_RIGID: any;

/**
 * Constant for linear rigid bodies. In this mode, a body can not rotate, and only its linear velocity is affected by external forces.
 *
*/
static BODY_MODE_RIGID_LINEAR: any;

/**
 * Constant to set/get a body's bounce factor.
 *
*/
static BODY_PARAM_BOUNCE: any;

/**
 * Constant to set/get a body's friction.
 *
*/
static BODY_PARAM_FRICTION: any;

/**
 * Constant to set/get a body's mass.
 *
*/
static BODY_PARAM_MASS: any;

/**
 * Constant to set/get a body's inertia.
 *
*/
static BODY_PARAM_INERTIA: any;

/**
 * Constant to set/get a body's center of mass position in the body's local coordinate system.
 *
*/
static BODY_PARAM_CENTER_OF_MASS: any;

/**
 * Constant to set/get a body's gravity multiplier.
 *
*/
static BODY_PARAM_GRAVITY_SCALE: any;

/**
 * Constant to set/get a body's linear damping mode. See [enum BodyDampMode] for possible values.
 *
*/
static BODY_PARAM_LINEAR_DAMP_MODE: any;

/**
 * Constant to set/get a body's angular damping mode. See [enum BodyDampMode] for possible values.
 *
*/
static BODY_PARAM_ANGULAR_DAMP_MODE: any;

/**
 * Constant to set/get a body's linear damping factor.
 *
*/
static BODY_PARAM_LINEAR_DAMP: any;

/**
 * Constant to set/get a body's angular damping factor.
 *
*/
static BODY_PARAM_ANGULAR_DAMP: any;

/**
 * Represents the size of the [enum BodyParameter] enum.
 *
*/
static BODY_PARAM_MAX: any;

/**
 * The body's damping value is added to any value set in areas or the default value.
 *
*/
static BODY_DAMP_MODE_COMBINE: any;

/**
 * The body's damping value replaces any value set in areas or the default value.
 *
*/
static BODY_DAMP_MODE_REPLACE: any;

/**
 * Constant to set/get the current transform matrix of the body.
 *
*/
static BODY_STATE_TRANSFORM: any;

/**
 * Constant to set/get the current linear velocity of the body.
 *
*/
static BODY_STATE_LINEAR_VELOCITY: any;

/**
 * Constant to set/get the current angular velocity of the body.
 *
*/
static BODY_STATE_ANGULAR_VELOCITY: any;

/**
 * Constant to sleep/wake up a body, or to get whether it is sleeping.
 *
*/
static BODY_STATE_SLEEPING: any;

/**
 * Constant to set/get whether the body can sleep.
 *
*/
static BODY_STATE_CAN_SLEEP: any;

/**
 * The value of the first parameter and area callback function receives, when an object enters one of its shapes.
 *
*/
static AREA_BODY_ADDED: any;

/**
 * The value of the first parameter and area callback function receives, when an object exits one of its shapes.
 *
*/
static AREA_BODY_REMOVED: any;

/**
 * Constant to get the number of objects that are not sleeping.
 *
*/
static INFO_ACTIVE_OBJECTS: any;

/**
 * Constant to get the number of possible collisions.
 *
*/
static INFO_COLLISION_PAIRS: any;

/**
 * Constant to get the number of space regions where a collision could occur.
 *
*/
static INFO_ISLAND_COUNT: any;

/**
 * Constant to set/get the maximum distance a pair of bodies has to move before their collision status has to be recalculated.
 *
*/
static SPACE_PARAM_CONTACT_RECYCLE_RADIUS: any;

/**
 * Constant to set/get the maximum distance a shape can be from another before they are considered separated and the contact is discarded.
 *
*/
static SPACE_PARAM_CONTACT_MAX_SEPARATION: any;

/**
 * Constant to set/get the maximum distance a shape can penetrate another shape before it is considered a collision.
 *
*/
static SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION: any;

/**
 * Constant to set/get the default solver bias for all physics contacts. A solver bias is a factor controlling how much two objects "rebound", after overlapping, to avoid leaving them in that state because of numerical imprecision.
 *
*/
static SPACE_PARAM_CONTACT_DEFAULT_BIAS: any;

/**
 * Constant to set/get the threshold linear velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given.
 *
*/
static SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD: any;

/**
 * Constant to set/get the threshold angular velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given.
 *
*/
static SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD: any;

/**
 * Constant to set/get the maximum time of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after this time.
 *
*/
static SPACE_PARAM_BODY_TIME_TO_SLEEP: any;

/**
 * Constant to set/get the number of solver iterations for contacts and constraints. The greater the number of iterations, the more accurate the collisions and constraints will be. However, a greater number of iterations requires more CPU power, which can decrease performance.
 *
*/
static SPACE_PARAM_SOLVER_ITERATIONS: any;

/** No documentation provided. */
static BODY_AXIS_LINEAR_X: any;

/** No documentation provided. */
static BODY_AXIS_LINEAR_Y: any;

/** No documentation provided. */
static BODY_AXIS_LINEAR_Z: any;

/** No documentation provided. */
static BODY_AXIS_ANGULAR_X: any;

/** No documentation provided. */
static BODY_AXIS_ANGULAR_Y: any;

/** No documentation provided. */
static BODY_AXIS_ANGULAR_Z: any;



}

