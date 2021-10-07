import React from "react";
import { Slider } from "../Slider";

export function OscillationSpeed({ handleChange, oscillationSpeed }) {
  const onChange = (e) => {
    handleChange("oscillationSpeed", e.target.value);
  };

  return (
    <Slider
      label="Swing Speed"
      handleChange={onChange}
      value={oscillationSpeed}
      min={0}
      max={100}
    />
  );
}
