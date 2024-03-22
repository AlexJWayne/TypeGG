import { Node } from 'ts-morph'

import { line } from '../../util/line'

import { parseStatement } from './statement'

export function parseStatements(statements: Node[]): string {
  if (statements.length === 0) return line('pass')
  return statements.map(parseStatement).join('')
}
