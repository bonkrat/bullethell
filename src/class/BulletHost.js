import Entity from "./Entity";
import BulletGroup from "./BulletGroup";

function Pattern(pattern) {
  this.pattern = pattern;
  this.updatePosition = function (x, y, index, angle, deltaTime) {
    return pattern(x, y, index, angle, deltaTime);
  };
}

// const spreadPattern = new Pattern((x, y, index, angle) => {
//   const spread = 90;
//   return {
//     x: x + index / 10 + Math.sin(angle * (Math.PI / 180)),
//     y: y + Math.cos((angle * Math.PI) / 180),
//   };
// });

const spreadPattern = new Pattern((x, y, index, angle, deltaTime) => {
  // Fix this as "speed" later
  const velocity = 10 / 100;
  const distance = deltaTime * velocity;
  const spread = 90;

  if (index === 1) {
    const test = Math.tan(18 * index * (Math.PI / 180)) * y;
    // debugger;
  }
  return {
    // x: x + index / 10 + Math.sin(angle * (Math.PI / 180)),
    x:
      x +
      distance * Math.sin(angle * (Math.PI / 180)) +
      Math.tan(18 * index * (Math.PI / 180)) * distance,
    y:
      y +
      distance * Math.cos(angle * (Math.PI / 180)) +
      Math.tan(18 * index * (Math.PI / 180)) * distance,
    // y: y + velocity + Math.cos(angle * (Math.PI / 180)),
  };
});

class BulletHost extends Entity {
  constructor(x, y, angle, numberBullets) {
    super(x, y);

    this.bulletGroups = [];
    this.bulletGroupsIndex = 0;

    this.renderedGroups = [];
    this.angle = angle;
    this.baseAngle = angle;
    this.timestamp = 0;
    this.elapsed = 0;
    this.numberBullets = numberBullets;
    this.speed = 0.5;
    this.showLine = false;
    this.emitBullets = true;
    // Width (in degrees) of oscillation
    this.width = 45;
    // Host will spin if true, otherwise shoot straight.
    this.spin = true;
    // If true it will osillate back and forth as it spins
    this.oscillate = true;
    this.pool;
  }

  setPool(pool) {
    this.pool = pool;
  }

  createBulletGroup() {
    const bullets = this.pool.getFromPool();
    bullets.x = this.x;
    bullets.y = this.y;
    bullets.amount = this.numberBullets;
    bullets.angle = this.angle;
    bullets.generateBullets();

    this.bulletGroups.push(bullets);
  }

  calculateAngle(frameCount) {
    const min = 270 + 45 + 45 / 2;

    // Oscillates between min angle and max angle (max = min + width)
    // 100 is a modifier to make the oscillation more reasonable
    if (this.spin && this.oscillate) {
      this.angle =
        this.baseAngle +
        min +
        (Math.sin(frameCount / (100 / this.speed)) + 1) * (this.width / 2);
    } else if (this.spin) {
      this.angle += this.speed;
    } else {
      this.angle = this.baseAngle;
    }
  }

  drawLine(p) {
    p.push();
    p.translate(this.x, this.y);
    p.fill(p.color("blue"));
    p.rotate(this.angle * -(Math.PI / 180));
    p.rect(0, 0, 2, 50);
    p.translate(0, 0);
    p.pop();
  }

  draw(p) {
    this.calculateAngle(p.frameCount);

    if (this.emitBullets) {
      const frequency = (1 / this.speed) * 100;

      if (!this.bulletGroups.length) {
        this.timestamp += p.deltaTime;
        this.createBulletGroup();
      } else if (this.timestamp >= frequency) {
        this.createBulletGroup();
        this.timestamp = 0;
      } else {
        this.timestamp += p.deltaTime;
      }

      for (var i = this.bulletGroupsIndex; i < this.bulletGroups.length; i++) {
        const group = this.bulletGroups[i];
        if (group.bulletsLength()) {
          group.draw(p);
        } else {
          let temp = this.bulletGroups[this.bulletGroupsIndex];
          this.bulletGroups[this.bulletGroupsIndex] = group;
          this.bulletGroups[i] = temp;
          this.bulletGroupsIndex += 1;

          this.pool.addToPool(group);
        }
      }
    }

    if (this.showLine) this.drawLine(p);
  }
}

export default BulletHost;
