
/**
 * Gizmo that is used for providing custom visualization and editing (handles and subgizmos) for [Node3D] objects. Can be overridden to create custom gizmos, but for simple gizmos creating a [EditorNode3DGizmoPlugin] is usually recommended.
 *
*/
declare class EditorNode3DGizmo extends Node3DGizmo  {

  
/**
 * Gizmo that is used for providing custom visualization and editing (handles and subgizmos) for [Node3D] objects. Can be overridden to create custom gizmos, but for simple gizmos creating a [EditorNode3DGizmoPlugin] is usually recommended.
 *
*/
  new(): EditorNode3DGizmo; 
  static "new"(): EditorNode3DGizmo 



/**
 * Override this method to commit a handle being edited (handles must have been previously added by [method add_handles]). This usually means creating an [UndoRedo] action for the change, using the current handle value as "do" and the [param restore] argument as "undo".
 *
 * If the [param cancel] argument is `true`, the [param restore] value should be directly set, without any [UndoRedo] action.
 *
 * The [param secondary] argument is `true` when the committed handle is secondary (see [method add_handles] for more information).
 *
*/
protected _commit_handle(): void;

/**
 * Override this method to commit a group of subgizmos being edited (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). This usually means creating an [UndoRedo] action for the change, using the current transforms as "do" and the [param restores] transforms as "undo".
 *
 * If the [param cancel] argument is `true`, the [param restores] transforms should be directly set, without any [UndoRedo] action.
 *
*/
protected _commit_subgizmos(): void;

/**
 * Override this method to return the name of an edited handle (handles must have been previously added by [method add_handles]). Handles can be named for reference to the user when editing.
 *
 * The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).
 *
*/
protected _get_handle_name(): string;

/**
 * Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [method _commit_handle].
 *
 * The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).
 *
*/
protected _get_handle_value(): any;

/** Override this method to return the current transform of a subgizmo. This transform will be requested at the start of an edit and used as the [code]restore[/code] argument in [method _commit_subgizmos]. */
protected _get_subgizmo_transform(): Transform3D;

/**
 * Override this method to return `true` whenever the given handle should be highlighted in the editor.
 *
 * The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).
 *
*/
protected _is_handle_highlighted(): boolean;

/** Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [method clear] at the beginning of this method and then add visual elements depending on the node's properties. */
protected _redraw(): void;

/**
 * Override this method to update the node properties when the user drags a gizmo handle (previously added with [method add_handles]). The provided [param point] is the mouse position in screen coordinates and the [param camera] can be used to convert it to raycasts.
 *
 * The [param secondary] argument is `true` when the edited handle is secondary (see [method add_handles] for more information).
 *
*/
protected _set_handle(): void;

/** Override this method to update the node properties during subgizmo editing (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). The [param transform] is given in the [Node3D]'s local coordinate system. */
protected _set_subgizmo_transform(): void;

/** Override this method to allow selecting subgizmos using mouse drag box selection. Given a [param camera] and a [param frustum], this method should return which subgizmos are contained within the frustum. The [param frustum] argument consists of an array with all the [Plane]s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. */
protected _subgizmos_intersect_frustum(): PackedInt32Array;

/** Override this method to allow selecting subgizmos using mouse clicks. Given a [param camera] and a [param point] in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. */
protected _subgizmos_intersect_ray(): int;

/** Adds the specified [param segments] to the gizmo's collision shape for picking. Call this method during [method _redraw]. */
add_collision_segments(): void;

/** Adds collision triangles to the gizmo for picking. A [TriangleMesh] can be generated from a regular [Mesh] too. Call this method during [method _redraw]. */
add_collision_triangles(): void;

/**
 * Adds a list of handles (points) which can be used to edit the properties of the gizmo's [Node3D]. The [param ids] argument can be used to specify a custom identifier for each handle, if an empty array is passed, the ids will be assigned automatically from the [param handles] argument order.
 *
 * The [param secondary] argument marks the added handles as secondary, meaning they will normally have lower selection priority than regular handles. When the user is holding the shift key secondary handles will switch to have higher priority than regular handles. This change in priority can be used to place multiple handles at the same point while still giving the user control on their selection.
 *
 * There are virtual methods which will be called upon editing of these handles. Call this method during [method _redraw].
 *
*/
add_handles(): void;

/** Adds lines to the gizmo (as sets of 2 points), with a given material. The lines are used for visualizing the gizmo. Call this method during [method _redraw]. */
add_lines(): void;

/** Adds a mesh to the gizmo with the specified [param material], local [param transform] and [param skeleton]. Call this method during [method _redraw]. */
add_mesh(): void;

/** Adds an unscaled billboard for visualization and selection. Call this method during [method _redraw]. */
add_unscaled_billboard(): void;

/** Removes everything in the gizmo including meshes, collisions and handles. */
clear(): void;

/** Returns the [Node3D] node associated with this gizmo. */
get_node_3d(): Node3D;

/** Returns the [EditorNode3DGizmoPlugin] that owns this gizmo. It's useful to retrieve materials using [method EditorNode3DGizmoPlugin.get_material]. */
get_plugin(): EditorNode3DGizmoPlugin;

/** Returns a list of the currently selected subgizmos. Can be used to highlight selected elements during [method _redraw]. */
get_subgizmo_selection(): PackedInt32Array;

/** Returns [code]true[/code] if the given subgizmo is currently selected. Can be used to highlight selected elements during [method _redraw]. */
is_subgizmo_selected(): boolean;

/** Sets the gizmo's hidden state. If [code]true[/code], the gizmo will be hidden. If [code]false[/code], it will be shown. */
set_hidden(): void;

/** Sets the reference [Node3D] node for the gizmo. [param node] must inherit from [Node3D]. */
set_node_3d(): void;

  connect<T extends SignalsOf<EditorNode3DGizmo>>(signal: T, method: SignalFunction<EditorNode3DGizmo[T]>): number;






}

