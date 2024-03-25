# Autogenerated by TypeGG

class_name Spacehip
extends Sprite2D
@export var myProp: int = 123
signal onFoo
signal onBar(bar: String, baz: int)

func launch() -> void:
    if self.myProp:
        print("launch")
        if true:
            print("hello moon")
            if true:
                self.fly()

func fly() -> void:
    var celestialBody: String = "moon"
    print("fly me to the " + str(celestialBody) + "!\nAnd Back")
    self.onFoo.emit()
    self.onFoo.connect(self.launch)

func _ready() -> void:
    self.launch()
