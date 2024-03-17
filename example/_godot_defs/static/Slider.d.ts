
/**
 * Abstract base class for sliders, used to adjust a value by moving a grabber along a horizontal or vertical axis. Sliders are [Range]-based controls.
 *
*/
declare class Slider extends Range  {

  
/**
 * Abstract base class for sliders, used to adjust a value by moving a grabber along a horizontal or vertical axis. Sliders are [Range]-based controls.
 *
*/
  new(): Slider; 
  static "new"(): Slider 


/** If [code]true[/code], the slider can be interacted with. If [code]false[/code], the value can be changed only by code. */
editable: boolean;


/** If [code]true[/code], the value can be changed using the mouse wheel. */
scrollable: boolean;


/** Number of ticks displayed on the slider, including border ticks. Ticks are uniformly-distributed value markers. */
tick_count: int;

/** If [code]true[/code], the slider will display ticks for minimum and maximum values. */
ticks_on_borders: boolean;



  connect<T extends SignalsOf<Slider>>(signal: T, method: SignalFunction<Slider[T]>): number;





/**
 * Emitted when dragging stops. If [param value_changed] is true, [member Range.value] is different from the value when you started the dragging.
 *
*/
$drag_ended: Signal<() => void>

/**
 * Emitted when dragging is started.
 *
*/
$drag_started: Signal<() => void>

}

