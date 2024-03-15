import { parseCallExpression } from './parse-call-expression'
import { parseStringLiteral } from './parse-string-literal'
import { Node, SyntaxKind } from 'ts-morph'

import { printAstTree } from '../util/debug'

export function parseExpression(node: Node): string {
  if (node.isKind(SyntaxKind.CallExpression)) return parseCallExpression(node);
  if (node.isKind(SyntaxKind.StringLiteral)) return parseStringLiteral(node);

  console.error("Unknown expression kind", node.getKindName());
  printAstTree(node);
  return "";
}
