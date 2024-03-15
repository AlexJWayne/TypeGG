import { parseClassProperty } from './parse-class-property'
import { parseMethod } from './parse-method'
import { ClassDeclaration } from 'ts-morph'

import { line } from '../util/line'

export function parseClass(classNode: ClassDeclaration): string {
  const className = classNode.getName();

  let output: string[] = [line(`class_name ${className}`)];

  for (const property of classNode.getProperties()) {
    output.push(parseClassProperty(property));
  }

  for (const method of classNode.getMethods()) {
    output.push(parseMethod(method));
  }

  return output.join("");
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
