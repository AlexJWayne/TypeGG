import { ParameterDeclaration } from 'ts-morph'

import { getGdType } from '../util/get-gd-type'

export function parseParameter(parameter: ParameterDeclaration): string {
  const name = parameter.getName()
  const type = getGdType(parameter.getType())
  return `${name}: ${type}`
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
