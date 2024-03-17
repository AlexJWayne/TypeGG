
/**
 * This class wraps the most common functionalities for communicating with the host operating system, such as the video driver, delays, environment variables, execution of binaries, command line, etc.
 *
 * **Note:** In Godot 4, [OS] functions related to window management were moved to the [DisplayServer] singleton.
 *
*/
declare class OSClass extends Object  {

  
/**
 * This class wraps the most common functionalities for communicating with the host operating system, such as the video driver, delays, environment variables, execution of binaries, command line, etc.
 *
 * **Note:** In Godot 4, [OS] functions related to window management were moved to the [DisplayServer] singleton.
 *
*/
  new(): OSClass; 
  static "new"(): OSClass 


/** If [code]true[/code], the engine filters the time delta measured between each frame, and attempts to compensate for random variation. This will only operate on systems where V-Sync is active. */
delta_smoothing: boolean;

/** If [code]true[/code], the engine optimizes for low processor usage by only refreshing the screen if needed. Can improve battery consumption on mobile. */
low_processor_usage_mode: boolean;

/** The amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU usage. */
low_processor_usage_mode_sleep_usec: int;

/** Displays a modal dialog box using the host OS' facilities. Execution is blocked until the dialog is closed. */
alert(): void;

/**
 * Shuts down system MIDI driver.
 *
 * **Note:** This method is implemented on Linux, macOS and Windows.
 *
*/
close_midi_inputs(): void;

/** Crashes the engine (or the editor if called within a [code]@tool[/code] script). This should [i]only[/i] be used for testing the system's crash handler, not for any other purpose. For general error reporting, use (in order of preference) [method @GDScript.assert], [method @GlobalScope.push_error] or [method alert]. See also [method kill]. */
crash(): void;

/**
 * Creates a new instance of Godot that runs independently. The [param arguments] are used in the given order and separated by a space.
 *
 * If the process creation succeeds, the method will return the new process ID, which you can use to monitor the process (and potentially terminate it with [method kill]). If the process creation fails, the method will return `-1`.
 *
 * **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.
 *
*/
create_instance(): int;

/**
 * Creates a new process that runs independently of Godot. It will not terminate if Godot terminates. The path specified in [param path] must exist and be executable file or macOS .app bundle. Platform path resolution will be used. The [param arguments] are used in the given order and separated by a space.
 *
 * On Windows, if [param open_console] is `true` and the process is a console app, a new terminal window will be opened. This is ignored on other platforms.
 *
 * If the process creation succeeds, the method will return the new process ID, which you can use to monitor the process (and potentially terminate it with [method kill]). If the process creation fails, the method will return `-1`.
 *
 * For example, running another instance of the project:
 *
 * @example 
 * 
 * 
 * var pid = OS.create_process(OS.get_executable_path(), [])
 * 
 * 
 * var pid = OS.CreateProcess(OS.GetExecutablePath(), new string[] {});
 * 
 * @summary 
 * 
 *
 * See [method execute] if you wish to run an external command and retrieve the results.
 *
 * **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.
 *
 * **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export or system .app bundle, system .app bundles will ignore arguments.
 *
*/
create_process(): int;

/**
 * Delays execution of the current thread by [param msec] milliseconds. [param msec] must be greater than or equal to `0`. Otherwise, [method delay_msec] will do nothing and will print an error message.
 *
 * **Note:** [method delay_msec] is a **blocking** way to delay code execution. To delay code execution in a non-blocking way, see [method SceneTree.create_timer]. Awaiting with [method SceneTree.create_timer] will delay the execution of code placed below the `await` without affecting the rest of the project (or editor, for [EditorPlugin]s and [EditorScript]s).
 *
 * **Note:** When [method delay_msec] is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [method delay_msec] as part of an [EditorPlugin] or [EditorScript], it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).
 *
*/
delay_msec(): void;

/**
 * Delays execution of the current thread by [param usec] microseconds. [param usec] must be greater than or equal to `0`. Otherwise, [method delay_usec] will do nothing and will print an error message.
 *
 * **Note:** [method delay_usec] is a **blocking** way to delay code execution. To delay code execution in a non-blocking way, see [method SceneTree.create_timer]. Awaiting with [method SceneTree.create_timer] will delay the execution of code placed below the `await` without affecting the rest of the project (or editor, for [EditorPlugin]s and [EditorScript]s).
 *
 * **Note:** When [method delay_usec] is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [method delay_usec] as part of an [EditorPlugin] or [EditorScript], it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).
 *
*/
delay_usec(): void;

/**
 * Executes a command. The file specified in [param path] must exist and be executable. Platform path resolution will be used. The [param arguments] are used in the given order, separated by spaces, and wrapped in quotes. If an [param output] [Array] is provided, the complete shell output of the process will be appended as a single [String] element in [param output]. If [param read_stderr] is `true`, the output to the standard error stream will be included too.
 *
 * On Windows, if [param open_console] is `true` and the process is a console app, a new terminal window will be opened. This is ignored on other platforms.
 *
 * If the command is successfully executed, the method will return the exit code of the command, or `-1` if it fails.
 *
 * **Note:** The Godot thread will pause its execution until the executed command terminates. Use [Thread] to create a separate thread that will not pause the Godot thread, or use [method create_process] to create a completely independent process.
 *
 * For example, to retrieve a list of the working directory's contents:
 *
 * @example 
 * 
 * 
 * var output = []
 * var exit_code = OS.execute("ls", ["-l", "/tmp"], output)
 * 
 * 
 * var output = new Godot.Collections.Array();
 * int exitCode = OS.Execute("ls", new string[] {"-l", "/tmp"}, output);
 * 
 * @summary 
 * 
 *
 * If you wish to access a shell built-in or execute a composite command, a platform-specific shell can be invoked. For example:
 *
 * @example 
 * 
 * 
 * var output = []
 * OS.execute("CMD.exe", ["/C", "cd %TEMP% && dir"], output)
 * 
 * 
 * var output = new Godot.Collections.Array();
 * OS.Execute("CMD.exe", new string[] {"/C", "cd %TEMP% && dir"}, output);
 * 
 * @summary 
 * 
 *
 * **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.
 *
 * **Note:** To execute a Windows command interpreter built-in command, specify `cmd.exe` in [param path], `/c` as the first argument, and the desired command as the second argument.
 *
 * **Note:** To execute a PowerShell built-in command, specify `powershell.exe` in [param path], `-Command` as the first argument, and the desired command as the second argument.
 *
 * **Note:** To execute a Unix shell built-in command, specify shell executable name in [param path], `-c` as the first argument, and the desired command as the second argument.
 *
 * **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export.
 *
*/
execute(): int;

/** Returns the keycode of the given string (e.g. "Escape"). */
find_keycode_from_string(): int;

/**
 * Returns the **global** cache data directory according to the operating system's standards. On the Linux/BSD platform, this path can be overridden by setting the `XDG_CACHE_HOME` environment variable before starting the project. See [url=$DOCS_URL/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_config_dir] and [method get_data_dir].
 *
 * Not to be confused with [method get_user_data_dir], which returns the **project-specific** user data path.
 *
*/
get_cache_dir(): string;

/**
 * Returns the command-line arguments passed to the engine.
 *
 * Command-line arguments can be written in any form, including both `--key value` and `--key=value` forms so they can be properly parsed, as long as custom command-line arguments do not conflict with engine arguments.
 *
 * You can also incorporate environment variables using the [method get_environment] method.
 *
 * You can set [member ProjectSettings.editor/run/main_run_args] to define command-line arguments to be passed by the editor when running the project.
 *
 * Here's a minimal example on how to parse command-line arguments into a dictionary using the `--key=value` form for arguments:
 *
 * @example 
 * 
 * 
 * var arguments = {}
 * for argument in OS.get_cmdline_args():
 *     if argument.find("=") > -1:
 *         var key_value = argument.split("=")
 *         arguments[key_value[0].lstrip("--")] = key_value[1]
 *     else:
 *         # Options without an argument will be present in the dictionary,
 *         # with the value set to an empty string.
 *         arguments[argument.lstrip("--")] = ""
 * 
 * 
 * var arguments = new Godot.Collections.Dictionary();
 * foreach (var argument in OS.GetCmdlineArgs())
 * {
 *     if (argument.Find("=") > -1)
 *     {
 *         string[] keyValue = argument.Split("=");
 *         arguments[keyValue[0].LStrip("--")] = keyValue[1];
 *     }
 *     else
 *     {
 *         // Options without an argument will be present in the dictionary,
 *         // with the value set to an empty string.
 *         arguments[keyValue[0].LStrip("--")] = "";
 *     }
 * }
 * 
 * @summary 
 * 
 *
 * **Note:** Passing custom user arguments directly is not recommended, as the engine may discard or modify them. Instead, the best way is to use the standard UNIX double dash (`--`) and then pass custom arguments, which the engine itself will ignore. These can be read via [method get_cmdline_user_args].
 *
*/
get_cmdline_args(): PackedStringArray;

/**
 * Similar to [method get_cmdline_args], but this returns the user arguments (any argument passed after the double dash `--` or double plus `++` argument). These are left untouched by Godot for the user. `++` can be used in situations where `--` is intercepted by another program (such as `startx`).
 *
 * For example, in the command line below, `--fullscreen` will not be returned in [method get_cmdline_user_args] and `--level 1` will only be returned in [method get_cmdline_user_args]:
 *
 * @example 
 * 
 * godot --fullscreen -- --level 1
 * # Or:
 * godot --fullscreen ++ --level 1
 * @summary 
 * 
 *
*/
get_cmdline_user_args(): PackedStringArray;

/**
 * Returns the **global** user configuration directory according to the operating system's standards. On the Linux/BSD platform, this path can be overridden by setting the `XDG_CONFIG_HOME` environment variable before starting the project. See [url=$DOCS_URL/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_cache_dir] and [method get_data_dir].
 *
 * Not to be confused with [method get_user_data_dir], which returns the **project-specific** user data path.
 *
*/
get_config_dir(): string;

/**
 * Returns an array of MIDI device names.
 *
 * The returned array will be empty if the system MIDI driver has not previously been initialized with [method open_midi_inputs].
 *
 * **Note:** This method is implemented on Linux, macOS and Windows.
 *
*/
get_connected_midi_inputs(): PackedStringArray;

/**
 * Returns the **global** user data directory according to the operating system's standards. On the Linux/BSD platform, this path can be overridden by setting the `XDG_DATA_HOME` environment variable before starting the project. See [url=$DOCS_URL/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_cache_dir] and [method get_config_dir].
 *
 * Not to be confused with [method get_user_data_dir], which returns the **project-specific** user data path.
 *
*/
get_data_dir(): string;

/**
 * Returns the name of the distribution for Linux and BSD platforms (e.g. Ubuntu, Manjaro, OpenBSD, etc.).
 *
 * Returns the same value as [method get_name] for stock Android ROMs, but attempts to return the custom ROM name for popular Android derivatives such as LineageOS.
 *
 * Returns the same value as [method get_name] for other platforms.
 *
 * **Note:** This method is not supported on the web platform. It returns an empty string.
 *
*/
get_distribution_name(): string;

/**
 * Returns the value of an environment variable. Returns an empty string if the environment variable doesn't exist.
 *
 * **Note:** Double-check the casing of [param variable]. Environment variable names are case-sensitive on all platforms except Windows.
 *
*/
get_environment(): string;

/**
 * Returns the path to the current engine executable.
 *
 * **Note:** On macOS, always use [method create_instance] instead of relying on executable path.
 *
*/
get_executable_path(): string;

/**
 * On Android devices: With this function, you can get the list of dangerous permissions that have been granted.
 *
 * On macOS (sandboxed applications only): This function returns the list of user selected folders accessible to the application. Use native file dialog to request folder access permission.
 *
*/
get_granted_permissions(): PackedStringArray;

/**
 * Returns the given keycode as a string (e.g. Return values: `"Escape"`, `"Shift+Escape"`).
 *
 * See also [member InputEventKey.keycode] and [method InputEventKey.get_keycode_with_modifiers].
 *
*/
get_keycode_string(): string;

/**
 * Returns the host OS locale as a string of the form `language_Script_COUNTRY_VARIANT@extra`. If you want only the language code and not the fully specified locale from the OS, you can use [method get_locale_language].
 *
 * `language` - 2 or 3-letter [url=https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes]language code[/url], in lower case.
 *
 * [code skip-lint]Script` - optional, 4-letter [url=https://en.wikipedia.org/wiki/ISO_15924]script code[/url], in title case.
 *
 * `COUNTRY` - optional, 2 or 3-letter [url=https://en.wikipedia.org/wiki/ISO_3166-1]country code[/url], in upper case.
 *
 * `VARIANT` - optional, language variant, region and sort order. Variant can have any number of underscored keywords.
 *
 * `extra` - optional, semicolon separated list of additional key words. Currency, calendar, sort order and numbering system information.
 *
*/
get_locale(): string;

/**
 * Returns the host OS locale's 2 or 3-letter [url=https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes]language code[/url] as a string which should be consistent on all platforms. This is equivalent to extracting the `language` part of the [method get_locale] string.
 *
 * This can be used to narrow down fully specified locale strings to only the "common" language code, when you don't need the additional information about country code or variants. For example, for a French Canadian user with `fr_CA` locale, this would return `fr`.
 *
*/
get_locale_language(): string;

/**
 * Returns the ID of the main thread. See [method get_thread_caller_id].
 *
 * **Note:** Thread IDs are not deterministic and may be reused across application restarts.
 *
*/
get_main_thread_id(): int;

/**
 * Returns the [Dictionary] with the following keys:
 *
 * `"physical"` - total amount of usable physical memory, in bytes or `-1` if unknown. This value can be slightly less than the actual physical memory amount, since it does not include memory reserved by kernel and devices.
 *
 * `"free"` - amount of physical memory, that can be immediately allocated without disk access or other costly operation, in bytes or `-1` if unknown. The process might be able to allocate more physical memory, but such allocation will require moving inactive pages to disk and can take some time.
 *
 * `"available"` - amount of memory, that can be allocated without extending the swap file(s), in bytes or `-1` if unknown. This value include both physical memory and swap.
 *
 * `"stack"` - size of the current thread stack, in bytes or `-1` if unknown.
 *
*/
get_memory_info(): Dictionary<any, any>;

/**
 * Returns the model name of the current device.
 *
 * **Note:** This method is implemented on Android and iOS. Returns `"GenericDevice"` on unsupported platforms.
 *
*/
get_model_name(): string;

/**
 * Returns the name of the host OS.
 *
 * On Windows, this is `"Windows"`.
 *
 * On macOS, this is `"macOS"`.
 *
 * On Linux-based operating systems, this is `"Linux"`.
 *
 * On BSD-based operating systems, this is `"FreeBSD"`, `"NetBSD"`, `"OpenBSD"`, or `"BSD"` as a fallback.
 *
 * On Android, this is `"Android"`.
 *
 * On iOS, this is `"iOS"`.
 *
 * On the web, this is `"Web"`.
 *
 * **Note:** Custom builds of the engine may support additional platforms, such as consoles, yielding other return values.
 *
 * @example 
 * 
 * 
 * match OS.get_name():
 *     "Windows":
 *         print("Windows")
 *     "macOS":
 *         print("macOS")
 *     "Linux", "FreeBSD", "NetBSD", "OpenBSD", "BSD":
 *         print("Linux/BSD")
 *     "Android":
 *         print("Android")
 *     "iOS":
 *         print("iOS")
 *     "Web":
 *         print("Web")
 * 
 * 
 * switch (OS.GetName())
 * {
 *     case "Windows":
 *         GD.Print("Windows");
 *         break;
 *     case "macOS":
 *         GD.Print("macOS");
 *         break;
 *     case "Linux":
 *     case "FreeBSD":
 *     case "NetBSD":
 *     case "OpenBSD":
 *     case "BSD":
 *         GD.Print("Linux/BSD");
 *         break;
 *     case "Android":
 *         GD.Print("Android");
 *         break;
 *     case "iOS":
 *         GD.Print("iOS");
 *         break;
 *     case "Web":
 *         GD.Print("Web");
 *         break;
 * }
 * 
 * @summary 
 * 
 *
*/
get_name(): string;

/**
 * Returns the project's process ID.
 *
 * **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.
 *
*/
get_process_id(): int;

/** Returns the number of [i]logical[/i] CPU cores available on the host machine. On CPUs with HyperThreading enabled, this number will be greater than the number of [i]physical[/i] CPU cores. */
get_processor_count(): int;

/**
 * Returns the name of the CPU model on the host machine (e.g. "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz").
 *
 * **Note:** This method is only implemented on Windows, macOS, Linux and iOS. On Android and Web, [method get_processor_name] returns an empty string.
 *
*/
get_processor_name(): string;

/** Returns the list of command line arguments that will be used when the project automatically restarts using [method set_restart_on_exit]. See also [method is_restart_on_exit_set]. */
get_restart_on_exit_arguments(): PackedStringArray;

/** Returns the maximum amount of static memory used (only works in debug). */
get_static_memory_peak_usage(): int;

/** Returns the amount of static memory being used by the program in bytes (only works in debug). */
get_static_memory_usage(): int;

/**
 * Returns the actual path to commonly used folders across different platforms. Available locations are specified in [enum SystemDir].
 *
 * **Note:** This method is implemented on Android, Linux, macOS and Windows.
 *
 * **Note:** Shared storage is implemented on Android and allows to differentiate between app specific and shared directories. Shared directories have additional restrictions on Android.
 *
*/
get_system_dir(): string;

/**
 * Returns path to the system font file with [param font_name] and style. Returns empty string if no matching fonts found.
 *
 * The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".
 *
 * **Note:** Returned font might have different style if the requested style is not available.
 *
 * **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.
 *
*/
get_system_font_path(): string;

/**
 * Returns an array of the system substitute font file paths, which are similar to the font with [param font_name] and style for the specified text, locale and script. Returns empty array if no matching fonts found.
 *
 * The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".
 *
 * **Note:** Depending on OS, it's not guaranteed that any of the returned fonts will be suitable for rendering specified text. Fonts should be loaded and checked in the order they are returned, and the first suitable one used.
 *
 * **Note:** Returned fonts might have different style if the requested style is not available or belong to a different font family.
 *
 * **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.
 *
*/
get_system_font_path_for_text(): PackedStringArray;

/**
 * Returns list of font family names available.
 *
 * **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.
 *
*/
get_system_fonts(): PackedStringArray;

/**
 * Returns the ID of the current thread. This can be used in logs to ease debugging of multi-threaded applications.
 *
 * **Note:** Thread IDs are not deterministic and may be reused across application restarts.
 *
*/
get_thread_caller_id(): int;

/**
 * Returns a string that is unique to the device.
 *
 * **Note:** This string may change without notice if the user reinstalls/upgrades their operating system or changes their hardware. This means it should generally not be used to encrypt persistent data as the data saved before an unexpected ID change would become inaccessible. The returned string may also be falsified using external programs, so do not rely on the string returned by [method get_unique_id] for security purposes.
 *
 * **Note:** Returns an empty string and prints an error on Web, as this method cannot be implemented on this platform.
 *
*/
get_unique_id(): string;

/**
 * Returns the absolute directory path where user data is written (`user://`).
 *
 * On Windows, this is `%AppData%\Godot\app_userdata\[project_name]`, or `%AppData%\[custom_name]` if `use_custom_user_dir` is set. `%AppData%` expands to `%UserProfile%\AppData\Roaming`.
 *
 * On macOS, this is `~/Library/Application Support/Godot/app_userdata/[project_name]`, or `~/Library/Application Support/[custom_name]` if `use_custom_user_dir` is set.
 *
 * On Linux and BSD, this is `~/.local/share/godot/app_userdata/[project_name]`, or `~/.local/share/[custom_name]` if `use_custom_user_dir` is set.
 *
 * On Android and iOS, this is a sandboxed directory in either internal or external storage, depending on the user's configuration.
 *
 * On the web, this is a virtual directory managed by the browser.
 *
 * If the project name is empty, `[project_name]` falls back to `[unnamed project]`.
 *
 * Not to be confused with [method get_data_dir], which returns the **global** (non-project-specific) user home directory.
 *
*/
get_user_data_dir(): string;

/**
 * Returns the exact production and build version of the operating system. This is different from the branded version used in marketing. This helps to distinguish between different releases of operating systems, including minor versions, and insider and custom builds.
 *
 * For Windows, the major and minor version are returned, as well as the build number. For example, the returned string can look like `10.0.9926` for a build of Windows 10, and it can look like `6.1.7601` for a build of Windows 7 SP1.
 *
 * For rolling distributions, such as Arch Linux, an empty string is returned.
 *
 * For macOS and iOS, the major and minor version are returned, as well as the patch number.
 *
 * For Android, the SDK version and the incremental build number are returned. If it's a custom ROM, it attempts to return its version instead.
 *
 * **Note:** This method is not supported on the web platform. It returns an empty string.
 *
*/
get_version(): string;

/**
 * Returns the video adapter driver name and version for the user's currently active graphics card. See also [method RenderingServer.get_video_adapter_api_version].
 *
 * The first element holds the driver name, such as `nvidia`, `amdgpu`, etc.
 *
 * The second element holds the driver version. For e.g. the `nvidia` driver on a Linux/BSD platform, the version is in the format `510.85.02`. For Windows, the driver's format is `31.0.15.1659`.
 *
 * **Note:** This method is only supported on the platforms Linux/BSD and Windows when not running in headless mode. It returns an empty array on other platforms.
 *
*/
get_video_adapter_driver_info(): PackedStringArray;

/**
 * Returns `true` if the environment variable with the name [param variable] exists.
 *
 * **Note:** Double-check the casing of [param variable]. Environment variable names are case-sensitive on all platforms except Windows.
 *
*/
has_environment(): boolean;

/**
 * Returns `true` if the feature for the given feature tag is supported in the currently running instance, depending on the platform, build, etc. Can be used to check whether you're currently running a debug build, on a certain platform or arch, etc. Refer to the [url=$DOCS_URL/tutorials/export/feature_tags.html]Feature Tags[/url] documentation for more details.
 *
 * **Note:** Tag names are case-sensitive.
 *
 * **Note:** On the web platform, one of the following additional tags is defined to indicate host platform: `web_android`, `web_ios`, `web_linuxbsd`, `web_macos`, or `web_windows`.
 *
 * **Note:** On the iOS simulator, the additional `simulator` tag is defined.
 *
*/
has_feature(): boolean;

/**
 * Returns `true` if the Godot binary used to run the project is a **debug** export template, or when running in the editor.
 *
 * Returns `false` if the Godot binary used to run the project is a **release** export template.
 *
 * To check whether the Godot binary used to run the project is an export template (debug or release), use `OS.has_feature("template")` instead.
 *
*/
is_debug_build(): boolean;

/** Returns [code]true[/code] if the input keycode corresponds to a Unicode character. */
is_keycode_unicode(): boolean;

/**
 * Returns `true` if the child process ID ([param pid]) is still running or `false` if it has terminated.
 *
 * Must be a valid ID generated from [method create_process].
 *
 * **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.
 *
*/
is_process_running(): boolean;

/** Returns [code]true[/code] if the project will automatically restart when it exits for any reason, [code]false[/code] otherwise. See also [method set_restart_on_exit] and [method get_restart_on_exit_arguments]. */
is_restart_on_exit_set(): boolean;

/**
 * Returns `true` if application is running in the sandbox.
 *
 * **Note:** This method is implemented on macOS and Linux.
 *
*/
is_sandboxed(): boolean;

/** Returns [code]true[/code] if the engine was executed with the [code]--verbose[/code] or [code]-v[/code] command line argument, or if [member ProjectSettings.debug/settings/stdout/verbose_stdout] is [code]true[/code]. See also [method @GlobalScope.print_verbose]. */
is_stdout_verbose(): boolean;

/** If [code]true[/code], the [code]user://[/code] file system is persistent, so that its state is the same after a player quits and starts the game again. Relevant to the Web platform, where this persistence may be unavailable. */
is_userfs_persistent(): boolean;

/**
 * Kill (terminate) the process identified by the given process ID ([param pid]), e.g. the one returned by [method execute] in non-blocking mode. See also [method crash].
 *
 * **Note:** This method can also be used to kill processes that were not spawned by the game.
 *
 * **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.
 *
*/
kill(): int;

/**
 * Moves the file or directory to the system's recycle bin. See also [method DirAccess.remove].
 *
 * The method takes only global paths, so you may need to use [method ProjectSettings.globalize_path]. Do not use it for files in `res://` as it will not work in exported projects.
 *
 * **Note:** If the user has disabled the recycle bin on their system, the file will be permanently deleted instead.
 *
 * @example 
 * 
 * 
 * var file_to_remove = "user://slot1.save"
 * OS.move_to_trash(ProjectSettings.globalize_path(file_to_remove))
 * 
 * 
 * var fileToRemove = "user://slot1.save";
 * OS.MoveToTrash(ProjectSettings.GlobalizePath(fileToRemove));
 * 
 * @summary 
 * 
 *
*/
move_to_trash(): int;

/**
 * Initializes the singleton for the system MIDI driver.
 *
 * **Note:** This method is implemented on Linux, macOS and Windows.
 *
*/
open_midi_inputs(): void;

/**
 * Reads a user input string from the standard input (usually the terminal). This operation is **blocking**, which causes the window to freeze if [method read_string_from_stdin] is called on the main thread. The thread calling [method read_string_from_stdin] will block until the program receives a line break in standard input (usually by the user pressing [kbd]Enter[/kbd]).
 *
 * **Note:** This method is implemented on Linux, macOS and Windows.
 *
*/
read_string_from_stdin(): string;

/** At the moment this function is only used by [code]AudioDriverOpenSL[/code] to request permission for [code]RECORD_AUDIO[/code] on Android. */
request_permission(): boolean;

/**
 * With this function, you can request dangerous permissions since normal permissions are automatically granted at install time in Android applications.
 *
 * **Note:** This method is implemented only on Android.
 *
*/
request_permissions(): boolean;

/** On macOS (sandboxed applications only), this function clears list of user selected folders accessible to the application. */
revoke_granted_permissions(): void;

/**
 * Sets the value of the environment variable [param variable] to [param value]. The environment variable will be set for the Godot process and any process executed with [method execute] after running [method set_environment]. The environment variable will **not** persist to processes run after the Godot process was terminated.
 *
 * **Note:** Environment variable names are case-sensitive on all platforms except Windows. The [param variable] name cannot be empty or include the `=` character. On Windows, there is a 32767 characters limit for the combined length of [param variable], [param value], and the `=` and null terminator characters that will be registered in the environment block.
 *
*/
set_environment(): void;

/**
 * If [param restart] is `true`, restarts the project automatically when it is exited with [method SceneTree.quit] or [constant Node.NOTIFICATION_WM_CLOSE_REQUEST]. Command line [param arguments] can be supplied. To restart the project with the same command line arguments as originally used to run the project, pass [method get_cmdline_args] as the value for [param arguments].
 *
 * [method set_restart_on_exit] can be used to apply setting changes that require a restart. See also [method is_restart_on_exit_set] and [method get_restart_on_exit_arguments].
 *
 * **Note:** This method is only effective on desktop platforms, and only when the project isn't started from the editor. It will have no effect on mobile and Web platforms, or when the project is started from the editor.
 *
 * **Note:** If the project process crashes or is **killed** by the user (by sending `SIGKILL` instead of the usual `SIGTERM`), the project won't restart automatically.
 *
*/
set_restart_on_exit(): void;

/** Sets the name of the current thread. */
set_thread_name(): int;

/** Enables backup saves if [param enabled] is [code]true[/code]. */
set_use_file_access_save_and_swap(): void;

/**
 * Requests the OS to open a resource with the most appropriate program. For example:
 *
 * - `OS.shell_open("C:\\Users\name\Downloads")` on Windows opens the file explorer at the user's Downloads folder.
 *
 * - `OS.shell_open("https://godotengine.org")` opens the default web browser on the official Godot website.
 *
 * - `OS.shell_open("mailto:example@example.com")` opens the default email client with the "To" field set to `example@example.com`. See [url=https://datatracker.ietf.org/doc/html/rfc2368]RFC 2368 - The `mailto` URL scheme[/url] for a list of fields that can be added.
 *
 * Use [method ProjectSettings.globalize_path] to convert a `res://` or `user://` path into a system path for use with this method.
 *
 * **Note:** Use [method String.uri_encode] to encode characters within URLs in a URL-safe, portable way. This is especially required for line breaks. Otherwise, [method shell_open] may not work correctly in a project exported to the Web platform.
 *
 * **Note:** This method is implemented on Android, iOS, Web, Linux, macOS and Windows.
 *
*/
shell_open(): int;

/**
 * Requests the OS to open the file manager, then navigate to the given [param file_or_dir_path] and select the target file or folder.
 *
 * If [param file_or_dir_path] is a valid directory path, and [param open_folder] is `true`, the method will open the file manager and enter the target folder without selecting anything.
 *
 * Use [method ProjectSettings.globalize_path] to convert a `res://` or `user://` path into a system path for use with this method.
 *
 * **Note:** Currently this method is only implemented on Windows and macOS. On other platforms, it will fallback to [method shell_open] with a directory path of [param file_or_dir_path] with prefix `file://`.
 *
*/
shell_show_in_file_manager(): int;

/**
 * Removes the environment [param variable] from the current environment, if it exists. The environment variable will be removed for the Godot process and any process executed with [method execute] after running [method unset_environment]. The removal of the environment variable will **not** persist to processes run after the Godot process was terminated.
 *
 * **Note:** Environment variable names are case-sensitive on all platforms except Windows. The [param variable] name cannot be empty or include the `=` character.
 *
*/
unset_environment(): void;

  connect<T extends SignalsOf<OSClass>>(signal: T, method: SignalFunction<OSClass[T]>): number;



/**
 * The Vulkan rendering driver. It requires Vulkan 1.0 support and automatically uses features from Vulkan 1.1 and 1.2 if available.
 *
*/
static RENDERING_DRIVER_VULKAN: any;

/**
 * The OpenGL 3 rendering driver. It uses OpenGL 3.3 Core Profile on desktop platforms, OpenGL ES 3.0 on mobile devices, and WebGL 2.0 on Web.
 *
*/
static RENDERING_DRIVER_OPENGL3: any;

/**
 * Desktop directory path.
 *
*/
static SYSTEM_DIR_DESKTOP: any;

/**
 * DCIM (Digital Camera Images) directory path.
 *
*/
static SYSTEM_DIR_DCIM: any;

/**
 * Documents directory path.
 *
*/
static SYSTEM_DIR_DOCUMENTS: any;

/**
 * Downloads directory path.
 *
*/
static SYSTEM_DIR_DOWNLOADS: any;

/**
 * Movies directory path.
 *
*/
static SYSTEM_DIR_MOVIES: any;

/**
 * Music directory path.
 *
*/
static SYSTEM_DIR_MUSIC: any;

/**
 * Pictures directory path.
 *
*/
static SYSTEM_DIR_PICTURES: any;

/**
 * Ringtones directory path.
 *
*/
static SYSTEM_DIR_RINGTONES: any;



}

