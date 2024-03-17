
/**
 * Imported scenes can be automatically modified right after import by setting their **Custom Script** Import property to a `tool` script that inherits from this class.
 *
 * The [method _post_import] callback receives the imported scene's root node and returns the modified version of the scene. Usage example:
 *
 * @example 
 * 
 * 
 * @tool # Needed so it runs in editor.
 * extends EditorScenePostImport
 * # This sample changes all node names.
 * # Called right after the scene is imported and gets the root node.
 * func _post_import(scene):
 *     # Change all node names to "modified_[oldnodename]"
 *     iterate(scene)
 *     return scene # Remember to return the imported scene
 * func iterate(node):
 *     if node != null:
 *         node.name = "modified_" + node.name
 *         for child in node.get_children():
 *             iterate(child)
 * 
 * 
 * using Godot;
 * // This sample changes all node names.
 * // Called right after the scene is imported and gets the root node.
 * [Tool]
 * public partial class NodeRenamer : EditorScenePostImport
 * {
 *     public override GodotObject _PostImport(Node scene)
 *     {
 *         // Change all node names to "modified_[oldnodename]"
 *         Iterate(scene);
 *         return scene; // Remember to return the imported scene
 *     }
 *     public void Iterate(Node node)
 *     {
 *         if (node != null)
 *         {
 *             node.Name = $"modified_{node.Name}";
 *             foreach (Node child in node.GetChildren())
 *             {
 *                 Iterate(child);
 *             }
 *         }
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
declare class EditorScenePostImport extends RefCounted  {

  
/**
 * Imported scenes can be automatically modified right after import by setting their **Custom Script** Import property to a `tool` script that inherits from this class.
 *
 * The [method _post_import] callback receives the imported scene's root node and returns the modified version of the scene. Usage example:
 *
 * @example 
 * 
 * 
 * @tool # Needed so it runs in editor.
 * extends EditorScenePostImport
 * # This sample changes all node names.
 * # Called right after the scene is imported and gets the root node.
 * func _post_import(scene):
 *     # Change all node names to "modified_[oldnodename]"
 *     iterate(scene)
 *     return scene # Remember to return the imported scene
 * func iterate(node):
 *     if node != null:
 *         node.name = "modified_" + node.name
 *         for child in node.get_children():
 *             iterate(child)
 * 
 * 
 * using Godot;
 * // This sample changes all node names.
 * // Called right after the scene is imported and gets the root node.
 * [Tool]
 * public partial class NodeRenamer : EditorScenePostImport
 * {
 *     public override GodotObject _PostImport(Node scene)
 *     {
 *         // Change all node names to "modified_[oldnodename]"
 *         Iterate(scene);
 *         return scene; // Remember to return the imported scene
 *     }
 *     public void Iterate(Node node)
 *     {
 *         if (node != null)
 *         {
 *             node.Name = $"modified_{node.Name}";
 *             foreach (Node child in node.GetChildren())
 *             {
 *                 Iterate(child);
 *             }
 *         }
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
  new(): EditorScenePostImport; 
  static "new"(): EditorScenePostImport 



/** Called after the scene was imported. This method must return the modified version of the scene. */
protected _post_import(): Object;

/** Returns the source file path which got imported (e.g. [code]res://scene.dae[/code]). */
get_source_file(): string;

  connect<T extends SignalsOf<EditorScenePostImport>>(signal: T, method: SignalFunction<EditorScenePostImport[T]>): number;






}

