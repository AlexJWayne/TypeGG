
/**
 * Abstract base class for everything in 2D space. Canvas items are laid out in a tree; children inherit and extend their parent's transform. [CanvasItem] is extended by [Control] for GUI-related nodes, and by [Node2D] for 2D game objects.
 *
 * Any [CanvasItem] can draw. For this, [method queue_redraw] is called by the engine, then [constant NOTIFICATION_DRAW] will be received on idle time to request a redraw. Because of this, canvas items don't need to be redrawn on every frame, improving the performance significantly. Several functions for drawing on the [CanvasItem] are provided (see `draw_*` functions). However, they can only be used inside [method _draw], its corresponding [method Object._notification] or methods connected to the [signal draw] signal.
 *
 * Canvas items are drawn in tree order on their canvas layer. By default, children are on top of their parents, so a root [CanvasItem] will be drawn behind everything. This behavior can be changed on a per-item basis.
 *
 * A [CanvasItem] can be hidden, which will also hide its children. By adjusting various other properties of a [CanvasItem], you can also modulate its color (via [member modulate] or [member self_modulate]), change its Z-index, blend mode, and more.
 *
*/
declare class CanvasItem extends Node  {

  
/**
 * Abstract base class for everything in 2D space. Canvas items are laid out in a tree; children inherit and extend their parent's transform. [CanvasItem] is extended by [Control] for GUI-related nodes, and by [Node2D] for 2D game objects.
 *
 * Any [CanvasItem] can draw. For this, [method queue_redraw] is called by the engine, then [constant NOTIFICATION_DRAW] will be received on idle time to request a redraw. Because of this, canvas items don't need to be redrawn on every frame, improving the performance significantly. Several functions for drawing on the [CanvasItem] are provided (see `draw_*` functions). However, they can only be used inside [method _draw], its corresponding [method Object._notification] or methods connected to the [signal draw] signal.
 *
 * Canvas items are drawn in tree order on their canvas layer. By default, children are on top of their parents, so a root [CanvasItem] will be drawn behind everything. This behavior can be changed on a per-item basis.
 *
 * A [CanvasItem] can be hidden, which will also hide its children. By adjusting various other properties of a [CanvasItem], you can also modulate its color (via [member modulate] or [member self_modulate]), change its Z-index, blend mode, and more.
 *
*/
  new(): CanvasItem; 
  static "new"(): CanvasItem 


/** Allows the current node to clip children nodes, essentially acting as a mask. */
clip_children: int;

/** The rendering layers in which this [CanvasItem] responds to [Light2D] nodes. */
light_mask: int;

/** The material applied to this [CanvasItem]. */
material: Material;

/** The color applied to this [CanvasItem]. This property does affect child [CanvasItem]s, unlike [member self_modulate] which only affects the node itself. */
modulate: Color;

/**
 * The color applied to this [CanvasItem]. This property does **not** affect child [CanvasItem]s, unlike [member modulate] which affects both the node itself and its children.
 *
 * **Note:** Internal children (e.g. sliders in [ColorPicker] or tab bar in [TabContainer]) are also not affected by this property (see `include_internal` parameter of [method Node.get_child] and other similar methods).
 *
*/
self_modulate: Color;

/** If [code]true[/code], the object draws behind its parent. */
show_behind_parent: boolean;

/** The texture filtering mode to use on this [CanvasItem]. */
texture_filter: int;

/** The texture repeating mode to use on this [CanvasItem]. */
texture_repeat: int;

/** If [code]true[/code], this [CanvasItem] will [i]not[/i] inherit its transform from parent [CanvasItem]s. Its draw order will also be changed to make it draw on top of other [CanvasItem]s that do not have [member top_level] set to [code]true[/code]. The [CanvasItem] will effectively act as if it was placed as a child of a bare [Node]. */
top_level: boolean;

/** If [code]true[/code], the parent [CanvasItem]'s [member material] property is used as this one's material. */
use_parent_material: boolean;

/** The rendering layer in which this [CanvasItem] is rendered by [Viewport] nodes. A [Viewport] will render a [CanvasItem] if it and all its parents share a layer with the [Viewport]'s canvas cull mask. */
visibility_layer: int;

/**
 * If `true`, this [CanvasItem] is drawn. The node is only visible if all of its ancestors are visible as well (in other words, [method is_visible_in_tree] must return `true`).
 *
 * **Note:** For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple `popup*()` functions instead.
 *
*/
visible: boolean;

/**
 * If `true`, child nodes with the lowest Y position are drawn before those with a higher Y position. If `false`, Y-sorting is disabled. Y-sorting only affects children that inherit from [CanvasItem].
 *
 * You can nest nodes with Y-sorting. Child Y-sorted nodes are sorted in the same space as the parent Y-sort. This feature allows you to organize a scene better or divide it into multiple ones without changing your scene tree.
 *
*/
y_sort_enabled: boolean;

/** If [code]true[/code], the node's Z index is relative to its parent's Z index. If this node's Z index is 2 and its parent's effective Z index is 3, then this node's effective Z index will be 2 + 3 = 5. */
z_as_relative: boolean;

/**
 * Z index. Controls the order in which the nodes render. A node with a higher Z index will display in front of others. Must be between [constant RenderingServer.CANVAS_ITEM_Z_MIN] and [constant RenderingServer.CANVAS_ITEM_Z_MAX] (inclusive).
 *
 * **Note:** Changing the Z index of a [Control] only affects the drawing order, not the order in which input events are handled. This can be useful to implement certain UI animations, e.g. a menu where hovered items are scaled and should overlap others.
 *
*/
z_index: int;

/**
 * Called when [CanvasItem] has been requested to redraw (after [method queue_redraw] is called, either manually or by the engine).
 *
 * Corresponds to the [constant NOTIFICATION_DRAW] notification in [method Object._notification].
 *
*/
protected _draw(): void;

/** Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly. */
draw_animation_slice(): void;

/**
 * Draws an unfilled arc between the given angles with a uniform [param color] and [param width] and optional antialiasing (supported only for positive [param width]). The larger the value of [param point_count], the smoother the curve. See also [method draw_circle].
 *
 * If [param width] is negative, it will be ignored and the arc will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the arc will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.
 *
 * The arc is drawn from [param start_angle] towards the value of [param end_angle] so in clockwise direction if `start_angle < end_angle` and counter-clockwise otherwise. Passing the same angles but in reversed order will produce the same arc. If absolute difference of [param start_angle] and [param end_angle] is greater than [constant @GDScript.TAU] radians, then a full circle arc is drawn (i.e. arc will not overlap itself).
 *
*/
draw_arc(): void;

/** Draws a string first character using a custom font. */
draw_char(): void;

/** Draws a string first character outline using a custom font. */
draw_char_outline(): void;

/** Draws a colored, filled circle. See also [method draw_arc], [method draw_polyline] and [method draw_polygon]. */
draw_circle(): void;

/** Draws a colored polygon of any number of points, convex or concave. Unlike [method draw_polygon], a single color must be specified for the whole polygon. */
draw_colored_polygon(): void;

/**
 * Draws a dashed line from a 2D point to another, with a given color and width. See also [method draw_multiline] and [method draw_polyline].
 *
 * If [param width] is negative, then a two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the line parts will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.
 *
*/
draw_dashed_line(): void;

/** After submitting all animations slices via [method draw_animation_slice], this function can be used to revert drawing to its default state (all subsequent drawing commands will be visible). If you don't care about this particular use case, usage of this function after submitting the slices is not required. */
draw_end_animation(): void;

/**
 * Draws a textured rectangle region of the font texture with LCD subpixel anti-aliasing at a given position, optionally modulated by a color.
 *
 * Texture is drawn using the following blend operation, blend mode of the [CanvasItemMaterial] is ignored:
 *
 * @example 
 * 
 * dst.r = texture.r * modulate.r * modulate.a + dst.r * (1.0 - texture.r * modulate.a);
 * dst.g = texture.g * modulate.g * modulate.a + dst.g * (1.0 - texture.g * modulate.a);
 * dst.b = texture.b * modulate.b * modulate.a + dst.b * (1.0 - texture.b * modulate.a);
 * dst.a = modulate.a + dst.a * (1.0 - modulate.a);
 * @summary 
 * 
 *
*/
draw_lcd_texture_rect_region(): void;

/**
 * Draws a line from a 2D point to another, with a given color and width. It can be optionally antialiased. See also [method draw_multiline] and [method draw_polyline].
 *
 * If [param width] is negative, then a two-point primitive will be drawn instead of a four-point one. This means that when the CanvasItem is scaled, the line will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.
 *
*/
draw_line(): void;

/** Draws a [Mesh] in 2D, using the provided texture. See [MeshInstance2D] for related documentation. */
draw_mesh(): void;

/**
 * Draws a textured rectangle region of the multi-channel signed distance field texture at a given position, optionally modulated by a color. See [member FontFile.multichannel_signed_distance_field] for more information and caveats about MSDF font rendering.
 *
 * If [param outline] is positive, each alpha channel value of pixel in region is set to maximum value of true distance in the [param outline] radius.
 *
 * Value of the [param pixel_range] should the same that was used during distance field texture generation.
 *
*/
draw_msdf_texture_rect_region(): void;

/**
 * Draws multiple disconnected lines with a uniform [param width] and [param color]. Each line is defined by two consecutive points from [param points] array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw interconnected lines, use [method draw_polyline] instead.
 *
 * If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.
 *
*/
draw_multiline(): void;

/**
 * Draws multiple disconnected lines with a uniform [param width] and segment-by-segment coloring. Each segment is defined by two consecutive points from [param points] array and a corresponding color from [param colors] array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints and has `colors**` color. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw interconnected lines, use [method draw_polyline_colors] instead.
 *
 * If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.
 *
*/
draw_multiline_colors(): void;

/** Breaks [param text] into lines and draws it using the specified [param font] at the [param pos] (top-left corner). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. */
draw_multiline_string(): void;

/** Breaks [param text] to the lines and draws text outline using the specified [param font] at the [param pos] (top-left corner). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. */
draw_multiline_string_outline(): void;

/** Draws a [MultiMesh] in 2D with the provided texture. See [MultiMeshInstance2D] for related documentation. */
draw_multimesh(): void;

/** Draws a solid polygon of any number of points, convex or concave. Unlike [method draw_colored_polygon], each point's color can be changed individually. See also [method draw_polyline] and [method draw_polyline_colors]. If you need more flexibility (such as being able to use bones), use [method RenderingServer.canvas_item_add_triangle_array] instead. */
draw_polygon(): void;

/**
 * Draws interconnected line segments with a uniform [param color] and [param width] and optional antialiasing (supported only for positive [param width]). When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw disconnected lines, use [method draw_multiline] instead. See also [method draw_polygon].
 *
 * If [param width] is negative, it will be ignored and the polyline will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.
 *
*/
draw_polyline(): void;

/**
 * Draws interconnected line segments with a uniform [param width], point-by-point coloring, and optional antialiasing (supported only for positive [param width]). Colors assigned to line points match by index between [param points] and [param colors], i.e. each line segment is filled with a gradient between the colors of the endpoints. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw disconnected lines, use [method draw_multiline_colors] instead. See also [method draw_polygon].
 *
 * If [param width] is negative, it will be ignored and the polyline will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.
 *
*/
draw_polyline_colors(): void;

/** Draws a custom primitive. 1 point for a point, 2 points for a line, 3 points for a triangle, and 4 points for a quad. If 0 points or more than 4 points are specified, nothing will be drawn and an error message will be printed. See also [method draw_line], [method draw_polyline], [method draw_polygon], and [method draw_rect]. */
draw_primitive(): void;

/**
 * Draws a rectangle. If [param filled] is `true`, the rectangle will be filled with the [param color] specified. If [param filled] is `false`, the rectangle will be drawn as a stroke with the [param color] and [param width] specified. See also [method draw_texture_rect].
 *
 * If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.
 *
 * **Note:** [param width] is only effective if [param filled] is `false`.
 *
 * **Note:** Unfilled rectangles drawn with a negative [param width] may not display perfectly. For example, corners may be missing or brighter due to overlapping lines (for a translucent [param color]).
 *
*/
draw_rect(): void;

/**
 * Sets a custom transform for drawing via components. Anything drawn afterwards will be transformed by this.
 *
 * **Note:** [member FontFile.oversampling] does **not** take [param scale] into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.
 *
*/
draw_set_transform(): void;

/** Sets a custom transform for drawing via matrix. Anything drawn afterwards will be transformed by this. */
draw_set_transform_matrix(): void;

/**
 * Draws [param text] using the specified [param font] at the [param pos] (bottom-left corner using the baseline of the font). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width.
 *
 * **Example using the default project font:**
 *
 * @example 
 * 
 * 
 * # If using this method in a script that redraws constantly, move the
 * # `default_font` declaration to a member variable assigned in `_ready()`
 * # so the Control is only created once.
 * var default_font = ThemeDB.fallback_font
 * var default_font_size = ThemeDB.fallback_font_size
 * draw_string(default_font, Vector2(64, 64), "Hello world", HORIZONTAL_ALIGNMENT_LEFT, -1, default_font_size)
 * 
 * 
 * // If using this method in a script that redraws constantly, move the
 * // `default_font` declaration to a member variable assigned in `_Ready()`
 * // so the Control is only created once.
 * Font defaultFont = ThemeDB.FallbackFont;
 * int defaultFontSize = ThemeDB.FallbackFontSize;
 * DrawString(defaultFont, new Vector2(64, 64), "Hello world", HORIZONTAL_ALIGNMENT_LEFT, -1, defaultFontSize);
 * 
 * @summary 
 * 
 *
 * See also [method Font.draw_string].
 *
*/
draw_string(): void;

/** Draws [param text] outline using the specified [param font] at the [param pos] (bottom-left corner using the baseline of the font). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. */
draw_string_outline(): void;

/** Draws a styled rectangle. */
draw_style_box(): void;

/** Draws a texture at a given position. */
draw_texture(): void;

/** Draws a textured rectangle at a given position, optionally modulated by a color. If [param transpose] is [code]true[/code], the texture will have its X and Y coordinates swapped. See also [method draw_rect] and [method draw_texture_rect_region]. */
draw_texture_rect(): void;

/** Draws a textured rectangle from a texture's region (specified by [param src_rect]) at a given position, optionally modulated by a color. If [param transpose] is [code]true[/code], the texture will have its X and Y coordinates swapped. See also [method draw_texture_rect]. */
draw_texture_rect_region(): void;

/** Forces the transform to update. Transform changes in physics are not instant for performance reasons. Transforms are accumulated and then set. Use this if you need an up-to-date transform when doing physics operations. */
force_update_transform(): void;

/** Returns the [RID] of the [World2D] canvas where this item is in. */
get_canvas(): RID;

/** Returns the canvas item RID used by [RenderingServer] for this item. */
get_canvas_item(): RID;

/** Returns the transform from the coordinate system of the canvas, this item is in, to the [Viewport]s coordinate system. */
get_canvas_transform(): Transform2D;

/**
 * Returns the mouse's position in the [CanvasLayer] that this [CanvasItem] is in using the coordinate system of the [CanvasLayer].
 *
 * **Note:** For screen-space coordinates (e.g. when using a non-embedded [Popup]), you can use [method DisplayServer.mouse_get_position].
 *
*/
get_global_mouse_position(): Vector2;

/** Returns the global transform matrix of this item, i.e. the combined transform up to the topmost [CanvasItem] node. The topmost item is a [CanvasItem] that either has no parent, has non-[CanvasItem] parent or it has [member top_level] enabled. */
get_global_transform(): Transform2D;

/** Returns the transform from the local coordinate system of this [CanvasItem] to the [Viewport]s coordinate system. */
get_global_transform_with_canvas(): Transform2D;

/** Returns the mouse's position in this [CanvasItem] using the local coordinate system of this [CanvasItem]. */
get_local_mouse_position(): Vector2;

/**
 * Returns the transform of this [CanvasItem] in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.
 *
 * Equals to [method get_global_transform] if the window is embedded (see [member Viewport.gui_embed_subwindows]).
 *
*/
get_screen_transform(): Transform2D;

/** Returns the transform matrix of this item. */
get_transform(): Transform2D;

/** Returns the viewport's boundaries as a [Rect2]. */
get_viewport_rect(): Rect2;

/** Returns the transform from the coordinate system of the canvas, this item is in, to the [Viewport]s embedders coordinate system. */
get_viewport_transform(): Transform2D;

/** Returns an individual bit on the rendering visibility layer. */
get_visibility_layer_bit(): boolean;

/** Returns the [World2D] where this item is in. */
get_world_2d(): World2D;

/** Hide the [CanvasItem] if it's currently visible. This is equivalent to setting [member visible] to [code]false[/code]. */
hide(): void;

/** Returns [code]true[/code] if local transform notifications are communicated to children. */
is_local_transform_notification_enabled(): boolean;

/** Returns [code]true[/code] if global transform notifications are communicated to children. */
is_transform_notification_enabled(): boolean;

/** Returns [code]true[/code] if the node is present in the [SceneTree], its [member visible] property is [code]true[/code] and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree, and is consequently not drawn (see [method _draw]). */
is_visible_in_tree(): boolean;

/** Assigns [param screen_point] as this node's new local transform. */
make_canvas_position_local(): Vector2;

make_input_local<T extends InputEvent>(event: T): T

/**
 * Moves this node to display on top of its siblings.
 *
 * Internally, the node is moved to the bottom of parent's children list. The method has no effect on nodes without a parent.
 *
*/
move_to_front(): void;

/** Queues the [CanvasItem] to redraw. During idle time, if [CanvasItem] is visible, [constant NOTIFICATION_DRAW] is sent and [method _draw] is called. This only occurs [b]once[/b] per frame, even if this method has been called multiple times. */
queue_redraw(): void;

/** If [param enable] is [code]true[/code], this node will receive [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] when its local transform changes. */
set_notify_local_transform(): void;

/** If [param enable] is [code]true[/code], this node will receive [constant NOTIFICATION_TRANSFORM_CHANGED] when its global transform changes. */
set_notify_transform(): void;

/** Set/clear individual bits on the rendering visibility layer. This simplifies editing this [CanvasItem]'s visibility layer. */
set_visibility_layer_bit(): void;

/** Show the [CanvasItem] if it's currently hidden. This is equivalent to setting [member visible] to [code]true[/code]. For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple [code]popup*()[/code] functions instead. */
show(): void;

  connect<T extends SignalsOf<CanvasItem>>(signal: T, method: SignalFunction<CanvasItem[T]>): number;



/**
 * The [CanvasItem]'s global transform has changed. This notification is only received if enabled by [method set_notify_transform].
 *
*/
static NOTIFICATION_TRANSFORM_CHANGED: any;

/**
 * The [CanvasItem]'s local transform has changed. This notification is only received if enabled by [method set_notify_local_transform].
 *
*/
static NOTIFICATION_LOCAL_TRANSFORM_CHANGED: any;

/**
 * The [CanvasItem] is requested to draw (see [method _draw]).
 *
*/
static NOTIFICATION_DRAW: any;

/**
 * The [CanvasItem]'s visibility has changed.
 *
*/
static NOTIFICATION_VISIBILITY_CHANGED: any;

/**
 * The [CanvasItem] has entered the canvas.
 *
*/
static NOTIFICATION_ENTER_CANVAS: any;

/**
 * The [CanvasItem] has exited the canvas.
 *
*/
static NOTIFICATION_EXIT_CANVAS: any;

/**
 * The [CanvasItem]'s active [World2D] changed.
 *
*/
static NOTIFICATION_WORLD_2D_CHANGED: any;

/**
 * The [CanvasItem] will inherit the filter from its parent.
 *
*/
static TEXTURE_FILTER_PARENT_NODE: any;

/**
 * The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static TEXTURE_FILTER_NEAREST: any;

/**
 * The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled).
 *
*/
static TEXTURE_FILTER_LINEAR: any;

/**
 * The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.
 *
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 *
*/
static TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: any;

/**
 * The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.
 *
 * Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.
 *
*/
static TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: any;

/**
 * The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
 * **Note:** This texture filter is rarely useful in 2D projects. [constant TEXTURE_FILTER_NEAREST_WITH_MIPMAPS] is usually more appropriate in this case.
 *
*/
static TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC: any;

/**
 * The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].
 *
 * **Note:** This texture filter is rarely useful in 2D projects. [constant TEXTURE_FILTER_LINEAR_WITH_MIPMAPS] is usually more appropriate in this case.
 *
*/
static TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC: any;

/**
 * Represents the size of the [enum TextureFilter] enum.
 *
*/
static TEXTURE_FILTER_MAX: any;

/**
 * The [CanvasItem] will inherit the filter from its parent.
 *
*/
static TEXTURE_REPEAT_PARENT_NODE: any;

/**
 * Texture will not repeat.
 *
*/
static TEXTURE_REPEAT_DISABLED: any;

/**
 * Texture will repeat normally.
 *
*/
static TEXTURE_REPEAT_ENABLED: any;

/**
 * Texture will repeat in a 2x2 tiled mode, where elements at even positions are mirrored.
 *
*/
static TEXTURE_REPEAT_MIRROR: any;

/**
 * Represents the size of the [enum TextureRepeat] enum.
 *
*/
static TEXTURE_REPEAT_MAX: any;

/**
 * Child draws over parent and is not clipped.
 *
*/
static CLIP_CHILDREN_DISABLED: any;

/**
 * Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn.
 *
*/
static CLIP_CHILDREN_ONLY: any;

/**
 * Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area.
 *
*/
static CLIP_CHILDREN_AND_DRAW: any;

/**
 * Represents the size of the [enum ClipChildrenMode] enum.
 *
*/
static CLIP_CHILDREN_MAX: any;


/**
 * Emitted when the [CanvasItem] must redraw, **after** the related [constant NOTIFICATION_DRAW] notification, and **before** [method _draw] is called.
 *
 * **Note:** Deferred connections do not allow drawing through the `draw_*` methods.
 *
*/
$draw: Signal<() => void>

/**
 * Emitted when becoming hidden.
 *
*/
$hidden: Signal<() => void>

/**
 * Emitted when the item's [Rect2] boundaries (position or size) have changed, or when an action is taking place that may have impacted these boundaries (e.g. changing [member Sprite2D.texture]).
 *
*/
$item_rect_changed: Signal<() => void>

/**
 * Emitted when the visibility (hidden/visible) changes.
 *
*/
$visibility_changed: Signal<() => void>

}

