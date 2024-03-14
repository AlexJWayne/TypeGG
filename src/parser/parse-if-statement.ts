import { parseStatements } from './parse-statements'
import { IfStatement } from 'ts-morph'

import { indent } from '../util/indent'

export function parseIfStatement(statement: IfStatement): string[] {
  const condition = statement.getExpression().getText();
  const statementsNodes =
    statement.getThenStatement().getChildSyntaxList()?.getChildren() ?? [];

  const statements = parseStatements(statementsNodes);

  return [
    `if ${condition}:`, //
    ...indent(statements),
  ];
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

  test("empty", () => {
    expect(`
      export default class Foo {
        bar(): void {
          if (true) {}
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          if true:
              pass
    `);
  });

  test("return", () => {
    expect(`
      export default class Foo {
        bar(): string {
          if (true) {
            return "bar";
          }
          return "baz";
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> String:
          if true:
              return "bar"
          return "baz"
    `);
  });
}
