
/**
 * A directional light is a type of [Light2D] node that models an infinite number of parallel rays covering the entire scene. It is used for lights with strong intensity that are located far away from the scene (for example: to model sunlight or moonlight).
 *
 * **Note:** [DirectionalLight2D] does not support light cull masks (but it supports shadow cull masks). It will always light up 2D nodes, regardless of the 2D node's [member CanvasItem.light_mask].
 *
*/
declare class DirectionalLight2D extends Light2D  {

  
/**
 * A directional light is a type of [Light2D] node that models an infinite number of parallel rays covering the entire scene. It is used for lights with strong intensity that are located far away from the scene (for example: to model sunlight or moonlight).
 *
 * **Note:** [DirectionalLight2D] does not support light cull masks (but it supports shadow cull masks). It will always light up 2D nodes, regardless of the 2D node's [member CanvasItem.light_mask].
 *
*/
  new(): DirectionalLight2D; 
  static "new"(): DirectionalLight2D 


/** The height of the light. Used with 2D normal mapping. Ranges from 0 (parallel to the plane) to 1 (perpendicular to the plane). */
height: float;

/** The maximum distance from the camera center objects can be before their shadows are culled (in pixels). Decreasing this value can prevent objects located outside the camera from casting shadows (while also improving performance). [member Camera2D.zoom] is not taken into account by [member max_distance], which means that at higher zoom values, shadows will appear to fade out sooner when zooming onto a given point. */
max_distance: float;



  connect<T extends SignalsOf<DirectionalLight2D>>(signal: T, method: SignalFunction<DirectionalLight2D[T]>): number;






}

