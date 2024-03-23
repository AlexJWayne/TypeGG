import { GDKind } from '../grammar/kind'
import { GDClassMethod } from '../grammar/nodes'
import { indent } from '../util/indent'
import { line } from '../util/line'

import { renderTypeAnnotation } from './typeAnnotation'

export function renderMethod(method: GDClassMethod): string {
  const parametersString = method.parameters
    .map(({ name, type }) => [name, renderTypeAnnotation(type)].join(''))
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
            kind: GDKind.VariableDeclaration,
            name: 'str',
            type: 'String',
            initial: { kind: GDKind.StringLiteral, value: 'Hello, world!' },
          },
          {
            kind: GDKind.CallExpression,
            callee: { kind: GDKind.Identifier, name: 'print' },
            arguments: [{ kind: GDKind.Identifier, name: 'str' }],
          },
        ],
      }),
    ).toEqualGdScript(`
      func foo():
          var str: String = "Hello, world!"
          print(str)
    `)
  })
}
