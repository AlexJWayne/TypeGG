import type { Assertion, AsymmetricMatchersContaining } from 'vitest'

interface CustomMatchers<R = unknown> {
  toCompileTo: (expectedGd: string) => R
  toEqualGdScript: (expectedGd: string) => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
