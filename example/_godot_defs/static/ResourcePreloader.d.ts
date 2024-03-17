
/**
 * This node is used to preload sub-resources inside a scene, so when the scene is loaded, all the resources are ready to use and can be retrieved from the preloader. You can add the resources using the ResourcePreloader tab when the node is selected.
 *
 * GDScript has a simplified [method @GDScript.preload] built-in method which can be used in most situations, leaving the use of [ResourcePreloader] for more advanced scenarios.
 *
*/
declare class ResourcePreloader extends Node  {

  
/**
 * This node is used to preload sub-resources inside a scene, so when the scene is loaded, all the resources are ready to use and can be retrieved from the preloader. You can add the resources using the ResourcePreloader tab when the node is selected.
 *
 * GDScript has a simplified [method @GDScript.preload] built-in method which can be used in most situations, leaving the use of [ResourcePreloader] for more advanced scenarios.
 *
*/
  new(): ResourcePreloader; 
  static "new"(): ResourcePreloader 



/** Adds a resource to the preloader with the given [param name]. If a resource with the given [param name] already exists, the new resource will be renamed to "[param name] N" where N is an incrementing number starting from 2. */
add_resource(): void;

/** Returns the resource associated to [param name]. */
get_resource(): Resource;

/** Returns the list of resources inside the preloader. */
get_resource_list(): PackedStringArray;

/** Returns [code]true[/code] if the preloader contains a resource associated to [param name]. */
has_resource(): boolean;

/** Removes the resource associated to [param name] from the preloader. */
remove_resource(): void;

/** Renames a resource inside the preloader from [param name] to [param newname]. */
rename_resource(): void;

  connect<T extends SignalsOf<ResourcePreloader>>(signal: T, method: SignalFunction<ResourcePreloader[T]>): number;






}

