import { parseVariableDeclaration } from './parse-variable-declaration'
import { VariableStatement } from 'ts-morph'

export function parseVariableStatement(
  variableStatement: VariableStatement,
): string {
  return variableStatement
    .getDeclarations()
    .map(parseVariableDeclaration)
    .join('')
}
