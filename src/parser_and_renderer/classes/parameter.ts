import { ParameterDeclaration } from 'ts-morph'

import { getTypeAnnotation } from '../../util/getGdType'

export function parseParameter(parameter: ParameterDeclaration): string {
  const name = parameter.getName()
  const typeAnnotation = getTypeAnnotation(parameter.getType())
  return `${name}${typeAnnotation}`
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
