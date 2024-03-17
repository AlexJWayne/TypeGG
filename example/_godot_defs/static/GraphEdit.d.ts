
/**
 * [GraphEdit] provides tools for creation, manipulation, and display of various graphs. Its main purpose in the engine is to power the visual programming systems, such as visual shaders, but it is also available for use in user projects.
 *
 * [GraphEdit] by itself is only an empty container, representing an infinite grid where [GraphNode]s can be placed. Each [GraphNode] represents a node in the graph, a single unit of data in the connected scheme. [GraphEdit], in turn, helps to control various interactions with nodes and between nodes. When the user attempts to connect, disconnect, or delete a [GraphNode], a signal is emitted in the [GraphEdit], but no action is taken by default. It is the responsibility of the programmer utilizing this control to implement the necessary logic to determine how each request should be handled.
 *
 * **Performance:** It is greatly advised to enable low-processor usage mode (see [member OS.low_processor_usage_mode]) when using GraphEdits.
 *
*/
declare class GraphEdit extends Control  {

  
/**
 * [GraphEdit] provides tools for creation, manipulation, and display of various graphs. Its main purpose in the engine is to power the visual programming systems, such as visual shaders, but it is also available for use in user projects.
 *
 * [GraphEdit] by itself is only an empty container, representing an infinite grid where [GraphNode]s can be placed. Each [GraphNode] represents a node in the graph, a single unit of data in the connected scheme. [GraphEdit], in turn, helps to control various interactions with nodes and between nodes. When the user attempts to connect, disconnect, or delete a [GraphNode], a signal is emitted in the [GraphEdit], but no action is taken by default. It is the responsibility of the programmer utilizing this control to implement the necessary logic to determine how each request should be handled.
 *
 * **Performance:** It is greatly advised to enable low-processor usage mode (see [member OS.low_processor_usage_mode]) when using GraphEdits.
 *
*/
  new(): GraphEdit; 
  static "new"(): GraphEdit 



/** If [code]true[/code], the lines between nodes will use antialiasing. */
connection_lines_antialiased: boolean;

/** The curvature of the lines between the nodes. 0 results in straight lines. */
connection_lines_curvature: float;

/** The thickness of the lines between the nodes. */
connection_lines_thickness: float;


/** If [code]true[/code], the minimap is visible. */
minimap_enabled: boolean;

/** The opacity of the minimap rectangle. */
minimap_opacity: float;

/** The size of the minimap rectangle. The map itself is based on the size of the grid area and is scaled to fit this rectangle. */
minimap_size: Vector2;

/** Defines the control scheme for panning with mouse wheel. */
panning_scheme: int;

/** If [code]true[/code], enables disconnection of existing connections in the GraphEdit by dragging the right end. */
right_disconnects: boolean;

/** The scroll offset. */
scroll_offset: Vector2;

/** If [code]true[/code], the button to automatically arrange graph nodes is visible. */
show_arrange_button: boolean;

/** If [code]true[/code], the grid is visible. */
show_grid: boolean;

/** If [code]true[/code], buttons that allow to configure grid and snapping options are visible. */
show_grid_buttons: boolean;

/** If [code]true[/code], the menu toolbar is visible. */
show_menu: boolean;

/** If [code]true[/code], the button to toggle the minimap is visible. */
show_minimap_button: boolean;

/** If [code]true[/code], buttons that allow to change and reset the zoom level are visible. */
show_zoom_buttons: boolean;

/** If [code]true[/code], the label with the current zoom level is visible. The zoom level is displayed in percents. */
show_zoom_label: boolean;

/** The snapping distance in pixels, also determines the grid line distance. */
snapping_distance: int;

/** If [code]true[/code], enables snapping. */
snapping_enabled: boolean;

/** The current zoom value. */
zoom: float;

/** The upper zoom limit. */
zoom_max: float;

/** The lower zoom limit. */
zoom_min: float;

/** The step of each zoom level. */
zoom_step: float;

/** Virtual method which can be overridden to customize how connections are drawn. */
protected _get_connection_line(): PackedVector2Array;

/**
 * Returns whether the [param mouse_position] is in the input hot zone.
 *
 * By default, a hot zone is a [Rect2] positioned such that its center is at [param in_node].[method GraphNode.get_input_port_position]([param in_port]) (For output's case, call [method GraphNode.get_output_port_position] instead). The hot zone's width is twice the Theme Property `port_grab_distance_horizontal`, and its height is twice the `port_grab_distance_vertical`.
 *
 * Below is a sample code to help get started:
 *
 * @example 
 * 
 * func _is_in_input_hotzone(in_node, in_port, mouse_position):
 *     var port_size: Vector2 = Vector2(get_theme_constant("port_grab_distance_horizontal"), get_theme_constant("port_grab_distance_vertical"))
 *     var port_pos: Vector2 = in_node.get_position() + in_node.get_input_port_position(in_port) - port_size / 2
 *     var rect = Rect2(port_pos, port_size)
 *     return rect.has_point(mouse_position)
 * @summary 
 * 
 *
*/
protected _is_in_input_hotzone(): boolean;

/**
 * Returns whether the [param mouse_position] is in the output hot zone. For more information on hot zones, see [method _is_in_input_hotzone].
 *
 * Below is a sample code to help get started:
 *
 * @example 
 * 
 * func _is_in_output_hotzone(in_node, in_port, mouse_position):
 *     var port_size: Vector2 = Vector2(get_theme_constant("port_grab_distance_horizontal"), get_theme_constant("port_grab_distance_vertical"))
 *     var port_pos: Vector2 = in_node.get_position() + in_node.get_output_port_position(in_port) - port_size / 2
 *     var rect = Rect2(port_pos, port_size)
 *     return rect.has_point(mouse_position)
 * @summary 
 * 
 *
*/
protected _is_in_output_hotzone(): boolean;

/**
 * This virtual method can be used to insert additional error detection while the user is dragging a connection over a valid port.
 *
 * Return `true` if the connection is indeed valid or return `false` if the connection is impossible. If the connection is impossible, no snapping to the port and thus no connection request to that port will happen.
 *
 * In this example a connection to same node is suppressed:
 *
 * @example 
 * 
 * 
 * func _is_node_hover_valid(from, from_port, to, to_port):
 *     return from != to
 * 
 * 
 * public override bool _IsNodeHoverValid(StringName fromNode, int fromPort, StringName toNode, int toPort)
 * {
 *     return fromNode != toNode;
 * }
 * 
 * @summary 
 * 
 *
*/
protected _is_node_hover_valid(): boolean;

/**
 * Allows the connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.
 *
 * See also [method is_valid_connection_type] and [method remove_valid_connection_type].
 *
*/
add_valid_connection_type(): void;

/** Allows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_left_disconnect_type]. */
add_valid_left_disconnect_type(): void;

/** Allows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_right_disconnect_type]. */
add_valid_right_disconnect_type(): void;

/** Rearranges selected nodes in a layout with minimum crossings between connections and uniform horizontal and vertical gap between nodes. */
arrange_nodes(): void;

/** Removes all connections between nodes. */
clear_connections(): void;

/** Create a connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection already exists, no connection is created. */
connect_node(): int;

/** Removes the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection does not exist, no connection is removed. */
disconnect_node(): void;

/**
 * Ends the creation of the current connection. In other words, if you are dragging a connection you can use this method to abort the process and remove the line that followed your cursor.
 *
 * This is best used together with [signal connection_drag_started] and [signal connection_drag_ended] to add custom behavior like node addition through shortcuts.
 *
 * **Note:** This method suppresses any other connection request signals apart from [signal connection_drag_ended].
 *
*/
force_connection_drag_end(): void;

/** Returns the points which would make up a connection between [param from_node] and [param to_node]. */
get_connection_line(): PackedVector2Array;

/** Returns an Array containing the list of connections. A connection consists in a structure of the form [code]{ from_port: 0, from: "GraphNode name 0", to_port: 1, to: "GraphNode name 1" }[/code]. */
get_connection_list(): Dictionary[];

/**
 * Gets the [HBoxContainer] that contains the zooming and grid snap controls in the top left of the graph. You can use this method to reposition the toolbar or to add your own custom controls to it.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_menu_hbox(): HBoxContainer;

/** Returns [code]true[/code] if the [param from_port] of the [param from_node] [GraphNode] is connected to the [param to_port] of the [param to_node] [GraphNode]. */
is_node_connected(): boolean;

/**
 * Returns whether it's possible to make a connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.
 *
 * See also [method add_valid_connection_type] and [method remove_valid_connection_type].
 *
*/
is_valid_connection_type(): boolean;

/**
 * Disallows the connection between two different port types previously allowed by [method add_valid_connection_type]. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.
 *
 * See also [method is_valid_connection_type].
 *
*/
remove_valid_connection_type(): void;

/** Disallows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_left_disconnect_type]. */
remove_valid_left_disconnect_type(): void;

/** Disallows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_right_disconnect_type]. */
remove_valid_right_disconnect_type(): void;

/** Sets the coloration of the connection between [param from_node]'s [param from_port] and [param to_node]'s [param to_port] with the color provided in the [theme_item activity] theme property. The color is linearly interpolated between the connection color and the activity color using [param amount] as weight. */
set_connection_activity(): void;

/** Sets the specified [param node] as the one selected. */
set_selected(): void;

  connect<T extends SignalsOf<GraphEdit>>(signal: T, method: SignalFunction<GraphEdit[T]>): number;



/**
 * [kbd]Mouse Wheel[/kbd] will zoom, [kbd]Ctrl + Mouse Wheel[/kbd] will move the view.
 *
*/
static SCROLL_ZOOMS: any;

/**
 * [kbd]Mouse Wheel[/kbd] will move the view, [kbd]Ctrl + Mouse Wheel[/kbd] will zoom.
 *
*/
static SCROLL_PANS: any;


/**
 * Emitted at the beginning of a GraphNode movement.
 *
*/
$begin_node_move: Signal<() => void>

/**
 * Emitted at the end of a connection drag.
 *
*/
$connection_drag_ended: Signal<() => void>

/**
 * Emitted at the beginning of a connection drag.
 *
*/
$connection_drag_started: Signal<() => void>

/**
 * Emitted when user drags a connection from an input port into the empty space of the graph.
 *
*/
$connection_from_empty: Signal<() => void>

/**
 * Emitted to the GraphEdit when the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode] is attempted to be created.
 *
*/
$connection_request: Signal<() => void>

/**
 * Emitted when user drags a connection from an output port into the empty space of the graph.
 *
*/
$connection_to_empty: Signal<() => void>

/**
 * Emitted when the user presses [kbd]Ctrl + C[/kbd].
 *
*/
$copy_nodes_request: Signal<() => void>

/**
 * Emitted when attempting to remove a GraphNode from the GraphEdit. Provides a list of node names to be removed (all selected nodes, excluding nodes without closing button).
 *
*/
$delete_nodes_request: Signal<() => void>

/**
 * Emitted to the GraphEdit when the connection between [param from_port] of [param from_node] [GraphNode] and [param to_port] of [param to_node] [GraphNode] is attempted to be removed.
 *
*/
$disconnection_request: Signal<() => void>

/**
 * Emitted when a GraphNode is attempted to be duplicated in the GraphEdit.
 *
*/
$duplicate_nodes_request: Signal<() => void>

/**
 * Emitted at the end of a GraphNode movement.
 *
*/
$end_node_move: Signal<() => void>

/**
*/
$node_deselected: Signal<() => void>

/**
 * Emitted when a GraphNode is selected.
 *
*/
$node_selected: Signal<() => void>

/**
 * Emitted when the user presses [kbd]Ctrl + V[/kbd].
 *
*/
$paste_nodes_request: Signal<() => void>

/**
 * Emitted when a popup is requested. Happens on right-clicking in the GraphEdit. [param position] is the position of the mouse pointer when the signal is sent.
 *
*/
$popup_request: Signal<() => void>

/**
 * Emitted when the scroll offset is changed by the user. It will not be emitted when changed in code.
 *
*/
$scroll_offset_changed: Signal<() => void>

}

