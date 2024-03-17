
/**
 * A weakref can hold a [RefCounted] without contributing to the reference counter. A weakref can be created from an [Object] using [method @GlobalScope.weakref]. If this object is not a reference, weakref still works, however, it does not have any effect on the object. Weakrefs are useful in cases where multiple classes have variables that refer to each other. Without weakrefs, using these classes could lead to memory leaks, since both references keep each other from being released. Making part of the variables a weakref can prevent this cyclic dependency, and allows the references to be released.
 *
*/
declare class WeakRef extends RefCounted  {

  
/**
 * A weakref can hold a [RefCounted] without contributing to the reference counter. A weakref can be created from an [Object] using [method @GlobalScope.weakref]. If this object is not a reference, weakref still works, however, it does not have any effect on the object. Weakrefs are useful in cases where multiple classes have variables that refer to each other. Without weakrefs, using these classes could lead to memory leaks, since both references keep each other from being released. Making part of the variables a weakref can prevent this cyclic dependency, and allows the references to be released.
 *
*/
  new(): WeakRef; 
  static "new"(): WeakRef 



/** Returns the [Object] this weakref is referring to. Returns [code]null[/code] if that object no longer exists. */
get_ref(): any;

  connect<T extends SignalsOf<WeakRef>>(signal: T, method: SignalFunction<WeakRef[T]>): number;






}

