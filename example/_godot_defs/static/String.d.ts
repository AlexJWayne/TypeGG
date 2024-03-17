
/**
 * This is the built-in string Variant type (and the one used by GDScript). Strings may contain any number of Unicode characters, and expose methods useful for manipulating and generating strings. Strings are reference-counted and use a copy-on-write approach (every modification to a string returns a new [String]), so passing them around is cheap in resources.
 *
 * Some string methods have corresponding variations. Variations suffixed with `n` ([method countn], [method findn], [method replacen], etc.) are **case-insensitive** (they make no distinction between uppercase and lowercase letters). Method variations prefixed with `r` ([method rfind], [method rsplit], etc.) are reversed, and start from the end of the string, instead of the beginning.
 *
 * **Note:** In a boolean context, a string will evaluate to `false` if it is empty (`""`). Otherwise, a string will always evaluate to `true`. The `not` operator cannot be used. Instead, [method is_empty] should be used to check for empty strings.
 *
*/
declare class String {

  
/**
 * This is the built-in string Variant type (and the one used by GDScript). Strings may contain any number of Unicode characters, and expose methods useful for manipulating and generating strings. Strings are reference-counted and use a copy-on-write approach (every modification to a string returns a new [String]), so passing them around is cheap in resources.
 *
 * Some string methods have corresponding variations. Variations suffixed with `n` ([method countn], [method findn], [method replacen], etc.) are **case-insensitive** (they make no distinction between uppercase and lowercase letters). Method variations prefixed with `r` ([method rfind], [method rsplit], etc.) are reversed, and start from the end of the string, instead of the beginning.
 *
 * **Note:** In a boolean context, a string will evaluate to `false` if it is empty (`""`). Otherwise, a string will always evaluate to `true`. The `not` operator cannot be used. Instead, [method is_empty] should be used to check for empty strings.
 *
*/
  new(): String; 
  static "new"(): String 



/** Returns [code]true[/code] if the string begins with the given [param text]. See also [method ends_with]. */
begins_with(): boolean;

/**
 * Returns an array containing the bigrams (pairs of consecutive characters) of this string.
 *
 * @example 
 * 
 * print("Get up!".bigrams()) # Prints ["Ge", "et", "t ", " u", "up", "p!"]
 * @summary 
 * 
 *
*/
bigrams(): PackedStringArray;

/**
 * Converts the string representing a binary number into an [int]. The string may optionally be prefixed with `"0b"`, and an additional `-` prefix for negative numbers.
 *
 * @example 
 * 
 * 
 * print("101".bin_to_int())   # Prints 5
 * print("0b101".bin_to_int()) # Prints 5
 * print("-0b10".bin_to_int()) # Prints -2
 * 
 * 
 * GD.Print("101".BinToInt());   // Prints 5
 * GD.Print("0b101".BinToInt()); // Prints 5
 * GD.Print("-0b10".BinToInt()); // Prints -2
 * 
 * @summary 
 * 
 *
*/
bin_to_int(): int;

/** Returns a copy of the string with special characters escaped using the C language standard. */
c_escape(): string;

/**
 * Returns a copy of the string with escaped characters replaced by their meanings. Supported escape sequences are `\'`, `\"`, `\\`, `\a`, `\b`, `\f`, `\n`, `\r`, `\t`, `\v`.
 *
 * **Note:** Unlike the GDScript parser, this method doesn't support the `\uXXXX` escape sequence.
 *
*/
c_unescape(): string;

/**
 * Changes the appearance of the string: replaces underscores (`_`) with spaces, adds spaces before uppercase letters in the middle of a word, converts all letters to lowercase, then converts the first one and each one following a space to uppercase.
 *
 * @example 
 * 
 * 
 * "move_local_x".capitalize()   # Returns "Move Local X"
 * "sceneFile_path".capitalize() # Returns "Scene File Path"
 * 
 * 
 * "move_local_x".Capitalize();   // Returns "Move Local X"
 * "sceneFile_path".Capitalize(); // Returns "Scene File Path"
 * 
 * @summary 
 * 
 *
 * **Note:** This method not the same as the default appearance of properties in the Inspector dock, as it does not capitalize acronyms (`"2D"`, `"FPS"`, `"PNG"`, etc.) as you may expect.
 *
*/
capitalize(): string;

/**
 * Performs a case-sensitive comparison to another string. Returns `-1` if less than, `1` if greater than, or `0` if equal. "Less than" and "greater than" are determined by the [url=https://en.wikipedia.org/wiki/List_of_Unicode_characters]Unicode code points[/url] of each string, which roughly matches the alphabetical order.
 *
 * With different string lengths, returns `1` if this string is longer than the [param to] string, or `-1` if shorter. Note that the length of empty strings is **always** `0`.
 *
 * To get a [bool] result from a string comparison, use the `==` operator instead. See also [method nocasecmp_to], [method naturalcasecmp_to], and [method naturalnocasecmp_to].
 *
*/
casecmp_to(): int;

/**
 * Returns a single Unicode character from the decimal [param char]. You may use [url=https://unicodelookup.com/]unicodelookup.com[/url] or [url=https://www.unicode.org/charts/]unicode.org[/url] as points of reference.
 *
 * @example 
 * 
 * print(String.chr(65))     # Prints "A"
 * print(String.chr(129302)) # Prints "🤖" (robot face emoji)
 * @summary 
 * 
 *
*/
chr(): string;

/**
 * Returns `true` if the string contains [param what]. In GDScript, this corresponds to the `in` operator.
 *
 * @example 
 * 
 * 
 * print("Node".contains("de")) # Prints true
 * print("team".contains("I"))  # Prints false
 * print("I" in "team")         # Prints false
 * 
 * 
 * GD.Print("Node".Contains("de")); // Prints true
 * GD.Print("team".Contains("I"));  // Prints false
 * 
 * @summary 
 * 
 *
 * If you need to know where [param what] is within the string, use [method find].
 *
*/
contains(): boolean;

/** Returns the number of occurrences of the substring [param what] between [param from] and [param to] positions. If [param to] is 0, the search continues until the end of the string. */
count(): int;

/** Returns the number of occurrences of the substring [param what] between [param from] and [param to] positions, [b]ignoring case[/b]. If [param to] is 0, the search continues until the end of the string. */
countn(): int;

/** Returns a copy of the string with indentation (leading tabs and spaces) removed. See also [method indent] to add indentation. */
dedent(): string;

/** Returns [code]true[/code] if the string ends with the given [param text]. See also [method begins_with]. */
ends_with(): boolean;

/** Returns a string with [param chars] characters erased starting from [param position]. If [param chars] goes beyond the string's length given the specified [param position], fewer characters will be erased from the returned string. Returns an empty string if either [param position] or [param chars] is negative. Returns the original string unmodified if [param chars] is [code]0[/code]. */
erase(): string;

/**
 * Returns the index of the **first** occurrence of [param what] in this string, or `-1` if there are none. The search's start can be specified with [param from], continuing to the end of the string.
 *
 * @example 
 * 
 * 
 * print("Team".find("I")) # Prints -1
 * print("Potato".find("t"))    # Prints 2
 * print("Potato".find("t", 3)) # Prints 4
 * print("Potato".find("t", 5)) # Prints -1
 * 
 * 
 * GD.Print("Team".Find("I")); // Prints -1
 * GD.Print("Potato".Find("t"));    // Prints 2
 * GD.Print("Potato".Find("t", 3)); // Prints 4
 * GD.Print("Potato".Find("t", 5)); // Prints -1
 * 
 * @summary 
 * 
 *
 * **Note:** If you just want to know whether the string contains [param what], use [method contains]. In GDScript, you may also use the `in` operator.
 *
*/
find(): int;

/** Returns the index of the [b]first[/b] [b]case-insensitive[/b] occurrence of [param what] in this string, or [code]-1[/code] if there are none. The starting search index can be specified with [param from], continuing to the end of the string. */
findn(): int;

/**
 * Formats the string by replacing all occurrences of [param placeholder] with the elements of [param values].
 *
 * [param values] can be a [Dictionary] or an [Array]. Any underscores in [param placeholder] will be replaced with the corresponding keys in advance. Array elements use their index as keys.
 *
 * @example 
 * 
 * # Prints "Waiting for Godot is a play by Samuel Beckett, and Godot Engine is named after it."
 * var use_array_values = "Waiting for {0} is a play by {1}, and {0} Engine is named after it."
 * print(use_array_values.format(["Godot", "Samuel Beckett"]))
 * # Prints "User 42 is Godot."
 * print("User {id} is {name}.".format({"id": 42, "name": "Godot"}))
 * @summary 
 * 
 *
 * Some additional handling is performed when [param values] is an [Array]. If [param placeholder] does not contain an underscore, the elements of the [param values] array will be used to replace one occurrence of the placeholder in order; If an element of [param values] is another 2-element array, it'll be interpreted as a key-value pair.
 *
 * @example 
 * 
 * # Prints "User 42 is Godot."
 * print("User {} is {}.".format([42, "Godot"], "{}"))
 * print("User {id} is {name}.".format([["id", 42], ["name", "Godot"]]))
 * @summary 
 * 
 *
 * See also the [url=$DOCS_URL/tutorials/scripting/gdscript/gdscript_format_string.html]GDScript format string[/url] tutorial.
 *
 * **Note:** In C#, it's recommended to [url=https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated]interpolate strings with "$"[/url], instead.
 *
*/
format(): string;

/**
 * If the string is a valid file path, returns the base directory name.
 *
 * @example 
 * 
 * var dir_path = "/path/to/file.txt".get_base_dir() # dir_path is "/path/to"
 * @summary 
 * 
 *
*/
get_base_dir(): string;

/**
 * If the string is a valid file path, returns the full file path, without the extension.
 *
 * @example 
 * 
 * var base = "/path/to/file.txt".get_basename() # base is "/path/to/file"
 * @summary 
 * 
 *
*/
get_basename(): string;

/**
 * If the string is a valid file name or path, returns the file extension without the leading period (`.`). Otherwise, returns an empty string.
 *
 * @example 
 * 
 * var a = "/path/to/file.txt".get_extension() # a is "txt"
 * var b = "cool.txt".get_extension()          # b is "txt"
 * var c = "cool.font.tres".get_extension()    # c is "tres"
 * var d = ".pack1".get_extension()            # d is "pack1"
 * var e = "file.txt.".get_extension()  # e is ""
 * var f = "file.txt..".get_extension() # f is ""
 * var g = "txt".get_extension()        # g is ""
 * var h = "".get_extension()           # h is ""
 * @summary 
 * 
 *
*/
get_extension(): string;

/**
 * If the string is a valid file path, returns the file name, including the extension.
 *
 * @example 
 * 
 * var file = "/path/to/icon.png".get_file() # file is "icon.png"
 * @summary 
 * 
 *
*/
get_file(): string;

/**
 * Splits the string using a [param delimiter] and returns the substring at index [param slice]. Returns the original string if [param delimiter] does not occur in the string. Returns an empty string if the [param slice] does not exist.
 *
 * This is faster than [method split], if you only need one substring.
 *
 * **Example:**
 *
 * @example 
 * 
 * print("i/am/example/hi".get_slice("/", 2)) # Prints "example"
 * @summary 
 * 
 *
*/
get_slice(): string;

/** Returns the total number of slices when the string is split with the given [param delimiter] (see [method split]). */
get_slice_count(): int;

/**
 * Splits the string using a Unicode character with code [param delimiter] and returns the substring at index [param slice]. Returns an empty string if the [param slice] does not exist.
 *
 * This is faster than [method split], if you only need one substring.
 *
*/
get_slicec(): string;

/**
 * Returns the 32-bit hash value representing the string's contents.
 *
 * **Note:** Strings with equal hash values are **not** guaranteed to be the same, as a result of hash collisions. On the countrary, strings with different hash values are guaranteed to be different.
 *
*/
hash(): int;

/**
 * Decodes a hexadecimal string as a [PackedByteArray].
 *
 * @example 
 * 
 * 
 * var text = "hello world"
 * var encoded = text.to_utf8_buffer().hex_encode() # outputs "68656c6c6f20776f726c64"
 * print(buf.hex_decode().get_string_from_utf8())
 * 
 * 
 * var text = "hello world";
 * var encoded = text.ToUtf8Buffer().HexEncode(); // outputs "68656c6c6f20776f726c64"
 * GD.Print(buf.HexDecode().GetStringFromUtf8());
 * 
 * @summary 
 * 
 *
*/
hex_decode(): PackedByteArray;

/**
 * Converts the string representing a hexadecimal number into an [int]. The string may be optionally prefixed with `"0x"`, and an additional `-` prefix for negative numbers.
 *
 * @example 
 * 
 * 
 * print("0xff".hex_to_int()) # Prints 255
 * print("ab".hex_to_int())   # Prints 171
 * 
 * 
 * GD.Print("0xff".HexToInt()); // Prints 255
 * GD.Print("ab".HexToInt());   // Prints 171
 * 
 * @summary 
 * 
 *
*/
hex_to_int(): int;

/**
 * Converts [param size] which represents a number of bytes into a human-readable form.
 *
 * The result is in [url=https://en.wikipedia.org/wiki/Binary_prefix#IEC_prefixes]IEC prefix format[/url], which may end in either `"B"`, `"KiB"`, `"MiB"`, `"GiB"`, `"TiB"`, `"PiB"`, or `"EiB"`.
 *
*/
humanize_size(): string;

/**
 * Indents every line of the string with the given [param prefix]. Empty lines are not indented. See also [method dedent] to remove indentation.
 *
 * For example, the string can be indented with two tabulations using `"\t\t"`, or four spaces using `"    "`.
 *
*/
indent(): string;

/** Inserts [param what] at the given [param position] in the string. */
insert(): string;

/**
 * Returns `true` if the string is a path to a file or directory, and its starting point is explicitly defined. This method is the opposite of [method is_relative_path].
 *
 * This includes all paths starting with `"res://"`, `"user://"`, `"C:\"`, `"/"`, etc.
 *
*/
is_absolute_path(): boolean;

/** Returns [code]true[/code] if the string's length is [code]0[/code] ([code]""[/code]). See also [method length]. */
is_empty(): boolean;

/** Returns [code]true[/code] if the string is a path, and its starting point is dependent on context. The path could begin from the current directory, or the current [Node] (if the string is derived from a [NodePath]), and may sometimes be prefixed with [code]"./"[/code]. This method is the opposite of [method is_absolute_path]. */
is_relative_path(): boolean;

/**
 * Returns `true` if all characters of this string can be found in [param text] in their original order.
 *
 * @example 
 * 
 * var text = "Wow, incredible!"
 * print("inedible".is_subsequence_of(text)) # Prints true
 * print("Word!".is_subsequence_of(text))    # Prints true
 * print("Window".is_subsequence_of(text))   # Prints false
 * print("".is_subsequence_of(text))         # Prints true
 * @summary 
 * 
 *
*/
is_subsequence_of(): boolean;

/** Returns [code]true[/code] if all characters of this string can be found in [param text] in their original order, [b]ignoring case[/b]. */
is_subsequence_ofn(): boolean;

/** Returns [code]true[/code] if this string does not contain characters that are not allowed in file names ([code]:[/code] [code]/[/code] [code]\[/code] [code]?[/code] [code]*[/code] [code]"[/code] [code]|[/code] [code]%[/code] [code]<[/code] [code]>[/code]). */
is_valid_filename(): boolean;

/**
 * Returns `true` if this string represents a valid floating-point number. A valid float may contain only digits, one decimal point (`.`), and the exponent letter (`e`). It may also be prefixed with a positive (`+`) or negative (`-`) sign. Any valid integer is also a valid float (see [method is_valid_int]). See also [method to_float].
 *
 * @example 
 * 
 * print("1.7".is_valid_float())   # Prints true
 * print("24".is_valid_float())    # Prints true
 * print("7e3".is_valid_float())   # Prints true
 * print("Hello".is_valid_float()) # Prints false
 * @summary 
 * 
 *
*/
is_valid_float(): boolean;

/**
 * Returns `true` if this string is a valid hexadecimal number. A valid hexadecimal number only contains digits or letters `A` to `F` (either uppercase or lowercase), and may be prefixed with a positive (`+`) or negative (`-`) sign.
 *
 * If [param with_prefix] is `true`, the hexadecimal number needs to prefixed by `"0x"` to be considered valid.
 *
 * @example 
 * 
 * print("A08E".is_valid_hex_number())    # Prints true
 * print("-AbCdEf".is_valid_hex_number()) # Prints true
 * print("2.5".is_valid_hex_number())     # Prints false
 * print("0xDEADC0DE".is_valid_hex_number(true)) # Prints true
 * @summary 
 * 
 *
*/
is_valid_hex_number(): boolean;

/** Returns [code]true[/code] if this string is a valid color in hexadecimal HTML notation. The string must be a hexadecimal value (see [method is_valid_hex_number]) of either 3, 4, 6 or 8 digits, and may be prefixed by a hash sign ([code]#[/code]). Other HTML notations for colors, such as names or [code]hsl()[/code], are not considered valid. See also [method Color.html]. */
is_valid_html_color(): boolean;

/**
 * Returns `true` if this string is a valid identifier. A valid identifier may contain only letters, digits and underscores (`_`), and the first character may not be a digit.
 *
 * @example 
 * 
 * print("node_2d".is_valid_identifier())    # Prints true
 * print("TYPE_FLOAT".is_valid_identifier()) # Prints true
 * print("1st_method".is_valid_identifier()) # Prints false
 * print("MyMethod#2".is_valid_identifier()) # Prints false
 * @summary 
 * 
 *
*/
is_valid_identifier(): boolean;

/**
 * Returns `true` if this string represents a valid integer. A valid integer only contains digits, and may be prefixed with a positive (`+`) or negative (`-`) sign. See also [method to_int].
 *
 * @example 
 * 
 * print("7".is_valid_int())    # Prints true
 * print("1.65".is_valid_int()) # Prints false
 * print("Hi".is_valid_int())   # Prints false
 * print("+3".is_valid_int())   # Prints true
 * print("-12".is_valid_int())  # Prints true
 * @summary 
 * 
 *
*/
is_valid_int(): boolean;

/** Returns [code]true[/code] if this string represents a well-formatted IPv4 or IPv6 address. This method considers [url=https://en.wikipedia.org/wiki/Reserved_IP_addresses]reserved IP addresses[/url] such as [code]"0.0.0.0"[/code] and [code]"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff"[/code] as valid. */
is_valid_ip_address(): boolean;

/**
 * Returns the concatenation of [param parts]' elements, with each element separated by the string calling this method. This method is the opposite of [method split].
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var fruits = ["Apple", "Orange", "Pear", "Kiwi"]
 * print(", ".join(fruits))  # Prints "Apple, Orange, Pear, Kiwi"
 * print("---".join(fruits)) # Prints "Apple---Orange---Pear---Kiwi"
 * 
 * 
 * var fruits = new string[] {"Apple", "Orange", "Pear", "Kiwi"};
 * // In C#, this method is static.
 * GD.Print(string.Join(", ", fruits));  // Prints "Apple, Orange, Pear, Kiwi"
 * GD.Print(string.Join("---", fruits)); // Prints "Apple---Orange---Pear---Kiwi"
 * 
 * @summary 
 * 
 *
*/
join(): string;

/** Returns a copy of the string with special characters escaped using the JSON standard. Because it closely matches the C standard, it is possible to use [method c_unescape] to unescape the string, if necessary. */
json_escape(): string;

/**
 * Returns the first [param length] characters from the beginning of the string. If [param length] is negative, strips the last [param length] characters from the string's end.
 *
 * @example 
 * 
 * print("Hello World!".left(3))  # Prints "Hel"
 * print("Hello World!".left(-4)) # Prints "Hello Wo"
 * @summary 
 * 
 *
*/
left(): string;

/** Returns the number of characters in the string. Empty strings ([code]""[/code]) always return [code]0[/code]. See also [method is_empty]. */
length(): int;

/** Formats the string to be at least [param min_length] long by adding [param character]s to the left of the string, if necessary. See also [method rpad]. */
lpad(): string;

/**
 * Removes a set of characters defined in [param chars] from the string's beginning. See also [method rstrip].
 *
 * **Note:** [param chars] is not a prefix. Use [method trim_prefix] to remove a single prefix, rather than a set of characters.
 *
*/
lstrip(): string;

/** Does a simple expression match (also called "glob" or "globbing"), where [code]*[/code] matches zero or more arbitrary characters and [code]?[/code] matches any single character except a period ([code].[/code]). An empty string or empty expression always evaluates to [code]false[/code]. */
match(): boolean;

/** Does a simple [b]case-insensitive[/b] expression match, where [code]*[/code] matches zero or more arbitrary characters and [code]?[/code] matches any single character except a period ([code].[/code]). An empty string or empty expression always evaluates to [code]false[/code]. */
matchn(): boolean;

/** Returns the [url=https://en.wikipedia.org/wiki/MD5]MD5 hash[/url] of the string as a [PackedByteArray]. */
md5_buffer(): PackedByteArray;

/** Returns the [url=https://en.wikipedia.org/wiki/MD5]MD5 hash[/url] of the string as another [String]. */
md5_text(): string;

/**
 * Performs a **case-sensitive**, **natural order** comparison to another string. Returns `-1` if less than, `1` if greater than, or `0` if equal. "Less than" or "greater than" are determined by the [url=https://en.wikipedia.org/wiki/List_of_Unicode_characters]Unicode code points[/url] of each string, which roughly matches the alphabetical order.
 *
 * When used for sorting, natural order comparison orders sequences of numbers by the combined value of each digit as is often expected, instead of the single digit's value. A sorted sequence of numbered strings will be `["1", "2", "3", ...]`, not `["1", "10", "2", "3", ...]`.
 *
 * With different string lengths, returns `1` if this string is longer than the [param to] string, or `-1` if shorter. Note that the length of empty strings is **always** `0`.
 *
 * To get a [bool] result from a string comparison, use the `==` operator instead. See also [method naturalnocasecmp_to], [method nocasecmp_to], and [method casecmp_to].
 *
*/
naturalcasecmp_to(): int;

/**
 * Performs a **case-insensitive**, **natural order** comparison to another string. Returns `-1` if less than, `1` if greater than, or `0` if equal. "Less than" or "greater than" are determined by the [url=https://en.wikipedia.org/wiki/List_of_Unicode_characters]Unicode code points[/url] of each string, which roughly matches the alphabetical order. Internally, lowercase characters are converted to uppercase for the comparison.
 *
 * When used for sorting, natural order comparison orders sequences of numbers by the combined value of each digit as is often expected, instead of the single digit's value. A sorted sequence of numbered strings will be `["1", "2", "3", ...]`, not `["1", "10", "2", "3", ...]`.
 *
 * With different string lengths, returns `1` if this string is longer than the [param to] string, or `-1` if shorter. Note that the length of empty strings is **always** `0`.
 *
 * To get a [bool] result from a string comparison, use the `==` operator instead. See also [method naturalcasecmp_to], [method nocasecmp_to], and [method casecmp_to].
 *
*/
naturalnocasecmp_to(): int;

/**
 * Performs a **case-insensitive** comparison to another string. Returns `-1` if less than, `1` if greater than, or `0` if equal. "Less than" or "greater than" are determined by the [url=https://en.wikipedia.org/wiki/List_of_Unicode_characters]Unicode code points[/url] of each string, which roughly matches the alphabetical order. Internally, lowercase characters are converted to uppercase for the comparison.
 *
 * With different string lengths, returns `1` if this string is longer than the [param to] string, or `-1` if shorter. Note that the length of empty strings is **always** `0`.
 *
 * To get a [bool] result from a string comparison, use the `==` operator instead. See also [method casecmp_to], [method naturalcasecmp_to], and [method naturalnocasecmp_to].
 *
*/
nocasecmp_to(): int;

/**
 * Converts a [float] to a string representation of a decimal number, with the number of decimal places specified in [param decimals].
 *
 * If [param decimals] is `-1` as by default, the string representation may only have up to 14 significant digits, with digits before the decimal point having priority over digits after.
 *
 * Trailing zeros are not included in the string. The last digit is rounded, not truncated.
 *
 * **Example:**
 *
 * @example 
 * 
 * String.num(3.141593)     # Returns "3.141593"
 * String.num(3.141593, 3)  # Returns "3.142"
 * String.num(3.14159300)   # Returns "3.141593"
 * # Here, the last digit will be rounded up,
 * # which reduces the total digit count, since trailing zeros are removed:
 * String.num(42.129999, 5) # Returns "42.13"
 * # If `decimals` is not specified, the maximum number of significant digits is 14:
 * String.num(-0.0000012345432123454321)     # Returns "-0.00000123454321"
 * String.num(-10000.0000012345432123454321) # Returns "-10000.0000012345"
 * @summary 
 * 
 *
*/
num(): string;

/**
 * Converts the given [param number] to a string representation, with the given [param base].
 *
 * By default, [param base] is set to decimal (`10`). Other common bases in programming include binary (`2`), [url=https://en.wikipedia.org/wiki/Octal]octal[/url] (`8`), hexadecimal (`16`).
 *
 * If [param capitalize_hex] is `true`, digits higher than 9 are represented in uppercase.
 *
*/
num_int64(): string;

/**
 * Converts the given [param number] to a string representation, in scientific notation.
 *
 * @example 
 * 
 * 
 * var n = -5.2e8
 * print(n)                       # Prints -520000000
 * print(String.NumScientific(n)) # Prints -5.2e+08
 * 
 * 
 * // This method is not implemented in C#.
 * // Use `string.ToString()` with "e" to achieve similar results.
 * var n = -5.2e8f;
 * GD.Print(n);                // Prints -520000000
 * GD.Print(n.ToString("e1")); // Prints -5.2e+008
 * 
 * @summary 
 * 
 *
 * **Note:** In C#, this method is not implemented. To achieve similar results, see C#'s [url=https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings]Standard numeric format strings[/url]
 *
*/
num_scientific(): string;

/**
 * Converts the given unsigned [int] to a string representation, with the given [param base].
 *
 * By default, [param base] is set to decimal (`10`). Other common bases in programming include binary (`2`), [url=https://en.wikipedia.org/wiki/Octal]octal[/url] (`8`), hexadecimal (`16`).
 *
 * If [param capitalize_hex] is `true`, digits higher than 9 are represented in uppercase.
 *
*/
num_uint64(): string;

/** Formats the string representing a number to have an exact number of [param digits] [i]after[/i] the decimal point. */
pad_decimals(): string;

/** Formats the string representing a number to have an exact number of [param digits] [i]before[/i] the decimal point. */
pad_zeros(): string;

/**
 * Concatenates [param file] at the end of the string as a subpath, adding `/` if necessary.
 *
 * **Example:** `"this/is".path_join("path") == "this/is/path"`.
 *
*/
path_join(): string;

/** Repeats this string a number of times. [param count] needs to be greater than [code]0[/code]. Otherwise, returns an empty string. */
repeat(): string;

/** Replaces all occurrences of [param what] inside the string with the given [param forwhat]. */
replace(): string;

/** Replaces all [b]case-insensitive[/b] occurrences of [param what] inside the string with the given [param forwhat]. */
replacen(): string;

/** Returns the copy of this string in reverse order. */
reverse(): string;

/** Returns the index of the [b]last[/b] occurrence of [param what] in this string, or [code]-1[/code] if there are none. The search's start can be specified with [param from], continuing to the beginning of the string. This method is the reverse of [method find]. */
rfind(): int;

/** Returns the index of the [b]last[/b] [b]case-insensitive[/b] occurrence of [param what] in this string, or [code]-1[/code] if there are none. The starting search index can be specified with [param from], continuing to the beginning of the string. This method is the reverse of [method findn]. */
rfindn(): int;

/**
 * Returns the last [param length] characters from the end of the string. If [param length] is negative, strips the first [param length] characters from the string's beginning.
 *
 * @example 
 * 
 * print("Hello World!".right(3))  # Prints "ld!"
 * print("Hello World!".right(-4)) # Prints "o World!"
 * @summary 
 * 
 *
*/
right(): string;

/** Formats the string to be at least [param min_length] long, by adding [param character]s to the right of the string, if necessary. See also [method lpad]. */
rpad(): string;

/**
 * Splits the string using a [param delimiter] and returns an array of the substrings, starting from the end of the string. The splits in the returned array appear in the same order as the original string. If [param delimiter] is an empty string, each substring will be a single character.
 *
 * If [param allow_empty] is `false`, empty strings between adjacent delimiters are excluded from the array.
 *
 * If [param maxsplit] is greater than `0`, the number of splits may not exceed [param maxsplit]. By default, the entire string is split, which is mostly identical to [method split].
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var some_string = "One,Two,Three,Four"
 * var some_array = some_string.rsplit(",", true, 1)
 * print(some_array.size()) # Prints 2
 * print(some_array[0])     # Prints "One,Two,Three"
 * print(some_array[1])     # Prints "Four"
 * 
 * 
 * // In C#, there is no String.RSplit() method.
 * 
 * @summary 
 * 
 *
*/
rsplit(): PackedStringArray;

/**
 * Removes a set of characters defined in [param chars] from the string's end. See also [method lstrip].
 *
 * **Note:** [param chars] is not a suffix. Use [method trim_suffix] to remove a single suffix, rather than a set of characters.
 *
*/
rstrip(): string;

/** Returns the [url=https://en.wikipedia.org/wiki/SHA-1]SHA-1[/url] hash of the string as a [PackedByteArray]. */
sha1_buffer(): PackedByteArray;

/** Returns the [url=https://en.wikipedia.org/wiki/SHA-1]SHA-1[/url] hash of the string as another [String]. */
sha1_text(): string;

/** Returns the [url=https://en.wikipedia.org/wiki/SHA-2]SHA-256[/url] hash of the string as a [PackedByteArray]. */
sha256_buffer(): PackedByteArray;

/** Returns the [url=https://en.wikipedia.org/wiki/SHA-2]SHA-256[/url] hash of the string as another [String]. */
sha256_text(): string;

/**
 * Returns the similarity index ([url=https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient]Sorensen-Dice coefficient[/url]) of this string compared to another. A result of `1.0` means totally similar, while `0.0` means totally dissimilar.
 *
 * @example 
 * 
 * print("ABC123".similarity("ABC123")) # Prints 1.0
 * print("ABC123".similarity("XYZ456")) # Prints 0.0
 * print("ABC123".similarity("123ABC")) # Prints 0.8
 * print("ABC123".similarity("abc123")) # Prints 0.4
 * @summary 
 * 
 *
*/
similarity(): float;

/**
 * If the string is a valid file path, converts the string into a canonical path. This is the shortest possible path, without `"./"`, and all the unnecessary `".."` and `"/"`.
 *
 * @example 
 * 
 * var simple_path = "./path/to///../file".simplify_path()
 * print(simple_path) # Prints "path/file"
 * @summary 
 * 
 *
*/
simplify_path(): string;

/**
 * Splits the string using a [param delimiter] and returns an array of the substrings. If [param delimiter] is an empty string, each substring will be a single character. This method is the opposite of [method join].
 *
 * If [param allow_empty] is `false`, empty strings between adjacent delimiters are excluded from the array.
 *
 * If [param maxsplit] is greater than `0`, the number of splits may not exceed [param maxsplit]. By default, the entire string is split.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var some_array = "One,Two,Three,Four".split(",", true, 2)
 * print(some_array.size()) # Prints 3
 * print(some_array[0])     # Prints "One"
 * print(some_array[1])     # Prints "Two"
 * print(some_array[2])     # Prints "Three,Four"
 * 
 * 
 * // C#'s `Split()` does not support the `maxsplit` parameter.
 * var someArray = "One,Two,Three".Split(",");
 * GD.Print(someArray[0]); // Prints "One"
 * GD.Print(someArray[1]); // Prints "Two"
 * GD.Print(someArray[2]); // Prints "Three"
 * 
 * @summary 
 * 
 *
 * **Note:** If you only need one substring from the array, consider using [method get_slice] which is faster. If you need to split strings with more complex rules, use the [RegEx] class instead.
 *
*/
split(): PackedStringArray;

/**
 * Splits the string into floats by using a [param delimiter] and returns a [PackedFloat64Array].
 *
 * If [param allow_empty] is `false`, empty or invalid [float] conversions between adjacent delimiters are excluded.
 *
 * @example 
 * 
 * var a = "1,2,4.5".split_floats(",")         # a is [1.0, 2.0, 4.5]
 * var c = "1| ||4.5".split_floats("|")        # c is [1.0, 0.0, 0.0, 4.5]
 * var b = "1| ||4.5".split_floats("|", false) # b is [1.0, 4.5]
 * @summary 
 * 
 *
*/
split_floats(): PackedFloat64Array;

/**
 * Strips all non-printable characters from the beginning and the end of the string. These include spaces, tabulations (`\t`), and newlines (`\n` `\r`).
 *
 * If [param left] is `false`, ignores the string's beginning. Likewise, if [param right] is `false`, ignores the string's end.
 *
*/
strip_edges(): string;

/** Strips all escape characters from the string. These include all non-printable control characters of the first page of the ASCII table (values from 0 to 31), such as tabulation ([code]\t[/code]) and newline ([code]\n[/code], [code]\r[/code]) characters, but [i]not[/i] spaces. */
strip_escapes(): string;

/** Returns part of the string from the position [param from] with length [param len]. If [param len] is [code]-1[/code] (as by default), returns the rest of the string starting from the given position. */
substr(): string;

/** Converts the string to an [url=https://en.wikipedia.org/wiki/ASCII]ASCII[/url]/Latin-1 encoded [PackedByteArray]. This method is slightly faster than [method to_utf8_buffer], but replaces all unsupported characters with spaces. This is the inverse of [method PackedByteArray.get_string_from_ascii]. */
to_ascii_buffer(): PackedByteArray;

/** Returns the string converted to [code]camelCase[/code]. */
to_camel_case(): string;

/**
 * Converts the string representing a decimal number into a [float]. This method stops on the first non-number character, except the first decimal point (`.`) and the exponent letter (`e`). See also [method is_valid_float].
 *
 * @example 
 * 
 * var a = "12.35".to_float()  # a is 12.35
 * var b = "1.2.3".to_float()  # b is 1.2
 * var c = "12xy3".to_float()  # c is 12.0
 * var d = "1e3".to_float()    # d is 1000.0
 * var e = "Hello!".to_float() # e is 0.0
 * @summary 
 * 
 *
*/
to_float(): float;

/**
 * Converts the string representing an integer number into an [int]. This method removes any non-number character and stops at the first decimal point (`.`). See also [method is_valid_int].
 *
 * @example 
 * 
 * var a = "123".to_int()    # a is 123
 * var b = "x1y2z3".to_int() # b is 123
 * var c = "-1.2.3".to_int() # c is -1
 * var d = "Hello!".to_int() # d is 0
 * @summary 
 * 
 *
*/
to_int(): int;

/** Returns the string converted to lowercase. */
to_lower(): string;

/** Returns the string converted to [code]PascalCase[/code]. */
to_pascal_case(): string;

/** Returns the string converted to [code]snake_case[/code]. */
to_snake_case(): string;

/** Returns the string converted to uppercase. */
to_upper(): string;

/** Converts the string to a [url=https://en.wikipedia.org/wiki/UTF-8]UTF-8[/url] encoded [PackedByteArray]. This method is slightly slower than [method to_ascii_buffer], but supports all UTF-8 characters. For most cases, prefer using this method. This is the inverse of [method PackedByteArray.get_string_from_utf8]. */
to_utf8_buffer(): PackedByteArray;

/** Converts the string to a [url=https://en.wikipedia.org/wiki/UTF-16]UTF-16[/url] encoded [PackedByteArray]. This is the inverse of [method PackedByteArray.get_string_from_utf16]. */
to_utf16_buffer(): PackedByteArray;

/** Converts the string to a [url=https://en.wikipedia.org/wiki/UTF-32]UTF-32[/url] encoded [PackedByteArray]. This is the inverse of [method PackedByteArray.get_string_from_utf32]. */
to_utf32_buffer(): PackedByteArray;

/** Converts the string to a [url=https://en.wikipedia.org/wiki/Wide_character]wide character[/url] ([code]wchar_t[/code], UTF-16 on Windows, UTF-32 on other platforms) encoded [PackedByteArray]. This is the inverse of [method PackedByteArray.get_string_from_wchar]. */
to_wchar_buffer(): PackedByteArray;

/** Removes the given [param prefix] from the start of the string, or returns the string unchanged. */
trim_prefix(): string;

/** Removes the given [param suffix] from the end of the string, or returns the string unchanged. */
trim_suffix(): string;

/** Returns the character code at position [param at]. */
unicode_at(): int;

/**
 * Decodes the string from its URL-encoded format. This method is meant to properly decode the parameters in a URL when receiving an HTTP request. See also [method uri_encode].
 *
 * @example 
 * 
 * 
 * var url = "$DOCS_URL/?highlight=Godot%20Engine%3%docs"
 * print(url.uri_decode()) # Prints "$DOCS_URL/?highlight=Godot Engine:docs"
 * 
 * 
 * var url = "$DOCS_URL/?highlight=Godot%20Engine%3%docs"
 * GD.Print(url.URIDecode()) // Prints "$DOCS_URL/?highlight=Godot Engine:docs"
 * 
 * @summary 
 * 
 *
*/
uri_decode(): string;

/**
 * Encodes the string to URL-friendly format. This method is meant to properly encode the parameters in a URL when sending an HTTP request. See also [method uri_decode].
 *
 * @example 
 * 
 * 
 * var prefix = "$DOCS_URL/?highlight="
 * var url = prefix + "Godot Engine:docs".uri_encode()
 * print(url) # Prints "$DOCS_URL/?highlight=Godot%20Engine%3%docs"
 * 
 * 
 * var prefix = "$DOCS_URL/?highlight=";
 * var url = prefix + "Godot Engine:docs".URIEncode();
 * GD.Print(url); // Prints "$DOCS_URL/?highlight=Godot%20Engine%3%docs"
 * 
 * @summary 
 * 
 *
*/
uri_encode(): string;

/** Returns a copy of the string with all characters that are not allowed in [method is_valid_filename] replaced with underscores. */
validate_filename(): string;

/** Returns a copy of the string with all characters that are not allowed in [member Node.name] ([code].[/code] [code]:[/code] [code]@[/code] [code]/[/code] [code]"[/code] [code]%[/code]) replaced with underscores. */
validate_node_name(): string;

/** Returns a copy of the string with special characters escaped using the XML standard. If [param escape_quotes] is [code]true[/code], the single quote ([code]'[/code]) and double quote ([code]"[/code]) characters are also escaped. */
xml_escape(): string;

/** Returns a copy of the string with escaped characters replaced by their meanings according to the XML standard. */
xml_unescape(): string;

  connect<T extends SignalsOf<String>>(signal: T, method: SignalFunction<String[T]>): number;






}

