import { GDKind } from '../grammar/kind'
import {
  type GDNode,
  isGDExpressionStatement,
  isGDFragment,
  isGDIfStatement,
  isGDReturnStatement,
  isGDVariableDeclaration,
} from '../grammar/nodes-union'
import { renderFragment } from '../parser/expressions/fragment'

import { renderExpressionStatement } from './expression-statement'
import { renderIfStatement } from './if-statement'
import { renderReturnStatement } from './return-statement'
import { renderVariableDeclaration } from './variable-declaration'

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
