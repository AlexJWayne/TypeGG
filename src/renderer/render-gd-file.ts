import { GdFile } from "../gd-file";

import { renderGdClassName } from "./render-class-name";
import { renderGdProperties } from "./render-class-properties";

export function renderGdFile(gdFile: GdFile): string {
  console.log("rendering gd file", gdFile);

  const lines = [
    renderGdClassName(gdFile), //
    renderGdProperties(gdFile),
  ].flat();

  return lines.join("\n");
}
