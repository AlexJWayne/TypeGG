
/**
 * [TextServerManager] is the API backend for loading, enumerating, and switching [TextServer]s.
 *
 * **Note:** Switching text server at runtime is possible, but will invalidate all fonts and text buffers. Make sure to unload all controls, fonts, and themes before doing so.
 *
*/
declare class TextServerManagerClass extends Object  {

  
/**
 * [TextServerManager] is the API backend for loading, enumerating, and switching [TextServer]s.
 *
 * **Note:** Switching text server at runtime is possible, but will invalidate all fonts and text buffers. Make sure to unload all controls, fonts, and themes before doing so.
 *
*/
  new(): TextServerManagerClass; 
  static "new"(): TextServerManagerClass 



/** Registers a [TextServer] interface. */
add_interface(): void;

/** Finds an interface by its [param name]. */
find_interface(): TextServer;

/** Returns the interface registered at a given index. */
get_interface(): TextServer;

/** Returns the number of interfaces currently registered. */
get_interface_count(): int;

/** Returns a list of available interfaces, with the index and name of each interface. */
get_interfaces(): Dictionary[];

/** Returns the primary [TextServer] interface currently in use. */
get_primary_interface(): TextServer;

/** Removes an interface. All fonts and shaped text caches should be freed before removing an interface. */
remove_interface(): void;

/** Sets the primary [TextServer] interface. */
set_primary_interface(): void;

  connect<T extends SignalsOf<TextServerManagerClass>>(signal: T, method: SignalFunction<TextServerManagerClass[T]>): number;





/**
 * Emitted when a new interface has been added.
 *
*/
$interface_added: Signal<() => void>

/**
 * Emitted when an interface is removed.
 *
*/
$interface_removed: Signal<() => void>

}

