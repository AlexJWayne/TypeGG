
/**
 * TLSOptions abstracts the configuration options for the [StreamPeerTLS] and [PacketPeerDTLS] classes.
 *
 * Objects of this class cannot be instantiated directly, and one of the static methods [method client], [method client_unsafe], or [method server] should be used instead.
 *
 * @example 
 * 
 * 
 * # Create a TLS client configuration which uses our custom trusted CA chain.
 * var client_trusted_cas = load("res://my_trusted_cas.crt")
 * var client_tls_options = TLSOptions.client(client_trusted_cas)
 * # Create a TLS server configuration.
 * var server_certs = load("res://my_server_cas.crt")
 * var server_key = load("res://my_server_key.key")
 * var server_tls_options = TLSOptions.server(server_key, server_certs)
 * 
 * @summary 
 * 
 *
*/
declare class TLSOptions extends RefCounted  {

  
/**
 * TLSOptions abstracts the configuration options for the [StreamPeerTLS] and [PacketPeerDTLS] classes.
 *
 * Objects of this class cannot be instantiated directly, and one of the static methods [method client], [method client_unsafe], or [method server] should be used instead.
 *
 * @example 
 * 
 * 
 * # Create a TLS client configuration which uses our custom trusted CA chain.
 * var client_trusted_cas = load("res://my_trusted_cas.crt")
 * var client_tls_options = TLSOptions.client(client_trusted_cas)
 * # Create a TLS server configuration.
 * var server_certs = load("res://my_server_cas.crt")
 * var server_key = load("res://my_server_key.key")
 * var server_tls_options = TLSOptions.server(server_key, server_certs)
 * 
 * @summary 
 * 
 *
*/
  new(): TLSOptions; 
  static "new"(): TLSOptions 



/**
 * Creates a TLS client configuration which validates certificates and their common names (fully qualified domain names).
 *
 * You can specify a custom [param trusted_chain] of certification authorities (the default CA list will be used if `null`), and optionally provide a [param common_name_override] if you expect the certificate to have a common name other than the server FQDN.
 *
 * **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.
 *
*/
client(): TLSOptions;

/**
 * Creates an **unsafe** TLS client configuration where certificate validation is optional. You can optionally provide a valid [param trusted_chain], but the common name of the certificates will never be checked. Using this configuration for purposes other than testing **is not recommended**.
 *
 * **Note:** On the Web platform, TLS verification is always enforced against the CA list of the web browser. This is considered a security feature.
 *
*/
client_unsafe(): TLSOptions;

/**
 * Creates a TLS server configuration using the provided [param key] and [param certificate].
 *
 * **Note:** The [param certificate] should include the full certificate chain up to the signing CA (certificates file can be concatenated using a general purpose text editor).
 *
*/
server(): TLSOptions;

  connect<T extends SignalsOf<TLSOptions>>(signal: T, method: SignalFunction<TLSOptions[T]>): number;






}

