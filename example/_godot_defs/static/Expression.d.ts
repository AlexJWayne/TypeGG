
/**
 * An expression can be made of any arithmetic operation, built-in math function call, method call of a passed instance, or built-in type construction call.
 *
 * An example expression text using the built-in math functions could be `sqrt(pow(3, 2) + pow(4, 2))`.
 *
 * In the following example we use a [LineEdit] node to write our expression and show the result.
 *
 * @example 
 * 
 * 
 * var expression = Expression.new()
 * func _ready():
 *     $LineEdit.text_submitted.connect(self._on_text_submitted)
 * func _on_text_submitted(command):
 *     var error = expression.parse(command)
 *     if error != OK:
 *         print(expression.get_error_text())
 *         return
 *     var result = expression.execute()
 *     if not expression.has_execute_failed():
 *         $LineEdit.text = str(result)
 * 
 * 
 * private Expression _expression = new Expression();
 * public override void _Ready()
 * {
 *     GetNode<LineEdit>("LineEdit").TextSubmitted += OnTextEntered;
 * }
 * private void OnTextEntered(string command)
 * {
 *     Error error = _expression.Parse(command);
 *     if (error != Error.Ok)
 *     {
 *         GD.Print(_expression.GetErrorText());
 *         return;
 *     }
 *     Variant result = _expression.Execute();
 *     if (!_expression.HasExecuteFailed())
 *     {
 *         GetNode<LineEdit>("LineEdit").Text = result.ToString();
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
declare class Expression extends RefCounted  {

  
/**
 * An expression can be made of any arithmetic operation, built-in math function call, method call of a passed instance, or built-in type construction call.
 *
 * An example expression text using the built-in math functions could be `sqrt(pow(3, 2) + pow(4, 2))`.
 *
 * In the following example we use a [LineEdit] node to write our expression and show the result.
 *
 * @example 
 * 
 * 
 * var expression = Expression.new()
 * func _ready():
 *     $LineEdit.text_submitted.connect(self._on_text_submitted)
 * func _on_text_submitted(command):
 *     var error = expression.parse(command)
 *     if error != OK:
 *         print(expression.get_error_text())
 *         return
 *     var result = expression.execute()
 *     if not expression.has_execute_failed():
 *         $LineEdit.text = str(result)
 * 
 * 
 * private Expression _expression = new Expression();
 * public override void _Ready()
 * {
 *     GetNode<LineEdit>("LineEdit").TextSubmitted += OnTextEntered;
 * }
 * private void OnTextEntered(string command)
 * {
 *     Error error = _expression.Parse(command);
 *     if (error != Error.Ok)
 *     {
 *         GD.Print(_expression.GetErrorText());
 *         return;
 *     }
 *     Variant result = _expression.Execute();
 *     if (!_expression.HasExecuteFailed())
 *     {
 *         GetNode<LineEdit>("LineEdit").Text = result.ToString();
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
  new(): Expression; 
  static "new"(): Expression 



/**
 * Executes the expression that was previously parsed by [method parse] and returns the result. Before you use the returned object, you should check if the method failed by calling [method has_execute_failed].
 *
 * If you defined input variables in [method parse], you can specify their values in the inputs array, in the same order.
 *
*/
execute(): any;

/** Returns the error text if [method parse] or [method execute] has failed. */
get_error_text(): string;

/** Returns [code]true[/code] if [method execute] has failed. */
has_execute_failed(): boolean;

/**
 * Parses the expression and returns an [enum Error] code.
 *
 * You can optionally specify names of variables that may appear in the expression with [param input_names], so that you can bind them when it gets executed.
 *
*/
parse(): int;

  connect<T extends SignalsOf<Expression>>(signal: T, method: SignalFunction<Expression[T]>): number;






}

