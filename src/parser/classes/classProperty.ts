import { PropertyDeclaration } from 'ts-morph'

import { getGdType } from '../../util/get-gd-type'
import { line } from '../../util/line'

export function parseClassProperty(propertyNode: PropertyDeclaration): string {
  const exportsDecorator = propertyNode.getDecorator('exports')
  const propertyName = propertyNode.getName()
  const propertyType = getGdType(propertyNode.getType())
  const propertyInitial = propertyNode.getInitializer()?.getText()

  return line(
    exportsDecorator && '@export ',
    `var ${propertyName}: ${propertyType}`,
    propertyInitial && ` = ${propertyInitial}`,
  )
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('instance property', () => {
    expect(`
      export default class Foo {
        bar: string = "baz";
      }
    `).toCompileTo(`
      class_name Foo
      var bar: String = "baz"
    `)
  })

  test('exported property', () => {
    expect(`
      export default class Foo {
        @exports
        foo: string
      }
    `).toCompileTo(`
      class_name Foo
      @export var foo: String
    `)
  })
}
