import { ArrayLiteralExpression } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDArrayLiteral } from '../../grammar/nodes'

import { parseExpression } from './expression'

export function parseArrayLiteral(
  expresion: ArrayLiteralExpression,
): GDArrayLiteral {
  return {
    kind: GDKind.ArrayLiteral,
    elements: expresion.getElements().map(parseExpression),
  }
}

if (import.meta.vitest) {
  const { describe, expect, test } = import.meta.vitest

  test('string', () => {
    expect('[1, "foo", true]').toParseExpression({
      kind: GDKind.ArrayLiteral,
      elements: [
        { kind: GDKind.NumericLiteral, value: 1 },
        { kind: GDKind.StringLiteral, value: 'foo' },
        { kind: GDKind.BooleanLiteral, value: true },
      ],
    })
  })
}
