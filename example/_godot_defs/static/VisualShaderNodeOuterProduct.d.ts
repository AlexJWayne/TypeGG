
/**
 * `OuterProduct` treats the first parameter `c` as a column vector (matrix with one column) and the second parameter `r` as a row vector (matrix with one row) and does a linear algebraic matrix multiply `c * r`, yielding a matrix whose number of rows is the number of components in `c` and whose number of columns is the number of components in `r`.
 *
*/
declare class VisualShaderNodeOuterProduct extends VisualShaderNode  {

  
/**
 * `OuterProduct` treats the first parameter `c` as a column vector (matrix with one column) and the second parameter `r` as a row vector (matrix with one row) and does a linear algebraic matrix multiply `c * r`, yielding a matrix whose number of rows is the number of components in `c` and whose number of columns is the number of components in `r`.
 *
*/
  new(): VisualShaderNodeOuterProduct; 
  static "new"(): VisualShaderNodeOuterProduct 





  connect<T extends SignalsOf<VisualShaderNodeOuterProduct>>(signal: T, method: SignalFunction<VisualShaderNodeOuterProduct[T]>): number;






}

