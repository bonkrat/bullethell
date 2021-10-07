import React, { useEffect, useState } from "react";
import { Slider } from "../Slider";

export function OscillationWidth({ host }) {
  const [width, setWidth] = useState(150);

  const handleChange = (e) => {
    setWidth(e.target.value);
    host.width = width;
  };

  useEffect(() => {
    host.width = width;
  }, []);

  return (
    <Slider
      label="Oscilation Width"
      handleChange={handleChange}
      value={width}
      min={0}
      max={360}
    />
  );
}
