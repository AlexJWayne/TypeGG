
/**
 * Base class for WebSocket server and client, allowing them to be used as multiplayer peer for the [MultiplayerAPI].
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
declare class WebSocketMultiplayerPeer extends MultiplayerPeer  {

  
/**
 * Base class for WebSocket server and client, allowing them to be used as multiplayer peer for the [MultiplayerAPI].
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
  new(): WebSocketMultiplayerPeer; 
  static "new"(): WebSocketMultiplayerPeer 


/** The extra headers to use during handshake. See [member WebSocketPeer.handshake_headers] for more details. */
handshake_headers: PackedStringArray;

/** The maximum time each peer can stay in a connecting state before being dropped. */
handshake_timeout: float;

/** The inbound buffer size for connected peers. See [member WebSocketPeer.inbound_buffer_size] for more details. */
inbound_buffer_size: int;

/** The maximum number of queued packets for connected peers. See [member WebSocketPeer.max_queued_packets] for more details. */
max_queued_packets: int;

/** The outbound buffer size for connected peers. See [member WebSocketPeer.outbound_buffer_size] for more details. */
outbound_buffer_size: int;

/** The supported WebSocket sub-protocols. See [member WebSocketPeer.supported_protocols] for more details. */
supported_protocols: PackedStringArray;

/**
 * Starts a new multiplayer client connecting to the given [param url]. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional [param tls_client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].
 *
 * **Note:** It is recommended to specify the scheme part of the URL, i.e. the [param url] should start with either `ws://` or `wss://`.
 *
*/
create_client(): int;

/** Starts a new multiplayer server listening on the given [param port]. You can optionally specify a [param bind_address], and provide valid [param tls_server_options] to use TLS. See [method TLSOptions.server]. */
create_server(): int;

/** Returns the [WebSocketPeer] associated to the given [param peer_id]. */
get_peer(): WebSocketPeer;

/** Returns the IP address of the given peer. */
get_peer_address(): string;

/** Returns the remote port of the given peer. */
get_peer_port(): int;

  connect<T extends SignalsOf<WebSocketMultiplayerPeer>>(signal: T, method: SignalFunction<WebSocketMultiplayerPeer[T]>): number;






}

