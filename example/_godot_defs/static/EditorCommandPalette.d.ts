
/**
 * Object that holds all the available Commands and their shortcuts text. These Commands can be accessed through **Editor > Command Palette** menu.
 *
 * Command key names use slash delimiters to distinguish sections, for example: `"example/command1"` then `example` will be the section name.
 *
 * @example 
 * 
 * 
 * var command_palette = EditorInterface.get_command_palette()
 * # external_command is a function that will be called with the command is executed.
 * var command_callable = Callable(self, "external_command").bind(arguments)
 * command_palette.add_command("command", "test/command",command_callable)
 * 
 * 
 * EditorCommandPalette commandPalette = EditorInterface.Singleton.GetCommandPalette();
 * // ExternalCommand is a function that will be called with the command is executed.
 * Callable commandCallable = new Callable(this, MethodName.ExternalCommand);
 * commandPalette.AddCommand("command", "test/command", commandCallable)
 * 
 * @summary 
 * 
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_command_palette].
 *
*/
declare class EditorCommandPalette extends ConfirmationDialog  {

  
/**
 * Object that holds all the available Commands and their shortcuts text. These Commands can be accessed through **Editor > Command Palette** menu.
 *
 * Command key names use slash delimiters to distinguish sections, for example: `"example/command1"` then `example` will be the section name.
 *
 * @example 
 * 
 * 
 * var command_palette = EditorInterface.get_command_palette()
 * # external_command is a function that will be called with the command is executed.
 * var command_callable = Callable(self, "external_command").bind(arguments)
 * command_palette.add_command("command", "test/command",command_callable)
 * 
 * 
 * EditorCommandPalette commandPalette = EditorInterface.Singleton.GetCommandPalette();
 * // ExternalCommand is a function that will be called with the command is executed.
 * Callable commandCallable = new Callable(this, MethodName.ExternalCommand);
 * commandPalette.AddCommand("command", "test/command", commandCallable)
 * 
 * @summary 
 * 
 *
 * **Note:** This class shouldn't be instantiated directly. Instead, access the singleton using [method EditorInterface.get_command_palette].
 *
*/
  new(): EditorCommandPalette; 
  static "new"(): EditorCommandPalette 



/**
 * Adds a custom command to EditorCommandPalette.
 *
 * - [param command_name]: [String] (Name of the **Command**. This is displayed to the user.)
 *
 * - [param key_name]: [String] (Name of the key for a particular **Command**. This is used to uniquely identify the **Command**.)
 *
 * - [param binded_callable]: [Callable] (Callable of the **Command**. This will be executed when the **Command** is selected.)
 *
 * - [param shortcut_text]: [String] (Shortcut text of the **Command** if available.)
 *
*/
add_command(): void;

/**
 * Removes the custom command from EditorCommandPalette.
 *
 * - [param key_name]: [String] (Name of the key for a particular **Command**.)
 *
*/
remove_command(): void;

  connect<T extends SignalsOf<EditorCommandPalette>>(signal: T, method: SignalFunction<EditorCommandPalette[T]>): number;






}

