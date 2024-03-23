import { GDKind } from '../../grammar/kind'
import { GDFragment } from '../../grammar/nodes'
import { renderStatement } from '../../renderer/statement'

export function renderFragment(node: GDFragment): string {
  return node.statements.map(renderStatement).join('')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('fragment', () => {
    expect(
      renderFragment({
        kind: GDKind.Fragment,
        statements: [
          {
            kind: GDKind.ExpressionStatement,
            expression: { kind: GDKind.StringLiteral, value: 'foo' },
          },
          {
            kind: GDKind.ExpressionStatement,
            expression: { kind: GDKind.NumericLiteral, value: 123 },
          },
        ],
      }),
    ).toEqual('"foo"\n123\n')
  })
}
