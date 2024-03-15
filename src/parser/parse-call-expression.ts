import { parseExpression } from './parse-expression'
import { CallExpression, SyntaxKind } from 'ts-morph'

import { line } from '../util/line'

export function parseCallExpression(callExpression: CallExpression): string {
  const identifier = callExpression
    .getFirstChildByKindOrThrow(SyntaxKind.Identifier)
    .getText()

  const args = callExpression.getArguments().map(parseExpression)

  return line(`${identifier}(${args.join(', ')})`)
}
