import BulletGroup from "./BulletGroup";
import Pool from "./Pool";

class BulletGroupPool extends Pool {
  constructor(bulletPool) {
    super(() => new BulletGroup(0, 0, {}, 1, 0, bulletPool), 50);
  }
}

export default BulletGroupPool;
