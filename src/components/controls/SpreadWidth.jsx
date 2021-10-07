import React, { useState } from "react";
import { Slider } from "../Slider";

export function SpreadWidth({ handleChange, spreadWidth, disabled }) {
  const onChange = (e) => {
    handleChange("spreadWidth", e.target.value);
  };

  return (
    <Slider
      label="Spread Width"
      handleChange={onChange}
      value={spreadWidth}
      min={0}
      max={360}
      disabled={disabled}
    />
  );
}
