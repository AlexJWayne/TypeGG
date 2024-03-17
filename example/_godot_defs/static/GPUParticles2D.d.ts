
/**
 * 2D particle node used to create a variety of particle systems and effects. [GPUParticles2D] features an emitter that generates some number of particles at a given rate.
 *
 * Use the [member process_material] property to add a [ParticleProcessMaterial] to configure particle appearance and behavior. Alternatively, you can add a [ShaderMaterial] which will be applied to all particles.
 *
 * 2D particles can optionally collide with [LightOccluder2D], but they don't collide with [PhysicsBody2D] nodes.
 *
*/
declare class GPUParticles2D extends Node2D  {

  
/**
 * 2D particle node used to create a variety of particle systems and effects. [GPUParticles2D] features an emitter that generates some number of particles at a given rate.
 *
 * Use the [member process_material] property to add a [ParticleProcessMaterial] to configure particle appearance and behavior. Alternatively, you can add a [ShaderMaterial] which will be applied to all particles.
 *
 * 2D particles can optionally collide with [LightOccluder2D], but they don't collide with [PhysicsBody2D] nodes.
 *
*/
  new(): GPUParticles2D; 
  static "new"(): GPUParticles2D 


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
 * Multiplier for particle's collision radius. `1.0` corresponds to the size of the sprite. If particles appear to sink into the ground when colliding, increase this value. If particles appear to float when colliding, decrease this value. Only effective if [member ParticleProcessMaterial.collision_mode] is [constant ParticleProcessMaterial.COLLISION_RIGID] or [constant ParticleProcessMaterial.COLLISION_HIDE_ON_CONTACT].
 *
 * **Note:** Particles always have a spherical collision shape.
 *
*/
collision_base_size: float;

/** Particle draw order. Uses [enum DrawOrder] values. */
draw_order: int;

/** If [code]true[/code], particles are being emitted. [member emitting] can be used to start and stop particles from emitting. However, if [member one_shot] is [code]true[/code] setting [member emitting] to [code]true[/code] will not restart the emission cycle until after all active particles finish processing. You can use the [signal finished] signal to be notified once all active particles finish processing. */
emitting: boolean;

/** How rapidly particles in an emission cycle are emitted. If greater than [code]0[/code], there will be a gap in emissions before the next cycle begins. */
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

/** If [code]true[/code], particles use the parent node's coordinate space (known as local coordinates). This will cause particles to move and rotate along the [GPUParticles2D] node (and its parents) when it is moved or rotated. If [code]false[/code], particles use global coordinates; they will not move or rotate along the [GPUParticles2D] node (and its parents) when it is moved or rotated. */
local_coords: boolean;

/** If [code]true[/code], only one emission cycle occurs. If set [code]true[/code] during a cycle, emission will stop at the cycle's end. */
one_shot: boolean;

/** Particle system starts as if it had already run for this many seconds. */
preprocess: float;

/** [Material] for processing particles. Can be a [ParticleProcessMaterial] or a [ShaderMaterial]. */
process_material: Material;

/** Emission lifetime randomness ratio. */
randomness: float;

/** Particle system's running speed scaling ratio. A value of [code]0[/code] can be used to pause the particles. */
speed_scale: float;

/**
 * Path to another [GPUParticles2D] node that will be used as a subemitter (see [member ParticleProcessMaterial.sub_emitter_mode]). Subemitters can be used to achieve effects such as fireworks, sparks on collision, bubbles popping into water drops, and more.
 *
 * **Note:** When [member sub_emitter] is set, the target [GPUParticles2D] node will no longer emit particles on its own.
 *
*/
sub_emitter: NodePathType;

/**
 * Particle texture. If `null`, particles will be squares with a size of 1×1 pixels.
 *
 * **Note:** To use a flipbook texture, assign a new [CanvasItemMaterial] to the [GPUParticles2D]'s [member CanvasItem.material] property, then enable [member CanvasItemMaterial.particles_animation] and set [member CanvasItemMaterial.particles_anim_h_frames], [member CanvasItemMaterial.particles_anim_v_frames], and [member CanvasItemMaterial.particles_anim_loop] to match the flipbook texture.
 *
*/
texture: Texture2D;

/**
 * If `true`, enables particle trails using a mesh skinning system.
 *
 * **Note:** Unlike [GPUParticles3D], the number of trail sections and subdivisions is set with the [member trail_sections] and [member trail_section_subdivisions] properties.
 *
*/
trail_enabled: boolean;

/** The amount of time the particle's trail should represent (in seconds). Only effective if [member trail_enabled] is [code]true[/code]. */
trail_lifetime: float;

/** The number of subdivisions to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [member trail_sections]. Only effective if [member trail_enabled] is [code]true[/code]. */
trail_section_subdivisions: int;

/** The number of sections to use for the particle trail rendering. Higher values can result in smoother trail curves, at the cost of performance due to increased mesh complexity. See also [member trail_section_subdivisions]. Only effective if [member trail_enabled] is [code]true[/code]. */
trail_sections: int;

/**
 * The [Rect2] that determines the node's region which needs to be visible on screen for the particle system to be active.
 *
 * Grow the rect if particles suddenly appear/disappear when the node enters/exits the screen. The [Rect2] can be grown via code or with the **Particles → Generate Visibility Rect** editor tool.
 *
*/
visibility_rect: Rect2;

/**
 * Returns a rectangle containing the positions of all existing particles.
 *
 * **Note:** When using threaded rendering this method synchronizes the rendering thread. Calling it often may have a negative impact on performance.
 *
*/
capture_rect(): Rect2;

/** Sets this node's properties to match a given [CPUParticles2D] node. */
convert_from_particles(): void;

/** Emits a single particle. Whether [param xform], [param velocity], [param color] and [param custom] are applied depends on the value of [param flags]. See [enum EmitFlags]. */
emit_particle(): void;

/** Restarts all the existing particles. */
restart(): void;

  connect<T extends SignalsOf<GPUParticles2D>>(signal: T, method: SignalFunction<GPUParticles2D[T]>): number;



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
 * Emitted when all active particles have finished processing. When [member one_shot] is disabled, particles will process continuously, so this is never emitted.
 *
 * **Note:** Due to the particles being computed on the GPU there might be a delay before the signal gets emitted.
 *
*/
$finished: Signal<() => void>

}

