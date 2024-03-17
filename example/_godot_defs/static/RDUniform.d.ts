
/**
 * This object is used by [RenderingDevice].
 *
*/
declare class RDUniform extends RefCounted  {

  
/**
 * This object is used by [RenderingDevice].
 *
*/
  new(): RDUniform; 
  static "new"(): RDUniform 


/** The uniform's binding. */
binding: int;

/** The uniform's data type. */
uniform_type: int;

/** No documentation provided. */
add_id(): void;

/** No documentation provided. */
clear_ids(): void;

/** No documentation provided. */
get_ids(): RID[];

  connect<T extends SignalsOf<RDUniform>>(signal: T, method: SignalFunction<RDUniform[T]>): number;






}

