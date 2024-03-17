
/**
 * The [PhysicalBone2D] node is a [RigidBody2D]-based node that can be used to make [Bone2D]s in a [Skeleton2D] react to physics.
 *
 * **Note:** To make the [Bone2D]s visually follow the [PhysicalBone2D] node, use a [SkeletonModification2DPhysicalBones] modification on the [Skeleton2D] parent.
 *
 * **Note:** The [PhysicalBone2D] node does not automatically create a [Joint2D] node to keep [PhysicalBone2D] nodes together. They must be created manually. For most cases, you want to use a [PinJoint2D] node. The [PhysicalBone2D] node will automatically configure the [Joint2D] node once it's been added as a child node.
 *
*/
declare class PhysicalBone2D extends RigidBody2D  {

  
/**
 * The [PhysicalBone2D] node is a [RigidBody2D]-based node that can be used to make [Bone2D]s in a [Skeleton2D] react to physics.
 *
 * **Note:** To make the [Bone2D]s visually follow the [PhysicalBone2D] node, use a [SkeletonModification2DPhysicalBones] modification on the [Skeleton2D] parent.
 *
 * **Note:** The [PhysicalBone2D] node does not automatically create a [Joint2D] node to keep [PhysicalBone2D] nodes together. They must be created manually. For most cases, you want to use a [PinJoint2D] node. The [PhysicalBone2D] node will automatically configure the [Joint2D] node once it's been added as a child node.
 *
*/
  new(): PhysicalBone2D; 
  static "new"(): PhysicalBone2D 


/** If [code]true[/code], the [PhysicalBone2D] will automatically configure the first [Joint2D] child node. The automatic configuration is limited to setting up the node properties and positioning the [Joint2D]. */
auto_configure_joint: boolean;

/** The index of the [Bone2D] that this [PhysicalBone2D] should simulate. */
bone2d_index: int;

/** The [NodePath] to the [Bone2D] that this [PhysicalBone2D] should simulate. */
bone2d_nodepath: NodePathType;

/** If [code]true[/code], the [PhysicalBone2D] will keep the transform of the bone it is bound to when simulating physics. */
follow_bone_when_simulating: boolean;

/**
 * If `true`, the [PhysicalBone2D] will start simulating using physics. If `false`, the [PhysicalBone2D] will follow the transform of the [Bone2D] node.
 *
 * **Note:** To have the [Bone2D]s visually follow the [PhysicalBone2D], use a [SkeletonModification2DPhysicalBones] modification on the [Skeleton2D] node with the [Bone2D] nodes.
 *
*/
simulate_physics: boolean;

/** Returns the first [Joint2D] child node, if one exists. This is mainly a helper function to make it easier to get the [Joint2D] that the [PhysicalBone2D] is autoconfiguring. */
get_joint(): Joint2D;

/** Returns a boolean that indicates whether the [PhysicalBone2D] is running and simulating using the Godot 2D physics engine. When [code]true[/code], the PhysicalBone2D node is using physics. */
is_simulating_physics(): boolean;

  connect<T extends SignalsOf<PhysicalBone2D>>(signal: T, method: SignalFunction<PhysicalBone2D[T]>): number;






}

