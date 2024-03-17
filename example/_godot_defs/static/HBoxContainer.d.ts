
/**
 * A variant of [BoxContainer] that can only arrange its child controls horizontally. Child controls are rearranged automatically when their minimum size changes.
 *
*/
declare class HBoxContainer extends BoxContainer  {

  
/**
 * A variant of [BoxContainer] that can only arrange its child controls horizontally. Child controls are rearranged automatically when their minimum size changes.
 *
*/
  new(): HBoxContainer; 
  static "new"(): HBoxContainer 





  connect<T extends SignalsOf<HBoxContainer>>(signal: T, method: SignalFunction<HBoxContainer[T]>): number;






}

