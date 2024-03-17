import { parseExpression } from './parse-expression'
import { BinaryExpression } from 'ts-morph'

export function parseBinaryExpression(node: BinaryExpression): string {
  const operator = node.getOperatorToken().getText()
  const left = parseExpression(node.getLeft())
  const right = parseExpression(node.getRight())
  return `${left} ${operator} ${right}`
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('addition', () => {
    expect(`
      export class Foo {
        foo() {
          return 1 + 2
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> float:
          return 1 + 2
    `)
  })
}
