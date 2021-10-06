class Pool {
  constructor() {
    this.pool = [];
    this.poolIndex = 0;
    this.factoryFunc;
  }

  setFactoryFunction(fn) {
    this.factoryFunc = fn;
  }

  poolLength() {
    return this.pool.length - this.poolIndex;
  }

  addToPool(entity) {
    this.pool.push(entity);
  }

  getFromPool() {
    if (!this.poolLength()) {
      this.addToPool(this.factoryFunc());
    }

    const bullet = this.pool[this.poolIndex];
    this.poolIndex += 1;
    return bullet;
  }
}

export default Pool;
