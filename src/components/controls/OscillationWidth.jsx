import React from "react";
import { Slider } from "../Slider";

export function OscillationWidth({ handleChange, width }) {
  const onChange = (e) => {
    handleChange("width", Number.parseInt(e.target.value));
  };

  return (
    <Slider
      label="Swing Width"
      handleChange={onChange}
      value={width}
      min={0}
      max={360}
    />
  );
}
