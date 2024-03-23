import { GDKind } from '../grammar/kind'
import {
  GDNode,
  isGDExpressionStatement,
  isGDFragment,
  isGDIfStatement,
  isGDReturnStatement,
  isGDVariableDeclaration,
} from '../grammar/nodesUnion'
import { renderFragment } from '../parser/expressions/fragment'

import { renderExpressionStatement } from './expressionStatement'
import { renderIfStatement } from './ifStatement'
import { renderReturnStatement } from './returnStatement'
import { renderVariableDeclaration } from './variableDeclaration'

export function renderStatement(statement: GDNode): string {
  switch (true) {
    case isGDExpressionStatement(statement):
      return renderExpressionStatement(statement)

    case isGDFragment(statement):
      return renderFragment(statement)

    case isGDIfStatement(statement):
      return renderIfStatement(statement)

    case isGDReturnStatement(statement):
      return renderReturnStatement(statement)

    case isGDVariableDeclaration(statement):
      return renderVariableDeclaration(statement)
  }

  console.error(
    'Unhandled GDKind',
    GDKind[statement.kind],
    'in renderStatement()',
  )
  return ''
}
