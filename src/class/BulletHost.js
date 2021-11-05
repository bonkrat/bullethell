import Entity from "./Entity";
import Attribute from "./Attribute";
import AngleAttribute from "./AngleAttribute";

class BulletHost extends Entity {
  constructor(x, y, angle, numberBullets) {
    super(x, y);

    this.bulletGroups = [];
    this.bulletGroupsIndex = 0;

    this.renderedGroups = [];
    this.angle = angle;
    this.baseAngle = angle;
    this.spreadWidth = new AngleAttribute(45);
    this.timestamp = 0;
    this.elapsed = 0;
    this.numberBullets = new Attribute(numberBullets);
    this.speed = 1;
    this.oscillationSpeed = 1;
    this.fireFrequency = new Attribute(5);
    this.showLine = false;
    this.emitBullets = true;
    // Width (in degrees) of oscillation
    this.width = 45;
    // Host will rotateif true, otherwise shoot straight.
    this.rotate = false;
    // If true it will osillate back and forth as it spins
    this.oscillate = false;
    this.pool;
  }

  setPool(pool) {
    this.pool = pool;
  }

  createBulletGroup(frameCount) {
    const bullets = this.pool.getFromPool();
    bullets.x = this.x;
    bullets.y = this.y;
    bullets.amount = this.numberBullets.oscillateValue(frameCount);
    bullets.angle = this.angle;
    bullets.spreadWidth = this.spreadWidth.oscillateValue(frameCount);
    bullets.generateBullets();

    this.bulletGroups.push(bullets);
  }

  calculateAngle(frameCount) {
    if (this.rotate) {
      // 10 Mod to make it reasonable.
      this.baseAngle += this.speed / 10;
      if (this.baseAngle >= 360) {
        this.baseAngle = 360 - this.baseAngle;
      }
    }
    this.angle = this.baseAngle;

    // Oscillates between min angle and max angle (max = min + width)
    // 1000 is a modifier to make the oscillation more reasonable
    if (this.oscillate) {
      this.angle =
        this.baseAngle +
        Math.sin(frameCount / (1000 / this.oscillationSpeed)) *
          (this.width / 2);
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
      const frequency = 1000 / this.fireFrequency.oscillateValue(p.frameCount);

      if (!this.bulletGroups.length) {
        this.timestamp += p.deltaTime;
        this.createBulletGroup(p.frameCount);
      } else if (this.timestamp >= frequency) {
        this.createBulletGroup(p.frameCount);
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
