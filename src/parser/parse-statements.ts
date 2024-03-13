import { parseIfStatement } from './parse-if-statement'
import { parseReturnStatement } from './parse-return-statement'
import { Node, SyntaxKind } from 'ts-morph'

export function parseStatements(statements: Node[]): string[] {
  if (statements.length === 0) {
    return ["pass"];
  }

  return statements.flatMap((statement) => {
    switch (true) {
      case statement.isKind(SyntaxKind.IfStatement):
        return parseIfStatement(statement);
      case statement.isKind(SyntaxKind.ReturnStatement):
        return parseReturnStatement(statement);
    }

    console.error("Unknown statement kind", statement.getKindName());
    return statement.getText();
  });
}
