/** Godot's print() */
declare function print(...strings: string[]): void

/** Equivalent to Godot's `@export` */
declare function exports(
  target: unknown,
  context: ClassFieldDecoratorContext,
): void

type float = number
type int = number
