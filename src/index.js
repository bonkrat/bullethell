import BulletHost from "./class/BulletHost";
import BulletPool from "./class/BulletPool";
import P5Renderer from "./class/P5Renderer";

const sinePattern = new Pattern((x, y, elapsed) => {
  const modifier = Math.sin(elapsed / 100);
  return {
    x: x + modifier,
    y: y + modifier,
  };
});

const spreadPattern = new Pattern((x, y, index) => {
  return {
    x: x + index / 10,
    y: y,
  };
});

// Pattern is a function that takes x and y
function Pattern(pattern) {
  this.pattern = pattern;
  this.updatePosition = function (x, y, elapsed, index, angle) {
    return pattern(x, y, elapsed, index, angle);
  };
}

const pool = new BulletPool();
let host = new BulletHost(window.innerWidth / 4, 25, 0, 1);
host.setPool(pool);

const numBullets = document.getElementById("numBullets");
numBullets.oninput = function () {
  const num = Number.parseInt(this.value);
  if (num) {
    host.numberBullets = num;
    document.getElementById("numBulletsValue").innerText = this.value;
  }
};

const showLine = document.getElementById("showLine");
showLine.addEventListener("change", (event) => {
  host.showLine = event.target.checked;
});

const spin = document.getElementById("spin");
spin.addEventListener("change", (event) => {
  host.spin = event.target.checked;
});

const oscillate = document.getElementById("oscillate");
oscillate.addEventListener("change", (event) => {
  host.oscillate = event.target.checked;
});

const emitBullets = document.getElementById("emitBullets");
emitBullets.addEventListener("change", (event) => {
  host.emitBullets = !event.target.checked;
});

const angle = document.getElementById("angle");
angle.oninput = function () {
  host.baseAngle = Number.parseInt(this.value);
  document.getElementById("angleValue").innerText = this.value;
};

const width = document.getElementById("width");
width.oninput = function () {
  host.width = Number.parseInt(this.value);
  document.getElementById("widthValue").innerText = this.value;
};

const renderer = new P5Renderer(host, "container");
renderer.render();
