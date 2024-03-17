
/**
 * A resource to add to an [AnimationNodeBlendTree]. Only has one output port using the [member animation] property. Used as an input for [AnimationNode]s that blend animations together.
 *
*/
declare class AnimationNodeAnimation extends AnimationRootNode  {

  
/**
 * A resource to add to an [AnimationNodeBlendTree]. Only has one output port using the [member animation] property. Used as an input for [AnimationNode]s that blend animations together.
 *
*/
  new(): AnimationNodeAnimation; 
  static "new"(): AnimationNodeAnimation 


/** Animation to use as an output. It is one of the animations provided by [member AnimationTree.anim_player]. */
animation: StringName;

/** Determines the playback direction of the animation. */
play_mode: int;



  connect<T extends SignalsOf<AnimationNodeAnimation>>(signal: T, method: SignalFunction<AnimationNodeAnimation[T]>): number;



/**
 * Plays animation in forward direction.
 *
*/
static PLAY_MODE_FORWARD: any;

/**
 * Plays animation in backward direction.
 *
*/
static PLAY_MODE_BACKWARD: any;



}

