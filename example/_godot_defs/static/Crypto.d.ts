
/**
 * The Crypto class provides access to advanced cryptographic functionalities.
 *
 * Currently, this includes asymmetric key encryption/decryption, signing/verification, and generating cryptographically secure random bytes, RSA keys, HMAC digests, and self-signed [X509Certificate]s.
 *
 * @example 
 * 
 * 
 * extends Node
 * var crypto = Crypto.new()
 * var key = CryptoKey.new()
 * var cert = X509Certificate.new()
 * func _ready():
 *     # Generate new RSA key.
 *     key = crypto.generate_rsa(4096)
 *     # Generate new self-signed certificate with the given key.
 *     cert = crypto.generate_self_signed_certificate(key, "CN=mydomain.com,O=My Game Company,C=IT")
 *     # Save key and certificate in the user folder.
 *     key.save("user://generated.key")
 *     cert.save("user://generated.crt")
 *     # Encryption
 *     var data = "Some data"
 *     var encrypted = crypto.encrypt(key, data.to_utf8_buffer())
 *     # Decryption
 *     var decrypted = crypto.decrypt(key, encrypted)
 *     # Signing
 *     var signature = crypto.sign(HashingContext.HASH_SHA256, data.sha256_buffer(), key)
 *     # Verifying
 *     var verified = crypto.verify(HashingContext.HASH_SHA256, data.sha256_buffer(), signature, key)
 *     # Checks
 *     assert(verified)
 *     assert(data.to_utf8_buffer() == decrypted)
 * 
 * 
 * using Godot;
 * using System.Diagnostics;
 * public partial class MyNode : Node
 * {
 *     private Crypto _crypto = new Crypto();
 *     private CryptoKey _key = new CryptoKey();
 *     private X509Certificate _cert = new X509Certificate();
 *     public override void _Ready()
 *     {
 *         // Generate new RSA key.
 *         _key = _crypto.GenerateRsa(4096);
 *         // Generate new self-signed certificate with the given key.
 *         _cert = _crypto.GenerateSelfSignedCertificate(_key, "CN=mydomain.com,O=My Game Company,C=IT");
 *         // Save key and certificate in the user folder.
 *         _key.Save("user://generated.key");
 *         _cert.Save("user://generated.crt");
 *         // Encryption
 *         string data = "Some data";
 *         byte[] encrypted = _crypto.Encrypt(_key, data.ToUtf8Buffer());
 *         // Decryption
 *         byte[] decrypted = _crypto.Decrypt(_key, encrypted);
 *         // Signing
 *         byte[] signature = _crypto.Sign(HashingContext.HashType.Sha256, Data.Sha256Buffer(), _key);
 *         // Verifying
 *         bool verified = _crypto.Verify(HashingContext.HashType.Sha256, Data.Sha256Buffer(), signature, _key);
 *         // Checks
 *         Debug.Assert(verified);
 *         Debug.Assert(data.ToUtf8Buffer() == decrypted);
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
declare class Crypto extends RefCounted  {

  
/**
 * The Crypto class provides access to advanced cryptographic functionalities.
 *
 * Currently, this includes asymmetric key encryption/decryption, signing/verification, and generating cryptographically secure random bytes, RSA keys, HMAC digests, and self-signed [X509Certificate]s.
 *
 * @example 
 * 
 * 
 * extends Node
 * var crypto = Crypto.new()
 * var key = CryptoKey.new()
 * var cert = X509Certificate.new()
 * func _ready():
 *     # Generate new RSA key.
 *     key = crypto.generate_rsa(4096)
 *     # Generate new self-signed certificate with the given key.
 *     cert = crypto.generate_self_signed_certificate(key, "CN=mydomain.com,O=My Game Company,C=IT")
 *     # Save key and certificate in the user folder.
 *     key.save("user://generated.key")
 *     cert.save("user://generated.crt")
 *     # Encryption
 *     var data = "Some data"
 *     var encrypted = crypto.encrypt(key, data.to_utf8_buffer())
 *     # Decryption
 *     var decrypted = crypto.decrypt(key, encrypted)
 *     # Signing
 *     var signature = crypto.sign(HashingContext.HASH_SHA256, data.sha256_buffer(), key)
 *     # Verifying
 *     var verified = crypto.verify(HashingContext.HASH_SHA256, data.sha256_buffer(), signature, key)
 *     # Checks
 *     assert(verified)
 *     assert(data.to_utf8_buffer() == decrypted)
 * 
 * 
 * using Godot;
 * using System.Diagnostics;
 * public partial class MyNode : Node
 * {
 *     private Crypto _crypto = new Crypto();
 *     private CryptoKey _key = new CryptoKey();
 *     private X509Certificate _cert = new X509Certificate();
 *     public override void _Ready()
 *     {
 *         // Generate new RSA key.
 *         _key = _crypto.GenerateRsa(4096);
 *         // Generate new self-signed certificate with the given key.
 *         _cert = _crypto.GenerateSelfSignedCertificate(_key, "CN=mydomain.com,O=My Game Company,C=IT");
 *         // Save key and certificate in the user folder.
 *         _key.Save("user://generated.key");
 *         _cert.Save("user://generated.crt");
 *         // Encryption
 *         string data = "Some data";
 *         byte[] encrypted = _crypto.Encrypt(_key, data.ToUtf8Buffer());
 *         // Decryption
 *         byte[] decrypted = _crypto.Decrypt(_key, encrypted);
 *         // Signing
 *         byte[] signature = _crypto.Sign(HashingContext.HashType.Sha256, Data.Sha256Buffer(), _key);
 *         // Verifying
 *         bool verified = _crypto.Verify(HashingContext.HashType.Sha256, Data.Sha256Buffer(), signature, _key);
 *         // Checks
 *         Debug.Assert(verified);
 *         Debug.Assert(data.ToUtf8Buffer() == decrypted);
 *     }
 * }
 * 
 * @summary 
 * 
 *
*/
  new(): Crypto; 
  static "new"(): Crypto 



/**
 * Compares two [PackedByteArray]s for equality without leaking timing information in order to prevent timing attacks.
 *
 * See [url=https://paragonie.com/blog/2015/11/preventing-timing-attacks-on-string-comparison-with-double-hmac-strategy]this blog post[/url] for more information.
 *
*/
constant_time_compare(): boolean;

/**
 * Decrypt the given [param ciphertext] with the provided private [param key].
 *
 * **Note:** The maximum size of accepted ciphertext is limited by the key size.
 *
*/
decrypt(): PackedByteArray;

/**
 * Encrypt the given [param plaintext] with the provided public [param key].
 *
 * **Note:** The maximum size of accepted plaintext is limited by the key size.
 *
*/
encrypt(): PackedByteArray;

/** Generates a [PackedByteArray] of cryptographically secure random bytes with given [param size]. */
generate_random_bytes(): PackedByteArray;

/** Generates an RSA [CryptoKey] that can be used for creating self-signed certificates and passed to [method StreamPeerTLS.accept_stream]. */
generate_rsa(): CryptoKey;

/**
 * Generates a self-signed [X509Certificate] from the given [CryptoKey] and [param issuer_name]. The certificate validity will be defined by [param not_before] and [param not_after] (first valid date and last valid date). The [param issuer_name] must contain at least "CN=" (common name, i.e. the domain name), "O=" (organization, i.e. your company name), "C=" (country, i.e. 2 lettered ISO-3166 code of the country the organization is based in).
 *
 * A small example to generate an RSA key and a X509 self-signed certificate.
 *
 * @example 
 * 
 * 
 * var crypto = Crypto.new()
 * # Generate 4096 bits RSA key.
 * var key = crypto.generate_rsa(4096)
 * # Generate self-signed certificate using the given key.
 * var cert = crypto.generate_self_signed_certificate(key, "CN=example.com,O=A Game Company,C=IT")
 * 
 * 
 * var crypto = new Crypto();
 * // Generate 4096 bits RSA key.
 * CryptoKey key = crypto.GenerateRsa(4096);
 * // Generate self-signed certificate using the given key.
 * X509Certificate cert = crypto.GenerateSelfSignedCertificate(key, "CN=mydomain.com,O=My Game Company,C=IT");
 * 
 * @summary 
 * 
 *
*/
generate_self_signed_certificate(): X509Certificate;

/**
 * Generates an [url=https://en.wikipedia.org/wiki/HMAC]HMAC[/url] digest of [param msg] using [param key]. The [param hash_type] parameter is the hashing algorithm that is used for the inner and outer hashes.
 *
 * Currently, only [constant HashingContext.HASH_SHA256] and [constant HashingContext.HASH_SHA1] are supported.
 *
*/
hmac_digest(): PackedByteArray;

/** Sign a given [param hash] of type [param hash_type] with the provided private [param key]. */
sign(): PackedByteArray;

/** Verify that a given [param signature] for [param hash] of type [param hash_type] against the provided public [param key]. */
verify(): boolean;

  connect<T extends SignalsOf<Crypto>>(signal: T, method: SignalFunction<Crypto[T]>): number;






}

