
/**
 * Abstract base class for scrollbars, typically used to navigate through content that extends beyond the visible area of a control. Scrollbars are [Range]-based controls.
 *
*/
declare class ScrollBar extends Range  {

  
/**
 * Abstract base class for scrollbars, typically used to navigate through content that extends beyond the visible area of a control. Scrollbars are [Range]-based controls.
 *
*/
  new(): ScrollBar; 
  static "new"(): ScrollBar 


/** Overrides the step used when clicking increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
custom_step: float;




  connect<T extends SignalsOf<ScrollBar>>(signal: T, method: SignalFunction<ScrollBar[T]>): number;





/**
 * Emitted when the scrollbar is being scrolled.
 *
*/
$scrolling: Signal<() => void>

}

