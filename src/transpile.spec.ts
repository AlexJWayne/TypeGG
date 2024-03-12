import { describe } from 'vitest'

import { itTranspiles } from '../spec/it-transpiles'

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
      "instance method with no body",
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
  });
});
