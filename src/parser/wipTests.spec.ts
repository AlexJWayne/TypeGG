import { expect, it } from 'vitest'

it('passes', () => {
  expect(1).toBe(1)
})

it('instance method call', () => {
  expect(`
    export default class Foo {
      foo() {}
      bar() {
        this.foo()
      }
    }
  `).toCompileTo(`
    class_name Foo
    func foo() -> void:
        pass
    func bar() -> void:
        self.foo()
  `)
})
