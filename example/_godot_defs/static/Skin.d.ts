
/**
*/
declare class Skin extends Resource  {

  
/**
*/
  new(): Skin; 
  static "new"(): Skin 



/** No documentation provided. */
add_bind(): void;

/** No documentation provided. */
add_named_bind(): void;

/** No documentation provided. */
clear_binds(): void;

/** No documentation provided. */
get_bind_bone(): int;

/** No documentation provided. */
get_bind_count(): int;

/** No documentation provided. */
get_bind_name(): StringName;

/** No documentation provided. */
get_bind_pose(): Transform3D;

/** No documentation provided. */
set_bind_bone(): void;

/** No documentation provided. */
set_bind_count(): void;

/** No documentation provided. */
set_bind_name(): void;

/** No documentation provided. */
set_bind_pose(): void;

  connect<T extends SignalsOf<Skin>>(signal: T, method: SignalFunction<Skin[T]>): number;






}

