import { ArrowFunction, SyntaxKind } from 'ts-morph'

import { indent } from '../../util/indent'
import { line } from '../../util/line'

import { parseStatements } from '../statements/statements'

import { parseExpression } from './expression'

export function parseArrowFunction(arrowFunction: ArrowFunction): string {
  const hasStatements = arrowFunction.getFirstChildByKind(SyntaxKind.Block)

  const body = hasStatements
    ? parseStatements(arrowFunction.getStatements()) // () => { ... }
    : line(`return ${parseExpression(arrowFunction.getBody())}`) // () => ...

  return [
    line('func():'), //
    indent(body),
  ].join('')
}
