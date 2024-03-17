
/**
 * Base class that all [SyntaxHighlighter]s used by the [ScriptEditor] extend from.
 *
 * Add a syntax highlighter to an individual script by calling [method ScriptEditorBase.add_syntax_highlighter]. To apply to all scripts on open, call [method ScriptEditor.register_syntax_highlighter].
 *
*/
declare class EditorSyntaxHighlighter extends SyntaxHighlighter  {

  
/**
 * Base class that all [SyntaxHighlighter]s used by the [ScriptEditor] extend from.
 *
 * Add a syntax highlighter to an individual script by calling [method ScriptEditorBase.add_syntax_highlighter]. To apply to all scripts on open, call [method ScriptEditor.register_syntax_highlighter].
 *
*/
  new(): EditorSyntaxHighlighter; 
  static "new"(): EditorSyntaxHighlighter 



/** Virtual method which can be overridden to return the syntax highlighter name. */
protected _get_name(): string;

/** Virtual method which can be overridden to return the supported language names. */
protected _get_supported_languages(): PackedStringArray;

  connect<T extends SignalsOf<EditorSyntaxHighlighter>>(signal: T, method: SignalFunction<EditorSyntaxHighlighter[T]>): number;






}

