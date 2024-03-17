
/**
 * A node that displays a 2D texture. The texture displayed can be a region from a larger atlas texture, or a frame from a sprite sheet animation.
 *
*/
declare class Sprite2D extends Node2D  {

  
/**
 * A node that displays a 2D texture. The texture displayed can be a region from a larger atlas texture, or a frame from a sprite sheet animation.
 *
*/
  new(): Sprite2D; 
  static "new"(): Sprite2D 


/** If [code]true[/code], texture is centered. */
centered: boolean;

/** If [code]true[/code], texture is flipped horizontally. */
flip_h: boolean;

/** If [code]true[/code], texture is flipped vertically. */
flip_v: boolean;

/** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. */
frame: int;

/** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
frame_coords: Vector2i;

/** The number of columns in the sprite sheet. */
hframes: int;

/** The texture's drawing offset. */
offset: Vector2;

/** If [code]true[/code], texture is cut from a larger atlas texture. See [member region_rect]. */
region_enabled: boolean;

/** If [code]true[/code], the outermost pixels get blurred out. [member region_enabled] must be [code]true[/code]. */
region_filter_clip_enabled: boolean;

/** The region of the atlas texture to display. [member region_enabled] must be [code]true[/code]. */
region_rect: Rect2;

/** [Texture2D] object to draw. */
texture: Texture2D;

/** The number of rows in the sprite sheet. */
vframes: int;

/**
 * Returns a [Rect2] representing the Sprite2D's boundary in local coordinates. Can be used to detect if the Sprite2D was clicked.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * func _input(event):
 *     if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
 *         if get_rect().has_point(to_local(event.position)):
 *             print("A click!")
 * 
 * 
 * public override void _Input(InputEvent @event)
 * {
 *     if (@event is InputEventMouseButton inputEventMouse)
 *     {
 *         if (inputEventMouse.Pressed && inputEventMouse.ButtonIndex == MouseButton.Left)
 *         {
 *             if (GetRect().HasPoint(ToLocal(inputEventMouse.Position)))
 *             {
 *                 GD.Print("A click!");
 *             }
 *         }
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
get_rect(): Rect2;

/**
 * Returns `true`, if the pixel at the given position is opaque and `false` in other case.
 *
 * **Note:** It also returns `false`, if the sprite's texture is `null` or if the given position is invalid.
 *
*/
is_pixel_opaque(): boolean;

  connect<T extends SignalsOf<Sprite2D>>(signal: T, method: SignalFunction<Sprite2D[T]>): number;





/**
 * Emitted when the [member frame] changes.
 *
*/
$frame_changed: Signal<() => void>

/**
 * Emitted when the [member texture] changes.
 *
*/
$texture_changed: Signal<() => void>

}

