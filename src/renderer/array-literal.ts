import { GDKind } from '../grammar/kind'
import { GDArrayLiteral } from '../grammar/nodes'

import { renderExpression } from './expression'

export function renderArrayLiteral(node: GDArrayLiteral): string {
  return `[${node.elements.map(renderExpression).join(', ')}]`
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('array', () => {
    expect(
      renderArrayLiteral({
        kind: GDKind.ArrayLiteral,
        elements: [
          { kind: GDKind.NumericLiteral, value: 1 },
          { kind: GDKind.StringLiteral, value: 'foo' },
          { kind: GDKind.BooleanLiteral, value: true },
        ],
      }),
    ).toEqualGdScript(`[1, "foo", true]`)
  })
}
