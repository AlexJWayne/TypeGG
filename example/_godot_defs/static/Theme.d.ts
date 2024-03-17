
/**
 * A resource used for styling/skinning [Control] and [Window] nodes. While individual controls can be styled using their local theme overrides (see [method Control.add_theme_color_override]), theme resources allow you to store and apply the same settings across all controls sharing the same type (e.g. style all [Button]s the same). One theme resource can be used for the entire project, but you can also set a separate theme resource to a branch of control nodes. A theme resource assigned to a control applies to the control itself, as well as all of its direct and indirect children (as long as a chain of controls is uninterrupted).
 *
 * Use [member ProjectSettings.gui/theme/custom] to set up a project-scope theme that will be available to every control in your project.
 *
 * Use [member Control.theme] of any control node to set up a theme that will be available to that control and all of its direct and indirect children.
 *
*/
declare class Theme extends Resource  {

  
/**
 * A resource used for styling/skinning [Control] and [Window] nodes. While individual controls can be styled using their local theme overrides (see [method Control.add_theme_color_override]), theme resources allow you to store and apply the same settings across all controls sharing the same type (e.g. style all [Button]s the same). One theme resource can be used for the entire project, but you can also set a separate theme resource to a branch of control nodes. A theme resource assigned to a control applies to the control itself, as well as all of its direct and indirect children (as long as a chain of controls is uninterrupted).
 *
 * Use [member ProjectSettings.gui/theme/custom] to set up a project-scope theme that will be available to every control in your project.
 *
 * Use [member Control.theme] of any control node to set up a theme that will be available to that control and all of its direct and indirect children.
 *
*/
  new(): Theme; 
  static "new"(): Theme 


/**
 * The default base scale factor of this theme resource. Used by some controls to scale their visual properties based on the global scale factor. If this value is set to `0.0`, the global scale factor is used (see [member ThemeDB.fallback_base_scale]).
 *
 * Use [method has_default_base_scale] to check if this value is valid.
 *
*/
default_base_scale: float;

/**
 * The default font of this theme resource. Used as the default value when trying to fetch a font resource that doesn't exist in this theme or is in invalid state. If the default font is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font]).
 *
 * Use [method has_default_font] to check if this value is valid.
 *
*/
default_font: Font;

/**
 * The default font size of this theme resource. Used as the default value when trying to fetch a font size value that doesn't exist in this theme or is in invalid state. If the default font size is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font_size]).
 *
 * Values below `0` are invalid and can be used to unset the property. Use [method has_default_font_size] to check if this value is valid.
 *
*/
default_font_size: int;

/**
 * Adds an empty theme type for every valid data type.
 *
 * **Note:** Empty types are not saved with the theme. This method only exists to perform in-memory changes to the resource. Use available `set_*` methods to add theme items.
 *
*/
add_type(): void;

/** Removes all the theme properties defined on the theme resource. */
clear(): void;

/**
 * Removes the [Color] property defined by [param name] and [param theme_type], if it exists.
 *
 * Fails if it doesn't exist. Use [method has_color] to check for existence.
 *
*/
clear_color(): void;

/**
 * Removes the constant property defined by [param name] and [param theme_type], if it exists.
 *
 * Fails if it doesn't exist. Use [method has_constant] to check for existence.
 *
*/
clear_constant(): void;

/**
 * Removes the [Font] property defined by [param name] and [param theme_type], if it exists.
 *
 * Fails if it doesn't exist. Use [method has_font] to check for existence.
 *
*/
clear_font(): void;

/**
 * Removes the font size property defined by [param name] and [param theme_type], if it exists.
 *
 * Fails if it doesn't exist. Use [method has_font_size] to check for existence.
 *
*/
clear_font_size(): void;

/**
 * Removes the icon property defined by [param name] and [param theme_type], if it exists.
 *
 * Fails if it doesn't exist. Use [method has_icon] to check for existence.
 *
*/
clear_icon(): void;

/**
 * Removes the [StyleBox] property defined by [param name] and [param theme_type], if it exists.
 *
 * Fails if it doesn't exist. Use [method has_stylebox] to check for existence.
 *
*/
clear_stylebox(): void;

/**
 * Removes the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.
 *
 * Fails if it doesn't exist. Use [method has_theme_item] to check for existence.
 *
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 *
*/
clear_theme_item(): void;

/** Unmarks [param theme_type] as being a variation of another theme type. See [method set_type_variation]. */
clear_type_variation(): void;

/**
 * Returns the [Color] property defined by [param name] and [param theme_type], if it exists.
 *
 * Returns the default color value if the property doesn't exist. Use [method has_color] to check for existence.
 *
*/
get_color(): Color;

/** Returns a list of names for [Color] properties defined with [param theme_type]. Use [method get_color_type_list] to get a list of possible theme type names. */
get_color_list(): PackedStringArray;

/** Returns a list of all unique theme type names for [Color] properties. Use [method get_type_list] to get a list of all unique theme types. */
get_color_type_list(): PackedStringArray;

/**
 * Returns the constant property defined by [param name] and [param theme_type], if it exists.
 *
 * Returns `0` if the property doesn't exist. Use [method has_constant] to check for existence.
 *
*/
get_constant(): int;

/** Returns a list of names for constant properties defined with [param theme_type]. Use [method get_constant_type_list] to get a list of possible theme type names. */
get_constant_list(): PackedStringArray;

/** Returns a list of all unique theme type names for constant properties. Use [method get_type_list] to get a list of all unique theme types. */
get_constant_type_list(): PackedStringArray;

/**
 * Returns the [Font] property defined by [param name] and [param theme_type], if it exists.
 *
 * Returns the default theme font if the property doesn't exist and the default theme font is set up (see [member default_font]). Use [method has_font] to check for existence of the property and [method has_default_font] to check for existence of the default theme font.
 *
 * Returns the engine fallback font value, if neither exist (see [member ThemeDB.fallback_font]).
 *
*/
get_font(): Font;

/** Returns a list of names for [Font] properties defined with [param theme_type]. Use [method get_font_type_list] to get a list of possible theme type names. */
get_font_list(): PackedStringArray;

/**
 * Returns the font size property defined by [param name] and [param theme_type], if it exists.
 *
 * Returns the default theme font size if the property doesn't exist and the default theme font size is set up (see [member default_font_size]). Use [method has_font_size] to check for existence of the property and [method has_default_font_size] to check for existence of the default theme font.
 *
 * Returns the engine fallback font size value, if neither exist (see [member ThemeDB.fallback_font_size]).
 *
*/
get_font_size(): int;

/** Returns a list of names for font size properties defined with [param theme_type]. Use [method get_font_size_type_list] to get a list of possible theme type names. */
get_font_size_list(): PackedStringArray;

/** Returns a list of all unique theme type names for font size properties. Use [method get_type_list] to get a list of all unique theme types. */
get_font_size_type_list(): PackedStringArray;

/** Returns a list of all unique theme type names for [Font] properties. Use [method get_type_list] to get a list of all unique theme types. */
get_font_type_list(): PackedStringArray;

/**
 * Returns the icon property defined by [param name] and [param theme_type], if it exists.
 *
 * Returns the engine fallback icon value if the property doesn't exist (see [member ThemeDB.fallback_icon]). Use [method has_icon] to check for existence.
 *
*/
get_icon(): Texture2D;

/** Returns a list of names for icon properties defined with [param theme_type]. Use [method get_icon_type_list] to get a list of possible theme type names. */
get_icon_list(): PackedStringArray;

/** Returns a list of all unique theme type names for icon properties. Use [method get_type_list] to get a list of all unique theme types. */
get_icon_type_list(): PackedStringArray;

/**
 * Returns the [StyleBox] property defined by [param name] and [param theme_type], if it exists.
 *
 * Returns the engine fallback stylebox value if the property doesn't exist (see [member ThemeDB.fallback_stylebox]). Use [method has_stylebox] to check for existence.
 *
*/
get_stylebox(): StyleBox;

/** Returns a list of names for [StyleBox] properties defined with [param theme_type]. Use [method get_stylebox_type_list] to get a list of possible theme type names. */
get_stylebox_list(): PackedStringArray;

/** Returns a list of all unique theme type names for [StyleBox] properties. Use [method get_type_list] to get a list of all unique theme types. */
get_stylebox_type_list(): PackedStringArray;

/**
 * Returns the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.
 *
 * Returns the engine fallback value if the property doesn't exist (see [ThemeDB]). Use [method has_theme_item] to check for existence.
 *
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 *
*/
get_theme_item(): any;

/**
 * Returns a list of names for properties of [param data_type] defined with [param theme_type]. Use [method get_theme_item_type_list] to get a list of possible theme type names.
 *
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 *
*/
get_theme_item_list(): PackedStringArray;

/**
 * Returns a list of all unique theme type names for [param data_type] properties. Use [method get_type_list] to get a list of all unique theme types.
 *
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 *
*/
get_theme_item_type_list(): PackedStringArray;

/** Returns a list of all unique theme type names. Use the appropriate [code]get_*_type_list[/code] method to get a list of unique theme types for a single data type. */
get_type_list(): PackedStringArray;

/** Returns the name of the base theme type if [param theme_type] is a valid variation type. Returns an empty string otherwise. */
get_type_variation_base(): StringName;

/** Returns a list of all type variations for the given [param base_type]. */
get_type_variation_list(): PackedStringArray;

/**
 * Returns `true` if the [Color] property defined by [param name] and [param theme_type] exists.
 *
 * Returns `false` if it doesn't exist. Use [method set_color] to define it.
 *
*/
has_color(): boolean;

/**
 * Returns `true` if the constant property defined by [param name] and [param theme_type] exists.
 *
 * Returns `false` if it doesn't exist. Use [method set_constant] to define it.
 *
*/
has_constant(): boolean;

/**
 * Returns `true` if [member default_base_scale] has a valid value.
 *
 * Returns `false` if it doesn't. The value must be greater than `0.0` to be considered valid.
 *
*/
has_default_base_scale(): boolean;

/**
 * Returns `true` if [member default_font] has a valid value.
 *
 * Returns `false` if it doesn't.
 *
*/
has_default_font(): boolean;

/**
 * Returns `true` if [member default_font_size] has a valid value.
 *
 * Returns `false` if it doesn't. The value must be greater than `0` to be considered valid.
 *
*/
has_default_font_size(): boolean;

/**
 * Returns `true` if the [Font] property defined by [param name] and [param theme_type] exists, or if the default theme font is set up (see [method has_default_font]).
 *
 * Returns `false` if neither exist. Use [method set_font] to define the property.
 *
*/
has_font(): boolean;

/**
 * Returns `true` if the font size property defined by [param name] and [param theme_type] exists, or if the default theme font size is set up (see [method has_default_font_size]).
 *
 * Returns `false` if neither exist. Use [method set_font_size] to define the property.
 *
*/
has_font_size(): boolean;

/**
 * Returns `true` if the icon property defined by [param name] and [param theme_type] exists.
 *
 * Returns `false` if it doesn't exist. Use [method set_icon] to define it.
 *
*/
has_icon(): boolean;

/**
 * Returns `true` if the [StyleBox] property defined by [param name] and [param theme_type] exists.
 *
 * Returns `false` if it doesn't exist. Use [method set_stylebox] to define it.
 *
*/
has_stylebox(): boolean;

/**
 * Returns `true` if the theme property of [param data_type] defined by [param name] and [param theme_type] exists.
 *
 * Returns `false` if it doesn't exist. Use [method set_theme_item] to define it.
 *
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 *
*/
has_theme_item(): boolean;

/** Returns [code]true[/code] if [param theme_type] is marked as a variation of [param base_type]. */
is_type_variation(): boolean;

/**
 * Adds missing and overrides existing definitions with values from the [param other] theme resource.
 *
 * **Note:** This modifies the current theme. If you want to merge two themes together without modifying either one, create a new empty theme and merge the other two into it one after another.
 *
*/
merge_with(): void;

/** Removes the theme type, gracefully discarding defined theme items. If the type is a variation, this information is also erased. If the type is a base for type variations, those variations lose their base. */
remove_type(): void;

/**
 * Renames the [Color] property defined by [param old_name] and [param theme_type] to [param name], if it exists.
 *
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_color] to check for existence, and [method clear_color] to remove the existing property.
 *
*/
rename_color(): void;

/**
 * Renames the constant property defined by [param old_name] and [param theme_type] to [param name], if it exists.
 *
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_constant] to check for existence, and [method clear_constant] to remove the existing property.
 *
*/
rename_constant(): void;

/**
 * Renames the [Font] property defined by [param old_name] and [param theme_type] to [param name], if it exists.
 *
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font] to check for existence, and [method clear_font] to remove the existing property.
 *
*/
rename_font(): void;

/**
 * Renames the font size property defined by [param old_name] and [param theme_type] to [param name], if it exists.
 *
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font_size] to check for existence, and [method clear_font_size] to remove the existing property.
 *
*/
rename_font_size(): void;

/**
 * Renames the icon property defined by [param old_name] and [param theme_type] to [param name], if it exists.
 *
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_icon] to check for existence, and [method clear_icon] to remove the existing property.
 *
*/
rename_icon(): void;

/**
 * Renames the [StyleBox] property defined by [param old_name] and [param theme_type] to [param name], if it exists.
 *
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_stylebox] to check for existence, and [method clear_stylebox] to remove the existing property.
 *
*/
rename_stylebox(): void;

/**
 * Renames the theme property of [param data_type] defined by [param old_name] and [param theme_type] to [param name], if it exists.
 *
 * Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_theme_item] to check for existence, and [method clear_theme_item] to remove the existing property.
 *
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 *
*/
rename_theme_item(): void;

/** Creates or changes the value of the [Color] property defined by [param name] and [param theme_type]. Use [method clear_color] to remove the property. */
set_color(): void;

/** Creates or changes the value of the constant property defined by [param name] and [param theme_type]. Use [method clear_constant] to remove the property. */
set_constant(): void;

/** Creates or changes the value of the [Font] property defined by [param name] and [param theme_type]. Use [method clear_font] to remove the property. */
set_font(): void;

/** Creates or changes the value of the font size property defined by [param name] and [param theme_type]. Use [method clear_font_size] to remove the property. */
set_font_size(): void;

/** Creates or changes the value of the icon property defined by [param name] and [param theme_type]. Use [method clear_icon] to remove the property. */
set_icon(): void;

/** Creates or changes the value of the [StyleBox] property defined by [param name] and [param theme_type]. Use [method clear_stylebox] to remove the property. */
set_stylebox(): void;

/**
 * Creates or changes the value of the theme property of [param data_type] defined by [param name] and [param theme_type]. Use [method clear_theme_item] to remove the property.
 *
 * Fails if the [param value] type is not accepted by [param data_type].
 *
 * **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.
 *
*/
set_theme_item(): void;

/**
 * Marks [param theme_type] as a variation of [param base_type].
 *
 * This adds [param theme_type] as a suggested option for [member Control.theme_type_variation] on a [Control] that is of the [param base_type] class.
 *
 * Variations can also be nested, i.e. [param base_type] can be another variation. If a chain of variations ends with a [param base_type] matching the class of the [Control], the whole chain is going to be suggested as options.
 *
 * **Note:** Suggestions only show up if this theme resource is set as the project default theme. See [member ProjectSettings.gui/theme/custom].
 *
*/
set_type_variation(): void;

  connect<T extends SignalsOf<Theme>>(signal: T, method: SignalFunction<Theme[T]>): number;



/**
 * Theme's [Color] item type.
 *
*/
static DATA_TYPE_COLOR: any;

/**
 * Theme's constant item type.
 *
*/
static DATA_TYPE_CONSTANT: any;

/**
 * Theme's [Font] item type.
 *
*/
static DATA_TYPE_FONT: any;

/**
 * Theme's font size item type.
 *
*/
static DATA_TYPE_FONT_SIZE: any;

/**
 * Theme's icon [Texture2D] item type.
 *
*/
static DATA_TYPE_ICON: any;

/**
 * Theme's [StyleBox] item type.
 *
*/
static DATA_TYPE_STYLEBOX: any;

/**
 * Maximum value for the DataType enum.
 *
*/
static DATA_TYPE_MAX: any;



}

