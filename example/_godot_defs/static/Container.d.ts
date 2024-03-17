
/**
 * Base class for all GUI containers. A [Container] automatically arranges its child controls in a certain way. This class can be inherited to make custom container types.
 *
*/
declare class Container extends Control  {

  
/**
 * Base class for all GUI containers. A [Container] automatically arranges its child controls in a certain way. This class can be inherited to make custom container types.
 *
*/
  new(): Container; 
  static "new"(): Container 



/**
 * Implement to return a list of allowed horizontal [enum Control.SizeFlags] for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.
 *
 * **Note:** Having no size flags is equal to having [constant Control.SIZE_SHRINK_BEGIN]. As such, this value is always implicitly allowed.
 *
*/
protected _get_allowed_size_flags_horizontal(): PackedInt32Array;

/**
 * Implement to return a list of allowed vertical [enum Control.SizeFlags] for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.
 *
 * **Note:** Having no size flags is equal to having [constant Control.SIZE_SHRINK_BEGIN]. As such, this value is always implicitly allowed.
 *
*/
protected _get_allowed_size_flags_vertical(): PackedInt32Array;

/** Fit a child control in a given rect. This is mainly a helper for creating custom container classes. */
fit_child_in_rect(): void;

/** Queue resort of the contained children. This is called automatically anyway, but can be called upon request. */
queue_sort(): void;

  connect<T extends SignalsOf<Container>>(signal: T, method: SignalFunction<Container[T]>): number;



/**
 * Notification just before children are going to be sorted, in case there's something to process beforehand.
 *
*/
static NOTIFICATION_PRE_SORT_CHILDREN: any;

/**
 * Notification for when sorting the children, it must be obeyed immediately.
 *
*/
static NOTIFICATION_SORT_CHILDREN: any;


/**
 * Emitted when children are going to be sorted.
 *
*/
$pre_sort_children: Signal<() => void>

/**
 * Emitted when sorting the children is needed.
 *
*/
$sort_children: Signal<() => void>

}

