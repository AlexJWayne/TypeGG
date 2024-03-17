
/**
 * A container that accepts only two child controls, then arranges them vertically and creates a divisor between them. The divisor can be dragged around to change the size relation between the child controls.
 *
*/
declare class VSplitContainer extends SplitContainer  {

  
/**
 * A container that accepts only two child controls, then arranges them vertically and creates a divisor between them. The divisor can be dragged around to change the size relation between the child controls.
 *
*/
  new(): VSplitContainer; 
  static "new"(): VSplitContainer 





  connect<T extends SignalsOf<VSplitContainer>>(signal: T, method: SignalFunction<VSplitContainer[T]>): number;






}

