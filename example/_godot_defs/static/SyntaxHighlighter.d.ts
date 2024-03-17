
/**
 * Base class for syntax highlighters. Provides syntax highlighting data to a [TextEdit]. The associated [TextEdit] will call into the [SyntaxHighlighter] on an as-needed basis.
 *
 * **Note:** A [SyntaxHighlighter] instance should not be used across multiple [TextEdit] nodes.
 *
*/
declare class SyntaxHighlighter extends Resource  {

  
/**
 * Base class for syntax highlighters. Provides syntax highlighting data to a [TextEdit]. The associated [TextEdit] will call into the [SyntaxHighlighter] on an as-needed basis.
 *
 * **Note:** A [SyntaxHighlighter] instance should not be used across multiple [TextEdit] nodes.
 *
*/
  new(): SyntaxHighlighter; 
  static "new"(): SyntaxHighlighter 



/** Virtual method which can be overridden to clear any local caches. */
protected _clear_highlighting_cache(): void;

/**
 * Virtual method which can be overridden to return syntax highlighting data.
 *
 * See [method get_line_syntax_highlighting] for more details.
 *
*/
protected _get_line_syntax_highlighting(): Dictionary<any, any>;

/** Virtual method which can be overridden to update any local caches. */
protected _update_cache(): void;

/**
 * Clears all cached syntax highlighting data.
 *
 * Then calls overridable method [method _clear_highlighting_cache].
 *
*/
clear_highlighting_cache(): void;

/**
 * Returns syntax highlighting data for a single line. If the line is not cached, calls [method _get_line_syntax_highlighting] to calculate the data.
 *
 * The return [Dictionary] is column number to [Dictionary]. The column number notes the start of a region, the region will end if another region is found, or at the end of the line. The nested [Dictionary] contains the data for that region, currently only the key "color" is supported.
 *
 * **Example return:**
 *
 * @example 
 * 
 * var color_map = {
 *     0: {
 *         "color": Color(1, 0, 0)
 *     },
 *     5: {
 *         "color": Color(0, 1, 0)
 *     }
 * }
 * @summary 
 * 
 *
 * This will color columns 0-4 red, and columns 5-eol in green.
 *
*/
get_line_syntax_highlighting(): Dictionary<any, any>;

/** Returns the associated [TextEdit] node. */
get_text_edit(): TextEdit;

/**
 * Clears then updates the [SyntaxHighlighter] caches. Override [method _update_cache] for a callback.
 *
 * **Note:** This is called automatically when the associated [TextEdit] node, updates its own cache.
 *
*/
update_cache(): void;

  connect<T extends SignalsOf<SyntaxHighlighter>>(signal: T, method: SignalFunction<SyntaxHighlighter[T]>): number;






}

