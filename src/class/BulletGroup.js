import { times } from "../utils";
import Entity from "./Entity";

/**
 * Manages groups of bullets, spreads them over an arc.
 */
class BulletGroup extends Entity {
  constructor(x, y, canvas, amount, angle, pattern, pool) {
    super(x, y, canvas);
    this.angle = angle;
    this.amount = amount;

    this.bullets = [];
    this.bulletsIndex = 0;

    this.pattern = pattern;
    this.pool = pool;

    this.generateBullets();

    this.numOffscreen = 0;
  }

  generateBullets() {
    times(this.amount)((index) => {
      const bullet = this.pool.getFromPool();
      bullet.setPosition(this.x, this.y, this.angle);
      bullet.index = index;
      this.bullets.push(bullet);
    });
  }

  draw(p) {
    for (var i = this.bulletsIndex; i < this.bullets.length; i++) {
      const length = this.amount;
      const bullet = this.bullets[i];
      const index = bullet.index;

      if (!bullet.isOffscreen(p)) {
        let adjustedIndex;
        if (length % 2 === 0) {
          if (index < length / 2) {
            adjustedIndex = index - length / 2;
          } else {
            adjustedIndex = index - length / 2 + 1;
          }
        } else {
          // [0,1,2,3,4]
          // [-2, -1, 0, 1, 2]
          adjustedIndex = index - (length - 1) / 2;
        }

        const velocity = 10 / 100;
        const distance = p.deltaTime * velocity;
        const width = 60;
        const extraDegrees = (width / length) * adjustedIndex;

        const xDistance =
          distance * Math.sin((this.angle + extraDegrees) * (Math.PI / 180));
        const yDistance =
          distance * Math.cos((this.angle + extraDegrees) * (Math.PI / 180));

        const updatedX = bullet.x + xDistance;

        const updatedY = bullet.y + yDistance;

        // Fire and move according to the angle
        bullet.setPosition(updatedX, updatedY, this.angle + extraDegrees);

        bullet.draw(p);
      } else {
        // "Delete" the bullet from the bulletsList by putting it at the front of the array
        // and iterating the bulletsIndex
        let temp = this.bullets[this.bulletsIndex];
        this.bullets[this.bulletsIndex] = bullet;
        this.bullets[i] = temp;
        this.bulletsIndex += 1;

        this.pool.addToPool(bullet);
      }
    }
  }
}

export default BulletGroup;
