
/**
 * This class extends [PhysicsServer3D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsServer3D].
 *
*/
declare class PhysicsServer3DExtension extends PhysicsServer3D  {

  
/**
 * This class extends [PhysicsServer3D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsServer3D].
 *
*/
  new(): PhysicsServer3DExtension; 
  static "new"(): PhysicsServer3DExtension 



/** No documentation provided. */
protected _area_add_shape(): void;

/** No documentation provided. */
protected _area_attach_object_instance_id(): void;

/** No documentation provided. */
protected _area_clear_shapes(): void;

/** No documentation provided. */
protected _area_create(): RID;

/** No documentation provided. */
protected _area_get_collision_layer(): int;

/** No documentation provided. */
protected _area_get_collision_mask(): int;

/** No documentation provided. */
protected _area_get_object_instance_id(): int;

/** No documentation provided. */
protected _area_get_param(): any;

/** No documentation provided. */
protected _area_get_shape(): RID;

/** No documentation provided. */
protected _area_get_shape_count(): int;

/** No documentation provided. */
protected _area_get_shape_transform(): Transform3D;

/** No documentation provided. */
protected _area_get_space(): RID;

/** No documentation provided. */
protected _area_get_transform(): Transform3D;

/** No documentation provided. */
protected _area_remove_shape(): void;

/** No documentation provided. */
protected _area_set_area_monitor_callback(): void;

/** No documentation provided. */
protected _area_set_collision_layer(): void;

/** No documentation provided. */
protected _area_set_collision_mask(): void;

/** No documentation provided. */
protected _area_set_monitor_callback(): void;

/** No documentation provided. */
protected _area_set_monitorable(): void;

/** No documentation provided. */
protected _area_set_param(): void;

/** No documentation provided. */
protected _area_set_ray_pickable(): void;

/** No documentation provided. */
protected _area_set_shape(): void;

/** No documentation provided. */
protected _area_set_shape_disabled(): void;

/** No documentation provided. */
protected _area_set_shape_transform(): void;

/** No documentation provided. */
protected _area_set_space(): void;

/** No documentation provided. */
protected _area_set_transform(): void;

/** No documentation provided. */
protected _body_add_collision_exception(): void;

/** No documentation provided. */
protected _body_add_constant_central_force(): void;

/** No documentation provided. */
protected _body_add_constant_force(): void;

/** No documentation provided. */
protected _body_add_constant_torque(): void;

/** No documentation provided. */
protected _body_add_shape(): void;

/** No documentation provided. */
protected _body_apply_central_force(): void;

/** No documentation provided. */
protected _body_apply_central_impulse(): void;

/** No documentation provided. */
protected _body_apply_force(): void;

/** No documentation provided. */
protected _body_apply_impulse(): void;

/** No documentation provided. */
protected _body_apply_torque(): void;

/** No documentation provided. */
protected _body_apply_torque_impulse(): void;

/** No documentation provided. */
protected _body_attach_object_instance_id(): void;

/** No documentation provided. */
protected _body_clear_shapes(): void;

/** No documentation provided. */
protected _body_create(): RID;

/** No documentation provided. */
protected _body_get_collision_exceptions(): RID[];

/** No documentation provided. */
protected _body_get_collision_layer(): int;

/** No documentation provided. */
protected _body_get_collision_mask(): int;

/** No documentation provided. */
protected _body_get_collision_priority(): float;

/** No documentation provided. */
protected _body_get_constant_force(): Vector3;

/** No documentation provided. */
protected _body_get_constant_torque(): Vector3;

/** No documentation provided. */
protected _body_get_contacts_reported_depth_threshold(): float;

/** No documentation provided. */
protected _body_get_direct_state(): PhysicsDirectBodyState3D;

/** No documentation provided. */
protected _body_get_max_contacts_reported(): int;

/** No documentation provided. */
protected _body_get_mode(): int;

/** No documentation provided. */
protected _body_get_object_instance_id(): int;

/** No documentation provided. */
protected _body_get_param(): any;

/** No documentation provided. */
protected _body_get_shape(): RID;

/** No documentation provided. */
protected _body_get_shape_count(): int;

/** No documentation provided. */
protected _body_get_shape_transform(): Transform3D;

/** No documentation provided. */
protected _body_get_space(): RID;

/** No documentation provided. */
protected _body_get_state(): any;

/** No documentation provided. */
protected _body_get_user_flags(): int;

/** No documentation provided. */
protected _body_is_axis_locked(): boolean;

/** No documentation provided. */
protected _body_is_continuous_collision_detection_enabled(): boolean;

/** No documentation provided. */
protected _body_is_omitting_force_integration(): boolean;

/** No documentation provided. */
protected _body_remove_collision_exception(): void;

/** No documentation provided. */
protected _body_remove_shape(): void;

/** No documentation provided. */
protected _body_reset_mass_properties(): void;

/** No documentation provided. */
protected _body_set_axis_lock(): void;

/** No documentation provided. */
protected _body_set_axis_velocity(): void;

/** No documentation provided. */
protected _body_set_collision_layer(): void;

/** No documentation provided. */
protected _body_set_collision_mask(): void;

/** No documentation provided. */
protected _body_set_collision_priority(): void;

/** No documentation provided. */
protected _body_set_constant_force(): void;

/** No documentation provided. */
protected _body_set_constant_torque(): void;

/** No documentation provided. */
protected _body_set_contacts_reported_depth_threshold(): void;

/** No documentation provided. */
protected _body_set_enable_continuous_collision_detection(): void;

/** No documentation provided. */
protected _body_set_force_integration_callback(): void;

/** No documentation provided. */
protected _body_set_max_contacts_reported(): void;

/** No documentation provided. */
protected _body_set_mode(): void;

/** No documentation provided. */
protected _body_set_omit_force_integration(): void;

/** No documentation provided. */
protected _body_set_param(): void;

/** No documentation provided. */
protected _body_set_ray_pickable(): void;

/** No documentation provided. */
protected _body_set_shape(): void;

/** No documentation provided. */
protected _body_set_shape_disabled(): void;

/** No documentation provided. */
protected _body_set_shape_transform(): void;

/** No documentation provided. */
protected _body_set_space(): void;

/** No documentation provided. */
protected _body_set_state(): void;

/** No documentation provided. */
protected _body_set_state_sync_callback(): void;

/** No documentation provided. */
protected _body_set_user_flags(): void;

/** No documentation provided. */
protected _body_test_motion(): boolean;

/** No documentation provided. */
protected _box_shape_create(): RID;

/** No documentation provided. */
protected _capsule_shape_create(): RID;

/** No documentation provided. */
protected _concave_polygon_shape_create(): RID;

/** No documentation provided. */
protected _cone_twist_joint_get_param(): float;

/** No documentation provided. */
protected _cone_twist_joint_set_param(): void;

/** No documentation provided. */
protected _convex_polygon_shape_create(): RID;

/** No documentation provided. */
protected _custom_shape_create(): RID;

/** No documentation provided. */
protected _cylinder_shape_create(): RID;

/** No documentation provided. */
protected _end_sync(): void;

/** No documentation provided. */
protected _finish(): void;

/** No documentation provided. */
protected _flush_queries(): void;

/** No documentation provided. */
protected _free_rid(): void;

/** No documentation provided. */
protected _generic_6dof_joint_get_flag(): boolean;

/** No documentation provided. */
protected _generic_6dof_joint_get_param(): float;

/** No documentation provided. */
protected _generic_6dof_joint_set_flag(): void;

/** No documentation provided. */
protected _generic_6dof_joint_set_param(): void;

/** No documentation provided. */
protected _get_process_info(): int;

/** No documentation provided. */
protected _heightmap_shape_create(): RID;

/** No documentation provided. */
protected _hinge_joint_get_flag(): boolean;

/** No documentation provided. */
protected _hinge_joint_get_param(): float;

/** No documentation provided. */
protected _hinge_joint_set_flag(): void;

/** No documentation provided. */
protected _hinge_joint_set_param(): void;

/** No documentation provided. */
protected _init(): void;

/** No documentation provided. */
protected _is_flushing_queries(): boolean;

/** No documentation provided. */
protected _joint_clear(): void;

/** No documentation provided. */
protected _joint_create(): RID;

/** No documentation provided. */
protected _joint_disable_collisions_between_bodies(): void;

/** No documentation provided. */
protected _joint_get_solver_priority(): int;

/** No documentation provided. */
protected _joint_get_type(): int;

/** No documentation provided. */
protected _joint_is_disabled_collisions_between_bodies(): boolean;

/** No documentation provided. */
protected _joint_make_cone_twist(): void;

/** No documentation provided. */
protected _joint_make_generic_6dof(): void;

/** No documentation provided. */
protected _joint_make_hinge(): void;

/** No documentation provided. */
protected _joint_make_hinge_simple(): void;

/** No documentation provided. */
protected _joint_make_pin(): void;

/** No documentation provided. */
protected _joint_make_slider(): void;

/** No documentation provided. */
protected _joint_set_solver_priority(): void;

/** No documentation provided. */
protected _pin_joint_get_local_a(): Vector3;

/** No documentation provided. */
protected _pin_joint_get_local_b(): Vector3;

/** No documentation provided. */
protected _pin_joint_get_param(): float;

/** No documentation provided. */
protected _pin_joint_set_local_a(): void;

/** No documentation provided. */
protected _pin_joint_set_local_b(): void;

/** No documentation provided. */
protected _pin_joint_set_param(): void;

/** No documentation provided. */
protected _separation_ray_shape_create(): RID;

/** No documentation provided. */
protected _set_active(): void;

/** No documentation provided. */
protected _shape_get_custom_solver_bias(): float;

/** No documentation provided. */
protected _shape_get_data(): any;

/** No documentation provided. */
protected _shape_get_margin(): float;

/** No documentation provided. */
protected _shape_get_type(): int;

/** No documentation provided. */
protected _shape_set_custom_solver_bias(): void;

/** No documentation provided. */
protected _shape_set_data(): void;

/** No documentation provided. */
protected _shape_set_margin(): void;

/** No documentation provided. */
protected _slider_joint_get_param(): float;

/** No documentation provided. */
protected _slider_joint_set_param(): void;

/** No documentation provided. */
protected _soft_body_add_collision_exception(): void;

/** No documentation provided. */
protected _soft_body_create(): RID;

/** No documentation provided. */
protected _soft_body_get_bounds(): AABB;

/** No documentation provided. */
protected _soft_body_get_collision_exceptions(): RID[];

/** No documentation provided. */
protected _soft_body_get_collision_layer(): int;

/** No documentation provided. */
protected _soft_body_get_collision_mask(): int;

/** No documentation provided. */
protected _soft_body_get_damping_coefficient(): float;

/** No documentation provided. */
protected _soft_body_get_drag_coefficient(): float;

/** No documentation provided. */
protected _soft_body_get_linear_stiffness(): float;

/** No documentation provided. */
protected _soft_body_get_point_global_position(): Vector3;

/** No documentation provided. */
protected _soft_body_get_pressure_coefficient(): float;

/** No documentation provided. */
protected _soft_body_get_simulation_precision(): int;

/** No documentation provided. */
protected _soft_body_get_space(): RID;

/** No documentation provided. */
protected _soft_body_get_state(): any;

/** No documentation provided. */
protected _soft_body_get_total_mass(): float;

/** No documentation provided. */
protected _soft_body_is_point_pinned(): boolean;

/** No documentation provided. */
protected _soft_body_move_point(): void;

/** No documentation provided. */
protected _soft_body_pin_point(): void;

/** No documentation provided. */
protected _soft_body_remove_all_pinned_points(): void;

/** No documentation provided. */
protected _soft_body_remove_collision_exception(): void;

/** No documentation provided. */
protected _soft_body_set_collision_layer(): void;

/** No documentation provided. */
protected _soft_body_set_collision_mask(): void;

/** No documentation provided. */
protected _soft_body_set_damping_coefficient(): void;

/** No documentation provided. */
protected _soft_body_set_drag_coefficient(): void;

/** No documentation provided. */
protected _soft_body_set_linear_stiffness(): void;

/** No documentation provided. */
protected _soft_body_set_mesh(): void;

/** No documentation provided. */
protected _soft_body_set_pressure_coefficient(): void;

/** No documentation provided. */
protected _soft_body_set_ray_pickable(): void;

/** No documentation provided. */
protected _soft_body_set_simulation_precision(): void;

/** No documentation provided. */
protected _soft_body_set_space(): void;

/** No documentation provided. */
protected _soft_body_set_state(): void;

/** No documentation provided. */
protected _soft_body_set_total_mass(): void;

/** No documentation provided. */
protected _soft_body_set_transform(): void;

/** No documentation provided. */
protected _soft_body_update_rendering_server(): void;

/** No documentation provided. */
protected _space_create(): RID;

/** No documentation provided. */
protected _space_get_contact_count(): int;

/** No documentation provided. */
protected _space_get_contacts(): PackedVector3Array;

/** No documentation provided. */
protected _space_get_direct_state(): PhysicsDirectSpaceState3D;

/** No documentation provided. */
protected _space_get_param(): float;

/** No documentation provided. */
protected _space_is_active(): boolean;

/** No documentation provided. */
protected _space_set_active(): void;

/** No documentation provided. */
protected _space_set_debug_contacts(): void;

/** No documentation provided. */
protected _space_set_param(): void;

/** No documentation provided. */
protected _sphere_shape_create(): RID;

/** No documentation provided. */
protected _step(): void;

/** No documentation provided. */
protected _sync(): void;

/** No documentation provided. */
protected _world_boundary_shape_create(): RID;

/** No documentation provided. */
body_test_motion_is_excluding_body(): boolean;

/** No documentation provided. */
body_test_motion_is_excluding_object(): boolean;

  connect<T extends SignalsOf<PhysicsServer3DExtension>>(signal: T, method: SignalFunction<PhysicsServer3DExtension[T]>): number;






}

