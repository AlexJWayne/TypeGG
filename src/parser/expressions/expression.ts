import { Node, SyntaxKind } from 'ts-morph'

import { printAstTree } from '../../util/debug'

import { parseArrowFunction } from './arrowFunction'
import { parseBinaryExpression } from './binaryExpression'
import { parseCallExpression } from './callExpression'
import { parseIdentifier } from './identifier'
import { parseNumericLiteral } from './numericLiteral'
import { parseParenthesizedExpression } from './parenthesizedExpression'
import { parsePropertyAccessExpression } from './parsePropertyAccessExpression'
import { parseStringLiteral } from './parseStringLiteral'
import { parseTemplateExpression } from './templateExpression'

export function parseExpression(node: Node): string {
  switch (true) {
    case node.isKind(SyntaxKind.Identifier):
      return parseIdentifier(node)

    case node.isKind(SyntaxKind.ParenthesizedExpression):
      return parseParenthesizedExpression(node)
    case node.isKind(SyntaxKind.BinaryExpression):
      return parseBinaryExpression(node)

    case node.isKind(SyntaxKind.CallExpression):
      return parseCallExpression(node)
    case node.isKind(SyntaxKind.ArrowFunction):
      return parseArrowFunction(node)
    case node.isKind(SyntaxKind.PropertyAccessExpression):
      return parsePropertyAccessExpression(node)

    case node.isKind(SyntaxKind.StringLiteral):
      return parseStringLiteral(node)
    case node.isKind(SyntaxKind.TemplateExpression):
      return parseTemplateExpression(node)
    case node.isKind(SyntaxKind.NoSubstitutionTemplateLiteral):
      return parseStringLiteral(node)

    case node.isKind(SyntaxKind.NumericLiteral):
      return parseNumericLiteral(node)

    case node.isKind(SyntaxKind.ThisKeyword):
      return 'self'
    case node.getKind() === SyntaxKind.DotToken: // Why does this break narrowing when using `isKind`?
    case node.isKind(SyntaxKind.TrueKeyword):
    case node.isKind(SyntaxKind.FalseKeyword):
    case node.isKind(SyntaxKind.NullKeyword):
      return node.getText()
  }

  console.error('Unknown expression kind', node.getKindName())
  printAstTree(node)
  return ''
}
