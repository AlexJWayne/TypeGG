declare class Signal<T extends (...arguments: any[]) => any = () => void> {
  /** Connect a callback to this signal. */
  connect(callback: T): void

  /** Emit this signal. */
  emit(...arguments: Parameters<T>): void
}
