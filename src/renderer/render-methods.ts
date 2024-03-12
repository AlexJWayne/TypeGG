import { GdFile, GdMethod, GdVarIdentifier } from '../gd-file'

export function renderMethods(gdFile: GdFile): string[] {
  return gdFile.methods.map(renderGdMethod);
}

export function renderGdMethod(gdMethod: GdMethod): string {
  const tokens = [
    `${gdMethod.name}(${gdMethod.parameters.map(renderParameter).join(", ")})`,
    "->",
    `${gdMethod.returnType}:`,
  ];

  return tokens.join(" ");
}

function renderParameter(value: GdVarIdentifier): string {
  return `${value.name}: ${value.type}`;
}
