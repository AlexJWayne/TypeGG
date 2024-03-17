
/**
 * [CanvasItem]-derived nodes that are direct or indirect children of a [CanvasLayer] will be drawn in that layer. The layer is a numeric index that defines the draw order. The default 2D scene renders with index `0`, so a [CanvasLayer] with index `-1` will be drawn below, and a [CanvasLayer] with index `1` will be drawn above. This order will hold regardless of the [member CanvasItem.z_index] of the nodes within each layer.
 *
 * [CanvasLayer]s can be hidden and they can also optionally follow the viewport. This makes them useful for HUDs like health bar overlays (on layers `1` and higher) or backgrounds (on layers `-1` and lower).
 *
 * **Note:** Embedded [Window]s are placed on layer `1024`. [CanvasItem]s on layers `1025` and higher appear in front of embedded windows.
 *
 * **Note:** Each [CanvasLayer] is drawn on one specific [Viewport] and cannot be shared between multiple [Viewport]s, see [member custom_viewport]. When using multiple [Viewport]s, for example in a split-screen game, you need create an individual [CanvasLayer] for each [Viewport] you want it to be drawn on.
 *
*/
declare class CanvasLayer extends Node  {

  
/**
 * [CanvasItem]-derived nodes that are direct or indirect children of a [CanvasLayer] will be drawn in that layer. The layer is a numeric index that defines the draw order. The default 2D scene renders with index `0`, so a [CanvasLayer] with index `-1` will be drawn below, and a [CanvasLayer] with index `1` will be drawn above. This order will hold regardless of the [member CanvasItem.z_index] of the nodes within each layer.
 *
 * [CanvasLayer]s can be hidden and they can also optionally follow the viewport. This makes them useful for HUDs like health bar overlays (on layers `1` and higher) or backgrounds (on layers `-1` and lower).
 *
 * **Note:** Embedded [Window]s are placed on layer `1024`. [CanvasItem]s on layers `1025` and higher appear in front of embedded windows.
 *
 * **Note:** Each [CanvasLayer] is drawn on one specific [Viewport] and cannot be shared between multiple [Viewport]s, see [member custom_viewport]. When using multiple [Viewport]s, for example in a split-screen game, you need create an individual [CanvasLayer] for each [Viewport] you want it to be drawn on.
 *
*/
  new(): CanvasLayer; 
  static "new"(): CanvasLayer 


/** The custom [Viewport] node assigned to the [CanvasLayer]. If [code]null[/code], uses the default viewport instead. */
custom_viewport: Node;

/**
 * If enabled, the [CanvasLayer] will use the viewport's transform, so it will move when camera moves instead of being anchored in a fixed position on the screen.
 *
 * Together with [member follow_viewport_scale] it can be used for a pseudo 3D effect.
 *
*/
follow_viewport_enabled: boolean;

/** Scales the layer when using [member follow_viewport_enabled]. Layers moving into the foreground should have increasing scales, while layers moving into the background should have decreasing scales. */
follow_viewport_scale: float;

/**
 * Layer index for draw order. Lower values are drawn behind higher values.
 *
 * **Note:** If multiple CanvasLayers have the same layer index, [CanvasItem] children of one CanvasLayer are drawn behind the [CanvasItem] children of the other CanvasLayer. Which CanvasLayer is drawn in front is non-deterministic.
 *
*/
layer: int;

/** The layer's base offset. */
offset: Vector2;

/** The layer's rotation in radians. */
rotation: float;

/** The layer's scale. */
scale: Vector2;

/** The layer's transform. */
transform: Transform2D;

/**
 * If `false`, any [CanvasItem] under this [CanvasLayer] will be hidden.
 *
 * Unlike [member CanvasItem.visible], visibility of a [CanvasLayer] isn't propagated to underlying layers.
 *
*/
visible: boolean;

/** Returns the RID of the canvas used by this layer. */
get_canvas(): RID;

/** Returns the transform from the [CanvasLayer]s coordinate system to the [Viewport]s coordinate system. */
get_final_transform(): Transform2D;

/** Hides any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to [code]false[/code]. */
hide(): void;

/** Shows any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to [code]true[/code]. */
show(): void;

  connect<T extends SignalsOf<CanvasLayer>>(signal: T, method: SignalFunction<CanvasLayer[T]>): number;





/**
 * Emitted when visibility of the layer is changed. See [member visible].
 *
*/
$visibility_changed: Signal<() => void>

}

