import { PropertyAccessExpression } from 'ts-morph'

import { parseExpression } from './expression'

export function parsePropertyAccessExpression(
  propertyAccessExpression: PropertyAccessExpression,
): string {
  return propertyAccessExpression
    .getChildren()
    .flatMap(parseExpression)
    .join('')
}
