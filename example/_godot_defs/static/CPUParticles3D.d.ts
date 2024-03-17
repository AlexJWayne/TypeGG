
/**
 * CPU-based 3D particle node used to create a variety of particle systems and effects.
 *
 * See also [GPUParticles3D], which provides the same functionality with hardware acceleration, but may not run on older devices.
 *
*/
declare class CPUParticles3D extends GeometryInstance3D  {

  
/**
 * CPU-based 3D particle node used to create a variety of particle systems and effects.
 *
 * See also [GPUParticles3D], which provides the same functionality with hardware acceleration, but may not run on older devices.
 *
*/
  new(): CPUParticles3D; 
  static "new"(): CPUParticles3D 


/** Number of particles emitted in one emission cycle. */
amount: int;

/** Each particle's rotation will be animated along this [Curve]. */
angle_curve: Curve;

/** Maximum angle. */
angle_max: float;

/** Minimum angle. */
angle_min: float;

/** Each particle's angular velocity (rotation speed) will vary along this [Curve] over its lifetime. */
angular_velocity_curve: Curve;

/** Maximum initial angular velocity (rotation speed) applied to each particle in [i]degrees[/i] per second. */
angular_velocity_max: float;

/** Minimum initial angular velocity (rotation speed) applied to each particle in [i]degrees[/i] per second. */
angular_velocity_min: float;

/** Each particle's animation offset will vary along this [Curve]. */
anim_offset_curve: Curve;

/** Maximum animation offset. */
anim_offset_max: float;

/** Minimum animation offset. */
anim_offset_min: float;

/** Each particle's animation speed will vary along this [Curve]. */
anim_speed_curve: Curve;

/** Maximum particle animation speed. */
anim_speed_max: float;

/** Minimum particle animation speed. */
anim_speed_min: float;

/**
 * Each particle's initial color.
 *
 * **Note:** [member color] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] **must** be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color] will have no visible effect.
 *
*/
color: Color;

/**
 * Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]).
 *
 * **Note:** [member color_initial_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] **must** be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_initial_ramp] will have no visible effect.
 *
*/
color_initial_ramp: Gradient;

/**
 * Each particle's color will vary along this [GradientTexture1D] over its lifetime (multiplied with [member color]).
 *
 * **Note:** [member color_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] **must** be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_ramp] will have no visible effect.
 *
*/
color_ramp: Gradient;

/** Damping will vary along this [Curve]. */
damping_curve: Curve;

/** Maximum damping. */
damping_max: float;

/** Minimum damping. */
damping_min: float;

/** Unit vector specifying the particles' emission direction. */
direction: Vector3;

/** Particle draw order. Uses [enum DrawOrder] values. */
draw_order: int;

/** The rectangle's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_BOX]. */
emission_box_extents: Vector3;

/**
 * Sets the [Color]s to modulate particles by when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS].
 *
 * **Note:** [member emission_colors] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] **must** be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member emission_colors] will have no visible effect.
 *
*/
emission_colors: PackedColorArray;

/** Sets the direction the particles will be emitted in when using [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
emission_normals: PackedVector3Array;

/** Sets the initial positions to spawn particles when using [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
emission_points: PackedVector3Array;

/** The axis of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
emission_ring_axis: Vector3;

/** The height of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
emission_ring_height: float;

/** The inner radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
emission_ring_inner_radius: float;

/** The radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
emission_ring_radius: float;

/** Particles will be emitted inside this region. See [enum EmissionShape] for possible values. */
emission_shape: int;

/** The sphere's radius if [enum EmissionShape] is set to [constant EMISSION_SHAPE_SPHERE]. */
emission_sphere_radius: float;

/** If [code]true[/code], particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is [code]true[/code] setting [member emitting] to [code]true[/code] will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
emitting: boolean;

/** How rapidly particles in an emission cycle are emitted. If greater than [code]0[/code], there will be a gap in emissions before the next cycle begins. */
explosiveness: float;

/** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the particle system itself. */
fixed_fps: int;

/** Amount of [member spread] in Y/Z plane. A value of [code]1[/code] restricts particles to X/Z plane. */
flatness: float;

/** If [code]true[/code], results in fractional delta calculation which has a smoother particles display effect. */
fract_delta: boolean;

/** Gravity applied to every particle. */
gravity: Vector3;

/** Each particle's hue will vary along this [Curve]. */
hue_variation_curve: Curve;

/** Maximum hue variation. */
hue_variation_max: float;

/** Minimum hue variation. */
hue_variation_min: float;

/** Maximum value of the initial velocity. */
initial_velocity_max: float;

/** Minimum value of the initial velocity. */
initial_velocity_min: float;

/** Amount of time each particle will exist. */
lifetime: float;

/** Particle lifetime randomness ratio. */
lifetime_randomness: float;

/** Each particle's linear acceleration will vary along this [Curve]. */
linear_accel_curve: Curve;

/** Maximum linear acceleration. */
linear_accel_max: float;

/** Minimum linear acceleration. */
linear_accel_min: float;

/** If [code]true[/code], particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [CPUParticles3D] node (and its parents) when it is moved or rotated. If [code]false[/code], particles use global coordinates; they will not move or rotate along the [CPUParticles3D] node (and its parents) when it is moved or rotated. */
local_coords: boolean;

/** The [Mesh] used for each particle. If [code]null[/code], particles will be spheres. */
mesh: Mesh;

/** If [code]true[/code], only one emission cycle occurs. If set [code]true[/code] during a cycle, emission will stop at the cycle's end. */
one_shot: boolean;

/** Each particle's orbital velocity will vary along this [Curve]. */
orbit_velocity_curve: Curve;

/** Maximum orbit velocity. */
orbit_velocity_max: float;

/** Minimum orbit velocity. */
orbit_velocity_min: float;

/** Align Y axis of particle with the direction of its velocity. */
particle_flag_align_y: boolean;

/** If [code]true[/code], particles will not move on the Z axis. */
particle_flag_disable_z: boolean;

/** If [code]true[/code], particles rotate around Y axis by [member angle_min]. */
particle_flag_rotate_y: boolean;

/** Particle system starts as if it had already run for this many seconds. */
preprocess: float;

/** Each particle's radial acceleration will vary along this [Curve]. */
radial_accel_curve: Curve;

/** Maximum radial acceleration. */
radial_accel_max: float;

/** Minimum radial acceleration. */
radial_accel_min: float;

/** Emission lifetime randomness ratio. */
randomness: float;

/** Each particle's scale will vary along this [Curve]. */
scale_amount_curve: Curve;

/** Maximum scale. */
scale_amount_max: float;

/** Minimum scale. */
scale_amount_min: float;

/** Curve for the scale over life, along the x axis. */
scale_curve_x: Curve;

/** Curve for the scale over life, along the y axis. */
scale_curve_y: Curve;

/** Curve for the scale over life, along the z axis. */
scale_curve_z: Curve;

/** Particle system's running speed scaling ratio. A value of [code]0[/code] can be used to pause the particles. */
speed_scale: float;

/** If set to [code]true[/code], three different scale curves can be specified, one per scale axis. */
split_scale: boolean;

/** Each particle's initial direction range from [code]+spread[/code] to [code]-spread[/code] degrees. Applied to X/Z plane and Y/Z planes. */
spread: float;

/** Each particle's tangential acceleration will vary along this [Curve]. */
tangential_accel_curve: Curve;

/** Maximum tangent acceleration. */
tangential_accel_max: float;

/** Minimum tangent acceleration. */
tangential_accel_min: float;

/** Sets this node's properties to match a given [GPUParticles3D] node with an assigned [ParticleProcessMaterial]. */
convert_from_particles(): void;

/** Returns the [Curve] of the parameter specified by [enum Parameter]. */
get_param_curve(): Curve;

/** Returns the maximum value range for the given parameter. */
get_param_max(): float;

/** Returns the minimum value range for the given parameter. */
get_param_min(): float;

/** Returns the enabled state of the given particle flag (see [enum ParticleFlags] for options). */
get_particle_flag(): boolean;

/** Restarts the particle emitter. */
restart(): void;

/** Sets the [Curve] of the parameter specified by [enum Parameter]. */
set_param_curve(): void;

/** Sets the maximum value for the given parameter. */
set_param_max(): void;

/** Sets the minimum value for the given parameter. */
set_param_min(): void;

/** Enables or disables the given particle flag (see [enum ParticleFlags] for options). */
set_particle_flag(): void;

  connect<T extends SignalsOf<CPUParticles3D>>(signal: T, method: SignalFunction<CPUParticles3D[T]>): number;



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
 * Particles are drawn in order of depth.
 *
*/
static DRAW_ORDER_VIEW_DEPTH: any;

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
 * Use with [method set_particle_flag] to set [member particle_flag_rotate_y].
 *
*/
static PARTICLE_FLAG_ROTATE_Y: any;

/**
 * Use with [method set_particle_flag] to set [member particle_flag_disable_z].
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
 * Particles will be emitted in the volume of a sphere.
 *
*/
static EMISSION_SHAPE_SPHERE: any;

/**
 * Particles will be emitted on the surface of a sphere.
 *
*/
static EMISSION_SHAPE_SPHERE_SURFACE: any;

/**
 * Particles will be emitted in the volume of a box.
 *
*/
static EMISSION_SHAPE_BOX: any;

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
 * Particles will be emitted in a ring or cylinder.
 *
*/
static EMISSION_SHAPE_RING: any;

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

