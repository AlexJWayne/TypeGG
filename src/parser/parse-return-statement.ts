import { ReturnStatement } from 'ts-morph'

import { indent } from '../util/indent'

export function parseReturnStatement(
  returnStatement: ReturnStatement,
  indentLevel: number,
): string[] {
  const expression = returnStatement.getExpressionOrThrow().getText();
  return indent([`return ${expression}`], indentLevel);
}
