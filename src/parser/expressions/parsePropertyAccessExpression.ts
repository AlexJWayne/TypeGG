import { PropertyAccessExpression } from 'ts-morph'

import { parseExpression } from './expression'

export function parsePropertyAccessExpression(
  propertyAccessExpression: PropertyAccessExpression,
): string {
  return propertyAccessExpression
    .getChildren()
    .flatMap(parseExpression)
    .join('')
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
