
/**
 * A pre-parsed relative or absolute path in a scene tree, for use with [method Node.get_node] and similar functions. It can reference a node, a resource within a node, or a property of a node or resource. For example, `"Path2D/PathFollow2D/Sprite2D:texture:size"` would refer to the `size` property of the `texture` resource on the node named `"Sprite2D"`, which is a child of the other named nodes in the path.
 *
 * You will usually just pass a string to [method Node.get_node] and it will be automatically converted, but you may occasionally want to parse a path ahead of time with [NodePath] or the literal syntax `^"path"`. Exporting a [NodePath] variable will give you a node selection widget in the properties panel of the editor, which can often be useful.
 *
 * A [NodePath] is composed of a list of slash-separated node names (like a filesystem path) and an optional colon-separated list of "subnames" which can be resources or properties.
 *
 * Some examples of NodePaths include the following:
 *
 * @example 
 * 
 * # No leading slash means it is relative to the current node.
 * ^"A" # Immediate child A
 * ^"A/B" # A's child B
 * ^"." # The current node.
 * ^".." # The parent node.
 * ^"../C" # A sibling node C.
 * ^"../.." # The grandparent node.
 * # A leading slash means it is absolute from the SceneTree.
 * ^"/root" # Equivalent to get_tree().get_root().
 * ^"/root/Main" # If your main scene's root node were named "Main".
 * ^"/root/MyAutoload" # If you have an autoloaded node or scene.
 * @summary 
 * 
 *
 * See also [StringName], which is a similar concept for general-purpose string interning.
 *
 * **Note:** In the editor, [NodePath] properties are automatically updated when moving, renaming or deleting a node in the scene tree, but they are never updated at runtime.
 *
 * **Note:** In a boolean context, a [NodePath] will evaluate to `false` if it is empty (`NodePath("")`). Otherwise, a [NodePath] will always evaluate to `true`.
 *
*/
declare class NodePath {

  
/**
 * A pre-parsed relative or absolute path in a scene tree, for use with [method Node.get_node] and similar functions. It can reference a node, a resource within a node, or a property of a node or resource. For example, `"Path2D/PathFollow2D/Sprite2D:texture:size"` would refer to the `size` property of the `texture` resource on the node named `"Sprite2D"`, which is a child of the other named nodes in the path.
 *
 * You will usually just pass a string to [method Node.get_node] and it will be automatically converted, but you may occasionally want to parse a path ahead of time with [NodePath] or the literal syntax `^"path"`. Exporting a [NodePath] variable will give you a node selection widget in the properties panel of the editor, which can often be useful.
 *
 * A [NodePath] is composed of a list of slash-separated node names (like a filesystem path) and an optional colon-separated list of "subnames" which can be resources or properties.
 *
 * Some examples of NodePaths include the following:
 *
 * @example 
 * 
 * # No leading slash means it is relative to the current node.
 * ^"A" # Immediate child A
 * ^"A/B" # A's child B
 * ^"." # The current node.
 * ^".." # The parent node.
 * ^"../C" # A sibling node C.
 * ^"../.." # The grandparent node.
 * # A leading slash means it is absolute from the SceneTree.
 * ^"/root" # Equivalent to get_tree().get_root().
 * ^"/root/Main" # If your main scene's root node were named "Main".
 * ^"/root/MyAutoload" # If you have an autoloaded node or scene.
 * @summary 
 * 
 *
 * See also [StringName], which is a similar concept for general-purpose string interning.
 *
 * **Note:** In the editor, [NodePath] properties are automatically updated when moving, renaming or deleting a node in the scene tree, but they are never updated at runtime.
 *
 * **Note:** In a boolean context, a [NodePath] will evaluate to `false` if it is empty (`NodePath("")`). Otherwise, a [NodePath] will always evaluate to `true`.
 *
*/
  new(): NodePath; 
  static "new"(): NodePath 



/**
 * Returns a node path with a colon character (`:`) prepended, transforming it to a pure property path with no node name (defaults to resolving from the current node).
 *
 * @example 
 * 
 * 
 * # This will be parsed as a node path to the "x" property in the "position" node.
 * var node_path = NodePath("position:x")
 * # This will be parsed as a node path to the "x" component of the "position" property in the current node.
 * var property_path = node_path.get_as_property_path()
 * print(property_path) # :position:x
 * 
 * 
 * // This will be parsed as a node path to the "x" property in the "position" node.
 * var nodePath = new NodePath("position:x");
 * // This will be parsed as a node path to the "x" component of the "position" property in the current node.
 * NodePath propertyPath = nodePath.GetAsPropertyPath();
 * GD.Print(propertyPath); // :position:x
 * 
 * @summary 
 * 
 *
*/
get_as_property_path(): NodePathType;

/** Returns all paths concatenated with a slash character ([code]/[/code]) as separator without subnames. */
get_concatenated_names(): StringName;

/**
 * Returns all subnames concatenated with a colon character (`:`) as separator, i.e. the right side of the first colon in a node path.
 *
 * @example 
 * 
 * 
 * var node_path = NodePath("Path2D/PathFollow2D/Sprite2D:texture:load_path")
 * print(node_path.get_concatenated_subnames()) # texture:load_path
 * 
 * 
 * var nodePath = new NodePath("Path2D/PathFollow2D/Sprite2D:texture:load_path");
 * GD.Print(nodePath.GetConcatenatedSubnames()); // texture:load_path
 * 
 * @summary 
 * 
 *
*/
get_concatenated_subnames(): StringName;

/**
 * Gets the node name indicated by [param idx] (0 to [method get_name_count] - 1).
 *
 * @example 
 * 
 * 
 * var node_path = NodePath("Path2D/PathFollow2D/Sprite2D")
 * print(node_path.get_name(0)) # Path2D
 * print(node_path.get_name(1)) # PathFollow2D
 * print(node_path.get_name(2)) # Sprite
 * 
 * 
 * var nodePath = new NodePath("Path2D/PathFollow2D/Sprite2D");
 * GD.Print(nodePath.GetName(0)); // Path2D
 * GD.Print(nodePath.GetName(1)); // PathFollow2D
 * GD.Print(nodePath.GetName(2)); // Sprite
 * 
 * @summary 
 * 
 *
*/
get_name(): StringName;

/**
 * Gets the number of node names which make up the path. Subnames (see [method get_subname_count]) are not included.
 *
 * For example, `"Path2D/PathFollow2D/Sprite2D"` has 3 names.
 *
*/
get_name_count(): int;

/**
 * Gets the resource or property name indicated by [param idx] (0 to [method get_subname_count] - 1).
 *
 * @example 
 * 
 * 
 * var node_path = NodePath("Path2D/PathFollow2D/Sprite2D:texture:load_path")
 * print(node_path.get_subname(0)) # texture
 * print(node_path.get_subname(1)) # load_path
 * 
 * 
 * var nodePath = new NodePath("Path2D/PathFollow2D/Sprite2D:texture:load_path");
 * GD.Print(nodePath.GetSubname(0)); // texture
 * GD.Print(nodePath.GetSubname(1)); // load_path
 * 
 * @summary 
 * 
 *
*/
get_subname(): StringName;

/**
 * Gets the number of resource or property names ("subnames") in the path. Each subname is listed after a colon character (`:`) in the node path.
 *
 * For example, `"Path2D/PathFollow2D/Sprite2D:texture:load_path"` has 2 subnames.
 *
*/
get_subname_count(): int;

/** Returns the 32-bit hash value representing the [NodePath]'s contents. */
hash(): int;

/** Returns [code]true[/code] if the node path is absolute (as opposed to relative), which means that it starts with a slash character ([code]/[/code]). Absolute node paths can be used to access the root node ([code]"/root"[/code]) or autoloads (e.g. [code]"/global"[/code] if a "global" autoload was registered). */
is_absolute(): boolean;

/** Returns [code]true[/code] if the node path is empty. */
is_empty(): boolean;

  connect<T extends SignalsOf<NodePath>>(signal: T, method: SignalFunction<NodePath[T]>): number;






}

