
/**
 * This class extends [PhysicsDirectBodyState2D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsDirectBodyState2D].
 *
*/
declare class PhysicsDirectBodyState2DExtension extends PhysicsDirectBodyState2D  {

  
/**
 * This class extends [PhysicsDirectBodyState2D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsDirectBodyState2D].
 *
*/
  new(): PhysicsDirectBodyState2DExtension; 
  static "new"(): PhysicsDirectBodyState2DExtension 



/** No documentation provided. */
protected _add_constant_central_force(): void;

/** No documentation provided. */
protected _add_constant_force(): void;

/** No documentation provided. */
protected _add_constant_torque(): void;

/** No documentation provided. */
protected _apply_central_force(): void;

/** No documentation provided. */
protected _apply_central_impulse(): void;

/** No documentation provided. */
protected _apply_force(): void;

/** No documentation provided. */
protected _apply_impulse(): void;

/** No documentation provided. */
protected _apply_torque(): void;

/** No documentation provided. */
protected _apply_torque_impulse(): void;

/** No documentation provided. */
protected _get_angular_velocity(): float;

/** No documentation provided. */
protected _get_center_of_mass(): Vector2;

/** No documentation provided. */
protected _get_center_of_mass_local(): Vector2;

/** No documentation provided. */
protected _get_constant_force(): Vector2;

/** No documentation provided. */
protected _get_constant_torque(): float;

/** No documentation provided. */
protected _get_contact_collider(): RID;

/** No documentation provided. */
protected _get_contact_collider_id(): int;

/** No documentation provided. */
protected _get_contact_collider_object(): Object;

/** No documentation provided. */
protected _get_contact_collider_position(): Vector2;

/** No documentation provided. */
protected _get_contact_collider_shape(): int;

/** No documentation provided. */
protected _get_contact_collider_velocity_at_position(): Vector2;

/** No documentation provided. */
protected _get_contact_count(): int;

/** No documentation provided. */
protected _get_contact_impulse(): Vector2;

/** No documentation provided. */
protected _get_contact_local_normal(): Vector2;

/** No documentation provided. */
protected _get_contact_local_position(): Vector2;

/** No documentation provided. */
protected _get_contact_local_shape(): int;

/** No documentation provided. */
protected _get_contact_local_velocity_at_position(): Vector2;

/** No documentation provided. */
protected _get_inverse_inertia(): float;

/** No documentation provided. */
protected _get_inverse_mass(): float;

/** No documentation provided. */
protected _get_linear_velocity(): Vector2;

/** No documentation provided. */
protected _get_space_state(): PhysicsDirectSpaceState2D;

/** No documentation provided. */
protected _get_step(): float;

/** No documentation provided. */
protected _get_total_angular_damp(): float;

/** No documentation provided. */
protected _get_total_gravity(): Vector2;

/** No documentation provided. */
protected _get_total_linear_damp(): float;

/** No documentation provided. */
protected _get_transform(): Transform2D;

/** No documentation provided. */
protected _get_velocity_at_local_position(): Vector2;

/** No documentation provided. */
protected _integrate_forces(): void;

/** No documentation provided. */
protected _is_sleeping(): boolean;

/** No documentation provided. */
protected _set_angular_velocity(): void;

/** No documentation provided. */
protected _set_constant_force(): void;

/** No documentation provided. */
protected _set_constant_torque(): void;

/** No documentation provided. */
protected _set_linear_velocity(): void;

/** No documentation provided. */
protected _set_sleep_state(): void;

/** No documentation provided. */
protected _set_transform(): void;

  connect<T extends SignalsOf<PhysicsDirectBodyState2DExtension>>(signal: T, method: SignalFunction<PhysicsDirectBodyState2DExtension[T]>): number;






}

