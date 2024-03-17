
/**
 * This resource provides an interface that can be expanded so code that operates on [Bone2D] nodes in a [Skeleton2D] can be mixed and matched together to create complex interactions.
 *
 * This is used to provide Godot with a flexible and powerful Inverse Kinematics solution that can be adapted for many different uses.
 *
*/
declare class SkeletonModification2D extends Resource  {

  
/**
 * This resource provides an interface that can be expanded so code that operates on [Bone2D] nodes in a [Skeleton2D] can be mixed and matched together to create complex interactions.
 *
 * This is used to provide Godot with a flexible and powerful Inverse Kinematics solution that can be adapted for many different uses.
 *
*/
  new(): SkeletonModification2D; 
  static "new"(): SkeletonModification2D 


/** If [code]true[/code], the modification's [method _execute] function will be called by the [SkeletonModificationStack2D]. */
enabled: boolean;

/** The execution mode for the modification. This tells the modification stack when to execute the modification. Some modifications have settings that are only available in certain execution modes. */
execution_mode: int;

/**
 * Used for drawing **editor-only** modification gizmos. This function will only be called in the Godot editor and can be overridden to draw custom gizmos.
 *
 * **Note:** You will need to use the Skeleton2D from [method SkeletonModificationStack2D.get_skeleton] and it's draw functions, as the [SkeletonModification2D] resource cannot draw on its own.
 *
*/
protected _draw_editor_gizmo(): void;

/** Executes the given modification. This is where the modification performs whatever function it is designed to do. */
protected _execute(): void;

/** Called when the modification is setup. This is where the modification performs initialization. */
protected _setup_modification(): void;

/** Takes an angle and clamps it so it is within the passed-in [param min] and [param max] range. [param invert] will inversely clamp the angle, clamping it to the range outside of the given bounds. */
clamp_angle(): float;

/** Returns whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
get_editor_draw_gizmo(): boolean;

/** Returns whether this modification has been successfully setup or not. */
get_is_setup(): boolean;

/** Returns the [SkeletonModificationStack2D] that this modification is bound to. Through the modification stack, you can access the Skeleton2D the modification is operating on. */
get_modification_stack(): SkeletonModificationStack2D;

/** Sets whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
set_editor_draw_gizmo(): void;

/** Manually allows you to set the setup state of the modification. This function should only rarely be used, as the [SkeletonModificationStack2D] the modification is bound to should handle setting the modification up. */
set_is_setup(): void;

  connect<T extends SignalsOf<SkeletonModification2D>>(signal: T, method: SignalFunction<SkeletonModification2D[T]>): number;






}

