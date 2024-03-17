
/**
 * Godot editor's script editor.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_script_editor].
 *
*/
declare class ScriptEditor extends PanelContainer  {

  
/**
 * Godot editor's script editor.
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_script_editor].
 *
*/
  new(): ScriptEditor; 
  static "new"(): ScriptEditor 



/** Returns the [ScriptEditorBase] object that the user is currently editing. */
get_current_editor(): ScriptEditorBase;

/** Returns a [Script] that is currently active in editor. */
get_current_script(): Script;

/** Returns an array with all [ScriptEditorBase] objects which are currently open in editor. */
get_open_script_editors(): ScriptEditorBase[];

/** Returns an array with all [Script] objects which are currently open in editor. */
get_open_scripts(): Script[];

/** Goes to the specified line in the current script. */
goto_line(): void;

/** Opens the script create dialog. The script will extend [param base_name]. The file extension can be omitted from [param base_path]. It will be added based on the selected scripting language. */
open_script_create_dialog(): void;

/**
 * Registers the [EditorSyntaxHighlighter] to the editor, the [EditorSyntaxHighlighter] will be available on all open scripts.
 *
 * **Note:** Does not apply to scripts that are already opened.
 *
*/
register_syntax_highlighter(): void;

/**
 * Unregisters the [EditorSyntaxHighlighter] from the editor.
 *
 * **Note:** The [EditorSyntaxHighlighter] will still be applied to scripts that are already opened.
 *
*/
unregister_syntax_highlighter(): void;

  connect<T extends SignalsOf<ScriptEditor>>(signal: T, method: SignalFunction<ScriptEditor[T]>): number;





/**
 * Emitted when user changed active script. Argument is a freshly activated [Script].
 *
*/
$editor_script_changed: Signal<() => void>

/**
 * Emitted when editor is about to close the active script. Argument is a [Script] that is going to be closed.
 *
*/
$script_close: Signal<() => void>

}

