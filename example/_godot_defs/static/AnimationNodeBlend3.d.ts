
/**
 * A resource to add to an [AnimationNodeBlendTree]. Blends two animations out of three linearly out of three based on the amount value.
 *
 * This animation node has three inputs:
 *
 * - The base animation to blend with
 *
 * - A "-blend" animation to blend with when the blend amount is negative value
 *
 * - A "+blend" animation to blend with when the blend amount is positive value
 *
 * In general, the blend value should be in the `[-1.0, 1.0]` range. Values outside of this range can blend amplified animations, however, [AnimationNodeAdd3] works better for this purpose.
 *
*/
declare class AnimationNodeBlend3 extends AnimationNodeSync  {

  
/**
 * A resource to add to an [AnimationNodeBlendTree]. Blends two animations out of three linearly out of three based on the amount value.
 *
 * This animation node has three inputs:
 *
 * - The base animation to blend with
 *
 * - A "-blend" animation to blend with when the blend amount is negative value
 *
 * - A "+blend" animation to blend with when the blend amount is positive value
 *
 * In general, the blend value should be in the `[-1.0, 1.0]` range. Values outside of this range can blend amplified animations, however, [AnimationNodeAdd3] works better for this purpose.
 *
*/
  new(): AnimationNodeBlend3; 
  static "new"(): AnimationNodeBlend3 





  connect<T extends SignalsOf<AnimationNodeBlend3>>(signal: T, method: SignalFunction<AnimationNodeBlend3[T]>): number;






}

