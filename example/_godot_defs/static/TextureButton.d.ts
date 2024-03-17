
/**
 * [TextureButton] has the same functionality as [Button], except it uses sprites instead of Godot's [Theme] resource. It is faster to create, but it doesn't support localization like more complex [Control]s.
 *
 * The "normal" state must contain a texture ([member texture_normal]); other textures are optional.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
*/
declare class TextureButton extends BaseButton  {

  
/**
 * [TextureButton] has the same functionality as [Button], except it uses sprites instead of Godot's [Theme] resource. It is faster to create, but it doesn't support localization like more complex [Control]s.
 *
 * The "normal" state must contain a texture ([member texture_normal]); other textures are optional.
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
*/
  new(): TextureButton; 
  static "new"(): TextureButton 


/** If [code]true[/code], texture is flipped horizontally. */
flip_h: boolean;

/** If [code]true[/code], texture is flipped vertically. */
flip_v: boolean;

/** If [code]true[/code], the size of the texture won't be considered for minimum size calculation, so the [TextureButton] can be shrunk down past the texture size. */
ignore_texture_size: boolean;

/** Controls the texture's behavior when you resize the node's bounding rectangle. See the [enum StretchMode] constants for available options. */
stretch_mode: int;

/** Pure black and white [BitMap] image to use for click detection. On the mask, white pixels represent the button's clickable area. Use it to create buttons with curved shapes. */
texture_click_mask: BitMap;

/** Texture to display when the node is disabled. See [member BaseButton.disabled]. */
texture_disabled: Texture2D;

/** Texture to display when the node has mouse or keyboard focus. [member texture_focused] is displayed [i]over[/i] the base texture, so a partially transparent texture should be used to ensure the base texture remains visible. A texture that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a fully transparent texture of any size. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons. */
texture_focused: Texture2D;

/** Texture to display when the mouse hovers the node. */
texture_hover: Texture2D;

/** Texture to display by default, when the node is [b]not[/b] in the disabled, hover or pressed state. This texture is still displayed in the focused state, with [member texture_focused] drawn on top. */
texture_normal: Texture2D;

/** Texture to display on mouse down over the node, if the node has keyboard focus and the player presses the Enter key or if the player presses the [member BaseButton.shortcut] key. */
texture_pressed: Texture2D;



  connect<T extends SignalsOf<TextureButton>>(signal: T, method: SignalFunction<TextureButton[T]>): number;



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
 * Scale the texture to fit the node's bounding rectangle, center it, and maintain its aspect ratio.
 *
*/
static STRETCH_KEEP_ASPECT_CENTERED: any;

/**
 * Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits.
 *
*/
static STRETCH_KEEP_ASPECT_COVERED: any;



}

