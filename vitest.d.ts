import type { Assertion, AsymmetricMatchersContaining } from 'vitest'

import { GDNode } from './src/grammar/nodesUnion'

interface CustomMatchers<R = unknown> {
  toCompileTo: (expectedGd: string) => R
  toEqualGdScript: (expectedGd: string) => R
  toParseStatements: (expected: GDNode[]) => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
