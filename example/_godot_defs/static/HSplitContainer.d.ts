
/**
 * A container that accepts only two child controls, then arranges them horizontally and creates a divisor between them. The divisor can be dragged around to change the size relation between the child controls.
 *
*/
declare class HSplitContainer extends SplitContainer  {

  
/**
 * A container that accepts only two child controls, then arranges them horizontally and creates a divisor between them. The divisor can be dragged around to change the size relation between the child controls.
 *
*/
  new(): HSplitContainer; 
  static "new"(): HSplitContainer 





  connect<T extends SignalsOf<HSplitContainer>>(signal: T, method: SignalFunction<HSplitContainer[T]>): number;






}

