
/**
 * This class is designed to be inherited from a GDExtension plugin to implement custom networking layers for the multiplayer API (such as WebRTC). All the methods below **must** be implemented to have a working custom multiplayer implementation. See also [MultiplayerAPI].
 *
*/
declare class MultiplayerPeerExtension extends MultiplayerPeer  {

  
/**
 * This class is designed to be inherited from a GDExtension plugin to implement custom networking layers for the multiplayer API (such as WebRTC). All the methods below **must** be implemented to have a working custom multiplayer implementation. See also [MultiplayerAPI].
 *
*/
  new(): MultiplayerPeerExtension; 
  static "new"(): MultiplayerPeerExtension 



/** Called when the multiplayer peer should be immediately closed (see [method MultiplayerPeer.close]). */
protected _close(): void;

/** Called when the connected [param p_peer] should be forcibly disconnected (see [method MultiplayerPeer.disconnect_peer]). */
protected _disconnect_peer(): void;

/** Called when the available packet count is internally requested by the [MultiplayerAPI]. */
protected _get_available_packet_count(): int;

/** Called when the connection status is requested on the [MultiplayerPeer] (see [method MultiplayerPeer.get_connection_status]). */
protected _get_connection_status(): int;

/** Called when the maximum allowed packet size (in bytes) is requested by the [MultiplayerAPI]. */
protected _get_max_packet_size(): int;

/** Called when a packet needs to be received by the [MultiplayerAPI], with [param r_buffer_size] being the size of the binary [param r_buffer] in bytes. */
protected _get_packet(): int;

/** Called to get the channel over which the next available packet was received. See [method MultiplayerPeer.get_packet_channel]. */
protected _get_packet_channel(): int;

/** Called to get the [enum MultiplayerPeer.TransferMode] the remote peer used to send the next available packet. See [method MultiplayerPeer.get_packet_mode]. */
protected _get_packet_mode(): int;

/** Called when the ID of the [MultiplayerPeer] who sent the most recent packet is requested (see [method MultiplayerPeer.get_packet_peer]). */
protected _get_packet_peer(): int;

/** Called when a packet needs to be received by the [MultiplayerAPI], if [method _get_packet] isn't implemented. Use this when extending this class via GDScript. */
protected _get_packet_script(): PackedByteArray;

/** Called when the transfer channel to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
protected _get_transfer_channel(): int;

/** Called when the transfer mode to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
protected _get_transfer_mode(): int;

/** Called when the unique ID of this [MultiplayerPeer] is requested (see [method MultiplayerPeer.get_unique_id]). The value must be between [code]1[/code] and [code]2147483647[/code]. */
protected _get_unique_id(): int;

/** Called when the "refuse new connections" status is requested on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
protected _is_refusing_new_connections(): boolean;

/** Called when the "is server" status is requested on the [MultiplayerAPI]. See [method MultiplayerAPI.is_server]. */
protected _is_server(): boolean;

/** Called to check if the server can act as a relay in the current configuration. See [method MultiplayerPeer.is_server_relay_supported]. */
protected _is_server_relay_supported(): boolean;

/** Called when the [MultiplayerAPI] is polled. See [method MultiplayerAPI.poll]. */
protected _poll(): void;

/** Called when a packet needs to be sent by the [MultiplayerAPI], with [param p_buffer_size] being the size of the binary [param p_buffer] in bytes. */
protected _put_packet(): int;

/** Called when a packet needs to be sent by the [MultiplayerAPI], if [method _put_packet] isn't implemented. Use this when extending this class via GDScript. */
protected _put_packet_script(): int;

/** Called when the "refuse new connections" status is set on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
protected _set_refuse_new_connections(): void;

/** Called when the target peer to use is set for this [MultiplayerPeer] (see [method MultiplayerPeer.set_target_peer]). */
protected _set_target_peer(): void;

/** Called when the channel to use is set for this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
protected _set_transfer_channel(): void;

/** Called when the transfer mode is set on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
protected _set_transfer_mode(): void;

  connect<T extends SignalsOf<MultiplayerPeerExtension>>(signal: T, method: SignalFunction<MultiplayerPeerExtension[T]>): number;






}

