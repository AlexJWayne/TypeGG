import { Node, SyntaxKind } from 'ts-morph'

import { printAstTree } from '../../util/debug'

import { parseArrowFunction } from './arrowFunction'
import { parseBinaryExpression } from './binaryExpression'
import { parseBooleanLiteral } from './booleanLiteral'
import { parseCallExpression } from './callExpression'
import { parseIdentifier } from './identifier'
import { parseNumericLiteral } from './numericLiteral'
import { parseParenthesizedExpression } from './parenthesizedExpression'
import { parseStringLiteral } from './parseStringLiteral'

export function parseExpression(node: Node): string {
  if (node.isKind(SyntaxKind.Identifier)) return parseIdentifier(node)

  if (node.isKind(SyntaxKind.CallExpression)) return parseCallExpression(node)
  if (node.isKind(SyntaxKind.ArrowFunction)) return parseArrowFunction(node)

  if (node.isKind(SyntaxKind.StringLiteral)) return parseStringLiteral(node)
  if (node.isKind(SyntaxKind.NumericLiteral)) return parseNumericLiteral(node)

  if (node.isKind(SyntaxKind.TrueKeyword)) return parseBooleanLiteral(node)
  if (node.isKind(SyntaxKind.FalseKeyword)) return parseBooleanLiteral(node)

  if (node.isKind(SyntaxKind.ParenthesizedExpression))
    return parseParenthesizedExpression(node)
  if (node.isKind(SyntaxKind.BinaryExpression))
    return parseBinaryExpression(node)

  console.error('Unknown expression kind', node.getKindName())
  printAstTree(node)
  return ''
}
