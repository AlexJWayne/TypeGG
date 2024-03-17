
/**
 * [CheckButton] is a toggle button displayed as a check field. It's similar to [CheckBox] in functionality, but it has a different appearance. To follow established UX patterns, it's recommended to use [CheckButton] when toggling it has an **immediate** effect on something. For example, it can be used when pressing it shows or hides advanced settings, without asking the user to confirm this action.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
*/
declare class CheckButton extends Button  {

  
/**
 * [CheckButton] is a toggle button displayed as a check field. It's similar to [CheckBox] in functionality, but it has a different appearance. To follow established UX patterns, it's recommended to use [CheckButton] when toggling it has an **immediate** effect on something. For example, it can be used when pressing it shows or hides advanced settings, without asking the user to confirm this action.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
*/
  new(): CheckButton; 
  static "new"(): CheckButton 






  connect<T extends SignalsOf<CheckButton>>(signal: T, method: SignalFunction<CheckButton[T]>): number;






}

