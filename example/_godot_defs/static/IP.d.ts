
/**
 * IP contains support functions for the Internet Protocol (IP). TCP/IP support is in different classes (see [StreamPeerTCP] and [TCPServer]). IP provides DNS hostname resolution support, both blocking and threaded.
 *
*/
declare class IPClass extends Object  {

  
/**
 * IP contains support functions for the Internet Protocol (IP). TCP/IP support is in different classes (see [StreamPeerTCP] and [TCPServer]). IP provides DNS hostname resolution support, both blocking and threaded.
 *
*/
  new(): IPClass; 
  static "new"(): IPClass 



/** Removes all of a [param hostname]'s cached references. If no [param hostname] is given, all cached IP addresses are removed. */
clear_cache(): void;

/** Removes a given item [param id] from the queue. This should be used to free a queue after it has completed to enable more queries to happen. */
erase_resolve_item(): void;

/** Returns all the user's current IPv4 and IPv6 addresses as an array. */
get_local_addresses(): PackedStringArray;

/**
 * Returns all network adapters as an array.
 *
 * Each adapter is a dictionary of the form:
 *
 * @example 
 * 
 * {
 *     "index": "1", # Interface index.
 *     "name": "eth0", # Interface name.
 *     "friendly": "Ethernet One", # A friendly name (might be empty).
 *     "addresses": ["192.168.1.101"], # An array of IP addresses associated to this interface.
 * }
 * @summary 
 * 
 *
*/
get_local_interfaces(): Dictionary[];

/** Returns a queued hostname's IP address, given its queue [param id]. Returns an empty string on error or if resolution hasn't happened yet (see [method get_resolve_item_status]). */
get_resolve_item_address(): string;

/** Returns resolved addresses, or an empty array if an error happened or resolution didn't happen yet (see [method get_resolve_item_status]). */
get_resolve_item_addresses(): any[];

/** Returns a queued hostname's status as a [enum ResolverStatus] constant, given its queue [param id]. */
get_resolve_item_status(): int;

/** Returns a given hostname's IPv4 or IPv6 address when resolved (blocking-type method). The address type returned depends on the [enum Type] constant given as [param ip_type]. */
resolve_hostname(): string;

/** Resolves a given hostname in a blocking way. Addresses are returned as an [Array] of IPv4 or IPv6 addresses depending on [param ip_type]. */
resolve_hostname_addresses(): PackedStringArray;

/** Creates a queue item to resolve a hostname to an IPv4 or IPv6 address depending on the [enum Type] constant given as [param ip_type]. Returns the queue ID if successful, or [constant RESOLVER_INVALID_ID] on error. */
resolve_hostname_queue_item(): int;

  connect<T extends SignalsOf<IPClass>>(signal: T, method: SignalFunction<IPClass[T]>): number;



/**
 * DNS hostname resolver status: No status.
 *
*/
static RESOLVER_STATUS_NONE: any;

/**
 * DNS hostname resolver status: Waiting.
 *
*/
static RESOLVER_STATUS_WAITING: any;

/**
 * DNS hostname resolver status: Done.
 *
*/
static RESOLVER_STATUS_DONE: any;

/**
 * DNS hostname resolver status: Error.
 *
*/
static RESOLVER_STATUS_ERROR: any;

/**
 * Maximum number of concurrent DNS resolver queries allowed, [constant RESOLVER_INVALID_ID] is returned if exceeded.
 *
*/
static RESOLVER_MAX_QUERIES: any;

/**
 * Invalid ID constant. Returned if [constant RESOLVER_MAX_QUERIES] is exceeded.
 *
*/
static RESOLVER_INVALID_ID: any;

/**
 * Address type: None.
 *
*/
static TYPE_NONE: any;

/**
 * Address type: Internet protocol version 4 (IPv4).
 *
*/
static TYPE_IPV4: any;

/**
 * Address type: Internet protocol version 6 (IPv6).
 *
*/
static TYPE_IPV6: any;

/**
 * Address type: Any.
 *
*/
static TYPE_ANY: any;



}

