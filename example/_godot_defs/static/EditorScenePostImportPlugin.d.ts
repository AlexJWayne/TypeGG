
/**
 * This plugin type exists to modify the process of importing scenes, allowing to change the content as well as add importer options at every stage of the process.
 *
*/
declare class EditorScenePostImportPlugin extends RefCounted  {

  
/**
 * This plugin type exists to modify the process of importing scenes, allowing to change the content as well as add importer options at every stage of the process.
 *
*/
  new(): EditorScenePostImportPlugin; 
  static "new"(): EditorScenePostImportPlugin 



/** Override to add general import options. These will appear in the main import dock on the editor. Add options via [method add_import_option] and [method add_import_option_advanced]. */
protected _get_import_options(): void;

/** Override to add internal import options. These will appear in the 3D scene import dialog. Add options via [method add_import_option] and [method add_import_option_advanced]. */
protected _get_internal_import_options(): void;

/** Return true whether updating the 3D view of the import dialog needs to be updated if an option has changed. */
protected _get_internal_option_update_view_required(): any;

/** Return true or false whether a given option should be visible. Return null to ignore. */
protected _get_internal_option_visibility(): any;

/** Return true or false whether a given option should be visible. Return null to ignore. */
protected _get_option_visibility(): any;

/** Process a specific node or resource for a given category. */
protected _internal_process(): void;

/** Post process the scene. This function is called after the final scene has been configured. */
protected _post_process(): void;

/** Pre Process the scene. This function is called right after the scene format loader loaded the scene and no changes have been made. */
protected _pre_process(): void;

/** Add a specific import option (name and default value only). This function can only be called from [method _get_import_options] and [method _get_internal_import_options]. */
add_import_option(): void;

/** Add a specific import option. This function can only be called from [method _get_import_options] and [method _get_internal_import_options]. */
add_import_option_advanced(): void;

/** Query the value of an option. This function can only be called from those querying visibility, or processing. */
get_option_value(): any;

  connect<T extends SignalsOf<EditorScenePostImportPlugin>>(signal: T, method: SignalFunction<EditorScenePostImportPlugin[T]>): number;



/** No documentation provided. */
static INTERNAL_IMPORT_CATEGORY_NODE: any;

/** No documentation provided. */
static INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE: any;

/** No documentation provided. */
static INTERNAL_IMPORT_CATEGORY_MESH: any;

/** No documentation provided. */
static INTERNAL_IMPORT_CATEGORY_MATERIAL: any;

/** No documentation provided. */
static INTERNAL_IMPORT_CATEGORY_ANIMATION: any;

/** No documentation provided. */
static INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE: any;

/** No documentation provided. */
static INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE: any;

/** No documentation provided. */
static INTERNAL_IMPORT_CATEGORY_MAX: any;



}

