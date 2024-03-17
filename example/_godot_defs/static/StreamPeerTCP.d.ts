
/**
 * A stream peer that handles TCP connections. This object can be used to connect to TCP servers, or also is returned by a TCP server.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
declare class StreamPeerTCP extends StreamPeer  {

  
/**
 * A stream peer that handles TCP connections. This object can be used to connect to TCP servers, or also is returned by a TCP server.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
  new(): StreamPeerTCP; 
  static "new"(): StreamPeerTCP 



/**
 * Opens the TCP socket, and binds it to the specified local address.
 *
 * This method is generally not needed, and only used to force the subsequent call to [method connect_to_host] to use the specified [param host] and [param port] as source address. This can be desired in some NAT punchthrough techniques, or when forcing the source network interface.
 *
*/
bind(): int;

/** Connects to the specified [code]host:port[/code] pair. A hostname will be resolved if valid. Returns [constant OK] on success. */
connect_to_host(): int;

/** Disconnects from host. */
disconnect_from_host(): void;

/** Returns the IP of this peer. */
get_connected_host(): string;

/** Returns the port of this peer. */
get_connected_port(): int;

/** Returns the local port to which this peer is bound. */
get_local_port(): int;

/** Returns the status of the connection, see [enum Status]. */
get_status(): int;

/** Poll the socket, updating its state. See [method get_status]. */
poll(): int;

/**
 * If [param enabled] is `true`, packets will be sent immediately. If [param enabled] is `false` (the default), packet transfers will be delayed and combined using [url=https://en.wikipedia.org/wiki/Nagle%27s_algorithm]Nagle's algorithm[/url].
 *
 * **Note:** It's recommended to leave this disabled for applications that send large packets or need to transfer a lot of data, as enabling this can decrease the total available bandwidth.
 *
*/
set_no_delay(): void;

  connect<T extends SignalsOf<StreamPeerTCP>>(signal: T, method: SignalFunction<StreamPeerTCP[T]>): number;



/**
 * The initial status of the [StreamPeerTCP]. This is also the status after disconnecting.
 *
*/
static STATUS_NONE: any;

/**
 * A status representing a [StreamPeerTCP] that is connecting to a host.
 *
*/
static STATUS_CONNECTING: any;

/**
 * A status representing a [StreamPeerTCP] that is connected to a host.
 *
*/
static STATUS_CONNECTED: any;

/**
 * A status representing a [StreamPeerTCP] in error state.
 *
*/
static STATUS_ERROR: any;



}

