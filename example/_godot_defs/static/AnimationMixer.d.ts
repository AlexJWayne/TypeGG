
/**
 * Base class for [AnimationPlayer] and [AnimationTree] to manage animation lists. It also has general properties and methods for playback and blending.
 *
 * After instantiating the playback information data within the extended class, the blending is processed by the [AnimationMixer].
 *
*/
declare class AnimationMixer extends Node  {

  
/**
 * Base class for [AnimationPlayer] and [AnimationTree] to manage animation lists. It also has general properties and methods for playback and blending.
 *
 * After instantiating the playback information data within the extended class, the blending is processed by the [AnimationMixer].
 *
*/
  new(): AnimationMixer; 
  static "new"(): AnimationMixer 


/** If [code]true[/code], the [AnimationMixer] will be processing. */
active: boolean;

/**
 * The number of possible simultaneous sounds for each of the assigned AudioStreamPlayers.
 *
 * For example, if this value is `32` and the animation has two audio tracks, the two [AudioStreamPlayer]s assigned can play simultaneously up to `32` voices each.
 *
*/
audio_max_polyphony: int;

/** The call mode to use for Call Method tracks. */
callback_mode_method: int;

/** The process notification in which to update animations. */
callback_mode_process: int;

/**
 * If `true`, the blending uses the deterministic algorithm. The total weight is not normalized and the result is accumulated with an initial value (`0` or a `"RESET"` animation if present).
 *
 * This means that if the total amount of blending is `0.0`, the result is equal to the `"RESET"` animation.
 *
 * If the number of tracks between the blended animations is different, the animation with the missing track is treated as if it had the initial value.
 *
 * If `false`, The blend does not use the deterministic algorithm. The total weight is normalized and always `1.0`. If the number of tracks between the blended animations is different, nothing is done about the animation that is missing a track.
 *
 * **Note:** In [AnimationTree], the blending with [AnimationNodeAdd2], [AnimationNodeAdd3], [AnimationNodeSub2] or the weight greater than `1.0` may produce unexpected results.
 *
 * For example, if [AnimationNodeAdd2] blends two nodes with the amount `1.0`, then total weight is `2.0` but it will be normalized to make the total amount `1.0` and the result will be equal to [AnimationNodeBlend2] with the amount `0.5`.
 *
*/
deterministic: boolean;

/**
 * This is used by the editor. If set to `true`, the scene will be saved with the effects of the reset animation (the animation with the key `"RESET"`) applied as if it had been seeked to time 0, with the editor keeping the values that the scene had before saving.
 *
 * This makes it more convenient to preview and edit animations in the editor, as changes to the scene will not be saved as long as they are set in the reset animation.
 *
*/
reset_on_save: boolean;

/**
 * The path to the Animation track used for root motion. Paths must be valid scene-tree paths to a node, and must be specified starting from the parent node of the node that will reproduce the animation. To specify a track that controls properties or bones, append its name after the path, separated by `":"`. For example, `"character/skeleton:ankle"` or `"character/mesh:transform/local"`.
 *
 * If the track has type [constant Animation.TYPE_POSITION_3D], [constant Animation.TYPE_ROTATION_3D] or [constant Animation.TYPE_SCALE_3D] the transformation will be canceled visually, and the animation will appear to stay in place. See also [method get_root_motion_position], [method get_root_motion_rotation], [method get_root_motion_scale] and [RootMotionView].
 *
*/
root_motion_track: NodePathType;

/** The node from which node path references will travel. */
root_node: NodePathType;

/** A virtual function for processing after key getting during playback. */
protected _post_process_key_value(): any;

/** Adds [param library] to the animation player, under the key [param name]. */
add_animation_library(): int;

/** Manually advance the animations by the specified time (in seconds). */
advance(): void;

/** [AnimationMixer] caches animated nodes. It may not notice if a node disappears; [method clear_caches] forces it to update the cache again. */
clear_caches(): void;

/** Returns the key of [param animation] or an empty [StringName] if not found. */
find_animation(): StringName;

/** Returns the key for the [AnimationLibrary] that contains [param animation] or an empty [StringName] if not found. */
find_animation_library(): StringName;

/** Returns the [Animation] with the key [param name]. If the animation does not exist, [code]null[/code] is returned and an error is logged. */
get_animation(): Animation;

/**
 * Returns the first [AnimationLibrary] with key [param name] or `null` if not found.
 *
 * To get the [AnimationPlayer]'s global animation library, use `get_animation_library("")`.
 *
*/
get_animation_library(): AnimationLibrary;

/** Returns the list of stored library keys. */
get_animation_library_list(): StringName[];

/** Returns the list of stored animation keys. */
get_animation_list(): PackedStringArray;

/**
 * Retrieve the motion delta of position with the [member root_motion_track] as a [Vector3] that can be used elsewhere.
 *
 * If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_POSITION_3D], returns `Vector3(0, 0, 0)`.
 *
 * See also [member root_motion_track] and [RootMotionView].
 *
 * The most basic example is applying position to [CharacterBody3D]:
 *
 * @example 
 * 
 * 
 * var current_rotation: Quaternion
 * func _process(delta):
 *     if Input.is_action_just_pressed("animate"):
 *         current_rotation = get_quaternion()
 *         state_machine.travel("Animate")
 *     var velocity: Vector3 = current_rotation * animation_tree.get_root_motion_position() / delta
 *     set_velocity(velocity)
 *     move_and_slide()
 * 
 * @summary 
 * 
 *
 * By using this in combination with [method get_root_motion_position_accumulator], you can apply the root motion position more correctly to account for the rotation of the node.
 *
 * @example 
 * 
 * 
 * func _process(delta):
 *     if Input.is_action_just_pressed("animate"):
 *         state_machine.travel("Animate")
 *     set_quaternion(get_quaternion() * animation_tree.get_root_motion_rotation())
 *     var velocity: Vector3 = (animation_tree.get_root_motion_rotation_accumulator().inverse() * get_quaternion()) * animation_tree.get_root_motion_position() / delta
 *     set_velocity(velocity)
 *     move_and_slide()
 * 
 * @summary 
 * 
 *
*/
get_root_motion_position(): Vector3;

/**
 * Retrieve the blended value of the position tracks with the [member root_motion_track] as a [Vector3] that can be used elsewhere.
 *
 * This is useful in cases where you want to respect the initial key values of the animation.
 *
 * For example, if an animation with only one key `Vector3(0, 0, 0)` is played in the previous frame and then an animation with only one key `Vector3(1, 0, 1)` is played in the next frame, the difference can be calculated as follows:
 *
 * @example 
 * 
 * 
 * var prev_root_motion_position_accumulator: Vector3
 * func _process(delta):
 *     if Input.is_action_just_pressed("animate"):
 *         state_machine.travel("Animate")
 *     var current_root_motion_position_accumulator: Vector3 = animation_tree.get_root_motion_position_accumulator()
 *     var difference: Vector3 = current_root_motion_position_accumulator - prev_root_motion_position_accumulator
 *     prev_root_motion_position_accumulator = current_root_motion_position_accumulator
 *     transform.origin += difference
 * 
 * @summary 
 * 
 *
 * However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.
 *
*/
get_root_motion_position_accumulator(): Vector3;

/**
 * Retrieve the motion delta of rotation with the [member root_motion_track] as a [Quaternion] that can be used elsewhere.
 *
 * If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_ROTATION_3D], returns `Quaternion(0, 0, 0, 1)`.
 *
 * See also [member root_motion_track] and [RootMotionView].
 *
 * The most basic example is applying rotation to [CharacterBody3D]:
 *
 * @example 
 * 
 * 
 * func _process(delta):
 *     if Input.is_action_just_pressed("animate"):
 *         state_machine.travel("Animate")
 *     set_quaternion(get_quaternion() * animation_tree.get_root_motion_rotation())
 * 
 * @summary 
 * 
 *
*/
get_root_motion_rotation(): Quaternion;

/**
 * Retrieve the blended value of the rotation tracks with the [member root_motion_track] as a [Quaternion] that can be used elsewhere.
 *
 * This is necessary to apply the root motion position correctly, taking rotation into account. See also [method get_root_motion_position].
 *
 * Also, this is useful in cases where you want to respect the initial key values of the animation.
 *
 * For example, if an animation with only one key `Quaternion(0, 0, 0, 1)` is played in the previous frame and then an animation with only one key `Quaternion(0, 0.707, 0, 0.707)` is played in the next frame, the difference can be calculated as follows:
 *
 * @example 
 * 
 * 
 * var prev_root_motion_rotation_accumulator: Quaternion
 * func _process(delta):
 *     if Input.is_action_just_pressed("animate"):
 *         state_machine.travel("Animate")
 *     var current_root_motion_rotation_accumulator: Quaternion = animation_tree.get_root_motion_Quaternion_accumulator()
 *     var difference: Quaternion = prev_root_motion_rotation_accumulator.inverse() * current_root_motion_rotation_accumulator
 *     prev_root_motion_rotation_accumulator = current_root_motion_rotation_accumulator
 *     transform.basis *= difference
 * 
 * @summary 
 * 
 *
 * However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.
 *
*/
get_root_motion_rotation_accumulator(): Quaternion;

/**
 * Retrieve the motion delta of scale with the [member root_motion_track] as a [Vector3] that can be used elsewhere.
 *
 * If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_SCALE_3D], returns `Vector3(0, 0, 0)`.
 *
 * See also [member root_motion_track] and [RootMotionView].
 *
 * The most basic example is applying scale to [CharacterBody3D]:
 *
 * @example 
 * 
 * 
 * var current_scale: Vector3 = Vector3(1, 1, 1)
 * var scale_accum: Vector3 = Vector3(1, 1, 1)
 * func _process(delta):
 *     if Input.is_action_just_pressed("animate"):
 *         current_scale = get_scale()
 *         scale_accum = Vector3(1, 1, 1)
 *         state_machine.travel("Animate")
 *     scale_accum += animation_tree.get_root_motion_scale()
 *     set_scale(current_scale * scale_accum)
 * 
 * @summary 
 * 
 *
*/
get_root_motion_scale(): Vector3;

/**
 * Retrieve the blended value of the scale tracks with the [member root_motion_track] as a [Vector3] that can be used elsewhere.
 *
 * For example, if an animation with only one key `Vector3(1, 1, 1)` is played in the previous frame and then an animation with only one key `Vector3(2, 2, 2)` is played in the next frame, the difference can be calculated as follows:
 *
 * @example 
 * 
 * 
 * var prev_root_motion_scale_accumulator: Vector3
 * func _process(delta):
 *     if Input.is_action_just_pressed("animate"):
 *         state_machine.travel("Animate")
 *     var current_root_motion_scale_accumulator: Vector3 = animation_tree.get_root_motion_scale_accumulator()
 *     var difference: Vector3 = current_root_motion_scale_accumulator - prev_root_motion_scale_accumulator
 *     prev_root_motion_scale_accumulator = current_root_motion_scale_accumulator
 *     transform.basis = transform.basis.scaled(difference)
 * 
 * @summary 
 * 
 *
 * However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.
 *
*/
get_root_motion_scale_accumulator(): Vector3;

/** Returns [code]true[/code] if the [AnimationPlayer] stores an [Animation] with key [param name]. */
has_animation(): boolean;

/** Returns [code]true[/code] if the [AnimationPlayer] stores an [AnimationLibrary] with key [param name]. */
has_animation_library(): boolean;

/** Removes the [AnimationLibrary] associated with the key [param name]. */
remove_animation_library(): void;

/** Moves the [AnimationLibrary] associated with the key [param name] to the key [param newname]. */
rename_animation_library(): void;

  connect<T extends SignalsOf<AnimationMixer>>(signal: T, method: SignalFunction<AnimationMixer[T]>): number;



/**
 * Process animation during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). This is especially useful when animating physics bodies.
 *
*/
static ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS: any;

/**
 * Process animation during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]).
 *
*/
static ANIMATION_CALLBACK_MODE_PROCESS_IDLE: any;

/**
 * Do not process animation. Use [method advance] to process the animation manually.
 *
*/
static ANIMATION_CALLBACK_MODE_PROCESS_MANUAL: any;

/**
 * Batch method calls during the animation process, then do the calls after events are processed. This avoids bugs involving deleting nodes or modifying the AnimationPlayer while playing.
 *
*/
static ANIMATION_CALLBACK_MODE_METHOD_DEFERRED: any;

/**
 * Make method calls immediately when reached in the animation.
 *
*/
static ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE: any;


/**
 * Notifies when an animation finished playing.
 *
 * **Note:** This signal is not emitted if an animation is looping.
 *
*/
$animation_finished: Signal<() => void>

/**
 * Notifies when the animation libraries have changed.
 *
*/
$animation_libraries_updated: Signal<() => void>

/**
 * Notifies when an animation list is changed.
 *
*/
$animation_list_changed: Signal<() => void>

/**
 * Notifies when an animation starts playing.
 *
*/
$animation_started: Signal<() => void>

/**
 * Notifies when the caches have been cleared, either automatically, or manually via [method clear_caches].
 *
*/
$caches_cleared: Signal<() => void>

/**
 * Editor only. Notifies when the property have been updated to update dummy [AnimationPlayer] in animation player editor.
 *
*/
$mixer_updated: Signal<() => void>

}

