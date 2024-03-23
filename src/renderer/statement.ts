import { GDKind } from '../grammar/kind'
import { GDNode, isGDExpressionStatement } from '../grammar/nodesUnion'

import { renderExpressionStatement } from './expressionStatement'

export function renderStatement(statement: GDNode): string {
  switch (true) {
    case isGDExpressionStatement(statement):
      return renderExpressionStatement(statement)
  }

  console.error(
    'Unknown handled GDKind',
    GDKind[statement.kind],
    'in renderStatement()',
  )
  return ''
}
