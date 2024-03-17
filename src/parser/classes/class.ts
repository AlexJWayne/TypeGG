import { ClassDeclaration } from 'ts-morph'

import { line } from '../../util/line'

import { parseClassProperty } from './classProperty'
import { parseMethod } from './method'

export function parseClass(classNode: ClassDeclaration): string {
  const className = classNode.getName()

  let output: string[] = [line(`class_name ${className}`)]

  return [
    line(`class_name ${className}`),
    ...classNode.getProperties().map(parseClassProperty),
    ...classNode.getMethods().map(parseMethod),
  ].join('')
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('class name', () => {
    expect(`
      export default class Foo {}
    `).toCompileTo(`
      class_name Foo
    `)
  })
}
