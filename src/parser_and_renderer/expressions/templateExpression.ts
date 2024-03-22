import { TemplateExpression } from 'ts-morph'

import { parseExpression } from './expression'
import { parseStringLiteral } from './parseStringLiteral'

export function parseTemplateExpression(
  templateExpression: TemplateExpression,
): string {
  const head = parseStringLiteral(templateExpression.getHead())
  const spans = templateExpression
    .getTemplateSpans()
    .flatMap((span) => [
      `str(${parseExpression(span.getExpression())})`,
      parseStringLiteral(span.getLiteral()),
    ])

  return [head, ...spans].join(' + ')
}
