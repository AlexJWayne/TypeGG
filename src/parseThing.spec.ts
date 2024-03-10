import { parseThing } from "./parseThing";
import { describe, expect, it } from "vitest";

describe("parseThing", () => {
  it("should parse a thing", () => {
    expect(
      parseThing(`
        export default class Foo {}
      `),
    ).toMatchGd(`
      class_name Foo
    `);
  });
});
