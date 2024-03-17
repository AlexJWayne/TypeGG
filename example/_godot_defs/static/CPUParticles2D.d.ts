
/**
 * CPU-based 2D particle node used to create a variety of particle systems and effects.
 *
 * See also [GPUParticles2D], which provides the same functionality with hardware acceleration, but may not run on older devices.
 *
*/
declare class CPUParticles2D extends Node2D  {

  
/**
 * CPU-based 2D particle node used to create a variety of particle systems and effects.
 *
 * See also [GPUParticles2D], which provides the same functionality with hardware acceleration, but may not run on older devices.
 *
*/
  new(): CPUParticles2D; 
  static "new"(): CPUParticles2D 


/** Number of particles emitted in one emission cycle. */
amount: int;

/** Each particle's rotation will be animated along this [Curve]. */
angle_curve: Curve;

/** Maximum initial rotation applied to each particle, in degrees. */
angle_max: float;

/** Minimum equivalent of [member angle_max]. */
angle_min: float;

/** Each particle's angular velocity will vary along this [Curve]. */
angular_velocity_curve: Curve;

/** Maximum initial angular velocity (rotation speed) applied to each particle in [i]degrees[/i] per second. */
angular_velocity_max: float;

/** Minimum equivalent of [member angular_velocity_max]. */
angular_velocity_min: float;

/** Each particle's animation offset will vary along this [Curve]. */
anim_offset_curve: Curve;

/** Maximum animation offset that corresponds to frame index in the texture. [code]0[/code] is the first frame, [code]1[/code] is the last one. See [member CanvasItemMaterial.particles_animation]. */
anim_offset_max: float;

/** Minimum equivalent of [member anim_offset_max]. */
anim_offset_min: float;

/** Each particle's animation speed will vary along this [Curve]. */
anim_speed_curve: Curve;

/**
 * Maximum particle animation speed. Animation speed of `1` means that the particles will make full `0` to `1` offset cycle during lifetime, `2` means `2` cycles etc.
 *
 * With animation speed greater than `1`, remember to enable [member CanvasItemMaterial.particles_anim_loop] property if you want the animation to repeat.
 *
*/
anim_speed_max: float;

/** Minimum equivalent of [member anim_speed_max]. */
anim_speed_min: float;

/** Each particle's initial color. If [member texture] is defined, it will be multiplied by this color. */
color: Color;

/** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]). */
color_initial_ramp: Gradient;

/** Each particle's color will vary along this [Gradient] (multiplied with [member color]). */
color_ramp: Gradient;

/** Damping will vary along this [Curve]. */
damping_curve: Curve;

/** The maximum rate at which particles lose velocity. For example value of [code]100[/code] means that the particle will go from [code]100[/code] velocity to [code]0[/code] in [code]1[/code] second. */
damping_max: float;

/** Minimum equivalent of [member damping_max]. */
damping_min: float;

/** Unit vector specifying the particles' emission direction. */
direction: Vector2;

/** Particle draw order. Uses [enum DrawOrder] values. */
draw_order: int;

/** Sets the [Color]s to modulate particles by when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
emission_colors: PackedColorArray;

/** Sets the direction the particles will be emitted in when using [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
emission_normals: PackedVector2Array;

/** Sets the initial positions to spawn particles when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
emission_points: PackedVector2Array;

/** The rectangle's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_RECTANGLE]. */
emission_rect_extents: Vector2;

/** Particles will be emitted inside this region. See [enum EmissionShape] for possible values. */
emission_shape: int;

/** The sphere's radius if [member emission_shape] is set to [constant EMISSION_SHAPE_SPHERE]. */
emission_sphere_radius: float;

/** If [code]true[/code], particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is [code]true[/code] setting [member emitting] to [code]true[/code] will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
emitting: boolean;

/** How rapidly particles in an emission cycle are emitted. If greater than [code]0[/code], there will be a gap in emissions before the next cycle begins. */
explosiveness: float;

/** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
fixed_fps: int;

/** If [code]true[/code], results in fractional delta calculation which has a smoother particles display effect. */
fract_delta: boolean;

/** Gravity applied to every particle. */
gravity: Vector2;

/** Each particle's hue will vary along this [Curve]. */
hue_variation_curve: Curve;

/** Maximum initial hue variation applied to each particle. It will shift the particle color's hue. */
hue_variation_max: float;

/** Minimum equivalent of [member hue_variation_max]. */
hue_variation_min: float;

/** Maximum initial velocity magnitude for each particle. Direction comes from [member direction] and [member spread]. */
initial_velocity_max: float;

/** Minimum equivalent of [member initial_velocity_max]. */
initial_velocity_min: float;

/** Amount of time each particle will exist. */
lifetime: float;

/** Particle lifetime randomness ratio. */
lifetime_randomness: float;

/** Each particle's linear acceleration will vary along this [Curve]. */
linear_accel_curve: Curve;

/** Maximum linear acceleration applied to each particle in the direction of motion. */
linear_accel_max: float;

/** Minimum equivalent of [member linear_accel_max]. */
linear_accel_min: float;

/** If [code]true[/code], particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [CPUParticles2D] node (and its parents) when it is moved or rotated. If [code]false[/code], particles use global coordinates; they will not move or rotate along the [CPUParticles2D] node (and its parents) when it is moved or rotated. */
local_coords: boolean;

/** If [code]true[/code], only one emission cycle occurs. If set [code]true[/code] during a cycle, emission will stop at the cycle's end. */
one_shot: boolean;

/** Each particle's orbital velocity will vary along this [Curve]. */
orbit_velocity_curve: Curve;

/** Maximum orbital velocity applied to each particle. Makes the particles circle around origin. Specified in number of full rotations around origin per second. */
orbit_velocity_max: float;

/** Minimum equivalent of [member orbit_velocity_max]. */
orbit_velocity_min: float;

/** Align Y axis of particle with the direction of its velocity. */
particle_flag_align_y: boolean;

/** Particle system starts as if it had already run for this many seconds. */
preprocess: float;

/** Each particle's radial acceleration will vary along this [Curve]. */
radial_accel_curve: Curve;

/** Maximum radial acceleration applied to each particle. Makes particle accelerate away from the origin or towards it if negative. */
radial_accel_max: float;

/** Minimum equivalent of [member radial_accel_max]. */
radial_accel_min: float;

/** Emission lifetime randomness ratio. */
randomness: float;

/** Each particle's scale will vary along this [Curve]. */
scale_amount_curve: Curve;

/** Maximum initial scale applied to each particle. */
scale_amount_max: float;

/** Minimum equivalent of [member scale_amount_max]. */
scale_amount_min: float;

/**
 * Each particle's horizontal scale will vary along this [Curve].
 *
 * [member split_scale] must be enabled.
 *
*/
scale_curve_x: Curve;

/**
 * Each particle's vertical scale will vary along this [Curve].
 *
 * [member split_scale] must be enabled.
 *
*/
scale_curve_y: Curve;

/** Particle system's running speed scaling ratio. A value of [code]0[/code] can be used to pause the particles. */
speed_scale: float;

/** If [code]true[/code], the scale curve will be split into x and y components. See [member scale_curve_x] and [member scale_curve_y]. */
split_scale: boolean;

/** Each particle's initial direction range from [code]+spread[/code] to [code]-spread[/code] degrees. */
spread: float;

/** Each particle's tangential acceleration will vary along this [Curve]. */
tangential_accel_curve: Curve;

/** Maximum tangential acceleration applied to each particle. Tangential acceleration is perpendicular to the particle's velocity giving the particles a swirling motion. */
tangential_accel_max: float;

/** Minimum equivalent of [member tangential_accel_max]. */
tangential_accel_min: float;

/** Particle texture. If [code]null[/code], particles will be squares. */
texture: Texture2D;

/** Sets this node's properties to match a given [GPUParticles2D] node with an assigned [ParticleProcessMaterial]. */
convert_from_particles(): void;

/** Returns the [Curve] of the parameter specified by [enum Parameter]. */
get_param_curve(): Curve;

/** Returns the maximum value range for the given parameter. */
get_param_max(): float;

/** Returns the minimum value range for the given parameter. */
get_param_min(): float;

/** Returns the enabled state of the given flag (see [enum ParticleFlags] for options). */
get_particle_flag(): boolean;

/** Restarts the particle emitter. */
restart(): void;

/** Sets the [Curve] of the parameter specified by [enum Parameter]. */
set_param_curve(): void;

/** Sets the maximum value for the given parameter. */
set_param_max(): void;

/** Sets the minimum value for the given parameter. */
set_param_min(): void;

/** Enables or disables the given flag (see [enum ParticleFlags] for options). */
set_particle_flag(): void;

  connect<T extends SignalsOf<CPUParticles2D>>(signal: T, method: SignalFunction<CPUParticles2D[T]>): number;



/**
 * Particles are drawn in the order emitted.
 *
*/
static DRAW_ORDER_INDEX: any;

/**
 * Particles are drawn in order of remaining lifetime. In other words, the particle with the highest lifetime is drawn at the front.
 *
*/
static DRAW_ORDER_LIFETIME: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set initial velocity properties.
 *
*/
static PARAM_INITIAL_LINEAR_VELOCITY: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set angular velocity properties.
 *
*/
static PARAM_ANGULAR_VELOCITY: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set orbital velocity properties.
 *
*/
static PARAM_ORBIT_VELOCITY: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set linear acceleration properties.
 *
*/
static PARAM_LINEAR_ACCEL: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set radial acceleration properties.
 *
*/
static PARAM_RADIAL_ACCEL: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set tangential acceleration properties.
 *
*/
static PARAM_TANGENTIAL_ACCEL: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set damping properties.
 *
*/
static PARAM_DAMPING: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set angle properties.
 *
*/
static PARAM_ANGLE: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set scale properties.
 *
*/
static PARAM_SCALE: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set hue variation properties.
 *
*/
static PARAM_HUE_VARIATION: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set animation speed properties.
 *
*/
static PARAM_ANIM_SPEED: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_curve] to set animation offset properties.
 *
*/
static PARAM_ANIM_OFFSET: any;

/**
 * Represents the size of the [enum Parameter] enum.
 *
*/
static PARAM_MAX: any;

/**
 * Use with [method set_particle_flag] to set [member particle_flag_align_y].
 *
*/
static PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY: any;

/**
 * Present for consistency with 3D particle nodes, not used in 2D.
 *
*/
static PARTICLE_FLAG_ROTATE_Y: any;

/**
 * Present for consistency with 3D particle nodes, not used in 2D.
 *
*/
static PARTICLE_FLAG_DISABLE_Z: any;

/**
 * Represents the size of the [enum ParticleFlags] enum.
 *
*/
static PARTICLE_FLAG_MAX: any;

/**
 * All particles will be emitted from a single point.
 *
*/
static EMISSION_SHAPE_POINT: any;

/**
 * Particles will be emitted in the volume of a sphere flattened to two dimensions.
 *
*/
static EMISSION_SHAPE_SPHERE: any;

/**
 * Particles will be emitted on the surface of a sphere flattened to two dimensions.
 *
*/
static EMISSION_SHAPE_SPHERE_SURFACE: any;

/**
 * Particles will be emitted in the area of a rectangle.
 *
*/
static EMISSION_SHAPE_RECTANGLE: any;

/**
 * Particles will be emitted at a position chosen randomly among [member emission_points]. Particle color will be modulated by [member emission_colors].
 *
*/
static EMISSION_SHAPE_POINTS: any;

/**
 * Particles will be emitted at a position chosen randomly among [member emission_points]. Particle velocity and rotation will be set based on [member emission_normals]. Particle color will be modulated by [member emission_colors].
 *
*/
static EMISSION_SHAPE_DIRECTED_POINTS: any;

/**
 * Represents the size of the [enum EmissionShape] enum.
 *
*/
static EMISSION_SHAPE_MAX: any;


/**
 * Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted.
 *
*/
$finished: Signal<() => void>

}

