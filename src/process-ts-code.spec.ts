import { processTsCode } from "./process-ts-code";
import { describe, expect, it } from "vitest";

describe("processTsCode", () => {
  it("should use the class name", () => {
    const actual = processTsCode(`
      export default class Foo {
        bar() {
          return 42;
        }
      }
    `);
    expect(actual).toMatchGd(`
      class_name Foo
    `);
  });

  it("should create an instance property", () => {
    const actual = processTsCode(`
      export default class Foo {
        bar: string = "baz";
      }
    `);
    expect(actual).toMatchGd(`
      class_name Foo
      var bar: String = "baz"
    `);
  });
});
