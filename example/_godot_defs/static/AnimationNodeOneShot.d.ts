
/**
 * A resource to add to an [AnimationNodeBlendTree]. This animation node will execute a sub-animation and return once it finishes. Blend times for fading in and out can be customized, as well as filters.
 *
 * After setting the request and changing the animation playback, the one-shot node automatically clears the request on the next process frame by setting its `request` value to [constant ONE_SHOT_REQUEST_NONE].
 *
 * @example 
 * 
 * 
 * # Play child animation connected to "shot" port.
 * animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_FIRE)
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_FIRE
 * # Abort child animation connected to "shot" port.
 * animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_ABORT)
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_ABORT
 * # Abort child animation with fading out connected to "shot" port.
 * animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_FADE_OUT)
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_FADE_OUT
 * # Get current state (read-only).
 * animation_tree.get("parameters/OneShot/active")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/active"]
 * # Get current internal state (read-only).
 * animation_tree.get("parameters/OneShot/internal_active")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/internal_active"]
 * 
 * 
 * // Play child animation connected to "shot" port.
 * animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.Fire);
 * // Abort child animation connected to "shot" port.
 * animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.Abort);
 * // Abort child animation with fading out connected to "shot" port.
 * animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.FadeOut);
 * // Get current state (read-only).
 * animationTree.Get("parameters/OneShot/active");
 * // Get current internal state (read-only).
 * animationTree.Get("parameters/OneShot/internal_active");
 * 
 * @summary 
 * 
 *
*/
declare class AnimationNodeOneShot extends AnimationNodeSync  {

  
/**
 * A resource to add to an [AnimationNodeBlendTree]. This animation node will execute a sub-animation and return once it finishes. Blend times for fading in and out can be customized, as well as filters.
 *
 * After setting the request and changing the animation playback, the one-shot node automatically clears the request on the next process frame by setting its `request` value to [constant ONE_SHOT_REQUEST_NONE].
 *
 * @example 
 * 
 * 
 * # Play child animation connected to "shot" port.
 * animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_FIRE)
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_FIRE
 * # Abort child animation connected to "shot" port.
 * animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_ABORT)
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_ABORT
 * # Abort child animation with fading out connected to "shot" port.
 * animation_tree.set("parameters/OneShot/request", AnimationNodeOneShot.ONE_SHOT_REQUEST_FADE_OUT)
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/request"] = AnimationNodeOneShot.ONE_SHOT_REQUEST_FADE_OUT
 * # Get current state (read-only).
 * animation_tree.get("parameters/OneShot/active")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/active"]
 * # Get current internal state (read-only).
 * animation_tree.get("parameters/OneShot/internal_active")
 * # Alternative syntax (same result as above).
 * animation_tree["parameters/OneShot/internal_active"]
 * 
 * 
 * // Play child animation connected to "shot" port.
 * animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.Fire);
 * // Abort child animation connected to "shot" port.
 * animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.Abort);
 * // Abort child animation with fading out connected to "shot" port.
 * animationTree.Set("parameters/OneShot/request", (int)AnimationNodeOneShot.OneShotRequest.FadeOut);
 * // Get current state (read-only).
 * animationTree.Get("parameters/OneShot/active");
 * // Get current internal state (read-only).
 * animationTree.Get("parameters/OneShot/internal_active");
 * 
 * @summary 
 * 
 *
*/
  new(): AnimationNodeOneShot; 
  static "new"(): AnimationNodeOneShot 


/**
 * If `true`, the sub-animation will restart automatically after finishing.
 *
 * In other words, to start auto restarting, the animation must be played once with the [constant ONE_SHOT_REQUEST_FIRE] request. The [constant ONE_SHOT_REQUEST_ABORT] request stops the auto restarting, but it does not disable the [member autorestart] itself. So, the [constant ONE_SHOT_REQUEST_FIRE] request will start auto restarting again.
 *
*/
autorestart: boolean;

/** The delay after which the automatic restart is triggered, in seconds. */
autorestart_delay: float;

/** If [member autorestart] is [code]true[/code], a random additional delay (in seconds) between 0 and this value will be added to [member autorestart_delay]. */
autorestart_random_delay: float;

/** Determines how cross-fading between animations is eased. If empty, the transition will be linear. */
fadein_curve: Curve;

/** The fade-in duration. For example, setting this to [code]1.0[/code] for a 5 second length animation will produce a cross-fade that starts at 0 second and ends at 1 second during the animation. */
fadein_time: float;

/** Determines how cross-fading between animations is eased. If empty, the transition will be linear. */
fadeout_curve: Curve;

/** The fade-out duration. For example, setting this to [code]1.0[/code] for a 5 second length animation will produce a cross-fade that starts at 4 second and ends at 5 second during the animation. */
fadeout_time: float;

/** The blend type. */
mix_mode: int;



  connect<T extends SignalsOf<AnimationNodeOneShot>>(signal: T, method: SignalFunction<AnimationNodeOneShot[T]>): number;



/**
 * The default state of the request. Nothing is done.
 *
*/
static ONE_SHOT_REQUEST_NONE: any;

/**
 * The request to play the animation connected to "shot" port.
 *
*/
static ONE_SHOT_REQUEST_FIRE: any;

/**
 * The request to stop the animation connected to "shot" port.
 *
*/
static ONE_SHOT_REQUEST_ABORT: any;

/**
 * The request to fade out the animation connected to "shot" port.
 *
*/
static ONE_SHOT_REQUEST_FADE_OUT: any;

/**
 * Blends two animations. See also [AnimationNodeBlend2].
 *
*/
static MIX_MODE_BLEND: any;

/**
 * Blends two animations additively. See also [AnimationNodeAdd2].
 *
*/
static MIX_MODE_ADD: any;



}

