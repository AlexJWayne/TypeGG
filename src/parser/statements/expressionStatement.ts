import { ExpressionStatement } from 'ts-morph'

import { parseExpression } from '../expressions/expression'

export function parseExpressionStatement(
  expressionStatement: ExpressionStatement,
): string {
  return parseExpression(expressionStatement.getExpression())
}
