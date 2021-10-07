import React, { useEffect, useState } from "react";
import { Slider } from "../Slider";

export function RotationSpeed({ host }) {
  const [speed, setSpeed] = useState(1);

  const handleChange = (e) => {
    const val = Number.parseInt(e.target.value);
    setSpeed(val);
    host.speed = val;
  };

  useEffect(() => {
    host.speed = speed;
  }, []);

  return (
    <Slider
      label="Rotation Speed"
      handleChange={handleChange}
      value={speed}
      min={0}
      max={25}
    />
  );
}
