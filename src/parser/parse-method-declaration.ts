import { parseParameter } from './parse-parameter'
import { MethodDeclaration } from 'ts-morph'

import { getGdType } from '../util/get-gd-type'

export function parseMethodDeclaration(methodNode: MethodDeclaration): string {
  const methodName = methodNode.getName();
  const methodReturnType = getGdType(methodNode.getReturnType());

  const parameters = methodNode.getParameters().map(parseParameter).join(", ");

  const methodDeclaration = [
    methodNode.isStatic() && "static",
    "func",
    `${methodName}(${parameters})`,
    "->",
    `${methodReturnType}:`,
  ]
    .filter((token) => token)
    .join(" ");

  return `${methodDeclaration}\n`;
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

  test("empty method", () => {
    expect(`
      export default class Foo {
        bar() {}
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> void:
          pass
    `);
  });

  test("static method", () => {
    expect(`
      export default class Foo {
        static bar() {}
      }
    `).toCompileTo(`
      class_name Foo
      static func bar() -> void:
          pass
    `);
  });

  test("explicit return type", () => {
    expect(`
      export default class Foo {
        bar(): string {}
      }
    `).toCompileTo(`
      class_name Foo
      func bar() -> String:
          pass
    `);
  });

  test("implicit return type", () => {
    expect(`
      export default class Foo {
        bar() {
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
