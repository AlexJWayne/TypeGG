
/**
 * [Translation]s are resources that can be loaded and unloaded on demand. They map a collection of strings to their individual translations, and they also provide convenience methods for pluralization.
 *
*/
declare class Translation extends Resource  {

  
/**
 * [Translation]s are resources that can be loaded and unloaded on demand. They map a collection of strings to their individual translations, and they also provide convenience methods for pluralization.
 *
*/
  new(): Translation; 
  static "new"(): Translation 


/** The locale of the translation. */
locale: string;

/** Virtual method to override [method get_message]. */
protected _get_message(): StringName;

/** Virtual method to override [method get_plural_message]. */
protected _get_plural_message(): StringName;

/**
 * Adds a message if nonexistent, followed by its translation.
 *
 * An additional context could be used to specify the translation context or differentiate polysemic words.
 *
*/
add_message(): void;

/**
 * Adds a message involving plural translation if nonexistent, followed by its translation.
 *
 * An additional context could be used to specify the translation context or differentiate polysemic words.
 *
*/
add_plural_message(): void;

/** Erases a message. */
erase_message(): void;

/** Returns a message's translation. */
get_message(): StringName;

/** Returns the number of existing messages. */
get_message_count(): int;

/** Returns all the messages (keys). */
get_message_list(): PackedStringArray;

/**
 * Returns a message's translation involving plurals.
 *
 * The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.
 *
*/
get_plural_message(): StringName;

/** Returns all the messages (translated text). */
get_translated_message_list(): PackedStringArray;

  connect<T extends SignalsOf<Translation>>(signal: T, method: SignalFunction<Translation[T]>): number;






}

