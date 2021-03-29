export class Block extends StaticBody2D {
  colors = [
    new Color(0, 0, 1),
    new Color(1, 0, 1),
    new Color(1, 0, 0),
    new Color(1, 1, 0),
    new Color(0, 1, 0),
    new Color(0, 1, 1),
  ]
  curr_beat: float = 0.0
  @exports
  beat_count: int = 1

  scale_curve(proximity: float) {
    proximity /= 1.5 // range of 3 beats since it's double sided
    return max(0.0, 1 - proximity)
  }

  _ready() {
    let sprite = this.get_child(1)
    sprite.modulate = this.colors[this.beat_count]
  }

  _physics_process(delta: float) {
    this.curr_beat += delta
    while (this.curr_beat > this.colors.size()) {
      this.curr_beat -= this.colors.size()
    }
    let beat_dist = abs(this.curr_beat - this.beat_count)
    if (beat_dist > this.colors.size() / 2) {
      beat_dist = this.colors.size() - beat_dist
    }
    let scale_factor = this.scale_curve(beat_dist)
    let shape = this.get_child(0)
    let sprite = this.get_child(1)
    this.scale = new Vector2(scale_factor, scale_factor)
    sprite.scale = new Vector2(scale_factor, scale_factor)
    shape.scale = new Vector2(scale_factor, scale_factor)
    shape.disabled = scale_factor === 0.0
  }
}
