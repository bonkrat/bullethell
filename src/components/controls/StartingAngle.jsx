import React, { useEffect, useState } from "react";
import { Slider } from "../Slider";

export function StartingAngle({ host }) {
  const [angle, setAngle] = useState(0);

  const handleChange = (e) => {
    const val = Number.parseInt(e.target.value);
    setAngle(val);
    host.baseAngle = val;
  };

  useEffect(() => {
    host.baseAngle = angle;
  }, []);

  return (
    <Slider
      label="Starting Angle"
      handleChange={handleChange}
      value={angle}
      min={0}
      max={360}
    />
  );
}
