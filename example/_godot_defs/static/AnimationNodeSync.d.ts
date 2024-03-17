
/**
 * An animation node used to combine, mix, or blend two or more animations together while keeping them synchronized within an [AnimationTree].
 *
*/
declare class AnimationNodeSync extends AnimationNode  {

  
/**
 * An animation node used to combine, mix, or blend two or more animations together while keeping them synchronized within an [AnimationTree].
 *
*/
  new(): AnimationNodeSync; 
  static "new"(): AnimationNodeSync 


/**
 * If `false`, the blended animations' frame are stopped when the blend value is `0`.
 *
 * If `true`, forcing the blended animations to advance frame.
 *
*/
sync: boolean;



  connect<T extends SignalsOf<AnimationNodeSync>>(signal: T, method: SignalFunction<AnimationNodeSync[T]>): number;






}

