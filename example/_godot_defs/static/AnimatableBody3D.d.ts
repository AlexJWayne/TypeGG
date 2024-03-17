
/**
 * An animatable 3D physics body. It can't be moved by external forces or contacts, but can be moved manually by other means such as code, [AnimationMixer]s (with [member AnimationMixer.callback_mode_process] set to [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS]), and [RemoteTransform3D].
 *
 * When [AnimatableBody3D] is moved, its linear and angular velocity are estimated and used to affect other physics bodies in its path. This makes it useful for moving platforms, doors, and other moving objects.
 *
*/
declare class AnimatableBody3D extends StaticBody3D  {

  
/**
 * An animatable 3D physics body. It can't be moved by external forces or contacts, but can be moved manually by other means such as code, [AnimationMixer]s (with [member AnimationMixer.callback_mode_process] set to [constant AnimationMixer.ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS]), and [RemoteTransform3D].
 *
 * When [AnimatableBody3D] is moved, its linear and angular velocity are estimated and used to affect other physics bodies in its path. This makes it useful for moving platforms, doors, and other moving objects.
 *
*/
  new(): AnimatableBody3D; 
  static "new"(): AnimatableBody3D 


/** If [code]true[/code], the body's movement will be synchronized to the physics frame. This is useful when animating movement via [AnimationPlayer], for example on moving platforms. Do [b]not[/b] use together with [method PhysicsBody3D.move_and_collide]. */
sync_to_physics: boolean;



  connect<T extends SignalsOf<AnimatableBody3D>>(signal: T, method: SignalFunction<AnimatableBody3D[T]>): number;






}

