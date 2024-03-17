
/**
 * A texture works by registering an image in the video hardware, which then can be used in 3D models or 2D [Sprite2D] or GUI [Control].
 *
 * Textures are often created by loading them from a file. See [method @GDScript.load].
 *
 * [Texture2D] is a base for other resources. It cannot be used directly.
 *
 * **Note:** The maximum texture size is 16384×16384 pixels due to graphics hardware limitations. Larger textures may fail to import.
 *
*/
declare class Texture2D extends Texture  {

  
/**
 * A texture works by registering an image in the video hardware, which then can be used in 3D models or 2D [Sprite2D] or GUI [Control].
 *
 * Textures are often created by loading them from a file. See [method @GDScript.load].
 *
 * [Texture2D] is a base for other resources. It cannot be used directly.
 *
 * **Note:** The maximum texture size is 16384×16384 pixels due to graphics hardware limitations. Larger textures may fail to import.
 *
*/
  new(): Texture2D; 
  static "new"(): Texture2D 



/**
 * Called when the entire [Texture2D] is requested to be drawn over a [CanvasItem], with the top-left offset specified in [param pos]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).
 *
 * **Note:** This is only used in 2D rendering, not 3D.
 *
*/
protected _draw(): void;

/**
 * Called when the [Texture2D] is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).
 *
 * **Note:** This is only used in 2D rendering, not 3D.
 *
*/
protected _draw_rect(): void;

/**
 * Called when a part of the [Texture2D] specified by [param src_rect]'s coordinates is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).
 *
 * **Note:** This is only used in 2D rendering, not 3D.
 *
*/
protected _draw_rect_region(): void;

/** Called when the [Texture2D]'s height is queried. */
protected _get_height(): int;

/** Called when the [Texture2D]'s width is queried. */
protected _get_width(): int;

/** Called when the presence of an alpha channel in the [Texture2D] is queried. */
protected _has_alpha(): boolean;

/** Called when a pixel's opaque state in the [Texture2D] is queried at the specified [code](x, y)[/code] position. */
protected _is_pixel_opaque(): boolean;

/** Creates a placeholder version of this resource ([PlaceholderTexture2D]). */
create_placeholder(): Resource;

/** Draws the texture using a [CanvasItem] with the [RenderingServer] API at the specified [param position]. */
draw(): void;

/** Draws the texture using a [CanvasItem] with the [RenderingServer] API. */
draw_rect(): void;

/** Draws a part of the texture using a [CanvasItem] with the [RenderingServer] API. */
draw_rect_region(): void;

/** Returns the texture height in pixels. */
get_height(): int;

/**
 * Returns an [Image] that is a copy of data from this [Texture2D] (a new [Image] is created each time). [Image]s can be accessed and manipulated directly.
 *
 * **Note:** This will fetch the texture data from the GPU, which might cause performance problems when overused.
 *
*/
get_image(): Image;

/** Returns the texture size in pixels. */
get_size(): Vector2;

/** Returns the texture width in pixels. */
get_width(): int;

/** Returns [code]true[/code] if this [Texture2D] has an alpha channel. */
has_alpha(): boolean;

  connect<T extends SignalsOf<Texture2D>>(signal: T, method: SignalFunction<Texture2D[T]>): number;






}

