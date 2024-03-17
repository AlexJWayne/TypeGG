
/**
 * [EditorNode3DGizmoPlugin] allows you to define a new type of Gizmo. There are two main ways to do so: extending [EditorNode3DGizmoPlugin] for the simpler gizmos, or creating a new [EditorNode3DGizmo] type. See the tutorial in the documentation for more info.
 *
 * To use [EditorNode3DGizmoPlugin], register it using the [method EditorPlugin.add_node_3d_gizmo_plugin] method first.
 *
*/
declare class EditorNode3DGizmoPlugin extends Resource  {

  
/**
 * [EditorNode3DGizmoPlugin] allows you to define a new type of Gizmo. There are two main ways to do so: extending [EditorNode3DGizmoPlugin] for the simpler gizmos, or creating a new [EditorNode3DGizmo] type. See the tutorial in the documentation for more info.
 *
 * To use [EditorNode3DGizmoPlugin], register it using the [method EditorPlugin.add_node_3d_gizmo_plugin] method first.
 *
*/
  new(): EditorNode3DGizmoPlugin; 
  static "new"(): EditorNode3DGizmoPlugin 



/** Override this method to define whether the gizmos handled by this plugin can be hidden or not. Returns [code]true[/code] if not overridden. */
protected _can_be_hidden(): boolean;

/**
 * Override this method to commit a handle being edited (handles must have been previously added by [method EditorNode3DGizmo.add_handles] during [method _redraw]). This usually means creating an [UndoRedo] action for the change, using the current handle value as "do" and the [param restore] argument as "undo".
 *
 * If the [param cancel] argument is `true`, the [param restore] value should be directly set, without any [UndoRedo] action.
 *
 * The [param secondary] argument is `true` when the committed handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).
 *
 * Called for this plugin's active gizmos.
 *
*/
protected _commit_handle(): void;

/**
 * Override this method to commit a group of subgizmos being edited (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). This usually means creating an [UndoRedo] action for the change, using the current transforms as "do" and the [param restores] transforms as "undo".
 *
 * If the [param cancel] argument is `true`, the [param restores] transforms should be directly set, without any [UndoRedo] action. As with all subgizmo methods, transforms are given in local space respect to the gizmo's Node3D. Called for this plugin's active gizmos.
 *
*/
protected _commit_subgizmos(): void;

/** Override this method to return a custom [EditorNode3DGizmo] for the spatial nodes of your choice, return [code]null[/code] for the rest of nodes. See also [method _has_gizmo]. */
protected _create_gizmo(): EditorNode3DGizmo;

/** Override this method to provide the name that will appear in the gizmo visibility menu. */
protected _get_gizmo_name(): string;

/** Override this method to provide gizmo's handle names. The [param secondary] argument is [code]true[/code] when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information). Called for this plugin's active gizmos. */
protected _get_handle_name(): string;

/**
 * Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [method _commit_handle].
 *
 * The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).
 *
 * Called for this plugin's active gizmos.
 *
*/
protected _get_handle_value(): any;

/**
 * Override this method to set the gizmo's priority. Gizmos with higher priority will have precedence when processing inputs like handles or subgizmos selection.
 *
 * All built-in editor gizmos return a priority of `-1`. If not overridden, this method will return `0`, which means custom gizmos will automatically get higher priority than built-in gizmos.
 *
*/
protected _get_priority(): int;

/** Override this method to return the current transform of a subgizmo. As with all subgizmo methods, the transform should be in local space respect to the gizmo's Node3D. This transform will be requested at the start of an edit and used in the [code]restore[/code] argument in [method _commit_subgizmos]. Called for this plugin's active gizmos. */
protected _get_subgizmo_transform(): Transform3D;

/** Override this method to define which Node3D nodes have a gizmo from this plugin. Whenever a [Node3D] node is added to a scene this method is called, if it returns [code]true[/code] the node gets a generic [EditorNode3DGizmo] assigned and is added to this plugin's list of active gizmos. */
protected _has_gizmo(): boolean;

/** Override this method to return [code]true[/code] whenever to given handle should be highlighted in the editor. The [param secondary] argument is [code]true[/code] when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information). Called for this plugin's active gizmos. */
protected _is_handle_highlighted(): boolean;

/** Override this method to define whether Node3D with this gizmo should be selectable even when the gizmo is hidden. */
protected _is_selectable_when_hidden(): boolean;

/** Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [method EditorNode3DGizmo.clear] at the beginning of this method and then add visual elements depending on the node's properties. */
protected _redraw(): void;

/**
 * Override this method to update the node's properties when the user drags a gizmo handle (previously added with [method EditorNode3DGizmo.add_handles]). The provided [param screen_pos] is the mouse position in screen coordinates and the [param camera] can be used to convert it to raycasts.
 *
 * The [param secondary] argument is `true` when the edited handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).
 *
 * Called for this plugin's active gizmos.
 *
*/
protected _set_handle(): void;

/** Override this method to update the node properties during subgizmo editing (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). The [param transform] is given in the Node3D's local coordinate system. Called for this plugin's active gizmos. */
protected _set_subgizmo_transform(): void;

/** Override this method to allow selecting subgizmos using mouse drag box selection. Given a [param camera] and [param frustum_planes], this method should return which subgizmos are contained within the frustums. The [param frustum_planes] argument consists of an array with all the [Plane]s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, these identifiers can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. Called for this plugin's active gizmos. */
protected _subgizmos_intersect_frustum(): PackedInt32Array;

/** Override this method to allow selecting subgizmos using mouse clicks. Given a [param camera] and a [param screen_pos] in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. Called for this plugin's active gizmos. */
protected _subgizmos_intersect_ray(): int;

/** Adds a new material to the internal material list for the plugin. It can then be accessed with [method get_material]. Should not be overridden. */
add_material(): void;

/**
 * Creates a handle material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_handles]. Should not be overridden.
 *
 * You can optionally provide a texture to use instead of the default icon.
 *
*/
create_handle_material(): void;

/** Creates an icon material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_unscaled_billboard]. Should not be overridden. */
create_icon_material(): void;

/** Creates an unshaded material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_mesh] and [method EditorNode3DGizmo.add_lines]. Should not be overridden. */
create_material(): void;

/** Gets material from the internal list of materials. If an [EditorNode3DGizmo] is provided, it will try to get the corresponding variant (selected and/or editable). */
get_material(): StandardMaterial3D;

  connect<T extends SignalsOf<EditorNode3DGizmoPlugin>>(signal: T, method: SignalFunction<EditorNode3DGizmoPlugin[T]>): number;






}

