import { StringLiteral } from 'ts-morph'

export function parseStringLiteral(stringLiteral: StringLiteral): string {
  return stringLiteral.getText();
}
