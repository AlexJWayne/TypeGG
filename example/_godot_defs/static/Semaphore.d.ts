
/**
 * A synchronization semaphore that can be used to synchronize multiple [Thread]s. Initialized to zero on creation. For a binary version, see [Mutex].
 *
 * **Warning:** Semaphores must be used carefully to avoid deadlocks.
 *
 * **Warning:** To guarantee that the operating system is able to perform proper cleanup (no crashes, no deadlocks), these conditions must be met:
 *
 * - When a [Semaphore]'s reference count reaches zero and it is therefore destroyed, no threads must be waiting on it.
 *
 * - When a [Thread]'s reference count reaches zero and it is therefore destroyed, it must not be waiting on any semaphore.
 *
*/
declare class Semaphore extends RefCounted  {

  
/**
 * A synchronization semaphore that can be used to synchronize multiple [Thread]s. Initialized to zero on creation. For a binary version, see [Mutex].
 *
 * **Warning:** Semaphores must be used carefully to avoid deadlocks.
 *
 * **Warning:** To guarantee that the operating system is able to perform proper cleanup (no crashes, no deadlocks), these conditions must be met:
 *
 * - When a [Semaphore]'s reference count reaches zero and it is therefore destroyed, no threads must be waiting on it.
 *
 * - When a [Thread]'s reference count reaches zero and it is therefore destroyed, it must not be waiting on any semaphore.
 *
*/
  new(): Semaphore; 
  static "new"(): Semaphore 



/** Lowers the [Semaphore], allowing one more thread in. */
post(): void;

/** Like [method wait], but won't block, so if the value is zero, fails immediately and returns [code]false[/code]. If non-zero, it returns [code]true[/code] to report success. */
try_wait(): boolean;

/** Waits for the [Semaphore], if its value is zero, blocks until non-zero. */
wait(): void;

  connect<T extends SignalsOf<Semaphore>>(signal: T, method: SignalFunction<Semaphore[T]>): number;






}

