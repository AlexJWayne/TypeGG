
/**
 * Resource is the base class for all Godot-specific resource types, serving primarily as data containers. Since they inherit from [RefCounted], resources are reference-counted and freed when no longer in use. They can also be nested within other resources, and saved on disk. Once loaded from disk, further attempts to load a resource by [member resource_path] returns the same reference. [PackedScene], one of the most common [Object]s in a Godot project, is also a resource, uniquely capable of storing and instantiating the [Node]s it contains as many times as desired.
 *
 * In GDScript, resources can loaded from disk by their [member resource_path] using [method @GDScript.load] or [method @GDScript.preload].
 *
 * **Note:** In C#, resources will not be freed instantly after they are no longer in use. Instead, garbage collection will run periodically and will free resources that are no longer in use. This means that unused resources will linger on for a while before being removed.
 *
*/
declare class Resource extends RefCounted  {

  
/**
 * Resource is the base class for all Godot-specific resource types, serving primarily as data containers. Since they inherit from [RefCounted], resources are reference-counted and freed when no longer in use. They can also be nested within other resources, and saved on disk. Once loaded from disk, further attempts to load a resource by [member resource_path] returns the same reference. [PackedScene], one of the most common [Object]s in a Godot project, is also a resource, uniquely capable of storing and instantiating the [Node]s it contains as many times as desired.
 *
 * In GDScript, resources can loaded from disk by their [member resource_path] using [method @GDScript.load] or [method @GDScript.preload].
 *
 * **Note:** In C#, resources will not be freed instantly after they are no longer in use. Instead, garbage collection will run periodically and will free resources that are no longer in use. This means that unused resources will linger on for a while before being removed.
 *
*/
  new(): Resource; 
  static "new"(): Resource 


/**
 * If `true`, the resource is duplicated for each instance of all scenes using it. At run-time, the resource can be modified in one scene without affecting other instances (see [method PackedScene.instantiate]).
 *
 * **Note:** Changing this property at run-time has no effect on already created duplicate resources.
 *
*/
resource_local_to_scene: boolean;

/**
 * An optional name for this resource. When defined, its value is displayed to represent the resource in the Inspector dock. For built-in scripts, the name is displayed as part of the tab name in the script editor.
 *
 * **Note:** Some resource formats do not support resource names. You can still set the name in the editor or via code, but it will be lost when the resource is reloaded. For example, only built-in scripts can have a resource name, while scripts stored in separate files cannot.
 *
*/
resource_name: string;

/**
 * The unique path to this resource. If it has been saved to disk, the value will be its filepath. If the resource is exclusively contained within a scene, the value will be the [PackedScene]'s filepath, followed by a unique identifier.
 *
 * **Note:** Setting this property manually may fail if a resource with the same path has already been previously loaded. If necessary, use [method take_over_path].
 *
*/
resource_path: string;

/** Override this method to return a custom [RID] when [method get_rid] is called. */
protected _get_rid(): RID;

/**
 * Override this method to customize the newly duplicated resource created from [method PackedScene.instantiate], if the original's [member resource_local_to_scene] is set to `true`.
 *
 * **Example:** Set a random `damage` value to every local resource from an instantiated scene.
 *
 * @example 
 * 
 * extends Resource
 * var damage = 0
 * func _setup_local_to_scene():
 *     damage = randi_range(10, 40)
 * @summary 
 * 
 *
*/
protected _setup_local_to_scene(): void;

/**
 * Duplicates this resource, returning a new resource with its `export`ed or [constant PROPERTY_USAGE_STORAGE] properties copied from the original.
 *
 * If [param subresources] is `false`, a shallow copy is returned; nested resources within subresources are not duplicated and are shared from the original resource. If [param subresources] is `true`, a deep copy is returned; nested subresources will be duplicated and are not shared.
 *
 * Subresource properties with the [constant PROPERTY_USAGE_ALWAYS_DUPLICATE] flag are always duplicated even with [param subresources] set to `false`, and properties with the [constant PROPERTY_USAGE_NEVER_DUPLICATE] flag are never duplicated even with [param subresources] set to `true`.
 *
 * **Note:** For custom resources, this method will fail if [method Object._init] has been defined with required parameters.
 *
*/
duplicate(): Resource;

/**
 * Emits the [signal changed] signal. This method is called automatically for some built-in resources.
 *
 * **Note:** For custom resources, it's recommended to call this method whenever a meaningful change occurs, such as a modified property. This ensures that custom [Object]s depending on the resource are properly updated.
 *
 * @example 
 * 
 * var damage:
 *     set(new_value):
 *         if damage != new_value:
 *             damage = new_value
 *             emit_changed()
 * @summary 
 * 
 *
*/
emit_changed(): void;

/** If [member resource_local_to_scene] is set to [code]true[/code] and the resource has been loaded from a [PackedScene] instantiation, returns the root [Node] of the scene where this resource is used. Otherwise, returns [code]null[/code]. */
get_local_scene(): Node;

/** Returns the [RID] of this resource (or an empty RID). Many resources (such as [Texture2D], [Mesh], and so on) are high-level abstractions of resources stored in a specialized server ([DisplayServer], [RenderingServer], etc.), so this function will return the original [RID]. */
get_rid(): RID;

/**
 * Calls [method _setup_local_to_scene]. If [member resource_local_to_scene] is set to `true`, this method is automatically called from [method PackedScene.instantiate] by the newly duplicated resource within the scene instance.
 *
 * **Deprecated.** This method should only be called internally. Override [method _setup_local_to_scene] instead.
 *
*/
setup_local_to_scene(): void;

/** Sets the [member resource_path] to [param path], potentially overriding an existing cache entry for this path. Further attempts to load an overridden resource by path will instead return this resource. */
take_over_path(): void;

  connect<T extends SignalsOf<Resource>>(signal: T, method: SignalFunction<Resource[T]>): number;





/**
 * Emitted when the resource changes, usually when one of its properties is modified. See also [method emit_changed].
 *
 * **Note:** This signal is not emitted automatically for properties of custom resources. If necessary, a setter needs to be created to emit the signal.
 *
*/
$changed: Signal<() => void>

/**
 * Emitted by a newly duplicated resource with [member resource_local_to_scene] set to `true`. 
 *
 * **Deprecated.** This signal is only emitted when the resource is created. Override [method _setup_local_to_scene] instead.
 *
*/
$setup_local_to_scene_requested: Signal<() => void>

}

