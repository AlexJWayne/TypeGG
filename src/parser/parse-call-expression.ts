import { CallExpression, SyntaxKind } from 'ts-morph'

import { printAstTree } from '../util/debug'

export function parseCallExpression(callExpression: CallExpression): string {
  printAstTree(callExpression);

  const identifier = callExpression.getFirstChildByKindOrThrow(
    SyntaxKind.Identifier,
  );
  const args = callExpression.getArguments();
  console.log("identifier", identifier.getText());
  args.map(printAstTree);

  return "";
}
