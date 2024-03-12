import { describe } from 'vitest'

import { itTranspiles } from '../../spec/it-transpiles'

describe("processTsCode", () => {
  itTranspiles(
    "class name",
    /* ts */ `
      export default class Foo {}
    `,
    `
      class_name Foo
    `,
  );

  itTranspiles(
    "instance property",
    /* ts */ `
      export default class Foo {
        bar: string = "baz";
      }
    `,
    `
      class_name Foo
      var bar: String = "baz"
    `,
  );

  describe("methods", () => {
    itTranspiles(
      "empty method",
      /* ts */ `
        export default class Foo {
          bar() {}
        }
      `,
      `
        class_name Foo
        func bar() -> void:
            pass
      `,
    );

    itTranspiles(
      "parameters",
      /* ts */ `
        export default class Foo {
          bar(isBaz: boolean, myStr: string) {}
        }
      `,
      `
        class_name Foo
        func bar(isBaz: bool, myStr: String) -> void:
            pass
      `,
    );

    itTranspiles(
      "explicit return type",
      /* ts */ `
        export default class Foo {
          bar(): string {}
        }
      `,
      `
        class_name Foo
        func bar() -> String:
            pass
      `,
    );

    itTranspiles(
      "implicit return type",
      /* ts */ `
        export default class Foo {
          bar() {
            return "baz";
          }
        }
      `,
      `
        class_name Foo
        func bar() -> String:
            return "baz"
      `,
    );
  });
});
