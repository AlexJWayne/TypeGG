
/**
 * The [ScriptCreateDialog] creates script files according to a given template for a given scripting language. The standard use is to configure its fields prior to calling one of the [method Window.popup] methods.
 *
 * @example 
 * 
 * 
 * func _ready():
 *     var dialog = ScriptCreateDialog.new();
 *     dialog.config("Node", "res://new_node.gd") # For in-engine types.
 *     dialog.config("\"res://base_node.gd\"", "res://derived_node.gd") # For script types.
 *     dialog.popup_centered()
 * 
 * 
 * public override void _Ready()
 * {
 *     var dialog = new ScriptCreateDialog();
 *     dialog.Config("Node", "res://NewNode.cs"); // For in-engine types.
 *     dialog.Config("\"res://BaseNode.cs\"", "res://DerivedNode.cs"); // For script types.
 *     dialog.PopupCentered();
 * }
 * 
 * @summary 
 * 
 *
*/
declare class ScriptCreateDialog extends ConfirmationDialog  {

  
/**
 * The [ScriptCreateDialog] creates script files according to a given template for a given scripting language. The standard use is to configure its fields prior to calling one of the [method Window.popup] methods.
 *
 * @example 
 * 
 * 
 * func _ready():
 *     var dialog = ScriptCreateDialog.new();
 *     dialog.config("Node", "res://new_node.gd") # For in-engine types.
 *     dialog.config("\"res://base_node.gd\"", "res://derived_node.gd") # For script types.
 *     dialog.popup_centered()
 * 
 * 
 * public override void _Ready()
 * {
 *     var dialog = new ScriptCreateDialog();
 *     dialog.Config("Node", "res://NewNode.cs"); // For in-engine types.
 *     dialog.Config("\"res://BaseNode.cs\"", "res://DerivedNode.cs"); // For script types.
 *     dialog.PopupCentered();
 * }
 * 
 * @summary 
 * 
 *
*/
  new(): ScriptCreateDialog; 
  static "new"(): ScriptCreateDialog 





/** Prefills required fields to configure the ScriptCreateDialog for use. */
config(): void;

  connect<T extends SignalsOf<ScriptCreateDialog>>(signal: T, method: SignalFunction<ScriptCreateDialog[T]>): number;





/**
 * Emitted when the user clicks the OK button.
 *
*/
$script_created: Signal<() => void>

}

