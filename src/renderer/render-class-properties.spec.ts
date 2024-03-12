import { renderClassProperties } from './render-class-properties'
import { describe, expect, it } from 'vitest'

describe("renderGdProperties", () => {
  it("renders zero properties", () => {
    expect(
      renderClassProperties({
        className: "Foo",
        properties: [],
      }),
    ).toEqual([]);
  });

  it("renders a property", () => {
    expect(
      renderClassProperties({
        className: "Foo",
        properties: [
          {
            name: "bar",
            type: "String",
          },
        ],
      }),
    ).toEqual(["var bar: String"]);
  });

  it("renders many properties", () => {
    expect(
      renderClassProperties({
        className: "Foo",
        properties: [
          { name: "bar", type: "String" },
          { name: "baz", type: "int" },
          { name: "bing", type: "bool" },
        ],
      }),
    ).toEqual([
      "var bar: String", //
      "var baz: int",
      "var bing: bool",
    ]);
  });

  it("renders a property with an initial value", () => {
    expect(
      renderClassProperties({
        className: "Foo",
        properties: [
          {
            name: "bar",
            type: "String",
            intial: '"abc"',
          },
        ],
      }),
    ).toEqual(['var bar: String = "abc"']);
  });
});
