import p5 from "p5";

class P5Renderer {
  constructor(entity, container) {
    this.entity = entity;
    this.container = container;
    this.aspect = 640 / 480;
    this.color = "#e6e6fa";
  }

  dimensions = (p) => ({
    x: p.windowHeight / this.aspect,
    y: p.windowHeight - 32,
  });

  setup() {
    return (p) => () => {
      p.createCanvas(this.dimensions(p).x, this.dimensions(p).y);
      p.background(this.color);
    };
  }

  draw() {
    const entity = this.entity;
    return (p) => () => {
      p.clear();
      p.background(this.color);
      entity.draw(p);
    };
  }

  windowResized() {
    return (p) => () => {
      p.resizeCanvas(this.dimensions(p).x, this.dimensions(p).y);
    };
  }

  createSketch() {
    const createSetup = this.setup();
    const createDraw = this.draw();
    const windowResized = this.windowResized();

    return function (p) {
      const setup = createSetup(p);
      const draw = createDraw(p);
      p.setup = setup;
      p.draw = draw;
      p.windowResized = windowResized(p);
    };
  }

  render() {
    new p5(this.createSketch(), this.container);
  }
}

export default P5Renderer;
