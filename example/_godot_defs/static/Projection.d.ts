
/**
 * A 4x4 matrix used for 3D projective transformations. It can represent transformations such as translation, rotation, scaling, shearing, and perspective division. It consists of four [Vector4] columns.
 *
 * For purely linear transformations (translation, rotation, and scale), it is recommended to use [Transform3D], as it is more performant and requires less memory.
 *
 * Used internally as [Camera3D]'s projection matrix.
 *
*/
declare class Projection {

  
/**
 * A 4x4 matrix used for 3D projective transformations. It can represent transformations such as translation, rotation, scaling, shearing, and perspective division. It consists of four [Vector4] columns.
 *
 * For purely linear transformations (translation, rotation, and scale), it is recommended to use [Transform3D], as it is more performant and requires less memory.
 *
 * Used internally as [Camera3D]'s projection matrix.
 *
*/
  new(): Projection; 
  static "new"(): Projection 


/** The projection matrix's W vector (column 3). Equivalent to array index [code]3[/code]. */
w: Vector4;

/** The projection matrix's X vector (column 0). Equivalent to array index [code]0[/code]. */
x: Vector4;

/** The projection matrix's Y vector (column 1). Equivalent to array index [code]1[/code]. */
y: Vector4;

/** The projection matrix's Z vector (column 2). Equivalent to array index [code]2[/code]. */
z: Vector4;

/** Creates a new [Projection] that projects positions from a depth range of [code]-1[/code] to [code]1[/code] to one that ranges from [code]0[/code] to [code]1[/code], and flips the projected positions vertically, according to [param flip_y]. */
create_depth_correction(): Projection;

/** Creates a new [Projection] that scales a given projection to fit around a given [AABB] in projection space. */
create_fit_aabb(): Projection;

/**
 * Creates a new [Projection] for projecting positions onto a head-mounted display with the given X:Y aspect ratio, distance between eyes, display width, distance to lens, oversampling factor, and depth clipping planes.
 *
 * [param eye] creates the projection for the left eye when set to 1, or the right eye when set to 2.
 *
*/
create_for_hmd(): Projection;

/** Creates a new [Projection] that projects positions in a frustum with the given clipping planes. */
create_frustum(): Projection;

/**
 * Creates a new [Projection] that projects positions in a frustum with the given size, X:Y aspect ratio, offset, and clipping planes.
 *
 * [param flip_fov] determines whether the projection's field of view is flipped over its diagonal.
 *
*/
create_frustum_aspect(): Projection;

/** Creates a new [Projection] that projects positions into the given [Rect2]. */
create_light_atlas_rect(): Projection;

/** Creates a new [Projection] that projects positions using an orthogonal projection with the given clipping planes. */
create_orthogonal(): Projection;

/**
 * Creates a new [Projection] that projects positions using an orthogonal projection with the given size, X:Y aspect ratio, and clipping planes.
 *
 * [param flip_fov] determines whether the projection's field of view is flipped over its diagonal.
 *
*/
create_orthogonal_aspect(): Projection;

/**
 * Creates a new [Projection] that projects positions using a perspective projection with the given Y-axis field of view (in degrees), X:Y aspect ratio, and clipping planes.
 *
 * [param flip_fov] determines whether the projection's field of view is flipped over its diagonal.
 *
*/
create_perspective(): Projection;

/**
 * Creates a new [Projection] that projects positions using a perspective projection with the given Y-axis field of view (in degrees), X:Y aspect ratio, and clipping distances. The projection is adjusted for a head-mounted display with the given distance between eyes and distance to a point that can be focused on.
 *
 * [param eye] creates the projection for the left eye when set to 1, or the right eye when set to 2.
 *
 * [param flip_fov] determines whether the projection's field of view is flipped over its diagonal.
 *
*/
create_perspective_hmd(): Projection;

/**
 * Returns a scalar value that is the signed factor by which areas are scaled by this matrix. If the sign is negative, the matrix flips the orientation of the area.
 *
 * The determinant can be used to calculate the invertibility of a matrix or solve linear systems of equations involving the matrix, among other applications.
 *
*/
determinant(): float;

/** Returns a copy of this [Projection] with the signs of the values of the Y column flipped. */
flipped_y(): Projection;

/** Returns the X:Y aspect ratio of this [Projection]'s viewport. */
get_aspect(): float;

/** Returns the dimensions of the far clipping plane of the projection, divided by two. */
get_far_plane_half_extents(): Vector2;

/** Returns the horizontal field of view of the projection (in degrees). */
get_fov(): float;

/** Returns the vertical field of view of the projection (in degrees) associated with the given horizontal field of view (in degrees) and aspect ratio. */
get_fovy(): float;

/** Returns the factor by which the visible level of detail is scaled by this [Projection]. */
get_lod_multiplier(): float;

/** Returns the number of pixels with the given pixel width displayed per meter, after this [Projection] is applied. */
get_pixels_per_meter(): int;

/**
 * Returns the clipping plane of this [Projection] whose index is given by [param plane].
 *
 * [param plane] should be equal to one of [constant PLANE_NEAR], [constant PLANE_FAR], [constant PLANE_LEFT], [constant PLANE_TOP], [constant PLANE_RIGHT], or [constant PLANE_BOTTOM].
 *
*/
get_projection_plane(): Plane;

/** Returns the dimensions of the viewport plane that this [Projection] projects positions onto, divided by two. */
get_viewport_half_extents(): Vector2;

/** Returns the distance for this [Projection] beyond which positions are clipped. */
get_z_far(): float;

/** Returns the distance for this [Projection] before which positions are clipped. */
get_z_near(): float;

/** Returns a [Projection] that performs the inverse of this [Projection]'s projective transformation. */
inverse(): Projection;

/** Returns [code]true[/code] if this [Projection] performs an orthogonal projection. */
is_orthogonal(): boolean;

/** Returns a [Projection] with the X and Y values from the given [Vector2] added to the first and second values of the final column respectively. */
jitter_offseted(): Projection;

/**
 * Returns a [Projection] with the near clipping distance adjusted to be [param new_znear].
 *
 * **Note:** The original [Projection] must be a perspective projection.
 *
*/
perspective_znear_adjusted(): Projection;

  connect<T extends SignalsOf<Projection>>(signal: T, method: SignalFunction<Projection[T]>): number;



/**
 * The index value of the projection's near clipping plane.
 *
*/
static PLANE_NEAR: any;

/**
 * The index value of the projection's far clipping plane.
 *
*/
static PLANE_FAR: any;

/**
 * The index value of the projection's left clipping plane.
 *
*/
static PLANE_LEFT: any;

/**
 * The index value of the projection's top clipping plane.
 *
*/
static PLANE_TOP: any;

/**
 * The index value of the projection's right clipping plane.
 *
*/
static PLANE_RIGHT: any;

/**
 * The index value of the projection bottom clipping plane.
 *
*/
static PLANE_BOTTOM: any;

/**
 * A [Projection] with no transformation defined. When applied to other data structures, no transformation is performed.
 *
*/
static IDENTITY: Projection;

/**
 * A [Projection] with all values initialized to 0. When applied to other data structures, they will be zeroed.
 *
*/
static ZERO: Projection;



}

