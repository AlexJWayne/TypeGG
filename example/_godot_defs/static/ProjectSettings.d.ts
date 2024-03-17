
/**
 * Stores variables that can be accessed from everywhere. Use [method get_setting], [method set_setting] or [method has_setting] to access them. Variables stored in `project.godot` are also loaded into [ProjectSettings], making this object very useful for reading custom game configuration options.
 *
 * When naming a Project Settings property, use the full path to the setting including the category. For example, `"application/config/name"` for the project name. Category and property names can be viewed in the Project Settings dialog.
 *
 * **Feature tags:** Project settings can be overridden for specific platforms and configurations (debug, release, ...) using [url=$DOCS_URL/tutorials/export/feature_tags.html]feature tags[/url].
 *
 * **Overriding:** Any project setting can be overridden by creating a file named `override.cfg` in the project's root directory. This can also be used in exported projects by placing this file in the same directory as the project binary. Overriding will still take the base project settings' [url=$DOCS_URL/tutorials/export/feature_tags.html]feature tags[/url] in account. Therefore, make sure to **also** override the setting with the desired feature tags if you want them to override base project settings on all platforms and configurations.
 *
*/
declare class ProjectSettingsClass extends Object  {

  
/**
 * Stores variables that can be accessed from everywhere. Use [method get_setting], [method set_setting] or [method has_setting] to access them. Variables stored in `project.godot` are also loaded into [ProjectSettings], making this object very useful for reading custom game configuration options.
 *
 * When naming a Project Settings property, use the full path to the setting including the category. For example, `"application/config/name"` for the project name. Category and property names can be viewed in the Project Settings dialog.
 *
 * **Feature tags:** Project settings can be overridden for specific platforms and configurations (debug, release, ...) using [url=$DOCS_URL/tutorials/export/feature_tags.html]feature tags[/url].
 *
 * **Overriding:** Any project setting can be overridden by creating a file named `override.cfg` in the project's root directory. This can also be used in exported projects by placing this file in the same directory as the project binary. Overriding will still take the base project settings' [url=$DOCS_URL/tutorials/export/feature_tags.html]feature tags[/url] in account. Therefore, make sure to **also** override the setting with the desired feature tags if you want them to override base project settings on all platforms and configurations.
 *
*/
  new(): ProjectSettingsClass; 
  static "new"(): ProjectSettingsClass 


/** Background color for the boot splash. */
"application/boot_splash/bg_color": Color;

/** If [code]true[/code], scale the boot splash image to the full window size (preserving the aspect ratio) when the engine starts. If [code]false[/code], the engine will leave it at the default pixel size. */
"application/boot_splash/fullsize": boolean;

/**
 * Path to an image used as the boot splash. If left empty, the default Godot Engine splash will be displayed instead.
 *
 * **Note:** Only effective if [member application/boot_splash/show_image] is `true`.
 *
 * **Note:** The only supported format is PNG. Using another image format will result in an error.
 *
*/
"application/boot_splash/image": string;

/** Minimum boot splash display time (in milliseconds). It is not recommended to set too high values for this setting. */
"application/boot_splash/minimum_display_time": int;

/** If [code]true[/code], displays the image specified in [member application/boot_splash/image] when the engine starts. If [code]false[/code], only displays the plain color specified in [member application/boot_splash/bg_color]. */
"application/boot_splash/show_image": boolean;

/** If [code]true[/code], applies linear filtering when scaling the image (recommended for high-resolution artwork). If [code]false[/code], uses nearest-neighbor interpolation (recommended for pixel art). */
"application/boot_splash/use_filter": boolean;

/** If [code]true[/code], the application automatically accepts quitting requests. */
"application/config/auto_accept_quit": boolean;

/**
 * This user directory is used for storing persistent data (`user://` filesystem). If a custom directory name is defined, this name will be appended to the system-specific user data directory (same parent folder as the Godot configuration folder documented in [method OS.get_user_data_dir]).
 *
 * The [member application/config/use_custom_user_dir] setting must be enabled for this to take effect.
 *
*/
"application/config/custom_user_dir_name": string;

/** The project's description, displayed as a tooltip in the Project Manager when hovering the project. */
"application/config/description": string;

/** Icon used for the project, set when project loads. Exporters will also use this icon as a fallback if necessary. */
"application/config/icon": string;

/** Icon set in [code].icns[/code] format used on macOS to set the game's icon. This is done automatically on start by calling [method DisplayServer.set_native_icon]. */
"application/config/macos_native_icon": string;

/**
 * The project's name. It is used both by the Project Manager and by exporters. The project name can be translated by translating its value in localization files. The window title will be set to match the project name automatically on startup.
 *
 * **Note:** Changing this value will also change the user data folder's path if [member application/config/use_custom_user_dir] is `false`. After renaming the project, you will no longer be able to access existing data in `user://` unless you rename the old folder to match the new project name. See [url=$DOCS_URL/tutorials/io/data_paths.html]Data paths[/url] in the documentation for more information.
 *
*/
"application/config/name": string;

/** Translations of the project's name. This setting is used by OS tools to translate application name on Android, iOS and macOS. */
"application/config/name_localized": Dictionary<any, any>;

/**
 * Specifies a file to override project settings. For example: `user://custom_settings.cfg`. See "Overriding" in the [ProjectSettings] class description at the top for more information.
 *
 * **Note:** Regardless of this setting's value, `res://override.cfg` will still be read to override the project settings.
 *
*/
"application/config/project_settings_override": string;

/** If [code]true[/code], the application quits automatically when navigating back (e.g. using the system "Back" button on Android). */
"application/config/quit_on_go_back": boolean;

/**
 * If `true`, the project will save user data to its own user directory. If [member application/config/custom_user_dir_name] is empty, `<OS user data directory>/<project name>` directory will be used. If `false`, the project will save user data to `<OS user data directory>/Godot/app_userdata/<project name>`.
 *
 * See also [url=$DOCS_URL/tutorials/io/data_paths.html#accessing-persistent-user-data-user]File paths in Godot projects[/url]. This setting is only effective on desktop platforms.
 *
*/
"application/config/use_custom_user_dir": boolean;

/**
 * If `true`, the project will use a hidden directory (`.godot`) for storing project-specific data (metadata, shader cache, etc.).
 *
 * If `false`, a non-hidden directory (`godot`) will be used instead.
 *
 * **Note:** Restart the application after changing this setting.
 *
 * **Note:** Changing this value can help on platforms or with third-party tools where hidden directory patterns are disallowed. Only modify this setting if you know that your environment requires it, as changing the default can impact compatibility with some external tools or plugins which expect the default `.godot` folder.
 *
*/
"application/config/use_hidden_project_data_directory": boolean;

/** The project's human-readable version identifier. This is used by exporters if the version identifier isn't overridden there. If [member application/config/version] is an empty string and the version identifier isn't overridden in an exporter, the exporter will use [code]1.0.0[/code] as a version identifier. */
"application/config/version": string;

/** Icon set in [code].ico[/code] format used on Windows to set the game's icon. This is done automatically on start by calling [method DisplayServer.set_native_icon]. */
"application/config/windows_native_icon": string;

/**
 * Time samples for frame deltas are subject to random variation introduced by the platform, even when frames are displayed at regular intervals thanks to V-Sync. This can lead to jitter. Delta smoothing can often give a better result by filtering the input deltas to correct for minor fluctuations from the refresh rate.
 *
 * **Note:** Delta smoothing is only attempted when [member display/window/vsync/vsync_mode] is set to `enabled`, as it does not work well without V-Sync.
 *
 * It may take several seconds at a stable frame rate before the smoothing is initially activated. It will only be active on machines where performance is adequate to render frames at the refresh rate.
 *
*/
"application/run/delta_smoothing": boolean;

/**
 * If `true`, disables printing to standard error. If `true`, this also hides error and warning messages printed by [method @GlobalScope.push_error] and [method @GlobalScope.push_warning]. See also [member application/run/disable_stdout].
 *
 * Changes to this setting will only be applied upon restarting the application.
 *
*/
"application/run/disable_stderr": boolean;

/**
 * If `true`, disables printing to standard output. This is equivalent to starting the editor or project with the `--quiet` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url]. See also [member application/run/disable_stderr].
 *
 * Changes to this setting will only be applied upon restarting the application.
 *
*/
"application/run/disable_stdout": boolean;

/**
 * If `true`, flushes the standard output stream every time a line is printed. This affects both terminal logging and file logging.
 *
 * When running a project, this setting must be enabled if you want logs to be collected by service managers such as systemd/journalctl. This setting is disabled by default on release builds, since flushing on every printed line will negatively affect performance if lots of lines are printed in a rapid succession. Also, if this setting is enabled, logged files will still be written successfully if the application crashes or is otherwise killed by the user (without being closed "normally").
 *
 * **Note:** Regardless of this setting, the standard error stream (`stderr`) is always flushed when a line is printed to it.
 *
 * Changes to this setting will only be applied upon restarting the application.
 *
*/
"application/run/flush_stdout_on_print": boolean;

/**
 * Debug build override for [member application/run/flush_stdout_on_print], as performance is less important during debugging.
 *
 * Changes to this setting will only be applied upon restarting the application.
 *
*/
"application/run/flush_stdout_on_print_debug": boolean;

/**
 * Forces a **constant** delay between frames in the main loop (in milliseconds). In most situations, [member application/run/max_fps] should be preferred as an FPS limiter as it's more precise.
 *
 * This setting can be overridden using the `--frame-delay <ms;>` command line argument.
 *
*/
"application/run/frame_delay_msec": int;

/** If [code]true[/code], enables low-processor usage mode. This setting only works on desktop platforms. The screen is not redrawn if nothing changes visually. This is meant for writing applications and editors, but is pretty useless (and can hurt performance) in most games. */
"application/run/low_processor_mode": boolean;

/** Amount of sleeping between frames when the low-processor usage mode is enabled (in microseconds). Higher values will result in lower CPU usage. */
"application/run/low_processor_mode_sleep_usec": int;

/** The name of the type implementing the engine's main loop. */
"application/run/main_loop_type": string;

/** Path to the main scene file that will be loaded when the project runs. */
"application/run/main_scene": string;

/**
 * Maximum number of frames per second allowed. A value of `0` means "no limit". The actual number of frames per second may still be below this value if the CPU or GPU cannot keep up with the project logic and rendering.
 *
 * Limiting the FPS can be useful to reduce system power consumption, which reduces heat and noise emissions (and improves battery life on mobile devices).
 *
 * If [member display/window/vsync/vsync_mode] is set to `Enabled` or `Adaptive`, it takes precedence and the forced FPS number cannot exceed the monitor's refresh rate.
 *
 * If [member display/window/vsync/vsync_mode] is `Enabled`, on monitors with variable refresh rate enabled (G-Sync/FreeSync), using a FPS limit a few frames lower than the monitor's refresh rate will [url=https://blurbusters.com/howto-low-lag-vsync-on/]reduce input lag while avoiding tearing[/url].
 *
 * If [member display/window/vsync/vsync_mode] is `Disabled`, limiting the FPS to a high value that can be consistently reached on the system can reduce input lag compared to an uncapped framerate. Since this works by ensuring the GPU load is lower than 100%, this latency reduction is only effective in GPU-bottlenecked scenarios, not CPU-bottlenecked scenarios.
 *
 * See also [member physics/common/physics_ticks_per_second].
 *
 * This setting can be overridden using the `--max-fps <fps>` command line argument (including with a value of `0` for unlimited framerate).
 *
 * **Note:** This property is only read when the project starts. To change the rendering FPS cap at runtime, set [member Engine.max_fps] instead.
 *
*/
"application/run/max_fps": int;

/** Audio buses will disable automatically when sound goes below a given dB threshold for a given time. This saves CPU as effects assigned to that bus will no longer do any processing. */
"audio/buses/channel_disable_threshold_db": float;

/** Audio buses will disable automatically when sound goes below a given dB threshold for a given time. This saves CPU as effects assigned to that bus will no longer do any processing. */
"audio/buses/channel_disable_time": float;

/** Default [AudioBusLayout] resource file to use in the project, unless overridden by the scene. */
"audio/buses/default_bus_layout": string;

/**
 * Specifies the audio driver to use. This setting is platform-dependent as each platform supports different audio drivers. If left empty, the default audio driver will be used.
 *
 * The `Dummy` audio driver disables all audio playback and recording, which is useful for non-game applications as it reduces CPU usage. It also prevents the engine from appearing as an application playing audio in the OS' audio mixer.
 *
 * **Note:** The driver in use can be overridden at runtime via the `--audio-driver` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url].
 *
*/
"audio/driver/driver": string;

/**
 * If `true`, microphone input will be allowed. This requires appropriate permissions to be set when exporting to Android or iOS.
 *
 * **Note:** If the operating system blocks access to audio input devices (due to the user's privacy settings), audio capture will only return silence. On Windows 10 and later, make sure that apps are allowed to access the microphone in the OS' privacy settings.
 *
*/
"audio/driver/enable_input": boolean;

/** The mixing rate used for audio (in Hz). In general, it's better to not touch this and leave it to the host operating system. */
"audio/driver/mix_rate": int;

/** Safer override for [member audio/driver/mix_rate] in the Web platform. Here [code]0[/code] means "let the browser choose" (since some browsers do not like forcing the mix rate). */
"audio/driver/mix_rate_web": int;

/**
 * Specifies the preferred output latency in milliseconds for audio. Lower values will result in lower audio latency at the cost of increased CPU usage. Low values may result in audible cracking on slower hardware.
 *
 * Audio output latency may be constrained by the host operating system and audio hardware drivers. If the host can not provide the specified audio output latency then Godot will attempt to use the nearest latency allowed by the host. As such you should always use [method AudioServer.get_output_latency] to determine the actual audio output latency.
 *
 * Audio output latency can be overridden using the `--audio-output-latency <ms>` command line argument.
 *
 * **Note:** This setting is ignored on Android, and on all versions of Windows prior to Windows 10.
 *
*/
"audio/driver/output_latency": int;

/** Safer override for [member audio/driver/output_latency] in the Web platform, to avoid audio issues especially on mobile devices. */
"audio/driver/output_latency_web": int;

/**
 * The base strength of the panning effect for all [AudioStreamPlayer2D] nodes. The panning strength can be further scaled on each Node using [member AudioStreamPlayer2D.panning_strength]. A value of `0.0` disables stereo panning entirely, leaving only volume attenuation in place. A value of `1.0` completely mutes one of the channels if the sound is located exactly to the left (or right) of the listener.
 *
 * The default value of `0.5` is tuned for headphones. When using speakers, you may find lower values to sound better as speakers have a lower stereo separation compared to headphones.
 *
*/
"audio/general/2d_panning_strength": float;

/**
 * The base strength of the panning effect for all [AudioStreamPlayer3D] nodes. The panning strength can be further scaled on each Node using [member AudioStreamPlayer3D.panning_strength]. A value of `0.0` disables stereo panning entirely, leaving only volume attenuation in place. A value of `1.0` completely mutes one of the channels if the sound is located exactly to the left (or right) of the listener.
 *
 * The default value of `0.5` is tuned for headphones. When using speakers, you may find lower values to sound better as speakers have a lower stereo separation compared to headphones.
 *
*/
"audio/general/3d_panning_strength": float;

/**
 * Sets the [url=https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions/1616611-mixwithothers]mixWithOthers[/url] option for the AVAudioSession on iOS. This will override the mix behavior, if the category is set to `Play and Record`, `Playback`, or `Multi Route`.
 *
 * `Ambient` always has this set per default.
 *
*/
"audio/general/ios/mix_with_others": boolean;

/** Sets the [url=https://developer.apple.com/documentation/avfaudio/avaudiosessioncategory]AVAudioSessionCategory[/url] on iOS. Use the [code]Playback[/code] category to get sound output, even if the phone is in silent mode. */
"audio/general/ios/session_category": int;

/**
 * If `true`, text-to-speech support is enabled, see [method DisplayServer.tts_get_voices] and [method DisplayServer.tts_speak].
 *
 * **Note:** Enabling TTS can cause addition idle CPU usage and interfere with the sleep mode, so consider disabling it if TTS is not used.
 *
*/
"audio/general/text_to_speech": boolean;

/** Setting to hardcode audio delay when playing video. Best to leave this untouched unless you know what you are doing. */
"audio/video/video_delay_compensation_ms": int;

/** If [code]true[/code], ambient lights will be imported from COLLADA models as [DirectionalLight3D]. If [code]false[/code], ambient lights will be ignored. */
"collada/use_ambient": boolean;

/** The default compression level for gzip. Affects compressed scenes and resources. Higher levels result in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression level. [code]-1[/code] uses the default gzip compression level, which is identical to [code]6[/code] but could change in the future due to underlying zlib updates. */
"compression/formats/gzip/compression_level": int;

/** The default compression level for Zlib. Affects compressed scenes and resources. Higher levels result in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression level. [code]-1[/code] uses the default gzip compression level, which is identical to [code]6[/code] but could change in the future due to underlying zlib updates. */
"compression/formats/zlib/compression_level": int;

/** The default compression level for Zstandard. Affects compressed scenes and resources. Higher levels result in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression level. */
"compression/formats/zstd/compression_level": int;

/** Enables [url=https://github.com/facebook/zstd/releases/tag/v1.3.2]long-distance matching[/url] in Zstandard. */
"compression/formats/zstd/long_distance_matching": boolean;

/** Largest size limit (in power of 2) allowed when compressing using long-distance matching with Zstandard. Higher values can result in better compression, but will require more memory when compressing and decompressing. */
"compression/formats/zstd/window_log_size": int;

/** If canvas item redraw debugging is active, this color will be flashed on canvas items when they redraw. */
"debug/canvas_items/debug_redraw_color": Color;

/** If canvas item redraw debugging is active, this will be the time the flash will last each time they redraw. */
"debug/canvas_items/debug_redraw_time": float;

/** If [code]true[/code], logs all output to files. */
"debug/file_logging/enable_file_logging": boolean;

/** Desktop override for [member debug/file_logging/enable_file_logging], as log files are not readily accessible on mobile/Web platforms. */
"debug/file_logging/enable_file_logging_pc": boolean;

/** Path at which to store log files for the project. Using a path under [code]user://[/code] is recommended. */
"debug/file_logging/log_path": string;

/** Specifies the maximum number of log files allowed (used for rotation). */
"debug/file_logging/max_log_files": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when an [code]assert[/code] call always evaluates to false. */
"debug/gdscript/warnings/assert_always_false": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when an [code]assert[/code] call always evaluates to true. */
"debug/gdscript/warnings/assert_always_true": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when an identifier contains characters that can be confused with something else, like when mixing different alphabets. */
"debug/gdscript/warnings/confusable_identifier": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when an identifier declared in the nested block has the same name as an identifier declared below in the parent block. */
"debug/gdscript/warnings/confusable_local_declaration": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when an identifier that will be shadowed below in the block is used. */
"debug/gdscript/warnings/confusable_local_usage": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a constant is used as a function. */
"debug/gdscript/warnings/constant_used_as_function": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when deprecated keywords are used. */
"debug/gdscript/warnings/deprecated_keyword": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when an empty file is parsed. */
"debug/gdscript/warnings/empty_file": int;

/** If [code]true[/code], enables specific GDScript warnings (see [code]debug/gdscript/warnings/*[/code] settings). If [code]false[/code], disables all GDScript warnings. */
"debug/gdscript/warnings/enable": boolean;

/** If [code]true[/code], scripts in the [code]res://addons[/code] folder will not generate warnings. */
"debug/gdscript/warnings/exclude_addons": boolean;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when using a function as if it is a property. */
"debug/gdscript/warnings/function_used_as_property": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when [method Node.get_node] (or the shorthand [code]$[/code]) is used as default value of a class variable without the [code]@onready[/code] annotation. */
"debug/gdscript/warnings/get_node_default_without_onready": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a ternary operator may emit values with incompatible types. */
"debug/gdscript/warnings/incompatible_ternary": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a static inferred type uses a [Variant] as initial value, which makes the static type to also be Variant. */
"debug/gdscript/warnings/inference_on_variant": int;

/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a variable, constant, or parameter has an implicitly inferred static type.
 *
 * **Note:** This warning is recommended **in addition** to [member debug/gdscript/warnings/untyped_declaration] if you want to always specify the type explicitly. Having `INFERRED_DECLARATION` warning level higher than `UNTYPED_DECLARATION` warning level makes little sense and is not recommended.
 *
*/
"debug/gdscript/warnings/inferred_declaration": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when trying to use an integer as an enum without an explicit cast. */
"debug/gdscript/warnings/int_as_enum_without_cast": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when trying to use an integer as an enum when there is no matching enum member for that numeric value. */
"debug/gdscript/warnings/int_as_enum_without_match": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when dividing an integer by another integer (the decimal part will be discarded). */
"debug/gdscript/warnings/integer_division": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when passing a floating-point value to a function that expects an integer (it will be converted and lose precision). */
"debug/gdscript/warnings/narrowing_conversion": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a method in the script overrides a native method, because it may not behave as expected. */
"debug/gdscript/warnings/native_method_override": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when the [code]@onready[/code] annotation is used together with the [code]@export[/code] annotation, since it may not behave as expected. */
"debug/gdscript/warnings/onready_with_export": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when using a property as if it is a function. */
"debug/gdscript/warnings/property_used_as_function": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a function that is not a coroutine is called with await. */
"debug/gdscript/warnings/redundant_await": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when the [code]@static_unload[/code] annotation is used in a script without any static variables. */
"debug/gdscript/warnings/redundant_static_unload": int;

/** When enabled, using a property, enum, or function that was renamed since Godot 3 will produce a hint if an error occurs. */
"debug/gdscript/warnings/renamed_in_godot_4_hint": boolean;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when calling a function without using its return value (by assigning it to a variable or using it as a function argument). Such return values are sometimes used to denote possible errors using the [enum Error] enum. */
"debug/gdscript/warnings/return_value_discarded": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when defining a local or member variable, signal, or enum that would have the same name as a built-in function or global class name, thus shadowing it. */
"debug/gdscript/warnings/shadowed_global_identifier": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when defining a local or member variable that would shadow a member variable that the class defines. */
"debug/gdscript/warnings/shadowed_variable": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when defining a local or subclass member variable that would shadow a variable that is inherited from a parent class. */
"debug/gdscript/warnings/shadowed_variable_base_class": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when calling an expression that has no effect on the surrounding code, such as writing [code]2 + 2[/code] as a statement. */
"debug/gdscript/warnings/standalone_expression": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when calling a ternary expression that has no effect on the surrounding code, such as writing [code]42 if active else 0[/code] as a statement. */
"debug/gdscript/warnings/standalone_ternary": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when calling a static method from an instance of a class instead of from the class directly. */
"debug/gdscript/warnings/static_called_on_instance": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when using a variable that wasn't previously assigned. */
"debug/gdscript/warnings/unassigned_variable": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when assigning a variable using an assignment operator like [code]+=[/code] if the variable wasn't previously assigned. */
"debug/gdscript/warnings/unassigned_variable_op_assign": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when unreachable code is detected (such as after a [code]return[/code] statement that will always be executed). */
"debug/gdscript/warnings/unreachable_code": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when an unreachable [code]match[/code] pattern is detected. */
"debug/gdscript/warnings/unreachable_pattern": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when using an expression whose type may not be compatible with the function parameter expected. */
"debug/gdscript/warnings/unsafe_call_argument": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when performing an unsafe cast. */
"debug/gdscript/warnings/unsafe_cast": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when calling a method whose presence is not guaranteed at compile-time in the class. */
"debug/gdscript/warnings/unsafe_method_access": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when accessing a property whose presence is not guaranteed at compile-time in the class. */
"debug/gdscript/warnings/unsafe_property_access": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when returning a call from a [code]void[/code] function when such call cannot be guaranteed to be also [code]void[/code]. */
"debug/gdscript/warnings/unsafe_void_return": int;

/**
 * When set to `warn` or `error`, produces a warning or an error respectively when a variable or parameter has no static type, or if a function has no static return type.
 *
 * **Note:** This warning is recommended together with [member EditorSettings.text_editor/completion/add_type_hints] to help achieve type safety.
 *
*/
"debug/gdscript/warnings/untyped_declaration": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a local constant is never used. */
"debug/gdscript/warnings/unused_local_constant": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a function parameter is never used. */
"debug/gdscript/warnings/unused_parameter": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a private member variable is never used. */
"debug/gdscript/warnings/unused_private_class_variable": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a signal is declared but never emitted. */
"debug/gdscript/warnings/unused_signal": int;

/** When set to [code]warn[/code] or [code]error[/code], produces a warning or an error respectively when a local variable is unused. */
"debug/gdscript/warnings/unused_variable": int;

/** Message to be displayed before the backtrace when the engine crashes. By default, this message is only used in exported projects due to the editor-only override applied to this setting. */
"debug/settings/crash_handler/message": string;

/** Editor-only override for [member debug/settings/crash_handler/message]. Does not affect exported projects in debug or release mode. */
"debug/settings/crash_handler/message_editor": string;

/** Maximum call stack allowed for debugging GDScript. */
"debug/settings/gdscript/max_call_stack": int;

/** Maximum number of functions per frame allowed when profiling. */
"debug/settings/profiler/max_functions": int;

/** Print frames per second to standard output every second. */
"debug/settings/stdout/print_fps": boolean;

/** Print GPU profile information to standard output every second. This includes how long each frame takes the GPU to render on average, broken down into different steps of the render pipeline, such as CanvasItems, shadows, glow, etc. */
"debug/settings/stdout/print_gpu_profile": boolean;

/** Print more information to standard output when running. It displays information such as memory leaks, which scenes and resources are being loaded, etc. This can also be enabled using the [code]--verbose[/code] or [code]-v[/code] [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url], even on an exported project. See also [method OS.is_stdout_verbose] and [method @GlobalScope.print_verbose]. */
"debug/settings/stdout/verbose_stdout": boolean;

/** When set to [code]true[/code], produces a warning when the shader exceeds certain device limits. Currently, the only device limit checked is the limit on uniform buffer size. More device limits will be added in the future. */
"debug/shader_language/warnings/device_limit_exceeded": boolean;

/** If [code]true[/code], enables specific shader warnings (see [code]debug/shader_language/warnings/*[/code] settings). If [code]false[/code], disables all shader warnings. */
"debug/shader_language/warnings/enable": boolean;

/** When set to [code]true[/code], produces a warning when two floating point numbers are compared directly with the [code]==[/code] operator or the [code]!=[/code] operator. */
"debug/shader_language/warnings/float_comparison": boolean;

/** When set to [code]true[/code], produces a warning upon encountering certain formatting errors. Currently this only checks for empty statements. More formatting errors may be added over time. */
"debug/shader_language/warnings/formatting_error": boolean;

/** When set to [code]true[/code], warnings are treated as errors. */
"debug/shader_language/warnings/treat_warnings_as_errors": boolean;

/** When set to [code]true[/code], produces a warning when a constant is never used. */
"debug/shader_language/warnings/unused_constant": boolean;

/** When set to [code]true[/code], produces a warning when a function is never used. */
"debug/shader_language/warnings/unused_function": boolean;

/** When set to [code]true[/code], produces a warning when a local variable is never used. */
"debug/shader_language/warnings/unused_local_variable": boolean;

/** When set to [code]true[/code], produces a warning when a struct is never used. */
"debug/shader_language/warnings/unused_struct": boolean;

/** When set to [code]true[/code], produces a warning when a uniform is never used. */
"debug/shader_language/warnings/unused_uniform": boolean;

/** When set to [code]true[/code], produces a warning when a varying is never used. */
"debug/shader_language/warnings/unused_varying": boolean;

/** Color of the avoidance agents radius, visible when "Visible Avoidance" is enabled in the Debug menu. */
"debug/shapes/avoidance/agents_radius_color": Color;

/** If enabled, displays avoidance agents radius when "Visible Avoidance" is enabled in the Debug menu. */
"debug/shapes/avoidance/enable_agents_radius": boolean;

/** If enabled, displays avoidance obstacles radius when "Visible Avoidance" is enabled in the Debug menu. */
"debug/shapes/avoidance/enable_obstacles_radius": boolean;

/** If enabled, displays static avoidance obstacles when "Visible Avoidance" is enabled in the Debug menu. */
"debug/shapes/avoidance/enable_obstacles_static": boolean;

/** Color of the avoidance obstacles radius, visible when "Visible Avoidance" is enabled in the Debug menu. */
"debug/shapes/avoidance/obstacles_radius_color": Color;

/** Color of the static avoidance obstacles edges when their vertices are winded in order to push agents in, visible when "Visible Avoidance" is enabled in the Debug menu. */
"debug/shapes/avoidance/obstacles_static_edge_pushin_color": Color;

/** Color of the static avoidance obstacles edges when their vertices are winded in order to push agents out, visible when "Visible Avoidance" is enabled in the Debug menu. */
"debug/shapes/avoidance/obstacles_static_edge_pushout_color": Color;

/** Color of the static avoidance obstacles faces when their vertices are winded in order to push agents in, visible when "Visible Avoidance" is enabled in the Debug menu. */
"debug/shapes/avoidance/obstacles_static_face_pushin_color": Color;

/** Color of the static avoidance obstacles faces when their vertices are winded in order to push agents out, visible when "Visible Avoidance" is enabled in the Debug menu. */
"debug/shapes/avoidance/obstacles_static_face_pushout_color": Color;

/** Color of the contact points between collision shapes, visible when "Visible Collision Shapes" is enabled in the Debug menu. */
"debug/shapes/collision/contact_color": Color;

/** Sets whether 2D physics will display collision outlines in game when "Visible Collision Shapes" is enabled in the Debug menu. */
"debug/shapes/collision/draw_2d_outlines": boolean;

/** Maximum number of contact points between collision shapes to display when "Visible Collision Shapes" is enabled in the Debug menu. */
"debug/shapes/collision/max_contacts_displayed": int;

/** Color of the collision shapes, visible when "Visible Collision Shapes" is enabled in the Debug menu. */
"debug/shapes/collision/shape_color": Color;

/** Color to display enabled navigation agent paths when an agent has debug enabled. */
"debug/shapes/navigation/agent_path_color": Color;

/** Rasterized size (pixel) used to render navigation agent path points when an agent has debug enabled. */
"debug/shapes/navigation/agent_path_point_size": float;

/** Color to display edge connections between navigation regions, visible when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/edge_connection_color": Color;

/** If enabled, displays navigation agent paths when an agent has debug enabled. */
"debug/shapes/navigation/enable_agent_paths": boolean;

/** If enabled, displays navigation agent paths through geometry when an agent has debug enabled. */
"debug/shapes/navigation/enable_agent_paths_xray": boolean;

/** If enabled, displays edge connections between navigation regions when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/enable_edge_connections": boolean;

/** If enabled, displays edge connections between navigation regions through geometry when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/enable_edge_connections_xray": boolean;

/** If enabled, displays navigation mesh polygon edges when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/enable_edge_lines": boolean;

/** If enabled, displays navigation mesh polygon edges through geometry when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/enable_edge_lines_xray": boolean;

/** If enabled, colorizes each navigation mesh polygon face with a random color when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/enable_geometry_face_random_color": boolean;

/** If enabled, displays navigation link connections when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/enable_link_connections": boolean;

/** If enabled, displays navigation link connections through geometry when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/enable_link_connections_xray": boolean;

/** Color to display enabled navigation mesh polygon edges, visible when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/geometry_edge_color": Color;

/** Color to display disabled navigation mesh polygon edges, visible when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/geometry_edge_disabled_color": Color;

/** Color to display enabled navigation mesh polygon faces, visible when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/geometry_face_color": Color;

/** Color to display disabled navigation mesh polygon faces, visible when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/geometry_face_disabled_color": Color;

/** Color to use to display navigation link connections, visible when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/link_connection_color": Color;

/** Color to use to display disabled navigation link connections, visible when "Visible Navigation" is enabled in the Debug menu. */
"debug/shapes/navigation/link_connection_disabled_color": Color;

/** Color of the curve path geometry, visible when "Visible Paths" is enabled in the Debug menu. */
"debug/shapes/paths/geometry_color": Color;

/** Line width of the curve path geometry, visible when "Visible Paths" is enabled in the Debug menu. */
"debug/shapes/paths/geometry_width": float;

/** Custom image for the mouse cursor (limited to 256×256). */
"display/mouse_cursor/custom_image": string;

/** Hotspot for the custom mouse cursor image. */
"display/mouse_cursor/custom_image_hotspot": Vector2;

/** Position offset for tooltips, relative to the mouse cursor's hotspot. */
"display/mouse_cursor/tooltip_position_offset": Vector2;

/**
 * If `true`, allows HiDPI display on Windows, macOS, Android, iOS and Web. If `false`, the platform's low-DPI fallback will be used on HiDPI displays, which causes the window to be displayed in a blurry or pixelated manner (and can cause various window management bugs). Therefore, it is recommended to make your project scale to [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] instead of disabling this setting.
 *
 * **Note:** This setting has no effect on Linux as DPI-awareness fallbacks are not supported there.
 *
*/
"display/window/dpi/allow_hidpi": boolean;

/** If [code]true[/code], keeps the screen on (even in case of inactivity), so the screensaver does not take over. Works on desktop and mobile platforms. */
"display/window/energy_saving/keep_screen_on": boolean;

/** Editor-only override for [member display/window/energy_saving/keep_screen_on]. Does not affect exported projects in debug or release mode. */
"display/window/energy_saving/keep_screen_on_editor": boolean;

/**
 * The default screen orientation to use on mobile devices. See [enum DisplayServer.ScreenOrientation] for possible values.
 *
 * **Note:** When set to a portrait orientation, this project setting does not flip the project resolution's width and height automatically. Instead, you have to set [member display/window/size/viewport_width] and [member display/window/size/viewport_height] accordingly.
 *
*/
"display/window/handheld/orientation": int;

/** If [code]true[/code], iOS devices that support high refresh rate/"ProMotion" will be allowed to render at up to 120 frames per second. */
"display/window/ios/allow_high_refresh_rate": boolean;

/** If [code]true[/code], the home indicator is hidden automatically. This only affects iOS devices without a physical home button. */
"display/window/ios/hide_home_indicator": boolean;

/** If [code]true[/code], the status bar is hidden while the app is running. */
"display/window/ios/hide_status_bar": boolean;

/**
 * If `true`, it will require two swipes to access iOS UI that uses gestures.
 *
 * **Note:** This setting has no effect on the home indicator if `hide_home_indicator` is `true`.
 *
*/
"display/window/ios/suppress_ui_gesture": boolean;

/** If [code]true[/code], allows per-pixel transparency for the window background. This affects performance, so leave it on [code]false[/code] unless you need it. See also [member display/window/size/transparent] and [member rendering/viewport/transparent_background]. */
"display/window/per_pixel_transparency/allowed": boolean;

/**
 * Forces the main window to be always on top.
 *
 * **Note:** This setting is ignored on iOS, Android, and Web.
 *
*/
"display/window/size/always_on_top": boolean;

/**
 * Forces the main window to be borderless.
 *
 * **Note:** This setting is ignored on iOS, Android, and Web.
 *
*/
"display/window/size/borderless": boolean;

/**
 * Main window content is expanded to the full size of the window. Unlike a borderless window, the frame is left intact and can be used to resize the window, and the title bar is transparent, but has minimize/maximize/close buttons.
 *
 * **Note:** This setting is implemented only on macOS.
 *
*/
"display/window/size/extend_to_title": boolean;

/** Main window initial position (in virtual desktop coordinates), this setting is used only if [member display/window/size/initial_position_type] is set to "Absolute" ([code]0[/code]). */
"display/window/size/initial_position": Vector2i;

/**
 * Main window initial position.
 *
 * `0` - "Absolute", [member display/window/size/initial_position] is used to set window position.
 *
 * `1` - "Primary Screen Center".
 *
 * `2` - "Other Screen Center", [member display/window/size/initial_screen] is used to set the screen.
 *
*/
"display/window/size/initial_position_type": int;

/** Main window initial screen, this setting is used only if [member display/window/size/initial_position_type] is set to "Other Screen Center" ([code]2[/code]). */
"display/window/size/initial_screen": int;

/** Main window mode. See [enum DisplayServer.WindowMode] for possible values and how each mode behaves. */
"display/window/size/mode": int;

/** Main window can't be focused. No-focus window will ignore all input, except mouse clicks. */
"display/window/size/no_focus": boolean;

/**
 * Allows the window to be resizable by default.
 *
 * **Note:** This setting is ignored on iOS.
 *
*/
"display/window/size/resizable": boolean;

/**
 * If `true`, enables a window manager hint that the main window background **can** be transparent. This does not make the background actually transparent. For the background to be transparent, the root viewport must also be made transparent by enabling [member rendering/viewport/transparent_background].
 *
 * **Note:** To use a transparent splash screen, set [member application/boot_splash/bg_color] to `Color(0, 0, 0, 0)`.
 *
 * **Note:** This setting has no effect if [member display/window/per_pixel_transparency/allowed] is set to `false`.
 *
*/
"display/window/size/transparent": boolean;

/** Sets the game's main viewport height. On desktop platforms, this is also the initial window height, represented by an indigo-colored rectangle in the 2D editor. Stretch mode settings also use this as a reference when using the [code]canvas_items[/code] or [code]viewport[/code] stretch modes. See also [member display/window/size/viewport_width], [member display/window/size/window_width_override] and [member display/window/size/window_height_override]. */
"display/window/size/viewport_height": int;

/** Sets the game's main viewport width. On desktop platforms, this is also the initial window width, represented by an indigo-colored rectangle in the 2D editor. Stretch mode settings also use this as a reference when using the [code]canvas_items[/code] or [code]viewport[/code] stretch modes. See also [member display/window/size/viewport_height], [member display/window/size/window_width_override] and [member display/window/size/window_height_override]. */
"display/window/size/viewport_width": int;

/**
 * On desktop platforms, overrides the game's initial window height. See also [member display/window/size/window_width_override], [member display/window/size/viewport_width] and [member display/window/size/viewport_height].
 *
 * **Note:** By default, or when set to `0`, the initial window height is the [member display/window/size/viewport_height]. This setting is ignored on iOS, Android, and Web.
 *
*/
"display/window/size/window_height_override": int;

/**
 * On desktop platforms, overrides the game's initial window width. See also [member display/window/size/window_height_override], [member display/window/size/viewport_width] and [member display/window/size/viewport_height].
 *
 * **Note:** By default, or when set to `0`, the initial window width is the [member display/window/size/viewport_width]. This setting is ignored on iOS, Android, and Web.
 *
*/
"display/window/size/window_width_override": int;


/**
 * Defines how the base size is stretched to fit the resolution of the window or screen.
 *
 * **"disabled"**: No stretching happens. One unit in the scene corresponds to one pixel on the screen. In this mode, [member display/window/stretch/aspect] has no effect. Recommended for non-game applications.
 *
 * **"canvas_items"**: The base size specified in width and height in the project settings is stretched to cover the whole screen (taking [member display/window/stretch/aspect] into account). This means that everything is rendered directly at the target resolution. 3D is unaffected, while in 2D, there is no longer a 1:1 correspondence between sprite pixels and screen pixels, which may result in scaling artifacts. Recommended for most games that don't use a pixel art esthetic, although it is possible to use this stretch mode for pixel art games too (especially in 3D).
 *
 * **"viewport"**: The size of the root [Viewport] is set precisely to the base size specified in the Project Settings' Display section. The scene is rendered to this viewport first. Finally, this viewport is scaled to fit the screen (taking [member display/window/stretch/aspect] into account). Recommended for games that use a pixel art esthetic.
 *
*/
"display/window/stretch/mode": string;

/** The scale factor multiplier to use for 2D elements. This multiplies the final scale factor determined by [member display/window/stretch/mode]. If using the [b]Disabled[/b] stretch mode, this scale factor is applied as-is. This can be adjusted to make the UI easier to read on certain displays. */
"display/window/stretch/scale": float;

/**
 * The policy to use to determine the final scale factor for 2D elements. This affects how [member display/window/stretch/scale] is applied, in addition to the automatic scale factor determined by [member display/window/stretch/mode].
 *
 * **"fractional"**: The scale factor will not be modified.
 *
 * **"integer"**: The scale factor will be floored to an integer value, which means that the screen size will always be an integer multiple of the base viewport size. This provides a crisp pixel art appearance.
 *
 * **Note:** When using integer scaling with a stretch mode, resizing the window to be smaller than the base viewport size will clip the contents. Consider preventing that by setting [member Window.min_size] to the same value as the base viewport size defined in [member display/window/size/viewport_width] and [member display/window/size/viewport_height].
 *
*/
"display/window/stretch/scale_mode": string;

/** If [code]true[/code] subwindows are embedded in the main window. */
"display/window/subwindows/embed_subwindows": boolean;

/**
 * Sets the V-Sync mode for the main game window.
 *
 * See [enum DisplayServer.VSyncMode] for possible values and how they affect the behavior of your application.
 *
 * Depending on the platform and used renderer, the engine will fall back to **Enabled** if the desired mode is not supported.
 *
 * **Note:** V-Sync modes other than **Enabled** are only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 *
 * **Note:** This property is only read when the project starts. To change the V-Sync mode at runtime, call [method DisplayServer.window_set_vsync_mode] instead.
 *
*/
"display/window/vsync/vsync_mode": int;

/** Name of the .NET assembly. This name is used as the name of the [code].csproj[/code] and [code].sln[/code] files. By default, it's set to the name of the project ([member application/config/name]) allowing to change it in the future without affecting the .NET assembly. */
"dotnet/project/assembly_name": string;

/** Number of times to attempt assembly reloading after rebuilding .NET assemblies. Effectively also the timeout in seconds to wait for unloading of script assemblies to finish. */
"dotnet/project/assembly_reload_attempts": int;

/**
 * Directory that contains the `.sln` file. By default, the `.sln` files is in the root of the project directory, next to the `project.godot` and `.csproj` files.
 *
 * Changing this value allows setting up a multi-project scenario where there are multiple `.csproj`. Keep in mind that the Godot project is considered one of the C# projects in the workspace and it's root directory should contain the `project.godot` and `.csproj` next to each other.
 *
*/
"dotnet/project/solution_directory": string;

/**
 * If `true`, text resources are converted to a binary format on export. This decreases file sizes and speeds up loading slightly.
 *
 * **Note:** If [member editor/export/convert_text_resources_to_binary] is `true`, [method @GDScript.load] will not be able to return the converted files in an exported project. Some file paths within the exported PCK will also change, such as `project.godot` becoming `project.binary`. If you rely on run-time loading of files present within the PCK, set [member editor/export/convert_text_resources_to_binary] to `false`.
 *
*/
"editor/export/convert_text_resources_to_binary": boolean;


/** If [code]true[/code] importing of resources is run on multiple threads. */
"editor/import/use_multiple_threads": boolean;

/**
 * If `true`, requests V-Sync to be disabled when writing a movie (similar to setting [member display/window/vsync/vsync_mode] to **Disabled**). This can speed up video writing if the hardware is fast enough to render, encode and save the video at a framerate higher than the monitor's refresh rate.
 *
 * **Note:** [member editor/movie_writer/disable_vsync] has no effect if the operating system or graphics driver forces V-Sync with no way for applications to disable it.
 *
*/
"editor/movie_writer/disable_vsync": boolean;

/**
 * The number of frames per second to record in the video when writing a movie. Simulation speed will adjust to always match the specified framerate, which means the engine will appear to run slower at higher [member editor/movie_writer/fps] values. Certain FPS values will require you to adjust [member editor/movie_writer/mix_rate] to prevent audio from desynchronizing over time.
 *
 * This can be specified manually on the command line using the `--fixed-fps <fps>` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url].
 *
*/
"editor/movie_writer/fps": int;

/** The audio mix rate to use in the recorded audio when writing a movie (in Hz). This can be different from [member audio/driver/mix_rate], but this value must be divisible by [member editor/movie_writer/fps] to prevent audio from desynchronizing over time. */
"editor/movie_writer/mix_rate": int;

/**
 * The JPEG quality to use when writing a video to an AVI file, between `0.01` and `1.0` (inclusive). Higher `quality` values result in better-looking output at the cost of larger file sizes. Recommended `quality` values are between `0.75` and `0.9`. Even at quality `1.0`, JPEG compression remains lossy.
 *
 * **Note:** This does not affect the audio quality or writing PNG image sequences.
 *
*/
"editor/movie_writer/mjpeg_quality": float;

/**
 * The output path for the movie. The file extension determines the [MovieWriter] that will be used.
 *
 * Godot has 2 built-in [MovieWriter]s:
 *
 * - AVI container with MJPEG for video and uncompressed audio (`.avi` file extension). Lossy compression, medium file sizes, fast encoding. The lossy compression quality can be adjusted by changing [member ProjectSettings.editor/movie_writer/mjpeg_quality]. The resulting file can be viewed in most video players, but it must be converted to another format for viewing on the web or by Godot with [VideoStreamPlayer]. MJPEG does not support transparency. AVI output is currently limited to a file of 4 GB in size at most.
 *
 * - PNG image sequence for video and WAV for audio (`.png` file extension). Lossless compression, large file sizes, slow encoding. Designed to be encoded to a video file with another tool such as [url=https://ffmpeg.org/]FFmpeg[/url] after recording. Transparency is currently not supported, even if the root viewport is set to be transparent.
 *
 * If you need to encode to a different format or pipe a stream through third-party software, you can extend this [MovieWriter] class to create your own movie writers.
 *
 * When using PNG output, the frame number will be appended at the end of the file name. It starts from 0 and is padded with 8 digits to ensure correct sorting and easier processing. For example, if the output path is `/tmp/hello.png`, the first two frames will be `/tmp/hello00000000.png` and `/tmp/hello00000001.png`. The audio will be saved at `/tmp/hello.wav`.
 *
*/
"editor/movie_writer/movie_file": string;

/** The speaker mode to use in the recorded audio when writing a movie. See [enum AudioServer.SpeakerMode] for possible values. */
"editor/movie_writer/speaker_mode": int;

/** The format of the default signal callback name (in the Signal Connection Dialog). The following substitutions are available: [code]{NodeName}[/code], [code]{nodeName}[/code], [code]{node_name}[/code], [code]{SignalName}[/code], [code]{signalName}[/code], and [code]{signal_name}[/code]. */
"editor/naming/default_signal_callback_name": string;

/** The format of the default signal callback name when a signal connects to the same node that emits it (in the Signal Connection Dialog). The following substitutions are available: [code]{NodeName}[/code], [code]{nodeName}[/code], [code]{node_name}[/code], [code]{SignalName}[/code], [code]{signalName}[/code], and [code]{signal_name}[/code]. */
"editor/naming/default_signal_callback_to_self_name": string;

/** When creating node names automatically, set the type of casing in this project. This is mostly an editor setting. */
"editor/naming/node_name_casing": int;

/** What to use to separate node name from number. This is mostly an editor setting. */
"editor/naming/node_name_num_separator": int;

/** When generating file names from scene root node, set the type of casing in this project. This is mostly an editor setting. */
"editor/naming/scene_name_casing": int;

/**
 * The command-line arguments to append to Godot's own command line when running the project. This doesn't affect the editor itself.
 *
 * It is possible to make another executable run Godot by using the `%command%` placeholder. The placeholder will be replaced with Godot's own command line. Program-specific arguments should be placed **before** the placeholder, whereas Godot-specific arguments should be placed **after** the placeholder.
 *
 * For example, this can be used to force the project to run on the dedicated GPU in a NVIDIA Optimus system on Linux:
 *
 * @example 
 * 
 * prime-run %command%
 * @summary 
 * 
 *
*/
"editor/run/main_run_args": string;

/** Text-based file extensions to include in the script editor's "Find in Files" feature. You can add e.g. [code]tscn[/code] if you wish to also parse your scene files, especially if you use built-in scripts which are serialized in the scene files. */
"editor/script/search_in_file_extensions": PackedStringArray;

/** Search path for project-specific script templates. Godot will search for script templates both in the editor-specific path and in this project-specific path. */
"editor/script/templates_search_path": string;



/**
 * If `true`, Blender 3D scene files with the `.blend` extension will be imported by converting them to glTF 2.0.
 *
 * This requires configuring a path to a Blender executable in the editor settings at `filesystem/import/blender/blender3_path`. Blender 3.0 or later is required.
 *
*/
"filesystem/import/blender/enabled": boolean;

/** Override for [member filesystem/import/blender/enabled] on Android where Blender can't easily be accessed from Godot. */
"filesystem/import/blender/enabled_android": boolean;

/** Override for [member filesystem/import/blender/enabled] on the Web where Blender can't easily be accessed from Godot. */
"filesystem/import/blender/enabled_web": boolean;

/**
 * If `true`, Autodesk FBX 3D scene files with the `.fbx` extension will be imported by converting them to glTF 2.0.
 *
 * This requires configuring a path to a FBX2glTF executable in the editor settings at `filesystem/import/fbx/fbx2gltf_path`.
 *
*/
"filesystem/import/fbx/enabled": boolean;

/** Override for [member filesystem/import/fbx/enabled] on Android where FBX2glTF can't easily be accessed from Godot. */
"filesystem/import/fbx/enabled_android": boolean;

/** Override for [member filesystem/import/fbx/enabled] on the Web where FBX2glTF can't easily be accessed from Godot. */
"filesystem/import/fbx/enabled_web": boolean;

/** Default value for [member ScrollContainer.scroll_deadzone], which will be used for all [ScrollContainer]s unless overridden. */
"gui/common/default_scroll_deadzone": int;

/** If [code]true[/code], snaps [Control] node vertices to the nearest pixel to ensure they remain crisp even when the camera moves or zooms. */
"gui/common/snap_controls_to_pixels": boolean;

/**
 * If `true`, swaps **Cancel** and **OK** buttons in dialogs on Windows to follow interface conventions. [method DisplayServer.get_swap_cancel_ok] can be used to query whether buttons are swapped at run-time.
 *
 * **Note:** This doesn't affect native dialogs such as the ones spawned by [method DisplayServer.dialog_show].
 *
*/
"gui/common/swap_cancel_ok": boolean;

/** Maximum undo/redo history size for [TextEdit] fields. */
"gui/common/text_edit_undo_stack_max_size": int;


/** Path to a custom [Theme] resource file to use for the project ([code].theme[/code] or generic [code].tres[/code]/[code].res[/code] extension). */
"gui/theme/custom": string;

/** Path to a custom [Font] resource to use as default for all GUI elements of the project. */
"gui/theme/custom_font": string;

/**
 * Font anti-aliasing mode for the default project font. See [member FontFile.antialiasing].
 *
 * **Note:** This setting does not affect custom [Font]s used within the project. Use the **Import** dock for that instead (see [member ResourceImporterDynamicFont.antialiasing]).
 *
*/
"gui/theme/default_font_antialiasing": int;

/**
 * If set to `true`, the default font will have mipmaps generated. This prevents text from looking grainy when a [Control] is scaled down, or when a [Label3D] is viewed from a long distance (if [member Label3D.texture_filter] is set to a mode that displays mipmaps).
 *
 * Enabling [member gui/theme/default_font_generate_mipmaps] increases font generation time and memory usage. Only enable this setting if you actually need it.
 *
 * **Note:** This setting does not affect custom [Font]s used within the project. Use the **Import** dock for that instead (see [member ResourceImporterDynamicFont.generate_mipmaps]).
 *
*/
"gui/theme/default_font_generate_mipmaps": boolean;

/**
 * Font hinting mode for the default project font. See [member FontFile.hinting].
 *
 * **Note:** This setting does not affect custom [Font]s used within the project. Use the **Import** dock for that instead (see [member ResourceImporterDynamicFont.hinting]).
 *
*/
"gui/theme/default_font_hinting": int;

/**
 * If set to `true`, the default font will use multichannel signed distance field (MSDF) for crisp rendering at any size. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [Control]s that are scaled down (or for [Label3D]s viewed from a long distance).
 *
 * MSDF font rendering can be combined with [member gui/theme/default_font_generate_mipmaps] to further improve font rendering quality when scaled down.
 *
 * **Note:** This setting does not affect custom [Font]s used within the project. Use the **Import** dock for that instead (see [member ResourceImporterDynamicFont.multichannel_signed_distance_field]).
 *
*/
"gui/theme/default_font_multichannel_signed_distance_field": boolean;

/**
 * Font glyph subpixel positioning mode for the default project font. See [member FontFile.subpixel_positioning].
 *
 * **Note:** This setting does not affect custom [Font]s used within the project. Use the **Import** dock for that instead (see [member ResourceImporterDynamicFont.subpixel_positioning]).
 *
*/
"gui/theme/default_font_subpixel_positioning": int;

/**
 * The default scale factor for [Control]s, when not overridden by a [Theme].
 *
 * **Note:** This property is only read when the project starts. To change the default scale at runtime, set [member ThemeDB.fallback_base_scale] instead.
 *
*/
"gui/theme/default_theme_scale": float;

/** LCD subpixel layout used for font anti-aliasing. See [enum TextServer.FontLCDSubpixelLayout]. */
"gui/theme/lcd_subpixel_layout": int;

/** When [member BaseButton.shortcut_feedback] is enabled, this is the time the [BaseButton] will remain highlighted after a shortcut. */
"gui/timers/button_shortcut_feedback_highlight_time": float;

/** Timer setting for incremental search in [Tree], [ItemList], etc. controls (in milliseconds). */
"gui/timers/incremental_search_max_interval_msec": int;

/** Timer for detecting idle in [TextEdit] (in seconds). */
"gui/timers/text_edit_idle_detect_sec": float;

/** Default delay for tooltips (in seconds). */
"gui/timers/tooltip_delay_sec": float;

/**
 * Default [InputEventAction] to confirm a focused button, menu or list item, or validate input.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_accept": Dictionary<any, any>;

/**
 * Default [InputEventAction] to discard a modal or pending input.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_cancel": Dictionary<any, any>;

/**
 * Default [InputEventAction] to copy a selection to the clipboard.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_copy": Dictionary<any, any>;

/**
 * Default [InputEventAction] to cut a selection to the clipboard.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_cut": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move down in the UI.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_down": Dictionary<any, any>;

/**
 * Default [InputEventAction] to go to the end position of a [Control] (e.g. last item in an [ItemList] or a [Tree]), matching the behavior of [constant KEY_END] on typical desktop UI systems.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_end": Dictionary<any, any>;

/**
 * Default [InputEventAction] to refresh the contents of the current directory of a [FileDialog].
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_filedialog_refresh": Dictionary<any, any>;

/**
 * Default [InputEventAction] to toggle showing hidden files and directories in a [FileDialog].
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_filedialog_show_hidden": Dictionary<any, any>;

/**
 * Default [InputEventAction] to go up one directory in a [FileDialog].
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_filedialog_up_one_level": Dictionary<any, any>;

/**
 * Default [InputEventAction] to focus the next [Control] in the scene. The focus behavior can be configured via [member Control.focus_next].
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_focus_next": Dictionary<any, any>;

/**
 * Default [InputEventAction] to focus the previous [Control] in the scene. The focus behavior can be configured via [member Control.focus_previous].
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_focus_prev": Dictionary<any, any>;

/**
 * Default [InputEventAction] to delete a [GraphNode] in a [GraphEdit].
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_graph_delete": Dictionary<any, any>;

/**
 * Default [InputEventAction] to duplicate a [GraphNode] in a [GraphEdit].
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_graph_duplicate": Dictionary<any, any>;

/**
 * Default [InputEventAction] to go to the start position of a [Control] (e.g. first item in an [ItemList] or a [Tree]), matching the behavior of [constant KEY_HOME] on typical desktop UI systems.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_home": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move left in the UI.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_left": Dictionary<any, any>;

/**
 * Default [InputEventAction] to open a context menu in a text field.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_menu": Dictionary<any, any>;

/**
 * Default [InputEventAction] to go down a page in a [Control] (e.g. in an [ItemList] or a [Tree]), matching the behavior of [constant KEY_PAGEDOWN] on typical desktop UI systems.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_page_down": Dictionary<any, any>;

/**
 * Default [InputEventAction] to go up a page in a [Control] (e.g. in an [ItemList] or a [Tree]), matching the behavior of [constant KEY_PAGEUP] on typical desktop UI systems.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_page_up": Dictionary<any, any>;

/**
 * Default [InputEventAction] to paste from the clipboard.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_paste": Dictionary<any, any>;

/**
 * Default [InputEventAction] to redo an undone action.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_redo": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move right in the UI.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_right": Dictionary<any, any>;

/**
 * Default [InputEventAction] to select an item in a [Control] (e.g. in an [ItemList] or a [Tree]).
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_select": Dictionary<any, any>;

/** Default [InputEventAction] to swap input direction, i.e. change between left-to-right to right-to-left modes. Affects text-editting controls ([LineEdit], [TextEdit]). */
"input/ui_swap_input_direction": Dictionary<any, any>;

/**
 * If a selection is currently active with the last caret in text fields, searches for the next occurrence of the selection, adds a caret and selects the next occurrence.
 *
 * If no selection is currently active with the last caret in text fields, selects the word currently under the caret.
 *
 * The action can be performed sequentially for all occurrences of the selection of the last caret and for all existing carets.
 *
 * The viewport is adjusted to the latest newly added caret.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_add_selection_for_next_occurrence": Dictionary<any, any>;

/**
 * Default [InputEventAction] to delete the character before the text cursor.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_backspace": Dictionary<any, any>;

/**
 * Default [InputEventAction] to delete **all** text before the text cursor.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_backspace_all_to_left": Dictionary<any, any>;

/** macOS specific override for the shortcut to delete all text before the text cursor. */
"input/ui_text_backspace_all_to_left_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to delete all characters before the cursor up until a whitespace or punctuation character.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_backspace_word": Dictionary<any, any>;

/** macOS specific override for the shortcut to delete a word. */
"input/ui_text_backspace_word_macos": Dictionary<any, any>;

/** Default [InputEventAction] to add an additional caret above every caret of a text. */
"input/ui_text_caret_add_above": Dictionary<any, any>;

/** macOS specific override for the shortcut to add a caret above every caret. */
"input/ui_text_caret_add_above_macos": Dictionary<any, any>;

/** Default [InputEventAction] to add an additional caret below every caret of a text. */
"input/ui_text_caret_add_below": Dictionary<any, any>;

/** macOS specific override for the shortcut to add a caret below every caret. */
"input/ui_text_caret_add_below_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor to the end of the text.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_document_end": Dictionary<any, any>;

/** macOS specific override for the shortcut to move the text cursor to the end of the text. */
"input/ui_text_caret_document_end_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor to the start of the text.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_document_start": Dictionary<any, any>;

/** macOS specific override for the shortcut to move the text cursor to the start of the text. */
"input/ui_text_caret_document_start_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor down.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_down": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor left.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_left": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor to the end of the line.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_line_end": Dictionary<any, any>;

/** macOS specific override for the shortcut to move the text cursor to the end of the line. */
"input/ui_text_caret_line_end_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor to the start of the line.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_line_start": Dictionary<any, any>;

/** macOS specific override for the shortcut to move the text cursor to the start of the line. */
"input/ui_text_caret_line_start_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor down one page.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_page_down": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor up one page.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_page_up": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor right.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_right": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor up.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_up": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor left to the next whitespace or punctuation.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_word_left": Dictionary<any, any>;

/** macOS specific override for the shortcut to move the text cursor back one word. */
"input/ui_text_caret_word_left_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move the text cursor right to the next whitespace or punctuation.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_caret_word_right": Dictionary<any, any>;

/** macOS specific override for the shortcut to move the text cursor forward one word. */
"input/ui_text_caret_word_right_macos": Dictionary<any, any>;

/**
 * If there's only one caret active and with a selection, clears the selection.
 *
 * In case there's more than one caret active, removes the secondary carets and clears their selections.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_clear_carets_and_selection": Dictionary<any, any>;

/**
 * Default [InputEventAction] to accept an autocompetion hint.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_completion_accept": Dictionary<any, any>;

/**
 * Default [InputEventAction] to request autocompetion.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_completion_query": Dictionary<any, any>;

/**
 * Default [InputEventAction] to accept an autocompetion hint, replacing existing text.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_completion_replace": Dictionary<any, any>;

/**
 * Default [InputEventAction] to unindent text.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_dedent": Dictionary<any, any>;

/**
 * Default [InputEventAction] to delete the character after the text cursor.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_delete": Dictionary<any, any>;

/**
 * Default [InputEventAction] to delete **all** text after the text cursor.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_delete_all_to_right": Dictionary<any, any>;

/** macOS specific override for the shortcut to delete all text after the text cursor. */
"input/ui_text_delete_all_to_right_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to delete all characters after the cursor up until a whitespace or punctuation character.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_delete_word": Dictionary<any, any>;

/** macOS specific override for the shortcut to delete a word after the text cursor. */
"input/ui_text_delete_word_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to indent the current line.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_indent": Dictionary<any, any>;

/**
 * Default [InputEventAction] to insert a new line at the position of the text cursor.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_newline": Dictionary<any, any>;

/**
 * Default [InputEventAction] to insert a new line before the current one.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_newline_above": Dictionary<any, any>;

/**
 * Default [InputEventAction] to insert a new line after the current one.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_newline_blank": Dictionary<any, any>;

/**
 * Default [InputEventAction] to scroll down one line of text.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_scroll_down": Dictionary<any, any>;

/** macOS specific override for the shortcut to scroll down one line. */
"input/ui_text_scroll_down_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to scroll up one line of text.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_scroll_up": Dictionary<any, any>;

/** macOS specific override for the shortcut to scroll up one line. */
"input/ui_text_scroll_up_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to select all text.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_select_all": Dictionary<any, any>;

/**
 * If no selection is currently active, selects the word currently under the caret in text fields. If a selection is currently active, deselects the current selection.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_select_word_under_caret": Dictionary<any, any>;

/** macOS specific override for the shortcut to select the word currently under the caret. */
"input/ui_text_select_word_under_caret_macos": Dictionary<any, any>;

/**
 * Default [InputEventAction] to submit a text field.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_submit": Dictionary<any, any>;

/**
 * Default [InputEventAction] to toggle **insert mode** in a text field. While in insert mode, inserting new text overrides the character after the cursor, unless the next character is a new line.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_text_toggle_insert_mode": Dictionary<any, any>;

/**
 * Default [InputEventAction] to undo the most recent action.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_undo": Dictionary<any, any>;

/**
 * Default [InputEventAction] to move up in the UI.
 *
 * **Note:** Default `ui_*` actions cannot be removed as they are necessary for the internal logic of several [Control]s. The events assigned to the action can however be modified.
 *
*/
"input/ui_up": Dictionary<any, any>;

/**
 * If `true`, key/touch/joystick events will be flushed just before every idle and physics frame.
 *
 * If `false`, such events will be flushed only once per process frame, between iterations of the engine.
 *
 * Enabling this can greatly improve the responsiveness to input, specially in devices that need to run multiple physics frames per visible (process) frame, because they can't run at the target frame rate.
 *
 * **Note:** Currently implemented only on Android.
 *
*/
"input_devices/buffering/agile_event_flushing": boolean;

/**
 * If `true`, [method Input.is_action_just_pressed] and [method Input.is_action_just_released] will only return `true` if the action is still in the respective state, i.e. an action that is pressed **and** released on the same frame will be missed.
 *
 * If `false`, no input will be lost.
 *
 * **Note:** You should in nearly all cases prefer the `false` setting. The legacy behavior is to enable supporting old projects that rely on the old logic, without changes to script.
 *
*/
"input_devices/compatibility/legacy_just_pressed_behavior": boolean;

/**
 * Specifies the tablet driver to use. If left empty, the default driver will be used.
 *
 * **Note:** The driver in use can be overridden at runtime via the `--tablet-driver` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url].
 *
*/
"input_devices/pen_tablet/driver": string;

/** Override for [member input_devices/pen_tablet/driver] on Windows. */
"input_devices/pen_tablet/driver_windows": string;

/** If [code]true[/code], long press events on an Android touchscreen are transformed into right click events. */
"input_devices/pointing/android/enable_long_press_as_right_click": boolean;

/** If [code]true[/code], multi-touch pan and scale gestures are enabled on Android devices. */
"input_devices/pointing/android/enable_pan_and_scale_gestures": boolean;

/** If [code]true[/code], sends mouse input events when tapping or swiping on the touchscreen. */
"input_devices/pointing/emulate_mouse_from_touch": boolean;

/** If [code]true[/code], sends touch input events when clicking or dragging the mouse. */
"input_devices/pointing/emulate_touch_from_mouse": boolean;

/** The locale to fall back to if a translation isn't available in a given language. If left empty, [code]en[/code] (English) will be used. */
"internationalization/locale/fallback": string;

/**
 * If `true`, text server break iteration rule sets, dictionaries and other optional data are included in the exported project.
 *
 * **Note:** "ICU / HarfBuzz / Graphite" text server data includes dictionaries for Burmese, Chinese, Japanese, Khmer, Lao and Thai as well as Unicode Standard Annex #29 and Unicode Standard Annex #14 word and line breaking rules. Data is about 4 MB large.
 *
 * **Note:** "Fallback" text server does not use additional data.
 *
*/
"internationalization/locale/include_text_server_data": boolean;

/** If non-empty, this locale will be used when running the project from the editor. */
"internationalization/locale/test": string;

/** Double vowels in strings during pseudolocalization to simulate the lengthening of text due to localization. */
"internationalization/pseudolocalization/double_vowels": boolean;

/** The expansion ratio to use during pseudolocalization. A value of [code]0.3[/code] is sufficient for most practical purposes, and will increase the length of each string by 30%. */
"internationalization/pseudolocalization/expansion_ratio": float;

/** If [code]true[/code], emulate bidirectional (right-to-left) text when pseudolocalization is enabled. This can be used to spot issues with RTL layout and UI mirroring that will crop up if the project is localized to RTL languages such as Arabic or Hebrew. */
"internationalization/pseudolocalization/fake_bidi": boolean;

/** Replace all characters in the string with [code]*[/code]. Useful for finding non-localizable strings. */
"internationalization/pseudolocalization/override": boolean;

/** Prefix that will be prepended to the pseudolocalized string. */
"internationalization/pseudolocalization/prefix": string;

/** Replace all characters with their accented variants during pseudolocalization. */
"internationalization/pseudolocalization/replace_with_accents": boolean;

/** Skip placeholders for string formatting like [code]%s[/code] or [code]%f[/code] during pseudolocalization. Useful to identify strings which need additional control characters to display correctly. */
"internationalization/pseudolocalization/skip_placeholders": boolean;

/** Suffix that will be appended to the pseudolocalized string. */
"internationalization/pseudolocalization/suffix": string;

/**
 * If `true`, enables pseudolocalization for the project. This can be used to spot untranslatable strings or layout issues that may occur once the project is localized to languages that have longer strings than the source language.
 *
 * **Note:** This property is only read when the project starts. To toggle pseudolocalization at run-time, use [member TranslationServer.pseudolocalization_enabled] instead.
 *
*/
"internationalization/pseudolocalization/use_pseudolocalization": boolean;

/** Force layout direction and text writing direction to RTL for all controls. */
"internationalization/rendering/force_right_to_left_layout_direction": boolean;

/** Root node default layout direction. */
"internationalization/rendering/root_node_layout_direction": int;

/**
 * Specifies the [TextServer] to use. If left empty, the default will be used.
 *
 * "ICU / HarfBuzz / Graphite" is the most advanced text driver, supporting right-to-left typesetting and complex scripts (for languages like Arabic, Hebrew, etc). The "Fallback" text driver does not support right-to-left typesetting and complex scripts.
 *
 * **Note:** The driver in use can be overridden at runtime via the `--text-driver` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url].
 *
 * **Note:** There is an additional `Dummy` text driver available, which disables all text rendering and font-related functionality. This driver is not listed in the project settings, but it can be enabled when running the editor or project using the `--text-driver Dummy` [url=$DOCS_URL/tutorials/editor/command_line_tutorial.html]command line argument[/url].
 *
*/
"internationalization/rendering/text_driver": string;

/** Optional name for the 2D navigation layer 1. If left empty, the layer will display as "Layer 1". */
"layer_names/2d_navigation/layer_1": string;

/** Optional name for the 2D navigation layer 2. If left empty, the layer will display as "Layer 2". */
"layer_names/2d_navigation/layer_2": string;

/** Optional name for the 2D navigation layer 3. If left empty, the layer will display as "Layer 3". */
"layer_names/2d_navigation/layer_3": string;

/** Optional name for the 2D navigation layer 4. If left empty, the layer will display as "Layer 4". */
"layer_names/2d_navigation/layer_4": string;

/** Optional name for the 2D navigation layer 5. If left empty, the layer will display as "Layer 5". */
"layer_names/2d_navigation/layer_5": string;

/** Optional name for the 2D navigation layer 6. If left empty, the layer will display as "Layer 6". */
"layer_names/2d_navigation/layer_6": string;

/** Optional name for the 2D navigation layer 7. If left empty, the layer will display as "Layer 7". */
"layer_names/2d_navigation/layer_7": string;

/** Optional name for the 2D navigation layer 8. If left empty, the layer will display as "Layer 8". */
"layer_names/2d_navigation/layer_8": string;

/** Optional name for the 2D navigation layer 9. If left empty, the layer will display as "Layer 9". */
"layer_names/2d_navigation/layer_9": string;

/** Optional name for the 2D navigation layer 10. If left empty, the layer will display as "Layer 10". */
"layer_names/2d_navigation/layer_10": string;

/** Optional name for the 2D navigation layer 11. If left empty, the layer will display as "Layer 11". */
"layer_names/2d_navigation/layer_11": string;

/** Optional name for the 2D navigation layer 12. If left empty, the layer will display as "Layer 12". */
"layer_names/2d_navigation/layer_12": string;

/** Optional name for the 2D navigation layer 13. If left empty, the layer will display as "Layer 13". */
"layer_names/2d_navigation/layer_13": string;

/** Optional name for the 2D navigation layer 14. If left empty, the layer will display as "Layer 14". */
"layer_names/2d_navigation/layer_14": string;

/** Optional name for the 2D navigation layer 15. If left empty, the layer will display as "Layer 15". */
"layer_names/2d_navigation/layer_15": string;

/** Optional name for the 2D navigation layer 16. If left empty, the layer will display as "Layer 16". */
"layer_names/2d_navigation/layer_16": string;

/** Optional name for the 2D navigation layer 17. If left empty, the layer will display as "Layer 17". */
"layer_names/2d_navigation/layer_17": string;

/** Optional name for the 2D navigation layer 18. If left empty, the layer will display as "Layer 18". */
"layer_names/2d_navigation/layer_18": string;

/** Optional name for the 2D navigation layer 19. If left empty, the layer will display as "Layer 19". */
"layer_names/2d_navigation/layer_19": string;

/** Optional name for the 2D navigation layer 20. If left empty, the layer will display as "Layer 20". */
"layer_names/2d_navigation/layer_20": string;

/** Optional name for the 2D navigation layer 21. If left empty, the layer will display as "Layer 21". */
"layer_names/2d_navigation/layer_21": string;

/** Optional name for the 2D navigation layer 22. If left empty, the layer will display as "Layer 22". */
"layer_names/2d_navigation/layer_22": string;

/** Optional name for the 2D navigation layer 23. If left empty, the layer will display as "Layer 23". */
"layer_names/2d_navigation/layer_23": string;

/** Optional name for the 2D navigation layer 24. If left empty, the layer will display as "Layer 24". */
"layer_names/2d_navigation/layer_24": string;

/** Optional name for the 2D navigation layer 25. If left empty, the layer will display as "Layer 25". */
"layer_names/2d_navigation/layer_25": string;

/** Optional name for the 2D navigation layer 26. If left empty, the layer will display as "Layer 26". */
"layer_names/2d_navigation/layer_26": string;

/** Optional name for the 2D navigation layer 27. If left empty, the layer will display as "Layer 27". */
"layer_names/2d_navigation/layer_27": string;

/** Optional name for the 2D navigation layer 28. If left empty, the layer will display as "Layer 28". */
"layer_names/2d_navigation/layer_28": string;

/** Optional name for the 2D navigation layer 29. If left empty, the layer will display as "Layer 29". */
"layer_names/2d_navigation/layer_29": string;

/** Optional name for the 2D navigation layer 30. If left empty, the layer will display as "Layer 30". */
"layer_names/2d_navigation/layer_30": string;

/** Optional name for the 2D navigation layer 31. If left empty, the layer will display as "Layer 31". */
"layer_names/2d_navigation/layer_31": string;

/** Optional name for the 2D navigation layer 32. If left empty, the layer will display as "Layer 32". */
"layer_names/2d_navigation/layer_32": string;

/** Optional name for the 2D physics layer 1. If left empty, the layer will display as "Layer 1". */
"layer_names/2d_physics/layer_1": string;

/** Optional name for the 2D physics layer 2. If left empty, the layer will display as "Layer 2". */
"layer_names/2d_physics/layer_2": string;

/** Optional name for the 2D physics layer 3. If left empty, the layer will display as "Layer 3". */
"layer_names/2d_physics/layer_3": string;

/** Optional name for the 2D physics layer 4. If left empty, the layer will display as "Layer 4". */
"layer_names/2d_physics/layer_4": string;

/** Optional name for the 2D physics layer 5. If left empty, the layer will display as "Layer 5". */
"layer_names/2d_physics/layer_5": string;

/** Optional name for the 2D physics layer 6. If left empty, the layer will display as "Layer 6". */
"layer_names/2d_physics/layer_6": string;

/** Optional name for the 2D physics layer 7. If left empty, the layer will display as "Layer 7". */
"layer_names/2d_physics/layer_7": string;

/** Optional name for the 2D physics layer 8. If left empty, the layer will display as "Layer 8". */
"layer_names/2d_physics/layer_8": string;

/** Optional name for the 2D physics layer 9. If left empty, the layer will display as "Layer 9". */
"layer_names/2d_physics/layer_9": string;

/** Optional name for the 2D physics layer 10. If left empty, the layer will display as "Layer 10". */
"layer_names/2d_physics/layer_10": string;

/** Optional name for the 2D physics layer 11. If left empty, the layer will display as "Layer 11". */
"layer_names/2d_physics/layer_11": string;

/** Optional name for the 2D physics layer 12. If left empty, the layer will display as "Layer 12". */
"layer_names/2d_physics/layer_12": string;

/** Optional name for the 2D physics layer 13. If left empty, the layer will display as "Layer 13". */
"layer_names/2d_physics/layer_13": string;

/** Optional name for the 2D physics layer 14. If left empty, the layer will display as "Layer 14". */
"layer_names/2d_physics/layer_14": string;

/** Optional name for the 2D physics layer 15. If left empty, the layer will display as "Layer 15". */
"layer_names/2d_physics/layer_15": string;

/** Optional name for the 2D physics layer 16. If left empty, the layer will display as "Layer 16". */
"layer_names/2d_physics/layer_16": string;

/** Optional name for the 2D physics layer 17. If left empty, the layer will display as "Layer 17". */
"layer_names/2d_physics/layer_17": string;

/** Optional name for the 2D physics layer 18. If left empty, the layer will display as "Layer 18". */
"layer_names/2d_physics/layer_18": string;

/** Optional name for the 2D physics layer 19. If left empty, the layer will display as "Layer 19". */
"layer_names/2d_physics/layer_19": string;

/** Optional name for the 2D physics layer 20. If left empty, the layer will display as "Layer 20". */
"layer_names/2d_physics/layer_20": string;

/** Optional name for the 2D physics layer 21. If left empty, the layer will display as "Layer 21". */
"layer_names/2d_physics/layer_21": string;

/** Optional name for the 2D physics layer 22. If left empty, the layer will display as "Layer 22". */
"layer_names/2d_physics/layer_22": string;

/** Optional name for the 2D physics layer 23. If left empty, the layer will display as "Layer 23". */
"layer_names/2d_physics/layer_23": string;

/** Optional name for the 2D physics layer 24. If left empty, the layer will display as "Layer 24". */
"layer_names/2d_physics/layer_24": string;

/** Optional name for the 2D physics layer 25. If left empty, the layer will display as "Layer 25". */
"layer_names/2d_physics/layer_25": string;

/** Optional name for the 2D physics layer 26. If left empty, the layer will display as "Layer 26". */
"layer_names/2d_physics/layer_26": string;

/** Optional name for the 2D physics layer 27. If left empty, the layer will display as "Layer 27". */
"layer_names/2d_physics/layer_27": string;

/** Optional name for the 2D physics layer 28. If left empty, the layer will display as "Layer 28". */
"layer_names/2d_physics/layer_28": string;

/** Optional name for the 2D physics layer 29. If left empty, the layer will display as "Layer 29". */
"layer_names/2d_physics/layer_29": string;

/** Optional name for the 2D physics layer 30. If left empty, the layer will display as "Layer 30". */
"layer_names/2d_physics/layer_30": string;

/** Optional name for the 2D physics layer 31. If left empty, the layer will display as "Layer 31". */
"layer_names/2d_physics/layer_31": string;

/** Optional name for the 2D physics layer 32. If left empty, the layer will display as "Layer 32". */
"layer_names/2d_physics/layer_32": string;

/** Optional name for the 2D render layer 1. If left empty, the layer will display as "Layer 1". */
"layer_names/2d_render/layer_1": string;

/** Optional name for the 2D render layer 2. If left empty, the layer will display as "Layer 2". */
"layer_names/2d_render/layer_2": string;

/** Optional name for the 2D render layer 3. If left empty, the layer will display as "Layer 3". */
"layer_names/2d_render/layer_3": string;

/** Optional name for the 2D render layer 4. If left empty, the layer will display as "Layer 4". */
"layer_names/2d_render/layer_4": string;

/** Optional name for the 2D render layer 5. If left empty, the layer will display as "Layer 5". */
"layer_names/2d_render/layer_5": string;

/** Optional name for the 2D render layer 6. If left empty, the layer will display as "Layer 6". */
"layer_names/2d_render/layer_6": string;

/** Optional name for the 2D render layer 7. If left empty, the layer will display as "Layer 7". */
"layer_names/2d_render/layer_7": string;

/** Optional name for the 2D render layer 8. If left empty, the layer will display as "Layer 8". */
"layer_names/2d_render/layer_8": string;

/** Optional name for the 2D render layer 9. If left empty, the layer will display as "Layer 9". */
"layer_names/2d_render/layer_9": string;

/** Optional name for the 2D render layer 10. If left empty, the layer will display as "Layer 10". */
"layer_names/2d_render/layer_10": string;

/** Optional name for the 2D render layer 11. If left empty, the layer will display as "Layer 11". */
"layer_names/2d_render/layer_11": string;

/** Optional name for the 2D render layer 12. If left empty, the layer will display as "Layer 12". */
"layer_names/2d_render/layer_12": string;

/** Optional name for the 2D render layer 13. If left empty, the layer will display as "Layer 13". */
"layer_names/2d_render/layer_13": string;

/** Optional name for the 2D render layer 14. If left empty, the layer will display as "Layer 14". */
"layer_names/2d_render/layer_14": string;

/** Optional name for the 2D render layer 15. If left empty, the layer will display as "Layer 15". */
"layer_names/2d_render/layer_15": string;

/** Optional name for the 2D render layer 16. If left empty, the layer will display as "Layer 16". */
"layer_names/2d_render/layer_16": string;

/** Optional name for the 2D render layer 17. If left empty, the layer will display as "Layer 17". */
"layer_names/2d_render/layer_17": string;

/** Optional name for the 2D render layer 18. If left empty, the layer will display as "Layer 18". */
"layer_names/2d_render/layer_18": string;

/** Optional name for the 2D render layer 19. If left empty, the layer will display as "Layer 19". */
"layer_names/2d_render/layer_19": string;

/** Optional name for the 2D render layer 20. If left empty, the layer will display as "Layer 20". */
"layer_names/2d_render/layer_20": string;

/** Optional name for the 3D navigation layer 1. If left empty, the layer will display as "Layer 1". */
"layer_names/3d_navigation/layer_1": string;

/** Optional name for the 3D navigation layer 2. If left empty, the layer will display as "Layer 2". */
"layer_names/3d_navigation/layer_2": string;

/** Optional name for the 3D navigation layer 3. If left empty, the layer will display as "Layer 3". */
"layer_names/3d_navigation/layer_3": string;

/** Optional name for the 3D navigation layer 4. If left empty, the layer will display as "Layer 4". */
"layer_names/3d_navigation/layer_4": string;

/** Optional name for the 3D navigation layer 5. If left empty, the layer will display as "Layer 5". */
"layer_names/3d_navigation/layer_5": string;

/** Optional name for the 3D navigation layer 6. If left empty, the layer will display as "Layer 6". */
"layer_names/3d_navigation/layer_6": string;

/** Optional name for the 3D navigation layer 7. If left empty, the layer will display as "Layer 7". */
"layer_names/3d_navigation/layer_7": string;

/** Optional name for the 3D navigation layer 8. If left empty, the layer will display as "Layer 8". */
"layer_names/3d_navigation/layer_8": string;

/** Optional name for the 3D navigation layer 9. If left empty, the layer will display as "Layer 9". */
"layer_names/3d_navigation/layer_9": string;

/** Optional name for the 3D navigation layer 10. If left empty, the layer will display as "Layer 10". */
"layer_names/3d_navigation/layer_10": string;

/** Optional name for the 3D navigation layer 11. If left empty, the layer will display as "Layer 11". */
"layer_names/3d_navigation/layer_11": string;

/** Optional name for the 3D navigation layer 12. If left empty, the layer will display as "Layer 12". */
"layer_names/3d_navigation/layer_12": string;

/** Optional name for the 3D navigation layer 13. If left empty, the layer will display as "Layer 13". */
"layer_names/3d_navigation/layer_13": string;

/** Optional name for the 3D navigation layer 14. If left empty, the layer will display as "Layer 14". */
"layer_names/3d_navigation/layer_14": string;

/** Optional name for the 3D navigation layer 15. If left empty, the layer will display as "Layer 15". */
"layer_names/3d_navigation/layer_15": string;

/** Optional name for the 3D navigation layer 16. If left empty, the layer will display as "Layer 16". */
"layer_names/3d_navigation/layer_16": string;

/** Optional name for the 3D navigation layer 17. If left empty, the layer will display as "Layer 17". */
"layer_names/3d_navigation/layer_17": string;

/** Optional name for the 3D navigation layer 18. If left empty, the layer will display as "Layer 18". */
"layer_names/3d_navigation/layer_18": string;

/** Optional name for the 3D navigation layer 19. If left empty, the layer will display as "Layer 19". */
"layer_names/3d_navigation/layer_19": string;

/** Optional name for the 3D navigation layer 20. If left empty, the layer will display as "Layer 20". */
"layer_names/3d_navigation/layer_20": string;

/** Optional name for the 3D navigation layer 21. If left empty, the layer will display as "Layer 21". */
"layer_names/3d_navigation/layer_21": string;

/** Optional name for the 3D navigation layer 22. If left empty, the layer will display as "Layer 22". */
"layer_names/3d_navigation/layer_22": string;

/** Optional name for the 3D navigation layer 23. If left empty, the layer will display as "Layer 23". */
"layer_names/3d_navigation/layer_23": string;

/** Optional name for the 3D navigation layer 24. If left empty, the layer will display as "Layer 24". */
"layer_names/3d_navigation/layer_24": string;

/** Optional name for the 3D navigation layer 25. If left empty, the layer will display as "Layer 25". */
"layer_names/3d_navigation/layer_25": string;

/** Optional name for the 3D navigation layer 26. If left empty, the layer will display as "Layer 26". */
"layer_names/3d_navigation/layer_26": string;

/** Optional name for the 3D navigation layer 27. If left empty, the layer will display as "Layer 27". */
"layer_names/3d_navigation/layer_27": string;

/** Optional name for the 3D navigation layer 28. If left empty, the layer will display as "Layer 28". */
"layer_names/3d_navigation/layer_28": string;

/** Optional name for the 3D navigation layer 29. If left empty, the layer will display as "Layer 29". */
"layer_names/3d_navigation/layer_29": string;

/** Optional name for the 3D navigation layer 30. If left empty, the layer will display as "Layer 30". */
"layer_names/3d_navigation/layer_30": string;

/** Optional name for the 3D navigation layer 31. If left empty, the layer will display as "Layer 31". */
"layer_names/3d_navigation/layer_31": string;

/** Optional name for the 3D navigation layer 32. If left empty, the layer will display as "Layer 32". */
"layer_names/3d_navigation/layer_32": string;

/** Optional name for the 3D physics layer 1. If left empty, the layer will display as "Layer 1". */
"layer_names/3d_physics/layer_1": string;

/** Optional name for the 3D physics layer 2. If left empty, the layer will display as "Layer 2". */
"layer_names/3d_physics/layer_2": string;

/** Optional name for the 3D physics layer 3. If left empty, the layer will display as "Layer 3". */
"layer_names/3d_physics/layer_3": string;

/** Optional name for the 3D physics layer 4. If left empty, the layer will display as "Layer 4". */
"layer_names/3d_physics/layer_4": string;

/** Optional name for the 3D physics layer 5. If left empty, the layer will display as "Layer 5". */
"layer_names/3d_physics/layer_5": string;

/** Optional name for the 3D physics layer 6. If left empty, the layer will display as "Layer 6". */
"layer_names/3d_physics/layer_6": string;

/** Optional name for the 3D physics layer 7. If left empty, the layer will display as "Layer 7". */
"layer_names/3d_physics/layer_7": string;

/** Optional name for the 3D physics layer 8. If left empty, the layer will display as "Layer 8". */
"layer_names/3d_physics/layer_8": string;

/** Optional name for the 3D physics layer 9. If left empty, the layer will display as "Layer 9". */
"layer_names/3d_physics/layer_9": string;

/** Optional name for the 3D physics layer 10. If left empty, the layer will display as "Layer 10". */
"layer_names/3d_physics/layer_10": string;

/** Optional name for the 3D physics layer 11. If left empty, the layer will display as "Layer 11". */
"layer_names/3d_physics/layer_11": string;

/** Optional name for the 3D physics layer 12. If left empty, the layer will display as "Layer 12". */
"layer_names/3d_physics/layer_12": string;

/** Optional name for the 3D physics layer 13. If left empty, the layer will display as "Layer 13". */
"layer_names/3d_physics/layer_13": string;

/** Optional name for the 3D physics layer 14. If left empty, the layer will display as "Layer 14". */
"layer_names/3d_physics/layer_14": string;

/** Optional name for the 3D physics layer 15. If left empty, the layer will display as "Layer 15". */
"layer_names/3d_physics/layer_15": string;

/** Optional name for the 3D physics layer 16. If left empty, the layer will display as "Layer 16". */
"layer_names/3d_physics/layer_16": string;

/** Optional name for the 3D physics layer 17. If left empty, the layer will display as "Layer 17". */
"layer_names/3d_physics/layer_17": string;

/** Optional name for the 3D physics layer 18. If left empty, the layer will display as "Layer 18". */
"layer_names/3d_physics/layer_18": string;

/** Optional name for the 3D physics layer 19. If left empty, the layer will display as "Layer 19". */
"layer_names/3d_physics/layer_19": string;

/** Optional name for the 3D physics layer 20. If left empty, the layer will display as "Layer 20". */
"layer_names/3d_physics/layer_20": string;

/** Optional name for the 3D physics layer 21. If left empty, the layer will display as "Layer 21". */
"layer_names/3d_physics/layer_21": string;

/** Optional name for the 3D physics layer 22. If left empty, the layer will display as "Layer 22". */
"layer_names/3d_physics/layer_22": string;

/** Optional name for the 3D physics layer 23. If left empty, the layer will display as "Layer 23". */
"layer_names/3d_physics/layer_23": string;

/** Optional name for the 3D physics layer 24. If left empty, the layer will display as "Layer 24". */
"layer_names/3d_physics/layer_24": string;

/** Optional name for the 3D physics layer 25. If left empty, the layer will display as "Layer 25". */
"layer_names/3d_physics/layer_25": string;

/** Optional name for the 3D physics layer 26. If left empty, the layer will display as "Layer 26". */
"layer_names/3d_physics/layer_26": string;

/** Optional name for the 3D physics layer 27. If left empty, the layer will display as "Layer 27". */
"layer_names/3d_physics/layer_27": string;

/** Optional name for the 3D physics layer 28. If left empty, the layer will display as "Layer 28". */
"layer_names/3d_physics/layer_28": string;

/** Optional name for the 3D physics layer 29. If left empty, the layer will display as "Layer 29". */
"layer_names/3d_physics/layer_29": string;

/** Optional name for the 3D physics layer 30. If left empty, the layer will display as "Layer 30". */
"layer_names/3d_physics/layer_30": string;

/** Optional name for the 3D physics layer 31. If left empty, the layer will display as "Layer 31". */
"layer_names/3d_physics/layer_31": string;

/** Optional name for the 3D physics layer 32. If left empty, the layer will display as "Layer 32". */
"layer_names/3d_physics/layer_32": string;

/** Optional name for the 3D render layer 1. If left empty, the layer will display as "Layer 1". */
"layer_names/3d_render/layer_1": string;

/** Optional name for the 3D render layer 2. If left empty, the layer will display as "Layer 2". */
"layer_names/3d_render/layer_2": string;

/** Optional name for the 3D render layer 3. If left empty, the layer will display as "Layer 3". */
"layer_names/3d_render/layer_3": string;

/** Optional name for the 3D render layer 4. If left empty, the layer will display as "Layer 4". */
"layer_names/3d_render/layer_4": string;

/** Optional name for the 3D render layer 5. If left empty, the layer will display as "Layer 5". */
"layer_names/3d_render/layer_5": string;

/** Optional name for the 3D render layer 6. If left empty, the layer will display as "Layer 6". */
"layer_names/3d_render/layer_6": string;

/** Optional name for the 3D render layer 7. If left empty, the layer will display as "Layer 7". */
"layer_names/3d_render/layer_7": string;

/** Optional name for the 3D render layer 8. If left empty, the layer will display as "Layer 8". */
"layer_names/3d_render/layer_8": string;

/** Optional name for the 3D render layer 9. If left empty, the layer will display as "Layer 9". */
"layer_names/3d_render/layer_9": string;

/** Optional name for the 3D render layer 10. If left empty, the layer will display as "Layer 10". */
"layer_names/3d_render/layer_10": string;

/** Optional name for the 3D render layer 11. If left empty, the layer will display as "Layer 11". */
"layer_names/3d_render/layer_11": string;

/** Optional name for the 3D render layer 12. If left empty, the layer will display as "Layer 12". */
"layer_names/3d_render/layer_12": string;

/** Optional name for the 3D render layer 13. If left empty, the layer will display as "Layer 13". */
"layer_names/3d_render/layer_13": string;

/** Optional name for the 3D render layer 14. If left empty, the layer will display as "Layer 14". */
"layer_names/3d_render/layer_14": string;

/** Optional name for the 3D render layer 15. If left empty, the layer will display as "Layer 15". */
"layer_names/3d_render/layer_15": string;

/** Optional name for the 3D render layer 16. If left empty, the layer will display as "Layer 16". */
"layer_names/3d_render/layer_16": string;

/** Optional name for the 3D render layer 17. If left empty, the layer will display as "Layer 17". */
"layer_names/3d_render/layer_17": string;

/** Optional name for the 3D render layer 18. If left empty, the layer will display as "Layer 18". */
"layer_names/3d_render/layer_18": string;

/** Optional name for the 3D render layer 19. If left empty, the layer will display as "Layer 19". */
"layer_names/3d_render/layer_19": string;

/** Optional name for the 3D render layer 20. If left empty, the layer will display as "Layer 20". */
"layer_names/3d_render/layer_20": string;

/** Optional name for the navigation avoidance layer 1. If left empty, the layer will display as "Layer 1". */
"layer_names/avoidance/layer_1": string;

/** Optional name for the navigation avoidance layer 2. If left empty, the layer will display as "Layer 2". */
"layer_names/avoidance/layer_2": string;

/** Optional name for the navigation avoidance layer 3. If left empty, the layer will display as "Layer 3". */
"layer_names/avoidance/layer_3": string;

/** Optional name for the navigation avoidance layer 4. If left empty, the layer will display as "Layer 4". */
"layer_names/avoidance/layer_4": string;

/** Optional name for the navigation avoidance layer 5. If left empty, the layer will display as "Layer 5". */
"layer_names/avoidance/layer_5": string;

/** Optional name for the navigation avoidance layer 6. If left empty, the layer will display as "Layer 6". */
"layer_names/avoidance/layer_6": string;

/** Optional name for the navigation avoidance layer 7. If left empty, the layer will display as "Layer 7". */
"layer_names/avoidance/layer_7": string;

/** Optional name for the navigation avoidance layer 8. If left empty, the layer will display as "Layer 8". */
"layer_names/avoidance/layer_8": string;

/** Optional name for the navigation avoidance layer 9. If left empty, the layer will display as "Layer 9". */
"layer_names/avoidance/layer_9": string;

/** Optional name for the navigation avoidance layer 10. If left empty, the layer will display as "Layer 10". */
"layer_names/avoidance/layer_10": string;

/** Optional name for the navigation avoidance layer 11. If left empty, the layer will display as "Layer 11". */
"layer_names/avoidance/layer_11": string;

/** Optional name for the navigation avoidance layer 12. If left empty, the layer will display as "Layer 12". */
"layer_names/avoidance/layer_12": string;

/** Optional name for the navigation avoidance layer 13. If left empty, the layer will display as "Layer 13". */
"layer_names/avoidance/layer_13": string;

/** Optional name for the navigation avoidance layer 14. If left empty, the layer will display as "Layer 14". */
"layer_names/avoidance/layer_14": string;

/** Optional name for the navigation avoidance layer 15. If left empty, the layer will display as "Layer 15". */
"layer_names/avoidance/layer_15": string;

/** Optional name for the navigation avoidance layer 16. If left empty, the layer will display as "Layer 16". */
"layer_names/avoidance/layer_16": string;

/** Optional name for the navigation avoidance layer 17. If left empty, the layer will display as "Layer 17". */
"layer_names/avoidance/layer_17": string;

/** Optional name for the navigation avoidance layer 18. If left empty, the layer will display as "Layer 18". */
"layer_names/avoidance/layer_18": string;

/** Optional name for the navigation avoidance layer 19. If left empty, the layer will display as "Layer 19". */
"layer_names/avoidance/layer_19": string;

/** Optional name for the navigation avoidance layer 20. If left empty, the layer will display as "Layer 20". */
"layer_names/avoidance/layer_20": string;

/** Optional name for the navigation avoidance layer 21. If left empty, the layer will display as "Layer 21". */
"layer_names/avoidance/layer_21": string;

/** Optional name for the navigation avoidance layer 22. If left empty, the layer will display as "Layer 22". */
"layer_names/avoidance/layer_22": string;

/** Optional name for the navigation avoidance layer 23. If left empty, the layer will display as "Layer 23". */
"layer_names/avoidance/layer_23": string;

/** Optional name for the navigation avoidance layer 24. If left empty, the layer will display as "Layer 24". */
"layer_names/avoidance/layer_24": string;

/** Optional name for the navigation avoidance layer 25. If left empty, the layer will display as "Layer 25". */
"layer_names/avoidance/layer_25": string;

/** Optional name for the navigation avoidance layer 26. If left empty, the layer will display as "Layer 26". */
"layer_names/avoidance/layer_26": string;

/** Optional name for the navigation avoidance layer 27. If left empty, the layer will display as "Layer 27". */
"layer_names/avoidance/layer_27": string;

/** Optional name for the navigation avoidance layer 28. If left empty, the layer will display as "Layer 28". */
"layer_names/avoidance/layer_28": string;

/** Optional name for the navigation avoidance layer 29. If left empty, the layer will display as "Layer 29". */
"layer_names/avoidance/layer_29": string;

/** Optional name for the navigation avoidance layer 30. If left empty, the layer will display as "Layer 30". */
"layer_names/avoidance/layer_30": string;

/** Optional name for the navigation avoidance layer 31. If left empty, the layer will display as "Layer 31". */
"layer_names/avoidance/layer_31": string;

/** Optional name for the navigation avoidance layer 32. If left empty, the layer will display as "Layer 32". */
"layer_names/avoidance/layer_32": string;

/** Godot uses a message queue to defer some function calls. If you run out of space on it (you will see an error), you can increase the size here. */
"memory/limits/message_queue/max_size_mb": int;

/** This is used by servers when used in multi-threading mode (servers and visual). RIDs are preallocated to avoid stalling the server requesting them on threads. If servers get stalled too often when loading resources in a thread, increase this number. */
"memory/limits/multithreaded_server/rid_pool_prealloc": int;

/** Default cell size for 2D navigation maps. See [method NavigationServer2D.map_set_cell_size]. */
"navigation/2d/default_cell_size": float;

/** Default edge connection margin for 2D navigation maps. See [method NavigationServer2D.map_set_edge_connection_margin]. */
"navigation/2d/default_edge_connection_margin": float;

/** Default link connection radius for 2D navigation maps. See [method NavigationServer2D.map_set_link_connection_radius]. */
"navigation/2d/default_link_connection_radius": float;

/** If enabled 2D navigation regions will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. This setting only affects World2D default navigation maps. */
"navigation/2d/use_edge_connections": boolean;

/** Default cell height for 3D navigation maps. See [method NavigationServer3D.map_set_cell_height]. */
"navigation/3d/default_cell_height": float;

/** Default cell size for 3D navigation maps. See [method NavigationServer3D.map_set_cell_size]. */
"navigation/3d/default_cell_size": float;

/** Default edge connection margin for 3D navigation maps. See [method NavigationServer3D.map_set_edge_connection_margin]. */
"navigation/3d/default_edge_connection_margin": float;

/** Default link connection radius for 3D navigation maps. See [method NavigationServer3D.map_set_link_connection_radius]. */
"navigation/3d/default_link_connection_radius": float;

/** Default up orientation for 3D navigation maps. See [method NavigationServer3D.map_set_up]. */
"navigation/3d/default_up": Vector3;

/** If enabled 3D navigation regions will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. This setting only affects World3D default navigation maps. */
"navigation/3d/use_edge_connections": boolean;

/** If enabled and avoidance calculations use multiple threads the threads run with high priority. */
"navigation/avoidance/thread_model/avoidance_use_high_priority_threads": boolean;

/** If enabled the avoidance calculations use multiple threads. */
"navigation/avoidance/thread_model/avoidance_use_multiple_threads": boolean;

/** If enabled and async navmesh baking uses multiple threads the threads run with high priority. */
"navigation/baking/thread_model/baking_use_high_priority_threads": boolean;

/** If enabled the async navmesh baking uses multiple threads. */
"navigation/baking/thread_model/baking_use_multiple_threads": boolean;

/** Maximum number of characters allowed to send as output from the debugger. Over this value, content is dropped. This helps not to stall the debugger connection. */
"network/limits/debugger/max_chars_per_second": int;

/** Maximum number of errors allowed to be sent from the debugger. Over this value, content is dropped. This helps not to stall the debugger connection. */
"network/limits/debugger/max_errors_per_second": int;

/** Maximum number of messages in the debugger queue. Over this value, content is dropped. This helps to limit the debugger memory usage. */
"network/limits/debugger/max_queued_messages": int;

/** Maximum number of warnings allowed to be sent from the debugger. Over this value, content is dropped. This helps not to stall the debugger connection. */
"network/limits/debugger/max_warnings_per_second": int;

/** Default size of packet peer stream for deserializing Godot data (in bytes, specified as a power of two). The default value [code]16[/code] is equal to 65,536 bytes. Over this size, data is dropped. */
"network/limits/packet_peer_stream/max_buffer_po2": int;

/** Timeout (in seconds) for connection attempts using TCP. */
"network/limits/tcp/connect_timeout_seconds": int;

/** Maximum size (in kiB) for the [WebRTCDataChannel] input buffer. */
"network/limits/webrtc/max_channel_in_buffer_kb": int;

/**
 * The CA certificates bundle to use for TLS connections. If this is set to a non-empty value, this will **override** Godot's default [url=https://github.com/godotengine/godot/blob/master/thirdparty/certs/ca-certificates.crt]Mozilla certificate bundle[/url]. If left empty, the default certificate bundle will be used.
 *
 * If in doubt, leave this setting empty.
 *
*/
"network/tls/certificate_bundle_override": string;

/**
 * The default angular damp in 2D.
 *
 * **Note:** Good values are in the range `0` to `1`. At value `0` objects will keep moving with the same velocity. Values greater than `1` will aim to reduce the velocity to `0` in less than a second e.g. a value of `2` will aim to reduce the velocity to `0` in half a second. A value equal to or greater than the physics frame rate ([member ProjectSettings.physics/common/physics_ticks_per_second], `60` by default) will bring the object to a stop in one iteration.
 *
*/
"physics/2d/default_angular_damp": float;

/**
 * The default gravity strength in 2D (in pixels per second squared).
 *
 * **Note:** This property is only read when the project starts. To change the default gravity at runtime, use the following code sample:
 *
 * @example 
 * 
 * 
 * # Set the default gravity strength to 980.
 * PhysicsServer2D.area_set_param(get_viewport().find_world_2d().space, PhysicsServer2D.AREA_PARAM_GRAVITY, 980)
 * 
 * 
 * // Set the default gravity strength to 980.
 * PhysicsServer2D.AreaSetParam(GetViewport().FindWorld2D().Space, PhysicsServer2D.AreaParameter.Gravity, 980);
 * 
 * @summary 
 * 
 *
*/
"physics/2d/default_gravity": float;

/**
 * The default gravity direction in 2D.
 *
 * **Note:** This property is only read when the project starts. To change the default gravity vector at runtime, use the following code sample:
 *
 * @example 
 * 
 * 
 * # Set the default gravity direction to `Vector2(0, 1)`.
 * PhysicsServer2D.area_set_param(get_viewport().find_world_2d().space, PhysicsServer2D.AREA_PARAM_GRAVITY_VECTOR, Vector2.DOWN)
 * 
 * 
 * // Set the default gravity direction to `Vector2(0, 1)`.
 * PhysicsServer2D.AreaSetParam(GetViewport().FindWorld2D().Space, PhysicsServer2D.AreaParameter.GravityVector, Vector2.Down)
 * 
 * @summary 
 * 
 *
*/
"physics/2d/default_gravity_vector": Vector2;

/**
 * The default linear damp in 2D.
 *
 * **Note:** Good values are in the range `0` to `1`. At value `0` objects will keep moving with the same velocity. Values greater than `1` will aim to reduce the velocity to `0` in less than a second e.g. a value of `2` will aim to reduce the velocity to `0` in half a second. A value equal to or greater than the physics frame rate ([member ProjectSettings.physics/common/physics_ticks_per_second], `60` by default) will bring the object to a stop in one iteration.
 *
*/
"physics/2d/default_linear_damp": float;

/**
 * Sets which physics engine to use for 2D physics.
 *
 * "DEFAULT" and "GodotPhysics2D" are the same, as there is currently no alternative 2D physics server implemented.
 *
*/
"physics/2d/physics_engine": string;

/** If [code]true[/code], the 2D physics server runs on a separate thread, making better use of multi-core CPUs. If [code]false[/code], the 2D physics server runs on the main thread. Running the physics server on a separate thread can increase performance, but restricts API access to only physics process. */
"physics/2d/run_on_separate_thread": boolean;

/** Threshold angular velocity under which a 2D physics body will be considered inactive. See [constant PhysicsServer2D.SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD]. */
"physics/2d/sleep_threshold_angular": float;

/** Threshold linear velocity under which a 2D physics body will be considered inactive. See [constant PhysicsServer2D.SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD]. */
"physics/2d/sleep_threshold_linear": float;

/** Maximum distance a shape can penetrate another shape before it is considered a collision. See [constant PhysicsServer2D.SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION]. */
"physics/2d/solver/contact_max_allowed_penetration": float;

/** Maximum distance a shape can be from another before they are considered separated and the contact is discarded. See [constant PhysicsServer2D.SPACE_PARAM_CONTACT_MAX_SEPARATION]. */
"physics/2d/solver/contact_max_separation": float;

/** Maximum distance a pair of bodies has to move before their collision status has to be recalculated. See [constant PhysicsServer2D.SPACE_PARAM_CONTACT_RECYCLE_RADIUS]. */
"physics/2d/solver/contact_recycle_radius": float;

/**
 * Default solver bias for all physics constraints. Defines how much bodies react to enforce constraints. See [constant PhysicsServer2D.SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS].
 *
 * Individual constraints can have a specific bias value (see [member Joint2D.bias]).
 *
*/
"physics/2d/solver/default_constraint_bias": float;

/**
 * Default solver bias for all physics contacts. Defines how much bodies react to enforce contact separation. See [constant PhysicsServer2D.SPACE_PARAM_CONTACT_DEFAULT_BIAS].
 *
 * Individual shapes can have a specific bias value (see [member Shape2D.custom_solver_bias]).
 *
*/
"physics/2d/solver/default_contact_bias": float;

/** Number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. See [constant PhysicsServer2D.SPACE_PARAM_SOLVER_ITERATIONS]. */
"physics/2d/solver/solver_iterations": int;

/** Time (in seconds) of inactivity before which a 2D physics body will put to sleep. See [constant PhysicsServer2D.SPACE_PARAM_BODY_TIME_TO_SLEEP]. */
"physics/2d/time_before_sleep": float;

/**
 * The default angular damp in 3D.
 *
 * **Note:** Good values are in the range `0` to `1`. At value `0` objects will keep moving with the same velocity. Values greater than `1` will aim to reduce the velocity to `0` in less than a second e.g. a value of `2` will aim to reduce the velocity to `0` in half a second. A value equal to or greater than the physics frame rate ([member ProjectSettings.physics/common/physics_ticks_per_second], `60` by default) will bring the object to a stop in one iteration.
 *
*/
"physics/3d/default_angular_damp": float;

/**
 * The default gravity strength in 3D (in meters per second squared).
 *
 * **Note:** This property is only read when the project starts. To change the default gravity at runtime, use the following code sample:
 *
 * @example 
 * 
 * 
 * # Set the default gravity strength to 9.8.
 * PhysicsServer3D.area_set_param(get_viewport().find_world_3d().space, PhysicsServer3D.AREA_PARAM_GRAVITY, 9.8)
 * 
 * 
 * // Set the default gravity strength to 9.8.
 * PhysicsServer3D.AreaSetParam(GetViewport().FindWorld3D().Space, PhysicsServer3D.AreaParameter.Gravity, 9.8);
 * 
 * @summary 
 * 
 *
*/
"physics/3d/default_gravity": float;

/**
 * The default gravity direction in 3D.
 *
 * **Note:** This property is only read when the project starts. To change the default gravity vector at runtime, use the following code sample:
 *
 * @example 
 * 
 * 
 * # Set the default gravity direction to `Vector3(0, -1, 0)`.
 * PhysicsServer3D.area_set_param(get_viewport().find_world_3d().space, PhysicsServer3D.AREA_PARAM_GRAVITY_VECTOR, Vector3.DOWN)
 * 
 * 
 * // Set the default gravity direction to `Vector3(0, -1, 0)`.
 * PhysicsServer3D.AreaSetParam(GetViewport().FindWorld3D().Space, PhysicsServer3D.AreaParameter.GravityVector, Vector3.Down)
 * 
 * @summary 
 * 
 *
*/
"physics/3d/default_gravity_vector": Vector3;

/**
 * The default linear damp in 3D.
 *
 * **Note:** Good values are in the range `0` to `1`. At value `0` objects will keep moving with the same velocity. Values greater than `1` will aim to reduce the velocity to `0` in less than a second e.g. a value of `2` will aim to reduce the velocity to `0` in half a second. A value equal to or greater than the physics frame rate ([member ProjectSettings.physics/common/physics_ticks_per_second], `60` by default) will bring the object to a stop in one iteration.
 *
*/
"physics/3d/default_linear_damp": float;

/**
 * Sets which physics engine to use for 3D physics.
 *
 * "DEFAULT" and "GodotPhysics3D" are the same, as there is currently no alternative 3D physics server implemented.
 *
*/
"physics/3d/physics_engine": string;

/** If [code]true[/code], the 3D physics server runs on a separate thread, making better use of multi-core CPUs. If [code]false[/code], the 3D physics server runs on the main thread. Running the physics server on a separate thread can increase performance, but restricts API access to only physics process. */
"physics/3d/run_on_separate_thread": boolean;

/** Threshold angular velocity under which a 3D physics body will be considered inactive. See [constant PhysicsServer3D.SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD]. */
"physics/3d/sleep_threshold_angular": float;

/** Threshold linear velocity under which a 3D physics body will be considered inactive. See [constant PhysicsServer3D.SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD]. */
"physics/3d/sleep_threshold_linear": float;

/** Maximum distance a shape can penetrate another shape before it is considered a collision. See [constant PhysicsServer3D.SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION]. */
"physics/3d/solver/contact_max_allowed_penetration": float;

/** Maximum distance a shape can be from another before they are considered separated and the contact is discarded. See [constant PhysicsServer3D.SPACE_PARAM_CONTACT_MAX_SEPARATION]. */
"physics/3d/solver/contact_max_separation": float;

/** Maximum distance a pair of bodies has to move before their collision status has to be recalculated. See [constant PhysicsServer3D.SPACE_PARAM_CONTACT_RECYCLE_RADIUS]. */
"physics/3d/solver/contact_recycle_radius": float;

/**
 * Default solver bias for all physics contacts. Defines how much bodies react to enforce contact separation. See [constant PhysicsServer3D.SPACE_PARAM_CONTACT_DEFAULT_BIAS].
 *
 * Individual shapes can have a specific bias value (see [member Shape3D.custom_solver_bias]).
 *
*/
"physics/3d/solver/default_contact_bias": float;

/** Number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. See [constant PhysicsServer3D.SPACE_PARAM_SOLVER_ITERATIONS]. */
"physics/3d/solver/solver_iterations": int;

/** Time (in seconds) of inactivity before which a 3D physics body will put to sleep. See [constant PhysicsServer3D.SPACE_PARAM_BODY_TIME_TO_SLEEP]. */
"physics/3d/time_before_sleep": float;

/** Enables [member Viewport.physics_object_picking] on the root viewport. */
"physics/common/enable_object_picking": boolean;

/**
 * Controls the maximum number of physics steps that can be simulated each rendered frame. The default value is tuned to avoid "spiral of death" situations where expensive physics simulations trigger more expensive simulations indefinitely. However, the game will appear to slow down if the rendering FPS is less than `1 / max_physics_steps_per_frame` of [member physics/common/physics_ticks_per_second]. This occurs even if `delta` is consistently used in physics calculations. To avoid this, increase [member physics/common/max_physics_steps_per_frame] if you have increased [member physics/common/physics_ticks_per_second] significantly above its default value.
 *
 * **Note:** This property is only read when the project starts. To change the maximum number of simulated physics steps per frame at runtime, set [member Engine.max_physics_steps_per_frame] instead.
 *
*/
"physics/common/max_physics_steps_per_frame": int;

/**
 * Controls how much physics ticks are synchronized with real time. For 0 or less, the ticks are synchronized. Such values are recommended for network games, where clock synchronization matters. Higher values cause higher deviation of in-game clock and real clock, but allows smoothing out framerate jitters. The default value of 0.5 should be fine for most; values above 2 could cause the game to react to dropped frames with a noticeable delay and are not recommended.
 *
 * **Note:** For best results, when using a custom physics interpolation solution, the physics jitter fix should be disabled by setting [member physics/common/physics_jitter_fix] to `0`.
 *
 * **Note:** This property is only read when the project starts. To change the physics jitter fix at runtime, set [member Engine.physics_jitter_fix] instead.
 *
*/
"physics/common/physics_jitter_fix": float;

/**
 * The number of fixed iterations per second. This controls how often physics simulation and [method Node._physics_process] methods are run. See also [member application/run/max_fps].
 *
 * **Note:** This property is only read when the project starts. To change the physics FPS at runtime, set [member Engine.physics_ticks_per_second] instead.
 *
 * **Note:** Only [member physics/common/max_physics_steps_per_frame] physics ticks may be simulated per rendered frame at most. If more physics ticks have to be simulated per rendered frame to keep up with rendering, the project will appear to slow down (even if `delta` is used consistently in physics calculations). Therefore, it is recommended to also increase [member physics/common/max_physics_steps_per_frame] if increasing [member physics/common/physics_ticks_per_second] significantly above its default value.
 *
*/
"physics/common/physics_ticks_per_second": int;

/**
 * Controls how much of the original viewport size should be covered by the 2D signed distance field. This SDF can be sampled in [CanvasItem] shaders and is used for [GPUParticles2D] collision. Higher values allow portions of occluders located outside the viewport to still be taken into account in the generated signed distance field, at the cost of performance. If you notice particles falling through [LightOccluder2D]s as the occluders leave the viewport, increase this setting.
 *
 * The percentage specified is added on each axis and on both sides. For example, with the default setting of 120%, the signed distance field will cover 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).
 *
 * **Note:** This property is only read when the project starts. To change the 2D SDF oversizing percentage at runtime, use [method RenderingServer.viewport_set_sdf_oversize_and_scale] instead.
 *
*/
"rendering/2d/sdf/oversize": int;

/**
 * The resolution scale to use for the 2D signed distance field. Higher values lead to a more precise and more stable signed distance field as the camera moves, at the cost of performance. The default value (50%) renders at half the resolution of the viewport size on each axis, which means the SDF is generated with 25% of the viewport's pixel count.
 *
 * **Note:** This property is only read when the project starts. To change the 2D SDF resolution scale at runtime, use [method RenderingServer.viewport_set_sdf_oversize_and_scale] instead.
 *
*/
"rendering/2d/sdf/scale": int;

/**
 * The size of the 2D shadow atlas in pixels. Higher values result in more precise [Light2D] shadows, at the cost of performance and video memory usage. The specified value is rounded up to the nearest power of 2.
 *
 * **Note:** This property is only read when the project starts. To change the 2D shadow atlas size at runtime, use [method RenderingServer.canvas_set_shadow_texture_size] instead.
 *
*/
"rendering/2d/shadow_atlas/size": int;

/**
 * If `true`, [CanvasItem] nodes will internally snap to full pixels. Their position can still be sub-pixel, but the decimals will not have effect. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled.
 *
 * **Note:** This property is only read when the project starts. To toggle 2D transform snapping at runtime, use [method RenderingServer.viewport_set_snap_2d_transforms_to_pixel] on the root [Viewport] instead.
 *
 * **Note:** [Control] nodes are snapped to the nearest pixel by default. This is controlled by [member gui/common/snap_controls_to_pixels].
 *
*/
"rendering/2d/snap/snap_2d_transforms_to_pixel": boolean;

/**
 * If `true`, vertices of [CanvasItem] nodes will snap to full pixels. Only affects the final vertex positions, not the transforms. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled.
 *
 * **Note:** This property is only read when the project starts. To toggle 2D vertex snapping at runtime, use [method RenderingServer.viewport_set_snap_2d_vertices_to_pixel] on the root [Viewport] instead.
 *
 * **Note:** [Control] nodes are snapped to the nearest pixel by default. This is controlled by [member gui/common/snap_controls_to_pixels].
 *
*/
"rendering/2d/snap/snap_2d_vertices_to_pixel": boolean;

/**
 * Sets the number of MSAA samples to use for 2D/Canvas rendering (as a power of two). MSAA is used to reduce aliasing around the edges of polygons. A higher MSAA value results in smoother edges but can be significantly slower on some hardware, especially integrated graphics due to their limited memory bandwidth. This has no effect on shader-induced aliasing or texture aliasing.
 *
 * **Note:** MSAA is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 *
*/
"rendering/anti_aliasing/quality/msaa_2d": int;

/**
 * Sets the number of MSAA samples to use for 3D rendering (as a power of two). MSAA is used to reduce aliasing around the edges of polygons. A higher MSAA value results in smoother edges but can be significantly slower on some hardware, especially integrated graphics due to their limited memory bandwidth. See also [member rendering/scaling_3d/mode] for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing.
 *
 * **Note:** MSAA is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 *
*/
"rendering/anti_aliasing/quality/msaa_3d": int;

/**
 * Sets the screen-space antialiasing mode for the default screen [Viewport]. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry. The blurriness is partially counteracted by automatically using a negative mipmap LOD bias (see [member rendering/textures/default_filters/texture_mipmap_bias]).
 *
 * Another way to combat specular aliasing is to enable [member rendering/anti_aliasing/screen_space_roughness_limiter/enabled].
 *
 * **Note:** Screen-space antialiasing is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 *
*/
"rendering/anti_aliasing/quality/screen_space_aa": int;

/**
 * If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is **not** affected by debanding unless the [member Environment.background_mode] is [constant Environment.BG_CANVAS].
 *
 * In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.
 *
 * **Note:** This property is only read when the project starts. To set debanding at run-time, set [member Viewport.use_debanding] on the root [Viewport] instead.
 *
*/
"rendering/anti_aliasing/quality/use_debanding": boolean;

/**
 * Enables Temporal Anti-Aliasing for the default screen [Viewport]. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion. Enabling TAA can make the image blurrier, which is partially counteracted by automatically using a negative mipmap LOD bias (see [member rendering/textures/default_filters/texture_mipmap_bias]).
 *
 * **Note:** The implementation is not complete yet. Some visual instances such as particles and skinned meshes may show ghosting artifacts in motion.
 *
 * **Note:** TAA is only supported in the Forward+ rendering method, not Mobile or Compatibility.
 *
*/
"rendering/anti_aliasing/quality/use_taa": boolean;

/** [b]Note:[/b] This property is only read when the project starts. To control the screen-space roughness limiter at runtime, call [method RenderingServer.screen_space_roughness_limiter_set_active] instead. */
"rendering/anti_aliasing/screen_space_roughness_limiter/amount": float;

/**
 * If `true`, enables a spatial filter to limit roughness in areas with high-frequency detail. This can help reduce specular aliasing to an extent, though not as much as enabling [member rendering/anti_aliasing/quality/use_taa]. This filter has a small performance cost, so consider disabling it if it doesn't benefit your scene noticeably.
 *
 * **Note:** The screen-space roughness limiter is only supported in the Forward+ and Mobile rendering methods, not Compatibility.
 *
 * **Note:** This property is only read when the project starts. To control the screen-space roughness limiter at runtime, call [method RenderingServer.screen_space_roughness_limiter_set_active] instead.
 *
*/
"rendering/anti_aliasing/screen_space_roughness_limiter/enabled": boolean;

/** [b]Note:[/b] This property is only read when the project starts. To control the screen-space roughness limiter at runtime, call [method RenderingServer.screen_space_roughness_limiter_set_active] instead. */
"rendering/anti_aliasing/screen_space_roughness_limiter/limit": float;

/** Sets the quality of the depth of field effect. Higher quality takes more samples, which is slower but looks smoother. */
"rendering/camera/depth_of_field/depth_of_field_bokeh_quality": int;

/** Sets the depth of field shape. Can be Box, Hexagon, or Circle. Box is the fastest. Circle is the most realistic, but also the most expensive to compute. */
"rendering/camera/depth_of_field/depth_of_field_bokeh_shape": int;

/** If [code]true[/code], jitters DOF samples to make effect slightly blurrier and hide lines created from low sample rates. This can result in a slightly grainy appearance when used with a low number of samples. */
"rendering/camera/depth_of_field/depth_of_field_use_jitter": boolean;

/** Disables [member rendering/driver/depth_prepass/enable] conditionally for certain vendors. By default, disables the depth prepass for mobile devices as mobile devices do not benefit from the depth prepass due to their unique architecture. */
"rendering/driver/depth_prepass/disable_for_vendors": string;

/**
 * If `true`, performs a previous depth pass before rendering 3D materials. This increases performance significantly in scenes with high overdraw, when complex materials and lighting are used. However, in scenes with few occluded surfaces, the depth prepass may reduce performance. If your game is viewed from a fixed angle that makes it easy to avoid overdraw (such as top-down or side-scrolling perspective), consider disabling the depth prepass to improve performance. This setting can be changed at run-time to optimize performance depending on the scene currently being viewed.
 *
 * **Note:** Depth prepass is only supported when using the Forward+ or Compatibility rendering method. When using the Mobile rendering method, there is no depth prepass performed.
 *
*/
"rendering/driver/depth_prepass/enable": boolean;

/**
 * The thread model to use for rendering. Rendering on a thread may improve performance, but synchronizing to the main thread can cause a bit more jitter.
 *
 * **Note:** The **Multi-Threaded** option is experimental, and has several known bugs which can lead to crashing, especially when using particles or resizing the window. Not recommended for use in production at this stage.
 *
*/
"rendering/driver/threads/thread_model": int;

/** Default background clear color. Overridable per [Viewport] using its [Environment]. See [member Environment.background_mode] and [member Environment.background_color] in particular. To change this default color programmatically, use [method RenderingServer.set_default_clear_color]. */
"rendering/environment/defaults/default_clear_color": Color;

/** [Environment] that will be used as a fallback environment in case a scene does not specify its own environment. The default environment is loaded in at scene load time regardless of whether you have set an environment or not. If you do not rely on the fallback environment, you do not need to set this property. */
"rendering/environment/defaults/default_environment": string;

/** Sets how the glow effect is upscaled before being copied onto the screen. Linear is faster, but looks blocky. Bicubic is slower but looks smooth. */
"rendering/environment/glow/upscale_mode": int;

/** Lower-end override for [member rendering/environment/glow/upscale_mode] on mobile devices, due to performance concerns or driver support. */
"rendering/environment/glow/upscale_mode_mobile": int;

/** Sets the quality for rough screen-space reflections. Turning off will make all screen space reflections sharp, while higher values make rough reflections look better. */
"rendering/environment/screen_space_reflection/roughness_quality": int;

/** Quality target to use when [member rendering/environment/ssao/quality] is set to [code]Ultra[/code]. A value of [code]0.0[/code] provides a quality and speed similar to [code]Medium[/code] while a value of [code]1.0[/code] provides much higher quality than any of the other settings at the cost of performance. */
"rendering/environment/ssao/adaptive_target": float;

/** Number of blur passes to use when computing screen-space ambient occlusion. A higher number will result in a smoother look, but will be slower to compute and will have less high-frequency detail. */
"rendering/environment/ssao/blur_passes": int;

/** Distance at which the screen-space ambient occlusion effect starts to fade out. Use this hide ambient occlusion at great distances. */
"rendering/environment/ssao/fadeout_from": float;

/** Distance at which the screen-space ambient occlusion is fully faded out. Use this hide ambient occlusion at great distances. */
"rendering/environment/ssao/fadeout_to": float;

/** If [code]true[/code], screen-space ambient occlusion will be rendered at half size and then upscaled before being added to the scene. This is significantly faster but may miss small details. If [code]false[/code], screen-space ambient occlusion will be rendered at full size. */
"rendering/environment/ssao/half_size": boolean;

/** Sets the quality of the screen-space ambient occlusion effect. Higher values take more samples and so will result in better quality, at the cost of performance. Setting to [code]Ultra[/code] will use the [member rendering/environment/ssao/adaptive_target] setting. */
"rendering/environment/ssao/quality": int;

/** Quality target to use when [member rendering/environment/ssil/quality] is set to [code]Ultra[/code]. A value of [code]0.0[/code] provides a quality and speed similar to [code]Medium[/code] while a value of [code]1.0[/code] provides much higher quality than any of the other settings at the cost of performance. When using the adaptive target, the performance cost scales with the complexity of the scene. */
"rendering/environment/ssil/adaptive_target": float;

/** Number of blur passes to use when computing screen-space indirect lighting. A higher number will result in a smoother look, but will be slower to compute and will have less high-frequency detail. */
"rendering/environment/ssil/blur_passes": int;

/** Distance at which the screen-space indirect lighting effect starts to fade out. Use this hide screen-space indirect lighting at great distances. */
"rendering/environment/ssil/fadeout_from": float;

/** Distance at which the screen-space indirect lighting is fully faded out. Use this hide screen-space indirect lighting at great distances. */
"rendering/environment/ssil/fadeout_to": float;

/** If [code]true[/code], screen-space indirect lighting will be rendered at half size and then upscaled before being added to the scene. This is significantly faster but may miss small details and may result in some objects appearing to glow at their edges. */
"rendering/environment/ssil/half_size": boolean;

/** Sets the quality of the screen-space indirect lighting effect. Higher values take more samples and so will result in better quality, at the cost of performance. Setting to [code]Ultra[/code] will use the [member rendering/environment/ssil/adaptive_target] setting. */
"rendering/environment/ssil/quality": int;

/**
 * Scales the depth over which the subsurface scattering effect is applied. A high value may allow light to scatter into a part of the mesh or another mesh that is close in screen space but far in depth. See also [member rendering/environment/subsurface_scattering/subsurface_scattering_scale].
 *
 * **Note:** This property is only read when the project starts. To set the subsurface scattering depth scale at runtime, call [method RenderingServer.sub_surface_scattering_set_scale] instead.
 *
*/
"rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale": float;

/**
 * Sets the quality of the subsurface scattering effect. Higher values are slower but look nicer. This affects the rendering of materials that have [member BaseMaterial3D.subsurf_scatter_enabled] set to `true`, along with [ShaderMaterial]s that set `SSS_STRENGTH`.
 *
 * **Note:** This property is only read when the project starts. To set the subsurface scattering quality at runtime, call [method RenderingServer.sub_surface_scattering_set_quality] instead.
 *
*/
"rendering/environment/subsurface_scattering/subsurface_scattering_quality": int;

/**
 * Scales the distance over which samples are taken for subsurface scattering effect. Changing this does not impact performance, but higher values will result in significant artifacts as the samples will become obviously spread out. A lower value results in a smaller spread of scattered light. See also [member rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale].
 *
 * **Note:** This property is only read when the project starts. To set the subsurface scattering scale at runtime, call [method RenderingServer.sub_surface_scattering_set_scale] instead.
 *
*/
"rendering/environment/subsurface_scattering/subsurface_scattering_scale": float;

/** Enables filtering of the volumetric fog effect prior to integration. This substantially blurs the fog which reduces fine details but also smooths out harsh edges and aliasing artifacts. Disable when more detail is required. */
"rendering/environment/volumetric_fog/use_filter": int;

/** Number of slices to use along the depth of the froxel buffer for volumetric fog. A lower number will be more efficient but may result in artifacts appearing during camera movement. See also [member Environment.volumetric_fog_length]. */
"rendering/environment/volumetric_fog/volume_depth": int;

/** Base size used to determine size of froxel buffer in the camera X-axis and Y-axis. The final size is scaled by the aspect ratio of the screen, so actual values may differ from what is set. Set a larger size for more detailed fog, set a smaller size for better performance. */
"rendering/environment/volumetric_fog/volume_size": int;

/** Sets the driver to be used by the renderer when using the Compatibility renderer. This property can not be edited directly, instead, set the driver using the platform-specific overrides. */
"rendering/gl_compatibility/driver": string;

/** Android override for [member rendering/gl_compatibility/driver]. */
"rendering/gl_compatibility/driver_android": string;

/** iOS override for [member rendering/gl_compatibility/driver]. */
"rendering/gl_compatibility/driver_ios": string;

/** LinuxBSD override for [member rendering/gl_compatibility/driver]. */
"rendering/gl_compatibility/driver_linuxbsd": string;

/** macOS override for [member rendering/gl_compatibility/driver]. */
"rendering/gl_compatibility/driver_macos": string;

/** Web override for [member rendering/gl_compatibility/driver]. */
"rendering/gl_compatibility/driver_web": string;

/** Windows override for [member rendering/gl_compatibility/driver]. */
"rendering/gl_compatibility/driver_windows": string;

/**
 * If `true`, the compatibility renderer will fall back to ANGLE if native OpenGL is not supported or the device is listed in [member rendering/gl_compatibility/force_angle_on_devices].
 *
 * **Note:** This setting is implemented only on Windows.
 *
*/
"rendering/gl_compatibility/fallback_to_angle": boolean;

/**
 * If `true`, the compatibility renderer will fall back to OpenGLES if desktop OpenGL is not supported.
 *
 * **Note:** This setting is implemented only on Linux/X11.
 *
*/
"rendering/gl_compatibility/fallback_to_gles": boolean;

/**
 * If `true`, the compatibility renderer will fall back to native OpenGL if ANGLE over Metal is not supported.
 *
 * **Note:** This setting is implemented only on macOS.
 *
*/
"rendering/gl_compatibility/fallback_to_native": boolean;

/**
 * An [Array] of devices which should always use the ANGLE renderer.
 *
 * Each entry is a [Dictionary] with the following keys: `vendor` and `name`. `name` can be set to `*` to add all devices with the specified `vendor`.
 *
 * **Note:** This setting is implemented only on Windows.
 *
*/
"rendering/gl_compatibility/force_angle_on_devices": any[];

/** Maximum number of canvas items commands that can be drawn in a single viewport update. If more render commands are issued they will be ignored. Decreasing this limit may improve performance on bandwidth limited devices. Increase this limit if you find that not all objects are being drawn in a frame. */
"rendering/gl_compatibility/item_buffer_size": int;

/**
 * If `true`, disables the threaded optimization feature from the NVIDIA drivers, which are known to cause stuttering in most OpenGL applications.
 *
 * **Note:** This setting only works on Windows, as threaded optimization is disabled by default on other platforms.
 *
*/
"rendering/gl_compatibility/nvidia_disable_threaded_optimization": boolean;

/**
 * If `true`, renders [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) buffers at halved resolution (e.g. 960×540 when the viewport size is 1920×1080). This improves performance significantly when VoxelGI or SDFGI is enabled, at the cost of artifacts that may be visible on polygon edges. The loss in quality becomes less noticeable as the viewport resolution increases. [LightmapGI] rendering is not affected by this setting.
 *
 * **Note:** This property is only read when the project starts. To set half-resolution GI at run-time, call [method RenderingServer.gi_set_use_half_resolution] instead.
 *
*/
"rendering/global_illumination/gi/use_half_resolution": boolean;

/**
 * The number of frames to use for converging signed distance field global illumination. Higher values lead to a less noisy result, at the cost of taking a longer time to fully converge. This means the scene's global illumination will be too dark for a longer period of time, especially when the camera moves fast. The actual convergence speed depends on rendered framerate. For example, with the default setting of 30 frames, rendering at 60 FPS will make SDFGI fully converge after 0.5 seconds. See also [member rendering/global_illumination/sdfgi/frames_to_update_lights] and [member rendering/global_illumination/sdfgi/probe_ray_count].
 *
 * **Note:** This property is only read when the project starts. To control SDFGI convergence speed at runtime, call [method RenderingServer.environment_set_sdfgi_frames_to_converge] instead.
 *
*/
"rendering/global_illumination/sdfgi/frames_to_converge": int;

/**
 * The number of frames over which dynamic lights should be updated in signed distance field global illumination. Higher values take more time to update indirect lighting coming from dynamic lights, but result in better performance when many dynamic lights are present. See also [member rendering/global_illumination/sdfgi/frames_to_converge] and [member rendering/global_illumination/sdfgi/probe_ray_count].
 *
 * **Note:** This only affects [Light3D] nodes whose [member Light3D.light_bake_mode] is [constant Light3D.BAKE_DYNAMIC] (which is the default). Consider making non-moving lights use the [constant Light3D.BAKE_STATIC] bake mode to improve performance.
 *
 * **Note:** This property is only read when the project starts. To control SDFGI light update speed at runtime, call [method RenderingServer.environment_set_sdfgi_frames_to_update_light] instead.
 *
*/
"rendering/global_illumination/sdfgi/frames_to_update_lights": int;

/**
 * The number of rays to throw per frame when computing signed distance field global illumination. Higher values lead to a less noisy result, at the cost of performance. See also [member rendering/global_illumination/sdfgi/frames_to_converge] and [member rendering/global_illumination/sdfgi/frames_to_update_lights].
 *
 * **Note:** This property is only read when the project starts. To control SDFGI quality at runtime, call [method RenderingServer.environment_set_sdfgi_ray_count] instead.
 *
*/
"rendering/global_illumination/sdfgi/probe_ray_count": int;

/**
 * The VoxelGI quality to use. High quality leads to more precise lighting and better reflections, but is slower to render. This setting does not affect the baked data and doesn't require baking the [VoxelGI] again to apply.
 *
 * **Note:** This property is only read when the project starts. To control VoxelGI quality at runtime, call [method RenderingServer.voxel_gi_set_quality] instead.
 *
*/
"rendering/global_illumination/voxel_gi/quality": int;

/** The maximum number of rays that can be thrown per pass when baking lightmaps with [LightmapGI]. Depending on the scene, adjusting this value may result in higher GPU utilization when baking lightmaps, leading to faster bake times. */
"rendering/lightmapping/bake_performance/max_rays_per_pass": int;

/** The maximum number of rays that can be thrown per pass when baking dynamic object lighting in [LightmapProbe]s with [LightmapGI]. Depending on the scene, adjusting this value may result in higher GPU utilization when baking lightmaps, leading to faster bake times. */
"rendering/lightmapping/bake_performance/max_rays_per_probe_pass": int;

/** The region size to use when baking lightmaps with [LightmapGI]. */
"rendering/lightmapping/bake_performance/region_size": int;

/** The number of rays to use for baking dynamic object lighting in [LightmapProbe]s when [member LightmapGI.quality] is [constant LightmapGI.BAKE_QUALITY_HIGH]. */
"rendering/lightmapping/bake_quality/high_quality_probe_ray_count": int;

/** The number of rays to use for baking lightmaps with [LightmapGI] when [member LightmapGI.quality] is [constant LightmapGI.BAKE_QUALITY_HIGH]. */
"rendering/lightmapping/bake_quality/high_quality_ray_count": int;

/** The number of rays to use for baking dynamic object lighting in [LightmapProbe]s when [member LightmapGI.quality] is [constant LightmapGI.BAKE_QUALITY_LOW]. */
"rendering/lightmapping/bake_quality/low_quality_probe_ray_count": int;

/** The number of rays to use for baking lightmaps with [LightmapGI] when [member LightmapGI.quality] is [constant LightmapGI.BAKE_QUALITY_LOW]. */
"rendering/lightmapping/bake_quality/low_quality_ray_count": int;

/** The number of rays to use for baking dynamic object lighting in [LightmapProbe]s when [member LightmapGI.quality] is [constant LightmapGI.BAKE_QUALITY_MEDIUM]. */
"rendering/lightmapping/bake_quality/medium_quality_probe_ray_count": int;

/** The number of rays to use for baking lightmaps with [LightmapGI] when [member LightmapGI.quality] is [constant LightmapGI.BAKE_QUALITY_MEDIUM]. */
"rendering/lightmapping/bake_quality/medium_quality_ray_count": int;

/** The number of rays to use for baking dynamic object lighting in [LightmapProbe]s when [member LightmapGI.quality] is [constant LightmapGI.BAKE_QUALITY_ULTRA]. */
"rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count": int;

/** The number of rays to use for baking lightmaps with [LightmapGI] when [member LightmapGI.quality] is [constant LightmapGI.BAKE_QUALITY_ULTRA]. */
"rendering/lightmapping/bake_quality/ultra_quality_ray_count": int;

/**
 * Denoiser tool used for denoising lightmaps.
 *
 * Using [url=https://www.openimagedenoise.org/]OpenImageDenoise[/url] (OIDN) requires configuring a path to an OIDN executable in the editor settings at [member EditorSettings.filesystem/tools/oidn/oidn_denoise_path]. OIDN can be downloaded from [url=https://www.openimagedenoise.org/downloads.html]OpenImageDenoise's downloads page[/url].
 *
 * OIDN will use GPU acceleration when available. Unlike JNLM which uses compute shaders for acceleration, OIDN uses vendor-specific acceleration methods. For GPU acceleration to be available, the following libraries must be installed on the system depending on your GPU:
 *
 * - NVIDIA GPUs: CUDA libraries
 *
 * - AMD GPUs: HIP libraries
 *
 * - Intel GPUs: SYCL libraries
 *
 * If no GPU acceleration is configured on the system, multi-threaded CPU-based denoising will be performed instead. This CPU-based denoising is significantly slower than the JNLM denoiser in most cases.
 *
*/
"rendering/lightmapping/denoising/denoiser": int;

/** The texel_size that is used to calculate the [member Mesh.lightmap_size_hint] on [PrimitiveMesh] resources if [member PrimitiveMesh.add_uv2] is enabled. */
"rendering/lightmapping/primitive_meshes/texel_size": float;

/** The framerate-independent update speed when representing dynamic object lighting from [LightmapProbe]s. Higher values make dynamic object lighting update faster. Higher values can prevent fast-moving objects from having "outdated" indirect lighting displayed on them, at the cost of possible flickering when an object moves from a bright area to a shaded area. */
"rendering/lightmapping/probe_capture/update_speed": float;

/** Use 16 bits for the directional shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices. */
"rendering/lights_and_shadows/directional_shadow/16_bits": boolean;

/** The directional shadow's size in pixels. Higher values will result in sharper shadows, at the cost of performance. The value is rounded up to the nearest power of 2. */
"rendering/lights_and_shadows/directional_shadow/size": int;

/** Lower-end override for [member rendering/lights_and_shadows/directional_shadow/size] on mobile devices, due to performance concerns or driver support. */
"rendering/lights_and_shadows/directional_shadow/size_mobile": int;

/**
 * Quality setting for shadows cast by [DirectionalLight3D]s. Higher quality settings use more samples when reading from shadow maps and are thus slower. Low quality settings may result in shadows looking grainy.
 *
 * **Note:** The Soft Very Low setting will automatically multiply **constant** shadow blur by 0.75x to reduce the amount of noise visible. This automatic blur change only affects the constant blur factor defined in [member Light3D.shadow_blur], not the variable blur performed by [DirectionalLight3D]s' [member Light3D.light_angular_distance].
 *
 * **Note:** The Soft High and Soft Ultra settings will automatically multiply **constant** shadow blur by 1.5× and 2× respectively to make better use of the increased sample count. This increased blur also improves stability of dynamic object shadows.
 *
*/
"rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality": int;

/** Lower-end override for [member rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality] on mobile devices, due to performance concerns or driver support. */
"rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality_mobile": int;

/** Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices. */
"rendering/lights_and_shadows/positional_shadow/atlas_16_bits": boolean;

/** Subdivision quadrant size for shadow mapping. See shadow mapping documentation. */
"rendering/lights_and_shadows/positional_shadow/atlas_quadrant_0_subdiv": int;

/** Subdivision quadrant size for shadow mapping. See shadow mapping documentation. */
"rendering/lights_and_shadows/positional_shadow/atlas_quadrant_1_subdiv": int;

/** Subdivision quadrant size for shadow mapping. See shadow mapping documentation. */
"rendering/lights_and_shadows/positional_shadow/atlas_quadrant_2_subdiv": int;

/** Subdivision quadrant size for shadow mapping. See shadow mapping documentation. */
"rendering/lights_and_shadows/positional_shadow/atlas_quadrant_3_subdiv": int;

/** Size for shadow atlas (used for OmniLights and SpotLights). See documentation. */
"rendering/lights_and_shadows/positional_shadow/atlas_size": int;

/** Lower-end override for [member rendering/lights_and_shadows/positional_shadow/atlas_size] on mobile devices, due to performance concerns or driver support. */
"rendering/lights_and_shadows/positional_shadow/atlas_size_mobile": int;

/**
 * Quality setting for shadows cast by [OmniLight3D]s and [SpotLight3D]s. Higher quality settings use more samples when reading from shadow maps and are thus slower. Low quality settings may result in shadows looking grainy.
 *
 * **Note:** The Soft Very Low setting will automatically multiply **constant** shadow blur by 0.75x to reduce the amount of noise visible. This automatic blur change only affects the constant blur factor defined in [member Light3D.shadow_blur], not the variable blur performed by [DirectionalLight3D]s' [member Light3D.light_angular_distance].
 *
 * **Note:** The Soft High and Soft Ultra settings will automatically multiply shadow blur by 1.5× and 2× respectively to make better use of the increased sample count. This increased blur also improves stability of dynamic object shadows.
 *
*/
"rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality": int;

/** Lower-end override for [member rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality] on mobile devices, due to performance concerns or driver support. */
"rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality_mobile": int;

/** Enables the use of physically based units for light sources. Physically based units tend to be much larger than the arbitrary units used by Godot, but they can be used to match lighting within Godot to real-world lighting. Due to the large dynamic range of lighting conditions present in nature, Godot bakes exposure into the various lighting quantities before rendering. Most light sources bake exposure automatically at run time based on the active [CameraAttributes] resource, but [LightmapGI] and [VoxelGI] require a [CameraAttributes] resource to be set at bake time to reduce the dynamic range. At run time, Godot will automatically reconcile the baked exposure with the active exposure to ensure lighting remains consistent. */
"rendering/lights_and_shadows/use_physical_light_units": boolean;

/**
 * The maximum number of clustered elements ([OmniLight3D] + [SpotLight3D] + [Decal] + [ReflectionProbe]) that can be rendered at once in the camera view. If there are more clustered elements present in the camera view, some of them will not be rendered (leading to pop-in during camera movement). Enabling distance fade on lights and decals ([member Light3D.distance_fade_enabled], [member Decal.distance_fade_enabled]) can help avoid reaching this limit.
 *
 * Decreasing this value may improve GPU performance on certain setups, even if the maximum number of clustered elements is never reached in the project.
 *
 * **Note:** This setting is only effective when using the Forward+ rendering method, not Mobile and Compatibility.
 *
*/
"rendering/limits/cluster_builder/max_clustered_elements": float;



/**
 * Max number of omnilights and spotlights renderable per object. At the default value of 8, this means that each surface can be affected by up to 8 omnilights and 8 spotlights. This is further limited by hardware support and [member rendering/limits/opengl/max_renderable_lights]. Setting this low will slightly reduce memory usage, may decrease shader compile times, and may result in faster rendering on low-end, mobile, or web devices.
 *
 * **Note:** This setting is only effective when using the Compatibility rendering method, not Forward+ and Mobile.
 *
*/
"rendering/limits/opengl/max_lights_per_object": int;

/**
 * Max number of elements renderable in a frame. If more elements than this are visible per frame, they will not be drawn. Keep in mind elements refer to mesh surfaces and not meshes themselves. Setting this low will slightly reduce memory usage and may decrease shader compile times, particularly on web. For most uses, the default value is suitable, but consider lowering as much as possible on web export.
 *
 * **Note:** This setting is only effective when using the Compatibility rendering method, not Forward+ and Mobile.
 *
*/
"rendering/limits/opengl/max_renderable_elements": int;

/**
 * Max number of positional lights renderable in a frame. If more lights than this number are used, they will be ignored. Setting this low will slightly reduce memory usage and may decrease shader compile times, particularly on web. For most uses, the default value is suitable, but consider lowering as much as possible on web export.
 *
 * **Note:** This setting is only effective when using the Compatibility rendering method, not Forward+ and Mobile.
 *
*/
"rendering/limits/opengl/max_renderable_lights": int;




/**
 * The automatic LOD bias to use for meshes rendered within the [ReflectionProbe]. Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member rendering/mesh_lod/lod_change/threshold_pixels] to improve performance at the cost of geometry detail.
 *
 * **Note:** [member rendering/mesh_lod/lod_change/threshold_pixels] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).
 *
 * **Note:** This property is only read when the project starts. To adjust the automatic LOD threshold at runtime, set [member Viewport.mesh_lod_threshold] on the root [Viewport].
 *
*/
"rendering/mesh_lod/lod_change/threshold_pixels": float;

/**
 * The [url=https://en.wikipedia.org/wiki/Bounding_volume_hierarchy]Bounding Volume Hierarchy[/url] quality to use when rendering the occlusion culling buffer. Higher values will result in more accurate occlusion culling, at the cost of higher CPU usage. See also [member rendering/occlusion_culling/occlusion_rays_per_thread].
 *
 * **Note:** This property is only read when the project starts. To adjust the BVH build quality at runtime, use [method RenderingServer.viewport_set_occlusion_culling_build_quality].
 *
*/
"rendering/occlusion_culling/bvh_build_quality": int;

/**
 * The number of occlusion rays traced per CPU thread. Higher values will result in more accurate occlusion culling, at the cost of higher CPU usage. The occlusion culling buffer's pixel count is roughly equal to `occlusion_rays_per_thread * number_of_logical_cpu_cores`, so it will depend on the system's CPU. Therefore, CPUs with fewer cores will use a lower resolution to attempt keeping performance costs even across devices. See also [member rendering/occlusion_culling/bvh_build_quality].
 *
 * **Note:** This property is only read when the project starts. To adjust the number of occlusion rays traced per thread at runtime, use [method RenderingServer.viewport_set_occlusion_rays_per_thread].
 *
*/
"rendering/occlusion_culling/occlusion_rays_per_thread": int;

/**
 * If `true`, [OccluderInstance3D] nodes will be usable for occlusion culling in 3D in the root viewport. In custom viewports, [member Viewport.use_occlusion_culling] must be set to `true` instead.
 *
 * **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it. Large open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.
 *
 * **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.
 *
*/
"rendering/occlusion_culling/use_occlusion_culling": boolean;

/** Number of cubemaps to store in the reflection atlas. The number of [ReflectionProbe]s in a scene will be limited by this amount. A higher number requires more VRAM. */
"rendering/reflections/reflection_atlas/reflection_count": int;

/** Size of cubemap faces for [ReflectionProbe]s. A higher number requires more VRAM and may make reflection probe updating slower. */
"rendering/reflections/reflection_atlas/reflection_size": int;

/** Lower-end override for [member rendering/reflections/reflection_atlas/reflection_size] on mobile devices, due to performance concerns or driver support. */
"rendering/reflections/reflection_atlas/reflection_size_mobile": int;

/** Use a higher quality variant of the fast filtering algorithm. Significantly slower than using default quality, but results in smoother reflections. Should only be used when the scene is especially detailed. */
"rendering/reflections/sky_reflections/fast_filter_high_quality": boolean;

/** Sets the number of samples to take when using importance sampling for [Sky]s and [ReflectionProbe]s. A higher value will result in smoother, higher quality reflections, but increases time to calculate radiance maps. In general, fewer samples are needed for simpler, low dynamic range environments while more samples are needed for HDR environments and environments with a high level of detail. */
"rendering/reflections/sky_reflections/ggx_samples": int;

/** Lower-end override for [member rendering/reflections/sky_reflections/ggx_samples] on mobile devices, due to performance concerns or driver support. */
"rendering/reflections/sky_reflections/ggx_samples_mobile": int;

/** Limits the number of layers to use in radiance maps when using importance sampling. A lower number will be slightly faster and take up less VRAM. */
"rendering/reflections/sky_reflections/roughness_layers": int;

/** If [code]true[/code], uses texture arrays instead of mipmaps for reflection probes and panorama backgrounds (sky). This reduces jitter noise and upscaling artifacts on reflections, but is significantly slower to compute and uses [member rendering/reflections/sky_reflections/roughness_layers] times more memory. */
"rendering/reflections/sky_reflections/texture_array_reflections": boolean;

/** Lower-end override for [member rendering/reflections/sky_reflections/texture_array_reflections] on mobile devices, due to performance concerns or driver support. */
"rendering/reflections/sky_reflections/texture_array_reflections_mobile": boolean;

/**
 * Sets the renderer that will be used by the project. Options are:
 *
 * **Forward Plus**: High-end renderer designed for Desktop devices. Has a higher base overhead, but scales well with complex scenes. Not suitable for older devices or mobile.
 *
 * **Mobile**: Modern renderer designed for mobile devices. Has a lower base overhead than Forward Plus, but does not scale as well to large scenes with many elements.
 *
 * **GL Compatibility**: Low-end renderer designed for older devices. Based on the limitations of the OpenGL 3.3/ OpenGL ES 3.0 / WebGL 2 APIs.
 *
*/
"rendering/renderer/rendering_method": string;

/** Override for [member rendering/renderer/rendering_method] on mobile devices. */
"rendering/renderer/rendering_method_mobile": string;

/** Override for [member rendering/renderer/rendering_method] on web. */
"rendering/renderer/rendering_method_web": string;

/** Sets the driver to be used by the renderer when using a RenderingDevice-based renderer like the clustered renderer or the mobile renderer. This property can not be edited directly, instead, set the driver using the platform-specific overrides. */
"rendering/rendering_device/driver": string;

/** Android override for [member rendering/rendering_device/driver]. */
"rendering/rendering_device/driver_android": string;

/** iOS override for [member rendering/rendering_device/driver]. */
"rendering/rendering_device/driver_ios": string;

/** LinuxBSD override for [member rendering/rendering_device/driver]. */
"rendering/rendering_device/driver_linuxbsd": string;

/** macOS override for [member rendering/rendering_device/driver]. */
"rendering/rendering_device/driver_macos": string;

/** Windows override for [member rendering/rendering_device/driver]. */
"rendering/rendering_device/driver_windows": string;

/** Determines at which interval pipeline cache is saved to disk. The lower the value, the more often it is saved. */
"rendering/rendering_device/pipeline_cache/save_chunk_size_mb": float;





/** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference. */
"rendering/scaling_3d/fsr_sharpness": float;

/**
 * Sets the scaling 3D mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially-aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. On particularly low-end GPUs, the added cost of FSR may not be worth it (compared to using bilinear scaling with a slightly higher resolution scale to match performance).
 *
 * **Note:** FSR is only effective when using the Forward+ rendering method, not Mobile or Compatibility. If using an incompatible rendering method, FSR will fall back to bilinear scaling.
 *
*/
"rendering/scaling_3d/mode": int;

/** Scales the 3D render buffer based on the viewport size uses an image filter specified in [member rendering/scaling_3d/mode] to scale the output image to the full viewport size. Values lower than [code]1.0[/code] can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than [code]1.0[/code] are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [member rendering/anti_aliasing/quality/msaa_3d] for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons. */
"rendering/scaling_3d/scale": float;


/** Enable the shader cache, which stores compiled shaders to disk to prevent stuttering from shader compilation the next time the shader is needed. */
"rendering/shader_compiler/shader_cache/enabled": boolean;




/** If [code]true[/code], uses faster but lower-quality Lambert material lighting model instead of Burley. */
"rendering/shading/overrides/force_lambert_over_burley": boolean;

/** Lower-end override for [member rendering/shading/overrides/force_lambert_over_burley] on mobile devices, due to performance concerns or driver support. */
"rendering/shading/overrides/force_lambert_over_burley_mobile": boolean;

/**
 * If `true`, forces vertex shading for all rendering. This can increase performance a lot, but also reduces quality immensely. Can be used to optimize performance on low-end mobile devices.
 *
 * **Note:** This setting currently has no effect, as vertex shading is not implemented yet.
 *
*/
"rendering/shading/overrides/force_vertex_shading": boolean;

/**
 * Lower-end override for [member rendering/shading/overrides/force_vertex_shading] on mobile devices, due to performance concerns or driver support.
 *
 * **Note:** This setting currently has no effect, as vertex shading is not implemented yet.
 *
*/
"rendering/shading/overrides/force_vertex_shading_mobile": boolean;

/** The default texture filtering mode to use on [CanvasItem]s. */
"rendering/textures/canvas_textures/default_texture_filter": int;

/** The default texture repeating mode to use on [CanvasItem]s. */
"rendering/textures/canvas_textures/default_texture_repeat": int;

/** The filtering quality to use for [Decal] nodes. When using one of the anisotropic filtering modes, the anisotropic filtering level is controlled by [member rendering/textures/default_filters/anisotropic_filtering_level]. */
"rendering/textures/decals/filter": int;

/**
 * Sets the maximum number of samples to take when using anisotropic filtering on textures (as a power of two). A higher sample count will result in sharper textures at oblique angles, but is more expensive to compute. A value of `0` forcibly disables anisotropic filtering, even on materials where it is enabled.
 *
 * The anisotropic filtering level also affects decals and light projectors if they are configured to use anisotropic filtering. See [member rendering/textures/decals/filter] and [member rendering/textures/light_projectors/filter].
 *
 * **Note:** For performance reasons, anisotropic filtering **is not enabled by default** on 2D and 3D materials. For this setting to have an effect in 3D, set [member BaseMaterial3D.texture_filter] to [constant BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant BaseMaterial3D.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on materials. For this setting to have an effect in 2D, set [member CanvasItem.texture_filter] to [constant CanvasItem.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant CanvasItem.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on the [CanvasItem] node displaying the texture (or in [CanvasTexture]). However, anisotropic filtering is rarely useful in 2D, so only enable it for textures in 2D if it makes a meaningful visual difference.
 *
 * **Note:** This property is only read when the project starts. There is currently no way to change this setting at run-time.
 *
*/
"rendering/textures/default_filters/anisotropic_filtering_level": int;

/**
 * Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).
 *
 * Enabling temporal antialiasing ([member rendering/anti_aliasing/quality/use_taa]) will automatically apply a `-0.5` offset to this value, while enabling FXAA ([member rendering/anti_aliasing/quality/screen_space_aa]) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.
 *
 * **Note:** If [member rendering/scaling_3d/scale] is lower than `1.0` (exclusive), [member rendering/textures/default_filters/texture_mipmap_bias] is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.
 *
*/
"rendering/textures/default_filters/texture_mipmap_bias": float;

/**
 * If `true`, uses nearest-neighbor mipmap filtering when using mipmaps (also called "bilinear filtering"), which will result in visible seams appearing between mipmap stages. This may increase performance in mobile as less memory bandwidth is used. If `false`, linear mipmap filtering (also called "trilinear filtering") is used.
 *
 * **Note:** This property is only read when the project starts. There is currently no way to change this setting at run-time.
 *
*/
"rendering/textures/default_filters/use_nearest_mipmap_filter": boolean;

/** The filtering quality to use for [OmniLight3D] and [SpotLight3D] projectors. When using one of the anisotropic filtering modes, the anisotropic filtering level is controlled by [member rendering/textures/default_filters/anisotropic_filtering_level]. */
"rendering/textures/light_projectors/filter": int;

/** If [code]true[/code], the texture importer will import lossless textures using the PNG format. Otherwise, it will default to using WebP. */
"rendering/textures/lossless_compression/force_png": boolean;

/**
 * If `true`, the texture importer will import VRAM-compressed textures using the Ericsson Texture Compression 2 algorithm for lower quality textures and normal maps and Adaptable Scalable Texture Compression algorithm for high quality textures (in 4x4 block size).
 *
 * **Note:** This setting is an override. The texture importer will always import the format the host platform needs, even if this is set to `false`.
 *
 * **Note:** Changing this setting does **not** impact textures that were already imported before. To make this setting apply to textures that were already imported, exit the editor, remove the `.godot/imported/` folder located inside the project folder then restart the editor (see [member application/config/use_hidden_project_data_directory]).
 *
*/
"rendering/textures/vram_compression/import_etc2_astc": boolean;

/**
 * If `true`, the texture importer will import VRAM-compressed textures using the S3 Texture Compression algorithm (DXT1-5) for lower quality textures and the BPTC algorithm (BC6H and BC7) for high quality textures. This algorithm is only supported on PC desktop platforms and consoles.
 *
 * **Note:** This setting is an override. The texture importer will always import the format the host platform needs, even if this is set to `false`.
 *
 * **Note:** Changing this setting does **not** impact textures that were already imported before. To make this setting apply to textures that were already imported, exit the editor, remove the `.godot/imported/` folder located inside the project folder then restart the editor (see [member application/config/use_hidden_project_data_directory]).
 *
*/
"rendering/textures/vram_compression/import_s3tc_bptc": boolean;

/** The default compression method for WebP. Affects both lossy and lossless WebP. A higher value results in smaller files at the cost of compression speed. Decompression speed is mostly unaffected by the compression method. Supported values are 0 to 6. Note that compression methods above 4 are very slow and offer very little savings. */
"rendering/textures/webp_compression/compression_method": int;

/** The default compression factor for lossless WebP. Decompression speed is mostly unaffected by the compression factor. Supported values are 0 to 100. */
"rendering/textures/webp_compression/lossless_compression_factor": float;

/** If [code]true[/code], enables [member Viewport.use_hdr_2d] on the root viewport. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow). */
"rendering/viewport/hdr_2d": boolean;

/** If [code]true[/code], enables [member Viewport.transparent_bg] on the root viewport. This allows per-pixel transparency to be effective after also enabling [member display/window/size/transparent] and [member display/window/per_pixel_transparency/allowed]. */
"rendering/viewport/transparent_background": boolean;

/** Set the default Variable Rate Shading (VRS) mode for the main viewport. See [member Viewport.vrs_mode] to change this at runtime, and [enum Viewport.VRSMode] for possible values. */
"rendering/vrs/mode": int;

/**
 * If [member rendering/vrs/mode] is set to **Texture**, this is the path to default texture loaded as the VRS image.
 *
 * The texture **must** use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:
 *
 * @example 
 * 
 * - 1x1 = rgb(0, 0, 0)     - #000000
 * - 1x2 = rgb(0, 85, 0)    - #005500
 * - 2x1 = rgb(85, 0, 0)    - #550000
 * - 2x2 = rgb(85, 85, 0)   - #555500
 * - 2x4 = rgb(85, 170, 0)  - #55aa00
 * - 4x2 = rgb(170, 85, 0)  - #aa5500
 * - 4x4 = rgb(170, 170, 0) - #aaaa00
 * - 4x8 = rgb(170, 255, 0) - #aaff00 - Not supported on most hardware
 * - 8x4 = rgb(255, 170, 0) - #ffaa00 - Not supported on most hardware
 * - 8x8 = rgb(255, 255, 0) - #ffff00 - Not supported on most hardware
 * @summary 
 * 
 *
*/
"rendering/vrs/texture": string;


/** Maximum number of threads to be used by [WorkerThreadPool]. Value of [code]-1[/code] means no limit. */
"threading/worker_pool/max_threads": int;


/** Action map configuration to load by default. */
"xr/openxr/default_action_map": string;

/** If [code]true[/code] Godot will setup and initialize OpenXR on startup. */
"xr/openxr/enabled": boolean;

/** Specify how OpenXR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor. */
"xr/openxr/environment_blend_mode": int;

/** Specify whether to enable eye tracking for this project. Depending on the platform, additional export configuration may be needed. */
"xr/openxr/extensions/eye_gaze_interaction": boolean;

/** If true we enable the hand tracking extension if available. */
"xr/openxr/extensions/hand_tracking": boolean;

/** Specify whether OpenXR should be configured for an HMD or a hand held device. */
"xr/openxr/form_factor": int;

/** If true and foveation is supported, will automatically adjust foveation level based on framerate up to the level set on [member xr/openxr/foveation_level]. */
"xr/openxr/foveation_dynamic": boolean;

/** Applied foveation level if supported: 0 = off, 1 = low, 2 = medium, 3 = high. */
"xr/openxr/foveation_level": int;

/** Specify the default reference space. */
"xr/openxr/reference_space": int;

/** If [code]true[/code], Godot will display an alert modal when OpenXR initialization fails on startup. */
"xr/openxr/startup_alert": boolean;

/** If [code]true[/code], OpenXR will manage the depth buffer and use the depth buffer for advanced reprojection provided this is supported by the XR runtime. Note that some rendering features in Godot can't be used with this feature. */
"xr/openxr/submit_depth_buffer": boolean;

/** Specify the view configuration with which to configure OpenXR setting up either Mono or Stereo rendering. */
"xr/openxr/view_configuration": int;

/** If [code]true[/code], Godot will compile shaders required for XR. */
"xr/shaders/enabled": boolean;

/**
 * Adds a custom property info to a property. The dictionary must contain:
 *
 * - `"name"`: [String] (the property's name)
 *
 * - `"type"`: [int] (see [enum Variant.Type])
 *
 * - optionally `"hint"`: [int] (see [enum PropertyHint]) and `"hint_string"`: [String]
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * ProjectSettings.set("category/property_name", 0)
 * var property_info = {
 *     "name": "category/property_name",
 *     "type": TYPE_INT,
 *     "hint": PROPERTY_HINT_ENUM,
 *     "hint_string": "one,two,three"
 * }
 * ProjectSettings.add_property_info(property_info)
 * 
 * 
 * ProjectSettings.Singleton.Set("category/property_name", 0);
 * var propertyInfo = new Godot.Collections.Dictionary
 * {
 *     {"name", "category/propertyName"},
 *     {"type", (int)Variant.Type.Int},
 *     {"hint", (int)PropertyHint.Enum},
 *     {"hint_string", "one,two,three"},
 * };
 * ProjectSettings.AddPropertyInfo(propertyInfo);
 * 
 * @summary 
 * 
 *
*/
add_property_info(): void;

/** Clears the whole configuration (not recommended, may break things). */
clear(): void;

/**
 * Returns an [Array] of registered global classes. Each global class is represented as a [Dictionary] that contains the following entries:
 *
 * - `base` is a name of the base class;
 *
 * - `class` is a name of the registered global class;
 *
 * - `icon` is a path to a custom icon of the global class, if it has any;
 *
 * - `language` is a name of a programming language in which the global class is written;
 *
 * - `path` is a path to a file containing the global class.
 *
 * **Note:** Both the script and the icon paths are local to the project filesystem, i.e. they start with `res://`.
 *
*/
get_global_class_list(): Dictionary[];

/** Returns the order of a configuration value (influences when saved to the config file). */
get_order(): int;

/**
 * Returns the value of the setting identified by [param name]. If the setting doesn't exist and [param default_value] is specified, the value of [param default_value] is returned. Otherwise, `null` is returned.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * print(ProjectSettings.get_setting("application/config/name"))
 * print(ProjectSettings.get_setting("application/config/custom_description", "No description specified."))
 * 
 * 
 * GD.Print(ProjectSettings.GetSetting("application/config/name"));
 * GD.Print(ProjectSettings.GetSetting("application/config/custom_description", "No description specified."));
 * 
 * @summary 
 * 
 *
 * **Note:** This method doesn't take potential feature overrides into account automatically. Use [method get_setting_with_override] to handle seamlessly.
 *
*/
get_setting(): any;

/**
 * Similar to [method get_setting], but applies feature tag overrides if any exists and is valid.
 *
 * **Example:**
 *
 * If the following setting override exists "application/config/name.windows", and the following code is executed:
 *
 * @example 
 * 
 * 
 * print(ProjectSettings.get_setting_with_override("application/config/name"))
 * 
 * 
 * GD.Print(ProjectSettings.GetSettingWithOverride("application/config/name"));
 * 
 * @summary 
 * 
 *
 * Then the overridden setting will be returned instead if the project is running on the **Windows** operating system.
 *
*/
get_setting_with_override(): any;

/**
 * Returns the absolute, native OS path corresponding to the localized [param path] (starting with `res://` or `user://`). The returned path will vary depending on the operating system and user preferences. See [url=$DOCS_URL/tutorials/io/data_paths.html]File paths in Godot projects[/url] to see what those paths convert to. See also [method localize_path].
 *
 * **Note:** [method globalize_path] with `res://` will not work in an exported project. Instead, prepend the executable's base directory to the path when running from an exported project:
 *
 * @example 
 * 
 * var path = ""
 * if OS.has_feature("editor"):
 *     # Running from an editor binary.
 *     # `path` will contain the absolute path to `hello.txt` located in the project root.
 *     path = ProjectSettings.globalize_path("res://hello.txt")
 * else:
 *     # Running from an exported project.
 *     # `path` will contain the absolute path to `hello.txt` next to the executable.
 *     # This is *not* identical to using `ProjectSettings.globalize_path()` with a `res://` path,
 *     # but is close enough in spirit.
 *     path = OS.get_executable_path().get_base_dir().path_join("hello.txt")
 * @summary 
 * 
 *
*/
globalize_path(): string;

/** Returns [code]true[/code] if a configuration value is present. */
has_setting(): boolean;

/**
 * Loads the contents of the .pck or .zip file specified by [param pack] into the resource filesystem (`res://`). Returns `true` on success.
 *
 * **Note:** If a file from [param pack] shares the same path as a file already in the resource filesystem, any attempts to load that file will use the file from [param pack] unless [param replace_files] is set to `false`.
 *
 * **Note:** The optional [param offset] parameter can be used to specify the offset in bytes to the start of the resource pack. This is only supported for .pck files.
 *
*/
load_resource_pack(): boolean;

/** Returns the localized path (starting with [code]res://[/code]) corresponding to the absolute, native OS [param path]. See also [method globalize_path]. */
localize_path(): string;

/**
 * Saves the configuration to the `project.godot` file.
 *
 * **Note:** This method is intended to be used by editor plugins, as modified [ProjectSettings] can't be loaded back in the running app. If you want to change project settings in exported projects, use [method save_custom] to save `override.cfg` file.
 *
*/
save(): int;

/** Saves the configuration to a custom file. The file extension must be [code].godot[/code] (to save in text-based [ConfigFile] format) or [code].binary[/code] (to save in binary format). You can also save [code]override.cfg[/code] file, which is also text, but can be used in exported projects unlike other formats. */
save_custom(): int;

/** Defines if the specified setting is considered basic or advanced. Basic settings will always be shown in the project settings. Advanced settings will only be shown if the user enables the "Advanced Settings" option. */
set_as_basic(): void;

/** Defines if the specified setting is considered internal. An internal setting won't show up in the Project Settings dialog. This is mostly useful for addons that need to store their own internal settings without exposing them directly to the user. */
set_as_internal(): void;

/** Sets the specified setting's initial value. This is the value the setting reverts to. */
set_initial_value(): void;

/** Sets the order of a configuration value (influences when saved to the config file). */
set_order(): void;

/**
 * Sets whether a setting requires restarting the editor to properly take effect.
 *
 * **Note:** This is just a hint to display to the user that the editor must be restarted for changes to take effect. Enabling [method set_restart_if_changed] does **not** delay the setting being set when changed.
 *
*/
set_restart_if_changed(): void;

/**
 * Sets the value of a setting.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * ProjectSettings.set_setting("application/config/name", "Example")
 * 
 * 
 * ProjectSettings.SetSetting("application/config/name", "Example");
 * 
 * @summary 
 * 
 *
 * This can also be used to erase custom project settings. To do this change the setting value to `null`.
 *
*/
set_setting(): void;

  connect<T extends SignalsOf<ProjectSettingsClass>>(signal: T, method: SignalFunction<ProjectSettingsClass[T]>): number;





/**
 * Emitted when any setting is changed, up to once per process frame.
 *
*/
$settings_changed: Signal<() => void>

}

