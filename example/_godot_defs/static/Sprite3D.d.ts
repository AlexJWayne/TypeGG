
/**
 * A node that displays a 2D texture in a 3D environment. The texture displayed can be a region from a larger atlas texture, or a frame from a sprite sheet animation. See also [SpriteBase3D] where properties such as the billboard mode are defined.
 *
*/
declare class Sprite3D extends SpriteBase3D  {

  
/**
 * A node that displays a 2D texture in a 3D environment. The texture displayed can be a region from a larger atlas texture, or a frame from a sprite sheet animation. See also [SpriteBase3D] where properties such as the billboard mode are defined.
 *
*/
  new(): Sprite3D; 
  static "new"(): Sprite3D 


/** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. */
frame: int;

/** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
frame_coords: Vector2i;

/** The number of columns in the sprite sheet. */
hframes: int;

/** If [code]true[/code], the sprite will use [member region_rect] and display only the specified part of its texture. */
region_enabled: boolean;

/** The region of the atlas texture to display. [member region_enabled] must be [code]true[/code]. */
region_rect: Rect2;

/** [Texture2D] object to draw. If [member GeometryInstance3D.material_override] is used, this will be overridden. The size information is still used. */
texture: Texture2D;

/** The number of rows in the sprite sheet. */
vframes: int;



  connect<T extends SignalsOf<Sprite3D>>(signal: T, method: SignalFunction<Sprite3D[T]>): number;





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

