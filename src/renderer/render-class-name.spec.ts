import { renderGdClassName } from './render-class-name'
import { describe, expect, it } from 'vitest'

import { GdFile } from '../gd-file'

describe("renderClassName", () => {
  it("renders a class name", () => {
    const actual = renderGdClassName({ className: "Foo" } as GdFile);
    expect(actual).toEqual("class_name Foo");
  });
});
