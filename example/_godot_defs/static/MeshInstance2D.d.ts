
/**
 * Node used for displaying a [Mesh] in 2D. A [MeshInstance2D] can be automatically created from an existing [Sprite2D] via a tool in the editor toolbar. Select the [Sprite2D] node, then choose **Sprite2D > Convert to MeshInstance2D** at the top of the 2D editor viewport.
 *
*/
declare class MeshInstance2D extends Node2D  {

  
/**
 * Node used for displaying a [Mesh] in 2D. A [MeshInstance2D] can be automatically created from an existing [Sprite2D] via a tool in the editor toolbar. Select the [Sprite2D] node, then choose **Sprite2D > Convert to MeshInstance2D** at the top of the 2D editor viewport.
 *
*/
  new(): MeshInstance2D; 
  static "new"(): MeshInstance2D 


/** The [Mesh] that will be drawn by the [MeshInstance2D]. */
mesh: Mesh;

/** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as [code]TEXTURE[/code] in CanvasItem shader. */
texture: Texture2D;



  connect<T extends SignalsOf<MeshInstance2D>>(signal: T, method: SignalFunction<MeshInstance2D[T]>): number;





/**
 * Emitted when the [member texture] is changed.
 *
*/
$texture_changed: Signal<() => void>

}

