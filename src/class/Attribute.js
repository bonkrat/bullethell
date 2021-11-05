class Attribute {
  constructor(initialValue) {
    this.value = initialValue;
    this.initialValue = initialValue;
    this.oscillateAmount = 0;
    this.oscillateSpeed = 0;
  }

  oscillateValue(frameCount) {
    if (this.oscillateSpeed && this.oscillateAmount) {
      return (
        this.value +
        this.value *
          this.oscillateAmount *
          0.01 *
          Math.sin(frameCount / (1000 / this.oscillateSpeed))
      );
    } else {
      return this.value;
    }
  }
}

export default Attribute;
