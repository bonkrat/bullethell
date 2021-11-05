import React from "react";
import { Slider } from "../Slider";

export function FireFrequencyOscillationSpeed({
  handleChange,
  fireFrequencyOscillationSpeed,
  disabled,
}) {
  const onChange = (e) => {
    const val = Number.parseInt(e.target.value);
    handleChange("fireFrequency.oscillateSpeed", val);
  };

  return (
    <Slider
      label="Bullet Frequency Oscillation Speed"
      handleChange={onChange}
      value={fireFrequencyOscillationSpeed}
      min={1}
      max={100}
      disabled={disabled}
    />
  );
}
