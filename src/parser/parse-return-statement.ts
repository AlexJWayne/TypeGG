import { ReturnStatement } from 'ts-morph'

export function parseReturnStatement(
  returnStatement: ReturnStatement,
): string[] {
  const expression = returnStatement.getExpression()?.getText();

  const returnLine = ["return", expression ? `${expression}` : ""]
    .filter((token) => token)
    .join(" ");

  return [returnLine];
}
