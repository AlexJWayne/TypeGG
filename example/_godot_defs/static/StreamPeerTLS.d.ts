
/**
 * A stream peer that handles TLS connections. This object can be used to connect to a TLS server or accept a single TLS client connection.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
declare class StreamPeerTLS extends StreamPeer  {

  
/**
 * A stream peer that handles TLS connections. This object can be used to connect to a TLS server or accept a single TLS client connection.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
  new(): StreamPeerTLS; 
  static "new"(): StreamPeerTLS 



/** Accepts a peer connection as a server using the given [param server_options]. See [method TLSOptions.server]. */
accept_stream(): int;

/** Connects to a peer using an underlying [StreamPeer] [param stream] and verifying the remote certificate is correctly signed for the given [param common_name]. You can pass the optional [param client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe]. */
connect_to_stream(): int;

/** Disconnects from host. */
disconnect_from_stream(): void;

/** Returns the status of the connection. See [enum Status] for values. */
get_status(): int;

/** Returns the underlying [StreamPeer] connection, used in [method accept_stream] or [method connect_to_stream]. */
get_stream(): StreamPeer;

/** Poll the connection to check for incoming bytes. Call this right before [method StreamPeer.get_available_bytes] for it to work properly. */
poll(): void;

  connect<T extends SignalsOf<StreamPeerTLS>>(signal: T, method: SignalFunction<StreamPeerTLS[T]>): number;



/**
 * A status representing a [StreamPeerTLS] that is disconnected.
 *
*/
static STATUS_DISCONNECTED: any;

/**
 * A status representing a [StreamPeerTLS] during handshaking.
 *
*/
static STATUS_HANDSHAKING: any;

/**
 * A status representing a [StreamPeerTLS] that is connected to a host.
 *
*/
static STATUS_CONNECTED: any;

/**
 * A status representing a [StreamPeerTLS] in error state.
 *
*/
static STATUS_ERROR: any;

/**
 * An error status that shows a mismatch in the TLS certificate domain presented by the host and the domain requested for validation.
 *
*/
static STATUS_ERROR_HOSTNAME_MISMATCH: any;



}

