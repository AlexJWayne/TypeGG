
/**
 * MeshInstance3D is a node that takes a [Mesh] resource and adds it to the current scenario by creating an instance of it. This is the class most often used render 3D geometry and can be used to instance a single [Mesh] in many places. This allows reusing geometry, which can save on resources. When a [Mesh] has to be instantiated more than thousands of times at close proximity, consider using a [MultiMesh] in a [MultiMeshInstance3D] instead.
 *
*/
declare class MeshInstance3D extends GeometryInstance3D  {

  
/**
 * MeshInstance3D is a node that takes a [Mesh] resource and adds it to the current scenario by creating an instance of it. This is the class most often used render 3D geometry and can be used to instance a single [Mesh] in many places. This allows reusing geometry, which can save on resources. When a [Mesh] has to be instantiated more than thousands of times at close proximity, consider using a [MultiMesh] in a [MultiMeshInstance3D] instead.
 *
*/
  new(): MeshInstance3D; 
  static "new"(): MeshInstance3D 


/** The [Mesh] resource for the instance. */
mesh: Mesh;

/** [NodePath] to the [Skeleton3D] associated with the instance. */
skeleton: NodePathType;

/** The [Skin] to be used by this instance. */
skin: Skin;

/**
 * This helper creates a [StaticBody3D] child node with a [ConvexPolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing.
 *
 * If [param clean] is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.
 *
 * If [param simplify] is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.
 *
*/
create_convex_collision(): void;

/** This helper creates a [MeshInstance3D] child node with gizmos at every vertex calculated from the mesh geometry. It's mainly used for testing. */
create_debug_tangents(): void;

/** This helper creates a [StaticBody3D] child node with multiple [ConvexPolygonShape3D] collision shapes calculated from the mesh geometry via convex decomposition. The convex decomposition operation can be controlled with parameters from the optional [param settings]. */
create_multiple_convex_collisions(): void;

/** This helper creates a [StaticBody3D] child node with a [ConcavePolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing. */
create_trimesh_collision(): void;

/** Returns the index of the blend shape with the given [param name]. Returns [code]-1[/code] if no blend shape with this name exists, including when [member mesh] is [code]null[/code]. */
find_blend_shape_by_name(): int;

/**
 * Returns the [Material] that will be used by the [Mesh] when drawing. This can return the [member GeometryInstance3D.material_override], the surface override [Material] defined in this [MeshInstance3D], or the surface [Material] defined in the [member mesh]. For example, if [member GeometryInstance3D.material_override] is used, all surfaces will return the override material.
 *
 * Returns `null` if no material is active, including when [member mesh] is `null`.
 *
*/
get_active_material(): Material;

/** Returns the number of blend shapes available. Produces an error if [member mesh] is [code]null[/code]. */
get_blend_shape_count(): int;

/** Returns the value of the blend shape at the given [param blend_shape_idx]. Returns [code]0.0[/code] and produces an error if [member mesh] is [code]null[/code] or doesn't have a blend shape at that index. */
get_blend_shape_value(): float;

/**
 * Returns the override [Material] for the specified [param surface] of the [Mesh] resource. See also [method get_surface_override_material_count].
 *
 * **Note:** This returns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To get the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.
 *
*/
get_surface_override_material(): Material;

/** Returns the number of surface override materials. This is equivalent to [method Mesh.get_surface_count]. See also [method get_surface_override_material]. */
get_surface_override_material_count(): int;

/** Sets the value of the blend shape at [param blend_shape_idx] to [param value]. Produces an error if [member mesh] is [code]null[/code] or doesn't have a blend shape at that index. */
set_blend_shape_value(): void;

/**
 * Sets the override [param material] for the specified [param surface] of the [Mesh] resource. This material is associated with this [MeshInstance3D] rather than with [member mesh].
 *
 * **Note:** This assigns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To set the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.
 *
*/
set_surface_override_material(): void;

  connect<T extends SignalsOf<MeshInstance3D>>(signal: T, method: SignalFunction<MeshInstance3D[T]>): number;






}

