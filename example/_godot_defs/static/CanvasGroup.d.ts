
/**
 * Child [CanvasItem] nodes of a [CanvasGroup] are drawn as a single object. It allows to e.g. draw overlapping translucent 2D nodes without blending (set [member CanvasItem.self_modulate] property of [CanvasGroup] to achieve this effect).
 *
 * **Note:** The [CanvasGroup] uses a custom shader to read from the backbuffer to draw its children. Assigning a [Material] to the [CanvasGroup] overrides the builtin shader. To duplicate the behavior of the builtin shader in a custom [Shader] use the following:
 *
 * @example 
 * 
 * shader_type canvas_item;
 * render_mode unshaded;
 * uniform sampler2D screen_texture : hint_screen_texture, repeat_disable, filter_nearest;
 * void fragment() {
 *     vec4 c = textureLod(screen_texture, SCREEN_UV, 0.0);
 *     if (c.a > 0.0001) {
 *         c.rgb /= c.a;
 *     }
 *     COLOR *= c;
 * }
 * @summary 
 * 
 *
 * **Note:** Since [CanvasGroup] and [member CanvasItem.clip_children] both utilize the backbuffer, children of a [CanvasGroup] who have their [member CanvasItem.clip_children] set to anything other than [constant CanvasItem.CLIP_CHILDREN_DISABLED] will not function correctly.
 *
*/
declare class CanvasGroup extends Node2D  {

  
/**
 * Child [CanvasItem] nodes of a [CanvasGroup] are drawn as a single object. It allows to e.g. draw overlapping translucent 2D nodes without blending (set [member CanvasItem.self_modulate] property of [CanvasGroup] to achieve this effect).
 *
 * **Note:** The [CanvasGroup] uses a custom shader to read from the backbuffer to draw its children. Assigning a [Material] to the [CanvasGroup] overrides the builtin shader. To duplicate the behavior of the builtin shader in a custom [Shader] use the following:
 *
 * @example 
 * 
 * shader_type canvas_item;
 * render_mode unshaded;
 * uniform sampler2D screen_texture : hint_screen_texture, repeat_disable, filter_nearest;
 * void fragment() {
 *     vec4 c = textureLod(screen_texture, SCREEN_UV, 0.0);
 *     if (c.a > 0.0001) {
 *         c.rgb /= c.a;
 *     }
 *     COLOR *= c;
 * }
 * @summary 
 * 
 *
 * **Note:** Since [CanvasGroup] and [member CanvasItem.clip_children] both utilize the backbuffer, children of a [CanvasGroup] who have their [member CanvasItem.clip_children] set to anything other than [constant CanvasItem.CLIP_CHILDREN_DISABLED] will not function correctly.
 *
*/
  new(): CanvasGroup; 
  static "new"(): CanvasGroup 


/** Sets the size of the margin used to expand the clearing rect of this [CanvasGroup]. This expands the area of the backbuffer that will be used by the [CanvasGroup]. A smaller margin will reduce the area of the backbuffer used which can increase performance, however if [member use_mipmaps] is enabled, a small margin may result in mipmap errors at the edge of the [CanvasGroup]. Accordingly, this should be left as small as possible, but should be increased if artifacts appear along the edges of the canvas group. */
clear_margin: float;

/** Sets the size of a margin used to expand the drawable rect of this [CanvasGroup]. The size of the [CanvasGroup] is determined by fitting a rect around its children then expanding that rect by [member fit_margin]. This increases both the backbuffer area used and the area covered by the [CanvasGroup] both of which can reduce performance. This should be kept as small as possible and should only be expanded when an increased size is needed (e.g. for custom shader effects). */
fit_margin: float;

/** If [code]true[/code], calculates mipmaps for the backbuffer before drawing the [CanvasGroup] so that mipmaps can be used in a custom [ShaderMaterial] attached to the [CanvasGroup]. Generating mipmaps has a performance cost so this should not be enabled unless required. */
use_mipmaps: boolean;



  connect<T extends SignalsOf<CanvasGroup>>(signal: T, method: SignalFunction<CanvasGroup[T]>): number;






}

