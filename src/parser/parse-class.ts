import { ClassDeclaration } from 'ts-morph'

import { line } from '../util/line'

export function parseClass(classNode: ClassDeclaration): string {
  const className = classNode.getName();
  return line(`class_name ${className}`);
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
