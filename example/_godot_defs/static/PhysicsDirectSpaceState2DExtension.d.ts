
/**
 * This class extends [PhysicsDirectSpaceState2D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsDirectSpaceState2D].
 *
*/
declare class PhysicsDirectSpaceState2DExtension extends PhysicsDirectSpaceState2D  {

  
/**
 * This class extends [PhysicsDirectSpaceState2D] by providing additional virtual methods that can be overridden. When these methods are overridden, they will be called instead of the internal methods of the physics server.
 *
 * Intended for use with GDExtension to create custom implementations of [PhysicsDirectSpaceState2D].
 *
*/
  new(): PhysicsDirectSpaceState2DExtension; 
  static "new"(): PhysicsDirectSpaceState2DExtension 



/** No documentation provided. */
protected _cast_motion(): boolean;

/** No documentation provided. */
protected _collide_shape(): boolean;

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

  connect<T extends SignalsOf<PhysicsDirectSpaceState2DExtension>>(signal: T, method: SignalFunction<PhysicsDirectSpaceState2DExtension[T]>): number;






}

