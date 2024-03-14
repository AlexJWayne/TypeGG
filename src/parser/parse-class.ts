import { ClassDeclaration } from 'ts-morph'

export function parseClass(classNode: ClassDeclaration): string {
  const className = classNode.getName();
  return `class_name ${className}\n`;
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

  test("class name", () => {
    expect(`
      export default class Foo {}
    `).toCompileTo(`
      class_name Foo
    `);
  });
}
