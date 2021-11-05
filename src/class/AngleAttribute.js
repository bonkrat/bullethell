import Attribute from "./Attribute";

class AngleAttribute extends Attribute {
  constructor(initialValue) {
    super(initialValue);
  }

  oscillateValue(frameCount) {
    const val = super.oscillateValue(frameCount);

    if (val >= 360) {
      return 360 - val;
    } else if (val < -360) {
      return 360 + val;
    } else {
      return val;
    }
  }
}

export default AngleAttribute;
