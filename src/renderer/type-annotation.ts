export function renderTypeAnnotation(gdType: string | null) {
  return gdType ? `: ${gdType}` : ''
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('no type', () => {
    expect(renderTypeAnnotation(null)).toBe('')
  })

  test('with type', () => {
    expect(renderTypeAnnotation('int')).toBe(': int')
  })
}
