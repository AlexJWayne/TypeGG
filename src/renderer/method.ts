import { GDKind } from '../grammar/kind'
import { GDClassMethod } from '../grammar/nodes'
import { indent } from '../util/indent'
import { line } from '../util/line'

import { renderStatement } from './statement'
import { renderTypeAnnotation } from './type-annotation'

export function renderMethod(method: GDClassMethod): string {
  const parametersString = method.parameters
    .map(({ name, type }) => `${name}${renderTypeAnnotation(type)}`)
    .join(', ')

  const statementsString =
    method.statements.length > 0
      ? method.statements.map(renderStatement).join('')
      : line('pass')

  return [
    line(
      '\n',
      method.isStatic && 'static ',
      'func ',
      `${method.name}(${parametersString})`,
      method.returnType && ` -> ${method.returnType}`,
      ':',
    ),
    indent(statementsString),
  ].join('')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('minimal', () => {
    expect(
      renderMethod({
        kind: GDKind.ClassMethod,
        name: 'foo',
        isStatic: false,
        returnType: null,
        parameters: [],
        statements: [],
      }),
    ).toEqualGdScript(`
      func foo():
          pass
    `)
  })

  test('with parameters', () => {
    expect(
      renderMethod({
        kind: GDKind.ClassMethod,
        name: 'foo',
        isStatic: false,
        returnType: null,
        parameters: [
          { kind: GDKind.Parameter, name: 'a', type: 'int' },
          { kind: GDKind.Parameter, name: 'b', type: 'int' },
        ],
        statements: [],
      }),
    ).toEqualGdScript(`
      func foo(a: int, b: int):
          pass
    `)
  })

  test('static method', () => {
    expect(
      renderMethod({
        kind: GDKind.ClassMethod,
        name: 'foo',
        isStatic: true,
        returnType: null,
        parameters: [],
        statements: [],
      }),
    ).toEqualGdScript(`
      static func foo():
          pass
    `)
  })

  test('with return type', () => {
    expect(
      renderMethod({
        kind: GDKind.ClassMethod,
        name: 'foo',
        isStatic: false,
        returnType: 'int',
        parameters: [],
        statements: [],
      }),
    ).toEqualGdScript(`
      func foo() -> int:
          pass
    `)
  })

  test('with statements', () => {
    expect(
      renderMethod({
        kind: GDKind.ClassMethod,
        name: 'foo',
        isStatic: false,
        returnType: null,
        parameters: [],
        statements: [
          {
            kind: GDKind.ExpressionStatement,
            expression: { kind: GDKind.StringLiteral, value: 'foo' },
          },
          {
            kind: GDKind.ExpressionStatement,
            expression: { kind: GDKind.StringLiteral, value: 'bar' },
          },
        ],
      }),
    ).toEqualGdScript(`
      func foo():
          "foo"
          "bar"
    `)
  })
}
