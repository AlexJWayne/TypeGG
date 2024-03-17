
/**
 * A node with the ability to send HTTP requests. Uses [HTTPClient] internally.
 *
 * Can be used to make HTTP requests, i.e. download or upload files or web content via HTTP.
 *
 * **Warning:** See the notes and warnings on [HTTPClient] for limitations, especially regarding TLS security.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
 * **Example of contacting a REST API and printing one of its returned fields:**
 *
 * @example 
 * 
 * 
 * func _ready():
 *     # Create an HTTP request node and connect its completion signal.
 *     var http_request = HTTPRequest.new()
 *     add_child(http_request)
 *     http_request.request_completed.connect(self._http_request_completed)
 *     # Perform a GET request. The URL below returns JSON as of writing.
 *     var error = http_request.request("https://httpbin.org/get")
 *     if error != OK:
 *         push_error("An error occurred in the HTTP request.")
 *     # Perform a POST request. The URL below returns JSON as of writing.
 *     # Note: Don't make simultaneous requests using a single HTTPRequest node.
 *     # The snippet below is provided for reference only.
 *     var body = JSON.new().stringify({"name": "Godette"})
 *     error = http_request.request("https://httpbin.org/post", [], HTTPClient.METHOD_POST, body)
 *     if error != OK:
 *         push_error("An error occurred in the HTTP request.")
 * # Called when the HTTP request is completed.
 * func _http_request_completed(result, response_code, headers, body):
 *     var json = JSON.new()
 *     json.parse(body.get_string_from_utf8())
 *     var response = json.get_data()
 *     # Will print the user agent string used by the HTTPRequest node (as recognized by httpbin.org).
 *     print(response.headers["User-Agent"])
 * 
 * 
 * public override void _Ready()
 * {
 *     // Create an HTTP request node and connect its completion signal.
 *     var httpRequest = new HTTPRequest();
 *     AddChild(httpRequest);
 *     httpRequest.RequestCompleted += HttpRequestCompleted;
 *     // Perform a GET request. The URL below returns JSON as of writing.
 *     Error error = httpRequest.Request("https://httpbin.org/get");
 *     if (error != Error.Ok)
 *     {
 *         GD.PushError("An error occurred in the HTTP request.");
 *     }
 *     // Perform a POST request. The URL below returns JSON as of writing.
 *     // Note: Don't make simultaneous requests using a single HTTPRequest node.
 *     // The snippet below is provided for reference only.
 *     string body = new Json().Stringify(new Godot.Collections.Dictionary
 *     {
 *         { "name", "Godette" }
 *     });
 *     error = httpRequest.Request("https://httpbin.org/post", null, HTTPClient.Method.Post, body);
 *     if (error != Error.Ok)
 *     {
 *         GD.PushError("An error occurred in the HTTP request.");
 *     }
 * }
 * // Called when the HTTP request is completed.
 * private void HttpRequestCompleted(long result, long responseCode, string[] headers, byte[] body)
 * {
 *     var json = new Json();
 *     json.Parse(body.GetStringFromUtf8());
 *     var response = json.GetData().AsGodotDictionary();
 *     // Will print the user agent string used by the HTTPRequest node (as recognized by httpbin.org).
 *     GD.Print((response["headers"].AsGodotDictionary())["User-Agent"]);
 * }
 * 
 * @summary 
 * 
 *
 * **Example of loading and displaying an image using HTTPRequest:**
 *
 * @example 
 * 
 * 
 * func _ready():
 *     # Create an HTTP request node and connect its completion signal.
 *     var http_request = HTTPRequest.new()
 *     add_child(http_request)
 *     http_request.request_completed.connect(self._http_request_completed)
 *     # Perform the HTTP request. The URL below returns a PNG image as of writing.
 *     var error = http_request.request("https://via.placeholder.com/512")
 *     if error != OK:
 *         push_error("An error occurred in the HTTP request.")
 * # Called when the HTTP request is completed.
 * func _http_request_completed(result, response_code, headers, body):
 *     if result != HTTPRequest.RESULT_SUCCESS:
 *         push_error("Image couldn't be downloaded. Try a different image.")
 *     var image = Image.new()
 *     var error = image.load_png_from_buffer(body)
 *     if error != OK:
 *         push_error("Couldn't load the image.")
 *     var texture = ImageTexture.create_from_image(image)
 *     # Display the image in a TextureRect node.
 *     var texture_rect = TextureRect.new()
 *     add_child(texture_rect)
 *     texture_rect.texture = texture
 * 
 * 
 * public override void _Ready()
 * {
 *     // Create an HTTP request node and connect its completion signal.
 *     var httpRequest = new HTTPRequest();
 *     AddChild(httpRequest);
 *     httpRequest.RequestCompleted += HttpRequestCompleted;
 *     // Perform the HTTP request. The URL below returns a PNG image as of writing.
 *     Error error = httpRequest.Request("https://via.placeholder.com/512");
 *     if (error != Error.Ok)
 *     {
 *         GD.PushError("An error occurred in the HTTP request.");
 *     }
 * }
 * // Called when the HTTP request is completed.
 * private void HttpRequestCompleted(long result, long responseCode, string[] headers, byte[] body)
 * {
 *     if (result != (long)HTTPRequest.Result.Success)
 *     {
 *         GD.PushError("Image couldn't be downloaded. Try a different image.");
 *     }
 *     var image = new Image();
 *     Error error = image.LoadPngFromBuffer(body);
 *     if (error != Error.Ok)
 *     {
 *         GD.PushError("Couldn't load the image.");
 *     }
 *     var texture = ImageTexture.CreateFromImage(image);
 *     // Display the image in a TextureRect node.
 *     var textureRect = new TextureRect();
 *     AddChild(textureRect);
 *     textureRect.Texture = texture;
 * }
 * 
 * @summary 
 * 
 *
 * **Gzipped response bodies**: HTTPRequest will automatically handle decompression of response bodies. A `Accept-Encoding` header will be automatically added to each of your requests, unless one is already specified. Any response with a `Content-Encoding: gzip` header will automatically be decompressed and delivered to you as uncompressed bytes.
 *
*/
declare class HTTPRequest extends Node  {

  
/**
 * A node with the ability to send HTTP requests. Uses [HTTPClient] internally.
 *
 * Can be used to make HTTP requests, i.e. download or upload files or web content via HTTP.
 *
 * **Warning:** See the notes and warnings on [HTTPClient] for limitations, especially regarding TLS security.
 *
 * **Note:** When exporting to Android, make sure to enable the `INTERNET` permission in the Android export preset before exporting the project or using one-click deploy. Otherwise, network communication of any kind will be blocked by Android.
 *
 * **Example of contacting a REST API and printing one of its returned fields:**
 *
 * @example 
 * 
 * 
 * func _ready():
 *     # Create an HTTP request node and connect its completion signal.
 *     var http_request = HTTPRequest.new()
 *     add_child(http_request)
 *     http_request.request_completed.connect(self._http_request_completed)
 *     # Perform a GET request. The URL below returns JSON as of writing.
 *     var error = http_request.request("https://httpbin.org/get")
 *     if error != OK:
 *         push_error("An error occurred in the HTTP request.")
 *     # Perform a POST request. The URL below returns JSON as of writing.
 *     # Note: Don't make simultaneous requests using a single HTTPRequest node.
 *     # The snippet below is provided for reference only.
 *     var body = JSON.new().stringify({"name": "Godette"})
 *     error = http_request.request("https://httpbin.org/post", [], HTTPClient.METHOD_POST, body)
 *     if error != OK:
 *         push_error("An error occurred in the HTTP request.")
 * # Called when the HTTP request is completed.
 * func _http_request_completed(result, response_code, headers, body):
 *     var json = JSON.new()
 *     json.parse(body.get_string_from_utf8())
 *     var response = json.get_data()
 *     # Will print the user agent string used by the HTTPRequest node (as recognized by httpbin.org).
 *     print(response.headers["User-Agent"])
 * 
 * 
 * public override void _Ready()
 * {
 *     // Create an HTTP request node and connect its completion signal.
 *     var httpRequest = new HTTPRequest();
 *     AddChild(httpRequest);
 *     httpRequest.RequestCompleted += HttpRequestCompleted;
 *     // Perform a GET request. The URL below returns JSON as of writing.
 *     Error error = httpRequest.Request("https://httpbin.org/get");
 *     if (error != Error.Ok)
 *     {
 *         GD.PushError("An error occurred in the HTTP request.");
 *     }
 *     // Perform a POST request. The URL below returns JSON as of writing.
 *     // Note: Don't make simultaneous requests using a single HTTPRequest node.
 *     // The snippet below is provided for reference only.
 *     string body = new Json().Stringify(new Godot.Collections.Dictionary
 *     {
 *         { "name", "Godette" }
 *     });
 *     error = httpRequest.Request("https://httpbin.org/post", null, HTTPClient.Method.Post, body);
 *     if (error != Error.Ok)
 *     {
 *         GD.PushError("An error occurred in the HTTP request.");
 *     }
 * }
 * // Called when the HTTP request is completed.
 * private void HttpRequestCompleted(long result, long responseCode, string[] headers, byte[] body)
 * {
 *     var json = new Json();
 *     json.Parse(body.GetStringFromUtf8());
 *     var response = json.GetData().AsGodotDictionary();
 *     // Will print the user agent string used by the HTTPRequest node (as recognized by httpbin.org).
 *     GD.Print((response["headers"].AsGodotDictionary())["User-Agent"]);
 * }
 * 
 * @summary 
 * 
 *
 * **Example of loading and displaying an image using HTTPRequest:**
 *
 * @example 
 * 
 * 
 * func _ready():
 *     # Create an HTTP request node and connect its completion signal.
 *     var http_request = HTTPRequest.new()
 *     add_child(http_request)
 *     http_request.request_completed.connect(self._http_request_completed)
 *     # Perform the HTTP request. The URL below returns a PNG image as of writing.
 *     var error = http_request.request("https://via.placeholder.com/512")
 *     if error != OK:
 *         push_error("An error occurred in the HTTP request.")
 * # Called when the HTTP request is completed.
 * func _http_request_completed(result, response_code, headers, body):
 *     if result != HTTPRequest.RESULT_SUCCESS:
 *         push_error("Image couldn't be downloaded. Try a different image.")
 *     var image = Image.new()
 *     var error = image.load_png_from_buffer(body)
 *     if error != OK:
 *         push_error("Couldn't load the image.")
 *     var texture = ImageTexture.create_from_image(image)
 *     # Display the image in a TextureRect node.
 *     var texture_rect = TextureRect.new()
 *     add_child(texture_rect)
 *     texture_rect.texture = texture
 * 
 * 
 * public override void _Ready()
 * {
 *     // Create an HTTP request node and connect its completion signal.
 *     var httpRequest = new HTTPRequest();
 *     AddChild(httpRequest);
 *     httpRequest.RequestCompleted += HttpRequestCompleted;
 *     // Perform the HTTP request. The URL below returns a PNG image as of writing.
 *     Error error = httpRequest.Request("https://via.placeholder.com/512");
 *     if (error != Error.Ok)
 *     {
 *         GD.PushError("An error occurred in the HTTP request.");
 *     }
 * }
 * // Called when the HTTP request is completed.
 * private void HttpRequestCompleted(long result, long responseCode, string[] headers, byte[] body)
 * {
 *     if (result != (long)HTTPRequest.Result.Success)
 *     {
 *         GD.PushError("Image couldn't be downloaded. Try a different image.");
 *     }
 *     var image = new Image();
 *     Error error = image.LoadPngFromBuffer(body);
 *     if (error != Error.Ok)
 *     {
 *         GD.PushError("Couldn't load the image.");
 *     }
 *     var texture = ImageTexture.CreateFromImage(image);
 *     // Display the image in a TextureRect node.
 *     var textureRect = new TextureRect();
 *     AddChild(textureRect);
 *     textureRect.Texture = texture;
 * }
 * 
 * @summary 
 * 
 *
 * **Gzipped response bodies**: HTTPRequest will automatically handle decompression of response bodies. A `Accept-Encoding` header will be automatically added to each of your requests, unless one is already specified. Any response with a `Content-Encoding: gzip` header will automatically be decompressed and delivered to you as uncompressed bytes.
 *
*/
  new(): HTTPRequest; 
  static "new"(): HTTPRequest 


/**
 * If `true`, this header will be added to each request: `Accept-Encoding: gzip, deflate` telling servers that it's okay to compress response bodies.
 *
 * Any Response body declaring a `Content-Encoding` of either `gzip` or `deflate` will then be automatically decompressed, and the uncompressed bytes will be delivered via [signal request_completed].
 *
 * If the user has specified their own `Accept-Encoding` header, then no header will be added regardless of [member accept_gzip].
 *
 * If `false` no header will be added, and no decompression will be performed on response bodies. The raw bytes of the response body will be returned via [signal request_completed].
 *
*/
accept_gzip: boolean;

/** Maximum allowed size for response bodies. If the response body is compressed, this will be used as the maximum allowed size for the decompressed body. */
body_size_limit: int;

/**
 * The size of the buffer used and maximum bytes to read per iteration. See [member HTTPClient.read_chunk_size].
 *
 * Set this to a lower value (e.g. 4096 for 4 KiB) when downloading small files to decrease memory usage at the cost of download speeds.
 *
*/
download_chunk_size: int;

/** The file to download into. Will output any received file into it. */
download_file: string;

/** Maximum number of allowed redirects. */
max_redirects: int;

/** The duration to wait in seconds before a request times out. If [member timeout] is set to [code]0.0[/code] then the request will never time out. For simple requests, such as communication with a REST API, it is recommended that [member timeout] is set to a value suitable for the server response time (e.g. between [code]1.0[/code] and [code]10.0[/code]). This will help prevent unwanted timeouts caused by variation in server response times while still allowing the application to detect when a request has timed out. For larger requests such as file downloads it is suggested the [member timeout] be set to [code]0.0[/code], disabling the timeout functionality. This will help to prevent large transfers from failing due to exceeding the timeout value. */
timeout: float;

/** If [code]true[/code], multithreading is used to improve performance. */
use_threads: boolean;

/** Cancels the current request. */
cancel_request(): void;

/**
 * Returns the response body length.
 *
 * **Note:** Some Web servers may not send a body length. In this case, the value returned will be `-1`. If using chunked transfer encoding, the body length will also be `-1`.
 *
*/
get_body_size(): int;

/** Returns the number of bytes this HTTPRequest downloaded. */
get_downloaded_bytes(): int;

/** Returns the current status of the underlying [HTTPClient]. See [enum HTTPClient.Status]. */
get_http_client_status(): int;

/**
 * Creates request on the underlying [HTTPClient]. If there is no configuration errors, it tries to connect using [method HTTPClient.connect_to_host] and passes parameters onto [method HTTPClient.request].
 *
 * Returns [constant OK] if request is successfully created. (Does not imply that the server has responded), [constant ERR_UNCONFIGURED] if not in the tree, [constant ERR_BUSY] if still processing previous request, [constant ERR_INVALID_PARAMETER] if given string is not a valid URL format, or [constant ERR_CANT_CONNECT] if not using thread and the [HTTPClient] cannot connect to host.
 *
 * **Note:** When [param method] is [constant HTTPClient.METHOD_GET], the payload sent via [param request_data] might be ignored by the server or even cause the server to reject the request (check [url=https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.1]RFC 7231 section 4.3.1[/url] for more details). As a workaround, you can send data as a query string in the URL (see [method String.uri_encode] for an example).
 *
 * **Note:** It's recommended to use transport encryption (TLS) and to avoid sending sensitive information (such as login credentials) in HTTP GET URL parameters. Consider using HTTP POST requests or HTTP headers for such information instead.
 *
*/
request(): int;

/**
 * Creates request on the underlying [HTTPClient] using a raw array of bytes for the request body. If there is no configuration errors, it tries to connect using [method HTTPClient.connect_to_host] and passes parameters onto [method HTTPClient.request].
 *
 * Returns [constant OK] if request is successfully created. (Does not imply that the server has responded), [constant ERR_UNCONFIGURED] if not in the tree, [constant ERR_BUSY] if still processing previous request, [constant ERR_INVALID_PARAMETER] if given string is not a valid URL format, or [constant ERR_CANT_CONNECT] if not using thread and the [HTTPClient] cannot connect to host.
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

/** Sets the [TLSOptions] to be used when connecting to an HTTPS server. See [method TLSOptions.client]. */
set_tls_options(): void;

  connect<T extends SignalsOf<HTTPRequest>>(signal: T, method: SignalFunction<HTTPRequest[T]>): number;



/**
 * Request successful.
 *
*/
static RESULT_SUCCESS: any;

/** No documentation provided. */
static RESULT_CHUNKED_BODY_SIZE_MISMATCH: any;

/**
 * Request failed while connecting.
 *
*/
static RESULT_CANT_CONNECT: any;

/**
 * Request failed while resolving.
 *
*/
static RESULT_CANT_RESOLVE: any;

/**
 * Request failed due to connection (read/write) error.
 *
*/
static RESULT_CONNECTION_ERROR: any;

/**
 * Request failed on TLS handshake.
 *
*/
static RESULT_TLS_HANDSHAKE_ERROR: any;

/**
 * Request does not have a response (yet).
 *
*/
static RESULT_NO_RESPONSE: any;

/**
 * Request exceeded its maximum size limit, see [member body_size_limit].
 *
*/
static RESULT_BODY_SIZE_LIMIT_EXCEEDED: any;

/** No documentation provided. */
static RESULT_BODY_DECOMPRESS_FAILED: any;

/**
 * Request failed (currently unused).
 *
*/
static RESULT_REQUEST_FAILED: any;

/**
 * HTTPRequest couldn't open the download file.
 *
*/
static RESULT_DOWNLOAD_FILE_CANT_OPEN: any;

/**
 * HTTPRequest couldn't write to the download file.
 *
*/
static RESULT_DOWNLOAD_FILE_WRITE_ERROR: any;

/**
 * Request reached its maximum redirect limit, see [member max_redirects].
 *
*/
static RESULT_REDIRECT_LIMIT_REACHED: any;

/**
 * Request failed due to a timeout. If you expect requests to take a long time, try increasing the value of [member timeout] or setting it to `0.0` to remove the timeout completely.
 *
*/
static RESULT_TIMEOUT: any;


/**
 * Emitted when a request is completed.
 *
*/
$request_completed: Signal<() => void>

}

