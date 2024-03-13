import { parseStatements } from './parse-statements'
import { IfStatement } from 'ts-morph'

import { indent } from '../util/indent'

export function parseIfStatement(statement: IfStatement): string[] {
  const condition = statement.getExpression().getText();
  const statementsNodes =
    statement.getThenStatement().getChildSyntaxList()?.getChildren() ?? [];

  const statements = parseStatements(statementsNodes);

  return [
    `if ${condition}:`, //
    ...indent(statements),
  ];
}
