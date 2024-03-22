import { MethodDeclaration } from 'ts-morph'

import { getGdType } from '../../util/getGdType'
import { line } from '../../util/line'

import { parseParameter } from './parameter'

export function parseMethodDeclaration(methodNode: MethodDeclaration): string {
  const methodName = methodNode.getName()
  const methodReturnType = getGdType(methodNode.getReturnType())

  const parameters = methodNode.getParameters().map(parseParameter).join(', ')

  // TODO: make a method renderer
  return line(
    '\n',
    methodNode.isStatic() && 'static ',
    'func ',
    `${methodName}(${parameters})`,
    methodReturnType && ` -> ${methodReturnType}`,
    ':',
  )
}
