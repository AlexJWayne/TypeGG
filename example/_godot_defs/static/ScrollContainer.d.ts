
/**
 * A container used to provide a child control with scrollbars when needed. Scrollbars will automatically be drawn at the right (for vertical) or bottom (for horizontal) and will enable dragging to move the viewable Control (and its children) within the ScrollContainer. Scrollbars will also automatically resize the grabber based on the [member Control.custom_minimum_size] of the Control relative to the ScrollContainer.
 *
*/
declare class ScrollContainer extends Container  {

  
/**
 * A container used to provide a child control with scrollbars when needed. Scrollbars will automatically be drawn at the right (for vertical) or bottom (for horizontal) and will enable dragging to move the viewable Control (and its children) within the ScrollContainer. Scrollbars will also automatically resize the grabber based on the [member Control.custom_minimum_size] of the Control relative to the ScrollContainer.
 *
*/
  new(): ScrollContainer; 
  static "new"(): ScrollContainer 



/** If [code]true[/code], the ScrollContainer will automatically scroll to focused children (including indirect children) to make sure they are fully visible. */
follow_focus: boolean;

/** Controls whether horizontal scrollbar can be used and when it should be visible. See [enum ScrollMode] for options. */
horizontal_scroll_mode: int;

/** Deadzone for touch scrolling. Lower deadzone makes the scrolling more sensitive. */
scroll_deadzone: int;

/**
 * The current horizontal scroll value.
 *
 * **Note:** If you are setting this value in the [method Node._ready] function or earlier, it needs to be wrapped with [method Object.set_deferred], since scroll bar's [member Range.max_value] is not initialized yet.
 *
 * @example 
 * 
 * func _ready():
 *     set_deferred("scroll_horizontal", 600)
 * @summary 
 * 
 *
*/
scroll_horizontal: int;

/** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's horizontal increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
scroll_horizontal_custom_step: float;

/**
 * The current vertical scroll value.
 *
 * **Note:** Setting it early needs to be deferred, just like in [member scroll_horizontal].
 *
 * @example 
 * 
 * func _ready():
 *     set_deferred("scroll_vertical", 600)
 * @summary 
 * 
 *
*/
scroll_vertical: int;

/** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's vertical increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
scroll_vertical_custom_step: float;

/** Controls whether vertical scrollbar can be used and when it should be visible. See [enum ScrollMode] for options. */
vertical_scroll_mode: int;

/**
 * Ensures the given [param control] is visible (must be a direct or indirect child of the ScrollContainer). Used by [member follow_focus].
 *
 * **Note:** This will not work on a node that was just added during the same frame. If you want to scroll to a newly added child, you must wait until the next frame using [signal SceneTree.process_frame]:
 *
 * @example 
 * 
 * add_child(child_node)
 * await get_tree().process_frame
 * ensure_control_visible(child_node)
 * @summary 
 * 
 *
*/
ensure_control_visible(): void;

/**
 * Returns the horizontal scrollbar [HScrollBar] of this [ScrollContainer].
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member horizontal_scroll_mode].
 *
*/
get_h_scroll_bar(): HScrollBar;

/**
 * Returns the vertical scrollbar [VScrollBar] of this [ScrollContainer].
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member vertical_scroll_mode].
 *
*/
get_v_scroll_bar(): VScrollBar;

  connect<T extends SignalsOf<ScrollContainer>>(signal: T, method: SignalFunction<ScrollContainer[T]>): number;



/**
 * Scrolling disabled, scrollbar will be invisible.
 *
*/
static SCROLL_MODE_DISABLED: any;

/**
 * Scrolling enabled, scrollbar will be visible only if necessary, i.e. container's content is bigger than the container.
 *
*/
static SCROLL_MODE_AUTO: any;

/**
 * Scrolling enabled, scrollbar will be always visible.
 *
*/
static SCROLL_MODE_SHOW_ALWAYS: any;

/**
 * Scrolling enabled, scrollbar will be hidden.
 *
*/
static SCROLL_MODE_SHOW_NEVER: any;


/**
 * Emitted when scrolling stops when dragging the scrollable area **with a touch event**. This signal is **not** emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.
 *
 * **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.
 *
*/
$scroll_ended: Signal<() => void>

/**
 * Emitted when scrolling starts when dragging the scrollable area w**ith a touch event**. This signal is **not** emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.
 *
 * **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.
 *
*/
$scroll_started: Signal<() => void>

}

