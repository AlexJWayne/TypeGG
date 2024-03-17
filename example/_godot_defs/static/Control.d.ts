
/**
 * Base class for all UI-related nodes. [Control] features a bounding rectangle that defines its extents, an anchor position relative to its parent control or the current viewport, and offsets relative to the anchor. The offsets update automatically when the node, any of its parents, or the screen size change.
 *
 * For more information on Godot's UI system, anchors, offsets, and containers, see the related tutorials in the manual. To build flexible UIs, you'll need a mix of UI elements that inherit from [Control] and [Container] nodes.
 *
 * **User Interface nodes and input**
 *
 * Godot propagates input events via viewports. Each [Viewport] is responsible for propagating [InputEvent]s to their child nodes. As the [member SceneTree.root] is a [Window], this already happens automatically for all UI elements in your game.
 *
 * Input events are propagated through the [SceneTree] from the root node to all child nodes by calling [method Node._input]. For UI elements specifically, it makes more sense to override the virtual method [method _gui_input], which filters out unrelated input events, such as by checking z-order, [member mouse_filter], focus, or if the event was inside of the control's bounding box.
 *
 * Call [method accept_event] so no other node receives the event. Once you accept an input, it becomes handled so [method Node._unhandled_input] will not process it.
 *
 * Only one [Control] node can be in focus. Only the node in focus will receive events. To get the focus, call [method grab_focus]. [Control] nodes lose focus when another node grabs it, or if you hide the node in focus.
 *
 * Sets [member mouse_filter] to [constant MOUSE_FILTER_IGNORE] to tell a [Control] node to ignore mouse or touch events. You'll need it if you place an icon on top of a button.
 *
 * [Theme] resources change the Control's appearance. If you change the [Theme] on a [Control] node, it affects all of its children. To override some of the theme's parameters, call one of the `add_theme_*_override` methods, like [method add_theme_font_override]. You can override the theme with the Inspector.
 *
 * **Note:** Theme items are **not** [Object] properties. This means you can't access their values using [method Object.get] and [method Object.set]. Instead, use the `get_theme_*` and `add_theme_*_override` methods provided by this class.
 *
*/
declare class Control extends CanvasItem  {

  
/**
 * Base class for all UI-related nodes. [Control] features a bounding rectangle that defines its extents, an anchor position relative to its parent control or the current viewport, and offsets relative to the anchor. The offsets update automatically when the node, any of its parents, or the screen size change.
 *
 * For more information on Godot's UI system, anchors, offsets, and containers, see the related tutorials in the manual. To build flexible UIs, you'll need a mix of UI elements that inherit from [Control] and [Container] nodes.
 *
 * **User Interface nodes and input**
 *
 * Godot propagates input events via viewports. Each [Viewport] is responsible for propagating [InputEvent]s to their child nodes. As the [member SceneTree.root] is a [Window], this already happens automatically for all UI elements in your game.
 *
 * Input events are propagated through the [SceneTree] from the root node to all child nodes by calling [method Node._input]. For UI elements specifically, it makes more sense to override the virtual method [method _gui_input], which filters out unrelated input events, such as by checking z-order, [member mouse_filter], focus, or if the event was inside of the control's bounding box.
 *
 * Call [method accept_event] so no other node receives the event. Once you accept an input, it becomes handled so [method Node._unhandled_input] will not process it.
 *
 * Only one [Control] node can be in focus. Only the node in focus will receive events. To get the focus, call [method grab_focus]. [Control] nodes lose focus when another node grabs it, or if you hide the node in focus.
 *
 * Sets [member mouse_filter] to [constant MOUSE_FILTER_IGNORE] to tell a [Control] node to ignore mouse or touch events. You'll need it if you place an icon on top of a button.
 *
 * [Theme] resources change the Control's appearance. If you change the [Theme] on a [Control] node, it affects all of its children. To override some of the theme's parameters, call one of the `add_theme_*_override` methods, like [method add_theme_font_override]. You can override the theme with the Inspector.
 *
 * **Note:** Theme items are **not** [Object] properties. This means you can't access their values using [method Object.get] and [method Object.set]. Instead, use the `get_theme_*` and `add_theme_*_override` methods provided by this class.
 *
*/
  new(): Control; 
  static "new"(): Control 


/** Anchors the bottom edge of the node to the origin, the center, or the end of its parent control. It changes how the bottom offset updates when the node moves or changes size. You can use one of the [enum Anchor] constants for convenience. */
anchor_bottom: float;

/** Anchors the left edge of the node to the origin, the center or the end of its parent control. It changes how the left offset updates when the node moves or changes size. You can use one of the [enum Anchor] constants for convenience. */
anchor_left: float;

/** Anchors the right edge of the node to the origin, the center or the end of its parent control. It changes how the right offset updates when the node moves or changes size. You can use one of the [enum Anchor] constants for convenience. */
anchor_right: float;

/** Anchors the top edge of the node to the origin, the center or the end of its parent control. It changes how the top offset updates when the node moves or changes size. You can use one of the [enum Anchor] constants for convenience. */
anchor_top: float;

/**
 * Toggles if any text should automatically change to its translated version depending on the current locale.
 *
 * Also decides if the node's strings should be parsed for POT generation.
 *
*/
auto_translate: boolean;

/** Enables whether rendering of [CanvasItem] based children should be clipped to this control's rectangle. If [code]true[/code], parts of a child which would be visibly outside of this control's rectangle will not be rendered and won't receive input. */
clip_contents: boolean;

/** The minimum size of the node's bounding rectangle. If you set it to a value greater than (0, 0), the node's bounding rectangle will always have at least this size, even if its content is smaller. If it's set to (0, 0), the node sizes automatically to fit its content, be it a texture or child nodes. */
custom_minimum_size: Vector2;

/** The focus access mode for the control (None, Click or All). Only one Control can be focused at the same time, and it will receive keyboard, gamepad, and mouse signals. */
focus_mode: int;

/** Tells Godot which node it should give focus to if the user presses the down arrow on the keyboard or down on a gamepad by default. You can change the key by editing the [member ProjectSettings.input/ui_down] input action. The node must be a [Control]. If this property is not set, Godot will give focus to the closest [Control] to the bottom of this one. */
focus_neighbor_bottom: NodePathType;

/** Tells Godot which node it should give focus to if the user presses the left arrow on the keyboard or left on a gamepad by default. You can change the key by editing the [member ProjectSettings.input/ui_left] input action. The node must be a [Control]. If this property is not set, Godot will give focus to the closest [Control] to the left of this one. */
focus_neighbor_left: NodePathType;

/** Tells Godot which node it should give focus to if the user presses the right arrow on the keyboard or right on a gamepad by default. You can change the key by editing the [member ProjectSettings.input/ui_right] input action. The node must be a [Control]. If this property is not set, Godot will give focus to the closest [Control] to the right of this one. */
focus_neighbor_right: NodePathType;

/** Tells Godot which node it should give focus to if the user presses the top arrow on the keyboard or top on a gamepad by default. You can change the key by editing the [member ProjectSettings.input/ui_up] input action. The node must be a [Control]. If this property is not set, Godot will give focus to the closest [Control] to the top of this one. */
focus_neighbor_top: NodePathType;

/**
 * Tells Godot which node it should give focus to if the user presses [kbd]Tab[/kbd] on a keyboard by default. You can change the key by editing the [member ProjectSettings.input/ui_focus_next] input action.
 *
 * If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.
 *
*/
focus_next: NodePathType;

/**
 * Tells Godot which node it should give focus to if the user presses [kbd]Shift + Tab[/kbd] on a keyboard by default. You can change the key by editing the [member ProjectSettings.input/ui_focus_prev] input action.
 *
 * If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.
 *
*/
focus_previous: NodePathType;

/** The node's global position, relative to the world (usually to the [CanvasLayer]). */
global_position: Vector2;

/** Controls the direction on the horizontal axis in which the control should grow if its horizontal minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size. */
grow_horizontal: int;

/** Controls the direction on the vertical axis in which the control should grow if its vertical minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size. */
grow_vertical: int;

/** Controls layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). */
layout_direction: int;

/**
 * If `true`, automatically converts code line numbers, list indices, [SpinBox] and [ProgressBar] values from the Western Arabic (0..9) to the numeral systems used in current locale.
 *
 * **Note:** Numbers within the text are not automatically converted, it can be done manually, using [method TextServer.format_number].
 *
*/
localize_numeral_system: boolean;

/**
 * The default cursor shape for this control. Useful for Godot plugins and applications or games that use the system's mouse cursors.
 *
 * **Note:** On Linux, shapes may vary depending on the cursor theme of the system.
 *
*/
mouse_default_cursor_shape: int;

/** Controls whether the control will be able to receive mouse button input events through [method _gui_input] and how these events should be handled. Also controls whether the control can receive the [signal mouse_entered], and [signal mouse_exited] signals. See the constants to learn what each does. */
mouse_filter: int;

/**
 * When enabled, scroll wheel events processed by [method _gui_input] will be passed to the parent control even if [member mouse_filter] is set to [constant MOUSE_FILTER_STOP]. As it defaults to true, this allows nested scrollable containers to work out of the box.
 *
 * You should disable it on the root of your UI if you do not want scroll events to go to the [method Node._unhandled_input] processing.
 *
*/
mouse_force_pass_scroll_events: boolean;

/**
 * Distance between the node's bottom edge and its parent control, based on [member anchor_bottom].
 *
 * Offsets are often controlled by one or multiple parent [Container] nodes, so you should not modify them manually if your node is a direct child of a [Container]. Offsets update automatically when you move or resize the node.
 *
*/
offset_bottom: float;

/**
 * Distance between the node's left edge and its parent control, based on [member anchor_left].
 *
 * Offsets are often controlled by one or multiple parent [Container] nodes, so you should not modify them manually if your node is a direct child of a [Container]. Offsets update automatically when you move or resize the node.
 *
*/
offset_left: float;

/**
 * Distance between the node's right edge and its parent control, based on [member anchor_right].
 *
 * Offsets are often controlled by one or multiple parent [Container] nodes, so you should not modify them manually if your node is a direct child of a [Container]. Offsets update automatically when you move or resize the node.
 *
*/
offset_right: float;

/**
 * Distance between the node's top edge and its parent control, based on [member anchor_top].
 *
 * Offsets are often controlled by one or multiple parent [Container] nodes, so you should not modify them manually if your node is a direct child of a [Container]. Offsets update automatically when you move or resize the node.
 *
*/
offset_top: float;

/** By default, the node's pivot is its top-left corner. When you change its [member rotation] or [member scale], it will rotate or scale around this pivot. Set this property to [member size] / 2 to pivot around the Control's center. */
pivot_offset: Vector2;

/** The node's position, relative to its containing node. It corresponds to the rectangle's top-left corner. The property is not affected by [member pivot_offset]. */
position: Vector2;

/**
 * The node's rotation around its pivot, in radians. See [member pivot_offset] to change the pivot's position.
 *
 * **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].
 *
*/
rotation: float;

/** Helper property to access [member rotation] in degrees instead of radians. */
rotation_degrees: float;

/**
 * The node's scale, relative to its [member size]. Change this property to scale the node around its [member pivot_offset]. The Control's [member tooltip_text] will also scale according to this value.
 *
 * **Note:** This property is mainly intended to be used for animation purposes. To support multiple resolutions in your project, use an appropriate viewport stretch mode as described in the [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]documentation[/url] instead of scaling Controls individually.
 *
 * **Note:** [member FontFile.oversampling] does **not** take [Control] [member scale] into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.
 *
 * **Note:** If the Control node is a child of a [Container] node, the scale will be reset to `Vector2(1, 1)` when the scene is instantiated. To set the Control's scale when it's instantiated, wait for one frame using `await get_tree().process_frame` then set its [member scale] property.
 *
*/
scale: Vector2;

/** The [Node] which must be a parent of the focused [Control] for the shortcut to be activated. If [code]null[/code], the shortcut can be activated when any control is focused (a global shortcut). This allows shortcuts to be accepted only when the user has a certain area of the GUI focused. */
shortcut_context: Node;

/** The size of the node's bounding rectangle, in the node's coordinate system. [Container] nodes update this property automatically. */
size: Vector2;

/** Tells the parent [Container] nodes how they should resize and place the node on the X axis. Use a combination of the [enum SizeFlags] constants to change the flags. See the constants to learn what each does. */
size_flags_horizontal: int;

/** If the node and at least one of its neighbors uses the [constant SIZE_EXPAND] size flag, the parent [Container] will let it take more or less space depending on this property. If this node has a stretch ratio of 2 and its neighbor a ratio of 1, this node will take two thirds of the available space. */
size_flags_stretch_ratio: float;

/** Tells the parent [Container] nodes how they should resize and place the node on the Y axis. Use a combination of the [enum SizeFlags] constants to change the flags. See the constants to learn what each does. */
size_flags_vertical: int;

/**
 * The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.
 *
 * **Note:** [Window] styles will have no effect unless the window is embedded.
 *
*/
theme: Theme;

/**
 * The name of a theme type variation used by this [Control] to look up its own theme items. When empty, the class name of the node is used (e.g. [code skip-lint]Button` for the [Button] control), as well as the class names of all parent classes (in order of inheritance).
 *
 * When set, this property gives the highest priority to the type of the specified name. This type can in turn extend another type, forming a dependency chain. See [method Theme.set_type_variation]. If the theme item cannot be found using this type or its base types, lookup falls back on the class names.
 *
 * **Note:** To look up [Control]'s own items use various `get_theme_*` methods without specifying `theme_type`.
 *
 * **Note:** Theme items are looked for in the tree order, from branch to root, where each [Control] node is checked for its [member theme] property. The earliest match against any type/class name is returned. The project-level Theme and the default Theme are checked last.
 *
*/
theme_type_variation: StringName;

/**
 * The default tooltip text. The tooltip appears when the user's mouse cursor stays idle over this control for a few moments, provided that the [member mouse_filter] property is not [constant MOUSE_FILTER_IGNORE]. The time required for the tooltip to appear can be changed with the [member ProjectSettings.gui/timers/tooltip_delay_sec] option. See also [method get_tooltip].
 *
 * The tooltip popup will use either a default implementation, or a custom one that you can provide by overriding [method _make_custom_tooltip]. The default tooltip includes a [PopupPanel] and [Label] whose theme properties can be customized using [Theme] methods with the `"TooltipPanel"` and `"TooltipLabel"` respectively. For example:
 *
 * @example 
 * 
 * 
 * var style_box = StyleBoxFlat.new()
 * style_box.set_bg_color(Color(1, 1, 0))
 * style_box.set_border_width_all(2)
 * # We assume here that the `theme` property has been assigned a custom Theme beforehand.
 * theme.set_stylebox("panel", "TooltipPanel", style_box)
 * theme.set_color("font_color", "TooltipLabel", Color(0, 1, 1))
 * 
 * 
 * var styleBox = new StyleBoxFlat();
 * styleBox.SetBgColor(new Color(1, 1, 0));
 * styleBox.SetBorderWidthAll(2);
 * // We assume here that the `Theme` property has been assigned a custom Theme beforehand.
 * Theme.SetStyleBox("panel", "TooltipPanel", styleBox);
 * Theme.SetColor("font_color", "TooltipLabel", new Color(0, 1, 1));
 * 
 * @summary 
 * 
 *
*/
tooltip_text: string;

/**
 * Godot calls this method to test if [param data] from a control's [method _get_drag_data] can be dropped at [param at_position]. [param at_position] is local to this control.
 *
 * This method should only be used to test the data. Process the data in [method _drop_data].
 *
 * @example 
 * 
 * 
 * func _can_drop_data(position, data):
 *     # Check position if it is relevant to you
 *     # Otherwise, just check data
 *     return typeof(data) == TYPE_DICTIONARY and data.has("expected")
 * 
 * 
 * public override bool _CanDropData(Vector2 atPosition, Variant data)
 * {
 *     // Check position if it is relevant to you
 *     // Otherwise, just check data
 *     return data.VariantType == Variant.Type.Dictionary && data.AsGodotDictionary().ContainsKey("expected");
 * }
 * 
 * @summary 
 * 
 *
*/
protected _can_drop_data(): boolean;

/**
 * Godot calls this method to pass you the [param data] from a control's [method _get_drag_data] result. Godot first calls [method _can_drop_data] to test if [param data] is allowed to drop at [param at_position] where [param at_position] is local to this control.
 *
 * @example 
 * 
 * 
 * func _can_drop_data(position, data):
 *     return typeof(data) == TYPE_DICTIONARY and data.has("color")
 * func _drop_data(position, data):
 *     var color = data["color"]
 * 
 * 
 * public override bool _CanDropData(Vector2 atPosition, Variant data)
 * {
 *     return data.VariantType == Variant.Type.Dictionary && dict.AsGodotDictionary().ContainsKey("color");
 * }
 * public override void _DropData(Vector2 atPosition, Variant data)
 * {
 *     Color color = data.AsGodotDictionary()["color"].AsColor();
 * }
 * 
 * @summary 
 * 
 *
*/
protected _drop_data(): void;

/**
 * Godot calls this method to get data that can be dragged and dropped onto controls that expect drop data. Returns `null` if there is no data to drag. Controls that want to receive drop data should implement [method _can_drop_data] and [method _drop_data]. [param at_position] is local to this control. Drag may be forced with [method force_drag].
 *
 * A preview that will follow the mouse that should represent the data can be set with [method set_drag_preview]. A good time to set the preview is in this method.
 *
 * @example 
 * 
 * 
 * func _get_drag_data(position):
 *     var mydata = make_data() # This is your custom method generating the drag data.
 *     set_drag_preview(make_preview(mydata)) # This is your custom method generating the preview of the drag data.
 *     return mydata
 * 
 * 
 * public override Variant _GetDragData(Vector2 atPosition)
 * {
 *     var myData = MakeData(); // This is your custom method generating the drag data.
 *     SetDragPreview(MakePreview(myData)); // This is your custom method generating the preview of the drag data.
 *     return myData;
 * }
 * 
 * @summary 
 * 
 *
*/
protected _get_drag_data(): any;

/**
 * Virtual method to be implemented by the user. Returns the minimum size for this control. Alternative to [member custom_minimum_size] for controlling minimum size via code. The actual minimum size will be the max value of these two (in each axis separately).
 *
 * If not overridden, defaults to [constant Vector2.ZERO].
 *
 * **Note:** This method will not be called when the script is attached to a [Control] node that already overrides its minimum size (e.g. [Label], [Button], [PanelContainer] etc.). It can only be used with most basic GUI nodes, like [Control], [Container], [Panel] etc.
 *
*/
protected _get_minimum_size(): Vector2;

/**
 * Virtual method to be implemented by the user. Returns the tooltip text for the position [param at_position] in control's local coordinates, which will typically appear when the cursor is resting over this control. See [method get_tooltip].
 *
 * **Note:** If this method returns an empty [String], no tooltip is displayed.
 *
*/
protected _get_tooltip(): string;

/**
 * Virtual method to be implemented by the user. Use this method to process and accept inputs on UI elements. See [method accept_event].
 *
 * **Example usage for clicking a control:**
 *
 * @example 
 * 
 * 
 * func _gui_input(event):
 *     if event is InputEventMouseButton:
 *         if event.button_index == MOUSE_BUTTON_LEFT and event.pressed:
 *             print("I've been clicked D:")
 * 
 * 
 * public override void _GuiInput(InputEvent @event)
 * {
 *     if (@event is InputEventMouseButton mb)
 *     {
 *         if (mb.ButtonIndex == MouseButton.Left && mb.Pressed)
 *         {
 *             GD.Print("I've been clicked D:");
 *         }
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * The event won't trigger if:
 *
 * * clicking outside the control (see [method _has_point]);
 *
 * * control has [member mouse_filter] set to [constant MOUSE_FILTER_IGNORE];
 *
 * * control is obstructed by another [Control] on top of it, which doesn't have [member mouse_filter] set to [constant MOUSE_FILTER_IGNORE];
 *
 * * control's parent has [member mouse_filter] set to [constant MOUSE_FILTER_STOP] or has accepted the event;
 *
 * * it happens outside the parent's rectangle and the parent has either [member clip_contents] enabled.
 *
 * **Note:** Event position is relative to the control origin.
 *
*/
protected _gui_input(): void;

/**
 * Virtual method to be implemented by the user. Returns whether the given [param point] is inside this control.
 *
 * If not overridden, default behavior is checking if the point is within control's Rect.
 *
 * **Note:** If you want to check if a point is inside the control, you can use `Rect2(Vector2.ZERO, size).has_point(point)`.
 *
*/
protected _has_point(): boolean;

/**
 * Virtual method to be implemented by the user. Returns a [Control] node that should be used as a tooltip instead of the default one. The [param for_text] includes the contents of the [member tooltip_text] property.
 *
 * The returned node must be of type [Control] or Control-derived. It can have child nodes of any type. It is freed when the tooltip disappears, so make sure you always provide a new instance (if you want to use a pre-existing node from your scene tree, you can duplicate it and pass the duplicated instance). When `null` or a non-Control node is returned, the default tooltip will be used instead.
 *
 * The returned node will be added as child to a [PopupPanel], so you should only provide the contents of that panel. That [PopupPanel] can be themed using [method Theme.set_stylebox] for the type `"TooltipPanel"` (see [member tooltip_text] for an example).
 *
 * **Note:** The tooltip is shrunk to minimal size. If you want to ensure it's fully visible, you might want to set its [member custom_minimum_size] to some non-zero value.
 *
 * **Note:** The node (and any relevant children) should be [member CanvasItem.visible] when returned, otherwise, the viewport that instantiates it will not be able to calculate its minimum size reliably.
 *
 * **Example of usage with a custom-constructed node:**
 *
 * @example 
 * 
 * 
 * func _make_custom_tooltip(for_text):
 *     var label = Label.new()
 *     label.text = for_text
 *     return label
 * 
 * 
 * public override Control _MakeCustomTooltip(string forText)
 * {
 *     var label = new Label();
 *     label.Text = forText;
 *     return label;
 * }
 * 
 * @summary 
 * 
 *
 * **Example of usage with a custom scene instance:**
 *
 * @example 
 * 
 * 
 * func _make_custom_tooltip(for_text):
 *     var tooltip = preload("res://some_tooltip_scene.tscn").instantiate()
 *     tooltip.get_node("Label").text = for_text
 *     return tooltip
 * 
 * 
 * public override Control _MakeCustomTooltip(string forText)
 * {
 *     Node tooltip = ResourceLoader.Load<PackedScene>("res://some_tooltip_scene.tscn").Instantiate();
 *     tooltip.GetNode<Label>("Label").Text = forText;
 *     return tooltip;
 * }
 * 
 * @summary 
 * 
 *
*/
protected _make_custom_tooltip(): Object;

/**
 * User defined BiDi algorithm override function.
 *
 * Returns an [Array] of [Vector3i] text ranges and text base directions, in the left-to-right order. Ranges should cover full source [param text] without overlaps. BiDi algorithm will be used on each range separately.
 *
*/
protected _structured_text_parser(): Vector3i[];

/**
 * Marks an input event as handled. Once you accept an input event, it stops propagating, even to nodes listening to [method Node._unhandled_input] or [method Node._unhandled_key_input].
 *
 * **Note:** This does not affect the methods in [Input], only the way events are propagated.
 *
*/
accept_event(): void;

/**
 * Creates a local override for a theme [Color] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_color_override].
 *
 * See also [method get_theme_color].
 *
 * **Example of overriding a label's color and resetting it later:**
 *
 * @example 
 * 
 * 
 * # Given the child Label node "MyLabel", override its font color with a custom value.
 * $MyLabel.add_theme_color_override("font_color", Color(1, 0.5, 0))
 * # Reset the font color of the child label.
 * $MyLabel.remove_theme_color_override("font_color")
 * # Alternatively it can be overridden with the default value from the Label type.
 * $MyLabel.add_theme_color_override("font_color", get_theme_color("font_color", "Label"))
 * 
 * 
 * // Given the child Label node "MyLabel", override its font color with a custom value.
 * GetNode<Label>("MyLabel").AddThemeColorOverride("font_color", new Color(1, 0.5f, 0));
 * // Reset the font color of the child label.
 * GetNode<Label>("MyLabel").RemoveThemeColorOverride("font_color");
 * // Alternatively it can be overridden with the default value from the Label type.
 * GetNode<Label>("MyLabel").AddThemeColorOverride("font_color", GetThemeColor("font_color", "Label"));
 * 
 * @summary 
 * 
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
 * See also [method get_theme_stylebox].
 *
 * **Example of modifying a property in a StyleBox by duplicating it:**
 *
 * @example 
 * 
 * 
 * # The snippet below assumes the child node MyButton has a StyleBoxFlat assigned.
 * # Resources are shared across instances, so we need to duplicate it
 * # to avoid modifying the appearance of all other buttons.
 * var new_stylebox_normal = $MyButton.get_theme_stylebox("normal").duplicate()
 * new_stylebox_normal.border_width_top = 3
 * new_stylebox_normal.border_color = Color(0, 1, 0.5)
 * $MyButton.add_theme_stylebox_override("normal", new_stylebox_normal)
 * # Remove the stylebox override.
 * $MyButton.remove_theme_stylebox_override("normal")
 * 
 * 
 * // The snippet below assumes the child node MyButton has a StyleBoxFlat assigned.
 * // Resources are shared across instances, so we need to duplicate it
 * // to avoid modifying the appearance of all other buttons.
 * StyleBoxFlat newStyleboxNormal = GetNode<Button>("MyButton").GetThemeStylebox("normal").Duplicate() as StyleBoxFlat;
 * newStyleboxNormal.BorderWidthTop = 3;
 * newStyleboxNormal.BorderColor = new Color(0, 1, 0.5f);
 * GetNode<Button>("MyButton").AddThemeStyleboxOverride("normal", newStyleboxNormal);
 * // Remove the stylebox override.
 * GetNode<Button>("MyButton").RemoveThemeStyleboxOverride("normal");
 * 
 * @summary 
 * 
 *
*/
add_theme_stylebox_override(): void;

/** Prevents [code]*_theme_*_override[/code] methods from emitting [constant NOTIFICATION_THEME_CHANGED] until [method end_bulk_theme_override] is called. */
begin_bulk_theme_override(): void;

/** Ends a bulk theme override update. See [method begin_bulk_theme_override]. */
end_bulk_theme_override(): void;

/** Finds the next (below in the tree) [Control] that can receive the focus. */
find_next_valid_focus(): Control;

/** Finds the previous (above in the tree) [Control] that can receive the focus. */
find_prev_valid_focus(): Control;

/**
 * Finds the next [Control] that can receive the focus on the specified [enum Side].
 *
 * **Note:** This is different from [method get_focus_neighbor], which returns the path of a specified focus neighbor.
 *
*/
find_valid_focus_neighbor(): Control;

/**
 * Forces drag and bypasses [method _get_drag_data] and [method set_drag_preview] by passing [param data] and [param preview]. Drag will start even if the mouse is neither over nor pressed on this control.
 *
 * The methods [method _can_drop_data] and [method _drop_data] must be implemented on controls that want to receive drop data.
 *
*/
force_drag(): void;

/** Returns the anchor for the specified [enum Side]. A getter method for [member anchor_bottom], [member anchor_left], [member anchor_right] and [member anchor_top]. */
get_anchor(): float;

/** Returns [member offset_left] and [member offset_top]. See also [member position]. */
get_begin(): Vector2;

/** Returns combined minimum size from [member custom_minimum_size] and [method get_minimum_size]. */
get_combined_minimum_size(): Vector2;

/** Returns the mouse cursor shape the control displays on mouse hover. See [enum CursorShape]. */
get_cursor_shape(): int;

/** Returns [member offset_right] and [member offset_bottom]. */
get_end(): Vector2;

/**
 * Returns the focus neighbor for the specified [enum Side]. A getter method for [member focus_neighbor_bottom], [member focus_neighbor_left], [member focus_neighbor_right] and [member focus_neighbor_top].
 *
 * **Note:** To find the next [Control] on the specific [enum Side], even if a neighbor is not assigned, use [method find_valid_focus_neighbor].
 *
*/
get_focus_neighbor(): NodePathType;

/**
 * Returns the position and size of the control relative to the containing canvas. See [member global_position] and [member size].
 *
 * **Note:** If the node itself or any parent [CanvasItem] between the node and the canvas have a non default rotation or skew, the resulting size is likely not meaningful.
 *
 * **Note:** Setting [member Viewport.gui_snap_controls_to_pixels] to `true` can lead to rounding inaccuracies between the displayed control and the returned [Rect2].
 *
*/
get_global_rect(): Rect2;

/** Returns the minimum size for this control. See [member custom_minimum_size]. */
get_minimum_size(): Vector2;

/** Returns the offset for the specified [enum Side]. A getter method for [member offset_bottom], [member offset_left], [member offset_right] and [member offset_top]. */
get_offset(): float;

/** Returns the width/height occupied in the parent control. */
get_parent_area_size(): Vector2;

/** Returns the parent control node. */
get_parent_control(): Control;

/**
 * Returns the position and size of the control in the coordinate system of the containing node. See [member position], [member scale] and [member size].
 *
 * **Note:** If [member rotation] is not the default rotation, the resulting size is not meaningful.
 *
 * **Note:** Setting [member Viewport.gui_snap_controls_to_pixels] to `true` can lead to rounding inaccuracies between the displayed control and the returned [Rect2].
 *
*/
get_rect(): Rect2;

/**
 * Returns the position of this [Control] in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.
 *
 * Equals to [member global_position] if the window is embedded (see [member Viewport.gui_embed_subwindows]).
 *
 * **Example usage for showing a popup:**
 *
 * @example 
 * 
 * popup_menu.position = get_screen_position() + get_local_mouse_position()
 * popup_menu.reset_size()
 * popup_menu.popup()
 * @summary 
 * 
 *
*/
get_screen_position(): Vector2;

/**
 * Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type]. If [param theme_type] is omitted the class name of the current control is used as the type, or [member theme_type_variation] if it is defined. If the type is a class name its parent classes are also checked, in order of inheritance. If the type is a variation its base types are checked, in order of dependency, then the control's class name and its parent classes are checked.
 *
 * For the current control its local overrides are considered first (see [method add_theme_color_override]), then its assigned [member theme]. After the current control, each parent control and its assigned [member theme] are considered; controls without a [member theme] assigned are skipped. If no matching [Theme] is found in the tree, the custom project [Theme] (see [member ProjectSettings.gui/theme/custom]) and the default [Theme] are used (see [ThemeDB]).
 *
 * @example 
 * 
 * 
 * func _ready():
 *     # Get the font color defined for the current Control's class, if it exists.
 *     modulate = get_theme_color("font_color")
 *     # Get the font color defined for the Button class.
 *     modulate = get_theme_color("font_color", "Button")
 * 
 * 
 * public override void _Ready()
 * {
 *     // Get the font color defined for the current Control's class, if it exists.
 *     Modulate = GetThemeColor("font_color");
 *     // Get the font color defined for the Button class.
 *     Modulate = GetThemeColor("font_color", "Button");
 * }
 * 
 * @summary 
 * 
 *
*/
get_theme_color(): Color;

/**
 * Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].
 *
 * See [method get_theme_color] for details.
 *
*/
get_theme_constant(): int;

/**
 * Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.
 *
 * See [method get_theme_color] for details.
 *
*/
get_theme_default_base_scale(): float;

/**
 * Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.
 *
 * See [method get_theme_color] for details.
 *
*/
get_theme_default_font(): Font;

/**
 * Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.
 *
 * See [method get_theme_color] for details.
 *
*/
get_theme_default_font_size(): int;

/**
 * Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].
 *
 * See [method get_theme_color] for details.
 *
*/
get_theme_font(): Font;

/**
 * Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].
 *
 * See [method get_theme_color] for details.
 *
*/
get_theme_font_size(): int;

/**
 * Returns an icon from the first matching [Theme] in the tree if that [Theme] has an icon item with the specified [param name] and [param theme_type].
 *
 * See [method get_theme_color] for details.
 *
*/
get_theme_icon(): Texture2D;

/**
 * Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].
 *
 * See [method get_theme_color] for details.
 *
*/
get_theme_stylebox(): StyleBox;

/**
 * Returns the tooltip text for the position [param at_position] in control's local coordinates, which will typically appear when the cursor is resting over this control. By default, it returns [member tooltip_text].
 *
 * This method can be overridden to customize its behavior. See [method _get_tooltip].
 *
 * **Note:** If this method returns an empty [String], no tooltip is displayed.
 *
*/
get_tooltip(): string;

/**
 * Creates an [InputEventMouseButton] that attempts to click the control. If the event is received, the control acquires focus.
 *
 * @example 
 * 
 * 
 * func _process(delta):
 *     grab_click_focus() # When clicking another Control node, this node will be clicked instead.
 * 
 * 
 * public override void _Process(double delta)
 * {
 *     GrabClickFocus(); // When clicking another Control node, this node will be clicked instead.
 * }
 * 
 * @summary 
 * 
 *
*/
grab_click_focus(): void;

/**
 * Steal the focus from another control and become the focused control (see [member focus_mode]).
 *
 * **Note:** Using this method together with [method Callable.call_deferred] makes it more reliable, especially when called inside [method Node._ready].
 *
*/
grab_focus(): void;

/** Returns [code]true[/code] if this is the current focused control. See [member focus_mode]. */
has_focus(): boolean;

/**
 * Returns `true` if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].
 *
 * See [method get_theme_color] for details.
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
 * See [method get_theme_color] for details.
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
 * See [method get_theme_color] for details.
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
 * See [method get_theme_color] for details.
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
 * See [method get_theme_color] for details.
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
 * See [method get_theme_color] for details.
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

/**
 * Returns `true` if a drag operation is successful. Alternative to [method Viewport.gui_is_drag_successful].
 *
 * Best used with [constant Node.NOTIFICATION_DRAG_END].
 *
*/
is_drag_successful(): boolean;

/** Returns [code]true[/code] if layout is right-to-left. */
is_layout_rtl(): boolean;

/** Give up the focus. No other control will be able to receive input. */
release_focus(): void;

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

/** Resets the size to [method get_combined_minimum_size]. This is equivalent to calling [code]set_size(Vector2())[/code] (or any size below the minimum). */
reset_size(): void;

/**
 * Sets the anchor for the specified [enum Side] to [param anchor]. A setter method for [member anchor_bottom], [member anchor_left], [member anchor_right] and [member anchor_top].
 *
 * If [param keep_offset] is `true`, offsets aren't updated after this operation.
 *
 * If [param push_opposite_anchor] is `true` and the opposite anchor overlaps this anchor, the opposite one will have its value overridden. For example, when setting left anchor to 1 and the right anchor has value of 0.5, the right anchor will also get value of 1. If [param push_opposite_anchor] was `false`, the left anchor would get value 0.5.
 *
*/
set_anchor(): void;

/** Works the same as [method set_anchor], but instead of [code]keep_offset[/code] argument and automatic update of offset, it allows to set the offset yourself (see [method set_offset]). */
set_anchor_and_offset(): void;

/** Sets both anchor preset and offset preset. See [method set_anchors_preset] and [method set_offsets_preset]. */
set_anchors_and_offsets_preset(): void;

/**
 * Sets the anchors to a [param preset] from [enum Control.LayoutPreset] enum. This is the code equivalent to using the Layout menu in the 2D editor.
 *
 * If [param keep_offsets] is `true`, control's position will also be updated.
 *
*/
set_anchors_preset(): void;

/** Sets [member offset_left] and [member offset_top] at the same time. Equivalent of changing [member position]. */
set_begin(): void;

/**
 * Forwards the handling of this control's [method _get_drag_data],  [method _can_drop_data] and [method _drop_data] virtual functions to delegate callables.
 *
 * For each argument, if not empty, the delegate callable is used, otherwise the local (virtual) function is used.
 *
 * The function format for each callable should be exactly the same as the virtual functions described above.
 *
*/
set_drag_forwarding(): void;

/**
 * Shows the given control at the mouse pointer. A good time to call this method is in [method _get_drag_data]. The control must not be in the scene tree. You should not free the control, and you should not keep a reference to the control beyond the duration of the drag. It will be deleted automatically after the drag has ended.
 *
 * @example 
 * 
 * 
 * @export var color = Color(1, 0, 0, 1)
 * func _get_drag_data(position):
 *     # Use a control that is not in the tree
 *     var cpb = ColorPickerButton.new()
 *     cpb.color = color
 *     cpb.size = Vector2(50, 50)
 *     set_drag_preview(cpb)
 *     return color
 * 
 * 
 * [Export]
 * private Color _color = new Color(1, 0, 0, 1);
 * public override Variant _GetDragData(Vector2 atPosition)
 * {
 *     // Use a control that is not in the tree
 *     var cpb = new ColorPickerButton();
 *     cpb.Color = _color;
 *     cpb.Size = new Vector2(50, 50);
 *     SetDragPreview(cpb);
 *     return _color;
 * }
 * 
 * @summary 
 * 
 *
*/
set_drag_preview(): void;

/** Sets [member offset_right] and [member offset_bottom] at the same time. */
set_end(): void;

/** Sets the focus neighbor for the specified [enum Side] to the [Control] at [param neighbor] node path. A setter method for [member focus_neighbor_bottom], [member focus_neighbor_left], [member focus_neighbor_right] and [member focus_neighbor_top]. */
set_focus_neighbor(): void;

/**
 * Sets the [member global_position] to given [param position].
 *
 * If [param keep_offsets] is `true`, control's anchors will be updated instead of offsets.
 *
*/
set_global_position(): void;

/** Sets the offset for the specified [enum Side] to [param offset]. A setter method for [member offset_bottom], [member offset_left], [member offset_right] and [member offset_top]. */
set_offset(): void;

/**
 * Sets the offsets to a [param preset] from [enum Control.LayoutPreset] enum. This is the code equivalent to using the Layout menu in the 2D editor.
 *
 * Use parameter [param resize_mode] with constants from [enum Control.LayoutPresetMode] to better determine the resulting size of the [Control]. Constant size will be ignored if used with presets that change size, e.g. [constant PRESET_LEFT_WIDE].
 *
 * Use parameter [param margin] to determine the gap between the [Control] and the edges.
 *
*/
set_offsets_preset(): void;

/**
 * Sets the [member position] to given [param position].
 *
 * If [param keep_offsets] is `true`, control's anchors will be updated instead of offsets.
 *
*/
set_position(): void;

/**
 * Sets the size (see [member size]).
 *
 * If [param keep_offsets] is `true`, control's anchors will be updated instead of offsets.
 *
*/
set_size(): void;

/** Invalidates the size cache in this node and in parent nodes up to top level. Intended to be used with [method get_minimum_size] when the return value is changed. Setting [member custom_minimum_size] directly calls this method automatically. */
update_minimum_size(): void;

/**
 * Moves the mouse cursor to [param position], relative to [member position] of this [Control].
 *
 * **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.
 *
*/
warp_mouse(): void;

  connect<T extends SignalsOf<Control>>(signal: T, method: SignalFunction<Control[T]>): number;



/**
 * The node cannot grab focus. Use with [member focus_mode].
 *
*/
static FOCUS_NONE: any;

/**
 * The node can only grab focus on mouse clicks. Use with [member focus_mode].
 *
*/
static FOCUS_CLICK: any;

/**
 * The node can grab focus on mouse click, using the arrows and the Tab keys on the keyboard, or using the D-pad buttons on a gamepad. Use with [member focus_mode].
 *
*/
static FOCUS_ALL: any;

/**
 * Sent when the node changes size. Use [member size] to get the new size.
 *
*/
static NOTIFICATION_RESIZED: any;

/**
 * Sent when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.
 *
 * **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.
 *
 * See also [constant NOTIFICATION_MOUSE_ENTER_SELF].
 *
*/
static NOTIFICATION_MOUSE_ENTER: any;

/**
 * Sent when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.
 *
 * **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.
 *
 * See also [constant NOTIFICATION_MOUSE_EXIT_SELF].
 *
*/
static NOTIFICATION_MOUSE_EXIT: any;

/**
 * Sent when the mouse cursor enters the control's visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.
 *
 * **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.
 *
 * See also [constant NOTIFICATION_MOUSE_ENTER].
 *
*/
static NOTIFICATION_MOUSE_ENTER_SELF: any;

/**
 * Sent when the mouse cursor leaves the control's visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.
 *
 * **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.
 *
 * See also [constant NOTIFICATION_MOUSE_EXIT].
 *
*/
static NOTIFICATION_MOUSE_EXIT_SELF: any;

/**
 * Sent when the node grabs focus.
 *
*/
static NOTIFICATION_FOCUS_ENTER: any;

/**
 * Sent when the node loses focus.
 *
*/
static NOTIFICATION_FOCUS_EXIT: any;

/**
 * Sent when the node needs to refresh its theme items. This happens in one of the following cases:
 *
 * - The [member theme] property is changed on this node or any of its ancestors.
 *
 * - The [member theme_type_variation] property is changed on this node.
 *
 * - One of the node's theme property overrides is changed.
 *
 * - The node enters the scene tree.
 *
 * **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.
 *
*/
static NOTIFICATION_THEME_CHANGED: any;

/**
 * Sent when this node is inside a [ScrollContainer] which has begun being scrolled when dragging the scrollable area **with a touch event**. This notification is **not** sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.
 *
 * **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.
 *
*/
static NOTIFICATION_SCROLL_BEGIN: any;

/**
 * Sent when this node is inside a [ScrollContainer] which has stopped being scrolled when dragging the scrollable area **with a touch event**. This notification is **not** sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.
 *
 * **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.
 *
*/
static NOTIFICATION_SCROLL_END: any;

/**
 * Sent when control layout direction is changed.
 *
*/
static NOTIFICATION_LAYOUT_DIRECTION_CHANGED: any;

/**
 * Show the system's arrow mouse cursor when the user hovers the node. Use with [member mouse_default_cursor_shape].
 *
*/
static CURSOR_ARROW: any;

/**
 * Show the system's I-beam mouse cursor when the user hovers the node. The I-beam pointer has a shape similar to "I". It tells the user they can highlight or insert text.
 *
*/
static CURSOR_IBEAM: any;

/**
 * Show the system's pointing hand mouse cursor when the user hovers the node.
 *
*/
static CURSOR_POINTING_HAND: any;

/**
 * Show the system's cross mouse cursor when the user hovers the node.
 *
*/
static CURSOR_CROSS: any;

/**
 * Show the system's wait mouse cursor when the user hovers the node. Often an hourglass.
 *
*/
static CURSOR_WAIT: any;

/**
 * Show the system's busy mouse cursor when the user hovers the node. Often an arrow with a small hourglass.
 *
*/
static CURSOR_BUSY: any;

/**
 * Show the system's drag mouse cursor, often a closed fist or a cross symbol, when the user hovers the node. It tells the user they're currently dragging an item, like a node in the Scene dock.
 *
*/
static CURSOR_DRAG: any;

/**
 * Show the system's drop mouse cursor when the user hovers the node. It can be an open hand. It tells the user they can drop an item they're currently grabbing, like a node in the Scene dock.
 *
*/
static CURSOR_CAN_DROP: any;

/**
 * Show the system's forbidden mouse cursor when the user hovers the node. Often a crossed circle.
 *
*/
static CURSOR_FORBIDDEN: any;

/**
 * Show the system's vertical resize mouse cursor when the user hovers the node. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically.
 *
*/
static CURSOR_VSIZE: any;

/**
 * Show the system's horizontal resize mouse cursor when the user hovers the node. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally.
 *
*/
static CURSOR_HSIZE: any;

/**
 * Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically.
 *
*/
static CURSOR_BDIAGSIZE: any;

/**
 * Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of [constant CURSOR_BDIAGSIZE]. It tells the user they can resize the window or the panel both horizontally and vertically.
 *
*/
static CURSOR_FDIAGSIZE: any;

/**
 * Show the system's move mouse cursor when the user hovers the node. It shows 2 double-headed arrows at a 90 degree angle. It tells the user they can move a UI element freely.
 *
*/
static CURSOR_MOVE: any;

/**
 * Show the system's vertical split mouse cursor when the user hovers the node. On Windows, it's the same as [constant CURSOR_VSIZE].
 *
*/
static CURSOR_VSPLIT: any;

/**
 * Show the system's horizontal split mouse cursor when the user hovers the node. On Windows, it's the same as [constant CURSOR_HSIZE].
 *
*/
static CURSOR_HSPLIT: any;

/**
 * Show the system's help mouse cursor when the user hovers the node, a question mark.
 *
*/
static CURSOR_HELP: any;

/**
 * Snap all 4 anchors to the top-left of the parent control's bounds. Use with [method set_anchors_preset].
 *
*/
static PRESET_TOP_LEFT: any;

/**
 * Snap all 4 anchors to the top-right of the parent control's bounds. Use with [method set_anchors_preset].
 *
*/
static PRESET_TOP_RIGHT: any;

/**
 * Snap all 4 anchors to the bottom-left of the parent control's bounds. Use with [method set_anchors_preset].
 *
*/
static PRESET_BOTTOM_LEFT: any;

/**
 * Snap all 4 anchors to the bottom-right of the parent control's bounds. Use with [method set_anchors_preset].
 *
*/
static PRESET_BOTTOM_RIGHT: any;

/**
 * Snap all 4 anchors to the center of the left edge of the parent control's bounds. Use with [method set_anchors_preset].
 *
*/
static PRESET_CENTER_LEFT: any;

/**
 * Snap all 4 anchors to the center of the top edge of the parent control's bounds. Use with [method set_anchors_preset].
 *
*/
static PRESET_CENTER_TOP: any;

/**
 * Snap all 4 anchors to the center of the right edge of the parent control's bounds. Use with [method set_anchors_preset].
 *
*/
static PRESET_CENTER_RIGHT: any;

/**
 * Snap all 4 anchors to the center of the bottom edge of the parent control's bounds. Use with [method set_anchors_preset].
 *
*/
static PRESET_CENTER_BOTTOM: any;

/**
 * Snap all 4 anchors to the center of the parent control's bounds. Use with [method set_anchors_preset].
 *
*/
static PRESET_CENTER: any;

/**
 * Snap all 4 anchors to the left edge of the parent control. The left offset becomes relative to the left edge and the top offset relative to the top left corner of the node's parent. Use with [method set_anchors_preset].
 *
*/
static PRESET_LEFT_WIDE: any;

/**
 * Snap all 4 anchors to the top edge of the parent control. The left offset becomes relative to the top left corner, the top offset relative to the top edge, and the right offset relative to the top right corner of the node's parent. Use with [method set_anchors_preset].
 *
*/
static PRESET_TOP_WIDE: any;

/**
 * Snap all 4 anchors to the right edge of the parent control. The right offset becomes relative to the right edge and the top offset relative to the top right corner of the node's parent. Use with [method set_anchors_preset].
 *
*/
static PRESET_RIGHT_WIDE: any;

/**
 * Snap all 4 anchors to the bottom edge of the parent control. The left offset becomes relative to the bottom left corner, the bottom offset relative to the bottom edge, and the right offset relative to the bottom right corner of the node's parent. Use with [method set_anchors_preset].
 *
*/
static PRESET_BOTTOM_WIDE: any;

/**
 * Snap all 4 anchors to a vertical line that cuts the parent control in half. Use with [method set_anchors_preset].
 *
*/
static PRESET_VCENTER_WIDE: any;

/**
 * Snap all 4 anchors to a horizontal line that cuts the parent control in half. Use with [method set_anchors_preset].
 *
*/
static PRESET_HCENTER_WIDE: any;

/**
 * Snap all 4 anchors to the respective corners of the parent control. Set all 4 offsets to 0 after you applied this preset and the [Control] will fit its parent control. Use with [method set_anchors_preset].
 *
*/
static PRESET_FULL_RECT: any;

/**
 * The control will be resized to its minimum size.
 *
*/
static PRESET_MODE_MINSIZE: any;

/**
 * The control's width will not change.
 *
*/
static PRESET_MODE_KEEP_WIDTH: any;

/**
 * The control's height will not change.
 *
*/
static PRESET_MODE_KEEP_HEIGHT: any;

/**
 * The control's size will not change.
 *
*/
static PRESET_MODE_KEEP_SIZE: any;

/**
 * Tells the parent [Container] to align the node with its start, either the top or the left edge. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical].
 *
 * **Note:** Setting this flag is equal to not having any size flags.
 *
*/
static SIZE_SHRINK_BEGIN: any;

/**
 * Tells the parent [Container] to expand the bounds of this node to fill all the available space without pushing any other node. It is mutually exclusive with shrink size flags. Use with [member size_flags_horizontal] and [member size_flags_vertical].
 *
*/
static SIZE_FILL: any;

/**
 * Tells the parent [Container] to let this node take all the available space on the axis you flag. If multiple neighboring nodes are set to expand, they'll share the space based on their stretch ratio. See [member size_flags_stretch_ratio]. Use with [member size_flags_horizontal] and [member size_flags_vertical].
 *
*/
static SIZE_EXPAND: any;

/**
 * Sets the node's size flags to both fill and expand. See [constant SIZE_FILL] and [constant SIZE_EXPAND] for more information.
 *
*/
static SIZE_EXPAND_FILL: any;

/**
 * Tells the parent [Container] to center the node in the available space. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical].
 *
*/
static SIZE_SHRINK_CENTER: any;

/**
 * Tells the parent [Container] to align the node with its end, either the bottom or the right edge. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical].
 *
*/
static SIZE_SHRINK_END: any;

/**
 * The control will receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. And the control will receive the [signal mouse_entered] and [signal mouse_exited] signals. These events are automatically marked as handled, and they will not propagate further to other controls. This also results in blocking signals in other controls.
 *
*/
static MOUSE_FILTER_STOP: any;

/**
 * The control will receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. And the control will receive the [signal mouse_entered] and [signal mouse_exited] signals. If this control does not handle the event, the parent control (if any) will be considered, and so on until there is no more parent control to potentially handle it. This also allows signals to fire in other controls. If no control handled it, the event will be passed to [method Node._shortcut_input] for further processing.
 *
*/
static MOUSE_FILTER_PASS: any;

/**
 * The control will not receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. The control will also not receive the [signal mouse_entered] nor [signal mouse_exited] signals. This will not block other controls from receiving these events or firing the signals. Ignored events will not be handled automatically.
 *
 * **Note:** If the control has received [signal mouse_entered] but not [signal mouse_exited], changing the [member mouse_filter] to [constant MOUSE_FILTER_IGNORE] will cause [signal mouse_exited] to be emitted.
 *
*/
static MOUSE_FILTER_IGNORE: any;

/**
 * The control will grow to the left or top to make up if its minimum size is changed to be greater than its current size on the respective axis.
 *
*/
static GROW_DIRECTION_BEGIN: any;

/**
 * The control will grow to the right or bottom to make up if its minimum size is changed to be greater than its current size on the respective axis.
 *
*/
static GROW_DIRECTION_END: any;

/**
 * The control will grow in both directions equally to make up if its minimum size is changed to be greater than its current size.
 *
*/
static GROW_DIRECTION_BOTH: any;

/**
 * Snaps one of the 4 anchor's sides to the origin of the node's `Rect`, in the top left. Use it with one of the `anchor_*` member variables, like [member anchor_left]. To change all 4 anchors at once, use [method set_anchors_preset].
 *
*/
static ANCHOR_BEGIN: any;

/**
 * Snaps one of the 4 anchor's sides to the end of the node's `Rect`, in the bottom right. Use it with one of the `anchor_*` member variables, like [member anchor_left]. To change all 4 anchors at once, use [method set_anchors_preset].
 *
*/
static ANCHOR_END: any;

/**
 * Automatic layout direction, determined from the parent control layout direction.
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
 * Text writing direction is the same as layout direction.
 *
*/
static TEXT_DIRECTION_INHERITED: any;

/**
 * Automatic text writing direction, determined from the current locale and text content.
 *
*/
static TEXT_DIRECTION_AUTO: any;

/**
 * Left-to-right text writing direction.
 *
*/
static TEXT_DIRECTION_LTR: any;

/**
 * Right-to-left text writing direction.
 *
*/
static TEXT_DIRECTION_RTL: any;


/**
 * Emitted when the node gains focus.
 *
*/
$focus_entered: Signal<() => void>

/**
 * Emitted when the node loses focus.
 *
*/
$focus_exited: Signal<() => void>

/**
 * Emitted when the node receives an [InputEvent].
 *
*/
$gui_input: Signal<() => void>

/**
 * Emitted when the node's minimum size changes.
 *
*/
$minimum_size_changed: Signal<() => void>

/**
 * Emitted when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.
 *
 * **Note:** [member CanvasItem.z_index] doesn't affect, which Control receives the signal.
 *
*/
$mouse_entered: Signal<() => void>

/**
 * Emitted when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.
 *
 * **Note:** [member CanvasItem.z_index] doesn't affect, which Control receives the signal.
 *
 * **Note:** If you want to check whether the mouse truly left the area, ignoring any top nodes, you can use code like this:
 *
 * @example 
 * 
 * func _on_mouse_exited():
 *     if not Rect2(Vector2(), size).has_point(get_local_mouse_position()):
 *         # Not hovering over area.
 * @summary 
 * 
 *
*/
$mouse_exited: Signal<() => void>

/**
 * Emitted when the control changes size.
 *
*/
$resized: Signal<() => void>

/**
 * Emitted when one of the size flags changes. See [member size_flags_horizontal] and [member size_flags_vertical].
 *
*/
$size_flags_changed: Signal<() => void>

/**
 * Emitted when the [constant NOTIFICATION_THEME_CHANGED] notification is sent.
 *
*/
$theme_changed: Signal<() => void>

}

