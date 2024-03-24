export class Spacehip extends Sprite2D {
  @exports
  myProp: int = 123

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
  }

  protected _ready(): void {
    this.launch()
  }
}
