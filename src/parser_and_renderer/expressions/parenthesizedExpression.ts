import { ParenthesizedExpression } from 'ts-morph'

import { parseExpression } from './expression'

export function parseParenthesizedExpression(
  parenthesizedExpression: ParenthesizedExpression,
): string {
  return `(${parseExpression(parenthesizedExpression.getExpression())})`
}
