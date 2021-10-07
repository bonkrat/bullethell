import React from "react";
import { Slider } from "../Slider";

export function BulletAmount({ handleChange, numberBullets }) {
  const onChange = (e) => {
    const val = Number.parseInt(e.target.value);
    handleChange("numberBullets", val);
  };

  return (
    <Slider
      label="Number of Bullets"
      handleChange={onChange}
      value={numberBullets}
      min={0}
      max={25}
    />
  );
}
