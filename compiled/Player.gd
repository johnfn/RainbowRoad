extends KinematicBody2D
class_name Player
 



var speed: int = 200

func _ready(): 
  
  
  print("Hello world")

func _physics_process(_delta):
  var dx: int = 0
  var dy: int = 0
  
  if Input.is_key_pressed(KEY_A):
    dx -= 1
  
  if Input.is_key_pressed(KEY_D):
    dx += 1
  
  if Input.is_key_pressed(KEY_W):
    dy -= 1
  
  if Input.is_key_pressed(KEY_S):
    dy += 1
  
  var dPosition = Vector2(dx, dy) * self.speed
  
  self.move_and_slide(dPosition, Vector2(0, -1))