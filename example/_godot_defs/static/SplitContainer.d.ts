
/**
 * A container that accepts only two child controls, then arranges them horizontally or vertically and creates a divisor between them. The divisor can be dragged around to change the size relation between the child controls.
 *
*/
declare class SplitContainer extends Container  {

  
/**
 * A container that accepts only two child controls, then arranges them horizontally or vertically and creates a divisor between them. The divisor can be dragged around to change the size relation between the child controls.
 *
*/
  new(): SplitContainer; 
  static "new"(): SplitContainer 


/** If [code]true[/code], the area of the first [Control] will be collapsed and the dragger will be disabled. */
collapsed: boolean;

/** Determines the dragger's visibility. See [enum DraggerVisibility] for details. */
dragger_visibility: int;

/** The initial offset of the splitting between the two [Control]s, with [code]0[/code] being at the end of the first [Control]. */
split_offset: int;

/**
 * If `true`, the [SplitContainer] will arrange its children vertically, rather than horizontally.
 *
 * Can't be changed when using [HSplitContainer] and [VSplitContainer].
 *
*/
vertical: boolean;

/** Clamps the [member split_offset] value to not go outside the currently possible minimal and maximum values. */
clamp_split_offset(): void;

  connect<T extends SignalsOf<SplitContainer>>(signal: T, method: SignalFunction<SplitContainer[T]>): number;



/**
 * The split dragger is visible when the cursor hovers it.
 *
*/
static DRAGGER_VISIBLE: any;

/**
 * The split dragger is never visible.
 *
*/
static DRAGGER_HIDDEN: any;

/**
 * The split dragger is never visible and its space collapsed.
 *
*/
static DRAGGER_HIDDEN_COLLAPSED: any;


/**
 * Emitted when the dragger is dragged by user.
 *
*/
$dragged: Signal<() => void>

}

