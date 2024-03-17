
/**
 * Class that has everything pertaining to a world: A physics space, a visual scenario, and a sound space. 3D nodes register their resources into the current 3D world.
 *
*/
declare class World3D extends Resource  {

  
/**
 * Class that has everything pertaining to a world: A physics space, a visual scenario, and a sound space. 3D nodes register their resources into the current 3D world.
 *
*/
  new(): World3D; 
  static "new"(): World3D 


/** The default [CameraAttributes] resource to use if none set on the [Camera3D]. */
camera_attributes: CameraAttributes;

/** Direct access to the world's physics 3D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
direct_space_state: PhysicsDirectSpaceState3D;

/** The World3D's [Environment]. */
environment: Environment;

/** The World3D's fallback environment will be used if [member environment] fails or is missing. */
fallback_environment: Environment;

/** The [RID] of this world's navigation map. Used by the [NavigationServer3D]. */
navigation_map: RID;

/** The World3D's visual scenario. */
scenario: RID;

/** The World3D's physics space. */
space: RID;



  connect<T extends SignalsOf<World3D>>(signal: T, method: SignalFunction<World3D[T]>): number;






}

