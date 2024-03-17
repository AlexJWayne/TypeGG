
/**
 * This is an internal editor class intended for keeping data of resources of unknown type (most likely this type was supplied by an extension that is no longer loaded). It can't be manually instantiated or placed in the scene. Ignore it if you don't know what it is.
 *
*/
declare class MissingResource extends Resource  {

  
/**
 * This is an internal editor class intended for keeping data of resources of unknown type (most likely this type was supplied by an extension that is no longer loaded). It can't be manually instantiated or placed in the scene. Ignore it if you don't know what it is.
 *
*/
  new(): MissingResource; 
  static "new"(): MissingResource 


/** Returns the name of the class this resource was originally. */
original_class: string;




  connect<T extends SignalsOf<MissingResource>>(signal: T, method: SignalFunction<MissingResource[T]>): number;






}

