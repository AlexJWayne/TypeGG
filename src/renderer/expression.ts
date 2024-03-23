import { GDKind } from '../grammar/kind'
import {
  type GDNode,
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
} from '../grammar/nodes-union'

import { renderBinaryExpression } from './binary-expression'
import { renderBooleanLiteral } from './boolean-literal'
import { renderCallExpression } from './call-expression'
import { renderIdentifier } from './identifier'
import { renderNullKeyword } from './null-keyword'
import { renderNumericLiteral } from './numeric-literal'
import { renderParenthesizedExpression } from './parenthesized-expression'
import { renderPropertyAccessExpression } from './property-access-expression'
import { renderSelfKeyword } from './self-keyword'
import { renderStringLiteral } from './string-literal'

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
