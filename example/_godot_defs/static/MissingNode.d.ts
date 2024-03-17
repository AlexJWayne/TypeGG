
/**
 * This is an internal editor class intended for keeping data of nodes of unknown type (most likely this type was supplied by an extension that is no longer loaded). It can't be manually instantiated or placed in the scene. Ignore it if you don't know what it is.
 *
*/
declare class MissingNode extends Node  {

  
/**
 * This is an internal editor class intended for keeping data of nodes of unknown type (most likely this type was supplied by an extension that is no longer loaded). It can't be manually instantiated or placed in the scene. Ignore it if you don't know what it is.
 *
*/
  new(): MissingNode; 
  static "new"(): MissingNode 


/** Returns the name of the type this node was originally. */
original_class: string;




  connect<T extends SignalsOf<MissingNode>>(signal: T, method: SignalFunction<MissingNode[T]>): number;






}

