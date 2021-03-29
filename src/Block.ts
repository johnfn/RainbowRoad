export class Block extends StaticBody2D {
    beat: float;
    x: float;
    y: float;
    width: float;
    height: float;

    constructor(beat: float, x: float, y: float, width: float, height: float) {
        this.beat = beat;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render() {
        
    }
}