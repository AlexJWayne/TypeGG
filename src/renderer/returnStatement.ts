import { GDKind } from '../grammar/kind'
import { GDReturnStatement } from '../grammar/nodes'
import { line } from '../util/line'

import { renderExpression } from './expression'

export function renderReturnStatement(node: GDReturnStatement): string {
  return line(
    'return',
    node.expression && ` ${renderExpression(node.expression)}`,
  )
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('no expression', () => {
    expect(
      renderReturnStatement({
        kind: GDKind.ReturnStatement,
        expression: null,
      }),
    ).toEqual('return\n')
  })

  test('with expression', () => {
    expect(
      renderReturnStatement({
        kind: GDKind.ReturnStatement,
        expression: { kind: GDKind.NumericLiteral, value: 123 },
      }),
    ).toEqual('return 123\n')
  })
}
