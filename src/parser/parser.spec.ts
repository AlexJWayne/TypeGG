import { describe, expect, test } from 'vitest'

describe("processTsCode", () => {
  test("class name", () => {
    expect(`
      export default class Foo {}
    `).toCompileTo(`
      class_name Foo
    `);
  });

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

  describe("methods", () => {
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

    test("parameters", () => {
      expect(`
        export default class Foo {
          bar(isBaz: boolean, myStr: string) {}
        }
      `).toCompileTo(`
        class_name Foo
        func bar(isBaz: bool, myStr: String) -> void:
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
  });

  describe("statements", () => {
    test("if statement", () => {
      expect(`
        export default class Foo {
          bar(): void {
            if (true) {
              return;
            }
          }
        }
      `).toCompileTo(`
        class_name Foo
        func bar() -> void:
            if true:
                return
      `);
    });
  });
});
