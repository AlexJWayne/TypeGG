export function renderTypeAnnotation(gdType: string | null) {
  return gdType ? `: ${gdType}` : ''
}
