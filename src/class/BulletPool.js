import Bullet from "./Bullet";
import Pool from "./Pool";

class BulletPool extends Pool {
  constructor() {
    super();
    this.setFactoryFunction(() => new Bullet(0, 0, 8, 0));
  }
}

export default BulletPool;
