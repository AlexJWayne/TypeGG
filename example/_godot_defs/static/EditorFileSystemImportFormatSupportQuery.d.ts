
/**
 * This class is used to query and configure a certain import format. It is used in conjunction with asset format import plugins.
 *
*/
declare class EditorFileSystemImportFormatSupportQuery extends RefCounted  {

  
/**
 * This class is used to query and configure a certain import format. It is used in conjunction with asset format import plugins.
 *
*/
  new(): EditorFileSystemImportFormatSupportQuery; 
  static "new"(): EditorFileSystemImportFormatSupportQuery 



/** Return the file extensions supported. */
protected _get_file_extensions(): PackedStringArray;

/** Return whether this importer is active. */
protected _is_active(): boolean;

/** Query support. Return false if import must not continue. */
protected _query(): boolean;

  connect<T extends SignalsOf<EditorFileSystemImportFormatSupportQuery>>(signal: T, method: SignalFunction<EditorFileSystemImportFormatSupportQuery[T]>): number;






}

