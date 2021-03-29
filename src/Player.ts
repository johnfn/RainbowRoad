// For next time:
// * set up a local autobuilder to HTML5 so we can use liveshare

export class Player extends KinematicBody2D {
  @exports
  speed: float = 200.0
  vy: float = 0.0

  init_location: Vector2

  constructor() {
    super()

    this.init_location = this.position
  }

  _process() {
    if (this.position.y > 1000) {
      this.position = this.init_location
      this.vy = 0
    }
  }

  _physics_process(delta: float) {
    let dx = 0.0
    let dy = 0.0

    if (!this.is_on_floor()) {
      this.vy += 0.03
    } else {
      this.vy = 0
    }

    if (Input.is_key_pressed(KeyList.KEY_A)) {
      dx -= 1
    }

    if (Input.is_key_pressed(KeyList.KEY_D)) {
      dx += 1
    }

    if (Input.is_key_pressed(KeyList.KEY_W)) {
      dy -= 1
    }

    if (Input.is_key_pressed(KeyList.KEY_S)) {
      dy += 1
    }

    if (Input.is_key_pressed(KeyList.KEY_SPACE) && this.is_on_floor()) {
      this.vy = -1.3
    }

    if (!Input.is_key_pressed(KeyList.KEY_SPACE)) {
      if (this.vy < 0) {
        this.vy = 0
      }
    }

    dy += this.vy

    const dPosition = new Vector2(dx, dy).mul(this.speed)

    this.move_and_slide(dPosition, new Vector2(0, -1))
  }

  enter_door() {
    let current_scene = this.get_tree().current_scene.name

    if (current_scene === "Level1") {
      this.get_tree().change_scene("res://Level2.tscn")
    } else if (current_scene === "Level2") {
      this.get_tree().change_scene("res://Level3.tscn")
    } else if (current_scene === "Level3") {
      this.get_tree().change_scene("res://YouWin.tscn")
    } else {
      print("What the...")
    }
  }
}
