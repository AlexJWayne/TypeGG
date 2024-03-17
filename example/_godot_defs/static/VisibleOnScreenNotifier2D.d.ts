
/**
 * [VisibleOnScreenEnabler2D] represents a rectangular region of 2D space. When any part of this region becomes visible on screen or in a viewport, it will emit a [signal screen_entered] signal, and likewise it will emit a [signal screen_exited] signal when no part of it remains visible.
 *
 * If you want a node to be enabled automatically when this region is visible on screen, use [VisibleOnScreenEnabler2D].
 *
 * **Note:** [VisibleOnScreenNotifier2D] uses the render culling code to determine whether it's visible on screen, so it won't function unless [member CanvasItem.visible] is set to `true`.
 *
*/
declare class VisibleOnScreenNotifier2D extends Node2D  {

  
/**
 * [VisibleOnScreenEnabler2D] represents a rectangular region of 2D space. When any part of this region becomes visible on screen or in a viewport, it will emit a [signal screen_entered] signal, and likewise it will emit a [signal screen_exited] signal when no part of it remains visible.
 *
 * If you want a node to be enabled automatically when this region is visible on screen, use [VisibleOnScreenEnabler2D].
 *
 * **Note:** [VisibleOnScreenNotifier2D] uses the render culling code to determine whether it's visible on screen, so it won't function unless [member CanvasItem.visible] is set to `true`.
 *
*/
  new(): VisibleOnScreenNotifier2D; 
  static "new"(): VisibleOnScreenNotifier2D 


/** The VisibleOnScreenNotifier2D's bounding rectangle. */
rect: Rect2;

/**
 * If `true`, the bounding rectangle is on the screen.
 *
 * **Note:** It takes one frame for the [VisibleOnScreenNotifier2D]'s visibility to be determined once added to the scene tree, so this method will always return `false` right after it is instantiated, before the draw pass.
 *
*/
is_on_screen(): boolean;

  connect<T extends SignalsOf<VisibleOnScreenNotifier2D>>(signal: T, method: SignalFunction<VisibleOnScreenNotifier2D[T]>): number;





/**
 * Emitted when the VisibleOnScreenNotifier2D enters the screen.
 *
*/
$screen_entered: Signal<() => void>

/**
 * Emitted when the VisibleOnScreenNotifier2D exits the screen.
 *
*/
$screen_exited: Signal<() => void>

}

