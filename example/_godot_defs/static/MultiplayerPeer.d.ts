
/**
 * Manages the connection with one or more remote peers acting as server or client and assigning unique IDs to each of them. See also [MultiplayerAPI].
 *
 * **Note:** The [MultiplayerAPI] protocol is an implementation detail and isn't meant to be used by non-Godot servers. It may change without notice.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
declare class MultiplayerPeer extends PacketPeer  {

  
/**
 * Manages the connection with one or more remote peers acting as server or client and assigning unique IDs to each of them. See also [MultiplayerAPI].
 *
 * **Note:** The [MultiplayerAPI] protocol is an implementation detail and isn't meant to be used by non-Godot servers. It may change without notice.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
*/
  new(): MultiplayerPeer; 
  static "new"(): MultiplayerPeer 


/** If [code]true[/code], this [MultiplayerPeer] refuses new connections. */
refuse_new_connections: boolean;

/**
 * The channel to use to send packets. Many network APIs such as ENet and WebRTC allow the creation of multiple independent channels which behaves, in a way, like separate connections. This means that reliable data will only block delivery of other packets on that channel, and ordering will only be in respect to the channel the packet is being sent on. Using different channels to send **different and independent** state updates is a common way to optimize network usage and decrease latency in fast-paced games.
 *
 * **Note:** The default channel (`0`) actually works as 3 separate channels (one for each [enum TransferMode]) so that [constant TRANSFER_MODE_RELIABLE] and [constant TRANSFER_MODE_UNRELIABLE_ORDERED] does not interact with each other by default. Refer to the specific network API documentation (e.g. ENet or WebRTC) to learn how to set up channels correctly.
 *
*/
transfer_channel: int;

/** The manner in which to send packets to the target peer. See [enum TransferMode], and the [method set_target_peer] method. */
transfer_mode: int;

/** Immediately close the multiplayer peer returning to the state [constant CONNECTION_DISCONNECTED]. Connected peers will be dropped without emitting [signal peer_disconnected]. */
close(): void;

/** Disconnects the given [param peer] from this host. If [param force] is [code]true[/code] the [signal peer_disconnected] signal will not be emitted for this peer. */
disconnect_peer(): void;

/** Returns a randomly generated integer that can be used as a network unique ID. */
generate_unique_id(): int;

/** Returns the current state of the connection. See [enum ConnectionStatus]. */
get_connection_status(): int;

/** Returns the channel over which the next available packet was received. See [method PacketPeer.get_available_packet_count]. */
get_packet_channel(): int;

/** Returns the [enum MultiplayerPeer.TransferMode] the remote peer used to send the next available packet. See [method PacketPeer.get_available_packet_count]. */
get_packet_mode(): int;

/** Returns the ID of the [MultiplayerPeer] who sent the next available packet. See [method PacketPeer.get_available_packet_count]. */
get_packet_peer(): int;

/** Returns the ID of this [MultiplayerPeer]. */
get_unique_id(): int;

/** Returns true if the server can act as a relay in the current configuration (i.e. if the higher level [MultiplayerAPI] should notify connected clients of other peers, and implement a relay protocol to allow communication between them). */
is_server_relay_supported(): boolean;

/** Waits up to 1 second to receive a new network event. */
poll(): void;

/**
 * Sets the peer to which packets will be sent.
 *
 * The [param id] can be one of: [constant TARGET_PEER_BROADCAST] to send to all connected peers, [constant TARGET_PEER_SERVER] to send to the peer acting as server, a valid peer ID to send to that specific peer, a negative peer ID to send to all peers except that one. By default, the target peer is [constant TARGET_PEER_BROADCAST].
 *
*/
set_target_peer(): void;

  connect<T extends SignalsOf<MultiplayerPeer>>(signal: T, method: SignalFunction<MultiplayerPeer[T]>): number;



/**
 * The MultiplayerPeer is disconnected.
 *
*/
static CONNECTION_DISCONNECTED: any;

/**
 * The MultiplayerPeer is currently connecting to a server.
 *
*/
static CONNECTION_CONNECTING: any;

/**
 * This MultiplayerPeer is connected.
 *
*/
static CONNECTION_CONNECTED: any;

/**
 * Packets are sent to all connected peers.
 *
*/
static TARGET_PEER_BROADCAST: any;

/**
 * Packets are sent to the remote peer acting as server.
 *
*/
static TARGET_PEER_SERVER: any;

/**
 * Packets are not acknowledged, no resend attempts are made for lost packets. Packets may arrive in any order. Potentially faster than [constant TRANSFER_MODE_UNRELIABLE_ORDERED]. Use for non-critical data, and always consider whether the order matters.
 *
*/
static TRANSFER_MODE_UNRELIABLE: any;

/**
 * Packets are not acknowledged, no resend attempts are made for lost packets. Packets are received in the order they were sent in. Potentially faster than [constant TRANSFER_MODE_RELIABLE]. Use for non-critical data or data that would be outdated if received late due to resend attempt(s) anyway, for example movement and positional data.
 *
*/
static TRANSFER_MODE_UNRELIABLE_ORDERED: any;

/**
 * Packets must be received and resend attempts should be made until the packets are acknowledged. Packets must be received in the order they were sent in. Most reliable transfer mode, but potentially the slowest due to the overhead. Use for critical data that must be transmitted and arrive in order, for example an ability being triggered or a chat message. Consider carefully if the information really is critical, and use sparingly.
 *
*/
static TRANSFER_MODE_RELIABLE: any;


/**
 * Emitted when a remote peer connects.
 *
*/
$peer_connected: Signal<() => void>

/**
 * Emitted when a remote peer has disconnected.
 *
*/
$peer_disconnected: Signal<() => void>

}

