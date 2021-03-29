export class Block extends StaticBody2D {
    colors = [Color(0, 0, 1), Color(1, 0, 1), Color(1, 0, 0), Color(1, 1, 0), Color(0, 1, 0), Color(0, 1, 1)]
    beat: int = 1
    curr_beat: float = 0.0

    scale_curve(proximity: float) {
        proximity /= 1.5 // range of 3 beats since it's double sided
        return max(0, 1 - proximity)
    }

    _ready() {
        let sprite = this.get_child(1)
        sprite.modulate = this.colors[this.beat]
    }

    _physics_process(delta: float) { 
        this.curr_beat += delta
        while (this.curr_beat > this.colors.size()) {
            this.curr_beat -= this.colors.size()
        }
        let beat_dist = abs(this.curr_beat - this.beat)
        if (beat_dist > this.colors.size() / 2) {
            beat_dist = this.colors.size() - beat_dist
        }
        let scale_factor = this.scale_curve(beat_dist)
        let shape = this.get_child(0)
        let sprite = this.get_child(1)
        this.scale = Vector2(scale_factor, scale_factor)
        sprite.scale = Vector2(scale_factor, scale_factor)
        shape.scale = Vector2(scale_factor, scale_factor)
    }
}