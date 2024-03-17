
/**
 * A resource to add to an [AnimationNodeBlendTree]. Blends two animations out of three additively out of three based on the amount value.
 *
 * This animation node has three inputs:
 *
 * - The base animation to add to
 *
 * - A "-add" animation to blend with when the blend amount is negative
 *
 * - A "+add" animation to blend with when the blend amount is positive
 *
 * If the absolute value of the amount is greater than `1.0`, the animation connected to "in" port is blended with the amplified animation connected to "-add"/"+add" port.
 *
*/
declare class AnimationNodeAdd3 extends AnimationNodeSync  {

  
/**
 * A resource to add to an [AnimationNodeBlendTree]. Blends two animations out of three additively out of three based on the amount value.
 *
 * This animation node has three inputs:
 *
 * - The base animation to add to
 *
 * - A "-add" animation to blend with when the blend amount is negative
 *
 * - A "+add" animation to blend with when the blend amount is positive
 *
 * If the absolute value of the amount is greater than `1.0`, the animation connected to "in" port is blended with the amplified animation connected to "-add"/"+add" port.
 *
*/
  new(): AnimationNodeAdd3; 
  static "new"(): AnimationNodeAdd3 





  connect<T extends SignalsOf<AnimationNodeAdd3>>(signal: T, method: SignalFunction<AnimationNodeAdd3[T]>): number;






}

