
/**
 * [CheckBox] allows the user to choose one of only two possible options. It's similar to [CheckButton] in functionality, but it has a different appearance. To follow established UX patterns, it's recommended to use [CheckBox] when toggling it has **no** immediate effect on something. For example, it could be used when toggling it will only do something once a confirmation button is pressed.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
 * When [member BaseButton.button_group] specifies a [ButtonGroup], [CheckBox] changes its appearance to that of a radio button and uses the various `radio_*` theme properties.
 *
*/
declare class CheckBox extends Button  {

  
/**
 * [CheckBox] allows the user to choose one of only two possible options. It's similar to [CheckButton] in functionality, but it has a different appearance. To follow established UX patterns, it's recommended to use [CheckBox] when toggling it has **no** immediate effect on something. For example, it could be used when toggling it will only do something once a confirmation button is pressed.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
 * When [member BaseButton.button_group] specifies a [ButtonGroup], [CheckBox] changes its appearance to that of a radio button and uses the various `radio_*` theme properties.
 *
*/
  new(): CheckBox; 
  static "new"(): CheckBox 






  connect<T extends SignalsOf<CheckBox>>(signal: T, method: SignalFunction<CheckBox[T]>): number;






}

