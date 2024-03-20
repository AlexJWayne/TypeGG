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
    expect(`
      export class Foo {
        foo() {
          this.bar
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          self.bar
    `)
  })

  test('deeply nested', () => {
    expect(`
      export class Foo {
        foo() {
          this.bar.baz.qux
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> void:
          self.bar.baz.qux
    `)
  })
}
