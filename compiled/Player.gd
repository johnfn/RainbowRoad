extends KinematicBody2D
class_name Player
 



var speed: float = 200.0
var vy: float = 0.0

func _physics_process(_delta):
  var dx: float = 0.0
  var dy: float = 0.0
  
  if not self.is_on_floor():
    self.vy += 0.03
    
  
  else:
    self.vy = 0
  
  if Input.is_key_pressed(KEY_A):
    dx -= 1
  
  if Input.is_key_pressed(KEY_D):
    dx += 1
  
  if Input.is_key_pressed(KEY_W):
    dy -= 1
  
  if Input.is_key_pressed(KEY_S):
    dy += 1
  
  if Input.is_key_pressed(KEY_SPACE) and self.is_on_floor():
    self.vy = -1.3
  
  if not Input.is_key_pressed(KEY_SPACE):
    if self.vy < 0:
      self.vy = 0
  
  dy += self.vy
  
  var dPosition = Vector2(dx, dy) * self.speed
  
  self.move_and_slide(dPosition, Vector2(0, -1))