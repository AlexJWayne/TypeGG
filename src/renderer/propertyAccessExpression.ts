import { GDKind } from '../grammar/kind'
import { GDPropertyAccessExpression } from '../grammar/nodes'

import { renderExpression } from './expression'

export function renderPropertyAccessExpression(
  node: GDPropertyAccessExpression,
): string {
  return [
    renderExpression(node.object), //
    renderExpression(node.property),
  ].join('.')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('property access', () => {
    expect(
      renderPropertyAccessExpression({
        kind: GDKind.PropertyAccessExpression,
        object: { kind: GDKind.Identifier, name: 'foo' },
        property: { kind: GDKind.Identifier, name: 'bar' },
      }),
    ).toEqual('foo.bar')
  })

  test('deeply nested', () => {
    expect(
      renderPropertyAccessExpression({
        kind: GDKind.PropertyAccessExpression,
        object: {
          kind: GDKind.PropertyAccessExpression,
          object: {
            kind: GDKind.PropertyAccessExpression,
            object: { kind: GDKind.Identifier, name: 'foo' },
            property: { kind: GDKind.Identifier, name: 'bar' },
          },
          property: { kind: GDKind.Identifier, name: 'baz' },
        },
        property: { kind: GDKind.Identifier, name: 'qux' },
      }),
    ).toEqual('foo.bar.baz.qux')
  })
}
