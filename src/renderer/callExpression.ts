import { GDKind } from '../grammar/kind'
import { GDCallExpression } from '../grammar/nodes'

import { renderExpression } from './expression'

export function renderCallExpression(node: GDCallExpression): string {
  const callee = renderExpression(node.callee)
  const args = node.arguments.map((arg) => renderExpression(arg)).join(', ')
  return `${callee}(${args})`
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('simple', () => {
    expect(
      renderCallExpression({
        kind: GDKind.CallExpression,
        callee: { kind: GDKind.Identifier, name: 'foo' },
        arguments: [],
      }),
    ).toEqual('foo()')
  })

  test('with arguments', () => {
    expect(
      renderCallExpression({
        kind: GDKind.CallExpression,
        callee: { kind: GDKind.Identifier, name: 'foo' },
        arguments: [
          { kind: GDKind.NumericLiteral, value: 1 },
          { kind: GDKind.StringLiteral, value: 'bar' },
        ],
      }),
    ).toEqual('foo(1, "bar")')
  })
}
