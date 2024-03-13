import { parseReturnStatement } from './parse-return-statement'
import { Statement, SyntaxKind } from 'ts-morph'

import { indent } from '../util/indent'

export function parseStatements(
  statements: Statement[],
  indentLevel: number = 0,
): string[] {
  indentLevel += 1;

  if (statements.length === 0) {
    return indent(["pass"], indentLevel);
  }

  return statements.flatMap((statement) => {
    if (statement.isKind(SyntaxKind.ReturnStatement)) {
      return parseReturnStatement(statement, indentLevel);
    }

    console.error("Unknown statement kind", statement.getKindName());
    return statement.getText();
  });
}
