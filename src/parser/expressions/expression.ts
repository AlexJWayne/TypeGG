import { Node, SyntaxKind } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { printAstTree } from '../../util/debug'

import { parseBinaryExpression } from './binary-expression'
import { parseBooleanLiteral } from './boolean-literal'
import { parseCallExpression } from './call-expression'
import { parseIdentifier } from './identifier'
import { parseNumericLiteral } from './numeric-literal'
import { parseParenthesizedExpression } from './parenthesized-expression'
import { parseStringLiteral } from './parse-string-literal'
import { parsePropertyAccessExpression } from './property-access-expression'
import { parseTemplateExpression } from './template-expression'
import { parseThisExpression } from './this-expression'

export function parseExpression(node: Node) {
  switch (true) {
    case node.isKind(SyntaxKind.BinaryExpression):
      return parseBinaryExpression(node)

    case node.isKind(SyntaxKind.CallExpression):
      return parseCallExpression(node)

    case node.isKind(SyntaxKind.FalseKeyword):
      return parseBooleanLiteral(node)

    case node.isKind(SyntaxKind.Identifier):
      return parseIdentifier(node)

    case node.isKind(SyntaxKind.NoSubstitutionTemplateLiteral):
      return parseStringLiteral(node)

    case node.isKind(SyntaxKind.NumericLiteral):
      return parseNumericLiteral(node)

    case node.isKind(SyntaxKind.NullKeyword):
      return { kind: GDKind.NullKeyword } as const

    case node.isKind(SyntaxKind.ParenthesizedExpression):
      return parseParenthesizedExpression(node)

    case node.isKind(SyntaxKind.PropertyAccessExpression):
      return parsePropertyAccessExpression(node)

    case node.isKind(SyntaxKind.StringLiteral):
    case node.isKind(SyntaxKind.TemplateHead):
    case node.isKind(SyntaxKind.TemplateMiddle):
    case node.isKind(SyntaxKind.TemplateTail):
      return parseStringLiteral(node)

    case node.isKind(SyntaxKind.TemplateExpression):
      return parseTemplateExpression(node)

    case node.isKind(SyntaxKind.ThisKeyword):
      return parseThisExpression(node)

    case node.isKind(SyntaxKind.TrueKeyword):
      return parseBooleanLiteral(node)
  }

  console.error(
    'Unknown expression kind',
    node.getKindName(),
    'in parseExpression()',
  )
  printAstTree(node)
  return { kind: GDKind.Unsupported } as const
}
