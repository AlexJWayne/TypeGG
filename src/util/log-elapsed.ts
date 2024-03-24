import chalk from 'chalk'

export function logElapsed<T>(message: string, fn: () => T): T {
  const start = performance.now()
  const result = fn()
  const elapsed = Math.round(performance.now() - start)

  console.log(message, chalk.gray(` ${Math.round(elapsed)}ms`))

  return result
}

export async function logElapsedAsync<T>(
  message: string,
  fn: () => Promise<T>,
): Promise<T> {
  const start = performance.now()
  const result = await fn()
  const elapsed = Math.round(performance.now() - start)

  console.log(message, chalk.gray(`${Math.round(elapsed)}ms`))

  return result
}
