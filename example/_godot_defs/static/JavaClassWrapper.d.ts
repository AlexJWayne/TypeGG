
/**
*/
declare class JavaClassWrapperClass extends Object  {

  
/**
*/
  new(): JavaClassWrapperClass; 
  static "new"(): JavaClassWrapperClass 



/** No documentation provided. */
wrap(): JavaClass;

  connect<T extends SignalsOf<JavaClassWrapperClass>>(signal: T, method: SignalFunction<JavaClassWrapperClass[T]>): number;






}

