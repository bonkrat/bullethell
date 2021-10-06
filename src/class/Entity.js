/**
 * Entites are any canvas element with a position.
 */
class Entity {
  // constructor(x, y, canvas) {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  // TODO fix this!
  isOffscreen(p) {
        // if(this.x - (this.r / 2) < 0 || this.x + (this.r / 2) > width || this.y - (this.r / 2) < 0 || this.y + (this.r / 2) > height) { return false; }
    return this.x > p.width || this.y > p.height;
  }

  draw() {
    throw new Error("Must have draw method.");
  }
}

export default Entity;
