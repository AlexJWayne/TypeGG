
/**
 * The X509Certificate class represents an X509 certificate. Certificates can be loaded and saved like any other [Resource].
 *
 * They can be used as the server certificate in [method StreamPeerTLS.accept_stream] (along with the proper [CryptoKey]), and to specify the only certificate that should be accepted when connecting to a TLS server via [method StreamPeerTLS.connect_to_stream].
 *
*/
declare class X509Certificate extends Resource  {

  
/**
 * The X509Certificate class represents an X509 certificate. Certificates can be loaded and saved like any other [Resource].
 *
 * They can be used as the server certificate in [method StreamPeerTLS.accept_stream] (along with the proper [CryptoKey]), and to specify the only certificate that should be accepted when connecting to a TLS server via [method StreamPeerTLS.connect_to_stream].
 *
*/
  new(): X509Certificate; 
  static "new"(): X509Certificate 



/** Loads a certificate from [param path] ("*.crt" file). */
load(): int;

/** Loads a certificate from the given [param string]. */
load_from_string(): int;

/** Saves a certificate to the given [param path] (should be a "*.crt" file). */
save(): int;

/** Returns a string representation of the certificate, or an empty string if the certificate is invalid. */
save_to_string(): string;

  connect<T extends SignalsOf<X509Certificate>>(signal: T, method: SignalFunction<X509Certificate[T]>): number;






}

