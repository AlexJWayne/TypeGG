import { BooleanLiteral } from 'ts-morph'

export function parseBooleanLiteral(booleanLiteral: BooleanLiteral): string {
  return booleanLiteral.getText()
}
