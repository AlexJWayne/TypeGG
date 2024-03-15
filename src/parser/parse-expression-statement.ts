import { parseExpression } from './parse-expression'
import { ExpressionStatement } from 'ts-morph'

export function parseExpressionStatement(
  expressionStatement: ExpressionStatement,
): string {
  return parseExpression(expressionStatement.getExpression());
}
