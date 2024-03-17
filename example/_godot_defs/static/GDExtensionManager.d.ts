
/**
*/
declare class GDExtensionManagerClass extends Object  {

  
/**
*/
  new(): GDExtensionManagerClass; 
  static "new"(): GDExtensionManagerClass 



/** No documentation provided. */
get_extension(): GDExtension;

/** No documentation provided. */
get_loaded_extensions(): PackedStringArray;

/** No documentation provided. */
is_extension_loaded(): boolean;

/** No documentation provided. */
load_extension(): int;

/** No documentation provided. */
reload_extension(): int;

/** No documentation provided. */
unload_extension(): int;

  connect<T extends SignalsOf<GDExtensionManagerClass>>(signal: T, method: SignalFunction<GDExtensionManagerClass[T]>): number;



/** No documentation provided. */
static LOAD_STATUS_OK: any;

/** No documentation provided. */
static LOAD_STATUS_FAILED: any;

/** No documentation provided. */
static LOAD_STATUS_ALREADY_LOADED: any;

/** No documentation provided. */
static LOAD_STATUS_NOT_LOADED: any;

/** No documentation provided. */
static LOAD_STATUS_NEEDS_RESTART: any;


/**
 * Emitted after the editor has automatically reloaded any extensions.
 *
*/
$extensions_reloaded: Signal<() => void>

}

