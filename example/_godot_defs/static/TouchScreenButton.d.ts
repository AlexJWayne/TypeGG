
/**
 * TouchScreenButton allows you to create on-screen buttons for touch devices. It's intended for gameplay use, such as a unit you have to touch to move. Unlike [Button], TouchScreenButton supports multitouch out of the box. Several TouchScreenButtons can be pressed at the same time with touch input.
 *
 * This node inherits from [Node2D]. Unlike with [Control] nodes, you cannot set anchors on it. If you want to create menus or user interfaces, you may want to use [Button] nodes instead. To make button nodes react to touch events, you can enable the Emulate Mouse option in the Project Settings.
 *
 * You can configure TouchScreenButton to be visible only on touch devices, helping you develop your game both for desktop and mobile devices.
 *
*/
declare class TouchScreenButton extends Node2D  {

  
/**
 * TouchScreenButton allows you to create on-screen buttons for touch devices. It's intended for gameplay use, such as a unit you have to touch to move. Unlike [Button], TouchScreenButton supports multitouch out of the box. Several TouchScreenButtons can be pressed at the same time with touch input.
 *
 * This node inherits from [Node2D]. Unlike with [Control] nodes, you cannot set anchors on it. If you want to create menus or user interfaces, you may want to use [Button] nodes instead. To make button nodes react to touch events, you can enable the Emulate Mouse option in the Project Settings.
 *
 * You can configure TouchScreenButton to be visible only on touch devices, helping you develop your game both for desktop and mobile devices.
 *
*/
  new(): TouchScreenButton; 
  static "new"(): TouchScreenButton 


/** The button's action. Actions can be handled with [InputEventAction]. */
action: string;

/** The button's bitmask. */
bitmask: BitMap;

/**
 * If `true`, the [signal pressed] and [signal released] signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.
 *
 * **Note:** This is a "pass-by" (not "bypass") press mode.
 *
*/
passby_press: boolean;

/** The button's shape. */
shape: Shape2D;

/** If [code]true[/code], the button's shape is centered in the provided texture. If no texture is used, this property has no effect. */
shape_centered: boolean;

/** If [code]true[/code], the button's shape is visible in the editor. */
shape_visible: boolean;

/** The button's texture for the normal state. */
texture_normal: Texture2D;

/** The button's texture for the pressed state. */
texture_pressed: Texture2D;

/** The button's visibility mode. See [enum VisibilityMode] for possible values. */
visibility_mode: int;

/** Returns [code]true[/code] if this button is currently pressed. */
is_pressed(): boolean;

  connect<T extends SignalsOf<TouchScreenButton>>(signal: T, method: SignalFunction<TouchScreenButton[T]>): number;



/**
 * Always visible.
 *
*/
static VISIBILITY_ALWAYS: any;

/**
 * Visible on touch screens only.
 *
*/
static VISIBILITY_TOUCHSCREEN_ONLY: any;


/**
 * Emitted when the button is pressed (down).
 *
*/
$pressed: Signal<() => void>

/**
 * Emitted when the button is released (up).
 *
*/
$released: Signal<() => void>

}

