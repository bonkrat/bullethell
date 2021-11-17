/**
 * Entites are any canvas element with a position.
 */
class Entity {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  isOffscreen(p) {
    // TODO Fix this calculation to be more accurate.
    return this.x > p.width || this.y > p.height;
  }

  draw() {
    throw new Error("Must have draw method.");
  }
}

export default Entity;
