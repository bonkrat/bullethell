import BulletGroup from "./BulletGroup";
import Pool from "./Pool";

class BulletGroupPool extends Pool {
  constructor(bulletPool) {
    super();
    this.type = "group";
    this.setFactoryFunction(
      () => new BulletGroup(0, 0, {}, 1, 0, () => {}, bulletPool)
    );
  }
}

export default BulletGroupPool;
