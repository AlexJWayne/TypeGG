import { ReturnStatement } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDReturnStatement } from '../../grammar/nodes'

import { parseExpression } from '../expressions/expression'

export function parseReturnStatement(
  returnStatement: ReturnStatement,
): GDReturnStatement {
  const returnExpression = returnStatement.getExpression()
  return {
    kind: GDKind.ReturnStatement,
    expression: returnExpression ? parseExpression(returnExpression) : null,
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('empty', () => {
    expect(`
      export default class Foo {
        bar(): void {
          return;
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          return
    `)
  })

  test('value', () => {
    expect(`
      export default class Foo {
        bar(): string {
          return "baz";
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> String:
          return "baz"
    `)
  })
}
