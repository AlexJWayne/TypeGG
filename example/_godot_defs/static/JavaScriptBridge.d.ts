
/**
 * The JavaScriptBridge singleton is implemented only in the Web export. It's used to access the browser's JavaScript context. This allows interaction with embedding pages or calling third-party JavaScript APIs.
 *
 * **Note:** This singleton can be disabled at build-time to improve security. By default, the JavaScriptBridge singleton is enabled. Official export templates also have the JavaScriptBridge singleton enabled. See [url=$DOCS_URL/contributing/development/compiling/compiling_for_web.html]Compiling for the Web[/url] in the documentation for more information.
 *
*/
declare class JavaScriptBridgeClass extends Object  {

  
/**
 * The JavaScriptBridge singleton is implemented only in the Web export. It's used to access the browser's JavaScript context. This allows interaction with embedding pages or calling third-party JavaScript APIs.
 *
 * **Note:** This singleton can be disabled at build-time to improve security. By default, the JavaScriptBridge singleton is enabled. Official export templates also have the JavaScriptBridge singleton enabled. See [url=$DOCS_URL/contributing/development/compiling/compiling_for_web.html]Compiling for the Web[/url] in the documentation for more information.
 *
*/
  new(): JavaScriptBridgeClass; 
  static "new"(): JavaScriptBridgeClass 



/** Creates a reference to a [Callable] that can be used as a callback by JavaScript. The reference must be kept until the callback happens, or it won't be called at all. See [JavaScriptObject] for usage. */
create_callback(): JavaScriptObject;

/** Creates a new JavaScript object using the [code]new[/code] constructor. The [param object] must a valid property of the JavaScript [code]window[/code]. See [JavaScriptObject] for usage. */
create_object(...args: any[]): any;

/**
 * Prompts the user to download a file containing the specified [param buffer]. The file will have the given [param name] and [param mime] type.
 *
 * **Note:** The browser may override the [url=https://en.wikipedia.org/wiki/Media_type]MIME type[/url] provided based on the file [param name]'s extension.
 *
 * **Note:** Browsers might block the download if [method download_buffer] is not being called from a user interaction (e.g. button click).
 *
 * **Note:** Browsers might ask the user for permission or block the download if multiple download requests are made in a quick succession.
 *
*/
download_buffer(): void;

/**
 * Execute the string [param code] as JavaScript code within the browser window. This is a call to the actual global JavaScript function [code skip-lint]eval()`.
 *
 * If [param use_global_execution_context] is `true`, the code will be evaluated in the global execution context. Otherwise, it is evaluated in the execution context of a function within the engine's runtime environment.
 *
*/
eval(): any;

/**
 * Force synchronization of the persistent file system (when enabled).
 *
 * **Note:** This is only useful for modules or extensions that can't use [FileAccess] to write files.
 *
*/
force_fs_sync(): void;

/** Returns an interface to a JavaScript object that can be used by scripts. The [param interface] must be a valid property of the JavaScript [code]window[/code]. The callback must accept a single [Array] argument, which will contain the JavaScript [code]arguments[/code]. See [JavaScriptObject] for usage. */
get_interface(): JavaScriptObject;

/**
 * Returns `true` if a new version of the progressive web app is waiting to be activated.
 *
 * **Note:** Only relevant when exported as a Progressive Web App.
 *
*/
pwa_needs_update(): boolean;

/**
 * Performs the live update of the progressive web app. Forcing the new version to be installed and the page to be reloaded.
 *
 * **Note:** Your application will be **reloaded in all browser tabs**.
 *
 * **Note:** Only relevant when exported as a Progressive Web App and [method pwa_needs_update] returns `true`.
 *
*/
pwa_update(): int;

  connect<T extends SignalsOf<JavaScriptBridgeClass>>(signal: T, method: SignalFunction<JavaScriptBridgeClass[T]>): number;





/**
 * Emitted when an update for this progressive web app has been detected but is waiting to be activated because a previous version is active. See [method pwa_update] to force the update to take place immediately.
 *
*/
$pwa_update_available: Signal<() => void>

}

