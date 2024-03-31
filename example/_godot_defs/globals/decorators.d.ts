/** Adds the `@export` decorator to a class property. */
declare function exports(
  target: unknown,
  context: ClassFieldDecoratorContext,
): void

/** Adds the `@onready` decorator to a class property. */
declare function onready(
  target: unknown,
  context: ClassFieldDecoratorContext,
): void
