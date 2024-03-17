import { VariableStatement } from 'ts-morph'

import { parseVariableDeclaration } from './parse-variable-declaration'

export function parseVariableStatement(
  variableStatement: VariableStatement,
): string {
  return variableStatement
    .getDeclarations()
    .map(parseVariableDeclaration)
    .join('')
}
