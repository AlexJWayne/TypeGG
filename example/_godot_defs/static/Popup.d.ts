
/**
 * [Popup] is a base class for contextual windows and panels with fixed position. It's a modal by default (see [member Window.popup_window]) and provides methods for implementing custom popup behavior.
 *
*/
declare class Popup extends Window  {

  
/**
 * [Popup] is a base class for contextual windows and panels with fixed position. It's a modal by default (see [member Window.popup_window]) and provides methods for implementing custom popup behavior.
 *
*/
  new(): Popup; 
  static "new"(): Popup 










  connect<T extends SignalsOf<Popup>>(signal: T, method: SignalFunction<Popup[T]>): number;





/**
 * Emitted when the popup is hidden.
 *
*/
$popup_hide: Signal<() => void>

}

