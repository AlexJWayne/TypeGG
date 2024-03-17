
/**
 * An animation library stores a set of animations accessible through [StringName] keys, for use with [AnimationPlayer] nodes.
 *
*/
declare class AnimationLibrary extends Resource  {

  
/**
 * An animation library stores a set of animations accessible through [StringName] keys, for use with [AnimationPlayer] nodes.
 *
*/
  new(): AnimationLibrary; 
  static "new"(): AnimationLibrary 



/** Adds the [param animation] to the library, accessible by the key [param name]. */
add_animation(): int;

/** Returns the [Animation] with the key [param name]. If the animation does not exist, [code]null[/code] is returned and an error is logged. */
get_animation(): Animation;

/** Returns the keys for the [Animation]s stored in the library. */
get_animation_list(): StringName[];

/** Returns [code]true[/code] if the library stores an [Animation] with [param name] as the key. */
has_animation(): boolean;

/** Removes the [Animation] with the key [param name]. */
remove_animation(): void;

/** Changes the key of the [Animation] associated with the key [param name] to [param newname]. */
rename_animation(): void;

  connect<T extends SignalsOf<AnimationLibrary>>(signal: T, method: SignalFunction<AnimationLibrary[T]>): number;





/**
 * Emitted when an [Animation] is added, under the key [param name].
 *
*/
$animation_added: Signal<() => void>

/**
 * Emitted when there's a change in one of the animations, e.g. tracks are added, moved or have changed paths. [param name] is the key of the animation that was changed.
 *
 * See also [signal Resource.changed], which this acts as a relay for.
 *
*/
$animation_changed: Signal<() => void>

/**
 * Emitted when an [Animation] stored with the key [param name] is removed.
 *
*/
$animation_removed: Signal<() => void>

/**
 * Emitted when the key for an [Animation] is changed, from [param name] to [param to_name].
 *
*/
$animation_renamed: Signal<() => void>

}

