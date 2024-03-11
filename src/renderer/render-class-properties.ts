import { GdFile, GdProperty } from "../gd-file";

export function renderGdProperties(gdFile: GdFile): string[] {
  return gdFile.properties.map(renderGdProperty);
}

function renderGdProperty(property: GdProperty): string {
  const tokens = ["var", `${property.name}:`, property.type];
  if (property.intial) tokens.push("=", property.intial);
  return tokens.join(" ");
}
