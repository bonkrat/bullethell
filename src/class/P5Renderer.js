import p5 from "p5";

class P5Renderer {
  constructor(entity, container) {
    this.entity = entity;
    this.container = container;
  }

  setup() {
    return (p) => () => {
      p.createCanvas(p.windowWidth / 2, p.windowHeight);
      p.background(220);
    };
  }

  draw() {
    const entity = this.entity;
    return (p) => () => {
      p.background(220);
      entity.draw(p);
    };
  }

  windowResized() {
    return (p) => () => {
      p.resizeCanvas(p.windowWidth / 2, p.windowHeight);
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
