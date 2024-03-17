
/**
 * A widget that provides an interface for selecting or modifying a color. It can optionally provide functionalities like a color sampler (eyedropper), color modes, and presets.
 *
 * **Note:** This control is the color picker widget itself. You can use a [ColorPickerButton] instead if you need a button that brings up a [ColorPicker] in a popup.
 *
*/
declare class ColorPicker extends VBoxContainer  {

  
/**
 * A widget that provides an interface for selecting or modifying a color. It can optionally provide functionalities like a color sampler (eyedropper), color modes, and presets.
 *
 * **Note:** This control is the color picker widget itself. You can use a [ColorPickerButton] instead if you need a button that brings up a [ColorPicker] in a popup.
 *
*/
  new(): ColorPicker; 
  static "new"(): ColorPicker 


/** If [code]true[/code], it's possible to add presets under Swatches. If [code]false[/code], the button to add presets is disabled. */
can_add_swatches: boolean;

/** The currently selected color. */
color: Color;

/** The currently selected color mode. See [enum ColorModeType]. */
color_mode: int;

/** If [code]true[/code], the color mode buttons are visible. */
color_modes_visible: boolean;

/** If [code]true[/code], the color will apply only after the user releases the mouse button, otherwise it will apply immediately even in mouse motion event (which can cause performance issues). */
deferred_mode: boolean;

/** If [code]true[/code], shows an alpha channel slider (opacity). */
edit_alpha: boolean;

/** If [code]true[/code], the hex color code input field is visible. */
hex_visible: boolean;

/** The shape of the color space view. See [enum PickerShapeType]. */
picker_shape: int;

/** If [code]true[/code], the Swatches and Recent Colors presets are visible. */
presets_visible: boolean;

/** If [code]true[/code], the color sampler and color preview are visible. */
sampler_visible: boolean;

/** If [code]true[/code], the color sliders are visible. */
sliders_visible: boolean;

/**
 * Adds the given color to a list of color presets. The presets are displayed in the color picker and the user will be able to select them.
 *
 * **Note:** The presets list is only for **this** color picker.
 *
*/
add_preset(): void;

/**
 * Adds the given color to a list of color recent presets so that it can be picked later. Recent presets are the colors that were picked recently, a new preset is automatically created and added to recent presets when you pick a new color.
 *
 * **Note:** The recent presets list is only for **this** color picker.
 *
*/
add_recent_preset(): void;

/** Removes the given color from the list of color presets of this color picker. */
erase_preset(): void;

/** Removes the given color from the list of color recent presets of this color picker. */
erase_recent_preset(): void;

/** Returns the list of colors in the presets of the color picker. */
get_presets(): PackedColorArray;

/** Returns the list of colors in the recent presets of the color picker. */
get_recent_presets(): PackedColorArray;

  connect<T extends SignalsOf<ColorPicker>>(signal: T, method: SignalFunction<ColorPicker[T]>): number;



/**
 * Allows editing the color with Red/Green/Blue sliders.
 *
*/
static MODE_RGB: any;

/**
 * Allows editing the color with Hue/Saturation/Value sliders.
 *
*/
static MODE_HSV: any;

/**
 * Allows the color R, G, B component values to go beyond 1.0, which can be used for certain special operations that require it (like tinting without darkening or rendering sprites in HDR).
 *
*/
static MODE_RAW: any;

/**
 * Allows editing the color with Hue/Saturation/Lightness sliders.
 *
 * OKHSL is a new color space similar to HSL but that better match perception by leveraging the Oklab color space which is designed to be simple to use, while doing a good job at predicting perceived lightness, chroma and hue.
 *
 * [url=https://bottosson.github.io/posts/colorpicker/]Okhsv and Okhsl color spaces[/url]
 *
*/
static MODE_OKHSL: any;

/**
 * HSV Color Model rectangle color space.
 *
*/
static SHAPE_HSV_RECTANGLE: any;

/**
 * HSV Color Model rectangle color space with a wheel.
 *
*/
static SHAPE_HSV_WHEEL: any;

/**
 * HSV Color Model circle color space. Use Saturation as a radius.
 *
*/
static SHAPE_VHS_CIRCLE: any;

/**
 * HSL OK Color Model circle color space.
 *
*/
static SHAPE_OKHSL_CIRCLE: any;

/**
 * The color space shape and the shape select button are hidden. Can't be selected from the shapes popup.
 *
*/
static SHAPE_NONE: any;


/**
 * Emitted when the color is changed.
 *
*/
$color_changed: Signal<() => void>

/**
 * Emitted when a preset is added.
 *
*/
$preset_added: Signal<() => void>

/**
 * Emitted when a preset is removed.
 *
*/
$preset_removed: Signal<() => void>

}

