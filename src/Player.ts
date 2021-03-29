// For next time:
// * set up a local autobuilder to HTML5 so we can use liveshare

export class Player extends KinematicBody2D {
  @exports
  speed: float = 200.0;
  vy: float = 0.0;
  curr_beat: float = 0.0;

  init_location: Vector2;

  constructor() {
    super();

    this.init_location = this.position;
  }

  _process() {
    if (this.position.y > 1000) {
      this.position = this.init_location;
      this.vy = 0;
    }
  }

  _physics_process(delta: float) {
    this.set_eye_color(delta);

    let dx = 0.0;
    let dy = 0.0;

    if (!this.is_on_floor()) {
      this.vy += 0.03;
    } else {
      this.vy = 0;
    }

    if (Input.is_key_pressed(KeyList.KEY_A)) {
      dx -= 1;
    }

    if (Input.is_key_pressed(KeyList.KEY_D)) {
      dx += 1;
    }

    if (Input.is_key_pressed(KeyList.KEY_W)) {
      dy -= 1;
    }

    if (Input.is_key_pressed(KeyList.KEY_S)) {
      dy += 1;
    }

    if (Input.is_key_pressed(KeyList.KEY_SPACE) && this.is_on_floor()) {
      this.vy = -1.3;
    }

    if (!Input.is_key_pressed(KeyList.KEY_SPACE)) {
      if (this.vy < 0) {
        this.vy = 0;
      }
    }

    dy += this.vy;

    const dPosition = new Vector2(dx, dy).mul(this.speed);

    this.move_and_slide(dPosition, new Vector2(0, -1));
  }

  set_eye_color(delta: float) {
    this.curr_beat += delta;
    while (this.curr_beat >= ColorSet.colors.size()) {
      this.curr_beat -= ColorSet.colors.size();
    }
    let color1i = floor(this.curr_beat);
    let color_mix_perc = this.curr_beat - color1i;
    let color2i = color1i + 1;
    if (color2i >= ColorSet.colors.size()) {
      color2i -= ColorSet.colors.size();
    }
    let color1 = ColorSet.colors[color1i];
    let color2 = ColorSet.colors[color2i];

    let h = color1.h * (1 - color_mix_perc) + color2.h * color_mix_perc;
    let s = color1.s * (1 - color_mix_perc) + color2.s * color_mix_perc;
    let v = color1.v * (1 - color_mix_perc) + color2.v * color_mix_perc;
    let eye_color = Color.from_hsv(h, s, v);
    this.get_node("Glasses").modulate = eye_color;
  }

  enter_door() {
    let current_scene = this.get_tree().current_scene.name;

    if (current_scene === "Level1") {
      this.get_tree().change_scene("res://Level2.tscn");
    } else if (current_scene === "Level2") {
      this.get_tree().change_scene("res://Level3.tscn");
    } else if (current_scene === "Level3") {
      this.get_tree().change_scene("res://YouWin.tscn");
    } else {
      print("What the...");
    }
  }
}
