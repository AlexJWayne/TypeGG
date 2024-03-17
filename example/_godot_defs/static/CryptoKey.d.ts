
/**
 * The CryptoKey class represents a cryptographic key. Keys can be loaded and saved like any other [Resource].
 *
 * They can be used to generate a self-signed [X509Certificate] via [method Crypto.generate_self_signed_certificate] and as private key in [method StreamPeerTLS.accept_stream] along with the appropriate certificate.
 *
*/
declare class CryptoKey extends Resource  {

  
/**
 * The CryptoKey class represents a cryptographic key. Keys can be loaded and saved like any other [Resource].
 *
 * They can be used to generate a self-signed [X509Certificate] via [method Crypto.generate_self_signed_certificate] and as private key in [method StreamPeerTLS.accept_stream] along with the appropriate certificate.
 *
*/
  new(): CryptoKey; 
  static "new"(): CryptoKey 



/** Returns [code]true[/code] if this CryptoKey only has the public part, and not the private one. */
is_public_only(): boolean;

/**
 * Loads a key from [param path]. If [param public_only] is `true`, only the public key will be loaded.
 *
 * **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.
 *
*/
load(): int;

/** Loads a key from the given [param string_key]. If [param public_only] is [code]true[/code], only the public key will be loaded. */
load_from_string(): int;

/**
 * Saves a key to the given [param path]. If [param public_only] is `true`, only the public key will be saved.
 *
 * **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.
 *
*/
save(): int;

/** Returns a string containing the key in PEM format. If [param public_only] is [code]true[/code], only the public key will be included. */
save_to_string(): string;

  connect<T extends SignalsOf<CryptoKey>>(signal: T, method: SignalFunction<CryptoKey[T]>): number;






}

