import type { Assertion, AsymmetricMatchersContaining } from 'vitest'

import { GDNode } from './src/grammar/nodesUnion'

interface CustomMatchers<R = unknown> {
  toParseClass(expected: GDNode): R
  toParseMethodStatements(expectedMethodName: string, expected: GDNode[]): R
  toParseStatements(expected: GDNode[]): R
  toParseExpression(expected: GDNode): R

  toEqualGdScript(expectedGd: string): R

  // TODO: remove?
  toCompileTo(expectedGd: string): R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
