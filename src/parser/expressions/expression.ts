import { Node, SyntaxKind } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { printAstTree } from '../../util/debug'

import { parseBinaryExpression } from './binaryExpression'
import { parseBooleanLiteral } from './booleanLiteral'
import { parseCallExpression } from './callExpression'
import { parseIdentifier } from './identifier'
import { parseNumericLiteral } from './numericLiteral'
import { parseParenthesizedExpression } from './parenthesizedExpression'
import { parseStringLiteral } from './parseStringLiteral'
import { parsePropertyAccessExpression } from './propertyAccessExpression'

export function parseExpression(node: Node) {
  switch (true) {
    case node.isKind(SyntaxKind.Identifier):
      return parseIdentifier(node)

    case node.isKind(SyntaxKind.ParenthesizedExpression):
      return parseParenthesizedExpression(node)
    case node.isKind(SyntaxKind.BinaryExpression):
      return parseBinaryExpression(node)

    case node.isKind(SyntaxKind.CallExpression):
      return parseCallExpression(node)
    case node.isKind(SyntaxKind.PropertyAccessExpression):
      return parsePropertyAccessExpression(node)

    case node.isKind(SyntaxKind.StringLiteral):
      return parseStringLiteral(node)
    // case node.isKind(SyntaxKind.TemplateExpression):
    //   return parseTemplateExpression(node)
    case node.isKind(SyntaxKind.NoSubstitutionTemplateLiteral):
      return parseStringLiteral(node)

    case node.isKind(SyntaxKind.NumericLiteral):
      return parseNumericLiteral(node)

    case node.isKind(SyntaxKind.ThisKeyword):
      return { kind: GDKind.SelfKeyword } as const

    case node.isKind(SyntaxKind.TrueKeyword):
    case node.isKind(SyntaxKind.FalseKeyword):
      return parseBooleanLiteral(node)
    case node.isKind(SyntaxKind.NullKeyword):
      return { kind: GDKind.NullKeyword } as const
  }

  console.error('Unknown expression kind', node.getKindName())
  printAstTree(node)
  return { kind: GDKind.Unsupported } as const
}
