import { CallExpression } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDCallExpression } from '../../grammar/nodes'

import { parseExpression } from './expression'

export function parseCallExpression(
  callExpression: CallExpression,
): GDCallExpression {
  return {
    kind: GDKind.CallExpression,
    callee: parseExpression(callExpression.getExpression()),
    arguments: callExpression.getArguments().map(parseExpression),
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('global function', () => {
    expect(`
      print()
    `).toParseExpression({
      kind: GDKind.CallExpression,
      callee: { kind: GDKind.Identifier, name: 'print' },
      arguments: [],
    })
  })

  test('with arguments', () => {
    expect("print('foo', 'bar')").toParseExpression({
      kind: GDKind.CallExpression,
      callee: { kind: GDKind.Identifier, name: 'print' },
      arguments: [
        { kind: GDKind.StringLiteral, value: 'foo' },
        { kind: GDKind.StringLiteral, value: 'bar' },
      ],
    })
  })
}
