import { GDKind } from '../grammar/kind'
import {
  GDNode,
  isGDBinaryExpression,
  isGDBooleanLiteral,
  isGDCallExpression,
  isGDIdentifier,
  isGDNullKeyword,
  isGDNumericLiteral,
  isGDParenthesizedExpression,
  isGDPropertyAccessExpression,
  isGDSelfKeyword,
  isGDStringLiteral,
} from '../grammar/nodesUnion'

import { renderBinaryExpression } from './binaryExpression'
import { renderBooleanLiteral } from './booleanLiteral'
import { renderCallExpression } from './callExpression'
import { renderIdentifier } from './identifier'
import { renderNullKeyword } from './nullKeyword'
import { renderNumericLiteral } from './numericLiteral'
import { renderParenthesizedExpression } from './parenthesizedExpression'
import { renderPropertyAccessExpression } from './propertyAccessExpression'
import { renderStringLiteral } from './renderStringLiteral'
import { renderSelfKeyword } from './selfKeyword'

export function renderExpression(expression: GDNode): string {
  switch (true) {
    case isGDBinaryExpression(expression):
      return renderBinaryExpression(expression)

    case isGDBooleanLiteral(expression):
      return renderBooleanLiteral(expression)

    case isGDCallExpression(expression):
      return renderCallExpression(expression)

    case isGDIdentifier(expression):
      return renderIdentifier(expression)

    case isGDNumericLiteral(expression):
      return renderNumericLiteral(expression)

    case isGDNullKeyword(expression):
      return renderNullKeyword(expression)

    case isGDParenthesizedExpression(expression):
      return renderParenthesizedExpression(expression)

    case isGDPropertyAccessExpression(expression):
      return renderPropertyAccessExpression(expression)

    case isGDSelfKeyword(expression):
      return renderSelfKeyword(expression)

    case isGDStringLiteral(expression):
      return renderStringLiteral(expression)
  }

  console.error(
    'Unhandled GDKind',
    GDKind[expression.kind],
    'in renderExpression()',
  )
  return ''
}
