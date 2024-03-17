
/**
 * This class extends [PhysicsDirectSpaceState3D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsDirectSpaceState3D].
 *
*/
declare class PhysicsDirectSpaceState3DExtension extends PhysicsDirectSpaceState3D  {

  
/**
 * This class extends [PhysicsDirectSpaceState3D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsDirectSpaceState3D].
 *
*/
  new(): PhysicsDirectSpaceState3DExtension; 
  static "new"(): PhysicsDirectSpaceState3DExtension 



/** No documentation provided. */
protected _cast_motion(): boolean;

/** No documentation provided. */
protected _collide_shape(): boolean;

/** No documentation provided. */
protected _get_closest_point_to_object_volume(): Vector3;

/** No documentation provided. */
protected _intersect_point(): int;

/** No documentation provided. */
protected _intersect_ray(): boolean;

/** No documentation provided. */
protected _intersect_shape(): int;

/** No documentation provided. */
protected _rest_info(): boolean;

/** No documentation provided. */
is_body_excluded_from_query(): boolean;

  connect<T extends SignalsOf<PhysicsDirectSpaceState3DExtension>>(signal: T, method: SignalFunction<PhysicsDirectSpaceState3DExtension[T]>): number;






}

