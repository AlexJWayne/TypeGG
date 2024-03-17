
/**
 * Hyper-text transfer protocol client (sometimes called "User Agent"). Used to make HTTP requests to download web content, upload files and other data or to communicate with various services, among other use cases.
 *
 * See the [HTTPRequest] node for a higher-level alternative.
 *
 * **Note:** This client only needs to connect to a host once (see [method connect_to_host]) to send multiple requests. Because of this, methods that take URLs usually take just the part after the host instead of the full URL, as the client is already connected to a host. See [method request] for a full example and to get started.
 *
 * A [HTTPClient] should be reused between multiple requests or to connect to different hosts instead of creating one client per request. Supports Transport Layer Security (TLS), including server certificate verification. HTTP status codes in the 2xx range indicate success, 3xx redirection (i.e. "try again, but over here"), 4xx something was wrong with the request, and 5xx something went wrong on the server's side.
 *
 * For more information on HTTP, see [url=https://developer.mozilla.org/en-US/docs/Web/HTTP]MDN's documentation on HTTP[/url] (or read [url=https://tools.ietf.org/html/rfc2616]RFC 2616[/url] to get it straight from the source).
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
 * **Note:** It's recommended to use transport encryption (TLS) and to avoid sending sensitive information (such as login credentials) in HTTP GET URL parameters. Consider using HTTP POST requests or HTTP headers for such information instead.
 *
 * **Note:** When performing HTTP requests from a project exported to Web, keep in mind the remote server may not allow requests from foreign origins due to [url=https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS]CORS[/url]. If you host the server in question, you should modify its backend to allow requests from foreign origins by adding the `Access-Control-Allow-Origin: *` HTTP header.
 *
 * **Note:** TLS support is currently limited to TLS 1.0, TLS 1.1, and TLS 1.2. Attempting to connect to a TLS 1.3-only server will return an error.
 *
 * **Warning:** TLS certificate revocation and certificate pinning are currently not supported. Revoked certificates are accepted as long as they are otherwise valid. If this is a concern, you may want to use automatically managed certificates with a short validity period.
 *
*/
declare class HTTPClient extends RefCounted  {

  
/**
 * Hyper-text transfer protocol client (sometimes called "User Agent"). Used to make HTTP requests to download web content, upload files and other data or to communicate with various services, among other use cases.
 *
 * See the [HTTPRequest] node for a higher-level alternative.
 *
 * **Note:** This client only needs to connect to a host once (see [method connect_to_host]) to send multiple requests. Because of this, methods that take URLs usually take just the part after the host instead of the full URL, as the client is already connected to a host. See [method request] for a full example and to get started.
 *
 * A [HTTPClient] should be reused between multiple requests or to connect to different hosts instead of creating one client per request. Supports Transport Layer Security (TLS), including server certificate verification. HTTP status codes in the 2xx range indicate success, 3xx redirection (i.e. "try again, but over here"), 4xx something was wrong with the request, and 5xx something went wrong on the server's side.
 *
 * For more information on HTTP, see [url=https://developer.mozilla.org/en-US/docs/Web/HTTP]MDN's documentation on HTTP[/url] (or read [url=https://tools.ietf.org/html/rfc2616]RFC 2616[/url] to get it straight from the source).
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
 * **Note:** It's recommended to use transport encryption (TLS) and to avoid sending sensitive information (such as login credentials) in HTTP GET URL parameters. Consider using HTTP POST requests or HTTP headers for such information instead.
 *
 * **Note:** When performing HTTP requests from a project exported to Web, keep in mind the remote server may not allow requests from foreign origins due to [url=https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS]CORS[/url]. If you host the server in question, you should modify its backend to allow requests from foreign origins by adding the `Access-Control-Allow-Origin: *` HTTP header.
 *
 * **Note:** TLS support is currently limited to TLS 1.0, TLS 1.1, and TLS 1.2. Attempting to connect to a TLS 1.3-only server will return an error.
 *
 * **Warning:** TLS certificate revocation and certificate pinning are currently not supported. Revoked certificates are accepted as long as they are otherwise valid. If this is a concern, you may want to use automatically managed certificates with a short validity period.
 *
*/
  new(): HTTPClient; 
  static "new"(): HTTPClient 


/** If [code]true[/code], execution will block until all data is read from the response. */
blocking_mode_enabled: boolean;

/** The connection to use for this client. */
connection: StreamPeer;

/** The size of the buffer used and maximum bytes to read per iteration. See [method read_response_body_chunk]. */
read_chunk_size: int;

/** Closes the current connection, allowing reuse of this [HTTPClient]. */
close(): void;

/**
 * Connects to a host. This needs to be done before any requests are sent.
 *
 * If no [param port] is specified (or `-1` is used), it is automatically set to 80 for HTTP and 443 for HTTPS. You can pass the optional [param tls_options] parameter to customize the trusted certification authorities, or the common name verification when using HTTPS. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].
 *
*/
connect_to_host(): int;

/**
 * Returns the response's body length.
 *
 * **Note:** Some Web servers may not send a body length. In this case, the value returned will be `-1`. If using chunked transfer encoding, the body length will also be `-1`.
 *
 * **Note:** This function always returns `-1` on the Web platform due to browsers limitations.
 *
*/
get_response_body_length(): int;

/** Returns the response's HTTP status code. */
get_response_code(): int;

/** Returns the response headers. */
get_response_headers(): PackedStringArray;

/**
 * Returns all response headers as a Dictionary of structure `{ "key": "value1; value2" }` where the case-sensitivity of the keys and values is kept like the server delivers it. A value is a simple String, this string can have more than one value where "; " is used as separator.
 *
 * **Example:**
 *
 * @example 
 * 
 * {
 *     "content-length": 12,
 *     "Content-Type": "application/json; charset=UTF-8",
 * }
 * @summary 
 * 
 *
*/
get_response_headers_as_dictionary(): Dictionary<any, any>;

/** Returns a [enum Status] constant. Need to call [method poll] in order to get status updates. */
get_status(): int;

/** If [code]true[/code], this [HTTPClient] has a response available. */
has_response(): boolean;

/** If [code]true[/code], this [HTTPClient] has a response that is chunked. */
is_response_chunked(): boolean;

/** This needs to be called in order to have any request processed. Check results with [method get_status]. */
poll(): int;

/**
 * Generates a GET/POST application/x-www-form-urlencoded style query string from a provided dictionary, e.g.:
 *
 * @example 
 * 
 * 
 * var fields = {"username": "user", "password": "pass"}
 * var query_string = http_client.query_string_from_dict(fields)
 * # Returns "username=user&password=pass"
 * 
 * 
 * var fields = new Godot.Collections.Dictionary { { "username", "user" }, { "password", "pass" } };
 * string queryString = httpClient.QueryStringFromDict(fields);
 * // Returns "username=user&password=pass"
 * 
 * @summary 
 * 
 *
 * Furthermore, if a key has a `null` value, only the key itself is added, without equal sign and value. If the value is an array, for each value in it a pair with the same key is added.
 *
 * @example 
 * 
 * 
 * var fields = {"single": 123, "not_valued": null, "multiple": [22, 33, 44]}
 * var query_string = http_client.query_string_from_dict(fields)
 * # Returns "single=123&not_valued&multiple=22&multiple=33&multiple=44"
 * 
 * 
 * var fields = new Godot.Collections.Dictionary
 * {
 *     { "single", 123 },
 *     { "notValued", default },
 *     { "multiple", new Godot.Collections.Array { 22, 33, 44 } },
 * };
 * string queryString = httpClient.QueryStringFromDict(fields);
 * // Returns "single=123&not_valued&multiple=22&multiple=33&multiple=44"
 * 
 * @summary 
 * 
 *
*/
query_string_from_dict(): string;

/** Reads one chunk from the response. */
read_response_body_chunk(): PackedByteArray;

/**
 * Sends a request to the connected host.
 *
 * The URL parameter is usually just the part after the host, so for `https://somehost.com/index.php`, it is `/index.php`. When sending requests to an HTTP proxy server, it should be an absolute URL. For [constant HTTPClient.METHOD_OPTIONS] requests, `*` is also allowed. For [constant HTTPClient.METHOD_CONNECT] requests, it should be the authority component (`host:port`).
 *
 * Headers are HTTP request headers. For available HTTP methods, see [enum Method].
 *
 * To create a POST request with query strings to push to the server, do:
 *
 * @example 
 * 
 * 
 * var fields = {"username" : "user", "password" : "pass"}
 * var query_string = http_client.query_string_from_dict(fields)
 * var headers = ["Content-Type: application/x-www-form-urlencoded", "Content-Length: " + str(query_string.length())]
 * var result = http_client.request(http_client.METHOD_POST, "/index.php", headers, query_string)
 * 
 * 
 * var fields = new Godot.Collections.Dictionary { { "username", "user" }, { "password", "pass" } };
 * string queryString = new HTTPClient().QueryStringFromDict(fields);
 * string[] headers = { "Content-Type: application/x-www-form-urlencoded", $"Content-Length: {queryString.Length}" };
 * var result = new HTTPClient().Request(HTTPClient.Method.Post, "index.php", headers, queryString);
 * 
 * @summary 
 * 
 *
 * **Note:** The [param body] parameter is ignored if [param method] is [constant HTTPClient.METHOD_GET]. This is because GET methods can't contain request data. As a workaround, you can pass request data as a query string in the URL. See [method String.uri_encode] for an example.
 *
*/
request(): int;

/**
 * Sends a raw request to the connected host.
 *
 * The URL parameter is usually just the part after the host, so for `https://somehost.com/index.php`, it is `/index.php`. When sending requests to an HTTP proxy server, it should be an absolute URL. For [constant HTTPClient.METHOD_OPTIONS] requests, `*` is also allowed. For [constant HTTPClient.METHOD_CONNECT] requests, it should be the authority component (`host:port`).
 *
 * Headers are HTTP request headers. For available HTTP methods, see [enum Method].
 *
 * Sends the body data raw, as a byte array and does not encode it in any way.
 *
*/
request_raw(): int;

/**
 * Sets the proxy server for HTTP requests.
 *
 * The proxy server is unset if [param host] is empty or [param port] is -1.
 *
*/
set_http_proxy(): void;

/**
 * Sets the proxy server for HTTPS requests.
 *
 * The proxy server is unset if [param host] is empty or [param port] is -1.
 *
*/
set_https_proxy(): void;

  connect<T extends SignalsOf<HTTPClient>>(signal: T, method: SignalFunction<HTTPClient[T]>): number;



/**
 * HTTP GET method. The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
 *
*/
static METHOD_GET: any;

/**
 * HTTP HEAD method. The HEAD method asks for a response identical to that of a GET request, but without the response body. This is useful to request metadata like HTTP headers or to check if a resource exists.
 *
*/
static METHOD_HEAD: any;

/**
 * HTTP POST method. The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server. This is often used for forms and submitting data or uploading files.
 *
*/
static METHOD_POST: any;

/**
 * HTTP PUT method. The PUT method asks to replace all current representations of the target resource with the request payload. (You can think of POST as "create or update" and PUT as "update", although many services tend to not make a clear distinction or change their meaning).
 *
*/
static METHOD_PUT: any;

/**
 * HTTP DELETE method. The DELETE method requests to delete the specified resource.
 *
*/
static METHOD_DELETE: any;

/**
 * HTTP OPTIONS method. The OPTIONS method asks for a description of the communication options for the target resource. Rarely used.
 *
*/
static METHOD_OPTIONS: any;

/**
 * HTTP TRACE method. The TRACE method performs a message loop-back test along the path to the target resource. Returns the entire HTTP request received in the response body. Rarely used.
 *
*/
static METHOD_TRACE: any;

/**
 * HTTP CONNECT method. The CONNECT method establishes a tunnel to the server identified by the target resource. Rarely used.
 *
*/
static METHOD_CONNECT: any;

/**
 * HTTP PATCH method. The PATCH method is used to apply partial modifications to a resource.
 *
*/
static METHOD_PATCH: any;

/**
 * Represents the size of the [enum Method] enum.
 *
*/
static METHOD_MAX: any;

/**
 * Status: Disconnected from the server.
 *
*/
static STATUS_DISCONNECTED: any;

/**
 * Status: Currently resolving the hostname for the given URL into an IP.
 *
*/
static STATUS_RESOLVING: any;

/**
 * Status: DNS failure: Can't resolve the hostname for the given URL.
 *
*/
static STATUS_CANT_RESOLVE: any;

/**
 * Status: Currently connecting to server.
 *
*/
static STATUS_CONNECTING: any;

/**
 * Status: Can't connect to the server.
 *
*/
static STATUS_CANT_CONNECT: any;

/**
 * Status: Connection established.
 *
*/
static STATUS_CONNECTED: any;

/**
 * Status: Currently sending request.
 *
*/
static STATUS_REQUESTING: any;

/**
 * Status: HTTP body received.
 *
*/
static STATUS_BODY: any;

/**
 * Status: Error in HTTP connection.
 *
*/
static STATUS_CONNECTION_ERROR: any;

/**
 * Status: Error in TLS handshake.
 *
*/
static STATUS_TLS_HANDSHAKE_ERROR: any;

/**
 * HTTP status code `100 Continue`. Interim response that indicates everything so far is OK and that the client should continue with the request (or ignore this status if already finished).
 *
*/
static RESPONSE_CONTINUE: any;

/**
 * HTTP status code `101 Switching Protocol`. Sent in response to an `Upgrade` request header by the client. Indicates the protocol the server is switching to.
 *
*/
static RESPONSE_SWITCHING_PROTOCOLS: any;

/**
 * HTTP status code `102 Processing` (WebDAV). Indicates that the server has received and is processing the request, but no response is available yet.
 *
*/
static RESPONSE_PROCESSING: any;

/**
 * HTTP status code `200 OK`. The request has succeeded. Default response for successful requests. Meaning varies depending on the request. GET: The resource has been fetched and is transmitted in the message body. HEAD: The entity headers are in the message body. POST: The resource describing the result of the action is transmitted in the message body. TRACE: The message body contains the request message as received by the server.
 *
*/
static RESPONSE_OK: any;

/**
 * HTTP status code `201 Created`. The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
 *
*/
static RESPONSE_CREATED: any;

/**
 * HTTP status code `202 Accepted`. The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
 *
*/
static RESPONSE_ACCEPTED: any;

/**
 * HTTP status code `203 Non-Authoritative Information`. This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
 *
*/
static RESPONSE_NON_AUTHORITATIVE_INFORMATION: any;

/**
 * HTTP status code `204 No Content`. There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
 *
*/
static RESPONSE_NO_CONTENT: any;

/**
 * HTTP status code `205 Reset Content`. The server has fulfilled the request and desires that the client resets the "document view" that caused the request to be sent to its original state as received from the origin server.
 *
*/
static RESPONSE_RESET_CONTENT: any;

/**
 * HTTP status code `206 Partial Content`. This response code is used because of a range header sent by the client to separate download into multiple streams.
 *
*/
static RESPONSE_PARTIAL_CONTENT: any;

/**
 * HTTP status code `207 Multi-Status` (WebDAV). A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
 *
*/
static RESPONSE_MULTI_STATUS: any;

/**
 * HTTP status code `208 Already Reported` (WebDAV). Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.
 *
*/
static RESPONSE_ALREADY_REPORTED: any;

/**
 * HTTP status code `226 IM Used` (WebDAV). The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
 *
*/
static RESPONSE_IM_USED: any;

/**
 * HTTP status code `300 Multiple Choice`. The request has more than one possible responses and there is no standardized way to choose one of the responses. User-agent or user should choose one of them.
 *
*/
static RESPONSE_MULTIPLE_CHOICES: any;

/**
 * HTTP status code `301 Moved Permanently`. Redirection. This response code means the URI of requested resource has been changed. The new URI is usually included in the response.
 *
*/
static RESPONSE_MOVED_PERMANENTLY: any;

/**
 * HTTP status code `302 Found`. Temporary redirection. This response code means the URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
 *
*/
static RESPONSE_FOUND: any;

/**
 * HTTP status code `303 See Other`. The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, which is intended to provide an indirect response to the original request.
 *
*/
static RESPONSE_SEE_OTHER: any;

/**
 * HTTP status code `304 Not Modified`. A conditional GET or HEAD request has been received and would have resulted in a 200 OK response if it were not for the fact that the condition evaluated to `false`.
 *
*/
static RESPONSE_NOT_MODIFIED: any;

/**
 * **Deprecated.** HTTP status code `305 Use Proxy`.
 *
*/
static RESPONSE_USE_PROXY: any;

/**
 * **Deprecated.** HTTP status code `306 Switch Proxy`.
 *
*/
static RESPONSE_SWITCH_PROXY: any;

/**
 * HTTP status code `307 Temporary Redirect`. The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.
 *
*/
static RESPONSE_TEMPORARY_REDIRECT: any;

/**
 * HTTP status code `308 Permanent Redirect`. The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.
 *
*/
static RESPONSE_PERMANENT_REDIRECT: any;

/**
 * HTTP status code `400 Bad Request`. The request was invalid. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, invalid request contents, or deceptive request routing).
 *
*/
static RESPONSE_BAD_REQUEST: any;

/**
 * HTTP status code `401 Unauthorized`. Credentials required. The request has not been applied because it lacks valid authentication credentials for the target resource.
 *
*/
static RESPONSE_UNAUTHORIZED: any;

/**
 * HTTP status code `402 Payment Required`. This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems, however this is not currently used.
 *
*/
static RESPONSE_PAYMENT_REQUIRED: any;

/**
 * HTTP status code `403 Forbidden`. The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike `401`, the client's identity is known to the server.
 *
*/
static RESPONSE_FORBIDDEN: any;

/**
 * HTTP status code `404 Not Found`. The server can not find requested resource. Either the URL is not recognized or the endpoint is valid but the resource itself does not exist. May also be sent instead of 403 to hide existence of a resource if the client is not authorized.
 *
*/
static RESPONSE_NOT_FOUND: any;

/**
 * HTTP status code `405 Method Not Allowed`. The request's HTTP method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
 *
*/
static RESPONSE_METHOD_NOT_ALLOWED: any;

/**
 * HTTP status code `406 Not Acceptable`. The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request. Used when negotiation content.
 *
*/
static RESPONSE_NOT_ACCEPTABLE: any;

/**
 * HTTP status code `407 Proxy Authentication Required`. Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy.
 *
*/
static RESPONSE_PROXY_AUTHENTICATION_REQUIRED: any;

/**
 * HTTP status code `408 Request Timeout`. The server did not receive a complete request message within the time that it was prepared to wait.
 *
*/
static RESPONSE_REQUEST_TIMEOUT: any;

/**
 * HTTP status code `409 Conflict`. The request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request.
 *
*/
static RESPONSE_CONFLICT: any;

/**
 * HTTP status code `410 Gone`. The target resource is no longer available at the origin server and this condition is likely permanent.
 *
*/
static RESPONSE_GONE: any;

/**
 * HTTP status code `411 Length Required`. The server refuses to accept the request without a defined Content-Length header.
 *
*/
static RESPONSE_LENGTH_REQUIRED: any;

/**
 * HTTP status code `412 Precondition Failed`. One or more conditions given in the request header fields evaluated to `false` when tested on the server.
 *
*/
static RESPONSE_PRECONDITION_FAILED: any;

/**
 * HTTP status code `413 Entity Too Large`. The server is refusing to process a request because the request payload is larger than the server is willing or able to process.
 *
*/
static RESPONSE_REQUEST_ENTITY_TOO_LARGE: any;

/**
 * HTTP status code `414 Request-URI Too Long`. The server is refusing to service the request because the request-target is longer than the server is willing to interpret.
 *
*/
static RESPONSE_REQUEST_URI_TOO_LONG: any;

/**
 * HTTP status code `415 Unsupported Media Type`. The origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource.
 *
*/
static RESPONSE_UNSUPPORTED_MEDIA_TYPE: any;

/**
 * HTTP status code `416 Requested Range Not Satisfiable`. None of the ranges in the request's Range header field overlap the current extent of the selected resource or the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.
 *
*/
static RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE: any;

/**
 * HTTP status code `417 Expectation Failed`. The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.
 *
*/
static RESPONSE_EXPECTATION_FAILED: any;

/**
 * HTTP status code `418 I'm A Teapot`. Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
 *
*/
static RESPONSE_IM_A_TEAPOT: any;

/**
 * HTTP status code `421 Misdirected Request`. The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
 *
*/
static RESPONSE_MISDIRECTED_REQUEST: any;

/**
 * HTTP status code `422 Unprocessable Entity` (WebDAV). The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was unable to process the contained instructions.
 *
*/
static RESPONSE_UNPROCESSABLE_ENTITY: any;

/**
 * HTTP status code `423 Locked` (WebDAV). The source or destination resource of a method is locked.
 *
*/
static RESPONSE_LOCKED: any;

/**
 * HTTP status code `424 Failed Dependency` (WebDAV). The method could not be performed on the resource because the requested action depended on another action and that action failed.
 *
*/
static RESPONSE_FAILED_DEPENDENCY: any;

/**
 * HTTP status code `426 Upgrade Required`. The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
 *
*/
static RESPONSE_UPGRADE_REQUIRED: any;

/**
 * HTTP status code `428 Precondition Required`. The origin server requires the request to be conditional.
 *
*/
static RESPONSE_PRECONDITION_REQUIRED: any;

/**
 * HTTP status code `429 Too Many Requests`. The user has sent too many requests in a given amount of time (see "rate limiting"). Back off and increase time between requests or try again later.
 *
*/
static RESPONSE_TOO_MANY_REQUESTS: any;

/**
 * HTTP status code `431 Request Header Fields Too Large`. The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
 *
*/
static RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE: any;

/**
 * HTTP status code `451 Response Unavailable For Legal Reasons`. The server is denying access to the resource as a consequence of a legal demand.
 *
*/
static RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS: any;

/**
 * HTTP status code `500 Internal Server Error`. The server encountered an unexpected condition that prevented it from fulfilling the request.
 *
*/
static RESPONSE_INTERNAL_SERVER_ERROR: any;

/**
 * HTTP status code `501 Not Implemented`. The server does not support the functionality required to fulfill the request.
 *
*/
static RESPONSE_NOT_IMPLEMENTED: any;

/**
 * HTTP status code `502 Bad Gateway`. The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request. Usually returned by load balancers or proxies.
 *
*/
static RESPONSE_BAD_GATEWAY: any;

/**
 * HTTP status code `503 Service Unavailable`. The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay. Try again later.
 *
*/
static RESPONSE_SERVICE_UNAVAILABLE: any;

/**
 * HTTP status code `504 Gateway Timeout`. The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request. Usually returned by load balancers or proxies.
 *
*/
static RESPONSE_GATEWAY_TIMEOUT: any;

/**
 * HTTP status code `505 HTTP Version Not Supported`. The server does not support, or refuses to support, the major version of HTTP that was used in the request message.
 *
*/
static RESPONSE_HTTP_VERSION_NOT_SUPPORTED: any;

/**
 * HTTP status code `506 Variant Also Negotiates`. The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 *
*/
static RESPONSE_VARIANT_ALSO_NEGOTIATES: any;

/**
 * HTTP status code `507 Insufficient Storage`. The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
 *
*/
static RESPONSE_INSUFFICIENT_STORAGE: any;

/**
 * HTTP status code `508 Loop Detected`. The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed.
 *
*/
static RESPONSE_LOOP_DETECTED: any;

/**
 * HTTP status code `510 Not Extended`. The policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request.
 *
*/
static RESPONSE_NOT_EXTENDED: any;

/**
 * HTTP status code `511 Network Authentication Required`. The client needs to authenticate to gain network access.
 *
*/
static RESPONSE_NETWORK_AUTH_REQUIRED: any;



}

