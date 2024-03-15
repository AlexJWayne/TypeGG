import { PropertyDeclaration } from 'ts-morph'

import { getGdType } from '../util/get-gd-type'
import { line } from '../util/line'

export function parseClassProperty(propertyNode: PropertyDeclaration): string {
  const propertyName = propertyNode.getName();
  const propertyType = getGdType(propertyNode.getType());
  const propertyInitial = propertyNode.getInitializer()?.getText();

  let output = `var ${propertyName}: ${propertyType}`;
  if (propertyInitial) {
    output += ` = ${propertyInitial}`;
  }
  return line(output);
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

  test("instance property", () => {
    expect(`
      export default class Foo {
        bar: string = "baz";
      }
    `).toCompileTo(`
      class_name Foo
      var bar: String = "baz"
    `);
  });
}
