import { CallExpression } from 'ts-morph'

import { parseExpression } from './expression'

export function parseCallExpression(callExpression: CallExpression): string {
  const parsedExpression = parseExpression(callExpression.getExpression())
  const parsedArguments = callExpression
    .getArguments()
    .map(parseExpression)
    .join(', ')
  return `${parsedExpression}(${parsedArguments})`
}
