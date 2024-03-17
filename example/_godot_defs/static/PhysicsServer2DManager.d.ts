
/**
 * [PhysicsServer2DManager] is the API for registering [PhysicsServer2D] implementations and for setting the default implementation.
 *
 * **Note:** It is not possible to switch physics servers at runtime. This class is only used on startup at the server initialization level, by Godot itself and possibly by GDExtensions.
 *
*/
declare class PhysicsServer2DManagerClass extends Object  {

  
/**
 * [PhysicsServer2DManager] is the API for registering [PhysicsServer2D] implementations and for setting the default implementation.
 *
 * **Note:** It is not possible to switch physics servers at runtime. This class is only used on startup at the server initialization level, by Godot itself and possibly by GDExtensions.
 *
*/
  new(): PhysicsServer2DManagerClass; 
  static "new"(): PhysicsServer2DManagerClass 



/** Register a [PhysicsServer2D] implementation by passing a [param name] and a [Callable] that returns a [PhysicsServer2D] object. */
register_server(): void;

/** Set the default [PhysicsServer2D] implementation to the one identified by [param name], if [param priority] is greater than the priority of the current default implementation. */
set_default_server(): void;

  connect<T extends SignalsOf<PhysicsServer2DManagerClass>>(signal: T, method: SignalFunction<PhysicsServer2DManagerClass[T]>): number;






}

