import { GDKind } from '../grammar/kind'
import { GDPropertyAccessExpression } from '../grammar/nodes'
import { isGDSelfExpression } from '../grammar/nodes-union'

import { renderExpression } from './expression'

export function renderPropertyAccessExpression(
  node: GDPropertyAccessExpression,
): string {
  const isImplicitSelf =
    isGDSelfExpression(node.object) && !node.object.explicit
  return [
    isImplicitSelf ? null : renderExpression(node.object),
    renderExpression(node.property),
  ]
    .filter(Boolean)
    .join('.')
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

  test('explicit self', () => {
    expect(
      renderPropertyAccessExpression({
        kind: GDKind.PropertyAccessExpression,
        object: { kind: GDKind.SelfExpression, explicit: true },
        property: { kind: GDKind.Identifier, name: 'foo' },
      }),
    ).toEqual('self.foo')
  })

  test('implicit self', () => {
    expect(
      renderPropertyAccessExpression({
        kind: GDKind.PropertyAccessExpression,
        object: { kind: GDKind.SelfExpression, explicit: false },
        property: { kind: GDKind.Identifier, name: 'foo' },
      }),
    ).toEqual('foo')
  })
}
