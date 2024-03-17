
/**
 * A node that creates a window. The window can either be a native system window or embedded inside another [Window] (see [member Viewport.gui_embed_subwindows]).
 *
 * At runtime, [Window]s will not close automatically when requested. You need to handle it manually using the [signal close_requested] signal (this applies both to pressing the close button and clicking outside of a popup).
 *
*/
declare class Window extends Viewport  {

  
/**
 * A node that creates a window. The window can either be a native system window or embedded inside another [Window] (see [member Viewport.gui_embed_subwindows]).
 *
 * At runtime, [Window]s will not close automatically when requested. You need to handle it manually using the [signal close_requested] signal (this applies both to pressing the close button and clicking outside of a popup).
 *
*/
  new(): Window; 
  static "new"(): Window 


/** If [code]true[/code], the window will be on top of all other windows. Does not work if [member transient] is enabled. */
always_on_top: boolean;

/** Toggles if any text should automatically change to its translated version depending on the current locale. */
auto_translate: boolean;

/** If [code]true[/code], the window will have no borders. */
borderless: boolean;

/** Specifies how the content's aspect behaves when the [Window] is resized. The base aspect is determined by [member content_scale_size]. */
content_scale_aspect: int;

/** Specifies the base scale of [Window]'s content when its [member size] is equal to [member content_scale_size]. */
content_scale_factor: float;

/** Specifies how the content is scaled when the [Window] is resized. */
content_scale_mode: int;

/** Base size of the content (i.e. nodes that are drawn inside the window). If non-zero, [Window]'s content will be scaled when the window is resized to a different size. */
content_scale_size: Vector2i;

/** The policy to use to determine the final scale factor for 2D elements. This affects how [member content_scale_factor] is applied, in addition to the automatic scale factor determined by [member content_scale_size]. */
content_scale_stretch: int;

/** The screen the window is currently on. */
current_screen: int;

/**
 * If `true`, the [Window] will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent [Window].
 *
 * Needs [member transient] enabled to work.
 *
*/
exclusive: boolean;

/**
 * If `true`, the [Window] contents is expanded to the full size of the window, window title bar is transparent.
 *
 * **Note:** This property is implemented only on macOS.
 *
 * **Note:** This property only works with native windows.
 *
*/
extend_to_title: boolean;

/** Specifies the initial type of position for the [Window]. See [enum WindowInitialPosition] constants. */
initial_position: int;

/** If [code]true[/code], the [Window] width is expanded to keep the title bar text fully visible. */
keep_title_visible: boolean;

/**
 * If non-zero, the [Window] can't be resized to be bigger than this size.
 *
 * **Note:** This property will be ignored if the value is lower than [member min_size].
 *
*/
max_size: Vector2i;

/**
 * If non-zero, the [Window] can't be resized to be smaller than this size.
 *
 * **Note:** This property will be ignored in favor of [method get_contents_minimum_size] if [member wrap_controls] is enabled and if its size is bigger.
 *
*/
min_size: Vector2i;

/**
 * Set's the window's current mode.
 *
 * **Note:** Fullscreen mode is not exclusive full screen on Windows and Linux.
 *
 * **Note:** This method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.
 *
*/
mode: int;

/**
 * If `true`, all mouse events will be passed to the underlying window of the same application. See also [member mouse_passthrough_polygon].
 *
 * **Note:** This property is implemented on Linux (X11), macOS and Windows.
 *
 * **Note:** This property only works with native windows.
 *
*/
mouse_passthrough: boolean;

/**
 * Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.
 *
 * Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).
 *
 * @example 
 * 
 * 
 * # Set region, using Path2D node.
 * $Window.mouse_passthrough_polygon = $Path2D.curve.get_baked_points()
 * # Set region, using Polygon2D node.
 * $Window.mouse_passthrough_polygon = $Polygon2D.polygon
 * # Reset region to default.
 * $Window.mouse_passthrough_polygon = []
 * 
 * 
 * // Set region, using Path2D node.
 * GetNode<Window>("Window").MousePassthrough = GetNode<Path2D>("Path2D").Curve.GetBakedPoints();
 * // Set region, using Polygon2D node.
 * GetNode<Window>("Window").MousePassthrough = GetNode<Polygon2D>("Polygon2D").Polygon;
 * // Reset region to default.
 * GetNode<Window>("Window").MousePassthrough = new Vector2[] {};
 * 
 * @summary 
 * 
 *
 * **Note:** This property is ignored if [member mouse_passthrough] is set to `true`.
 *
 * **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.
 *
 * **Note:** This property is implemented on Linux (X11), macOS and Windows.
 *
*/
mouse_passthrough_polygon: PackedVector2Array;

/** If [code]true[/code], the [Window] will be considered a popup. Popups are sub-windows that don't show as separate windows in system's window manager's window list and will send close request when anything is clicked outside of them (unless [member exclusive] is enabled). */
popup_window: boolean;

/**
 * The window's position in pixels.
 *
 * If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false`, the position is in absolute screen coordinates. This typically applies to editor plugins. If the setting is `true`, the window's position is in the coordinates of its parent [Viewport].
 *
 * **Note:** This property only works if [member initial_position] is set to [constant WINDOW_INITIAL_POSITION_ABSOLUTE].
 *
*/
position: Vector2i;

/** The window's size in pixels. */
size: Vector2i;

/**
 * The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.
 *
 * **Note:** [Window] styles will have no effect unless the window is embedded.
 *
*/
theme: Theme;

/** The name of a theme type variation used by this [Window] to look up its own theme items. See [member Control.theme_type_variation] for more details. */
theme_type_variation: StringName;

/** The window's title. If the [Window] is native, title styles set in [Theme] will have no effect. */
title: string;

/**
 * If `true`, the [Window] is transient, i.e. it's considered a child of another [Window]. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.
 *
 * Note that behavior might be different depending on the platform.
 *
*/
transient: boolean;

/**
 * If `true`, the [Window]'s background can be transparent. This is best used with embedded windows.
 *
 * **Note:** Transparency support is implemented on Linux, macOS and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.
 *
 * **Note:** This property has no effect if either [member ProjectSettings.display/window/per_pixel_transparency/allowed], or the window's [member Viewport.transparent_bg] is set to `false`.
 *
*/
transparent: boolean;

/** If [code]true[/code], the [Window] can't be focused nor interacted with. It can still be visible. */
unfocusable: boolean;

/** If [code]true[/code], the window can't be resized. Minimize and maximize buttons are disabled. */
unresizable: boolean;

/** If [code]true[/code], the window is visible. */
visible: boolean;

/**
 * If `true`, the window's size will automatically update when a child node is added or removed, ignoring [member min_size] if the new size is bigger.
 *
 * If `false`, you need to call [method child_controls_changed] manually.
 *
*/
wrap_controls: boolean;

/** Virtual method to be implemented by the user. Overrides the value returned by [method get_contents_minimum_size]. */
protected _get_contents_minimum_size(): Vector2;

/**
 * Creates a local override for a theme [Color] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_color_override].
 *
 * See also [method get_theme_color] and [method Control.add_theme_color_override] for more details.
 *
*/
add_theme_color_override(): void;

/**
 * Creates a local override for a theme constant with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_constant_override].
 *
 * See also [method get_theme_constant].
 *
*/
add_theme_constant_override(): void;

/**
 * Creates a local override for a theme [Font] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_override].
 *
 * See also [method get_theme_font].
 *
*/
add_theme_font_override(): void;

/**
 * Creates a local override for a theme font size with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_size_override].
 *
 * See also [method get_theme_font_size].
 *
*/
add_theme_font_size_override(): void;

/**
 * Creates a local override for a theme icon with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_icon_override].
 *
 * See also [method get_theme_icon].
 *
*/
add_theme_icon_override(): void;

/**
 * Creates a local override for a theme [StyleBox] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_stylebox_override].
 *
 * See also [method get_theme_stylebox] and [method Control.add_theme_stylebox_override] for more details.
 *
*/
add_theme_stylebox_override(): void;

/** Prevents [code]*_theme_*_override[/code] methods from emitting [constant NOTIFICATION_THEME_CHANGED] until [method end_bulk_theme_override] is called. */
begin_bulk_theme_override(): void;

/** Returns whether the window is being drawn to the screen. */
can_draw(): boolean;

/** Requests an update of the [Window] size to fit underlying [Control] nodes. */
child_controls_changed(): void;

/** Ends a bulk theme override update. See [method begin_bulk_theme_override]. */
end_bulk_theme_override(): void;

/**
 * Returns the combined minimum size from the child [Control] nodes of the window. Use [method child_controls_changed] to update it when children nodes have changed.
 *
 * The value returned by this method can be overridden with [method _get_contents_minimum_size].
 *
*/
get_contents_minimum_size(): Vector2;

/** Returns [code]true[/code] if the [param flag] is set. */
get_flag(): boolean;

/** Returns layout direction and text writing direction. */
get_layout_direction(): int;

/** Returns the window's position including its border. */
get_position_with_decorations(): Vector2i;

/** Returns the window's size including its border. */
get_size_with_decorations(): Vector2i;

/**
 * Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for more details.
 *
*/
get_theme_color(): Color;

/**
 * Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for more details.
 *
*/
get_theme_constant(): int;

/**
 * Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.
 *
 * See [method Control.get_theme_color] for details.
 *
*/
get_theme_default_base_scale(): float;

/**
 * Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.
 *
 * See [method Control.get_theme_color] for details.
 *
*/
get_theme_default_font(): Font;

/**
 * Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.
 *
 * See [method Control.get_theme_color] for details.
 *
*/
get_theme_default_font_size(): int;

/**
 * Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
get_theme_font(): Font;

/**
 * Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
get_theme_font_size(): int;

/**
 * Returns an icon from the first matching [Theme] in the tree if that [Theme] has an icon item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
get_theme_icon(): Texture2D;

/**
 * Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
get_theme_stylebox(): StyleBox;

/** Returns the ID of the window. */
get_window_id(): int;

/** Causes the window to grab focus, allowing it to receive user input. */
grab_focus(): void;

/** Returns [code]true[/code] if the window is focused. */
has_focus(): boolean;

/**
 * Returns `true` if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
has_theme_color(): boolean;

/**
 * Returns `true` if there is a local override for a theme [Color] with the specified [param name] in this [Control] node.
 *
 * See [method add_theme_color_override].
 *
*/
has_theme_color_override(): boolean;

/**
 * Returns `true` if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
has_theme_constant(): boolean;

/**
 * Returns `true` if there is a local override for a theme constant with the specified [param name] in this [Control] node.
 *
 * See [method add_theme_constant_override].
 *
*/
has_theme_constant_override(): boolean;

/**
 * Returns `true` if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
has_theme_font(): boolean;

/**
 * Returns `true` if there is a local override for a theme [Font] with the specified [param name] in this [Control] node.
 *
 * See [method add_theme_font_override].
 *
*/
has_theme_font_override(): boolean;

/**
 * Returns `true` if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
has_theme_font_size(): boolean;

/**
 * Returns `true` if there is a local override for a theme font size with the specified [param name] in this [Control] node.
 *
 * See [method add_theme_font_size_override].
 *
*/
has_theme_font_size_override(): boolean;

/**
 * Returns `true` if there is a matching [Theme] in the tree that has an icon item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
has_theme_icon(): boolean;

/**
 * Returns `true` if there is a local override for a theme icon with the specified [param name] in this [Control] node.
 *
 * See [method add_theme_icon_override].
 *
*/
has_theme_icon_override(): boolean;

/**
 * Returns `true` if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].
 *
 * See [method Control.get_theme_color] for details.
 *
*/
has_theme_stylebox(): boolean;

/**
 * Returns `true` if there is a local override for a theme [StyleBox] with the specified [param name] in this [Control] node.
 *
 * See [method add_theme_stylebox_override].
 *
*/
has_theme_stylebox_override(): boolean;

/** Hides the window. This is not the same as minimized state. Hidden window can't be interacted with and needs to be made visible with [method show]. */
hide(): void;

/** Returns [code]true[/code] if the window is currently embedded in another window. */
is_embedded(): boolean;

/** Returns [code]true[/code] if layout is right-to-left. */
is_layout_rtl(): boolean;

/** Returns [code]true[/code] if the window can be maximized (the maximize button is enabled). */
is_maximize_allowed(): boolean;

/** Returns [code]true[/code] if font oversampling is enabled. See [method set_use_font_oversampling]. */
is_using_font_oversampling(): boolean;

/** Centers a native window on the current screen and an embedded window on its embedder [Viewport]. */
move_to_center(): void;

/** Moves the [Window] on top of other windows and focuses it. */
move_to_foreground(): void;

/** Shows the [Window] and makes it transient (see [member transient]). If [param rect] is provided, it will be set as the [Window]'s size. Fails if called on the main window. */
popup(): void;

/**
 * Popups the [Window] at the center of the current screen, with optionally given minimum size. If the [Window] is embedded, it will be centered in the parent [Viewport] instead.
 *
 * **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].
 *
*/
popup_centered(): void;

/**
 * Popups the [Window] centered inside its parent [Window]. [param fallback_ratio] determines the maximum size of the [Window], in relation to its parent.
 *
 * **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].
 *
*/
popup_centered_clamped(): void;

/**
 * If [Window] is embedded, popups the [Window] centered inside its embedder and sets its size as a [param ratio] of embedder's size.
 *
 * If [Window] is a native window, popups the [Window] centered inside the screen of its parent [Window] and sets its size as a [param ratio] of the screen size.
 *
*/
popup_centered_ratio(): void;

/**
 * Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup] on it. The dialog must have no current parent, otherwise the method fails.
 *
 * See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
 *
*/
popup_exclusive(): void;

/**
 * Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered] on it. The dialog must have no current parent, otherwise the method fails.
 *
 * See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
 *
*/
popup_exclusive_centered(): void;

/**
 * Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_clamped] on it. The dialog must have no current parent, otherwise the method fails.
 *
 * See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
 *
*/
popup_exclusive_centered_clamped(): void;

/**
 * Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_ratio] on it. The dialog must have no current parent, otherwise the method fails.
 *
 * See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
 *
*/
popup_exclusive_centered_ratio(): void;

/**
 * Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_on_parent] on it. The dialog must have no current parent, otherwise the method fails.
 *
 * See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].
 *
*/
popup_exclusive_on_parent(): void;

/** Popups the [Window] with a position shifted by parent [Window]'s position. If the [Window] is embedded, has the same effect as [method popup]. */
popup_on_parent(): void;

/** Removes a local override for a theme [Color] with the specified [param name] previously added by [method add_theme_color_override] or via the Inspector dock. */
remove_theme_color_override(): void;

/** Removes a local override for a theme constant with the specified [param name] previously added by [method add_theme_constant_override] or via the Inspector dock. */
remove_theme_constant_override(): void;

/** Removes a local override for a theme [Font] with the specified [param name] previously added by [method add_theme_font_override] or via the Inspector dock. */
remove_theme_font_override(): void;

/** Removes a local override for a theme font size with the specified [param name] previously added by [method add_theme_font_size_override] or via the Inspector dock. */
remove_theme_font_size_override(): void;

/** Removes a local override for a theme icon with the specified [param name] previously added by [method add_theme_icon_override] or via the Inspector dock. */
remove_theme_icon_override(): void;

/** Removes a local override for a theme [StyleBox] with the specified [param name] previously added by [method add_theme_stylebox_override] or via the Inspector dock. */
remove_theme_stylebox_override(): void;

/** Tells the OS that the [Window] needs an attention. This makes the window stand out in some way depending on the system, e.g. it might blink on the task bar. */
request_attention(): void;

/** Resets the size to the minimum size, which is the max of [member min_size] and (if [member wrap_controls] is enabled) [method get_contents_minimum_size]. This is equivalent to calling [code]set_size(Vector2i())[/code] (or any size below the minimum). */
reset_size(): void;

/** Sets a specified window flag. */
set_flag(): void;

/** If [param active] is [code]true[/code], enables system's native IME (Input Method Editor). */
set_ime_active(): void;

/** Moves IME to the given position. */
set_ime_position(): void;

/** Sets layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). */
set_layout_direction(): void;

/**
 * If [param unparent] is `true`, the window is automatically unparented when going invisible.
 *
 * **Note:** Make sure to keep a reference to the node, otherwise it will be orphaned. You also need to manually call [method Node.queue_free] to free the window if it's not parented.
 *
*/
set_unparent_when_invisible(): void;

/** Enables font oversampling. This makes fonts look better when they are scaled up. */
set_use_font_oversampling(): void;

/** Makes the [Window] appear. This enables interactions with the [Window] and doesn't change any of its property other than visibility (unlike e.g. [method popup]). */
show(): void;

  connect<T extends SignalsOf<Window>>(signal: T, method: SignalFunction<Window[T]>): number;



/**
 * Emitted when [Window]'s visibility changes, right before [signal visibility_changed].
 *
*/
static NOTIFICATION_VISIBILITY_CHANGED: any;

/**
 * Sent when the node needs to refresh its theme items. This happens in one of the following cases:
 *
 * - The [member theme] property is changed on this node or any of its ancestors.
 *
 * - The [member theme_type_variation] property is changed on this node.
 *
 * - The node enters the scene tree.
 *
 * **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.
 *
*/
static NOTIFICATION_THEME_CHANGED: any;

/**
 * Windowed mode, i.e. [Window] doesn't occupy the whole screen (unless set to the size of the screen).
 *
*/
static MODE_WINDOWED: any;

/**
 * Minimized window mode, i.e. [Window] is not visible and available on window manager's window list. Normally happens when the minimize button is pressed.
 *
*/
static MODE_MINIMIZED: any;

/**
 * Maximized window mode, i.e. [Window] will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed.
 *
*/
static MODE_MAXIMIZED: any;

/**
 * Full screen mode with full multi-window support.
 *
 * Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.
 *
 * **On Windows:** Multi-window full-screen mode has a 1px border of the [member ProjectSettings.rendering/environment/defaults/default_clear_color] color.
 *
 * **On macOS:** A new desktop is used to display the running project.
 *
 * **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.
 *
*/
static MODE_FULLSCREEN: any;

/**
 * A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).
 *
 * Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.
 *
 * **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.
 *
 * **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.
 *
 * **On Linux (X11):** Exclusive full screen mode bypasses compositor.
 *
 * **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.
 *
*/
static MODE_EXCLUSIVE_FULLSCREEN: any;

/**
 * The window can't be resized by dragging its resize grip. It's still possible to resize the window using [member size]. This flag is ignored for full screen windows. Set with [member unresizable].
 *
*/
static FLAG_RESIZE_DISABLED: any;

/**
 * The window do not have native title bar and other decorations. This flag is ignored for full-screen windows. Set with [member borderless].
 *
*/
static FLAG_BORDERLESS: any;

/**
 * The window is floating on top of all other windows. This flag is ignored for full-screen windows. Set with [member always_on_top].
 *
*/
static FLAG_ALWAYS_ON_TOP: any;

/**
 * The window background can be transparent. Set with [member transparent].
 *
 * **Note:** This flag has no effect if either [member ProjectSettings.display/window/per_pixel_transparency/allowed], or the window's [member Viewport.transparent_bg] is set to `false`.
 *
*/
static FLAG_TRANSPARENT: any;

/**
 * The window can't be focused. No-focus window will ignore all input, except mouse clicks. Set with [member unfocusable].
 *
*/
static FLAG_NO_FOCUS: any;

/**
 * Window is part of menu or [OptionButton] dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [member transient]).
 *
 * **Note:** This flag has no effect in embedded windows (unless said window is a [Popup]).
 *
*/
static FLAG_POPUP: any;

/**
 * Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons. Set with [member extend_to_title].
 *
 * **Note:** This flag is implemented only on macOS.
 *
 * **Note:** This flag has no effect in embedded windows.
 *
*/
static FLAG_EXTEND_TO_TITLE: any;

/**
 * All mouse events are passed to the underlying window of the same application.
 *
 * **Note:** This flag has no effect in embedded windows.
 *
*/
static FLAG_MOUSE_PASSTHROUGH: any;

/**
 * Max value of the [enum Flags].
 *
*/
static FLAG_MAX: any;

/**
 * The content will not be scaled to match the [Window]'s size.
 *
*/
static CONTENT_SCALE_MODE_DISABLED: any;

/**
 * The content will be rendered at the target size. This is more performance-expensive than [constant CONTENT_SCALE_MODE_VIEWPORT], but provides better results.
 *
*/
static CONTENT_SCALE_MODE_CANVAS_ITEMS: any;

/**
 * The content will be rendered at the base size and then scaled to the target size. More performant than [constant CONTENT_SCALE_MODE_CANVAS_ITEMS], but results in pixelated image.
 *
*/
static CONTENT_SCALE_MODE_VIEWPORT: any;

/**
 * The aspect will be ignored. Scaling will simply stretch the content to fit the target size.
 *
*/
static CONTENT_SCALE_ASPECT_IGNORE: any;

/**
 * The content's aspect will be preserved. If the target size has different aspect from the base one, the image will be centered and black bars will appear on left and right sides.
 *
*/
static CONTENT_SCALE_ASPECT_KEEP: any;

/**
 * The content can be expanded vertically. Scaling horizontally will result in keeping the width ratio and then black bars on left and right sides.
 *
*/
static CONTENT_SCALE_ASPECT_KEEP_WIDTH: any;

/**
 * The content can be expanded horizontally. Scaling vertically will result in keeping the height ratio and then black bars on top and bottom sides.
 *
*/
static CONTENT_SCALE_ASPECT_KEEP_HEIGHT: any;

/**
 * The content's aspect will be preserved. If the target size has different aspect from the base one, the content will stay in the top-left corner and add an extra visible area in the stretched space.
 *
*/
static CONTENT_SCALE_ASPECT_EXPAND: any;

/**
 * The content will be stretched according to a fractional factor. This fills all the space available in the window, but allows "pixel wobble" to occur due to uneven pixel scaling.
 *
*/
static CONTENT_SCALE_STRETCH_FRACTIONAL: any;

/**
 * The content will be stretched only according to an integer factor, preserving sharp pixels. This may leave a black background visible on the window's edges depending on the window size.
 *
*/
static CONTENT_SCALE_STRETCH_INTEGER: any;

/**
 * Automatic layout direction, determined from the parent window layout direction.
 *
*/
static LAYOUT_DIRECTION_INHERITED: any;

/**
 * Automatic layout direction, determined from the current locale.
 *
*/
static LAYOUT_DIRECTION_LOCALE: any;

/**
 * Left-to-right layout direction.
 *
*/
static LAYOUT_DIRECTION_LTR: any;

/**
 * Right-to-left layout direction.
 *
*/
static LAYOUT_DIRECTION_RTL: any;

/**
 * Initial window position is determined by [member position].
 *
*/
static WINDOW_INITIAL_POSITION_ABSOLUTE: any;

/**
 * Initial window position is the center of the primary screen.
 *
*/
static WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN: any;

/**
 * Initial window position is the center of the main window screen.
 *
*/
static WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN: any;

/**
 * Initial window position is the center of [member current_screen] screen.
 *
*/
static WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN: any;

/**
 * Initial window position is the center of the screen containing the mouse pointer.
 *
*/
static WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS: any;

/**
 * Initial window position is the center of the screen containing the window with the keyboard focus.
 *
*/
static WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS: any;


/**
 * Emitted right after [method popup] call, before the [Window] appears or does anything.
 *
*/
$about_to_popup: Signal<() => void>

/**
 * Emitted when the [Window]'s close button is pressed or when [member popup_window] is enabled and user clicks outside the window.
 *
 * This signal can be used to handle window closing, e.g. by connecting it to [method hide].
 *
*/
$close_requested: Signal<() => void>

/**
 * Emitted when the [Window]'s DPI changes as a result of OS-level changes (e.g. moving the window from a Retina display to a lower resolution one).
 *
 * **Note:** Only implemented on macOS.
 *
*/
$dpi_changed: Signal<() => void>

/**
 * Emitted when files are dragged from the OS file manager and dropped in the game window. The argument is a list of file paths.
 *
 * Note that this method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.
 *
 * Example usage:
 *
 * @example 
 * 
 * func _ready():
 *     get_viewport().files_dropped.connect(on_files_dropped)
 * func on_files_dropped(files):
 *     print(files)
 * @summary 
 * 
 *
*/
$files_dropped: Signal<() => void>

/**
 * Emitted when the [Window] gains focus.
 *
*/
$focus_entered: Signal<() => void>

/**
 * Emitted when the [Window] loses its focus.
 *
*/
$focus_exited: Signal<() => void>

/**
 * Emitted when a go back request is sent (e.g. pressing the "Back" button on Android), right after [constant Node.NOTIFICATION_WM_GO_BACK_REQUEST].
 *
*/
$go_back_requested: Signal<() => void>

/**
 * Emitted when the mouse cursor enters the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not.
 *
*/
$mouse_entered: Signal<() => void>

/**
 * Emitted when the mouse cursor leaves the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not.
 *
*/
$mouse_exited: Signal<() => void>

/**
 * Emitted when the [constant NOTIFICATION_THEME_CHANGED] notification is sent.
 *
*/
$theme_changed: Signal<() => void>

/**
 * Emitted when window title bar decorations are changed, e.g. macOS window enter/exit full screen mode, or extend-to-title flag is changed.
 *
*/
$titlebar_changed: Signal<() => void>

/**
 * Emitted when [Window] is made visible or disappears.
 *
*/
$visibility_changed: Signal<() => void>

/**
 * Emitted when the [Window] is currently focused and receives any input, passing the received event as an argument. The event's position, if present, is in the embedder's coordinate system.
 *
*/
$window_input: Signal<() => void>

}

