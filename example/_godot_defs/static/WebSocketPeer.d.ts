
/**
 * This class represents WebSocket connection, and can be used as a WebSocket client (RFC 6455-compliant) or as a remote peer of a WebSocket server.
 *
 * You can send WebSocket binary frames using [method PacketPeer.put_packet], and WebSocket text frames using [method send] (prefer text frames when interacting with text-based API). You can check the frame type of the last packet via [method was_string_packet].
 *
 * To start a WebSocket client, first call [method connect_to_url], then regularly call [method poll] (e.g. during [Node] process). You can query the socket state via [method get_ready_state], get the number of pending packets using [method PacketPeer.get_available_packet_count], and retrieve them via [method PacketPeer.get_packet].
 *
 * @example 
 * 
 * 
 * extends Node
 * var socket = WebSocketPeer.new()
 * func _ready():
 *     socket.connect_to_url("wss://example.com")
 * func _process(delta):
 *     socket.poll()
 *     var state = socket.get_ready_state()
 *     if state == WebSocketPeer.STATE_OPEN:
 *         while socket.get_available_packet_count():
 *             print("Packet: ", socket.get_packet())
 *     elif state == WebSocketPeer.STATE_CLOSING:
 *         # Keep polling to achieve proper close.
 *         pass
 *     elif state == WebSocketPeer.STATE_CLOSED:
 *         var code = socket.get_close_code()
 *         var reason = socket.get_close_reason()
 *         print("WebSocket closed with code: %d, reason %s. Clean: %s" % [code, reason, code != -1])
 *         set_process(false) # Stop processing.
 * 
 * @summary 
 * 
 *
 * To use the peer as part of a WebSocket server refer to [method accept_stream] and the online tutorial.
 *
*/
declare class WebSocketPeer extends PacketPeer  {

  
/**
 * This class represents WebSocket connection, and can be used as a WebSocket client (RFC 6455-compliant) or as a remote peer of a WebSocket server.
 *
 * You can send WebSocket binary frames using [method PacketPeer.put_packet], and WebSocket text frames using [method send] (prefer text frames when interacting with text-based API). You can check the frame type of the last packet via [method was_string_packet].
 *
 * To start a WebSocket client, first call [method connect_to_url], then regularly call [method poll] (e.g. during [Node] process). You can query the socket state via [method get_ready_state], get the number of pending packets using [method PacketPeer.get_available_packet_count], and retrieve them via [method PacketPeer.get_packet].
 *
 * @example 
 * 
 * 
 * extends Node
 * var socket = WebSocketPeer.new()
 * func _ready():
 *     socket.connect_to_url("wss://example.com")
 * func _process(delta):
 *     socket.poll()
 *     var state = socket.get_ready_state()
 *     if state == WebSocketPeer.STATE_OPEN:
 *         while socket.get_available_packet_count():
 *             print("Packet: ", socket.get_packet())
 *     elif state == WebSocketPeer.STATE_CLOSING:
 *         # Keep polling to achieve proper close.
 *         pass
 *     elif state == WebSocketPeer.STATE_CLOSED:
 *         var code = socket.get_close_code()
 *         var reason = socket.get_close_reason()
 *         print("WebSocket closed with code: %d, reason %s. Clean: %s" % [code, reason, code != -1])
 *         set_process(false) # Stop processing.
 * 
 * @summary 
 * 
 *
 * To use the peer as part of a WebSocket server refer to [method accept_stream] and the online tutorial.
 *
*/
  new(): WebSocketPeer; 
  static "new"(): WebSocketPeer 


/**
 * The extra HTTP headers to be sent during the WebSocket handshake.
 *
 * **Note:** Not supported in Web exports due to browsers' restrictions.
 *
*/
handshake_headers: PackedStringArray;

/** The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the inbound packets). */
inbound_buffer_size: int;

/** The maximum amount of packets that will be allowed in the queues (both inbound and outbound). */
max_queued_packets: int;

/** The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the outbound packets). */
outbound_buffer_size: int;

/** The WebSocket sub-protocols allowed during the WebSocket handshake. */
supported_protocols: PackedStringArray;

/**
 * Accepts a peer connection performing the HTTP handshake as a WebSocket server. The [param stream] must be a valid TCP stream retrieved via [method TCPServer.take_connection], or a TLS stream accepted via [method StreamPeerTLS.accept_stream].
 *
 * **Note:** Not supported in Web exports due to browsers' restrictions.
 *
*/
accept_stream(): int;

/**
 * Closes this WebSocket connection. [param code] is the status code for the closure (see RFC 6455 section 7.4 for a list of valid status codes). [param reason] is the human readable reason for closing the connection (can be any UTF-8 string that's smaller than 123 bytes). If [param code] is negative, the connection will be closed immediately without notifying the remote peer.
 *
 * **Note:** To achieve a clean close, you will need to keep polling until [constant STATE_CLOSED] is reached.
 *
 * **Note:** The Web export might not support all status codes. Please refer to browser-specific documentation for more details.
 *
*/
close(): void;

/**
 * Connects to the given URL. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional [param tls_client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].
 *
 * **Note:** To avoid mixed content warnings or errors in Web, you may have to use a [param url] that starts with `wss://` (secure) instead of `ws://`. When doing so, make sure to use the fully qualified domain name that matches the one defined in the server's TLS certificate. Do not connect directly via the IP address for `wss://` connections, as it won't match with the TLS certificate.
 *
*/
connect_to_url(): int;

/** Returns the received WebSocket close frame status code, or [code]-1[/code] when the connection was not cleanly closed. Only call this method when [method get_ready_state] returns [constant STATE_CLOSED]. */
get_close_code(): int;

/** Returns the received WebSocket close frame status reason string. Only call this method when [method get_ready_state] returns [constant STATE_CLOSED]. */
get_close_reason(): string;

/**
 * Returns the IP address of the connected peer.
 *
 * **Note:** Not available in the Web export.
 *
*/
get_connected_host(): string;

/**
 * Returns the remote port of the connected peer.
 *
 * **Note:** Not available in the Web export.
 *
*/
get_connected_port(): int;

/** Returns the current amount of data in the outbound websocket buffer. [b]Note:[/b] Web exports use WebSocket.bufferedAmount, while other platforms use an internal buffer. */
get_current_outbound_buffered_amount(): int;

/** Returns the ready state of the connection. See [enum State]. */
get_ready_state(): int;

/** Returns the URL requested by this peer. The URL is derived from the [code]url[/code] passed to [method connect_to_url] or from the HTTP headers when acting as server (i.e. when using [method accept_stream]). */
get_requested_url(): string;

/** Returns the selected WebSocket sub-protocol for this connection or an empty string if the sub-protocol has not been selected yet. */
get_selected_protocol(): string;

/** Updates the connection state and receive incoming packets. Call this function regularly to keep it in a clean state. */
poll(): void;

/** Sends the given [param message] using the desired [param write_mode]. When sending a [String], prefer using [method send_text]. */
send(): int;

/** Sends the given [param message] using WebSocket text mode. Prefer this method over [method PacketPeer.put_packet] when interacting with third-party text-based API (e.g. when using [JSON] formatted messages). */
send_text(): int;

/**
 * Disable Nagle's algorithm on the underling TCP socket (default). See [method StreamPeerTCP.set_no_delay] for more information.
 *
 * **Note:** Not available in the Web export.
 *
*/
set_no_delay(): void;

/** Returns [code]true[/code] if the last received packet was sent as a text payload. See [enum WriteMode]. */
was_string_packet(): boolean;

  connect<T extends SignalsOf<WebSocketPeer>>(signal: T, method: SignalFunction<WebSocketPeer[T]>): number;



/**
 * Specifies that WebSockets messages should be transferred as text payload (only valid UTF-8 is allowed).
 *
*/
static WRITE_MODE_TEXT: any;

/**
 * Specifies that WebSockets messages should be transferred as binary payload (any byte combination is allowed).
 *
*/
static WRITE_MODE_BINARY: any;

/**
 * Socket has been created. The connection is not yet open.
 *
*/
static STATE_CONNECTING: any;

/**
 * The connection is open and ready to communicate.
 *
*/
static STATE_OPEN: any;

/**
 * The connection is in the process of closing. This means a close request has been sent to the remote peer but confirmation has not been received.
 *
*/
static STATE_CLOSING: any;

/**
 * The connection is closed or couldn't be opened.
 *
*/
static STATE_CLOSED: any;



}

