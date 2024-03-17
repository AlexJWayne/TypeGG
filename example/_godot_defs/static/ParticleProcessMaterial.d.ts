
/**
 * [ParticleProcessMaterial] defines particle properties and behavior. It is used in the `process_material` of the [GPUParticles2D] and [GPUParticles3D] nodes. Some of this material's properties are applied to each particle when emitted, while others can have a [CurveTexture] or a [GradientTexture1D] applied to vary numerical or color values over the lifetime of the particle.
 *
*/
declare class ParticleProcessMaterial extends Material  {

  
/**
 * [ParticleProcessMaterial] defines particle properties and behavior. It is used in the `process_material` of the [GPUParticles2D] and [GPUParticles3D] nodes. Some of this material's properties are applied to each particle when emitted, while others can have a [CurveTexture] or a [GradientTexture1D] applied to vary numerical or color values over the lifetime of the particle.
 *
*/
  new(): ParticleProcessMaterial; 
  static "new"(): ParticleProcessMaterial 


/** The alpha value of each particle's color will be multiplied by this [CurveTexture] over its lifetime. */
alpha_curve: Texture2D;

/** Each particle's rotation will be animated along this [CurveTexture]. */
angle_curve: Texture2D;

/**
 * Maximum initial rotation applied to each particle, in degrees.
 *
 * Only applied when [member particle_flag_disable_z] or [member particle_flag_rotate_y] are `true` or the [BaseMaterial3D] being used to draw the particle is using [constant BaseMaterial3D.BILLBOARD_PARTICLES].
 *
*/
angle_max: float;

/** Minimum equivalent of [member angle_max]. */
angle_min: float;

/** Each particle's angular velocity (rotation speed) will vary along this [CurveTexture] over its lifetime. */
angular_velocity_curve: Texture2D;

/**
 * Maximum initial angular velocity (rotation speed) applied to each particle in **degrees** per second.
 *
 * Only applied when [member particle_flag_disable_z] or [member particle_flag_rotate_y] are `true` or the [BaseMaterial3D] being used to draw the particle is using [constant BaseMaterial3D.BILLBOARD_PARTICLES].
 *
*/
angular_velocity_max: float;

/** Minimum equivalent of [member angular_velocity_max]. */
angular_velocity_min: float;

/** Each particle's animation offset will vary along this [CurveTexture]. */
anim_offset_curve: Texture2D;

/** Maximum animation offset that corresponds to frame index in the texture. [code]0[/code] is the first frame, [code]1[/code] is the last one. See [member CanvasItemMaterial.particles_animation]. */
anim_offset_max: float;

/** Minimum equivalent of [member anim_offset_max]. */
anim_offset_min: float;

/** Each particle's animation speed will vary along this [CurveTexture]. */
anim_speed_curve: Texture2D;

/**
 * Maximum particle animation speed. Animation speed of `1` means that the particles will make full `0` to `1` offset cycle during lifetime, `2` means `2` cycles etc.
 *
 * With animation speed greater than `1`, remember to enable [member CanvasItemMaterial.particles_anim_loop] property if you want the animation to repeat.
 *
*/
anim_speed_max: float;

/** Minimum equivalent of [member anim_speed_max]. */
anim_speed_min: float;

/** If [code]true[/code], interaction with particle attractors is enabled. In 3D, attraction only occurs within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb]. */
attractor_interaction_enabled: boolean;

/** The particles' bounciness. Values range from [code]0[/code] (no bounce) to [code]1[/code] (full bounciness). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
collision_bounce: float;

/** The particles' friction. Values range from [code]0[/code] (frictionless) to [code]1[/code] (maximum friction). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
collision_friction: float;

/**
 * The particles' collision mode.
 *
 * **Note:** 3D Particles can only collide with [GPUParticlesCollision3D] nodes, not [PhysicsBody3D] nodes. To make particles collide with various objects, you can add [GPUParticlesCollision3D] nodes as children of [PhysicsBody3D] nodes. In 3D, collisions only occur within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb].
 *
 * **Note:** 2D Particles can only collide with [LightOccluder2D] nodes, not [PhysicsBody2D] nodes.
 *
*/
collision_mode: int;

/** If [code]true[/code], [member GPUParticles3D.collision_base_size] is multiplied by the particle's effective scale (see [member scale_min], [member scale_max], [member scale_curve], and [member scale_over_velocity_curve]). */
collision_use_scale: boolean;

/**
 * Each particle's initial color. If the [GPUParticles2D]'s `texture` is defined, it will be multiplied by this color.
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
color_initial_ramp: Texture2D;

/**
 * Each particle's color will vary along this [GradientTexture1D] over its lifetime (multiplied with [member color]).
 *
 * **Note:** [member color_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] **must** be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_ramp] will have no visible effect.
 *
*/
color_ramp: Texture2D;

/** Damping will vary along this [CurveTexture]. */
damping_curve: Texture2D;

/** The maximum rate at which particles lose velocity. For example value of [code]100[/code] means that the particle will go from [code]100[/code] velocity to [code]0[/code] in [code]1[/code] second. */
damping_max: float;

/** Minimum equivalent of [member damping_max]. */
damping_min: float;

/** Unit vector specifying the particles' emission direction. */
direction: Vector3;

/**
 * A curve that specifies the velocity along each of the axes of the particle system along its lifetime.
 *
 * **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.
 *
*/
directional_velocity_curve: Texture2D;

/**
 * Maximum directional velocity value, which is multiplied by [member directional_velocity_curve].
 *
 * **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.
 *
*/
directional_velocity_max: float;

/**
 * Minimum directional velocity value, which is multiplied by [member directional_velocity_curve].
 *
 * **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.
 *
*/
directional_velocity_min: float;

/** The box's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_BOX]. */
emission_box_extents: Vector3;

/**
 * Particle color will be modulated by color determined by sampling this texture at the same point as the [member emission_point_texture].
 *
 * **Note:** [member emission_color_texture] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] **must** be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member emission_color_texture] will have no visible effect.
 *
*/
emission_color_texture: Texture2D;

/**
 * Each particle's color will be multiplied by this [CurveTexture] over its lifetime.
 *
 * **Note:** This property won't have a visible effect unless the render material is marked as unshaded.
 *
*/
emission_curve: Texture2D;

/** Particle velocity and rotation will be set by sampling this texture at the same point as the [member emission_point_texture]. Used only in [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
emission_normal_texture: Texture2D;

/** The number of emission points if [member emission_shape] is set to [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
emission_point_count: int;

/** Particles will be emitted at positions determined by sampling this texture at a random position. Used with [constant EMISSION_SHAPE_POINTS] and [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
emission_point_texture: Texture2D;

/** The axis of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
emission_ring_axis: Vector3;

/** The height of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
emission_ring_height: float;

/** The inner radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
emission_ring_inner_radius: float;

/** The radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
emission_ring_radius: float;

/** Particles will be emitted inside this region. Use [enum EmissionShape] constants for values. */
emission_shape: int;

/** The offset for the [member emission_shape], in local space. */
emission_shape_offset: Vector3;

/** The scale of the [member emission_shape], in local space. */
emission_shape_scale: Vector3;

/** The sphere's radius if [member emission_shape] is set to [constant EMISSION_SHAPE_SPHERE]. */
emission_sphere_radius: float;

/** Amount of [member spread] along the Y axis. */
flatness: float;

/** Gravity applied to every particle. */
gravity: Vector3;

/** Each particle's hue will vary along this [CurveTexture]. */
hue_variation_curve: Texture2D;

/** Maximum initial hue variation applied to each particle. It will shift the particle color's hue. */
hue_variation_max: float;

/** Minimum equivalent of [member hue_variation_max]. */
hue_variation_min: float;

/** Percentage of the velocity of the respective [GPUParticles2D] or [GPUParticles3D] inherited by each particle when spawning. */
inherit_velocity_ratio: float;

/** Maximum initial velocity magnitude for each particle. Direction comes from [member direction] and [member spread]. */
initial_velocity_max: float;

/** Minimum equivalent of [member initial_velocity_max]. */
initial_velocity_min: float;

/** Particle lifetime randomness ratio. The equation for the lifetime of a particle is [code]lifetime * (1.0 - randf() * lifetime_randomness)[/code]. For example, a [member lifetime_randomness] of [code]0.4[/code] scales the lifetime between [code]0.6[/code] to [code]1.0[/code] of its original value. */
lifetime_randomness: float;

/** Each particle's linear acceleration will vary along this [CurveTexture]. */
linear_accel_curve: Texture2D;

/** Maximum linear acceleration applied to each particle in the direction of motion. */
linear_accel_max: float;

/** Minimum equivalent of [member linear_accel_max]. */
linear_accel_min: float;

/**
 * Each particle's orbital velocity will vary along this [CurveTexture].
 *
 * **Note:** For 3D orbital velocity, use a [CurveXYZTexture].
 *
 * **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.
 *
*/
orbit_velocity_curve: Texture2D;

/**
 * Maximum orbital velocity applied to each particle. Makes the particles circle around origin. Specified in number of full rotations around origin per second.
 *
 * **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.
 *
*/
orbit_velocity_max: float;

/**
 * Minimum equivalent of [member orbit_velocity_max].
 *
 * **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.
 *
*/
orbit_velocity_min: float;

/** Align Y axis of particle with the direction of its velocity. */
particle_flag_align_y: boolean;

/** Changes the behavior of the damping properties from a linear deceleration to a deceleration based on speed percentage. */
particle_flag_damping_as_friction: boolean;

/** If [code]true[/code], particles will not move on the z axis. */
particle_flag_disable_z: boolean;

/** If [code]true[/code], particles rotate around Y axis by [member angle_min]. */
particle_flag_rotate_y: boolean;

/** Each particle's radial acceleration will vary along this [CurveTexture]. */
radial_accel_curve: Texture2D;

/** Maximum radial acceleration applied to each particle. Makes particle accelerate away from the origin or towards it if negative. */
radial_accel_max: float;

/** Minimum equivalent of [member radial_accel_max]. */
radial_accel_min: float;

/**
 * A [CurveTexture] that defines the velocity over the particle's lifetime away (or toward) the [member velocity_pivot].
 *
 * **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.
 *
*/
radial_velocity_curve: Texture2D;

/**
 * Maximum radial velocity applied to each particle. Makes particles move away from the [member velocity_pivot], or toward it if negative.
 *
 * **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.
 *
*/
radial_velocity_max: float;

/**
 * Minimum radial velocity applied to each particle. Makes particles move away from the [member velocity_pivot], or toward it if negative.
 *
 * **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.
 *
*/
radial_velocity_min: float;

/** Each particle's scale will vary along this [CurveTexture]. If a [CurveXYZTexture] is supplied instead, the scale will be separated per-axis. */
scale_curve: Texture2D;

/** Maximum initial scale applied to each particle. */
scale_max: float;

/** Minimum equivalent of [member scale_max]. */
scale_min: float;

/** Either a [CurveTexture] or a [CurveXYZTexture] that scales each particle based on its velocity. */
scale_over_velocity_curve: Texture2D;

/**
 * Maximum velocity value reference for [member scale_over_velocity_curve].
 *
 * [member scale_over_velocity_curve] will be interpolated between [member scale_over_velocity_min] and [member scale_over_velocity_max].
 *
*/
scale_over_velocity_max: float;

/**
 * Minimum velocity value reference for [member scale_over_velocity_curve].
 *
 * [member scale_over_velocity_curve] will be interpolated between [member scale_over_velocity_min] and [member scale_over_velocity_max].
 *
*/
scale_over_velocity_min: float;

/** Each particle's initial direction range from [code]+spread[/code] to [code]-spread[/code] degrees. */
spread: float;

/**
 * The amount of particles to spawn from the subemitter node when a collision occurs. When combined with [constant COLLISION_HIDE_ON_CONTACT] on the main particles material, this can be used to achieve effects such as raindrops hitting the ground.
 *
 * **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the **subemitter node** (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
 *
*/
sub_emitter_amount_at_collision: int;

/**
 * The amount of particles to spawn from the subemitter node when the particle expires.
 *
 * **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the **subemitter node** (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
 *
*/
sub_emitter_amount_at_end: int;

/**
 * The frequency at which particles should be emitted from the subemitter node. One particle will be spawned every [member sub_emitter_frequency] seconds.
 *
 * **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the **subemitter node** (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.
 *
*/
sub_emitter_frequency: float;

/** If [code]true[/code], the subemitter inherits the parent particle's velocity when it spawns. */
sub_emitter_keep_velocity: boolean;

/** The particle subemitter mode (see [member GPUParticles2D.sub_emitter] and [member GPUParticles3D.sub_emitter]). */
sub_emitter_mode: int;

/** Each particle's tangential acceleration will vary along this [CurveTexture]. */
tangential_accel_curve: Texture2D;

/** Maximum tangential acceleration applied to each particle. Tangential acceleration is perpendicular to the particle's velocity giving the particles a swirling motion. */
tangential_accel_max: float;

/** Minimum equivalent of [member tangential_accel_max]. */
tangential_accel_min: float;

/**
 * If `true`, enables turbulence for the particle system. Turbulence can be used to vary particle movement according to its position (based on a 3D noise pattern). In 3D, [GPUParticlesAttractorVectorField3D] with [NoiseTexture3D] can be used as an alternative to turbulence that works in world space and with multiple particle systems reacting in the same way.
 *
 * **Note:** Enabling turbulence has a high performance cost on the GPU. Only enable turbulence on a few particle systems at once at most, and consider disabling it when targeting mobile/web platforms.
 *
*/
turbulence_enabled: boolean;

/**
 * Maximum turbulence influence on each particle.
 *
 * The actual amount of turbulence influence on each particle is calculated as a random value between [member turbulence_influence_min] and [member turbulence_influence_max] and multiplied by the amount of turbulence influence from [member turbulence_influence_over_life].
 *
*/
turbulence_influence_max: float;

/**
 * Minimum turbulence influence on each particle.
 *
 * The actual amount of turbulence influence on each particle is calculated as a random value between [member turbulence_influence_min] and [member turbulence_influence_max] and multiplied by the amount of turbulence influence from [member turbulence_influence_over_life].
 *
*/
turbulence_influence_min: float;

/** Each particle's amount of turbulence will be influenced along this [CurveTexture] over its life time. */
turbulence_influence_over_life: Texture2D;

/**
 * Maximum displacement of each particle's spawn position by the turbulence.
 *
 * The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between [member turbulence_initial_displacement_min] and [member turbulence_initial_displacement_max].
 *
*/
turbulence_initial_displacement_max: float;

/**
 * Minimum displacement of each particle's spawn position by the turbulence.
 *
 * The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between [member turbulence_initial_displacement_min] and [member turbulence_initial_displacement_max].
 *
*/
turbulence_initial_displacement_min: float;

/**
 * This value controls the overall scale/frequency of the turbulence noise pattern.
 *
 * A small scale will result in smaller features with more detail while a high scale will result in smoother noise with larger features.
 *
*/
turbulence_noise_scale: float;

/**
 * A scrolling velocity for the turbulence field. This sets a directional trend for the pattern to move in over time.
 *
 * The default value of `Vector3(0, 0, 0)` turns off the scrolling.
 *
*/
turbulence_noise_speed: Vector3;

/**
 * The in-place rate of change of the turbulence field. This defines how quickly the noise pattern varies over time.
 *
 * A value of 0.0 will result in a fixed pattern.
 *
*/
turbulence_noise_speed_random: float;

/** The turbulence noise strength. Increasing this will result in a stronger, more contrasting, flow pattern. */
turbulence_noise_strength: float;

/** A [CurveTexture] that defines the maximum velocity of a particle during its lifetime. */
velocity_limit_curve: Texture2D;

/** A pivot point used to calculate radial and orbital velocity of particles. */
velocity_pivot: Vector3;

/** Returns the maximum value range for the given parameter. */
get_param_max(): float;

/** Returns the minimum value range for the given parameter. */
get_param_min(): float;

/** Returns the [Texture2D] used by the specified parameter. */
get_param_texture(): Texture2D;

/** Returns [code]true[/code] if the specified particle flag is enabled. See [enum ParticleFlags] for options. */
get_particle_flag(): boolean;

/** Sets the maximum value range for the given parameter. */
set_param_max(): void;

/** Sets the minimum value range for the given parameter. */
set_param_min(): void;

/** Sets the [Texture2D] for the specified [enum Parameter]. */
set_param_texture(): void;

/** If [code]true[/code], enables the specified particle flag. See [enum ParticleFlags] for options. */
set_particle_flag(): void;

  connect<T extends SignalsOf<ParticleProcessMaterial>>(signal: T, method: SignalFunction<ParticleProcessMaterial[T]>): number;



/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set initial velocity properties.
 *
*/
static PARAM_INITIAL_LINEAR_VELOCITY: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set angular velocity properties.
 *
*/
static PARAM_ANGULAR_VELOCITY: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set orbital velocity properties.
 *
*/
static PARAM_ORBIT_VELOCITY: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set linear acceleration properties.
 *
*/
static PARAM_LINEAR_ACCEL: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set radial acceleration properties.
 *
*/
static PARAM_RADIAL_ACCEL: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set tangential acceleration properties.
 *
*/
static PARAM_TANGENTIAL_ACCEL: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set damping properties.
 *
*/
static PARAM_DAMPING: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set angle properties.
 *
*/
static PARAM_ANGLE: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set scale properties.
 *
*/
static PARAM_SCALE: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set hue variation properties.
 *
*/
static PARAM_HUE_VARIATION: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set animation speed properties.
 *
*/
static PARAM_ANIM_SPEED: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set animation offset properties.
 *
*/
static PARAM_ANIM_OFFSET: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set radial velocity properties.
 *
*/
static PARAM_RADIAL_VELOCITY: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set directional velocity properties.
 *
*/
static PARAM_DIRECTIONAL_VELOCITY: any;

/**
 * Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set scale over velocity properties.
 *
*/
static PARAM_SCALE_OVER_VELOCITY: any;

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

/** No documentation provided. */
static PARTICLE_FLAG_DAMPING_AS_FRICTION: any;

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
 * Particles will be emitted at a position determined by sampling a random point on the [member emission_point_texture]. Particle color will be modulated by [member emission_color_texture].
 *
*/
static EMISSION_SHAPE_POINTS: any;

/**
 * Particles will be emitted at a position determined by sampling a random point on the [member emission_point_texture]. Particle velocity and rotation will be set based on [member emission_normal_texture]. Particle color will be modulated by [member emission_color_texture].
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
 * Use with [method set_param_min] and [method set_param_max] to set the turbulence minimum und maximum influence on each particles velocity.
 *
*/
static PARAM_TURB_VEL_INFLUENCE: any;

/**
 * Use with [method set_param_min] and [method set_param_max] to set the turbulence minimum and maximum displacement of the particles spawn position.
 *
*/
static PARAM_TURB_INIT_DISPLACEMENT: any;

/**
 * Use with [method set_param_texture] to set the turbulence influence over the particles life time.
 *
*/
static PARAM_TURB_INFLUENCE_OVER_LIFE: any;

/** No documentation provided. */
static SUB_EMITTER_DISABLED: any;

/** No documentation provided. */
static SUB_EMITTER_CONSTANT: any;

/** No documentation provided. */
static SUB_EMITTER_AT_END: any;

/** No documentation provided. */
static SUB_EMITTER_AT_COLLISION: any;

/**
 * Represents the size of the [enum SubEmitterMode] enum.
 *
*/
static SUB_EMITTER_MAX: any;

/**
 * No collision for particles. Particles will go through [GPUParticlesCollision3D] nodes.
 *
*/
static COLLISION_DISABLED: any;

/**
 * [RigidBody3D]-style collision for particles using [GPUParticlesCollision3D] nodes.
 *
*/
static COLLISION_RIGID: any;

/**
 * Hide particles instantly when colliding with a [GPUParticlesCollision3D] node. This can be combined with a subemitter that uses the [constant COLLISION_RIGID] collision mode to "replace" the parent particle with the subemitter on impact.
 *
*/
static COLLISION_HIDE_ON_CONTACT: any;

/**
 * Represents the size of the [enum CollisionMode] enum.
 *
*/
static COLLISION_MAX: any;



}

