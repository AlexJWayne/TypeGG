import { ParameterDeclaration } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDParameter } from '../../grammar/nodes'
import { getTypeAnnotation } from '../../util/getGdType'

export function parseParameter(parameter: ParameterDeclaration): GDParameter {
  return {
    kind: GDKind.Parameter,
    name: parameter.getName(),
    type: getTypeAnnotation(parameter.getType()),
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
