
/**
 * This class holds the context information required for encryption and decryption operations with AES (Advanced Encryption Standard). Both AES-ECB and AES-CBC modes are supported.
 *
 * @example 
 * 
 * 
 * extends Node
 * var aes = AESContext.new()
 * func _ready():
 *     var key = "My secret key!!!" # Key must be either 16 or 32 bytes.
 *     var data = "My secret text!!" # Data size must be multiple of 16 bytes, apply padding if needed.
 *     # Encrypt ECB
 *     aes.start(AESContext.MODE_ECB_ENCRYPT, key.to_utf8_buffer())
 *     var encrypted = aes.update(data.to_utf8_buffer())
 *     aes.finish()
 *     # Decrypt ECB
 *     aes.start(AESContext.MODE_ECB_DECRYPT, key.to_utf8_buffer())
 *     var decrypted = aes.update(encrypted)
 *     aes.finish()
 *     # Check ECB
 *     assert(decrypted == data.to_utf8_buffer())
 *     var iv = "My secret iv!!!!" # IV must be of exactly 16 bytes.
 *     # Encrypt CBC
 *     aes.start(AESContext.MODE_CBC_ENCRYPT, key.to_utf8_buffer(), iv.to_utf8_buffer())
 *     encrypted = aes.update(data.to_utf8_buffer())
 *     aes.finish()
 *     # Decrypt CBC
 *     aes.start(AESContext.MODE_CBC_DECRYPT, key.to_utf8_buffer(), iv.to_utf8_buffer())
 *     decrypted = aes.update(encrypted)
 *     aes.finish()
 *     # Check CBC
 *     assert(decrypted == data.to_utf8_buffer())
 * 
 * 
 * using Godot;
 * using System.Diagnostics;
 * public partial class MyNode : Node
 * {
 *     private AesContext _aes = new AesContext();
 *     public override void _Ready()
 *     {
 *         string key = "My secret key!!!"; // Key must be either 16 or 32 bytes.
 *         string data = "My secret text!!"; // Data size must be multiple of 16 bytes, apply padding if needed.
 *         // Encrypt ECB
 *         _aes.Start(AesContext.Mode.EcbEncrypt, key.ToUtf8Buffer());
 *         byte[] encrypted = _aes.Update(data.ToUtf8Buffer());
 *         _aes.Finish();
 *         // Decrypt ECB
 *         _aes.Start(AesContext.Mode.EcbDecrypt, key.ToUtf8Buffer());
 *         byte[] decrypted = _aes.Update(encrypted);
 *         _aes.Finish();
 *         // Check ECB
 *         Debug.Assert(decrypted == data.ToUtf8Buffer());
 *         string iv = "My secret iv!!!!"; // IV must be of exactly 16 bytes.
 *         // Encrypt CBC
 *         _aes.Start(AesContext.Mode.EcbEncrypt, key.ToUtf8Buffer(), iv.ToUtf8Buffer());
 *         encrypted = _aes.Update(data.ToUtf8Buffer());
 *         _aes.Finish();
 *         // Decrypt CBC
 *         _aes.Start(AesContext.Mode.EcbDecrypt, key.ToUtf8Buffer(), iv.ToUtf8Buffer());
 *         decrypted = _aes.Update(encrypted);
 *         _aes.Finish();
 *         // Check CBC
 *         Debug.Assert(decrypted == data.ToUtf8Buffer());
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
declare class AESContext extends RefCounted  {

  
/**
 * This class holds the context information required for encryption and decryption operations with AES (Advanced Encryption Standard). Both AES-ECB and AES-CBC modes are supported.
 *
 * @example 
 * 
 * 
 * extends Node
 * var aes = AESContext.new()
 * func _ready():
 *     var key = "My secret key!!!" # Key must be either 16 or 32 bytes.
 *     var data = "My secret text!!" # Data size must be multiple of 16 bytes, apply padding if needed.
 *     # Encrypt ECB
 *     aes.start(AESContext.MODE_ECB_ENCRYPT, key.to_utf8_buffer())
 *     var encrypted = aes.update(data.to_utf8_buffer())
 *     aes.finish()
 *     # Decrypt ECB
 *     aes.start(AESContext.MODE_ECB_DECRYPT, key.to_utf8_buffer())
 *     var decrypted = aes.update(encrypted)
 *     aes.finish()
 *     # Check ECB
 *     assert(decrypted == data.to_utf8_buffer())
 *     var iv = "My secret iv!!!!" # IV must be of exactly 16 bytes.
 *     # Encrypt CBC
 *     aes.start(AESContext.MODE_CBC_ENCRYPT, key.to_utf8_buffer(), iv.to_utf8_buffer())
 *     encrypted = aes.update(data.to_utf8_buffer())
 *     aes.finish()
 *     # Decrypt CBC
 *     aes.start(AESContext.MODE_CBC_DECRYPT, key.to_utf8_buffer(), iv.to_utf8_buffer())
 *     decrypted = aes.update(encrypted)
 *     aes.finish()
 *     # Check CBC
 *     assert(decrypted == data.to_utf8_buffer())
 * 
 * 
 * using Godot;
 * using System.Diagnostics;
 * public partial class MyNode : Node
 * {
 *     private AesContext _aes = new AesContext();
 *     public override void _Ready()
 *     {
 *         string key = "My secret key!!!"; // Key must be either 16 or 32 bytes.
 *         string data = "My secret text!!"; // Data size must be multiple of 16 bytes, apply padding if needed.
 *         // Encrypt ECB
 *         _aes.Start(AesContext.Mode.EcbEncrypt, key.ToUtf8Buffer());
 *         byte[] encrypted = _aes.Update(data.ToUtf8Buffer());
 *         _aes.Finish();
 *         // Decrypt ECB
 *         _aes.Start(AesContext.Mode.EcbDecrypt, key.ToUtf8Buffer());
 *         byte[] decrypted = _aes.Update(encrypted);
 *         _aes.Finish();
 *         // Check ECB
 *         Debug.Assert(decrypted == data.ToUtf8Buffer());
 *         string iv = "My secret iv!!!!"; // IV must be of exactly 16 bytes.
 *         // Encrypt CBC
 *         _aes.Start(AesContext.Mode.EcbEncrypt, key.ToUtf8Buffer(), iv.ToUtf8Buffer());
 *         encrypted = _aes.Update(data.ToUtf8Buffer());
 *         _aes.Finish();
 *         // Decrypt CBC
 *         _aes.Start(AesContext.Mode.EcbDecrypt, key.ToUtf8Buffer(), iv.ToUtf8Buffer());
 *         decrypted = _aes.Update(encrypted);
 *         _aes.Finish();
 *         // Check CBC
 *         Debug.Assert(decrypted == data.ToUtf8Buffer());
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
  new(): AESContext; 
  static "new"(): AESContext 



/** Close this AES context so it can be started again. See [method start]. */
finish(): void;

/**
 * Get the current IV state for this context (IV gets updated when calling [method update]). You normally don't need this function.
 *
 * **Note:** This function only makes sense when the context is started with [constant MODE_CBC_ENCRYPT] or [constant MODE_CBC_DECRYPT].
 *
*/
get_iv_state(): PackedByteArray;

/** Start the AES context in the given [param mode]. A [param key] of either 16 or 32 bytes must always be provided, while an [param iv] (initialization vector) of exactly 16 bytes, is only needed when [param mode] is either [constant MODE_CBC_ENCRYPT] or [constant MODE_CBC_DECRYPT]. */
start(): int;

/**
 * Run the desired operation for this AES context. Will return a [PackedByteArray] containing the result of encrypting (or decrypting) the given [param src]. See [method start] for mode of operation.
 *
 * **Note:** The size of [param src] must be a multiple of 16. Apply some padding if needed.
 *
*/
update(): PackedByteArray;

  connect<T extends SignalsOf<AESContext>>(signal: T, method: SignalFunction<AESContext[T]>): number;



/**
 * AES electronic codebook encryption mode.
 *
*/
static MODE_ECB_ENCRYPT: any;

/**
 * AES electronic codebook decryption mode.
 *
*/
static MODE_ECB_DECRYPT: any;

/**
 * AES cipher blocker chaining encryption mode.
 *
*/
static MODE_CBC_ENCRYPT: any;

/**
 * AES cipher blocker chaining decryption mode.
 *
*/
static MODE_CBC_DECRYPT: any;

/**
 * Maximum value for the mode enum.
 *
*/
static MODE_MAX: any;



}

