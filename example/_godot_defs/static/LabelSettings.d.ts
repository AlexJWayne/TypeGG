
/**
 * [LabelSettings] is a resource that provides common settings to customize the text in a [Label]. It will take priority over the properties defined in [member Control.theme]. The resource can be shared between multiple labels and changed on the fly, so it's convenient and flexible way to setup text style.
 *
*/
declare class LabelSettings extends Resource  {

  
/**
 * [LabelSettings] is a resource that provides common settings to customize the text in a [Label]. It will take priority over the properties defined in [member Control.theme]. The resource can be shared between multiple labels and changed on the fly, so it's convenient and flexible way to setup text style.
 *
*/
  new(): LabelSettings; 
  static "new"(): LabelSettings 


/** [Font] used for the text. */
font: Font;

/** Color of the text. */
font_color: Color;

/** Size of the text. */
font_size: int;

/** Vertical space between lines when the text is multiline. */
line_spacing: float;

/** The color of the outline. */
outline_color: Color;

/** Text outline size. */
outline_size: int;

/** Color of the shadow effect. If alpha is [code]0[/code], no shadow will be drawn. */
shadow_color: Color;

/** Offset of the shadow effect, in pixels. */
shadow_offset: Vector2;

/** Size of the shadow effect. */
shadow_size: int;



  connect<T extends SignalsOf<LabelSettings>>(signal: T, method: SignalFunction<LabelSettings[T]>): number;






}

