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
      export default class Foo {
        bar(isBaz: boolean, myStr: string) {}
      }
    `).toCompileTo(`
      class_name Foo
      func bar(isBaz: bool, myStr: String) -> void:
          pass
    `)
  })
}
