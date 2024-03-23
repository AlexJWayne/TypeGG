import { GDKind } from '../grammar/kind'
import {
  GDNode,
  isGDBinaryExpression,
  isGDBooleanLiteral,
  isGDCallExpression,
  isGDIdentifier,
  isGDNumericLiteral,
  isGDParenthesizedExpression,
  isGDPropertyAccessExpression,
  isGDStringLiteral,
} from '../grammar/nodesUnion'

import { renderBooleanLiteral } from './booleanLiteral'
import { renderCallExpression } from './callExpression'
import { renderIdentifier } from './identifier'
import { renderNumericLiteral } from './numericLiteral'
import { renderParenthesizedExpression } from './parenthesizedExpression'
import { renderPropertyAccessExpression } from './propertyAccessExpression'
import { renderStringLiteral } from './renderStringLiteral'

export function renderExpression(expression: GDNode): string {
  switch (true) {
    case isGDBinaryExpression(expression):
      return renderExpression(expression)

    case isGDBooleanLiteral(expression):
      return renderBooleanLiteral(expression)

    case isGDCallExpression(expression):
      return renderCallExpression(expression)

    case isGDIdentifier(expression):
      return renderIdentifier(expression)

    case isGDNumericLiteral(expression):
      return renderNumericLiteral(expression)

    case isGDParenthesizedExpression(expression):
      return renderParenthesizedExpression(expression)

    case isGDPropertyAccessExpression(expression):
      return renderPropertyAccessExpression(expression)

    case isGDStringLiteral(expression):
      return renderStringLiteral(expression)
  }

  console.error(
    'Unknown handled GDKind',
    GDKind[expression.kind],
    'in renderExpression()',
  )
  return ''
}
