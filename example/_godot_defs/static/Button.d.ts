
/**
 * [Button] is the standard themed button. It can contain text and an icon, and it will display them according to the current [Theme].
 *
 * **Example of creating a button and assigning an action when pressed by code:**
 *
 * @example 
 * 
 * 
 * func _ready():
 *     var button = Button.new()
 *     button.text = "Click me"
 *     button.pressed.connect(self._button_pressed)
 *     add_child(button)
 * func _button_pressed():
 *     print("Hello world!")
 * 
 * 
 * public override void _Ready()
 * {
 *     var button = new Button();
 *     button.Text = "Click me";
 *     button.Pressed += ButtonPressed;
 *     AddChild(button);
 * }
 * private void ButtonPressed()
 * {
 *     GD.Print("Hello world!");
 * }
 * 
 * @summary 
 * 
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
 * **Note:** Buttons do not interpret touch input and therefore don't support multitouch, since mouse emulation can only press one button at a given time. Use [TouchScreenButton] for buttons that trigger gameplay movement or actions.
 *
*/
declare class Button extends BaseButton  {

  
/**
 * [Button] is the standard themed button. It can contain text and an icon, and it will display them according to the current [Theme].
 *
 * **Example of creating a button and assigning an action when pressed by code:**
 *
 * @example 
 * 
 * 
 * func _ready():
 *     var button = Button.new()
 *     button.text = "Click me"
 *     button.pressed.connect(self._button_pressed)
 *     add_child(button)
 * func _button_pressed():
 *     print("Hello world!")
 * 
 * 
 * public override void _Ready()
 * {
 *     var button = new Button();
 *     button.Text = "Click me";
 *     button.Pressed += ButtonPressed;
 *     AddChild(button);
 * }
 * private void ButtonPressed()
 * {
 *     GD.Print("Hello world!");
 * }
 * 
 * @summary 
 * 
 *
 * See also [BaseButton] which contains common properties and methods associated with this node.
 *
 * **Note:** Buttons do not interpret touch input and therefore don't support multitouch, since mouse emulation can only press one button at a given time. Use [TouchScreenButton] for buttons that trigger gameplay movement or actions.
 *
*/
  new(): Button; 
  static "new"(): Button 


/** Text alignment policy for the button's text, use one of the [enum HorizontalAlignment] constants. */
alignment: int;

/** When this property is enabled, text that is too large to fit the button is clipped, when disabled the Button will always be wide enough to hold the text. */
clip_text: boolean;

/** When enabled, the button's icon will expand/shrink to fit the button's size while keeping its aspect. See also [theme_item icon_max_width]. */
expand_icon: boolean;

/** Flat buttons don't display decoration. */
flat: boolean;

/**
 * Button's icon, if text is present the icon will be placed before the text.
 *
 * To edit margin and spacing of the icon, use [theme_item h_separation] theme property and `content_margin_*` properties of the used [StyleBox]es.
 *
*/
icon: Texture2D;

/** Specifies if the icon should be aligned horizontally to the left, right, or center of a button. Uses the same [enum HorizontalAlignment] constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon. */
icon_alignment: int;

/** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
language: string;

/** The button's text that will be displayed inside the button's area. */
text: string;

/** Base text writing direction. */
text_direction: int;

/** Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
text_overrun_behavior: int;

/** Specifies if the icon should be aligned vertically to the top, bottom, or center of a button. Uses the same [enum VerticalAlignment] constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon. */
vertical_icon_alignment: int;



  connect<T extends SignalsOf<Button>>(signal: T, method: SignalFunction<Button[T]>): number;






}

