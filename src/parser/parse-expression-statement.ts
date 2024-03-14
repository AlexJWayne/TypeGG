import { parseCallExpression } from './parse-call-expression'
import { ExpressionStatement, SyntaxKind } from 'ts-morph'

import { printAstTree } from '../util/debug'

export function parseExpressionStatement(
  expressionStatement: ExpressionStatement,
): string {
  const expression = expressionStatement.getExpression();

  if (expression.isKind(SyntaxKind.CallExpression))
    return parseCallExpression(expression);

  console.error("Unknown statement kind", expression.getKindName());
  printAstTree(expression);

  return "";
}
