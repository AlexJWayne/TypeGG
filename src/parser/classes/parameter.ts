import { ParameterDeclaration } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDParameter } from '../../grammar/nodes'
import { getGdTypeForNode } from '../../util/get-gd-type'

export function parseParameter(parameter: ParameterDeclaration): GDParameter {
  return {
    kind: GDKind.Parameter,
    name: parameter.getName(),
    type: getGdTypeForNode(parameter),
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('parameters', () => {
    expect(`
      export class Foo {
        bar(isBaz: boolean, myStr: string) {}
      }
    `).toParseClass({
      kind: GDKind.Class,
      name: 'Foo',
      extends: null,
      properties: [],
      methods: [
        {
          kind: GDKind.ClassMethod,
          isStatic: false,
          name: 'bar',
          parameters: [
            { kind: GDKind.Parameter, name: 'isBaz', type: 'bool' },
            { kind: GDKind.Parameter, name: 'myStr', type: 'String' },
          ],
          returnType: 'void',
          statements: [],
        },
      ],
    })
  })
}
