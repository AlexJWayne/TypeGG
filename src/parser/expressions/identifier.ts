import { Identifier } from 'ts-morph'

export function parseIdentifier(node: Identifier): string {
  return node.getText()
}
