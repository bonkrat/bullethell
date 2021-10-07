import React, { useEffect, useState } from "react";
import { Slider } from "../Slider";

export function BulletFrequency({ host }) {
  const [freq, setFreq] = useState(5);

  const handleChange = (e) => {
    setFreq(e.target.value);
    host.fireFrequency = freq;
  };

  useEffect(() => {
    host.fireFrequency = freq;
  }, []);

  return (
    <Slider
      label="Fire Frequency (bullets / second)"
      handleChange={handleChange}
      value={freq}
      min={0}
      max={25}
    />
  );
}
