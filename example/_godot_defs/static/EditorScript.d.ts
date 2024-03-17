
/**
 * Scripts extending this class and implementing its [method _run] method can be executed from the Script Editor's **File > Run** menu option (or by pressing [kbd]Ctrl + Shift + X[/kbd]) while the editor is running. This is useful for adding custom in-editor functionality to Godot. For more complex additions, consider using [EditorPlugin]s instead.
 *
 * **Note:** Extending scripts need to have `tool` mode enabled.
 *
 * **Example script:**
 *
 * @example 
 * 
 * 
 * @tool
 * extends EditorScript
 * func _run():
 *     print("Hello from the Godot Editor!")
 * 
 * 
 * using Godot;
 * [Tool]
 * public partial class HelloEditor : EditorScript
 * {
 *     public override void _Run()
 *     {
 *         GD.Print("Hello from the Godot Editor!");
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * **Note:** The script is run in the Editor context, which means the output is visible in the console window started with the Editor (stdout) instead of the usual Godot **Output** dock.
 *
 * **Note:** EditorScript is [RefCounted], meaning it is destroyed when nothing references it. This can cause errors during asynchronous operations if there are no references to the script.
 *
*/
declare class EditorScript extends RefCounted  {

  
/**
 * Scripts extending this class and implementing its [method _run] method can be executed from the Script Editor's **File > Run** menu option (or by pressing [kbd]Ctrl + Shift + X[/kbd]) while the editor is running. This is useful for adding custom in-editor functionality to Godot. For more complex additions, consider using [EditorPlugin]s instead.
 *
 * **Note:** Extending scripts need to have `tool` mode enabled.
 *
 * **Example script:**
 *
 * @example 
 * 
 * 
 * @tool
 * extends EditorScript
 * func _run():
 *     print("Hello from the Godot Editor!")
 * 
 * 
 * using Godot;
 * [Tool]
 * public partial class HelloEditor : EditorScript
 * {
 *     public override void _Run()
 *     {
 *         GD.Print("Hello from the Godot Editor!");
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * **Note:** The script is run in the Editor context, which means the output is visible in the console window started with the Editor (stdout) instead of the usual Godot **Output** dock.
 *
 * **Note:** EditorScript is [RefCounted], meaning it is destroyed when nothing references it. This can cause errors during asynchronous operations if there are no references to the script.
 *
*/
  new(): EditorScript; 
  static "new"(): EditorScript 



/** This method is executed by the Editor when [b]File > Run[/b] is used. */
protected _run(): void;

/**
 * Adds [param node] as a child of the root node in the editor context.
 *
 * **Warning:** The implementation of this method is currently disabled.
 *
*/
add_root_node(): void;

/**
 * Returns the [EditorInterface] singleton instance.
 *
 * **Deprecated.** [EditorInterface] is a global singleton and can be accessed directly by its name.
 *
*/
get_editor_interface(): EditorInterface;

/** Returns the Editor's currently active scene. */
get_scene(): Node;

  connect<T extends SignalsOf<EditorScript>>(signal: T, method: SignalFunction<EditorScript[T]>): number;






}

