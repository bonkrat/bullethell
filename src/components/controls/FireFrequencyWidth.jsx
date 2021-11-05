import React from "react";
import { Slider } from "../Slider";

export function FireFrequencyWidth({
  handleChange,
  fireFrequencyWidth,
  disabled,
}) {
  const onChange = (e) => {
    const val = Number.parseInt(e.target.value);
    handleChange("fireFrequency.oscillateAmount", val);
  };

  return (
    <Slider
      label="Bullet Frequency Oscillation"
      handleChange={onChange}
      value={fireFrequencyWidth}
      min={0}
      max={25}
      disabled={disabled}
    />
  );
}
