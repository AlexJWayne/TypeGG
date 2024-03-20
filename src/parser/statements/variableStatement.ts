import { VariableStatement } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDFragment } from '../../grammar/nodes'

import { parseVariableDeclaration } from './variableDeclaration'

export function parseVariableStatement(
  variableStatement: VariableStatement,
): GDFragment {
  return {
    kind: GDKind.Fragment,
    statements: variableStatement
      .getDeclarations()
      .map(parseVariableDeclaration),
  }
}
