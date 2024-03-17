import { ParenthesizedExpression } from 'ts-morph'

import { parseExpression } from './parse-expression'

export function parseParenthesizedExpression(
  parenthesizedExpression: ParenthesizedExpression,
): string {
  return `(${parseExpression(parenthesizedExpression.getExpression())})`
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('single parentheses', () => {
    expect(`
      export class Foo {
        foo(): int {
          return 10 - (1 + 2)
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> int:
          return 10 - (1 + 2)
    `)
  })

  test('nested parentheses', () => {
    expect(`
      export class Foo {
        foo(): int {
          return 10 - (1 + (2 - 3))
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> int:
          return 10 - (1 + (2 - 3))
    `)
  })
}
