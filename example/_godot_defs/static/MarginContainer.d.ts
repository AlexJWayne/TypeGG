
/**
 * [MarginContainer] adds an adjustable margin on each side of its child controls. The margins are added around all children, not around each individual one. To control the [MarginContainer]'s margins, use the `margin_*` theme properties listed below.
 *
 * **Note:** The margin sizes are theme overrides, not normal properties. This is an example of how to change them in code:
 *
 * @example 
 * 
 * 
 * # This code sample assumes the current script is extending MarginContainer.
 * var margin_value = 100
 * add_theme_constant_override("margin_top", margin_value)
 * add_theme_constant_override("margin_left", margin_value)
 * add_theme_constant_override("margin_bottom", margin_value)
 * add_theme_constant_override("margin_right", margin_value)
 * 
 * 
 * // This code sample assumes the current script is extending MarginContainer.
 * int marginValue = 100;
 * AddThemeConstantOverride("margin_top", marginValue);
 * AddThemeConstantOverride("margin_left", marginValue);
 * AddThemeConstantOverride("margin_bottom", marginValue);
 * AddThemeConstantOverride("margin_right", marginValue);
 * 
 * @summary 
 * 
 *
*/
declare class MarginContainer extends Container  {

  
/**
 * [MarginContainer] adds an adjustable margin on each side of its child controls. The margins are added around all children, not around each individual one. To control the [MarginContainer]'s margins, use the `margin_*` theme properties listed below.
 *
 * **Note:** The margin sizes are theme overrides, not normal properties. This is an example of how to change them in code:
 *
 * @example 
 * 
 * 
 * # This code sample assumes the current script is extending MarginContainer.
 * var margin_value = 100
 * add_theme_constant_override("margin_top", margin_value)
 * add_theme_constant_override("margin_left", margin_value)
 * add_theme_constant_override("margin_bottom", margin_value)
 * add_theme_constant_override("margin_right", margin_value)
 * 
 * 
 * // This code sample assumes the current script is extending MarginContainer.
 * int marginValue = 100;
 * AddThemeConstantOverride("margin_top", marginValue);
 * AddThemeConstantOverride("margin_left", marginValue);
 * AddThemeConstantOverride("margin_bottom", marginValue);
 * AddThemeConstantOverride("margin_right", marginValue);
 * 
 * @summary 
 * 
 *
*/
  new(): MarginContainer; 
  static "new"(): MarginContainer 





  connect<T extends SignalsOf<MarginContainer>>(signal: T, method: SignalFunction<MarginContainer[T]>): number;






}

