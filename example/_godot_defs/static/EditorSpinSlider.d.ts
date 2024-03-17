
/**
 * This [Control] node is used in the editor's Inspector dock to allow editing of numeric values. Can be used with [EditorInspectorPlugin] to recreate the same behavior.
 *
 * If the [member Range.step] value is `1`, the [EditorSpinSlider] will display up/down arrows, similar to [SpinBox]. If the [member Range.step] value is not `1`, a slider will be displayed instead.
 *
*/
declare class EditorSpinSlider extends Range  {

  
/**
 * This [Control] node is used in the editor's Inspector dock to allow editing of numeric values. Can be used with [EditorInspectorPlugin] to recreate the same behavior.
 *
 * If the [member Range.step] value is `1`, the [EditorSpinSlider] will display up/down arrows, similar to [SpinBox]. If the [member Range.step] value is not `1`, a slider will be displayed instead.
 *
*/
  new(): EditorSpinSlider; 
  static "new"(): EditorSpinSlider 


/** If [code]true[/code], the slider will not draw background. */
flat: boolean;


/** If [code]true[/code], the slider and up/down arrows are hidden. */
hide_slider: boolean;

/** The text that displays to the left of the value. */
label: string;

/** If [code]true[/code], the slider can't be interacted with. */
read_only: boolean;



/** The suffix to display after the value (in a faded color). This should generally be a plural word. You may have to use an abbreviation if the suffix is too long to be displayed. */
suffix: string;



  connect<T extends SignalsOf<EditorSpinSlider>>(signal: T, method: SignalFunction<EditorSpinSlider[T]>): number;





/**
 * Emitted when the spinner/slider is grabbed.
 *
*/
$grabbed: Signal<() => void>

/**
 * Emitted when the spinner/slider is ungrabbed.
 *
*/
$ungrabbed: Signal<() => void>

/**
 * Emitted when the value form gains focus.
 *
*/
$value_focus_entered: Signal<() => void>

/**
 * Emitted when the value form loses focus.
 *
*/
$value_focus_exited: Signal<() => void>

}

