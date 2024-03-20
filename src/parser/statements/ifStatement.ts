import { IfStatement } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDIfStatement } from '../../grammar/nodes'

import { parseExpression } from '../expressions/expression'

export function parseIfStatement(statement: IfStatement): GDIfStatement {
  const thenStatement = statement.getThenStatement()
  const thenNodes =
    thenStatement.getChildSyntaxList()?.getChildren() ?? [thenStatement] ?? []

  const elseStatement = statement.getElseStatement()
  const elseNodes =
    elseStatement?.getChildSyntaxList()?.getChildren() ??
    (elseStatement && [elseStatement]) ??
    []

  return {
    kind: GDKind.IfStatement,
    condition: parseExpression(statement.getExpression()),
    thenStatements: thenNodes.map(parseExpression),
    elseIfs: [], // TODO
    elseStatements: elseStatement ? elseNodes.map(parseExpression) : null,
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('empty', () => {
    expect(`
      export default class Foo {
        bar(): void {
          if (true) {}
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          if true:
              pass
    `)
  })

  test('return', () => {
    expect(`
      export default class Foo {
        bar(): string {
          if (true) {
            return "bar";
          }
          return "baz";
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> String:
          if true:
              return "bar"
          return "baz"
    `)
  })

  test('nested', () => {
    expect(`
      export default class Foo {
        bar(): void {
          if (true) {
            if (false) {
              return;
            }
          }
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          if true:
              if false:
                  return
    `)
  })

  test('else', () => {
    expect(`
      export default class Foo {
        foo(): string {
          if (true) {
            return "foo";
          } else {
            return "bar";
          }
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> String:
          if true:
              return "foo"
          else:
              return "bar"
    `)
  })

  test('without braces', () => {
    expect(`
      export default class Foo {
        bar(): void {
          if (true) return;
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          if true:
              return
    `)
  })

  test('else without braces', () => {
    expect(`
      export default class Foo {
        bar(): void {
          if (true) return 123;
          else return 456;
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          if true:
              return 123
          else:
              return 456
    `)
  })
}
