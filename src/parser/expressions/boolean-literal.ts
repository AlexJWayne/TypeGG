import { BooleanLiteral } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDBooleanLiteral } from '../../grammar/nodes'

export function parseBooleanLiteral(
  booleanLiteral: BooleanLiteral,
): GDBooleanLiteral {
  return {
    kind: GDKind.BooleanLiteral,
    value: booleanLiteral.getLiteralValue(),
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('true', () => {
    expect('true').toParseExpression({
      kind: GDKind.BooleanLiteral,
      value: true,
    })
  })

  test('false', () => {
    expect('false').toParseExpression({
      kind: GDKind.BooleanLiteral,
      value: false,
    })
  })
}
