export class Spacehip extends Sprite2D {
  @exports
  myProp: int = 123

  onFoo: Signal
  onBar: Signal<(bar: string, baz: int) => boolean>

  launch() {
    if (this.myProp) {
      print('launch')
      if (true) {
        print('hello moon')
        if (true) {
          this.fly()
        }
      }
    }
  }

  fly() {
    const celestialBody = 'moon'
    print(`fly me to the ${celestialBody}!
And Back`)

    this.onFoo.emit()
    this.onFoo.connect(this.launch)
  }

  protected _ready(): void {
    this.launch()
  }
}
