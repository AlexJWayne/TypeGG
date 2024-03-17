
/**
 * A control that displays a texture, for example an icon inside a GUI. The texture's placement can be controlled with the [member stretch_mode] property. It can scale, tile, or stay centered inside its bounding rectangle.
 *
*/
declare class TextureRect extends Control  {

  
/**
 * A control that displays a texture, for example an icon inside a GUI. The texture's placement can be controlled with the [member stretch_mode] property. It can scale, tile, or stay centered inside its bounding rectangle.
 *
*/
  new(): TextureRect; 
  static "new"(): TextureRect 


/**
 * Defines how minimum size is determined based on the texture's size. See [enum ExpandMode] for options.
 *
 * **Note:** Using [constant EXPAND_FIT_WIDTH], [constant EXPAND_FIT_WIDTH_PROPORTIONAL], [constant EXPAND_FIT_HEIGHT] or [constant EXPAND_FIT_HEIGHT_PROPORTIONAL] may result in unstable behavior in some containers. This functionality is being re-evaluated and will change in the future.
 *
*/
expand_mode: int;

/** If [code]true[/code], texture is flipped horizontally. */
flip_h: boolean;

/** If [code]true[/code], texture is flipped vertically. */
flip_v: boolean;


/** Controls the texture's behavior when resizing the node's bounding rectangle. See [enum StretchMode]. */
stretch_mode: int;

/** The node's [Texture2D] resource. */
texture: Texture2D;



  connect<T extends SignalsOf<TextureRect>>(signal: T, method: SignalFunction<TextureRect[T]>): number;



/**
 * The minimum size will be equal to texture size, i.e. [TextureRect] can't be smaller than the texture.
 *
*/
static EXPAND_KEEP_SIZE: any;

/**
 * The size of the texture won't be considered for minimum size calculation, so the [TextureRect] can be shrunk down past the texture size.
 *
*/
static EXPAND_IGNORE_SIZE: any;

/**
 * The height of the texture will be ignored. Minimum width will be equal to the current height. Useful for horizontal layouts, e.g. inside [HBoxContainer].
 *
*/
static EXPAND_FIT_WIDTH: any;

/**
 * Same as [constant EXPAND_FIT_WIDTH], but keeps texture's aspect ratio.
 *
*/
static EXPAND_FIT_WIDTH_PROPORTIONAL: any;

/**
 * The width of the texture will be ignored. Minimum height will be equal to the current width. Useful for vertical layouts, e.g. inside [VBoxContainer].
 *
*/
static EXPAND_FIT_HEIGHT: any;

/**
 * Same as [constant EXPAND_FIT_HEIGHT], but keeps texture's aspect ratio.
 *
*/
static EXPAND_FIT_HEIGHT_PROPORTIONAL: any;

/**
 * Scale to fit the node's bounding rectangle.
 *
*/
static STRETCH_SCALE: any;

/**
 * Tile inside the node's bounding rectangle.
 *
*/
static STRETCH_TILE: any;

/**
 * The texture keeps its original size and stays in the bounding rectangle's top-left corner.
 *
*/
static STRETCH_KEEP: any;

/**
 * The texture keeps its original size and stays centered in the node's bounding rectangle.
 *
*/
static STRETCH_KEEP_CENTERED: any;

/**
 * Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio.
 *
*/
static STRETCH_KEEP_ASPECT: any;

/**
 * Scale the texture to fit the node's bounding rectangle, center it and maintain its aspect ratio.
 *
*/
static STRETCH_KEEP_ASPECT_CENTERED: any;

/**
 * Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits.
 *
*/
static STRETCH_KEEP_ASPECT_COVERED: any;



}

