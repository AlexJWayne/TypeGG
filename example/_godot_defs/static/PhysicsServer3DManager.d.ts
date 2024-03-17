
/**
 * [PhysicsServer3DManager] is the API for registering [PhysicsServer3D] implementations and for setting the default implementation.
 *
 * **Note:** It is not possible to switch physics servers at runtime. This class is only used on startup at the server initialization level, by Godot itself and possibly by GDExtensions.
 *
*/
declare class PhysicsServer3DManagerClass extends Object  {

  
/**
 * [PhysicsServer3DManager] is the API for registering [PhysicsServer3D] implementations and for setting the default implementation.
 *
 * **Note:** It is not possible to switch physics servers at runtime. This class is only used on startup at the server initialization level, by Godot itself and possibly by GDExtensions.
 *
*/
  new(): PhysicsServer3DManagerClass; 
  static "new"(): PhysicsServer3DManagerClass 



/** Register a [PhysicsServer3D] implementation by passing a [param name] and a [Callable] that returns a [PhysicsServer3D] object. */
register_server(): void;

/** Set the default [PhysicsServer3D] implementation to the one identified by [param name], if [param priority] is greater than the priority of the current default implementation. */
set_default_server(): void;

  connect<T extends SignalsOf<PhysicsServer3DManagerClass>>(signal: T, method: SignalFunction<PhysicsServer3DManagerClass[T]>): number;






}

