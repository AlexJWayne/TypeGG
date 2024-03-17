
/**
 * By adjusting various properties of this resource, you can change the colors of strings, comments, numbers, and other text patterns inside a [TextEdit] control.
 *
*/
declare class CodeHighlighter extends SyntaxHighlighter  {

  
/**
 * By adjusting various properties of this resource, you can change the colors of strings, comments, numbers, and other text patterns inside a [TextEdit] control.
 *
*/
  new(): CodeHighlighter; 
  static "new"(): CodeHighlighter 


/** Sets the color regions. All existing regions will be removed. The [Dictionary] key is the region start and end key, separated by a space. The value is the region color. */
color_regions: Dictionary<any, any>;

/** Sets color for functions. A function is a non-keyword string followed by a '('. */
function_color: Color;

/** Sets the keyword colors. All existing keywords will be removed. The [Dictionary] key is the keyword. The value is the keyword color. */
keyword_colors: Dictionary<any, any>;

/** Sets the member keyword colors. All existing member keyword will be removed. The [Dictionary] key is the member keyword. The value is the member keyword color. */
member_keyword_colors: Dictionary<any, any>;

/** Sets color for member variables. A member variable is non-keyword, non-function string proceeded with a '.'. */
member_variable_color: Color;

/** Sets the color for numbers. */
number_color: Color;

/** Sets the color for symbols. */
symbol_color: Color;

/**
 * Adds a color region such as comments or strings.
 *
 * Both the start and end keys must be symbols. Only the start key has to be unique.
 *
 * [param line_only] denotes if the region should continue until the end of the line or carry over on to the next line. If the end key is blank this is automatically set to `true`.
 *
*/
add_color_region(): void;

/**
 * Sets the color for a keyword.
 *
 * The keyword cannot contain any symbols except '_'.
 *
*/
add_keyword_color(): void;

/**
 * Sets the color for a member keyword.
 *
 * The member keyword cannot contain any symbols except '_'.
 *
 * It will not be highlighted if preceded by a '.'.
 *
*/
add_member_keyword_color(): void;

/** Removes all color regions. */
clear_color_regions(): void;

/** Removes all keywords. */
clear_keyword_colors(): void;

/** Removes all member keywords. */
clear_member_keyword_colors(): void;

/** Returns the color for a keyword. */
get_keyword_color(): Color;

/** Returns the color for a member keyword. */
get_member_keyword_color(): Color;

/** Returns [code]true[/code] if the start key exists, else [code]false[/code]. */
has_color_region(): boolean;

/** Returns [code]true[/code] if the keyword exists, else [code]false[/code]. */
has_keyword_color(): boolean;

/** Returns [code]true[/code] if the member keyword exists, else [code]false[/code]. */
has_member_keyword_color(): boolean;

/** Removes the color region that uses that start key. */
remove_color_region(): void;

/** Removes the keyword. */
remove_keyword_color(): void;

/** Removes the member keyword. */
remove_member_keyword_color(): void;

  connect<T extends SignalsOf<CodeHighlighter>>(signal: T, method: SignalFunction<CodeHighlighter[T]>): number;






}

