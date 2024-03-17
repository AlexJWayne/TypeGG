
/**
 * This class extends [PhysicsServer2D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsServer2D].
 *
*/
declare class PhysicsServer2DExtension extends PhysicsServer2D  {

  
/**
 * This class extends [PhysicsServer2D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsServer2D].
 *
*/
  new(): PhysicsServer2DExtension; 
  static "new"(): PhysicsServer2DExtension 



/** No documentation provided. */
protected _area_add_shape(): void;

/** No documentation provided. */
protected _area_attach_canvas_instance_id(): void;

/** No documentation provided. */
protected _area_attach_object_instance_id(): void;

/** No documentation provided. */
protected _area_clear_shapes(): void;

/** No documentation provided. */
protected _area_create(): RID;

/** No documentation provided. */
protected _area_get_canvas_instance_id(): int;

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
protected _area_get_shape_transform(): Transform2D;

/** No documentation provided. */
protected _area_get_space(): RID;

/** No documentation provided. */
protected _area_get_transform(): Transform2D;

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
protected _area_set_pickable(): void;

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
protected _body_attach_canvas_instance_id(): void;

/** No documentation provided. */
protected _body_attach_object_instance_id(): void;

/** No documentation provided. */
protected _body_clear_shapes(): void;

/** No documentation provided. */
protected _body_collide_shape(): boolean;

/** No documentation provided. */
protected _body_create(): RID;

/** No documentation provided. */
protected _body_get_canvas_instance_id(): int;

/** No documentation provided. */
protected _body_get_collision_exceptions(): RID[];

/** No documentation provided. */
protected _body_get_collision_layer(): int;

/** No documentation provided. */
protected _body_get_collision_mask(): int;

/** No documentation provided. */
protected _body_get_collision_priority(): float;

/** No documentation provided. */
protected _body_get_constant_force(): Vector2;

/** No documentation provided. */
protected _body_get_constant_torque(): float;

/** No documentation provided. */
protected _body_get_contacts_reported_depth_threshold(): float;

/** No documentation provided. */
protected _body_get_continuous_collision_detection_mode(): int;

/** No documentation provided. */
protected _body_get_direct_state(): PhysicsDirectBodyState2D;

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
protected _body_get_shape_transform(): Transform2D;

/** No documentation provided. */
protected _body_get_space(): RID;

/** No documentation provided. */
protected _body_get_state(): any;

/** No documentation provided. */
protected _body_is_omitting_force_integration(): boolean;

/** No documentation provided. */
protected _body_remove_collision_exception(): void;

/** No documentation provided. */
protected _body_remove_shape(): void;

/** No documentation provided. */
protected _body_reset_mass_properties(): void;

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
protected _body_set_continuous_collision_detection_mode(): void;

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
protected _body_set_pickable(): void;

/** No documentation provided. */
protected _body_set_shape(): void;

/** No documentation provided. */
protected _body_set_shape_as_one_way_collision(): void;

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
protected _body_test_motion(): boolean;

/** No documentation provided. */
protected _capsule_shape_create(): RID;

/** No documentation provided. */
protected _circle_shape_create(): RID;

/** No documentation provided. */
protected _concave_polygon_shape_create(): RID;

/** No documentation provided. */
protected _convex_polygon_shape_create(): RID;

/** No documentation provided. */
protected _damped_spring_joint_get_param(): float;

/** No documentation provided. */
protected _damped_spring_joint_set_param(): void;

/** No documentation provided. */
protected _end_sync(): void;

/** No documentation provided. */
protected _finish(): void;

/** No documentation provided. */
protected _flush_queries(): void;

/** No documentation provided. */
protected _free_rid(): void;

/** No documentation provided. */
protected _get_process_info(): int;

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
protected _joint_get_param(): float;

/** No documentation provided. */
protected _joint_get_type(): int;

/** No documentation provided. */
protected _joint_is_disabled_collisions_between_bodies(): boolean;

/** No documentation provided. */
protected _joint_make_damped_spring(): void;

/** No documentation provided. */
protected _joint_make_groove(): void;

/** No documentation provided. */
protected _joint_make_pin(): void;

/** No documentation provided. */
protected _joint_set_param(): void;

/** No documentation provided. */
protected _pin_joint_get_flag(): boolean;

/** No documentation provided. */
protected _pin_joint_get_param(): float;

/** No documentation provided. */
protected _pin_joint_set_flag(): void;

/** No documentation provided. */
protected _pin_joint_set_param(): void;

/** No documentation provided. */
protected _rectangle_shape_create(): RID;

/** No documentation provided. */
protected _segment_shape_create(): RID;

/** No documentation provided. */
protected _separation_ray_shape_create(): RID;

/** No documentation provided. */
protected _set_active(): void;

/** No documentation provided. */
protected _shape_collide(): boolean;

/** No documentation provided. */
protected _shape_get_custom_solver_bias(): float;

/** No documentation provided. */
protected _shape_get_data(): any;

/** No documentation provided. */
protected _shape_get_type(): int;

/** No documentation provided. */
protected _shape_set_custom_solver_bias(): void;

/** No documentation provided. */
protected _shape_set_data(): void;

/** No documentation provided. */
protected _space_create(): RID;

/** No documentation provided. */
protected _space_get_contact_count(): int;

/** No documentation provided. */
protected _space_get_contacts(): PackedVector2Array;

/** No documentation provided. */
protected _space_get_direct_state(): PhysicsDirectSpaceState2D;

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
protected _step(): void;

/** No documentation provided. */
protected _sync(): void;

/** No documentation provided. */
protected _world_boundary_shape_create(): RID;

/** No documentation provided. */
body_test_motion_is_excluding_body(): boolean;

/** No documentation provided. */
body_test_motion_is_excluding_object(): boolean;

  connect<T extends SignalsOf<PhysicsServer2DExtension>>(signal: T, method: SignalFunction<PhysicsServer2DExtension[T]>): number;






}

