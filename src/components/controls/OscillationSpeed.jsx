import React, { useEffect, useState } from "react";
import { Slider } from "../Slider";

export function OscillationSpeed({ host }) {
  const [speed, setSpeed] = useState(1);

  const handleChange = (e) => {
    setSpeed(e.target.value);
    host.oscillationSpeed = e.target.value;
  };

  useEffect(() => {
    host.oscillationSpeed = speed;
  }, []);

  return (
    <Slider
      label="Oscillation Speed"
      handleChange={handleChange}
      value={speed}
      min={0}
      max={10}
    />
  );
}
