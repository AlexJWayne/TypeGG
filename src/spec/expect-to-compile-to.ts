import { Project } from 'ts-morph'
import { expect } from 'vitest'

import { GDKind } from '../grammar/kind'
import type { GDNode } from '../grammar/nodes-union'
import { parseClass } from '../parser/classes/class'
import { getTsProject, parseTsFile } from '../parser/parse-ts-file'
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
      pass: this.equals(receivedFinal, expectedFinal),
      message: () => `expected${this.isNot ? ' not' : ''} to compile to`,
      expected: expectedFinal,
      actual: receivedFinal,
    }
  },

  /**
   * Compares an expected GDScript strings to a received GDScripts string.
   * Reindents the expected GDScript to make tests look nicer.
   */
  toEqualGdScript(received: string, expected: string) {
    const receivedFinal = removeEmptyLines(received.trim())
    const expectedFinal = removeEmptyLines(trimFromEachLineStart(expected))

    return {
      pass: this.equals(receivedFinal, expectedFinal),
      message: () => `expected${this.isNot ? ' not' : ''} to equal gd script`,
      expected: expectedFinal,
      actual: receivedFinal,
    }
  },

  /** Expect the TS code to parse to a specific GDClass AST node. */
  toParseClass(received: string, expected: GDNode) {
    const { file } = getTsProject('test.ts', received)
    const fileClass = file.getClasses()[0]
    if (!fileClass) {
      return {
        pass: false,
        message: () => 'expected to parse a class, but none was found',
      }
    }

    const receivedClass = parseClass(fileClass)

    return {
      pass: this.equals(receivedClass, expected),
      message: () => `expected${this.isNot ? ' not' : ''} to parse to class`,
      expected,
      actual: receivedClass,
    }
  },

  /**
   * Expect the TS Code to declare a class that has a method with the given name,
   * which has the expected statements.
   */
  toParseMethodStatements(
    received: string,
    expectedMethodName: string,
    expected: GDNode[],
  ) {
    const { file } = getTsProject('test.ts', received)
    const fileClass = file.getClasses()[0]
    if (!fileClass) {
      return {
        pass: false,
        message: () => 'expected to parse a class, but none was found',
      }
    }

    const receivedClass = parseClass(fileClass)
    const receivedMethod = receivedClass.methods.find(
      (node) => node.name === expectedMethodName,
    )
    if (!receivedMethod) {
      return {
        pass: false,
        message: () => `expected to find a method named ${expectedMethodName}`,
      }
    }

    return {
      pass: this.equals(receivedMethod.statements, expected),
      message: () =>
        `expected${this.isNot ? ' not' : ''} to parse to method body`,
      expected,
      actual: receivedMethod.statements,
    }
  },

  /** Expect the TS code to parse as the expected statements. */
  toParseStatements(received: string, expected: GDNode[]) {
    const statements = getStatements(received)

    return {
      pass: this.equals(statements, expected),
      message: () => `expected${this.isNot ? ' not' : ''} to parse to`,
      expected,
      actual: statements,
    }
  },

  /**
   * Expect the TS code to parse as a single GDExpressionStatement, which contains the
   * expected expression.
   */
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
      pass: this.equals(statement.expression, expected),
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
