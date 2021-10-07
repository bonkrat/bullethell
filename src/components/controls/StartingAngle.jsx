import React from "react";
import { Slider } from "../Slider";

export function StartingAngle({ handleChange, baseAngle, disabled }) {
  const onChange = (e) => {
    const val = Number.parseInt(e.target.value);
    handleChange("baseAngle", val);
  };

  return (
    <Slider
      label="Starting Angle"
      handleChange={onChange}
      value={Math.floor(baseAngle)}
      min={0}
      max={360}
      disabled={disabled}
    />
  );
}
