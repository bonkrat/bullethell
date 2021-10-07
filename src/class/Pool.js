class Pool {
  constructor(factoryFn, initialSize = 0) {
    this.pool = [];
    this.poolIndex = 0;
    this.factoryFunc = factoryFn;

    for (var i = 0; i < initialSize; i++) {
      this.pool.push(factoryFn());
    }
  }

  poolLength() {
    return this.pool.length - this.poolIndex;
  }

  addToPool() {
    this.pool.push(this.factoryFunc());
  }

  getFromPool() {
    if (!this.poolLength()) {
      this.addToPool();
    }

    if (this.type !== "group") {
      let el = document.querySelector("#pool");
      if (!el) {
        el = document.createElement("div");
        el.id = "pool";
        document.querySelector("body").prepend(el);
      }

      el = document.querySelector("#pool");
      el.innerText = "Bullet Pool: " + this.poolLength();
    } else {
      let el = document.querySelector("#grouppool");
      if (!el) {
        el = document.createElement("div");
        el.id = "grouppool";
        document.querySelector("body").prepend(el);
      }

      el = document.querySelector("#grouppool");
      el.innerText = "Group Pool: " + this.poolLength();
    }

    const bullet = this.pool[this.poolIndex];
    this.poolIndex += 1;
    return bullet;
  }
}

export default Pool;
