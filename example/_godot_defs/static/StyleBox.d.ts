
/**
 * [StyleBox] is an abstract base class for drawing stylized boxes for UI elements. It is used for panels, buttons, [LineEdit] backgrounds, [Tree] backgrounds, etc. and also for testing a transparency mask for pointer signals. If mask test fails on a [StyleBox] assigned as mask to a control, clicks and motion signals will go through it to the one below.
 *
 * **Note:** For control nodes that have **Theme Properties**, the `focus` [StyleBox] is displayed over the `normal`, `hover` or `pressed` [StyleBox]. This makes the `focus` [StyleBox] more reusable across different nodes.
 *
*/
declare class StyleBox extends Resource  {

  
/**
 * [StyleBox] is an abstract base class for drawing stylized boxes for UI elements. It is used for panels, buttons, [LineEdit] backgrounds, [Tree] backgrounds, etc. and also for testing a transparency mask for pointer signals. If mask test fails on a [StyleBox] assigned as mask to a control, clicks and motion signals will go through it to the one below.
 *
 * **Note:** For control nodes that have **Theme Properties**, the `focus` [StyleBox] is displayed over the `normal`, `hover` or `pressed` [StyleBox]. This makes the `focus` [StyleBox] more reusable across different nodes.
 *
*/
  new(): StyleBox; 
  static "new"(): StyleBox 


/**
 * The bottom margin for the contents of this style box. Increasing this value reduces the space available to the contents from the bottom.
 *
 * If this value is negative, it is ignored and a child-specific margin is used instead. For example, for [StyleBoxFlat], the border thickness (if any) is used instead.
 *
 * It is up to the code using this style box to decide what these contents are: for example, a [Button] respects this content margin for the textual contents of the button.
 *
 * [method get_margin] should be used to fetch this value as consumer instead of reading these properties directly. This is because it correctly respects negative values and the fallback mentioned above.
 *
*/
content_margin_bottom: float;

/**
 * The left margin for the contents of this style box. Increasing this value reduces the space available to the contents from the left.
 *
 * Refer to [member content_margin_bottom] for extra considerations.
 *
*/
content_margin_left: float;

/**
 * The right margin for the contents of this style box. Increasing this value reduces the space available to the contents from the right.
 *
 * Refer to [member content_margin_bottom] for extra considerations.
 *
*/
content_margin_right: float;

/**
 * The top margin for the contents of this style box. Increasing this value reduces the space available to the contents from the top.
 *
 * Refer to [member content_margin_bottom] for extra considerations.
 *
*/
content_margin_top: float;

/** No documentation provided. */
protected _draw(): void;

/** No documentation provided. */
protected _get_draw_rect(): Rect2;

/** Virtual method to be implemented by the user. Returns a custom minimum size that the stylebox must respect when drawing. By default [method get_minimum_size] only takes content margins into account. This method can be overridden to add another size restriction. A combination of the default behavior and the output of this method will be used, to account for both sizes. */
protected _get_minimum_size(): Vector2;

/** No documentation provided. */
protected _test_mask(): boolean;

/**
 * Draws this stylebox using a canvas item identified by the given [RID].
 *
 * The [RID] value can either be the result of [method CanvasItem.get_canvas_item] called on an existing [CanvasItem]-derived node, or directly from creating a canvas item in the [RenderingServer] with [method RenderingServer.canvas_item_create].
 *
*/
draw(): void;

/** Returns the default margin of the specified [enum Side]. */
get_content_margin(): float;

/** Returns the [CanvasItem] that handles its [constant CanvasItem.NOTIFICATION_DRAW] or [method CanvasItem._draw] callback at this moment. */
get_current_item_drawn(): CanvasItem;

/**
 * Returns the content margin offset for the specified [enum Side].
 *
 * Positive values reduce size inwards, unlike [Control]'s margin values.
 *
*/
get_margin(): float;

/** Returns the minimum size that this stylebox can be shrunk to. */
get_minimum_size(): Vector2;

/** Returns the "offset" of a stylebox. This helper function returns a value equivalent to [code]Vector2(style.get_margin(MARGIN_LEFT), style.get_margin(MARGIN_TOP))[/code]. */
get_offset(): Vector2;

/** Sets the default value of the specified [enum Side] to [param offset] pixels. */
set_content_margin(): void;

/** Sets the default margin to [param offset] pixels for all sides. */
set_content_margin_all(): void;

/** Test a position in a rectangle, return whether it passes the mask test. */
test_mask(): boolean;

  connect<T extends SignalsOf<StyleBox>>(signal: T, method: SignalFunction<StyleBox[T]>): number;






}

