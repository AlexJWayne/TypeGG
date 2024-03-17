
/**
 * A variant of [BoxContainer] that can only arrange its child controls vertically. Child controls are rearranged automatically when their minimum size changes.
 *
*/
declare class VBoxContainer extends BoxContainer  {

  
/**
 * A variant of [BoxContainer] that can only arrange its child controls vertically. Child controls are rearranged automatically when their minimum size changes.
 *
*/
  new(): VBoxContainer; 
  static "new"(): VBoxContainer 





  connect<T extends SignalsOf<VBoxContainer>>(signal: T, method: SignalFunction<VBoxContainer[T]>): number;






}

