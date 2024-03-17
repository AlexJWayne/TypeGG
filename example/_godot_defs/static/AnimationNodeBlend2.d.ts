
/**
 * A resource to add to an [AnimationNodeBlendTree]. Blends two animations linearly based on the amount value.
 *
 * In general, the blend value should be in the `[0.0, 1.0]` range. Values outside of this range can blend amplified or inverted animations, however, [AnimationNodeAdd2] works better for this purpose.
 *
*/
declare class AnimationNodeBlend2 extends AnimationNodeSync  {

  
/**
 * A resource to add to an [AnimationNodeBlendTree]. Blends two animations linearly based on the amount value.
 *
 * In general, the blend value should be in the `[0.0, 1.0]` range. Values outside of this range can blend amplified or inverted animations, however, [AnimationNodeAdd2] works better for this purpose.
 *
*/
  new(): AnimationNodeBlend2; 
  static "new"(): AnimationNodeBlend2 





  connect<T extends SignalsOf<AnimationNodeBlend2>>(signal: T, method: SignalFunction<AnimationNodeBlend2[T]>): number;






}

