
/**
 * The [JSON] enables all data types to be converted to and from a JSON string. This useful for serializing data to save to a file or send over the network.
 *
 * [method stringify] is used to convert any data type into a JSON string.
 *
 * [method parse] is used to convert any existing JSON data into a [Variant] that can be used within Godot. If successfully parsed, use [member data] to retrieve the [Variant], and use `typeof` to check if the Variant's type is what you expect. JSON Objects are converted into a [Dictionary], but JSON data can be used to store [Array]s, numbers, [String]s and even just a boolean.
 *
 * **Example**
 *
 * @example 
 * 
 * var data_to_send = ["a", "b", "c"]
 * var json_string = JSON.stringify(data_to_send)
 * # Save data
 * # ...
 * # Retrieve data
 * var json = JSON.new()
 * var error = json.parse(json_string)
 * if error == OK:
 *     var data_received = json.data
 *     if typeof(data_received) == TYPE_ARRAY:
 *         print(data_received) # Prints array
 *     else:
 *         print("Unexpected data")
 * else:
 *     print("JSON Parse Error: ", json.get_error_message(), " in ", json_string, " at line ", json.get_error_line())
 * @summary 
 * 
 *
 * Alternatively, you can parse string using the static [method parse_string] method, but it doesn't allow to handle errors.
 *
 * @example 
 * 
 * var data = JSON.parse_string(json_string) # Returns null if parsing failed.
 * @summary 
 * 
 *
 * **Note:** Both parse methods do not fully comply with the JSON specification:
 *
 * - Trailing commas in arrays or objects are ignored, instead of causing a parser error.
 *
 * - New line and tab characters are accepted in string literals, and are treated like their corresponding escape sequences `\n` and `\t`.
 *
 * - Numbers are parsed using [method String.to_float] which is generally more lax than the JSON specification.
 *
 * - Certain errors, such as invalid Unicode sequences, do not cause a parser error. Instead, the string is cleansed and an error is logged to the console.
 *
*/
declare class JSON extends Resource  {

  
/**
 * The [JSON] enables all data types to be converted to and from a JSON string. This useful for serializing data to save to a file or send over the network.
 *
 * [method stringify] is used to convert any data type into a JSON string.
 *
 * [method parse] is used to convert any existing JSON data into a [Variant] that can be used within Godot. If successfully parsed, use [member data] to retrieve the [Variant], and use `typeof` to check if the Variant's type is what you expect. JSON Objects are converted into a [Dictionary], but JSON data can be used to store [Array]s, numbers, [String]s and even just a boolean.
 *
 * **Example**
 *
 * @example 
 * 
 * var data_to_send = ["a", "b", "c"]
 * var json_string = JSON.stringify(data_to_send)
 * # Save data
 * # ...
 * # Retrieve data
 * var json = JSON.new()
 * var error = json.parse(json_string)
 * if error == OK:
 *     var data_received = json.data
 *     if typeof(data_received) == TYPE_ARRAY:
 *         print(data_received) # Prints array
 *     else:
 *         print("Unexpected data")
 * else:
 *     print("JSON Parse Error: ", json.get_error_message(), " in ", json_string, " at line ", json.get_error_line())
 * @summary 
 * 
 *
 * Alternatively, you can parse string using the static [method parse_string] method, but it doesn't allow to handle errors.
 *
 * @example 
 * 
 * var data = JSON.parse_string(json_string) # Returns null if parsing failed.
 * @summary 
 * 
 *
 * **Note:** Both parse methods do not fully comply with the JSON specification:
 *
 * - Trailing commas in arrays or objects are ignored, instead of causing a parser error.
 *
 * - New line and tab characters are accepted in string literals, and are treated like their corresponding escape sequences `\n` and `\t`.
 *
 * - Numbers are parsed using [method String.to_float] which is generally more lax than the JSON specification.
 *
 * - Certain errors, such as invalid Unicode sequences, do not cause a parser error. Instead, the string is cleansed and an error is logged to the console.
 *
*/
  new(): JSON; 
  static "new"(): JSON 


/** Contains the parsed JSON data in [Variant] form. */
data: any;

/** Returns [code]0[/code] if the last call to [method parse] was successful, or the line number where the parse failed. */
get_error_line(): int;

/** Returns an empty string if the last call to [method parse] was successful, or the error message if it failed. */
get_error_message(): string;

/** Return the text parsed by [method parse] as long as the function is instructed to keep it. */
get_parsed_text(): string;

/**
 * Attempts to parse the [param json_text] provided.
 *
 * Returns an [enum Error]. If the parse was successful, it returns [constant OK] and the result can be retrieved using [member data]. If unsuccessful, use [method get_error_line] and [method get_error_message] for identifying the source of the failure.
 *
 * Non-static variant of [method parse_string], if you want custom error handling.
 *
 * The optional [param keep_text] argument instructs the parser to keep a copy of the original text. This text can be obtained later by using the [method get_parsed_text] function and is used when saving the resource (instead of generating new text from [member data]).
 *
*/
parse(): int;

/** Attempts to parse the [param json_string] provided and returns the parsed data. Returns [code]null[/code] if parse failed. */
parse_string(): any;

/**
 * Converts a [Variant] var to JSON text and returns the result. Useful for serializing data to store or send over the network.
 *
 * **Note:** The JSON specification does not define integer or float types, but only a **number** type. Therefore, converting a Variant to JSON text will convert all numerical values to [float] types.
 *
 * **Note:** If [param full_precision] is `true`, when stringifying floats, the unreliable digits are stringified in addition to the reliable digits to guarantee exact decoding.
 *
 * The [param indent] parameter controls if and how something is indented, the string used for this parameter will be used where there should be an indent in the output, even spaces like `"   "` will work. `\t` and `\n` can also be used for a tab indent, or to make a newline for each indent respectively.
 *
 * **Example output:**
 *
 * @example 
 * 
 * ## JSON.stringify(my_dictionary)
 * {"name":"my_dictionary","version":"1.0.0","entities":[{"name":"entity_0","value":"value_0"},{"name":"entity_1","value":"value_1"}]}
 * ## JSON.stringify(my_dictionary, "\t")
 * {
 *     "name": "my_dictionary",
 *     "version": "1.0.0",
 *     "entities": [
 *         {
 *             "name": "entity_0",
 *             "value": "value_0"
 *         },
 *         {
 *             "name": "entity_1",
 *             "value": "value_1"
 *         }
 *     ]
 * }
 * ## JSON.stringify(my_dictionary, "...")
 * {
 * ..."name": "my_dictionary",
 * ..."version": "1.0.0",
 * ..."entities": [
 * ......{
 * ........."name": "entity_0",
 * ........."value": "value_0"
 * ......},
 * ......{
 * ........."name": "entity_1",
 * ........."value": "value_1"
 * ......}
 * ...]
 * }
 * @summary 
 * 
 *
*/
stringify(): string;

  connect<T extends SignalsOf<JSON>>(signal: T, method: SignalFunction<JSON[T]>): number;






}

