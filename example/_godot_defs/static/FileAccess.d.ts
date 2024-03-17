
/**
 * This class can be used to permanently store data in the user device's file system and to read from it. This is useful for store game save data or player configuration files.
 *
 * Here's a sample on how to write and read from a file:
 *
 * @example 
 * 
 * 
 * func save(content):
 *     var file = FileAccess.open("user://save_game.dat", FileAccess.WRITE)
 *     file.store_string(content)
 * func load():
 *     var file = FileAccess.open("user://save_game.dat", FileAccess.READ)
 *     var content = file.get_as_text()
 *     return content
 * 
 * 
 * public void Save(string content)
 * {
 *     using var file = FileAccess.Open("user://save_game.dat", FileAccess.ModeFlags.Write);
 *     file.StoreString(content);
 * }
 * public string Load()
 * {
 *     using var file = FileAccess.Open("user://save_game.dat", FileAccess.ModeFlags.Read);
 *     string content = file.GetAsText();
 *     return content;
 * }
 * 
 * @summary 
 * 
 *
 * In the example above, the file will be saved in the user data folder as specified in the [url=$DOCS_URL/tutorials/io/data_paths.html]Data paths[/url] documentation.
 *
 * [FileAccess] will close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. [method close] can be used to close it before then explicitly. In C# the reference must be disposed manually, which can be done with the `using` statement or by calling the `Dispose` method directly.
 *
 * **Note:** To access project resources once exported, it is recommended to use [ResourceLoader] instead of [FileAccess], as some files are converted to engine-specific formats and their original source files might not be present in the exported PCK package.
 *
 * **Note:** Files are automatically closed only if the process exits "normally" (such as by clicking the window manager's close button or pressing **Alt + F4**). If you stop the project execution by pressing **F8** while the project is running, the file won't be closed as the game process will be killed. You can work around this by calling [method flush] at regular intervals.
 *
*/
declare class FileAccess extends RefCounted  {

  
/**
 * This class can be used to permanently store data in the user device's file system and to read from it. This is useful for store game save data or player configuration files.
 *
 * Here's a sample on how to write and read from a file:
 *
 * @example 
 * 
 * 
 * func save(content):
 *     var file = FileAccess.open("user://save_game.dat", FileAccess.WRITE)
 *     file.store_string(content)
 * func load():
 *     var file = FileAccess.open("user://save_game.dat", FileAccess.READ)
 *     var content = file.get_as_text()
 *     return content
 * 
 * 
 * public void Save(string content)
 * {
 *     using var file = FileAccess.Open("user://save_game.dat", FileAccess.ModeFlags.Write);
 *     file.StoreString(content);
 * }
 * public string Load()
 * {
 *     using var file = FileAccess.Open("user://save_game.dat", FileAccess.ModeFlags.Read);
 *     string content = file.GetAsText();
 *     return content;
 * }
 * 
 * @summary 
 * 
 *
 * In the example above, the file will be saved in the user data folder as specified in the [url=$DOCS_URL/tutorials/io/data_paths.html]Data paths[/url] documentation.
 *
 * [FileAccess] will close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. [method close] can be used to close it before then explicitly. In C# the reference must be disposed manually, which can be done with the `using` statement or by calling the `Dispose` method directly.
 *
 * **Note:** To access project resources once exported, it is recommended to use [ResourceLoader] instead of [FileAccess], as some files are converted to engine-specific formats and their original source files might not be present in the exported PCK package.
 *
 * **Note:** Files are automatically closed only if the process exits "normally" (such as by clicking the window manager's close button or pressing **Alt + F4**). If you stop the project execution by pressing **F8** while the project is running, the file won't be closed as the game process will be killed. You can work around this by calling [method flush] at regular intervals.
 *
*/
  new(): FileAccess; 
  static "new"(): FileAccess 


/**
 * If `true`, the file is read with big-endian [url=https://en.wikipedia.org/wiki/Endianness]endianness[/url]. If `false`, the file is read with little-endian endianness. If in doubt, leave this to `false` as most files are written with little-endian endianness.
 *
 * **Note:** [member big_endian] is only about the file format, not the CPU type. The CPU endianness doesn't affect the default endianness for files written.
 *
 * **Note:** This is always reset to `false` whenever you open the file. Therefore, you must set [member big_endian] **after** opening the file, not before.
 *
*/
big_endian: boolean;

/**
 * Closes the currently opened file and prevents subsequent read/write operations. Use [method flush] to persist the data to disk without closing the file.
 *
 * **Note:** [FileAccess] will automatically close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. In C# the reference must be disposed after we are done using it, this can be done with the `using` statement or calling the `Dispose` method directly.
 *
*/
close(): void;

/**
 * Returns `true` if the file cursor has already read past the end of the file.
 *
 * **Note:** `eof_reached() == false` cannot be used to check whether there is more data available. To loop while there is more data available, use:
 *
 * @example 
 * 
 * 
 * while file.get_position() < file.get_length():
 *     # Read data
 * 
 * 
 * while (file.GetPosition() < file.GetLength())
 * {
 *     // Read data
 * }
 * 
 * @summary 
 * 
 *
*/
eof_reached(): boolean;

/**
 * Returns `true` if the file exists in the given path.
 *
 * **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. See [method ResourceLoader.exists] for an alternative approach that takes resource remapping into account.
 *
 * For a non-static, relative equivalent, use [method DirAccess.file_exists].
 *
*/
file_exists(): boolean;

/**
 * Writes the file's buffer to disk. Flushing is automatically performed when the file is closed. This means you don't need to call [method flush] manually before closing a file. Still, calling [method flush] can be used to ensure the data is safe even if the project crashes instead of being closed gracefully.
 *
 * **Note:** Only call [method flush] when you actually need it. Otherwise, it will decrease performance due to constant disk writes.
 *
*/
flush(): void;

/** Returns the next 8 bits from the file as an integer. See [method store_8] for details on what values can be stored and retrieved this way. */
get_8(): int;

/** Returns the next 16 bits from the file as an integer. See [method store_16] for details on what values can be stored and retrieved this way. */
get_16(): int;

/** Returns the next 32 bits from the file as an integer. See [method store_32] for details on what values can be stored and retrieved this way. */
get_32(): int;

/** Returns the next 64 bits from the file as an integer. See [method store_64] for details on what values can be stored and retrieved this way. */
get_64(): int;

/**
 * Returns the whole file as a [String]. Text is interpreted as being UTF-8 encoded.
 *
 * If [param skip_cr] is `true`, carriage return characters (`\r`, CR) will be ignored when parsing the UTF-8, so that only line feed characters (`\n`, LF) represent a new line (Unix convention).
 *
*/
get_as_text(): string;

/** Returns next [param length] bytes of the file as a [PackedByteArray]. */
get_buffer(): PackedByteArray;

/**
 * Returns the next value of the file in CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default `","` (comma). This delimiter must be one-character long, and cannot be a double quotation mark.
 *
 * Text is interpreted as being UTF-8 encoded. Text values must be enclosed in double quotes if they include the delimiter character. Double quotes within a text value can be escaped by doubling their occurrence.
 *
 * For example, the following CSV lines are valid and will be properly parsed as two strings each:
 *
 * @example 
 * 
 * Alice,"Hello, Bob!"
 * Bob,Alice! What a surprise!
 * Alice,"I thought you'd reply with ""Hello, world""."
 * @summary 
 * 
 *
 * Note how the second line can omit the enclosing quotes as it does not include the delimiter. However it **could** very well use quotes, it was only written without for demonstration purposes. The third line must use `""` for each quotation mark that needs to be interpreted as such instead of the end of a text value.
 *
*/
get_csv_line(): PackedStringArray;

/** Returns the next 64 bits from the file as a floating-point number. */
get_double(): float;

/** Returns the last error that happened when trying to perform operations. Compare with the [code]ERR_FILE_*[/code] constants from [enum Error]. */
get_error(): int;

/**
 * Returns the whole [param path] file contents as a [PackedByteArray] without any decoding.
 *
 * Returns an empty [PackedByteArray] if an error occurred while opening the file. You can use [method get_open_error] to check the error that occurred.
 *
*/
get_file_as_bytes(): PackedByteArray;

/**
 * Returns the whole [param path] file contents as a [String]. Text is interpreted as being UTF-8 encoded.
 *
 * Returns an empty [String] if an error occurred while opening the file. You can use [method get_open_error] to check the error that occurred.
 *
*/
get_file_as_string(): string;

/** Returns the next 32 bits from the file as a floating-point number. */
get_float(): float;

/**
 * Returns `true`, if file `hidden` attribute is set.
 *
 * **Note:** This method is implemented on iOS, BSD, macOS, and Windows.
 *
*/
get_hidden_attribute(): boolean;

/** Returns the size of the file in bytes. */
get_length(): int;

/**
 * Returns the next line of the file as a [String].
 *
 * Text is interpreted as being UTF-8 encoded.
 *
*/
get_line(): string;

/** Returns an MD5 String representing the file at the given path or an empty [String] on failure. */
get_md5(): string;

/** Returns the last time the [param file] was modified in Unix timestamp format, or [code]0[/code] on error. This Unix timestamp can be converted to another format using the [Time] singleton. */
get_modified_time(): int;

/** Returns the result of the last [method open] call in the current thread. */
get_open_error(): int;

/**
 * Returns a [String] saved in Pascal format from the file.
 *
 * Text is interpreted as being UTF-8 encoded.
 *
*/
get_pascal_string(): string;

/** Returns the path as a [String] for the current open file. */
get_path(): string;

/** Returns the absolute path as a [String] for the current open file. */
get_path_absolute(): string;

/** Returns the file cursor's position. */
get_position(): int;

/**
 * Returns `true`, if file `read only` attribute is set.
 *
 * **Note:** This method is implemented on iOS, BSD, macOS, and Windows.
 *
*/
get_read_only_attribute(): boolean;

/** Returns the next bits from the file as a floating-point number. */
get_real(): float;

/** Returns a SHA-256 [String] representing the file at the given path or an empty [String] on failure. */
get_sha256(): string;

/**
 * Returns file UNIX permissions.
 *
 * **Note:** This method is implemented on iOS, Linux/BSD, and macOS.
 *
*/
get_unix_permissions(): int;

/**
 * Returns the next [Variant] value from the file. If [param allow_objects] is `true`, decoding objects is allowed.
 *
 * Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.
 *
 * **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.
 *
*/
get_var(): any;

/** Returns [code]true[/code] if the file is currently opened. */
is_open(): boolean;

/**
 * Creates a new [FileAccess] object and opens the file for writing or reading, depending on the flags.
 *
 * Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.
 *
*/
open(): FileAccess;

/**
 * Creates a new [FileAccess] object and opens a compressed file for reading or writing.
 *
 * **Note:** [method open_compressed] can only read files that were saved by Godot, not third-party compression formats. See [url=https://github.com/godotengine/godot/issues/28999]GitHub issue #28999[/url] for a workaround.
 *
 * Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.
 *
*/
open_compressed(): FileAccess;

/**
 * Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a binary key to encrypt/decrypt it.
 *
 * **Note:** The provided key must be 32 bytes long.
 *
 * Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.
 *
*/
open_encrypted(): FileAccess;

/**
 * Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a password to encrypt/decrypt it.
 *
 * Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.
 *
*/
open_encrypted_with_pass(): FileAccess;

/** Changes the file reading/writing cursor to the specified position (in bytes from the beginning of the file). */
seek(): void;

/**
 * Changes the file reading/writing cursor to the specified position (in bytes from the end of the file).
 *
 * **Note:** This is an offset, so you should use negative numbers or the cursor will be at the end of the file.
 *
*/
seek_end(): void;

/**
 * Sets file **hidden** attribute.
 *
 * **Note:** This method is implemented on iOS, BSD, macOS, and Windows.
 *
*/
set_hidden_attribute(): int;

/**
 * Sets file **read only** attribute.
 *
 * **Note:** This method is implemented on iOS, BSD, macOS, and Windows.
 *
*/
set_read_only_attribute(): int;

/**
 * Sets file UNIX permissions.
 *
 * **Note:** This method is implemented on iOS, Linux/BSD, and macOS.
 *
*/
set_unix_permissions(): int;

/**
 * Stores an integer as 8 bits in the file.
 *
 * **Note:** The [param value] should lie in the interval `[0, 255]`. Any other value will overflow and wrap around.
 *
 * To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).
 *
*/
store_8(): void;

/**
 * Stores an integer as 16 bits in the file.
 *
 * **Note:** The [param value] should lie in the interval `[0, 2^16 - 1]`. Any other value will overflow and wrap around.
 *
 * To store a signed integer, use [method store_64] or store a signed integer from the interval `[-2^15, 2^15 - 1]` (i.e. keeping one bit for the signedness) and compute its sign manually when reading. For example:
 *
 * @example 
 * 
 * 
 * const MAX_15B = 1 << 15
 * const MAX_16B = 1 << 16
 * func unsigned16_to_signed(unsigned):
 *     return (unsigned + MAX_15B) % MAX_16B - MAX_15B
 * func _ready():
 *     var f = FileAccess.open("user://file.dat", FileAccess.WRITE_READ)
 *     f.store_16(-42) # This wraps around and stores 65494 (2^16 - 42).
 *     f.store_16(121) # In bounds, will store 121.
 *     f.seek(0) # Go back to start to read the stored value.
 *     var read1 = f.get_16() # 65494
 *     var read2 = f.get_16() # 121
 *     var converted1 = unsigned16_to_signed(read1) # -42
 *     var converted2 = unsigned16_to_signed(read2) # 121
 * 
 * 
 * public override void _Ready()
 * {
 *     using var f = FileAccess.Open("user://file.dat", FileAccess.ModeFlags.WriteRead);
 *     f.Store16(unchecked((ushort)-42)); // This wraps around and stores 65494 (2^16 - 42).
 *     f.Store16(121); // In bounds, will store 121.
 *     f.Seek(0); // Go back to start to read the stored value.
 *     ushort read1 = f.Get16(); // 65494
 *     ushort read2 = f.Get16(); // 121
 *     short converted1 = (short)read1; // -42
 *     short converted2 = (short)read2; // 121
 * }
 * 
 * @summary 
 * 
 *
*/
store_16(): void;

/**
 * Stores an integer as 32 bits in the file.
 *
 * **Note:** The [param value] should lie in the interval `[0, 2^32 - 1]`. Any other value will overflow and wrap around.
 *
 * To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).
 *
*/
store_32(): void;

/**
 * Stores an integer as 64 bits in the file.
 *
 * **Note:** The [param value] must lie in the interval `[-2^63, 2^63 - 1]` (i.e. be a valid [int] value).
 *
*/
store_64(): void;

/** Stores the given array of bytes in the file. */
store_buffer(): void;

/**
 * Store the given [PackedStringArray] in the file as a line formatted in the CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default `","` (comma). This delimiter must be one-character long.
 *
 * Text will be encoded as UTF-8.
 *
*/
store_csv_line(): void;

/** Stores a floating-point number as 64 bits in the file. */
store_double(): void;

/** Stores a floating-point number as 32 bits in the file. */
store_float(): void;

/** Appends [param line] to the file followed by a line return character ([code]\n[/code]), encoding the text as UTF-8. */
store_line(): void;

/**
 * Stores the given [String] as a line in the file in Pascal format (i.e. also store the length of the string).
 *
 * Text will be encoded as UTF-8.
 *
*/
store_pascal_string(): void;

/** Stores a floating-point number in the file. */
store_real(): void;

/**
 * Appends [param string] to the file without a line return, encoding the text as UTF-8.
 *
 * **Note:** This method is intended to be used to write text files. The string is stored as a UTF-8 encoded buffer without string length or terminating zero, which means that it can't be loaded back easily. If you want to store a retrievable string in a binary file, consider using [method store_pascal_string] instead. For retrieving strings from a text file, you can use `get_buffer(length).get_string_from_utf8()` (if you know the length) or [method get_as_text].
 *
*/
store_string(): void;

/**
 * Stores any Variant value in the file. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).
 *
 * Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.
 *
 * **Note:** Not all properties are included. Only properties that are configured with the [constant PROPERTY_USAGE_STORAGE] flag set will be serialized. You can add a new usage flag to a property by overriding the [method Object._get_property_list] method in your class. You can also check how property usage is configured by calling [method Object._get_property_list]. See [enum PropertyUsageFlags] for the possible usage flags.
 *
*/
store_var(): void;

  connect<T extends SignalsOf<FileAccess>>(signal: T, method: SignalFunction<FileAccess[T]>): number;



/**
 * Opens the file for read operations. The cursor is positioned at the beginning of the file.
 *
*/
static READ: any;

/**
 * Opens the file for write operations. The file is created if it does not exist, and truncated if it does.
 *
*/
static WRITE: any;

/**
 * Opens the file for read and write operations. Does not truncate the file. The cursor is positioned at the beginning of the file.
 *
*/
static READ_WRITE: any;

/**
 * Opens the file for read and write operations. The file is created if it does not exist, and truncated if it does. The cursor is positioned at the beginning of the file.
 *
*/
static WRITE_READ: any;

/**
 * Uses the [url=https://fastlz.org/]FastLZ[/url] compression method.
 *
*/
static COMPRESSION_FASTLZ: any;

/**
 * Uses the [url=https://en.wikipedia.org/wiki/DEFLATE]DEFLATE[/url] compression method.
 *
*/
static COMPRESSION_DEFLATE: any;

/**
 * Uses the [url=https://facebook.github.io/zstd/]Zstandard[/url] compression method.
 *
*/
static COMPRESSION_ZSTD: any;

/**
 * Uses the [url=https://www.gzip.org/]gzip[/url] compression method.
 *
*/
static COMPRESSION_GZIP: any;

/**
 * Uses the [url=https://github.com/google/brotli]brotli[/url] compression method (only decompression is supported).
 *
*/
static COMPRESSION_BROTLI: any;

/**
 * Read for owner bit.
 *
*/
static UNIX_READ_OWNER: any;

/**
 * Write for owner bit.
 *
*/
static UNIX_WRITE_OWNER: any;

/**
 * Execute for owner bit.
 *
*/
static UNIX_EXECUTE_OWNER: any;

/**
 * Read for group bit.
 *
*/
static UNIX_READ_GROUP: any;

/**
 * Write for group bit.
 *
*/
static UNIX_WRITE_GROUP: any;

/**
 * Execute for group bit.
 *
*/
static UNIX_EXECUTE_GROUP: any;

/**
 * Read for other bit.
 *
*/
static UNIX_READ_OTHER: any;

/**
 * Write for other bit.
 *
*/
static UNIX_WRITE_OTHER: any;

/**
 * Execute for other bit.
 *
*/
static UNIX_EXECUTE_OTHER: any;

/**
 * Set user id on execution bit.
 *
*/
static UNIX_SET_USER_ID: any;

/**
 * Set group id on execution bit.
 *
*/
static UNIX_SET_GROUP_ID: any;

/**
 * Restricted deletion (sticky) bit.
 *
*/
static UNIX_RESTRICTED_DELETE: any;



}

