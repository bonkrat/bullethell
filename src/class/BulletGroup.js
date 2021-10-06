import { times } from "../utils";
import Bullet from "./Bullet";
import Entity from "./Entity";

/**
 * Manages groups of bullets.
 */
class BulletGroup extends Entity {
  constructor(x, y, canvas, amount, angle, pattern) {
    super(x, y, canvas);
    this.angle = angle;
    this.amount = amount;
    this.bullets = [];
    this.pattern = pattern;

    this.generateBullets();
  }

  generateBullets() {
    times(this.amount)(() => {
      this.bullets.push(new Bullet(this.x, this.y, 8, this.angle));
    });
  }

  draw(p) {
    this.bullets.forEach((bullet, index) => {
      if (!bullet.isOffscreen(p)) {
        let adjustedIndex;
        if (this.bullets.length % 2 === 0) {
          if (index < this.bullets.length / 2) {
            adjustedIndex = index - this.bullets.length / 2;
          } else {
            adjustedIndex = index - this.bullets.length / 2 + 1;
          }
        } else {
          // [0,1,2,3,4]
          // [-2, -1, 0, 1, 2]
          adjustedIndex = index - (this.bullets.length - 1) / 2;
        }

        const velocity = 10 / 100;
        const distance = p.deltaTime * velocity;
        const width = 60;
        const extraDegrees = (width / this.bullets.length) * adjustedIndex;

        const xDistance =
          distance * Math.sin((this.angle + extraDegrees) * (Math.PI / 180));
        const yDistance =
          distance * Math.cos((this.angle + extraDegrees) * (Math.PI / 180));

        const updatedX = bullet.x + xDistance;

        const updatedY = bullet.y + yDistance;

        // Fire and move according to the angle
        bullet.setPosition(updatedX, updatedY);
        bullet.angle = this.angle + extraDegrees;

        bullet.draw(p);
      }
    });
  }
}

export default BulletGroup;
