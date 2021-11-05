import Entity from "./Entity";

class Bullet extends Entity {
  constructor(x, y, r, angle) {
    super(x, y);
    this.r = r;
    this.angle = angle;
    this.index = 0;
  }

  setPosition(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
  }

  isOffscreen(p) {
    if (
      this.x - this.r / 2 < 0 ||
      this.x + this.r / 2 > p.width ||
      this.y - this.r / 2 < 0 ||
      this.y + this.r / 2 > p.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  draw(p) {
    p.push();
    p.translate(this.x, this.y);
    p.rotate(this.angle * (-Math.PI / 180));
    p.fill("white");
    p.stroke("magenta");
    p.strokeWeight(10);
    p.ellipse(0, 0, this.r, this.r);
    p.translate(0, 0);
    p.pop();
    return this;
  }
}

export default Bullet;
