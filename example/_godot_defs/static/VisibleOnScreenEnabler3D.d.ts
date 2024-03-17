
/**
 * [VisibleOnScreenEnabler3D] contains a box-shaped region of 3D space and a target node. The target node will be automatically enabled (via its [member Node.process_mode] property) when any part of this region becomes visible on the screen, and automatically disabled otherwise. This can for example be used to activate enemies only when the player approaches them.
 *
 * See [VisibleOnScreenNotifier3D] if you only want to be notified when the region is visible on screen.
 *
 * **Note:** [VisibleOnScreenEnabler3D] uses an approximate heuristic that doesn't take walls and other occlusion into account, unless occlusion culling is used. It also won't function unless [member Node3D.visible] is set to `true`.
 *
*/
declare class VisibleOnScreenEnabler3D extends VisibleOnScreenNotifier3D  {

  
/**
 * [VisibleOnScreenEnabler3D] contains a box-shaped region of 3D space and a target node. The target node will be automatically enabled (via its [member Node.process_mode] property) when any part of this region becomes visible on the screen, and automatically disabled otherwise. This can for example be used to activate enemies only when the player approaches them.
 *
 * See [VisibleOnScreenNotifier3D] if you only want to be notified when the region is visible on screen.
 *
 * **Note:** [VisibleOnScreenEnabler3D] uses an approximate heuristic that doesn't take walls and other occlusion into account, unless occlusion culling is used. It also won't function unless [member Node3D.visible] is set to `true`.
 *
*/
  new(): VisibleOnScreenEnabler3D; 
  static "new"(): VisibleOnScreenEnabler3D 


/** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
enable_mode: int;

/** The path to the target node, relative to the [VisibleOnScreenEnabler3D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler3D] is inside the scene tree) and every time the [VisibleOnScreenEnabler3D] enters the scene tree. If the path is invalid, an error will be printed in the editor and no node will be affected. */
enable_node_path: NodePathType;



  connect<T extends SignalsOf<VisibleOnScreenEnabler3D>>(signal: T, method: SignalFunction<VisibleOnScreenEnabler3D[T]>): number;



/**
 * Corresponds to [constant Node.PROCESS_MODE_INHERIT].
 *
*/
static ENABLE_MODE_INHERIT: any;

/**
 * Corresponds to [constant Node.PROCESS_MODE_ALWAYS].
 *
*/
static ENABLE_MODE_ALWAYS: any;

/**
 * Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED].
 *
*/
static ENABLE_MODE_WHEN_PAUSED: any;



}

