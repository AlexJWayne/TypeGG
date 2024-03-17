
/**
*/
declare class GDExtension extends Resource  {

  
/**
*/
  new(): GDExtension; 
  static "new"(): GDExtension 



/** No documentation provided. */
close_library(): void;

/** No documentation provided. */
get_minimum_library_initialization_level(): int;

/** No documentation provided. */
initialize_library(): void;

/** No documentation provided. */
is_library_open(): boolean;

/** No documentation provided. */
open_library(): int;

  connect<T extends SignalsOf<GDExtension>>(signal: T, method: SignalFunction<GDExtension[T]>): number;



/** No documentation provided. */
static INITIALIZATION_LEVEL_CORE: any;

/** No documentation provided. */
static INITIALIZATION_LEVEL_SERVERS: any;

/** No documentation provided. */
static INITIALIZATION_LEVEL_SCENE: any;

/** No documentation provided. */
static INITIALIZATION_LEVEL_EDITOR: any;



}

