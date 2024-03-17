
/**
 * A TCP server. Listens to connections on a port and returns a [StreamPeerTCP] when it gets an incoming connection.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
declare class TCPServer extends RefCounted  {

  
/**
 * A TCP server. Listens to connections on a port and returns a [StreamPeerTCP] when it gets an incoming connection.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
  new(): TCPServer; 
  static "new"(): TCPServer 



/** Returns the local port this server is listening to. */
get_local_port(): int;

/** Returns [code]true[/code] if a connection is available for taking. */
is_connection_available(): boolean;

/** Returns [code]true[/code] if the server is currently listening for connections. */
is_listening(): boolean;

/**
 * Listen on the [param port] binding to [param bind_address].
 *
 * If [param bind_address] is set as `"*"` (default), the server will listen on all available addresses (both IPv4 and IPv6).
 *
 * If [param bind_address] is set as `"0.0.0.0"` (for IPv4) or `"::"` (for IPv6), the server will listen on all available addresses matching that IP type.
 *
 * If [param bind_address] is set to any valid address (e.g. `"192.168.1.101"`, `"::1"`, etc), the server will only listen on the interface with that addresses (or fail if no interface with the given address exists).
 *
*/
listen(): int;

/** Stops listening. */
stop(): void;

/** If a connection is available, returns a StreamPeerTCP with the connection. */
take_connection(): StreamPeerTCP;

  connect<T extends SignalsOf<TCPServer>>(signal: T, method: SignalFunction<TCPServer[T]>): number;






}

