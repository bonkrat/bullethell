import React from "react";
import { Slider } from "../Slider";

export function RotationSpeed({ handleChange, speed }) {
  const onChange = (e) => {
    const val = Number.parseInt(e.target.value);
    handleChange("speed", val);
  };

  return (
    <Slider
      label="Rotation Speed"
      handleChange={onChange}
      value={speed}
      min={0}
      max={100}
    />
  );
}
