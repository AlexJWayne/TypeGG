import { ReturnStatement } from 'ts-morph'

export function parseReturnStatement(
  returnStatement: ReturnStatement,
): string[] {
  const expression = returnStatement.getExpression()?.getText();

  const returnLine = ["return", expression ? `${expression}` : ""]
    .filter((token) => token)
    .join(" ");

  return [returnLine];
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

  test("empty", () => {
    expect(`
      export default class Foo {
        bar(): void {
          return;
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          return
    `);
  });

  test("value", () => {
    expect(`
      export default class Foo {
        bar(): string {
          return "baz";
        }
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> String:
          return "baz"
    `);
  });
}
