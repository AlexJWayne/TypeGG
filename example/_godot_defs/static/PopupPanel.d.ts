
/**
 * A popup with a configurable panel background. Any child controls added to this node will be stretched to fit the panel's size (similar to how [PanelContainer] works). If you are making windows, see [Window].
 *
*/
declare class PopupPanel extends Popup  {

  
/**
 * A popup with a configurable panel background. Any child controls added to this node will be stretched to fit the panel's size (similar to how [PanelContainer] works). If you are making windows, see [Window].
 *
*/
  new(): PopupPanel; 
  static "new"(): PopupPanel 





  connect<T extends SignalsOf<PopupPanel>>(signal: T, method: SignalFunction<PopupPanel[T]>): number;






}

