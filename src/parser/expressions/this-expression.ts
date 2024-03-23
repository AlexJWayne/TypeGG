import { SyntaxKind, ThisExpression } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDSelfExpression } from '../../grammar/nodes'

export function parseThisExpression(node: ThisExpression): GDSelfExpression {
  const isInStaticMethod = node
    .getFirstAncestorByKind(SyntaxKind.MethodDeclaration)
    ?.isStatic()

  return {
    kind: GDKind.SelfExpression,
    explicit: !isInStaticMethod,
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('this expression', () => {
    expect('this').toParseExpression({
      kind: GDKind.SelfExpression,
      explicit: true,
    })
  })

  test('exlicit inside an instance method', () => {
    expect(`
      class Foo {
        bar() {
          this
        }
      }
    `).toParseMethodStatements('bar', [
      {
        kind: GDKind.ExpressionStatement,
        expression: { kind: GDKind.SelfExpression, explicit: true },
      },
    ])
  })

  test('implicit inside a static method', () => {
    expect(`
      class Foo {
        static bar() {
          this
        }
      }
    `).toParseMethodStatements('bar', [
      {
        kind: GDKind.ExpressionStatement,
        expression: { kind: GDKind.SelfExpression, explicit: false },
      },
    ])
  })
}
