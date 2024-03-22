import { Project } from 'ts-morph'
import { expect } from 'vitest'

import { GDKind } from '../grammar/kind'
import { GDNode } from '../grammar/nodesUnion'
import { parseTsFile } from '../parser/parseTsFile'
import { parseStatement } from '../parser/statements/statement'

expect.extend({
  /**
   * Compiles the typescript to GD script and re-indents the expected value
   * to remove indentation that all lines share. Also removes all empty lines
   * from recieved and expected. This should help expected scripts to look nice
   * in the test file.
   */
  toCompileTo(receivedTs: string, expectedGd: string) {
    const receivedGd = parseTsFile(receivedTs)
    const receivedFinal = removeEmptyLines(receivedGd.trim())

    const expectedFinal = removeEmptyLines(trimFromEachLineStart(expectedGd))

    return {
      pass: expectedFinal === receivedFinal,
      message: () => `expected${this.isNot ? ' not' : ''} to compile to`,
      expected: expectedFinal,
      actual: receivedFinal,
    }
  },

  toEqualGdScript(received: string, expected: string) {
    const receivedFinal = removeEmptyLines(received.trim())
    const expectedFinal = removeEmptyLines(trimFromEachLineStart(expected))

    return {
      pass: expectedFinal === receivedFinal,
      message: () => `expected${this.isNot ? ' not' : ''} to equal gd script`,
      expected: expectedFinal,
      actual: receivedFinal,
    }
  },

  toParseStatements(received: string, expected: GDNode[]) {
    const statements = getStatements(received)

    return {
      pass: JSON.stringify(statements) === JSON.stringify(expected),
      message: () => `expected${this.isNot ? ' not' : ''} to parse to`,
      expected,
      actual: statements,
    }
  },

  toParseExpression(received: string, expected: GDNode) {
    const statements = getStatements(received)

    const isOneStatement = statements.length === 1
    if (!isOneStatement) {
      return {
        pass: false,
        message: () =>
          `expected 1 expression statement, ${statements.length} statements were parsed.`,
      }
    }

    const statement = statements[0]
    const isExpressionStatement = statement.kind === GDKind.ExpressionStatement
    if (!isExpressionStatement) {
      return {
        pass: false,
        message: () =>
          `expected an expression statement, got ${GDKind[statement.kind]}.`,
      }
    }

    return {
      pass: JSON.stringify(statement.expression) === JSON.stringify(expected),
      message: () =>
        `expected${this.isNot ? ' not' : ''} to parse to expression`,
    }
  },
})

function getStatements(tsSource: string): GDNode[] {
  const project = new Project({ useInMemoryFileSystem: true })
  const file = project.createSourceFile('test.ts', tsSource)
  return file.getStatements().map(parseStatement)
}

function removeEmptyLines(gdScript: string): string {
  return gdScript
    .replace(/^#.*$/m, '') // Remove leading comment
    .split('\n')
    .filter((line) => line.trim() !== '')
    .join('\n')
}

function trimFromEachLineStart(gdScript: string): string {
  const lines = gdScript.split('\n')
  const minPrefixSpaces = getMinPrefixSpaces(lines)
  const reindentedLines = lines.map((line) => line.slice(minPrefixSpaces))
  return reindentedLines.join('\n').trim()
}

function getMinPrefixSpaces(lines: string[]): number {
  const whitespacePrefixCounts = lines.map((line) => {
    if (line.trim() === '') return Infinity
    const whitespace = line.match(/^(\s*)/)?.[1]
    return whitespace?.length ?? 0
  })

  return Math.min(...whitespacePrefixCounts)
}
