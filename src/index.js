import BulletGroupPool from "./class/BulletGroupPool";
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

const bulletPool = new BulletPool();
const groupPool = new BulletGroupPool(bulletPool);

let hosts = [
  new BulletHost(100, 100, 0, 1),
  new BulletHost(300, 100, 0, 1),
  new BulletHost(500, 100, 0, 1),
];

hosts.forEach((host) => {
  host.setPool(groupPool);

  const numBullets = document.getElementById("numBullets");
  numBullets.addEventListener("input", function () {
    const num = Number.parseInt(this.value);
    if (num) {
      host.numberBullets = num;
      document.getElementById("numBulletsValue").innerText = this.value;
    }
  });

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
  angle.addEventListener("input", function () {
    host.baseAngle = Number.parseInt(this.value);
    document.getElementById("angleValue").innerText = this.value;
  });

  const width = document.getElementById("width");
  width.addEventListener("input", function () {
    host.width = Number.parseInt(this.value);
    document.getElementById("widthValue").innerText = this.value;
  });
});

const renderer = new P5Renderer(hosts, "container");
renderer.render();
