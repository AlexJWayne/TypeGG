import { line } from '../util/line'

export function renderMethod({
  name,
  parameters,
  static: isStatic,
  returnType,
}: {
  name: string
  parameters: {
    name: string
    type?: string | null
  }[]
  static?: boolean
  returnType?: string | null
}): string {
  const parametersString = parameters
    .map(({ name, type }) => (type ? `${name}: ${type}` : name))
    .join(', ')

  return line(
    '\n',
    isStatic && 'static ',
    'func ',
    `${name}(${parametersString})`,
    returnType && ` -> ${returnType}`,
    ':',
  )
}
