
/**
 * [EditorSceneFormatImporter] allows to define an importer script for a third-party 3D format.
 *
 * To use [EditorSceneFormatImporter], register it using the [method EditorPlugin.add_scene_format_importer_plugin] method first.
 *
*/
declare class EditorSceneFormatImporter extends RefCounted  {

  
/**
 * [EditorSceneFormatImporter] allows to define an importer script for a third-party 3D format.
 *
 * To use [EditorSceneFormatImporter], register it using the [method EditorPlugin.add_scene_format_importer_plugin] method first.
 *
*/
  new(): EditorSceneFormatImporter; 
  static "new"(): EditorSceneFormatImporter 



/** No documentation provided. */
protected _get_extensions(): PackedStringArray;

/** No documentation provided. */
protected _get_import_flags(): int;

/** No documentation provided. */
protected _get_import_options(): void;

/** No documentation provided. */
protected _get_option_visibility(): any;

/** No documentation provided. */
protected _import_scene(): Object;

  connect<T extends SignalsOf<EditorSceneFormatImporter>>(signal: T, method: SignalFunction<EditorSceneFormatImporter[T]>): number;



/** No documentation provided. */
static IMPORT_SCENE: any;

/** No documentation provided. */
static IMPORT_ANIMATION: any;

/** No documentation provided. */
static IMPORT_FAIL_ON_MISSING_DEPENDENCIES: any;

/** No documentation provided. */
static IMPORT_GENERATE_TANGENT_ARRAYS: any;

/** No documentation provided. */
static IMPORT_USE_NAMED_SKIN_BINDS: any;

/** No documentation provided. */
static IMPORT_DISCARD_MESHES_AND_MATERIALS: any;

/** No documentation provided. */
static IMPORT_FORCE_DISABLE_MESH_COMPRESSION: any;



}

