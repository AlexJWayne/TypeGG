
/**
 * A container type that arranges its child controls in a way that preserves their proportions automatically when the container is resized. Useful when a container has a dynamic size and the child nodes must adjust their sizes accordingly without losing their aspect ratios.
 *
*/
declare class AspectRatioContainer extends Container  {

  
/**
 * A container type that arranges its child controls in a way that preserves their proportions automatically when the container is resized. Useful when a container has a dynamic size and the child nodes must adjust their sizes accordingly without losing their aspect ratios.
 *
*/
  new(): AspectRatioContainer; 
  static "new"(): AspectRatioContainer 


/** Specifies the horizontal relative position of child controls. */
alignment_horizontal: int;

/** Specifies the vertical relative position of child controls. */
alignment_vertical: int;

/** The aspect ratio to enforce on child controls. This is the width divided by the height. The ratio depends on the [member stretch_mode]. */
ratio: float;

/** The stretch mode used to align child controls. */
stretch_mode: int;



  connect<T extends SignalsOf<AspectRatioContainer>>(signal: T, method: SignalFunction<AspectRatioContainer[T]>): number;



/**
 * The height of child controls is automatically adjusted based on the width of the container.
 *
*/
static STRETCH_WIDTH_CONTROLS_HEIGHT: any;

/**
 * The width of child controls is automatically adjusted based on the height of the container.
 *
*/
static STRETCH_HEIGHT_CONTROLS_WIDTH: any;

/**
 * The bounding rectangle of child controls is automatically adjusted to fit inside the container while keeping the aspect ratio.
 *
*/
static STRETCH_FIT: any;

/**
 * The width and height of child controls is automatically adjusted to make their bounding rectangle cover the entire area of the container while keeping the aspect ratio.
 *
 * When the bounding rectangle of child controls exceed the container's size and [member Control.clip_contents] is enabled, this allows to show only the container's area restricted by its own bounding rectangle.
 *
*/
static STRETCH_COVER: any;

/**
 * Aligns child controls with the beginning (left or top) of the container.
 *
*/
static ALIGNMENT_BEGIN: any;

/**
 * Aligns child controls with the center of the container.
 *
*/
static ALIGNMENT_CENTER: any;

/**
 * Aligns child controls with the end (right or bottom) of the container.
 *
*/
static ALIGNMENT_END: any;



}

