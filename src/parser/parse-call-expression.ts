import { parseExpression } from './parse-expression'
import { CallExpression, SyntaxKind } from 'ts-morph'

import { printAstTree } from '../util/debug'
import { line } from '../util/line'

export function parseCallExpression(callExpression: CallExpression): string {
  printAstTree(callExpression);

  const identifier = callExpression
    .getFirstChildByKindOrThrow(SyntaxKind.Identifier)
    .getText();

  const args = callExpression.getArguments().map(parseExpression);

  return line(`${identifier}(${args.join(", ")})`);
}
