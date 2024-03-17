
/**
 * The [PCKPacker] is used to create packages that can be loaded into a running project using [method ProjectSettings.load_resource_pack].
 *
 * @example 
 * 
 * 
 * var packer = PCKPacker.new()
 * packer.pck_start("test.pck")
 * packer.add_file("res://text.txt", "text.txt")
 * packer.flush()
 * 
 * 
 * var packer = new PCKPacker();
 * packer.PckStart("test.pck");
 * packer.AddFile("res://text.txt", "text.txt");
 * packer.Flush();
 * 
 * @summary 
 * 
 *
 * The above [PCKPacker] creates package `test.pck`, then adds a file named `text.txt` at the root of the package.
 *
*/
declare class PCKPacker extends RefCounted  {

  
/**
 * The [PCKPacker] is used to create packages that can be loaded into a running project using [method ProjectSettings.load_resource_pack].
 *
 * @example 
 * 
 * 
 * var packer = PCKPacker.new()
 * packer.pck_start("test.pck")
 * packer.add_file("res://text.txt", "text.txt")
 * packer.flush()
 * 
 * 
 * var packer = new PCKPacker();
 * packer.PckStart("test.pck");
 * packer.AddFile("res://text.txt", "text.txt");
 * packer.Flush();
 * 
 * @summary 
 * 
 *
 * The above [PCKPacker] creates package `test.pck`, then adds a file named `text.txt` at the root of the package.
 *
*/
  new(): PCKPacker; 
  static "new"(): PCKPacker 



/** Adds the [param source_path] file to the current PCK package at the [param pck_path] internal path (should start with [code]res://[/code]). */
add_file(): int;

/** Writes the files specified using all [method add_file] calls since the last flush. If [param verbose] is [code]true[/code], a list of files added will be printed to the console for easier debugging. */
flush(): int;

/** Creates a new PCK file with the name [param pck_name]. The [code].pck[/code] file extension isn't added automatically, so it should be part of [param pck_name] (even though it's not required). */
pck_start(): int;

  connect<T extends SignalsOf<PCKPacker>>(signal: T, method: SignalFunction<PCKPacker[T]>): number;






}

