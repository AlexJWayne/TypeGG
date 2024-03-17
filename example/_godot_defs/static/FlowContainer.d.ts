
/**
 * A container that arranges its child controls horizontally or vertically and wraps them around at the borders. This is similar to how text in a book wraps around when no more words can fit on a line.
 *
*/
declare class FlowContainer extends Container  {

  
/**
 * A container that arranges its child controls horizontally or vertically and wraps them around at the borders. This is similar to how text in a book wraps around when no more words can fit on a line.
 *
*/
  new(): FlowContainer; 
  static "new"(): FlowContainer 


/** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
alignment: int;

/**
 * If `true`, the [FlowContainer] will arrange its children vertically, rather than horizontally.
 *
 * Can't be changed when using [HFlowContainer] and [VFlowContainer].
 *
*/
vertical: boolean;

/** Returns the current line count. */
get_line_count(): int;

  connect<T extends SignalsOf<FlowContainer>>(signal: T, method: SignalFunction<FlowContainer[T]>): number;



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

