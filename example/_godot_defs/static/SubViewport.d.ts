
/**
 * [SubViewport] Isolates a rectangular region of a scene to be displayed independently. This can be used, for example, to display UI in 3D space.
 *
 * **Note:** [SubViewport] is a [Viewport] that isn't a [Window], i.e. it doesn't draw anything by itself. To display anything, [SubViewport] must have a non-zero size and be either put inside a [SubViewportContainer] or assigned to a [ViewportTexture].
 *
*/
declare class SubViewport extends Viewport  {

  
/**
 * [SubViewport] Isolates a rectangular region of a scene to be displayed independently. This can be used, for example, to display UI in 3D space.
 *
 * **Note:** [SubViewport] is a [Viewport] that isn't a [Window], i.e. it doesn't draw anything by itself. To display anything, [SubViewport] must have a non-zero size and be either put inside a [SubViewportContainer] or assigned to a [ViewportTexture].
 *
*/
  new(): SubViewport; 
  static "new"(): SubViewport 


/**
 * The clear mode when the sub-viewport is used as a render target.
 *
 * **Note:** This property is intended for 2D usage.
 *
*/
render_target_clear_mode: int;

/** The update mode when the sub-viewport is used as a render target. */
render_target_update_mode: int;

/**
 * The width and height of the sub-viewport. Must be set to a value greater than or equal to 2 pixels on both dimensions. Otherwise, nothing will be displayed.
 *
 * **Note:** If the parent node is a [SubViewportContainer] and its [member SubViewportContainer.stretch] is `true`, the viewport size cannot be changed manually.
 *
*/
size: Vector2i;

/** The 2D size override of the sub-viewport. If either the width or height is [code]0[/code], the override is disabled. */
size_2d_override: Vector2i;

/** If [code]true[/code], the 2D size override affects stretch as well. */
size_2d_override_stretch: boolean;



  connect<T extends SignalsOf<SubViewport>>(signal: T, method: SignalFunction<SubViewport[T]>): number;



/**
 * Always clear the render target before drawing.
 *
*/
static CLEAR_MODE_ALWAYS: any;

/**
 * Never clear the render target.
 *
*/
static CLEAR_MODE_NEVER: any;

/**
 * Clear the render target on the next frame, then switch to [constant CLEAR_MODE_NEVER].
 *
*/
static CLEAR_MODE_ONCE: any;

/**
 * Do not update the render target.
 *
*/
static UPDATE_DISABLED: any;

/**
 * Update the render target once, then switch to [constant UPDATE_DISABLED].
 *
*/
static UPDATE_ONCE: any;

/**
 * Update the render target only when it is visible. This is the default value.
 *
*/
static UPDATE_WHEN_VISIBLE: any;

/**
 * Update the render target only when its parent is visible.
 *
*/
static UPDATE_WHEN_PARENT_VISIBLE: any;

/**
 * Always update the render target.
 *
*/
static UPDATE_ALWAYS: any;



}

