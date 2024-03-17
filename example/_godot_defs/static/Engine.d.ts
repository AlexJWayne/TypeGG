
/**
 * The [Engine] singleton allows you to query and modify the project's run-time parameters, such as frames per second, time scale, and others.
 *
*/
declare class EngineClass extends Object  {

  
/**
 * The [Engine] singleton allows you to query and modify the project's run-time parameters, such as frames per second, time scale, and others.
 *
*/
  new(): EngineClass; 
  static "new"(): EngineClass 


/**
 * The maximum number of frames per second that can be rendered. A value of `0` means "no limit". The actual number of frames per second may still be below this value if the CPU or GPU cannot keep up with the project logic and rendering.
 *
 * Limiting the FPS can be useful to reduce system power consumption, which reduces heat and noise emissions (and improves battery life on mobile devices).
 *
 * If [member ProjectSettings.display/window/vsync/vsync_mode] is `Enabled` or `Adaptive`, it takes precedence and the forced FPS number cannot exceed the monitor's refresh rate.
 *
 * If [member ProjectSettings.display/window/vsync/vsync_mode] is `Enabled`, on monitors with variable refresh rate enabled (G-Sync/FreeSync), using a FPS limit a few frames lower than the monitor's refresh rate will [url=https://blurbusters.com/howto-low-lag-vsync-on/]reduce input lag while avoiding tearing[/url].
 *
 * If [member ProjectSettings.display/window/vsync/vsync_mode] is `Disabled`, limiting the FPS to a high value that can be consistently reached on the system can reduce input lag compared to an uncapped framerate. Since this works by ensuring the GPU load is lower than 100%, this latency reduction is only effective in GPU-bottlenecked scenarios, not CPU-bottlenecked scenarios.
 *
 * See also [member physics_ticks_per_second] and [member ProjectSettings.application/run/max_fps].
 *
*/
max_fps: int;

/** Controls the maximum number of physics steps that can be simulated each rendered frame. The default value is tuned to avoid "spiral of death" situations where expensive physics simulations trigger more expensive simulations indefinitely. However, the game will appear to slow down if the rendering FPS is less than [code]1 / max_physics_steps_per_frame[/code] of [member physics_ticks_per_second]. This occurs even if [code]delta[/code] is consistently used in physics calculations. To avoid this, increase [member max_physics_steps_per_frame] if you have increased [member physics_ticks_per_second] significantly above its default value. */
max_physics_steps_per_frame: int;

/**
 * Controls how much physics ticks are synchronized with real time. For 0 or less, the ticks are synchronized. Such values are recommended for network games, where clock synchronization matters. Higher values cause higher deviation of the in-game clock and real clock but smooth out framerate jitters. The default value of 0.5 should be fine for most; values above 2 could cause the game to react to dropped frames with a noticeable delay and are not recommended.
 *
 * **Note:** For best results, when using a custom physics interpolation solution, the physics jitter fix should be disabled by setting [member physics_jitter_fix] to `0`.
 *
*/
physics_jitter_fix: float;

/**
 * The number of fixed iterations per second. This controls how often physics simulation and [method Node._physics_process] methods are run. This value should generally always be set to `60` or above, as Godot doesn't interpolate the physics step. As a result, values lower than `60` will look stuttery. This value can be increased to make input more reactive or work around collision tunneling issues, but keep in mind doing so will increase CPU usage. See also [member max_fps] and [member ProjectSettings.physics/common/physics_ticks_per_second].
 *
 * **Note:** Only [member max_physics_steps_per_frame] physics ticks may be simulated per rendered frame at most. If more physics ticks have to be simulated per rendered frame to keep up with rendering, the project will appear to slow down (even if `delta` is used consistently in physics calculations). Therefore, it is recommended to also increase [member max_physics_steps_per_frame] if increasing [member physics_ticks_per_second] significantly above its default value.
 *
*/
physics_ticks_per_second: int;

/**
 * If `false`, stops printing error and warning messages to the console and editor Output log. This can be used to hide error and warning messages during unit test suite runs. This property is equivalent to the [member ProjectSettings.application/run/disable_stderr] project setting.
 *
 * **Warning:** If you set this to `false` anywhere in the project, important error messages may be hidden even if they are emitted from other scripts. If this is set to `false` in a `@tool` script, this will also impact the editor itself. Do **not** report bugs before ensuring error messages are enabled (as they are by default).
 *
 * **Note:** This property does not impact the editor's Errors tab when running a project from the editor.
 *
*/
print_error_messages: boolean;

/** Controls how fast or slow the in-game clock ticks versus the real life one. It defaults to 1.0. A value of 2.0 means the game moves twice as fast as real life, whilst a value of 0.5 means the game moves at half the regular speed. This also affects [Timer] and [SceneTreeTimer] (see [method SceneTree.create_timer] for how to control this). */
time_scale: float;

/**
 * Returns the name of the CPU architecture the Godot binary was built for. Possible return values are `x86_64`, `x86_32`, `arm64`, `arm32`, `rv64`, `riscv`, `ppc64`, `ppc`, `wasm64` and `wasm32`.
 *
 * To detect whether the current CPU architecture is 64-bit, you can use the fact that all 64-bit architecture names have `64` in their name:
 *
 * @example 
 * 
 * 
 * if "64" in Engine.get_architecture_name():
 *     print("Running a 64-bit build of Godot.")
 * else:
 *     print("Running a 32-bit build of Godot.")
 * 
 * 
 * if (Engine.GetArchitectureName().Contains("64"))
 *     GD.Print("Running a 64-bit build of Godot.");
 * else
 *     GD.Print("Running a 32-bit build of Godot.");
 * 
 * @summary 
 * 
 *
 * **Note:** [method get_architecture_name] does **not** return the name of the host CPU architecture. For example, if running an x86_32 Godot binary on a x86_64 system, the returned value will be `x86_32`.
 *
*/
get_architecture_name(): string;

/**
 * Returns engine author information in a Dictionary.
 *
 * `lead_developers`    - Array of Strings, lead developer names
 *
 * `founders`           - Array of Strings, founder names
 *
 * `project_managers`   - Array of Strings, project manager names
 *
 * `developers`         - Array of Strings, developer names
 *
*/
get_author_info(): Dictionary<any, any>;

/**
 * Returns an Array of copyright information Dictionaries.
 *
 * `name`    - String, component name
 *
 * `parts`   - Array of Dictionaries {`files`, `copyright`, `license`} describing subsections of the component
 *
*/
get_copyright_info(): Dictionary[];

/**
 * Returns a Dictionary of Arrays of donor names.
 *
 * {`platinum_sponsors`, `gold_sponsors`, `silver_sponsors`, `bronze_sponsors`, `mini_sponsors`, `gold_donors`, `silver_donors`, `bronze_donors`}
 *
*/
get_donor_info(): Dictionary<any, any>;

/** Returns the total number of frames drawn. On headless platforms, or if the render loop is disabled with [code]--disable-render-loop[/code] via command line, [method get_frames_drawn] always returns [code]0[/code]. See [method get_process_frames]. */
get_frames_drawn(): int;

/** Returns the frames per second of the running game. */
get_frames_per_second(): float;

/** Returns Dictionary of licenses used by Godot and included third party components. */
get_license_info(): Dictionary<any, any>;

/** Returns Godot license text. */
get_license_text(): string;

/** Returns the main loop object (see [MainLoop] and [SceneTree]). */
get_main_loop(): MainLoop;

/**
 * Returns the total number of frames passed since engine initialization which is advanced on each **physics frame**. See also [method get_process_frames].
 *
 * [method get_physics_frames] can be used to run expensive logic less often without relying on a [Timer]:
 *
 * @example 
 * 
 * 
 * func _physics_process(_delta):
 *     if Engine.get_physics_frames() % 2 == 0:
 *         pass  # Run expensive logic only once every 2 physics frames here.
 * 
 * 
 * public override void _PhysicsProcess(double delta)
 * {
 *     base._PhysicsProcess(delta);
 *     if (Engine.GetPhysicsFrames() % 2 == 0)
 *     {
 *         // Run expensive logic only once every 2 physics frames here.
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
get_physics_frames(): int;

/** Returns the fraction through the current physics tick we are at the time of rendering the frame. This can be used to implement fixed timestep interpolation. */
get_physics_interpolation_fraction(): float;

/**
 * Returns the total number of frames passed since engine initialization which is advanced on each **process frame**, regardless of whether the render loop is enabled. See also [method get_frames_drawn] and [method get_physics_frames].
 *
 * [method get_process_frames] can be used to run expensive logic less often without relying on a [Timer]:
 *
 * @example 
 * 
 * 
 * func _process(_delta):
 *     if Engine.get_process_frames() % 2 == 0:
 *         pass  # Run expensive logic only once every 2 process (render) frames here.
 * 
 * 
 * public override void _Process(double delta)
 * {
 *     base._Process(delta);
 *     if (Engine.GetProcessFrames() % 2 == 0)
 *     {
 *         // Run expensive logic only once every 2 physics frames here.
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
get_process_frames(): int;

/** Returns an instance of a [ScriptLanguage] with the given index. */
get_script_language(): ScriptLanguage;

/** Returns the number of available script languages. Use with [method get_script_language]. */
get_script_language_count(): int;

/** Returns a global singleton with given [param name]. Often used for plugins, e.g. GodotPayments. */
get_singleton(): Object;

/** Returns a list of available global singletons. */
get_singleton_list(): PackedStringArray;

/**
 * Returns the current engine version information in a Dictionary.
 *
 * `major`    - Holds the major version number as an int
 *
 * `minor`    - Holds the minor version number as an int
 *
 * `patch`    - Holds the patch version number as an int
 *
 * `hex`      - Holds the full version number encoded as a hexadecimal int with one byte (2 places) per number (see example below)
 *
 * `status`   - Holds the status (e.g. "beta", "rc1", "rc2", ... "stable") as a String
 *
 * `build`    - Holds the build name (e.g. "custom_build") as a String
 *
 * `hash`     - Holds the full Git commit hash as a String
 *
 * `year`     - Holds the year the version was released in as an int
 *
 * `string`   - `major` + `minor` + `patch` + `status` + `build` in a single String
 *
 * The `hex` value is encoded as follows, from left to right: one byte for the major, one byte for the minor, one byte for the patch version. For example, "3.1.12" would be `0x03010C`. **Note:** It's still an int internally, and printing it will give you its decimal representation, which is not particularly meaningful. Use hexadecimal literals for easy version comparisons from code:
 *
 * @example 
 * 
 * 
 * if Engine.get_version_info().hex >= 0x030200:
 *     # Do things specific to version 3.2 or later
 * else:
 *     # Do things specific to versions before 3.2
 * 
 * 
 * if ((int)Engine.GetVersionInfo()["hex"] >= 0x030200)
 * {
 *     // Do things specific to version 3.2 or later
 * }
 * else
 * {
 *     // Do things specific to versions before 3.2
 * }
 * 
 * @summary 
 * 
 *
*/
get_version_info(): Dictionary<any, any>;

/** Returns the path to the [MovieWriter]'s output file, or an empty string if the engine wasn't started in Movie Maker mode. This path can be absolute or relative depending on how the user specified it. */
get_write_movie_path(): string;

/** Returns [code]true[/code] if a singleton with given [param name] exists in global scope. */
has_singleton(): boolean;

/**
 * Returns `true` if the script is currently running inside the editor, `false` otherwise. This is useful for `@tool` scripts to conditionally draw editor helpers, or prevent accidentally running "game" code that would affect the scene state while in the editor:
 *
 * @example 
 * 
 * 
 * if Engine.is_editor_hint():
 *     draw_gizmos()
 * else:
 *     simulate_physics()
 * 
 * 
 * if (Engine.IsEditorHint())
 *     DrawGizmos();
 * else
 *     SimulatePhysics();
 * 
 * @summary 
 * 
 *
 * See [url=$DOCS_URL/tutorials/plugins/running_code_in_the_editor.html]Running code in the editor[/url] in the documentation for more information.
 *
 * **Note:** To detect whether the script is run from an editor **build** (e.g. when pressing [kbd]F5[/kbd]), use [method OS.has_feature] with the `"editor"` argument instead. `OS.has_feature("editor")` will evaluate to `true` both when the code is running in the editor and when running the project from the editor, but it will evaluate to `false` when the code is run from an exported project.
 *
*/
is_editor_hint(): boolean;

/** Returns [code]true[/code] if the game is inside the fixed process and physics phase of the game loop. */
is_in_physics_frame(): boolean;

/**
 * Registers a [ScriptLanguage] instance to be available with `ScriptServer`.
 *
 * Returns:
 *
 * - [constant OK] on success
 *
 * - [constant ERR_UNAVAILABLE] if `ScriptServer` has reached it limit and cannot register any new language
 *
 * - [constant ERR_ALREADY_EXISTS] if `ScriptServer` already contains a language with similar extension/name/type
 *
*/
register_script_language(): int;

/** Registers the given object as a singleton, globally available under [param name]. */
register_singleton(): void;

/**
 * Unregisters the [ScriptLanguage] instance from `ScriptServer`.
 *
 * Returns:
 *
 * - [constant OK] on success
 *
 * - [constant ERR_DOES_NOT_EXIST] if the language is already not registered in `ScriptServer`
 *
*/
unregister_script_language(): int;

/** Unregisters the singleton registered under [param name]. The singleton object is not freed. Only works with user-defined singletons created with [method register_singleton]. */
unregister_singleton(): void;

  connect<T extends SignalsOf<EngineClass>>(signal: T, method: SignalFunction<EngineClass[T]>): number;






}

