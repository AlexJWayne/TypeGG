import { parseStatements } from './parse-statements'
import { IfStatement } from 'ts-morph'

import { indent } from '../util/indent'

export function parseIfStatement(statement: IfStatement): string {
  const condition = statement.getExpression().getText();
  const thenNodes =
    statement.getThenStatement().getChildSyntaxList()?.getChildren() ?? [];

  const elseStatement = statement.getElseStatement();
  const elseNodes = elseStatement?.getChildSyntaxList()?.getChildren() ?? [];

  const ifLines = [
    `if ${condition}:\n`, //
    indent(parseStatements(thenNodes)),
  ];
  console.log(ifLines);

  const elseLines = elseStatement
    ? [
        "else:\n", //
        indent(parseStatements(elseNodes)),
      ]
    : [];
  console.log(elseLines);

  console.log([...ifLines, ...elseLines].join(""));

  return [...ifLines, ...elseLines].join("");
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

  test("nested", () => {
    expect(`
      export default class Foo {
        bar(): void {
          if (true) {
            if (false) {
              return;
            }
          }
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          if true:
              if false:
                  return
    `);
  });

  test("else", () => {
    expect(`
      export default class Foo {
        foo(): string {
          if (true) {
            return "foo";
          } else {
            return "bar";
          }
        }
      }
    `).toCompileTo(`
      class_name Foo
      func foo() -> String:
          if true:
              return "foo"
          else:
              return "bar"
    `);
  });
}
