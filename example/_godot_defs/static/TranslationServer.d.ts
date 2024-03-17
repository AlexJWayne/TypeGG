
/**
 * The server that manages all language translations. Translations can be added to or removed from it.
 *
*/
declare class TranslationServerClass extends Object  {

  
/**
 * The server that manages all language translations. Translations can be added to or removed from it.
 *
*/
  new(): TranslationServerClass; 
  static "new"(): TranslationServerClass 


/** If [code]true[/code], enables the use of pseudolocalization. See [member ProjectSettings.internationalization/pseudolocalization/use_pseudolocalization] for details. */
pseudolocalization_enabled: boolean;

/** Adds a [Translation] resource. */
add_translation(): void;

/** Clears the server from all translations. */
clear(): void;

/** Compares two locales and returns a similarity score between [code]0[/code] (no match) and [code]10[/code] (full match). */
compare_locales(): int;

/** Returns an array of known country codes. */
get_all_countries(): PackedStringArray;

/** Returns array of known language codes. */
get_all_languages(): PackedStringArray;

/** Returns an array of known script codes. */
get_all_scripts(): PackedStringArray;

/** Returns a readable country name for the [param country] code. */
get_country_name(): string;

/** Returns a readable language name for the [param language] code. */
get_language_name(): string;

/** Returns an array of all loaded locales of the project. */
get_loaded_locales(): PackedStringArray;

/**
 * Returns the current locale of the project.
 *
 * See also [method OS.get_locale] and [method OS.get_locale_language] to query the locale of the user system.
 *
*/
get_locale(): string;

/** Returns a locale's language and its variant (e.g. [code]"en_US"[/code] would return [code]"English (United States)"[/code]). */
get_locale_name(): string;

/** Returns a readable script name for the [param script] code. */
get_script_name(): string;

/**
 * Returns the current locale of the editor.
 *
 * **Note:** When called from an exported project returns the same value as [method get_locale].
 *
*/
get_tool_locale(): string;

/**
 * Returns the [Translation] instance based on the [param locale] passed in.
 *
 * It will return `null` if there is no [Translation] instance that matches the [param locale].
 *
*/
get_translation_object(): Translation;

/** Returns the pseudolocalized string based on the [param message] passed in. */
pseudolocalize(): StringName;

/** Reparses the pseudolocalization options and reloads the translation. */
reload_pseudolocalization(): void;

/** Removes the given translation from the server. */
remove_translation(): void;

/**
 * Sets the locale of the project. The [param locale] string will be standardized to match known locales (e.g. `en-US` would be matched to `en_US`).
 *
 * If translations have been loaded beforehand for the new locale, they will be applied.
 *
*/
set_locale(): void;

/** Returns a [param locale] string standardized to match known locales (e.g. [code]en-US[/code] would be matched to [code]en_US[/code]). */
standardize_locale(): string;

/** Returns the current locale's translation for the given message (key) and context. */
translate(): StringName;

/**
 * Returns the current locale's translation for the given message (key), plural message and context.
 *
 * The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.
 *
*/
translate_plural(): StringName;

  connect<T extends SignalsOf<TranslationServerClass>>(signal: T, method: SignalFunction<TranslationServerClass[T]>): number;






}

