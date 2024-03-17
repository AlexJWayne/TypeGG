
/**
 * A node created automatically in an [AnimationNodeBlendTree] that outputs the final animation.
 *
*/
declare class AnimationNodeOutput extends AnimationNode  {

  
/**
 * A node created automatically in an [AnimationNodeBlendTree] that outputs the final animation.
 *
*/
  new(): AnimationNodeOutput; 
  static "new"(): AnimationNodeOutput 





  connect<T extends SignalsOf<AnimationNodeOutput>>(signal: T, method: SignalFunction<AnimationNodeOutput[T]>): number;






}

