import { ParameterDeclaration } from 'ts-morph'

import { getTypeAnnotation } from '../../util/getGdType'

export function parseParameter(parameter: ParameterDeclaration): string {
  const name = parameter.getName()
  const typeAnnotation = getTypeAnnotation(parameter.getType())
  return `${name}${typeAnnotation}`
}
