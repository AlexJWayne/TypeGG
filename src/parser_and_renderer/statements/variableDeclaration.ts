import { VariableDeclaration } from 'ts-morph'

import { getTypeAnnotation } from '../../util/getGdType'
import { line } from '../../util/line'

import { parseExpression } from '../expressions/expression'

export function parseVariableDeclaration(
  variableDeclaration: VariableDeclaration,
): string {
  const identifier = variableDeclaration.getNameNode().getText()
  const typeAnnotation = getTypeAnnotation(variableDeclaration.getType())
  const valueExpression = variableDeclaration.getInitializer()
  const value = valueExpression && parseExpression(valueExpression)

  return line('var ', identifier, typeAnnotation, value && ` = ${value}`)
}
