import { renderGdClassName } from './render-class-name'
import { renderClassProperties } from './render-class-properties'
import { renderMethods } from './render-methods'

import { GdFile } from '../gd-file'

export function renderGdFile(gdFile: GdFile): string {
  console.log("rendering gd file", gdFile);

  console.log(renderMethods(gdFile));

  const lines = [
    renderGdClassName(gdFile), //
    renderClassProperties(gdFile),
    renderMethods(gdFile),
  ].flat();

  return lines.join("\n");
}
