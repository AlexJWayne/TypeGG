
/**
 * 3D particle node used to create a variety of particle systems and effects. [GPUParticles3D] features an emitter that generates some number of particles at a given rate.
 *
 * Use [member process_material] to add a [ParticleProcessMaterial] to configure particle appearance and behavior. Alternatively, you can add a [ShaderMaterial] which will be applied to all particles.
 *
*/
declare class GPUParticles3D extends GeometryInstance3D  {

  
/**
 * 3D particle node used to create a variety of particle systems and effects. [GPUParticles3D] features an emitter that generates some number of particles at a given rate.
 *
 * Use [member process_material] to add a [ParticleProcessMaterial] to configure particle appearance and behavior. Alternatively, you can add a [ShaderMaterial] which will be applied to all particles.
 *
*/
  new(): GPUParticles3D; 
  static "new"(): GPUParticles3D 


/**
 * The number of particles to emit in one emission cycle. The effective emission rate is `(amount * amount_ratio) / lifetime` particles per second. Higher values will increase GPU requirements, even if not all particles are visible at a given time or if [member amount_ratio] is decreased.
 *
 * **Note:** Changing this value will cause the particle system to restart. To avoid this, change [member amount_ratio] instead.
 *
*/
amount: int;

/**
 * The ratio of particles that should actually be emitted. If set to a value lower than `1.0`, this will set the amount of emitted particles throughout the lifetime to `amount * amount_ratio`. Unlike changing [member amount], changing [member amount_ratio] while emitting does not affect already-emitted particles and doesn't cause the particle system to restart. [member amount_ratio] can be used to create effects that make the number of emitted particles vary over time.
 *
 * **Note:** Reducing the [member amount_ratio] has no performance benefit, since resources need to be allocated and processed for the total [member amount] of particles regardless of the [member amount_ratio]. If you don't intend to change the number of particles emitted while the particles are emitting, make sure [member amount_ratio] is set to `1` and change [member amount] to your liking instead.
 *
*/
amount_ratio: float;

/**
 * The base diameter for particle collision in meters. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [member ParticleProcessMaterial.collision_mode] is [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT].
 *
 * **Note:** Particles always have a spherical collision shape.
 *
*/
collision_base_size: float;

/**
 * Particle draw order. Uses [enum DrawOrder] values.
 *
 * **Note:** [constant DRAW_ORDER_INDEX] is the only option that supports motion vectors for effects like TAA. It is suggested to use this draw order if the particles are opaque to fix ghosting artifacts.
 *
*/
draw_order: int;

/** [Mesh] that is drawn for the first draw pass. */
draw_pass_1: Mesh;

/** [Mesh] that is drawn for the second draw pass. */
draw_pass_2: Mesh;

/** [Mesh] that is drawn for the third draw pass. */
draw_pass_3: Mesh;

/** [Mesh] that is drawn for the fourth draw pass. */
draw_pass_4: Mesh;

/** The number of draw passes when rendering particles. */
draw_passes: int;


/** If [code]true[/code], particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is [code]true[/code] setting [member emitting] to [code]true[/code] will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
emitting: boolean;

/** Time ratio between each emission. If [code]0[/code], particles are emitted continuously. If [code]1[/code], all particles are emitted simultaneously. */
explosiveness: float;

/** The particle system's frame rate is fixed to a value. For example, changing the value to 2 will make the particles render at 2 frames per second. Note this does not slow down the simulation of the particle system itself. */
fixed_fps: int;

/** If [code]true[/code], results in fractional delta calculation which has a smoother particles display effect. */
fract_delta: boolean;

/**
 * Causes all the particles in this node to interpolate towards the end of their lifetime.
 *
 * **Note:** This only works when used with a [ParticleProcessMaterial]. It needs to be manually implemented for custom process shaders.
 *
*/
interp_to_end: float;

/** Enables particle interpolation, which makes the particle movement smoother when their [member fixed_fps] is lower than the screen refresh rate. */
interpolate: boolean;

/** The amount of time each particle will exist (in seconds). The effective emission rate is [code](amount * amount_ratio) / lifetime[/code] particles per second. */
lifetime: float;

/** If [code]true[/code], particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. If [code]false[/code], particles use global coordinates; they will not move or rotate along the [GPUParticles3D] node (and its parents) when it is moved or rotated. */
local_coords: boolean;

/** If [code]true[/code], only the number of particles equal to [member amount] will be emitted. */
one_shot: boolean;

/** Amount of time to preprocess the particles before animation starts. Lets you start the animation some time after particles have started emitting. */
preprocess: float;

/** [Material] for processing particles. Can be a [ParticleProcessMaterial] or a [ShaderMaterial]. */
process_material: Material;

/** Emission randomness ratio. */
randomness: float;

/** Speed scaling ratio. A value of [code]0[/code] can be used to pause the particles. */
speed_scale: float;

/**
 * Path to another [GPUParticles3D] node that will be used as a subemitter (see [member ParticleProcessMaterial.sub_emitter_mode]). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.
 *
 * **Note:** When [member sub_emitter] is set, the target [GPUParticles3D] node will no longer emit particles on its own.
 *
*/
sub_emitter: NodePathType;

/**
 * If `true`, enables particle trails using a mesh skinning system. Designed to work with [RibbonTrailMesh] and [TubeTrailMesh].
 *
 * **Note:** [member BaseMaterial3D.use_particle_trails] must also be enabled on the particle mesh's material. Otherwise, setting [member trail_enabled] to `true` will have no effect.
 *
 * **Note:** Unlike [GPUParticles2D], the number of trail sections and subdivisions is set in the [RibbonTrailMesh] or the [TubeTrailMesh]'s properties.
 *
*/
trail_enabled: boolean;

/** The amount of time the particle's trail should represent (in seconds). Only effective if [member trail_enabled] is [code]true[/code]. */
trail_lifetime: float;


/**
 * The [AABB] that determines the node's region which needs to be visible on screen for the particle system to be active. [member GeometryInstance3D.extra_cull_margin] is added on each of the AABB's axes. Particle collisions and attraction will only occur within this area.
 *
 * Grow the box if particles suddenly appear/disappear when the node enters/exits the screen. The [AABB] can be grown via code or with the **Particles → Generate AABB** editor tool.
 *
 * **Note:** [member visibility_aabb] is overridden by [member GeometryInstance3D.custom_aabb] if that property is set to a non-default value.
 *
*/
visibility_aabb: AABB;

/** Returns the axis-aligned bounding box that contains all the particles that are active in the current frame. */
capture_aabb(): AABB;

/** Sets this node's properties to match a given [CPUParticles3D] node. */
convert_from_particles(): void;

/** Emits a single particle. Whether [param xform], [param velocity], [param color] and [param custom] are applied depends on the value of [param flags]. See [enum EmitFlags]. */
emit_particle(): void;

/** Returns the [Mesh] that is drawn at index [param pass]. */
get_draw_pass_mesh(): Mesh;

/** Restarts the particle emission, clearing existing particles. */
restart(): void;

/** Sets the [Mesh] that is drawn at index [param pass]. */
set_draw_pass_mesh(): void;

  connect<T extends SignalsOf<GPUParticles3D>>(signal: T, method: SignalFunction<GPUParticles3D[T]>): number;



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
 * Particles are drawn in reverse order of remaining lifetime. In other words, the particle with the lowest lifetime is drawn at the front.
 *
*/
static DRAW_ORDER_REVERSE_LIFETIME: any;

/**
 * Particles are drawn in order of depth.
 *
*/
static DRAW_ORDER_VIEW_DEPTH: any;

/**
 * Particle starts at the specified position.
 *
*/
static EMIT_FLAG_POSITION: any;

/**
 * Particle starts with specified rotation and scale.
 *
*/
static EMIT_FLAG_ROTATION_SCALE: any;

/**
 * Particle starts with the specified velocity vector, which defines the emission direction and speed.
 *
*/
static EMIT_FLAG_VELOCITY: any;

/**
 * Particle starts with specified color.
 *
*/
static EMIT_FLAG_COLOR: any;

/**
 * Particle starts with specified `CUSTOM` data.
 *
*/
static EMIT_FLAG_CUSTOM: any;

/**
 * Maximum number of draw passes supported.
 *
*/
static MAX_DRAW_PASSES: any;

/** No documentation provided. */
static TRANSFORM_ALIGN_DISABLED: any;

/** No documentation provided. */
static TRANSFORM_ALIGN_Z_BILLBOARD: any;

/** No documentation provided. */
static TRANSFORM_ALIGN_Y_TO_VELOCITY: any;

/** No documentation provided. */
static TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY: any;


/**
 * Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted.
 *
 * **Note:** Due to the particles being computed on the GPU there might be a delay before the signal gets emitted.
 *
*/
$finished: Signal<() => void>

}

