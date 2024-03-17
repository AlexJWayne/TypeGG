
/**
 * A container that arranges its child controls horizontally or vertically, rearranging them automatically when their minimum size changes.
 *
*/
declare class BoxContainer extends Container  {

  
/**
 * A container that arranges its child controls horizontally or vertically, rearranging them automatically when their minimum size changes.
 *
*/
  new(): BoxContainer; 
  static "new"(): BoxContainer 


/** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
alignment: int;

/**
 * If `true`, the [BoxContainer] will arrange its children vertically, rather than horizontally.
 *
 * Can't be changed when using [HBoxContainer] and [VBoxContainer].
 *
*/
vertical: boolean;

/** Adds a [Control] node to the box as a spacer. If [param begin] is [code]true[/code], it will insert the [Control] node in front of all other children. */
add_spacer(): Control;

  connect<T extends SignalsOf<BoxContainer>>(signal: T, method: SignalFunction<BoxContainer[T]>): number;



/**
 * The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout).
 *
*/
static ALIGNMENT_BEGIN: any;

/**
 * The child controls will be centered in the container.
 *
*/
static ALIGNMENT_CENTER: any;

/**
 * The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout).
 *
*/
static ALIGNMENT_END: any;



}

