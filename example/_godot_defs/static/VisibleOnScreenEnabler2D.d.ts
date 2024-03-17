
/**
 * [VisibleOnScreenEnabler2D] contains a rectangular region of 2D space and a target node. The target node will be automatically enabled (via its [member Node.process_mode] property) when any part of this region becomes visible on the screen, and automatically disabled otherwise. This can for example be used to activate enemies only when the player approaches them.
 *
 * See [VisibleOnScreenNotifier2D] if you only want to be notified when the region is visible on screen.
 *
 * **Note:** [VisibleOnScreenEnabler2D] uses the render culling code to determine whether it's visible on screen, so it won't function unless [member CanvasItem.visible] is set to `true`.
 *
*/
declare class VisibleOnScreenEnabler2D extends VisibleOnScreenNotifier2D  {

  
/**
 * [VisibleOnScreenEnabler2D] contains a rectangular region of 2D space and a target node. The target node will be automatically enabled (via its [member Node.process_mode] property) when any part of this region becomes visible on the screen, and automatically disabled otherwise. This can for example be used to activate enemies only when the player approaches them.
 *
 * See [VisibleOnScreenNotifier2D] if you only want to be notified when the region is visible on screen.
 *
 * **Note:** [VisibleOnScreenEnabler2D] uses the render culling code to determine whether it's visible on screen, so it won't function unless [member CanvasItem.visible] is set to `true`.
 *
*/
  new(): VisibleOnScreenEnabler2D; 
  static "new"(): VisibleOnScreenEnabler2D 


/** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
enable_mode: int;

/** The path to the target node, relative to the [VisibleOnScreenEnabler2D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler2D] is inside the scene tree) and every time the [VisibleOnScreenEnabler2D] enters the scene tree. If the path is invalid, an error will be printed in the editor and no node will be affected. */
enable_node_path: NodePathType;



  connect<T extends SignalsOf<VisibleOnScreenEnabler2D>>(signal: T, method: SignalFunction<VisibleOnScreenEnabler2D[T]>): number;



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

