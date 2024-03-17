
/**
 * Allows to scale the speed of the animation (or reverse it) in any children [AnimationNode]s. Setting it to `0.0` will pause the animation.
 *
*/
declare class AnimationNodeTimeScale extends AnimationNode  {

  
/**
 * Allows to scale the speed of the animation (or reverse it) in any children [AnimationNode]s. Setting it to `0.0` will pause the animation.
 *
*/
  new(): AnimationNodeTimeScale; 
  static "new"(): AnimationNodeTimeScale 





  connect<T extends SignalsOf<AnimationNodeTimeScale>>(signal: T, method: SignalFunction<AnimationNodeTimeScale[T]>): number;






}

