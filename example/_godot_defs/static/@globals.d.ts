
declare const load: <T extends AssetPath>(path: T) => AssetType[T];
declare const preload: <T extends AssetPath>(path: T) => AssetType[T];
declare function remotesync(target: any, key: string, descriptor: any): any
declare function remote(target: any, key: string, descriptor: any): any


/** The [AudioServer] singleton. */
declare const AudioServer: AudioServerClass;

/** The [CameraServer] singleton. */
declare const CameraServer: CameraServerClass;

/** The [ClassDB] singleton. */
declare const ClassDB: ClassDBClass;

/** The [DisplayServer] singleton. */
declare const DisplayServer: DisplayServerClass;

/**
 * The [EditorInterface] singleton.
 *
 * **Note:** Only available in editor builds.
 *
*/
declare const EditorInterface: EditorInterfaceClass;

/** The [Engine] singleton. */
declare const Engine: EngineClass;

/** The [EngineDebugger] singleton. */
declare const EngineDebugger: EngineDebuggerClass;

/** The [GDExtensionManager] singleton. */
declare const GDExtensionManager: GDExtensionManagerClass;

/** The [Geometry2D] singleton. */
declare const Geometry2D: Geometry2DClass;

/** The [Geometry3D] singleton. */
declare const Geometry3D: Geometry3DClass;

/** The [GodotSharp] singleton. */
//declare const GodotSharp: GodotSharpClass;

/** The [IP] singleton. */
declare const IP: IPClass;

/** The [Input] singleton. */
declare const Input: InputClass;

/** The [InputMap] singleton. */
declare const InputMap: InputMapClass;

/**
 * The [JavaClassWrapper] singleton.
 *
 * **Note:** Only implemented on Android.
 *
*/
declare const JavaClassWrapper: JavaClassWrapperClass;

/**
 * The [JavaScriptBridge] singleton.
 *
 * **Note:** Only implemented on the Web platform.
 *
*/
declare const JavaScriptBridge: JavaScriptBridgeClass;

/** The [Marshalls] singleton. */
declare const Marshalls: MarshallsClass;

/** The [NavigationMeshGenerator] singleton. */
//declare const NavigationMeshGenerator: NavigationMeshGeneratorClass;

/** The [NavigationServer2D] singleton. */
declare const NavigationServer2D: NavigationServer2DClass;

/** The [NavigationServer3D] singleton. */
declare const NavigationServer3D: NavigationServer3DClass;

/** The [OS] singleton. */
declare const OS: OSClass;

/** The [Performance] singleton. */
declare const Performance: PerformanceClass;

/** The [PhysicsServer2D] singleton. */
declare const PhysicsServer2D: PhysicsServer2DClass;

/** The [PhysicsServer2DManager] singleton. */
declare const PhysicsServer2DManager: PhysicsServer2DManagerClass;

/** The [PhysicsServer3D] singleton. */
declare const PhysicsServer3D: PhysicsServer3DClass;

/** The [PhysicsServer3DManager] singleton. */
declare const PhysicsServer3DManager: PhysicsServer3DManagerClass;

/** The [ProjectSettings] singleton. */
declare const ProjectSettings: ProjectSettingsClass;

/** The [RenderingServer] singleton. */
declare const RenderingServer: RenderingServerClass;

/** The [ResourceLoader] singleton. */
declare const ResourceLoader: ResourceLoaderClass;

/** The [ResourceSaver] singleton. */
declare const ResourceSaver: ResourceSaverClass;

/** The [ResourceUID] singleton. */
declare const ResourceUID: ResourceUIDClass;

/** The [TextServerManager] singleton. */
declare const TextServerManager: TextServerManagerClass;

/** The [ThemeDB] singleton. */
declare const ThemeDB: ThemeDBClass;

/** The [Time] singleton. */
declare const Time: TimeClass;

/** The [TranslationServer] singleton. */
declare const TranslationServer: TranslationServerClass;

/** The [WorkerThreadPool] singleton. */
declare const WorkerThreadPool: WorkerThreadPoolClass;

/** The [XRServer] singleton. */
declare const XRServer: XRServerClass;


    declare enum Side {
      /**
 * Left side, usually used for [Control] or [StyleBox]-derived classes.
 *
*/
SIDE_LEFT = 0,
/**
 * Top side, usually used for [Control] or [StyleBox]-derived classes.
 *
*/
SIDE_TOP = 1,
/**
 * Right side, usually used for [Control] or [StyleBox]-derived classes.
 *
*/
SIDE_RIGHT = 2,
/**
 * Bottom side, usually used for [Control] or [StyleBox]-derived classes.
 *
*/
SIDE_BOTTOM = 3
    }
    

    declare enum Corner {
      /**
 * Top-left corner.
 *
*/
CORNER_TOP_LEFT = 0,
/**
 * Top-right corner.
 *
*/
CORNER_TOP_RIGHT = 1,
/**
 * Bottom-right corner.
 *
*/
CORNER_BOTTOM_RIGHT = 2,
/**
 * Bottom-left corner.
 *
*/
CORNER_BOTTOM_LEFT = 3
    }
    

    declare enum Orientation {
      /**
 * General vertical alignment, usually used for [Separator], [ScrollBar], [Slider], etc.
 *
*/
VERTICAL = 1,
/**
 * General horizontal alignment, usually used for [Separator], [ScrollBar], [Slider], etc.
 *
*/
HORIZONTAL = 0
    }
    

    declare enum ClockDirection {
      /**
 * Clockwise rotation. Used by some methods (e.g. [method Image.rotate_90]).
 *
*/
CLOCKWISE = 0,
/**
 * Counter-clockwise rotation. Used by some methods (e.g. [method Image.rotate_90]).
 *
*/
COUNTERCLOCKWISE = 1
    }
    

    declare enum HorizontalAlignment {
      /**
 * Horizontal left alignment, usually for text-derived classes.
 *
*/
HORIZONTAL_ALIGNMENT_LEFT = 0,
/**
 * Horizontal center alignment, usually for text-derived classes.
 *
*/
HORIZONTAL_ALIGNMENT_CENTER = 1,
/**
 * Horizontal right alignment, usually for text-derived classes.
 *
*/
HORIZONTAL_ALIGNMENT_RIGHT = 2,
/**
 * Expand row to fit width, usually for text-derived classes.
 *
*/
HORIZONTAL_ALIGNMENT_FILL = 3
    }
    

    declare enum VerticalAlignment {
      /**
 * Vertical top alignment, usually for text-derived classes.
 *
*/
VERTICAL_ALIGNMENT_TOP = 0,
/**
 * Vertical center alignment, usually for text-derived classes.
 *
*/
VERTICAL_ALIGNMENT_CENTER = 1,
/**
 * Vertical bottom alignment, usually for text-derived classes.
 *
*/
VERTICAL_ALIGNMENT_BOTTOM = 2,
/**
 * Expand rows to fit height, usually for text-derived classes.
 *
*/
VERTICAL_ALIGNMENT_FILL = 3
    }
    

    declare enum InlineAlignment {
      /**
 * Aligns the top of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant.
 *
*/
INLINE_ALIGNMENT_TOP_TO = 0,
/**
 * Aligns the center of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant.
 *
*/
INLINE_ALIGNMENT_CENTER_TO = 1,
/**
 * Aligns the baseline (user defined) of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant.
 *
*/
INLINE_ALIGNMENT_BASELINE_TO = 3,
/**
 * Aligns the bottom of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant.
 *
*/
INLINE_ALIGNMENT_BOTTOM_TO = 2,
/**
 * Aligns the position of the inline object (e.g. image, table) specified by `INLINE_ALIGNMENT_*_TO` constant to the top of the text.
 *
*/
INLINE_ALIGNMENT_TO_TOP = 0,
/**
 * Aligns the position of the inline object (e.g. image, table) specified by `INLINE_ALIGNMENT_*_TO` constant to the center of the text.
 *
*/
INLINE_ALIGNMENT_TO_CENTER = 4,
/**
 * Aligns the position of the inline object (e.g. image, table) specified by `INLINE_ALIGNMENT_*_TO` constant to the baseline of the text.
 *
*/
INLINE_ALIGNMENT_TO_BASELINE = 8,
/**
 * Aligns inline object (e.g. image, table) to the bottom of the text.
 *
*/
INLINE_ALIGNMENT_TO_BOTTOM = 12,
/**
 * Aligns top of the inline object (e.g. image, table) to the top of the text. Equivalent to `INLINE_ALIGNMENT_TOP_TO | INLINE_ALIGNMENT_TO_TOP`.
 *
*/
INLINE_ALIGNMENT_TOP = 0,
/**
 * Aligns center of the inline object (e.g. image, table) to the center of the text. Equivalent to `INLINE_ALIGNMENT_CENTER_TO | INLINE_ALIGNMENT_TO_CENTER`.
 *
*/
INLINE_ALIGNMENT_CENTER = 5,
/**
 * Aligns bottom of the inline object (e.g. image, table) to the bottom of the text. Equivalent to `INLINE_ALIGNMENT_BOTTOM_TO | INLINE_ALIGNMENT_TO_BOTTOM`.
 *
*/
INLINE_ALIGNMENT_BOTTOM = 14,
/**
 * A bit mask for `INLINE_ALIGNMENT_*_TO` alignment constants.
 *
*/
INLINE_ALIGNMENT_IMAGE_MASK = 3,
/**
 * A bit mask for `INLINE_ALIGNMENT_TO_*` alignment constants.
 *
*/
INLINE_ALIGNMENT_TEXT_MASK = 12
    }
    

    declare enum EulerOrder {
      /**
 * Specifies that Euler angles should be in XYZ order. When composing, the order is X, Y, Z. When decomposing, the order is reversed, first Z, then Y, and X last.
 *
*/
EULER_ORDER_XYZ = 0,
/**
 * Specifies that Euler angles should be in XZY order. When composing, the order is X, Z, Y. When decomposing, the order is reversed, first Y, then Z, and X last.
 *
*/
EULER_ORDER_XZY = 1,
/**
 * Specifies that Euler angles should be in YXZ order. When composing, the order is Y, X, Z. When decomposing, the order is reversed, first Z, then X, and Y last.
 *
*/
EULER_ORDER_YXZ = 2,
/**
 * Specifies that Euler angles should be in YZX order. When composing, the order is Y, Z, X. When decomposing, the order is reversed, first X, then Z, and Y last.
 *
*/
EULER_ORDER_YZX = 3,
/**
 * Specifies that Euler angles should be in ZXY order. When composing, the order is Z, X, Y. When decomposing, the order is reversed, first Y, then X, and Z last.
 *
*/
EULER_ORDER_ZXY = 4,
/**
 * Specifies that Euler angles should be in ZYX order. When composing, the order is Z, Y, X. When decomposing, the order is reversed, first X, then Y, and Z last.
 *
*/
EULER_ORDER_ZYX = 5
    }
    

    declare enum Key {
      /**
 * Enum value which doesn't correspond to any key. This is used to initialize [enum Key] properties with a generic state.
 *
*/
KEY_NONE = 0,
/**
 * Keycodes with this bit applied are non-printable.
 *
*/
KEY_SPECIAL = 4194304,
/**
 * Escape key.
 *
*/
KEY_ESCAPE = 4194305,
/**
 * Tab key.
 *
*/
KEY_TAB = 4194306,
/**
 * Shift + Tab key.
 *
*/
KEY_BACKTAB = 4194307,
/**
 * Backspace key.
 *
*/
KEY_BACKSPACE = 4194308,
/**
 * Return key (on the main keyboard).
 *
*/
KEY_ENTER = 4194309,
/**
 * Enter key on the numeric keypad.
 *
*/
KEY_KP_ENTER = 4194310,
/**
 * Insert key.
 *
*/
KEY_INSERT = 4194311,
/**
 * Delete key.
 *
*/
KEY_DELETE = 4194312,
/**
 * Pause key.
 *
*/
KEY_PAUSE = 4194313,
/**
 * Print Screen key.
 *
*/
KEY_PRINT = 4194314,
/**
 * System Request key.
 *
*/
KEY_SYSREQ = 4194315,
/**
 * Clear key.
 *
*/
KEY_CLEAR = 4194316,
/**
 * Home key.
 *
*/
KEY_HOME = 4194317,
/**
 * End key.
 *
*/
KEY_END = 4194318,
/**
 * Left arrow key.
 *
*/
KEY_LEFT = 4194319,
/**
 * Up arrow key.
 *
*/
KEY_UP = 4194320,
/**
 * Right arrow key.
 *
*/
KEY_RIGHT = 4194321,
/**
 * Down arrow key.
 *
*/
KEY_DOWN = 4194322,
/**
 * Page Up key.
 *
*/
KEY_PAGEUP = 4194323,
/**
 * Page Down key.
 *
*/
KEY_PAGEDOWN = 4194324,
/**
 * Shift key.
 *
*/
KEY_SHIFT = 4194325,
/**
 * Control key.
 *
*/
KEY_CTRL = 4194326,
/**
 * Meta key.
 *
*/
KEY_META = 4194327,
/**
 * Alt key.
 *
*/
KEY_ALT = 4194328,
/**
 * Caps Lock key.
 *
*/
KEY_CAPSLOCK = 4194329,
/**
 * Num Lock key.
 *
*/
KEY_NUMLOCK = 4194330,
/**
 * Scroll Lock key.
 *
*/
KEY_SCROLLLOCK = 4194331,
/**
 * F1 key.
 *
*/
KEY_F1 = 4194332,
/**
 * F2 key.
 *
*/
KEY_F2 = 4194333,
/**
 * F3 key.
 *
*/
KEY_F3 = 4194334,
/**
 * F4 key.
 *
*/
KEY_F4 = 4194335,
/**
 * F5 key.
 *
*/
KEY_F5 = 4194336,
/**
 * F6 key.
 *
*/
KEY_F6 = 4194337,
/**
 * F7 key.
 *
*/
KEY_F7 = 4194338,
/**
 * F8 key.
 *
*/
KEY_F8 = 4194339,
/**
 * F9 key.
 *
*/
KEY_F9 = 4194340,
/**
 * F10 key.
 *
*/
KEY_F10 = 4194341,
/**
 * F11 key.
 *
*/
KEY_F11 = 4194342,
/**
 * F12 key.
 *
*/
KEY_F12 = 4194343,
/**
 * F13 key.
 *
*/
KEY_F13 = 4194344,
/**
 * F14 key.
 *
*/
KEY_F14 = 4194345,
/**
 * F15 key.
 *
*/
KEY_F15 = 4194346,
/**
 * F16 key.
 *
*/
KEY_F16 = 4194347,
/**
 * F17 key.
 *
*/
KEY_F17 = 4194348,
/**
 * F18 key.
 *
*/
KEY_F18 = 4194349,
/**
 * F19 key.
 *
*/
KEY_F19 = 4194350,
/**
 * F20 key.
 *
*/
KEY_F20 = 4194351,
/**
 * F21 key.
 *
*/
KEY_F21 = 4194352,
/**
 * F22 key.
 *
*/
KEY_F22 = 4194353,
/**
 * F23 key.
 *
*/
KEY_F23 = 4194354,
/**
 * F24 key.
 *
*/
KEY_F24 = 4194355,
/**
 * F25 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F25 = 4194356,
/**
 * F26 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F26 = 4194357,
/**
 * F27 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F27 = 4194358,
/**
 * F28 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F28 = 4194359,
/**
 * F29 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F29 = 4194360,
/**
 * F30 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F30 = 4194361,
/**
 * F31 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F31 = 4194362,
/**
 * F32 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F32 = 4194363,
/**
 * F33 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F33 = 4194364,
/**
 * F34 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F34 = 4194365,
/**
 * F35 key. Only supported on macOS and Linux due to a Windows limitation.
 *
*/
KEY_F35 = 4194366,
/**
 * Multiply (*) key on the numeric keypad.
 *
*/
KEY_KP_MULTIPLY = 4194433,
/**
 * Divide (/) key on the numeric keypad.
 *
*/
KEY_KP_DIVIDE = 4194434,
/**
 * Subtract (-) key on the numeric keypad.
 *
*/
KEY_KP_SUBTRACT = 4194435,
/**
 * Period (.) key on the numeric keypad.
 *
*/
KEY_KP_PERIOD = 4194436,
/**
 * Add (+) key on the numeric keypad.
 *
*/
KEY_KP_ADD = 4194437,
/**
 * Number 0 on the numeric keypad.
 *
*/
KEY_KP_0 = 4194438,
/**
 * Number 1 on the numeric keypad.
 *
*/
KEY_KP_1 = 4194439,
/**
 * Number 2 on the numeric keypad.
 *
*/
KEY_KP_2 = 4194440,
/**
 * Number 3 on the numeric keypad.
 *
*/
KEY_KP_3 = 4194441,
/**
 * Number 4 on the numeric keypad.
 *
*/
KEY_KP_4 = 4194442,
/**
 * Number 5 on the numeric keypad.
 *
*/
KEY_KP_5 = 4194443,
/**
 * Number 6 on the numeric keypad.
 *
*/
KEY_KP_6 = 4194444,
/**
 * Number 7 on the numeric keypad.
 *
*/
KEY_KP_7 = 4194445,
/**
 * Number 8 on the numeric keypad.
 *
*/
KEY_KP_8 = 4194446,
/**
 * Number 9 on the numeric keypad.
 *
*/
KEY_KP_9 = 4194447,
/**
 * Context menu key.
 *
*/
KEY_MENU = 4194370,
/**
 * Hyper key. (On Linux/X11 only).
 *
*/
KEY_HYPER = 4194371,
/**
 * Help key.
 *
*/
KEY_HELP = 4194373,
/**
 * Media back key. Not to be confused with the Back button on an Android device.
 *
*/
KEY_BACK = 4194376,
/**
 * Media forward key.
 *
*/
KEY_FORWARD = 4194377,
/**
 * Media stop key.
 *
*/
KEY_STOP = 4194378,
/**
 * Media refresh key.
 *
*/
KEY_REFRESH = 4194379,
/**
 * Volume down key.
 *
*/
KEY_VOLUMEDOWN = 4194380,
/**
 * Mute volume key.
 *
*/
KEY_VOLUMEMUTE = 4194381,
/**
 * Volume up key.
 *
*/
KEY_VOLUMEUP = 4194382,
/**
 * Media play key.
 *
*/
KEY_MEDIAPLAY = 4194388,
/**
 * Media stop key.
 *
*/
KEY_MEDIASTOP = 4194389,
/**
 * Previous song key.
 *
*/
KEY_MEDIAPREVIOUS = 4194390,
/**
 * Next song key.
 *
*/
KEY_MEDIANEXT = 4194391,
/**
 * Media record key.
 *
*/
KEY_MEDIARECORD = 4194392,
/**
 * Home page key.
 *
*/
KEY_HOMEPAGE = 4194393,
/**
 * Favorites key.
 *
*/
KEY_FAVORITES = 4194394,
/**
 * Search key.
 *
*/
KEY_SEARCH = 4194395,
/**
 * Standby key.
 *
*/
KEY_STANDBY = 4194396,
/**
 * Open URL / Launch Browser key.
 *
*/
KEY_OPENURL = 4194397,
/**
 * Launch Mail key.
 *
*/
KEY_LAUNCHMAIL = 4194398,
/**
 * Launch Media key.
 *
*/
KEY_LAUNCHMEDIA = 4194399,
/**
 * Launch Shortcut 0 key.
 *
*/
KEY_LAUNCH0 = 4194400,
/**
 * Launch Shortcut 1 key.
 *
*/
KEY_LAUNCH1 = 4194401,
/**
 * Launch Shortcut 2 key.
 *
*/
KEY_LAUNCH2 = 4194402,
/**
 * Launch Shortcut 3 key.
 *
*/
KEY_LAUNCH3 = 4194403,
/**
 * Launch Shortcut 4 key.
 *
*/
KEY_LAUNCH4 = 4194404,
/**
 * Launch Shortcut 5 key.
 *
*/
KEY_LAUNCH5 = 4194405,
/**
 * Launch Shortcut 6 key.
 *
*/
KEY_LAUNCH6 = 4194406,
/**
 * Launch Shortcut 7 key.
 *
*/
KEY_LAUNCH7 = 4194407,
/**
 * Launch Shortcut 8 key.
 *
*/
KEY_LAUNCH8 = 4194408,
/**
 * Launch Shortcut 9 key.
 *
*/
KEY_LAUNCH9 = 4194409,
/**
 * Launch Shortcut A key.
 *
*/
KEY_LAUNCHA = 4194410,
/**
 * Launch Shortcut B key.
 *
*/
KEY_LAUNCHB = 4194411,
/**
 * Launch Shortcut C key.
 *
*/
KEY_LAUNCHC = 4194412,
/**
 * Launch Shortcut D key.
 *
*/
KEY_LAUNCHD = 4194413,
/**
 * Launch Shortcut E key.
 *
*/
KEY_LAUNCHE = 4194414,
/**
 * Launch Shortcut F key.
 *
*/
KEY_LAUNCHF = 4194415,
/**
 * "Globe" key on Mac / iPad keyboard.
 *
*/
KEY_GLOBE = 4194416,
/**
 * "On-screen keyboard" key on iPad keyboard.
 *
*/
KEY_KEYBOARD = 4194417,
/**
 * 英数 key on Mac keyboard.
 *
*/
KEY_JIS_EISU = 4194418,
/**
 * かな key on Mac keyboard.
 *
*/
KEY_JIS_KANA = 4194419,
/**
 * Unknown key.
 *
*/
KEY_UNKNOWN = 8388607,
/**
 * Space key.
 *
*/
KEY_SPACE = 32,
/**
 * ! key.
 *
*/
KEY_EXCLAM = 33,
/**
 * " key.
 *
*/
KEY_QUOTEDBL = 34,
/**
 * # key.
 *
*/
KEY_NUMBERSIGN = 35,
/**
 * $ key.
 *
*/
KEY_DOLLAR = 36,
/**
 * % key.
 *
*/
KEY_PERCENT = 37,
/**
 * & key.
 *
*/
KEY_AMPERSAND = 38,
/**
 * ' key.
 *
*/
KEY_APOSTROPHE = 39,
/**
 * ( key.
 *
*/
KEY_PARENLEFT = 40,
/**
 * ) key.
 *
*/
KEY_PARENRIGHT = 41,
/**
 * * key.
 *
*/
KEY_ASTERISK = 42,
/**
 * + key.
 *
*/
KEY_PLUS = 43,
/**
 * , key.
 *
*/
KEY_COMMA = 44,
/**
 * - key.
 *
*/
KEY_MINUS = 45,
/**
 * . key.
 *
*/
KEY_PERIOD = 46,
/**
 * / key.
 *
*/
KEY_SLASH = 47,
/**
 * Number 0 key.
 *
*/
KEY_0 = 48,
/**
 * Number 1 key.
 *
*/
KEY_1 = 49,
/**
 * Number 2 key.
 *
*/
KEY_2 = 50,
/**
 * Number 3 key.
 *
*/
KEY_3 = 51,
/**
 * Number 4 key.
 *
*/
KEY_4 = 52,
/**
 * Number 5 key.
 *
*/
KEY_5 = 53,
/**
 * Number 6 key.
 *
*/
KEY_6 = 54,
/**
 * Number 7 key.
 *
*/
KEY_7 = 55,
/**
 * Number 8 key.
 *
*/
KEY_8 = 56,
/**
 * Number 9 key.
 *
*/
KEY_9 = 57,
/**
 * : key.
 *
*/
KEY_COLON = 58,
/**
 * ; key.
 *
*/
KEY_SEMICOLON = 59,
/**
 * < key.
 *
*/
KEY_LESS = 60,
/**
 * = key.
 *
*/
KEY_EQUAL = 61,
/**
 * > key.
 *
*/
KEY_GREATER = 62,
/**
 * ? key.
 *
*/
KEY_QUESTION = 63,
/**
 * @ key.
 *
*/
KEY_AT = 64,
/**
 * A key.
 *
*/
KEY_A = 65,
/**
 * B key.
 *
*/
KEY_B = 66,
/**
 * C key.
 *
*/
KEY_C = 67,
/**
 * D key.
 *
*/
KEY_D = 68,
/**
 * E key.
 *
*/
KEY_E = 69,
/**
 * F key.
 *
*/
KEY_F = 70,
/**
 * G key.
 *
*/
KEY_G = 71,
/**
 * H key.
 *
*/
KEY_H = 72,
/**
 * I key.
 *
*/
KEY_I = 73,
/**
 * J key.
 *
*/
KEY_J = 74,
/**
 * K key.
 *
*/
KEY_K = 75,
/**
 * L key.
 *
*/
KEY_L = 76,
/**
 * M key.
 *
*/
KEY_M = 77,
/**
 * N key.
 *
*/
KEY_N = 78,
/**
 * O key.
 *
*/
KEY_O = 79,
/**
 * P key.
 *
*/
KEY_P = 80,
/**
 * Q key.
 *
*/
KEY_Q = 81,
/**
 * R key.
 *
*/
KEY_R = 82,
/**
 * S key.
 *
*/
KEY_S = 83,
/**
 * T key.
 *
*/
KEY_T = 84,
/**
 * U key.
 *
*/
KEY_U = 85,
/**
 * V key.
 *
*/
KEY_V = 86,
/**
 * W key.
 *
*/
KEY_W = 87,
/**
 * X key.
 *
*/
KEY_X = 88,
/**
 * Y key.
 *
*/
KEY_Y = 89,
/**
 * Z key.
 *
*/
KEY_Z = 90,
/**
 * [ key.
 *
*/
KEY_BRACKETLEFT = 91,
/**
 * \ key.
 *
*/
KEY_BACKSLASH = 92,
/**
 * ] key.
 *
*/
KEY_BRACKETRIGHT = 93,
/**
 * ^ key.
 *
*/
KEY_ASCIICIRCUM = 94,
/**
 * _ key.
 *
*/
KEY_UNDERSCORE = 95,
/**
 * ` key.
 *
*/
KEY_QUOTELEFT = 96,
/**
 * { key.
 *
*/
KEY_BRACELEFT = 123,
/**
 * | key.
 *
*/
KEY_BAR = 124,
/**
 * } key.
 *
*/
KEY_BRACERIGHT = 125,
/**
 * ~ key.
 *
*/
KEY_ASCIITILDE = 126,
/**
 * ¥ key.
 *
*/
KEY_YEN = 165,
/**
 * § key.
 *
*/
KEY_SECTION = 167
    }
    

    declare enum KeyModifierMask {
      /**
 * Key Code mask.
 *
*/
KEY_CODE_MASK = 8388607,
/**
 * Modifier key mask.
 *
*/
KEY_MODIFIER_MASK = 532676608,
/**
 * Automatically remapped to [constant KEY_META] on macOS and [constant KEY_CTRL] on other platforms, this mask is never set in the actual events, and should be used for key mapping only.
 *
*/
KEY_MASK_CMD_OR_CTRL = 16777216,
/**
 * Shift key mask.
 *
*/
KEY_MASK_SHIFT = 33554432,
/**
 * Alt or Option (on macOS) key mask.
 *
*/
KEY_MASK_ALT = 67108864,
/**
 * Command (on macOS) or Meta/Windows key mask.
 *
*/
KEY_MASK_META = 134217728,
/**
 * Control key mask.
 *
*/
KEY_MASK_CTRL = 268435456,
/**
 * Keypad key mask.
 *
*/
KEY_MASK_KPAD = 536870912,
/**
 * Group Switch key mask.
 *
*/
KEY_MASK_GROUP_SWITCH = 1073741824
    }
    

    declare enum MouseButton {
      /**
 * Enum value which doesn't correspond to any mouse button. This is used to initialize [enum MouseButton] properties with a generic state.
 *
*/
MOUSE_BUTTON_NONE = 0,
/**
 * Primary mouse button, usually assigned to the left button.
 *
*/
MOUSE_BUTTON_LEFT = 1,
/**
 * Secondary mouse button, usually assigned to the right button.
 *
*/
MOUSE_BUTTON_RIGHT = 2,
/**
 * Middle mouse button.
 *
*/
MOUSE_BUTTON_MIDDLE = 3,
/**
 * Mouse wheel scrolling up.
 *
*/
MOUSE_BUTTON_WHEEL_UP = 4,
/**
 * Mouse wheel scrolling down.
 *
*/
MOUSE_BUTTON_WHEEL_DOWN = 5,
/**
 * Mouse wheel left button (only present on some mice).
 *
*/
MOUSE_BUTTON_WHEEL_LEFT = 6,
/**
 * Mouse wheel right button (only present on some mice).
 *
*/
MOUSE_BUTTON_WHEEL_RIGHT = 7,
/**
 * Extra mouse button 1. This is sometimes present, usually to the sides of the mouse.
 *
*/
MOUSE_BUTTON_XBUTTON1 = 8,
/**
 * Extra mouse button 2. This is sometimes present, usually to the sides of the mouse.
 *
*/
MOUSE_BUTTON_XBUTTON2 = 9
    }
    

    declare enum MouseButtonMask {
      /**
 * Primary mouse button mask, usually for the left button.
 *
*/
MOUSE_BUTTON_MASK_LEFT = 1,
/**
 * Secondary mouse button mask, usually for the right button.
 *
*/
MOUSE_BUTTON_MASK_RIGHT = 2,
/**
 * Middle mouse button mask.
 *
*/
MOUSE_BUTTON_MASK_MIDDLE = 4,
/**
 * Extra mouse button 1 mask.
 *
*/
MOUSE_BUTTON_MASK_MB_XBUTTON1 = 128,
/**
 * Extra mouse button 2 mask.
 *
*/
MOUSE_BUTTON_MASK_MB_XBUTTON2 = 256
    }
    

    declare enum JoyButton {
      /**
 * An invalid game controller button.
 *
*/
JOY_BUTTON_INVALID = -1,
/**
 * Game controller SDL button A. Corresponds to the bottom action button: Sony Cross, Xbox A, Nintendo B.
 *
*/
JOY_BUTTON_A = 0,
/**
 * Game controller SDL button B. Corresponds to the right action button: Sony Circle, Xbox B, Nintendo A.
 *
*/
JOY_BUTTON_B = 1,
/**
 * Game controller SDL button X. Corresponds to the left action button: Sony Square, Xbox X, Nintendo Y.
 *
*/
JOY_BUTTON_X = 2,
/**
 * Game controller SDL button Y. Corresponds to the top action button: Sony Triangle, Xbox Y, Nintendo X.
 *
*/
JOY_BUTTON_Y = 3,
/**
 * Game controller SDL back button. Corresponds to the Sony Select, Xbox Back, Nintendo - button.
 *
*/
JOY_BUTTON_BACK = 4,
/**
 * Game controller SDL guide button. Corresponds to the Sony PS, Xbox Home button.
 *
*/
JOY_BUTTON_GUIDE = 5,
/**
 * Game controller SDL start button. Corresponds to the Sony Options, Xbox Menu, Nintendo + button.
 *
*/
JOY_BUTTON_START = 6,
/**
 * Game controller SDL left stick button. Corresponds to the Sony L3, Xbox L/LS button.
 *
*/
JOY_BUTTON_LEFT_STICK = 7,
/**
 * Game controller SDL right stick button. Corresponds to the Sony R3, Xbox R/RS button.
 *
*/
JOY_BUTTON_RIGHT_STICK = 8,
/**
 * Game controller SDL left shoulder button. Corresponds to the Sony L1, Xbox LB button.
 *
*/
JOY_BUTTON_LEFT_SHOULDER = 9,
/**
 * Game controller SDL right shoulder button. Corresponds to the Sony R1, Xbox RB button.
 *
*/
JOY_BUTTON_RIGHT_SHOULDER = 10,
/**
 * Game controller D-pad up button.
 *
*/
JOY_BUTTON_DPAD_UP = 11,
/**
 * Game controller D-pad down button.
 *
*/
JOY_BUTTON_DPAD_DOWN = 12,
/**
 * Game controller D-pad left button.
 *
*/
JOY_BUTTON_DPAD_LEFT = 13,
/**
 * Game controller D-pad right button.
 *
*/
JOY_BUTTON_DPAD_RIGHT = 14,
/**
 * Game controller SDL miscellaneous button. Corresponds to Xbox share button, PS5 microphone button, Nintendo Switch capture button.
 *
*/
JOY_BUTTON_MISC1 = 15,
/**
 * Game controller SDL paddle 1 button.
 *
*/
JOY_BUTTON_PADDLE1 = 16,
/**
 * Game controller SDL paddle 2 button.
 *
*/
JOY_BUTTON_PADDLE2 = 17,
/**
 * Game controller SDL paddle 3 button.
 *
*/
JOY_BUTTON_PADDLE3 = 18,
/**
 * Game controller SDL paddle 4 button.
 *
*/
JOY_BUTTON_PADDLE4 = 19,
/**
 * Game controller SDL touchpad button.
 *
*/
JOY_BUTTON_TOUCHPAD = 20,
/**
 * The number of SDL game controller buttons.
 *
*/
JOY_BUTTON_SDL_MAX = 21,
/**
 * The maximum number of game controller buttons supported by the engine. The actual limit may be lower on specific platforms:
 *
 * - **Android:** Up to 36 buttons.
 *
 * - **Linux:** Up to 80 buttons.
 *
 * - **Windows** and **macOS:** Up to 128 buttons.
 *
*/
JOY_BUTTON_MAX = 128
    }
    

    declare enum JoyAxis {
      /**
 * An invalid game controller axis.
 *
*/
JOY_AXIS_INVALID = -1,
/**
 * Game controller left joystick x-axis.
 *
*/
JOY_AXIS_LEFT_X = 0,
/**
 * Game controller left joystick y-axis.
 *
*/
JOY_AXIS_LEFT_Y = 1,
/**
 * Game controller right joystick x-axis.
 *
*/
JOY_AXIS_RIGHT_X = 2,
/**
 * Game controller right joystick y-axis.
 *
*/
JOY_AXIS_RIGHT_Y = 3,
/**
 * Game controller left trigger axis.
 *
*/
JOY_AXIS_TRIGGER_LEFT = 4,
/**
 * Game controller right trigger axis.
 *
*/
JOY_AXIS_TRIGGER_RIGHT = 5,
/**
 * The number of SDL game controller axes.
 *
*/
JOY_AXIS_SDL_MAX = 6,
/**
 * The maximum number of game controller axes: OpenVR supports up to 5 Joysticks making a total of 10 axes.
 *
*/
JOY_AXIS_MAX = 10
    }
    

    declare enum MIDIMessage {
      /**
 * Enum value which doesn't correspond to any MIDI message. This is used to initialize [enum MIDIMessage] properties with a generic state.
 *
*/
MIDI_MESSAGE_NONE = 0,
/**
 * MIDI note OFF message. Not all MIDI devices send this event; some send [constant MIDI_MESSAGE_NOTE_ON] with zero velocity instead. See the documentation of [InputEventMIDI] for information of how to use MIDI inputs.
 *
*/
MIDI_MESSAGE_NOTE_OFF = 8,
/**
 * MIDI note ON message. Some MIDI devices send this event with velocity zero instead of [constant MIDI_MESSAGE_NOTE_OFF], but implementations vary. See the documentation of [InputEventMIDI] for information of how to use MIDI inputs.
 *
*/
MIDI_MESSAGE_NOTE_ON = 9,
/**
 * MIDI aftertouch message. This message is most often sent by pressing down on the key after it "bottoms out".
 *
*/
MIDI_MESSAGE_AFTERTOUCH = 10,
/**
 * MIDI control change message. This message is sent when a controller value changes. Controllers include devices such as pedals and levers.
 *
*/
MIDI_MESSAGE_CONTROL_CHANGE = 11,
/**
 * MIDI program change message. This message sent when the program patch number changes.
 *
*/
MIDI_MESSAGE_PROGRAM_CHANGE = 12,
/**
 * MIDI channel pressure message. This message is most often sent by pressing down on the key after it "bottoms out". This message is different from polyphonic after-touch as it indicates the highest pressure across all keys.
 *
*/
MIDI_MESSAGE_CHANNEL_PRESSURE = 13,
/**
 * MIDI pitch bend message. This message is sent to indicate a change in the pitch bender (wheel or lever, typically).
 *
*/
MIDI_MESSAGE_PITCH_BEND = 14,
/**
 * MIDI system exclusive message. This has behavior exclusive to the device you're receiving input from. Getting this data is not implemented in Godot.
 *
*/
MIDI_MESSAGE_SYSTEM_EXCLUSIVE = 240,
/**
 * MIDI quarter frame message. Contains timing information that is used to synchronize MIDI devices. Getting this data is not implemented in Godot.
 *
*/
MIDI_MESSAGE_QUARTER_FRAME = 241,
/**
 * MIDI song position pointer message. Gives the number of 16th notes since the start of the song. Getting this data is not implemented in Godot.
 *
*/
MIDI_MESSAGE_SONG_POSITION_POINTER = 242,
/**
 * MIDI song select message. Specifies which sequence or song is to be played. Getting this data is not implemented in Godot.
 *
*/
MIDI_MESSAGE_SONG_SELECT = 243,
/**
 * MIDI tune request message. Upon receiving a tune request, all analog synthesizers should tune their oscillators.
 *
*/
MIDI_MESSAGE_TUNE_REQUEST = 246,
/**
 * MIDI timing clock message. Sent 24 times per quarter note when synchronization is required.
 *
*/
MIDI_MESSAGE_TIMING_CLOCK = 248,
/**
 * MIDI start message. Start the current sequence playing. This message will be followed with Timing Clocks.
 *
*/
MIDI_MESSAGE_START = 250,
/**
 * MIDI continue message. Continue at the point the sequence was stopped.
 *
*/
MIDI_MESSAGE_CONTINUE = 251,
/**
 * MIDI stop message. Stop the current sequence.
 *
*/
MIDI_MESSAGE_STOP = 252,
/**
 * MIDI active sensing message. This message is intended to be sent repeatedly to tell the receiver that a connection is alive.
 *
*/
MIDI_MESSAGE_ACTIVE_SENSING = 254,
/**
 * MIDI system reset message. Reset all receivers in the system to power-up status. It should not be sent on power-up itself.
 *
*/
MIDI_MESSAGE_SYSTEM_RESET = 255
    }
    

    declare enum Error {
      /**
 * Methods that return [enum Error] return [constant OK] when no error occurred.
 *
 * Since [constant OK] has value 0, and all other error constants are positive integers, it can also be used in boolean checks.
 *
 * **Example:**
 *
 * @example 
 * 
 * var error = method_that_returns_error()
 * if error != OK:
 *     printerr("Failure!")
 * # Or, alternatively:
 * if error:
 *     printerr("Still failing!")
 * @summary 
 * 
 *
 * **Note:** Many functions do not return an error code, but will print error messages to standard output.
 *
*/
OK = 0,
/**
 * Generic error.
 *
*/
FAILED = 1,
/**
 * Unavailable error.
 *
*/
ERR_UNAVAILABLE = 2,
/**
 * Unconfigured error.
 *
*/
ERR_UNCONFIGURED = 3,
/**
 * Unauthorized error.
 *
*/
ERR_UNAUTHORIZED = 4,
/**
 * Parameter range error.
 *
*/
ERR_PARAMETER_RANGE_ERROR = 5,
/**
 * Out of memory (OOM) error.
 *
*/
ERR_OUT_OF_MEMORY = 6,
/**
 * File: Not found error.
 *
*/
ERR_FILE_NOT_FOUND = 7,
/**
 * File: Bad drive error.
 *
*/
ERR_FILE_BAD_DRIVE = 8,
/**
 * File: Bad path error.
 *
*/
ERR_FILE_BAD_PATH = 9,
/**
 * File: No permission error.
 *
*/
ERR_FILE_NO_PERMISSION = 10,
/**
 * File: Already in use error.
 *
*/
ERR_FILE_ALREADY_IN_USE = 11,
/**
 * File: Can't open error.
 *
*/
ERR_FILE_CANT_OPEN = 12,
/**
 * File: Can't write error.
 *
*/
ERR_FILE_CANT_WRITE = 13,
/**
 * File: Can't read error.
 *
*/
ERR_FILE_CANT_READ = 14,
/**
 * File: Unrecognized error.
 *
*/
ERR_FILE_UNRECOGNIZED = 15,
/**
 * File: Corrupt error.
 *
*/
ERR_FILE_CORRUPT = 16,
/**
 * File: Missing dependencies error.
 *
*/
ERR_FILE_MISSING_DEPENDENCIES = 17,
/**
 * File: End of file (EOF) error.
 *
*/
ERR_FILE_EOF = 18,
/**
 * Can't open error.
 *
*/
ERR_CANT_OPEN = 19,
/**
 * Can't create error.
 *
*/
ERR_CANT_CREATE = 20,
/**
 * Query failed error.
 *
*/
ERR_QUERY_FAILED = 21,
/**
 * Already in use error.
 *
*/
ERR_ALREADY_IN_USE = 22,
/**
 * Locked error.
 *
*/
ERR_LOCKED = 23,
/**
 * Timeout error.
 *
*/
ERR_TIMEOUT = 24,
/**
 * Can't connect error.
 *
*/
ERR_CANT_CONNECT = 25,
/**
 * Can't resolve error.
 *
*/
ERR_CANT_RESOLVE = 26,
/**
 * Connection error.
 *
*/
ERR_CONNECTION_ERROR = 27,
/**
 * Can't acquire resource error.
 *
*/
ERR_CANT_ACQUIRE_RESOURCE = 28,
/**
 * Can't fork process error.
 *
*/
ERR_CANT_FORK = 29,
/**
 * Invalid data error.
 *
*/
ERR_INVALID_DATA = 30,
/**
 * Invalid parameter error.
 *
*/
ERR_INVALID_PARAMETER = 31,
/**
 * Already exists error.
 *
*/
ERR_ALREADY_EXISTS = 32,
/**
 * Does not exist error.
 *
*/
ERR_DOES_NOT_EXIST = 33,
/**
 * Database: Read error.
 *
*/
ERR_DATABASE_CANT_READ = 34,
/**
 * Database: Write error.
 *
*/
ERR_DATABASE_CANT_WRITE = 35,
/**
 * Compilation failed error.
 *
*/
ERR_COMPILATION_FAILED = 36,
/**
 * Method not found error.
 *
*/
ERR_METHOD_NOT_FOUND = 37,
/**
 * Linking failed error.
 *
*/
ERR_LINK_FAILED = 38,
/**
 * Script failed error.
 *
*/
ERR_SCRIPT_FAILED = 39,
/**
 * Cycling link (import cycle) error.
 *
*/
ERR_CYCLIC_LINK = 40,
/**
 * Invalid declaration error.
 *
*/
ERR_INVALID_DECLARATION = 41,
/**
 * Duplicate symbol error.
 *
*/
ERR_DUPLICATE_SYMBOL = 42,
/**
 * Parse error.
 *
*/
ERR_PARSE_ERROR = 43,
/**
 * Busy error.
 *
*/
ERR_BUSY = 44,
/**
 * Skip error.
 *
*/
ERR_SKIP = 45,
/**
 * Help error. Used internally when passing `--version` or `--help` as executable options.
 *
*/
ERR_HELP = 46,
/**
 * Bug error, caused by an implementation issue in the method.
 *
 * **Note:** If a built-in method returns this code, please open an issue on [url=https://github.com/godotengine/godot/issues]the GitHub Issue Tracker[/url].
 *
*/
ERR_BUG = 47,
/**
 * Printer on fire error (This is an easter egg, no built-in methods return this error code).
 *
*/
ERR_PRINTER_ON_FIRE = 48
    }
    

    declare enum PropertyHint {
      /**
 * The property has no hint for the editor.
 *
*/
PROPERTY_HINT_NONE = 0,
/**
 * Hints that an [int] or [float] property should be within a range specified via the hint string `"min,max"` or `"min,max,step"`. The hint string can optionally include `"or_greater"` and/or `"or_less"` to allow manual input going respectively above the max or below the min values.
 *
 * **Example:** `"-360,360,1,or_greater,or_less"`.
 *
 * Additionally, other keywords can be included: `"exp"` for exponential range editing, `"radians_as_degrees"` for editing radian angles in degrees (the range values are also in degrees), `"degrees"` to hint at an angle and `"hide_slider"` to hide the slider.
 *
*/
PROPERTY_HINT_RANGE = 1,
/**
 * Hints that an [int] or [String] property is an enumerated value to pick in a list specified via a hint string.
 *
 * The hint string is a comma separated list of names such as `"Hello,Something,Else"`. Whitespaces are **not** removed from either end of a name. For integer properties, the first name in the list has value 0, the next 1, and so on. Explicit values can also be specified by appending `:integer` to the name, e.g. `"Zero,One,Three:3,Four,Six:6"`.
 *
*/
PROPERTY_HINT_ENUM = 2,
/**
 * Hints that a [String] property can be an enumerated value to pick in a list specified via a hint string such as `"Hello,Something,Else"`.
 *
 * Unlike [constant PROPERTY_HINT_ENUM], a property with this hint still accepts arbitrary values and can be empty. The list of values serves to suggest possible values.
 *
*/
PROPERTY_HINT_ENUM_SUGGESTION = 3,
/**
 * Hints that a [float] property should be edited via an exponential easing function. The hint string can include `"attenuation"` to flip the curve horizontally and/or `"positive_only"` to exclude in/out easing and limit values to be greater than or equal to zero.
 *
*/
PROPERTY_HINT_EXP_EASING = 4,
/**
 * Hints that a vector property should allow its components to be linked. For example, this allows [member Vector2.x] and [member Vector2.y] to be edited together.
 *
*/
PROPERTY_HINT_LINK = 5,
/**
 * Hints that an [int] property is a bitmask with named bit flags.
 *
 * The hint string is a comma separated list of names such as `"Bit0,Bit1,Bit2,Bit3"`. Whitespaces are **not** removed from either end of a name. The first name in the list has value 1, the next 2, then 4, 8, 16 and so on. Explicit values can also be specified by appending `:integer` to the name, e.g. `"A:4,B:8,C:16"`. You can also combine several flags (`"A:4,B:8,AB:12,C:16"`).
 *
 * **Note:** A flag value must be at least `1` and at most `2 ** 32 - 1`.
 *
 * **Note:** Unlike [constant PROPERTY_HINT_ENUM], the previous explicit value is not taken into account. For the hint `"A:16,B,C"`, A is 16, B is 2, C is 4.
 *
*/
PROPERTY_HINT_FLAGS = 6,
/**
 * Hints that an [int] property is a bitmask using the optionally named 2D render layers.
 *
*/
PROPERTY_HINT_LAYERS_2D_RENDER = 7,
/**
 * Hints that an [int] property is a bitmask using the optionally named 2D physics layers.
 *
*/
PROPERTY_HINT_LAYERS_2D_PHYSICS = 8,
/**
 * Hints that an [int] property is a bitmask using the optionally named 2D navigation layers.
 *
*/
PROPERTY_HINT_LAYERS_2D_NAVIGATION = 9,
/**
 * Hints that an [int] property is a bitmask using the optionally named 3D render layers.
 *
*/
PROPERTY_HINT_LAYERS_3D_RENDER = 10,
/**
 * Hints that an [int] property is a bitmask using the optionally named 3D physics layers.
 *
*/
PROPERTY_HINT_LAYERS_3D_PHYSICS = 11,
/**
 * Hints that an [int] property is a bitmask using the optionally named 3D navigation layers.
 *
*/
PROPERTY_HINT_LAYERS_3D_NAVIGATION = 12,
/**
 * Hints that an integer property is a bitmask using the optionally named avoidance layers.
 *
*/
PROPERTY_HINT_LAYERS_AVOIDANCE = 37,
/**
 * Hints that a [String] property is a path to a file. Editing it will show a file dialog for picking the path. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`.
 *
*/
PROPERTY_HINT_FILE = 13,
/**
 * Hints that a [String] property is a path to a directory. Editing it will show a file dialog for picking the path.
 *
*/
PROPERTY_HINT_DIR = 14,
/**
 * Hints that a [String] property is an absolute path to a file outside the project folder. Editing it will show a file dialog for picking the path. The hint string can be a set of filters with wildcards, like `"*.png,*.jpg"`.
 *
*/
PROPERTY_HINT_GLOBAL_FILE = 15,
/**
 * Hints that a [String] property is an absolute path to a directory outside the project folder. Editing it will show a file dialog for picking the path.
 *
*/
PROPERTY_HINT_GLOBAL_DIR = 16,
/**
 * Hints that a property is an instance of a [Resource]-derived type, optionally specified via the hint string (e.g. `"Texture2D"`). Editing it will show a popup menu of valid resource types to instantiate.
 *
*/
PROPERTY_HINT_RESOURCE_TYPE = 17,
/**
 * Hints that a [String] property is text with line breaks. Editing it will show a text input field where line breaks can be typed.
 *
*/
PROPERTY_HINT_MULTILINE_TEXT = 18,
/**
 * Hints that a [String] property is an [Expression].
 *
*/
PROPERTY_HINT_EXPRESSION = 19,
/**
 * Hints that a [String] property should show a placeholder text on its input field, if empty. The hint string is the placeholder text to use.
 *
*/
PROPERTY_HINT_PLACEHOLDER_TEXT = 20,
/**
 * Hints that a [Color] property should be edited without affecting its transparency ([member Color.a] is not editable).
 *
*/
PROPERTY_HINT_COLOR_NO_ALPHA = 21,
/**
 * Hints that the property's value is an object encoded as object ID, with its type specified in the hint string. Used by the debugger.
 *
*/
PROPERTY_HINT_OBJECT_ID = 22,
/**
 * If a property is [String], hints that the property represents a particular type (class). This allows to select a type from the create dialog. The property will store the selected type as a string.
 *
 * If a property is [Array], hints the editor how to show elements. The `hint_string` must encode nested types using `":"` and `"/"`.
 *
 * @example 
 * 
 * 
 * # Array of elem_type.
 * hint_string = "%d:" % [elem_type]
 * hint_string = "%d/%d:%s" % [elem_type, elem_hint, elem_hint_string]
 * # Two-dimensional array of elem_type (array of arrays of elem_type).
 * hint_string = "%d:%d:" % [TYPE_ARRAY, elem_type]
 * hint_string = "%d:%d/%d:%s" % [TYPE_ARRAY, elem_type, elem_hint, elem_hint_string]
 * # Three-dimensional array of elem_type (array of arrays of arrays of elem_type).
 * hint_string = "%d:%d:%d:" % [TYPE_ARRAY, TYPE_ARRAY, elem_type]
 * hint_string = "%d:%d:%d/%d:%s" % [TYPE_ARRAY, TYPE_ARRAY, elem_type, elem_hint, elem_hint_string]
 * 
 * 
 * // Array of elemType.
 * hintString = $"{elemType:D}:";
 * hintString = $"{elemType:}/{elemHint:D}:{elemHintString}";
 * // Two-dimensional array of elemType (array of arrays of elemType).
 * hintString = $"{Variant.Type.Array:D}:{elemType:D}:";
 * hintString = $"{Variant.Type.Array:D}:{elemType:D}/{elemHint:D}:{elemHintString}";
 * // Three-dimensional array of elemType (array of arrays of arrays of elemType).
 * hintString = $"{Variant.Type.Array:D}:{Variant.Type.Array:D}:{elemType:D}:";
 * hintString = $"{Variant.Type.Array:D}:{Variant.Type.Array:D}:{elemType:D}/{elemHint:D}:{elemHintString}";
 * 
 * @summary 
 * 
 *
 * Examples:
 *
 * @example 
 * 
 * 
 * hint_string = "%d:" % [TYPE_INT] # Array of integers.
 * hint_string = "%d/%d:1,10,1" % [TYPE_INT, PROPERTY_HINT_RANGE] # Array of integers (in range from 1 to 10).
 * hint_string = "%d/%d:Zero,One,Two" % [TYPE_INT, PROPERTY_HINT_ENUM] # Array of integers (an enum).
 * hint_string = "%d/%d:Zero,One,Three:3,Six:6" % [TYPE_INT, PROPERTY_HINT_ENUM] # Array of integers (an enum).
 * hint_string = "%d/%d:*.png" % [TYPE_STRING, PROPERTY_HINT_FILE] # Array of strings (file paths).
 * hint_string = "%d/%d:Texture2D" % [TYPE_OBJECT, PROPERTY_HINT_RESOURCE_TYPE] # Array of textures.
 * hint_string = "%d:%d:" % [TYPE_ARRAY, TYPE_FLOAT] # Two-dimensional array of floats.
 * hint_string = "%d:%d/%d:" % [TYPE_ARRAY, TYPE_STRING, PROPERTY_HINT_MULTILINE_TEXT] # Two-dimensional array of multiline strings.
 * hint_string = "%d:%d/%d:-1,1,0.1" % [TYPE_ARRAY, TYPE_FLOAT, PROPERTY_HINT_RANGE] # Two-dimensional array of floats (in range from -1 to 1).
 * hint_string = "%d:%d/%d:Texture2D" % [TYPE_ARRAY, TYPE_OBJECT, PROPERTY_HINT_RESOURCE_TYPE] # Two-dimensional array of textures.
 * 
 * 
 * hintString = $"{Variant.Type.Int:D}/{PropertyHint.Range:D}:1,10,1"; // Array of integers (in range from 1 to 10).
 * hintString = $"{Variant.Type.Int:D}/{PropertyHint.Enum:D}:Zero,One,Two"; // Array of integers (an enum).
 * hintString = $"{Variant.Type.Int:D}/{PropertyHint.Enum:D}:Zero,One,Three:3,Six:6"; // Array of integers (an enum).
 * hintString = $"{Variant.Type.String:D}/{PropertyHint.File:D}:*.png"; // Array of strings (file paths).
 * hintString = $"{Variant.Type.Object:D}/{PropertyHint.ResourceType:D}:Texture2D"; // Array of textures.
 * hintString = $"{Variant.Type.Array:D}:{Variant.Type.Float:D}:"; // Two-dimensional array of floats.
 * hintString = $"{Variant.Type.Array:D}:{Variant.Type.String:D}/{PropertyHint.MultilineText:D}:"; // Two-dimensional array of multiline strings.
 * hintString = $"{Variant.Type.Array:D}:{Variant.Type.Float:D}/{PropertyHint.Range:D}:-1,1,0.1"; // Two-dimensional array of floats (in range from -1 to 1).
 * hintString = $"{Variant.Type.Array:D}:{Variant.Type.Object:D}/{PropertyHint.ResourceType:D}:Texture2D"; // Two-dimensional array of textures.
 * 
 * @summary 
 * 
 *
 * **Note:** The trailing colon is required for properly detecting built-in types.
 *
*/
PROPERTY_HINT_TYPE_STRING = 23,
/**
 * **Deprecated.** This hint is not used anywhere and will be removed in the future.
 *
*/
PROPERTY_HINT_NODE_PATH_TO_EDITED_NODE = 24,
/**
 * Hints that an object is too big to be sent via the debugger.
 *
*/
PROPERTY_HINT_OBJECT_TOO_BIG = 25,
/**
 * Hints that the hint string specifies valid node types for property of type [NodePath].
 *
*/
PROPERTY_HINT_NODE_PATH_VALID_TYPES = 26,
/**
 * Hints that a [String] property is a path to a file. Editing it will show a file dialog for picking the path for the file to be saved at. The dialog has access to the project's directory. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. See also [member FileDialog.filters].
 *
*/
PROPERTY_HINT_SAVE_FILE = 27,
/**
 * Hints that a [String] property is a path to a file. Editing it will show a file dialog for picking the path for the file to be saved at. The dialog has access to the entire filesystem. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. See also [member FileDialog.filters].
 *
*/
PROPERTY_HINT_GLOBAL_SAVE_FILE = 28,
/**
 * Hints that an [int] property is an object ID.
 *
 * **Deprecated.** This hint is not used anywhere and will be removed in the future.
 *
*/
PROPERTY_HINT_INT_IS_OBJECTID = 29,
/**
 * Hints that an [int] property is a pointer. Used by GDExtension.
 *
*/
PROPERTY_HINT_INT_IS_POINTER = 30,
/**
 * Hints that a property is an [Array] with the stored type specified in the hint string.
 *
*/
PROPERTY_HINT_ARRAY_TYPE = 31,
/**
 * Hints that a string property is a locale code. Editing it will show a locale dialog for picking language and country.
 *
*/
PROPERTY_HINT_LOCALE_ID = 32,
/**
 * Hints that a dictionary property is string translation map. Dictionary keys are locale codes and, values are translated strings.
 *
*/
PROPERTY_HINT_LOCALIZABLE_STRING = 33,
/**
 * Hints that a property is an instance of a [Node]-derived type, optionally specified via the hint string (e.g. `"Node2D"`). Editing it will show a dialog for picking a node from the scene.
 *
*/
PROPERTY_HINT_NODE_TYPE = 34,
/**
 * Hints that a quaternion property should disable the temporary euler editor.
 *
*/
PROPERTY_HINT_HIDE_QUATERNION_EDIT = 35,
/**
 * Hints that a string property is a password, and every character is replaced with the secret character.
 *
*/
PROPERTY_HINT_PASSWORD = 36,
/**
 * Represents the size of the [enum PropertyHint] enum.
 *
*/
PROPERTY_HINT_MAX = 38
    }
    

    declare enum PropertyUsageFlags {
      /**
 * The property is not stored, and does not display in the editor. This is the default for non-exported properties.
 *
*/
PROPERTY_USAGE_NONE = 0,
/**
 * The property is serialized and saved in the scene file (default).
 *
*/
PROPERTY_USAGE_STORAGE = 2,
/**
 * The property is shown in the [EditorInspector] (default).
 *
*/
PROPERTY_USAGE_EDITOR = 4,
/**
 * The property is excluded from the class reference.
 *
*/
PROPERTY_USAGE_INTERNAL = 8,
/**
 * The property can be checked in the [EditorInspector].
 *
*/
PROPERTY_USAGE_CHECKABLE = 16,
/**
 * The property is checked in the [EditorInspector].
 *
*/
PROPERTY_USAGE_CHECKED = 32,
/**
 * Used to group properties together in the editor. See [EditorInspector].
 *
*/
PROPERTY_USAGE_GROUP = 64,
/**
 * Used to categorize properties together in the editor.
 *
*/
PROPERTY_USAGE_CATEGORY = 128,
/**
 * Used to group properties together in the editor in a subgroup (under a group). See [EditorInspector].
 *
*/
PROPERTY_USAGE_SUBGROUP = 256,
/**
 * The property is a bitfield, i.e. it contains multiple flags represented as bits.
 *
*/
PROPERTY_USAGE_CLASS_IS_BITFIELD = 512,
/**
 * The property does not save its state in [PackedScene].
 *
*/
PROPERTY_USAGE_NO_INSTANCE_STATE = 1024,
/**
 * Editing the property prompts the user for restarting the editor.
 *
*/
PROPERTY_USAGE_RESTART_IF_CHANGED = 2048,
/**
 * The property is a script variable which should be serialized and saved in the scene file.
 *
*/
PROPERTY_USAGE_SCRIPT_VARIABLE = 4096,
/**
 * The property value of type [Object] will be stored even if its value is `null`.
 *
*/
PROPERTY_USAGE_STORE_IF_NULL = 8192,
/**
 * If this property is modified, all inspector fields will be refreshed.
 *
*/
PROPERTY_USAGE_UPDATE_ALL_IF_MODIFIED = 16384,
/**
 * Signifies a default value from a placeholder script instance.
 *
 * **Deprecated.** This hint is not used anywhere and will be removed in the future.
 *
*/
PROPERTY_USAGE_SCRIPT_DEFAULT_VALUE = 32768,
/**
 * The property is an enum, i.e. it only takes named integer constants from its associated enumeration.
 *
*/
PROPERTY_USAGE_CLASS_IS_ENUM = 65536,
/**
 * If property has `nil` as default value, its type will be [Variant].
 *
*/
PROPERTY_USAGE_NIL_IS_VARIANT = 131072,
/**
 * The property is an array.
 *
*/
PROPERTY_USAGE_ARRAY = 262144,
/**
 * When duplicating a resource with [method Resource.duplicate], and this flag is set on a property of that resource, the property should always be duplicated, regardless of the `subresources` bool parameter.
 *
*/
PROPERTY_USAGE_ALWAYS_DUPLICATE = 524288,
/**
 * When duplicating a resource with [method Resource.duplicate], and this flag is set on a property of that resource, the property should never be duplicated, regardless of the `subresources` bool parameter.
 *
*/
PROPERTY_USAGE_NEVER_DUPLICATE = 1048576,
/**
 * The property is only shown in the editor if modern renderers are supported (the Compatibility rendering method is excluded).
 *
*/
PROPERTY_USAGE_HIGH_END_GFX = 2097152,
/**
 * The [NodePath] property will always be relative to the scene's root. Mostly useful for local resources.
 *
*/
PROPERTY_USAGE_NODE_PATH_FROM_SCENE_ROOT = 4194304,
/**
 * Use when a resource is created on the fly, i.e. the getter will always return a different instance. [ResourceSaver] needs this information to properly save such resources.
 *
*/
PROPERTY_USAGE_RESOURCE_NOT_PERSISTENT = 8388608,
/**
 * Inserting an animation key frame of this property will automatically increment the value, allowing to easily keyframe multiple values in a row.
 *
*/
PROPERTY_USAGE_KEYING_INCREMENTS = 16777216,
/**
 * When loading, the resource for this property can be set at the end of loading.
 *
 * **Deprecated.** This hint is not used anywhere and will be removed in the future.
 *
*/
PROPERTY_USAGE_DEFERRED_SET_RESOURCE = 33554432,
/**
 * When this property is a [Resource] and base object is a [Node], a resource instance will be automatically created whenever the node is created in the editor.
 *
*/
PROPERTY_USAGE_EDITOR_INSTANTIATE_OBJECT = 67108864,
/**
 * The property is considered a basic setting and will appear even when advanced mode is disabled. Used for project settings.
 *
*/
PROPERTY_USAGE_EDITOR_BASIC_SETTING = 134217728,
/**
 * The property is read-only in the [EditorInspector].
 *
*/
PROPERTY_USAGE_READ_ONLY = 268435456,
/**
 * An export preset property with this flag contains confidential information and is stored separately from the rest of the export preset configuration.
 *
*/
PROPERTY_USAGE_SECRET = 536870912,
/**
 * Default usage (storage and editor).
 *
*/
PROPERTY_USAGE_DEFAULT = 6,
/**
 * Default usage but without showing the property in the editor (storage).
 *
*/
PROPERTY_USAGE_NO_EDITOR = 2
    }
    

    declare enum MethodFlags {
      /**
 * Flag for a normal method.
 *
*/
METHOD_FLAG_NORMAL = 1,
/**
 * Flag for an editor method.
 *
*/
METHOD_FLAG_EDITOR = 2,
/**
 * Flag for a constant method.
 *
*/
METHOD_FLAG_CONST = 4,
/**
 * Flag for a virtual method.
 *
*/
METHOD_FLAG_VIRTUAL = 8,
/**
 * Flag for a method with a variable number of arguments.
 *
*/
METHOD_FLAG_VARARG = 16,
/**
 * Flag for a static method.
 *
*/
METHOD_FLAG_STATIC = 32,
/**
 * Used internally. Allows to not dump core virtual methods (such as [method Object._notification]) to the JSON API.
 *
*/
METHOD_FLAG_OBJECT_CORE = 64,
/**
 * Default method flags (normal).
 *
*/
METHOD_FLAGS_DEFAULT = 1
    }
    

    declare enum Variant_Type {
      /**
 * Variable is `null`.
 *
*/
TYPE_NIL = 0,
/**
 * Variable is of type [bool].
 *
*/
TYPE_BOOL = 1,
/**
 * Variable is of type [int].
 *
*/
TYPE_INT = 2,
/**
 * Variable is of type [float].
 *
*/
TYPE_FLOAT = 3,
/**
 * Variable is of type [String].
 *
*/
TYPE_STRING = 4,
/**
 * Variable is of type [Vector2].
 *
*/
TYPE_VECTOR2 = 5,
/**
 * Variable is of type [Vector2i].
 *
*/
TYPE_VECTOR2I = 6,
/**
 * Variable is of type [Rect2].
 *
*/
TYPE_RECT2 = 7,
/**
 * Variable is of type [Rect2i].
 *
*/
TYPE_RECT2I = 8,
/**
 * Variable is of type [Vector3].
 *
*/
TYPE_VECTOR3 = 9,
/**
 * Variable is of type [Vector3i].
 *
*/
TYPE_VECTOR3I = 10,
/**
 * Variable is of type [Transform2D].
 *
*/
TYPE_TRANSFORM2D = 11,
/**
 * Variable is of type [Vector4].
 *
*/
TYPE_VECTOR4 = 12,
/**
 * Variable is of type [Vector4i].
 *
*/
TYPE_VECTOR4I = 13,
/**
 * Variable is of type [Plane].
 *
*/
TYPE_PLANE = 14,
/**
 * Variable is of type [Quaternion].
 *
*/
TYPE_QUATERNION = 15,
/**
 * Variable is of type [AABB].
 *
*/
TYPE_AABB = 16,
/**
 * Variable is of type [Basis].
 *
*/
TYPE_BASIS = 17,
/**
 * Variable is of type [Transform3D].
 *
*/
TYPE_TRANSFORM3D = 18,
/**
 * Variable is of type [Projection].
 *
*/
TYPE_PROJECTION = 19,
/**
 * Variable is of type [Color].
 *
*/
TYPE_COLOR = 20,
/**
 * Variable is of type [StringName].
 *
*/
TYPE_STRING_NAME = 21,
/**
 * Variable is of type [NodePath].
 *
*/
TYPE_NODE_PATH = 22,
/**
 * Variable is of type [RID].
 *
*/
TYPE_RID = 23,
/**
 * Variable is of type [Object].
 *
*/
TYPE_OBJECT = 24,
/**
 * Variable is of type [Callable].
 *
*/
TYPE_CALLABLE = 25,
/**
 * Variable is of type [Signal].
 *
*/
TYPE_SIGNAL = 26,
/**
 * Variable is of type [Dictionary].
 *
*/
TYPE_DICTIONARY = 27,
/**
 * Variable is of type [Array].
 *
*/
TYPE_ARRAY = 28,
/**
 * Variable is of type [PackedByteArray].
 *
*/
TYPE_PACKED_BYTE_ARRAY = 29,
/**
 * Variable is of type [PackedInt32Array].
 *
*/
TYPE_PACKED_INT32_ARRAY = 30,
/**
 * Variable is of type [PackedInt64Array].
 *
*/
TYPE_PACKED_INT64_ARRAY = 31,
/**
 * Variable is of type [PackedFloat32Array].
 *
*/
TYPE_PACKED_FLOAT32_ARRAY = 32,
/**
 * Variable is of type [PackedFloat64Array].
 *
*/
TYPE_PACKED_FLOAT64_ARRAY = 33,
/**
 * Variable is of type [PackedStringArray].
 *
*/
TYPE_PACKED_STRING_ARRAY = 34,
/**
 * Variable is of type [PackedVector2Array].
 *
*/
TYPE_PACKED_VECTOR2_ARRAY = 35,
/**
 * Variable is of type [PackedVector3Array].
 *
*/
TYPE_PACKED_VECTOR3_ARRAY = 36,
/**
 * Variable is of type [PackedColorArray].
 *
*/
TYPE_PACKED_COLOR_ARRAY = 37,
/**
 * Represents the size of the [enum Variant.Type] enum.
 *
*/
TYPE_MAX = 38
    }
    

    declare enum Variant_Operator {
      /**
 * Equality operator (`==`).
 *
*/
OP_EQUAL = 0,
/**
 * Inequality operator (`!=`).
 *
*/
OP_NOT_EQUAL = 1,
/**
 * Less than operator (`<`).
 *
*/
OP_LESS = 2,
/**
 * Less than or equal operator (`<=`).
 *
*/
OP_LESS_EQUAL = 3,
/**
 * Greater than operator (`>`).
 *
*/
OP_GREATER = 4,
/**
 * Greater than or equal operator (`>=`).
 *
*/
OP_GREATER_EQUAL = 5,
/**
 * Addition operator (`+`).
 *
*/
OP_ADD = 6,
/**
 * Subtraction operator (`-`).
 *
*/
OP_SUBTRACT = 7,
/**
 * Multiplication operator (`*`).
 *
*/
OP_MULTIPLY = 8,
/**
 * Division operator (`/`).
 *
*/
OP_DIVIDE = 9,
/**
 * Unary negation operator (`-`).
 *
*/
OP_NEGATE = 10,
/**
 * Unary plus operator (`+`).
 *
*/
OP_POSITIVE = 11,
/**
 * Remainder/modulo operator (`%`).
 *
*/
OP_MODULE = 12,
/**
 * Power operator (`**`).
 *
*/
OP_POWER = 13,
/**
 * Left shift operator (`<<`).
 *
*/
OP_SHIFT_LEFT = 14,
/**
 * Right shift operator (`>>`).
 *
*/
OP_SHIFT_RIGHT = 15,
/**
 * Bitwise AND operator (`&`).
 *
*/
OP_BIT_AND = 16,
/**
 * Bitwise OR operator (`|`).
 *
*/
OP_BIT_OR = 17,
/**
 * Bitwise XOR operator (`^`).
 *
*/
OP_BIT_XOR = 18,
/**
 * Bitwise NOT operator (`~`).
 *
*/
OP_BIT_NEGATE = 19,
/**
 * Logical AND operator (`and` or `&&`).
 *
*/
OP_AND = 20,
/**
 * Logical OR operator (`or` or `||`).
 *
*/
OP_OR = 21,
/**
 * Logical XOR operator (not implemented in GDScript).
 *
*/
OP_XOR = 22,
/**
 * Logical NOT operator (`not` or `!`).
 *
*/
OP_NOT = 23,
/**
 * Logical IN operator (`in`).
 *
*/
OP_IN = 24,
/**
 * Represents the size of the [enum Variant.Operator] enum.
 *
*/
OP_MAX = 25
    }
    
    