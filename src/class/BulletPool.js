import Bullet from "./Bullet";
import Pool from "./Pool";

class BulletPool extends Pool {
  constructor() {
    super(() => new Bullet(0, 0, 24, 0), 100);
  }
}

export default BulletPool;
