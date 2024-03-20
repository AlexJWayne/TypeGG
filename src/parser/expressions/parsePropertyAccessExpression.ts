import { PropertyAccessExpression } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDPropertyAccessExpression } from '../../grammar/nodes'

import { parseExpression } from './expression'
import { parseIdentifier } from './identifier'

export function parsePropertyAccessExpression(
  propertyAccessExpression: PropertyAccessExpression,
): GDPropertyAccessExpression {
  return {
    kind: GDKind.PropertyAccessExpression,
    object: parseExpression(propertyAccessExpression.getExpression()),
    property: parseIdentifier(propertyAccessExpression.getNameNode()),
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('property access', () => {
    expect('foo.bar').toParseStatements([
      {
        kind: GDKind.PropertyAccessExpression,
        object: { kind: GDKind.Identifier, name: 'foo' },
        property: { kind: GDKind.Identifier, name: 'bar' },
      },
    ])
  })

  test('deeply nested', () => {
    expect('foo.bar.baz.qux').toParseStatements([
      {
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
      },
    ])
  })
}
