import { parseArrowFunction } from './parse-arrow-function'
import { parseBinaryExpression } from './parse-binary-expression'
import { parseCallExpression } from './parse-call-expression'
import { parseNumericLiteral, parseStringLiteral } from './parse-literals'
import { parseParenthesizedExpression } from './parse-parenthesized-expression'
import { Node, SyntaxKind } from 'ts-morph'

import { printAstTree } from '../util/debug'

export function parseExpression(node: Node): string {
  if (node.isKind(SyntaxKind.Identifier)) return node.getText()

  if (node.isKind(SyntaxKind.CallExpression)) return parseCallExpression(node)
  if (node.isKind(SyntaxKind.ArrowFunction)) return parseArrowFunction(node)

  if (node.isKind(SyntaxKind.StringLiteral)) return parseStringLiteral(node)
  if (node.isKind(SyntaxKind.NumericLiteral)) return parseNumericLiteral(node)

  if (node.isKind(SyntaxKind.TrueKeyword)) return 'true'
  if (node.isKind(SyntaxKind.FalseKeyword)) return 'false'

  if (node.isKind(SyntaxKind.ParenthesizedExpression))
    return parseParenthesizedExpression(node)
  if (node.isKind(SyntaxKind.BinaryExpression))
    return parseBinaryExpression(node)

  console.error('Unknown expression kind', node.getKindName())
  printAstTree(node)
  return ''
}
