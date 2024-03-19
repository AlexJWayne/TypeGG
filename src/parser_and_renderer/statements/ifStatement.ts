import { IfStatement } from 'ts-morph'

import { indent } from '../../util/indent'
import { line } from '../../util/line'

import { parseExpression } from '../expressions/expression'

import { parseStatements } from './statements'

export function parseIfStatement(statement: IfStatement): string {
  const condition = parseExpression(statement.getExpression())

  const thenStatement = statement.getThenStatement()
  const thenNodes =
    thenStatement.getChildSyntaxList()?.getChildren() ?? [thenStatement] ?? []

  const elseStatement = statement.getElseStatement()
  const elseNodes =
    elseStatement?.getChildSyntaxList()?.getChildren() ??
    (elseStatement && [elseStatement]) ??
    []

  const output = [
    line(`if ${condition}:`), //
    indent(parseStatements(thenNodes)),
  ]

  if (elseStatement && elseNodes) {
    output.push(
      line('else:'), //
      indent(parseStatements(elseNodes)),
    )
  }

  return output.join('')
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
