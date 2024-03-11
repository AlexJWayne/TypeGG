import { GdFile } from "../gd-file";

export function renderGdClassName(gdFile: GdFile): string {
  return `class_name ${gdFile.className}`;
}
