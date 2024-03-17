
/**
 * A node used for advanced animation transitions in an [AnimationPlayer].
 *
 * **Note:** When linked with an [AnimationPlayer], several properties and methods of the corresponding [AnimationPlayer] will not function as expected. Playback and transitions should be handled using only the [AnimationTree] and its constituent [AnimationNode](s). The [AnimationPlayer] node should be used solely for adding, deleting, and editing animations.
 *
*/
declare class AnimationTree extends AnimationMixer  {

  
/**
 * A node used for advanced animation transitions in an [AnimationPlayer].
 *
 * **Note:** When linked with an [AnimationPlayer], several properties and methods of the corresponding [AnimationPlayer] will not function as expected. Playback and transitions should be handled using only the [AnimationTree] and its constituent [AnimationNode](s). The [AnimationPlayer] node should be used solely for adding, deleting, and editing animations.
 *
*/
  new(): AnimationTree; 
  static "new"(): AnimationTree 


/** The path to the [Node] used to evaluate the [AnimationNode] [Expression] if one is not explicitly specified internally. */
advance_expression_base_node: NodePathType;

/** The path to the [AnimationPlayer] used for animating. */
anim_player: NodePathType;


/** The root animation node of this [AnimationTree]. See [AnimationRootNode]. */
tree_root: AnimationRootNode;

/** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeProcess]. */
get_process_callback(): int;

/** For backward compatibility. See [enum AnimationMixer.AnimationCallbackModeProcess]. */
set_process_callback(): void;

  connect<T extends SignalsOf<AnimationTree>>(signal: T, method: SignalFunction<AnimationTree[T]>): number;



/**
 * For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS].
 *
*/
static ANIMATION_PROCESS_PHYSICS: any;

/**
 * For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_IDLE].
 *
*/
static ANIMATION_PROCESS_IDLE: any;

/**
 * For backward compatibility. See [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_MANUAL].
 *
*/
static ANIMATION_PROCESS_MANUAL: any;


/**
 * Emitted when the [member anim_player] is changed.
 *
*/
$animation_player_changed: Signal<() => void>

}

