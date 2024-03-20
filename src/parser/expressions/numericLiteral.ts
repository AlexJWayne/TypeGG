import { NumericLiteral } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDNumericLiteral } from '../../grammar/nodes'

export function parseNumericLiteral(node: NumericLiteral): GDNumericLiteral {
  return {
    kind: GDKind.NumericLiteral,
    value: node.getLiteralValue(),
  }
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('number', () => {
    expect('123').toParseStatements([
      { kind: GDKind.NumericLiteral, value: 123 },
    ])
  })

  test('float', () => {
    expect('123.45').toParseStatements([
      { kind: GDKind.NumericLiteral, value: 123.45 },
    ])
  })
}
