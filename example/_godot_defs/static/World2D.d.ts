
/**
 * Class that has everything pertaining to a 2D world: A physics space, a canvas, and a sound space. 2D nodes register their resources into the current 2D world.
 *
*/
declare class World2D extends Resource  {

  
/**
 * Class that has everything pertaining to a 2D world: A physics space, a canvas, and a sound space. 2D nodes register their resources into the current 2D world.
 *
*/
  new(): World2D; 
  static "new"(): World2D 


/** The [RID] of this world's canvas resource. Used by the [RenderingServer] for 2D drawing. */
canvas: RID;

/** Direct access to the world's physics 2D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
direct_space_state: PhysicsDirectSpaceState2D;

/** The [RID] of this world's navigation map. Used by the [NavigationServer2D]. */
navigation_map: RID;

/** The [RID] of this world's physics space resource. Used by the [PhysicsServer2D] for 2D physics, treating it as both a space and an area. */
space: RID;



  connect<T extends SignalsOf<World2D>>(signal: T, method: SignalFunction<World2D[T]>): number;






}

