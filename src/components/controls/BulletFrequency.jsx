import React, { useState } from "react";
import { Slider } from "../Slider";

export function BulletFrequency({ handleChange, fireFrequency }) {
  const onChange = (e) => {
    const val = Number.parseInt(e.target.value);
    handleChange("fireFrequency", val);
  };

  return (
    <Slider
      label="Fire Frequency (bullets / second)"
      handleChange={onChange}
      value={fireFrequency}
      min={0}
      max={25}
    />
  );
}
