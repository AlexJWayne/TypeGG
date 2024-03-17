import { VariableStatement } from 'ts-morph'

import { parseVariableDeclaration } from './variableDeclaration'

export function parseVariableStatement(
  variableStatement: VariableStatement,
): string {
  return variableStatement
    .getDeclarations()
    .map(parseVariableDeclaration)
    .join('')
}
