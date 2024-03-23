import { TemplateExpression } from 'ts-morph'

import { GDKind } from '../../grammar/kind'
import { GDNode, isGDStringLiteral } from '../../grammar/nodes-union'

import { parseExpression } from './expression'
import { parseStringLiteral } from './parse-string-literal'

export function parseTemplateExpression(
  templateExpression: TemplateExpression,
): GDNode {
  const head = parseStringLiteral(templateExpression.getHead())

  const spans = templateExpression.getTemplateSpans()
  if (spans.length === 0) return head

  const expressions = spans.flatMap((span) => [
    span.getExpression(),
    span.getLiteral(),
  ])

  return expressions.reduce<GDNode>((leftExpression, rightTs) => {
    let rightExpression = parseExpression(rightTs)

    // If the left side is an empty string literal, omit it by returning just the right side.
    if (isGDStringLiteral(leftExpression) && leftExpression.value === '') {
      return rightExpression
    }

    // If the rifht side is an empty string literal, omit it by returning just the left side.
    if (isGDStringLiteral(rightExpression) && rightExpression.value === '') {
      return leftExpression
    }

    if (!isGDStringLiteral(rightExpression)) {
      rightExpression = {
        kind: GDKind.CallExpression,
        callee: { kind: GDKind.Identifier, name: 'str' },
        arguments: [rightExpression],
      }
    }

    return {
      kind: GDKind.BinaryExpression,
      operator: '+',
      left: leftExpression,
      right: rightExpression,
    } as const
  }, head)
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('leading interpolation', () => {
    expect("`${'hello'} world`").toParseExpression({
      kind: GDKind.BinaryExpression,
      operator: '+',
      left: { kind: GDKind.StringLiteral, value: 'hello' },
      right: { kind: GDKind.StringLiteral, value: ' world' },
    })
  })

  test('end interpolation', () => {
    expect("`hello ${'world'}`").toParseExpression({
      kind: GDKind.BinaryExpression,
      operator: '+',
      left: { kind: GDKind.StringLiteral, value: 'hello ' },
      right: { kind: GDKind.StringLiteral, value: 'world' },
    })
  })

  test('mid interpolation', () => {
    expect("`hello ${'world'}!`").toParseExpression({
      kind: GDKind.BinaryExpression,
      operator: '+',
      left: {
        kind: GDKind.BinaryExpression,
        operator: '+',
        left: { kind: GDKind.StringLiteral, value: 'hello ' },
        right: { kind: GDKind.StringLiteral, value: 'world' },
      },
      right: { kind: GDKind.StringLiteral, value: '!' },
    })
  })

  test('multiple interpolation', () => {
    expect("`hello ${'world'}${'!'}`").toParseExpression({
      kind: GDKind.BinaryExpression,
      operator: '+',
      left: {
        kind: GDKind.BinaryExpression,
        operator: '+',
        left: { kind: GDKind.StringLiteral, value: 'hello ' },
        right: { kind: GDKind.StringLiteral, value: 'world' },
      },
      right: { kind: GDKind.StringLiteral, value: '!' },
    })
  })

  test('coerce non string literals', () => {
    expect('`hello ${42}`').toParseExpression({
      kind: GDKind.BinaryExpression,
      operator: '+',
      left: { kind: GDKind.StringLiteral, value: 'hello ' },
      right: {
        kind: GDKind.CallExpression,
        callee: { kind: GDKind.Identifier, name: 'str' },
        arguments: [{ kind: GDKind.NumericLiteral, value: 42 }],
      },
    })
  })
}
