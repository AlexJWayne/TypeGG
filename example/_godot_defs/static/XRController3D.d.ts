
/**
 * This is a helper spatial node that is linked to the tracking of controllers. It also offers several handy passthroughs to the state of buttons and such on the controllers.
 *
 * Controllers are linked by their ID. You can create controller nodes before the controllers are available. If your game always uses two controllers (one for each hand), you can predefine the controllers with ID 1 and 2; they will become active as soon as the controllers are identified. If you expect additional controllers to be used, you should react to the signals and add XRController3D nodes to your scene.
 *
 * The position of the controller node is automatically updated by the [XRServer]. This makes this node ideal to add child nodes to visualize the controller.
 *
 * As many XR runtimes now use a configurable action map all inputs are named.
 *
*/
declare class XRController3D extends XRNode3D  {

  
/**
 * This is a helper spatial node that is linked to the tracking of controllers. It also offers several handy passthroughs to the state of buttons and such on the controllers.
 *
 * Controllers are linked by their ID. You can create controller nodes before the controllers are available. If your game always uses two controllers (one for each hand), you can predefine the controllers with ID 1 and 2; they will become active as soon as the controllers are identified. If you expect additional controllers to be used, you should react to the signals and add XRController3D nodes to your scene.
 *
 * The position of the controller node is automatically updated by the [XRServer]. This makes this node ideal to add child nodes to visualize the controller.
 *
 * As many XR runtimes now use a configurable action map all inputs are named.
 *
*/
  new(): XRController3D; 
  static "new"(): XRController3D 



/** Returns a numeric value for the input with the given [param name]. This is used for triggers and grip sensors. */
get_float(): float;

/** Returns a [Variant] for the input with the given [param name]. This works for any input type, the variant will be typed according to the actions configuration. */
get_input(): any;

/** Returns the hand holding this controller, if known. See [enum XRPositionalTracker.TrackerHand]. */
get_tracker_hand(): int;

/** Returns a [Vector2] for the input with the given [param name]. This is used for thumbsticks and thumbpads found on many controllers. */
get_vector2(): Vector2;

/** Returns [code]true[/code] if the button with the given [param name] is pressed. */
is_button_pressed(): boolean;

  connect<T extends SignalsOf<XRController3D>>(signal: T, method: SignalFunction<XRController3D[T]>): number;





/**
 * Emitted when a button on this controller is pressed.
 *
*/
$button_pressed: Signal<() => void>

/**
 * Emitted when a button on this controller is released.
 *
*/
$button_released: Signal<() => void>

/**
 * Emitted when a trigger or similar input on this controller changes value.
 *
*/
$input_float_changed: Signal<() => void>

/**
 * Emitted when a thumbstick or thumbpad on this controller is moved.
 *
*/
$input_vector2_changed: Signal<() => void>

}

