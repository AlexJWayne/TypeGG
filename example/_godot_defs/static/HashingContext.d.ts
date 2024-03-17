
/**
 * The HashingContext class provides an interface for computing cryptographic hashes over multiple iterations. Useful for computing hashes of big files (so you don't have to load them all in memory), network streams, and data streams in general (so you don't have to hold buffers).
 *
 * The [enum HashType] enum shows the supported hashing algorithms.
 *
 * @example 
 * 
 * 
 * const CHUNK_SIZE = 1024
 * func hash_file(path):
 *     # Check that file exists.
 *     if not FileAccess.file_exists(path):
 *         return
 *     # Start a SHA-256 context.
 *     var ctx = HashingContext.new()
 *     ctx.start(HashingContext.HASH_SHA256)
 *     # Open the file to hash.
 *     var file = FileAccess.open(path, FileAccess.READ)
 *     # Update the context after reading each chunk.
 *     while not file.eof_reached():
 *         ctx.update(file.get_buffer(CHUNK_SIZE))
 *     # Get the computed hash.
 *     var res = ctx.finish()
 *     # Print the result as hex string and array.
 *     printt(res.hex_encode(), Array(res))
 * 
 * 
 * public const int ChunkSize = 1024;
 * public void HashFile(string path)
 * {
 *     // Check that file exists.
 *     if (!FileAccess.FileExists(path))
 *     {
 *         return;
 *     }
 *     // Start a SHA-256 context.
 *     var ctx = new HashingContext();
 *     ctx.Start(HashingContext.HashType.Sha256);
 *     // Open the file to hash.
 *     using var file = FileAccess.Open(path, FileAccess.ModeFlags.Read);
 *     // Update the context after reading each chunk.
 *     while (!file.EofReached())
 *     {
 *         ctx.Update(file.GetBuffer(ChunkSize));
 *     }
 *     // Get the computed hash.
 *     byte[] res = ctx.Finish();
 *     // Print the result as hex string and array.
 *     GD.PrintT(res.HexEncode(), (Variant)res);
 * }
 * 
 * @summary 
 * 
 *
*/
declare class HashingContext extends RefCounted  {

  
/**
 * The HashingContext class provides an interface for computing cryptographic hashes over multiple iterations. Useful for computing hashes of big files (so you don't have to load them all in memory), network streams, and data streams in general (so you don't have to hold buffers).
 *
 * The [enum HashType] enum shows the supported hashing algorithms.
 *
 * @example 
 * 
 * 
 * const CHUNK_SIZE = 1024
 * func hash_file(path):
 *     # Check that file exists.
 *     if not FileAccess.file_exists(path):
 *         return
 *     # Start a SHA-256 context.
 *     var ctx = HashingContext.new()
 *     ctx.start(HashingContext.HASH_SHA256)
 *     # Open the file to hash.
 *     var file = FileAccess.open(path, FileAccess.READ)
 *     # Update the context after reading each chunk.
 *     while not file.eof_reached():
 *         ctx.update(file.get_buffer(CHUNK_SIZE))
 *     # Get the computed hash.
 *     var res = ctx.finish()
 *     # Print the result as hex string and array.
 *     printt(res.hex_encode(), Array(res))
 * 
 * 
 * public const int ChunkSize = 1024;
 * public void HashFile(string path)
 * {
 *     // Check that file exists.
 *     if (!FileAccess.FileExists(path))
 *     {
 *         return;
 *     }
 *     // Start a SHA-256 context.
 *     var ctx = new HashingContext();
 *     ctx.Start(HashingContext.HashType.Sha256);
 *     // Open the file to hash.
 *     using var file = FileAccess.Open(path, FileAccess.ModeFlags.Read);
 *     // Update the context after reading each chunk.
 *     while (!file.EofReached())
 *     {
 *         ctx.Update(file.GetBuffer(ChunkSize));
 *     }
 *     // Get the computed hash.
 *     byte[] res = ctx.Finish();
 *     // Print the result as hex string and array.
 *     GD.PrintT(res.HexEncode(), (Variant)res);
 * }
 * 
 * @summary 
 * 
 *
*/
  new(): HashingContext; 
  static "new"(): HashingContext 



/** Closes the current context, and return the computed hash. */
finish(): PackedByteArray;

/** Starts a new hash computation of the given [param type] (e.g. [constant HASH_SHA256] to start computation of a SHA-256). */
start(): int;

/** Updates the computation with the given [param chunk] of data. */
update(): int;

  connect<T extends SignalsOf<HashingContext>>(signal: T, method: SignalFunction<HashingContext[T]>): number;



/**
 * Hashing algorithm: MD5.
 *
*/
static HASH_MD5: any;

/**
 * Hashing algorithm: SHA-1.
 *
*/
static HASH_SHA1: any;

/**
 * Hashing algorithm: SHA-256.
 *
*/
static HASH_SHA256: any;



}

